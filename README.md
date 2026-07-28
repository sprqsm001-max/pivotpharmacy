# Pivot Pharmacy — Redesigned Website (Deploy-Ready Package)

**Design concept:** "Clinical Trust" · Blue `#0C4A6E` + Green `#22A06B` · Sora + Inter

## Pages
| File | URL (live) | Purpose |
|---|---|---|
| `index.html` | `/` | Home — hero, trust band, services, medical-tourism band, team, partners, CTA |
| `about.html` | `/about` | Story, mission/vision/values, stats, leadership |
| `medical-tourism.html` | `/medical-tourism` | Procedure cards, destinations (CZ/IN/ID), HEDVEA partner spotlight, CZ line |
| `international-study.html` | `/international-study` | Why Czech Republic, programmes BSc→PhD, 5-step application process |
| `contact.html` | `/contact` | Tappable contact cards, honest form, hours, map panel |
| `404.html` | `/404.html` | Custom not-found page (`noindex`) |

## Deploy
1. Upload **all files** (including `.htaccess`, `robots.txt`, `sitemap.xml`) to the web root of `pivotpharmacy.topservice.ng`.
2. Ensure Apache `mod_rewrite` is enabled — it forces HTTPS (the audited site does not redirect HTTP→HTTPS today) and serves the extensionless URLs listed in `sitemap.xml`.
3. Submit `sitemap.xml` in Google Search Console.

## Local preview
Open `index.html` in a browser — all internal links use `.html` filenames so they work from file:// as well as on any web server.

## Audit fixes baked in
- ✅ Contact form no longer fakes success (was `setTimeout` + fake ✅). Validates, then opens a prefilled email — marked clearly until a real backend (e.g. Formspree) is connected.
- ✅ All phone/email/WhatsApp details tappable (`tel:`, `mailto:`, `wa.me:`).
- ✅ One official email everywhere: `info@pivotpharm.com` (yahoo address removed).
- ✅ "Pharmacist**s** Council of Nigeria" spelling fixed; "Plaza,108" comma typo fixed.
- ✅ Footer © updated to 2026.
- ✅ Unique title + meta description + canonical + Open Graph per page; favicon added; `robots.txt` + `sitemap.xml` included (all absent on the live site).
- ✅ Descriptive alt text; `loading="lazy"` + dimensions on non-hero imagery; `defer` on scripts.
- ✅ "Nigeria Office Building" (iPhone photo) and the Christmas group photo are **excluded**; hero imagery is the real pills photo + Prague facility.

## Still needed from the boss (decisions pending in the QA audit)
1. Real form backend credentials/service.
2. Partner logos for the "Our Partners" strip (currently text chips).
3. Confirm office hours shown on the contact page.
