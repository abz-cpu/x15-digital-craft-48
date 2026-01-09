import LocationPageTemplate from "@/components/LocationPageTemplate";

const Walthamstow = () => {
  const location = {
    name: "Walthamstow",
    slug: "walthamstow",
    postcodes: ["E17"],
    description: "Creative web development for Walthamstow's thriving business community. Whether you're near Europe's longest outdoor market or the creative hub of the Village, we help local businesses build a powerful online presence.",
    heroSubheadline: "Walthamstow has emerged as one of London's most exciting neighbourhoods—creative, community-focused, and full of entrepreneurial energy. We help local businesses capture this spirit with websites that work.",
    localLandmarks: [
      "Walthamstow Market",
      "Lloyd Park",
      "The Mall Walthamstow",
      "God's Own Junkyard",
      "Walthamstow Village",
      "Walthamstow Wetlands"
    ],
    businessTypes: [
      "Market Traders",
      "Cafés & Restaurants",
      "Independent Retail",
      "Creative Studios",
      "Health & Beauty",
      "Trades & Services",
      "Craft Breweries"
    ],
    businessLandscape: "Walthamstow has undergone a remarkable transformation, becoming one of London's most desirable neighbourhoods for young professionals and families. Walthamstow Market—Europe's longest outdoor market—remains the commercial heartbeat, attracting thousands of shoppers daily with its mix of traditional traders and new artisan producers. The Village area has become a destination for independent cafés, boutiques, and restaurants, while The Mall provides high-street retail. God's Own Junkyard and the creative spaces of Blackhorse Lane have cemented Walthamstow's reputation as a hub for artists and makers. The Victoria line provides quick access to central London, drawing commuters who spend locally at weekends. For Walthamstow businesses, the opportunity is clear—a growing, engaged local customer base that values quality and community. We help you reach them with websites designed for local discovery.",
    uniqueAngle: "Walthamstow's community spirit is its superpower. We create locally-focused websites that help you become a neighbourhood favourite.",
    nearbyAreas: [
      { name: "Leyton", slug: "leyton" },
      { name: "Hackney", slug: "hackney" },
      { name: "Stratford", slug: "stratford" },
      { name: "Ilford", slug: "ilford" },
      { name: "Manor Park", slug: "manor-park" },
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default Walthamstow;