import LocationPageTemplate from "@/components/LocationPageTemplate";

const Greenwich = () => {
  const location = {
    name: "Greenwich",
    slug: "greenwich",
    postcodes: ["SE3", "SE7", "SE8", "SE10", "SE18"],
    description: "Expert web development for Greenwich businesses. From the historic town centre to the O2 arena, we create websites that help your business reach the millions of tourists and local customers in this UNESCO World Heritage area.",
    heroSubheadline: "Greenwich attracts over 10 million visitors annually. Whether you're a hospitality venue near the Cutty Sark or a professional service in Blackheath, your website needs to capture this opportunity.",
    localLandmarks: [
      "The O2 Arena",
      "Cutty Sark",
      "Royal Observatory",
      "Greenwich Market",
      "Old Royal Naval College",
      "Greenwich Park"
    ],
    businessTypes: [
      "Tourism & Hospitality",
      "Restaurants & Pubs",
      "Boutique Retail",
      "Event Services",
      "Tour Operators",
      "Educational Services",
      "Maritime Businesses"
    ],
    businessLandscape: "Greenwich uniquely combines world-class tourist attractions with a thriving local community. The UNESCO World Heritage Site centred on the Royal Observatory and Old Royal Naval College draws millions of visitors each year. Greenwich Market adds independent retail charm, while the O2 arena in North Greenwich brings concert-goers and exhibition visitors. The residential areas of Blackheath and Charlton support professional services and local retail. For businesses here, the challenge is dual: attracting tourists searching online while also serving the loyal local customer base. Whether you're a restaurant hoping to appear in 'best places to eat in Greenwich' searches or a tour guide competing for bookings, a professionally optimised website is essential. We help Greenwich businesses capture both markets with websites designed for discovery and conversion.",
    uniqueAngle: "Greenwich's heritage tourism creates unique marketing opportunities. We build websites optimised for the tourist search journey—from 'things to do in Greenwich' to direct bookings.",
    nearbyAreas: [
      { name: "Tower Hamlets", slug: "tower-hamlets" },
      { name: "Newham", slug: "newham" },
      { name: "Shoreditch", slug: "shoreditch" },
      { name: "Bethnal Green", slug: "bethnal-green" },
    ],
    relatedBlogPosts: [
      {
        title: "Website Design Tips for East London",
        slug: "website-design-tips-east-london",
        description: "Practical advice to help your Greenwich business succeed online."
      }
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default Greenwich;
