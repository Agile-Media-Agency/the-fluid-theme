---
name: brand-pipeline
description: The multi-agent brand system for building complete brand identities from scratch. Covers business discovery, brand voice, visual identity, tech stack, site architecture, copy, and design system. Use when creating new brands, defining brand voice, or running any part of the brand development process.
allowed-tools: Read, Glob, Grep
---

# Brand Pipeline — Multi-Agent Brand System

> Build a complete brand identity through a structured sequence of specialized steps.
> Tested on: ADA Furniture Co. (adafurnitureco.com)

## Pipeline Overview

The brand pipeline is a 9-step sequential process. Each step produces a deliverable that feeds the next. Steps can be run individually for existing brands that need specific work.

| Step | Agent | Input | Output |
|------|-------|-------|--------|
| 01 | **Business Discovery** | Client interview / brief | Business model doc, audience profiles, competitive landscape |
| 02 | **Brand Voice** | Discovery doc | Voice definition (tone, personality, vocabulary, do/don't) |
| 03 | **Visual Identity** | Voice + Discovery | Color palette, typography, logo direction, visual mood |
| 04 | **Tech Stack** | All above | Platform recommendation, hosting, CMS decision |
| 05 | **Site Architecture** | All above | Page map, navigation structure, content hierarchy |
| 06 | **Copy** | Voice + Architecture | Page-by-page copy, headlines, CTAs, microcopy |
| 07 | **Design System** | Visual Identity + Components | CSS file mapping brand to Fluid Theme tokens |
| 08 | **Build** | Everything above | Actual site/app |
| 09 | **Audit** | Built site | Self-review against all prior deliverables |

## Step 01: Business Discovery

### What to Capture
- What the business does (one sentence)
- Who they serve (primary and secondary audiences)
- What makes them different (competitive advantage)
- What they value (core principles, not marketing speak)
- Who they compete with (direct and aspirational)
- Business model (how they make money)
- Current state (existing brand assets, if any)

### Output Format
A structured discovery document with clear sections. This becomes the foundation everything else builds on.

## Step 02: Brand Voice

### Voice Definition Framework
Define the brand voice along these dimensions:

**Personality:** 3-5 adjectives that describe how the brand sounds. Example: "Warm. Purposeful. Honest." (ADA Furniture Co.)

**Tone spectrum:** Where does the brand sit on each axis?
- Formal ←→ Casual
- Serious ←→ Playful
- Technical ←→ Accessible
- Reserved ←→ Enthusiastic

**Vocabulary rules:**
- Words to use (brand-aligned language)
- Words to avoid (competitor language, jargon, clichés)
- Sentence length preferences
- Punctuation personality (exclamation marks? em dashes? ellipses?)

### Output Format
A voice document that any content writer (human or AI) can follow to produce on-brand copy.

## Step 03: Visual Identity

### Deliverables
- **Color palette:** Primary, secondary, accent, neutrals. Mapped to Fluid Theme tokens (`--color-primary`, `--accent`, palette slots).
- **Typography:** Heading font, body font, mono font (if needed). Mapped to `--font-heading`, `--font-body`.
- **Logo direction:** Style, weight, icon/wordmark/combination. Not necessarily a final logo — a direction brief.
- **Visual mood:** Reference images, texture, photography style, illustration style.
- **Dark mode behavior:** How the palette adapts (Fluid Theme uses deep palette colors, not just black).

## Step 04–09: Remaining Steps

### Step 04: Tech Stack

**Owned by:** `site-builder` agent

Recommend the platform, hosting, and content management approach based on the business needs discovered in Step 01.

**Default stack:** Astro + Cloudflare Pages, unless complexity demands otherwise.

**Decision factors:**
- Does the site need a blog? → Astro with Markdown content collections
- Does the site need user accounts? → Evaluate: Supabase, or keep it simpler
- Does the client need to edit content? → Headless CMS (Decap, Tina) vs. Markdown in repo vs. static
- Is e-commerce involved? → Shopify or stay WordPress
- How many pages? → Under 20: static HTML + GitHub Pages is fine

**Output:** A short tech stack document stating the choice and why.

### Step 05: Site Architecture

**Owned by:** `site-builder` agent (with `project-starter` skill)

Run the project-starter kitchen sink checklist. Define which pages are included, excluded, or deferred. Map out the navigation hierarchy.

**Output:** Site map (page list with hierarchy) + completed project-starter checklist.

### Step 06: Copy

**Owned by:** `content-writer` agent

Write page-by-page copy following the voice document from Step 02. All functional copy (button labels, error messages, CTAs, empty states) must follow the UX Behavior Spec.

**Output:** Copy deck — one section per page, with headings, body copy, CTAs, and microcopy.

### Step 07: Design System CSS

**Owned by:** `fluid-theme-dev` agent

Map the visual identity from Step 03 to Fluid Theme's token system. This produces a CSS override file.

**Process:**
1. Choose the closest Fluid Theme palette as a base (or create a custom one)
2. Set the brand's primary color → `--color-primary` and related tokens
3. Set accent colors → `--accent` and palette accent slots
4. Set typography → `--font-heading`, `--font-body` (load via `@font-face` or Google Fonts link)
5. Choose a motion preset that matches the brand personality
6. Set dark mode palette adjustments (deep colors, not just black)
7. Override any component-specific tokens if needed

**Output:** A CSS file (e.g., `brand-overrides.css` or `theme-[brandname].css`) that loads after `fluid.css`:
```html
<link rel="stylesheet" href="fluid.css">
<link rel="stylesheet" href="theme-adafurniture.css">
```

### Step 08: Build

**Owned by:** `site-builder` + `fluid-theme-dev` + `ux-enforcer` agents

Scaffold the project using the architecture from Step 05. Build pages with Fluid Theme components + the brand CSS from Step 07. Apply copy from Step 06. Follow UX Behavior Spec for all interactions.

### Step 09: Self-Audit

**Owned by:** `ux-enforcer` agent (triggers `/audit-ux` workflow)

Review the built site against all prior deliverables:
- Does the site match the brand voice? (Compare against Step 02)
- Does the visual identity match? (Compare against Step 03)
- Are all pages from the architecture present? (Compare against Step 05)
- Is the copy correct? (Compare against Step 06)
- Does it pass the UX Behavior Spec audit? (Run `/audit-ux`)

## Agent Mapping

| Pipeline Step | Kit Agent | Skills Loaded |
|--------------|-----------|---------------|
| 01 Business Discovery | `creative-director` | `brand-pipeline`, `neil-preferences` |
| 02 Brand Voice | `content-writer` | `brand-pipeline`, `neil-preferences` |
| 03 Visual Identity | `visual-designer` | `brand-pipeline`, `fluid-theme` |
| 04 Tech Stack | `site-builder` | `project-starter` |
| 05 Site Architecture | `site-builder` | `project-starter` |
| 06 Copy | `content-writer` | `brand-pipeline`, `ux-behavior-spec` |
| 07 Design System CSS | `fluid-theme-dev` | `fluid-theme`, `brand-pipeline` |
| 08 Build | `site-builder` + `fluid-theme-dev` + `ux-enforcer` | all |
| 09 Audit | `ux-enforcer` | `ux-behavior-spec` |

## Running the Pipeline

### Full Pipeline (New Brand)
```
/new-brand [client name]
```
Runs all 9 steps sequentially, producing deliverables at each stage.

### Partial Pipeline (Existing Brand)
Run individual steps when a brand exists but needs specific work:
- "Define the brand voice for [brand]" → Step 02 only
- "Create a visual identity for [brand]" → Step 03 only
- "Write copy for [brand]'s about page" → Step 06, needs voice doc as input

## Quality Standard

The ADA Furniture Co. pipeline produced: brand voice ("Warm. Purposeful. Honest."), full visual identity, tech stack recommendation, site architecture, page copy, and a design system CSS file — followed by a self-audit. This is the benchmark.
