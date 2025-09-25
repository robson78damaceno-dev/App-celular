# 🚀 Como Instalar PHP no Windows

## 📥 **Passo 1: Baixar PHP**

### **Opção 1: Download Direto (Recomendado)**
1. **Acesse**: https://windows.php.net/download/
2. **Clique** em "VS16 x64 Non Thread Safe" (versão mais recente)
3. **Baixe** o arquivo ZIP (ex: php-8.2.12-Win32-vs16-x64.zip)

### **Opção 2: Via Chocolatey (Mais Fácil)**
```powershell
# Instalar Chocolatey primeiro (se não tiver)
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Instalar PHP
choco install php
```

## 📁 **Passo 2: Extrair e Configurar**

### **1. Extrair PHP:**
1. **Extraia** o arquivo ZIP para `C:\php`
2. **Renomeie** `php.ini-development` para `php.ini`

### **2. Adicionar ao PATH:**
1. **Pressione** `Win + R`
2. **Digite**: `sysdm.cpl`
3. **Clique** em "Variáveis de Ambiente"
4. **Selecione** "Path" e clique "Editar"
5. **Clique** "Novo" e adicione: `C:\php`
6. **Clique** "OK" em todas as janelas

## ✅ **Passo 3: Testar Instalação**

### **1. Abrir novo PowerShell:**
```powershell
# Fechar e abrir novo PowerShell
php --version
```

### **2. Se funcionou, você verá:**
```
PHP 8.2.12 (cli) (built: Oct 24 2023 16:29:00) ( NTS Visual C++ 2019 x64 )
Copyright (c) The PHP Group
Zend Engine v4.2.12, Copyright (c) Zend Technologies
```

## 🚀 **Passo 4: Rodar Seu Projeto**

### **1. Navegar para o projeto:**
```powershell
cd C:\Users\rdamaceno\Desktop\App-contas
```

### **2. Iniciar servidor:**
```powershell
php -S localhost:8000
```

### **3. Acessar no navegador:**
```
http://localhost:8000
```

## 🔧 **Solução de Problemas**

### **Se der erro "php não é reconhecido":**
1. **Reinicie** o PowerShell
2. **Verifique** se o PATH está correto
3. **Teste**: `echo $env:PATH`

### **Se der erro de permissão:**
```powershell
# Executar como administrador
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### **Se der erro de extensão:**
1. **Abra** `C:\php\php.ini`
2. **Descomente** (remova o ;):
   ```
   extension=json
   extension=mbstring
   ```

## 🎯 **Alternativa Mais Fácil: XAMPP**

### **Se preferir algo mais simples:**
1. **Baixe** XAMPP: https://www.apachefriends.org/
2. **Instale** normalmente
3. **Inicie** Apache no painel
4. **Copie** seus arquivos para `C:\xampp\htdocs\App-contas`
5. **Acesse**: `http://localhost/App-contas`

## 🎉 **Resultado Final**

Após a instalação, você poderá:
- ✅ Rodar `php -S localhost:8000`
- ✅ Testar seu app localmente
- ✅ Desenvolver sem problemas
- ✅ Fazer deploy quando quiser

## 📱 **Teste do App**

Quando estiver funcionando:
1. **Acesse**: http://localhost:8000
2. **Teste** todas as funcionalidades
3. **Adicione** receitas e gastos
4. **Verifique** se o PWA funciona

---

**💡 Dica**: Se tiver dificuldades, use o XAMPP que é mais fácil!

