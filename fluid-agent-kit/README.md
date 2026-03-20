# The Fluid Agent Kit

AI-assisted development support for The Fluid Theme CSS framework.

This directory contains skill files that help AI coding assistants (Claude Code, Gemini, GitHub Copilot, Cursor, etc.) understand Fluid Theme conventions and produce correct code when building sites with the framework.

## How It Works

AI assistants that support project-level instructions will automatically discover and use these files. For others, you can reference them in your prompts or configuration.

### Claude Code

Claude Code reads `CLAUDE.md` at the project root, which points here. No additional setup needed.

### Gemini

Gemini reads `GEMINI.md` at the project root. No additional setup needed.

### Other AI Assistants

Point your assistant to read the files in `fluid-agent-kit/skills/` for framework conventions, or reference `AGENTS.md` at the project root.

## Available Skills

| Skill | File | What It Covers |
|-------|------|----------------|
| **CSS Conventions** | `skills/css-conventions.md` | Layer order, tokens, logical properties, data attributes |
| **UX Rules** | `skills/ux-rules.md` | 12 behavioral rules for interactive components |
| **Accessibility** | `skills/accessibility.md` | HTML, keyboard, motion, touch, color standards |
| **Image Optimization** | `skills/image-optimization.md` | Responsive images, lazy loading, focal points, formats |

## Key Principle

The Fluid Theme uses **semantic HTML and CSS custom properties** — not utility classes. AI assistants should generate clean, semantic markup with `data-` attributes for variants, not class soup.

```html
<!-- Correct: Fluid Theme way -->
<article class="card" data-variant="elevated">
  <img class="card__media" data-aspect="video" data-focus="top"
       src="photo.webp" alt="Description" loading="lazy" width="1920" height="1080">
  <div class="card__content">
    <h3 class="card__title">Title</h3>
  </div>
</article>

<!-- Wrong: utility class approach -->
<div class="flex flex-col rounded-lg shadow-md p-4">
  <img class="w-full h-48 object-cover rounded-t-lg" src="photo.webp">
  <div class="p-4">
    <h3 class="text-lg font-semibold">Title</h3>
  </div>
</div>
```

## Documentation

For full framework documentation, see `_docs/` or visit [thefluidtheme.com](https://thefluidtheme.com).
