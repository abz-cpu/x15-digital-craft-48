import LocationPageTemplate from "@/components/LocationPageTemplate";

const Greenwich = () => {
  const location = {
    name: "Greenwich",
    slug: "greenwich",
    postcodes: ["SE3", "SE7", "SE8", "SE10", "SE18"],
    description: "Expert web development and digital marketing for Greenwich businesses. From the historic town center to the O2, we create websites that help your business reach more customers.",
    nearbyAreas: [
      { name: "Tower Hamlets", slug: "tower-hamlets" },
      { name: "Newham", slug: "newham" },
      { name: "Shoreditch", slug: "shoreditch" },
      { name: "Bethnal Green", slug: "bethnal-green" },
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default Greenwich;
