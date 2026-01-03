import { useState, useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const MobileFloatingCTA = forwardRef<HTMLDivElement>(function MobileFloatingCTA(_props, ref) {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 500px)
      const scrolledPastHero = window.scrollY > 500;
      
      // Hide near footer (last 600px of page)
      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 600;
      
      setIsVisible(scrolledPastHero);
      setIsNearFooter(nearBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only show on mobile and when conditions are met
  if (!isVisible || isNearFooter) return null;

  return (
    <div ref={ref} className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
      <div className="bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-lg p-3 flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-secondary truncate">
          Ready to start your project?
        </span>
        <Button asChild size="sm" className="bg-primary hover:bg-primary/90 flex-shrink-0 min-h-[44px] px-4">
          <Link to="/quick-start">
            Get Quote <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>
    </div>
  );
});

export default MobileFloatingCTA;