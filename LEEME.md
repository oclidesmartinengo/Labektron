# GRUPO LABEKTRON — Sitio web

Sitio estático, rápido y fácil de editar. El contenido vive en archivos `.js`
que se abren con el Bloc de notas; el diseño casi nunca se toca.

---

## ⚡ AGREGAR UN TRABAJO NUEVO (lo que hacés el 90% de las veces)

**1. Creá una carpeta con las fotos**

```
originales/trabajos/tablero-frigorifico/
    IMG_2034.jpg
    IMG_2041.jpg
    portada.jpg          <- opcional: esta va primera
    lo-que-sea.jpg
```

Tirá adentro **todas las fotos que quieras**, con el nombre que tengan.
No hay que contarlas, ni numerarlas, ni anotarlas en ningún lado.
La única regla: si querés elegir la foto de tapa, llamala `portada.jpg`.

**2. Escribí el trabajo en `trabajos-datos.js`**

Copiá el bloque de ejemplo que está al final del archivo y completá:

```js
{
  titulo: "Tablero de frigorífico",
  carpeta: "tablero-frigorifico",   // 👈 el nombre EXACTO de la carpeta
  descripcion: "Texto corto de la tarjeta.",
  destacado: true,                  // true = también sale en la página de inicio
  orden: "2026-09",                 // AAAA-MM, los más nuevos primero
  detalles: { cliente: "...", ubicacion: "...", fecha: "...", duracion: "..." },
  tecnicos: [ "Dato técnico 1", "Dato técnico 2" ],
  descripcionLarga: "El texto largo que se ve al abrir la galería.",
},
```

**3. Doble clic en `ACTUALIZAR.bat`**

El script solo:

- achica las fotos (de ~2 MB a ~250 KB, sin que se vean mal)
- las copia a `images/trabajos/tablero-frigorifico/`
- arma la lista de fotos (`fotos.js`) leyendo la carpeta

**4. GitHub Desktop → Commit → Push.** Listo.

> Para Labelec es igual, pero las fotos van en
> `originales/labelec/trabajos/NOMBRE/` y el trabajo se escribe en
> `labelec/trabajos-labelec.js`.

---

## Qué archivo edito para cada cosa

| Quiero cambiar… | Archivo |
|---|---|
| Trabajos del sitio principal | `trabajos-datos.js` |
| Trabajos de Labelec | `labelec/trabajos-labelec.js` |
| Contacto, textos, clientes, sectores, oficinas | `datos.js` |
| Rubros, marcas, cotizador de Labelec | `labelec/datos-labelec.js` |
| **Nada. Nunca.** | `fotos.js` y `labelec/fotos.js` ← los genera el script |

⚠️ Editá **solo lo que está entre comillas**. Nunca cambies el nombre de un
campo (lo que está antes de los dos puntos): eso rompe el archivo.

---

## Estructura

```
├── index.html               ← diseño de la home
├── trabajos.html            ← línea de tiempo de proyectos
├── datos.js                 ← textos, contacto, clientes, sectores
├── trabajos-datos.js        ← 📝 LOS TRABAJOS
├── fotos.js                 ← 🤖 automático, no tocar
├── trabajos.js / empresa.js / *.css   ← diseño, no hace falta tocarlos
├── ACTUALIZAR.bat           ← 👈 doble clic después de agregar fotos
├── actualizar-fotos.py      ← lo que corre el .bat
├── originales/              ← tus fotos grandes (no se suben a la web)
│   ├── trabajos/<nombre-del-trabajo>/
│   ├── clientes/  sectores/  oficinas/
│   └── labelec/trabajos/<nombre-del-trabajo>/
├── images/                  ← 🤖 copias livianas que usa la web
└── labelec/                 ← mini-sitio de Labelec (misma lógica)
```

---

## Primera vez en una PC nueva

1. Instalá Python desde <https://www.python.org/downloads/>
   (tildá **"Add Python to PATH"** en la primera pantalla).
2. Abrí la terminal y escribí: `pip install pillow`
3. Listo, `ACTUALIZAR.bat` ya funciona.

---

## Cosas que resuelve el script solo

- Ordena en carpetas las fotos sueltas viejas (`chiller-1.jpg`, `chiller-2.jpg`
  → `chiller/`). Lo hace una sola vez, la primera corrida.
- Corrige nombres con espacios, tildes y paréntesis.
- Respeta la rotación de las fotos del celular.
- No vuelve a procesar una foto que ya estaba hecha (por eso la segunda
  corrida tarda 2 segundos).
- Avisa en pantalla si un trabajo apunta a una carpeta que no existe,
  o si hay una carpeta con fotos que ningún trabajo usa todavía.
- **Nunca toca ni borra tus originales.**

---

## Publicar

El sitio está en GitHub Pages con el dominio `labektron.com` (archivo `CNAME`).
Para publicar: GitHub Desktop → **Commit to main** → **Push origin**.
Tarda un minuto en verse. Refrescá con **Ctrl+F5**.
