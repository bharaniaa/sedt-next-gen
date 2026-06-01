@echo off
title Sri Eshwar Drone Tech - Startup
echo ===================================================
echo     Starting Sri Eshwar Drone Tech [SEDT] Portal
echo ===================================================
echo.

:: Check if running from root of workspace or inside sedt-next-gen
if exist "sedt-next-gen" cd sedt-next-gen

:: Free up ports 4000, 8080, 8081, and 8082 automatically to prevent EADDRINUSE errors
echo [INFO] Checking for active ports to prevent conflicts...
powershell -Command "Get-NetTCPConnection -LocalPort 4000,8080,8081,8082 -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue }"
echo [INFO] Ports check complete.
echo.

:: Check frontend dependencies
if exist "node_modules" goto check_backend
echo [INFO] Installing frontend dependencies - this may take a few minutes...
call npm install
if %errorlevel% neq 0 goto frontend_error

:check_backend
echo [INFO] Frontend dependencies are installed.
:: Check backend dependencies
if exist "server\node_modules" goto start_app
echo [INFO] Installing backend dependencies...
call npm install --prefix server
if %errorlevel% neq 0 goto backend_error

:start_app
echo [INFO] Backend dependencies are installed.
echo.
echo ===================================================
echo   Starting Frontend [Port 8080] and Backend [Port 4000]...
echo ===================================================
echo.
call npm run dev
goto end

:frontend_error
echo [ERROR] Frontend installation failed!
pause
exit /b 1

:backend_error
echo [ERROR] Backend installation failed!
pause
exit /b 1

:end
pause
