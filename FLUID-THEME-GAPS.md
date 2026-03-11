# Fluid Theme — Component Gaps Found During AI Setup Sunday Build

Building the AI Setup Sunday landing page on The Fluid Theme revealed 7 missing components/patterns that would make the framework more complete for marketing/landing pages. Each gap includes proposed CSS that follows Fluid Theme conventions.

---

## Gap 1: Badge Component

**What's missing:** No `.badge` class. The pricing template uses inline styles for "Most Popular" badges. Badges are needed everywhere — pricing tiers, feature flags, status indicators.

**Proposed file:** `src/components/badge.css`

```css
@layer components {
  .badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-1);
    padding: var(--space-1) var(--space-3);
    font-size: var(--font-size-xs);
    font-weight: var(--weight-semibold);
    line-height: var(--leading-tight);
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;
    border-radius: var(--radius-full);
    white-space: nowrap;

    /* Default: accent-tinted */
    color: var(--accent);
    background: var(--accent-subtle);
  }

  /* Variants */
  .badge[data-variant="filled"] {
    color: var(--white);
    background: var(--accent);
  }

  .badge[data-variant="outline"] {
    background: transparent;
    border: var(--border-width) solid var(--accent);
  }

  /* Status colors */
  .badge[data-status="good"] {
    color: var(--color-success);
    background: var(--color-success-subtle);
  }

  .badge[data-status="warning"] {
    color: var(--color-warning);
    background: var(--color-warning-subtle);
  }

  .badge[data-status="error"] {
    color: var(--color-error);
    background: var(--color-error-subtle);
  }

  /* Sizes */
  .badge[data-size="sm"] {
    padding: var(--space-0-5) var(--space-2);
    font-size: 0.6875rem;
  }

  .badge[data-size="lg"] {
    padding: var(--space-2) var(--space-4);
    font-size: var(--font-size-sm);
  }
}
```

---

## Gap 2: Sticky Header Behavior

**What's missing:** The nav component exists but has no scroll-triggered sticky behavior. Most marketing pages need a header that appears on scroll.

**Proposed addition to:** `src/components/nav.css` (or new `src/behaviors/sticky-header.css`)

```css
@layer components {
  /* Sticky header - hidden until scrolled */
  .nav[data-sticky] {
    position: fixed;
    inset-block-start: 0;
    inset-inline: 0;
    z-index: var(--z-sticky, 100);
    transform: translateY(-100%);
    transition: transform var(--duration-normal) var(--ease-settle);
    background: var(--color-surface-raised);
    border-block-end: var(--border-width) solid var(--color-border-subtle);
    box-shadow: var(--shadow-sm);
  }

  .nav[data-sticky].is-visible {
    transform: translateY(0);
  }
}
```

**Required JS (minimal):**
```js
const nav = document.querySelector('.nav[data-sticky]');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > 300) nav.classList.add('is-visible');
  else nav.classList.remove('is-visible');
  lastScroll = current;
});
```

---

## Gap 3: Mobile Sticky CTA Bar

**What's missing:** No component for a fixed-bottom mobile CTA bar. Essential for mobile conversion on landing pages.

**Proposed file:** `src/components/sticky-cta.css`

```css
@layer components {
  .sticky-cta {
    position: fixed;
    inset-block-end: 0;
    inset-inline: 0;
    z-index: var(--z-sticky, 100);
    padding: var(--space-3) var(--space-4);
    background: var(--accent);
    box-shadow: 0 -4px 12px oklch(0% 0 0 / 0.15);
    display: none; /* Hidden by default */
  }

  .sticky-cta.is-visible {
    display: block;
  }

  /* Only show on mobile */
  @media (min-width: 48rem) {
    .sticky-cta {
      display: none !important;
    }
  }

  .sticky-cta button,
  .sticky-cta .button {
    inline-size: 100%;
  }
}
```

---

## Gap 4: Countdown Timer Component

**What's missing:** No countdown/timer display component. Useful for events, launches, limited offers.

**Proposed file:** `src/components/countdown.css`

```css
@layer components {
  .countdown {
    display: flex;
    justify-content: center;
    gap: var(--space-4);
  }

  .countdown__unit {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-1);
  }

  .countdown__value {
    font-size: var(--font-size-3xl);
    font-weight: var(--weight-bold);
    line-height: var(--leading-none);
    font-variant-numeric: tabular-nums;
    min-inline-size: 2.5ch;
    text-align: center;
  }

  .countdown__label {
    font-size: var(--font-size-xs);
    color: var(--color-text-muted);
    text-transform: uppercase;
    letter-spacing: var(--tracking-wider);
  }

  /* Separator between units */
  .countdown__separator {
    font-size: var(--font-size-2xl);
    font-weight: var(--weight-bold);
    color: var(--color-text-muted);
    align-self: flex-start;
    padding-block-start: var(--space-1);
  }

  /* Compact variant */
  .countdown[data-size="sm"] .countdown__value {
    font-size: var(--font-size-xl);
  }

  .countdown[data-size="sm"] .countdown__label {
    font-size: 0.625rem;
  }
}
```

---

## Gap 5: Testimonial Pattern

**What's missing:** Cards exist, but no testimonial-specific variant with star ratings, attribution, and quote styling.

**Proposed addition to:** `src/components/card.css`

```css
@layer components {
  /* Testimonial card */
  .card[data-type="testimonial"] .card__content {
    gap: var(--space-4);
  }

  .card[data-type="testimonial"] .card__rating {
    display: flex;
    gap: var(--space-0-5);
    color: oklch(70% 0.18 70); /* warm gold */
  }

  .card[data-type="testimonial"] .card__quote {
    font-style: italic;
    font-size: var(--font-size-base);
    line-height: var(--leading-relaxed);
    color: var(--color-text);
  }

  .card[data-type="testimonial"] .card__quote::before {
    content: "\201C"; /* opening curly quote */
    font-size: var(--font-size-3xl);
    line-height: 0;
    vertical-align: -0.35em;
    color: var(--accent);
    margin-inline-end: var(--space-1);
  }

  .card[data-type="testimonial"] .card__attribution {
    font-size: var(--font-size-sm);
  }

  .card[data-type="testimonial"] .card__author {
    font-weight: var(--weight-semibold);
    color: var(--color-text);
  }

  .card[data-type="testimonial"] .card__role {
    color: var(--color-text-muted);
  }
}
```

---

## Gap 6: Social Proof Bar

**What's missing:** No component for a horizontal trust/social proof bar (logos, metrics, endorsements).

**Proposed file:** `src/components/proof-bar.css`

```css
@layer components {
  .proof-bar {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: var(--space-6);
    padding: var(--space-4) var(--space-5);
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    border-block: var(--border-width) solid var(--color-border-subtle);
  }

  .proof-bar__item {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    white-space: nowrap;
  }

  .proof-bar__value {
    font-weight: var(--weight-bold);
    color: var(--color-text);
  }

  /* Variant: on dark backgrounds */
  .proof-bar[data-theme="dark"] {
    color: oklch(80% 0 0);
    border-color: oklch(100% 0 0 / 0.1);
  }

  .proof-bar[data-theme="dark"] .proof-bar__value {
    color: var(--white);
  }
}
```

---

## Gap 7: Pricing-Specific Card Enhancements

**What's missing:** The pricing template works but relies on inline styles for the "popular" card border highlight and badge positioning. Should be a proper variant.

**Proposed addition to:** `src/components/card.css`

```css
@layer components {
  /* Pricing card */
  .card[data-type="pricing"] {
    text-align: center;
    overflow: visible; /* Allow badge to overflow */
    position: relative;
  }

  .card[data-type="pricing"] .card__price {
    font-size: var(--font-size-4xl);
    font-weight: var(--weight-bold);
    line-height: var(--leading-none);
    margin-block-end: var(--space-1);
  }

  .card[data-type="pricing"] .card__price-period {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    font-weight: var(--weight-normal);
  }

  /* Featured/popular pricing card */
  .card[data-type="pricing"][data-featured] {
    border: 2px solid var(--accent);
    transform: scale(1.03);
  }

  .card[data-type="pricing"][data-featured] > .badge {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 50%;
    transform: translate(-50%, -50%);
  }

  /* Pricing feature list */
  .card[data-type="pricing"] .card__features {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: start;
  }

  .card[data-type="pricing"] .card__features li {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding-block: var(--space-2);
    border-block-end: var(--border-width) solid var(--color-border-subtle);
  }

  .card[data-type="pricing"] .card__features li:last-child {
    border-block-end: none;
  }
}
```

---

## Summary

| Gap | Component | Priority | Effort |
|-----|-----------|----------|--------|
| 1 | Badge | High | Small (30 lines) |
| 2 | Sticky Header behavior | High | Small (15 lines CSS + 8 lines JS) |
| 3 | Mobile Sticky CTA | Medium | Small (20 lines) |
| 4 | Countdown Timer | Medium | Small (40 lines) |
| 5 | Testimonial Card variant | Medium | Small (30 lines) |
| 6 | Social Proof Bar | Low | Small (25 lines) |
| 7 | Pricing Card enhancements | High | Small (35 lines) |

Total: ~195 lines of CSS across 4 new files and 2 additions to existing files. All follow Fluid Theme conventions (OKLCH, logical properties, data attributes, layer architecture, motion-theme awareness).
