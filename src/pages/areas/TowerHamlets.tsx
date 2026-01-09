import LocationPageTemplate from "@/components/LocationPageTemplate";

const TowerHamlets = () => {
  const location = {
    name: "Tower Hamlets",
    slug: "tower-hamlets",
    postcodes: ["E1", "E14"],
    description: "Professional web development for Tower Hamlets businesses. From the corporate towers of Canary Wharf to the independent spirit of Brick Lane, we create websites that command attention in London's most diverse borough.",
    heroSubheadline: "Tower Hamlets spans from the historic markets of Whitechapel to the gleaming towers of Canary Wharf. We understand these different markets and create websites tailored to your specific customer base.",
    localLandmarks: [
      "Canary Wharf",
      "Columbia Road Flower Market",
      "Brick Lane",
      "Whitechapel",
      "Tower of London",
      "Spitalfields"
    ],
    businessTypes: [
      "Financial Services",
      "Corporate Offices",
      "Restaurants & Cafés",
      "Market Traders",
      "Legal Services",
      "Property Companies",
      "Tech Companies"
    ],
    businessLandscape: "Tower Hamlets is a borough of contrasts—home to both one of the world's largest financial centres and some of London's most characterful independent business districts. Canary Wharf's corporate community demands polished, professional websites that convey trust and competence. Meanwhile, Brick Lane and Spitalfields thrive on authenticity, creativity, and cultural richness. Whitechapel serves a diverse local community with retail, healthcare, and professional services. Columbia Road's famous flower market exemplifies the unique blend of tradition and trendiness that defines the borough. Whatever your market within Tower Hamlets, competition is intense. A professionally designed website helps you stand out—whether you're competing for corporate contracts in E14 or building a loyal following on Brick Lane.",
    uniqueAngle: "Tower Hamlets combines corporate ambition with independent spirit. We tailor each website to your specific market—polished for Canary Wharf, characterful for Brick Lane.",
    nearbyAreas: [
      { name: "Shoreditch", slug: "shoreditch" },
      { name: "Bethnal Green", slug: "bethnal-green" },
      { name: "Greenwich", slug: "greenwich" },
      { name: "Newham", slug: "newham" },
      { name: "Stratford", slug: "stratford" },
    ],
    relatedBlogPosts: [
      {
        title: "Local SEO Guide for Hackney & Shoreditch",
        slug: "local-seo-hackney-shoreditch",
        description: "How to rank higher on Google and attract more local customers."
      },
      {
        title: "Website Design Tips for East London",
        slug: "website-design-tips-east-london",
        description: "Practical advice to help your Tower Hamlets business succeed online."
      }
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default TowerHamlets;
