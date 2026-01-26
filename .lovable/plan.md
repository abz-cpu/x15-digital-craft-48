

## Plan: Rebuild SEO Services Page with Full Pricing & Service Details

### Summary
Completely rebuild the `/services/seo` page with comprehensive pricing packages, detailed service breakdowns, and positioning focused on local SME businesses. The page will follow the established visual patterns from WebPackage.tsx and AiPackage.tsx while incorporating the user's specific SEO pricing strategy.

---

### Page Structure Overview

| Section | Purpose |
|---------|---------|
| Hero | Hook with outcome-focused messaging ("Get Found Locally, Get More Bookings") |
| Stats Bar | Key numbers to build urgency and trust |
| Who This Is For | Target client types with pain points |
| One-Time Setup Packages | Foundational SEO & AI-Powered Website+SEO options |
| Monthly Retainer Packages | Local Starter, Growth, Dominator tiers |
| What's Included Grid | Visual breakdown of all services |
| How It Works | 4-step process timeline |
| Comparison Table | Local SEO vs DIY vs Other Agencies |
| FAQs | SEO-specific questions with accordion |
| Related Services | Internal links to complementary services |
| Final CTA | Gradient section with strong conversion focus |

---

### SEO & Schema Updates

**Updated Metadata:**
```typescript
<SEO
  title="Local SEO Services London | Get Found on Google | From £400/month | L&D Digital"
  description="Local SEO packages for London SMEs. One-time setup from £950, monthly retainers from £400. More calls, more bookings, more foot traffic. Free SEO audit."
  keywords="local SEO London, small business SEO UK, local SEO packages, affordable SEO agency London, Google Business Profile optimisation, local search ranking"
  canonicalUrl="https://digital.luminousanddeliver.co.uk/services/seo"
/>
```

**Schema Additions:**
- `ServiceSchema` - Updated with new price range (£400-£1,200/month)
- `FAQSchema` - For the 8+ FAQ items
- `HowToSchema` - For the 4-step process (updated steps)

---

### Part 1: Hero Section

**Style:** Dark gradient matching WebPackage (slate-700 via slate-800 to slate-900)

**Content:**
- **Badge:** "Local SEO Specialists • London & East London"
- **H1:** "Get Found Locally. Get More Bookings."
- **Subheadline:** "We help London SMEs rank on Google Maps and local search — so customers nearby actually call or book you."
- **CTAs:** "Get Free SEO Audit" + "Book Discovery Call"

---

### Part 2: Trust Stats Bar

Quick-scan credibility section below hero:

| Stat | Value |
|------|-------|
| Average ranking improvement | "Page 1 in 90 days" |
| Customer satisfaction | "5-star rated" |
| Response time | "24-hour audit turnaround" |
| Speciality | "Local businesses only" |

---

### Part 3: Who This Is For

Grid of ideal client types with icons:

| Client Type | Pain Point |
|-------------|------------|
| **Clinics & Healthcare** | Losing patients to competitors who rank higher |
| **Trades & Home Services** | Paying £50+ per lead on Checkatrade/Bark |
| **Restaurants & Hospitality** | Not showing up in "near me" searches |
| **Retail & Shops** | Foot traffic declining despite good reviews |
| **Property & Estate Agents** | Leads going to Rightmove instead of your site |
| **Professional Services** | Referrals drying up, need online visibility |

---

### Part 4: One-Time Setup Packages

Two-column cards:

#### Card 1: Foundational SEO Setup
**Price:** £950 one-time
**Best for:** Businesses with an existing website needing SEO boost

**Includes:**
- Full SEO audit & competitor analysis
- On-page optimisation (titles, meta, headings)
- Local keyword research & implementation
- Google Business Profile optimisation
- Local schema markup (LocalBusiness)
- Technical SEO fixes (speed, mobile, indexing)
- Internal linking structure
- Sitemap & robots.txt setup
- CTA & conversion improvements
- **Delivery:** 7-10 days

#### Card 2: AI-Powered Website + SEO Setup
**Price:** £1,500 - £2,500 one-time
**Best for:** New businesses or those with outdated websites

**Includes:**
- Everything in Foundational SEO Setup
- Brand new SEO-optimised website (3-5 pages)
- Mobile-first responsive design
- Contact forms & booking integration
- Speed-optimised hosting setup
- **Delivery:** 10-14 days

---

### Part 5: Monthly Retainer Packages

Three-tier card layout (like WebPackage):

#### Local Starter - £400/month
**Best for:** Small businesses needing basic local visibility

**Includes:**
- Google Business Profile management
- Local keyword tracking (10 keywords)
- Review management guidance
- Minor on-page tweaks
- Monthly performance report
- Email support

#### Growth (MOST POPULAR) - £750/month
**Best for:** Growing businesses wanting consistent local leads

**Includes:**
- Everything in Local Starter
- 1 new service page OR blog post per month
- Internal linking & content optimisation
- Conversion rate improvements
- Competitor monitoring
- Priority support
- Monthly strategy call

#### Dominator - £1,200+/month
**Best for:** Established businesses ready to dominate local search

**Includes:**
- Everything in Growth
- Proactive link building (2-3 quality links/month)
- Advanced technical SEO monitoring
- Comprehensive competitor analysis
- Multi-location optimisation
- Dedicated account manager
- Bi-weekly strategy calls

**Note below cards:** "All monthly plans require the one-time Foundational SEO Setup (£950) or can be bundled at a discount."

---

### Part 6: What You Get (Services Grid)

Visual grid with icons (6 items, 3x2 on desktop):

| Service | Icon | Description |
|---------|------|-------------|
| **Local SEO** | MapPin | Google Maps, "near me" searches, local pack |
| **On-Page SEO** | FileText | Titles, headings, meta descriptions, content |
| **Technical SEO** | Settings | Speed, mobile, Core Web Vitals, indexing |
| **Google Business Profile** | Building | Setup, optimisation, posts, Q&A management |
| **Content Strategy** | PenTool | Service pages, blogs, FAQs that rank |
| **Monthly Reporting** | BarChart3 | Clear metrics, rankings, traffic, conversions |

---

### Part 7: How It Works (Process Timeline)

4-step visual process:

| Step | Title | Description | Duration |
|------|-------|-------------|----------|
| 1 | **Free Audit** | We analyse your current SEO, competition & quick wins | 24 hours |
| 2 | **Strategy** | Custom plan based on your goals and local market | 2-3 days |
| 3 | **Implementation** | On-page fixes, GBP setup, technical improvements | 7-10 days |
| 4 | **Ongoing Growth** | Monthly optimisation, content, and link building | Continuous |

---

### Part 8: Comparison Table

Simple 3-column comparison:

| Factor | L&D Digital | DIY / Free Tools | Other Agencies |
|--------|-------------|------------------|----------------|
| Local focus | ✓ London specialists | Generic advice | Often national focus |
| Setup time | 7-10 days | Months of learning | 2-4 weeks |
| Monthly cost | £400-£1,200 | "Free" (your time) | £1,500-£5,000+ |
| Contract | No lock-in | N/A | 6-12 month contracts |
| Communication | Direct access | N/A | Account managers |
| Results focus | Local bookings | Traffic metrics | Vanity metrics |

---

### Part 9: FAQs Section

Accordion-style FAQ with 8 questions:

1. **"How long until I see results?"**
   Most local businesses see ranking improvements within 30-60 days, with significant traffic increases by 90 days. SEO is a long-term investment that compounds over time.

2. **"Do I need the one-time setup, or can I just do monthly?"**
   The one-time setup creates the foundation that makes monthly work effective. Without proper on-page SEO and technical fixes, monthly efforts won't deliver results.

3. **"What's included in the Google Business Profile optimisation?"**
   Full profile setup/optimisation, category selection, service descriptions, photo guidelines, post templates, Q&A management, and review response strategy.

4. **"Do you guarantee rankings?"**
   We never guarantee specific rankings — anyone who does is lying. We guarantee effort, transparency, and a proven process that has worked for 47+ local businesses.

5. **"Can I cancel the monthly retainer anytime?"**
   Yes. No long-term contracts. We work month-to-month because we believe results should keep you, not contracts.

6. **"What's the difference between local SEO and regular SEO?"**
   Local SEO focuses on ranking in Google Maps and "near me" searches for customers in your area. Regular SEO targets broader, often national keywords.

7. **"I already have a website. Do I need a new one?"**
   Usually not. The Foundational SEO Setup works with your existing site. We only recommend a new website if yours is severely outdated or built on a platform that limits SEO.

8. **"What industries do you work with?"**
   We specialise in local London businesses: clinics, trades, restaurants, retail, property, and professional services. If customers search for you locally, we can help.

---

### Part 10: Related Services Section

Internal link cards to complementary services:

| Service | Link | Description |
|---------|------|-------------|
| Web Development | /web-package | Need a new website first? |
| Content Marketing | /services/content-marketing | Ongoing blog & content strategy |
| Digital Marketing | /services/digital-marketing | Full marketing strategy |
| Google Ads | /contact | Paid search for immediate results |

---

### Part 11: Final CTA Section

Gradient background (teal-600 to gray-900)

**Content:**
- **Headline:** "Ready to Get Found Locally?"
- **Subheadline:** "Get a free SEO audit and see exactly where you can improve."
- **CTAs:** "Get Free SEO Audit" + "WhatsApp Us"

---

### Files to Modify

| File | Action |
|------|--------|
| `src/pages/services/Seo.tsx` | Complete rewrite with new structure |

---

### Technical Implementation Notes

1. **Imports needed:**
   - Add `MapPin`, `Building`, `Settings`, `PenTool` from lucide-react
   - Keep existing imports for AnimatedSection, Container, Card, etc.
   - Add Accordion components for FAQ section

2. **Schema updates:**
   - Update ServiceSchema priceRange to "£400-£1,200/month"
   - Update HowToSchema with new 4-step process
   - Add FAQSchema with all 8 questions

3. **Styling patterns:**
   - Follow WebPackage hero gradient style
   - Use amber badge for "MOST POPULAR" on Growth tier
   - Consistent card hover effects (hover-lift class)
   - Mobile-responsive grid layouts

4. **SEO focus:**
   - H1 contains "Local SEO" and "London" signals
   - H2s use benefit-focused language
   - Natural keyword integration throughout copy
   - Clear pricing signals for featured snippets

