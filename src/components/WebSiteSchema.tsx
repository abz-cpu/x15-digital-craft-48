import { useEffect } from "react";

export const WebSiteSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://digital.luminousanddeliver.co.uk/#website",
      url: "https://digital.luminousanddeliver.co.uk",
      name: "L&D Digital",
      alternateName: "Luminous & Deliver Digital",
      description:
        "Professional web development for restaurants, ecommerce, and brands. Built in 1-14 days from £200. UK-based team. SEO-optimized, mobile-responsive websites.",
      publisher: {
        "@id": "https://digital.luminousanddeliver.co.uk/#organization",
      },
      inLanguage: "en-GB",
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "website-schema";
    script.textContent = JSON.stringify(schema);

    const existing = document.getElementById("website-schema");
    if (existing) {
      existing.remove();
    }

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("website-schema");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
};
