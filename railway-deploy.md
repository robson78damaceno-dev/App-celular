# Deploy no Railway (GRATUITO)

## 1. Preparar Arquivos
Criar estes arquivos no seu projeto:

### Procfile
```
web: python app.py
```

### runtime.txt
```
python-3.11.0
```

## 2. Deploy no Railway
1. Acesse: https://railway.app
2. Faça login com GitHub
3. Clique em "New Project"
4. Selecione "Deploy from GitHub repo"
5. Escolha seu repositório
6. Railway detecta automaticamente que é Python
7. Deploy automático!

## 3. Configurar Variáveis (se necessário)
- PORT: Railway define automaticamente
- FLASK_ENV: production

## 4. Acessar App
- Railway gera uma URL automática
- Exemplo: https://seu-app.railway.app
- Compartilhe essa URL

## Vantagens:
✅ Gratuito (500 horas/mês)
✅ Deploy automático
✅ Suporte nativo ao Python
✅ HTTPS automático
✅ Fácil de usar
