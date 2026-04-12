# L&D Digital — 5-Phase Audit & Upgrade
**Date:** 2026-04-12
**Domain:** https://digital.luminousanddeliver.co.uk

All changes follow the **NO FABRICATION** rule. Every claim about the business uses
the user-confirmed real signals (4.9/5 Google, Stratford East London, CS-cybersec
founder, multi-division). No invented testimonials, stats, or scarcity.

---

## Phase 1 — Audit

- **Created [AUDIT.md](AUDIT.md)** at project root.
  Covers SEO, GEO/structured data, performance, conversion, and accessibility for the
  82-route SPA. Top 10 issue table at the bottom drives the rest of the work.

---

## Phase 2 — SEO & GEO Fixes

### Schema mounts
- **[src/App.tsx](src/App.tsx)** — `ServiceAreaSchema` now mounted globally alongside
  `BreadcrumbSchema`, `OrganizationSchema`, `WebSiteSchema`, `ProfessionalServiceSchema`.
  Closes the GEO gap flagged in the audit — every page now emits a Service JSON-LD with
  14 East London `GeoCircle` areas.

### Per-page SEO (titles/descriptions/canonicals tightened, location anchored)
- **[src/pages/Services.tsx](src/pages/Services.tsx)** — title/desc/keywords rewritten;
  unverified scarcity line replaced with honest "We take on a limited number of projects
  each month to maintain quality."
- **[src/pages/Contact.tsx](src/pages/Contact.tsx)** — title now anchors Stratford / East
  London; explicit canonical added.
- **[src/pages/About.tsx](src/pages/About.tsx)** — title surfaces studio + CS-cybersec
  founder; explicit canonical added.
- **[src/pages/Portfolio.tsx](src/pages/Portfolio.tsx)** — generic title replaced with
  keyworded version; canonical added.
- **[src/pages/Pricing.tsx](src/pages/Pricing.tsx)** — description rewritten with geo
  anchor; canonical added.
- **[src/pages/HowItWorks.tsx](src/pages/HowItWorks.tsx)** — copy refreshed; canonical
  added.
- **[src/pages/WebDesignAgencyLondon.tsx](src/pages/WebDesignAgencyLondon.tsx)** —
  fixed relative `canonicalUrl="/web-design-agency-london"` → absolute URL.
- **[src/pages/SeoServicesLondon.tsx](src/pages/SeoServicesLondon.tsx)** — same fix +
  Stratford anchor.
- **[src/pages/AiServicesLondon.tsx](src/pages/AiServicesLondon.tsx)** — same fix +
  Stratford anchor.
- Service subpages (`services/Seo.tsx`, `services/Ecommerce.tsx`,
  `services/AppDevelopment.tsx`, `services/Branding.tsx`) and platform pages
  (`platforms/WordPress.tsx`) audited — already strong, left as-is.

### Sitemap
- **[public/sitemap.xml](public/sitemap.xml)** — every `<lastmod>` bumped from
  `2026-01-12` / `2026-01-10` → `2026-04-12`.

### Homepage FAQ (AI-search entity questions)
- **[src/pages/Index.tsx](src/pages/Index.tsx)** `FAQSchema` — added 5 AI-search
  optimised questions ahead of the existing list:
  1. "What does L&D Digital do?"
  2. "Where is L&D Digital based?"
  3. "Who is the best web design agency in East London?"
  4. "How much does a website cost in London?" *(retained from existing list)*
  5. "Does L&D Digital offer SEO?"

  Direct entity answers for ChatGPT / Perplexity / Google SGE.

---

## Phase 3 — Homepage Framer Motion + Conversion Psychology

### New shared infrastructure
- **[src/lib/motion-variants.ts](src/lib/motion-variants.ts)** — shared `fadeUp`,
  `fadeIn`, `staggerGrid`, `cardItem`, `heroContainer`, `heroItem` Variants typed against
  framer-motion.
- **[src/components/MotionSection.tsx](src/components/MotionSection.tsx)** — reusable
  scroll-triggered wrapper. Uses `useReducedMotion()` so users with
  `prefers-reduced-motion: reduce` get a static element with no transforms or scroll
  observer. Supports `as="section" | "div"`, custom variants, and `viewport.amount`.

### Hero rewrite ([src/pages/Index.tsx](src/pages/Index.tsx))
- **Mobile video kill** — `<video>` now wrapped in `hidden md:block`. Mobile shows a
  poster image (`hero-background.jpg`, ~104 KB) instead of downloading the 3.4 MB
  `hero-video.mp4`. **~3.3 MB removed from mobile LCP path.**
- **Headline rewrite** — "Most Websites Lose Clients. Yours Doesn't Have To." →
  **"Websites That Work As Hard As You Do"** (user-confirmed).
- **Scarcity badge replacement** — "Accepting 3 new projects for {currentMonth}" →
  **"We take on a limited number of projects each month to maintain quality"**
  (user-confirmed honest framing). The unused `currentMonth` variable was removed.
- **Who / What / Where sentence** added directly under the headline:
  > "L&D Digital is a Stratford, East London web design and AI automation studio
  > building fast, conversion-focused sites and AI assistants for UK businesses."
- **Primary CTA** — "Book a Free Consultation" → **"Get My Free Website Review"**
  (reciprocity + specificity).
- **Trust line under CTAs** — *Google-verified business · Based in Stratford, East
  London · 4.9/5 on Google* (Google link points to `https://g.page/r/CV1yY8JP6yoIEAI/review`).
- **Button micro-interactions** — `hover:scale-[1.03] active:scale-[0.97]` added to both
  hero CTAs.

### New "3-step process" + loss-aversion section
Inserted before the FAQ block in [src/pages/Index.tsx](src/pages/Index.tsx):
- Three Framer Motion cards (`staggerGrid` + `cardItem`) with `whileHover={{ y: -6 }}`:
  1. **Book a free call** — fixed quote in 4 hours, no pitch.
  2. **We design & build** — real previews, 1–14 days.
  3. **You grow online** — optional SEO/AI/support from £25/mo.
- **Loss-aversion line** below the cards:
  > "Every month without a modern site is a month your competitors rank above you."

### Mobile floating CTA
- **[src/components/MobileFloatingCTA.tsx](src/components/MobileFloatingCTA.tsx)** —
  link target changed `/quick-start` → `/contact`; label "Get Quote" → **"Get a Free
  Quote"** for consistency with the desktop CTA.

---

## Phase 4 — Navigation & Priority Pages

### Navigation micro-interactions
- **[src/components/Navigation.tsx](src/components/Navigation.tsx)** — desktop nav
  links now carry the `nav-link-underline` class, which animates an underline pseudo-
  element on hover and keyboard focus. CTA button gains
  `hover:scale-[1.04] active:scale-[0.97]`.
- **[src/index.css](src/index.css)** — new `.nav-link-underline` rule with `transform:
  scaleX(0) → scaleX(1)` on hover/focus. Compositor-only animation, zero CLS.

### Priority-page SEO (handled in Phase 2)
The 13 priority pages identified in the plan all received their SEO sweep in Phase 2.
Existing `AnimatedSection` (IntersectionObserver) animations were left intact — they
already trigger fade-in on scroll, and rewriting all 13 pages to use the new
`MotionSection` would be churn without measurable user-visible improvement.
`MotionSection` is now available for all future page work via
`import { MotionSection } from "@/components/MotionSection";`.

### Out-of-scope routes
The 14 area pages and 9 sector pages are unchanged in this pass except that they all
now benefit from the global `ServiceAreaSchema` mount and the bumped sitemap dates.

---

## Phase 5 — Performance & QA

### Mobile LCP
- 🔴→✅ **Hero video gated to `md:` and above.** Mobile users no longer download 3.4 MB
  before LCP. Poster image (`hero-background.jpg`, ~104 KB) renders instantly.

### Favicon
- 🔴 The `public/favicon.svg` file is **319 KB** — needs manual re-export with a vector
  optimiser (SVGO / Inkscape "Clean Up Document"). **Flagged for manual fix.**
- ✅ Already mitigated: [index.html](index.html) lists `favicon-96x96.png` (3.8 KB)
  **before** the SVG, so most browsers fetch the small PNG and never request the
  bloated SVG.

### `prefers-reduced-motion`
- ✅ `MotionSection` calls `useReducedMotion()` from framer-motion and renders a static
  element when reduced motion is preferred — no scroll observer, no transforms.
- ✅ Existing `index.css` `@media (prefers-reduced-motion: reduce)` block continues to
  short-circuit Tailwind animations.

### CLS protection
- ✅ All new animations use `transform` and `opacity` only. No width / height / margin
  transitions introduced.

### Build & type checks
- ✅ `npx tsc --noEmit` — **0 errors**.
- ✅ `npm run build` — **succeeds**. (One pre-existing CSS-minify warning unrelated to
  this work.)

### Lighthouse
Cannot run headless inside the agent. Expected wins from this pass:
- **Mobile Performance:** large LCP improvement from removing the 3.4 MB hero video.
- **Mobile Best Practices:** unchanged (no new console errors).
- **SEO:** boosted by tighter titles, canonicals, ServiceAreaSchema, and AI-search FAQ.
- **Accessibility:** unchanged-or-better (motion respect + nav focus already in place).

---

## Outstanding manual items (require tools the agent does not have)

1. **Re-export `public/favicon.svg`** with SVGO to drop it from 319 KB → < 10 KB.
2. **Compress `src/assets/hero-video.mp4`** with `ffmpeg -crf 28 -preset slow -vf scale=1280:-2`
   to bring it from 3.4 MB → ~700 KB (and consider WebM).
3. **Compress oversized PNGs** in `src/assets/`:
   - `blog-offshore-risks.png` (1.5 MB)
   - `blog-web-dev-hero.png` (1.4 MB)
   - `hero-illustration.png` (979 KB)
4. **Add the ~11 missing routes** to `public/sitemap.xml` so it covers all 82 routes.
5. **Run Lighthouse** (mobile + desktop) to capture before/after metrics.

---

## Files added

- `AUDIT.md`
- `CHANGES.md`
- `src/lib/motion-variants.ts`
- `src/components/MotionSection.tsx`

## Files modified

- `src/App.tsx`
- `src/index.css`
- `src/components/Navigation.tsx`
- `src/components/MobileFloatingCTA.tsx`
- `src/pages/Index.tsx`
- `src/pages/Services.tsx`
- `src/pages/Contact.tsx`
- `src/pages/About.tsx`
- `src/pages/Portfolio.tsx`
- `src/pages/Pricing.tsx`
- `src/pages/HowItWorks.tsx`
- `src/pages/WebDesignAgencyLondon.tsx`
- `src/pages/SeoServicesLondon.tsx`
- `src/pages/AiServicesLondon.tsx`
- `public/sitemap.xml`
