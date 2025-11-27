import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Package, X, FileText, Sparkles } from "lucide-react";

const FloatingActionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Close when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const actions = [
    {
      icon: FileText,
      label: "Get Free Quote",
      href: "/contact",
      external: false,
      primary: true,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp Chat",
      href: "https://wa.me/447424062513?text=Hi%20X15%20Digital%2C%20I%27m%20interested%20in%20your%20services",
      external: true,
    },
    {
      icon: Package,
      label: "View Packages",
      href: "/web-package",
      external: false,
    },
  ] as const;

  return (
    <div ref={menuRef} className="fixed bottom-6 right-6 z-[1000]">
      {/* Action buttons */}
      <div
        className={`flex flex-col gap-3 mb-3 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {actions.map((action) => {
          const Icon = action.icon;
          const baseClasses =
            "flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 border text-sm font-medium";
          const colorClasses = action.primary
            ? "bg-[#0F766E] text-white border-[#0F766E] hover:bg-[#F59E0B]"
            : "bg-background text-foreground border-border";

          const content = (
            <>
              <Icon className="h-5 w-5" />
              <span>{action.label}</span>
            </>
          );

          return action.external ? (
            <a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${baseClasses} ${colorClasses}`}
              onClick={() => setIsOpen(false)}
            >
              {content}
            </a>
          ) : (
            <Link
              key={action.label}
              to={action.href}
              className={`${baseClasses} ${colorClasses}`}
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
        className="bg-[#0F766E] text-white p-4 rounded-full 
             shadow-[0_4px_12px_rgba(15,118,110,0.3)]
             hover:bg-[#F59E0B] hover:scale-110
             transition-transform duration-200
             focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        aria-label={isOpen ? "Close quick actions menu" : "Open quick actions menu"}
        aria-pressed={isOpen}
      >
        {isOpen ? <X className="h-6 w-6 md:h-7 md:w-7" /> : <Sparkles className="h-6 w-6 md:h-7 md:w-7" />}
      </button>
    </div>
  );
};

export default FloatingActionMenu;
