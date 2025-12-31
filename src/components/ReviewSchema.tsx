import { useEffect } from "react";

interface ReviewSchemaProps {
  ratingValue?: string;
  reviewCount?: string;
  bestRating?: string;
}

export const ReviewSchema = ({ 
  ratingValue = "4.9", 
  reviewCount = "12",
  bestRating = "5"
}: ReviewSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://digital.luminousanddeliver.co.uk/#reviewbusiness",
      "name": "L&D Digital",
      "url": "https://digital.luminousanddeliver.co.uk",
      "telephone": "+447356260648",
      "email": "contact.luminousanddeliver@gmail.com",
      "image": "https://digital.luminousanddeliver.co.uk/og-image.jpg",
      "priceRange": "£200-£1500",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "7 Corsican Square",
        "addressLocality": "Bromley-by-Bow",
        "addressRegion": "Greater London",
        "postalCode": "E3 3YD",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 51.521838,
        "longitude": -0.018013
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": ratingValue,
        "reviewCount": reviewCount,
        "bestRating": bestRating
      }
    };

    // Remove existing review schema if any
    const existingScript = document.querySelector('script[data-review-schema]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new review schema
    const script = document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    script.setAttribute("data-review-schema", "true");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [ratingValue, reviewCount, bestRating]);

  return null;
};