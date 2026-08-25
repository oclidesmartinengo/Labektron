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
  velocidadCarruselClientes: 45,
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
  { numero: "+4",  texto: "Años de experiencia" },
  { numero: "+70", texto: "Proyectos realizados" },
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
    titulo: "Parque Fotovoltaico OFF-GRID",
    imagen: "images/trabajos/parque-fotovoltaico.jpg",
    descripcion: "Diseño, venta e instalación de parque de generación solar para agro.",

    destacado: true,          // ⭐ aparece en el inicio
    orden: "2024-06",         // para ordenar cronológicamente (AAAA-MM)

    // --- Detalles de obra (aparecen en la galería) ---
    detalles: {
      cliente:   "Espartina - Finca Los Tapires",
      ubicacion: "Las Lajitas, Salta, Argentina",
      fecha:     "Junio 2024",
      duracion:  "5 dias",
      tecnicos:  "*Potencia instalada: 18 kWp en 40 paneles de 450Wp *Potencia de Salida: 20 kW con 4 inversores Growatt SPF5000 *Configuracion de Salida: Trifasica 380V. *Autonomia: 45kWh en 9 Baterias Growatt AXE",  // datos técnicos
    },
    tecnicos: [
      "Potencia instalada: 18 kWp en 40 paneles de 450Wp",
      "Potencia de Salida: 20 kW con 4 inversores Growatt SPF5000",
      "Configuracion de Salida: Trifasica 380V.",
      "Autonomia: 45kWh en 9 Baterias Growatt AXE",
    ],
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
    titulo: "Seccionadora CNC para Placas MDF",
    imagen: "images/trabajos/seccionadora.jpg",
    descripcion: "Instalación y puesta en marcha de seccionadora CNC.",

    destacado: true,          // ⭐ aparece en el inicio
    orden: "2024-07",         // para ordenar cronológicamente (AAAA-MM)
    detalles: {
      cliente:   "Corralon America",
      ubicacion: "Salta Capital, Argentina",
      fecha:     "Julio 2024",
      duracion:  "1 mes",
      tecnicos:  "*Dimensionamiento, diseño e instalacion electrica (conductores y protecciones). *Dimensionamiento e instalacion de sistema de Aire comprimido centralizado para todas las maquinas. *Instalacion de sistema de Aspiracion de aserrin. *Instalacion y medicion de Puesta a Tierra.",
    },
    tecnicos: [
      "Dimensionamiento, diseño e instalacion electrica (conductores y protecciones).",
      "Dimensionamiento e instalacion de sistema de Aire comprimido centralizado para todas las maquinas.",
      "Instalacion de sistema de Aspiracion de aserrin.",
      "Instalacion y medicion de Puesta a Tierra.",
    ],
    descripcionLarga: "Descripción completa de la obra. Reemplazá este texto por los detalles reales del proyecto.",
    galeria: [
      "images/trabajos/seccionadora.jpg",
      "images/trabajos/seccionadora-1.jpg",
      "images/trabajos/seccionadora-2.jpg",
    ],
  },
  {
    titulo: "Chiller para Sopladora de Envases",
    imagen: "images/trabajos/chiller.jpg",
    descripcion: "Fabricación de chiller industrial para línea de soplado.",

    destacado: true,          // ⭐ aparece en el inicio
    orden: "2025-09",         // para ordenar cronológicamente (AAAA-MM)
    detalles: {
      cliente:   "Agua y Soda Ideal",
      ubicacion: "Salta Capital, Argentina",
      fecha:     "Septiembre 2025",
      duracion:  "2 meses",
      tecnicos:  "*Capacidad frigorífica: 10TR. *Intercambiador de placas DANFOSS. *Caudal de recirculacion 6000Lts/h.",
    },
    tecnicos: [
      "Capacidad frigorífica: 10TR.",
      "Intercambiador de placas DANFOSS.",
      "Caudal de recirculacion 6000Lts/h.",
    ],
    descripcionLarga: "Descripción completa de la obra. Reemplazá este texto por los detalles reales del proyecto.",
    galeria: [
      "images/trabajos/chiller.jpg",
      "images/trabajos/chiller-1.jpg",
      "images/trabajos/chiller-2.jpg",
      "images/trabajos/chiller-3.jpg",
      "images/trabajos/chiller-4.jpg",
      "images/trabajos/chiller-5.jpg",
      "images/trabajos/chiller-6.jpg",
      "images/trabajos/chiller-7.jpg",
      "images/trabajos/chiller-8.jpg",
      "images/trabajos/chiller-9.jpg",
      "images/trabajos/chiller-10.jpg",
    ],
  },

  {
    titulo: "Chiller para Carbonatación de Soda",
    imagen: "images/trabajos/awara.jpg",
    descripcion: "Mantenimiento de chiller industrial para línea carbonatacion de soda.",

    destacado: true,          // ⭐ aparece en el inicio
    orden: "2024-12",         // para ordenar cronológicamente (AAAA-MM)
    detalles: {
      cliente:   "Awara",
      ubicacion: "Salta Capital, Argentina",
      fecha:     "Diciembre 2024",
      duracion:  "3 meses",
      tecnicos:  "*Capacidad frigorífica: 72TR. *Intercambio doble Refrigerante-Glicol y Glicol-Agua Carbonatada. *Sistema de Glicol de 1300 Lts. *Temperatura de trabajo -2°C.",
    },
    tecnicos: [
      "Capacidad frigorífica: 72TR.",
      "Intercambio doble Refrigerante-Glicol y Glicol-Agua Carbonatada.",
      "Sistema de Glicol de 1300 Lts.",
      "Temperatura de trabajo -2°C.",
    ],
    descripcionLarga: "Descripción completa de la obra. Reemplazá este texto por los detalles reales del proyecto.",
    galeria: [
      "images/trabajos/awara.jpg",
      "images/trabajos/awara-1.jpg",
      "images/trabajos/awara-2.jpg",
      "images/trabajos/awara-3.jpg",
      "images/trabajos/awara-4.jpg",
      "images/trabajos/awara-5.jpg",
    ],
  },

  {
    titulo: "Sistema Fotovoltaico Domiciliario OFF-GRID",
    imagen: "images/trabajos/maimara.jpg",
    descripcion: "Dimensionamiento, diseño, venta y puesta en marcha de sistema fotovoltaico para autoconsumo sin red electrica",

    destacado: true,          // ⭐ aparece en el inicio
    orden: "2024-06",         // para ordenar cronológicamente (AAAA-MM)
    detalles: {
      cliente:   "Facundo",
      ubicacion: "Maimara, Jujuy, Argentina",
      fecha:     "Junio 2024",
      duracion:  "2 dias",
      tecnicos:  "*Potencia instalada: 5.4 kWp en 12 paneles de 450Wp. *Potencia de Salida: 5 kW con 1 inversor Growatt SPF5000. *Configuracion de Salida: Monofasica 220V. *Autonomia: 15kWh en 2 Baterias Pylontech",  // datos técnicos
    },
    tecnicos: [
      "Potencia instalada: 5.4 kWp en 12 paneles de 450Wp.",
      "Potencia de Salida: 5 kW con 1 inversor Growatt SPF5000.",
      "Configuracion de Salida: Monofasica 220V.",
      "Autonomia: 15kWh en 2 Baterias Pylontech.",
    ],
    descripcionLarga: "Descripción completa de la obra. Reemplazá este texto por los detalles reales del proyecto.",
    galeria: [
      "images/trabajos/maimara.jpg",
      "images/trabajos/maimara-1.jpg",
      "images/trabajos/maimara-2.jpg",
    ],
  },
  {
    titulo: "Instalacion Electrica Industrial",
    imagen: "images/trabajos/metalnoa.jpg",
    descripcion: "Instalacion electrica completa.",

    destacado: false,         // no aparece en el inicio, solo en trabajos.html
    orden: "2024-11",
    detalles: {
      cliente:   "Metalnoa",
      ubicacion: "Salta Capital, Argentina",
      fecha:     "Noviembre 2024",
      duracion:  "5 Semanas",
      tecnicos:  "*Dimensionamiento, diseño de planos electricos y ejecucion de instalacion electrica nueva. *Montaje de bandejas de canalizacion. *Armado de tableros con protecciones y conexiones de salida con fichas industriales Monofasicas y Trifasicas. *Armado de planos electricos aprobados para habilitacion municipal.",
    },
    tecnicos: [
      "Dimensionamiento, diseño de planos electricos y ejecucion de instalacion electrica nueva.",
      "Montaje de bandejas de canalizacion.",
      "Armado de tableros con protecciones y conexiones de salida con fichas industriales Monofasicas y Trifasicas.",
      "Armado de planos electricos aprobados para habilitacion municipal.",
    ],
    descripcionLarga: "Descripción completa de la obra. Reemplazá este texto por los detalles reales del proyecto.",
    galeria: [
      "images/trabajos/metalnoa.jpg",
      "images/trabajos/metalnoa-1.jpg",
      "images/trabajos/metalnoa-2.jpg",
      "images/trabajos/metalnoa-3.jpg",
      "images/trabajos/metalnoa-4.jpg",
    ],
  },
  {
    titulo: "Sistema de Backup de energia Monofasico",
    imagen: "images/trabajos/backup.jpg",
    descripcion: "Diseño, acondicionamiento e instalacion",

    destacado: false,         // no aparece en el inicio, solo en trabajos.html
    orden: "2025-09",
    detalles: {
      cliente:   "Vissionary Fitness GYM",
      ubicacion: "Salta Capital, Argentina",
      fecha:     "Septiembre 2025",
      duracion:  "1 Dia",
      tecnicos:  "*Dimensionamiento, diseño de planos electricos y ejecucion de instalacion electrica nueva. *Montaje de bandejas de canalizacion. *Armado de tableros con protecciones y conexiones de salida con fichas industriales Monofasicas y Trifasicas. *Armado de planos electricos aprobados para habilitacion municipal.",
    },
    tecnicos: [
      "Dimensionamiento de autonomia y potencia de salida.",
      "Venta e Instalacion de sistema.",
      "Adecuacion electrica de circuitos prioritarios.",
      "Potencia de Salida: 6kW",
    ],
    descripcionLarga: "Descripción completa de la obra. Reemplazá este texto por los detalles reales del proyecto.",
    galeria: [
      "images/trabajos/backup.jpg",
      "images/trabajos/backup-1.jpg",
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
  //   },
  //   tecnicos: [
  //     "Primer dato técnico",
  //     "Segundo dato técnico",
  //   ],
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
