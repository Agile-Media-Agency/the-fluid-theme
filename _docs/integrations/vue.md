# Using Fluid with Vue

Fluid is pure CSS — no Vue-specific package needed. Import the stylesheet and use Fluid's classes and data attributes directly in your templates.

## Installation

```bash
npm install the-fluid-theme
```

## Setup

Import the CSS in your entry point (`main.js` or `main.ts`):

```js
// main.js
import 'the-fluid-theme/src/fluid.css';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
```

## Theme Switching

Use Vue's reactivity to control data attributes on the document element:

```vue
<!-- App.vue -->
<script setup>
import { ref, watchEffect } from 'vue';

const theme = ref('light');
const motion = ref('flowing');

watchEffect(() => {
  document.documentElement.dataset.theme = theme.value;
  document.documentElement.dataset.motion = motion.value;
});
</script>

<template>
  <div>
    <select v-model="theme">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
    <select v-model="motion">
      <option value="still">Still</option>
      <option value="flowing">Flowing</option>
      <option value="cascade">Cascade</option>
    </select>
    <router-view />
  </div>
</template>
```

## Using Components

Fluid classes and data attributes work directly in Vue templates:

```vue
<template>
  <article class="card" :data-variant="variant">
    <div class="card__content">
      <h3 class="card__title">{{ title }}</h3>
      <p class="card__description">{{ description }}</p>
    </div>
    <footer class="card__footer">
      <button class="button" @click="$emit('action')">
        {{ actionLabel }}
      </button>
    </footer>
  </article>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  variant: { type: String, default: 'elevated' },
  actionLabel: { type: String, default: 'Learn More' },
});

defineEmits(['action']);
</script>
```

## With Nuxt 3

Add the CSS import to your `nuxt.config.ts`:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  css: ['the-fluid-theme/src/fluid.css'],
});
```

Set theme attributes in `app.vue`:

```vue
<!-- app.vue -->
<script setup>
useHead({
  htmlAttrs: {
    'data-theme': 'light',
    'data-preset': 'flowing',
  },
});
</script>

<template>
  <NuxtPage />
</template>
```

## Tips

- **`v-bind` with data attributes** — use `:data-variant="variant"` to dynamically set variants
- **Scoped styles** work alongside Fluid — Vue's scoped CSS won't conflict thanks to `@layer`
- **Provide/inject** is a clean way to share theme state across deeply nested components
- **Transition component** — Vue's `<Transition>` works well with Fluid's easing tokens: `transition: all var(--duration-normal) var(--ease-fluid)`
