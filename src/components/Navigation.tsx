import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PreloadLink } from "@/components/PreloadLink";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  // Use number instead of NodeJS.Timeout to avoid TS/browser type issues
  const closeTimeoutRef = useRef<number | null>(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsOpen(false);
    setShowServicesDropdown(false);
  }, [location]);

  // TOP-LEVEL NAV LINKS
  const navLinks = [
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  // WEB SERVICES COLUMN
  const webServices = [
    { name: "Web Packages", path: "/web-package", bold: true },
    { name: "App Development", path: "/services/app-development" },
    { name: "Personalised Apps", path: "/services/personalised-apps" },
    { name: "Landing Page Creation", path: "/services/landing-pages" },
    { name: "Logo Design", path: "/services/logo-design" },
    { name: "Branding", path: "/services/branding" },
    { name: "Maintenance & Support", path: "/services/maintenance-support" },
    { name: "IT Support", path: "/services/it-support" },
  ];

  // AI SERVICES COLUMN
  const aiServices = [
    { name: "AI Packages", path: "/ai-package", bold: true },
    { name: "AI Chatbots", path: "/services#ai-chatbots" },
    { name: "AI Receptionist", path: "/services#ai-receptionist" },
    { name: "AI Sales Assistant", path: "/services#ai-sales" },
  ];

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const scheduleDropdownClose = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = window.setTimeout(() => {
      setShowServicesDropdown(false);
    }, 200);
  };

  const getServiceActiveClass = (path: string) => {
    const basePath = path.split("#")[0]; // handle /services#section
    return location.pathname === basePath ? "bg-[#F0F9F7] text-[#0F766E]" : "";
  };

  const isActiveTopLink = (path: string) => location.pathname === path;

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-[#E5E7EB]/70 bg-white/95 backdrop-blur-sm transition-shadow duration-300 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <PreloadLink to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-[#111827]">X15 DIGITAL</span>
          </PreloadLink>

          {/* Desktop / Tablet Navigation (md and up) */}
          <div className="hidden md:flex items-center gap-6">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1.5 text-sm md:text-base font-medium text-[#6B7280] hover:text-[#0F766E] px-1 py-1 rounded-md transition-colors"
                onMouseEnter={() => {
                  clearCloseTimeout();
                  setShowServicesDropdown(true);
                }}
                onMouseLeave={scheduleDropdownClose}
                onClick={() => setShowServicesDropdown((prev) => !prev)}
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${showServicesDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Menu */}
              {showServicesDropdown && (
                <div
                  className="absolute left-0 top-full pt-3"
                  onMouseEnter={() => {
                    clearCloseTimeout();
                    setShowServicesDropdown(true);
                  }}
                  onMouseLeave={scheduleDropdownClose}
                >
                  <div className="w-[min(90vw,640px)] bg-white rounded-xl shadow-[0_12px_30px_rgba(15,23,42,0.18)] border border-[#E5E7EB]/70 p-6 md:p-8 animate-fade-in">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
                      {/* Web Services Column */}
                      <div>
                        <h3 className="text-[11px] uppercase tracking-[0.16em] text-[#9CA3AF] mb-4 font-semibold">
                          Web Services
                        </h3>
                        <ul className="space-y-0.5">
                          {webServices.map((service) => (
                            <li key={service.path}>
                              <PreloadLink
                                to={service.path}
                                className={`flex items-center py-2.5 px-3 -mx-3 rounded-lg text-sm md:text-[15px] leading-snug hover:bg-[#F0F9F7] transition-colors ${
                                  service.bold ? "font-semibold text-[#111827]" : "text-[#111827]"
                                } ${getServiceActiveClass(service.path)}`}
                              >
                                {service.name}
                              </PreloadLink>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* AI Services Column */}
                      <div>
                        <h3 className="text-[11px] uppercase tracking-[0.16em] text-[#9CA3AF] mb-4 font-semibold">
                          AI Services
                        </h3>
                        <ul className="space-y-0.5">
                          {aiServices.map((service) => (
                            <li key={service.path}>
                              <PreloadLink
                                to={service.path}
                                className={`flex items-center py-2.5 px-3 -mx-3 rounded-lg text-sm md:text-[15px] leading-snug hover:bg-[#F0F9F7] transition-colors ${
                                  service.bold ? "font-semibold text-[#111827]" : "text-[#111827]"
                                } ${getServiceActiveClass(service.path)}`}
                              >
                                {service.name}
                              </PreloadLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Simple links */}
            {navLinks.map((link) => (
              <PreloadLink
                key={link.path}
                to={link.path}
                className={`text-sm md:text-base font-medium transition-colors ${
                  isActiveTopLink(link.path) ? "text-[#0F766E] font-semibold" : "text-[#6B7280] hover:text-[#0F766E]"
                }`}
              >
                {link.name}
              </PreloadLink>
            ))}

            {/* Primary CTA */}
            <Button
              asChild
              className="bg-[#0F766E] text-white hover:bg-[#0D9488] px-4 md:px-6 py-2.5 rounded-lg shadow-[0_2px_8px_rgba(15,118,110,0.25)] text-sm md:text-base font-semibold"
            >
              <PreloadLink to="/contact">Get Started</PreloadLink>
            </Button>
          </div>

          {/* Mobile Menu Button (below md) */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6 text-[#111827]" /> : <Menu className="h-6 w-6 text-[#111827]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (smaller screens) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#E5E7EB] animate-slide-in-right">
          <div className="px-4 py-4 space-y-4">
            {/* Services Accordion */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-[#111827] font-medium"
                onClick={() => setShowServicesDropdown((prev) => !prev)}
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${showServicesDropdown ? "rotate-180" : ""}`} />
              </button>
              {showServicesDropdown && (
                <div className="pl-2 mt-2 space-y-3">
                  <div className="text-[11px] uppercase tracking-wide text-[#9CA3AF] mb-1">Web Services</div>
                  {webServices.map((service) => (
                    <PreloadLink
                      key={service.path}
                      to={service.path}
                      className={`block py-2 text-sm ${
                        service.bold ? "font-semibold" : ""
                      } text-[#111827] ${getServiceActiveClass(service.path)}`}
                    >
                      {service.name}
                    </PreloadLink>
                  ))}

                  <div className="text-[11px] uppercase tracking-wide text-[#9CA3AF] mt-3 mb-1">AI Services</div>
                  {aiServices.map((service) => (
                    <PreloadLink
                      key={service.path}
                      to={service.path}
                      className={`block py-2 text-sm ${
                        service.bold ? "font-semibold" : ""
                      } text-[#111827] ${getServiceActiveClass(service.path)}`}
                    >
                      {service.name}
                    </PreloadLink>
                  ))}
                </div>
              )}
            </div>

            {/* Other links */}
            {navLinks.map((link) => (
              <PreloadLink
                key={link.path}
                to={link.path}
                className={`block py-2 text-sm text-[#111827] hover:text-[#0F766E] transition-colors ${
                  isActiveTopLink(link.path) ? "text-[#0F766E] font-semibold" : ""
                }`}
              >
                {link.name}
              </PreloadLink>
            ))}

            {/* CTA on mobile */}
            <Button className="w-full bg-[#0F766E] text-white hover:bg-[#0D9488] mt-2" asChild>
              <PreloadLink to="/contact">Get Started</PreloadLink>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
