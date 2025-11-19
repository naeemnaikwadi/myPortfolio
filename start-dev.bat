@echo off
echo ========================================
echo Starting Portfolio Development Server
echo ========================================
echo.
echo Opening: http://localhost:5173
echo.
echo Press Ctrl+C in the new window to stop
echo ========================================
echo.

start "Portfolio Dev Server" cmd /k "cd client && npm run dev"

echo.
echo Development server started!
echo Close the new window to stop the server.
echo.
echo Note: Your portfolio uses EmailJS - No backend needed!
echo.
pause
