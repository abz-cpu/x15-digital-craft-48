import { useState, useEffect, useRef, forwardRef } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Package, X, FileText, Sparkles } from "lucide-react";

const FloatingActionMenu = forwardRef<HTMLDivElement>(function FloatingActionMenu(_props, ref) {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileCtaVisible, setMobileCtaVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Track mobile CTA visibility to adjust position
  useEffect(() => {
    const handleScroll = () => {
      const scrolledPastHero = window.scrollY > 500;
      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 600;
      setMobileCtaVisible(scrolledPastHero && !nearBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      href: "https://wa.me/447356260648?text=Hi%20L%26D%20Digital%2C%20I%27m%20interested%20in%20your%20services",
      external: true,
      primary: false,
    },
    {
      icon: Package,
      label: "View Packages",
      href: "/web-package",
      external: false,
      primary: false,
    },
  ] as const;

  return (
    <div 
      ref={(node) => {
        menuRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      }}
      className={`fixed right-4 bottom-6 z-[1000] transition-all duration-300 ${
        mobileCtaVisible ? "max-md:bottom-20" : ""
      }`}
    >
      {/* Action buttons */}
      <div
        className={`flex flex-col gap-3 mb-3 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {actions.map((action) => {
          const Icon = action.icon;
          const baseClasses =
            "flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 border text-sm font-medium min-h-[48px]";
          const colorClasses = action.primary
            ? "bg-primary text-primary-foreground border-primary hover:bg-accent"
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
        className="bg-primary text-primary-foreground p-4 rounded-full 
             shadow-[0_4px_12px_rgba(15,118,110,0.3)]
             hover:bg-accent hover:scale-110
             transition-transform duration-200
             focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ml-auto block
             min-w-[56px] min-h-[56px]"
        aria-label={isOpen ? "Close quick actions menu" : "Open quick actions menu"}
        aria-pressed={isOpen}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6 md:h-7 md:w-7" /> : <Sparkles className="h-6 w-6 md:h-7 md:w-7" />}
      </button>
    </div>
  );
});

export default FloatingActionMenu;