/* ============================================================================
   TRABAJOS DEL SITIO PRINCIPAL  —  ESTE ES EL ÚNICO ARCHIVO QUE EDITÁS
   ============================================================================

   CÓMO AGREGAR UN TRABAJO NUEVO (2 pasos)
   ---------------------------------------
   1) Creá una carpeta con las fotos:
          originales/trabajos/NOMBRE-DEL-TRABAJO/
      y tirá adentro TODAS las fotos que quieras, con el nombre que tengan
      (IMG_2034.jpg, foto de whatsapp, lo que sea). No hay que contarlas,
      ni numerarlas, ni anotarlas en ningún lado.

      👉 Si querés elegir cuál es la PORTADA, renombrá esa foto a
         "portada.jpg". Si no, se usa la primera por orden alfabético.

   2) Copiá el bloque de ejemplo del final de este archivo, pegalo acá
      arriba y completá los textos. En "carpeta" va EL NOMBRE EXACTO
      de la carpeta que creaste en el paso 1.

   3) Doble clic en  ACTUALIZAR.bat  y listo: optimiza las fotos, las
      copia a images/ y arma sola la lista (fotos.js). Nunca toques fotos.js.

   CAMPOS
   ------
   titulo            nombre del trabajo
   carpeta           nombre de la carpeta con las fotos (sin barras ni espacios)
   descripcion       texto corto de la tarjeta
   destacado: true   aparece también en la página de inicio (elegí los 5 mejores)
   orden: "2024-06"  AAAA-MM, para ordenar. Los más nuevos aparecen primero
   detalles          cliente / ubicación / fecha / duración (borrá los que no uses)
   tecnicos          lista de datos técnicos (viñetas)
   descripcionLarga  el texto completo que se ve al abrir la galería

   ⚠️  Editá SOLO lo que está entre comillas. Nunca cambies los nombres de
       los campos (lo que está antes de los dos puntos).
   ============================================================================ */

const TRABAJOS = [
  {
    titulo: "Parque Fotovoltaico OFF-GRID",
    carpeta: "parque-fotovoltaico",
    descripcion: "Diseño, venta e instalación de parque de generación solar para agro.",

    destacado: true,          // ⭐ aparece en el inicio
    orden: "2024-06",         // para ordenar cronológicamente (AAAA-MM)

    // --- Detalles de obra (aparecen en la galería) ---
    detalles: {
      cliente:   "Espartina - Finca Los Tapires",
      ubicacion: "Las Lajitas, Salta, Argentina",
      fecha:     "Junio 2024",
      duracion:  "5 dias",
    },
    tecnicos: [
      "Potencia instalada: 18 kWp en 40 paneles de 450Wp",
      "Potencia de Salida: 20 kW con 4 inversores Growatt SPF5000",
      "Configuracion de Salida: Trifasica 380V.",
      "Autonomia: 45kWh en 9 Baterias Growatt AXE",
    ],
    descripcionLarga: "Descripción completa de la obra: alcance del proyecto, etapas de ejecución, desafíos resueltos y resultados obtenidos. Reemplazá este texto por los detalles reales del parque fotovoltaico.",

  },
  {
    titulo: "Seccionadora CNC para Placas MDF",
    carpeta: "seccionadora",
    descripcion: "Instalación y puesta en marcha de seccionadora CNC.",

    destacado: true,          // ⭐ aparece en el inicio
    orden: "2024-07",         // para ordenar cronológicamente (AAAA-MM)
    detalles: {
      cliente:   "Corralon America",
      ubicacion: "Salta Capital, Argentina",
      fecha:     "Julio 2024",
      duracion:  "1 mes",
    },  
    tecnicos: [
      "Dimensionamiento, diseño e instalacion electrica (conductores y protecciones).",
      "Dimensionamiento e instalacion de sistema de Aire comprimido centralizado para todas las maquinas.",
      "Instalacion de sistema de Aspiracion de aserrin.",
      "Instalacion y medicion de Puesta a Tierra.",
    ],
    descripcionLarga: "Descripción completa de la obra. Reemplazá este texto por los detalles reales del proyecto.",
  },
  {
    titulo: "Chiller para Sopladora de Envases",
    carpeta: "chiller",
    descripcion: "Fabricación de chiller industrial para línea de soplado.",

    destacado: false,          // ⭐ aparece en el inicio
    orden: "2025-09",         // para ordenar cronológicamente (AAAA-MM)
    detalles: {
      cliente:   "Agua y Soda Ideal",
      ubicacion: "Salta Capital, Argentina",
      fecha:     "Septiembre 2025",
      duracion:  "2 meses",
    },
    tecnicos: [
      "Capacidad frigorífica: 10TR.",
      "Intercambiador de placas DANFOSS.",
      "Caudal de recirculacion 6000Lts/h.",
    ],
    descripcionLarga: "Descripción completa de la obra. Reemplazá este texto por los detalles reales del proyecto.",
  },

  {
    titulo: "Chiller para Carbonatación de Soda",
    carpeta: "awara",
    descripcion: "Mantenimiento de chiller industrial para línea carbonatacion de soda.",

    destacado: true,          // ⭐ aparece en el inicio
    orden: "2024-12",         // para ordenar cronológicamente (AAAA-MM)
    detalles: {
      cliente:   "Awara",
      ubicacion: "Salta Capital, Argentina",
      fecha:     "Diciembre 2024",
      duracion:  "3 meses",
    },
    tecnicos: [
      "Capacidad frigorífica: 72TR.",
      "Intercambio doble Refrigerante-Glicol y Glicol-Agua Carbonatada.",
      "Sistema de Glicol de 1300 Lts.",
      "Temperatura de trabajo -2°C.",
    ],
    descripcionLarga: "Descripción completa de la obra. Reemplazá este texto por los detalles reales del proyecto.",
  },

  {
    titulo: "Sistema Fotovoltaico Domiciliario OFF-GRID",
    carpeta: "maimara",
    descripcion: "Dimensionamiento, diseño, venta y puesta en marcha de sistema fotovoltaico para autoconsumo sin red electrica",

    destacado: true,          // ⭐ aparece en el inicio
    orden: "2024-06",         // para ordenar cronológicamente (AAAA-MM)
    detalles: {
      cliente:   "Facundo",
      ubicacion: "Maimara, Jujuy, Argentina",
      fecha:     "Junio 2024",
      duracion:  "2 dias",
    },
    tecnicos: [
      "Potencia instalada: 5.4 kWp en 12 paneles de 450Wp.",
      "Potencia de Salida: 5 kW con 1 inversor Growatt SPF5000.",
      "Configuracion de Salida: Monofasica 220V.",
      "Autonomia: 15kWh en 2 Baterias Pylontech.",
    ],
    descripcionLarga: "Descripción completa de la obra. Reemplazá este texto por los detalles reales del proyecto.",
  },
  {
    titulo: "Instalacion Electrica Industrial",
    carpeta: "metalnoa",
    descripcion: "Instalacion electrica completa.",

    destacado: false,         // no aparece en el inicio, solo en trabajos.html
    orden: "2024-11",
    detalles: {
      cliente:   "Metalnoa",
      ubicacion: "Salta Capital, Argentina",
      fecha:     "Noviembre 2024",
      duracion:  "5 Semanas",
    },
    tecnicos: [
      "Dimensionamiento, diseño de planos electricos y ejecucion de instalacion electrica nueva.",
      "Montaje de bandejas de canalizacion.",
      "Armado de tableros con protecciones y conexiones de salida con fichas industriales Monofasicas y Trifasicas.",
      "Armado de planos electricos aprobados para habilitacion municipal.",
    ],
    descripcionLarga: "Descripción completa de la obra. Reemplazá este texto por los detalles reales del proyecto.",
  },
  {
    titulo: "Sistema de Backup de energia Monofasico",
    carpeta: "backup",
    descripcion: "Diseño, acondicionamiento e instalacion",

    destacado: false,         // no aparece en el inicio, solo en trabajos.html
    orden: "2025-09",
    detalles: {
      cliente:   "Vissionary Fitness GYM",
      ubicacion: "Salta Capital, Argentina",
      fecha:     "Septiembre 2025",
      duracion:  "1 Dia",
    },
    tecnicos: [
      "Dimensionamiento de autonomia y potencia de salida.",
      "Venta e Instalacion de sistema.",
      "Adecuacion electrica de circuitos prioritarios.",
      "Potencia de Salida: 6kW",
    ],
    descripcionLarga: "Descripción completa de la obra. Reemplazá este texto por los detalles reales del proyecto.",
  },
  {
    titulo: "Sistema Fotovoltaico Industrial ON-GRID",
    carpeta: "tambo",
    descripcion: "Diseño, direccion de obra y puesta en marcha de sistema fotovoltaico para reducir factura de red electrica",

    destacado: false,          // ⭐ aparece en el inicio
    orden: "2025-03",         // para ordenar cronológicamente (AAAA-MM)
    detalles: {
      cliente:   "Tambo robotizado Quijano",
      ubicacion: "Campo Quijano, Salta, Argentina",
      fecha:     "Marzo 2025",
      duracion:  "2 semanas",
    },
    tecnicos: [
      "Potencia instalada: 41 kWp en 72 paneles de 570Wp.",
      "Potencia de Salida: 40 kW con 1 inversor Growatt MID40kW.",
      "Configuracion de Salida: Trifasica 380V.",
      "Ahorro estimado de factura: 570 USD / Mensual",
    ],
    descripcionLarga: "Descripción completa de la obra. Reemplazá este texto por los detalles reales del proyecto.",
  },
  {
    titulo: "Reinstalacion electrica de Planta Porotera",
    carpeta: "porotera",
    descripcion: "Desinstalacion y reinstalacion de sistema electrico completo en planta industrial",

    destacado: false,          // ⭐ aparece en el inicio
    orden: "2024-04",         // para ordenar cronológicamente (AAAA-MM)
    detalles: {
      cliente:   "Porotera",
      ubicacion: "General Gûemes, Salta, Argentina",
      fecha:     "Abril 2024",
      duracion:  "4 semanas",
    },
    tecnicos: [
      "Canalizacion completa por bandejas perforadas.",
      "Reubicacion de Tableros de comando y potencia.",
      "Recableado completo.",
      "Realizacion de planos electricos y repotencializacion de acometida.",
    ],
    descripcionLarga: "Descripción completa de la obra. Reemplazá este texto por los detalles reales del proyecto.",
  },
  {
    titulo: "Estacionamiento Fotovoltaico Comercial ON-GRID + Backup",
    carpeta: "vissionary",
    descripcion: "Idea, Diseño, Venta, Instalacion y puesta en marcha",

    destacado: true,         // no aparece en el inicio, solo en trabajos.html
    orden: "2026-09",
    detalles: {
      cliente:   "Vissionary Fitness GYM",
      ubicacion: "Salta Capital, Argentina",
      fecha:     "Septiembre 2026",
      duracion:  "6 Dias",
    },
    tecnicos: [
      "Planteamiento de Idea, Dimensionamiento de parque y de estructura metalica.",
      "Dimensionamiento de autonomia y potencia de salida.",
      "Venta e Instalacion del sistema Fotovoltaico.",
      "Diseño de estructura, calculo estructural y fabricacion.",
      "Planteamiento y mejora de iluminacion y reinstalacion de camaras.",
      "Potencia Fotovoltaica: 11,6 kWp",
      "Potencia de Salida: 10kW",
    ],
    descripcionLarga: "Descripción completa de la obra. Reemplazá este texto por los detalles reales del proyecto.",
  },
  {
    titulo: "Medicion de Puesta a Tierra - POSCO Argentina  ",
    carpeta: "posco",
    descripcion: "Medicion de PAT segun SRT900/15 en Pararayos y Tableros Electricos de Campamento y planta Industrial",

    destacado: false,          // ⭐ aparece en el inicio
    orden: "2025-08",         // para ordenar cronológicamente (AAAA-MM)
    detalles: {
      cliente:   "POSCO Argentina",
      ubicacion: "San Antonio de los Cobres, Salta, Argentina",
      fecha:     "Agosto 2025",
      duracion:  "2 dias",
    },
    tecnicos: [
      "Puntos de medicion: 39 Puntos entre Pararayos, tableros y Sala de maquinas.",
      "Equipo utilizado: CEM DT-6650.",
      "Medicion Promedio: 1,67 Ohm.",
    ],
    descripcionLarga: "Descripción completa de la obra. Reemplazá este texto por los detalles reales del proyecto.",
  },

  // 👇 EJEMPLO — copiá este bloque completo para agregar un trabajo nuevo:
  // {
  //   titulo: "Nombre del trabajo",
  //   carpeta: "nombre-de-la-carpeta",
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
  // },
];
