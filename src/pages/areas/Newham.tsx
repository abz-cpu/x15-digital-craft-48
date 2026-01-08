import LocationPageTemplate from "@/components/LocationPageTemplate";

const Newham = () => {
  const location = {
    name: "Newham",
    slug: "newham",
    postcodes: ["E6", "E7", "E12", "E13", "E16"],
    description: "Complete web development and digital marketing solutions for Newham borough businesses. From the Royal Docks to Green Street, we help local enterprises grow their online presence.",
    nearbyAreas: [
      { name: "Stratford", slug: "stratford" },
      { name: "East Ham", slug: "east-ham" },
      { name: "Plaistow", slug: "plaistow" },
      { name: "Tower Hamlets", slug: "tower-hamlets" },
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default Newham;
