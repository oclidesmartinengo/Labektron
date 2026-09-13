/* ============================================================================
   LABELEC — lógica de la página. No hace falta editar este archivo:
   todo el contenido sale de datos-labelec.js
   ============================================================================ */
(function () {
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const rubroPorId = (id) => RUBROS.find(r => r.id === id);
  const reducirMovimiento = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Datos generales ---------- */
  $('logo-grupo').src = LABELEC.logoGrupo;
  $('logo-grupo-pie').src = LABELEC.logoGrupo;
  $('logo-labelec').src = LABELEC.logo;
  $('lema').textContent = LABELEC.lema;
  {
    const t = esc(LABELEC.titular), ac = LABELEC.titularAcento ? esc(LABELEC.titularAcento) : '';
    $('titular').innerHTML = ac && t.includes(ac) ? t.replace(ac, `<span class="azul">${ac}</span>`) : t;
  }
  $('intro').textContent = LABELEC.intro;
  $('datos').innerHTML = LABELEC.datos.map(d => `<li><b>${esc(d.valor)}</b><span>${esc(d.texto)}</span></li>`).join('');
  $('proceso-lista').innerHTML = `<span class="ruta__linea"></span><span class="ruta__pulso"></span>` +
    LABELEC.proceso.map(p => `<li><h3>${esc(p.titulo)}</h3><p>${esc(p.texto)}</p></li>`).join('');
  (function proceso() {
    const ruta = $('proceso-lista'), pasos = ruta.querySelectorAll('li');
    const pulso = ruta.querySelector('.ruta__pulso');
    const encender = () => {
      ruta.classList.add('activa');
      pasos.forEach((li, i) => setTimeout(() => li.classList.add('on'), reducirMovimiento ? 0 : 250 + i * (2400 / pasos.length)));
      if (!reducirMovimiento) setTimeout(recorrer, 2600);
    };
    // El pulso recorre la línea en loop y enciende cada círculo al pasar por encima
    function recorrer() {
      const x0 = 24, x1 = ruta.clientWidth - 34, dur = 6000, pausa = 600;
      const centros = () => [...pasos].map(li => li.offsetLeft + 23);
      let t0 = null;
      const frame = (t) => {
        if (t0 === null) t0 = t;
        const p = (t - t0) / dur;
        if (p >= 1) { pulso.style.opacity = 0; pasos.forEach(li => li.style.setProperty('--g', 0)); t0 = null; setTimeout(() => requestAnimationFrame(frame), pausa); return; }
        const x = x0 + (x1 - x0) * p;
        pulso.style.left = x + 'px';
        pulso.style.opacity = p < 0.04 || p > 0.96 ? 0 : 1;
        centros().forEach((c, i) => { const d = Math.abs(x - c); pasos[i].style.setProperty('--g', Math.max(0, 1 - d / 60).toFixed(3)); });
        requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    }
    const obs = new IntersectionObserver(en => { if (en[0].isIntersecting) { encender(); obs.disconnect(); } }, { threshold: 0.35 });
    obs.observe(ruta);
  })();
  $('c-direccion').textContent = LABELEC.direccion;
  $('c-horario').textContent = LABELEC.horario;
  $('c-email').textContent = LABELEC.email;
  $('c-email').href = 'mailto:' + LABELEC.email;
  $('pie-copy').textContent = LABELEC.footerCopyright;
  $('anio').textContent = new Date().getFullYear();

  const wa = (texto) => 'https://wa.me/' + LABELEC.whatsapp + '?text=' + encodeURIComponent(texto || LABELEC.whatsappTexto);
  ['cab-wa', 'contacto-wa', 'wa-flotante'].forEach(id => { $(id).href = wa(); });

  /* ---------- Cabecera + menú móvil ---------- */
  addEventListener('scroll', () => $('cab').classList.toggle('scrolled', scrollY > 20), { passive: true });
  $('burger').addEventListener('click', () => {
    const abierto = $('nav').classList.toggle('abierto');
    $('burger').setAttribute('aria-expanded', abierto);
  });
  $('nav').addEventListener('click', e => { if (e.target.tagName === 'A') $('nav').classList.remove('abierto'); });

  /* ---------- Fondo PCB que se ilumina con el mouse ---------- */
  if (!reducirMovimiento) {
    let mx = innerWidth / 2, my = innerHeight * 0.3, cx = mx, cy = my, pendiente = false;
    addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; if (!pendiente) { pendiente = true; requestAnimationFrame(seguir); } }, { passive: true });
    function seguir() {
      cx += (mx - cx) * 0.18; cy += (my - cy) * 0.18;
      document.documentElement.style.setProperty('--mx', cx + 'px');
      document.documentElement.style.setProperty('--my', cy + 'px');
      if (Math.abs(mx - cx) > 0.5 || Math.abs(my - cy) > 0.5) requestAnimationFrame(seguir); else pendiente = false;
    }
  }

  /* ---------- Osciloscopio ---------- */
  (function osciloscopio() {
    const canvas = $('osc-canvas'), osc = $('osc'), pantalla = canvas.parentElement;
    const ctx = canvas.getContext('2d');
    let W = 0, H = 0, t = 0;
    let objF = 1, objA = 0.5, f = 1, a = 0.5;      // objetivo y valor actual (kHz, amplitud 0-1)
    let visible = true;

    const medir = () => {
      const r = pantalla.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 2);
      W = Math.round(r.width); H = Math.round(r.height);
      canvas.width = W * dpr; canvas.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    medir(); addEventListener('resize', medir);

    pantalla.addEventListener('mousemove', e => {
      const r = pantalla.getBoundingClientRect();
      objF = 0.25 + ((e.clientX - r.left) / r.width) * 4.75;          // 0.25 – 5 kHz
      objA = 0.1 + (1 - (e.clientY - r.top) / r.height) * 0.85;       // 0.1 – 0.95
      osc.classList.add('tocado');
    });
    pantalla.addEventListener('mouseleave', () => { objF = 1; objA = 0.5; });

    new IntersectionObserver(en => { visible = en[0].isIntersecting; if (visible) requestAnimationFrame(dibujar); }).observe(pantalla);

    function dibujar() {
      if (!visible) return;
      f += (objF - f) * 0.08; a += (objA - a) * 0.08;
      t += reducirMovimiento ? 0 : 0.04;
      ctx.clearRect(0, 0, W, H);

      // Retícula
      ctx.strokeStyle = 'rgba(92,224,160,0.10)'; ctx.lineWidth = 1;
      const dx = W / 10, dy = H / 8;
      for (let i = 1; i < 10; i++) { ctx.beginPath(); ctx.moveTo(i * dx, 0); ctx.lineTo(i * dx, H); ctx.stroke(); }
      for (let i = 1; i < 8; i++) { ctx.beginPath(); ctx.moveTo(0, i * dy); ctx.lineTo(W, i * dy); ctx.stroke(); }
      ctx.strokeStyle = 'rgba(92,224,160,0.22)';
      ctx.beginPath(); ctx.moveTo(0, H / 2); ctx.lineTo(W, H / 2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(W / 2, 0); ctx.lineTo(W / 2, H); ctx.stroke();

      // Traza
      ctx.lineWidth = 2; ctx.strokeStyle = '#5ce0a0';
      ctx.shadowColor = 'rgba(92,224,160,0.8)'; ctx.shadowBlur = 8;
      ctx.beginPath();
      for (let x = 0; x <= W; x++) {
        const ph = (x / W) * Math.PI * 2 * f * 2 - t * 3;
        const ruido = (Math.random() - 0.5) * 1.2;
        const y = H / 2 - Math.sin(ph) * (H / 2 - 12) * a + ruido;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke(); ctx.shadowBlur = 0;

      $('osc-f').textContent = f.toFixed(2) + ' kHz';
      $('osc-vpp').textContent = (a * 4).toFixed(2) + ' Vpp';
      requestAnimationFrame(dibujar);
    }
    dibujar();
  })();

  /* ---------- Rubros: mosaicos + ficha ---------- */
  (function rubros() {
    const lista = $('rubros-lista'), panel = $('rubros-panel');
    const total = (r) => (r.especialidad?.length || 0) + (r.equipos?.length || 0);
    lista.innerHTML = RUBROS.map((r, i) => `
      <button class="mosaico ${i === 0 ? 'activo' : ''}" role="tab" data-id="${r.id}" aria-selected="${i === 0}">
        <img src="${esc(r.imagen)}" alt="" loading="lazy" decoding="async">
        <span class="velo"></span>
        <span class="mosaico__in">
          <span class="mosaico__num">${String(i + 1).padStart(2, '0')}</span>
          <span><b>${esc(r.nombre)}</b><br><small>${total(r)} equipos</small></span>
        </span>
      </button>`).join('');

    const slug = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const marca = (m) => `<span class="marca"><img src="images/marcas/${slug(m)}.png" alt="" onerror="this.remove()"><b>${esc(m)}</b></span>`;
    const lista_ul = (items) => `<ul>${items.map(e => `<li>${esc(e)}</li>`).join('')}</ul>`;

    const pintar = (id) => {
      const r = rubroPorId(id); if (!r) return;
      const esp = r.especialidad || [], resto = r.equipos || [], marcas = r.marcas || [];
      let cols;
      if (esp.length && resto.length) {
        cols = `<div class="ficha__col ficha__col--esp"><h4>ESPECIALIDAD</h4>${lista_ul(esp)}</div>
                <div class="ficha__col ficha__col--resto"><h4>TAMBIÉN VEMOS</h4>${lista_ul(resto)}</div>`;
      } else {
        // Sin especialidad: la lista se reparte en dos columnas iguales
        const todo = esp.length ? esp : resto, mitad = Math.ceil(todo.length / 2);
        cols = `<div class="ficha__col ficha__col--resto"><h4>EQUIPOS QUE REPARAMOS</h4>${lista_ul(todo.slice(0, mitad))}</div>
                <div class="ficha__col ficha__col--resto"><h4>&nbsp;</h4>${lista_ul(todo.slice(mitad))}</div>`;
      }
      panel.innerHTML = `
        <div class="panel">
          <div class="ficha__cab">
            <div><h3>${esc(r.nombre)}</h3><p>${esc(r.intro)}</p></div>
            ${r.nota ? `<span class="panel__nota">${esc(r.nota)}</span>` : ''}
          </div>
          <div class="ficha__cols">${cols}</div>
          ${marcas.length ? `
          <div class="marcas">
            <span class="marcas__label">Trabajamos con</span>
            <div class="marcas__pista"><div class="marcas__tren">${marcas.map(marca).join('')}${marcas.map(marca).join('')}</div></div>
          </div>` : ''}
        </div>`;
      const tren = panel.querySelector('.marcas__tren');
      if (tren) tren.style.animationDuration = Math.max(14, marcas.length * 3.2) + 's';
    };
    pintar(RUBROS[0].id);

    lista.addEventListener('click', e => {
      const b = e.target.closest('.mosaico'); if (!b) return;
      lista.querySelectorAll('.mosaico').forEach(x => { x.classList.remove('activo'); x.setAttribute('aria-selected', 'false'); });
      b.classList.add('activo'); b.setAttribute('aria-selected', 'true');
      pintar(b.dataset.id);
      if (innerWidth < 960) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  })();

  /* ---------- Trabajos + lightbox ---------- */
  (function trabajos() {
    const grid = $('trabajos-grid'), filtros = $('trabajos-filtro');
    const todos = [...TRABAJOS_LABELEC].sort((a, b) => (b.orden || '').localeCompare(a.orden || ''));
    let lista = todos, actual = 0, foto = 0;

    const conteo = (id) => todos.filter(t => t.rubro === id).length;
    filtros.innerHTML = `<button class="filtro activo" data-r="todos">Todos<em>${todos.length}</em></button>` +
      RUBROS.filter(r => conteo(r.id)).map(r => `<button class="filtro" data-r="${r.id}">${esc(r.corto || r.nombre)}<em>${conteo(r.id)}</em></button>`).join('');

    const pintar = () => {
      if (!lista.length) { grid.innerHTML = `<p class="galeria__vacio">Todavía no cargamos trabajos en este rubro.</p>`; return; }
      grid.innerHTML = lista.map((t, i) => `
        <button class="trabajo" data-i="${i}">
          <img src="${esc(t.fotos[0])}" alt="${esc(t.titulo)}" loading="lazy">
          ${t.fotos.length > 1 ? `<span class="trabajo__n">${t.fotos.length} fotos</span>` : ''}
          <div class="trabajo__txt">
            <small>${esc(rubroPorId(t.rubro)?.corto || t.rubro)}</small>
            <b>${esc(t.titulo)}</b>
            <span>${esc(t.falla)}</span>
          </div>
        </button>`).join('');
    };
    pintar();

    filtros.addEventListener('click', e => {
      const b = e.target.closest('.filtro'); if (!b) return;
      filtros.querySelectorAll('.filtro').forEach(x => x.classList.remove('activo'));
      b.classList.add('activo');
      lista = b.dataset.r === 'todos' ? todos : todos.filter(t => t.rubro === b.dataset.r);
      pintar();
    });

    // Lightbox
    const lb = $('lb');
    const mostrarFoto = () => {
      const t = lista[actual];
      $('lb-img').src = t.fotos[foto]; $('lb-img').alt = t.titulo;
      $('lb-contador').textContent = t.fotos.length > 1 ? `${foto + 1} / ${t.fotos.length}` : '';
      $('lb-prev').hidden = $('lb-next').hidden = t.fotos.length < 2;
    };
    const abrir = (i) => {
      actual = i; foto = 0; const t = lista[i];
      $('lb-titulo').textContent = t.titulo;
      $('lb-equipo').textContent = t.equipo || '—';
      $('lb-falla').textContent = t.falla || '—';
      $('lb-solucion').textContent = t.solucion || '—';
      mostrarFoto();
      lb.classList.add('abierto'); lb.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };
    const cerrar = () => { lb.classList.remove('abierto'); lb.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; };
    grid.addEventListener('click', e => { const b = e.target.closest('.trabajo'); if (b) abrir(+b.dataset.i); });
    $('lb-cerrar').addEventListener('click', cerrar);
    lb.addEventListener('click', e => { if (e.target === lb) cerrar(); });
    $('lb-prev').addEventListener('click', () => { foto = (foto - 1 + lista[actual].fotos.length) % lista[actual].fotos.length; mostrarFoto(); });
    $('lb-next').addEventListener('click', () => { foto = (foto + 1) % lista[actual].fotos.length; mostrarFoto(); });
    addEventListener('keydown', e => {
      if (!lb.classList.contains('abierto')) return;
      if (e.key === 'Escape') cerrar();
      if (e.key === 'ArrowLeft') $('lb-prev').click();
      if (e.key === 'ArrowRight') $('lb-next').click();
    });
  })();

  /* ---------- Diagnóstico y cotización (un solo recorrido) ---------- */
  (function diagnostico() {
    const pantalla = $('tester-pantalla'), botones = $('tester-botones'), leds = $('tester-leds');
    const atras = $('tester-atras'), reiniciar = $('tester-reiniciar');
    const resLista = $('resumen-lista'), resRango = $('resumen-rango'), resWa = $('resumen-wa');
    $('resumen-aviso').textContent = COTIZADOR.aviso;

    const rubrosCot = COTIZADOR.rubros.filter(r => rubroPorId(r.id));
    // Estado: pasos fijos (rubro, equipo, falla) + historial de nodos del árbol
    let sel = { rubro: null, equipo: null, falla: null };
    let nodos = [];

    const profundidad = (id, vistos = new Set()) => {
      const n = ARBOL_FALLAS.nodos[id];
      if (!n || vistos.has(id)) return 0;
      if (n.resultado) return 1;
      vistos.add(id);
      return 1 + Math.max(0, ...n.opciones.map(o => profundidad(o.ir, new Set(vistos))));
    };

    const paso = () => sel.rubro === null ? 1 : sel.equipo === null ? 2 : sel.falla === null ? 3 : 3 + nodos.length;
    const fallaSel = () => sel.falla === null ? null : rubrosCot[sel.rubro].equipos[sel.equipo].fallas[sel.falla];
    const nodoActual = () => nodos.length ? ARBOL_FALLAS.nodos[nodos[nodos.length - 1]] : null;
    const terminado = () => sel.falla !== null && (!fallaSel().test || (nodoActual() && nodoActual().resultado));

    const pintarLeds = () => {
      let total = 4;
      if (sel.falla !== null) total = 3 + (fallaSel().test ? profundidad(fallaSel().test) : 1);
      leds.innerHTML = Array.from({ length: total }, () => '<i></i>').join('');
      const luces = leds.querySelectorAll('i');
      if (terminado()) {
        const nivel = nodoActual()?.nivel || 'taller';
        luces.forEach(l => { l.className = 'fin-' + nivel; });
      } else {
        luces.forEach((l, i) => { l.className = i < paso() - 1 ? 'on' : ''; });
      }
    };

    const opciones = (items, extra) => items.map((it, i) =>
      `<button class="tester__op" data-i="${i}">${esc(it.nombre || it.texto || it)}${extra ? `<em>${esc(extra(it))}</em>` : ''}</button>`).join('');

    const rango = (f) => f.desde && f.hasta ? `${esc(f.desde)} – ${esc(f.hasta)}` : 'A cotizar';

    const mensajeWa = () => {
      const rb = rubroPorId(rubrosCot[sel.rubro].id), eq = rubrosCot[sel.rubro].equipos[sel.equipo], fa = fallaSel();
      const n = nodoActual();
      let m = `Hola LABELEC, hice el diagnóstico de la web.\nRubro: ${rb.nombre}\nEquipo: ${eq.nombre}\nSíntoma: ${fa.nombre}`;
      if (n && n.resultado) m += `\nResultado del test: ${n.titulo}`;
      if (fa.desde && fa.hasta) m += `\nRango orientativo web: ${fa.desde} – ${fa.hasta}`;
      m += `\nMarca y modelo: `;
      return m;
    };

    const pintarResumen = () => {
      const rb = sel.rubro !== null ? rubroPorId(rubrosCot[sel.rubro].id) : null;
      const eq = sel.equipo !== null ? rubrosCot[sel.rubro].equipos[sel.equipo] : null;
      const fa = fallaSel(), n = nodoActual();
      const fila = (k, v, cls) => `<dt>${k}</dt><dd class="${v ? cls || '' : 'vacio'}">${v ? esc(v) : '—'}</dd>`;
      resLista.innerHTML =
        fila('RUBRO', rb && (rb.corto || rb.nombre)) +
        fila('EQUIPO', eq && eq.nombre) +
        fila('SÍNTOMA', fa && fa.nombre) +
        (n && n.resultado ? fila('RESULTADO', n.titulo, 'resultado') : '');
      if (fa) {
        resRango.className = 'resumen__rango';
        resRango.innerHTML = `${rango(fa)}<small>${fa.desde && fa.hasta ? 'rango orientativo, reparación completa' : 'depende del modelo y del diagnóstico'}</small>` +
          (COTIZADOR.diagnostico?.precio ? `<div class="resumen__diag">Revisión: <b>${esc(COTIZADOR.diagnostico.precio)}</b> · ${esc(COTIZADOR.diagnostico.texto)}</div>` : '');
        resWa.classList.remove('off'); resWa.href = wa(mensajeWa());
      } else {
        resRango.className = 'resumen__rango vacio';
        resRango.textContent = 'Completá los pasos y te mostramos un rango orientativo.';
        resWa.classList.add('off'); resWa.href = wa();
      }
    };

    const pintar = () => {
      atras.disabled = paso() === 1;
      botones.classList.remove('chicos');
      const cab = (n, t) => `<div class="tester__q"><small>PASO ${String(n).padStart(2, '0')}</small>${t}</div>`;

      if (sel.rubro === null) {
        pantalla.innerHTML = cab(1, '¿De qué rubro es el equipo?');
        botones.classList.add('chicos');
        botones.innerHTML = opciones(rubrosCot.map(r => rubroPorId(r.id).corto || rubroPorId(r.id).nombre));
      } else if (sel.equipo === null) {
        pantalla.innerHTML = cab(2, '¿Qué equipo es?');
        botones.classList.add('chicos');
        botones.innerHTML = opciones(rubrosCot[sel.rubro].equipos);
      } else if (sel.falla === null) {
        pantalla.innerHTML = cab(3, '¿Qué le pasa?');
        botones.innerHTML = opciones(rubrosCot[sel.rubro].equipos[sel.equipo].fallas, f => f.test ? 'con preguntas para probar en casa' : rango(f));
      } else {
        const fa = fallaSel();
        if (!fa.test) {
          // Sin preguntas: resultado directo
          pantalla.innerHTML = `
            <div class="tester__res taller">
              <small>TRAELO AL LABORATORIO</small>
              <h3>Este equipo se diagnostica con instrumentos</h3>
              <p>No hay pruebas seguras que puedas hacer en casa para este síntoma. Traelo o coordinamos el retiro: lo medimos, te decimos qué tiene y confirmamos el presupuesto antes de tocar nada.</p>
            </div>`;
          botones.innerHTML = '';
        } else {
          const n = nodoActual();
          if (!n) { pantalla.innerHTML = cab(paso(), `Falta el nodo "${esc(nodos[nodos.length - 1])}" en datos-labelec.js`); botones.innerHTML = ''; }
          else if (n.resultado) {
            const etiqueta = { ok: 'LO PODÉS RESOLVER VOS', taller: 'TRAELO AL LABORATORIO', urgente: 'ATENCIÓN' }[n.nivel] || 'RESULTADO';
            pantalla.innerHTML = `<div class="tester__res ${esc(n.nivel || 'taller')}"><small>${etiqueta}</small><h3>${esc(n.titulo)}</h3><p>${esc(n.texto)}</p></div>`;
            botones.innerHTML = '';
          } else {
            pantalla.innerHTML = cab(paso(), esc(n.pregunta));
            botones.innerHTML = n.opciones.map((o, i) => `<button class="tester__op" data-i="${i}">${esc(o.texto)}</button>`).join('');
          }
        }
      }
      pintarLeds(); pintarResumen();
    };

    botones.addEventListener('click', e => {
      const b = e.target.closest('.tester__op'); if (!b) return;
      const i = +b.dataset.i;
      if (sel.rubro === null) sel.rubro = i;
      else if (sel.equipo === null) sel.equipo = i;
      else if (sel.falla === null) { sel.falla = i; const f = fallaSel(); nodos = f.test ? [f.test] : []; }
      else nodos.push(nodoActual().opciones[i].ir);
      pintar();
      if (innerWidth < 960) $('tester-caja').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    atras.addEventListener('click', () => {
      if (nodos.length > 1) nodos.pop();
      else if (sel.falla !== null) { sel.falla = null; nodos = []; }
      else if (sel.equipo !== null) sel.equipo = null;
      else if (sel.rubro !== null) sel.rubro = null;
      pintar();
    });
    reiniciar.addEventListener('click', () => { sel = { rubro: null, equipo: null, falla: null }; nodos = []; pintar(); });
    pintar();
  })();
})();
