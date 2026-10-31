/* ============================================================================
   PORTADA — lógica compartida por todas las páginas del sitio
   ============================================================================
   Dibuja la foto de fondo de la portada, la franja que nombra la obra y el
   índice para pasar de una a otra. También maneja la cabecera que arranca
   transparente sobre la foto y toma fondo al bajar, y la foto del bloque de
   contacto del final.

   QUÉ OBRAS SALEN: se marcan en trabajos-datos.js (o trabajos-labelec.js) con

       heroe: true,
       heroFoto: "portada.jpg",     <- tiene que ser una foto apaisada

   Cada página elige cuáles usa con los atributos de su <section class="hx">:

       data-portada             obligatorio, marca cuál es la portada
       data-lista="TRABAJOS"    TRABAJOS (por defecto) o TRABAJOS_LABELEC
       data-filtro="heroe"      heroe (por defecto) | solar | todas
       data-desde="1"           con cuál de las obras abre, para que no todas
                                las páginas empiecen con la misma foto

   NO HACE FALTA EDITAR ESTE ARCHIVO.
   ============================================================================ */
(function () {
  'use strict';

  // Las listas de trabajos que tenga cargadas la página.
  // (se declaran con const, así que no están en window: hay que mirarlas así)
  const LISTAS = {};
  if (typeof TRABAJOS !== 'undefined') LISTAS.TRABAJOS = TRABAJOS;
  if (typeof TRABAJOS_LABELEC !== 'undefined') LISTAS.TRABAJOS_LABELEC = TRABAJOS_LABELEC;
  const CATALOGO = (typeof FOTOS !== 'undefined') ? FOTOS : {};

  const porFecha = (a, b) => String(b.orden || '').localeCompare(String(a.orden || ''));

  // Devuelve la foto elegida de un trabajo: la que pida el campo, o la primera.
  function fotoDe(t, campo) {
    const fotos = CATALOGO[t.carpeta] || [];
    if (!fotos.length) return null;
    const pedida = t[campo];
    return (pedida && fotos.find(f => f.endsWith('/' + pedida))) || fotos[0];
  }

  // =========================================================================
  // Cabecera: transparente sobre la foto, con fondo apenas se baja
  // =========================================================================
  (function () {
    const topbar = document.querySelector('.topbar');
    const header = document.getElementById('header') || document.getElementById('cab');
    if (!topbar && !header) return;
    const marcar = () => {
      const bajo = scrollY > 20;
      if (header) header.classList.toggle('scrolled', bajo);
      if (topbar) topbar.classList.toggle('posada', bajo);
    };
    addEventListener('scroll', marcar, { passive: true });
    marcar();
  })();

  // =========================================================================
  // Foto de fondo del bloque de contacto del final (obra con cierre: true)
  // =========================================================================
  (function () {
    const caja = document.getElementById('cta-foto');
    if (!caja) return;
    const lista = LISTAS[caja.dataset.lista || 'TRABAJOS'] || [];
    const t = lista.find(x => x.cierre);
    const foto = t && fotoDe(t, 'cierreFoto');
    if (foto) caja.style.backgroundImage = `url('${foto}')`;
  })();

  // =========================================================================
  // Portada
  // =========================================================================
  const sec = document.querySelector('[data-portada]');
  if (!sec) return;

  const cajaFotos = document.getElementById('hx-fotos');
  const pieNum = document.getElementById('hx-num');
  const pieObra = document.getElementById('hx-obra');
  const indice = document.getElementById('hx-indice');
  if (!cajaFotos) return;

  const lista = LISTAS[sec.dataset.lista || 'TRABAJOS'] || [];
  const filtros = {
    heroe: t => t.heroe,
    solar: t => t.heroe && t.solar,
    todas: () => true,
  };
  const pasa = filtros[sec.dataset.filtro] || filtros.heroe;

  let obras = lista.filter(pasa).sort(porFecha).map(t => {
    const foto = fotoDe(t, 'heroFoto');
    return foto ? {
      foto,
      titulo: t.titulo,
      lugar: (t.detalles && t.detalles.ubicacion) || '',
    } : null;
  }).filter(Boolean);

  // Cada página puede arrancar por una obra distinta
  const desde = parseInt(sec.dataset.desde || '0', 10) || 0;
  if (desde > 0 && obras.length > 1) obras = obras.slice(desde).concat(obras.slice(0, desde));

  // Sin obras marcadas: cae a la imagen suelta que indique la página
  if (!obras.length) {
    const suelta = sec.dataset.foto ||
      (typeof EMPRESA !== 'undefined' ? EMPRESA.imagenHero : '');
    if (suelta) cajaFotos.innerHTML = `<div class="hx__foto activa" style="background-image:url('${suelta}')"></div>`;
    const pie = sec.querySelector('.hx__pie');
    if (pie) pie.style.display = 'none';
    return;
  }

  cajaFotos.innerHTML = obras.map((o, i) =>
    `<div class="hx__foto ${i === 0 ? 'activa' : ''}" style="background-image:url('${o.foto}')"></div>`).join('');

  const unica = obras.length < 2;
  if (indice) {
    indice.innerHTML = unica ? '' : obras.map((o, i) =>
      `<button class="${i === 0 ? 'activo' : ''}" data-i="${i}" aria-label="Obra ${i + 1}: ${o.titulo}"></button>`).join('');
    if (unica) indice.style.display = 'none';
  }

  const capas = cajaFotos.querySelectorAll('.hx__foto');
  const botones = indice ? indice.querySelectorAll('button') : [];
  let actual = 0, timer = null;

  function mostrar(n) {
    actual = (n + obras.length) % obras.length;
    capas.forEach((c, i) => c.classList.toggle('activa', i === actual));
    botones.forEach((b, i) => b.classList.toggle('activo', i === actual));
    if (pieNum) pieNum.textContent = String(actual + 1).padStart(2, '0');
    if (pieObra) pieObra.innerHTML = `<b>${obras[actual].titulo}</b>` +
      (obras[actual].lugar ? ` — ${obras[actual].lugar}` : '');
  }

  function arrancar() { detener(); if (!unica) timer = setInterval(() => mostrar(actual + 1), 6500); }
  function detener() { if (timer) clearInterval(timer); timer = null; }

  botones.forEach(b => b.addEventListener('click', () => { mostrar(+b.dataset.i); arrancar(); }));
  sec.addEventListener('mouseenter', detener);
  sec.addEventListener('mouseleave', arrancar);
  // Si la pestaña no se está viendo, no gastamos nada
  document.addEventListener('visibilitychange', () => document.hidden ? detener() : arrancar());

  mostrar(0);
  arrancar();
})();
