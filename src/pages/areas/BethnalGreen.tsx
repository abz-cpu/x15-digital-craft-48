import LocationPageTemplate from "@/components/LocationPageTemplate";

const BethnalGreen = () => {
  const location = {
    name: "Bethnal Green",
    slug: "bethnal-green",
    postcodes: ["E2", "E3"],
    description: "Modern web development and digital marketing for Bethnal Green businesses. We create stylish, functional websites that help your business thrive in this trendy East London neighborhood.",
    nearbyAreas: [
      { name: "Shoreditch", slug: "shoreditch" },
      { name: "Hackney", slug: "hackney" },
      { name: "Tower Hamlets", slug: "tower-hamlets" },
      { name: "Stratford", slug: "stratford" },
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default BethnalGreen;
