# 💰 App de Contas - JavaScript Puro

Um aplicativo de controle financeiro moderno e responsivo, desenvolvido em **JavaScript puro** (sem frameworks), com design mobile-first e funcionalidades completas de gestão de receitas, gastos e contas prioritárias.

## ✨ Funcionalidades

### 📊 **Controle Financeiro Completo**
- ✅ **Receitas e Gastos** - Adicione entradas e saídas de dinheiro
- ✅ **Saldo Automático** - Cálculo em tempo real do saldo disponível
- ✅ **Dízimo (10%)** - Cálculo automático do dízimo sobre todas as receitas
- ✅ **Máscara de Moeda** - Formatação brasileira (R$ 1.500,00) em tempo real

### 🏷️ **Categorização de Gastos**
- 🍽️ Alimentação
- 🚗 Transporte
- 🏥 Saúde
- 📚 Educação
- 🎮 Lazer
- 👕 Vestuário
- 🏠 Casa
- 🔧 Serviços
- 📦 Outros

### 📋 **Contas Prioritárias**
- ✅ **Adicionar Contas** - Nome, valor e data de vencimento
- ✅ **Marcar como Paga** - Controle de status das contas
- ✅ **Excluir Contas** - Remover contas desnecessárias
- ✅ **Formatação de Data** - Exibição em formato DD/MM/AAAA

### 📱 **Design Responsivo**
- ✅ **Mobile-First** - Otimizado para dispositivos móveis
- ✅ **PWA Ready** - Instalável como app nativo
- ✅ **Tema Moderno** - Interface limpa e intuitiva
- ✅ **Scrollbar Customizada** - Melhor experiência visual

## 🚀 Como Usar

### **1. Abrir o App**
- Abra o arquivo `index.html` em qualquer navegador
- **Chrome, Firefox, Safari, Edge** - Todos funcionam!

### **2. Adicionar Transações**
1. **Escolha o tipo**: Receita (+) ou Gasto (-)
2. **Digite o valor**: Use a máscara automática (R$ 0,00)
3. **Adicione descrição**: Ex: "Salário", "Almoço"
4. **Selecione categoria**: (apenas para gastos)
5. **Clique "Adicionar"**

### **3. Gerenciar Contas Prioritárias**
1. **Clique "+ Adicionar"**
2. **Preencha**: Nome, valor e data de vencimento
3. **Clique "Salvar"**
4. **Marque como paga** quando necessário

### **4. Instalar como PWA**
- **Desktop**: Clique no ícone de instalação no navegador
- **Mobile**: "Adicionar à tela inicial"

## 💾 Armazenamento de Dados

### **LocalStorage**
- ✅ **Dados Persistem** - Não perde informações ao fechar o navegador
- ✅ **Funciona Offline** - Não precisa de internet
- ✅ **Privacidade Total** - Dados ficam apenas no seu dispositivo

### **Estrutura dos Dados**
```javascript
// Transações
{
  id: timestamp,
  tipo: 'receita' | 'gasto',
  valor: number,
  descricao: string,
  categoria: string | null,
  data: ISO string
}

// Contas Prioritárias
{
  id: timestamp,
  nome: string,
  valor: number,
  data_vencimento: 'YYYY-MM-DD',
  paga: boolean
}
```

## 🎨 Características Técnicas

### **Frontend**
- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com Tailwind CSS
- **JavaScript ES6+** - Lógica pura, sem dependências
- **Responsive Design** - Adaptável a qualquer tela

### **Funcionalidades JavaScript**
- **Máscara de Moeda** - Formatação em tempo real
- **LocalStorage API** - Persistência de dados
- **DOM Manipulation** - Interface dinâmica
- **Event Handling** - Interações do usuário

### **Design System**
- **Cores**: Verde (receitas), Vermelho (gastos), Azul (saldo), Amarelo (dízimo)
- **Tipografia**: Fontes do sistema para melhor performance
- **Ícones**: Emojis para máxima compatibilidade
- **Animações**: Transições suaves e hover effects

## 📱 Compatibilidade

### **Navegadores Suportados**
- ✅ **Chrome** 60+
- ✅ **Firefox** 55+
- ✅ **Safari** 12+
- ✅ **Edge** 79+
- ✅ **Opera** 47+

### **Dispositivos**
- ✅ **Desktop** - Windows, macOS, Linux
- ✅ **Mobile** - iOS, Android
- ✅ **Tablet** - iPad, Android tablets

## 🔧 Estrutura do Projeto

```
App-contas/
├── index.html          # Arquivo principal (HTML + CSS + JS)
├── manifest.json       # Configuração PWA
├── sw.js              # Service Worker para cache
└── README.md          # Documentação
```

## 🎯 Vantagens do JavaScript Puro

### **✅ Simplicidade**
- **Sem instalação** - Funciona imediatamente
- **Sem dependências** - Apenas um arquivo HTML
- **Sem servidor** - Abre direto no navegador

### **✅ Performance**
- **Carregamento rápido** - Sem frameworks pesados
- **Funciona offline** - Dados no LocalStorage
- **Baixo consumo** - Código otimizado

### **✅ Compatibilidade**
- **Qualquer navegador** - Funciona em todos
- **Qualquer dispositivo** - Desktop, mobile, tablet
- **Qualquer sistema** - Windows, macOS, Linux, iOS, Android

## 🚀 Deploy e Compartilhamento

### **Opção 1: Arquivo Local**
- **Compartilhe** o arquivo `index.html`
- **Funciona** em qualquer computador
- **Sem instalação** necessária

### **Opção 2: Hospedagem Gratuita**
- **GitHub Pages** - Upload do arquivo
- **Netlify** - Drag & drop
- **Vercel** - Deploy automático
- **Firebase Hosting** - Google

### **Opção 3: Servidor Local**
- **Python**: `python -m http.server 8000`
- **Node.js**: `npx serve .`
- **PHP**: `php -S localhost:8000`

## 🎉 Funcionalidades Especiais

### **💰 Cálculo de Dízimo**
- **Automático** - 10% de todas as receitas
- **Deduzido do saldo** - Saldo real disponível
- **Card dedicado** - Visualização clara

### **🎨 Interface Intuitiva**
- **Cores semânticas** - Verde/vermelho para receitas/gastos
- **Hover effects** - Feedback visual
- **Ícones expressivos** - Emojis para melhor UX

### **📊 Resumo Financeiro**
- **Cards visuais** - Receitas, gastos, saldo, dízimo
- **Atualização em tempo real** - Sempre atualizado
- **Formatação brasileira** - R$ 1.500,00

## 🔒 Privacidade e Segurança

- ✅ **Dados locais** - Nada é enviado para servidores
- ✅ **Sem cookies** - Não rastreia o usuário
- ✅ **Código aberto** - Transparente e auditável
- ✅ **Sem analytics** - Privacidade total

---

## 🎯 **Resumo**

Este é um **app de contas completo** em JavaScript puro que:

- ✅ **Funciona imediatamente** - Sem instalação
- ✅ **Controla receitas e gastos** - Com categorias
- ✅ **Gerencia contas prioritárias** - Com datas de vencimento
- ✅ **Calcula dízimo automaticamente** - 10% das receitas
- ✅ **É responsivo e moderno** - Mobile-first
- ✅ **Pode ser instalado como PWA** - App nativo
- ✅ **Mantém dados privados** - LocalStorage

**Perfeito para controle financeiro pessoal!** 💰✨