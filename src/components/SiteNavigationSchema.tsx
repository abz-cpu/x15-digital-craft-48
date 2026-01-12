const navigationItems = [
  { name: "Home", url: "https://digital.luminousanddeliver.co.uk/" },
  { name: "Services", url: "https://digital.luminousanddeliver.co.uk/services" },
  { name: "Web Design London", url: "https://digital.luminousanddeliver.co.uk/web-design-agency-london" },
  { name: "SEO Services", url: "https://digital.luminousanddeliver.co.uk/seo-services-london" },
  { name: "AI Services", url: "https://digital.luminousanddeliver.co.uk/ai-services-london" },
  { name: "Web Package", url: "https://digital.luminousanddeliver.co.uk/web-package" },
  { name: "AI Package", url: "https://digital.luminousanddeliver.co.uk/ai-package" },
  { name: "Portfolio", url: "https://digital.luminousanddeliver.co.uk/portfolio" },
  { name: "Blog", url: "https://digital.luminousanddeliver.co.uk/blog" },
  { name: "About", url: "https://digital.luminousanddeliver.co.uk/about" },
  { name: "Contact", url: "https://digital.luminousanddeliver.co.uk/contact" },
];

export const SiteNavigationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: "Main Navigation",
    hasPart: navigationItems.map((item, index) => ({
      "@type": "SiteNavigationElement",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
