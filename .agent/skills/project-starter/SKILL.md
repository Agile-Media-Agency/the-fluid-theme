---
name: project-starter
description: The standard page and flow checklist for starting any new project. Covers all required pages, optional pages, standard user flows, and the process for deciding what to include or exclude. Use at project kickoff.
allowed-tools: Read, Glob, Grep
---

# Project Starter — Kitchen Sink Checklist

> Every project starts from the full set. Trim what you don't need. Never discover a gap mid-build.

## How to Use

At project kickoff, go through every item below. For each, mark one of:
- **Include** — build this
- **Not needed** — skip, document why
- **Deferred** — needed later, not for initial launch

Document the decisions in the project's admin file or README.

---

## Standard Pages

### Core (almost always needed)
- [ ] Homepage / Landing
- [ ] About
- [ ] Contact (with form — follow UX spec §5)
- [ ] 404 Error page (follow UX spec §7) — **always include, no exceptions**
- [ ] 500 Error page (follow UX spec §7)
- [ ] Privacy Policy
- [ ] Terms of Service

### Content (if the site has articles, posts, or news)
- [ ] Blog / News index
- [ ] Blog / News single post
- [ ] Category listing
- [ ] Tag listing
- [ ] Author page
- [ ] Search results (with empty state — UX spec §7 + §14)

### Commerce (if selling anything)
- [ ] Product / Service listing
- [ ] Product / Service detail
- [ ] Pricing / Plans comparison
- [ ] Cart
- [ ] Checkout (multi-step — UX spec §5)
- [ ] Order confirmation
- [ ] Order history

### Account (if users log in)
- [ ] Login
- [ ] Registration
- [ ] Forgot password
- [ ] Reset password (from email link)
- [ ] Account settings / Profile
- [ ] Subscription management (UX spec §6)
- [ ] Notification preferences
- [ ] Delete account (UX spec §1 — high severity)

### App / Dashboard (if it's a web app)
- [ ] Dashboard (with empty state — UX spec §7)
- [ ] List / Grid view with search and filter (UX spec §14)
- [ ] Detail / Edit view
- [ ] Settings (sidebar nav pattern)
- [ ] Onboarding / First-run (UX spec §15)

---

## Standard Flows

### 1. Authentication Flow
```
Login form → Validate → Success: redirect to [where?]
                       → Error: inline alert, re-enable form
```

### 2. Registration Flow
```
Registration form → Validate per step → Create account
→ Welcome email → First login → Onboarding (if applicable)
```

### 3. Password Reset Flow
```
Forgot password form → Email sent confirmation
→ Email with reset link → Reset form → Success message → Redirect to login
```

### 4. Subscription / Newsletter Flow (UX spec §6)
```
Signup form → Preference selection (optional) → Inline confirmation
→ Confirmation email → Verified
```

### 5. Contact / Inquiry Flow
```
Contact form → Validate → Submit → Success message (inline, no reload)
→ Confirmation email to user → Notification to site owner
```

### 6. Destructive Action Flow (UX spec §1)
```
Trigger (delete button) → Confirmation modal → Execute → Toast with undo
→ [undo window expires] → Committed
```

### 7. Search Flow (UX spec §14)
```
Search input → Debounced query → Results with count
→ No results: empty state with suggestions → Clear filters option
```

### 8. Checkout Flow (if applicable)
```
Cart review → Shipping info → Payment → Review order → Place order
→ Confirmation page → Confirmation email
```

---

## Fluid Theme Templates Available

| Template | File |
|----------|------|
| Homepage | `templates/index.html` |
| About | `templates/about.html` |
| Blog | `templates/blog.html` |
| Blog Post | `templates/blog-post.html` |
| Contact | `templates/contact.html` |
| FAQ | `templates/faq.html` |
| Gallery | `templates/gallery.html` |
| Pricing | `templates/pricing.html` |
| Services | `templates/services.html` |
| 404 | `templates/404.html` |
| 500 | `templates/500.html` |
| Login | `templates/login.html` |
| Register | `templates/register.html` |
| Dashboard | `templates/dashboard.html` |
| Search Results | `templates/search-results.html` |
| Landing (SaaS) | `templates/landing-saas.html` |
| Landing (Agency) | `templates/landing-agency.html` |
| Landing (Product) | `templates/landing-product.html` |

---

## Post-Kickoff

1. Create the project structure with all included pages
2. Set up routing / navigation to match
3. Build pages using Fluid Theme components
4. Follow UX Behavior Spec for all interactive elements
5. Test all documented flows end-to-end
