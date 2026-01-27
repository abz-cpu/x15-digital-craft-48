

## Plan: Improve Support Disclaimer Notes on Web Package Cards

### Summary
Update the disclaimer notes on the Support & Maintenance and Hosting + Support cards to:
1. Reword the response time note to include "Subject to availability"
2. Add clarity that urgent support prioritises response time only (not immediate fixes)
3. Add an upsell option for faster response at +£5/month

---

### Current vs. New Content

**Current (both cards):**
```
ℹ️ Available only for websites built or managed by L&D Digital
🕐 Non-urgent support. Typical response within 24–72 hours.
```

**New (both cards):**
```
ℹ️ Available only for websites built or managed by L&D Digital
🕐 Non-urgent support. Subject to availability. Typical response within 24–72 hours.
⚠️ Urgent support prioritises response time only and does not guarantee immediate fixes.
⚡ Urgent support available for +£5/month. Faster response for urgent issues.
```

---

### File Changes

| File | Action |
|------|--------|
| `src/pages/WebPackage.tsx` | Update disclaimer notes on lines 681-690 and 766-775, add `AlertTriangle` icon import |

---

### Technical Implementation

#### 1. Update Imports (Line 10)

Add `AlertTriangle` to the existing lucide-react imports:

```tsx
import { CheckCircle2, ArrowRight, MessageSquare, Phone, Briefcase, Shield, Tag, Info, Clock, Zap, AlertTriangle } from "lucide-react";
```

#### 2. Support & Maintenance Card (Lines 680-690)

Replace current disclaimer block:

```tsx
{/* Availability & response note */}
<div className="mb-4 p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
  <p className="text-xs text-slate-600 flex items-start gap-2">
    <Info className="h-3.5 w-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
    <span>Available only for websites built or managed by L&D Digital</span>
  </p>
  <p className="text-xs text-slate-600 flex items-start gap-2">
    <Clock className="h-3.5 w-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
    <span>Non-urgent support. Subject to availability. Typical response within 24–72 hours.</span>
  </p>
  <p className="text-xs text-slate-600 flex items-start gap-2">
    <AlertTriangle className="h-3.5 w-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
    <span>Urgent support prioritises response time only and does not guarantee immediate fixes.</span>
  </p>
  <p className="text-xs text-primary flex items-start gap-2 font-medium">
    <Zap className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
    <span>Urgent support available for +£5/month. Faster response for urgent issues.</span>
  </p>
</div>
```

#### 3. Hosting + Support Card (Lines 765-775)

Apply the same update to the second card's disclaimer block.

---

### Visual Preview

```
┌─────────────────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────────────────┐ │
│ │ ℹ️ Available only for websites built or managed    │ │
│ │    by L&D Digital                                   │ │
│ │                                                     │ │
│ │ 🕐 Non-urgent support. Subject to availability.    │ │
│ │    Typical response within 24–72 hours.            │ │
│ │                                                     │ │
│ │ ⚠️ Urgent support prioritises response time only   │ │
│ │    and does not guarantee immediate fixes.         │ │
│ │                                                     │ │
│ │ ⚡ Urgent support available for +£5/month.         │ │  ← Highlighted in primary colour
│ │    Faster response for urgent issues.              │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ [Get Peace of Mind →]                                   │
└─────────────────────────────────────────────────────────┘
```

---

### Styling Details

| Element | Icon | Colour | Purpose |
|---------|------|--------|---------|
| Availability | `Info` | Slate | Neutral informational |
| Response time | `Clock` | Slate | Sets expectations |
| No guarantee | `AlertTriangle` | Amber | Warning/caveat |
| Urgent upsell | `Zap` | Primary (teal) | Highlights upgrade option |

The urgent upsell line uses `text-primary` and `font-medium` to make it stand out as a positive action item rather than just another disclaimer.

