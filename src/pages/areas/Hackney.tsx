import LocationPageTemplate from "@/components/LocationPageTemplate";

const Hackney = () => {
  const location = {
    name: "Hackney",
    slug: "hackney",
    postcodes: ["E5", "E8", "E9"],
    description: "Cutting-edge web development and digital marketing for Hackney's creative businesses. We understand the unique Hackney market and create websites that reflect your brand's personality.",
    nearbyAreas: [
      { name: "Shoreditch", slug: "shoreditch" },
      { name: "Bethnal Green", slug: "bethnal-green" },
      { name: "Stratford", slug: "stratford" },
      { name: "Walthamstow", slug: "walthamstow" },
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default Hackney;
