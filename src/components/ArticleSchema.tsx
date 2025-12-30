import { useEffect } from "react";

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  category?: string;
}

export const ArticleSchema = ({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author,
  category,
}: ArticleSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      headline: title,
      description,
      url,
      image: {
        "@type": "ImageObject",
        url: image,
      },
      datePublished,
      dateModified: dateModified || datePublished,
      author: {
        "@type": "Person",
        name: author,
        url: "https://luminousanddeliver.co.uk/about",
      },
      publisher: {
        "@id": "https://luminousanddeliver.co.uk/#organization",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
      ...(category && { articleSection: category }),
      inLanguage: "en-GB",
      copyrightHolder: {
        "@id": "https://luminousanddeliver.co.uk/#organization",
      },
      copyrightYear: new Date(datePublished).getFullYear(),
    };

    const schemaId = `article-schema-${title.toLowerCase().replace(/\s+/g, "-").substring(0, 30)}`;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = schemaId;
    script.textContent = JSON.stringify(schema);

    const existing = document.getElementById(schemaId);
    if (existing) {
      existing.remove();
    }

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(schemaId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, url, image, datePublished, dateModified, author, category]);

  return null;
};
