import { useState } from "react";
import { Link } from "react-router-dom";
import { Wrench, X, ArrowRight } from "lucide-react";

const MaintenanceBanner = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-start gap-2">
      <Link
        to="/contact"
        className="group flex items-center gap-2 bg-amber-500 text-amber-950 text-sm font-semibold py-3 px-4 rounded-lg shadow-lg hover:bg-amber-400 hover:shadow-xl transition-all hover:scale-105 animate-pulse hover:animate-none"
        aria-label="Website under maintenance - Click for enquiries"
      >
        <Wrench className="h-4 w-4 flex-shrink-0" />
        <span className="hidden sm:inline">Site Under Work — Click for Enquiry</span>
        <span className="sm:hidden">Enquire Now</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
      <button
        onClick={() => setDismissed(true)}
        className="bg-amber-500/80 hover:bg-amber-400 text-amber-950 p-2 rounded-lg shadow-lg transition-colors"
        aria-label="Dismiss maintenance banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default MaintenanceBanner;
