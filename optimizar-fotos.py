#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Este script quedo VIEJO. Lo reemplaza actualizar-fotos.py, que ademas de
optimizar las fotos arma solo el listado de cada galeria (fotos.js).

    Doble clic en  ACTUALIZAR.bat

Podes borrar este archivo.
"""
import os
import sys

print("\n  [!] optimizar-fotos.py ya no se usa.")
print("      Ahora corre:  ACTUALIZAR.bat   (o: python actualizar-fotos.py)\n")

if os.path.exists(os.path.join(os.path.dirname(os.path.abspath(__file__)), "actualizar-fotos.py")):
    r = input("  Lo abro ahora? (s/n): ").strip().lower()
    if r.startswith("s"):
        os.chdir(os.path.dirname(os.path.abspath(__file__)))
        os.execv(sys.executable, [sys.executable, "actualizar-fotos.py"])
