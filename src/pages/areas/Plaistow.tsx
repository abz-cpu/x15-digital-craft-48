import LocationPageTemplate from "@/components/LocationPageTemplate";

const Plaistow = () => {
  const location = {
    name: "Plaistow",
    slug: "plaistow",
    postcodes: ["E13", "E16"],
    description: "Professional web development for Plaistow businesses. We create modern, mobile-friendly websites that help your business compete in the digital marketplace—with fast delivery and transparent pricing.",
    heroSubheadline: "Plaistow connects to opportunity—close to the Royal Docks regeneration, Canning Town's growth, and the Stratford hub. We help local businesses capture this growth with professional, affordable websites.",
    localLandmarks: [
      "West Ham Park",
      "Canning Town",
      "Royal Victoria Dock (nearby)",
      "Plaistow Station",
      "Memorial Recreation Ground",
      "Balaam Street"
    ],
    businessTypes: [
      "Trades & Construction",
      "Retail Shops",
      "Restaurants & Takeaways",
      "Transport Services",
      "Health & Fitness",
      "Community Services",
      "Small Manufacturers"
    ],
    businessLandscape: "Plaistow sits at the junction of significant opportunity—the Royal Docks regeneration to the south, Stratford's continued growth to the north, and Canning Town's transformation nearby. The area has a strong working-class heritage, with established trades and service businesses that have served the community for generations. The DLR and Jubilee line at Canning Town, plus District and Hammersmith & City lines at Plaistow, provide excellent connectivity for businesses serving wider London. West Ham Park offers green space and community facilities, while the residential streets support trades and home service providers. The combination of regeneration nearby and more affordable commercial rents in Plaistow itself creates opportunity for businesses looking to grow. A professional website helps you look established and trustworthy, whether you're a multi-generation family business or an ambitious startup.",
    uniqueAngle: "Plaistow's location connects you to London's growth corridors. We help you reach customers across East London with websites designed for discovery.",
    nearbyAreas: [
      { name: "Stratford", slug: "stratford" },
      { name: "East Ham", slug: "east-ham" },
      { name: "Newham", slug: "newham" },
      { name: "Tower Hamlets", slug: "tower-hamlets" },
      { name: "Barking", slug: "barking" },
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default Plaistow;