interface ProductSchemaProps {
  name: string;
  description: string;
  image?: string;
  brand?: string;
  offers: {
    price: number;
    priceCurrency?: string;
    availability?: string;
    priceValidUntil?: string;
    url?: string;
  }[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
  category?: string;
}

export const ProductSchema = ({
  name,
  description,
  image,
  brand = "L&D Digital",
  offers,
  aggregateRating,
  category,
}: ProductSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    ...(image && { image }),
    brand: {
      "@type": "Brand",
      name: brand,
    },
    ...(category && { category }),
    offers: offers.map((offer) => ({
      "@type": "Offer",
      price: offer.price,
      priceCurrency: offer.priceCurrency || "GBP",
      availability: offer.availability || "https://schema.org/InStock",
      ...(offer.priceValidUntil && { priceValidUntil: offer.priceValidUntil }),
      ...(offer.url && { url: offer.url }),
      seller: {
        "@type": "Organization",
        name: "L&D Digital",
      },
    })),
    ...(aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
