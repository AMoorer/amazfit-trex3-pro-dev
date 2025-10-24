@echo off
echo ========================================
echo Photo Gallery - ADB Installation
echo ========================================
echo.
echo Make sure:
echo 1. Watch is connected to Zepp app
echo 2. Developer Mode is enabled in Zepp app
echo 3. Watch and computer are on same WiFi
echo.
pause

cd photo-gallery\dist

echo.
echo Looking for .zab file...
for %%f in (*.zab) do (
    echo Found: %%f
    echo.
    echo Attempting to install via ADB...
    adb install %%f
)

echo.
echo If you see "error: no devices/emulators found":
echo - The watch is not connected via ADB
echo - Try the watchface conversion method instead
echo.
pause
