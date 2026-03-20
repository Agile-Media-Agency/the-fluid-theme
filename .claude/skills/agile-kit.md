# Agile Kit Integration

This project has a multi-agent system in `.agent/`. Read `.agent/ARCHITECTURE.md` for the full map.

## Available Workflows (slash commands)

| Command | What It Does |
|---------|-------------|
| `/new-brand [name]` | Run 9-step brand pipeline |
| `/new-site [description]` | Scaffold new project from templates |
| `/audit-ux` | Check project against UX Behavior Spec |
| `/new-component [name]` | Add component to Fluid Theme |
| `/convert-wp [site]` | Migrate WordPress to modern stack |
| `/orchestrate [task]` | Multi-agent coordination for complex tasks |
| `/brainstorm [topic]` | Explore options before building |
| `/plan [project]` | Create plan file, no code |
| `/enhance [feature]` | Improve existing project |
| `/status` | Project completeness check |
| `/debug [issue]` | Systematic issue resolution |

## Key Files to Read First
1. `.agent/ARCHITECTURE.md` — agent roster, routing, orchestration order
2. `.agent/rules/core.md` — 12 global rules for all agents
3. `.agent/skills/ux-behavior-spec/SKILL.md` — full UX spec (read sections as needed)
4. `.agent/skills/fluid-theme/SKILL.md` — component quick reference

## Orchestration Order (multi-agent tasks)
```
creative-director → site-builder → content-writer → fluid-theme-dev → ux-enforcer
```
Structure before content. Content before styling. Styling before UX audit. UX spec wins all conflicts.
