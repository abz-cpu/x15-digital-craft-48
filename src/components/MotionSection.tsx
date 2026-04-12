import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { fadeUp } from "@/lib/motion-variants";

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  amount?: number;
  as?: "section" | "div";
  id?: string;
}

/**
 * Framer-Motion wrapper for below-the-fold sections.
 * Triggers once on scroll-in, respects prefers-reduced-motion.
 */
export function MotionSection({
  children,
  className,
  variants = fadeUp,
  amount = 0.15,
  as = "section",
  id,
}: MotionSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  // Reduced motion → render a static element (no transforms, no scroll trigger).
  if (shouldReduceMotion) {
    const Tag = as;
    return (
      <Tag className={className} id={id}>
        {children}
      </Tag>
    );
  }

  const MotionTag = as === "div" ? motion.div : motion.section;

  return (
    <MotionTag
      className={className}
      id={id}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </MotionTag>
  );
}
