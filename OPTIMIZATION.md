# OPTIMIZATION GUIDELINES — Pivot Pharmacy
*Standards every page in this package already follows — keep to them when adding or regenerating pages.*

## 1. Document head recipe (copy this pattern for every new page)
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{Page} | Pivot Pharmacy Ltd ({50–60 chars total})</title>
<meta name="description" content="{150–160 chars, includes the main keyword + one action}.">
<link rel="canonical" href="https://pivotpharmacy.topservice.ng/{extensionless-slug}">
<meta property="og:type|og:site_name|og:title|og:description|og:url|og:image">  <!-- mirror the title/desc -->
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0C4A6E">
<link rel="icon" type="image/png" href="assets/logo.png">
<link rel="stylesheet" href="assets/style.css">
<script src="assets/main.js" defer></script>
```

## 2. Content rules
- **One `<h1>` per page** (the page title). Section titles are `<h2>`, card titles `<h3>`. Never skip levels.
- Titles: `Page Name | Pivot Pharmacy Ltd`. Descriptions: what the page offers + who it's for + a soft CTA.
- Reading level: plain English, short sentences; pharma/regulatory terms explained on first use.
- Contact details appear **once per block, always linked**: `tel:+2348187126441`, `mailto:info@pivotpharm.com`. Only the official email (`info@pivotpharm.com`) may appear — never personal/free-mail addresses.
- Footer year stays `2026`+ — update every January (or add a JS auto-year snippet).

## 3. Image rules
- Hero image: `fetchpriority="high"`, explicit `width`/`height` (prevents layout shift).
- Every other image: `loading="lazy" decoding="async"` + dimensions.
- `alt` = what the image *shows*, in a sentence — never "image1", never stuffed keywords, never the same alt repeated.
- Compress to < 200 KB (WebP preferred; keep JPEG fallback). Never upload phone screenshots or photos with third-party watermarks.
- Filenames: lowercase, hyphenated (`clinic-eye.jpg`) with an extension that matches the real format.

## 4. Performance budget
- One CSS file, one JS file, scripts with `defer`. Fonts via `preconnect` + `display=swap`.
- Total page weight target < 1 MB; LCP < 2.5 s on 4G.
- The included `.htaccess` enables compression + 1–3 month caching — don't disable it.

## 5. Accessibility
- Landmarks: `<header> <nav> <main> <footer>`; nav has `aria-label`, current page has `aria-current`.
- Buttons (not `<div>`s) for anything clickable; forms use `<label for>` on every input.
- Contrast floor 4.5:1 — brand blue `#0C4A6E` and green `#22A06B` on white pass; never use the audited site's mid-grey text (`#979292`, ~3:1).
- Focus outlines must stay visible (don't CSS them away).

## 6. SEO / discoverability
- `robots.txt` allows all + points to `sitemap.xml`; keep it at the domain root.
- `sitemap.xml` lists the **extensionless** canonical URLs (server maps them to `.html`); add every new page with `<lastmod>`, and resubmit in Google Search Console after major changes.
- Keep the MedicalBusiness JSON-LD on the homepage in sync with the footer (address/phone/email).
- Canonical = HTTPS + extensionless. HTTP and trailing-slash variants must 301 to it (the `.htaccess` does this — the audited live site does none of this today).

## 7. Adding a new page (checklist)
1. Duplicate any existing page; set a new lowercase slug (`new-page.html`).
2. Rewrite title, description, canonical, OG tags.
3. One h1; section h2s; compress + alt every image.
4. Add the nav link in **all pages** (keep label style; add `.active` on the page itself).
5. Add it to `sitemap.xml` + this list. Test mobile menu, form and footer links.
