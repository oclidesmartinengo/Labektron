/* ============================================================================
   Lógica de las páginas de empresa (elektron.html / labelec.html)
   Detecta qué empresa mostrar según el atributo data-empresa del <body>
   y toma todos los datos desde datos.js. No hace falta editar este archivo.
   ============================================================================ */
(function () {
  const clave = document.body.dataset.empresa;               // "elektron" o "labelec"
  const emp = EMPRESAS_GRUPO.find(e => e.id === clave);
  if (!emp) { console.error("Empresa no encontrada:", clave); return; }

  // Color de acento propio de la empresa
  document.documentElement.style.setProperty('--acento', emp.color);

  const set = (id, txt) => { const el = document.getElementById(id); if (el) el.textContent = txt; };
  const src = (id, ruta) => { const el = document.getElementById(id); if (el) el.src = ruta; };

  // Logos (usa el logo del grupo arriba, y el icono de la empresa en el hero)
  src('nav-logo', EMPRESA.logo);
  src('footer-logo', EMPRESA.logo);
  src('emp-logo', emp.icono);
  document.getElementById('emp-logo').alt = emp.nombre;

  // Hero
  set('emp-lema', emp.lema || '');
  set('emp-intro', emp.intro || emp.descripcion || '');
  document.title = emp.nombre + " | " + EMPRESA.nombre;

  // Subtítulo de servicios
  set('serv-sub', "Soluciones de " + emp.nombre + " para cada necesidad.");

  // Grilla de servicios
  const grid = document.getElementById('servicios-grid');
  if (grid && emp.servicios) {
    grid.innerHTML = emp.servicios.map((s, i) => `
      <div class="servicio reveal">
        <div class="servicio__num">${String(i + 1).padStart(2, '0')}</div>
        <h3>${s.titulo}</h3>
        <p>${s.texto}</p>
      </div>`).join('');
  }

  // CTA + footer
  set('cta-titulo', "¿Necesitás los servicios de " + emp.nombre + "?");
  set('cta-sub', "Escribinos y coordinemos una reunión. Te asesoramos sin compromiso.");
  set('cta-wa', "Escribinos por WhatsApp");
  set('footer-nombre', EMPRESA.nombre);
  set('footer-copy', EMPRESA.footerCopyright);
  document.getElementById('anio').textContent = new Date().getFullYear();

  // WhatsApp
  const waLink = 'https://wa.me/' + EMPRESA.whatsapp + '?text=' +
    encodeURIComponent("Hola, quiero más información sobre los servicios de " + emp.nombre + ".");
  const ctaWa = document.getElementById('cta-wa');
  const flot = document.getElementById('wa-flotante');
  if (ctaWa) ctaWa.href = waLink;
  if (flot) flot.href = waLink;

  // Header con sombra al scrollear
  const header = document.getElementById('header');
  addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 20));

  // Animación de entrada
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();
