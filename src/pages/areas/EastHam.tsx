import LocationPageTemplate from "@/components/LocationPageTemplate";

const EastHam = () => {
  const location = {
    name: "East Ham",
    slug: "east-ham",
    postcodes: ["E6", "E7"],
    description: "Professional web design and digital marketing for East Ham businesses. We understand the diverse East Ham market and create websites that resonate with your local customers—affordable, professional, and designed to convert.",
    heroSubheadline: "East Ham's vibrant high street and diverse community create unique opportunities for local businesses. We help you reach more customers with websites designed for the local market.",
    localLandmarks: [
      "East Ham High Street",
      "Central Park",
      "East Ham Nature Reserve",
      "East Ham Town Hall",
      "Plashet Park",
      "East Ham Station"
    ],
    businessTypes: [
      "Retail Shops",
      "Restaurants & Takeaways",
      "Professional Services",
      "Beauty & Wellness",
      "Grocery & Food",
      "Jewellery Shops",
      "Travel Agents"
    ],
    businessLandscape: "East Ham is one of London's most culturally diverse areas, with a bustling high street that serves communities from around the world. The retail landscape features everything from specialist grocery stores and jewellers to professional services and healthcare providers. Central Park provides a community focal point, while the District and Hammersmith & City lines connect East Ham to central London and the wider network. The area's diversity is its strength—businesses that understand and serve their specific communities thrive here. Whether you're targeting the South Asian wedding market, offering professional services to local families, or running a restaurant serving authentic cuisine, your website needs to resonate with your specific customer base. We create culturally aware websites that help you connect with East Ham's diverse communities.",
    uniqueAngle: "East Ham's diverse communities deserve websites that speak to them. We create culturally aware designs that build trust with your specific customer base.",
    nearbyAreas: [
      { name: "Stratford", slug: "stratford" },
      { name: "Plaistow", slug: "plaistow" },
      { name: "Manor Park", slug: "manor-park" },
      { name: "Barking", slug: "barking" },
      { name: "Newham", slug: "newham" },
    ],
    relatedBlogPosts: [
      {
        title: "Website Design Tips for East London",
        slug: "website-design-tips-east-london",
        description: "Practical advice to help your East Ham business succeed online."
      }
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default EastHam;
