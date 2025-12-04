# Guia Visual de Design - Advocacia Figueiredo

## 📋 Resumo Executivo

Este documento especifica o sistema de design para o site da Advocacia Figueiredo, com foco em **consistência visual**, **hierarquia tipográfica** e **acessibilidade WCAG AA**.

---

## 🔷 Sistema de Ícones

### Especificações Padronizadas
| Propriedade | Valor | Observação |
|-------------|-------|------------|
| **Biblioteca** | Lucide React | Estilo linha (outline) |
| **Stroke Width** | `1.75` | Padrão em todo o site |
| **Cor Primária** | `text-accent` | Rose gold da marca |
| **Cor Secundária** | `text-white` | Para fundos escuros |

### Tamanhos por Contexto
| Contexto | Tamanho | Classe |
|----------|---------|--------|
| Ícones decorativos (seções) | 32-40px | `h-8 w-8` a `h-10 w-10` |
| Ícones de cards | 28px | `h-7 w-7` |
| Ícones inline (botões, textos) | 16-20px | `h-4 w-4` a `h-5 w-5` |
| Navegação mobile | 24px | `h-6 w-6` |

### Inventário de Ícones por Seção

| Seção | Ícones | Tamanho | strokeWidth |
|-------|--------|---------|-------------|
| **Navbar** | Menu, X | 24px | 1.75 |
| **Hero** | MapPin, Play | 16-20px | 1.75 |
| **Trust** | Shield, Users, Award, MapPin | 32px | 1.75 |
| **Services** | Scale, Briefcase, Home, Heart, ArrowRight | 28px, 16px | 1.75 |
| **Metrics** | Scale, FileText, Briefcase | 40px | 1.75 |
| **Testimonials** | Star, Quote, User, CheckCircle2, ChevronLeft/Right | 16-40px | 1.75 |
| **Blog** | Calendar, Clock, ArrowRight | 16px | 1.75 |
| **FAQ** | HelpCircle | 32px | 1.75 |
| **CTA/Contact** | Phone, Mail, MapPin, Clock | 24px | 1.75 |
| **FinalCTA** | Shield, ArrowRight | 40px, 20px | 1.75 |
| **WhatsApp Widget** | X | 16px | 1.75 |

### Exemplo de Uso Correto
```tsx
// ✅ Correto - Com strokeWidth padronizado
<Shield className="h-8 w-8 text-accent" strokeWidth={1.75} />

// ❌ Incorreto - Sem strokeWidth
<Shield className="h-8 w-8 text-accent" />
```

---

## 📝 Sistema Tipográfico

### Hierarquia de Fontes

| Elemento | Peso | Tamanho Desktop | Tamanho Mobile | Uso |
|----------|------|-----------------|----------------|-----|
| **H1 (Hero)** | `font-bold` | `text-5xl` (48px) | `text-3xl` (30px) | Título principal |
| **H2 (Seções)** | `font-bold` | `text-4xl-5xl` (36-48px) | `text-3xl` (30px) | Títulos de seção |
| **H3 (Cards)** | `font-semibold` | `text-xl-2xl` (20-24px) | `text-lg-xl` (18-20px) | Títulos de cards |
| **H4 (Subtítulos)** | `font-semibold` | `text-lg` (18px) | `text-base` (16px) | Subtítulos, labels |
| **Body** | `font-normal` | `text-lg` (18px) | `text-base` (16px) | Texto corrido |
| **Caption** | `font-normal` | `text-sm` (14px) | `text-sm` (14px) | Legendas, meta |

### Regras de Peso

| Peso | Quando Usar | Exemplo |
|------|-------------|---------|
| `font-bold` (700) | Apenas títulos H1 e H2 | Títulos de seção principais |
| `font-semibold` (600) | Títulos H3, H4, botões, destaques | Cards, perguntas FAQ, links |
| `font-medium` (500) | Navegação, badges | Links do menu, categorias |
| `font-normal` (400) | Corpo de texto, descrições | Parágrafos, respostas |

### Cores de Texto

| Tipo | Variável | Uso |
|------|----------|-----|
| **Primário** | `text-foreground` | Títulos, texto importante |
| **Secundário** | `text-muted-foreground` | Descrições, corpo de texto |
| **Destaque** | `text-accent` | Keywords, links, hover |
| **Sutil** | `text-muted-foreground/70` | Legendas, timestamps |

### Exemplo de Hierarquia

```tsx
// Seção típica
<section>
  <h2 className="text-3xl md:text-5xl font-bold text-foreground">
    Título da Seção
  </h2>
  <p className="text-lg md:text-xl text-muted-foreground">
    Descrição da seção em texto normal.
  </p>
  
  <div className="card">
    <h3 className="text-xl font-semibold text-foreground">
      Título do Card
    </h3>
    <p className="text-muted-foreground">
      Descrição do card em peso normal.
    </p>
  </div>
</section>
```

---

## 🎨 Paleta de Cores

### Cores da Marca (Preservadas)
| Nome | HSL | Hex | Uso |
|------|-----|-----|-----|
| Rose Gold Primary | `hsl(15, 45%, 58%)` | `#C4836E` | Accent principal |
| Rose Gold Light | `hsl(15, 50%, 68%)` | `#D9A593` | Hover states |
| Rose Gold Dark | `hsl(15, 40%, 48%)` | `#AD6B56` | Active states |

### Cores de CTA
| Nome | HSL | Hex | Contraste | Uso |
|------|-----|-----|-----------|-----|
| WhatsApp CTA | `hsl(142, 70%, 45%)` | `#1F9D55` | 4.58:1 | Hero CTA |
| Final CTA | `hsl(142, 76%, 38%)` | `#1A8549` | 5.20:1 | Pré-rodapé |

### Hierarquia de Texto (Dark Mode)
| Nome | HSL | Uso |
|------|-----|-----|
| Text Primary | `hsl(0, 0%, 98%)` | Títulos |
| Text Secondary | `hsl(0, 0%, 70%)` | Subtítulos, muted |
| Text Muted | `hsl(0, 0%, 60%)` | Legendas |

---

## 📐 Espaçamentos

### Padding de Seções
| Tipo | Desktop | Mobile |
|------|---------|--------|
| Principal | `py-20` (80px) / `py-28` (112px) | `py-16` (64px) / `py-20` (80px) |
| Secundário | `py-16` (64px) / `py-24` (96px) | `py-12` (48px) / `py-16` (64px) |
| Compacto | `py-12` (48px) / `py-16` (64px) | `py-8` (32px) / `py-12` (48px) |

### Gap entre Elementos
| Contexto | Desktop | Mobile |
|----------|---------|--------|
| Grid de cards | `gap-6` (24px) / `gap-8` (32px) | `gap-4` (16px) / `gap-6` (24px) |
| Stack vertical | `space-y-6` (24px) | `space-y-4` (16px) |
| Inline items | `gap-2` (8px) / `gap-4` (16px) | `gap-2` (8px) |

---

## ✅ Checklist de Consistência

### Ícones ✅
- [x] Todos os ícones usam `strokeWidth={1.75}`
- [x] Lucide React (linha) em todo o site
- [x] Tamanhos consistentes por contexto
- [x] Cor accent padronizada

### Tipografia ✅
- [x] `font-bold` apenas em H1 e H2
- [x] `font-semibold` em H3, H4, botões
- [x] `font-normal` em corpo de texto
- [x] Sem excesso de negrito

### Cores ✅
- [x] Paleta da marca preservada
- [x] Hierarquia de texto definida
- [x] Contraste WCAG AA em CTAs

---

## 📊 Resumo de Aplicação

| Componente | Ícones | Títulos | Subtítulos | Corpo |
|------------|--------|---------|------------|-------|
| Hero | ✅ 1.75 | bold | semibold | normal |
| Trust | ✅ 1.75 | bold | semibold | normal |
| Services | ✅ 1.75 | bold | semibold | normal |
| Testimonials | ✅ 1.75 | bold | semibold | normal |
| Blog | ✅ 1.75 | bold | semibold | normal |
| FAQ | ✅ 1.75 | bold | semibold | normal |
| CTA | ✅ 1.75 | bold | semibold | normal |
| Footer | N/A | N/A | semibold | normal |

---

*Versão: 2.0 - Atualizado com sistema tipográfico completo*
*Data: Dezembro 2024*
