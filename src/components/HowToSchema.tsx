import { useEffect } from "react";

interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string; // ISO 8601 duration format, e.g., "P1D" for 1 day
  estimatedCost?: {
    currency: string;
    value: string;
  };
}

export const HowToSchema = ({
  name,
  description,
  steps,
  totalTime,
  estimatedCost,
}: HowToSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name,
      description,
      ...(totalTime && { totalTime }),
      ...(estimatedCost && {
        estimatedCost: {
          "@type": "MonetaryAmount",
          currency: estimatedCost.currency,
          value: estimatedCost.value,
        },
      }),
      step: steps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.name,
        text: step.text,
        ...(step.image && { image: step.image }),
      })),
    };

    const schemaId = `howto-schema-${name.toLowerCase().replace(/\s+/g, "-")}`;
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
  }, [name, description, steps, totalTime, estimatedCost]);

  return null;
};
