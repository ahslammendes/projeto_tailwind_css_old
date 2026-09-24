# 🍕 PizzaArte – Landing Page & Catálogo

> Landing page e catálogo digital de uma pizzaria artesanal, desenvolvida como projeto prático de front-end com foco em **HTML semântico**, **CSS externo** e boas práticas de layout moderno.

---

## 📋 Sobre o Projeto

O **PizzaArte** é um projeto de landing page desenvolvido para simular o site institucional e de catálogo de uma pizzaria artesanal fictícia. O objetivo principal é aplicar na prática os conceitos fundamentais do desenvolvimento front-end, utilizando apenas **HTML5** e **CSS3 puro** — sem frameworks ou bibliotecas externas.

A página apresenta seções completas de um site real: apresentação da marca, história, catálogo de produtos, avaliações de clientes, formulário de contato e rodapé.

---

## 🎯 Objetivos de Aprendizado

Este projeto foi desenvolvido com base em três requisitos técnicos principais:

### 1. Estrutura com Arquivos Separados
- Utilização dos arquivos `index.html` e `style.css` separados
- CSS incluído de forma **externa** ao HTML, através da tag `<link>`:
  ```html
  <link rel="stylesheet" href="style.css" />
  ```

### 2. Box Model Completo
Foram adicionados **20 elementos HTML** com valores atribuídos explicitamente para todas as quatro propriedades do Box Model:

| Propriedade | Descrição |
|---|---|
| **Content** | Conteúdo textual, imagens e elementos internos |
| **Padding** | Espaçamento interno entre o conteúdo e a borda |
| **Border** | Borda visual aplicada ao redor do elemento |
| **Margin** | Espaçamento externo entre os elementos |

Exemplos aplicados: `header`, `nav`, `logo`, `ul`, `button`, `section hero`, `hero-content`, `hero-badge`, `h1`, `hero-subtitle`, `hero-btns`, `hero-stats`, `section sobre`, `ul features`, `section cardápio`, `section-header`, `cards-grid`, `article card`, `section depoimentos` e `section contato`.

### 3. Flexbox para Layout Responsivo
Foram implementadas **20 propriedades de Flexbox** para organizar e distribuir os elementos de forma responsiva:

| # | Propriedade | Onde é usada |
|---|---|---|
| 1 | `display: flex` | Navbar |
| 2 | `align-items: center` | Navbar |
| 3 | `justify-content: space-between` | Navbar |
| 4 | `gap` | Navbar |
| 5 | `display: flex` | Logo |
| 6 | `align-items: center` | Logo |
| 7 | `display: flex` | Nav Links |
| 8 | `display: flex` | Seção Hero |
| 9 | `align-items: center` | Seção Hero |
| 10 | `justify-content: center` | Seção Hero |
| 11 | `display: flex` | Botões Hero |
| 12 | `flex-wrap: wrap` | Botões Hero |
| 13 | `display: flex` | Stats Hero |
| 14 | `display: flex` | Grade de Cards |
| 15 | `flex: 1 1 300px` | Cards individuais |
| 16 | `display: flex` | Corpo do Card |
| 17 | `flex-direction: column` | Corpo do Card |
| 18 | `display: flex` | Grade de Reviews |
| 19 | `display: flex` | Footer |
| 20 | `flex-direction: column` | Layout responsivo (mobile) |

---

## 🗂️ Estrutura de Arquivos

```
A07_Projeto_front_end/
│
├── index.html          # Estrutura principal da página
├── style.css           # Estilização externa completa
├── README.md           # Documentação do projeto
│
└── img/
    ├── pizza_hero.jpg          # Imagem de fundo do Hero e seção Sobre
    ├── pizza_frango.jpg        # Card: Pizza Frango & Catupiry
    ├── pizza_pepperoni.jpg     # Card: Pizza Pepperoni Clássico
    └── pizza_quatro_queijos.jpg # Card: Pizza Quatro Queijos
```

---

## 🧩 Seções da Página

| Seção | Descrição |
|---|---|
| **Header / Navbar** | Barra de navegação fixa com logo, links e botão de ação. Ganha fundo escuro ao rolar a página |
| **Hero** | Seção principal com imagem de fundo, título, subtítulo, botões de CTA e painel de estatísticas |
| **Sobre** | Apresentação da marca com foto lateral, texto descritivo e lista de diferenciais |
| **Cardápio** | Grade de 3 cards com foto, nome, preço, descrição, tags e botão de pedido |
| **Depoimentos** | Avaliações de clientes em fundo escuro com cards de citações |
| **Contato** | Informações de localização e horário, além de formulário de mensagem |
| **Footer** | Rodapé com logo, links de navegação e links para redes sociais |

---

## 🎨 Design e Tecnologias

| Recurso | Detalhe |
|---|---|
| **Linguagem de marcação** | HTML5 semântico |
| **Estilização** | CSS3 puro (sem frameworks) |
| **Fontes** | Google Fonts — `Playfair Display` (títulos) e `Poppins` (corpo) |
| **Paleta de cores** | Laranja-vermelho `#E8400A`, laranja `#FF6B35`, escuro `#1A0A00` |
| **Imagens** | Fotos reais dos produtos da pasta `img/` |
| **Responsividade** | Breakpoints em `900px`, `768px` e `480px` via `@media` queries |
| **Animações** | Transições CSS e animações de entrada com `IntersectionObserver` |

---

## 📐 Técnicas de CSS Aplicadas

- **CSS Custom Properties (variáveis)** para cores, fontes, sombras e raios de borda
- **Flexbox** em todos os layouts (horizontal, vertical, responsivo)
- **Box Model** com `box-sizing: border-box` aplicado globalmente
- **Gradientes lineares** em botões e badges
- **Pseudo-elementos e pseudo-classes** (`:hover`, `::before`, `::after`)
- **Responsive Design** com `@media queries` e unidades relativas (`clamp`, `%`, `vw`)
- **Backdrop filter** para efeito de vidro (`glassmorphism`) no header e stats
- **Object-fit: cover** para imagens uniformes nos cards

---

## 📚 Conceitos Praticados

- Separação de responsabilidades HTML / CSS
- Semântica HTML5 (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- Box Model: `content → padding → border → margin`
- Layout com Flexbox: eixo principal, eixo cruzado, alinhamento e distribuição
- Design responsivo com Flexbox e Media Queries
- Boas práticas de acessibilidade (`alt`, `aria-label`, `id` únicos)
- SEO básico (`<title>`, `<meta description>`, hierarquia de headings)

---

*Projeto desenvolvido para a disciplina de Front-End — A07.*
