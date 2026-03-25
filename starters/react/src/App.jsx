import { useState } from 'react'

const THEMES = ['light', 'dark']
const PALETTES = ['fluid', 'morandi', 'bold', 'pastel', 'earth', 'mono', '80s', 'matrix', 'subtle', 'tsunami']
const PRESETS = ['still', 'serene', 'stream', 'flowing', 'cascade', 'rapids', 'tsunami']

const FEATURES = [
  {
    title: 'One Import',
    body: "import '@fluid-theme/core' in main.jsx. Done. 23 components, 7 presets, 10 palettes — instantly available.",
  },
  {
    title: 'CSS Custom Properties',
    body: 'Runtime theming via var(--token). Switch presets, palettes, or dark mode without rebuilding anything.',
  },
  {
    title: 'data-* Variants',
    body: 'data-variant="outline" not className="btn btn--outline". Cleaner JSX, zero className churn.',
  },
  {
    title: 'Complete Presets',
    body: 'Each preset changes fonts, radius, shadows, spacing, and color together — a full design personality, not a timing tweak.',
  },
  {
    title: 'Accessible by Default',
    body: 'Native HTML elements. Focus-visible. Reduced motion support. ARIA-ready. No extra libraries needed.',
  },
  {
    title: 'Framework Agnostic',
    body: 'The same CSS works in React, Vue, Svelte, or plain HTML. Components are HTML patterns, not JSX components.',
  },
]

export default function App() {
  const [theme, setTheme] = useState('light')
  const [palette, setPalette] = useState('fluid')
  const [preset, setPreset] = useState('flowing')

  function apply(key, value) {
    document.documentElement.setAttribute(`data-${key}`, value)
    if (key === 'theme') setTheme(value)
    if (key === 'palette') setPalette(value)
    if (key === 'preset') setPreset(value)
  }

  return (
    <>
      {/* Navigation */}
      <header className="nav" data-sticky="true">
        <nav className="nav__container" aria-label="Main navigation">
          <span className="nav__brand">Fluid + React</span>
          <ul className="nav__links" role="list">
            <li><a href="#features" className="nav__link">Features</a></li>
            <li><a href="#theming" className="nav__link">Live Demo</a></li>
            <li><a href="#components" className="nav__link">Components</a></li>
          </ul>
          <div className="nav__actions">
            <a
              href="https://thefluidtheme.com"
              className="button"
              data-size="sm"
              data-variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </a>
            <a
              href="https://www.npmjs.com/package/@fluid-theme/core"
              className="button"
              data-size="sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              npm install
            </a>
          </div>
        </nav>
      </header>

      <main>

        {/* Hero */}
        <section className="hero" data-layout="center" data-padding="xl">
          <div className="hero__content" data-layout="stack" data-gap="md">
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              @fluid-theme/core + React
            </span>
            <h1 className="hero__headline">Beautiful UIs<br />Without the Boilerplate</h1>
            <p className="hero__subheadline" style={{ maxInlineSize: '52ch', marginInline: 'auto' }}>
              One import. Semantic HTML. Runtime theming via data attributes.
              No build step, no utility classes, no framework lock-in.
            </p>
            <div className="hero__actions" style={{ justifyContent: 'center' }}>
              <a href="#theming" className="button" data-size="lg">Try Live Theming</a>
              <a href="#features" className="button" data-variant="outline" data-size="lg">See Features</a>
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-6)', justifyContent: 'center', flexWrap: 'wrap', paddingBlockStart: 'var(--space-4)' }}>
              {['Zero dependencies', 'Works in any framework', 'Accessible by default', '7 visual presets'].map(item => (
                <span key={item} style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>✓ {item}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="section" data-padding="xl" data-theme="subtle">
          <div data-layout="center" data-width="wide">
            <div style={{ textAlign: 'center', marginBlockEnd: 'var(--space-12)' }}>
              <h2 style={{ marginBlockEnd: 'var(--space-3)' }}>Built Different</h2>
              <p style={{ color: 'var(--color-text-muted)', maxInlineSize: '48ch', marginInline: 'auto' }}>
                Fluid Theme is pure CSS with a clear philosophy: semantic HTML should be enough.
              </p>
            </div>
            <div className="grid" style={{ '--grid-min': '280px', gap: 'var(--space-6)' }}>
              {FEATURES.map(({ title, body }) => (
                <article className="card" data-variant="elevated" key={title}>
                  <div className="card__body">
                    <h3 style={{ marginBlockEnd: 'var(--space-2)' }}>{title}</h3>
                    <p style={{ color: 'var(--color-text-muted)' }}>{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Live Theming Demo */}
        <section id="theming" className="section" data-padding="xl">
          <div data-layout="center" data-width="wide">
            <div style={{ textAlign: 'center', marginBlockEnd: 'var(--space-10)' }}>
              <h2 style={{ marginBlockEnd: 'var(--space-3)' }}>Live Theming</h2>
              <p style={{ color: 'var(--color-text-muted)', maxInlineSize: '50ch', marginInline: 'auto' }}>
                React state drives <code>data-*</code> attributes on the <code>html</code> element. No CSS-in-JS. No rebuild.
              </p>
            </div>

            <div className="card" data-variant="elevated" style={{ marginBlockEnd: 'var(--space-6)' }}>
              <div className="card__body" style={{ display: 'grid', gap: 'var(--space-6)', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>

                <div>
                  <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, marginBlockEnd: 'var(--space-3)', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Theme
                  </p>
                  <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                    {THEMES.map(t => (
                      <button
                        key={t}
                        className="button"
                        data-variant={theme === t ? 'primary' : 'outline'}
                        data-size="sm"
                        onClick={() => apply('theme', t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, marginBlockEnd: 'var(--space-3)', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Preset
                  </p>
                  <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                    {PRESETS.map(p => (
                      <button
                        key={p}
                        className="button"
                        data-variant={preset === p ? 'primary' : 'outline'}
                        data-size="sm"
                        onClick={() => apply('preset', p)}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, marginBlockEnd: 'var(--space-3)', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Palette
                  </p>
                  <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                    {PALETTES.map(p => (
                      <button
                        key={p}
                        className="button"
                        data-variant={palette === p ? 'primary' : 'outline'}
                        data-size="sm"
                        onClick={() => apply('palette', p)}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            <div className="alert" data-variant="info" role="status">
              <strong>Active config:</strong> data-theme=&quot;{theme}&quot; data-preset=&quot;{preset}&quot; data-palette=&quot;{palette}&quot;
            </div>
          </div>
        </section>

        {/* Components showcase */}
        <section id="components" className="section" data-padding="xl" data-theme="subtle">
          <div data-layout="center" data-width="wide">
            <div style={{ textAlign: 'center', marginBlockEnd: 'var(--space-12)' }}>
              <h2 style={{ marginBlockEnd: 'var(--space-3)' }}>Everything You Need</h2>
              <p style={{ color: 'var(--color-text-muted)', maxInlineSize: '46ch', marginInline: 'auto' }}>
                23 components. All responsive. All accessible. All styled by the active preset.
              </p>
            </div>

            {/* Buttons */}
            <div className="card" style={{ marginBlockEnd: 'var(--space-4)' }}>
              <div className="card__body">
                <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text-muted)', marginBlockEnd: 'var(--space-4)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Buttons
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', alignItems: 'center' }}>
                  <button>Primary</button>
                  <button data-variant="secondary">Secondary</button>
                  <button data-variant="outline">Outline</button>
                  <button data-variant="ghost">Ghost</button>
                  <button data-variant="danger">Delete</button>
                  <button disabled>Disabled</button>
                </div>
              </div>
            </div>

            {/* Alerts */}
            <div style={{ display: 'grid', gap: 'var(--space-3)', marginBlockEnd: 'var(--space-4)' }}>
              <div className="alert" data-variant="success" role="status"><strong>Deployed:</strong> Your site is live.</div>
              <div className="alert" data-variant="warning" role="alert"><strong>Note:</strong> This changes all users&apos; preferences.</div>
              <div className="alert" data-variant="error" role="alert"><strong>Error:</strong> Failed to save. Try again.</div>
            </div>

            {/* Badges */}
            <div className="card">
              <div className="card__body">
                <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text-muted)', marginBlockEnd: 'var(--space-4)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Badges &amp; Chips
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', alignItems: 'center' }}>
                  <span className="badge">Default</span>
                  <span className="badge" data-variant="success">Live</span>
                  <span className="badge" data-variant="warning">Beta</span>
                  <span className="badge" data-variant="error">Deprecated</span>
                  <span className="badge" data-variant="info">New</span>
                  <span className="chip">React</span>
                  <span className="chip">Vue</span>
                  <span className="chip">Svelte</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer" data-theme="dark">
        <div className="footer__container">
          <div className="footer__brand">
            <span className="footer__logo">Fluid + React</span>
            <p className="footer__tagline">@fluid-theme/core React starter</p>
          </div>
          <nav className="footer__nav" aria-label="Footer navigation">
            <ul className="footer__links" role="list">
              <li><a href="https://thefluidtheme.com" className="footer__link" target="_blank" rel="noopener noreferrer">Docs</a></li>
              <li><a href="https://github.com/Agile-Media-Agency/the-fluid-theme" className="footer__link" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.npmjs.com/package/@fluid-theme/core" className="footer__link" target="_blank" rel="noopener noreferrer">npm</a></li>
            </ul>
          </nav>
        </div>
        <div className="footer__bottom">
          <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>
            Built with{' '}
            <a href="https://thefluidtheme.com" className="footer__link" target="_blank" rel="noopener noreferrer">
              Fluid Theme
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}
