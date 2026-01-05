import { Link } from "react-router-dom";
import { Wrench } from "lucide-react";

const MaintenanceBanner = () => {
  return (
    <Link
      to="/contact"
      className="fixed left-0 top-1/2 -translate-y-1/2 z-40 group"
      aria-label="Website under maintenance - Contact us for enquiries"
    >
      <div className="flex items-center bg-amber-500/90 text-amber-950 text-xs font-medium py-2 px-3 rounded-r-lg shadow-lg hover:bg-amber-400 transition-all hover:pl-4">
        <Wrench className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
        <span className="hidden sm:inline">Site Under Work</span>
        <span className="sm:hidden">WIP</span>
      </div>
    </Link>
  );
};

export default MaintenanceBanner;
