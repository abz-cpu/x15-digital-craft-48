import { useEffect } from "react";

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  priceRange?: string;
  serviceType?: string;
}

export const ServiceSchema = ({
  name,
  description,
  url,
  image,
  priceRange = "£100-£1500",
  serviceType,
}: ServiceSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name,
      description,
      url,
      ...(image && { image }),
      provider: {
        "@id": "https://digital.luminousanddeliver.co.uk/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },
      serviceType: serviceType || name,
      priceRange,
      offers: {
        "@type": "Offer",
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
        seller: {
          "@id": "https://digital.luminousanddeliver.co.uk/#organization",
        },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "3",
        bestRating: "5",
        worstRating: "1",
      },
    };

    const schemaId = `service-schema-${name.toLowerCase().replace(/\s+/g, "-")}`;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = schemaId;
    script.textContent = JSON.stringify(schema);

    const existing = document.getElementById(schemaId);
    if (existing) {
      existing.remove();
    }

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(schemaId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [name, description, url, image, priceRange, serviceType]);

  return null;
};
