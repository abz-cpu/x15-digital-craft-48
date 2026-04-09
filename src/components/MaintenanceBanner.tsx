import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Construction, X, MessageCircle } from "lucide-react";

const STORAGE_KEY = "maintenance-banner-dismissed";

const MaintenanceBanner = () => {
  const [dismissed, setDismissed] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) === "true"
  );
  const location = useLocation();

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    sessionStorage.setItem(STORAGE_KEY, "true");
    setDismissed(true);
  };

  // Hide on contact page since users are already there
  if (dismissed || location.pathname === "/contact") return null;

  return (
    <div className="fixed bottom-24 right-4 z-50 flex items-start gap-2 animate-bounce-subtle">
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
        type="button"
        onClick={handleDismiss}
        className="relative z-[60] bg-amber-400/80 hover:bg-amber-300 text-amber-950 p-2 rounded-full shadow-lg transition-colors pointer-events-auto cursor-pointer"
        aria-label="Dismiss banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default MaintenanceBanner;
