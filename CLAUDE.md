# CLAUDE.md

**Read the full documentation:** [_docs/_start-here.md](_docs/_start-here.md)

---

## Quick Reference

```bash
npm run serve    # Open examples in browser at localhost:8080
```

## Core Principles

1. **Semantic HTML** - Use meaningful elements, not div soup
2. **CSS Custom Properties** - All values via tokens (`var(--space-5)`)
3. **Logical Properties** - `margin-block`, `padding-inline` (not `-top`, `-left`)
4. **No Build Step** - Works directly in browsers
5. **Progressive Enhancement** - Works without JavaScript

## Layer Order

```css
@layer reset, tokens, base, layouts, components, themes, utilities;
```

## Key Files

| File | Purpose |
|------|---------|
| `src/fluid.css` | Main entry point |
| `src/core/tokens.css` | Design tokens |
| `examples/foundation.html` | Element showcase |
| `examples/components.html` | Component gallery |

---

**Full documentation:** [_docs/_start-here.md](_docs/_start-here.md)
