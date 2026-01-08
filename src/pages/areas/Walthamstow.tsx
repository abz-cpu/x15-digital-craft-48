import LocationPageTemplate from "@/components/LocationPageTemplate";

const Walthamstow = () => {
  const location = {
    name: "Walthamstow",
    slug: "walthamstow",
    postcodes: ["E17"],
    description: "Creative web development and digital marketing for Walthamstow's thriving business community. From the Village to the market, we help local businesses build their online presence.",
    nearbyAreas: [
      { name: "Leyton", slug: "leyton" },
      { name: "Hackney", slug: "hackney" },
      { name: "Stratford", slug: "stratford" },
      { name: "Ilford", slug: "ilford" },
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default Walthamstow;
