import LocationPageTemplate from "@/components/LocationPageTemplate";

const Shoreditch = () => {
  const location = {
    name: "Shoreditch",
    slug: "shoreditch",
    postcodes: ["EC2", "N1"],
    description: "Premium web development for Shoreditch's tech-savvy businesses. We create innovative, design-forward websites that match the area's creative energy—without the inflated agency prices.",
    heroSubheadline: "In the heart of London's tech scene, your website needs to stand out. We combine cutting-edge design with solid technical foundations to create websites that impress investors, attract customers, and scale with your business.",
    localLandmarks: [
      "Silicon Roundabout",
      "Boxpark Shoreditch",
      "Old Street Station",
      "Brick Lane",
      "Hoxton Square",
      "Spitalfields Market"
    ],
    businessTypes: [
      "Tech Startups",
      "Creative Agencies",
      "SaaS Companies",
      "Co-working Spaces",
      "Bars & Restaurants",
      "Art Galleries",
      "Fashion Brands"
    ],
    businessLandscape: "Shoreditch is synonymous with London's tech startup scene, centred around the famous Silicon Roundabout. The area attracts ambitious entrepreneurs, creative professionals, and innovative companies from around the world. Beyond tech, Shoreditch thrives on its creative industries—from independent art galleries and design studios to fashion boutiques and street food vendors. The nightlife scene, anchored by venues around Hoxton Square and Boxpark, generates significant hospitality business. Competition is fierce, and standing out requires a website that's not just functional but genuinely impressive. Whether you're a fintech startup seeking investment or a creative studio showcasing your portfolio, your online presence needs to reflect Shoreditch's cutting-edge reputation.",
    uniqueAngle: "Shoreditch businesses compete on innovation and creativity. We deliver tech-first websites with standout design that help you punch above your weight against bigger competitors.",
    nearbyAreas: [
      { name: "Hackney", slug: "hackney" },
      { name: "Bethnal Green", slug: "bethnal-green" },
      { name: "Tower Hamlets", slug: "tower-hamlets" },
      { name: "Stratford", slug: "stratford" },
    ],
    relatedBlogPosts: [
      {
        title: "Local SEO Guide for Hackney & Shoreditch",
        slug: "local-seo-hackney-shoreditch",
        description: "How to rank higher on Google and attract more local customers in Shoreditch."
      },
      {
        title: "Website Design Tips for East London",
        slug: "website-design-tips-east-london",
        description: "Practical advice to help your East London business succeed online."
      }
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default Shoreditch;
