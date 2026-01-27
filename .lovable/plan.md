

## Plan: Fix SEO Audit Section Spacing

### Problem Identified
The SEO audit section has duplicate headers - the left column shows "FREE SEO AUDIT" badge, "Get Your Free Website Review" heading, and description, while the SeoAuditForm component on the right ALSO shows the same content. This creates:
- Redundant content
- Wasted vertical space
- Poor visual hierarchy

### Solution
Add a new `variant="embedded"` to the SeoAuditForm component that hides the internal header, keeping only the form fields. This variant is used when the form is embedded in a section that already provides the context/heading.

---

### File Changes

| File | Action |
|------|--------|
| `src/components/SeoAuditForm.tsx` | Add `embedded` variant that hides header |
| `src/pages/services/Seo.tsx` | Use `variant="embedded"` for the form |

---

### Technical Changes

#### 1. SeoAuditForm.tsx - Add Embedded Variant

```typescript
// Update the variant prop type
interface SeoAuditFormProps {
  className?: string;
  variant?: "default" | "compact" | "embedded";
}

// Update the isCompact check and add isEmbedded
const isCompact = variant === "compact";
const isEmbedded = variant === "embedded";
```

**Conditional rendering for header section:**
- When `variant="embedded"`, skip the entire header block (lines 222-235)
- Keep the form fields and submit button intact

#### 2. Seo.tsx - Update Form Usage

Change:
```tsx
<SeoAuditForm />
```

To:
```tsx
<SeoAuditForm variant="embedded" />
```

This removes ~80px of duplicated content from the right column, bringing both columns into better visual alignment.

---

### Visual Before/After

**Before:**
```
┌─────────────────────┐  ┌─────────────────────┐
│ FREE SEO AUDIT      │  │ FREE SEO AUDIT      │
│ Get Your Free...    │  │ Get Your Free...    │  ← DUPLICATE
│ Description...      │  │ Description...      │
│                     │  │                     │
│ ✓ Custom analysis   │  │ [Business name]     │
│ ✓ GBP review        │  │ [Business type]     │
│ ✓ Top 3 actions     │  │ [Website URL]       │
│ ✓ Honest assessment │  │ [Email] [Phone]     │
│                     │  │ [Target Areas]      │
│ ┌─────────────────┐ │  │ [Submit Button]     │
│ │ No sales pitch  │ │  │                     │
│ └─────────────────┘ │  │                     │
└─────────────────────┘  └─────────────────────┘
```

**After:**
```
┌─────────────────────┐  ┌─────────────────────┐
│ FREE SEO AUDIT      │  │ [Business name]     │
│ Get Your Free...    │  │ [Business type]     │
│ Description...      │  │ [Website URL]       │
│                     │  │ [Email] [Phone]     │
│ ✓ Custom analysis   │  │ [Target Areas]      │
│ ✓ GBP review        │  │ [CAPTCHA]           │
│ ✓ Top 3 actions     │  │ [Submit Button]     │
│ ✓ Honest assessment │  │ Trust signals       │
│                     │  │                     │
│ ┌─────────────────┐ │  └─────────────────────┘
│ │ No sales pitch  │ │
│ └─────────────────┘ │
└─────────────────────┘
```

---

### Implementation Details

**SeoAuditForm.tsx changes:**

```tsx
// Line 55 - Update variant type
interface SeoAuditFormProps {
  className?: string;
  variant?: "default" | "compact" | "embedded";
}

// Line 213 - Add embedded check
const isCompact = variant === "compact";
const isEmbedded = variant === "embedded";

// Lines 221-236 - Conditionally render header
{!isEmbedded && (
  <div className="mb-6">
    <div className="flex items-center gap-2 mb-2">
      <Sparkles className="h-5 w-5 text-primary" />
      <span className="text-sm font-semibold text-primary uppercase tracking-wide">
        Free SEO Audit
      </span>
    </div>
    <h3 className={`font-bold text-secondary ${isCompact ? "text-xl" : "text-2xl"}`}>
      Get Your Free Website Review
    </h3>
    <p className="text-sm text-muted-foreground mt-1">
      We'll analyse your site and send you a custom SEO action plan within 24 hours.
    </p>
  </div>
)}
```

**Seo.tsx changes:**

```tsx
// Line 669 - Add variant prop
<SeoAuditForm variant="embedded" />
```

