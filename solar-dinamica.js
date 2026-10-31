/* ============================================================================
   ENERGÍA SOLAR — esquema interactivo y simulador de un día
   ============================================================================
   Dos piezas que comparten el modo elegido (on-grid / híbrido / off-grid):

   1. El esquema: dibuja por dónde circula la energía y qué pasa si se corta
      la red, que es la diferencia real entre los tres sistemas.
   2. Un día de sol: muestra hora por hora cuánto se genera, cuánto se consume
      y de dónde sale la diferencia.

   LOS NÚMEROS DE EJEMPLO SE EDITAN EN EL BLOQUE "CONFIG" DE ABAJO.
   ============================================================================ */
(function () {
  'use strict';
  const $ = (id) => document.getElementById(id);
  if (!$('esq')) return;

  // ==========================================================================
  // CONFIG — la casa de ejemplo que se usa en el gráfico del día
  // ==========================================================================
  const EJEMPLO = {
    kwp: 5,              // potencia instalada de la casa de ejemplo
    bateriaKwh: 10,      // batería del ejemplo (híbrido y off-grid)
    // Consumo típico de una casa, en kW para cada hora (0 a 23).
    // Dos picos: la mañana antes de salir y la noche cuando vuelve todo el mundo.
    consumo: [0.30,0.28,0.26,0.26,0.28,0.35,0.70,1.10,0.95,0.60,0.55,0.60,
              0.80,0.75,0.60,0.55,0.60,0.85,1.40,1.80,1.70,1.30,0.80,0.45],
  };

  // Curva de generación: campana centrada al mediodía solar.
  // Devuelve kW generados a esa hora para la potencia instalada del ejemplo.
  function generacion(h) {
    if (h < 7 || h > 19) return 0;
    const x = (h - 13) / 3.4;
    return +(EJEMPLO.kwp * 0.86 * Math.exp(-x * x)).toFixed(2);
  }

  const MODOS = {
    ongrid: {
      nombre: 'On-grid',
      normal: 'De día los paneles alimentan tu casa y lo que sobra se inyecta a la red, ' +
              'que te lo descuenta de la factura. De noche consumís de la red, como siempre.',
      corte: 'El inversor se apaga solo. Es por seguridad: si siguiera generando, ' +
             'metería 220 V en los cables que está arreglando el personal de la distribuidora. ' +
             'Te quedás sin luz igual que tu vecino, aunque sea mediodía y haya sol.',
      ficha: [
        ['Para quién', 'Casas y comercios con red estable que quieren bajar la factura'],
        ['Qué lleva', 'Paneles, inversor de red y medidor bidireccional'],
        ['Si se corta la luz', 'Se apaga, igual que la red'],
        ['Inversión', 'La más baja de las tres'],
      ],
    },
    hibrido: {
      nombre: 'Híbrido',
      normal: 'Primero consumís lo que generás. Lo que sobra carga la batería, y recién ' +
              'cuando la batería está llena va a la red. De noche tirás de la batería ' +
              'hasta que se agota, y ahí entra la red.',
      corte: 'Seguís con luz. El inversor se desconecta de la red pero sigue alimentando ' +
             'los circuitos que elegiste, con los paneles y la batería. Es la diferencia ' +
             'que se paga cuando no podés darte el lujo de quedarte sin energía.',
      ficha: [
        ['Para quién', 'Zonas con cortes frecuentes, o equipos que no pueden parar'],
        ['Qué lleva', 'Paneles, inversor híbrido, batería y conexión a red'],
        ['Si se corta la luz', 'Los circuitos esenciales siguen funcionando'],
        ['Inversión', 'Intermedia: la batería es lo que más pesa'],
      ],
    },
    offgrid: {
      nombre: 'Off-grid',
      normal: 'No hay red: todo sale de los paneles y de la batería. El dimensionamiento ' +
              'tiene que cubrir también los días nublados, porque no hay de dónde más sacar.',
      corte: 'Acá no hay corte posible: el sistema nunca estuvo conectado a la red. ' +
             'Lo que sí puede pasar es quedarse sin batería después de varios días ' +
             'sin sol, y por eso se sobredimensiona.',
      ficha: [
        ['Para quién', 'Campos, fincas, puestos y obras sin acceso a la red'],
        ['Qué lleva', 'Paneles, inversor cargador y un banco de baterías grande'],
        ['Si se corta la luz', 'No aplica: no depende de nadie'],
        ['Inversión', 'La más alta, por el tamaño del banco de baterías'],
      ],
    },
  };

  let modo = 'ongrid';
  let corte = false;

  // ==========================================================================
  // ESQUEMA
  // ==========================================================================
  const svg = $('esq');

  function pintarEsquema() {
    svg.classList.remove('m-ongrid', 'm-hibrido', 'm-offgrid');
    svg.classList.add('m-' + modo);
    // Off-grid no tiene red, así que el corte no significa nada ahí
    const hayCorte = corte && modo !== 'offgrid';
    svg.classList.toggle('cortado', hayCorte);
    // On-grid con corte: se apaga todo
    svg.classList.toggle('apagado', hayCorte && modo === 'ongrid');

    const m = MODOS[modo];
    $('esq-texto').textContent = (corte ? m.corte : m.normal);
    $('esq-texto').className = corte ? (modo === 'ongrid' ? 'alerta' : 'bien') : '';

    const inter = $('interruptor');
    inter.classList.toggle('inactivo', modo === 'offgrid');
    $('corte').disabled = false;

    $('modo-ficha').innerHTML = m.ficha.map(([etq, val]) =>
      `<div class="modo-dato"><div class="etq">${etq}</div><div class="val">${val}</div></div>`).join('');
  }

  document.querySelectorAll('.modo-tab').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('.modo-tab').forEach(x => x.classList.remove('activo'));
      b.classList.add('activo');
      modo = b.dataset.modo;
      pintarEsquema();
      pintarDia();
    });
  });
  $('corte').addEventListener('change', (e) => { corte = e.target.checked; pintarEsquema(); pintarDia(); });

  // ==========================================================================
  // UN DÍA DE SOL
  // ==========================================================================
  const W = 1000, H = 310, M = { arriba: 28, abajo: 50, izq: 46, der: 20 };
  const anchoUtil = W - M.izq - M.der, altoUtil = H - M.arriba - M.abajo;
  const maxKw = 5;

  const px = (h) => M.izq + (h / 23) * anchoUtil;
  const py = (kw) => M.arriba + altoUtil - (Math.min(kw, maxKw) / maxKw) * altoUtil;

  // Curva suave que pasa por los puntos
  function curva(vals) {
    return vals.map((v, i) => `${i ? 'L' : 'M'}${px(i).toFixed(1)} ${py(v).toFixed(1)}`).join(' ');
  }
  function area(vals) {
    return curva(vals) + ` L${px(23).toFixed(1)} ${py(0)} L${px(0).toFixed(1)} ${py(0)} Z`;
  }

  const gen = Array.from({ length: 24 }, (_, h) => generacion(h));
  const con = EJEMPLO.consumo;

  // Simula la batería hora por hora (solo híbrido y off-grid)
  function simularBateria() {
    const cap = EJEMPLO.bateriaKwh;
    let soc = cap * 0.5;                 // arranca a la mitad
    const serie = [];
    for (let h = 0; h < 24; h++) {
      const dif = gen[h] - con[h];
      if (dif > 0) soc = Math.min(cap, soc + dif);
      else soc = Math.max(0, soc + dif);
      serie.push(soc / cap);             // 0..1
    }
    return serie;
  }
  const bat = simularBateria();

  function dibujarFondo() {
    let rejilla = '', horas = '';
    for (let kw = 0; kw <= maxKw; kw++) {
      const y = py(kw);
      rejilla += `<line x1="${M.izq}" y1="${y}" x2="${W - M.der}" y2="${y}" class="dia-grid"/>` +
                 `<text x="${M.izq - 10}" y="${y + 4}" class="dia-ejetxt" text-anchor="end">${kw}</text>`;
    }
    rejilla += `<text x="${M.izq + 4}" y="${M.arriba - 12}" class="dia-ejetxt dia-ejetxt--u" text-anchor="start">kW</text>`;
    for (let h = 0; h <= 23; h += 3) {
      horas += `<text x="${px(h)}" y="${H - 26}" class="dia-ejetxt" text-anchor="middle">${String(h).padStart(2, '0')}h</text>`;
    }
    $('dia-rejilla').innerHTML = rejilla;
    $('dia-horas').innerHTML = horas;
  }

  function pintarDia() {
    const h = +$('dia-hora').value;
    const g = gen[h], c = con[h];
    const conBat = modo !== 'ongrid';

    $('dia-area-gen').setAttribute('d', area(gen));
    $('dia-area-con').setAttribute('d', area(con));
    $('dia-linea-gen').setAttribute('d', curva(gen));
    $('dia-linea-con').setAttribute('d', curva(con));
    $('dia-linea-bat').setAttribute('d', conBat ? curva(bat.map(v => v * maxKw)) : '');
    document.querySelector('.dia').classList.toggle('con-bateria', conBat);

    $('dia-cursor').setAttribute('x1', px(h));
    $('dia-cursor').setAttribute('x2', px(h));
    $('dia-pt-gen').setAttribute('cx', px(h)); $('dia-pt-gen').setAttribute('cy', py(g));
    $('dia-pt-con').setAttribute('cx', px(h)); $('dia-pt-con').setAttribute('cy', py(c));

    const dif = +(g - c).toFixed(2);
    const hayCorte = corte && modo !== 'offgrid';
    let destino, clase;

    if (hayCorte && modo === 'ongrid') {
      destino = 'Sin red, el inversor está apagado: no tenés energía, aunque los paneles podrían generar ' + g.toFixed(2) + ' kW.';
      clase = 'alerta';
    } else if (dif >= 0) {
      if (modo === 'ongrid') {
        destino = `Te sobran <b>${dif.toFixed(2)} kW</b> y se inyectan a la red. Van a tu factura como crédito.`;
      } else if (bat[h] >= 0.999) {
        destino = `Te sobran <b>${dif.toFixed(2)} kW</b>, la batería ya está llena` +
          (modo === 'hibrido' ? ' y el resto se inyecta a la red.' : ' y el excedente se descarta.');
      } else {
        destino = `Te sobran <b>${dif.toFixed(2)} kW</b> y están cargando la batería (${Math.round(bat[h] * 100)} %).`;
      }
      clase = 'bien';
    } else {
      const falta = Math.abs(dif).toFixed(2);
      if (modo === 'ongrid') {
        destino = `Te faltan <b>${falta} kW</b> y los tomás de la red.`;
        clase = '';
      } else if (bat[h] > 0.02) {
        destino = `Te faltan <b>${falta} kW</b> y salen de la batería, que está al ${Math.round(bat[h] * 100)} %.`;
        clase = 'bien';
      } else if (modo === 'hibrido') {
        destino = `Te faltan <b>${falta} kW</b>, la batería se agotó` +
          (hayCorte ? ' y no hay red: hasta que salga el sol, no hay energía.' : ' y entra la red.');
        clase = hayCorte ? 'alerta' : '';
      } else {
        destino = `Te faltan <b>${falta} kW</b> y la batería se agotó. Un off-grid chico para este consumo: ` +
          'por eso se dimensiona con margen.';
        clase = 'alerta';
      }
    }

    $('dia-lectura').innerHTML = `
      <div class="dia-hora">${String(h).padStart(2, '0')}:00</div>
      <div class="dia-cifras">
        <span class="c-gen"><b>${g.toFixed(2)}</b> kW generás</span>
        <span class="c-con"><b>${c.toFixed(2)}</b> kW consumís</span>
      </div>
      <p class="dia-dice ${clase}">${destino}</p>`;
  }

  $('dia-hora').addEventListener('input', pintarDia);

  dibujarFondo();
  pintarEsquema();
  pintarDia();
})();
