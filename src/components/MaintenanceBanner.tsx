import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Construction, X, MessageCircle } from "lucide-react";

const MaintenanceBanner = () => {
  const [dismissed, setDismissed] = useState(false);
  const location = useLocation();

  // Hide on contact page since users are already there
  if (dismissed || location.pathname === "/contact") return null;

  return (
    <div className="fixed bottom-24 right-4 z-40 flex items-start gap-2 animate-bounce-subtle">
      <Link
        to="/contact"
        className="group flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-400 text-amber-950 text-sm font-semibold py-3 px-5 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
        aria-label="Site under maintenance - Contact us for enquiries"
      >
        <Construction className="h-4 w-4 flex-shrink-0" />
        <div className="flex flex-col leading-tight">
          <span className="text-xs opacity-80">Site Under Maintenance</span>
          <span className="font-bold">Contact Us</span>
        </div>
        <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
      </Link>
      <button
        onClick={() => setDismissed(true)}
        className="bg-amber-400/80 hover:bg-amber-300 text-amber-950 p-1.5 rounded-full shadow-lg transition-colors"
        aria-label="Dismiss banner"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default MaintenanceBanner;
