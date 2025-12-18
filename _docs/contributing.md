# Contributing to The Fluid Theme Framework

Thank you for considering contributing to this project! After 32 years in the industry, I've learned that the best projects come from collaboration.

## Project Philosophy

Before contributing, understand our core beliefs:
- **Semantic HTML over div soup**: Use the right element for the job
- **Modern CSS over JavaScript**: If CSS can do it, don't use JS
- **Progressive enhancement**: Works without JS, better with it
- **No build steps**: Should work directly in browsers
- **Simplicity over features**: Better to do less, but do it well

## How to Contribute

### Reporting Issues
1. Check if the issue already exists
2. Include browser version and OS
3. Provide a minimal reproduction (CodePen or similar)
4. Describe expected vs actual behavior

### Suggesting Features
1. Explain the problem it solves
2. Consider if it aligns with our philosophy
3. Propose implementation approach
4. Be open to alternative solutions

### Submitting Code

#### Setup
```bash
# Clone the repo
git clone [repo-url]
cd the-fluid-theme-v2c

# No npm install needed! Just open examples/foundation.html
```

#### CSS Guidelines
- Use CSS layers appropriately
- All values must use custom properties
- Use logical properties (block/inline)
- Test in light and dark modes
- Ensure keyboard navigation works
- Check with prefers-reduced-motion

#### JavaScript Guidelines
- Web Components only (no frameworks)
- Progressive enhancement required
- Must work without JavaScript
- No global event listeners
- Use semantic custom element names

#### Git Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Test thoroughly (visual testing)
5. Commit with clear messages
6. Push to your fork
7. Open a Pull Request

#### Commit Messages
Follow conventional commits:
```
feat: add new component
fix: correct spacing issue
docs: update README
style: format code
refactor: restructure CSS layers
test: add visual test
chore: update dependencies
```

## Testing

Since we don't use build tools, testing is visual:
1. Open `examples/foundation.html` in multiple browsers
2. Test responsive behavior (resize window)
3. Test with keyboard only
4. Test with screen reader if possible
5. Toggle dark mode
6. Enable high contrast mode
7. Test with zoom (up to 200%)

## Code Review Process

Your PR will be reviewed for:
- Alignment with project philosophy
- Code quality and consistency
- Browser compatibility
- Accessibility compliance
- Performance impact
- Documentation completeness

## What We're Looking For

### High Priority
- Accessibility improvements
- Performance optimizations
- Component implementations
- Theme variations
- Documentation improvements

### Low Priority
- Build tool additions
- Legacy browser support
- Utility class systems
- JavaScript framework integrations

## Questions?

If you're unsure about anything, open an issue for discussion before spending time on implementation. We value your time and want to ensure alignment.

## Recognition

All contributors will be recognized in the README. Your contributions matter, whether it's code, documentation, design, or ideas.

## Code of Conduct

Be respectful, inclusive, and constructive. We're all here to make web development better. No patience for:
- Dismissive attitudes
- Gatekeeping
- Framework wars
- "Well, actually..." responses

We're building something better together. Let's keep it positive and productive.

---

*"After 32 years of overcomplicated frameworks, let's make something we actually enjoy using."*
