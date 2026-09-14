#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
====================================================================
  OPTIMIZADOR DE FOTOS — GRUPO LABEKTRON
====================================================================
Achica el PESO de las fotos para que la web cargue rápido y se vean
nítidas. Configurado en CALIDAD ALTA (2000px): las fotos quedan nítidas
incluso al hacer zoom, pero pesan bastante menos que ahora.
De ~1,5 MB pasan a ~350-500 KB (3 o 4 veces más livianas).

CÓMO USARLO
-----------
1) Una sola vez, instalá la herramienta. Abrí la terminal y escribí:
       pip install pillow

2) Poné este archivo dentro de la carpeta de tu web (donde está
   index.html) y ejecutalo:
       python optimizar-fotos.py

3) La primera vez te va a crear una carpeta llamada "originales".
   Copiá ahí adentro TUS FOTOS ACTUALES, respetando las subcarpetas:
       originales/trabajos/    <- fotos de proyectos
       originales/clientes/    <- logos de clientes
       originales/sectores/
       originales/oficinas/

4) Volvé a ejecutar:
       python optimizar-fotos.py

5) Listo: las versiones livianas quedan en /images con el mismo
   nombre. Subís todo a GitHub y la web va a volar.

IMPORTANTE: nunca toca tus originales. Solo crea copias livianas.
====================================================================
"""

import os
import sys
import unicodedata

try:
    from PIL import Image, ImageOps
except ImportError:
    print("\n❌ Falta la librería Pillow.")
    print("   Instalala con este comando y volvé a intentar:\n")
    print("       pip install pillow\n")
    sys.exit(1)

# ---------------------------------------------------------------
# CONFIGURACIÓN: (ancho máximo en píxeles, calidad 1-100)
# Estos valores dan fotos nítidas de ~150-250 KB.
# Si alguna se ve poco nítida, subí el ancho o la calidad.
# ---------------------------------------------------------------
CONFIG = {
    "trabajos": (2000, 88),   # calidad alta: nítidas incluso con zoom
    "sectores": (1800, 86),
    "oficinas": (2000, 88),
    "clientes": (800, 92),    # logos: chicos pero muy nítidos
    "otros":    (2000, 88),
}

CARPETA_ORIGEN = "originales"
CARPETA_DESTINO = "images"
EXTENSIONES = (".jpg", ".jpeg", ".png", ".webp", ".bmp", ".tiff", ".heic")


def limpiar_nombre(nombre):
    """'Parque Fotovoltáico.JPG' -> 'parque-fotovoltaico'"""
    base = os.path.splitext(nombre)[0]
    base = unicodedata.normalize("NFKD", base).encode("ascii", "ignore").decode("ascii")
    base = base.lower().strip()
    for ch in [" ", "_", ".", ",", "(", ")", "&", "'", '"', "/", "+"]:
        base = base.replace(ch, "-")
    while "--" in base:
        base = base.replace("--", "-")
    return base.strip("-")


def procesar(ruta_origen, carpeta_tipo, ancho_max, calidad):
    nombre_archivo = os.path.basename(ruta_origen)
    es_png = nombre_archivo.lower().endswith(".png")

    try:
        img = Image.open(ruta_origen)
        # Respeta la orientación de las fotos de celular
        img = ImageOps.exif_transpose(img)
    except Exception as e:
        print(f"   ⚠️  No pude abrir {nombre_archivo}: {e}")
        return 0, 0

    # Redimensionar si es más ancha que el máximo
    if img.width > ancho_max:
        alto = int(img.height * ancho_max / img.width)
        img = img.resize((ancho_max, alto), Image.LANCZOS)

    nombre_limpio = limpiar_nombre(nombre_archivo)
    destino_dir = os.path.join(CARPETA_DESTINO, carpeta_tipo)
    os.makedirs(destino_dir, exist_ok=True)

    # PNG con transparencia (logos) se mantiene PNG; el resto va a JPG
    if es_png and img.mode in ("RGBA", "LA", "P"):
        destino = os.path.join(destino_dir, nombre_limpio + ".png")
        img.save(destino, "PNG", optimize=True)
    else:
        if img.mode != "RGB":
            img = img.convert("RGB")
        destino = os.path.join(destino_dir, nombre_limpio + ".jpg")
        # progressive=False evita el efecto "se ve borroso mientras carga"
        img.save(destino, "JPEG", quality=calidad, optimize=True, progressive=False)

    orig = os.path.getsize(ruta_origen)
    nuevo = os.path.getsize(destino)
    ahorro = 100 - (nuevo / orig * 100) if orig else 0
    aviso = "  ⚠️ sigue pesada" if nuevo > 700_000 else ""
    print(f"   ✅ {nombre_archivo[:34]:36} {orig/1024:>7.0f} KB → {nuevo/1024:>6.0f} KB  (-{ahorro:.0f}%){aviso}")
    return orig, nuevo


def main():
    print("\n" + "=" * 62)
    print("  OPTIMIZADOR DE FOTOS — GRUPO LABEKTRON")
    print("=" * 62)

    if not os.path.isdir(CARPETA_ORIGEN):
        os.makedirs(CARPETA_ORIGEN, exist_ok=True)
        for sub in ["trabajos", "clientes", "sectores", "oficinas"]:
            os.makedirs(os.path.join(CARPETA_ORIGEN, sub), exist_ok=True)
        print(f"\n📁 Creé la carpeta '{CARPETA_ORIGEN}' con sus subcarpetas.\n")
        print("   AHORA HACÉ ESTO:")
        print("   1. Copiá tus fotos actuales de images/trabajos/  →  originales/trabajos/")
        print("      (y lo mismo con clientes, sectores y oficinas)")
        print("   2. Volvé a ejecutar:  python optimizar-fotos.py\n")
        return

    print()
    total_orig = total_nuevo = total_fotos = 0
    for carpeta_tipo in sorted(os.listdir(CARPETA_ORIGEN)):
        ruta_tipo = os.path.join(CARPETA_ORIGEN, carpeta_tipo)
        if not os.path.isdir(ruta_tipo):
            continue
        ancho_max, calidad = CONFIG.get(carpeta_tipo, CONFIG["otros"])
        archivos = [f for f in os.listdir(ruta_tipo) if f.lower().endswith(EXTENSIONES)]
        if not archivos:
            continue
        print(f"📂 {carpeta_tipo}/   (máx {ancho_max}px, calidad {calidad})")
        for f in sorted(archivos):
            o, n = procesar(os.path.join(ruta_tipo, f), carpeta_tipo, ancho_max, calidad)
            total_orig += o
            total_nuevo += n
            total_fotos += 1 if o else 0
        print()

    if total_fotos == 0:
        print("⚠️  No encontré fotos dentro de 'originales'.")
        print("   Copiá tus fotos en originales/trabajos/ (etc.) y reintentá.\n")
        return

    ahorro = 100 - (total_nuevo / total_orig * 100) if total_orig else 0
    print("=" * 62)
    print(f"🎉 LISTO — {total_fotos} foto(s) optimizada(s)")
    print(f"   Antes:  {total_orig/1024/1024:.1f} MB")
    print(f"   Ahora:  {total_nuevo/1024/1024:.1f} MB   (-{ahorro:.0f}% más liviano)")
    print("=" * 62)
    print("\n   Las fotos livianas están en la carpeta 'images'.")
    print("   Subilas a GitHub (commit + push) y refrescá con Ctrl+F5.\n")


if __name__ == "__main__":
    main()
