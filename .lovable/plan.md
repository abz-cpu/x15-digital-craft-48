

## Plan: Fix Buttons Overflowing Outside Card Boxes

### Problem

The buttons are appearing outside their card containers. This happens because:

1. Each `Card` has `h-full` to match grid heights
2. Each `CardContent` also has `h-full` which tries to take 100% of the card's height
3. Since `CardContent` comes after `CardHeader`, adding `h-full` causes it to overflow past the card boundary
4. The buttons, pushed to the bottom with flexbox, end up outside the visible card area

### Solution

Make the entire Card a flex column container and let `CardContent` grow to fill remaining space after `CardHeader`:

1. Add `flex flex-col` to each Card (keeps `h-full`)
2. Remove `h-full` from each `CardContent` (the parent's flex will handle height)
3. Keep `flex flex-col` on `CardContent` for internal button alignment

### File Changes

| File | Action |
|------|--------|
| `src/pages/WebPackage.tsx` | Update Card and CardContent classes for all 3 cards |

---

### Technical Changes

#### Card 1 - Cloudflare Setup (Line 521)

**From:**
```tsx
<Card className="hover-lift relative h-full bg-white border border-border">
```

**To:**
```tsx
<Card className="hover-lift relative h-full flex flex-col bg-white border border-border">
```

#### CardContent 1 (Line 532)

**From:**
```tsx
<CardContent className="pb-6 flex flex-col h-full">
```

**To:**
```tsx
<CardContent className="pb-6 flex flex-col flex-grow">
```

---

#### Card 2 - Support & Maintenance (Line 622-624)

**From:**
```tsx
<Card
  id="support-maintenance"
  className="hover-lift relative h-full bg-white border-2 border-primary/40 shadow-lg lg:-mt-2 scroll-mt-24"
>
```

**To:**
```tsx
<Card
  id="support-maintenance"
  className="hover-lift relative h-full flex flex-col bg-white border-2 border-primary/40 shadow-lg lg:-mt-2 scroll-mt-24"
>
```

#### CardContent 2 (Line 650)

**From:**
```tsx
<CardContent className="pb-6 flex flex-col h-full">
```

**To:**
```tsx
<CardContent className="pb-6 flex flex-col flex-grow">
```

---

#### Card 3 - Hosting + Support (Line 740)

**From:**
```tsx
<Card className="hover-lift relative h-full bg-white border border-primary/30">
```

**To:**
```tsx
<Card className="hover-lift relative h-full flex flex-col bg-white border border-primary/30">
```

#### CardContent 3 (Line 755)

**From:**
```tsx
<CardContent className="pb-6 flex flex-col h-full">
```

**To:**
```tsx
<CardContent className="pb-6 flex flex-col flex-grow">
```

---

### Visual Result

```
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ CardHeader       │  │ CardHeader       │  │ CardHeader       │
│                  │  │                  │  │                  │
│ CardContent      │  │ CardContent      │  │ CardContent      │
│ (flex-grow)      │  │ (flex-grow)      │  │ (flex-grow)      │
│                  │  │                  │  │                  │
│ ┌──────────────┐ │  │ ┌──────────────┐ │  │ ┌──────────────┐ │
│ │ flex-grow    │ │  │ │ flex-grow    │ │  │ │ flex-grow    │ │
│ │ content      │ │  │ │ content      │ │  │ │ content      │ │
│ └──────────────┘ │  │ └──────────────┘ │  │ └──────────────┘ │
│                  │  │                  │  │                  │
│ [BUTTON]         │  │ [BUTTON]         │  │ [BUTTON]         │ ← Inside card
└──────────────────┘  └──────────────────┘  └──────────────────┘
```

### Summary of Changes

| Line | Element | Change |
|------|---------|--------|
| 521 | Card 1 | Add `flex flex-col` |
| 532 | CardContent 1 | Replace `h-full` with `flex-grow` |
| 622-624 | Card 2 | Add `flex flex-col` |
| 650 | CardContent 2 | Replace `h-full` with `flex-grow` |
| 740 | Card 3 | Add `flex flex-col` |
| 755 | CardContent 3 | Replace `h-full` with `flex-grow` |

