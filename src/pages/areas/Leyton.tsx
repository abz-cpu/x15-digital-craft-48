import LocationPageTemplate from "@/components/LocationPageTemplate";

const Leyton = () => {
  const location = {
    name: "Leyton",
    slug: "leyton",
    postcodes: ["E10", "E11"],
    description: "Custom web development and digital marketing for Leyton businesses. From Leyton High Road to Leytonstone, we help local companies establish a powerful online presence with affordable, fast-turnaround websites.",
    heroSubheadline: "Leyton offers the perfect blend of community spirit and London opportunity. We help local trades, shops, and service providers reach more customers with professional websites that don't cost a fortune.",
    localLandmarks: [
      "Leyton Orient FC",
      "Leyton Jubilee Park",
      "Leyton High Road",
      "Queen Elizabeth Olympic Park (nearby)",
      "Hollow Ponds",
      "Leytonstone High Road"
    ],
    businessTypes: [
      "Local Trades",
      "Sports & Fitness",
      "Cafés & Restaurants",
      "Retail Shops",
      "Health Services",
      "Beauty Salons",
      "Family Businesses"
    ],
    businessLandscape: "Leyton has benefited enormously from the Olympic legacy, with improved transport links and significant investment in the area. The community rallies around Leyton Orient FC, creating a strong local identity that translates into loyal customer bases for local businesses. Leyton High Road serves as the main commercial artery, featuring independent shops, cafés, and service providers. The residential streets support trades and home service businesses, while the proximity to the Olympic Park attracts visitors exploring beyond Stratford. Leytonstone adds its own character, with a growing café culture and creative community. For Leyton businesses, the combination of community loyalty and improving area profile creates real opportunity. A professional website helps you stand out on local searches and build trust with customers who value supporting local enterprises.",
    uniqueAngle: "Leyton's strong community identity means customers prefer local businesses. We help you become the go-to choice in your neighbourhood.",
    nearbyAreas: [
      { name: "Stratford", slug: "stratford" },
      { name: "Walthamstow", slug: "walthamstow" },
      { name: "Hackney", slug: "hackney" },
      { name: "Manor Park", slug: "manor-park" },
      { name: "Ilford", slug: "ilford" },
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default Leyton;