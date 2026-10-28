/* ============================================================
   LISTADO DE FOTOS — ARCHIVO AUTOMATICO, NO EDITAR A MANO
   Lo genera actualizar-fotos.py leyendo las carpetas de
   images/trabajos/
   Si agregas o sacas fotos, volve a correr ACTUALIZAR.bat
   ============================================================ */
const FOTOS = {
  "awara": [
    "images/trabajos/awara/portada.jpg",
    "images/trabajos/awara/awara-1.jpg",
    "images/trabajos/awara/awara-2.jpg",
    "images/trabajos/awara/awara-3.jpg",
    "images/trabajos/awara/awara-4.jpg",
    "images/trabajos/awara/awara-5.jpg"
  ],
  "chiller": [
    "images/trabajos/chiller/portada.jpg",
    "images/trabajos/chiller/chiller-1.jpg",
    "images/trabajos/chiller/chiller-2.jpg",
    "images/trabajos/chiller/chiller-3.jpg",
    "images/trabajos/chiller/chiller-4.jpg",
    "images/trabajos/chiller/chiller-5.jpg",
    "images/trabajos/chiller/chiller-6.jpg",
    "images/trabajos/chiller/chiller-7.jpg",
    "images/trabajos/chiller/chiller-8.jpg",
    "images/trabajos/chiller/chiller-9.jpg",
    "images/trabajos/chiller/chiller-10.jpg"
  ],
  "cocel-autoelevador": [
    "images/trabajos/cocel-autoelevador/portada.jpg",
    "images/trabajos/cocel-autoelevador/20260217-180356.jpg",
    "images/trabajos/cocel-autoelevador/20260507-171653.jpg",
    "images/trabajos/cocel-autoelevador/20260507-172516.jpg",
    "images/trabajos/cocel-autoelevador/20260521-165350.jpg",
    "images/trabajos/cocel-autoelevador/20260521-165423.jpg",
    "images/trabajos/cocel-autoelevador/20260530-113453.jpg",
    "images/trabajos/cocel-autoelevador/20260530-121039.jpg",
    "images/trabajos/cocel-autoelevador/20260602-181600.jpg",
    "images/trabajos/cocel-autoelevador/20260602-181720.jpg",
    "images/trabajos/cocel-autoelevador/20260602-184424.jpg",
    "images/trabajos/cocel-autoelevador/20260603-123925.jpg",
    "images/trabajos/cocel-autoelevador/20260701-145300.jpg"
  ],
  "dycar-autolavado": [
    "images/trabajos/dycar-autolavado/portada.jpg",
    "images/trabajos/dycar-autolavado/20261001-144451.jpg",
    "images/trabajos/dycar-autolavado/20261001-155437.jpg"
  ],
  "espartina-solar": [
    "images/trabajos/espartina-solar/portada.jpg",
    "images/trabajos/espartina-solar/parque-fotovoltaico.jpg",
    "images/trabajos/espartina-solar/parque-fotovoltaico-1.jpg",
    "images/trabajos/espartina-solar/parque-fotovoltaico-2.jpg",
    "images/trabajos/espartina-solar/parque-fotovoltaico-3.jpg",
    "images/trabajos/espartina-solar/parque-fotovoltaico-5.jpg",
    "images/trabajos/espartina-solar/parque-fotovoltaico-6.jpg",
    "images/trabajos/espartina-solar/parque-fotovoltaico-7.jpg",
    "images/trabajos/espartina-solar/parque-fotovoltaico-8.jpg",
    "images/trabajos/espartina-solar/parque-fotovoltaico-9.jpg",
    "images/trabajos/espartina-solar/parque-fotovoltaico-10.jpg",
    "images/trabajos/espartina-solar/parque-fotovoltaico-11.jpg",
    "images/trabajos/espartina-solar/parque-fotovoltaico-12.jpg"
  ],
  "fleming-solar": [
    "images/trabajos/fleming-solar/portada.jpg",
    "images/trabajos/fleming-solar/20261003-183910.jpg",
    "images/trabajos/fleming-solar/20261003-184005.jpg",
    "images/trabajos/fleming-solar/20261003-184025.jpg",
    "images/trabajos/fleming-solar/20261003-202843.jpg",
    "images/trabajos/fleming-solar/20261003-210222.jpg"
  ],
  "geomix-monitoreo": [
    "images/trabajos/geomix-monitoreo/portada.jpg",
    "images/trabajos/geomix-monitoreo/20261021-101005.jpg",
    "images/trabajos/geomix-monitoreo/20261021-101015.jpg",
    "images/trabajos/geomix-monitoreo/20261021-132131.jpg",
    "images/trabajos/geomix-monitoreo/20261021-193624.jpg",
    "images/trabajos/geomix-monitoreo/20261021-193655.jpg",
    "images/trabajos/geomix-monitoreo/20261022-202454.jpg",
    "images/trabajos/geomix-monitoreo/20261022-205750.jpg"
  ],
  "maimara-solar": [
    "images/trabajos/maimara-solar/portada.jpg",
    "images/trabajos/maimara-solar/maimara-1.jpg",
    "images/trabajos/maimara-solar/maimara-2.jpg"
  ],
  "metalnoa": [
    "images/trabajos/metalnoa/portada.jpg",
    "images/trabajos/metalnoa/metalnoa.jpg",
    "images/trabajos/metalnoa/metalnoa-2.jpg",
    "images/trabajos/metalnoa/metalnoa-3.jpg",
    "images/trabajos/metalnoa/metalnoa-4.jpg"
  ],
  "morenoyvenier-troqueladora": [
    "images/trabajos/morenoyvenier-troqueladora/portada.jpg",
    "images/trabajos/morenoyvenier-troqueladora/20260811-141520.jpg",
    "images/trabajos/morenoyvenier-troqueladora/20260827-172531.jpg"
  ],
  "porotera": [
    "images/trabajos/porotera/portada.jpg",
    "images/trabajos/porotera/porotera-1.jpg",
    "images/trabajos/porotera/porotera-2.jpg",
    "images/trabajos/porotera/porotera-3.jpg",
    "images/trabajos/porotera/porotera-4.jpg",
    "images/trabajos/porotera/porotera-5.jpg",
    "images/trabajos/porotera/porotera-6.jpg",
    "images/trabajos/porotera/porotera-7.jpg"
  ],
  "posco-pat2025": [
    "images/trabajos/posco-pat2025/portada.jpg",
    "images/trabajos/posco-pat2025/posco-1.jpg",
    "images/trabajos/posco-pat2025/posco-2.jpg",
    "images/trabajos/posco-pat2025/posco-3.jpg",
    "images/trabajos/posco-pat2025/posco-4.jpg"
  ],
  "posco-pat2026": [
    "images/trabajos/posco-pat2026/portada.jpg",
    "images/trabajos/posco-pat2026/20260922-174958.jpg",
    "images/trabajos/posco-pat2026/20260922-180247.jpg",
    "images/trabajos/posco-pat2026/20260922-180756.jpg",
    "images/trabajos/posco-pat2026/20260922-180926.jpg",
    "images/trabajos/posco-pat2026/20260923-092849.jpg",
    "images/trabajos/posco-pat2026/20260923-094944.jpg",
    "images/trabajos/posco-pat2026/20260923-095901.jpg",
    "images/trabajos/posco-pat2026/20260923-095907.jpg",
    "images/trabajos/posco-pat2026/20260923-100741.jpg",
    "images/trabajos/posco-pat2026/20260923-101738.jpg"
  ],
  "riotinto-tablero": [
    "images/trabajos/riotinto-tablero/portada.jpg",
    "images/trabajos/riotinto-tablero/20260921-180230.jpg",
    "images/trabajos/riotinto-tablero/20261017-025818.jpg",
    "images/trabajos/riotinto-tablero/20261017-025831.jpg",
    "images/trabajos/riotinto-tablero/20261017-025857.jpg",
    "images/trabajos/riotinto-tablero/20261017-033954.jpg"
  ],
  "seccionadora": [
    "images/trabajos/seccionadora/portada.jpg",
    "images/trabajos/seccionadora/seccionadora-1.jpg",
    "images/trabajos/seccionadora/seccionadora-2.jpg"
  ],
  "tambo-quijano": [
    "images/trabajos/tambo-quijano/portada.jpg",
    "images/trabajos/tambo-quijano/tambo-1.jpg"
  ],
  "vissionary-backup": [
    "images/trabajos/vissionary-backup/portada.jpg",
    "images/trabajos/vissionary-backup/backup-1.jpg"
  ],
  "vissionary-solar": [
    "images/trabajos/vissionary-solar/portada.jpg",
    "images/trabajos/vissionary-solar/20260831-181435.jpg",
    "images/trabajos/vissionary-solar/20260901-194328.jpg",
    "images/trabajos/vissionary-solar/20260902-182024.jpg",
    "images/trabajos/vissionary-solar/20260903-145506.jpg",
    "images/trabajos/vissionary-solar/20260903-183827.jpg",
    "images/trabajos/vissionary-solar/20260904-200520.jpg",
    "images/trabajos/vissionary-solar/20260904-200532.jpg",
    "images/trabajos/vissionary-solar/20260904-221843.jpg",
    "images/trabajos/vissionary-solar/20260905-142438.jpg",
    "images/trabajos/vissionary-solar/20260905-203154.jpg",
    "images/trabajos/vissionary-solar/20260906-115958.jpg",
    "images/trabajos/vissionary-solar/20260906-115959.jpg",
    "images/trabajos/vissionary-solar/20260906-121332.jpg",
    "images/trabajos/vissionary-solar/20260911-225346.jpg",
    "images/trabajos/vissionary-solar/20260911-225348.jpg",
    "images/trabajos/vissionary-solar/20261002-181243.jpg",
    "images/trabajos/vissionary-solar/20261002-181518.jpg"
  ],
  "vissionary-tablero": [
    "images/trabajos/vissionary-tablero/portada.jpg",
    "images/trabajos/vissionary-tablero/20261017-180640.jpg",
    "images/trabajos/vissionary-tablero/20261017-211148.jpg",
    "images/trabajos/vissionary-tablero/20261018-032125.jpg",
    "images/trabajos/vissionary-tablero/20261018-040817.jpg"
  ]
};
