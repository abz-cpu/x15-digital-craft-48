import LocationPageTemplate from "@/components/LocationPageTemplate";

const Ilford = () => {
  const location = {
    name: "Ilford",
    slug: "ilford",
    postcodes: ["IG1", "IG2", "IG3", "IG4", "IG5", "IG6"],
    description: "Professional web development and digital marketing for Ilford businesses. From independent shops on Cranbrook Road to healthcare providers near King George Hospital, we help Ilford businesses stand out online with affordable, high-quality websites.",
    heroSubheadline: "We understand the diverse Ilford market—from Gants Hill to Seven Kings, Barkingside to Goodmayes. Our websites are designed to connect you with local customers and showcase what makes your business special.",
    localLandmarks: [
      "Exchange Ilford",
      "Valentines Park",
      "Cranbrook Road",
      "King George Hospital",
      "Ilford Lane",
      "Gants Hill Roundabout"
    ],
    businessTypes: [
      "Healthcare & Clinics",
      "Professional Services",
      "Retail Shops",
      "Restaurants & Takeaways",
      "Solicitors & Accountants",
      "Beauty & Wellness",
      "Property Services"
    ],
    businessLandscape: "Ilford is the commercial heart of Redbridge, serving a vibrant and diverse community across six postcode areas. The town centre, anchored by Exchange Ilford shopping centre, attracts shoppers from across East London and Essex. Cranbrook Road and Ilford Lane feature a rich mix of independent retailers, professional services, and hospitality venues. The proximity to King George Hospital creates demand for healthcare-related businesses, while residential areas like Gants Hill and Seven Kings support thriving local service providers. With the Elizabeth line now connecting Ilford to central London in under 20 minutes, the area is experiencing renewed investment. Local businesses that invest in professional websites and digital marketing are well-positioned to capture this growing opportunity.",
    uniqueAngle: "Ilford's diverse business community deserves websites that reflect their unique character. We create culturally aware, locally focused websites that resonate with Ilford's varied customer base.",
    nearbyAreas: [
      { name: "Barking", slug: "barking" },
      { name: "Manor Park", slug: "manor-park" },
      { name: "East Ham", slug: "east-ham" },
      { name: "Walthamstow", slug: "walthamstow" },
      { name: "Newham", slug: "newham" },
    ],
  };

  return <LocationPageTemplate location={location} />;
};

export default Ilford;