import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonicalUrl?: string;
  robots?: string;
  author?: string;
}

export const SEO = ({
  title,
  description,
  keywords = "web development London, restaurant website design UK, ecommerce website developer London, professional website builder UK, small business website London, custom website design UK, affordable website design London, responsive web design UK, web design agency London, brand website design London, digital marketing agency UK, digital marketing agency London, best digital marketing agency London, top digital marketing companies UK, digital agency near me, marketing agency Stratford London, small business digital marketing UK",
  ogImage = "https://digital.luminousanddeliver.co.uk/og-image-2026-01-05.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  canonicalUrl,
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  author = "L&D Digital",
}: SEOProps) => {
  const location = useLocation();
  const fullUrl = canonicalUrl || `https://digital.luminousanddeliver.co.uk${location.pathname}`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Standard meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("robots", robots);
    updateMetaTag("author", author);
    
    // Geographic targeting
    updateMetaTag("geo.region", "GB");
    updateMetaTag("geo.placename", "London, United Kingdom");
    updateMetaTag("language", "English");

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:url", fullUrl, true);
    updateMetaTag("og:type", ogType, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:site_name", "L&D Digital", true);
    updateMetaTag("og:locale", "en_GB", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", twitterCard);
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);
    updateMetaTag("twitter:site", "@lddigital");
    updateMetaTag("twitter:url", fullUrl);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.href = fullUrl;
  }, [title, description, keywords, ogImage, ogType, twitterCard, fullUrl, robots, author]);

  return null;
};
