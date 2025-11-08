import { ReactNode } from "react";
import { useInViewOnce } from "@/hooks/useInViewOnce";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  staggerIndex?: number;
  animation?: "fade" | "slide" | "scale";
}

export const AnimatedSection = ({
  children,
  className = "",
  staggerIndex = 0,
  animation = "fade",
}: AnimatedSectionProps) => {
  const { ref, isInView } = useInViewOnce({ threshold: 0.1 });

  const animationClasses = {
    fade: isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
    slide: isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4",
    scale: isInView ? "opacity-100 scale-100" : "opacity-0 scale-95",
  };

  const delay = staggerIndex * 100;

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${animationClasses[animation]} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
