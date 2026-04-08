import { useEffect } from "react";

export const ProfessionalServiceSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": ["ProfessionalService", "MarketingAgency"],
      "@id": "https://digital.luminousanddeliver.co.uk/#professionalservice",
      name: "L&D Digital",
      alternateName: ["Luminous & Deliver Digital", "L&D Digital Marketing Agency"],
      url: "https://digital.luminousanddeliver.co.uk",
      logo: "https://digital.luminousanddeliver.co.uk/favicon-96x96.png",
      image: "https://digital.luminousanddeliver.co.uk/og-image-2026-01-02-v2.png",
      description:
        "Top digital marketing agency and web development company near Stratford, London. Specializing in SEO, PPC, social media marketing, restaurant websites, ecommerce stores, and AI automation for UK businesses. Websites from £200, digital marketing from £500/month.",
      email: "contact@luminousanddeliver.co.uk",
      telephone: "+44 7356 260648",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7 Corsican Square",
        addressLocality: "Stratford",
        addressRegion: "East London",
        postalCode: "E15 1NN",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.521838,
        longitude: -0.018013,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Stratford",
        },
        {
          "@type": "City",
          name: "London",
        },
        {
          "@type": "AdministrativeArea",
          name: "East London",
        },
        {
          "@type": "AdministrativeArea",
          name: "Tower Hamlets",
        },
        {
          "@type": "AdministrativeArea",
          name: "Newham",
        },
        {
          "@type": "Country",
          name: "United Kingdom",
        },
        {
          "@type": "City",
          name: "Manchester",
        },
        {
          "@type": "City",
          name: "Birmingham",
        },
      ],
      knowsAbout: ["Digital Marketing", "SEO", "PPC Advertising", "Social Media Marketing", "Web Development", "AI Automation", "Content Marketing", "Small Business Marketing"],
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
        name: "Digital Marketing & Web Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Digital Marketing Services",
              description:
                "Full-service digital marketing agency offering SEO, PPC, social media marketing, and content marketing for UK small businesses",
              serviceType: "Digital Marketing",
            },
            price: "500",
            priceCurrency: "GBP",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO Services",
              description:
                "Search engine optimization to improve Google rankings and drive organic traffic for UK businesses",
              serviceType: "SEO",
            },
            price: "300",
            priceCurrency: "GBP",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "PPC Advertising",
              description:
                "Google Ads and social media advertising management for lead generation",
              serviceType: "PPC Management",
            },
            price: "500",
            priceCurrency: "GBP",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Social Media Marketing",
              description:
                "Social media management and advertising across Facebook, Instagram, LinkedIn, and TikTok",
              serviceType: "Social Media Marketing",
            },
            price: "400",
            priceCurrency: "GBP",
          },
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
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "3",
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
