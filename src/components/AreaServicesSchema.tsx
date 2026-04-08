import { useEffect } from "react";

interface AreaServicesSchemaProps {
  location: {
    name: string;
    slug: string;
    postcodes: string[];
  };
}

const serviceDefinitions = [
  {
    id: "website-design",
    name: "Website Design",
    serviceType: "Web Design",
    description: (location: string) =>
      `Professional website design services for ${location} businesses. Fast delivery, transparent pricing, starting from £200.`,
    price: 200,
    priceUnit: "project",
    path: "/web-package",
  },
  {
    id: "web-development",
    name: "Web Development",
    serviceType: "Web Development",
    description: (location: string) =>
      `Expert web development for ${location} businesses. Custom websites built with modern technology, starting from £200.`,
    price: 200,
    priceUnit: "project",
    path: "/web-package",
  },
  {
    id: "ecommerce",
    name: "Ecommerce Stores",
    serviceType: "Ecommerce Development",
    description: (location: string) =>
      `Online store development for ${location} businesses. Full shopping cart, payments, and inventory management from £500.`,
    price: 500,
    priceUnit: "project",
    path: "/services/ecommerce",
  },
  {
    id: "ai-chatbots",
    name: "AI Chatbots",
    serviceType: "AI Chatbot Development",
    description: (location: string) =>
      `AI chatbot solutions for ${location} businesses. 24/7 customer support automation from £50/month.`,
    price: 50,
    priceUnit: "month",
    path: "/ai-package",
  },
  {
    id: "pos-systems",
    name: "POS Systems",
    serviceType: "POS System Installation",
    description: (location: string) =>
      `Square POS installation for ${location} businesses. Hardware setup, training, and support from £299.`,
    price: 299,
    priceUnit: "project",
    path: "/services/pos-setup",
  },
  {
    id: "it-support",
    name: "IT Support",
    serviceType: "IT Support Services",
    description: (location: string) =>
      `IT support services for ${location} small businesses. Remote support, troubleshooting, and security from £25/month.`,
    price: 25,
    priceUnit: "month",
    path: "/services/it-support",
  },
  {
    id: "seo-services",
    name: "SEO Services",
    serviceType: "Search Engine Optimization",
    description: (location: string) =>
      `Local SEO services for ${location} businesses. Rank higher on Google for local searches, from £300.`,
    price: 300,
    priceUnit: "project",
    path: "/services/seo",
  },
  {
    id: "order-trackers",
    name: "Order Trackers",
    serviceType: "Custom Business Application",
    description: (location: string) =>
      `Custom order tracking apps for ${location} businesses. Real-time order status and notifications from £500.`,
    price: 500,
    priceUnit: "project",
    path: "/services/personalised-apps",
  },
  {
    id: "invoice-trackers",
    name: "Invoice Trackers",
    serviceType: "Invoice Management System",
    description: (location: string) =>
      `Invoice tracking systems for ${location} businesses. Automated invoicing and payment reminders from £500.`,
    price: 500,
    priceUnit: "project",
    path: "/services/personalised-apps",
  },
];

const BASE_URL = "https://digital.luminousanddeliver.co.uk";

export const AreaServicesSchema = ({ location }: AreaServicesSchemaProps) => {
  useEffect(() => {
    const scriptId = `area-services-schema-${location.slug}`;
    
    // Remove existing script if present
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    // Generate service schemas
    const serviceSchemas = serviceDefinitions.map((service) => ({
      "@type": "Service",
      "@id": `${BASE_URL}/areas/${location.slug}#${service.id}`,
      name: `${service.name} in ${location.name}`,
      description: service.description(location.name),
      url: `${BASE_URL}/areas/${location.slug}`,
      serviceType: service.serviceType,
      provider: {
        "@id": `${BASE_URL}/#organization`,
      },
      areaServed: {
        "@type": "Place",
        name: location.name,
        address: {
          "@type": "PostalAddress",
          postalCode: location.postcodes.join(", "),
          addressLocality: location.name,
          addressRegion: "East London",
          addressCountry: "GB",
        },
      },
      offers: {
        "@type": "Offer",
        price: service.price.toString(),
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: service.price.toString(),
          priceCurrency: "GBP",
          unitText: service.priceUnit,
        },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "3",
        bestRating: "5",
        worstRating: "1",
      },
    }));

    // Create the @graph schema
    const schema = {
      "@context": "https://schema.org",
      "@graph": serviceSchemas,
    };

    // Create and append script
    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [location.slug, location.name, location.postcodes]);

  return null;
};
