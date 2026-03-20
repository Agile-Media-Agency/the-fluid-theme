---
description: Migrate a WordPress site to a modern static stack with Fluid Theme.
---

# /convert-wp — WordPress Migration

$ARGUMENTS

## Task

Convert an existing WordPress site to a modern lightweight alternative.

### Steps

1. **Audit Current Site**
   - Export all content (posts, pages, media)
   - Document URL structure for redirects
   - List active plugins and their actual function
   - Identify custom functionality (forms, e-commerce, membership)
   - Screenshot every page

2. **Determine Target Stack** (load `wp-converter` agent)
   - Brochure (5-15 pages, rarely updated) → Astro + Cloudflare Pages
   - Blog with regular posts → Astro + Markdown
   - E-commerce → Evaluate: stay WP or Shopify
   - Complex app → Evaluate: stay WP or headless

3. **Determine Editing Needs**
   - Client never edits → Static files
   - Occasional text edits → Markdown in repo
   - Regular edits → Headless CMS (Decap, Tina)
   - Complex editing → WordPress as headless CMS

4. **Build New Site** (triggers `/new-site` workflow)
   - **Pass audit context:** The URL list, content export, plugin analysis, and screenshots from Steps 1–3 are input to `/new-site`. The page checklist should be pre-populated based on the WordPress audit — every existing WP page maps to a new page by default.
   - Rebuild using Fluid Theme components
   - Port content from WordPress export
   - Follow UX Behavior Spec for all interactions

5. **Redirects & SEO**
   - Create 301 redirects: old URLs → new URLs
   - Preserve all meta titles and descriptions
   - Submit updated sitemap to Google Search Console
   - Verify no broken internal links

6. **DNS & Launch**
   - Point domain to new host
   - Verify SSL
   - Monitor for 404s in first week
   - Keep WordPress backup for 30 days

### Usage

```
/convert-wp palmvitaspecialists.com
/convert-wp [client-site.com]
```
