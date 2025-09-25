# Como Criar APK com Capacitor

## 1. Instalar Capacitor
```bash
npm install -g @capacitor/cli
npm install @capacitor/core @capacitor/android
```

## 2. Inicializar Capacitor
```bash
npx cap init "Controle Financeiro" "com.controlefinanceiro.app"
```

## 3. Adicionar Plataforma Android
```bash
npx cap add android
```

## 4. Build do App
```bash
npx cap build android
```

## 5. Abrir no Android Studio
```bash
npx cap open android
```

## 6. Gerar APK
- No Android Studio: Build > Build Bundle(s) / APK(s) > Build APK(s)
- Ou usar: `./gradlew assembleDebug` no terminal

## Requisitos:
- Node.js instalado
- Android Studio instalado
- Java Development Kit (JDK)
- Android SDK

## Alternativa Simples:
Use o PWA - funciona como app nativo e é mais fácil!
