# Intelligent Routing

Automatically analyzes user requests and routes them to the correct agent(s). This skill loads for ALL agents and runs BEFORE any task work begins.

## Routing Matrix

| Keywords / Patterns | Primary Agent | Secondary |
|---------------------|--------------|-----------|
| CSS, stylesheet, `@layer`, custom properties | fluid-theme-dev | — |
| tokens, `var(--`, color palette, spacing | fluid-theme-dev | visual-designer |
| component, `.button`, `.card`, `.modal` | fluid-theme-dev | — |
| section, features, testimonials, CTA, footer | fluid-theme-dev | site-builder |
| responsive, mobile, breakpoint, container query | fluid-theme-dev | ux-enforcer |
| dark mode, theme, preset, motion | fluid-theme-dev | visual-designer |
| layout, grid, flex, sidebar, positioning | visual-designer | fluid-theme-dev |
| typography, font, heading, text size | visual-designer | fluid-theme-dev |
| color, palette, accent, contrast | visual-designer | fluid-theme-dev |
| spacing, padding, margin, gap, rhythm | visual-designer | fluid-theme-dev |
| button label, CTA text, headline, copy | content-writer | — |
| microcopy, error message, placeholder, toast text | content-writer | ux-enforcer |
| heading, title, description, tagline | content-writer | — |
| form, input, validation, `aria-invalid` | ux-enforcer | fluid-theme-dev |
| modal, dialog, confirmation, destructive | ux-enforcer | fluid-theme-dev |
| accessibility, a11y, WCAG, screen reader | ux-enforcer | — |
| keyboard, focus, tab order, `focus-visible` | ux-enforcer | fluid-theme-dev |
| `prefers-reduced-motion`, animation safety | ux-enforcer | fluid-theme-dev |
| navigation, breadcrumb, pagination, tabs | ux-enforcer | site-builder |
| new page, template, scaffold, build page | site-builder | fluid-theme-dev |
| hero, section, page structure | site-builder | visual-designer |
| compose, assemble, landing page | site-builder | content-writer |
| brand, identity, logo, personality | creative-director | visual-designer |
| strategy, direction, kickoff, scope | creative-director | — |
| project plan, requirements, goals | creative-director | — |
| WordPress, WP, migrate, convert theme | wp-converter | site-builder |
| audit, review, check, compliance | ux-enforcer | — |
| fix, debug, broken, issue | (context-dependent) | — |
| deploy, publish, ship, release | (use /status workflow) | — |

## Multi-Domain Detection

If a request touches 2+ domains, list all needed agents. Examples:

- "Build a contact page" → site-builder + fluid-theme-dev + content-writer + ux-enforcer
- "Fix the button colors" → fluid-theme-dev (single agent)
- "Add a testimonials section with good copy" → site-builder + content-writer + fluid-theme-dev
- "Audit the pricing page" → ux-enforcer (single agent)

## Ambiguity Resolution

When keywords match multiple agents:
1. If the request is about **code/CSS** → fluid-theme-dev
2. If the request is about **words/labels** → content-writer
3. If the request is about **behavior/interaction** → ux-enforcer
4. If the request is about **visual appearance** → visual-designer
5. If the request is about **page structure** → site-builder

## Socratic Gate

- **Clear request** (specific action, named file/component) → route immediately
- **Vague request** ("make it better", "fix the page", "help with styling") → ask 1-2 clarifying questions:
  1. What specifically needs to change?
  2. Which page/component/section are you referring to?
