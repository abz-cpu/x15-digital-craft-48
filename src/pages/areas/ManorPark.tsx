import LocationPageTemplate from "@/components/LocationPageTemplate";

const ManorPark = () => {
  const location = {
    name: "Manor Park",
    slug: "manor-park",
    postcodes: ["E12"],
    description: "Tailored web development for Manor Park businesses. We create stunning, fast-loading websites that help your business stand out in this vibrant East London community—at prices that work for small businesses.",
    heroSubheadline: "Manor Park is a community that values local businesses. We help trades, shops, and service providers build their online presence with affordable, professional websites designed to win local customers.",
    localLandmarks: [
      "Manor Park Station",
      "City of London Cemetery",
      "Woodgrange Park",
      "Romford Road",
      "Plashet Grove",
      "Little Ilford Park"
    ],
    businessTypes: [
      "Local Trades",
      "Funeral Services",
      "Retail Shops",
      "Restaurants & Cafés",
      "Health & Beauty",
      "Property Services",
      "Family Businesses"
    ],
    businessLandscape: "Manor Park occupies a strategic position between Ilford and Stratford, benefiting from excellent Elizabeth line connectivity while maintaining a distinct community identity. Romford Road serves as the main commercial thoroughfare, featuring independent retailers, service providers, and eateries serving the local community. The residential streets support trades and home service businesses—plumbers, electricians, builders, and gardeners who rely on local reputation and word-of-mouth. The City of London Cemetery, one of the largest in Europe, creates demand for funeral-related services and supports local florists and caterers. Manor Park's character is unpretentious and community-focused—businesses succeed here by delivering quality, fair pricing, and personal service. Your website should reflect these values while helping you compete on local searches against larger competitors.",
    uniqueAngle: "Manor Park customers choose local businesses they trust. We build websites that establish your credibility and make you easy to find.",
    nearbyAreas: [
      { name: "Ilford", slug: "ilford" },
      { name: "East Ham", slug: "east-ham" },
      { name: "Leyton", slug: "leyton" },
      { name: "Stratford", slug: "stratford" },
      { name: "Barking", slug: "barking" },
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default ManorPark;