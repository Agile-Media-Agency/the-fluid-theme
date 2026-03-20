# CLAUDE.md

> **Fluid Framework** — A modern, semantic CSS design system built on physics principles, not utility classes.

## Before Doing Anything

1. Read `.claude/skills/` — 4 skill files load automatically (CSS conventions, UX rules, accessibility, Agile Kit reference)
2. Read `.agent/ARCHITECTURE.md` — the multi-agent system with 7 agents, 7 skills, 11 workflows
3. Read `.agent/rules/core.md` — 12 non-negotiable rules

## Quick Reference

```bash
npm run serve    # Open examples in browser at localhost:8080
```

## What This Is

A CSS framework that proves modern CSS can replace the utility-class approach of Tailwind/Bootstrap:

- **Semantic HTML** over `<div class="flex flex-col p-4">` soup
- **CSS Custom Properties** for runtime theming (no rebuild needed)
- **Complete presets** that change typography, colors, motion, AND layout
- **Dark mode uses deep palette colors**, not just black
- **No build step** — link one CSS file and go

## Core Principles

1. **Semantic HTML** — Use meaningful elements, not div soup
2. **CSS Custom Properties** — All values via tokens (`var(--space-5)`)
3. **Logical Properties** — `margin-block`, `padding-inline` (not `-top`, `-left`)
4. **No Build Step** — Works directly in browsers
5. **Progressive Enhancement** — Works without JavaScript
6. **Presets are complete experiences** — Not just color swaps
7. **Accessibility is non-negotiable** — Connected to disabled and autism communities

## Layer Order

```css
@layer reset, tokens, base, layouts, components, themes, utilities;
```

## Key Files

| File | Purpose |
|------|---------|
| `src/fluid.css` | Main entry point (imports everything) |
| `src/core/tokens.css` | Design tokens, palettes, presets |
| `src/components/` | 23 component CSS files |
| `src/sections/` | 6 section CSS files |
| `templates/` | 18 HTML templates |
| `examples/` | Live component demos |
| `_docs/UX-BEHAVIOR-SPEC.md` | UX behavioral rules (18 sections) |
| `.agent/` | Agile Kit multi-agent system |
| `.claude/skills/` | Claude Code skill files |

## Agent System (.agent/)

This project has a multi-agent system. See `.agent/ARCHITECTURE.md` for details.

**Key workflows:**
- `/audit-ux` — Check project against UX Behavior Spec
- `/new-component [name]` — Add component following all conventions
- `/enhance [feature]` — Improve existing functionality
- `/debug [issue]` — Systematic issue resolution
- `/status` — Project completeness check

## UX Behavior Spec

Full spec at `_docs/UX-BEHAVIOR-SPEC.md`. Quick reference at `.claude/skills/ux-rules.md`.

**The non-negotiables:**
- Every destructive action → confirmation modal with specific title and consequence body
- Every user action → visible feedback (toast, alert, or state change)
- Every button → specific label ("Save Changes" not "Submit")
- Every pattern → consistent across all screens (search and update all instances)
- Every interactive element → keyboard accessible with visible focus
- Every animation → respects `prefers-reduced-motion`

## Documentation

| Document | What It Covers |
|----------|----------------|
| [DEVELOPMENT.md](_docs/DEVELOPMENT.md) | Master guide — read first |
| [UX-BEHAVIOR-SPEC.md](_docs/UX-BEHAVIOR-SPEC.md) | Behavioral rules — 18 sections |
| [architecture.md](_docs/architecture.md) | Technical decisions |
| [reference/components.md](_docs/reference/components.md) | Component API |
| [reference/tokens.md](_docs/reference/tokens.md) | Design token reference |
| [UX-AUDIT-REPORT.md](_docs/UX-AUDIT-REPORT.md) | Latest audit findings |

## Version

**Current: 0.3.4** — Update in package.json, PROJECT_STATUS.md, CHANGELOG.md, and version badges on every session that modifies files.
