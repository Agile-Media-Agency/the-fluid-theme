# Publishing @fluid-theme/core to npm

Everything is set up. You have 3 steps to do manually — they each take about 2 minutes.

---

## Step 1 — Create your npm account

1. Go to **[npmjs.com/signup](https://www.npmjs.com/signup)**
2. Create an account (username, email, password)
3. Verify your email address

---

## Step 2 — Create the @fluid-theme organization

1. Go to **[npmjs.com/org/create](https://www.npmjs.com/org/create)**
2. Organization name: `fluid-theme`
3. Select **Unlimited public packages** (free tier)
4. Create the org

This gives you the `@fluid-theme` scope so you can publish `@fluid-theme/core`.

---

## Step 3 — Log in and publish

In your terminal, from this project directory:

```bash
# Log in to npm
npm login
# Enter your username, password, and email when prompted
# You may need to complete 2FA in your browser

# Publish the package (build runs automatically via prepublishOnly)
npm publish --access public
```

That's it. The `--access public` flag is required for scoped packages to be publicly accessible (free).

---

## After publishing

Your CDN links will be live within a few minutes:

**jsDelivr** (recommended — global CDN with SRI support):
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fluid-theme/core/dist/fluid.min.css">
```

**unpkg:**
```html
<link rel="stylesheet" href="https://unpkg.com/@fluid-theme/core/dist/fluid.min.css">
```

**npm install:**
```bash
npm install @fluid-theme/core
```

---

## Future releases

When you're ready to publish a new version:

```bash
# Bump the version in package.json (patch | minor | major)
npm version patch   # 0.4.2 → 0.4.3
npm version minor   # 0.4.2 → 0.5.0
npm version major   # 0.4.2 → 1.0.0

# Then publish
npm publish --access public
```

The `prepublishOnly` hook will rebuild `dist/fluid.min.css` automatically before each publish.

---

## Pinned CDN links (for production use)

Once published, you can pin to a specific version for stability:

```html
<!-- Pinned to exact version -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fluid-theme/core@0.4.2/dist/fluid.min.css">

<!-- Pinned to minor version (gets patch updates) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fluid-theme/core@0.4/dist/fluid.min.css">

<!-- Always latest (not recommended for production) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fluid-theme/core/dist/fluid.min.css">
```
