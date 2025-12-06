import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PreloadLink } from "@/components/PreloadLink";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const closeTimeoutRef = useRef<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);

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
    setIsMobileMenuOpen(false);
    setShowServicesDropdown(false);
  }, [location]);

  // Accessibility: Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        servicesButtonRef.current &&
        !servicesButtonRef.current.contains(event.target as Node)
      ) {
        setShowServicesDropdown(false);
      }
    };

    if (showServicesDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showServicesDropdown]);

  // Accessibility: Close dropdown on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && showServicesDropdown) {
        setShowServicesDropdown(false);
        servicesButtonRef.current?.focus();
      }
    };

    if (showServicesDropdown) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showServicesDropdown]);

  const navLinks = [
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
  ];

  // Simplified featured services for dropdown - most important only
  const featuredServices = [
    {
      name: "Web Packages",
      path: "/web-package",
      desc: "Complete website solutions",
      category: "web",
    },
    {
      name: "AI Packages",
      path: "/ai-package",
      desc: "Complete AI solutions",
      category: "ai",
    },
    {
      name: "SEO Services",
      path: "/services/seo",
      desc: "Get found on Google",
      category: "web",
    },
    {
      name: "Maintenance & Support",
      path: "/services/maintenance-support",
      desc: "Ongoing website care",
      category: "web",
    },
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
    const basePath = path.split("#")[0];
    return location.pathname === basePath ? "bg-[#F0F9F7] text-[#0F766E]" : "";
  };

  const handleServicesKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setShowServicesDropdown((prev) => !prev);
    }
  };

  return (
    <>
      {/* Accessibility: Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-[#0F766E] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      <nav
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? "shadow-lg backdrop-blur-sm bg-white/95" : "shadow-sm"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[72px]">
            {/* Logo */}
            <PreloadLink
              to="/"
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-2 rounded-lg transition-all px-2 py-1.5"
              aria-label="X15 Digital home"
            >
              <span className="text-[22px] font-bold text-[#1F2937] tracking-tight">X15 DIGITAL</span>
            </PreloadLink>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1.5">
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  ref={servicesButtonRef}
                  className="flex items-center gap-1.5 text-[15px] font-medium text-[#4B5563] hover:text-[#0F766E] transition-colors focus:outline-none focus:text-[#0F766E] focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-2 rounded-lg px-3.5 py-2"
                  onMouseEnter={() => {
                    clearCloseTimeout();
                    setShowServicesDropdown(true);
                  }}
                  onMouseLeave={scheduleDropdownClose}
                  onClick={() => setShowServicesDropdown((prev) => !prev)}
                  onKeyDown={handleServicesKeyDown}
                  aria-expanded={showServicesDropdown}
                  aria-haspopup="menu"
                  aria-label="Services menu"
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${showServicesDropdown ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                {/* Simplified Dropdown - Featured Services Only */}
                {showServicesDropdown && (
                  <div
                    ref={dropdownRef}
                    className="absolute left-0 top-full pt-3"
                    onMouseEnter={() => {
                      clearCloseTimeout();
                      setShowServicesDropdown(true);
                    }}
                    onMouseLeave={scheduleDropdownClose}
                    role="menu"
                    aria-label="Services submenu"
                  >
                    <div className="w-[400px] bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-[#E5E7EB] p-4 animate-fade-in">
                      {/* Featured Services in Single Column */}
                      <div className="space-y-1">
                        {featuredServices.map((service) => (
                          <PreloadLink
                            key={service.path}
                            to={service.path}
                            role="menuitem"
                            className={`block py-3 px-3.5 rounded-lg hover:bg-[#F0F9F7] transition-colors focus:outline-none focus:bg-[#F0F9F7] focus:ring-2 focus:ring-[#0F766E] ${getServiceActiveClass(
                              service.path,
                            )}`}
                          >
                            <div className="text-[15px] font-semibold text-[#1F2937]">{service.name}</div>
                            <div className="text-[13px] text-[#6B7280] mt-0.5">{service.desc}</div>
                          </PreloadLink>
                        ))}
                      </div>

                      {/* View All Services CTA */}
                      <div className="mt-3 pt-3 border-t border-[#E5E7EB]">
                        <PreloadLink
                          to="/services"
                          role="menuitem"
                          className="flex items-center justify-between py-3 px-3.5 rounded-lg bg-[#F9FAFB] hover:bg-[#F0F9F7] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F766E] group"
                        >
                          <span className="text-[15px] font-medium text-[#1F2937]">View All Services</span>
                          <ChevronDown
                            className="h-4 w-4 -rotate-90 text-[#0F766E] group-hover:translate-x-1 transition-transform"
                            aria-hidden="true"
                          />
                        </PreloadLink>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Nav Links */}
              {navLinks.map((link) => (
                <PreloadLink
                  key={link.path}
                  to={link.path}
                  className={`text-[15px] font-medium text-[#4B5563] hover:text-[#0F766E] transition-colors focus:outline-none focus:text-[#0F766E] focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-2 rounded-lg px-3.5 py-2 ${
                    location.pathname === link.path ? "text-[#0F766E] font-semibold" : ""
                  }`}
                >
                  {link.name}
                </PreloadLink>
              ))}

              {/* Phone Number - Click to call */}
              <a
                href="tel:+447123456789"
                className="flex items-center gap-2 text-[15px] font-medium text-[#4B5563] hover:text-[#0F766E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-2 rounded-lg px-3.5 py-2 ml-1"
                aria-label="Call us on 07123 456789"
              >
                <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
                <span>07123 456789</span>
              </a>

              {/* CTA Button */}
              <Button
                asChild
                className="bg-[#0F766E] text-white hover:bg-[#0D9488] px-6 py-2.5 h-auto rounded-lg shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-2 font-semibold text-[15px] ml-2"
              >
                <PreloadLink to="/contact">Start Your Project</PreloadLink>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-2"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-[#1F2937]" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6 text-[#1F2937]" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Simplified with key services shown */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden bg-white border-t border-[#E5E7EB] animate-slide-in-right"
            role="dialog"
            aria-label="Mobile menu"
          >
            <div className="px-4 py-5 space-y-2">
              {/* Highlighted Package Links */}
              <div className="space-y-2 pb-3 mb-3 border-b border-[#E5E7EB]">
                <PreloadLink
                  to="/web-package"
                  className={`flex items-start gap-3 py-3 px-3 rounded-lg hover:bg-[#F0F9F7] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F766E] ${
                    location.pathname === "/web-package" ? "bg-[#F0F9F7]" : ""
                  }`}
                >
                  <div className="flex-1">
                    <div className="text-base font-semibold text-[#1F2937]">Web Packages</div>
                    <div className="text-sm text-[#6B7280] mt-0.5">Complete website solutions</div>
                  </div>
                </PreloadLink>

                <PreloadLink
                  to="/ai-package"
                  className={`flex items-start gap-3 py-3 px-3 rounded-lg hover:bg-[#F0F9F7] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F766E] ${
                    location.pathname === "/ai-package" ? "bg-[#F0F9F7]" : ""
                  }`}
                >
                  <div className="flex-1">
                    <div className="text-base font-semibold text-[#1F2937]">AI Packages</div>
                    <div className="text-sm text-[#6B7280] mt-0.5">AI-powered business automation</div>
                  </div>
                </PreloadLink>

                {/* Additional Key Services - Mobile Only */}
                <PreloadLink
                  to="/services/seo"
                  className={`flex items-start gap-3 py-2.5 px-3 rounded-lg hover:bg-[#F0F9F7] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F766E] ${
                    location.pathname === "/services/seo" ? "bg-[#F0F9F7]" : ""
                  }`}
                >
                  <div className="flex-1">
                    <div className="text-sm font-medium text-[#1F2937]">SEO Services</div>
                    <div className="text-xs text-[#6B7280] mt-0.5">Get found on Google</div>
                  </div>
                </PreloadLink>

                <PreloadLink
                  to="/services/maintenance-support"
                  className={`flex items-start gap-3 py-2.5 px-3 rounded-lg hover:bg-[#F0F9F7] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F766E] ${
                    location.pathname === "/services/maintenance-support" ? "bg-[#F0F9F7]" : ""
                  }`}
                >
                  <div className="flex-1">
                    <div className="text-sm font-medium text-[#1F2937]">Maintenance & Support</div>
                    <div className="text-xs text-[#6B7280] mt-0.5">Ongoing website care</div>
                  </div>
                </PreloadLink>

                {/* View All Services Link */}
                <PreloadLink
                  to="/services"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 text-sm font-medium text-[#0F766E] hover:bg-[#F0F9F7] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
                >
                  <span>View All Services</span>
                  <ChevronDown className="h-3.5 w-3.5 -rotate-90" aria-hidden="true" />
                </PreloadLink>
              </div>

              {/* Main nav links */}
              {navLinks.map((link) => (
                <PreloadLink
                  key={link.path}
                  to={link.path}
                  className={`block py-3 px-3 text-base font-medium rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F766E] ${
                    location.pathname === link.path ? "text-[#0F766E] font-semibold bg-[#F0F9F7]" : "text-[#1F2937]"
                  }`}
                >
                  {link.name}
                </PreloadLink>
              ))}

              {/* Phone Number - Mobile */}
              <a
                href="tel:+447123456789"
                className="flex items-center gap-3 py-3 px-3 text-base font-medium text-[#1F2937] hover:bg-gray-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
              >
                <Phone className="h-5 w-5 text-[#0F766E]" aria-hidden="true" />
                <span>07123 456789</span>
              </a>

              {/* Mobile CTA */}
              <div className="pt-3 mt-3 border-t border-[#E5E7EB]">
                <Button
                  className="w-full bg-[#0F766E] text-white hover:bg-[#F59E0B] py-4 text-base font-semibold shadow-[0_4px_12px_rgba(15,118,110,0.25)] focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:ring-offset-2 transition-all"
                  asChild
                >
                  <PreloadLink to="/contact">Start Your Project</PreloadLink>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
