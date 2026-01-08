import LocationPageTemplate from "@/components/LocationPageTemplate";

const Barking = () => {
  const location = {
    name: "Barking",
    slug: "barking",
    postcodes: ["IG11", "RM8", "RM9", "RM10"],
    description: "Expert web development and digital marketing for Barking and Dagenham businesses. We create affordable, high-quality websites that help local businesses attract more customers.",
    nearbyAreas: [
      { name: "Ilford", slug: "ilford" },
      { name: "East Ham", slug: "east-ham" },
      { name: "Manor Park", slug: "manor-park" },
      { name: "Newham", slug: "newham" },
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default Barking;
