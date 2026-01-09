import LocationPageTemplate from "@/components/LocationPageTemplate";

const Stratford = () => {
  const location = {
    name: "Stratford",
    slug: "stratford",
    postcodes: ["E15", "E20"],
    description: "Looking for a web developer in Stratford who delivers quality without the agency price tag? L&D Digital builds professional websites, AI chatbots, and digital marketing solutions for East London businesses—with transparent pricing and rapid delivery.",
    heroSubheadline: "We're a local digital agency serving Stratford, Newham, and the wider East London area. Whether you're a tradesperson, retailer, or service provider, we build websites that attract customers and grow your business.",
    localLandmarks: [
      "Queen Elizabeth Olympic Park",
      "Westfield Stratford City",
      "East Village",
      "International Quarter London",
      "Stratford Centre"
    ],
    businessTypes: [
      "Startups",
      "Retail Shops",
      "Restaurants & Cafés",
      "Hospitality",
      "Professional Services",
      "Health & Fitness",
      "Event Venues"
    ],
    businessLandscape: "Stratford has transformed into one of London's most exciting business destinations since hosting the 2012 Olympics. The area combines world-class facilities at the Olympic Park with the bustling commercial hub of Westfield—Europe's largest urban shopping centre. From innovative startups at the International Quarter to independent retailers in Stratford Centre, the area offers a unique mix of enterprise opportunities. The excellent transport links (including the Elizabeth line, Central line, Jubilee line, DLR, and Overground) make Stratford a prime location for businesses serving London and beyond. Whether you're launching a new venture near the London Stadium or expanding an established business on Stratford High Road, having a professional online presence is essential to capturing the thousands of daily visitors and local residents.",
    uniqueAngle: "Stratford's post-Olympic regeneration has created a modern infrastructure perfect for ambitious businesses. We help Stratford companies leverage this growth with websites that match the area's forward-thinking energy.",
    nearbyAreas: [
      { name: "Leyton", slug: "leyton" },
      { name: "Plaistow", slug: "plaistow" },
      { name: "East Ham", slug: "east-ham" },
      { name: "Hackney", slug: "hackney" },
      { name: "Newham", slug: "newham" },
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default Stratford;