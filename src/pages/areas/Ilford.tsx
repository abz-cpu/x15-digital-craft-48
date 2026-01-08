import LocationPageTemplate from "@/components/LocationPageTemplate";

const Ilford = () => {
  const location = {
    name: "Ilford",
    slug: "ilford",
    postcodes: ["IG1", "IG2", "IG3", "IG4", "IG5", "IG6"],
    description: "Expert web development and digital marketing for Ilford businesses. Whether you're on Ilford High Road or in the surrounding areas, we create websites that convert visitors into customers.",
    nearbyAreas: [
      { name: "Barking", slug: "barking" },
      { name: "Manor Park", slug: "manor-park" },
      { name: "East Ham", slug: "east-ham" },
      { name: "Walthamstow", slug: "walthamstow" },
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default Ilford;
