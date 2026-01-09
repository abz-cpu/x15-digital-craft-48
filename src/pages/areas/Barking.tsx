import LocationPageTemplate from "@/components/LocationPageTemplate";

const Barking = () => {
  const location = {
    name: "Barking",
    slug: "barking",
    postcodes: ["IG11", "RM8", "RM9", "RM10"],
    description: "Expert web development for Barking and Dagenham businesses. We create affordable, high-quality websites that help local businesses attract more customers—with fast delivery and no hidden fees.",
    heroSubheadline: "Barking is experiencing major regeneration, with new developments transforming the town centre. We help local businesses capture this growth with professional websites designed for results.",
    localLandmarks: [
      "Barking Town Centre",
      "Barking Abbey",
      "Eastbury Manor House",
      "Barking Station",
      "Vicarage Field",
      "Barking Park"
    ],
    businessTypes: [
      "Retail Shops",
      "Enterprise & Startups",
      "Restaurants & Cafés",
      "Professional Services",
      "Health & Beauty",
      "Trades & Construction",
      "Manufacturing & Distribution"
    ],
    businessLandscape: "Barking is in the midst of significant transformation, with major development projects reshaping the town centre and creating new business opportunities. The area's industrial heritage continues with manufacturing and distribution businesses benefiting from good road links and relatively affordable commercial space. Barking Town Centre serves a growing population, with retail, hospitality, and service businesses catering to local needs. The historic sites of Barking Abbey and Eastbury Manor House add character, while Barking Park provides community green space. The Overground and c2c lines connect Barking to central London and Essex, making it accessible for commuters and customers alike. For Barking businesses, the combination of regeneration investment and an established local customer base creates real opportunity. Whether you're an established enterprise or a new startup, a professional website helps you compete and grow.",
    uniqueAngle: "Barking's regeneration creates new business opportunities every month. Position yourself for growth with a website built for the future.",
    nearbyAreas: [
      { name: "Ilford", slug: "ilford" },
      { name: "East Ham", slug: "east-ham" },
      { name: "Manor Park", slug: "manor-park" },
      { name: "Newham", slug: "newham" },
      { name: "Plaistow", slug: "plaistow" },
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default Barking;