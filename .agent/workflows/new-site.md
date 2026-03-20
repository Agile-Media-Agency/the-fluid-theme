---
description: Scaffold and build a new site or web app from templates with UX spec enforcement.
---

# /new-site — Scaffold New Project

$ARGUMENTS

## Task

Create a new website or web application with proper structure, UX compliance, and Fluid Theme integration.

### Steps

1. **Project Scoping**
   - Determine project type (marketing site, blog, app, portfolio, etc.)
   - Choose tech stack (default: Astro + Cloudflare Pages)
   - Identify which domain to use

2. **Page Checklist** (load `project-starter` skill)
   - Run through the full kitchen sink checklist
   - Mark each page/flow as Include / Not Needed / Deferred
   - Document decisions

3. **Scaffold Structure**
   - Create project directory and file structure
   - Set up Fluid Theme CSS (link or install)
   - Create page files from Fluid Theme templates where available
   - Set up routing and navigation

4. **Build Pages** (load `fluid-theme` + `ux-behavior-spec` skills)
   - Build each page using Fluid Theme components
   - Follow UX Behavior Spec for ALL interactive elements
   - Check `neil-preferences` skill for known corrections to avoid

5. **Flow Implementation**
   - Implement all documented flows (auth, forms, search, etc.)
   - Each flow follows the UX spec patterns

6. **Review**
   - Run `/audit-ux` to verify spec compliance
   - Lighthouse audit (target: 100 all categories)
   - Test all flows end-to-end

### Usage

```
/new-site marketing page for TheFightLife.com
/new-site blog with Astro for TheEasyKeto.com
/new-site web app dashboard
```

### If Brand Exists
Check for existing brand documents (voice, visual identity, design system CSS). If they exist, apply them. If not, ask whether to run `/new-brand` first or build with defaults.
