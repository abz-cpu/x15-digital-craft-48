import LocationPageTemplate from "@/components/LocationPageTemplate";

const Hackney = () => {
  const location = {
    name: "Hackney",
    slug: "hackney",
    postcodes: ["E5", "E8", "E9"],
    description: "Creative web development for Hackney's independent businesses. We understand the unique Hackney market and create websites that reflect your brand's personality—stylish, authentic, and built to convert.",
    heroSubheadline: "From the cafés of Broadway Market to the studios of Hackney Wick, Hackney businesses thrive on authenticity. We create websites that capture your unique character while driving real business results.",
    localLandmarks: [
      "Victoria Park",
      "Broadway Market",
      "Mare Street",
      "Hackney Wick",
      "London Fields",
      "Hackney Empire"
    ],
    businessTypes: [
      "Independent Cafés",
      "Creative Studios",
      "Artisan Makers",
      "Boutique Retail",
      "Health & Wellness",
      "Music Venues",
      "Photography Studios"
    ],
    businessLandscape: "Hackney has evolved from an overlooked inner-city borough to one of London's most desirable creative hubs. The area supports a thriving ecosystem of independent businesses—from the artisan food stalls at Broadway Market to the creative studios in Hackney Wick's former warehouses. Mare Street serves as the commercial spine, featuring a mix of established retailers and new ventures. The green spaces of Victoria Park and London Fields draw visitors year-round, supporting cafés, fitness businesses, and event companies. Hackney's customers are discerning—they value authenticity, creativity, and quality over corporate polish. Your website needs to reflect these values while still converting visitors into customers. We help Hackney businesses strike this balance with websites that feel genuine yet professional.",
    uniqueAngle: "Hackney customers value authenticity over corporate gloss. We create websites with genuine character that build trust with the discerning Hackney market.",
    nearbyAreas: [
      { name: "Shoreditch", slug: "shoreditch" },
      { name: "Bethnal Green", slug: "bethnal-green" },
      { name: "Stratford", slug: "stratford" },
      { name: "Walthamstow", slug: "walthamstow" },
      { name: "Leyton", slug: "leyton" },
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default Hackney;