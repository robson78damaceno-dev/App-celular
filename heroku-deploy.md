# Deploy no Heroku (GRATUITO)

## 1. Preparar Arquivos

### Procfile
```
web: python app.py
```

### runtime.txt
```
python-3.11.0
```

## 2. Instalar Heroku CLI
- Windows: https://devcenter.heroku.com/articles/heroku-cli
- Ou usar Git Bash

## 3. Deploy
```bash
# Login no Heroku
heroku login

# Criar app
heroku create controle-financeiro-app

# Deploy
git add .
git commit -m "Deploy app"
git push heroku main
```

## 4. Acessar
- URL: https://controle-financeiro-app.herokuapp.com
- Deploy automático a cada push

## Vantagens:
✅ Gratuito (550 horas/mês)
✅ Muito popular
✅ Deploy via Git
✅ Add-ons disponíveis
