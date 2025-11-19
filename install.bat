@echo off
echo ========================================
echo Portfolio Installation Script
echo ========================================
echo.

echo Installing dependencies...
cd client
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Installation failed!
    pause
    exit /b 1
)
cd ..

echo.
echo ========================================
echo Installation Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Add your images to client/public/
echo 2. Update your EmailJS credentials in Contact.jsx
echo 3. Run start-dev.bat to start development server
echo.
echo Your portfolio uses EmailJS - No backend server needed!
echo.
pause
