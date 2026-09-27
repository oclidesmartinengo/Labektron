#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
====================================================================
  ACTUALIZAR FOTOS — GRUPO LABEKTRON
====================================================================
Hace TODO de una sola pasada:

  1. Ordena las fotos sueltas viejas en carpetas (solo la primera vez).
  2. Achica el peso de las fotos nuevas (las deja nítidas pero livianas).
  3. Arma solo el listado de fotos de cada trabajo -> fotos.js
     (nunca hay que contar ni anotar cuántas fotos hay).

CÓMO SE USA
-----------
  Doble clic en  ACTUALIZAR.bat
  (o, desde la terminal:  python actualizar-fotos.py)

DÓNDE SE PONEN LAS FOTOS
------------------------
  originales/trabajos/NOMBRE-DEL-TRABAJO/      -> sitio principal
  originales/labelec/trabajos/NOMBRE/          -> mini-sitio Labelec

  Adentro de esa carpeta van TODAS las fotos que quieras, con el nombre
  que tengan. Para elegir la portada, llamá a esa foto "portada.jpg".

  Después, en trabajos-datos.js (o labelec/trabajos-labelec.js) ponés:
      carpeta: "NOMBRE-DEL-TRABAJO",

IMPORTANTE: nunca toca ni borra tus originales. Solo crea copias livianas.
====================================================================
"""

import os
import re
import sys
import json
import shutil
import unicodedata

try:
    from PIL import Image, ImageOps
except ImportError:
    print("\n[ERROR] Falta la libreria Pillow.")
    print("   Instalala con este comando y volve a intentar:\n")
    print("       pip install pillow\n")
    input("   (Enter para cerrar) ")
    sys.exit(1)

# ---------------------------------------------------------------
# QUÉ SE OPTIMIZA Y DÓNDE VA
#   (origen, destino, ancho maximo, calidad, ¿usa subcarpetas?)
# ---------------------------------------------------------------
CARPETAS = [
    ("originales/trabajos",          "images/trabajos",         2000, 88, True),
    ("originales/clientes",          "images/clientes",          800, 92, False),
    ("originales/sectores",          "images/sectores",         1800, 86, False),
    ("originales/oficinas",          "images/oficinas",         2000, 88, False),
    ("originales/labelec/trabajos",  "labelec/images/trabajos", 1800, 86, True),
    ("originales/labelec/rubros",    "labelec/images/rubros",   1200, 88, False),
    ("originales/labelec/marcas",    "labelec/images/marcas",    700, 92, False),
]

# Galerías que se arman solas: (carpeta de fotos, archivo a generar, prefijo web)
MANIFIESTOS = [
    ("images/trabajos",         "fotos.js",         "images/trabajos"),
    ("labelec/images/trabajos", "labelec/fotos.js", "images/trabajos"),
]

EXTENSIONES = (".jpg", ".jpeg", ".png", ".webp", ".bmp", ".tiff", ".heic")


# =================================================================
#  Utilidades
# =================================================================
def limpiar_nombre(nombre):
    """'Parque Fotovoltáico (1).JPG' -> 'parque-fotovoltaico-1'"""
    base = os.path.splitext(nombre)[0]
    base = unicodedata.normalize("NFKD", base).encode("ascii", "ignore").decode("ascii")
    base = base.lower().strip()
    for ch in [" ", "_", ".", ",", "(", ")", "&", "'", '"', "/", "+", "#"]:
        base = base.replace(ch, "-")
    while "--" in base:
        base = base.replace("--", "-")
    return base.strip("-") or "foto"


def clave_orden(nombre):
    """Ordena natural (foto-2 antes que foto-10). La portada siempre primero."""
    base = os.path.splitext(nombre)[0].lower()
    primero = 0 if base.startswith("portada") else 1
    partes = [int(p) if p.isdigit() else p for p in re.split(r"(\d+)", base)]
    return (primero, [(1, p) if isinstance(p, int) else (0, p) for p in partes])


def grupo_de(nombre):
    """'chiller-10.jpg' -> 'chiller'   |   'awara.jpg' -> 'awara'"""
    base = limpiar_nombre(nombre)
    return re.sub(r"-\d+$", "", base) or base


def mover_sin_pisar(origen, destino_dir):
    os.makedirs(destino_dir, exist_ok=True)
    nombre = os.path.basename(origen)
    destino = os.path.join(destino_dir, nombre)
    i = 1
    raiz, ext = os.path.splitext(nombre)
    while os.path.exists(destino):
        destino = os.path.join(destino_dir, f"{raiz}-{i}{ext}")
        i += 1
    shutil.move(origen, destino)


# =================================================================
#  1) Ordenar fotos sueltas en carpetas (solo la primera vez)
# =================================================================
def ordenar_sueltas(carpeta):
    if not os.path.isdir(carpeta):
        return 0
    sueltas = [f for f in os.listdir(carpeta)
               if f.lower().endswith(EXTENSIONES)
               and os.path.isfile(os.path.join(carpeta, f))]
    if not sueltas:
        return 0
    print(f"[ORDEN] {carpeta}/  ->  acomodando {len(sueltas)} foto(s) suelta(s) en carpetas")
    for f in sorted(sueltas):
        mover_sin_pisar(os.path.join(carpeta, f), os.path.join(carpeta, grupo_de(f)))
    return len(sueltas)


# =================================================================
#  2) Optimizar
# =================================================================
def optimizar(ruta_origen, destino_dir, ancho_max, calidad):
    nombre_archivo = os.path.basename(ruta_origen)
    es_png = nombre_archivo.lower().endswith(".png")
    nombre_limpio = limpiar_nombre(nombre_archivo)
    os.makedirs(destino_dir, exist_ok=True)
    ext_destino = ".png" if es_png else ".jpg"
    destino = os.path.join(destino_dir, nombre_limpio + ext_destino)

    # Si ya está hecha y el original no cambió, no la volvemos a procesar
    if os.path.exists(destino) and os.path.getmtime(destino) >= os.path.getmtime(ruta_origen):
        return 0, 0, True

    try:
        img = Image.open(ruta_origen)
        img = ImageOps.exif_transpose(img)   # respeta la rotacion del celular
    except Exception as e:
        print(f"   [!] No pude abrir {nombre_archivo}: {e}")
        return 0, 0, False

    if img.width > ancho_max:
        alto = int(img.height * ancho_max / img.width)
        img = img.resize((ancho_max, alto), Image.LANCZOS)

    if es_png and img.mode in ("RGBA", "LA", "P"):
        img.save(destino, "PNG", optimize=True)
    else:
        if img.mode != "RGB":
            img = img.convert("RGB")
        img.save(destino, "JPEG", quality=calidad, optimize=True, progressive=False)

    orig = os.path.getsize(ruta_origen)
    nuevo = os.path.getsize(destino)
    ahorro = 100 - (nuevo / orig * 100) if orig else 0
    aviso = "   [!] sigue pesada" if nuevo > 700_000 else ""
    print(f"   OK {nombre_archivo[:34]:36} {orig/1024:>7.0f} KB -> {nuevo/1024:>6.0f} KB  (-{ahorro:.0f}%){aviso}")
    return orig, nuevo, False


def optimizar_carpeta(origen, destino, ancho, calidad, con_subcarpetas):
    total_o = total_n = hechas = saltadas = 0
    if not os.path.isdir(origen):
        return 0, 0, 0, 0

    tareas = []   # (ruta_archivo, carpeta_destino)
    if con_subcarpetas:
        ordenar_sueltas(origen)
        for sub in sorted(os.listdir(origen)):
            ruta_sub = os.path.join(origen, sub)
            if not os.path.isdir(ruta_sub):
                continue
            for f in sorted(os.listdir(ruta_sub)):
                if f.lower().endswith(EXTENSIONES):
                    tareas.append((os.path.join(ruta_sub, f),
                                   os.path.join(destino, limpiar_nombre(sub))))
    else:
        for f in sorted(os.listdir(origen)):
            if f.lower().endswith(EXTENSIONES):
                tareas.append((os.path.join(origen, f), destino))

    if not tareas:
        return 0, 0, 0, 0

    print(f"\n[FOTOS] {origen}/   (max {ancho}px, calidad {calidad})")
    for ruta, dest_dir in tareas:
        o, n, ya_estaba = optimizar(ruta, dest_dir, ancho, calidad)
        if ya_estaba:
            saltadas += 1
        elif o:
            total_o += o
            total_n += n
            hechas += 1
    if saltadas:
        print(f"   ({saltadas} ya estaban hechas, no se tocaron)")
    return total_o, total_n, hechas, saltadas


# =================================================================
#  3) Armar el listado de fotos (fotos.js)
# =================================================================
def generar_manifiesto(carpeta_fotos, archivo_salida, prefijo_web):
    ordenar_sueltas(carpeta_fotos)

    datos = {}
    if os.path.isdir(carpeta_fotos):
        for sub in sorted(os.listdir(carpeta_fotos)):
            ruta = os.path.join(carpeta_fotos, sub)
            if not os.path.isdir(ruta):
                continue
            fotos = [f for f in os.listdir(ruta) if f.lower().endswith((".jpg", ".jpeg", ".png", ".webp"))]
            if not fotos:
                continue
            fotos.sort(key=clave_orden)
            datos[sub] = [f"{prefijo_web}/{sub}/{f}" for f in fotos]

    cuerpo = json.dumps(datos, indent=2, ensure_ascii=False)
    texto = (
        "/* ============================================================\n"
        "   LISTADO DE FOTOS — ARCHIVO AUTOMATICO, NO EDITAR A MANO\n"
        "   Lo genera actualizar-fotos.py leyendo las carpetas de\n"
        f"   {carpeta_fotos}/\n"
        "   Si agregas o sacas fotos, volve a correr ACTUALIZAR.bat\n"
        "   ============================================================ */\n"
        "const FOTOS = " + cuerpo + ";\n"
    )
    os.makedirs(os.path.dirname(archivo_salida) or ".", exist_ok=True)
    with open(archivo_salida, "w", encoding="utf-8") as fh:
        fh.write(texto)

    total = sum(len(v) for v in datos.values())
    print(f"[LISTA] {archivo_salida:22} {len(datos)} carpeta(s), {total} foto(s)")
    return datos


def avisar_carpetas_sin_usar(datos, archivo_datos, campo="carpeta"):
    """Avisa si un trabajo apunta a una carpeta que no existe, o al reves."""
    if not os.path.exists(archivo_datos):
        return
    txt = open(archivo_datos, encoding="utf-8").read()
    txt_sin_comentarios = "\n".join(l for l in txt.split("\n") if not l.strip().startswith("//"))
    usadas = set(re.findall(campo + r':\s*"([^"]+)"', txt_sin_comentarios))
    faltan = sorted(usadas - set(datos))
    sobran = sorted(set(datos) - usadas)
    for c in faltan:
        print(f"   [!] '{c}' esta en {os.path.basename(archivo_datos)} pero no hay fotos en esa carpeta")
    for c in sobran:
        print(f"   [i] hay fotos en '{c}/' pero ningun trabajo la usa todavia")


# =================================================================
def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    print("\n" + "=" * 62)
    print("  ACTUALIZAR FOTOS — GRUPO LABEKTRON")
    print("=" * 62)

    # Crear la estructura de 'originales' si no existe
    if not os.path.isdir("originales"):
        for sub in ["trabajos", "clientes", "sectores", "oficinas",
                    "labelec/trabajos", "labelec/rubros", "labelec/marcas"]:
            os.makedirs(os.path.join("originales", sub), exist_ok=True)
        print("\n[i] Cree la carpeta 'originales' con sus subcarpetas.")
        print("    Poné las fotos de cada trabajo en su propia carpeta, por ejemplo:")
        print("        originales/trabajos/chiller-sopladora/\n")

    total_o = total_n = hechas = saltadas = 0
    for origen, destino, ancho, calidad, subs in CARPETAS:
        o, n, h, s = optimizar_carpeta(origen, destino, ancho, calidad, subs)
        total_o += o; total_n += n; hechas += h; saltadas += s

    print("\n" + "-" * 62)
    datos_princ = generar_manifiesto(*MANIFIESTOS[0])
    avisar_carpetas_sin_usar(datos_princ, "trabajos-datos.js")
    datos_lab = generar_manifiesto(*MANIFIESTOS[1])
    avisar_carpetas_sin_usar(datos_lab, os.path.join("labelec", "trabajos-labelec.js"))

    print("-" * 62)
    if hechas:
        ahorro = 100 - (total_n / total_o * 100) if total_o else 0
        print(f"LISTO — {hechas} foto(s) optimizada(s)   "
              f"{total_o/1024/1024:.1f} MB -> {total_n/1024/1024:.1f} MB  (-{ahorro:.0f}%)")
    else:
        print("LISTO — no habia fotos nuevas para optimizar.")
    print("\n   Ahora: abri GitHub Desktop, hace Commit y Push.")
    print("   Despues refresca la web con Ctrl+F5.\n")


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print(f"\n[ERROR] {e}\n")
    if os.name == "nt":
        input("(Enter para cerrar) ")
