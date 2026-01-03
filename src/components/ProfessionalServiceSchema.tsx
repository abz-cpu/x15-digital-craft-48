import { useEffect } from "react";

export const ProfessionalServiceSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://digital.luminousanddeliver.co.uk/#professionalservice",
      name: "L&D Digital",
      alternateName: "Luminous & Deliver Digital",
      url: "https://digital.luminousanddeliver.co.uk",
      logo: "https://digital.luminousanddeliver.co.uk/favicon-96x96.png",
      image: "https://digital.luminousanddeliver.co.uk/og-image-2026-01-02-v2.png",
      description:
        "Professional web development and design services specializing in restaurant websites, ecommerce stores, and brand websites in the UK. Fast delivery from 1-14 days, prices from £200.",
      email: "contact.luminousanddeliver@gmail.com",
      telephone: "+44 7356 260648",
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
      priceRange: "£200-£1500",
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
        name: "Web Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Restaurant Website Design",
              description:
                "Custom website design for restaurants with online menus, booking systems, and mobile optimization",
              serviceType: "Web Development",
            },
            price: "200",
            priceCurrency: "GBP",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ecommerce Website Development",
              description:
                "Full-featured online store development with payment integration and product management",
              serviceType: "Ecommerce Development",
            },
            price: "200",
            priceCurrency: "GBP",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Brand Website Design",
              description:
                "Professional business websites for brands, companies, and small businesses",
              serviceType: "Web Design",
            },
            price: "200",
            priceCurrency: "GBP",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Chatbot",
              description:
                "AI-powered chatbot for customer service automation",
            },
            price: "50",
            priceCurrency: "GBP",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "50",
              priceCurrency: "GBP",
              unitText: "month",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO Services",
              description: "Search engine optimization to improve Google, Bing, and Brave rankings",
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
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "Maria Garcia",
          },
          reviewBody:
            "Our restaurant website looks amazing and the online booking system has increased reservations by 40%. Highly recommend L&D Digital.",
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
