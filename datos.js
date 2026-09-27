/* ============================================================================
   DATOS DE LA WEB — GRUPO LABEKTRON
   ============================================================================
   Este es el ÚNICO archivo que necesitás tocar para editar el contenido.
   Ahora TODOS los textos de la página están acá: títulos de secciones,
   subtítulos, botones, menú, footer y las listas de trabajos/clientes/etc.

   REGLAS RÁPIDAS:
   - El texto va SIEMPRE entre comillas dobles: "así"
   - Cada línea/bloque termina con una coma
   - Para AGREGAR algo a una lista: copiá un bloque { ... } entero y editalo.
   - Para QUITAR algo: borrá el bloque completo (desde { hasta }, incluida la coma).
   - Nombres de fotos SIN espacios ni tildes: "parque-solar.jpg" OK  "Parque Solar.jpg" NO
   - Si algo deja de verse: revisá que no falte una coma o una comilla.
   ============================================================================ */


/* ----------------------------------------------------------------------------
   1. DATOS GENERALES DE LA EMPRESA
   ---------------------------------------------------------------------------- */
const EMPRESA = {
  nombre: "GRUPO LABEKTRON",
  // El símbolo | marca dónde se corta la línea del título
  eslogan: "Ingeniería que conecta|energía y tecnología.",
  descripcionHero: "Soluciones integrales en ingeniería eléctrica, electrónica, electromecánica y energía fotovoltaica.",
  logo: "images/logo.png",
  // (Opcional) Versión del logo con letras claras para fondo oscuro.
  // Si la exportás (ej. "images/logo-blanco.png"), ponela acá y se usa en menú y footer.
  logoClaro: "",

  // Botones del inicio (hero)
  botonHero1: "Ver proyectos",
  botonHero2: "Conocé el grupo",

  // Imagen grande del hero (lado derecho)
  imagenHero: "images/hero.png",

  // Palabras del eslogan que se pintan de color.
  // Tienen que estar escritas igual que en el eslogan de arriba.
  // color: "celeste", "naranja" o "degradado"
  destacarEnEslogan: [
    { texto: "energía",    color: "celeste" },
    { texto: "tecnología", color: "naranja" },
  ],

  // Contacto
  whatsapp: "5493875895447",           // Número con código de país, sin + ni espacios
  whatsappTexto: "Hola, quiero más información sobre los servicios de Grupo Labektron.",
  email: "contacto@labektron.com",
  telefono: "+54 387 000 0000",

  // Texto que aparece abajo de todo (footer)
  footerCopyright: "Todos los derechos reservados",

  // Velocidad del carrusel de clientes (en segundos por vuelta completa).
  // Más alto = más lento y suave. Más bajo = más rápido. Probá con 30, 40, 60...
  velocidadCarruselClientes: 45,
};


/* ----------------------------------------------------------------------------
   1.b VALORES DEL HERO (los 4 íconos debajo de los botones)
   👉 "icono" elegí uno de: rayo, grafico, escudo, hoja, engranaje, reloj,
      chip, solar, fabrica, calendario, edificio, rayoCirculo
   ---------------------------------------------------------------------------- */
const VALORES_HERO = [
  { icono: "engranaje", linea1: "Ingeniería",  linea2: "electromecánica" },
  { icono: "chip",      linea1: "Electrónica", linea2: "especializada" },
  { icono: "solar",     linea1: "Energía",     linea2: "fotovoltaica" },
  { icono: "fabrica",   linea1: "Soluciones",  linea2: "industriales" },
];


/* ----------------------------------------------------------------------------
   1.c ESTADÍSTICAS (la barra de números debajo del hero)
   👉 Para sacar la barra entera, dejá la lista vacía así:  const ESTADISTICAS = [];
   👉 "icono": mismos nombres que en VALORES_HERO
   ---------------------------------------------------------------------------- */
const ESTADISTICAS = [
  { icono: "calendario",  numero: "+4",  texto: "Años de experiencia" },
  { icono: "engranaje",   numero: "+70", texto: "Proyectos realizados" },
  { icono: "edificio",    numero: "2",   texto: "Empresas especializadas" },
  { icono: "rayoCirculo", numero: "3",   texto: "Áreas de ingeniería" },
];

// Frase a la derecha de las estadísticas
// linea1 = blanco · linea2 = celeste · linea3 = texto chico (puede quedar en "")
const FRASE_ESTADISTICAS = {
  linea1: "Dos especialidades.",
  linea2: "Un solo propósito.",
  linea3: "Desarrollar soluciones tecnológicas para una industria más eficiente, segura y sostenible.",
};


/* ----------------------------------------------------------------------------
   2. MENÚ DE NAVEGACIÓN (los enlaces de arriba)
   👉 "texto" es lo que se ve; "ancla" es la sección a la que salta (no la toques
      salvo que sepas lo que hacés). El botón "Contactanos" se edita más abajo.
   ---------------------------------------------------------------------------- */
const MENU = [
  { texto: "El Grupo",  ancla: "#grupo" },
  { texto: "Empresas",  ancla: "#empresas" },
  { texto: "Trabajos",  ancla: "#trabajos" },
  { texto: "Clientes",  ancla: "#clientes" },
  { texto: "Contacto",  ancla: "#contacto" },
];
const BOTON_CONTACTO = "Contactanos";   // botón celeste arriba a la derecha


/* ----------------------------------------------------------------------------
   3. TÍTULOS DE CADA SECCIÓN
   👉 Acá editás los encabezados que aparecen arriba de cada bloque.
      - "eyebrow" es el textito chico en mayúsculas de color celeste.
      - "titulo" es el título grande.
      - "subtitulo" es la frase descriptiva (podés dejarla vacía con "").
   ---------------------------------------------------------------------------- */
const SECCIONES = {
  // --- Sección "Nuestra identidad" (el bloque del grupo con imagen al costado) ---
  grupo: {
    eyebrow: "Nuestra identidad",
    titulo: "Grupo Labektron",
    // La imagen que aparece al costado de este bloque:
    imagen: "images/identidad.png",
    // Párrafos de la identidad/sinergia. Cada texto entre comillas es un párrafo.
    // El primero sale más grande (bajada). Lo que hace cada empresa NO va acá:
    // sale de las tarjetas de LABELEC y ELEKTRON, más abajo en la misma sección.
    parrafos: [
      { titulo: "", texto: "GRUPO LABEKTRON es una sociedad conformada por ELEKTRON y LABELEC, dos empresas especializadas en diferentes áreas de la ingeniería para ofrecer soluciones integrales en los sectores industrial, comercial y residencial." },
      { titulo: "", texto: "La sinergia entre ELEKTRON y LABELEC nos permite abordar proyectos de manera integral, optimizando recursos y asegurando la mejor calidad en cada solución técnica." },
    ],
  },
  // --- Encabezado de la sección donde se muestran las dos empresas ---
  empresas: {
    eyebrow: "Un grupo, dos especialidades",
    titulo: "Nuestras empresas",
    subtitulo: "Cada una experta en su campo. Hacé click para conocer todo lo que hace cada una.",
  },
  trabajos: {
    eyebrow: "Portfolio",
    titulo: "Trabajos realizados",
    subtitulo: "Proyectos ejecutados con estándares de calidad, seguridad y eficiencia.",
    // Botón que lleva a la página con todos los trabajos
    boton: "Ver todos nuestros proyectos",
  },
  // Encabezado de la página trabajos.html (todos los proyectos)
  paginaTrabajos: {
    eyebrow: "Portfolio completo",
    titulo: "Todos nuestros proyectos",
    subtitulo: "Un recorrido cronológico por las obras que ejecutamos.",
  },
  clientes: {
    eyebrow: "Confían en nosotros",
    titulo: "Clientes",
    subtitulo: "Empresas que eligieron nuestras soluciones.",
  },
  sectores: {
    eyebrow: "Dónde trabajamos",
    titulo: "Sectores de aplicación",
    subtitulo: "Soluciones a medida para cada industria.",
  },
  // Esta sección muestra las oficinas Y el mapa, uno a cada lado de una
  // línea divisoria. "tituloFotos" y "tituloMapa" son los títulos de cada lado.
  oficinas: {
    eyebrow: "Dónde estamos",
    titulo: "Vení a conocernos",
    subtitulo: "Estamos en Salta Capital. Pasá por el taller o escribinos y coordinamos una visita.",
    tituloFotos: "Nuestras instalaciones",
    tituloMapa: "Cómo llegar",
  },
  contacto: {
    titulo: "¿Tenés un proyecto en mente?",
    subtitulo: "Escribinos y coordinemos una reunión. Te asesoramos sin compromiso.",
    boton: "Escribinos por WhatsApp",
  },
  // El mapa se muestra dentro de la sección "oficinas".
  // eyebrow/titulo/subtitulo ya no se usan; sí la dirección y el zoom.
  mapa: {
    eyebrow: "Cómo llegar",
    titulo: "Nuestra ubicación",
    subtitulo: "Visitanos en nuestras oficinas.",
    // 👇 Dirección que se muestra y se busca en el mapa.
    //    Cambiala por la real (calle, número, ciudad).
    direccion: "10 de Octubre 985, Salta Capital, Argentina",
    // Horario que se muestra al pie del mapa (dejalo en "" para ocultarlo)
    horario: "Lunes a viernes de 9 a 17 h, corrido",
    // Nivel de zoom del mapa: más alto = más cerca. Probá entre 14 y 18.
    zoom: 16,
  },
};


/* ----------------------------------------------------------------------------
   4. LAS DOS EMPRESAS DEL GRUPO
   ============================================================================
   Cada empresa tiene su propia página (elektron.html / labelec.html).
   Acá se define TODO lo que aparece, tanto en la tarjeta de la home como
   dentro de su página propia.
   ---------------------------------------------------------------------------- */
/*  👉 El ORDEN de esta lista es el orden en que salen las tarjetas en la home.
    Hoy: LABELEC a la izquierda, ELEKTRON a la derecha.  */
const EMPRESAS_GRUPO = [
  {
    id: "labelec",
    nombre: "LABELEC",
    lema: "Diagnose, Repair & Maintain",
    icono: "images/labelec.png",
    pagina: "labelec/index.html",
    color: "#ff8a3d",                     // color de acento (naranja Labelec)

    descripcion: "Especialista en electrónica y laboratorio: diseño, mantenimiento y reparación de sistemas electrónicos, instrumentación y control industrial.",

    heroImagen: "images/labelec-hero.jpg",
    intro: "En LABELEC diagnosticamos, reparamos y mantenemos equipos electrónicos de todo tipo. Nuestro laboratorio abarca desde electrónica industrial y control de procesos hasta equipos biomédicos y electrónica de consumo, con precisión y trazabilidad en cada servicio.",

    servicios: [
      { titulo: "Reparación de Placas", texto: "Diagnóstico y reparación de placas electrónicas a nivel componente." },
      { titulo: "Equipos Industriales", texto: "Reparación de variadores, drives, PLCs, HMIs y fuentes." },
      { titulo: "Instrumentación y Control", texto: "Calibración y mantenimiento de instrumentos de medición y control." },
      { titulo: "Equipos Biomédicos", texto: "Mantenimiento y reparación de equipamiento médico." },
      { titulo: "Electrónica Automotriz", texto: "Reparación de módulos, audio y sistemas electrónicos vehiculares." },
      { titulo: "Normalizaciones Técnicas", texto: "Puesta en norma y certificación de equipos e instalaciones." },
    ],
  },
  {
    // --- Identificación ---
    id: "elektron",                       // no cambiar (enlaza con elektron.html)
    nombre: "ELEKTRON",
    lema: "Build & Install",              // frase corta bajo el nombre
    icono: "images/elektron.png",
    pagina: "elektron.html",              // página propia
    color: "#00c2ff",                     // color de acento de esta empresa (celeste)

    // --- Texto para la TARJETA de la home ---
    descripcion: "Especialista en instalaciones electromecánicas y termomecánicas, con enfoque en eficiencia energética, automatización y cumplimiento normativo.",

    // --- Contenido de la PÁGINA PROPIA (elektron.html) ---
    heroImagen: "images/elektron-hero.jpg",   // imagen grande de cabecera
    intro: "En ELEKTRON diseñamos, construimos e instalamos soluciones eléctricas y electromecánicas para la industria, el comercio y grandes proyectos. Desde la ingeniería hasta la puesta en marcha, ejecutamos obras llave en mano con los más altos estándares de seguridad y calidad.",

    // Lista de servicios (aparecen como tarjetas en la página propia)
    servicios: [
      { titulo: "Ingeniería Eléctrica", texto: "Proyectos de media y baja tensión, cálculo y diseño de instalaciones." },
      { titulo: "Fabricación de Tableros", texto: "Diseño y armado de tableros de comando, potencia y automatización." },
      { titulo: "Obras Llave en Mano", texto: "Ejecución integral de obras, desde el proyecto hasta la puesta en marcha." },
      { titulo: "Automatización Industrial", texto: "PLCs, sistemas de control y optimización de procesos productivos." },
      { titulo: "Mantenimiento Industrial", texto: "Mantenimiento preventivo y correctivo de instalaciones eléctricas." },
      { titulo: "Eficiencia Energética", texto: "Estudios y soluciones para reducir el consumo y mejorar el rendimiento." },
    ],
  },
];




/* ----------------------------------------------------------------------------
   5. TRABAJOS REALIZADOS (portfolio)
   👉 Se mudaron a su propio archivo:  trabajos-datos.js
      Las fotos se arman solas desde las carpetas de images/trabajos/
      (ver LEEME.md). Acá no hay nada que editar.
   ---------------------------------------------------------------------------- */


/* ----------------------------------------------------------------------------
   6. CLIENTES (logos)
   👉 Guardá cada logo en:  images/clientes/  (PNG con fondo transparente, ideal)
   ---------------------------------------------------------------------------- */
const CLIENTES = [
  { nombre: "Cliente 1", logo: "images/clientes/cliente-1.png" },
  { nombre: "Cliente 2", logo: "images/clientes/cliente-2.png" },
  { nombre: "Cliente 3", logo: "images/clientes/cliente-3.png" },
  { nombre: "Cliente 4", logo: "images/clientes/cliente-4.png" },
  { nombre: "Cliente 5", logo: "images/clientes/cliente-5.png" },
  { nombre: "Cliente 6", logo: "images/clientes/cliente-6.png" },
  { nombre: "Cliente 7", logo: "images/clientes/cliente-7.png" },
  { nombre: "Cliente 8", logo: "images/clientes/cliente-8.png" },
  { nombre: "Cliente 9", logo: "images/clientes/cliente-9.png" },
  { nombre: "Cliente 10", logo: "images/clientes/cliente-10.png" },
  { nombre: "Cliente 11", logo: "images/clientes/cliente-11.png" },
  { nombre: "Cliente 12", logo: "images/clientes/cliente-12.png" },
  { nombre: "Cliente 13", logo: "images/clientes/cliente-13.png" },
  { nombre: "Cliente 14", logo: "images/clientes/cliente-14.png" },
  { nombre: "Cliente 15", logo: "images/clientes/cliente-15.png" },
  { nombre: "Cliente 16", logo: "images/clientes/cliente-16.png" },

  // 👇 Copiá esta línea para sumar un cliente:
  // { nombre: "Nombre Cliente", logo: "images/clientes/archivo.png" },
];


/* ----------------------------------------------------------------------------
   7. SECTORES DE APLICACIÓN
   ============================================================================
   Cada sector es una tarjeta con imagen de fondo. Al pasar el mouse se
   despliega la lista de servicios.
     - icono: elegí uno de: engranaje, rayo, mineria, agro
     - contador: el datito de la esquina (ej: "+250", "proyectos")
     - servicios: la lista que aparece al hacer hover
   ---------------------------------------------------------------------------- */
const SECTORES = [
  {
    titulo: "Industria",
    imagen: "images/sectores/industria.jpg",
    descripcion: "Automatización, tableros y mantenimiento para plantas industriales.",
    icono: "engranaje",
    contadorNum: "+20",
    contadorTxt: "proyectos",
    servicios: ["Automatización PLC", "Tableros eléctricos", "Variadores de velocidad", "Instrumentación", "Mantenimiento industrial"],
  },
  {
    titulo: "Energía",
    imagen: "images/sectores/energia.jpg",
    descripcion: "Generación renovable y eficiencia energética.",
    icono: "rayo",
    contadorNum: "+10",
    contadorTxt: "proyectos",
    servicios: ["Energía solar", "Bancos de baterías", "UPS", "Inversores", "Eficiencia energética"],
  },
  {
    titulo: "Minería",
    imagen: "images/sectores/mineria.jpg",
    descripcion: "Soluciones eléctricas para operaciones mineras.",
    icono: "mineria",
    contadorNum: "+5",
    contadorTxt: "proyectos",
    servicios: ["Tableros MT/BT", "Automatización", "Mantenimiento", "Protecciones eléctricas", "Ingeniería"],
  },
  {
    titulo: "Agroindustria",
    imagen: "images/sectores/agro.jpg",
    descripcion: "Instalaciones y automatización para el sector agroindustrial.",
    icono: "agro",
    contadorNum: "+8",
    contadorTxt: "proyectos",
    servicios: ["Sistemas de riego", "Automatización", "Bombas", "Energía solar", "Tableros eléctricos"],
  },
];

// Barra de valores debajo de los sectores (los 4 íconos con texto)
const SECTORES_VALORES = [
  { icono: "equipo",     num: "+4 años",    txt: "de experiencia" },
  { icono: "medalla",    num: "Calidad",     txt: "en cada proyecto" },
  { icono: "apreton",    num: "Compromiso",  txt: "con nuestros clientes" },
  { icono: "soporte",    num: "Servicio",    txt: "postventa" },
];



/* ----------------------------------------------------------------------------
   8. OFICINAS
   ---------------------------------------------------------------------------- */
const OFICINAS = [
  {
    ciudad: "Salta Capital",
    // "descripcion" es la línea que se ve debajo del nombre (si la borrás, se
    // muestra la dirección). La dirección exacta ya aparece al pie del mapa.
    descripcion: "Taller de electrónica, laboratorio y oficina comercial.",
    direccion: "10 de Octubre 985, Salta Capital, Argentina",
    // 👇 Podés poner 1, 3 o las fotos que quieras. Se muestran en un carrusel.
    imagenes: [
      "images/oficinas/salta.jpg",
      "images/oficinas/salta-2.jpg",
      "images/oficinas/salta-3.jpg",
    ],
  },
  // 👇 Copiá este bloque para agregar otra oficina:
  // {
  //   ciudad: "Ciudad",
  //   direccion: "Dirección completa",
  //   imagenes: [
  //     "images/oficinas/foto-1.jpg",
  //     "images/oficinas/foto-2.jpg",
  //   ],
  // },
];


/* ----------------------------------------------------------------------------
   9. PIE DE PÁGINA (FOOTER) — el bloque final de la web
   👉 Acá editás la descripción, las redes sociales, las dos columnas de
      enlaces (Elektron / Labelec) y los datos de contacto.
   ---------------------------------------------------------------------------- */
const FOOTER = {

  // Texto descriptivo debajo del logo
  descripcion: "Un grupo multinacional de ingeniería dedicado a la innovación, la eficiencia y el avance tecnológico sostenible.",

  // Redes sociales (dejá "" en las que no uses y no aparecerán)
  redes: {
    instagram: "https://instagram.com/",
    facebook:  "https://facebook.com/",
    linkedin:  "https://linkedin.com/",
    youtube:   "https://youtube.com/",
  },

  // Primera columna de enlaces
  columna1: {
    titulo: "ELEKTRON",
    enlaces: [
      { texto: "Sobre la Empresa",        ancla: "#grupo" },
      { texto: "Ingeniería Eléctrica",    ancla: "#trabajos" },
      { texto: "Fabricación de Tableros", ancla: "#trabajos" },
      { texto: "Obras Llave en Mano",     ancla: "#trabajos" },
      { texto: "Mantenimiento Industrial",ancla: "#sectores" },
    ],
  },

  // Segunda columna de enlaces
  columna2: {
    titulo: "LABELEC",
    enlaces: [
      { texto: "Sobre la Empresa",            ancla: "#grupo" },
      { texto: "Equipos Industriales",        ancla: "#trabajos" },
      { texto: "Reparación de Placas",        ancla: "#trabajos" },
      { texto: "Normalizaciones Técnicas",    ancla: "#sectores" },
      { texto: "Service de Electrodomésticos",ancla: "#sectores" },
    ],
  },

  // Columna de contacto (dejá "" en lo que no quieras mostrar)
  contacto: {
    titulo: "Contacto",
    direccion: "10 de Octubre 985, Salta Capital",
    email: "contacto@elektron-electromecanica.com.ar",
    web: "elektron-electromecanica.com.ar",
    telefono: "(+54) 3875150210",
    horario: "Lunes a Viernes, 9:00 – 17:00",
  },
};
