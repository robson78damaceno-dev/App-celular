# 🚀 Deploy no PythonAnywhere (100% GRATUITO)

## ✅ Vantagens:
- **Especializado em Python**
- **Sem cartão de crédito**
- **Interface web amigável**
- **Suporte nativo ao Flask**

## 📋 Passo a Passo:

### 1. Criar Conta
1. **Acesse**: https://www.pythonanywhere.com
2. **Clique**: "Create a Beginner account"
3. **Preencha**: Dados básicos
4. **Confirme**: Email

### 2. Upload dos Arquivos
1. **Acesse**: Dashboard
2. **Clique**: "Files" tab
3. **Crie pasta**: `controle-financeiro`
4. **Upload**: Todos os arquivos do projeto

### 3. Configurar Web App
1. **Clique**: "Web" tab
2. **Clique**: "Add a new web app"
3. **Escolha**: "Flask"
4. **Python version**: 3.10
5. **Path**: `/home/SEU_USUARIO/controle-financeiro/app.py`

### 4. Configurar WSGI
1. **Clique**: "WSGI configuration file"
2. **Substitua** o conteúdo por:
```python
import sys
path = '/home/SEU_USUARIO/controle-financeiro'
if path not in sys.path:
    sys.path.append(path)

from app import app as application
```

### 5. Acessar App
- URL: `https://SEU_USUARIO.pythonanywhere.com`
- **Reload** sempre que fizer mudanças

## 🎯 Resultado:
- ✅ App funcionando online
- ✅ PWA instalável
- ✅ HTTPS automático
- ✅ Especializado em Python
