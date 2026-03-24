# Fluid Theme — React Starter

A minimal React + Vite starter using `@fluid-theme/core`. Includes a live theming demo driven by React state.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## How It Works

1. `@fluid-theme/core` is imported once in `src/main.jsx` — all components available everywhere
2. Theme is controlled via `data-*` attributes on `<html>` (see `index.html`)
3. React state drives `document.documentElement.setAttribute(...)` for live switching

## Key Pattern

```jsx
// Import once — globally available
import '@fluid-theme/core'

// Use semantic HTML with data-* variants
<button className="button" data-variant="outline" data-size="lg">
  Click Me
</button>

// Cards
<article className="card" data-variant="elevated">
  <div className="card__body">
    <h3>Title</h3>
    <p>Content</p>
  </div>
</article>
```

## Theme Switching

```jsx
// Drive with React state
function setTheme(value) {
  document.documentElement.setAttribute('data-theme', value)
}

// Palettes: fluid | morandi | bold | pastel | earth | mono | 80s | matrix | subtle | tsunami
function setPalette(value) {
  document.documentElement.setAttribute('data-palette', value)
}

// Motion: still | serene | stream | flowing | cascade | rapids | tsunami
function setMotion(value) {
  document.documentElement.setAttribute('data-motion', value)
}
```

## Next.js

For Next.js, add the import to `app/layout.tsx`:

```tsx
import '@fluid-theme/core'
```

Add `data-theme`, `data-palette`, `data-motion` attributes to your `<html>` element in the layout.

## Documentation

- [Fluid Theme docs](https://thefluidtheme.com)
- [Component reference](https://github.com/Agile-Media-Agency/the-fluid-theme/blob/main/_docs/reference/components.md)
- [Design tokens](https://github.com/Agile-Media-Agency/the-fluid-theme/blob/main/_docs/reference/tokens.md)
