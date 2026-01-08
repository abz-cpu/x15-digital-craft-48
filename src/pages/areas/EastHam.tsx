import LocationPageTemplate from "@/components/LocationPageTemplate";

const EastHam = () => {
  const location = {
    name: "East Ham",
    slug: "east-ham",
    postcodes: ["E6", "E7"],
    description: "Professional web design and digital marketing for East Ham businesses. We understand the diverse East Ham market and create websites that resonate with your local customers.",
    nearbyAreas: [
      { name: "Stratford", slug: "stratford" },
      { name: "Plaistow", slug: "plaistow" },
      { name: "Manor Park", slug: "manor-park" },
      { name: "Barking", slug: "barking" },
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default EastHam;
