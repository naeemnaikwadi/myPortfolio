@echo off
echo ========================================
echo Portfolio Installation Script
echo ========================================
echo.

echo [1/3] Installing client dependencies...
cd client
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Client installation failed!
    pause
    exit /b 1
)
cd ..

echo.
echo [2/3] Installing server dependencies...
cd server
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Server installation failed!
    pause
    exit /b 1
)

echo.
echo [3/3] Setting up environment file...
if not exist .env (
    copy .env.example .env
    echo Created .env file - Please edit with your credentials!
) else (
    echo .env file already exists
)
cd ..

echo.
echo ========================================
echo Installation Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Edit server/.env with your email credentials
echo 2. Add your images to client/public/
echo 3. Run start-dev.bat to start servers
echo.
pause
