# L&D Digital — Site Audit
**Date:** 2026-04-12
**Domain:** https://digital.luminousanddeliver.co.uk
**Stack:** React + Vite + TypeScript SPA on Cloudflare Pages
**Scope:** 82 routes (28 top-level + 17 services + 4 platforms + 9 sectors + 14 areas + misc)

Legend: ✅ good · 🟡 needs work · 🔴 must fix

---

## 1. SEO

### Infrastructure
- ✅ Central `src/components/SEO.tsx` supports title, description, keywords, canonical, OG, Twitter, geo meta, robots, author.
- ✅ Canonical is auto-derived from `useLocation().pathname` when `canonicalUrl` prop omitted — **verified** at [src/components/SEO.tsx:28](src/components/SEO.tsx#L28).
- ✅ `index.html` ships strong defaults (LocalBusiness + Organization JSON-LD, canonical, hreflang, preconnect, GA4).
- ✅ `public/robots.txt` allows major AI crawlers (GPTBot, Anthropic-AI, Claude-Web, PerplexityBot, CCBot).
- 🟡 `public/sitemap.xml` has 71 URLs with `<lastmod>2026-01-12</lastmod>` — stale, needs bump on touched pages.
- 🟡 SEO.tsx default `keywords` string is a giant generic blob (starts "web development London, restaurant website design UK…") — fine as fallback but per-page keywords should override (most do).

### Homepage ([src/pages/Index.tsx](src/pages/Index.tsx))
- ✅ Title fixed in prior session to `"L&D Digital — Web Design, AI Automation & SEO for UK Businesses"` (under 60 chars, brand + primary keywords).
- ✅ Single `<h1>` with fluid `clamp()` scaling.
- ✅ Hero uses Framer Motion stagger (done in prior session).
- 🟡 No "Who / What / Where" one-liner near the hero for AI-search entity clarity.
- 🟡 Trust line is generic ("trusted by UK businesses") — not using the confirmed 4.9/5 Google rating + Stratford geo anchor.
- 🟡 Hero CTA copy `"Book a Free Consultation"` is generic — no reciprocity anchor.
- 🟡 Scarcity badge `"Accepting 3 new projects for April"` is fabricated scarcity — replace with honest framing.

### Services ([src/pages/Services.tsx](src/pages/Services.tsx))
- 🟡 Title `"Our Services | Web Development & AI Automation UK | L&D Digital"` — OK but could lead with location. Length fine (~65 chars — just over target).
- 🟡 Description reads fine but doesn't mention Stratford / London anchor.
- ✅ Single `<h1>` on line 92.
- 🟡 Hero scarcity line `"Currently booking new projects 2–3 weeks in advance"` — unverified, replace or drop.
- ✅ ReviewSchema mounted (4.9/3).
- ✅ Uses `AnimatedSection` (IntersectionObserver) — to be upgraded to `MotionSection` in Phase 4.

### Contact ([src/pages/Contact.tsx](src/pages/Contact.tsx))
- 🟡 Title `"Contact Us - Get Your Free Quote | L&D Digital"` — missing location modifier; hyphen instead of pipe is inconsistent with rest of site.
- 🟡 Description OK but doesn't state Stratford / East London.
- ✅ Single `<h1>` "Let's Talk About Your Project".
- ✅ ReviewSchema mounted.
- 🟡 No canonical passed (defaults OK, still worth setting explicit for Contact).

### About ([src/pages/About.tsx](src/pages/About.tsx))
- 🟡 Title `"About Us - Fast, Transparent Web Development & AI | L&D Digital"` — hyphen inconsistency; ~65 chars.
- ✅ Description emphasises transparency + UK.
- ✅ Single `<h1>` "About L&D Digital".
- 🟡 Founder mentioned ("Abdul M Taher") — good for E-E-A-T, but CS + cybersec background not surfaced.

### Portfolio ([src/pages/Portfolio.tsx](src/pages/Portfolio.tsx))
- 🟡 Title `"Portfolio - Our Recent Work | L&D Digital"` — weak; no keywords, no location.
- 🟡 Description generic.
- ✅ Single `<h1>` "Recent Work & Capabilities".
- 🟡 No canonical passed.

### Service subpage — SEO ([src/pages/services/Seo.tsx](src/pages/services/Seo.tsx))
- ✅ Title `"Local SEO Services London & UK | Get Found on Google | L&D Digital"` — strong, location-anchored.
- ✅ Description specific to local SEO value.
- ✅ `canonicalUrl` explicit.
- ✅ ServiceSchema + HowToSchema + FAQSchema all mounted.

### Platform page — WordPress ([src/pages/platforms/WordPress.tsx](src/pages/platforms/WordPress.tsx))
- ✅ Title `"WordPress Developer London | Custom WordPress Websites from £200"` — strong.
- ✅ ServiceSchema + FAQSchema + HowToSchema mounted.
- ✅ Explicit canonical.

### Sector page — Restaurant POS ([src/pages/sectors/RestaurantPos.tsx](src/pages/sectors/RestaurantPos.tsx))
- ✅ Title `"Restaurant POS Systems London | EPOS for Hospitality | L&D Digital"`.
- ✅ ServiceSchema + FAQSchema.
- ✅ Explicit canonical.

### Area page — Stratford ([src/pages/areas/Stratford.tsx](src/pages/areas/Stratford.tsx))
- ✅ Uses `LocationPageTemplate` which mounts SEO with dynamic title/description/keywords per location.
- ✅ All 14 area pages share this template — consistent meta pattern.
- 🟡 Template title pattern is quite long: `"Web Developer & Digital Services Stratford | AI, POS, SEO, IT Support | L&D Digital"` — ~85 chars. Could be trimmed.

### Landing — Web Design Agency London ([src/pages/WebDesignAgencyLondon.tsx](src/pages/WebDesignAgencyLondon.tsx))
- ✅ Title strong.
- 🟡 `canonicalUrl="/web-design-agency-london"` — relative path; **should be absolute** (`https://digital.luminousanddeliver.co.uk/...`) for consistency.

### Sitemap / robots
- ✅ robots.txt permits major AI crawlers.
- 🔴 sitemap.xml lastmod date stale (2026-01-12) — bump to 2026-04-12 on touched pages.
- 🟡 71 URLs in sitemap but 82 routes exist — **gap of ~11 routes** not in sitemap (likely new near-me / area / landing pages added after last sitemap update).

---

## 2. GEO / Structured Data

### Global schemas ([src/App.tsx:155-158](src/App.tsx#L155-L158))
- ✅ `BreadcrumbSchema` mounted globally.
- ✅ `OrganizationSchema` mounted globally.
- ✅ `WebSiteSchema` mounted globally.
- ✅ `ProfessionalServiceSchema` mounted globally.
- 🔴 **`ServiceAreaSchema` exists in `src/components/` but NOT mounted globally** — missed entity coverage signal for all the "Stratford / Newham / East London" GEO work.

### Per-page schemas (14 component files in `src/components/*Schema.tsx`)
- ✅ `ReviewSchema` — mounted on Services, Contact, Portfolio, Index.
- ✅ `FAQSchema` — mounted on Index, Seo service, WordPress platform, RestaurantPos sector, etc.
- ✅ `ServiceSchema` — on service subpages + platform pages + sector pages.
- ✅ `HowToSchema` — on Seo service + WordPress platform.
- ✅ `ProductSchema`, `ArticleSchema`, `AreaServicesSchema` — exist.
- 🟡 `ArticleSchema` coverage on `BlogPost.tsx` — not verified here (out of audit sample).

### Entity & location signals
- 🟡 Entity consistency: codebase uses all of `"L&D Digital"`, `"Luminous & Deliver"`, `"Stratford"`, `"East London"`, `"London"`. Needs one-pass sweep to ensure AI search entity clarity.
- 🔴 Homepage does not state "Stratford, East London" as geo anchor anywhere above the fold — **major GEO miss** for ChatGPT / Perplexity / SGE answers to "web design agency East London" queries.
- 🟡 FAQ coverage for AI-search queries is present but missing the direct "Who is L&D Digital? / Where based?" entity questions.

### Trust signals (user-confirmed real, safe to use in copy)
- ✅ 4.9/5 Google rating, 3 reviews → `https://g.page/r/CV1yY8JP6yoIEAI/review`
- ✅ Founded by a Computer Science student specialising in cybersecurity
- ✅ Multi-division company — Web · Energy · Builds
- ✅ Based in Stratford, East London

---

## 3. Performance

### Bundle / code-splitting
- ✅ All 82 routes lazy-loaded via `React.lazy()` in [src/App.tsx](src/App.tsx).
- ✅ Below-fold components on homepage already lazy-loaded.
- ✅ `Suspense` with `LoadingFallback` wraps routes.

### Asset audit (critical findings)
- 🔴 **`src/assets/hero-video.mp4` = 3.4 MB** — autoplays on mobile, destroys LCP on 4G/5G. **Must gate behind `hidden md:block`.**
- 🔴 **`public/favicon.svg` = 319 KB** — absurdly large for a favicon. Browser may fetch it before anything else. Should be under 10 KB after re-export. Meanwhile: add a lightweight `favicon-96x96.png` fallback in priority order so browsers don't fetch the SVG.
- 🟡 `src/assets/blog-offshore-risks.png` = 1.5 MB
- 🟡 `src/assets/blog-web-dev-hero.png` = 1.4 MB
- 🟡 `src/assets/hero-illustration.png` = 979 KB
- 🟡 `src/assets/x15pcbuilders-screenshot.png` = 820 KB
- 🟡 `public/images/case-studies/*.png` = 197–598 KB each.

### LCP / CLS risk areas
- 🔴 Mobile LCP dominated by 3.4 MB video download before any image paints.
- 🟡 Fluid `clamp()` typography in `index.css` is correct — no CLS risk.
- ✅ All planned animations use `transform` + `opacity` only (no width/height/margin transitions) → zero CLS contribution.

### Mobile video autoplay
- 🔴 `<video autoPlay muted playsInline>` currently runs on mobile. **Wrap in `<div className="hidden md:block">…</video></div>` to remove ~3.4 MB mobile download.** Poster image fallback visible.

---

## 4. Conversion

### Hero CTA language
- 🟡 Current primary CTA `"Book a Free Consultation"` — generic, vague, commitment-heavy.
  → **Rewrite to `"Get My Free Website Review"`** (reciprocity + specificity + low-friction).
- 🟡 Secondary CTA copy is fine.

### Social proof placement
- 🟡 Client Wins section exists but lives far below the fold.
- 🟡 No "Google-verified business · 4.9/5 rating · Stratford-based" trust line immediately under hero CTAs.
- ✅ Client Wins uses real clients (Laser Light Skin Clinic, hair salon, plumber) — no fabrication.

### Visual hierarchy
- ✅ Heading hierarchy (H1 → H2 → H3) consistent site-wide via `index.css` base layer rules.
- ✅ Brand colors (teal primary, navy secondary) well-tokenised.
- 🟡 Service cards need consistent `whileHover={{ y: -6 }}` lift across homepage + Services page.

### Journey friction points
- 🟡 No "3-step process" reassurance block on homepage (book → design → grow) — a known conversion primer.
- 🟡 No loss-aversion anchor ("Every month without a modern site is a month competitors rank above you.") above the bottom CTA.
- 🟡 `MobileFloatingCTA` currently links to `/quick-start` with label `"Get Quote"` — should link to `/contact` with `"Get a Free Quote →"` for consistency with header CTA.

### Scarcity / honesty
- 🔴 Hero badge `"Accepting 3 new projects for April"` is unverified scarcity. **Replace with honest framing: "We take on a limited number of projects each month to maintain quality."**
- 🟡 Services page hero `"Currently booking new projects 2–3 weeks in advance"` — also unverified, replace or drop.

---

## 5. Accessibility

### aria-label coverage
- ✅ `Navigation.tsx` — full a11y (aria-labels, keyboard, focus management, scroll-aware).
- ✅ `MobileFloatingCTA.tsx` — 44×44px touch target present.
- 🟡 Decorative icons (lucide-react) across service cards — not always marked `aria-hidden="true"`.

### Alt text
- ✅ Spot check: hero illustrations have alt text.
- 🟡 `LazyImage` usage on blog images — alt text quality not sampled yet. Phase 2.4 will sweep priority pages.

### Contrast / touch targets
- ✅ Navigation links, CTAs, MobileFloatingCTA meet WCAG touch target.
- ✅ `.tap-target` utility class exists in `index.css`.
- ✅ `prefers-reduced-motion` partially wired (useInViewOnce, useParallax, useCountUp, base `index.css`). Still needs wiring into the new `MotionSection` (Phase 5).

### Keyboard / focus
- ✅ Navigation focus ring visible.
- 🟡 Not every interactive card has a visible focus outline — Phase 4 spot check.

---

## Summary: Top 10 Issues to Fix (by impact)

| # | Issue | Phase | Severity |
|---|---|---|---|
| 1 | Hero video 3.4 MB downloads on mobile | 3 / 5 | 🔴 |
| 2 | Favicon 319 KB | 5 | 🔴 |
| 3 | `ServiceAreaSchema` not mounted globally | 2 | 🔴 |
| 4 | Fabricated hero scarcity badge | 3 | 🔴 |
| 5 | Homepage hero lacks geo anchor ("Stratford, East London") | 2 / 3 | 🔴 |
| 6 | Sitemap lastmod 3 months stale + ~11 routes missing | 2 | 🟡 |
| 7 | Generic primary CTA "Book a Free Consultation" | 3 | 🟡 |
| 8 | No trust line under CTAs (4.9/5 Google + geo) | 3 | 🟡 |
| 9 | No "3-step process" + loss-aversion conversion blocks | 3 | 🟡 |
| 10 | Homepage missing FAQ entity questions for AI search | 2 | 🟡 |

No code changes made in Phase 1 — findings only. Phases 2–5 execute the fixes.
