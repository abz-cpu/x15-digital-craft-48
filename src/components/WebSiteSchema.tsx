import { useEffect } from "react";

export const WebSiteSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://luminousanddeliver.co.uk/#website",
      url: "https://luminousanddeliver.co.uk",
      name: "L&D Digital",
      description:
        "Professional web development and AI automation for UK businesses. Websites from £200, AI from £50/month.",
      publisher: {
        "@id": "https://luminousanddeliver.co.uk/#organization",
      },
      inLanguage: "en-GB",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://luminousanddeliver.co.uk/services?search={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
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
