@echo off
echo ========================================
echo Photo Gallery - Image Preparation Tool
echo ========================================
echo.

if "%~1"=="" (
    echo Usage: prepare-images.bat "C:\path\to\your\photos"
    echo.
    echo Example: prepare-images.bat "C:\Users\YourName\Pictures\WatchPhotos"
    pause
    exit /b 1
)

echo Preparing images from: %~1
echo.

python prepare-images.py "%~1"

echo.
pause
