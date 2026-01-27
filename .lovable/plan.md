

## Plan: Add Availability & Response Time Notes to Support Cards

### Summary
Add two informational notes to the Support & Maintenance and Hosting + Support cards:
1. **Availability disclaimer**: "Available only for websites built or managed by L&D Digital"
2. **Response time expectation**: "Non-urgent support. Typical response within 24–72 hours"

---

### Visual Placement

The notes will appear as subtle info banners just before the CTA button:

```
┌─────────────────────────────┐
│ Support & Maintenance       │
│ £24.99/month                │
│                             │
│ ✓ Feature list...           │
│                             │
│ [Existing teal trust badge] │
│                             │
│ ┌─────────────────────────┐ │
│ │ ℹ️ Available only for   │ │  ← NEW
│ │ websites built or       │ │
│ │ managed by L&D Digital  │ │
│ │                         │ │
│ │ 🕐 Non-urgent support.  │ │  ← NEW
│ │ Typical response within │ │
│ │ 24–72 hours.            │ │
│ └─────────────────────────┘ │
│                             │
│ [Get Peace of Mind →]       │
└─────────────────────────────┘
```

---

### File Changes

| File | Action |
|------|--------|
| `src/pages/WebPackage.tsx` | Add `Info` and `Clock` icons to imports, add disclaimer notes to both cards |

---

### Technical Implementation

#### 1. Update Imports (Line 10)

```tsx
import { CheckCircle2, ArrowRight, MessageSquare, Phone, Briefcase, Shield, Tag, Info, Clock } from "lucide-react";
```

#### 2. Support & Maintenance Card (After line 666, before Button)

Add after the existing teal trust badge:

```tsx
{/* Availability & response note */}
<div className="mb-4 p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
  <p className="text-xs text-slate-600 flex items-start gap-2">
    <Info className="h-3.5 w-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
    <span>Available only for websites built or managed by L&D Digital</span>
  </p>
  <p className="text-xs text-slate-600 flex items-start gap-2">
    <Clock className="h-3.5 w-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
    <span>Non-urgent support. Typical response within 24–72 hours.</span>
  </p>
</div>
```

#### 3. Hosting + Support Card (After line 739, before Button)

Add after the existing amber trust badge:

```tsx
{/* Availability & response note */}
<div className="mb-4 p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
  <p className="text-xs text-slate-600 flex items-start gap-2">
    <Info className="h-3.5 w-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
    <span>Available only for websites built or managed by L&D Digital</span>
  </p>
  <p className="text-xs text-slate-600 flex items-start gap-2">
    <Clock className="h-3.5 w-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
    <span>Non-urgent support. Typical response within 24–72 hours.</span>
  </p>
</div>
```

---

### Styling Details

| Property | Value | Reason |
|----------|-------|--------|
| Background | `bg-slate-50` | Neutral, non-alarming, distinct from teal/amber badges |
| Border | `border-slate-200` | Subtle definition |
| Text | `text-slate-600` | Readable secondary text |
| Icons | `Info` + `Clock` | Clear visual indicators |
| Padding | `p-3` | Consistent with other trust badges |
| Font size | `text-xs` | Small disclaimer style |

This creates a clear visual distinction from the feature-focused trust badges (teal and amber), signalling these are conditions/expectations rather than selling points.

