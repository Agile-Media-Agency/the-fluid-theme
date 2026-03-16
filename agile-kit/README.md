# Agile Kit

> AI Agent templates for AGILE LLC projects — design systems, brand pipelines, and site builds.

Custom `.agent` configuration for Antigravity, designed for creative direction and product development workflows using The Fluid Theme framework.

## Quick Setup

Copy the `.agent` folder into any project repo:

```bash
cp -r .agent /path/to/your-project/
```

Or symlink for shared use across projects:

```bash
ln -s /path/to/agile-kit/.agent /path/to/your-project/.agent
```

## What's Included

| Component | Count | Description |
|-----------|-------|-------------|
| **Agents** | 7 | Specialist personas for design, UX, content, site building |
| **Skills** | 5 | Domain knowledge modules (UX spec, Fluid Theme, brand pipeline) |
| **Workflows** | 5 | Slash command procedures for common project types |

## Architecture

```
.agent/
├── agents/              # WHO does the work
│   ├── creative-director.md    # Routes everything, you in agent form
│   ├── ux-enforcer.md          # Behavioral rules, interaction patterns
│   ├── visual-designer.md      # Identity, palette, typography, layout
│   ├── fluid-theme-dev.md      # Knows the Fluid Theme component APIs
│   ├── content-writer.md       # Brand voice aware copywriting
│   ├── site-builder.md         # Astro, Cloudflare, GitHub Pages, static
│   └── wp-converter.md         # WordPress to modern stack migrations
│
├── skills/              # WHAT they know
│   ├── ux-behavior-spec/       # The UX behavioral rules layer
│   ├── fluid-theme/            # Fluid Theme component reference + conventions
│   ├── brand-pipeline/         # The 9-agent brand system process
│   ├── neil-preferences/       # Design taste, formatting, things you always correct
│   └── project-starter/        # Kitchen sink page/flow checklist
│
└── workflows/           # HOW work gets done
    ├── new-brand.md            # /new-brand — full brand pipeline
    ├── new-site.md             # /new-site — scaffold from templates + UX spec
    ├── audit-ux.md             # /audit-ux — check project against behavior spec
    ├── convert-wp.md           # /convert-wp — WordPress migration
    └── new-component.md        # /new-component — add to Fluid Theme
```

## How It Works

1. You make a request in Antigravity
2. The system reads agent descriptions and routes to the right specialist
3. That agent loads its linked skills automatically
4. Skills provide the rules and knowledge — no re-explaining
5. The agent does the work following your established patterns

## Relationship to The Fluid Theme

This kit assumes Fluid Theme is the default CSS framework. The `fluid-theme` skill contains the actual component APIs. The `ux-behavior-spec` skill contains the behavioral rules for using those components. Together, they mean any agent building UI already knows your conventions.

When a project uses a different framework (Tailwind, vanilla CSS), agents follow the behavioral rules from `ux-behavior-spec` and adapt the implementation. The rules are framework-agnostic; the Fluid Theme references are the default implementation.

## Customization

- **Add a new agent:** Create `.agent/agents/name.md` with frontmatter
- **Add a new skill:** Create `.agent/skills/name/SKILL.md`
- **Add a new workflow:** Create `.agent/workflows/name.md`
- **Update UX rules:** Edit `.agent/skills/ux-behavior-spec/SKILL.md`
