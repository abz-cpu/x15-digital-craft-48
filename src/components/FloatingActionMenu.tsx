import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, DollarSign, Package, X } from "lucide-react";

const FloatingActionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const actions = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/447424062513?text=Hi%20X15%20Digital%2C%20I%27m%20interested%20in%20your%20services",
      external: true,
    },
    {
      icon: DollarSign,
      label: "Pricing",
      href: "/services",
      external: false,
    },
    {
      icon: Package,
      label: "Packages",
      href: "/services#web-preview",
      external: false,
    },
  ];

  return (
    <div
      className="fixed z-[60] bottom-4 right-4 md:bottom-6 md:right-6"
      style={{ left: "auto" }} // hard kill any inherited left:*
    >
      {/* Action buttons */}
      <div
        className={`flex flex-col gap-3 mb-3 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {actions.map((action) => {
          const Icon = action.icon;
          const content = (
            <>
              <Icon className="h-5 w-5" />
              <span className="text-sm font-medium">{action.label}</span>
            </>
          );

          return action.external ? (
            <a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-background text-foreground px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-border"
              onClick={() => setIsOpen(false)}
            >
              {content}
            </a>
          ) : (
            <Link
              key={action.label}
              to={action.href}
              className="flex items-center gap-2 bg-background text-foreground px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-border"
              onClick={() => setIsOpen(false)}
            >
              {content}
            </Link>
          );
        })}
      </div>

      {/* Main FAB button */}
      <button
        onClick={toggleMenu}
        className="bg-[#0F766E] text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-[0_4px_12px_rgba(15,118,110,0.3)] hover:scale-105 hover:bg-[#F59E0B] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        style={{ zIndex: 61 }}
        aria-label={isOpen ? "Close menu" : "Open quick actions menu"}
        aria-pressed={isOpen}
      >
        {isOpen ? <X className="h-5 w-5 md:h-6 md:w-6" /> : <Package className="h-5 w-5 md:h-6 md:w-6" />}
      </button>
    </div>
  );
};

export default FloatingActionMenu;
