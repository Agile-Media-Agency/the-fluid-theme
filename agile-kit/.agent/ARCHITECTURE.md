# Agile Kit Architecture

> Custom AI agent system for AGILE LLC — design systems, brand pipelines, and site builds.

---

## Directory Structure

```
.agent/
├── ARCHITECTURE.md          # This file — read first
├── agents/                  # 7 specialist agents
├── skills/                  # 5 knowledge modules
└── workflows/               # 5 slash commands
```

---

## Agents (7)

| Agent | Focus | Skills Loaded | Triggers On |
|-------|-------|---------------|-------------|
| `creative-director` | Orchestration, routing, review | neil-preferences, brand-pipeline, ux-behavior-spec, project-starter | review, direction, brand, strategy, vision, redesign |
| `ux-enforcer` | Interaction rules, consistency, audits | ux-behavior-spec, fluid-theme, neil-preferences | modal, confirm, delete, form, validation, audit, review, accessibility |
| `visual-designer` | Identity, palette, typography | fluid-theme, brand-pipeline, neil-preferences, ux-behavior-spec | palette, color, font, typography, logo, identity, visual |
| `fluid-theme-dev` | CSS framework, components, tokens | fluid-theme, ux-behavior-spec | css, styling, component CSS, token, preset, new component, extend framework |
| `content-writer` | Brand-voice copy, microcopy | brand-pipeline, neil-preferences, ux-behavior-spec | copy, write, headline, tagline, email, blog post, article |
| `site-builder` | Scaffolding, deployment, hosting | fluid-theme, ux-behavior-spec, project-starter, neil-preferences | build site, deploy, scaffold, astro, cloudflare, hosting |
| `wp-converter` | WordPress migration | fluid-theme, project-starter, neil-preferences, ux-behavior-spec | wordpress, migrate, convert, wp, client site |

### Routing Priority

When keywords match multiple agents, route to the most specific:

1. **Framework CSS work** → `fluid-theme-dev` (not ux-enforcer)
2. **Interaction behavior** → `ux-enforcer` (not fluid-theme-dev)
3. **Prose content** → `content-writer` (not ux-enforcer)
4. **Functional copy** (button labels, error messages) → `ux-enforcer` (not content-writer)
5. **Brand identity** → `visual-designer` (not creative-director)
6. **Multi-domain task** → `creative-director` orchestrates

### Orchestration Order (multi-agent tasks)

```
creative-director → site-builder → content-writer → fluid-theme-dev → ux-enforcer
```

Structure before content. Content before styling. Styling before UX audit. UX spec wins all conflicts.

---

## Skills (5)

| Skill | Size | Description | Key Contents |
|-------|------|-------------|-------------|
| `ux-behavior-spec` | 46K | Behavioral rules for all interactive components | 18 sections: destructive actions, action groups, modals, feedback, forms, subscriptions, errors, nav, buttons, loading, responsive, keyboard, tables, search, onboarding, CTAs, page templates, gap tracker |
| `fluid-theme` | 7K | Fluid Theme CSS framework component reference | 18 components, token system, data-attribute API, template list, known gaps |
| `brand-pipeline` | 6K | 9-step brand identity process | Discovery → voice → visual → tech → architecture → copy → CSS → build → audit, with agent mapping |
| `neil-preferences` | 4K | Personal design taste and workflow habits | Visual aesthetic, communication style, code preferences, file conventions, anti-patterns |
| `project-starter` | 4K | Kitchen sink page and flow checklist | Standard pages, standard flows, Fluid Theme template mapping |

### Selective Reading

The `ux-behavior-spec` skill (the largest) includes a selective reading table. Agents should read only the sections relevant to their current task, not the full 18 sections every time. See the top of that skill for the guide.

---

## Workflows (5)

| Command | Description | Primary Agent(s) |
|---------|-------------|-----------------|
| `/new-brand` | Full 9-step brand pipeline | `creative-director` → all agents sequentially |
| `/new-site` | Scaffold and build a new site/app | `site-builder` + `fluid-theme-dev` + `ux-enforcer` |
| `/audit-ux` | Review project against UX Behavior Spec | `ux-enforcer` |
| `/convert-wp` | Migrate WordPress site to modern stack | `wp-converter` → chains to `/new-site` |
| `/new-component` | Add a component to the Fluid Theme framework | `fluid-theme-dev` |

---

## Key Relationships

```
ux-behavior-spec ←── defines rules for ──→ ALL interactive components
fluid-theme      ←── implements rules as ─→ CSS components
brand-pipeline   ←── produces ───────────→ brand CSS that overrides fluid-theme tokens
neil-preferences ←── supplements ────────→ ux-behavior-spec (personal taste beyond the spec)
project-starter  ←── checklist used by ──→ /new-site and /new-brand workflows
```

## Framework Version

This kit was built against **Fluid Theme v0.3.4**. Check the repo's `PROJECT_STATUS.md` for the current version. If the version has changed, the `fluid-theme` skill may reference outdated component APIs.
