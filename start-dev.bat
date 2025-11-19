@echo off
echo ========================================
echo Starting Portfolio Development Servers
echo ========================================
echo.
echo Frontend: http://localhost:5173
echo Backend:  http://localhost:5000
echo.
echo Press Ctrl+C to stop servers
echo ========================================
echo.

start "Portfolio Frontend" cmd /k "cd client && npm run dev"
start "Portfolio Backend" cmd /k "cd server && npm run dev"

echo.
echo Servers started in separate windows!
echo Close those windows to stop the servers.
echo.
pause
