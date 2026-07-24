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
  eslogan: "Innovación y Tecnología para un Futuro Eficiente",
  descripcionHero: "Soluciones integrales en ingeniería eléctrica, electrónica y energía fotovoltaica.",
  logo: "images/logo.png",

  // Botones del inicio (hero)
  botonHero1: "Ver trabajos",
  botonHero2: "Hablemos",

  // Imagen grande del hero (lado derecho)
  imagenHero: "images/hero.png",

  // Las palabras del eslogan que se pintan con degradado celeste→naranja.
  // Tienen que estar escritas igual que en el eslogan de arriba.
  destacarEnEslogan: "Futuro Eficiente",

  // Contacto
  whatsapp: "5493875895447",           // Número con código de país, sin + ni espacios
  whatsappTexto: "Hola, quiero más información sobre los servicios de Grupo Labektron.",
  email: "contacto@labektron.com",
  telefono: "+54 387 000 0000",

  // Texto que aparece abajo de todo (footer)
  footerCopyright: "Todos los derechos reservados",

  // Velocidad del carrusel de clientes (en segundos por vuelta completa).
  // Más alto = más lento y suave. Más bajo = más rápido. Probá con 30, 40, 60...
  velocidadCarruselClientes: 40,
};


/* ----------------------------------------------------------------------------
   1.b VALORES DEL HERO (los 4 íconos debajo de los botones)
   👉 "icono" elegí uno de: rayo, grafico, escudo, hoja, engranaje, reloj
   ---------------------------------------------------------------------------- */
const VALORES_HERO = [
  { icono: "rayo",      linea1: "Innovación",  linea2: "constante" },
  { icono: "grafico",   linea1: "Eficiencia",  linea2: "y calidad" },
  { icono: "escudo",    linea1: "Confianza",   linea2: "y seguridad" },
  { icono: "hoja",      linea1: "Compromiso",  linea2: "sostenible" },
];


/* ----------------------------------------------------------------------------
   1.c ESTADÍSTICAS (la barra de números debajo del hero)
   👉 Para sacar la barra entera, dejá la lista vacía así:  const ESTADISTICAS = [];
   ---------------------------------------------------------------------------- */
const ESTADISTICAS = [
  { numero: "+3",  texto: "Años de experiencia" },
  { numero: "+50", texto: "Proyectos realizados" },
  { numero: "2",    texto: "Empresas especializadas" },
  { numero: "1",    texto: "Misma visión de futuro" },
];

// Frase que aparece a la derecha de las estadísticas
const FRASE_ESTADISTICAS = {
  linea1: "Dos especialidades. Un solo propósito:",
  linea2: "Impulsar el desarrollo con tecnología y conocimiento.",
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
    // Podés poner "negrita" al inicio de un párrafo con el campo "titulo".
    parrafos: [
      { titulo: "", texto: "GRUPO LABEKTRON es una sociedad conformada por ELEKTRON y LABELEC, dos empresas especializadas en diferentes áreas de la ingeniería para ofrecer soluciones integrales en los sectores industrial, comercial y residencial." },
      { titulo: "ELEKTRON:", texto: "Especialista en instalaciones electromecánicas y termomecánicas, con un enfoque en eficiencia energética, automatización y cumplimiento normativo." },
      { titulo: "LABELEC:", texto: "Especialista en electrónica y laboratorio, brindando soluciones en diseño, mantenimiento y reparación de sistemas electrónicos, instrumentación y control industrial." },
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
  oficinas: {
    eyebrow: "Dónde estamos",
    titulo: "Nuestras oficinas",
    subtitulo: "",
  },
  contacto: {
    titulo: "¿Tenés un proyecto en mente?",
    subtitulo: "Escribinos y coordinemos una reunión. Te asesoramos sin compromiso.",
    boton: "Escribinos por WhatsApp",
  },
  mapa: {
    eyebrow: "Cómo llegar",
    titulo: "Nuestra ubicación",
    subtitulo: "Visitanos en nuestras oficinas.",
    // 👇 Dirección que se muestra y se busca en el mapa.
    //    Cambiala por la real (calle, número, ciudad).
    direccion: "10 de Octubre 985, Salta Capital, Argentina",
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
const EMPRESAS_GRUPO = [
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
  {
    id: "labelec",
    nombre: "LABELEC",
    lema: "Diagnose, Repair & Maintain",
    icono: "images/labelec.png",
    pagina: "labelec.html",
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
];


/* ----------------------------------------------------------------------------
   5. TRABAJOS REALIZADOS (portfolio)
   ============================================================================
   Cada trabajo tiene DOS partes:

   (A) Lo que se ve en la tarjeta del listado:
       - titulo, imagen (la foto de portada), descripcion (texto corto)

   (B) Lo que se ve al hacer CLICK en la tarjeta (se abre una galería):
       - detalles: datos de obra (cliente, ubicación, fecha, etc.)
                   👉 podés borrar los que no uses o dejarlos en ""
       - descripcionLarga: el texto completo con los detalles de la obra
       - galeria: la lista de fotos del proyecto (se muestran en un carrusel)
                  👉 guardá esas fotos en:  images/trabajos/

   Si un trabajo NO tiene galeria ni descripcionLarga, la tarjeta simplemente
   no abre nada al hacer click (funciona igual que antes).

   ⭐ DESTACADOS Y ORDEN:
   - destacado: true   →  aparece en la página de inicio (elegí los 5 mejores).
     Si no lo ponés (o lo ponés en false), el trabajo solo se ve en trabajos.html
   - orden: "2024-06"  →  se usa para ordenar cronológicamente (año-mes).
     Siempre con este formato: "AAAA-MM". Los más nuevos aparecen primero.
   ---------------------------------------------------------------------------- */
const TRABAJOS = [
  {
    titulo: "Parque Fotovoltaico",
    imagen: "images/trabajos/parque-fotovoltaico.jpg",
    descripcion: "Diseño e instalación de parque de generación solar.",

    destacado: true,          // ⭐ aparece en el inicio
    orden: "2024-06",         // para ordenar cronológicamente (AAAA-MM)

    // --- Detalles de obra (aparecen en la galería) ---
    detalles: {
      cliente:   "Espartina - Finca Los Tapires",
      ubicacion: "Las Lajitas, Salta, Argentina",
      fecha:     "Junio 2024",
      duracion:  "5 dias",
      tecnicos:  "*Potencia instalada: 18 kWp en 40 paneles *Potencia de Salida: 20 kW en 4 inversores Growatt*Autonomia: 45kWh en 9 Baterias Growatt AXE",  // datos técnicos
    },
    descripcionLarga: "Descripción completa de la obra: alcance del proyecto, etapas de ejecución, desafíos resueltos y resultados obtenidos. Reemplazá este texto por los detalles reales del parque fotovoltaico.",

    // --- Fotos de la galería (agregá o quitá las que quieras) ---
    galeria: [
      "images/trabajos/parque-fotovoltaico.jpg",
      "images/trabajos/parque-fotovoltaico-1.jpg",
      "images/trabajos/parque-fotovoltaico-2.jpg",
      "images/trabajos/parque-fotovoltaico-3.jpg",
      "images/trabajos/parque-fotovoltaico-4.jpg",
      "images/trabajos/parque-fotovoltaico-5.jpg",
      "images/trabajos/parque-fotovoltaico-6.jpg",
      "images/trabajos/parque-fotovoltaico-7.jpg",
      "images/trabajos/parque-fotovoltaico-8.jpg",
      "images/trabajos/parque-fotovoltaico-9.jpg",
      "images/trabajos/parque-fotovoltaico-10.jpg",
      "images/trabajos/parque-fotovoltaico-11.jpg",
      "images/trabajos/parque-fotovoltaico-12.jpg",
    ],
  },
  {
    titulo: "Seccionadora Automática",
    imagen: "images/trabajos/seccionadora.jpg",
    descripcion: "Instalación de seccionadora automática de media tensión.",

    destacado: true,          // ⭐ aparece en el inicio
    orden: "2024-03",         // para ordenar cronológicamente (AAAA-MM)
    detalles: {
      cliente:   "Nombre del cliente",
      ubicacion: "Salta, Argentina",
      fecha:     "2024",
      duracion:  "2 meses",
      tecnicos:  "Media tensión 13,2 kV",
    },
    descripcionLarga: "Descripción completa de la obra. Reemplazá este texto por los detalles reales del proyecto.",
    galeria: [
      "images/trabajos/seccionadora.jpg",
    ],
  },
  {
    titulo: "Chiller para Soplado de Envases",
    imagen: "images/trabajos/chiller.jpg",
    descripcion: "Fabricación de chiller industrial para línea de soplado.",

    destacado: true,          // ⭐ aparece en el inicio
    orden: "2023-09",         // para ordenar cronológicamente (AAAA-MM)
    detalles: {
      cliente:   "Nombre del cliente",
      ubicacion: "Salta, Argentina",
      fecha:     "2023",
      duracion:  "3 meses",
      tecnicos:  "Capacidad frigorífica: XX kcal/h",
    },
    descripcionLarga: "Descripción completa de la obra. Reemplazá este texto por los detalles reales del proyecto.",
    galeria: [
      "images/trabajos/chiller.jpg",
    ],
  },
  {
    titulo: "Transferencia Automática 600A",
    imagen: "images/trabajos/transferencia.jpg",
    descripcion: "Tablero de transferencia automática entre red y grupo electrógeno.",

    destacado: true,          // ⭐ aparece en el inicio
    orden: "2023-05",         // para ordenar cronológicamente (AAAA-MM)
    detalles: {
      cliente:   "Nombre del cliente",
      ubicacion: "Salta, Argentina",
      fecha:     "2023",
      duracion:  "1 mes",
      tecnicos:  "Corriente nominal: 600 A",
    },
    descripcionLarga: "Descripción completa de la obra. Reemplazá este texto por los detalles reales del proyecto.",
    galeria: [
      "images/trabajos/transferencia.jpg",
    ],
  },

  {
    titulo: "Tablero de Comando y Potencia",
    imagen: "images/trabajos/tablero.jpg",
    descripcion: "Diseño y fabricación de tablero para línea de producción.",

    destacado: true,          // ⭐ aparece en el inicio
    orden: "2023-02",         // para ordenar cronológicamente (AAAA-MM)
    detalles: {
      cliente:   "Nombre del cliente",
      ubicacion: "Salta, Argentina",
      fecha:     "Febrero 2023",
      duracion:  "1 mes",
      tecnicos:  "Tablero de comando y potencia, 380V",
    },
    descripcionLarga: "Descripción completa de la obra. Reemplazá este texto por los detalles reales del proyecto.",
    galeria: [
      "images/trabajos/tablero.jpg",
    ],
  },
  {
    titulo: "Mantenimiento Industrial",
    imagen: "images/trabajos/mantenimiento.jpg",
    descripcion: "Mantenimiento preventivo de instalaciones eléctricas.",

    destacado: false,         // no aparece en el inicio, solo en trabajos.html
    orden: "2022-11",
    detalles: {
      cliente:   "Nombre del cliente",
      ubicacion: "Salta, Argentina",
      fecha:     "Noviembre 2022",
      duracion:  "Contrato anual",
      tecnicos:  "Mantenimiento preventivo y correctivo",
    },
    descripcionLarga: "Descripción completa de la obra. Reemplazá este texto por los detalles reales del proyecto.",
    galeria: [
      "images/trabajos/mantenimiento.jpg",
    ],
  },

  // 👇 EJEMPLO — copiá este bloque completo para agregar un trabajo nuevo:
  // {
  //   titulo: "Nombre del trabajo",
  //   imagen: "images/trabajos/portada.jpg",
  //   descripcion: "Descripción corta para la tarjeta.",
  //   detalles: {
  //     cliente:   "Nombre del cliente",
  //     ubicacion: "Ciudad, Provincia",
  //     fecha:     "2025",
  //     duracion:  "X meses",
  //     tecnicos:  "Datos técnicos relevantes",
  //   },
  //   descripcionLarga: "Texto largo con todos los detalles de la obra.",
  //   galeria: [
  //     "images/trabajos/foto-1.jpg",
  //     "images/trabajos/foto-2.jpg",
  //   ],
  // },
];


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
   ---------------------------------------------------------------------------- */
const SECTORES = [
  {
    titulo: "Industria",
    imagen: "images/sectores/industria.jpg",
    descripcion: "Automatización, tableros y mantenimiento para plantas industriales.",
  },
  {
    titulo: "Energía",
    imagen: "images/sectores/energia.jpg",
    descripcion: "Generación renovable y eficiencia energética.",
  },
  {
    titulo: "Minería",
    imagen: "images/sectores/mineria.jpg",
    descripcion: "Soluciones eléctricas para operaciones mineras.",
  },
  {
    titulo: "Agroindustria",
    imagen: "images/sectores/agro.jpg",
    descripcion: "Instalaciones y automatización para el sector agroindustrial.",
  },
];




/* ----------------------------------------------------------------------------
   8. OFICINAS
   ---------------------------------------------------------------------------- */
const OFICINAS = [
  {
    ciudad: "Salta",
    direccion: "Dirección de la oficina, Salta, Argentina",
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