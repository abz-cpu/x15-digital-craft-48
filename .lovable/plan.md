

## Update SEO Page Pricing

Update the pricing cards in `src/pages/services/Seo.tsx` (lines 442-601) with the new prices and descriptions you provided.

---

### Changes Summary

#### One-Time Setup Cards (lines 442-501)

| Card | Current Price | New Price |
|------|--------------|-----------|
| Local SEO Foundation | £300-£600 | £200-£350 |
| Local SEO Launch | £750-£950 | £400-£600 |

- **Foundation** description updated to: "Full SEO + local audit, local keyword plan, GBP optimisation, on-page fixes (core pages), local schema + indexing checks."
- **Launch** keeps "Recommended" badge, description updated to reference everything in Foundation plus expanded items.

#### Monthly Retainer Cards (lines 512-599)

| Card | Current Price | New Price |
|------|--------------|-----------|
| Local Visibility | £200-£250/mo | £150-£200/mo |
| Starter SEO | £350-£400/mo | £250-£350/mo |
| Growth SEO | £550-£750/mo | £400-£500/mo |

- **Growth SEO** keeps "Most Popular" badge.
- Feature lists updated to match your provided bullet points exactly.

#### Schema Update (line 99)

- Update `priceRange` from `"£200-£950+"` to `"£150-£600+"` to reflect new range.

---

### Technical Details

**File:** `src/pages/services/Seo.tsx`

**Line 99** - ServiceSchema priceRange:
- From: `£200-£950+`
- To: `£150-£600+`

**Lines 447-448** - Foundation price:
- From: `£300–£600`
- To: `£200–£350`

**Lines 477-478** - Launch price:
- From: `£750–£950`
- To: `£400–£600`

**Line 517** - Local Visibility price:
- From: `£200–£250`
- To: `£150–£200`

**Line 548** - Starter SEO price:
- From: `£350–£400`
- To: `£250–£350`

**Line 578** - Growth SEO price:
- From: `£550–£750`
- To: `£400–£500`

All feature bullet point lists will be updated to match your provided content exactly. The card structure, layout, badges ("Recommended" and "Most Popular"), and styling remain unchanged.

