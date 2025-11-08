import { useCountUp } from "@/hooks/useCountUp";
import { useInViewOnce } from "@/hooks/useInViewOnce";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter = ({
  end,
  duration,
  prefix,
  suffix,
  className = "",
}: AnimatedCounterProps) => {
  const { ref, isInView } = useInViewOnce({ threshold: 0.3 });
  const displayValue = useCountUp({ end, duration, prefix, suffix }, isInView);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};
