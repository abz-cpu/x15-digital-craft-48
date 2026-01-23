import { useEffect } from "react";

const serviceAreas = [
  { name: "Stratford", postcodes: ["E15", "E20"], lat: 51.5423, lng: -0.0025 },
  { name: "Ilford", postcodes: ["IG1", "IG2", "IG3", "IG4", "IG5", "IG6"], lat: 51.5590, lng: 0.0741 },
  { name: "Leyton", postcodes: ["E10", "E11"], lat: 51.5566, lng: -0.0053 },
  { name: "East Ham", postcodes: ["E6", "E7"], lat: 51.5323, lng: 0.0554 },
  { name: "Manor Park", postcodes: ["E12"], lat: 51.5509, lng: 0.0462 },
  { name: "Newham", postcodes: ["E6", "E7", "E12", "E13", "E16"], lat: 51.5255, lng: 0.0352 },
  { name: "Plaistow", postcodes: ["E13", "E16"], lat: 51.5313, lng: 0.0172 },
  { name: "Barking", postcodes: ["IG11", "RM8", "RM9", "RM10"], lat: 51.5397, lng: 0.0808 },
  { name: "Walthamstow", postcodes: ["E17"], lat: 51.5839, lng: -0.0198 },
  { name: "Hackney", postcodes: ["E5", "E8", "E9"], lat: 51.5450, lng: -0.0553 },
  { name: "Bethnal Green", postcodes: ["E2", "E3"], lat: 51.5272, lng: -0.0554 },
  { name: "Shoreditch", postcodes: ["EC2", "N1"], lat: 51.5246, lng: -0.0764 },
  { name: "Tower Hamlets", postcodes: ["E1", "E14"], lat: 51.5099, lng: -0.0059 },
  { name: "Greenwich", postcodes: ["SE3", "SE7", "SE8", "SE10", "SE18"], lat: 51.4769, lng: -0.0005 },
];

export const ServiceAreaSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://digital.luminousanddeliver.co.uk/#service-areas",
      name: "Web Development & Digital Marketing Services",
      provider: {
        "@type": "LocalBusiness",
        "@id": "https://digital.luminousanddeliver.co.uk/#localbusiness",
        name: "L&D Digital",
      },
      areaServed: serviceAreas.map((area) => ({
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: area.lat,
          longitude: area.lng,
        },
        geoRadius: "5000",
        name: area.name,
        description: `Web development, AI automation, POS systems, IT support & SEO services in ${area.name} (${area.postcodes.join(", ")})`,
      })),
      serviceType: [
        "Web Development",
        "Website Design",
        "Ecommerce Development",
        "SEO Services",
        "Digital Marketing",
        "AI Chatbot Development",
        "AI Receptionist Services",
        "AI Voice Agent Services",
        "POS System Installation",
        "Point of Sale Setup",
        "IT Support Services",
        "IT Setup Services",
        "Custom Business Applications",
        "Order Tracking Systems",
        "Invoice Management Systems",
      ],
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "25",
        highPrice: "2000",
        priceCurrency: "GBP",
        offerCount: "15",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "service-area-schema";
    script.textContent = JSON.stringify(schema);

    const existing = document.getElementById("service-area-schema");
    if (existing) {
      existing.remove();
    }

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("service-area-schema");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
};

export default ServiceAreaSchema;
