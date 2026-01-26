
## Plan: Create Unified AreaServicesSchema Component

### Summary
Create a new `AreaServicesSchema.tsx` component that dynamically generates individual Service schema markup for each of the 9 services offered on area pages. This provides more granular SEO signals than the current `ServiceAreaSchema.tsx` which groups all services into a single schema.

---

### Current State

The `LocationPageTemplate.tsx` currently uses:
- `ServiceAreaSchema` - A single schema covering all areas and services together
- `FAQSchema` - For the FAQ section

**Problem**: The current `ServiceAreaSchema` bundles all services into one schema object. For better SEO, each service should have its own distinct Service schema with location-specific data.

---

### Solution: New AreaServicesSchema Component

Create a component that accepts the location data and generates individual `@type: Service` schema entries for each service offered in that area.

**File:** `src/components/AreaServicesSchema.tsx`

---

### Component Design

```typescript
interface AreaServicesSchemaProps {
  location: {
    name: string;
    slug: string;
    postcodes: string[];
  };
}
```

**Services to Generate Schema For:**
| Service | Starting Price | Service Type |
|---------|---------------|--------------|
| Website Design | £200 | Web Design |
| Web Development | £200 | Web Development |
| Ecommerce Stores | £500 | Ecommerce Development |
| AI Chatbots | £50/month | AI Chatbot Development |
| POS Systems | £299 | POS System Installation |
| IT Support | £25/month | IT Support Services |
| SEO Services | £300 | Search Engine Optimization |
| Order Trackers | £500 | Custom Business Application |
| Invoice Trackers | £500 | Custom Business Application |

---

### Schema Structure (Per Service)

Each service generates a schema like:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://digital.luminousanddeliver.co.uk/areas/stratford#website-design",
  "name": "Website Design in Stratford",
  "description": "Professional website design services for Stratford businesses. Fast delivery, transparent pricing, starting from £200.",
  "url": "https://digital.luminousanddeliver.co.uk/areas/stratford",
  "serviceType": "Web Design",
  "provider": {
    "@id": "https://digital.luminousanddeliver.co.uk/#organization"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Stratford",
    "address": {
      "@type": "PostalAddress",
      "postalCode": "E15, E20",
      "addressLocality": "Stratford",
      "addressRegion": "East London",
      "addressCountry": "GB"
    }
  },
  "offers": {
    "@type": "Offer",
    "price": "200",
    "priceCurrency": "GBP",
    "availability": "https://schema.org/InStock",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "200",
      "priceCurrency": "GBP",
      "unitText": "project"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

---

### Implementation Details

#### 1. Service Definitions Array

```typescript
const serviceDefinitions = [
  {
    id: "website-design",
    name: "Website Design",
    serviceType: "Web Design",
    description: (location: string) => 
      `Professional website design services for ${location} businesses. Fast delivery, transparent pricing.`,
    price: 200,
    priceUnit: "project",
    path: "/web-package",
  },
  {
    id: "web-development",
    name: "Web Development",
    serviceType: "Web Development",
    description: (location: string) => 
      `Expert web development for ${location} businesses. Custom websites built with modern technology.`,
    price: 200,
    priceUnit: "project",
    path: "/web-package",
  },
  {
    id: "ecommerce",
    name: "Ecommerce Stores",
    serviceType: "Ecommerce Development",
    description: (location: string) => 
      `Online store development for ${location} businesses. Full shopping cart, payments, and inventory.`,
    price: 500,
    priceUnit: "project",
    path: "/services/ecommerce",
  },
  {
    id: "ai-chatbots",
    name: "AI Chatbots",
    serviceType: "AI Chatbot Development",
    description: (location: string) => 
      `AI chatbot solutions for ${location} businesses. 24/7 customer support automation.`,
    price: 50,
    priceUnit: "month",
    path: "/ai-package",
  },
  {
    id: "pos-systems",
    name: "POS Systems",
    serviceType: "POS System Installation",
    description: (location: string) => 
      `Square POS installation for ${location} businesses. Hardware setup, training, and support.`,
    price: 299,
    priceUnit: "project",
    path: "/services/pos-setup",
  },
  {
    id: "it-support",
    name: "IT Support",
    serviceType: "IT Support Services",
    description: (location: string) => 
      `IT support services for ${location} small businesses. Remote support, troubleshooting, security.`,
    price: 25,
    priceUnit: "month",
    path: "/services/it-support",
  },
  {
    id: "seo-services",
    name: "SEO Services",
    serviceType: "Search Engine Optimization",
    description: (location: string) => 
      `Local SEO services for ${location} businesses. Rank higher on Google for local searches.`,
    price: 300,
    priceUnit: "project",
    path: "/services/seo",
  },
  {
    id: "order-trackers",
    name: "Order Trackers",
    serviceType: "Custom Business Application",
    description: (location: string) => 
      `Custom order tracking apps for ${location} businesses. Real-time order status and notifications.`,
    price: 500,
    priceUnit: "project",
    path: "/services/personalised-apps",
  },
  {
    id: "invoice-trackers",
    name: "Invoice Trackers",
    serviceType: "Invoice Management System",
    description: (location: string) => 
      `Invoice tracking systems for ${location} businesses. Automated invoicing and payment reminders.`,
    price: 500,
    priceUnit: "project",
    path: "/services/personalised-apps",
  },
];
```

#### 2. Schema Generation Logic

- Loop through `serviceDefinitions`
- Generate a unique `@id` per service per location
- Include location-specific `areaServed` with postcodes
- Use `priceSpecification` with correct `unitText` (project vs month)
- Output as a single `<script>` tag with an array of schemas OR multiple `<script>` tags

**Recommended approach**: Single script with `@graph` containing all services (cleaner DOM, valid JSON-LD):

```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Service", ... },
    { "@type": "Service", ... },
    ...
  ]
}
```

---

### Integration with LocationPageTemplate

**File:** `src/components/LocationPageTemplate.tsx`

**Changes:**
1. Import the new `AreaServicesSchema` component
2. Add it alongside existing schemas (keep `ServiceAreaSchema` for backwards compatibility, or replace it)

```typescript
import { AreaServicesSchema } from "@/components/AreaServicesSchema";

// In the component:
<AreaServicesSchema location={location} />
```

---

### Files Summary

| File | Action |
|------|--------|
| `src/components/AreaServicesSchema.tsx` | Create new unified schema component |
| `src/components/LocationPageTemplate.tsx` | Import and use new component |

---

### SEO Benefits

1. **Granular Indexing**: Each service gets its own schema entry, improving chances of rich snippets
2. **Location-Specific**: Schema explicitly ties each service to the specific area
3. **Price Clarity**: Individual price specifications per service (project vs monthly)
4. **Internal Linking**: Each schema references the correct service page URL
5. **Consistent Ratings**: Shared aggregate rating across all services

---

### Technical Considerations

- **Single Script Tag**: Using `@graph` keeps DOM clean
- **Dynamic Generation**: Schema content updates automatically when services change
- **Cleanup on Unmount**: Component removes script when navigating away
- **Unique IDs**: Each schema has a unique `@id` to prevent conflicts

