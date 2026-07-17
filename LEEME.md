# GRUPO LABEKTRON — Sitio web

Web de una sola página, rápida y fácil de editar. Todo el contenido vive en **`datos.js`**; el diseño está en `index.html` y casi nunca lo tocás.

## Ver la web
Abrí **`index.html`** en cualquier navegador (doble clic). Listo.

## Estructura
```
├── index.html          ← el diseño (no hace falta tocarlo)
├── datos.js            ← ACÁ editás todo el contenido
├── optimizar-fotos.py  ← script para achicar las fotos antes de subirlas
└── images/
    ├── logo.png
    ├── elektron.png / labelec.png
    ├── trabajos/       ← una foto por trabajo
    ├── clientes/       ← un logo por cliente
    ├── sectores/
    └── oficinas/
```

## Cómo agregar un trabajo nuevo (ejemplo)
1. Optimizá la foto (ver más abajo) y guardala en `images/trabajos/`.
2. Abrí `datos.js`, buscá la lista `TRABAJOS` y copiá un bloque:
   ```js
   {
     titulo: "Nombre del trabajo",
     imagen: "images/trabajos/mi-foto.jpg",
     descripcion: "Breve descripción.",
   },
   ```
3. Guardá y recargá la web. Ya aparece.

Lo mismo para clientes, sectores, testimonios y oficinas: cada uno tiene su lista en `datos.js`.

## Optimizar fotos (para que cargue rápido)
1. Una sola vez: instalá la herramienta → `pip install pillow`
2. Poné las fotos originales dentro de `originales/trabajos`, `originales/clientes`, etc.
3. Ejecutá: `python optimizar-fotos.py`
4. Las versiones livianas aparecen en `images/` con nombres corregidos (sin espacios ni tildes).

## Publicarla gratis
Arrastrá la carpeta completa a **netlify.com/drop** o subila a **Vercel** (igual que la demo actual). Queda online en segundos.

## Cambiar datos de contacto
En `datos.js`, arriba de todo, editá el objeto `EMPRESA`: WhatsApp, email, teléfono y eslogan.

> ⚠️ Reemplazá las imágenes de ejemplo (placeholders) por tus fotos reales. Los nombres de archivo ya coinciden con lo que espera `datos.js`, así que si mantenés los mismos nombres, no tenés que tocar nada más.
