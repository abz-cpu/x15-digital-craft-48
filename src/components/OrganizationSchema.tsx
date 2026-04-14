import { useEffect } from "react";

export const OrganizationSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "@id": "https://digital.luminousanddeliver.co.uk/#organization",
      name: "L&D Digital",
      legalName: "Luminous & Deliver Ltd",
      alternateName: [
        "Luminous & Deliver Digital",
        "Luminous and Deliver Digital",
        "L and D Digital",
      ],
      url: "https://digital.luminousanddeliver.co.uk",
      logo: {
        "@type": "ImageObject",
        url: "https://digital.luminousanddeliver.co.uk/favicon-96x96.png",
        width: 96,
        height: 96,
      },
      image: "https://digital.luminousanddeliver.co.uk/og-image.jpg",
      description:
        "L&D Digital is a Stratford, East London web design, SEO and AI automation studio — the digital division of Luminous & Deliver Ltd. We build fast, mobile-first websites, local SEO campaigns, and AI chatbots for small businesses across the UK from £200.",
      email: "contact@luminousanddeliver.co.uk",
      telephone: "+447356260648",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7 Corsican Square",
        addressLocality: "Stratford",
        addressRegion: "London",
        postalCode: "E15 1NN",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.521838,
        longitude: -0.018013,
      },
      areaServed: [
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "City", name: "London" },
        { "@type": "City", name: "Stratford" },
        { "@type": "AdministrativeArea", name: "East London" },
        { "@type": "AdministrativeArea", name: "Greater London" },
      ],
      priceRange: "££",
      currenciesAccepted: "GBP",
      paymentAccepted: "Bank Transfer, Card Payment",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      sameAs: [
        "https://g.co/kgs/ExQZKh30OtBVi5wxS",
        "https://g.page/r/CV1yY8JP6yoIEAI",
        "https://www.linkedin.com/company/luminous-deliver-digital",
        "https://twitter.com/lddigital",
        "https://instagram.com/lddigital",
      ],
      /*
       * PLACEHOLDER — owner to add when available:
       *   - "https://find-and-update.company-information.service.gov.uk/company/{COMPANY_NUMBER}"
       *   - "https://www.crunchbase.com/organization/luminous-and-deliver"
       */
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Web Design" },
            price: "200",
            priceCurrency: "GBP",
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Local SEO" },
            price: "300",
            priceCurrency: "GBP",
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "AI Automation" },
            price: "50",
            priceCurrency: "GBP",
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "3",
        bestRating: "5",
      },
      founder: {
        "@type": "Person",
        name: "Abdul M Taher",
        jobTitle: "Founder and Lead Developer",
        url: "https://digital.luminousanddeliver.co.uk/author/abdul-m-taher",
        sameAs: "https://www.linkedin.com/in/abdul-m-taher-815177247/",
      },
      foundingDate: "[PLACEHOLDER — owner to add Companies House incorporation date]",
      parentOrganization: {
        "@type": "Organization",
        name: "Luminous & Deliver Ltd",
        url: "https://luminousanddeliver.co.uk",
      },
      subOrganization: [
        {
          "@type": "Organization",
          name: "L&D Builds",
          description: "Custom gaming PC builds for UK customers, trading since 2020.",
          url: "https://builds.luminousanddeliver.co.uk",
        },
        {
          "@type": "Organization",
          name: "L&D Assured",
          description:
            "Level 3 qualified Domestic Energy Assessment (DEA) and EPC service for UK landlords and homeowners.",
        },
      ],
      identifier: {
        "@type": "PropertyValue",
        propertyID: "Companies House",
        value: "[PLACEHOLDER — owner to add company number]",
      },
      slogan: "Web, SEO & AI for East London businesses",
      knowsAbout: [
        "Web Design",
        "Custom Web Development",
        "React",
        "Next.js",
        "WordPress",
        "Shopify",
        "WooCommerce",
        "Local SEO",
        "Technical SEO",
        "AI Automation",
        "AI Chatbots",
        "Cybersecurity",
        "Small Business Technology",
        "East London Business",
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "organization-schema";
    script.textContent = JSON.stringify(schema);

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
