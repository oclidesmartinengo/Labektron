/* ============================================================================
   DATOS DE LABELEC — el ÚNICO archivo que necesitás editar
   ============================================================================
   Todo lo que se ve en labelec/index.html sale de acá: textos, rubros,
   trabajos, cotizador y árbol de fallas.

   REGLAS RÁPIDAS (las mismas de siempre):
   - El texto va SIEMPRE entre comillas dobles: "así"
   - Cada línea/bloque termina con una coma
   - Solo cambiá lo que está a la DERECHA de los dos puntos. Lo de la
     izquierda (titulo:, texto:, id:) NO se toca.
   - Para AGREGAR algo a una lista: copiá un bloque { ... } entero y editalo.
   - Para QUITAR algo: borrá el bloque completo (desde { hasta }, con la coma).
   - Fotos: van en labelec/images/...  SIN espacios ni tildes en el nombre.
   ============================================================================ */


/* ----------------------------------------------------------------------------
   1. DATOS GENERALES
   ---------------------------------------------------------------------------- */
const LABELEC = {
  nombre: "LABELEC",
  lema: "Diagnose, Repair\n& Maintenance",   // \n = salto de línea
  titular: "Laboratorio de electrónica",
  titularAcento: "electrónica",   // la parte del titular que va en azul (tiene que estar dentro del titular)
  // Frase que aparece debajo del titular, en el hero
  intro: "Diagnosticamos y reparamos a nivel componente: desde variadores industriales y equipos biomédicos hasta el lavarropas de tu casa o la consola de tu banda. Con informe técnico y garantía escrita en cada trabajo.",

  logo: "images/logo-labelec.png",     // logo propio de Labelec (guardalo en labelec/images/)
  logoGrupo: "../images/logo.png",     // logo del grupo (ya existe en la carpeta principal)

  // Contacto
  whatsapp: "5493875895447",           // con código de país, sin + ni espacios
  whatsappTexto: "Hola LABELEC, quiero consultar por una reparación.",
  email: "labelec@gmail.com",
  direccion: "10 de Octubre 985, Salta Capital",
  horario: "Lunes a viernes, 9:00 – 17:00",

  // Los 3 datos rápidos que aparecen al costado del hero (podés cambiar los textos)
  datos: [
    { valor: "+7000", texto: "equipos reparados" },
    { valor: "72 hs", texto: "diagnóstico promedio" },
    { valor: "3–6 meses", texto: "de garantía escrita" },
  ],

  // Cómo trabajamos (los pasos del proceso, en orden)
  // 👉 "icono": elegí uno de estos nombres —
  //    chat · lupa · documento · check · engranaje · herramientas · escudo ·
  //    caja · reloj · rayo · llave · grafico
  proceso: [
    { icono: "chat",         titulo: "Recepción",    texto: "Recibimos tu equipo. Y le asignamos un número de orden." },
    { icono: "lupa",         titulo: "Diagnóstico",  texto: "Hacemos mediciones y localizamos la falla." },
    { icono: "documento",    titulo: "Presupuesto",  texto: "Cotizamos qué hay que hacer y cuánto cuesta." },
    { icono: "check",        titulo: "Aprobación",   texto: "Una vez confirmado, avanzamos. Si no, podes retirár el equipo solo abonando el diagnostico." },
    { icono: "herramientas", titulo: "Reparación",   texto: "Reemplazamos lo dañado y realizamos mantenimiento." },
    { icono: "caja",         titulo: "Entrega",      texto: "Entrega, prueba de funcionamiento, informe técnico y garantía escrita." },
    { icono: "escudo",       titulo: "Período de garantía", texto: "Si en ese tiempo vuelve a fallar, lo revisamos sin costo." },
  ],

  footerCopyright: "Todos los derechos reservados",
};


/* ----------------------------------------------------------------------------
   2. RUBROS (qué reparamos)
   👉 "id" no se toca: lo usan los trabajos, el cotizador y el árbol de fallas.
   👉 "especialidad": lo que mejor hacen (aparece destacado).
      "equipos": el resto de lo que reparan.
   👉 "marcas": nombres. Para el logo, guardá un archivo en labelec/images/marcas/
      con el nombre en minúscula, sin espacios ni tildes, en .png
      Ej: "Schneider Electric" -> images/marcas/schneider-electric.png
          "TP-Link"            -> images/marcas/tp-link.png
      Si el archivo no existe, se muestra solo el nombre escrito.
   👉 "imagen": una foto representativa, en labelec/images/rubros/
   👉 "nota": texto chico opcional debajo del título (ej. "Tercerizado").
   ---------------------------------------------------------------------------- */
const RUBROS = [
  {
    id: "informatica",
    nombre: "Informática",
    corto: "Informática",
    imagen: "images/rubros/informatica.jpeg",
    intro: "Reparación a nivel componente de equipos informáticos, con especial foco en notebooks de todas las marcas.",
    especialidad: [
      "Notebooks multimarca", "PlayStation 4", "Monitores", "Impresoras fiscales y comanderas",
    ],
    equipos: [
      "MacBook", "PC de escritorio", "Fuentes de PC", "Impresoras térmicas y etiquetadoras",
      "Impresoras láser", "PlayStation 3", "PlayStation 5",
      "Xbox 360", "Xbox One", "Xbox Series X",
    ],
    marcas: ["Asus", "Lenovo", "Acer", "Apple", "Ricoh", "Epson", "HP", "Compaq", "Dell", "Brother"],
  },
  {
    id: "redes",
    nombre: "Redes y conectividad",
    corto: "Redes",
    imagen: "images/rubros/redes.jpeg",
    intro: "Diagnóstico y reparación de hardware de red para conectividad empresarial y enlaces de datos.",
    especialidad: [],
    equipos: [
      "Switch's", "Switch's PoE", "Módems", "Routers", "Enlaces punto a punto", "AP",
    ],
    marcas: ["Ubiquiti", "Mimosa", "MikroTik", "TP-Link"],
  },
  {
    id: "audio",
    nombre: "Audio, video e iluminación",
    corto: "Audio y video",
    imagen: "images/rubros/audio.jpeg",
    intro: "Servicio técnico para equipos de audio, video e iluminación, de uso hogareño y profesional.",
    especialidad: [
      "Consolas de audio analógicas y digitales", "Autoestereos (con y sin pantalla)", "Amplificadores Clase AB", "Amplificadores Clase D",
      "Potencias de audio para auto", "Parlantes y bafles potenciados (con y sin batería)",
    ],
    equipos: [
      "Procesadores DSP", "Consolas DMX", 
      "Barras de sonido", "Equipos de música y minicomponentes", "Proyectores DLP",
      "Proyectores convencionales", "Escaladores de video", "Cabezales móviles de iluminación",
    ],
    marcas: ["JBL", "Bose", "Soundcraft","Yamaha", "Behringer", "Klipsch", "Technics", "Synq", "RCF", "Epson", "LG", "Optoma"],
  },
  {
    id: "industrial",
    nombre: "Industrial y control",
    corto: "Industrial",
    imagen: "images/rubros/industrial.jpeg",
    intro: "Reparación electrónica de potencia y control para líneas de producción y maquinaria industrial.",
    especialidad: [
      "Variadores de frecuencia", "Arranques suaves", "Fuentes industriales", "Drivers de motores CC",
    ],
    equipos: [
      "PLC", "Pantallas HMI", "Drivers de servomotores", "Placas de generadores", "Controladores ComAp",
      "Llaves de conmutación tetrapolares", "Soldadoras MIG / TIG / MMA", "Cabezales de cortadora láser",
      "Tratadores por efecto corona", "Máquinas de coser industriales (solo electrónica)",
    ],
    marcas: ["ABB", "Schneider Electric", "Siemens", "Mean Well", "Phoenix Contact", "SEW", "Shanggong", "Qixing"],
  },
  {
    id: "energia",
    nombre: "Energía",
    corto: "Energía",
    imagen: "images/rubros/energia.jpeg",
    intro: "Servicio tecnico sobre equipos de respaldo, estabilización y conversión de energía para instalaciones electricas.",
    especialidad: [],
    equipos: [
      "UPS Monofasica", "UPS Trifasica", "Estabilizadores de tensión", "Inversores de voltaje 12 / 24 / 48 V a 220 V",
      "Inversores solares", "Placas inverter en general", "Inversores de Bombas solares", "Cargadores para autos eléctricos.", "Cargadores de batería industriales"
    ],
    marcas: ["APC", "Lyonn", "Eaton", "Polaris", "Growatt", "Goodwe", "Enertik", "TRV"],
  },
  {
    id: "movilidad",
    nombre: "Movilidad eléctrica",
    corto: "Movilidad",
    imagen: "images/rubros/movilidad.jpeg",
    intro: "Diagnóstico y reparación de sistemas de tracción, control y carga en vehículos y equipos eléctricos.",
    especialidad: [],
    equipos: [
      "Autoelevadores eléctricos", "Apiladores eléctricos", "Monopatines eléctricos", "Hoverboards", "Cuatriciclos Electricos", "Scanners automotrices",
      "Bicicletas electricas", "Carros de golf electricos",
    ],
    marcas: ["Hangcha", "Lusqtoff", "Foston", "Autel", "Launch"],
  },
  {
    id: "instrumentacion",
    nombre: "Instrumentación y laboratorio",
    corto: "Laboratorio",
    imagen: "images/rubros/instrumentacion.jpeg",
    intro: "Reparación y calibración de instrumental de medición y equipamiento de laboratorio, con informe de resultados.",
    especialidad: [
      "Estufas esterilizadoras", "Agitadores magnéticos", "Balanzas analíticas y de laboratorio", "Baños Termostaticos",
      "Dataloggers",
    ],
    equipos: [
      "Medidores de pH y temperatura (calibración y reparación)", "Telurímetros", "Teodolitos",
      "Antenas y receptores GNSS", "Bombas de vacio",
    ],
    marcas: ["South", "Topcon", "Leica", "Faeta", "Denimed", "CEM"],
  },
  {
    id: "biomedica",
    nombre: "Biomédica, kinesiología y estética",
    corto: "Biomédica",
    imagen: "images/rubros/biomedica.jpeg",
    intro: "Mantenimiento y reparación de equipamiento para centros de salud, rehabilitación y estética.",
    especialidad: [],
    equipos: [
      "Monitores multiparamétricos", "Cintas de correr", "Bicicletas ergométricas", "Cabinas de ozono",
      "Equipos de magnetoterapia", "Equipos de criolipólisis", "Camillas electricas", "Sillones odontologicos",
      "Concentradores de oxigeno"
    ],
    marcas: [],
  },
  {
    id: "hogar",
    nombre: "Hogar y comercial",
    corto: "Hogar",
    imagen: "images/rubros/hogar.jpeg",
    intro: "Reparación de placas electrónicas y sistemas de control en electrodomésticos y equipamiento comercial.",
    especialidad: [
      "Aires acondicionados (placas on/off e inverter)", "Microondas", "Televisores LED", "Televisores LCD",
      "Hornos eléctricos industriales", "Hornos convectores comerciales",
      "Anafes eléctricos vitrocerámicos e inductivos", "Aspiradoras robot",
    ],
    equipos: [
      "Climatizadores", "Placas de caldera", "Placas de heladera (inverter)", "Hornos eléctricos de hogar",
      "Cafeteras Expresso", "Freidoras de aire", "Robots limpiapiletas", "Frigobares", "Cavas de vino",
      "Dispensadores de vino", "Fábricas de hielo", "Máquinas expendedoras", "Ablandadores de agua", 
    ],
    marcas: ["Samsung", "Whirlpool", "BGH", "LG", "Carrier", "Surrey", "Xiaomi", "Turboblender", "Smeg", "Longvie", "TST", "Peisa", "Nespresso", "Dolce Gusto", "Philips", "Oster"],
  },
];


/* ----------------------------------------------------------------------------
   3. TRABAJOS REALIZADOS (fotos)
   👉 "rubro" tiene que ser uno de los id de arriba:
      "industria" | "biomedica" | "domestico" | "audio"
   👉 "fotos": la primera es la portada. Guardalas en labelec/images/trabajos/
   👉 "orden": AAAA-MM, los más nuevos aparecen primero.
   ---------------------------------------------------------------------------- */
const TRABAJOS_LABELEC = [
  {
    titulo: "Variador de frecuencia 22 kW",
    rubro: "industrial",
    orden: "2024-05",
    equipo: "Variador trifásico",
    falla: "Módulo IGBT en corto",
    solucion: "Reemplazo del módulo de potencia, driver y capacitores de bus. Prueba con motor a carga.",
    fotos: ["images/trabajos/variador-1.jpg", "images/trabajos/variador-2.jpg"],
  },
  {
    titulo: "Monitor multiparamétrico",
    rubro: "biomedica",
    orden: "2024-02",
    equipo: "Monitor de signos vitales",
    falla: "Sin lectura de SpO2 y NIBP",
    solucion: "Reparación del módulo de oximetría, reemplazo de bomba neumática y calibración con simulador.",
    fotos: ["images/trabajos/monitor-1.jpg"],
  },
  {
    titulo: "Smart TV 55\" sin imagen",
    rubro: "hogar",
    orden: "2023-12",
    equipo: "Smart TV LED",
    falla: "Enciende pero sin imagen",
    solucion: "Reparación de la fuente de backlight y reemplazo de tiras LED.",
    fotos: ["images/trabajos/tv-1.jpg", "images/trabajos/tv-2.jpg"],
  },
  {
    titulo: "Consola 24 canales",
    rubro: "audio",
    orden: "2023-10",
    equipo: "Consola analógica",
    falla: "Canales con ruido y faders sucios",
    solucion: "Reemplazo de 24 faders, limpieza completa y recap de la fuente.",
    fotos: ["images/trabajos/consola-1.jpg"],
  },
  {
    titulo: "Placa de lavarropas",
    rubro: "hogar",
    orden: "2023-08",
    equipo: "Lavarropas automático",
    falla: "No centrifuga",
    solucion: "Reemplazo de triac de motor y relé de la placa de control.",
    fotos: ["images/trabajos/lavarropas-1.jpg"],
  },
  {
    titulo: "Potencia 2 × 1200 W",
    rubro: "audio",
    orden: "2023-06",
    equipo: "Amplificador de potencia",
    falla: "Protección permanente",
    solucion: "Reemplazo de transistores de salida en un canal y ajuste de bias.",
    fotos: ["images/trabajos/potencia-1.jpg"],
  },

  // 👇 Copiá este bloque para sumar un trabajo:
  // {
  //   titulo: "Nombre corto",
  //   rubro: "industrial",
  //   orden: "2025-01",
  //   equipo: "Qué equipo era",
  //   falla: "Qué tenía",
  //   solucion: "Qué se hizo",
  //   fotos: ["images/trabajos/foto-1.jpg", "images/trabajos/foto-2.jpg"],
  // },
];


/* ----------------------------------------------------------------------------
   4. DIAGNÓSTICO Y COTIZACIÓN
   ============================================================================
   Es un solo recorrido: rubro -> equipo -> síntoma -> (preguntas) -> resultado.

   👉 Cada síntoma ("fallas") tiene:
        nombre, desde, hasta   -> rango de precio como texto. Si dejás "" muestra "A cotizar".
        test (opcional)        -> id de un nodo del ÁRBOL (sección 5). Si lo ponés, el
                                  tester hace esas preguntas antes del resultado.
                                  Si no lo ponés, va directo al rango.
   👉 "diagnostico" es lo que se cobra por revisar el equipo.
   ---------------------------------------------------------------------------- */
const COTIZADOR = {
  aviso: "Los valores son orientativos y pueden variar según el modelo y el estado del equipo. El presupuesto definitivo se confirma después del diagnóstico en el laboratorio.",
  diagnostico: {
    precio: "$15.000",
    texto: "Se descuenta del total si aceptás la reparación.",
  },

  rubros: [
    {
      id: "hogar",
      equipos: [
        { nombre: "Aire acondicionado (placa)",
          fallas: [
            { nombre: "No enciende",              desde: "$30.000", hasta: "$80.000", test: "gen_muerto" },
            { nombre: "No enfría / código de error", desde: "$35.000", hasta: "$90.000", test: "r_codigo" },
          ] },
        { nombre: "Microondas",
          fallas: [
            { nombre: "No enciende",              desde: "$20.000", hasta: "$45.000", test: "gen_muerto" },
            { nombre: "No calienta",              desde: "$20.000", hasta: "$45.000", test: "r_placa" },
            { nombre: "Panel no responde",        desde: "$18.000", hasta: "$40.000", test: "r_placa" },
          ] },
        { nombre: "Horno eléctrico / anafe",
          fallas: [
            { nombre: "No enciende",              desde: "$25.000", hasta: "$60.000", test: "gen_muerto" },
            { nombre: "No calienta una zona",     desde: "$25.000", hasta: "$70.000", test: "r_placa" },
          ] },
        { nombre: "Aspiradora robot",
          fallas: [
            { nombre: "No carga",                 desde: "$20.000", hasta: "$50.000", test: "robot_carga" },
            { nombre: "No enciende",              desde: "$25.000", hasta: "$60.000" },
          ] },
        { nombre: "Heladera (placa)",
          fallas: [
            { nombre: "No enfría / error",        desde: "$30.000", hasta: "$80.000", test: "r_codigo" },
          ] },
        { nombre: "Cafetera / freidora de aire",
          fallas: [
            { nombre: "No enciende",              desde: "$15.000", hasta: "$40.000", test: "gen_muerto" },
            { nombre: "Enciende pero no funciona", desde: "$15.000", hasta: "$45.000", test: "gen_parcial" },
          ] },
      ],
    },
    {
      id: "informatica",
      equipos: [
        { nombre: "Notebook",
          fallas: [
            { nombre: "No enciende",              desde: "$30.000", hasta: "$90.000", test: "nb_1" },
            { nombre: "No carga",                 desde: "$25.000", hasta: "$60.000", test: "nb_carga" },
            { nombre: "Enciende sin imagen",      desde: "$35.000", hasta: "$100.000", test: "nb_img" },
            { nombre: "Se apaga / recalienta",    desde: "$20.000", hasta: "$50.000", test: "r_nb_temp" },
          ] },
        { nombre: "Consola de videojuegos",
          fallas: [
            { nombre: "No enciende",              desde: "$30.000", hasta: "$80.000", test: "gen_muerto" },
            { nombre: "Sin imagen (HDMI)",        desde: "$25.000", hasta: "$60.000", test: "con_hdmi" },
            { nombre: "Se apaga / recalienta",    desde: "$20.000", hasta: "$45.000", test: "r_nb_temp" },
          ] },
        { nombre: "Monitor",
          fallas: [
            { nombre: "No enciende",              desde: "$20.000", hasta: "$45.000", test: "gen_muerto" },
            { nombre: "Sin imagen / parpadea",    desde: "$25.000", hasta: "$55.000", test: "tv_3" },
          ] },
        { nombre: "Impresora fiscal / comandera",
          fallas: [
            { nombre: "No imprime",               desde: "", hasta: "" },
            { nombre: "No enciende",              desde: "", hasta: "", test: "gen_muerto" },
          ] },
      ],
    },
    {
      id: "audio",
      equipos: [
        { nombre: "Televisor LED / LCD",
          fallas: [
            { nombre: "No enciende",              desde: "$25.000", hasta: "$60.000", test: "tv_1" },
            { nombre: "Enciende sin imagen",      desde: "$35.000", hasta: "$90.000", test: "tv_3" },
            { nombre: "Imagen con líneas o manchas", desde: "", hasta: "", test: "r_tv_panel" },
            { nombre: "Sin sonido",               desde: "$20.000", hasta: "$45.000", test: "r_placa" },
          ] },
        { nombre: "Parlante / bafle potenciado",
          fallas: [
            { nombre: "No enciende",              desde: "$25.000", hasta: "$70.000", test: "gen_muerto" },
            { nombre: "Suena distorsionado",      desde: "$25.000", hasta: "$70.000", test: "r_aud_distorsion" },
            { nombre: "Batería no carga",         desde: "$20.000", hasta: "$50.000", test: "robot_carga" },
          ] },
        { nombre: "Estéreo / potencia de auto",
          fallas: [
            { nombre: "No enciende",              desde: "$20.000", hasta: "$60.000", test: "auto_1" },
            { nombre: "Entra en protección",      desde: "$30.000", hasta: "$90.000", test: "aud_pot_prot" },
          ] },
        { nombre: "Consola de sonido",
          fallas: [
            { nombre: "Canales con ruido o muertos", desde: "$40.000", hasta: "$150.000", test: "aud_con_1" },
            { nombre: "No enciende",              desde: "$35.000", hasta: "$90.000", test: "gen_muerto" },
          ] },
        { nombre: "Amplificador profesional",
          fallas: [
            { nombre: "Entra en protección",      desde: "$45.000", hasta: "$160.000", test: "aud_pot_prot" },
            { nombre: "Un canal sin sonido",      desde: "$35.000", hasta: "$110.000", test: "r_aud_canal" },
          ] },
        { nombre: "Proyector",
          fallas: [
            { nombre: "No enciende",              desde: "", hasta: "", test: "gen_muerto" },
            { nombre: "Imagen con manchas / sin color", desde: "", hasta: "" },
          ] },
      ],
    },
    {
      id: "energia",
      equipos: [
        { nombre: "UPS",
          fallas: [
            { nombre: "No enciende",              desde: "$30.000", hasta: "$90.000", test: "ups_1" },
            { nombre: "No respalda / se apaga al cortarse la luz", desde: "$25.000", hasta: "$80.000", test: "r_ups_bat" },
            { nombre: "Alarma permanente",        desde: "", hasta: "", test: "ups_alarma" },
          ] },
        { nombre: "Estabilizador",
          fallas: [
            { nombre: "No enciende",              desde: "$20.000", hasta: "$50.000", test: "gen_muerto" },
            { nombre: "Salida fuera de rango",    desde: "$25.000", hasta: "$60.000" },
          ] },
        { nombre: "Inversor",
          fallas: [
            { nombre: "No enciende / sin salida", desde: "", hasta: "" },
            { nombre: "Código de error",          desde: "", hasta: "", test: "r_codigo" },
          ] },
      ],
    },
    {
      id: "industrial",
      equipos: [
        { nombre: "Variador de frecuencia",
          fallas: [
            { nombre: "Falla de potencia (IGBT)", desde: "$120.000", hasta: "$600.000" },
            { nombre: "No enciende / sin display", desde: "$60.000", hasta: "$200.000" },
            { nombre: "Errores intermitentes",    desde: "", hasta: "" },
          ] },
        { nombre: "Arranque suave",
          fallas: [
            { nombre: "No arranca / error",       desde: "", hasta: "" },
          ] },
        { nombre: "Fuente industrial",
          fallas: [
            { nombre: "Sin salida",               desde: "$40.000", hasta: "$120.000" },
            { nombre: "Salida inestable",         desde: "$35.000", hasta: "$100.000" },
          ] },
        { nombre: "PLC / HMI",
          fallas: [
            { nombre: "No enciende",              desde: "$60.000", hasta: "$180.000" },
            { nombre: "Pantalla sin táctil / imagen", desde: "$70.000", hasta: "$220.000" },
          ] },
        { nombre: "Otro equipo industrial",
          fallas: [
            { nombre: "Consultar",                desde: "", hasta: "" },
          ] },
      ],
    },
    {
      id: "instrumentacion",
      equipos: [
        { nombre: "Estufa esterilizadora",
          fallas: [
            { nombre: "No calienta",              desde: "", hasta: "" },
            { nombre: "No regula temperatura",    desde: "", hasta: "" },
          ] },
        { nombre: "Balanza",
          fallas: [
            { nombre: "No enciende",              desde: "", hasta: "" },
            { nombre: "Lectura inestable / calibración", desde: "", hasta: "" },
          ] },
        { nombre: "Otro instrumento",
          fallas: [
            { nombre: "Consultar",                desde: "", hasta: "" },
          ] },
      ],
    },
    {
      id: "movilidad",
      equipos: [
        { nombre: "Monopatín / hoverboard",
          fallas: [
            { nombre: "No enciende",              desde: "", hasta: "", test: "robot_carga" },
            { nombre: "No carga",                 desde: "", hasta: "", test: "robot_carga" },
          ] },
        { nombre: "Autoelevador / apilador",
          fallas: [
            { nombre: "Consultar",                desde: "", hasta: "" },
          ] },
      ],
    },
    {
      id: "biomedica",
      equipos: [
        { nombre: "Cinta de correr / bicicleta",
          fallas: [
            { nombre: "No enciende",              desde: "", hasta: "", test: "gen_muerto" },
            { nombre: "Motor no arranca",         desde: "", hasta: "" },
          ] },
        { nombre: "Otro equipo médico o de estética",
          fallas: [
            { nombre: "Consultar",                desde: "", hasta: "" },
          ] },
      ],
    },
  ],
};


/* ----------------------------------------------------------------------------
   5. ÁRBOL DE PREGUNTAS (lo que usa el tester)
   ============================================================================
   Cada nodo tiene un id. Los síntomas de arriba apuntan a estos ids con "test".
   - Nodo PREGUNTA: tiene "pregunta" y "opciones". Cada opción dice a qué nodo
     salta ("ir").
   - Nodo RESULTADO: tiene "resultado": true, un "titulo", un "texto" y un
     "nivel":  "ok" (verde, lo podés resolver vos) |
               "taller" (naranja, traelo) |
               "urgente" (rojo, desconectalo y traelo)
   👉 Para agregar una rama: creá un nodo nuevo con un id que no exista y
      apuntá a él desde un síntoma ("test") o desde una opción ("ir").
   ---------------------------------------------------------------------------- */
const ARBOL_FALLAS = {
  nodos: {
    /* ---------------- GENÉRICOS (sirven para muchos equipos) ---------------- */
    gen_muerto: {
      pregunta: "Probá el enchufe con otro aparato que sepas que anda. ¿Ese anda?",
      opciones: [
        { texto: "Sí, el enchufe anda",         ir: "gen_muerto2" },
        { texto: "No, tampoco anda",            ir: "r_enchufe" },
      ],
    },
    gen_muerto2: {
      pregunta: "¿Sentís olor a quemado o viste chispas al enchufarlo?",
      opciones: [
        { texto: "Sí",                          ir: "r_urgente" },
        { texto: "No",                          ir: "r_fuente" },
      ],
    },
    gen_parcial: {
      pregunta: "¿La falla es siempre igual o aparece de vez en cuando?",
      opciones: [
        { texto: "Siempre igual",               ir: "r_placa" },
        { texto: "Intermitente",                ir: "r_intermitente" },
      ],
    },
    robot_carga: {
      pregunta: "¿El cargador o la base muestran alguna luz cuando lo conectás?",
      opciones: [
        { texto: "Sí, el cargador prende",      ir: "r_bateria" },
        { texto: "No, nada",                    ir: "r_cargador" },
      ],
    },

    /* ---------------- TELEVISORES / MONITORES ---------------- */
    tv_1: {
      pregunta: "¿Prende el LED de standby cuando lo enchufás?",
      opciones: [
        { texto: "No, ningún LED",              ir: "gen_muerto" },
        { texto: "Sí, prende el LED",           ir: "tv_2" },
      ],
    },
    tv_2: {
      pregunta: "Apretá el botón de encendido. ¿Qué pasa?",
      opciones: [
        { texto: "Nada, queda en standby",      ir: "r_tv_standby" },
        { texto: "Se escucha sonido pero no hay imagen", ir: "tv_3" },
        { texto: "Se reinicia solo",            ir: "r_placa" },
      ],
    },
    tv_3: {
      pregunta: "Con el equipo encendido y a oscuras, acercá una linterna a la pantalla. ¿Se ve una imagen muy tenue?",
      opciones: [
        { texto: "Sí, se ve algo",              ir: "r_tv_backlight" },
        { texto: "No, nada",                    ir: "r_tv_tcon" },
      ],
    },

    /* ---------------- NOTEBOOK / CONSOLAS ---------------- */
    nb_1: {
      pregunta: "Conectá el cargador. ¿Prende alguna luz en la notebook o en el cargador?",
      opciones: [
        { texto: "Prende la luz de carga",      ir: "nb_2" },
        { texto: "Prende el cargador, la notebook no", ir: "r_nb_placa" },
        { texto: "No prende nada",              ir: "r_cargador" },
      ],
    },
    nb_2: {
      pregunta: "Mantené apretado el botón de encendido 20 segundos con el cargador puesto y volvé a probar. ¿Encendió?",
      opciones: [
        { texto: "Sí, ahora encendió",          ir: "r_nb_reset" },
        { texto: "No, sigue igual",             ir: "r_nb_placa" },
      ],
    },
    nb_carga: {
      pregunta: "¿El cargador se calienta o prende su luz cuando lo enchufás?",
      opciones: [
        { texto: "Sí, parece funcionar",        ir: "nb_carga2" },
        { texto: "No, está frío y sin luz",     ir: "r_cargador" },
      ],
    },
    nb_carga2: {
      pregunta: "¿El conector de carga se siente flojo o hay que moverlo para que cargue?",
      opciones: [
        { texto: "Sí, está flojo",              ir: "r_nb_conector" },
        { texto: "No, entra firme",             ir: "r_nb_carga" },
      ],
    },
    nb_img: {
      pregunta: "Con la notebook encendida, conectá un monitor o TV externo. ¿Se ve imagen ahí?",
      opciones: [
        { texto: "Sí, en el externo se ve",     ir: "r_nb_pantalla" },
        { texto: "No, tampoco",                 ir: "r_nb_video" },
      ],
    },
    con_hdmi: {
      pregunta: "Probá con otro cable HDMI y otra entrada del televisor. ¿Cambió algo?",
      opciones: [
        { texto: "Sí, ahora se ve",             ir: "r_cable" },
        { texto: "No, sigue sin imagen",        ir: "r_con_hdmi" },
      ],
    },

    /* ---------------- AUDIO ---------------- */
    auto_1: {
      pregunta: "¿Revisaste el fusible del estéreo y el de la línea de alimentación?",
      opciones: [
        { texto: "Sí, están bien",              ir: "r_fuente" },
        { texto: "No sé cómo",                  ir: "r_auto_fusible" },
      ],
    },
    aud_con_1: {
      pregunta: "¿El problema es en todos los canales o en algunos?",
      opciones: [
        { texto: "En todos",                    ir: "aud_con_todos" },
        { texto: "Solo en algunos canales",     ir: "r_aud_canales" },
      ],
    },
    aud_con_todos: {
      pregunta: "¿Enciende? Luces, medidores, algo.",
      opciones: [
        { texto: "No enciende",                 ir: "gen_muerto" },
        { texto: "Enciende pero no sale audio", ir: "r_aud_master" },
        { texto: "Sale audio con ruido o zumbido", ir: "r_aud_zumbido" },
      ],
    },
    aud_pot_prot: {
      pregunta: "Desconectá todos los parlantes y encendelo de nuevo. ¿Sigue en protección?",
      opciones: [
        { texto: "Sí, sigue igual",             ir: "r_aud_proteccion" },
        { texto: "No, ahora enciende normal",   ir: "r_aud_parlante" },
      ],
    },

    /* ---------------- UPS ---------------- */
    ups_1: {
      pregunta: "Con la UPS enchufada, mantené apretado el botón de encendido unos segundos. ¿Hace algún pitido o prende alguna luz?",
      opciones: [
        { texto: "Pita o prende algo",          ir: "r_ups_bat" },
        { texto: "Nada de nada",                ir: "gen_muerto" },
      ],
    },
    ups_alarma: {
      pregunta: "¿La alarma suena aunque haya luz en la casa?",
      opciones: [
        { texto: "Sí, suena siempre",           ir: "r_ups_bat" },
        { texto: "Solo cuando se corta la luz", ir: "r_ups_normal" },
      ],
    },

    /* ---------------- RESULTADOS ---------------- */
    r_enchufe: {
      resultado: true, nivel: "ok",
      titulo: "El problema parece ser el enchufe, no el equipo",
      texto: "Revisá la térmica del tablero o probá en otro tomacorriente. Si el equipo sigue sin encender en un enchufe que sabés que anda, volvé a empezar.",
    },
    r_urgente: {
      resultado: true, nivel: "urgente",
      titulo: "Desenchufalo y no lo vuelvas a conectar",
      texto: "Olor a quemado o chispas indican una falla en la fuente o un corto. Volver a enchufarlo puede dañar más componentes. Traelo así como está: en general se repara bien si no se insiste.",
    },
    r_fuente: {
      resultado: true, nivel: "taller",
      titulo: "Probablemente sea la fuente de alimentación",
      texto: "Cuando un equipo está totalmente muerto con el enchufe bien, lo más común es la fuente interna (fusible, capacitores o el circuito de arranque). Es una de las reparaciones más frecuentes y económicas.",
    },
    r_codigo: {
      resultado: true, nivel: "taller",
      titulo: "El código de error nos ahorra la mitad del diagnóstico",
      texto: "Anotá el código exacto y la marca/modelo. Mandanos eso por WhatsApp y muchas veces podemos adelantarte qué es antes de que lo traigas.",
    },
    r_placa: {
      resultado: true, nivel: "taller",
      titulo: "Suena a una falla en la placa de control",
      texto: "Una falla constante con el equipo encendido suele ser un componente puntual en la placa: un relé, un triac, un sensor. Se repara a nivel componente sin cambiar la placa completa.",
    },
    r_intermitente: {
      resultado: true, nivel: "taller",
      titulo: "Las fallas intermitentes son las que más engañan",
      texto: "Pueden ser soldaduras frías, conectores flojos o un componente que falla con la temperatura. Si podés, anotá cuándo pasa (al arrancar, después de un rato, con calor). Ese dato nos sirve mucho.",
    },
    r_bateria: {
      resultado: true, nivel: "taller",
      titulo: "Si el cargador anda, lo más probable es la batería o el circuito de carga",
      texto: "Las baterías tienen vida útil y el circuito que las administra puede bloquearlas por seguridad. Se mide la batería y la placa de carga; muchas veces se recupera sin cambiar el pack completo.",
    },
    r_cargador: {
      resultado: true, nivel: "taller",
      titulo: "Primero hay que revisar el cargador",
      texto: "Si el cargador no da señales, puede ser él y no el equipo. Si tenés otro compatible, probalo. Si no, traé los dos juntos y lo verificamos en el momento.",
    },
    r_cable: {
      resultado: true, nivel: "ok",
      titulo: "Era el cable o la entrada",
      texto: "Si con otro cable o entrada se ve, el equipo está bien. Reemplazá el cable HDMI; si la entrada del televisor no funciona, eso sí lo podemos revisar.",
    },
    r_tv_standby: {
      resultado: true, nivel: "taller",
      titulo: "Queda en standby: fuente o placa principal",
      texto: "Cuando el LED prende pero no arranca, suele ser la sección de la fuente que alimenta la placa principal, o la placa misma. Se diagnostica con instrumentos en el laboratorio.",
    },
    r_tv_backlight: {
      resultado: true, nivel: "taller",
      titulo: "Es el backlight (la iluminación de la pantalla)",
      texto: "Si con linterna se ve imagen tenue, el panel y la placa funcionan: fallaron las tiras LED o su fuente. Es una reparación muy común y en la mayoría de los casos conviene hacerla.",
    },
    r_tv_tcon: {
      resultado: true, nivel: "taller",
      titulo: "Sin imagen: placa T-CON o placa principal",
      texto: "Si no hay imagen ni con linterna, el problema está en la placa que maneja el panel (T-CON) o en la placa principal. Hay que medir para saber cuál.",
    },
    r_tv_panel: {
      resultado: true, nivel: "taller",
      titulo: "Líneas o manchas: puede ser el panel",
      texto: "Algunas fallas de líneas se resuelven en la T-CON o en los conectores del panel. Otras son del panel mismo y no siempre conviene repararlas. Con una foto de la pantalla por WhatsApp te orientamos antes de que lo traigas.",
    },
    r_nb_reset: {
      resultado: true, nivel: "ok",
      titulo: "Se resolvió con un reinicio forzado",
      texto: "A veces el controlador de energía queda bloqueado. Si vuelve a pasar seguido, conviene revisarla: puede ser la batería o el circuito de carga.",
    },
    r_nb_placa: {
      resultado: true, nivel: "taller",
      titulo: "Falla en la placa madre: circuito de encendido o alimentación",
      texto: "Si el cargador anda pero la notebook no reacciona, el problema está en la placa. Es exactamente nuestra especialidad: se repara a nivel componente, sin cambiar la placa completa.",
    },
    r_nb_conector: {
      resultado: true, nivel: "taller",
      titulo: "Conector de carga dañado",
      texto: "Es una de las reparaciones más comunes en notebooks. Se reemplaza el conector (o el pin de carga) y se revisa la pista de la placa. No sigas forzándolo: puede dañar la placa.",
    },
    r_nb_carga: {
      resultado: true, nivel: "taller",
      titulo: "Circuito de carga o batería",
      texto: "Con cargador y conector bien, queda el circuito de carga de la placa o la batería. Se mide en el laboratorio y se te dice cuál es.",
    },
    r_nb_pantalla: {
      resultado: true, nivel: "taller",
      titulo: "La placa anda: es la pantalla, el flex o el backlight",
      texto: "Si en el monitor externo se ve, el sistema funciona. El problema está en el panel, en el cable flex de la bisagra o en la iluminación. Todo eso se repara sin tocar la placa.",
    },
    r_nb_video: {
      resultado: true, nivel: "taller",
      titulo: "Sin video en ninguna salida: placa madre",
      texto: "Puede ser el chip de video, la memoria o la alimentación de la placa. Hay que medir. Traela y te decimos qué tiene y si conviene.",
    },
    r_nb_temp: {
      resultado: true, nivel: "taller",
      titulo: "Se apaga por temperatura: limpieza y pasta térmica",
      texto: "Lo más probable es que el disipador esté tapado o la pasta térmica seca. Es un service preventivo rápido. Si después de eso sigue, se revisa la placa.",
    },
    r_con_hdmi: {
      resultado: true, nivel: "taller",
      titulo: "Puerto HDMI o chip de video",
      texto: "Si con otro cable y otra entrada no hay imagen, el puerto HDMI de la consola o el chip que lo maneja están dañados. Ambas cosas se reparan.",
    },
    r_auto_fusible: {
      resultado: true, nivel: "ok",
      titulo: "Empezá por los fusibles",
      texto: "El estéreo tiene un fusible atrás y el auto otro en la caja de fusibles (buscá 'radio' o 'audio'). Si alguno está cortado, reemplazalo por uno del mismo valor. Si vuelve a cortarse o sigue sin encender, traelo.",
    },
    r_aud_canales: {
      resultado: true, nivel: "taller",
      titulo: "Canales aislados: potes, faders o preamplificador",
      texto: "Si el problema es solo en algunos canales, la fuente y el master están bien. Suele ser suciedad en potenciómetros, faders gastados o un operacional en el preamp de ese canal.",
    },
    r_aud_master: {
      resultado: true, nivel: "taller",
      titulo: "Enciende sin audio: sección master o fuente parcial",
      texto: "Cuando ningún canal sale, el problema está después de la mezcla: el master, la salida o una de las tensiones de la fuente. Se mide y se localiza en el laboratorio.",
    },
    r_aud_zumbido: {
      resultado: true, nivel: "taller",
      titulo: "Zumbido: filtrado de fuente o masa",
      texto: "Un zumbido en todos los canales suele ser por capacitores de la fuente envejecidos (recap) o un problema de masa. Probá en otro enchufe y sin nada conectado: si sigue, es interno.",
    },
    r_aud_proteccion: {
      resultado: true, nivel: "taller",
      titulo: "Protección sin carga: falla en la etapa de salida",
      texto: "Si entra en protección sin parlantes, hay transistores de salida dañados o un problema de offset. No lo sigas encendiendo. Es reparable, y conviene hacerlo antes de que dañe más.",
    },
    r_aud_parlante: {
      resultado: true, nivel: "ok",
      titulo: "La potencia está bien: revisá los parlantes y cables",
      texto: "Si sin carga enciende normal, la protección se activa por un parlante en corto o un cable dañado. Probá los parlantes uno por uno o con otro cable. Si un parlante está en corto, ese sí lo podemos revisar.",
    },
    r_aud_distorsion: {
      resultado: true, nivel: "taller",
      titulo: "Distorsión: bias, fuente o capacitores",
      texto: "El sonido distorsionado o bajo suele venir de un ajuste de bias corrido, capacitores de la fuente secos o un componente de la etapa previa. Se ajusta y repara con carga real.",
    },
    r_aud_canal: {
      resultado: true, nivel: "taller",
      titulo: "Un canal muerto: etapa de salida de ese canal",
      texto: "Antes de traerlo, cruzá las entradas para confirmar que no es el cable o la fuente de señal. Si el canal sigue mudo, es la etapa de ese canal.",
    },
    r_ups_bat: {
      resultado: true, nivel: "taller",
      titulo: "Lo más probable: batería agotada",
      texto: "Las baterías de UPS duran entre 2 y 4 años. Si pita, no respalda o no arranca sin luz, casi siempre es eso. Se reemplaza y se verifica el cargador interno para que no vuelva a pasar.",
    },
    r_ups_normal: {
      resultado: true, nivel: "ok",
      titulo: "Eso es normal",
      texto: "La UPS avisa con pitidos cuando está trabajando a batería. Si el respaldo dura lo esperado, no tiene ninguna falla. Si dura muy poco, la batería está por agotarse.",
    },
  },
};
