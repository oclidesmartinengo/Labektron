/* ============================================================================
   DIMENSIONADOR SOLAR — energia-solar.html
   ============================================================================
   LOS VALORES QUE SE EDITAN ESTÁN TODOS EN EL BLOQUE "CONFIG" DE ABAJO.
   El resto del archivo es la lógica: no hace falta tocarlo.
   ============================================================================ */
(function () {
  'use strict';

  // ==========================================================================
  // CONFIG — acá se editan los valores de negocio
  // ==========================================================================

  // El WhatsApp sale de datos.js (EMPRESA.whatsapp), así que se cambia en un solo lugar.
  const WHATSAPP_NUMBER = (typeof EMPRESA !== 'undefined' && EMPRESA.whatsapp) ? EMPRESA.whatsapp : '';

  // Horas de sol pico promedio anual (kWh generados por kWp instalado, por día).
  // Ya incluye las pérdidas típicas del sistema (temperatura, inversor, cableado, suciedad).
  const PROVINCIAS = {
    salta:     { label: 'Salta',              hsp: 6.0 },
    jujuy:     { label: 'Jujuy',              hsp: 6.0 },
    tucuman:   { label: 'Tucumán',            hsp: 5.4 },
    catamarca: { label: 'Catamarca',          hsp: 5.7 },
    santiago:  { label: 'Santiago del Estero', hsp: 5.6 },
  };

  // Costo instalado (mano de obra + materiales) por kWp, según el tramo de potencia.
  // Cada tramo es [hasta cuántos kWp, USD por kWp].
  const TRAMOS = [
    { hasta: 2,        usdKwp: 1250 },
    { hasta: 10,       usdKwp: 1000 },
    { hasta: 30,       usdKwp: 900  },
    { hasta: Infinity, usdKwp: 800  },
  ];

  function precioPorKwp(kwp) {
    return (TRAMOS.find(t => kwp <= t.hasta) || TRAMOS[TRAMOS.length - 1]).usdKwp;
  }

  // Los tramos son escalones, así que justo en el borde un sistema MÁS CHICO sale
  // MÁS CARO que uno más grande (ej: 2 kWp = USD 2.500 pero 2,05 kWp = USD 2.050).
  // Con esto activado nunca se cotiza más caro que un sistema mayor: se toma el
  // menor de los precios posibles. Poné false para usar los tramos tal cual.
  const SUAVIZAR_TRAMOS = true;

  function costoEquipoFV(kwp) {
    const directo = kwp * precioPorKwp(kwp);
    if (!SUAVIZAR_TRAMOS) return directo;
    // precio de entrar al tramo siguiente, para cada tramo por encima del actual
    const alternativas = TRAMOS
      .filter(t => t.hasta !== Infinity && t.hasta >= kwp)
      .map(t => t.hasta * precioPorKwp(t.hasta + 0.001));
    return Math.min(directo, ...alternativas);
  }

  const PANEL_W = 550;                 // potencia del panel de referencia, en W
  const BATERIA_USD_POR_KWH = 1600 / 5; // USD 1600 cada 5 kWh de batería
  const DOD_LITIO = 0.85;              // profundidad de descarga de la batería de litio

  // Recargo sobre el subtotal de equipo (paneles + batería), por complejidad de instalación.
  const RECARGO_MODO = { ongrid: 1.00, hibrido: 1.20, offgrid: 1.15 };
  // Viáticos base para instalaciones off-grid (zonas alejadas / rurales).
  const VIATICOS_OFFGRID = 200;
  // Margen extra de generación para cubrir la carga de batería y los días nublados.
  // Off-grid no tiene red de respaldo, así que se sobredimensiona un poco más.
  const SOBREDIMENSION = { hibrido: 1.15, offgrid: 1.25 };

  // Electrodomésticos: w = potencia (W), h = horas de uso efectivo por día, cant = cantidad.
  // horasFijas: true  -> las horas no se editan (quedan como plantilla).
  const APPLIANCES = [
    { id:'heladera',    nombre:'Heladera',                        nota:'horas efectivas de compresor', w:150,  h:8,   cant:1, horasFijas:true },
    { id:'freezer',     nombre:'Freezer',                         nota:'horas efectivas de compresor', w:200,  h:8,   cant:0, horasFijas:true },
    { id:'tv',          nombre:'TV / monitor',                    nota:'',                             w:100,  h:4,   cant:1 },
    { id:'router',      nombre:'Router / wifi',                   nota:'',                             w:10,   h:24,  cant:1, horasFijas:true },
    { id:'iluminacion', nombre:'Iluminación LED',                 nota:'por lámpara',                  w:10,   h:5,   cant:5 },
    { id:'bomba',       nombre:'Bomba de agua',                   nota:'',                             w:750,  h:1,   cant:1 },
    { id:'carga',       nombre:'Carga celular / notebook',        nota:'',                             w:30,   h:4,   cant:2 },
    { id:'microondas',  nombre:'Microondas',                      nota:'',                             w:1200, h:0.3, cant:1 },
    { id:'lavarropas',  nombre:'Lavarropas',                      nota:'',                             w:500,  h:1,   cant:0 },
    { id:'aire',        nombre:'Aire acondicionado',              nota:'',                             w:1200, h:4,   cant:0 },
    { id:'termotanque', nombre:'Termotanque eléctrico',           nota:'',                             w:1500, h:2,   cant:0, horasFijas:true },
    { id:'herramientas',nombre:'Herramientas / equipo de taller', nota:'',                             w:800,  h:1,   cant:0 },
  ];

  const MODO_LABEL = {
    ongrid:  'On-grid (conectado a red)',
    hibrido: 'Híbrido',
    offgrid: 'Off-grid (aislado)',
  };

  // ==========================================================================
  // ESTADO Y NAVEGACIÓN
  // ==========================================================================

  const $ = (id) => document.getElementById(id);
  if (!$('progressTrack')) return;   // esta página no tiene la calculadora

  const state = {
    modo: null,
    provincia: null,
    consumoMensual: null,
    appliances: APPLIANCES.map(a => ({ ...a })),
    autonomiaHoras: null,
  };

  let stepIndex = 0;

  function getSteps() {
    return (state.modo === 'hibrido' || state.modo === 'offgrid')
      ? ['modo', 'provincia', 'consumo-hibrido', 'autonomia', 'resultado']
      : ['modo', 'provincia', 'consumo-ongrid', 'resultado'];
  }

  const fmt = (n, dec = 0) =>
    Number(n).toLocaleString('es-AR', { minimumFractionDigits: dec, maximumFractionDigits: dec });

  function renderProgress() {
    const track = $('progressTrack');
    track.innerHTML = '';
    getSteps().forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'progress-dot' + (i < stepIndex ? ' done' : i === stepIndex ? ' current' : '');
      track.appendChild(dot);
    });
  }

  function consumoDiarioHibrido() {
    return state.appliances.reduce((sum, a) => sum + (a.w * a.h * a.cant) / 1000, 0);
  }

  function pasoValido() {
    switch (getSteps()[stepIndex]) {
      case 'modo':            return !!state.modo;
      case 'provincia':       return !!state.provincia;
      case 'consumo-ongrid':  return state.consumoMensual > 0;
      case 'consumo-hibrido': return consumoDiarioHibrido() > 0;
      case 'autonomia':       return state.autonomiaHoras > 0;
      default:                return true;
    }
  }

  function refrescarBotonSiguiente() {
    $('btnNext').disabled = !pasoValido();
  }

  function showStep() {
    const steps = getSteps();
    stepIndex = Math.min(stepIndex, steps.length - 1);
    document.querySelectorAll('.calc .step').forEach(s => s.classList.remove('active'));
    document.querySelector(`.calc .step[data-step="${steps[stepIndex]}"]`).classList.add('active');
    renderProgress();
    $('btnBack').disabled = stepIndex === 0;
    const ultimo = stepIndex === steps.length - 1;
    $('btnNext').style.display = ultimo ? 'none' : 'inline-block';
    refrescarBotonSiguiente();
    if (ultimo) renderizarResultado();
  }

  $('btnNext').addEventListener('click', () => {
    if (!pasoValido()) return;
    stepIndex++;
    showStep();
    $('calculadora').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  $('btnBack').addEventListener('click', () => {
    stepIndex = Math.max(0, stepIndex - 1);
    showStep();
  });

  $('restartLink').addEventListener('click', () => {
    state.modo = null;
    state.provincia = null;
    state.consumoMensual = null;
    state.autonomiaHoras = null;
    state.appliances = APPLIANCES.map(a => ({ ...a }));
    $('inputConsumoMensual').value = '';
    $('inputAutonomia').value = '';
    document.querySelectorAll('.calc .choice-card.selected, .calc .preset-chip.selected')
      .forEach(c => c.classList.remove('selected'));
    renderApplianceTable();
    stepIndex = 0;
    showStep();
  });

  // --- Tarjetas de selección (modo y provincia) ---
  document.querySelectorAll('.calc [data-group]').forEach(grupo => {
    const key = grupo.dataset.group;
    grupo.querySelectorAll('.choice-card').forEach(card => {
      card.addEventListener('click', () => {
        grupo.querySelectorAll('.choice-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        state[key] = card.dataset.value;
        refrescarBotonSiguiente();
      });
    });
  });

  $('inputConsumoMensual').addEventListener('input', (e) => {
    state.consumoMensual = Number(e.target.value);
    refrescarBotonSiguiente();
  });

  $('inputAutonomia').addEventListener('input', (e) => {
    state.autonomiaHoras = Number(e.target.value);
    document.querySelectorAll('#autonomiaPresets .preset-chip').forEach(b => b.classList.remove('selected'));
    refrescarBotonSiguiente();
  });

  document.querySelectorAll('#autonomiaPresets .preset-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      $('inputAutonomia').value = chip.dataset.value;
      state.autonomiaHoras = Number(chip.dataset.value);
      document.querySelectorAll('#autonomiaPresets .preset-chip').forEach(b => b.classList.remove('selected'));
      chip.classList.add('selected');
      refrescarBotonSiguiente();
    });
  });

  // ==========================================================================
  // TABLA DE ELECTRODOMÉSTICOS
  // ==========================================================================

  function renderApplianceTable() {
    const body = $('applianceTableBody');
    body.innerHTML = '';
    state.appliances.forEach((a, i) => {
      const tr = document.createElement('tr');
      tr.className = 'appliance-row';
      const celdaHoras = a.horasFijas
        ? `<span class="fixed-value">${fmt(a.h, a.h % 1 === 0 ? 0 : 1)} h</span>`
        : `<input type="number" min="0" step="0.1" value="${a.h}" data-field="h" data-idx="${i}" aria-label="Horas por día de ${a.nombre}">`;
      tr.innerHTML = `
        <td class="a-name">${a.nombre}${a.nota ? `<small>${a.nota}</small>` : ''}</td>
        <td class="col-w opt"><span class="fixed-value">${a.w} W</span></td>
        <td class="col-cant"><input type="number" min="0" value="${a.cant}" data-field="cant" data-idx="${i}" aria-label="Cantidad de ${a.nombre}"></td>
        <td class="col-h">${celdaHoras}</td>`;
      body.appendChild(tr);
    });
    body.querySelectorAll('input').forEach(inp => {
      inp.addEventListener('input', (e) => {
        const idx = Number(e.target.dataset.idx);
        state.appliances[idx][e.target.dataset.field] = Math.max(0, Number(e.target.value) || 0);
        actualizarTotalDiario();
      });
    });
    actualizarTotalDiario();
  }

  function actualizarTotalDiario() {
    $('dailyTotalKwh').textContent = fmt(consumoDiarioHibrido(), 2);
    refrescarBotonSiguiente();
  }

  // ==========================================================================
  // CÁLCULO
  // ==========================================================================

  function calcular() {
    const hsp = PROVINCIAS[state.provincia].hsp;
    let consumoDiario, kwp, capacidadBateria = 0, costoBateria = 0;

    if (state.modo === 'ongrid') {
      consumoDiario = state.consumoMensual / 30;
      kwp = consumoDiario / hsp;
    } else {
      consumoDiario = consumoDiarioHibrido();
      kwp = (consumoDiario * SOBREDIMENSION[state.modo]) / hsp;
      capacidadBateria = (consumoDiario * (state.autonomiaHoras / 24)) / DOD_LITIO;
      costoBateria = capacidadBateria * BATERIA_USD_POR_KWH;
    }

    const costoPV = costoEquipoFV(kwp);
    const costoBase = costoPV + costoBateria;
    const recargoMonto = costoBase * (RECARGO_MODO[state.modo] - 1);
    const viaticos = state.modo === 'offgrid' ? VIATICOS_OFFGRID : 0;
    const costoTotal = costoBase + recargoMonto + viaticos;
    const numPaneles = Math.max(1, Math.ceil((kwp * 1000) / PANEL_W));

    return { consumoDiario, kwp, capacidadBateria, costoPV, costoBateria,
             costoBase, recargoMonto, viaticos, costoTotal, numPaneles };
  }

  function renderizarResultado() {
    const r = calcular();
    const conBateria = state.modo === 'hibrido' || state.modo === 'offgrid';
    const provinciaLabel = PROVINCIAS[state.provincia].label;
    const modoLabel = MODO_LABEL[state.modo];
    const fila = (etq, val, clase = '') =>
      `<div class="spec-row ${clase}"><span class="spec-label">${etq}</span><span class="spec-value">${val}</span></div>`;

    let html =
      fila('Potencia FV recomendada', `${fmt(r.kwp, 2)} kWp`, 'hero-row') +
      fila('Modo', modoLabel) +
      fila('Ubicación', provinciaLabel) +
      fila('Consumo diario estimado', `${fmt(r.consumoDiario, 2)} kWh/día`) +
      fila('Cantidad aprox. de paneles', `${r.numPaneles} × ${PANEL_W} W`);

    if (conBateria) {
      html += fila('Autonomía configurada', `${state.autonomiaHoras} h`) +
              fila('Capacidad de batería', `${fmt(r.capacidadBateria, 1)} kWh`);
    }

    if (state.modo !== 'ongrid') {
      const pct = Math.round((RECARGO_MODO[state.modo] - 1) * 100);
      const etqRecargo = state.modo === 'hibrido' ? 'híbrida' : 'off-grid';
      html += fila('Subtotal equipo (paneles + batería)', `USD ${fmt(r.costoBase)}`) +
              fila(`Recargo instalación ${etqRecargo} (${pct}%)`, `USD ${fmt(r.recargoMonto)}`);
      if (state.modo === 'offgrid') html += fila('Viáticos', `USD ${fmt(r.viaticos)}`);
    }

    html += fila('Inversión estimada', `USD ${fmt(r.costoTotal)}`, 'total') +
            fila('Rango orientativo', `USD ${fmt(r.costoTotal * 0.9)} – ${fmt(r.costoTotal * 1.1)}`);

    $('specSheet').innerHTML = html;

    const mensaje =
      'Hola! Hice la estimación solar en la web de Labektron.\n' +
      `Modo: ${modoLabel}\n` +
      `Ubicación: ${provinciaLabel}\n` +
      `Consumo diario: ${fmt(r.consumoDiario, 2)} kWh/día\n` +
      `Potencia estimada: ${fmt(r.kwp, 2)} kWp` +
      (conBateria ? `\nBatería estimada: ${fmt(r.capacidadBateria, 1)} kWh (${state.autonomiaHoras} h de autonomía)` : '') +
      `\nInversión estimada: USD ${fmt(r.costoTotal)}\n` +
      'Quisiera una cotización formal.';

    $('whatsappCta').href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
  }

  // ==========================================================================
  renderApplianceTable();
  showStep();
})();
