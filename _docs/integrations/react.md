# Using Fluid with React

Fluid is pure CSS — no React-specific wrapper needed. Import the stylesheet and use standard HTML elements with Fluid's data attributes.

## Installation

```bash
npm install the-fluid-theme
```

## Setup

Import the CSS in your entry point (`main.jsx`, `index.js`, or `App.jsx`):

```jsx
// main.jsx
import 'the-fluid-theme/src/fluid.css';
import App from './App';

createRoot(document.getElementById('root')).render(<App />);
```

## Theme Switching

Use React state to control theme data attributes on the root element:

```jsx
import { useState, useEffect } from 'react';

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [motion, setMotion] = useState('flowing');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.motion = motion;
  }, [theme, motion]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, motion, setMotion }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

## Using Components

Fluid components are just HTML elements with classes and data attributes. In JSX, use `className` and `data-*` props:

```jsx
function Card({ title, description, variant }) {
  return (
    <article className="card" data-variant={variant}>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
      </div>
    </article>
  );
}

function Button({ children, variant = 'primary', size, ...props }) {
  return (
    <button
      className="button"
      data-variant={variant}
      data-size={size}
      {...props}
    >
      {children}
    </button>
  );
}
```

## With Next.js

Import the CSS in your root layout:

```jsx
// app/layout.jsx
import 'the-fluid-theme/src/fluid.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" data-motion="flowing">
      <body>{children}</body>
    </html>
  );
}
```

## Tips

- **No build step overhead** — Fluid CSS works with any bundler (Vite, webpack, etc.) without plugins
- **No className conflicts** — Fluid uses `@layer` to manage specificity, so it won't fight your component styles
- **CSS custom properties** are reactive — change a token on a parent element and all children update
- **Server-side rendering** works out of the box since Fluid is pure CSS
