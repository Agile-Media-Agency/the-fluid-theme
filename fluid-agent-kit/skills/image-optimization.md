# Image Optimization — Fluid Theme

This skill covers responsive images, performance optimization, and image utilities available in The Fluid Theme.

For the full guide with code examples, see `_docs/images-guide.md`.

## Quick Reference

### Format Priority

AVIF > WebP > JPEG > PNG. Use `<picture>` for format fallbacks:

```html
<div class="hero__background" data-focus="top">
  <picture>
    <source srcset="hero.avif" type="image/avif">
    <source srcset="hero.webp" type="image/webp">
    <img src="hero.jpg" alt="Description" width="1920" height="1080">
  </picture>
</div>
```

### Lazy Loading

Add `loading="lazy"` to ALL images except the first/hero image on each page:

```html
<!-- First image: above the fold, load eagerly -->
<img src="hero.jpg" alt="Hero" width="1920" height="1080">

<!-- All other images: lazy load -->
<img src="card.jpg" alt="Card" loading="lazy" width="1920" height="1080">
```

### Always Include Dimensions

Every `<img>` must have `width` and `height` attributes to prevent layout shift (CLS):

| Aspect Ratio | Dimensions |
|-------------|------------|
| 16:9 (video) | `width="1920" height="1080"` |
| 1:1 (square) | `width="800" height="800"` |
| 3:4 (portrait) | `width="800" height="1067"` |
| 21:9 (wide) | `width="1920" height="823"` |
| Avatar | `width="96" height="96"` |

### Focal Point Control

Use `data-focus` on `.hero__background` or directly on `.card__media`:

```html
<!-- Preset positions -->
<div class="hero__background" data-focus="top">
<img class="card__media" data-focus="left">

<!-- Custom position -->
<div class="hero__background" style="--focus-x: 30%; --focus-y: 20%;">
```

Available presets: `top`, `bottom`, `left`, `right`, `center`

### Aspect Ratios

Use `data-aspect` on `.card__media`:

```html
<img class="card__media" data-aspect="video">    <!-- 16:9 -->
<img class="card__media" data-aspect="square">   <!-- 1:1 -->
<img class="card__media" data-aspect="portrait">  <!-- 3:4 -->
<img class="card__media" data-aspect="wide">      <!-- 21:9 -->
```

### Image Protection

Add `data-protected` to discourage casual right-click saving (not DRM):

```html
<div data-protected>
  <img src="portfolio.jpg" alt="My work">
</div>
```

Limitations: Does NOT prevent screenshots, dev tools, or determined users.

### Orientation-Aware Images

Show different images based on viewport orientation:

```html
<img data-orientation="landscape" src="wide-shot.jpg" alt="Scene">
<img data-orientation="portrait" src="tall-crop.jpg" alt="Scene">
```

### Responsive Images Pattern

```html
<img
  srcset="photo-640.webp 640w, photo-1024.webp 1024w, photo-1920.webp 1920w"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  src="photo-1024.webp"
  alt="Description"
  loading="lazy"
  width="1920" height="1080"
>
```

## Checklist for New Pages

- [ ] First/hero image: no `loading="lazy"`, consider `fetchpriority="high"`
- [ ] All other images: `loading="lazy"`
- [ ] All images: `width` and `height` attributes set
- [ ] All images: meaningful `alt` text
- [ ] Hero backgrounds: consider `data-focus` for focal point control
- [ ] Card media: `data-aspect` set appropriately
- [ ] Images served in WebP or AVIF with fallbacks
