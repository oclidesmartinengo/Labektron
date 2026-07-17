#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
====================================================================
  OPTIMIZADOR DE FOTOS — GRUPO LABEKTRON
====================================================================
Reduce el peso de las imágenes para que la web cargue rápido,
sin que se note pérdida de calidad. También corrige los nombres
(saca espacios y tildes) para evitar errores.

CÓMO USARLO (una sola vez, instalar):
    pip install pillow

CÓMO USARLO (cada vez que quieras optimizar fotos):
    1. Poné las fotos originales dentro de la carpeta  "originales"
       (dentro de subcarpetas: trabajos, clientes, sectores, oficinas)
    2. Ejecutá:   python optimizar-fotos.py
    3. Las versiones optimizadas aparecen en  /images  listas para usar.

QUÉ HACE:
    - Redimensiona a un ancho máximo razonable según el tipo.
    - Comprime a JPG (o mantiene PNG para logos con transparencia).
    - Renombra a minúsculas, sin espacios ni tildes.
    - Nunca toca tus originales.
====================================================================
"""

import os
import sys
import unicodedata

try:
    from PIL import Image
except ImportError:
    print("❌ Falta la librería Pillow. Instalala con:  pip install pillow")
    sys.exit(1)

# --- Configuración por carpeta: (ancho máximo en px, calidad JPG) ---
CONFIG = {
    "trabajos": (1600, 82),   # fotos grandes de proyectos
    "sectores": (1200, 82),
    "oficinas": (1600, 82),
    "clientes": (500, 90),    # logos, más chicos y con más calidad
    "otros":    (1600, 82),
}

CARPETA_ORIGEN = "originales"
CARPETA_DESTINO = "images"
EXTENSIONES = (".jpg", ".jpeg", ".png", ".webp", ".bmp", ".tiff")


def limpiar_nombre(nombre):
    """Convierte 'Parque Fotovoltáico.JPG' -> 'parque-fotovoltaico'."""
    base = os.path.splitext(nombre)[0]
    base = unicodedata.normalize("NFKD", base).encode("ascii", "ignore").decode("ascii")
    base = base.lower().strip()
    for ch in [" ", "_", ".", ",", "(", ")", "&", "'", "\"", "/"]:
        base = base.replace(ch, "-")
    while "--" in base:
        base = base.replace("--", "-")
    return base.strip("-")


def procesar(ruta_origen, carpeta_tipo, ancho_max, calidad):
    nombre_archivo = os.path.basename(ruta_origen)
    es_png = nombre_archivo.lower().endswith(".png")

    try:
        img = Image.open(ruta_origen)
    except Exception as e:
        print(f"   ⚠️  No pude abrir {nombre_archivo}: {e}")
        return

    # Redimensionar si es más ancha que el máximo
    if img.width > ancho_max:
        alto = int(img.height * ancho_max / img.width)
        img = img.resize((ancho_max, alto), Image.LANCZOS)

    nombre_limpio = limpiar_nombre(nombre_archivo)
    destino_dir = os.path.join(CARPETA_DESTINO, carpeta_tipo)
    os.makedirs(destino_dir, exist_ok=True)

    # PNG (logos con transparencia) se mantienen como PNG; el resto pasa a JPG
    if es_png and img.mode in ("RGBA", "LA", "P"):
        destino = os.path.join(destino_dir, nombre_limpio + ".png")
        img.save(destino, "PNG", optimize=True)
    else:
        if img.mode != "RGB":
            img = img.convert("RGB")
        destino = os.path.join(destino_dir, nombre_limpio + ".jpg")
        img.save(destino, "JPEG", quality=calidad, optimize=True, progressive=True)

    orig_kb = os.path.getsize(ruta_origen) / 1024
    nuevo_kb = os.path.getsize(destino) / 1024
    ahorro = 100 - (nuevo_kb / orig_kb * 100) if orig_kb else 0
    print(f"   ✅ {nombre_archivo}  →  {os.path.basename(destino)}"
          f"   ({orig_kb:.0f}KB → {nuevo_kb:.0f}KB, -{ahorro:.0f}%)")


def main():
    if not os.path.isdir(CARPETA_ORIGEN):
        os.makedirs(CARPETA_ORIGEN, exist_ok=True)
        for sub in ["trabajos", "clientes", "sectores", "oficinas"]:
            os.makedirs(os.path.join(CARPETA_ORIGEN, sub), exist_ok=True)
        print(f"📁 Creé la carpeta '{CARPETA_ORIGEN}' con subcarpetas.")
        print("   Poné tus fotos originales adentro y volvé a ejecutar el script.")
        return

    print("🔧 Optimizando fotos...\n")
    total = 0
    for carpeta_tipo in os.listdir(CARPETA_ORIGEN):
        ruta_tipo = os.path.join(CARPETA_ORIGEN, carpeta_tipo)
        if not os.path.isdir(ruta_tipo):
            continue
        ancho_max, calidad = CONFIG.get(carpeta_tipo, CONFIG["otros"])
        archivos = [f for f in os.listdir(ruta_tipo) if f.lower().endswith(EXTENSIONES)]
        if not archivos:
            continue
        print(f"📂 {carpeta_tipo}/  (ancho máx {ancho_max}px, calidad {calidad})")
        for f in sorted(archivos):
            procesar(os.path.join(ruta_tipo, f), carpeta_tipo, ancho_max, calidad)
            total += 1
        print()

    if total == 0:
        print("No encontré fotos en 'originales'. Poné imágenes en las subcarpetas y reintentá.")
    else:
        print(f"🎉 Listo. {total} foto(s) optimizada(s) en la carpeta '{CARPETA_DESTINO}'.")
        print("   Ahora copiá los nombres exactos a datos.js si hace falta.")


if __name__ == "__main__":
    main()
