# Contributing to The Fluid Theme

Thanks for your interest in contributing! This guide will help you get started.

## How to Contribute

### Reporting Bugs

Use the [bug report template](https://github.com/Agile-Media-Agency/the-fluid-theme/issues/new?template=bug_report.yml) and include:
- Which browser and version you're using
- Which preset/palette/motion style is active
- What you expected vs what happened
- A screenshot or reproduction link if possible

### Suggesting Features

Use the [feature request template](https://github.com/Agile-Media-Agency/the-fluid-theme/issues/new?template=feature_request.yml). Describe the use case — the *why* matters more than the *what*.

### Submitting a Pull Request

1. Fork the repository
2. Create a branch from `main` (`git checkout -b feature/your-feature`)
3. Make your changes
4. Test visually in Chrome, Firefox, and Safari (`npm run serve`)
5. Open a PR against `main`

All PRs require review and approval before merging.

## Development Setup

```bash
git clone https://github.com/Agile-Media-Agency/the-fluid-theme.git
cd the-fluid-theme
npm run serve    # Opens at localhost:8080
```

## Code Guidelines

### CSS Principles

- **Semantic HTML** — use meaningful elements, not div soup
- **CSS Custom Properties** — all values via tokens (`var(--space-5)`)
- **Logical properties** — `margin-block`, `padding-inline` (never `-top`, `-left`)
- **No build step** — everything must work directly in browsers
- **Layer order** — `@layer reset, tokens, base, layouts, components, themes, utilities;`

### What NOT to Do

- Don't use physical properties (`margin-top`, `padding-left`, `width`, `height` in layout)
- Don't add JavaScript dependencies
- Don't use utility-class patterns (this isn't Tailwind)
- Don't change the layer order

### PR Labels

PRs should be labeled to determine the version bump:

| Change | Label |
|--------|-------|
| New component | `minor` |
| New preset/variant | `minor` |
| Bug fix / visual tweak | `patch` |
| Token renamed/removed | `major` |
| Class renamed/removed | `major` |
| HTML structure change | `major` |

## Code of Conduct

This project follows our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold it.

## Questions?

Use [GitHub Discussions](https://github.com/Agile-Media-Agency/the-fluid-theme/discussions) for questions and ideas.
