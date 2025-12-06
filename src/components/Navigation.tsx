import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PreloadLink } from "@/components/PreloadLink";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showMobileServicesAccordion, setShowMobileServicesAccordion] = useState(false);

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
    setShowMobileServicesAccordion(false);
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

  // Shorter names with brief descriptions for clarity
  const webServices = [
    {
      name: "Web Packages",
      path: "/web-package",
      bold: true,
      desc: "Complete website solutions",
    },
    {
      name: "App Development",
      path: "/services/app-development",
      desc: "Custom web applications",
    },
    {
      name: "Personalised Apps",
      path: "/services/personalised-apps",
      desc: "Bespoke business tools",
    },
    {
      name: "Landing Pages",
      path: "/services/landing-pages",
      desc: "High-converting single pages",
    },
    {
      name: "Logo Design",
      path: "/services/logo-design",
      desc: "Professional brand marks",
    },
    {
      name: "Branding",
      path: "/services/branding",
      desc: "Complete brand identity",
    },
    {
      name: "Maintenance & Support",
      path: "/services/maintenance-support",
      desc: "Ongoing website care",
    },
    {
      name: "IT Support",
      path: "/services/it-support",
      desc: "Technical help when needed",
    },
    {
      name: "SEO",
      path: "/services/seo",
      desc: "Get found on Google",
    },
  ];

  const aiServices = [
    {
      name: "AI Packages",
      path: "/ai-package",
      bold: true,
      desc: "Complete AI solutions",
    },
    {
      name: "AI Chatbots",
      path: "/services#ai-chatbots",
      desc: "24/7 customer support bots",
    },
    {
      name: "AI Receptionist",
      path: "/services#ai-receptionist",
      desc: "Automated call handling",
    },
    {
      name: "AI Sales Assistant",
      path: "/services#ai-sales",
      desc: "Smart lead qualification",
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <PreloadLink
              to="/"
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-2 rounded-lg transition-all"
              aria-label="X15 Digital home"
            >
              <span className="text-2xl font-bold text-[#1F2937]">X15 DIGITAL</span>
            </PreloadLink>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  ref={servicesButtonRef}
                  className="flex items-center gap-1 text-base font-medium text-[#6B7280] hover:text-[#0F766E] transition-colors focus:outline-none focus:text-[#0F766E] focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-2 rounded-lg px-2 py-1"
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

                {/* Enhanced Dropdown with descriptions */}
                {showServicesDropdown && (
                  <div
                    ref={dropdownRef}
                    className="absolute left-0 top-full pt-2"
                    onMouseEnter={() => {
                      clearCloseTimeout();
                      setShowServicesDropdown(true);
                    }}
                    onMouseLeave={scheduleDropdownClose}
                    role="menu"
                    aria-label="Services submenu"
                  >
                    <div className="w-[90vw] max-w-[700px] bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-[#E5E7EB]/50 p-8 animate-fade-in">
                      <div className="grid grid-cols-2 gap-10">
                        {/* Web Services Column */}
                        <div>
                          <h3
                            className="text-xs uppercase tracking-[0.1em] text-[#9CA3AF] mb-5 font-semibold"
                            id="web-services-heading"
                          >
                            WEB SERVICES
                          </h3>
                          <ul className="space-y-1" role="group" aria-labelledby="web-services-heading">
                            {webServices.map((service) => (
                              <li key={service.path} role="none">
                                <PreloadLink
                                  to={service.path}
                                  role="menuitem"
                                  className={`block py-2.5 px-3 -mx-3 rounded-lg hover:bg-[#F0F9F7] transition-colors focus:outline-none focus:bg-[#F0F9F7] focus:ring-2 focus:ring-[#0F766E] ${getServiceActiveClass(
                                    service.path,
                                  )}`}
                                >
                                  <div
                                    className={`text-base ${service.bold ? "font-semibold" : "font-medium"} text-[#1F2937]`}
                                  >
                                    {service.name}
                                  </div>
                                  <div className="text-xs text-[#6B7280] mt-0.5">{service.desc}</div>
                                </PreloadLink>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* AI Services Column */}
                        <div>
                          <h3
                            className="text-xs uppercase tracking-[0.1em] text-[#9CA3AF] mb-5 font-semibold"
                            id="ai-services-heading"
                          >
                            AI SERVICES
                          </h3>
                          <ul className="space-y-1" role="group" aria-labelledby="ai-services-heading">
                            {aiServices.map((service) => (
                              <li key={service.path} role="none">
                                <PreloadLink
                                  to={service.path}
                                  role="menuitem"
                                  className={`block py-2.5 px-3 -mx-3 rounded-lg hover:bg-[#F0F9F7] transition-colors focus:outline-none focus:bg-[#F0F9F7] focus:ring-2 focus:ring-[#0F766E] ${getServiceActiveClass(
                                    service.path,
                                  )}`}
                                >
                                  <div
                                    className={`text-base ${service.bold ? "font-semibold" : "font-medium"} text-[#1F2937]`}
                                  >
                                    {service.name}
                                  </div>
                                  <div className="text-xs text-[#6B7280] mt-0.5">{service.desc}</div>
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

              {navLinks.map((link) => (
                <PreloadLink
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium text-[#6B7280] hover:text-[#0F766E] transition-colors focus:outline-none focus:text-[#0F766E] focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-2 rounded-lg px-2 py-1 ${
                    location.pathname === link.path ? "text-[#0F766E] font-semibold" : ""
                  }`}
                >
                  {link.name}
                </PreloadLink>
              ))}

              {/* Phone Number - Click to call */}
              <a
                href="tel:+447123456789"
                className="flex items-center gap-2 text-base font-medium text-[#6B7280] hover:text-[#0F766E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:ring-offset-2 rounded-lg px-2 py-1"
                aria-label="Call us on 07123 456789"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span className="hidden xl:inline">07123 456789</span>
              </a>

              {/* CTA Button */}
              <Button
                asChild
                className="bg-[#0F766E] text-white hover:bg-[#F59E0B] px-6 py-3 rounded-lg shadow-[0_4px_12px_rgba(15,118,110,0.25)] hover:shadow-[0_6px_16px_rgba(245,158,11,0.3)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:ring-offset-2 font-semibold"
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden bg-white border-t border-[#E5E7EB] animate-slide-in-right"
            role="dialog"
            aria-label="Mobile menu"
          >
            <div className="px-4 py-5 space-y-1">
              {/* Services Accordion */}
              <div className="border-b border-[#E5E7EB] pb-3 mb-3">
                <button
                  className="flex items-center justify-between w-full py-3 px-2 text-[#1F2937] font-medium hover:bg-gray-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
                  onClick={() => setShowMobileServicesAccordion((prev) => !prev)}
                  aria-expanded={showMobileServicesAccordion}
                  aria-label="Services menu"
                >
                  <span className="text-base">Services</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      showMobileServicesAccordion ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {showMobileServicesAccordion && (
                  <div className="pl-3 pr-2 mt-3 space-y-3">
                    {/* Web Services */}
                    <div>
                      <div className="text-xs uppercase tracking-wide text-[#9CA3AF] font-semibold mb-3 px-2">
                        Web Services
                      </div>
                      <div className="space-y-1">
                        {webServices.map((service) => (
                          <PreloadLink
                            key={service.path}
                            to={service.path}
                            className={`block py-2.5 px-3 rounded-lg hover:bg-[#F0F9F7] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F766E] ${getServiceActiveClass(
                              service.path,
                            )}`}
                          >
                            <div className={`text-sm ${service.bold ? "font-semibold" : "font-medium"} text-[#1F2937]`}>
                              {service.name}
                            </div>
                            <div className="text-xs text-[#6B7280] mt-0.5">{service.desc}</div>
                          </PreloadLink>
                        ))}
                      </div>
                    </div>

                    {/* AI Services */}
                    <div className="pt-3 border-t border-[#E5E7EB]">
                      <div className="text-xs uppercase tracking-wide text-[#9CA3AF] font-semibold mb-3 px-2">
                        AI Services
                      </div>
                      <div className="space-y-1">
                        {aiServices.map((service) => (
                          <PreloadLink
                            key={service.path}
                            to={service.path}
                            className={`block py-2.5 px-3 rounded-lg hover:bg-[#F0F9F7] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F766E] ${getServiceActiveClass(
                              service.path,
                            )}`}
                          >
                            <div className={`text-sm ${service.bold ? "font-semibold" : "font-medium"} text-[#1F2937]`}>
                              {service.name}
                            </div>
                            <div className="text-xs text-[#6B7280] mt-0.5">{service.desc}</div>
                          </PreloadLink>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Other nav links */}
              {navLinks.map((link) => (
                <PreloadLink
                  key={link.path}
                  to={link.path}
                  className={`block py-3 px-3 text-base rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F766E] ${
                    location.pathname === link.path ? "text-[#0F766E] font-semibold bg-[#F0F9F7]" : "text-[#1F2937]"
                  }`}
                >
                  {link.name}
                </PreloadLink>
              ))}

              {/* Phone Number - Mobile */}
              <a
                href="tel:+447123456789"
                className="flex items-center gap-2 py-3 px-3 text-base font-medium text-[#1F2937] hover:bg-gray-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
              >
                <Phone className="h-4 w-4 text-[#0F766E]" aria-hidden="true" />
                <span>07123 456789</span>
              </a>

              {/* Mobile CTA */}
              <div className="pt-3 border-t border-[#E5E7EB] mt-3">
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
