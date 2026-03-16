# Components Reference

UI components built on the Fluid foundation. All components use design tokens and respect user preferences.

**Live demo site: [TheFluidTheme.com](https://thefluidtheme.com)** — See all components in action at [/examples/components.html](https://thefluidtheme.com/examples/components.html)

---

## Button

[Live demo](https://thefluidtheme.com/examples/components.html#buttons)

### Basic Usage
```html
<button>Primary Button</button>
```

### Variants
```html
<button>Primary (default)</button>
<button data-variant="secondary">Secondary</button>
<button data-variant="outline">Outline</button>
<button data-variant="ghost">Ghost</button>
<button data-variant="danger">Danger</button>
```

### Sizes
```html
<button data-size="xs">Extra Small</button>
<button data-size="sm">Small</button>
<button>Default</button>
<button data-size="lg">Large</button>
<button data-size="xl">Extra Large</button>
```

### States & Modifiers
```html
<button disabled>Disabled</button>
<button data-loading>Loading</button>
<button data-pill>Pill Shape</button>
<button data-full>Full Width</button>
<button data-icon aria-label="Settings">🔧</button>
```

### Button Group
```html
<div class="button-group">
  <button data-variant="secondary">Left</button>
  <button data-variant="secondary">Center</button>
  <button data-variant="secondary">Right</button>
</div>
```

---

## Card

[Live demo](https://thefluidtheme.com/examples/components.html#cards)

### Basic Usage
```html
<article class="card">
  <div class="card__content">
    <h3 class="card__title">Card Title</h3>
    <p class="card__description">Card description text.</p>
  </div>
</article>
```

### Variants
```html
<article class="card">Default</article>
<article class="card" data-variant="elevated">Elevated</article>
<article class="card" data-variant="outlined">Outlined</article>
<article class="card" data-variant="ghost">Ghost</article>
<article class="card" data-variant="filled">Filled</article>
```

### Interactive Card
```html
<a href="#" class="card" data-interactive>
  <div class="card__content">
    <h3 class="card__title">Clickable Card</h3>
  </div>
</a>
```

### Card with Media
```html
<article class="card">
  <img class="card__media" src="image.jpg" alt="Description">
  <div class="card__content">
    <h3 class="card__title">Title</h3>
    <p class="card__description">Description</p>
  </div>
  <footer class="card__footer">
    <button data-variant="ghost" data-size="sm">Action</button>
  </footer>
</article>
```

### Media Aspect Ratios
```html
<img class="card__media" data-aspect="square">   <!-- 1:1 -->
<img class="card__media" data-aspect="video">    <!-- 16:9 -->
<img class="card__media" data-aspect="portrait"> <!-- 3:4 -->
<img class="card__media" data-aspect="wide">     <!-- 21:9 -->
```

### Card Types
```html
<!-- Stat Card -->
<article class="card" data-type="stat">
  <div class="card__content">
    <span class="card__value">2,847</span>
    <h3 class="card__title">Active Users</h3>
  </div>
</article>

<!-- Profile Card -->
<article class="card" data-type="profile">
  <img class="card__media" src="avatar.jpg">
  <div class="card__content">
    <h3 class="card__title">Name</h3>
    <p class="card__description">Role</p>
  </div>
</article>
```

### Testimonial Card
```html
<article class="card" data-type="testimonial">
  <div class="card__content">
    <div class="card__rating">★★★★★</div>
    <p class="card__quote">Great product, highly recommend.</p>
    <div class="card__attribution">
      <div>
        <div class="card__author">Jane Doe</div>
        <div class="card__role">CEO, Acme Inc.</div>
      </div>
    </div>
  </div>
</article>
```

### Pricing Card
```html
<article class="card" data-type="pricing" data-featured>
  <span class="badge" data-variant="filled">Most Popular</span>
  <div class="card__content">
    <h3 class="card__title">Pro</h3>
    <div class="card__price">$29<span class="card__price-period">/mo</span></div>
    <ul class="card__features">
      <li><span class="check">&#10003;</span> Unlimited projects</li>
      <li><span class="check">&#10003;</span> Priority support</li>
    </ul>
  </div>
  <footer class="card__footer">
    <button data-full>Upgrade</button>
  </footer>
</article>
```

### Card Group
```html
<div class="card-group" data-equal-height>
  <article class="card">...</article>
  <article class="card">...</article>
  <article class="card">...</article>
</div>
```

---

## Badge

[Live demo](https://thefluidtheme.com/examples/components.html#badges)

### Basic Usage
```html
<span class="badge">Default</span>
```

### Variants
```html
<span class="badge">Default (accent-tinted)</span>
<span class="badge" data-variant="filled">Filled</span>
<span class="badge" data-variant="outline">Outline</span>
<span class="badge" data-variant="muted">Muted</span>
```

### Status Colors
```html
<span class="badge" data-status="good">Active</span>
<span class="badge" data-status="warning">Pending</span>
<span class="badge" data-status="error">Failed</span>
<span class="badge" data-status="info">Info</span>
```

### Sizes
```html
<span class="badge" data-size="sm">Small</span>
<span class="badge">Default</span>
<span class="badge" data-size="lg">Large</span>
```

### Dot Indicator & Count
```html
<span class="badge" data-dot data-status="good">Online</span>
<span class="badge" data-variant="filled" data-count>3</span>
```

---

## Navigation

[Live demo](https://thefluidtheme.com/examples/components.html#navigation)

### Main Nav
```html
<nav class="nav" data-sticky>
  <a href="/" class="nav__brand">Logo</a>
  <ul class="nav__menu" role="list">
    <li><a href="#" class="nav__link">Link</a></li>
    <li><a href="#" class="nav__link" aria-current="page">Current</a></li>
  </ul>
  <div class="nav__actions">
    <button data-size="sm">Action</button>
  </div>
</nav>
```

### Nav Variants
```html
<nav class="nav">Default</nav>
<nav class="nav" data-variant="transparent">Transparent</nav>
<nav class="nav" data-variant="elevated">Elevated</nav>
<nav class="nav" data-sticky>Sticky</nav>
```

### Tabs
```html
<div class="tabs" role="tablist">
  <button class="tabs__tab" role="tab" aria-selected="true">Tab 1</button>
  <button class="tabs__tab" role="tab">Tab 2</button>
  <button class="tabs__tab" role="tab">Tab 3</button>
</div>

<!-- Contained variant -->
<div class="tabs" data-variant="contained">
  ...
</div>
```

### Breadcrumbs
```html
<nav aria-label="Breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb__item">
      <a href="#" class="breadcrumb__link">Home</a>
    </li>
    <li class="breadcrumb__item">
      <a href="#" class="breadcrumb__link" aria-current="page">Current</a>
    </li>
  </ol>
</nav>
```

### Pagination
```html
<nav aria-label="Pagination">
  <ol class="pagination" role="list">
    <li><a href="#" class="pagination__link" data-prev>← Prev</a></li>
    <li><a href="#" class="pagination__link">1</a></li>
    <li><a href="#" class="pagination__link" data-active>2</a></li>
    <li><a href="#" class="pagination__link">3</a></li>
    <li><a href="#" class="pagination__link" data-next>Next →</a></li>
  </ol>
</nav>
```

---

## Form Components

[Live demo](https://thefluidtheme.com/examples/components.html#forms)

### Form Group
```html
<div class="form-group">
  <label class="form-label" data-required>Email</label>
  <input type="email" placeholder="you@example.com">
  <span class="form-help">We'll never share your email.</span>
</div>
```

### Input Group
```html
<div class="input-group">
  <span class="input-group__addon">https://</span>
  <input type="text" placeholder="example.com">
</div>
```

### Checkbox
```html
<label class="checkbox">
  <input type="checkbox" class="checkbox__input">
  <span class="checkbox__box"></span>
  <span class="checkbox__label">Accept terms</span>
</label>
```

### Radio
```html
<div class="radio-group">
  <label class="radio">
    <input type="radio" name="plan" class="radio__input">
    <span class="radio__circle"></span>
    <span class="radio__label">Option 1</span>
  </label>
  <label class="radio">
    <input type="radio" name="plan" class="radio__input">
    <span class="radio__circle"></span>
    <span class="radio__label">Option 2</span>
  </label>
</div>
```

### Toggle Switch
```html
<label class="switch">
  <input type="checkbox" class="switch__input">
  <span class="switch__track">
    <span class="switch__thumb"></span>
  </span>
  <span class="switch__label">Enable feature</span>
</label>
```

### Validation States
```html
<input type="text" data-valid>
<input type="text" data-invalid>
<span class="form-error">Error message</span>
```

### Form Layout
```html
<form>
  <div class="form-row">
    <div class="form-group">...</div>
    <div class="form-group">...</div>
  </div>
  <div class="form-actions" data-align="end">
    <button type="button" data-variant="ghost">Cancel</button>
    <button type="submit">Submit</button>
  </div>
</form>
```

---

## Hero

[Live demo](https://thefluidtheme.com/examples/heroes.html)

Full-width hero sections for landing pages and page headers. Uses the positioning system data attributes for layout.

### Basic Usage
```html
<section class="hero" data-layout="center" data-padding="xl">
  <h1>Headline</h1>
  <p>Subheadline text.</p>
  <button>Call to Action</button>
</section>
```

### With Background Image
```html
<section class="hero" data-layout="overlay" data-padding="xl"
         style="background-image: url('hero-bg.jpg')">
  <h1>Over Image</h1>
  <p>Content on top of the background.</p>
</section>
```

### Split Hero
```html
<section class="hero" data-layout="split">
  <div>
    <h1>Headline</h1>
    <p>Description text.</p>
    <button>Get Started</button>
  </div>
  <img src="hero-image.jpg" alt="Feature">
</section>
```

### Custom Properties
```css
.hero {
  --hero-min-height: 60vh;    /* Minimum height */
  --hero-background: var(--color-surface);
  --hero-text-color: var(--color-text);
}
```

### Variants via Data Attributes
Uses the positioning system — combine `data-layout`, `data-padding`, `data-align`, `data-width` to create any hero layout. See [Positioning Reference](positioning.md).

---

## Indicators

[Live demo](https://thefluidtheme.com/examples/components.html#indicators) | [Dedicated page](https://thefluidtheme.com/examples/indicators.html)

Semantic status system for scores, progress, and feedback. Uses `data-status` to drive all visual styling.

### Status Tiers
```html
<div data-status="good">88% — Meeting goals</div>
<div data-status="moderate">65% — Needs improvement</div>
<div data-status="severe">32% — Critical</div>
```

| Status | Threshold | Color Family |
|--------|-----------|-------------|
| `good` | >= 80% | Success (green) |
| `moderate` | 60-79% | Warning (amber) |
| `severe` | < 60% | Error (red) |

### Progress Bar
```html
<progress data-status="good" value="88" max="100">88%</progress>
```

### Badge
```html
<span class="badge" data-status="good">Active</span>
<span class="badge" data-status="moderate">Pending</span>
<span class="badge" data-status="severe">Failed</span>
```

### Status Card
```html
<article class="card" data-type="stat">
  <div class="card__content">
    <span class="card__value" data-status="good">92%</span>
    <h3 class="card__title">Uptime</h3>
  </div>
</article>
```

---

## Settings Panel

Slide-out drawer for live theme customization. Controls motion, palette, accent, and theme mode.

### Usage
```html
<!-- Floating action button (always visible) -->
<button class="settings-fab" aria-label="Settings">
  <svg>...</svg>
</button>

<!-- Drawer -->
<div class="settings-drawer">
  <div class="settings-drawer__backdrop"></div>
  <div class="settings-drawer__panel">
    <!-- Theme controls go here -->
  </div>
</div>
```

### Structure
- `.settings-fab` — Fixed-position button in bottom-right corner
- `.settings-drawer` — Full-viewport overlay container
- `.settings-drawer__backdrop` — Clickable translucent backdrop
- `.settings-drawer__panel` — The actual slide-out panel

### Behavior
Opens by toggling the `open` attribute. Panel slides in from the right with backdrop blur. Includes `{% include settings-panel.html %}` in templates for the full interactive customizer.

---

## Scroll Progress

Thin bar showing page scroll position. Position and style adapt to the active motion preset.

### Usage
```html
<div class="scroll-progress" aria-hidden="true"></div>
```

### Positions
```html
<div class="scroll-progress" data-position="top"><!-- Horizontal, top (default) --></div>
<div class="scroll-progress" data-position="bottom"><!-- Horizontal, bottom --></div>
<div class="scroll-progress" data-position="left"><!-- Vertical, left --></div>
<div class="scroll-progress" data-position="right"><!-- Vertical, right --></div>
```

### Custom Properties
```css
.scroll-progress {
  --_progress: 0;      /* Set via JS: 0 to 1 */
  --_size: 3px;        /* Bar thickness */
}
```

### Hiding
```html
<div class="scroll-progress" data-hidden><!-- Hidden --></div>
```

---

## Themed Images

Apply theme-aware duotone filters to images. Uses CSS filters and pseudo-element overlays.

### Basic Usage
```html
<figure class="themed-image">
  <img src="photo.jpg" alt="Description">
</figure>
```

### On Cards
```html
<article class="card" data-themed-image>
  <img src="photo.jpg" alt="Description">
  <div class="card__content">...</div>
</article>
```

### Disabling
```html
<figure class="themed-image" data-no-duotone>
  <img src="photo.jpg" alt="No filter applied">
</figure>
```

### How It Works
Images are converted to grayscale, then an accent-colored overlay is applied via `mix-blend-mode`. The effect intensity varies by motion preset. Hover reveals the original image.

---

## Modal / Dialog

[Live demo](https://thefluidtheme.com/examples/components.html#modal)

Built on native `<dialog>` for accessibility. CSS transitions; JS needed only for `showModal()` / `close()`.

### Basic Usage
```html
<dialog class="modal" id="my-modal">
  <div class="modal__content">
    <header class="modal__header">
      <h2 class="modal__title">Dialog Title</h2>
      <button class="modal__close" aria-label="Close">&times;</button>
    </header>
    <div class="modal__body">
      <p>Modal body content here.</p>
    </div>
    <footer class="modal__footer">
      <button data-variant="ghost">Cancel</button>
      <button>Confirm</button>
    </footer>
  </div>
</dialog>

<script>
  document.getElementById('my-modal').showModal(); // open
  document.getElementById('my-modal').close();     // close
</script>
```

### Sizes
```html
<dialog class="modal" data-size="sm"><!-- 24rem max --></dialog>
<dialog class="modal"><!-- 32rem max (default) --></dialog>
<dialog class="modal" data-size="lg"><!-- 48rem max --></dialog>
<dialog class="modal" data-size="full"><!-- 72rem max --></dialog>
```

### Drawer Variants
```html
<dialog class="modal" data-variant="drawer-right"><!-- Slides in from right --></dialog>
<dialog class="modal" data-variant="drawer-left"><!-- Slides in from left --></dialog>
```

### Responsive Behavior
On screens narrower than `40rem`, all modals become bottom sheets (slide up from bottom). Drawers also convert to bottom sheets on mobile.

---

## Tooltip / Popover

[Live demo](https://thefluidtheme.com/examples/components.html#tooltips)

CSS-only tooltips via data attributes. Popovers use the native `popover` API.

### Tooltip Usage
```html
<button data-tooltip="Helpful hint">Hover me</button>
<span data-tooltip="More info" data-tooltip-pos="bottom">Text</span>
```

### Tooltip Positions
```html
<button data-tooltip="Top" data-tooltip-pos="top">Top (default)</button>
<button data-tooltip="Bottom" data-tooltip-pos="bottom">Bottom</button>
<button data-tooltip="Left" data-tooltip-pos="left">Left</button>
<button data-tooltip="Right" data-tooltip-pos="right">Right</button>
```

### Multiline Tooltip
```html
<button data-tooltip="This is a longer tooltip that wraps" data-tooltip-wrap>Wrapped</button>
```

### Popover Usage (native API)
```html
<button popovertarget="my-pop">Open Popover</button>
<div id="my-pop" popover class="popover">
  <div class="popover__content">
    <h3 class="popover__title">Popover Title</h3>
    <p>Rich content here.</p>
  </div>
</div>
```

### Accessibility
Tooltips are hidden on touch-only devices (`@media (hover: none)`).

---

## Accordion

[Live demo](https://thefluidtheme.com/examples/components.html#accordion)

Built on native `<details>` / `<summary>` — works without JavaScript.

### Basic Usage
```html
<div class="accordion">
  <details class="accordion__item">
    <summary class="accordion__trigger">Section Title</summary>
    <div class="accordion__content">
      <div class="accordion__body">Content here.</div>
    </div>
  </details>
  <details class="accordion__item">
    <summary class="accordion__trigger">Another Section</summary>
    <div class="accordion__content">
      <div class="accordion__body">More content.</div>
    </div>
  </details>
</div>
```

### Variants
```html
<div class="accordion" data-variant="bordered"><!-- Card-like bordered items --></div>
<div class="accordion" data-variant="separated"><!-- Spaced apart with elevation --></div>
<div class="accordion" data-variant="flush"><!-- Minimal, no borders --></div>
```

### Sizes
```html
<div class="accordion" data-size="sm"><!-- Compact --></div>
<div class="accordion"><!-- Default --></div>
<div class="accordion" data-size="lg"><!-- Large --></div>
```

### Single Open (Exclusive)
```html
<div class="accordion">
  <details class="accordion__item" name="faq">
    <summary class="accordion__trigger">Question 1</summary>
    <div class="accordion__content"><div class="accordion__body">Answer 1</div></div>
  </details>
  <details class="accordion__item" name="faq">
    <summary class="accordion__trigger">Question 2</summary>
    <div class="accordion__content"><div class="accordion__body">Answer 2</div></div>
  </details>
</div>
```

Using the same `name` attribute creates exclusive accordion behavior (native HTML).

---

## Alert / Toast

[Live demo](https://thefluidtheme.com/examples/components.html#alerts)

Alerts for inline feedback. Toasts for transient positioned notifications.

### Alert Usage
```html
<div class="alert" data-status="info">
  <div class="alert__content">
    <strong class="alert__title">Info</strong>
    <p>This is an informational message.</p>
  </div>
</div>
```

### Alert Statuses
```html
<div class="alert" data-status="info">Info</div>
<div class="alert" data-status="success">Success</div>
<div class="alert" data-status="warning">Warning</div>
<div class="alert" data-status="error">Error</div>
```

### Alert Variants
```html
<div class="alert" data-status="info"><!-- Subtle (default): tinted background --></div>
<div class="alert" data-status="info" data-variant="filled"><!-- Solid background --></div>
<div class="alert" data-status="info" data-variant="outline"><!-- Border only --></div>
```

### Dismissible Alert
```html
<div class="alert" data-status="success" data-dismissible>
  <div class="alert__content">
    <strong class="alert__title">Saved!</strong>
    <p>Your changes have been saved.</p>
  </div>
  <button class="alert__close" aria-label="Dismiss">&times;</button>
</div>
```

### Toast Container
```html
<div class="toast-container" data-position="top-right">
  <div class="toast" data-status="success">
    <div class="toast__content">
      <strong>Saved</strong>
      <p>Your changes are live.</p>
    </div>
    <button class="toast__close" aria-label="Dismiss">&times;</button>
  </div>
</div>
```

### Toast Positions
```html
<div class="toast-container" data-position="top-right"><!-- Default --></div>
<div class="toast-container" data-position="top-left"></div>
<div class="toast-container" data-position="top-center"></div>
<div class="toast-container" data-position="bottom-right"></div>
<div class="toast-container" data-position="bottom-left"></div>
<div class="toast-container" data-position="bottom-center"></div>
```

---

## Table

[Live demo](https://thefluidtheme.com/examples/components.html#tables)

Responsive tables with horizontal scroll, sortable headers, and mobile stacked layout.

### Basic Usage
```html
<div class="table-wrap">
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Status</th>
        <th data-align="end">Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Item</td>
        <td>Active</td>
        <td data-align="end">$99.00</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Variants
```html
<table class="table" data-variant="striped"><!-- Alternating row backgrounds --></table>
<table class="table" data-variant="bordered"><!-- All cell borders --></table>
<table class="table" data-variant="compact"><!-- Reduced padding --></table>
```

### Interactive Features
```html
<table class="table" data-hover><!-- Row highlight on hover --></table>
<table class="table" data-selectable><!-- Clickable rows --></table>
<table class="table" data-sticky-col><!-- Sticky first column --></table>
<table class="table" data-sticky-header><!-- Sticky header --></table>
```

### Sortable Headers
```html
<th data-sortable>Name</th>
<th data-sortable data-sort="asc">Name (ascending)</th>
<th data-sortable data-sort="desc">Name (descending)</th>
```

### Responsive Stacked Layout
```html
<table class="table" data-responsive>
  <thead>
    <tr><th>Name</th><th>Status</th><th>Amount</th></tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Name">John</td>
      <td data-label="Status">Active</td>
      <td data-label="Amount">$99.00</td>
    </tr>
  </tbody>
</table>
```

On mobile (`< 40rem`), header hides and cells stack vertically with `data-label` as row headers.

---

## Avatar

[Live demo](https://thefluidtheme.com/examples/components.html#avatars)

Profile images with initials fallback, status indicators, and grouping.

### Basic Usage
```html
<!-- With image -->
<div class="avatar">
  <img src="photo.jpg" alt="Jane Doe">
</div>

<!-- With initials fallback -->
<div class="avatar" data-initials="JD"></div>
```

### Sizes
```html
<div class="avatar" data-size="xs"><!-- 1.5rem --></div>
<div class="avatar" data-size="sm"><!-- 2rem --></div>
<div class="avatar"><!-- 2.5rem (default) --></div>
<div class="avatar" data-size="lg"><!-- 3rem --></div>
<div class="avatar" data-size="xl"><!-- 4rem --></div>
<div class="avatar" data-size="2xl"><!-- 5rem --></div>
```

### Shapes
```html
<div class="avatar"><!-- Circle (default) --></div>
<div class="avatar" data-shape="square"><!-- Square with rounded corners --></div>
<div class="avatar" data-shape="rounded"><!-- Rounded square --></div>
```

### Status Indicators
```html
<div class="avatar" data-status="online"><img src="photo.jpg" alt="Jane"></div>
<div class="avatar" data-status="busy"><img src="photo.jpg" alt="Jane"></div>
<div class="avatar" data-status="away"><img src="photo.jpg" alt="Jane"></div>
<div class="avatar" data-status="offline"><img src="photo.jpg" alt="Jane"></div>
```

### Ring Variant
```html
<div class="avatar" data-ring>
  <img src="photo.jpg" alt="Jane Doe">
</div>
```

### Avatar Group
```html
<div class="avatar-group">
  <div class="avatar"><img src="user1.jpg" alt="User 1"></div>
  <div class="avatar"><img src="user2.jpg" alt="User 2"></div>
  <div class="avatar"><img src="user3.jpg" alt="User 3"></div>
  <span class="avatar-group__overflow">+5</span>
</div>
```

---

## Loading / Skeleton

[Live demo](https://thefluidtheme.com/examples/components.html#loading)

Loading spinners and skeleton screens for loading states.

### Spinner
```html
<div class="spinner" aria-label="Loading"></div>
```

### Spinner Sizes
```html
<div class="spinner" data-size="xs"><!-- 1rem --></div>
<div class="spinner" data-size="sm"><!-- 1.5rem --></div>
<div class="spinner"><!-- 2rem (default) --></div>
<div class="spinner" data-size="lg"><!-- 3rem --></div>
<div class="spinner" data-size="xl"><!-- 4rem --></div>
```

### Dots Spinner
```html
<div class="spinner-dots"><span></span></div>
```

### Loading Overlay
```html
<div style="position: relative;">
  <div class="loading-overlay">
    <div class="spinner"></div>
    <span class="loading-overlay__text">Loading...</span>
  </div>
  <!-- Content underneath -->
</div>
```

### Skeleton Screen
```html
<div class="skeleton" style="--skeleton-h: 1rem; --skeleton-w: 60%;"></div>
```

### Skeleton Variants
```html
<div class="skeleton" data-variant="circle"><!-- Avatar placeholder (2.5rem circle) --></div>
<div class="skeleton" data-variant="title"><!-- Heading placeholder (1.5rem, 60% width) --></div>
<div class="skeleton" data-variant="text"><!-- Text line placeholder --></div>
<div class="skeleton" data-variant="media"><!-- Image placeholder (12rem tall) --></div>
<div class="skeleton" data-variant="button"><!-- Button placeholder --></div>
```

### Skeleton Card (preset layout)
```html
<div class="skeleton-card">
  <div class="skeleton" data-variant="media"></div>
  <div class="skeleton" data-variant="title"></div>
  <div class="skeleton" data-variant="text"></div>
  <div class="skeleton" data-variant="text" style="--skeleton-w: 75%;"></div>
</div>
```

### Reduced Motion
Spinners pulse instead of spinning. Skeleton shimmer stops. All controlled by `prefers-reduced-motion`.

---

## Dropdown

[Live demo](https://thefluidtheme.com/examples/components.html#dropdowns)

Standalone dropdown menus for actions, selections, and context menus. Separate from nav dropdowns.

### Basic Usage
```html
<div class="dropdown">
  <button class="dropdown__trigger">
    Options
    <svg class="dropdown__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
  </button>
  <div class="dropdown__menu">
    <a href="#" class="dropdown__item">Edit</a>
    <a href="#" class="dropdown__item">Duplicate</a>
    <div class="dropdown__divider"></div>
    <a href="#" class="dropdown__item" data-danger>Delete</a>
  </div>
</div>
```

### Position Variants
```html
<div class="dropdown"><!-- Bottom-start (default) --></div>
<div class="dropdown" data-position="bottom-end"><!-- Bottom-end (right-aligned) --></div>
<div class="dropdown" data-position="top"><!-- Opens above --></div>
<div class="dropdown" data-position="top-end"><!-- Opens above, right-aligned --></div>
```

### Width Variants
```html
<div class="dropdown" data-width="auto"><!-- Min 12rem (default) --></div>
<div class="dropdown" data-width="full"><!-- Match trigger width --></div>
<div class="dropdown" data-width="fixed"><!-- Fixed 16rem --></div>
```

### Items with Icons & Shortcuts
```html
<div class="dropdown__menu">
  <a href="#" class="dropdown__item">
    <svg class="dropdown__item-icon">...</svg>
    Edit
    <span class="dropdown__shortcut">Ctrl+E</span>
  </a>
</div>
```

### Sections & Headers
```html
<div class="dropdown__menu">
  <div class="dropdown__header">Actions</div>
  <a href="#" class="dropdown__item">Edit</a>
  <a href="#" class="dropdown__item">Duplicate</a>
  <div class="dropdown__divider"></div>
  <div class="dropdown__header">Danger Zone</div>
  <a href="#" class="dropdown__item" data-danger>Delete</a>
</div>
```

### Item States
```html
<a href="#" class="dropdown__item" data-active>Active/Selected</a>
<a href="#" class="dropdown__item" aria-disabled="true">Disabled</a>
<a href="#" class="dropdown__item" data-danger>Danger Action</a>
```

---

## Data Attributes Reference

| Attribute | Values | Used On |
|-----------|--------|---------|
| `data-variant` | `secondary`, `outline`, `ghost`, `danger`, `elevated`, `outlined`, `filled`, `muted` | Buttons, Cards, Badges |
| `data-variant` | `drawer-right`, `drawer-left` | Modal |
| `data-variant` | `bordered`, `separated`, `flush` | Accordion |
| `data-variant` | `filled`, `outline` | Alert |
| `data-variant` | `striped`, `bordered`, `compact` | Table |
| `data-size` | `xs`, `sm`, `lg`, `xl`, `2xl` | Buttons, Spinner, Avatar |
| `data-size` | `sm`, `lg`, `full` | Modal |
| `data-size` | `sm`, `lg` | Accordion |
| `data-status` | `info`, `success`, `warning`, `error` | Alert, Toast |
| `data-status` | `good`, `warning`, `error`, `info` | Badge |
| `data-dot` | (presence) | Badge |
| `data-count` | (presence) | Badge |
| `data-featured` | (presence) | Pricing Card |
| `data-status` | `online`, `busy`, `away`, `offline` | Avatar |
| `data-position` | `top-right`, `top-left`, `bottom-right`, `bottom-left`, `top-center`, `bottom-center` | Toast Container |
| `data-position` | `bottom-end`, `top`, `top-end` | Dropdown |
| `data-tooltip` | (string) | Any element |
| `data-tooltip-pos` | `top`, `bottom`, `left`, `right` | Tooltip elements |
| `data-tooltip-wrap` | (presence) | Tooltip elements |
| `data-width` | `auto`, `full`, `fixed` | Dropdown |
| `data-loading` | (presence) | Buttons |
| `data-pill` | (presence) | Buttons |
| `data-full` | (presence) | Buttons |
| `data-icon` | (presence) | Buttons |
| `data-interactive` | (presence) | Cards |
| `data-type` | `stat`, `profile`, `feature`, `testimonial`, `pricing` | Cards |
| `data-aspect` | `square`, `video`, `portrait`, `wide` | Card media |
| `data-sticky` | (presence) | Nav |
| `data-valid` | (presence) | Inputs |
| `data-invalid` | (presence) | Inputs |
| `data-initials` | (string) | Avatar |
| `data-shape` | `square`, `rounded` | Avatar |
| `data-ring` | (presence) | Avatar |
| `data-hover` | (presence) | Table |
| `data-selectable` | (presence) | Table |
| `data-sticky-col` | (presence) | Table |
| `data-sticky-header` | (presence) | Table |
| `data-sortable` | (presence) | Table `th` |
| `data-sort` | `asc`, `desc` | Table `th` |
| `data-responsive` | (presence) | Table |
| `data-label` | (string) | Table `td` (mobile stacked) |
| `data-align` | `end`, `center` | Table cells |
| `data-dismissible` | (presence) | Alert |
| `data-danger` | (presence) | Dropdown item |
| `data-active` | (presence) | Dropdown item |
