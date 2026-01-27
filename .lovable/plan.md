

## Plan: Add Cloudflare Disclaimer & Create Support SLA Page

### Summary
Two changes:
1. **Cloudflare Setup Card**: Add a disclaimer note explaining the service is for websites needing CDN/caching setup only
2. **Support SLA Page**: Create a dedicated page at `/support-sla` detailing response times, coverage hours, and escalation procedures

---

## Part 1: Cloudflare Setup Card Enhancement

### Current Issue
The Cloudflare Setup card has some empty space below the micro-trust badges. Need to add a clarifying disclaimer similar to the one added to Support & Maintenance cards.

### Solution
Add an info note box explaining the scope of this service:

```
┌─────────────────────────────┐
│ Cloudflare Setup            │
│ £35 one-time setup fee      │
│                             │
│ ✓ Lightning-fast loading... │
│ ✓ Industry encryption...    │
│ ✓ Protection against...     │
│ ...                         │
│                             │
│ ┌─────────────────────────┐ │
│ │ ✓ One-time setup        │ │  ← EXISTING
│ │ ✓ No ongoing commitment │ │
│ └─────────────────────────┘ │
│                             │
│ ┌─────────────────────────┐ │
│ │ ℹ️ For websites needing │ │  ← NEW
│ │ CDN/caching setup only  │ │
│ │                         │ │
│ │ ⚡ Works with any host  │ │  ← NEW
│ │ or platform you use     │ │
│ └─────────────────────────┘ │
│                             │
│ [Upgrade Your Site →]       │
└─────────────────────────────┘
```

### File: `src/pages/WebPackage.tsx`

Add after line 576 (after existing micro-trust badges, before Button):

```tsx
{/* Service scope note */}
<div className="mb-4 p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
  <p className="text-xs text-slate-600 flex items-start gap-2">
    <Info className="h-3.5 w-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
    <span>For websites needing CDN/caching setup only</span>
  </p>
  <p className="text-xs text-slate-600 flex items-start gap-2">
    <Zap className="h-3.5 w-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
    <span>Works with any existing host or platform you use</span>
  </p>
</div>
```

### Import Update
Add `Zap` to existing imports (Info and Clock already added in previous changes).

---

## Part 2: Support SLA Page

### New File: `src/pages/SupportSla.tsx`

A dedicated page explaining support service levels, response times, and what clients can expect.

### Page Structure

| Section | Content |
|---------|---------|
| Hero | "Support Service Level Agreement" |
| Response Times Table | Tiered response times by priority |
| Coverage Hours | Business hours, holidays, emergency |
| Escalation Procedures | How issues get escalated |
| FAQ | Common questions about support |
| CTA | Contact link |

### Content Details

#### Response Times Table
```
┌──────────────┬────────────────┬─────────────────────────────────┐
│ Priority     │ Response Time  │ Examples                        │
├──────────────┼────────────────┼─────────────────────────────────┤
│ Critical     │ 4 hours        │ Site down, major functionality  │
│ High         │ 24 hours       │ Broken forms, payment issues    │
│ Normal       │ 24–72 hours    │ Content updates, minor bugs     │
│ Low          │ 5 business days│ Feature requests, enhancements  │
└──────────────┴────────────────┴─────────────────────────────────┘
```

#### Coverage Hours
- **Business Hours**: Monday–Friday, 9am–6pm GMT
- **Weekend Support**: Emergency only (site down)
- **Bank Holidays**: Closed (emergency coverage for critical issues)
- **Response = Acknowledgement**: We'll acknowledge your request within the stated time; resolution time depends on complexity

#### Escalation Procedures
1. **Initial Contact**: Submit via contact form or email
2. **Acknowledgement**: Confirmation within response time
3. **Triage**: Issue assessed and prioritised
4. **Resolution**: Fix implemented and verified
5. **Follow-up**: Confirmation that issue is resolved

### Route Configuration

#### File: `src/App.tsx`

1. Add lazy import (around line 37):
```tsx
const SupportSla = lazy(() => import("./pages/SupportSla"));
```

2. Add route (around line 176, after `/faq`):
```tsx
<Route path="/support-sla" element={<SupportSla />} />
```

### SEO Configuration
- **Title**: "Support SLA | Response Times & Service Levels | L&D Digital"
- **Description**: "Our support service level agreement. Learn about response times, coverage hours, and how we handle your website issues."
- **Canonical URL**: `https://digital.luminousanddeliver.co.uk/support-sla`

---

## File Changes Summary

| File | Action |
|------|--------|
| `src/pages/WebPackage.tsx` | Add disclaimer note to Cloudflare Setup card |
| `src/pages/SupportSla.tsx` | **CREATE** new SLA page |
| `src/App.tsx` | Add lazy import and route for SLA page |

---

## Technical Notes

### Imports for WebPackage.tsx
`Zap` icon needed for the new note - will add to existing import line.

### SupportSla.tsx Template
Following the same pattern as existing service pages:
- Navigation with `darkHero` prop
- Hero section with gradient
- BreadcrumbNav below hero
- Content sections with AnimatedSection
- Container wrapper for consistent max-width
- Footer at bottom

### Accordion for FAQ
Will use existing Accordion component from `@/components/ui/accordion` for the FAQ section on the SLA page.

