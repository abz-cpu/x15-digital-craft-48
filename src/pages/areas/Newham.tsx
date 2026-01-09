import LocationPageTemplate from "@/components/LocationPageTemplate";

const Newham = () => {
  const location = {
    name: "Newham",
    slug: "newham",
    postcodes: ["E6", "E7", "E12", "E13", "E16"],
    description: "Complete web development solutions for Newham borough businesses. From the ExCeL London exhibition centre to the Royal Docks regeneration, we help local enterprises grow their online presence with affordable, professional websites.",
    heroSubheadline: "Newham is East London's growth corridor—home to major venues, ambitious regeneration projects, and a diverse entrepreneurial community. We help Newham businesses compete online with websites designed for results.",
    localLandmarks: [
      "ExCeL London",
      "London Stadium",
      "Royal Victoria Dock",
      "London City Airport",
      "Green Street",
      "Royal Docks"
    ],
    businessTypes: [
      "Event Services",
      "Corporate Hospitality",
      "Retail & Fashion",
      "Restaurant & Takeaway",
      "Professional Services",
      "Transport & Logistics",
      "Property & Construction"
    ],
    businessLandscape: "Newham is undergoing unprecedented transformation, with billions invested in regeneration across the borough. ExCeL London hosts major exhibitions and events year-round, while the Royal Docks area is developing into a new business district. The Olympic legacy continues at London Stadium, attracting visitors for West Ham matches and major concerts. London City Airport serves the business travel market, creating demand for nearby services. Green Street remains a vibrant retail destination, particularly renowned for its Asian fashion and jewellery shops. For businesses in Newham, the opportunity is significant—a growing population, major investment, and improving transport links including the Elizabeth line and DLR. A professional website helps you capture this growth, whether you're targeting event visitors at ExCeL or building a loyal local customer base on Green Street.",
    uniqueAngle: "Newham's major venues and regeneration projects create unique business opportunities. We build websites optimised to capture this growth.",
    nearbyAreas: [
      { name: "Stratford", slug: "stratford" },
      { name: "East Ham", slug: "east-ham" },
      { name: "Plaistow", slug: "plaistow" },
      { name: "Tower Hamlets", slug: "tower-hamlets" },
      { name: "Manor Park", slug: "manor-park" },
    ],
    relatedBlogPosts: [
      {
        title: "Website Design Tips for East London",
        slug: "website-design-tips-east-london",
        description: "Practical advice to help your Newham business succeed online."
      },
      {
        title: "Best Web Developer in Stratford 2026",
        slug: "best-web-developer-stratford-2026",
        description: "What to look for when choosing a web developer in the Newham area."
      }
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default Newham;
