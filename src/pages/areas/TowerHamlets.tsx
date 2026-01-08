import LocationPageTemplate from "@/components/LocationPageTemplate";

const TowerHamlets = () => {
  const location = {
    name: "Tower Hamlets",
    slug: "tower-hamlets",
    postcodes: ["E1", "E14"],
    description: "Professional web development and digital marketing for Tower Hamlets businesses. From Whitechapel to Canary Wharf, we help local businesses establish a commanding online presence.",
    nearbyAreas: [
      { name: "Shoreditch", slug: "shoreditch" },
      { name: "Bethnal Green", slug: "bethnal-green" },
      { name: "Greenwich", slug: "greenwich" },
      { name: "Newham", slug: "newham" },
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default TowerHamlets;
