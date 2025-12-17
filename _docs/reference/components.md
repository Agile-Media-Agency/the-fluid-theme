# Components Reference

UI components built on the Fluid foundation. All components use design tokens and respect user preferences.

---

## Button

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

### Card Group
```html
<div class="card-group" data-equal-height>
  <article class="card">...</article>
  <article class="card">...</article>
  <article class="card">...</article>
</div>
```

---

## Navigation

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

## Data Attributes Reference

| Attribute | Values | Used On |
|-----------|--------|---------|
| `data-variant` | `secondary`, `outline`, `ghost`, `danger`, `elevated`, `outlined`, `filled` | Buttons, Cards |
| `data-size` | `xs`, `sm`, `lg`, `xl` | Buttons |
| `data-loading` | (presence) | Buttons |
| `data-pill` | (presence) | Buttons |
| `data-full` | (presence) | Buttons |
| `data-icon` | (presence) | Buttons |
| `data-interactive` | (presence) | Cards |
| `data-type` | `stat`, `profile`, `feature` | Cards |
| `data-aspect` | `square`, `video`, `portrait`, `wide` | Card media |
| `data-sticky` | (presence) | Nav |
| `data-valid` | (presence) | Inputs |
| `data-invalid` | (presence) | Inputs |
