# Deploy no Render (GRATUITO)

## 1. Preparar Arquivos

### requirements.txt (já existe)
```
Flask==2.3.3
```

### Procfile
```
web: python app.py
```

## 2. Deploy no Render
1. Acesse: https://render.com
2. Faça login com GitHub
3. Clique em "New +" > "Web Service"
4. Conecte seu repositório GitHub
5. Configure:
   - **Name**: controle-financeiro
   - **Environment**: Python 3
   - **Build Command**: pip install -r requirements.txt
   - **Start Command**: python app.py
6. Clique em "Create Web Service"

## 3. Configurar Variáveis
- **PORT**: Render define automaticamente
- **FLASK_ENV**: production

## 4. Acessar App
- Render gera URL: https://controle-financeiro.onrender.com
- Deploy automático a cada push no GitHub

## Vantagens:
✅ Gratuito (750 horas/mês)
✅ Deploy automático
✅ HTTPS automático
✅ Fácil configuração
✅ Suporte ao Python
