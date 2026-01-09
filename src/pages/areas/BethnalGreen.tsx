import LocationPageTemplate from "@/components/LocationPageTemplate";

const BethnalGreen = () => {
  const location = {
    name: "Bethnal Green",
    slug: "bethnal-green",
    postcodes: ["E2", "E3"],
    description: "Modern web development for Bethnal Green's creative community. We create stylish, functional websites that help your business thrive in this trendy East London neighbourhood—at prices that work for independent businesses.",
    heroSubheadline: "Bethnal Green sits at the heart of East London's creative renaissance. From the galleries of Cambridge Heath to the studios of Roman Road, we help local businesses build their online presence with affordable, professional websites.",
    localLandmarks: [
      "V&A Museum of Childhood",
      "York Hall",
      "Bethnal Green Gardens",
      "Roman Road Market",
      "Cambridge Heath",
      "Victoria Park (nearby)"
    ],
    businessTypes: [
      "Art Studios",
      "Creative Agencies",
      "Cafés & Bars",
      "Independent Retail",
      "Fitness & Boxing",
      "Photography",
      "Family Businesses"
    ],
    businessLandscape: "Bethnal Green perfectly captures East London's evolution—historic working-class roots meeting contemporary creative energy. The V&A Museum of Childhood and historic York Hall (home of legendary boxing events) represent the area's rich heritage, while the galleries and studios along Cambridge Heath Road showcase its creative present. Roman Road Market continues a trading tradition stretching back generations, now featuring artisan producers alongside traditional stallholders. The area attracts young professionals and families drawn to relatively affordable housing within easy reach of the City. Local businesses here succeed by combining genuine character with professional quality—something we understand and reflect in every website we create. Whether you're a boxing gym, a craft brewery, or a family-run café, your website should feel authentic to Bethnal Green.",
    uniqueAngle: "Bethnal Green blends heritage with hipster culture. We create websites with genuine character that respect the area's roots while appealing to its evolving customer base.",
    nearbyAreas: [
      { name: "Shoreditch", slug: "shoreditch" },
      { name: "Hackney", slug: "hackney" },
      { name: "Tower Hamlets", slug: "tower-hamlets" },
      { name: "Stratford", slug: "stratford" },
      { name: "Mile End", slug: "mile-end" },
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default BethnalGreen;