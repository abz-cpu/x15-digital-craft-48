import LocationPageTemplate from "@/components/LocationPageTemplate";

const Plaistow = () => {
  const location = {
    name: "Plaistow",
    slug: "plaistow",
    postcodes: ["E13", "E16"],
    description: "Professional web development and digital marketing for Plaistow businesses. We create modern, mobile-friendly websites that help your business compete in the digital marketplace.",
    nearbyAreas: [
      { name: "Stratford", slug: "stratford" },
      { name: "East Ham", slug: "east-ham" },
      { name: "Newham", slug: "newham" },
      { name: "Tower Hamlets", slug: "tower-hamlets" },
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default Plaistow;
