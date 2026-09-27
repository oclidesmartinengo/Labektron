@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo   Actualizando fotos de la web...
echo.
python actualizar-fotos.py 2>nul || py actualizar-fotos.py 2>nul || (
  echo.
  echo   [ERROR] No encontre Python en esta PC.
  echo   Instalalo desde https://www.python.org/downloads/
  echo   ^(marca la opcion "Add Python to PATH"^) y despues corre:
  echo        pip install pillow
  echo.
  pause
)
