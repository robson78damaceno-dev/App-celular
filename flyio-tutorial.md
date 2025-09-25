# 🚀 Deploy no Fly.io (100% GRATUITO)

## ✅ Vantagens:
- **1600 horas/mês GRATUITAS**
- **Sem cartão de crédito**
- **Muito rápido**
- **Global CDN**

## 📋 Passo a Passo:

### 1. Instalar Fly CLI
```bash
# Windows (PowerShell)
iwr https://fly.io/install.ps1 -useb | iex

# Ou baixar: https://fly.io/docs/hands-on/install-flyctl/
```

### 2. Login
```bash
fly auth signup
```

### 3. Criar App
```bash
fly launch
# Escolha: Python
# Nome: controle-financeiro
# Região: São Paulo (gru)
```

### 4. Deploy
```bash
fly deploy
```

### 5. Acessar App
- URL: `https://controle-financeiro.fly.dev`
- **Deploy automático** a cada push

## 🎯 Resultado:
- ✅ App funcionando online
- ✅ PWA instalável
- ✅ HTTPS automático
- ✅ Muito rápido
