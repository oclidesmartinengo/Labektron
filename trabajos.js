/* ============================================================================
   TRABAJOS — lógica compartida entre index.html y trabajos.html
   Dibuja las tarjetas de proyecto y maneja el popup con carrusel + detalles.
   No hace falta editar este archivo. El contenido se edita en datos.js
   ============================================================================ */
(function () {
  const grid = document.getElementById('trabajos-grid');
  if (!grid) return;

  // ¿Qué mostramos? "destacados" (inicio) o "todos" (página completa)
  const modo = grid.dataset.modo || 'todos';

  // Imagen con carga diferida
  const img = (src, alt) =>
    `<img src="${src}" alt="${alt}" loading="lazy" decoding="async"
      onerror="this.style.opacity=.25;this.alt='Falta: '+this.src">`;

  // Ordena del más nuevo al más viejo (usa el campo "orden": "AAAA-MM")
  const porFecha = (a, b) => String(b.orden || '').localeCompare(String(a.orden || ''));

  // Lista a mostrar. Guardamos el índice original para abrir el modal correcto.
  const lista = TRABAJOS
    .map((t, i) => ({ ...t, _i: i }))
    .filter(t => modo === 'destacados' ? t.destacado : true)
    .sort(porFecha);

  const tieneDetalle = t => (t.galeria && t.galeria.length) || t.descripcionLarga;

  // Dibuja una tarjeta
  function tarjeta(t, sinReveal) {
    const clic = tieneDetalle(t);
    const verMas = clic ? `
      <span class="card__vermas">Ver proyecto
        <svg viewBox="0 0 24 24"><path d="M13 5l7 7-7 7-1.4-1.4L16.2 13H4v-2h12.2l-4.6-4.6z"/></svg>
      </span>` : '';
    return `
    <div class="card ${sinReveal ? '' : 'reveal'} ${clic ? 'card--clic' : ''}" ${clic ? `data-trabajo="${t._i}"` : ''}>
      <div class="card__img">${img(t.imagen, t.titulo)}</div>
      <div class="card__body">
        <h3>${t.titulo}</h3>
        <p>${t.descripcion}</p>
        ${verMas}
      </div>
    </div>`;
  }

  // Mes en texto, para la fecha sobre cada tarjeta
  const MESES = ['','Enero','Febrero','Marzo','Abril','Mayo','Junio',
                 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  function fechaLinda(orden) {
    const [a, m] = String(orden || '').split('-');
    return m ? `${MESES[parseInt(m)]} ${a}` : (a || '');
  }

  // --- Dibujar las tarjetas ---
  if (grid.dataset.timeline) {
    // ===== LÍNEA DE TIEMPO (intercalada izq/der, agrupada por año) =====
    const progreso = grid.querySelector('.timeline__progreso');
    let html = '', anioPrevio = null, i = 0;
    lista.forEach(t => {
      const anio = String(t.orden || '').slice(0, 4);
      if (anio && anio !== anioPrevio) {
        html += `<div class="tl-anio"><span>${anio}</span></div>`;
        anioPrevio = anio;
        i = 0;                     // reinicia el intercalado en cada año
      }
      const lado = (i % 2 === 0) ? 'izq' : 'der';
      i++;
      html += `
        <div class="tl-item tl-item--${lado}">
          <div class="tl-caja">
            <div class="tl-fecha">${fechaLinda(t.orden)}</div>
            ${tarjeta(t, true)}
          </div>
        </div>`;
    });
    grid.insertAdjacentHTML('beforeend', html);

    // Barra de progreso que se pinta al hacer scroll
    if (progreso) {
      const actualizar = () => {
        const r = grid.getBoundingClientRect();
        const alto = innerHeight;
        const avance = Math.min(Math.max((alto * 0.55 - r.top) / r.height, 0), 1);
        progreso.style.height = (avance * r.height) + 'px';
      };
      addEventListener('scroll', actualizar, { passive: true });
      addEventListener('resize', actualizar);
      actualizar();
    }

    // Aparición de cada item al entrar en pantalla
    const obsTL = new IntersectionObserver(es => {
      es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obsTL.unobserve(e.target); } });
    }, { threshold: 0.25 });
    grid.querySelectorAll('.tl-item, .tl-anio').forEach(el => obsTL.observe(el));

  } else if (grid.dataset.separarAnios) {
    let html = '', anioPrevio = null;
    lista.forEach(t => {
      const anio = String(t.orden || '').slice(0, 4);
      if (anio && anio !== anioPrevio) {
        html += `<div class="anio-sep"><span>${anio}</span></div>`;
        anioPrevio = anio;
      }
      html += tarjeta(t);
    });
    grid.innerHTML = html;
  } else {
    grid.innerHTML = lista.map(tarjeta).join('');
  }

  // --- Modal de galería ---
  const modal = document.getElementById('modal-trabajo');
  if (!modal) return;
  const galeriaCont = document.getElementById('modal-galeria');
  let slideActual = 0, totalSlides = 0;

  const etiquetas = {
    cliente: "Cliente",
    ubicacion: "Ubicación",
    fecha: "Fecha",
    duracion: "Duración de obra",
    tecnicos: "Datos técnicos",
  };

  function irA(n) {
    const pista = galeriaCont.querySelector('.galeria__pista');
    if (!pista) return;
    slideActual = (n + totalSlides) % totalSlides;
    pista.style.transform = `translateX(-${slideActual * 100}%)`;
    galeriaCont.querySelectorAll('.galeria__punto').forEach((p, i) =>
      p.classList.toggle('activo', i === slideActual));
  }

  function abrir(t) {
    document.getElementById('modal-titulo').textContent = t.titulo;
    document.getElementById('modal-descripcion').textContent = t.descripcionLarga || t.descripcion || '';

    const d = t.detalles || {};
    document.getElementById('modal-detalles').innerHTML = Object.keys(etiquetas)
      .filter(k => d[k])
      .map(k => `<div class="modal__dato"><div class="etq">${etiquetas[k]}</div><div class="val">${d[k]}</div></div>`)
      .join('');

    const fotos = (t.galeria && t.galeria.length) ? t.galeria : [t.imagen];
    totalSlides = fotos.length;
    slideActual = 0;
    const slides = fotos.map(f => `<div class="galeria__slide">${img(f, t.titulo)}</div>`).join('');
    const flechas = totalSlides > 1 ? `
      <button class="galeria__flecha galeria__flecha--izq" aria-label="Anterior">‹</button>
      <button class="galeria__flecha galeria__flecha--der" aria-label="Siguiente">›</button>
      <div class="galeria__puntos">
        ${fotos.map((_, i) => `<span class="galeria__punto ${i===0?'activo':''}" data-punto="${i}"></span>`).join('')}
      </div>` : '';
    galeriaCont.innerHTML = `
      <div class="galeria__viewport"><div class="galeria__pista">${slides}</div></div>
      ${flechas}`;

    if (totalSlides > 1) {
      galeriaCont.querySelector('.galeria__flecha--izq').onclick = () => irA(slideActual - 1);
      galeriaCont.querySelector('.galeria__flecha--der').onclick = () => irA(slideActual + 1);
      galeriaCont.querySelectorAll('.galeria__punto').forEach(p =>
        p.onclick = () => irA(parseInt(p.dataset.punto)));
    }

    modal.classList.add('abierto');
    document.body.style.overflow = 'hidden';
  }

  function cerrar() {
    modal.classList.remove('abierto');
    document.body.style.overflow = '';
  }

  grid.addEventListener('click', e => {
    const card = e.target.closest('[data-trabajo]');
    if (card) abrir(TRABAJOS[parseInt(card.dataset.trabajo)]);
  });

  document.getElementById('modal-cerrar').onclick = cerrar;
  modal.addEventListener('click', e => { if (e.target === modal) cerrar(); });
  addEventListener('keydown', e => {
    if (!modal.classList.contains('abierto')) return;
    if (e.key === 'Escape') cerrar();
    if (e.key === 'ArrowLeft' && totalSlides > 1) irA(slideActual - 1);
    if (e.key === 'ArrowRight' && totalSlides > 1) irA(slideActual + 1);
  });
})();
