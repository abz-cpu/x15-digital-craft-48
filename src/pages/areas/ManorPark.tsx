import LocationPageTemplate from "@/components/LocationPageTemplate";

const ManorPark = () => {
  const location = {
    name: "Manor Park",
    slug: "manor-park",
    postcodes: ["E12"],
    description: "Tailored web development and digital marketing for Manor Park businesses. We create stunning, fast-loading websites that help your business stand out in this vibrant East London community.",
    nearbyAreas: [
      { name: "Ilford", slug: "ilford" },
      { name: "East Ham", slug: "east-ham" },
      { name: "Leyton", slug: "leyton" },
      { name: "Stratford", slug: "stratford" },
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default ManorPark;
