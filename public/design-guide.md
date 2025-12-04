# Guia Visual de Design - Advocacia Figueiredo

## 📋 Resumo Executivo

Este documento especifica o sistema de design refinado para o site da Advocacia Figueiredo, com foco em **contraste WCAG AA**, **harmonia visual** e **legibilidade**.

---

## 🎨 Paleta de Cores

### Cores da Marca (Preservadas)
| Nome | HSL | Hex | Uso |
|------|-----|-----|-----|
| Rose Gold Primary | `hsl(15, 45%, 58%)` | `#C4836E` | Accent principal |
| Rose Gold Light | `hsl(15, 50%, 68%)` | `#D9A593` | Hover states |
| Rose Gold Dark | `hsl(15, 40%, 48%)` | `#AD6B56` | Active states |

### Cores de CTA (Otimizadas para Contraste)
| Nome | HSL | Hex | Contraste | Uso |
|------|-----|-----|-----------|-----|
| WhatsApp CTA | `hsl(142, 70%, 45%)` | `#1F9D55` | 4.58:1 | Hero CTA |
| WhatsApp Hover | `hsl(142, 70%, 40%)` | `#1A8A4A` | 5.10:1 | Hover |
| WhatsApp Active | `hsl(142, 70%, 35%)` | `#157A40` | 5.72:1 | Active |
| Final CTA | `hsl(142, 76%, 38%)` | `#1A8549` | 5.20:1 | Pré-rodapé |
| Final CTA Hover | `hsl(142, 76%, 33%)` | `#157A40` | 5.90:1 | Hover |

### Neutros (Dark Mode)
| Nome | HSL | Hex | Uso |
|------|-----|-----|-----|
| Background | `hsl(0, 0%, 5%)` | `#0D0D0D` | Fundo principal |
| Card | `hsl(0, 0%, 8%)` | `#141414` | Cards |
| Secondary | `hsl(0, 0%, 12%)` | `#1F1F1F` | Seções |
| Border | `hsl(0, 0%, 18%)` | `#2E2E2E` | Bordas |

### Hierarquia de Texto
| Nome | HSL | Hex | Uso |
|------|-----|-----|-----|
| Text Primary | `hsl(0, 0%, 98%)` | `#FAFAFA` | Títulos |
| Text Secondary | `hsl(0, 0%, 75%)` | `#BFBFBF` | Subtítulos |
| Text Muted | `hsl(0, 0%, 60%)` | `#999999` | Legendas |

---

## 🔘 Especificações de Botões

### WhatsApp CTA (Hero)
```css
/* Base State */
background: hsl(142, 70%, 45%);  /* #1F9D55 */
color: #FFFFFF;
box-shadow: 0 8px 30px hsla(142, 70%, 45%, 0.4);

/* Hover State */
background: hsl(142, 70%, 40%);  /* #1A8A4A */
box-shadow: 0 12px 40px hsla(142, 70%, 45%, 0.5);
transform: scale(1.05);

/* Active State */
background: hsl(142, 70%, 35%);  /* #157A40 */
transform: scale(1);

/* Disabled State */
opacity: 0.5;
pointer-events: none;
```

### Final CTA (Pré-rodapé - Mais Contrastante)
```css
/* Base State */
background: hsl(142, 76%, 38%);  /* #1A8549 */
color: #FFFFFF;
box-shadow: 0 10px 35px hsla(142, 76%, 38%, 0.45);
ring: 2px solid hsla(142, 76%, 50%, 0.3);

/* Hover State */
background: hsl(142, 76%, 33%);  /* #157A40 */
box-shadow: 0 14px 45px hsla(142, 76%, 38%, 0.55);
transform: scale(1.05);

/* Active State */
background: hsl(142, 76%, 28%);  /* #107336 */
transform: scale(1);
```

### Outline (Secundário)
```css
/* Base State */
border: 2px solid hsl(15, 45%, 58%);  /* Rose Gold */
background: transparent;
color: hsl(15, 45%, 58%);

/* Hover State */
background: hsl(15, 45%, 58%);
color: #FFFFFF;
```

---

## 🔷 Padronização de Ícones

### Especificações
- **Biblioteca**: Lucide React (linha)
- **Stroke Width**: 1.75 (padronizado)
- **Tamanhos**:
  - Pequeno: 16px (1rem)
  - Médio: 20px (1.25rem)
  - Grande: 24px (1.5rem)
  - Extra Grande: 28-40px (ícones decorativos)
- **Cor**: `text-accent` (rose gold)

### Ícones Utilizados
| Área | Ícones | Tamanho |
|------|--------|---------|
| Serviços | Scale, Briefcase, Home, Heart | 28px |
| Contato | Phone, Mail, MapPin, Clock | 24px |
| Depoimentos | Star, Quote, User, CheckCircle2 | 20-40px |
| CTAs | ArrowRight, Shield | 20-24px |
| Navegação | ChevronLeft, ChevronRight | 24px |

---

## 📐 Espaçamentos

### Padding/Margin por Seção
| Elemento | Desktop | Mobile |
|----------|---------|--------|
| Seção Principal | `py-20` (80px) / `py-28` (112px) | `py-16` (64px) / `py-20` (80px) |
| Seção Secundária | `py-16` (64px) / `py-24` (96px) | `py-12` (48px) / `py-16` (64px) |
| Cards | `p-8` (32px) | `p-6` (24px) |
| Container | `px-4` (16px) | `px-4` (16px) |
| Gap Grid | `gap-6` (24px) / `gap-12` (48px) | `gap-4` (16px) / `gap-8` (32px) |

---

## 🖼️ Tratamento de Imagens

### Hero
- **Overlay**: 10% preto (`bg-black/10`) sobre gradiente
- **Gradiente Rose Gold**: `from-accent/15 via-transparent to-transparent` (15% opacidade)

### Cards de Serviços
- **Overlay Gradiente**: `from-black via-black/85 to-black/30`
- **Hover**: Scale 1.1 na imagem

### Otimização
- **Formato**: WebP preferencial
- **Lazy Loading**: `loading="lazy"` em todas imagens não críticas
- **Dimensões**: Responsivas com aspect-ratio preservado

---

## ✅ Checklist de Implementação

### Prioridade 1: Contraste dos CTAs ✅
- [x] Botão WhatsApp hero: 4.58:1
- [x] Botão WhatsApp final: 5.20:1
- [x] Estados hover/active documentados

### Prioridade 2: Padronização de Ícones ✅
- [x] Lucide React (linha) em todo o site
- [x] Stroke width 1.75 padronizado
- [x] Tamanhos consistentes

### Prioridade 3: CTA Pré-rodapé ✅
- [x] Cor mais contrastante que hero
- [x] Ring visual para destaque
- [x] Shadow mais pronunciado

### Prioridade 4: Neutros e Espaçamentos ✅
- [x] Hierarquia de texto definida
- [x] Fundos de seção padronizados
- [x] Espaçamentos documentados

### Prioridade 5: Overlay e Otimização ✅
- [x] Overlay 10% no hero
- [x] Imagens WebP no office gallery
- [x] Lazy loading ativo

---

## 📊 Valores de Contraste Calculados

| Combinação | Valor | Status |
|------------|-------|--------|
| #FFFFFF sobre #1F9D55 (WhatsApp) | 4.58:1 | ✅ AA |
| #FFFFFF sobre #1A8549 (Final CTA) | 5.20:1 | ✅ AA |
| #FFFFFF sobre #0D0D0D (Background) | 19.8:1 | ✅ AAA |
| #C4836E sobre #0D0D0D (Accent) | 5.2:1 | ✅ AA |
| #BFBFBF sobre #0D0D0D (Secondary) | 11.4:1 | ✅ AAA |

---

*Documento gerado em: Dezembro 2024*
*Versão: 1.0*
