import LocationPageTemplate from "@/components/LocationPageTemplate";

const Stratford = () => {
  const location = {
    name: "Stratford",
    slug: "stratford",
    postcodes: ["E15", "E20"],
    description: "Professional web development and digital marketing services for Stratford businesses. From the Olympic Park to Westfield, we help local businesses thrive online with stunning websites, AI automation, and SEO services.",
    nearbyAreas: [
      { name: "Leyton", slug: "leyton" },
      { name: "Plaistow", slug: "plaistow" },
      { name: "East Ham", slug: "east-ham" },
      { name: "Hackney", slug: "hackney" },
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default Stratford;
