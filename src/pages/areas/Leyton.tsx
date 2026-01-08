import LocationPageTemplate from "@/components/LocationPageTemplate";

const Leyton = () => {
  const location = {
    name: "Leyton",
    slug: "leyton",
    postcodes: ["E10", "E11"],
    description: "Custom web development and digital marketing solutions for Leyton businesses. From Leyton High Road to Leytonstone, we help local companies establish a powerful online presence.",
    nearbyAreas: [
      { name: "Stratford", slug: "stratford" },
      { name: "Walthamstow", slug: "walthamstow" },
      { name: "Hackney", slug: "hackney" },
      { name: "Manor Park", slug: "manor-park" },
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default Leyton;
