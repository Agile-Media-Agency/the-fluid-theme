# Fluid Framework - Documentation

> *"Like water: adaptable, natural, powerful yet gentle."*

Welcome to the Fluid Framework documentation. This is a modern CSS/HTML design system prioritizing semantic HTML, CSS custom properties, and progressive enhancement.

---

## Quick Links

| Document | Description |
|----------|-------------|
| [Architecture](architecture.md) | Technical decisions, layer system, philosophy |
| [Contributing](contributing.md) | How to contribute to the project |
| [Tokens Reference](reference/tokens.md) | Design tokens (colors, spacing, typography) |
| [Positioning System](reference/positioning.md) | Layout and alignment utilities |
| [Components](reference/components.md) | Component API and usage |

### For AI Agents
| Document | Description |
|----------|-------------|
| [General Instructions](_agents/general.md) | Core project principles |
| [CSS Specialist](_agents/css-specialist.md) | CSS patterns and conventions |
| [Component Developer](_agents/component-developer.md) | Component creation guide |

---

## Project Structure

```
the-fluid-theme-v2c/
├── _docs/                   # Documentation (you are here)
│   ├── _start-here.md       # This file
│   ├── architecture.md      # Technical decisions
│   ├── contributing.md      # Contribution guide
│   ├── _agents/             # AI agent instructions
│   └── reference/           # Technical reference
├── src/
│   ├── core/                # Foundation CSS
│   │   ├── reset.css        # Modern CSS reset
│   │   ├── tokens.css       # Design tokens
│   │   └── base.css         # Element defaults
│   ├── components/          # UI components
│   ├── layouts/             # Layout patterns
│   ├── themes/              # Theme variations
│   └── fluid.css            # Main entry point
├── examples/                # Live examples
│   ├── foundation.html      # Element showcase
│   └── components.html      # Component gallery
├── CLAUDE.md                # AI assistant entry point
└── README.md                # Project overview
```

---

## Core Principles

### 1. Semantic HTML First
```html
<!-- Do this -->
<article class="card">
  <h2>Title</h2>
  <p>Content</p>
</article>

<!-- Not this -->
<div class="flex flex-col p-4 rounded-lg shadow-md">
  <div class="text-xl font-bold">Title</div>
  <div class="text-gray-600">Content</div>
</div>
```

### 2. CSS Custom Properties for Everything
```css
/* All values come from tokens */
padding: var(--space-5);
color: var(--color-text);
font-size: var(--font-size-lg);
```

### 3. Logical Properties
```css
/* Use logical (works for RTL) */
margin-block-start: var(--space-4);
padding-inline: var(--space-5);

/* Not physical */
margin-top: 1rem;    /* Avoid */
padding-left: 1rem;  /* Avoid */
```

### 4. No Build Step Required
The framework works directly in browsers. Just link the CSS:
```html
<link rel="stylesheet" href="src/fluid.css">
```

### 5. Progressive Enhancement
Everything works without JavaScript. JS enhances, never gates.

---

## Design Philosophy

**Serene, calm, like a gentle brook.**

- Soft, natural colors (not electric or aggressive)
- Smooth, unhurried transitions (200-350ms)
- Shadows that feel like natural light
- Typography that breathes
- Subtle interactions, not flashy

---

## Quick Start

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="path/to/fluid.css">
  <title>My Page</title>
</head>
<body>
  <div class="container">
    <section class="section" data-layout="center">
      <h1>Hello Fluid</h1>
      <p>A serene design system.</p>
      <button>Get Started</button>
    </section>
  </div>
</body>
</html>
```

---

## Browser Support

- Chrome 120+
- Firefox 120+
- Safari 16.4+
- Edge 120+

Requires: CSS Layers, Container Queries, `light-dark()` function.

---

## Next Steps

1. Read [Architecture](architecture.md) for technical details
2. See [Tokens Reference](reference/tokens.md) for available design tokens
3. Check [examples/](../examples/) for live demos

---

*Last updated: December 2024*
