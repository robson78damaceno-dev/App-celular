# 🚀 Deploy no Render (100% GRATUITO)

## ✅ Vantagens:
- **750 horas/mês GRATUITAS**
- **Sem cartão de crédito**
- **Muito confiável**
- **Deploy automático**
- **HTTPS automático**

## 📋 Passo a Passo:

### 1. Subir para GitHub
```bash
git init
git add .
git commit -m "App controle financeiro"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/controle-financeiro.git
git push -u origin main
```

### 2. Deploy no Render
1. **Acesse**: https://render.com
2. **Clique**: "Get Started for Free"
3. **Login**: Use GitHub
4. **Clique**: "New +" > "Web Service"
5. **Conecte**: Seu repositório GitHub
6. **Configure**:
   - **Name**: `controle-financeiro`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `python app.py`
7. **Clique**: "Create Web Service"

### 3. Acessar App
- URL: `https://controle-financeiro.onrender.com`
- **Deploy automático** a cada push no GitHub

## 🎯 Resultado:
- ✅ App funcionando online
- ✅ PWA instalável
- ✅ HTTPS automático
- ✅ Muito estável
