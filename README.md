# Controle Financeiro

Um aplicativo moderno e elegante para controle financeiro pessoal, desenvolvido em Python com Flask, seguindo design profissional.

## Funcionalidades

- ✅ **Cards de Resumo** - Receitas, Gastos e Saldo em destaque
- ✅ **Tailwind CSS** - Framework CSS moderno e utilitário
- ✅ **Formatação de Moeda** - Digite naturalmente como em um banco
- ✅ **Toggle Inteligente** - Alterne facilmente entre receitas e gastos
- ✅ **Transações Recentes** - Histórico completo com exclusão individual
- ✅ **Limpeza Seletiva** - Excluir apenas receitas ou gastos
- ✅ **Design Premium** - Interface limpa e profissional
- ✅ **Full Responsive** - Perfeito em qualquer dispositivo
- ✅ **PWA Ready** - Instale como app nativo
- ✅ **Gestão Completa** - Adicione, visualize e exclua transações

## Como usar

### 1. Instalação

```bash
# Criar e ativar ambiente virtual
python -m venv venv
venv\Scripts\activate

# Instalar dependências
pip install -r requirements.txt

# Executar o aplicativo
python app.py
```

**Ou simplesmente execute o arquivo `start.bat` (Windows)**

### 2. Acesso

Abra seu navegador e acesse: `http://localhost:5000`

### 3. Arquivos Incluídos

- `start.bat` - Script para Windows que ativa o ambiente e inicia o app
- `.gitignore` - Arquivo para ignorar arquivos desnecessários no Git
- `venv/` - Ambiente virtual Python (criado automaticamente)

### 4. Como usar o app

1. **Visualizar Cards**: Receitas, gastos e saldo em destaque no topo
2. **Alternar Tipo**: Use os botões "Receita" e "Gasto" para alternar
3. **Adicionar Transação**:
   - Digite o valor como em apps de banco (apenas números)
   - Exemplo: 1000 → R$ 10,00 | 1234 → R$ 12,34
   - Preencha a descrição e clique em "Adicionar"
4. **Ver Histórico**: Todas as transações aparecem em "Transações Recentes"
5. **Excluir Transação**: Clique no ícone de lixeira para remover
6. **Limpar Receitas**: Botão laranja para excluir todas as receitas
7. **Reset Total**: Use o endpoint /resetar_saldo para limpar tudo

## Design Premium

### 🎨 **Interface Moderna**
- Header verde elegante com ícone profissional
- Cards de resumo com cores distintas e ícones
- Layout limpo e espaçado seguindo boas práticas de UX
- **Tailwind CSS** com cores customizadas: Verde (#16a34a), Vermelho (#dc2626), Azul (#2563eb)
- Classes utilitárias para responsividade e interatividade

### 📱 **Experiência Mobile-First**
- Design otimizado para toque
- Cards responsivos que se adaptam ao tamanho da tela
- Toggle buttons intuitivos para alternar entre receitas/gastos
- Lista de transações com scroll suave

## Características Técnicas

- **Framework**: Flask (Python)
- **Interface**: HTML5 + Tailwind CSS + JavaScript
- **Armazenamento**: Arquivo JSON local
- **Design System**: Tailwind CSS com cores customizadas
- **Responsividade**: Mobile-first com classes utilitárias
- **Interatividade**: JavaScript vanilla para melhor performance
- **PWA**: Meta tags completas para instalação como app nativo

## Responsividade Completa

O app se adapta perfeitamente a qualquer dispositivo:

### 📱 **Mobile (Full-Screen)**
- **100% da tela** sem margens desnecessárias
- Cards responsivos em grid de 3 colunas (Tailwind Grid)
- Formulários touch-friendly com classes utilitárias
- **Scrollbar customizada** para navegação suave
- Scroll otimizado para toque
- Status bar integrada

### 📟 **Tablet (Centrado)**
- Container centralizado com classes Tailwind
- Cards expandidos com mais espaçamento
- Layout otimizado para tela maior
- Elementos proporcionais ao tamanho

### 💻 **Desktop (Elegante)**
- Design centrado com largura máxima
- Cards com hover effects (Tailwind hover:)
- Espaçamento profissional
- Tipografia otimizada para leitura

### ✨ **Recursos Avançados**
- **Tailwind CSS** - Framework CSS moderno e utilitário
- **Formatação de Moeda** - Digite naturalmente como em um banco
- **Scrollbar Customizada** - Barra de rolagem elegante e responsiva
- **Safe Area** para iPhone X+ e dispositivos modernos
- **PWA** completo para instalação nativa
- **Touch-optimized** com feedback visual
- **Performance** otimizada para dispositivos móveis

### 💰 **Máscara de Moeda Bancária**
- **Entrada Natural**: Digite 1000 e veja R$ 10,00 (igual apps de banco)
- **Apenas Números**: Bloqueia letras e caracteres especiais
- **Formatação Automática**: R$ 0,00 conforme digita
- **Suporte a Centavos**: 1234 → R$ 12,34
- **Validação Robusta**: Previne entrada inválida
- **Mobile Otimizado**: Teclado numérico em dispositivos móveis

## Estrutura do Projeto

```
App-contas/
├── app.py              # Aplicação Flask principal
├── templates/
│   └── index.html      # Interface do usuário
├── requirements.txt    # Dependências Python
├── data.json          # Dados (criado automaticamente)
└── README.md          # Este arquivo
```

## Recursos Visuais

- Design moderno com gradientes e sombras
- Animações suaves para melhor UX
- Cores intuitivas (verde para receitas, vermelho para gastos)
- Interface otimizada para toque em dispositivos móveis
- Modals elegantes para entrada de dados

## Tecnologias Utilizadas

- Python 3.x
- Flask Web Framework
- HTML5/CSS3
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Inter)

---

Desenvolvido com ❤️ para controle financeiro pessoal
