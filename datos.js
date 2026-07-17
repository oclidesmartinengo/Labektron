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
   2. MENÚ DE NAVEGACIÓN (los enlaces de arriba)
   👉 "texto" es lo que se ve; "ancla" es la sección a la que salta (no la toques
      salvo que sepas lo que hacés). El botón "Contactanos" se edita más abajo.
   ---------------------------------------------------------------------------- */
const MENU = [
  { texto: "El Grupo",  ancla: "#grupo" },
  { texto: "Trabajos",  ancla: "#trabajos" },
  { texto: "Clientes",  ancla: "#clientes" },
  { texto: "Sectores",  ancla: "#sectores" },
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
  grupo: {
    eyebrow: "Un grupo, dos especialidades",
    titulo: "La sinergia que impulsa cada proyecto",
    subtitulo: "Dos empresas complementarias que integran ingeniería, ejecución y tecnología en una sola solución.",
  },
  trabajos: {
    eyebrow: "Portfolio",
    titulo: "Trabajos realizados",
    subtitulo: "Proyectos ejecutados con estándares de calidad, seguridad y eficiencia.",
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
  testimonios: {
    eyebrow: "Testimonios",
    titulo: "Lo que dicen nuestros clientes",
    subtitulo: "",
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
};


/* ----------------------------------------------------------------------------
   4. LAS DOS EMPRESAS DEL GRUPO (sinergia)
   ---------------------------------------------------------------------------- */
const EMPRESAS_GRUPO = [
  {
    nombre: "ELEKTRON",
    icono: "images/elektron.png",
    descripcion: "Ingeniería y ejecución de proyectos eléctricos de media y baja tensión, automatización industrial y tableros.",
  },
  {
    nombre: "LABELEC",
    icono: "images/labelec.png",
    descripcion: "Laboratorio de ensayos eléctricos, mantenimiento predictivo y soluciones en energías renovables.",
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
   ---------------------------------------------------------------------------- */
const TRABAJOS = [
  {
    titulo: "Parque Fotovoltaico",
    imagen: "images/trabajos/parque-fotovoltaico.jpg",
    descripcion: "Diseño e instalación de parque de generación solar.",

    // --- Detalles de obra (aparecen en la galería) ---
    detalles: {
      cliente:   "Nombre del cliente",
      ubicacion: "Salta, Argentina",
      fecha:     "2024",
      duracion:  "6 meses",
      tecnicos:  "Potencia instalada: 500 kW · 1.200 paneles",  // datos técnicos
    },
    descripcionLarga: "Descripción completa de la obra: alcance del proyecto, etapas de ejecución, desafíos resueltos y resultados obtenidos. Reemplazá este texto por los detalles reales del parque fotovoltaico.",

    // --- Fotos de la galería (agregá o quitá las que quieras) ---
    galeria: [
      "images/trabajos/parque-fotovoltaico.jpg",
      "images/trabajos/parque-fotovoltaico-2.jpg",
      "images/trabajos/parque-fotovoltaico-3.jpg",
    ],
  },
  {
    titulo: "Seccionadora Automática",
    imagen: "images/trabajos/seccionadora.jpg",
    descripcion: "Instalación de seccionadora automática de media tensión.",
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
   8. TESTIMONIOS
   ---------------------------------------------------------------------------- */
const TESTIMONIOS = [
  {
    texto: "Excelente trabajo y profesionalismo en cada etapa del proyecto.",
    autor: "Nombre del cliente",
    cargo: "Empresa / Cargo",
  },
  {
    texto: "Cumplieron los plazos y la calidad superó nuestras expectativas.",
    autor: "Nombre del cliente",
    cargo: "Empresa / Cargo",
  },
];


/* ----------------------------------------------------------------------------
   9. OFICINAS
   ---------------------------------------------------------------------------- */
const OFICINAS = [
  {
    ciudad: "Salta",
    direccion: "Dirección de la oficina, Salta, Argentina",
    imagen: "images/oficinas/salta.jpg",
  },
  // 👇 Copiá este bloque para agregar otra oficina:
  // {
  //   ciudad: "Ciudad",
  //   direccion: "Dirección completa",
  //   imagen: "images/oficinas/archivo.jpg",
  // },
];


/* ----------------------------------------------------------------------------
   10. PIE DE PÁGINA (FOOTER) — el bloque final de la web
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
