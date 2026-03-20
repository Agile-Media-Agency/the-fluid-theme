# Migrating from Tailwind CSS to Fluid

This guide maps Tailwind patterns to Fluid equivalents. The philosophical difference: Tailwind is utility-first with many classes per element; Fluid uses semantic HTML with data attributes and built-in components.

---

## Layout

| Tailwind | Fluid |
|----------|-------|
| `<div class="flex justify-between items-center">` | `<div data-flex="row" data-justify="between" data-items="center">` |
| `<div class="grid grid-cols-3 gap-4">` | `<div data-grid="3" data-gap="md">` |
| `<div class="max-w-7xl mx-auto px-4">` | `<div class="container">` |
| `<div class="hidden md:block">` | `<div data-hide="mobile">` |
| `<div class="sticky top-0">` | `<div data-position="sticky">` |

---

## Components

Tailwind has no component abstractions. You assemble every element from utilities. Fluid ships complete components.

### Button

```html
<!-- Tailwind: ~10 classes -->
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>

<!-- Fluid: 1 class + 1 data attribute -->
<button class="button" data-variant="primary">Click me</button>
```

### Card

```html
<!-- Tailwind: 15+ classes across nested elements -->
<div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
  <img class="w-full" src="image.jpg" alt="Photo">
  <div class="px-6 py-4">
    <h3 class="font-bold text-xl mb-2 text-gray-900 dark:text-white">Title</h3>
    <p class="text-gray-700 dark:text-gray-300 text-base">Description text.</p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Action
    </button>
  </div>
</div>

<!-- Fluid: semantic structure, dark mode handled automatically -->
<div class="card">
  <img src="image.jpg" alt="Photo">
  <div class="card__content">
    <h3>Title</h3>
    <p>Description text.</p>
  </div>
  <div class="card__actions">
    <button class="button" data-variant="primary">Action</button>
  </div>
</div>
```

### Alert

```html
<!-- Tailwind -->
<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" role="alert">
  <strong class="font-bold">Error!</strong>
  <span class="block sm:inline">Something went wrong.</span>
</div>

<!-- Fluid -->
<div class="alert" data-status="error">
  <strong>Error!</strong> Something went wrong.
</div>
```

### Modal

```html
<!-- Tailwind: requires custom JS + many utility classes -->
<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div class="bg-white rounded-lg shadow-xl p-6 max-w-md mx-4">
    <h2 class="text-xl font-bold mb-4">Title</h2>
    <p class="text-gray-600 mb-4">Content here</p>
    <button class="bg-blue-500 text-white px-4 py-2 rounded">Close</button>
  </div>
</div>

<!-- Fluid: native dialog element, zero JS for open/close -->
<dialog class="modal" id="myModal">
  <h2>Title</h2>
  <p>Content here</p>
  <button onclick="this.closest('dialog').close()">Close</button>
</dialog>
```

---

## Spacing and Sizing

| Tailwind | Fluid |
|----------|-------|
| `p-4 px-6 py-2` | `data-padding="md"` or `padding: var(--space-8)` |
| `space-y-4` | `.stack` or `.flow` class |
| `gap-4` | `data-gap="md"` |
| `w-full` | `data-width="full"` |
| `max-w-prose` | Fluid sets readable line lengths by default |

For one-off adjustments, use design tokens:

```css
.my-section {
  padding-block: var(--space-12);
  padding-inline: var(--space-6);
}
```

---

## Colors

| Tailwind | Fluid |
|----------|-------|
| `bg-blue-500 text-white` | Handled by the palette system -- change `data-palette` to switch all colors at once |
| `dark:bg-gray-900` | `data-theme="dark"` on body -- all components adapt automatically |
| `text-gray-600` | Use semantic tokens: `color: var(--text-muted)` |

Tailwind requires you to specify dark mode variants on every element. Fluid handles dark mode globally -- set `data-theme="dark"` once and every component responds.

---

## Key Differences

1. **No build step.** Tailwind requires PostCSS or the Tailwind CLI to generate CSS. Fluid is a single CSS file you link directly.
2. **Dramatically less HTML verbosity.** A Tailwind button might need 10 classes. A Fluid button needs one class and one data attribute.
3. **Complete theme switching.** Change one data attribute and typography, colors, spacing, and motion all transform together. Tailwind themes require rebuilding.
4. **Components are built-in.** Cards, modals, alerts, tooltips, accordions, and more work out of the box with semantic markup.
5. **Trade-off: less granular control per element.** Tailwind lets you tweak every pixel with utility classes. In Fluid, use CSS custom properties for overrides beyond what data attributes provide.

---

## Migration Strategy

Running Tailwind and Fluid side-by-side is not practical -- both are full frameworks that style base elements. Migrate page by page instead.

1. **Migrate page by page.** Pick a page, remove its Tailwind classes, and replace with Fluid markup. Deploy when the page is complete.

2. **Start with layout containers.** Replace `flex`, `grid`, and container utilities with Fluid's `data-grid`, `data-flex`, and `.container`. This restructures the page skeleton quickly.

3. **Replace component markup next.** Swap utility-assembled components (buttons, cards, alerts) for Fluid's semantic equivalents. This is where you see the biggest reduction in HTML complexity.

4. **Use CSS custom properties for one-off styling.** Anywhere Tailwind utilities provided precise control (exact padding, specific colors), use Fluid's design tokens:

```css
.hero-section {
  padding-block: var(--space-16);
  background: var(--surface-2);
  color: var(--text-primary);
}
```

5. **Remove the Tailwind build step last.** Once no pages reference Tailwind classes, remove PostCSS/Tailwind from your build pipeline entirely. Your CSS is now a single static file with no compilation.
