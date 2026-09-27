/* ============================================================
   LISTADO DE FOTOS — ARCHIVO AUTOMATICO, NO EDITAR A MANO
   Lo genera actualizar-fotos.py leyendo las carpetas de
   images/trabajos/
   Si agregas o sacas fotos, volve a correr ACTUALIZAR.bat
   ============================================================ */
const FOTOS = {
  "awara": [
    "images/trabajos/awara/awara.jpg",
    "images/trabajos/awara/awara-1.jpg",
    "images/trabajos/awara/awara-1-1.jpg",
    "images/trabajos/awara/awara-2.jpg",
    "images/trabajos/awara/awara-2-1.jpg",
    "images/trabajos/awara/awara-3.jpg",
    "images/trabajos/awara/awara-3-1.jpg",
    "images/trabajos/awara/awara-4.jpg",
    "images/trabajos/awara/awara-4-1.jpg",
    "images/trabajos/awara/awara-5.jpg",
    "images/trabajos/awara/awara-5-1.jpg",
    "images/trabajos/awara/awara-6.jpg"
  ],
  "backup": [
    "images/trabajos/backup/backup.jpg",
    "images/trabajos/backup/backup-1.jpg",
    "images/trabajos/backup/backup-1-1.jpg",
    "images/trabajos/backup/backup-2.jpg"
  ],
  "chiller": [
    "images/trabajos/chiller/chiller.jpg",
    "images/trabajos/chiller/chiller-1.jpg",
    "images/trabajos/chiller/chiller-1-1.jpg",
    "images/trabajos/chiller/chiller-2.jpg",
    "images/trabajos/chiller/chiller-2-1.jpg",
    "images/trabajos/chiller/chiller-3.jpg",
    "images/trabajos/chiller/chiller-3-1.jpg",
    "images/trabajos/chiller/chiller-4.jpg",
    "images/trabajos/chiller/chiller-4-1.jpg",
    "images/trabajos/chiller/chiller-5.jpg",
    "images/trabajos/chiller/chiller-5-1.jpg",
    "images/trabajos/chiller/chiller-6.jpg",
    "images/trabajos/chiller/chiller-6-1.jpg",
    "images/trabajos/chiller/chiller-7.jpg",
    "images/trabajos/chiller/chiller-7-1.jpg",
    "images/trabajos/chiller/chiller-8.jpg",
    "images/trabajos/chiller/chiller-8-1.jpg",
    "images/trabajos/chiller/chiller-9.jpg",
    "images/trabajos/chiller/chiller-9-1.jpg",
    "images/trabajos/chiller/chiller-10.jpg",
    "images/trabajos/chiller/chiller-10-1.jpg",
    "images/trabajos/chiller/chiller-11.jpg"
  ],
  "maimara": [
    "images/trabajos/maimara/maimara.jpg",
    "images/trabajos/maimara/maimara-1.jpg",
    "images/trabajos/maimara/maimara-1-1.jpg",
    "images/trabajos/maimara/maimara-2.jpg",
    "images/trabajos/maimara/maimara-2-1.jpg",
    "images/trabajos/maimara/maimara-3.jpg"
  ],
  "metalnoa": [
    "images/trabajos/metalnoa/metalnoa.jpg",
    "images/trabajos/metalnoa/metalnoa-1.jpg",
    "images/trabajos/metalnoa/metalnoa-1-1.jpg",
    "images/trabajos/metalnoa/metalnoa-2.jpg",
    "images/trabajos/metalnoa/metalnoa-2-1.jpg",
    "images/trabajos/metalnoa/metalnoa-3.jpg",
    "images/trabajos/metalnoa/metalnoa-3-1.jpg",
    "images/trabajos/metalnoa/metalnoa-4.jpg",
    "images/trabajos/metalnoa/metalnoa-4-1.jpg",
    "images/trabajos/metalnoa/metalnoa-5.jpg"
  ],
  "parque-fotovoltaico": [
    "images/trabajos/parque-fotovoltaico/parque-fotovoltaico.jpg",
    "images/trabajos/parque-fotovoltaico/parque-fotovoltaico-1.jpg",
    "images/trabajos/parque-fotovoltaico/parque-fotovoltaico-1-1.jpg",
    "images/trabajos/parque-fotovoltaico/parque-fotovoltaico-2.jpg",
    "images/trabajos/parque-fotovoltaico/parque-fotovoltaico-2-1.jpg",
    "images/trabajos/parque-fotovoltaico/parque-fotovoltaico-3.jpg",
    "images/trabajos/parque-fotovoltaico/parque-fotovoltaico-3-1.jpg",
    "images/trabajos/parque-fotovoltaico/parque-fotovoltaico-4.jpg",
    "images/trabajos/parque-fotovoltaico/parque-fotovoltaico-4-1.jpg",
    "images/trabajos/parque-fotovoltaico/parque-fotovoltaico-5.jpg",
    "images/trabajos/parque-fotovoltaico/parque-fotovoltaico-5-1.jpg",
    "images/trabajos/parque-fotovoltaico/parque-fotovoltaico-6.jpg",
    "images/trabajos/parque-fotovoltaico/parque-fotovoltaico-6-1.jpg",
    "images/trabajos/parque-fotovoltaico/parque-fotovoltaico-7.jpg",
    "images/trabajos/parque-fotovoltaico/parque-fotovoltaico-7-1.jpg",
    "images/trabajos/parque-fotovoltaico/parque-fotovoltaico-8.jpg",
    "images/trabajos/parque-fotovoltaico/parque-fotovoltaico-8-1.jpg",
    "images/trabajos/parque-fotovoltaico/parque-fotovoltaico-9.jpg",
    "images/trabajos/parque-fotovoltaico/parque-fotovoltaico-9-1.jpg",
    "images/trabajos/parque-fotovoltaico/parque-fotovoltaico-10.jpg",
    "images/trabajos/parque-fotovoltaico/parque-fotovoltaico-10-1.jpg",
    "images/trabajos/parque-fotovoltaico/parque-fotovoltaico-11.jpg",
    "images/trabajos/parque-fotovoltaico/parque-fotovoltaico-11-1.jpg",
    "images/trabajos/parque-fotovoltaico/parque-fotovoltaico-12.jpg",
    "images/trabajos/parque-fotovoltaico/parque-fotovoltaico-12-1.jpg",
    "images/trabajos/parque-fotovoltaico/parque-fotovoltaico-13.jpg"
  ],
  "porotera": [
    "images/trabajos/porotera/porotera.jpg",
    "images/trabajos/porotera/porotera-1.jpg",
    "images/trabajos/porotera/porotera-1-1.jpg",
    "images/trabajos/porotera/porotera-2.jpg",
    "images/trabajos/porotera/porotera-2-1.jpg",
    "images/trabajos/porotera/porotera-3.jpg",
    "images/trabajos/porotera/porotera-3-1.jpg",
    "images/trabajos/porotera/porotera-4.jpg",
    "images/trabajos/porotera/porotera-4-1.jpg",
    "images/trabajos/porotera/porotera-5.jpg",
    "images/trabajos/porotera/porotera-5-1.jpg",
    "images/trabajos/porotera/porotera-6.jpg",
    "images/trabajos/porotera/porotera-6-1.jpg",
    "images/trabajos/porotera/porotera-7.jpg",
    "images/trabajos/porotera/porotera-7-1.jpg",
    "images/trabajos/porotera/porotera-8.jpg"
  ],
  "posco": [
    "images/trabajos/posco/posco.jpg",
    "images/trabajos/posco/posco-1.jpg",
    "images/trabajos/posco/posco-2.jpg",
    "images/trabajos/posco/posco-3.jpg",
    "images/trabajos/posco/posco-4.jpg"
  ],
  "seccionadora": [
    "images/trabajos/seccionadora/seccionadora.jpg",
    "images/trabajos/seccionadora/seccionadora-1.jpg",
    "images/trabajos/seccionadora/seccionadora-1-1.jpg",
    "images/trabajos/seccionadora/seccionadora-2.jpg",
    "images/trabajos/seccionadora/seccionadora-2-1.jpg",
    "images/trabajos/seccionadora/seccionadora-3.jpg"
  ],
  "tambo": [
    "images/trabajos/tambo/tambo.jpg",
    "images/trabajos/tambo/tambo-1.jpg",
    "images/trabajos/tambo/tambo-1-1.jpg",
    "images/trabajos/tambo/tambo-2.jpg"
  ]
};
