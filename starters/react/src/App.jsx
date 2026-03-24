import { useState } from 'react'

const THEMES = ['light', 'dark']
const PALETTES = ['fluid', 'morandi', 'bold', 'pastel', 'earth', 'mono', '80s', 'matrix', 'subtle', 'tsunami']
const MOTIONS = ['still', 'serene', 'stream', 'flowing', 'cascade', 'rapids', 'tsunami']

export default function App() {
  const [theme, setTheme] = useState('light')
  const [palette, setPalette] = useState('fluid')
  const [motion, setMotion] = useState('flowing')

  function apply(key, value) {
    document.documentElement.setAttribute(`data-${key}`, value)
    if (key === 'theme') setTheme(value)
    if (key === 'palette') setPalette(value)
    if (key === 'motion') setMotion(value)
  }

  return (
    <>
      {/* Navigation */}
      <header className="nav" data-sticky="true">
        <nav className="nav__container" aria-label="Main navigation">
          <span className="nav__brand">Fluid + React</span>
          <ul className="nav__links" role="list">
            <li><a href="#features" className="nav__link">Features</a></li>
            <li><a href="#theming" className="nav__link">Theming</a></li>
          </ul>
          <div className="nav__actions">
            <a
              href="https://thefluidtheme.com"
              className="button"
              data-size="sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </a>
          </div>
        </nav>
      </header>

      <main>

        {/* Hero */}
        <section className="hero" data-layout="center" data-padding="xl">
          <div className="hero__content" data-layout="stack" data-gap="md">
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--accent)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              React + Fluid Theme
            </span>
            <h1 className="hero__headline">Beautiful UIs Without the Boilerplate</h1>
            <p className="hero__subheadline" style={{ maxInlineSize: '55ch', marginInline: 'auto' }}>
              @fluid-theme/core works with any framework. Import the CSS, write semantic HTML, and ship.
            </p>
            <div className="hero__actions" style={{ justifyContent: 'center' }}>
              <a href="#theming" className="button" data-size="lg">Try the Theming</a>
              <a href="#features" className="button" data-variant="outline" data-size="lg">See Features</a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="section" data-padding="xl" data-theme="subtle">
          <div data-layout="center" data-width="wide">
            <h2 style={{ textAlign: 'center', marginBlockEnd: 'var(--space-3)' }}>Framework-Agnostic</h2>
            <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBlockEnd: 'var(--space-10)', maxInlineSize: '50ch', marginInline: 'auto' }}>
              Fluid Theme is pure CSS — it works the same in React, Vue, Svelte, or plain HTML.
            </p>

            <div className="grid" style={{ '--grid-min': '260px', gap: 'var(--space-6)' }}>
              {[
                { title: 'One Import', body: 'import \'@fluid-theme/core\' in main.jsx. Done. All components available instantly.' },
                { title: 'CSS Custom Properties', body: 'Runtime theming via var(--token). No rebuild needed when switching themes or palettes.' },
                { title: 'data-* Variants', body: 'data-variant="outline" not className="btn btn--outline". Cleaner JSX, less className churn.' },
                { title: 'Accessible by Default', body: 'Native HTML elements. Focus-visible. Reduced motion support. No extra a11y libraries needed.' },
              ].map(({ title, body }) => (
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
            <h2 style={{ textAlign: 'center', marginBlockEnd: 'var(--space-3)' }}>Live Theming</h2>
            <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBlockEnd: 'var(--space-8)', maxInlineSize: '50ch', marginInline: 'auto' }}>
              React state drives <code>data-*</code> attributes on the html element. No CSS-in-JS needed.
            </p>

            <div className="card" data-variant="elevated" style={{ marginBlockEnd: 'var(--space-8)' }}>
              <div className="card__body" style={{ display: 'grid', gap: 'var(--space-6)', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>

                <div>
                  <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, marginBlockEnd: 'var(--space-3)', color: 'var(--color-text-muted)' }}>
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
                  <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, marginBlockEnd: 'var(--space-3)', color: 'var(--color-text-muted)' }}>
                    Motion
                  </p>
                  <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                    {MOTIONS.map(m => (
                      <button
                        key={m}
                        className="button"
                        data-variant={motion === m ? 'primary' : 'outline'}
                        data-size="sm"
                        onClick={() => apply('motion', m)}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, marginBlockEnd: 'var(--space-3)', color: 'var(--color-text-muted)' }}>
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
              <strong>Current config:</strong> data-theme=&quot;{theme}&quot; data-palette=&quot;{palette}&quot; data-motion=&quot;{motion}&quot;
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
