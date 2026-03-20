# Image Best Practices

> How to serve fast, sharp, accessible images with the Fluid Framework.

This guide covers format selection, responsive delivery, focal point control, and the image-related attributes that Fluid provides out of the box. Every pattern here is copy-paste ready.

---

## Format Recommendations

Modern formats can cut image weight dramatically. Here is the priority order:

| Format | Savings | Browser Support | Notes |
|--------|---------|-----------------|-------|
| **AVIF** | ~50% smaller than WebP | Chrome 85+, Firefox 93+, Safari 16.4+ | Best quality-to-size ratio available today |
| **WebP** | ~30% smaller than JPEG | All modern browsers | Safe universal choice |
| **JPEG** | Baseline | Universal | Still fine as the final fallback |
| **PNG** | Lossless, large files | Universal | Use only when you need transparency and AVIF/WebP are not an option |

**JPEG XL** was a promising contender, but Chrome dropped support in 2023 and no other browser picked it up. Consider it dead for the web.

### The short version

Serve AVIF as your primary source, WebP as the fallback, and JPEG (or PNG) as the last resort. The `<picture>` element makes this painless.

---

## The `<picture>` Pattern

The `<picture>` element lets the browser choose the best format it supports. The `<img>` at the bottom is the fallback — it is required and also carries your `alt`, `width`, and `height` attributes.

### Basic usage

```html
<picture>
  <source srcset="photo.avif" type="image/avif">
  <source srcset="photo.webp" type="image/webp">
  <img src="photo.jpg" alt="A description of the image" width="800" height="600">
</picture>
```

### Inside a Fluid hero

```html
<div class="hero__background" data-focus="top">
  <picture>
    <source srcset="hero.avif" type="image/avif">
    <source srcset="hero.webp" type="image/webp">
    <img src="hero.jpg" alt="Hero image" width="1920" height="1080">
  </picture>
</div>
```

### Inside a Fluid card

```html
<div class="card__media" data-aspect="video">
  <picture>
    <source srcset="thumbnail.avif" type="image/avif">
    <source srcset="thumbnail.webp" type="image/webp">
    <img src="thumbnail.jpg" alt="Article thumbnail" width="800" height="450">
  </picture>
</div>
```

Always include explicit `width` and `height` on the `<img>`. This lets the browser reserve the correct space before the image loads, preventing layout shift.

---

## Responsive Images with `srcset` and `sizes`

For images that span different widths at different breakpoints, combine `srcset` with `sizes` so the browser downloads only what it needs.

```html
<picture>
  <source
    srcset="photo-400.avif 400w,
            photo-800.avif 800w,
            photo-1200.avif 1200w,
            photo-1920.avif 1920w"
    sizes="(max-width: 600px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
    type="image/avif">
  <source
    srcset="photo-400.webp 400w,
            photo-800.webp 800w,
            photo-1200.webp 1200w,
            photo-1920.webp 1920w"
    sizes="(max-width: 600px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
    type="image/webp">
  <img
    src="photo-800.jpg"
    srcset="photo-400.jpg 400w,
            photo-800.jpg 800w,
            photo-1200.jpg 1200w,
            photo-1920.jpg 1920w"
    sizes="(max-width: 600px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
    alt="Responsive photo"
    width="1920"
    height="1080">
</picture>
```

### How `sizes` works

The `sizes` attribute tells the browser how wide the image will be rendered at each breakpoint. The browser combines this with the device pixel ratio to pick the smallest file that still looks sharp. You do not need pixel-perfect values here — reasonable estimates are fine.

---

## Lazy Loading

Native lazy loading is supported in all modern browsers. Add a single attribute:

```html
<img src="photo.jpg" alt="Below-fold content" width="800" height="600" loading="lazy">
```

This also works inside `<picture>` — put the attribute on the `<img>` element.

```html
<picture>
  <source srcset="photo.avif" type="image/avif">
  <source srcset="photo.webp" type="image/webp">
  <img src="photo.jpg" alt="Below-fold content" width="800" height="600" loading="lazy">
</picture>
```

### When NOT to lazy-load

Do not add `loading="lazy"` to images that appear above the fold — hero images, logos, or anything visible on initial page load. Lazy loading these will delay their appearance and hurt Largest Contentful Paint (LCP).

For hero images, consider adding `fetchpriority="high"` instead to tell the browser to prioritize the download:

```html
<img src="hero.jpg" alt="Hero image" width="1920" height="1080" fetchpriority="high">
```

---

## Focal Point Control

When an image is cropped by `object-fit: cover` (which Fluid applies to `.hero__background` and `.card__media` images), the browser crops from the center by default. The focal point attributes let you control which part of the image stays visible.

### Preset positions

Use the `data-focus` attribute on `.hero__background` or `.card__media`:

```html
<!-- Keep the subject's face visible at the top of the frame -->
<div class="hero__background" data-focus="top">
  <img src="portrait.jpg" alt="Team lead" width="1920" height="1080">
</div>

<!-- Keep the subject visible on the left -->
<div class="card__media" data-focus="left">
  <img src="product.jpg" alt="Product shot" width="800" height="600">
</div>
```

Available values: `top`, `bottom`, `left`, `right`, `center`.

### Custom focal point

For precise control, use the `--focus-x` and `--focus-y` custom properties:

```html
<div class="hero__background" style="--focus-x: 30%; --focus-y: 20%">
  <img src="group-photo.jpg" alt="Team photo" width="1920" height="1080">
</div>
```

Values are percentages where `0% 0%` is the top-left corner and `100% 100%` is the bottom-right.

---

## Aspect Ratios

Fluid provides `data-aspect` on `.card__media` to enforce consistent image proportions across card grids:

```html
<div class="card__media" data-aspect="square">   <!-- 1:1 -->
<div class="card__media" data-aspect="video">     <!-- 16:9 -->
<div class="card__media" data-aspect="portrait">  <!-- 3:4 -->
<div class="card__media" data-aspect="wide">      <!-- 21:9 -->
```

These work by setting `aspect-ratio` on the container. The image inside fills the space via `object-fit: cover`, and you can pair this with `data-focus` to control what stays visible:

```html
<div class="card__media" data-aspect="square" data-focus="top">
  <picture>
    <source srcset="headshot.avif" type="image/avif">
    <img src="headshot.jpg" alt="Team member" width="800" height="1200">
  </picture>
</div>
```

---

## Orientation-Aware Images

Use `data-orientation` to show different crops or styles based on whether an image is landscape or portrait:

```html
<div class="card__media" data-orientation="landscape">
  <img src="wide-shot.jpg" alt="Landscape view" width="1200" height="800">
</div>

<div class="card__media" data-orientation="portrait">
  <img src="portrait-shot.jpg" alt="Portrait view" width="800" height="1200">
</div>
```

This is useful in gallery layouts where you want to handle mixed-orientation images gracefully rather than forcing everything into one aspect ratio.

---

## Image Protection

The `data-protected` attribute adds friction against casual image downloading. Apply it to any element wrapping an image:

```html
<figure data-protected>
  <img src="artwork.jpg" alt="Original artwork by Jane Doe" width="1200" height="800">
  <figcaption>Original artwork by Jane Doe</figcaption>
</figure>
```

### What it does

- Blocks right-click "Save Image As" by placing a transparent overlay
- Prevents drag-to-desktop via `user-select: none` and `-webkit-user-drag: none`
- Disables pointer events on the image itself

### What it does NOT do

Be honest with your clients and stakeholders: this is a speed bump, not a wall.

- It does not prevent screenshots
- It does not prevent opening dev tools and grabbing the URL
- It does not prevent anyone who is determined

For genuine image protection, consider watermarking, low-resolution previews with server-side full-resolution delivery, or digital rights management services. `data-protected` is appropriate for discouraging casual right-click saving and nothing more.

---

## Stack-Specific Solutions

If you are using Fluid inside a framework or CMS, take advantage of the built-in image optimization each platform provides.

### Astro

Use the built-in `<Image>` component. It handles format conversion, resizing, and generates `srcset` automatically:

```astro
---
import { Image } from 'astro:assets';
import hero from '../assets/hero.jpg';
---
<div class="hero__background" data-focus="top">
  <Image src={hero} alt="Hero image" width={1920} height={1080} format="avif" />
</div>
```

### Next.js

Use `next/image`. It serves optimized formats, handles responsive sizing, and lazy loads by default:

```jsx
import Image from 'next/image';

<div className="card__media" data-aspect="video">
  <Image src="/photo.jpg" alt="Photo" width={800} height={450} />
</div>
```

### WordPress

Install an image optimization plugin. Recommended options:

- **ShortPixel** — converts to AVIF/WebP on upload, serves via `<picture>`
- **Smush** — bulk optimization with lazy loading
- **Imagify** — similar to ShortPixel, integrates with most page builders

These plugins handle format conversion and responsive `srcset` generation without manual markup changes.

### Static Sites (no framework)

If you are building with plain HTML or a simple static site generator, you have two options:

1. **Manual** — Use an image editor or CLI tool like `squoosh-cli` or `sharp-cli` to generate AVIF and WebP variants, then write the `<picture>` markup by hand.
2. **Build script** — Add a script to your build process that converts images automatically. A simple Node.js script using the `sharp` library can batch-convert an entire directory:

```bash
npx sharp-cli --input src/images/*.jpg --output dist/images/ --format avif webp
```

---

## Checklist

Before shipping, run through this list:

- [ ] All images have explicit `width` and `height` attributes
- [ ] All images have descriptive `alt` text (or `alt=""` for purely decorative images)
- [ ] Hero and above-fold images are NOT lazy loaded
- [ ] Below-fold images use `loading="lazy"`
- [ ] AVIF and WebP variants are served via `<picture>` where possible
- [ ] Focal points are set on cropped images so subjects are not cut off
- [ ] Decorative images use `alt=""` and `role="presentation"`
