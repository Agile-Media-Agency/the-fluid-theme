# Agile Kit — Architecture

> A multi-agent system for building production-quality websites with semantic CSS, physics-based motion, and UX compliance baked in.

## Agent Roster

| Agent | Domain | When to Use |
|-------|--------|-------------|
| `creative-director` | Brand, strategy, project scoping | Kickoff, design direction, final review |
| `ux-enforcer` | Accessibility, interaction patterns | Auditing flows, form behavior, modal patterns |
| `visual-designer` | Layout, typography, color | Visual decisions, preset selection, spacing |
| `fluid-theme-dev` | CSS components, tokens, sections | Building/styling components, fixing CSS |
| `content-writer` | Copy, microcopy, headings, CTAs | Page content, button labels, error messages |
| `site-builder` | HTML templates, page scaffolding | Creating pages, composing sections, routing |
| `wp-converter` | WordPress migration | Converting WP themes to static HTML + Fluid |

## Orchestration Order

For multi-domain tasks, agents execute in this order:
1. **creative-director** — scopes work, selects agents
2. **site-builder** — scaffolds HTML structure
3. **content-writer** — fills copy and microcopy
4. **fluid-theme-dev** — styles with Fluid CSS
5. **visual-designer** — reviews visual hierarchy
6. **ux-enforcer** — audits interactions and accessibility

## Routing Priority

When keywords match multiple agents:

| Pattern | Primary Agent | Why |
|---------|--------------|-----|
| CSS, tokens, components, `@layer` | fluid-theme-dev | Code-level CSS |
| button labels, copy, heading | content-writer | Language, not code |
| layout, spacing, color choice | visual-designer | Visual decisions |
| form validation, modal behavior | ux-enforcer | Interaction patterns |
| new page, scaffold, template | site-builder | Page structure |
| brand, strategy, direction | creative-director | High-level decisions |

## Skill System

Skills are reusable knowledge modules that agents load. Each skill is a directory under `.agent/skills/` containing a `SKILL.md` file.

- **Loaded per-agent**: Each agent's frontmatter lists which skills to load
- **Global rules**: `.agent/rules/core.md` loads for ALL agents automatically
- **Workflows**: `.agent/workflows/` define multi-step processes invokable via slash commands

## Key Conventions

1. **UX Behavior Spec wins all conflicts** — if a design choice conflicts with the spec, the spec wins
2. **Fluid Theme conventions are law** — logical properties, design tokens, `@layer`, semantic HTML
3. **Every change is logged** — CHANGELOG.md gets updated, version gets bumped
4. **No silent edits** — all file modifications are documented
5. **Progressive enhancement** — works without JS, JS enhances
