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
    { name: "App Development", path: "/services#app-development" },
    { name: "Personalised Apps", path: "/services#personalised-apps" },
    { name: "Landing Page Creation", path: "/services#landing-pages" },
    { name: "Logo Design", path: "/services#logo-design" },
    { name: "Branding", path: "/services#branding" },
    { name: "Maintenance & Support", path: "/services#maintenance" },
    { name: "IT Support", path: "/services#it-support" },
  ];

  // AI SERVICES COLUMN (UNCHANGED)
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

  return (
    <nav className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <PreloadLink to="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#1F2937]">X15 DIGITAL</span>
          </PreloadLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-base font-medium text-[#6B7280] hover:text-[#0F766E] transition-colors"
                onMouseEnter={() => {
                  clearCloseTimeout();
                  setShowServicesDropdown(true);
                }}
                onMouseLeave={scheduleDropdownClose}
                onClick={() => setShowServicesDropdown((prev) => !prev)}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${showServicesDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Menu */}
              {showServicesDropdown && (
                <div
                  className="absolute left-0 top-full pt-2"
                  onMouseEnter={() => {
                    clearCloseTimeout();
                    setShowServicesDropdown(true);
                  }}
                  onMouseLeave={scheduleDropdownClose}
                >
                  <div className="w-[90vw] max-w-[600px] bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-[#E5E7EB]/50 p-8 animate-fade-in">
                    <div className="grid grid-cols-2 gap-10">
                      {/* Web Services Column */}
                      <div>
                        <h3 className="text-xs uppercase tracking-[0.1em] text-[#9CA3AF] mb-5 font-semibold">
                          WEB SERVICES
                        </h3>
                        <ul className="space-y-0">
                          {webServices.map((service) => (
                            <li key={service.path}>
                              <PreloadLink
                                to={service.path}
                                className={`block py-3 px-3 -mx-3 text-base rounded-lg hover:bg-[#F0F9F7] transition-colors ${
                                  service.bold ? "font-semibold text-[#1F2937]" : "text-[#1F2937]"
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
                        <h3 className="text-xs uppercase tracking-[0.1em] text-[#9CA3AF] mb-5 font-semibold">
                          AI SERVICES
                        </h3>
                        <ul className="space-y-0">
                          {aiServices.map((service) => (
                            <li key={service.path}>
                              <PreloadLink
                                to={service.path}
                                className={`block py-3 px-3 -mx-3 text-base rounded-lg hover:bg-[#F0F9F7] transition-colors ${
                                  service.bold ? "font-semibold text-[#1F2937]" : "text-[#1F2937]"
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

            {navLinks.map((link) => (
              <PreloadLink
                key={link.path}
                to={link.path}
                className={`text-base font-medium text-[#6B7280] hover:text-[#0F766E] transition-colors ${
                  location.pathname === link.path ? "text-[#0F766E] font-semibold" : ""
                }`}
              >
                {link.name}
              </PreloadLink>
            ))}

            <Button
              asChild
              className="bg-[#0F766E] text-white hover:bg-[#F59E0B] px-6 py-3 rounded-lg shadow-[0_2px_8px_rgba(15,118,110,0.2)]"
            >
              <PreloadLink to="/contact">Get Started</PreloadLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6 text-[#1F2937]" /> : <Menu className="h-6 w-6 text-[#1F2937]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-[#E5E7EB] animate-slide-in-right">
          <div className="px-4 py-4 space-y-3">
            {/* Services Accordion */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-[#1F2937] font-medium"
                onClick={() => setShowServicesDropdown((prev) => !prev)}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${showServicesDropdown ? "rotate-180" : ""}`} />
              </button>
              {showServicesDropdown && (
                <div className="pl-4 mt-2 space-y-2">
                  <div className="text-xs uppercase tracking-wide text-[#9CA3AF] mb-2">Web Services</div>
                  {webServices.map((service) => (
                    <PreloadLink
                      key={service.path}
                      to={service.path}
                      className={`block py-2 text-sm ${
                        service.bold ? "font-semibold" : ""
                      } text-[#1F2937] ${getServiceActiveClass(service.path)}`}
                    >
                      {service.name}
                    </PreloadLink>
                  ))}

                  <div className="text-xs uppercase tracking-wide text-[#9CA3AF] mt-4 mb-2">AI Services</div>
                  {aiServices.map((service) => (
                    <PreloadLink
                      key={service.path}
                      to={service.path}
                      className={`block py-2 text-sm ${
                        service.bold ? "font-semibold" : ""
                      } text-[#1F2937] ${getServiceActiveClass(service.path)}`}
                    >
                      {service.name}
                    </PreloadLink>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <PreloadLink
                key={link.path}
                to={link.path}
                className={`block py-2 text-[#1F2937] hover:text-[#0F766E] transition-colors ${
                  location.pathname === link.path ? "text-[#0F766E] font-semibold" : ""
                }`}
              >
                {link.name}
              </PreloadLink>
            ))}

            <Button className="w-full bg-[#0F766E] text-white hover:bg-[#F59E0B]" asChild>
              <PreloadLink to="/contact">Get Started</PreloadLink>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
