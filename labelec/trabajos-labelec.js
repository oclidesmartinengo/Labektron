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
    titulo: "Variador de frecuencia 22 kW",
    rubro: "industrial",
    orden: "2024-05",
    equipo: "Variador trifásico",
    falla: "Módulo IGBT en corto",
    solucion: "Reemplazo del módulo de potencia, driver y capacitores de bus. Prueba con motor a carga.",
    carpeta: "variador",
  },
  {
    titulo: "Monitor multiparamétrico",
    rubro: "biomedica",
    orden: "2024-02",
    equipo: "Monitor de signos vitales",
    falla: "Sin lectura de SpO2 y NIBP",
    solucion: "Reparación del módulo de oximetría, reemplazo de bomba neumática y calibración con simulador.",
    carpeta: "monitor",
  },
  {
    titulo: "Smart TV 55\" sin imagen",
    rubro: "hogar",
    orden: "2023-12",
    equipo: "Smart TV LED",
    falla: "Enciende pero sin imagen",
    solucion: "Reparación de la fuente de backlight y reemplazo de tiras LED.",
    carpeta: "tv",
  },
  {
    titulo: "Consola 24 canales",
    rubro: "audio",
    orden: "2023-10",
    equipo: "Consola analógica",
    falla: "Canales con ruido y faders sucios",
    solucion: "Reemplazo de 24 faders, limpieza completa y recap de la fuente.",
    carpeta: "consola",
  },
  {
    titulo: "Placa de lavarropas",
    rubro: "hogar",
    orden: "2023-08",
    equipo: "Lavarropas automático",
    falla: "No centrifuga",
    solucion: "Reemplazo de triac de motor y relé de la placa de control.",
    carpeta: "lavarropas",
  },
  {
    titulo: "Potencia 2 × 1200 W",
    rubro: "audio",
    orden: "2023-06",
    equipo: "Amplificador de potencia",
    falla: "Protección permanente",
    solucion: "Reemplazo de transistores de salida en un canal y ajuste de bias.",
    carpeta: "potencia",
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
