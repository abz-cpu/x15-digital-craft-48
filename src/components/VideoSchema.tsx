interface VideoSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  contentUrl: string;
  uploadDate: string;
  duration?: string; // ISO 8601 duration format e.g. "PT1M30S"
  embedUrl?: string;
}

export const VideoSchema = ({
  name,
  description,
  thumbnailUrl,
  contentUrl,
  uploadDate,
  duration,
  embedUrl,
}: VideoSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl,
    contentUrl,
    uploadDate,
    ...(duration && { duration }),
    ...(embedUrl && { embedUrl }),
    publisher: {
      "@type": "Organization",
      name: "L&D Digital",
      logo: {
        "@type": "ImageObject",
        url: "https://digital.luminousanddeliver.co.uk/brand/logo-email.png",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
