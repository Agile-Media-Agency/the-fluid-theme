---
description: Run the full brand pipeline to create a complete brand identity from scratch.
---

# /new-brand — Full Brand Pipeline

$ARGUMENTS

## Task

Create a complete brand identity by running the 9-step brand pipeline.

### Prerequisites
- Client name or project name
- Basic understanding of what the business does (or will be discovered in Step 01)

### Steps

1. **Business Discovery** (brand-pipeline skill, Step 01)
   - Interview / brief to capture: what, who, why, how, competitors
   - Output: Discovery document

2. **Brand Voice** (brand-pipeline skill, Step 02)
   - Define personality, tone spectrum, vocabulary rules
   - Output: Voice document

3. **Visual Identity** (brand-pipeline skill, Step 03)
   - Color palette mapped to Fluid Theme tokens
   - Typography selections
   - Logo direction
   - Dark mode behavior
   - Output: Visual identity document

4. **Tech Stack Decision** (brand-pipeline skill, Step 04)
   - Recommend platform, hosting, CMS
   - Default: Astro + Cloudflare Pages unless complexity demands otherwise
   - Output: Tech stack recommendation

5. **Site Architecture** (brand-pipeline skill, Step 05)
   - Use `project-starter` skill checklist to determine pages
   - Define navigation structure and content hierarchy
   - Output: Site map + page checklist

6. **Copy** (brand-pipeline skill, Step 06)
   - Write page-by-page copy following the voice document
   - Follow UX Behavior Spec for all functional copy (buttons, errors, CTAs)
   - Output: Copy deck

7. **Design System CSS** (brand-pipeline skill, Step 07)
   - Map visual identity to Fluid Theme custom properties
   - Create a theme override file or child theme
   - Output: CSS file

8. **Build** (brand-pipeline skill, Step 08)
   - Scaffold project using site architecture
   - Build pages with Fluid Theme components + brand CSS
   - Follow UX Behavior Spec for all interactions

9. **Self-Audit** (brand-pipeline skill, Step 09)
   - Review against all prior deliverables
   - Check UX spec compliance
   - Flag any gaps or inconsistencies

### Usage

```
/new-brand ADA Furniture Co
/new-brand TheFightLife.com
/new-brand [client name] — skip to step 3 (visual identity)
```

### Between Steps

Present deliverables for review before proceeding to the next step. Neil may want to adjust direction at any stage.

### Resume Protocol (for partial runs)

Each step saves its deliverable with a numbered filename:

```
brand/
├── 01-discovery.md
├── 02-voice.md
├── 03-visual-identity.md
├── 04-tech-stack.md
├── 05-architecture.md
├── 06-copy.md
├── 07-design-system.css
└── 09-audit.md
```

When resuming from a specific step:
1. Check the `brand/` directory for existing deliverables
2. Read all completed steps before starting the requested step
3. Skip steps that already have deliverables (unless the user explicitly asks to redo)
4. If a step is missing but later steps exist, flag the gap — don't skip silently
