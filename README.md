# 🍕 PizzaArte – Landing Page & Catálogo (Versão Tailwind CSS)

> Landing page e catálogo digital de uma pizzaria artesanal, refatorada para utilizar **Tailwind CSS v3 via CDN**, focando em produtividade, utilitários e design responsivo moderno.

---

## 📋 Sobre o Projeto

O **PizzaArte** é um projeto de landing page simulando o site de uma pizzaria artesanal fictícia. Nesta versão, todo o CSS externo customizado foi removido e substituído por **classes utilitárias do Tailwind CSS**. O objetivo principal é demonstrar o domínio do Tailwind CSS aplicando mais de **50 classes diferentes** para estilizar completamente a página de forma responsiva.

A página apresenta seções completas: apresentação da marca, história, catálogo de produtos (com Grid CSS), avaliações de clientes, formulário de contato e rodapé.

---

## 🎯 Objetivos de Aprendizado & Requisitos Cumpridos

Este projeto foi refatorado com base nos seguintes requisitos técnicos:

### 1. Utilização de Tailwind CSS (CDN)
- Removido o arquivo `style.css` original.
- Adicionado o script via CDN para compilação Just-in-Time (JIT) do Tailwind v3 diretamente no HTML.
- Configuração do tema customizado (`tailwind.config`) injetada no script da página para definir as cores e fontes da marca `PizzaArte`.

### 2. Uso de Mais de 30 Classes Diferentes
Foram utilizadas **mais de 50 classes utilitárias distintas** do Tailwind CSS, cobrindo as seguintes categorias:

#### 🎨 Cores
- `bg-white`, `bg-orange-50`, `bg-pizza-cream`, `bg-pizza-dark` (Fundo)
- `text-white`, `text-pizza-text`, `text-pizza-primary`, `text-pizza-secondary`, `text-pizza-gray`, `text-amber-950` (Texto)
- `border-white`, `border-pizza-border`, `border-pizza-primary`, `border-orange-200` (Bordas)

#### 🔤 Tipografia
- `font-titulo`, `font-corpo` (Fontes customizadas)
- `font-medium`, `font-semibold`, `font-bold`, `font-black` (Pesos)
- `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`, `text-6xl`, `text-7xl` (Tamanhos)
- `uppercase`, `italic`, `tracking-wider`, `tracking-widest`, `leading-none`, `leading-tight`, `leading-relaxed` (Estilo e Espaçamento)

#### 📏 Espaçamentos & Dimensões
- `p-0`, `p-6`, `p-8`, `p-10`, `px-3`, `px-4`, `px-5`, `px-6`, `px-7`, `px-9`, `py-1.5`, `py-2`, `py-3`, `py-3.5`, `py-4`, `py-5`, `py-6`, `py-24` (Padding)
- `m-0`, `mb-2`, `mb-4`, `mb-5`, `mb-6`, `mb-8`, `mb-10`, `mb-14`, `mb-16`, `mt-1`, `mt-4`, `mt-7`, `mx-auto` (Margin)
- `w-full`, `max-w-xl`, `max-w-3xl`, `max-w-7xl` (Largura)
- `h-10`, `h-32`, `h-60`, `h-96`, `min-h-screen` (Altura)

#### 🔲 Bordas & Efeitos
- `border`, `border-2`, `border-4`, `border-b` (Espessura)
- `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-full` (Arredondamento)
- `shadow-lg`, `shadow-xl`, `shadow-2xl` (Sombras)
- `backdrop-blur-sm`, `backdrop-blur-md`, `backdrop-blur-lg` (Desfoque de Fundo / Glassmorphism)
- `opacity-50`, `opacity-70`, `opacity-80`, `opacity-90` (Opacidade)

#### 📍 Posicionamento
- `fixed`, `absolute`, `relative` (Tipo)
- `top-0`, `left-0`, `right-0`, `top-3.5`, `left-3.5`, `-bottom-5`, `-left-5`, `inset-0` (Coordenadas)
- `z-10`, `z-50` (Z-Index)

#### 📐 Flexbox & Grid
- `flex`, `inline-flex` (Display Flex)
- `flex-col`, `flex-row` (Direção Flex)
- `items-start`, `items-center` (Alinhamento Cross Axis)
- `justify-center`, `justify-between` (Alinhamento Main Axis)
- `flex-wrap`, `flex-1`, `flex-shrink-0` (Comportamento Flex)
- `gap-0.5`, `gap-1.5`, `gap-2`, `gap-2.5`, `gap-3`, `gap-3.5`, `gap-4`, `gap-5`, `gap-6`, `gap-7`, `gap-8`, `gap-16` (Espaçamento entre itens)
- `grid`, `grid-cols-1`, `grid-cols-2`, `grid-cols-3` (Grid CSS)

#### 📱 Responsividade (Mobile First)
- `sm:grid-cols-2` (Small Devices)
- `md:flex`, `md:text-4xl`, `md:text-6xl`, `md:grid-cols-3`, `md:flex-row` (Medium Devices)
- `lg:text-7xl`, `lg:flex-row`, `lg:h-[480px]`, `lg:grid-cols-3` (Large Devices)

#### ✨ Interatividade & Transições
- `hover:bg-white/10`, `hover:border-pizza-primary`, `hover:-translate-y-0.5`, `hover:-translate-y-1`, `hover:-translate-y-2`, `hover:scale-105`, `hover:shadow-xl`, `hover:shadow-2xl` (Pseudo-classe Hover)
- `focus:border-pizza-primary`, `focus:ring-2` (Pseudo-classe Focus)
- `transition-all`, `transition-transform`, `duration-300`, `duration-500` (Transições CSS)
- `cursor-pointer`, `cursor-default`, `outline-none`, `resize-y`, `object-cover`, `overflow-hidden`, `overflow-x-hidden` (Utilitários Variados)

---

## 🗂️ Estrutura de Arquivos

```
projeto_tailwind_CSS/
│
├── index.html          # Estrutura HTML principal com classes utilitárias Tailwind CSS
├── vercel.json         # Configuração de deploy estático e cache de assets na Vercel
├── .gitignore          # Ignora arquivos locais e a pasta de referência do design system
├── README.md           # Documentação do projeto
│
├── css/
│   └── main.css        # Tokens de superfície, estados de navegação e keyframes de motion
│
├── js/
│   └── main.js         # Motor de motion (GSAP, ScrollTrigger, Lenis) e interações de UI
│
└── img/
    ├── pizza_hero.jpg           # Imagem de fundo do Hero e seção Manifesto
    ├── pizza_frango.jpg         # Card: Estação 01 - Frango & Catupiry
    ├── pizza_pepperoni.jpg      # Card: Estação 02 - Pepperoni Clássico
    └── pizza_quatro_queijos.jpg # Card: Estação 03 - Quatro Queijos
```

---

## 🚀 Como Executar

Por utilizar a versão CDN do Tailwind, o projeto não requer processo de build.
Para visualizar:
1. Navegue até a pasta do projeto.
2. Abra o arquivo `index.html` diretamente em qualquer navegador moderno (Chrome, Firefox, Edge, Safari).
3. Conectividade com a internet é necessária para carregar as fontes do Google e o script do Tailwind CDN.

---

*Projeto refatorado para a disciplina de Front-End — A07 com Tailwind CSS.*
