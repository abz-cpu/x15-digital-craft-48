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
    <div className="fixed z-[60] bottom-[max(5.5rem,env(safe-area-inset-bottom))] right-6" style={{ left: "auto" }}>
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
        className="bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        style={{ zIndex: 61 }}
        aria-label={isOpen ? "Close menu" : "Open quick actions menu"}
        aria-pressed={isOpen}
      >
        {isOpen ? <X className="h-6 w-6 md:h-7 md:w-7" /> : <Package className="h-6 w-6 md:h-7 md:w-7" />}
      </button>
    </div>
  );
};

export default FloatingActionMenu;
