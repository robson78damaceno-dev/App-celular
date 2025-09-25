@echo off
echo 🚀 Iniciando servidor local para testar no celular...
echo.
echo 📱 Para acessar no celular:
echo 1. Conecte o celular na mesma rede WiFi do computador
echo 2. Descubra o IP do computador (será mostrado abaixo)
echo 3. Acesse no celular: http://SEU-IP:8000
echo.
echo ⚠️  Pressione Ctrl+C para parar o servidor
echo.

REM Descobrir IP local
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
    for /f "tokens=1" %%b in ("%%a") do (
        echo 🌐 Seu IP local: %%b
        echo 📱 Acesse no celular: http://%%b:8000
        echo.
    )
)

echo 🔄 Iniciando servidor Python...
python -m http.server 8000
