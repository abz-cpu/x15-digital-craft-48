

## Plan: Add Support SLA Links to Cards & Footer

### Summary
Add links to the Support SLA page (`/support-sla`) from three locations:
1. **Disclaimer notes** on Support & Maintenance card
2. **Disclaimer notes** on Hosting + Support card  
3. **Footer navigation** under the Resources section

---

### File Changes

| File | Action |
|------|--------|
| `src/pages/WebPackage.tsx` | Add "View Support SLA" link to both disclaimer boxes |
| `src/components/Footer.tsx` | Add Support SLA link to Resources navigation |

---

### Part 1: Add Link to Card Disclaimer Notes

Add a new line at the bottom of each disclaimer box with a link to the SLA page.

**Support & Maintenance Card (after line 697):**

```tsx
<Link to="/support-sla" className="text-xs text-primary hover:text-primary/80 flex items-center gap-1.5 font-medium underline underline-offset-2">
  View Support SLA →
</Link>
```

**Hosting + Support Card (after line 789):**

Same link added to the second card's disclaimer box.

**Visual Result:**

```
┌─────────────────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────────────────┐ │
│ │ ℹ️ Available only for websites built or managed... │ │
│ │ 🕐 Non-urgent support. Subject to availability...  │ │
│ │ ⚠️ Urgent support prioritises response time only...│ │
│ │ ⚡ Urgent support available for +£5/month...       │ │
│ │                                                     │ │
│ │ View Support SLA →                                  │ │  ← NEW LINK
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ [Get Peace of Mind →]                                   │
└─────────────────────────────────────────────────────────┘
```

---

### Part 2: Add to Footer Resources Section

Add the Support SLA link to the Resources navigation in the footer, after the Terms of Service link.

**Current Resources section (lines 243-272):**
- FAQ
- Privacy Policy
- Terms of Service

**Updated Resources section:**
- FAQ
- Privacy Policy
- Terms of Service
- **Support SLA** ← NEW

**Code to add after line 270 (after Terms of Service `</li>`):**

```tsx
<li>
  <Link
    to="/support-sla"
    className="text-sm text-white/60 hover:text-accent transition-colors"
  >
    Support SLA
  </Link>
</li>
```

---

### Technical Implementation Details

#### WebPackage.tsx Changes

1. **Support & Maintenance Card** - Add link inside the disclaimer `div` at line 698 (before closing `</div>`):

```tsx
<Link 
  to="/support-sla" 
  className="text-xs text-primary hover:text-primary/80 flex items-center gap-1.5 font-medium underline underline-offset-2 pt-1"
>
  View Support SLA →
</Link>
```

2. **Hosting + Support Card** - Add the same link inside the disclaimer `div` at line 790 (before closing `</div>`).

#### Footer.tsx Changes

Add new list item after line 269 in the Resources `<ul>`:

```tsx
<li>
  <Link
    to="/support-sla"
    className="text-sm text-white/60 hover:text-accent transition-colors"
  >
    Support SLA
  </Link>
</li>
```

---

### Styling Notes

| Element | Style | Reason |
|---------|-------|--------|
| Card link | `text-primary` with underline | Matches brand, clearly clickable |
| Card link | `pt-1` padding | Visual separation from content above |
| Footer link | Same as other footer links | Consistency with existing navigation |

