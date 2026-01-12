import { useEffect } from "react";

export const OrganizationSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://digital.luminousanddeliver.co.uk/#organization",
      name: "Luminous & Deliver Digital",
      legalName: "Luminous & Deliver Digital Agency",
      alternateName: ["L&D Digital", "Luminous and Deliver Digital"],
      url: "https://digital.luminousanddeliver.co.uk",
      logo: {
        "@type": "ImageObject",
        url: "https://digital.luminousanddeliver.co.uk/favicon-96x96.png",
        width: 96,
        height: 96,
      },
      image: "https://digital.luminousanddeliver.co.uk/og-image.jpg",
      description:
        "Professional web development and design services for UK businesses. Restaurant websites, ecommerce stores, and brand websites from £200.",
      email: "contact@luminousanddeliver.co.uk",
      telephone: "+447356260648",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7 Corsican Square",
        addressLocality: "Bromley-by-Bow",
        addressRegion: "Greater London",
        postalCode: "E3 3YD",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.521838,
        longitude: -0.018013,
      },
      areaServed: [
        {
          "@type": "Country",
          name: "United Kingdom",
        },
        {
          "@type": "City",
          name: "London",
        },
      ],
      priceRange: "£200-£1500",
      currenciesAccepted: "GBP",
      paymentAccepted: "Bank Transfer, Card Payment",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      sameAs: [
        "https://g.co/kgs/ExQZKh30OtBVi5wxS",
        "https://www.linkedin.com/company/luminous-deliver-digital",
        "https://twitter.com/lddigital",
      ],
      founder: {
        "@type": "Person",
        name: "Abdul M Taher",
        sameAs: "https://www.linkedin.com/in/abdul-m-taher-815177247/",
      },
      foundingDate: "2025",
      slogan: "Professional Web Development for UK Businesses",
      knowsAbout: [
        "Web Development",
        "Restaurant Websites",
        "Ecommerce",
        "Website Design",
        "SEO",
        "Digital Marketing",
        "Brand Websites",
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "organization-schema";
    script.textContent = JSON.stringify(schema);

    // Remove existing schema if present
    const existing = document.getElementById("organization-schema");
    if (existing) {
      existing.remove();
    }

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("organization-schema");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
};
