/* ============================================================================
   TRABAJOS DE LABELEC  —  ESTE ES EL ÚNICO ARCHIVO QUE EDITÁS PARA LA GALERÍA
   ============================================================================

   CÓMO AGREGAR UN TRABAJO NUEVO (2 pasos)
   ---------------------------------------
   1) Creá una carpeta con las fotos:
          originales/labelec/trabajos/NOMBRE-DEL-TRABAJO/
      y tirá adentro todas las fotos que quieras, con el nombre que tengan.
      No hay que contarlas ni numerarlas.
      👉 Para elegir la portada, llamá a esa foto "portada.jpg".

   2) Copiá el bloque de ejemplo del final, pegalo acá arriba y completá.
      En "carpeta" va el nombre exacto de la carpeta del paso 1.

   3) Doble clic en ACTUALIZAR.bat (está en la carpeta de arriba). Listo.

   CAMPOS
   ------
   titulo    nombre corto del trabajo
   rubro     uno de los id de RUBROS (datos-labelec.js): industrial, biomedica,
             hogar, audio, etc.
   orden     AAAA-MM. Los más nuevos aparecen primero
   equipo    qué equipo era
   falla     qué tenía
   solucion  qué se hizo
   carpeta   nombre de la carpeta con las fotos

   ⚠️  Editá SOLO lo que está entre comillas.
   ============================================================================ */

const TRABAJOS_LABELEC = [
  {
    titulo: "Acelerador electronico Caterpillar",
    rubro: "industrial",
    orden: "2024-05",
    equipo: "Variador trifásico",
    falla: "Sulfato en placa",
    solucion: "Se realizo limpieza integral en batea de ultrasonido y se desoldaron componentes, limpiaron y resoldaron nuevamente, incluyendo el micro.",
    carpeta: "acelerador-electronico",
  },
  {
    titulo: "Arranque suave Siemens 90HP",
    rubro: "industrial",
    orden: "2024-02",
    equipo: "Monitor de signos vitales",
    falla: "Saltaba guardamotor al terminar el tiempo de arranque.",
    solucion: "Se realizaron mantenimiento a los contactos de bypass del variador, ya que uno se encontraba sin conductividad y provocaba que el motor funcione con 2 fases al momento de finalizar la rampa de arranque.",
    carpeta: "arranque-suave",
  },
  {
    titulo: "Smart TV 55\" sin imagen",
    rubro: "hogar",
    orden: "2023-12",
    equipo: "Smart TV LED",
    falla: "Enciende pero sin imagen",
    solucion: "Reparación de la fuente de backlight y reemplazo de tiras LED.",
    carpeta: "bateria-ducati",
  },
  {
    titulo: "Consola 24 canales",
    rubro: "audio",
    orden: "2023-10",
    equipo: "Consola analógica",
    falla: "Canales con ruido y faders sucios",
    solucion: "Reemplazo de 24 faders, limpieza completa y recap de la fuente.",
    carpeta: "cabezal-robotico",
  },
  {
    titulo: "Placa de lavarropas",
    rubro: "hogar",
    orden: "2023-08",
    equipo: "Lavarropas automático",
    falla: "No centrifuga",
    solucion: "Reemplazo de triac de motor y relé de la placa de control.",
    carpeta: "estereo-chevrolet",
  },
  {
    titulo: "Potencia 2 × 1200 W",
    rubro: "audio",
    orden: "2023-06",
    equipo: "Amplificador de potencia",
    falla: "Protección permanente",
    solucion: "Reemplazo de transistores de salida en un canal y ajuste de bias.",
    carpeta: "estereo-pioneer",
  },
  {
    titulo: "Potencia 2 × 1200 W",
    rubro: "audio",
    orden: "2023-06",
    equipo: "Amplificador de potencia",
    falla: "Protección permanente",
    solucion: "Reemplazo de transistores de salida en un canal y ajuste de bias.",
    carpeta: "estereo-pioneer-2",
  },
  {
    titulo: "Potencia 2 × 1200 W",
    rubro: "audio",
    orden: "2023-06",
    equipo: "Amplificador de potencia",
    falla: "Protección permanente",
    solucion: "Reemplazo de transistores de salida en un canal y ajuste de bias.",
    carpeta: "estereo-sony",
  },
  {
    titulo: "Potencia 2 × 1200 W",
    rubro: "audio",
    orden: "2023-06",
    equipo: "Amplificador de potencia",
    falla: "Protección permanente",
    solucion: "Reemplazo de transistores de salida en un canal y ajuste de bias.",
    carpeta: "esterilizadora-faeta",
  },
  {
    titulo: "Potencia 2 × 1200 W",
    rubro: "audio",
    orden: "2023-06",
    equipo: "Amplificador de potencia",
    falla: "Protección permanente",
    solucion: "Reemplazo de transistores de salida en un canal y ajuste de bias.",
    carpeta: "horno-electrico-longvie",
  },
  {
    titulo: "Potencia 2 × 1200 W",
    rubro: "audio",
    orden: "2023-06",
    equipo: "Amplificador de potencia",
    falla: "Protección permanente",
    solucion: "Reemplazo de transistores de salida en un canal y ajuste de bias.",
    carpeta: "mantenimiento-placa-de-video",
  },
  {
    titulo: "Potencia 2 × 1200 W",
    rubro: "audio",
    orden: "2023-06",
    equipo: "Amplificador de potencia",
    falla: "Protección permanente",
    solucion: "Reemplazo de transistores de salida en un canal y ajuste de bias.",
    carpeta: "mantenimiento-ps4-fat",
  },
  {
    titulo: "Potencia 2 × 1200 W",
    rubro: "audio",
    orden: "2023-06",
    equipo: "Amplificador de potencia",
    falla: "Protección permanente",
    solucion: "Reemplazo de transistores de salida en un canal y ajuste de bias.",
    carpeta: "mantenimiento-ps4-fat-2",
  },
  {
    titulo: "Potencia 2 × 1200 W",
    rubro: "audio",
    orden: "2023-06",
    equipo: "Amplificador de potencia",
    falla: "Protección permanente",
    solucion: "Reemplazo de transistores de salida en un canal y ajuste de bias.",
    carpeta: "mantenimiento-ps4-fat-3",
  },
  {
    titulo: "Potencia 2 × 1200 W",
    rubro: "audio",
    orden: "2023-06",
    equipo: "Amplificador de potencia",
    falla: "Protección permanente",
    solucion: "Reemplazo de transistores de salida en un canal y ajuste de bias.",
    carpeta: "osciloscopio-siglent",
  },
  {
    titulo: "Potencia 2 × 1200 W",
    rubro: "audio",
    orden: "2023-06",
    equipo: "Amplificador de potencia",
    falla: "Protección permanente",
    solucion: "Reemplazo de transistores de salida en un canal y ajuste de bias.",
    carpeta: "placa-de-video",
  },
  {
    titulo: "Potencia 2 × 1200 W",
    rubro: "audio",
    orden: "2023-06",
    equipo: "Amplificador de potencia",
    falla: "Protección permanente",
    solucion: "Reemplazo de transistores de salida en un canal y ajuste de bias.",
    carpeta: "reparacion-macbook",
  },
  {
    titulo: "Potencia 2 × 1200 W",
    rubro: "audio",
    orden: "2023-06",
    equipo: "Amplificador de potencia",
    falla: "Protección permanente",
    solucion: "Reemplazo de transistores de salida en un canal y ajuste de bias.",
    carpeta: "reparacion-ps3-wifi",
  },
  {
    titulo: "Potencia 2 × 1200 W",
    rubro: "audio",
    orden: "2023-06",
    equipo: "Amplificador de potencia",
    falla: "Protección permanente",
    solucion: "Reemplazo de transistores de salida en un canal y ajuste de bias.",
    carpeta: "soundcraft",
  },
  {
    titulo: "Potencia 2 × 1200 W",
    rubro: "audio",
    orden: "2023-06",
    equipo: "Amplificador de potencia",
    falla: "Protección permanente",
    solucion: "Reemplazo de transistores de salida en un canal y ajuste de bias.",
    carpeta: "variador-125hp",
  },


  // 👇 Copiá este bloque para sumar un trabajo:
  // {
  //   titulo: "Nombre corto",
  //   rubro: "industrial",
  //   orden: "2025-01",
  //   equipo: "Qué equipo era",
  //   falla: "Qué tenía",
  //   solucion: "Qué se hizo",
  //   carpeta: "nombre-de-la-carpeta",
  // },
];
