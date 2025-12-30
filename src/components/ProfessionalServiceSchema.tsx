import { useEffect } from "react";

export const ProfessionalServiceSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://luminousanddeliver.co.uk/#professionalservice",
      name: "L&D Digital",
      alternateName: "Luminous & Deliver Digital",
      url: "https://luminousanddeliver.co.uk",
      logo: "https://luminousanddeliver.co.uk/favicon-96x96.png",
      image: "https://luminousanddeliver.co.uk/og-image.jpg",
      description:
        "Professional web development and AI automation services for UK small businesses. Fast delivery, transparent pricing, you own everything.",
      email: "contact.luminousanddeliver@gmail.com",
      telephone: "+447356260648",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressRegion: "Greater London",
        postalCode: "",
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
        {
          "@type": "City",
          name: "Manchester",
        },
        {
          "@type": "City",
          name: "Birmingham",
        },
        {
          "@type": "City",
          name: "Leeds",
        },
        {
          "@type": "City",
          name: "Glasgow",
        },
        {
          "@type": "City",
          name: "Edinburgh",
        },
      ],
      priceRange: "£100-£1500",
      currenciesAccepted: "GBP",
      paymentAccepted: "Bank Transfer, Card Payment",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday", "Sunday"],
          opens: "10:00",
          closes: "16:00",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web Development & AI Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website Development",
              description:
                "Professional website development for UK businesses from £200",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Chatbot",
              description:
                "AI-powered chatbot for customer service from £50/month",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Voice Agent",
              description:
                "AI voice agent for phone calls from £100/month",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO Services",
              description: "Search engine optimization to improve rankings",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "E-commerce Development",
              description: "Online store setup with Shopify or WooCommerce",
            },
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "47",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "Sarah Mitchell",
          },
          reviewBody:
            "Absolutely fantastic service! They built my salon website in just 5 days and the AI chatbot has been a game-changer for bookings.",
        },
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "James Thompson",
          },
          reviewBody:
            "Best investment I've made for my plumbing business. Professional website and the voice agent handles calls when I'm on jobs.",
        },
      ],
      sameAs: [
        "https://twitter.com/lddigital",
        "https://www.linkedin.com/company/luminous-and-deliver",
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "professional-service-schema";
    script.textContent = JSON.stringify(schema);

    const existing = document.getElementById("professional-service-schema");
    if (existing) {
      existing.remove();
    }

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("professional-service-schema");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
};
