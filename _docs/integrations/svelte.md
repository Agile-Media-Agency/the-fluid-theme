# Using Fluid with Svelte

Fluid is pure CSS — no Svelte adapter needed. Import the stylesheet and use Fluid's classes and data attributes in your markup.

## Installation

```bash
npm install the-fluid-theme
```

## Setup

### SvelteKit

Import the CSS in your root layout:

```svelte
<!-- src/routes/+layout.svelte -->
<script>
  import 'the-fluid-theme/src/fluid.css';
</script>

<slot />
```

Set theme attributes in `app.html`:

```html
<!-- src/app.html -->
<!DOCTYPE html>
<html lang="en" data-theme="light" data-motion="flowing">
  <head>%sveltekit.head%</head>
  <body>%sveltekit.body%</body>
</html>
```

### Vite + Svelte

Import in your entry point:

```js
// main.js
import 'the-fluid-theme/src/fluid.css';
import App from './App.svelte';

new App({ target: document.getElementById('app') });
```

## Theme Switching

Use a Svelte store for reactive theme state:

```js
// stores/theme.js
import { writable } from 'svelte/store';

export const theme = writable('light');
export const motion = writable('flowing');

// Sync to DOM
theme.subscribe(value => {
  if (typeof document !== 'undefined') {
    document.documentElement.dataset.theme = value;
  }
});

motion.subscribe(value => {
  if (typeof document !== 'undefined') {
    document.documentElement.dataset.motion = value;
  }
});
```

Use the store in any component:

```svelte
<script>
  import { theme, motion } from '$lib/stores/theme';
</script>

<select bind:value={$theme}>
  <option value="light">Light</option>
  <option value="dark">Dark</option>
</select>

<select bind:value={$motion}>
  <option value="still">Still</option>
  <option value="flowing">Flowing</option>
  <option value="cascade">Cascade</option>
</select>
```

## Using Components

Fluid classes work directly in Svelte templates. Since Svelte uses standard HTML attributes (not JSX), there are no naming differences:

```svelte
<script>
  export let title;
  export let description;
  export let variant = 'elevated';
</script>

<article class="card" data-variant={variant}>
  <div class="card__content">
    <h3 class="card__title">{title}</h3>
    <p class="card__description">{description}</p>
  </div>
  <footer class="card__footer">
    <button class="button" on:click>
      <slot name="action">Learn More</slot>
    </button>
  </footer>
</article>
```

## Tips

- **Standard HTML** — Svelte uses real HTML attributes, so `data-variant`, `class`, etc. work exactly as documented
- **Scoped styles** don't conflict — Svelte's component scoping and Fluid's `@layer` architecture coexist cleanly
- **Svelte transitions** — pair Svelte's `transition:` directive with Fluid's CSS easing tokens for consistent motion
- **SSR** works out of the box — Fluid is pure CSS, so server-rendered HTML is styled immediately
