import LocationPageTemplate from "@/components/LocationPageTemplate";

const Shoreditch = () => {
  const location = {
    name: "Shoreditch",
    slug: "shoreditch",
    postcodes: ["EC2", "N1"],
    description: "Premium web development and digital marketing for Shoreditch's tech-savvy businesses. We create innovative, design-forward websites that match the area's creative energy.",
    nearbyAreas: [
      { name: "Hackney", slug: "hackney" },
      { name: "Bethnal Green", slug: "bethnal-green" },
      { name: "Tower Hamlets", slug: "tower-hamlets" },
      { name: "Stratford", slug: "stratford" },
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default Shoreditch;
