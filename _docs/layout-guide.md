# Layout Guide

> Layout utilities for the Fluid Theme CSS framework. All layout utilities live in `src/layouts/positioning.css`.

---

## Layout Philosophy

Fluid uses data attributes on HTML elements to control layout. No CSS classes needed for most layout tasks. This keeps HTML semantic and readable.

## Containers

```html
<div class="container">         <!-- Default max-width: 1280px -->
<div class="container--sm">     <!-- 512px -->
<div class="container--md">     <!-- 768px -->
<div class="container--lg">     <!-- 1024px -->
<div class="container--xl">     <!-- 1280px -->
<div class="container--2xl">    <!-- 1536px -->
```

All containers auto-center and have responsive padding.

## Grid Layouts

### Fixed Column Grids

```html
<div data-grid="2">  <!-- 2 equal columns -->
<div data-grid="3">  <!-- 3 equal columns -->
<div data-grid="4">  <!-- 4 equal columns -->
```

### Responsive Auto-fit Grids

```html
<div data-grid="auto-sm">  <!-- Min 200px per item -->
<div data-grid="auto">     <!-- Min 250px per item -->
<div data-grid="auto-lg">  <!-- Min 300px per item -->
```

These automatically adjust column count based on available space.

### Grid Spanning

```html
<div data-grid="3">
  <div data-span="2">I span 2 columns</div>
  <div>I span 1</div>
</div>
```

### Grid Gaps

```html
<div data-grid="3" data-gap="lg">
```

Gap values: `none`, `sm`, `md`, `lg`, `xl`

## Flexbox Layouts

```html
<div data-flex="row">           <!-- Horizontal -->
<div data-flex="col">           <!-- Vertical -->
<div data-flex="row-reverse">   <!-- Horizontal reversed -->
<div data-flex="col-reverse">   <!-- Vertical reversed -->
```

### Alignment

```html
<div data-flex="row" data-justify="between" data-items="center">
```

- `data-justify`: `start`, `center`, `end`, `between`
- `data-items`: `start`, `center`, `end`

### Wrapping

```html
<div data-flex="row" data-wrap>           <!-- Wrap enabled -->
<div data-flex="row" data-wrap="nowrap">  <!-- No wrap -->
```

### Flex Children

```html
<div data-grow>              <!-- flex-grow: 1 -->
<div data-shrink="0">        <!-- flex-shrink: 0 -->
<div data-basis="half">      <!-- flex-basis: 50% -->
<div data-basis="third">     <!-- flex-basis: 33.333% -->
<div data-basis="quarter">   <!-- flex-basis: 25% -->
```

## Structural Layouts

### Stack (Vertical Rhythm)

```html
<div class="stack">
  <p>First</p>
  <p>Second</p>
  <p>Third</p>
</div>
```

### Cluster (Horizontal Flow)

```html
<div class="cluster">
  <span>Tag 1</span>
  <span>Tag 2</span>
  <span>Tag 3</span>
</div>
```

### Sidebar Layout

```html
<div data-layout="sidebar">
  <aside>Sidebar content</aside>
  <main>Main content</main>
</div>

<div data-layout="sidebar-right">
  <main>Main content</main>
  <aside>Sidebar content</aside>
</div>
```

### Holy Grail Layout

```html
<div data-layout="holy-grail">
  <aside>Left sidebar</aside>
  <main>Main content</main>
  <aside>Right sidebar</aside>
</div>
```

### Dashboard Layout

```html
<div data-layout="dashboard">
  <div>Widget 1</div>
  <div>Widget 2</div>
  <div>Widget 3</div>
  <!-- Auto-fills in a dense grid -->
</div>
```

### Split Layouts

```html
<div data-layout="split">          <!-- 50/50 -->
  <div>Left</div>
  <div>Right</div>
</div>

<div data-layout="split-reverse">  <!-- Right content first visually -->
  <div>Left</div>
  <div>Right</div>
</div>
```

### Centered Content

```html
<div data-layout="center">
  <div>Centered both horizontally and vertically</div>
</div>
```

## Content Width Control

```html
<section data-width="narrow">    <!-- Narrow content -->
<section data-width="default">   <!-- Standard width -->
<section data-width="wide">      <!-- Wider content -->
<section data-width="full">      <!-- Full width, no max -->
```

## Spacing

### Padding

```html
<section data-padding="none">   <!-- No padding -->
<section data-padding="sm">     <!-- Small block padding -->
<section data-padding="md">     <!-- Medium -->
<section data-padding="lg">     <!-- Large -->
<section data-padding="xl">     <!-- Extra large -->

<section data-padding-inline="lg">  <!-- Horizontal padding only -->
```

### Gaps (between grid/flex children)

```html
<div data-grid="3" data-gap="md">
<div data-flex="row" data-gap="sm">
```

## Positioning

```html
<nav data-position="sticky">     <!-- Sticks to top on scroll -->
<div data-position="relative">   <!-- Position relative -->
```

### Z-Index

```html
<div data-z="base">       <!-- 0 -->
<div data-z="raised">     <!-- 1 -->
<div data-z="dropdown">   <!-- 1000 -->
<div data-z="overlay">    <!-- 1200 -->
```

### Overflow

```html
<div data-overflow="hidden">
<div data-overflow="auto">
<div data-overflow="scroll">
```

## Text Alignment

```html
<p data-align="start">Left-aligned (respects RTL)</p>
<p data-align="center">Centered</p>
<p data-align="end">Right-aligned (respects RTL)</p>
```

## Responsive Visibility

```html
<div data-hide="mobile">    <!-- Hidden on small screens -->
<div data-hide="tablet">    <!-- Hidden on medium screens -->
<div data-hide="desktop">   <!-- Hidden on large screens -->
```

## Display Utilities

```html
<div data-display="none">
<div data-display="block">
<div data-display="inline">
<div data-display="inline-flex">
<div data-display="inline-block">
```

## Choosing Grid vs Flexbox

- **Grid** when: equal-sized items, 2D layout, card grids, dashboards
- **Flexbox** when: single-axis alignment, navigation bars, centering, dynamic content that wraps

## Common Layout Recipes

### Centered login page

```html
<main data-layout="center" style="min-height: 100vh">
  <div class="card" data-width="narrow">
    <!-- login form -->
  </div>
</main>
```

### Blog layout with sidebar

```html
<div class="container" data-layout="sidebar">
  <aside>Table of contents, related posts</aside>
  <article>Blog content</article>
</div>
```

### Responsive card grid

```html
<div class="container">
  <div data-grid="auto" data-gap="lg">
    <div class="card">...</div>
    <div class="card">...</div>
    <div class="card">...</div>
  </div>
</div>
```
