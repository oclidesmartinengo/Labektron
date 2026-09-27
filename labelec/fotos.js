/* ============================================================
   LISTADO DE FOTOS — ARCHIVO AUTOMATICO, NO EDITAR A MANO
   Lo genera actualizar-fotos.py leyendo las carpetas de
   labelec/images/trabajos/
   Si agregas o sacas fotos, volve a correr ACTUALIZAR.bat
   ============================================================ */
const FOTOS = {
  "acelerador-electronico": [
    "images/trabajos/acelerador-electronico/IMG_20200314_135537.jpg",
    "images/trabajos/acelerador-electronico/IMG_20200314_135545.jpg",
    "images/trabajos/acelerador-electronico/IMG_20200317_182204.jpg",
    "images/trabajos/acelerador-electronico/IMG_20200317_182232.jpg",
    "images/trabajos/acelerador-electronico/IMG_20200317_182300.jpg"
  ],
  "arranque-suave": [
    "images/trabajos/arranque-suave/20260410_175050.jpg",
    "images/trabajos/arranque-suave/20260410_175054.jpg",
    "images/trabajos/arranque-suave/20260410_212139.jpg",
    "images/trabajos/arranque-suave/20260410_213600.jpg",
    "images/trabajos/arranque-suave/20260410_220618.jpg"
  ],
  "bateria-ducati": [
    "images/trabajos/bateria-ducati/20230719_155845.jpg",
    "images/trabajos/bateria-ducati/20230719_160500.jpg",
    "images/trabajos/bateria-ducati/20230719_191914.jpg",
    "images/trabajos/bateria-ducati/20230719_191938.jpg"
  ],
  "cabezal-robotico": [
    "images/trabajos/cabezal-robotico/20230726_202508.jpg",
    "images/trabajos/cabezal-robotico/20230726_202517.jpg",
    "images/trabajos/cabezal-robotico/20230726_203256.jpg"
  ],
  "estereo-chevrolet": [
    "images/trabajos/estereo-chevrolet/20260702_175700.jpg",
    "images/trabajos/estereo-chevrolet/20260702_175716.jpg"
  ],
  "estereo-pioneer": [
    "images/trabajos/estereo-pioneer/20210816_173317.jpg",
    "images/trabajos/estereo-pioneer/20210816_174705.jpg",
    "images/trabajos/estereo-pioneer/20210816_174729.jpg"
  ],
  "estereo-pioneer-2": [
    "images/trabajos/estereo-pioneer-2/20230626_184438.jpg",
    "images/trabajos/estereo-pioneer-2/20230627_155109.jpg"
  ],
  "estereo-sony": [
    "images/trabajos/estereo-sony/IMG_20200710_175448.jpg",
    "images/trabajos/estereo-sony/IMG_20200710_175457.jpg",
    "images/trabajos/estereo-sony/IMG_20200710_180957.jpg",
    "images/trabajos/estereo-sony/IMG_20200710_181001.jpg",
    "images/trabajos/estereo-sony/IMG_20200711_115640.jpg",
    "images/trabajos/estereo-sony/IMG_20200714_172534.jpg",
    "images/trabajos/estereo-sony/IMG_20200714_172539.jpg"
  ],
  "esterilizadora-faeta": [
    "images/trabajos/esterilizadora-faeta/20260512_100208.jpg",
    "images/trabajos/esterilizadora-faeta/20260512_141239.jpg",
    "images/trabajos/esterilizadora-faeta/20260512_141246.jpg"
  ],
  "horno-electrico-longvie": [
    "images/trabajos/horno-electrico-longvie/20230518_160736.jpg",
    "images/trabajos/horno-electrico-longvie/20230518_160808.jpg"
  ],
  "mantenimiento-placa-de-video": [
    "images/trabajos/mantenimiento-placa-de-video/20260407_170054.jpg",
    "images/trabajos/mantenimiento-placa-de-video/20260408_192259.jpg",
    "images/trabajos/mantenimiento-placa-de-video/20260408_192654.jpg",
    "images/trabajos/mantenimiento-placa-de-video/20260408_192747.jpg"
  ],
  "mantenimiento-ps4-fat": [
    "images/trabajos/mantenimiento-ps4-fat/IMG_20200803_214442.jpg",
    "images/trabajos/mantenimiento-ps4-fat/IMG_20200803_215238.jpg",
    "images/trabajos/mantenimiento-ps4-fat/IMG_20200803_215626.jpg",
    "images/trabajos/mantenimiento-ps4-fat/IMG_20200803_215630.jpg",
    "images/trabajos/mantenimiento-ps4-fat/IMG_20200803_222856.jpg",
    "images/trabajos/mantenimiento-ps4-fat/IMG_20200803_223624.jpg",
    "images/trabajos/mantenimiento-ps4-fat/IMG_20200803_223958.jpg",
    "images/trabajos/mantenimiento-ps4-fat/IMG_20200803_224656.jpg",
    "images/trabajos/mantenimiento-ps4-fat/IMG_20200803_224707.jpg"
  ],
  "mantenimiento-ps4-fat-2": [
    "images/trabajos/mantenimiento-ps4-fat-2/20201019_195956.jpg",
    "images/trabajos/mantenimiento-ps4-fat-2/20230321_192008.jpg",
    "images/trabajos/mantenimiento-ps4-fat-2/20230321_192018.jpg",
    "images/trabajos/mantenimiento-ps4-fat-2/20230321_192123.jpg",
    "images/trabajos/mantenimiento-ps4-fat-2/20230321_194309.jpg",
    "images/trabajos/mantenimiento-ps4-fat-2/20230321_195435.jpg"
  ],
  "mantenimiento-ps4-fat-3": [
    "images/trabajos/mantenimiento-ps4-fat-3/20230330_160945.jpg",
    "images/trabajos/mantenimiento-ps4-fat-3/20230330_161338.jpg",
    "images/trabajos/mantenimiento-ps4-fat-3/20230330_161628.jpg",
    "images/trabajos/mantenimiento-ps4-fat-3/20230330_162524.jpg",
    "images/trabajos/mantenimiento-ps4-fat-3/20230330_162842.jpg",
    "images/trabajos/mantenimiento-ps4-fat-3/20230330_164437.jpg"
  ],
  "osciloscopio-siglent": [
    "images/trabajos/osciloscopio-siglent/20210817_152153.jpg",
    "images/trabajos/osciloscopio-siglent/20210821_103823.jpg",
    "images/trabajos/osciloscopio-siglent/20210821_103843.jpg",
    "images/trabajos/osciloscopio-siglent/20210821_103907.jpg"
  ],
  "placa-de-video": [
    "images/trabajos/placa-de-video/20210811_183248.jpg",
    "images/trabajos/placa-de-video/20210811_183314.jpg",
    "images/trabajos/placa-de-video/20210820_120945.jpg",
    "images/trabajos/placa-de-video/20210820_120952.jpg",
    "images/trabajos/placa-de-video/20210820_121457.jpg"
  ],
  "reparacion-macbook": [
    "images/trabajos/reparacion-macbook/20260616_155254.jpg",
    "images/trabajos/reparacion-macbook/20260616_161954.jpg",
    "images/trabajos/reparacion-macbook/20260625_110623.jpg",
    "images/trabajos/reparacion-macbook/20260625_110639.jpg"
  ],
  "reparacion-ps3-wifi": [
    "images/trabajos/reparacion-ps3-wifi/IMG_20201012_154840.jpg",
    "images/trabajos/reparacion-ps3-wifi/IMG_20201012_154843.jpg",
    "images/trabajos/reparacion-ps3-wifi/IMG_20201012_155408.jpg",
    "images/trabajos/reparacion-ps3-wifi/IMG_20201012_155411.jpg"
  ],
  "soundcraft": [
    "images/trabajos/soundcraft/20230422_115043.jpg",
    "images/trabajos/soundcraft/20230422_152015.jpg",
    "images/trabajos/soundcraft/20230422_152044.jpg",
    "images/trabajos/soundcraft/20230424_165336.jpg",
    "images/trabajos/soundcraft/20230517_164557.jpg",
    "images/trabajos/soundcraft/20230517_164606.jpg"
  ],
  "variador-125hp": [
    "images/trabajos/variador-125hp/20260324_173733.jpg",
    "images/trabajos/variador-125hp/20260324_173737.jpg",
    "images/trabajos/variador-125hp/20260324_183954.jpg",
    "images/trabajos/variador-125hp/20260324_190501.jpg",
    "images/trabajos/variador-125hp/20260324_192836.jpg",
    "images/trabajos/variador-125hp/20260325_092005.jpg"
  ]
};
