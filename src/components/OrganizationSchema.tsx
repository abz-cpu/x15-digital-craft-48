import { useEffect } from "react";

export const OrganizationSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://luminousanddeliver.co.uk/#organization",
      name: "L&D Digital",
      alternateName: "Luminous & Deliver Digital",
      url: "https://luminousanddeliver.co.uk",
      logo: {
        "@type": "ImageObject",
        url: "https://luminousanddeliver.co.uk/favicon-96x96.png",
        width: 96,
        height: 96,
      },
      image: "https://luminousanddeliver.co.uk/og-image.jpg",
      description:
        "Professional web development and AI automation services for UK businesses. Affordable websites from £200, AI chatbots from £50/month.",
      email: "contact.luminousanddeliver@gmail.com",
      telephone: "+447356260648",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "Greater London",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.5074,
        longitude: -0.1278,
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
      priceRange: "£100-£1500",
      currenciesAccepted: "GBP",
      paymentAccepted: "Bank Transfer, Card Payment",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      sameAs: [
        "https://twitter.com/lddigital",
        "https://www.linkedin.com/company/luminous-and-deliver",
      ],
      founder: {
        "@type": "Person",
        name: "Abdul M Taher",
      },
      foundingDate: "2024",
      slogan: "Affordable Web Development & AI Automation for UK Businesses",
      knowsAbout: [
        "Web Development",
        "AI Automation",
        "Chatbots",
        "Website Design",
        "SEO",
        "Digital Marketing",
        "E-commerce",
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
