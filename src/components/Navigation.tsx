import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PreloadLink } from "@/components/PreloadLink";

interface NavigationProps {
  darkHero?: boolean;
}

const Navigation = ({ darkHero = false }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const closeTimeoutRef = useRef<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    setActiveDropdown(null);
  }, [location]);

  // Accessibility: Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  // Accessibility: Close dropdown on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && activeDropdown) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [activeDropdown]);

  // Services mega menu structure - 4 columns
  const servicesMenu = {
    webDesign: {
      title: "Web & Design",
      items: [
        { name: "Web Design", path: "/web-package", desc: "Beautiful, responsive websites" },
        { name: "Web Development", path: "/services/app-development", desc: "Custom web applications" },
        { name: "Landing Pages", path: "/services/landing-pages", desc: "High-converting pages" },
        { name: "UX/UI Design", path: "/services/ux-ui-design", desc: "User-centered design" },
        { name: "Personalised Apps", path: "/services/personalised-apps", desc: "Custom business tools" },
      ],
    },
    ecommerce: {
      title: "E-Commerce & Optimization",
      items: [
        { name: "E-Commerce", path: "/services/ecommerce", desc: "Online store solutions" },
        { name: "CRO", path: "/services/cro", desc: "Conversion rate optimization" },
        { name: "SEO", path: "/services/seo", desc: "Search engine optimization" },
      ],
    },
    branding: {
      title: "Brand & Marketing",
      items: [
        { name: "Brand Strategy", path: "/services/branding", desc: "Strategic brand development" },
        { name: "Brand Identity Design", path: "/services/logo-design", desc: "Visual identity & logos" },
        { name: "Digital Marketing", path: "/services/digital-marketing", desc: "Online marketing campaigns" },
        { name: "Copywriting", path: "/services/copywriting", desc: "Compelling website copy" },
        { name: "Content Marketing", path: "/services/content-marketing", desc: "Blog & content strategy" },
        { name: "Email Marketing", path: "/services/email-marketing", desc: "Email campaigns & automation" },
      ],
    },
    support: {
      title: "Support & Hosting",
      items: [
        { name: "Web Hosting", path: "/services/web-hosting", desc: "Fast, secure hosting" },
        { name: "Maintenance & Support", path: "/services/maintenance-support", desc: "Ongoing website care" },
        { name: "IT Support", path: "/services/it-support", desc: "Technical assistance" },
      ],
    },
  };

  // Platforms dropdown
  const platformsMenu = [
    { name: "WordPress", path: "/platforms/wordpress", desc: "World's most popular CMS" },
    { name: "Shopify", path: "/platforms/shopify", desc: "Leading e-commerce platform" },
    { name: "WooCommerce", path: "/platforms/woocommerce", desc: "WordPress e-commerce" },
    { name: "Custom Development", path: "/platforms/custom-development", desc: "Bespoke React/Next.js solutions" },
  ];

  // Key Sectors dropdown - exactly like LWDA
  const sectorsMenu = [
    { name: "Property Websites", path: "/sectors/property", desc: "Estate agents & property developers" },
    { name: "Charity Websites", path: "/sectors/charity", desc: "Non-profits & charities" },
    { name: "B2B Websites", path: "/sectors/b2b", desc: "Business-to-business solutions" },
    { name: "B2C Websites", path: "/sectors/b2c", desc: "Consumer-focused websites" },
  ];

  const navLinks = [
    { name: "Case Studies", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
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
      setActiveDropdown(null);
    }, 150);
  };

  const handleDropdownEnter = (dropdown: string) => {
    clearCloseTimeout();
    setActiveDropdown(dropdown);
  };

  const handleKeyDown = (e: React.KeyboardEvent, dropdown: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    }
  };

  const getActiveClass = (path: string) => {
    const basePath = path.split("#")[0];
    return location.pathname === basePath ? "font-semibold" : "";
  };

  // Determine text color based on scroll state and dark hero
  const getNavTextClass = () => {
    if (isScrolled) {
      return "text-foreground hover:text-primary";
    }
    return darkHero 
      ? "text-white/90 hover:text-white" 
      : "text-muted-foreground hover:text-primary";
  };

  const getMutedTextClass = () => {
    if (isScrolled) {
      return "text-muted-foreground";
    }
    return darkHero ? "text-white/70" : "text-muted-foreground";
  };

  return (
    <>
      {/* Accessibility: Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>


      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-300 top-0 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-md shadow-lg py-2" 
            : "bg-transparent py-4"
        }`}
        role="navigation"
        aria-label="Main navigation"
        ref={dropdownRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[56px]">
            {/* Logo */}
            <PreloadLink
              to="/"
              className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg transition-all px-2 py-1.5"
              aria-label="L&D Digital home"
            >
              {/* L&D Monogram Icon */}
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path 
                  d="M15 10 L15 75 L35 90 L85 90 L85 25 L65 10 L15 10 Z" 
                  fill="none" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth="6"
                  strokeLinejoin="round"
                />
                <path 
                  d="M28 28 L28 65 L48 65" 
                  fill="none" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth="6" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <text 
                  x="42" 
                  y="58" 
                  fill="hsl(var(--muted-foreground))" 
                  fontSize="18" 
                  fontWeight="500"
                  fontFamily="system-ui"
                >
                  &amp;
                </text>
                <path 
                  d="M55 28 L55 65 M55 28 L70 28 Q82 28 82 46.5 Q82 65 70 65 L55 65" 
                  fill="none" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth="6" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex flex-col leading-none">
                <span className="text-[18px] font-bold tracking-tight">
                  <span className={isScrolled ? "text-foreground" : darkHero ? "text-white" : "text-foreground"}>L&amp;D</span>{" "}
                  <span className="text-primary">DIGITAL</span>
                </span>
                <span className={`text-[10px] font-medium tracking-[0.2em] mt-0.5 uppercase ${getMutedTextClass()}`}>
                  Luminus &amp; Deliver —
                </span>
              </div>
            </PreloadLink>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Services Mega Dropdown */}
              <div className="relative">
                <button
                  className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg px-4 py-2.5 focus:ring-primary ${getNavTextClass()} ${
                    activeDropdown === "services" ? "text-primary" : ""
                  }`}
                  onMouseEnter={() => handleDropdownEnter("services")}
                  onMouseLeave={scheduleDropdownClose}
                  onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
                  onKeyDown={(e) => handleKeyDown(e, "services")}
                  aria-expanded={activeDropdown === "services"}
                  aria-haspopup="menu"
                  aria-label="Services menu"
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                {/* Services Mega Menu - Full Width 4 Columns */}
                {activeDropdown === "services" && (
                  <div
                    className={`fixed left-0 right-0 z-50 ${isScrolled ? "top-[72px]" : "top-[88px]"}`}
                    onMouseEnter={() => handleDropdownEnter("services")}
                    onMouseLeave={scheduleDropdownClose}
                    role="menu"
                    aria-label="Services submenu"
                  >
                    <div className="bg-background border-t border-border shadow-2xl">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="grid grid-cols-4 gap-8">
                          {/* Column 1: Web & Design */}
                          <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                              {servicesMenu.webDesign.title}
                            </h3>
                            <ul className="space-y-1">
                              {servicesMenu.webDesign.items.map((item) => (
                                <li key={item.path}>
                                  <PreloadLink
                                    to={item.path}
                                    role="menuitem"
                                    className={`block py-2.5 px-3 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:bg-muted focus:ring-2 focus:ring-primary ${getActiveClass(item.path)}`}
                                  >
                                    <div className="text-[14px] font-semibold text-foreground">{item.name}</div>
                                    <div className="text-[12px] text-muted-foreground mt-0.5">{item.desc}</div>
                                  </PreloadLink>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Column 2: E-Commerce & Optimization */}
                          <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                              {servicesMenu.ecommerce.title}
                            </h3>
                            <ul className="space-y-1">
                              {servicesMenu.ecommerce.items.map((item) => (
                                <li key={item.path}>
                                  <PreloadLink
                                    to={item.path}
                                    role="menuitem"
                                    className={`block py-2.5 px-3 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:bg-muted focus:ring-2 focus:ring-primary ${getActiveClass(item.path)}`}
                                  >
                                    <div className="text-[14px] font-semibold text-foreground">{item.name}</div>
                                    <div className="text-[12px] text-muted-foreground mt-0.5">{item.desc}</div>
                                  </PreloadLink>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Column 3: Brand & Marketing */}
                          <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                              {servicesMenu.branding.title}
                            </h3>
                            <ul className="space-y-1">
                              {servicesMenu.branding.items.map((item) => (
                                <li key={item.path}>
                                  <PreloadLink
                                    to={item.path}
                                    role="menuitem"
                                    className={`block py-2.5 px-3 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:bg-muted focus:ring-2 focus:ring-primary ${getActiveClass(item.path)}`}
                                  >
                                    <div className="text-[14px] font-semibold text-foreground">{item.name}</div>
                                    <div className="text-[12px] text-muted-foreground mt-0.5">{item.desc}</div>
                                  </PreloadLink>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Column 4: Support & Hosting */}
                          <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                              {servicesMenu.support.title}
                            </h3>
                            <ul className="space-y-1">
                              {servicesMenu.support.items.map((item) => (
                                <li key={item.path}>
                                  <PreloadLink
                                    to={item.path}
                                    role="menuitem"
                                    className={`block py-2.5 px-3 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:bg-muted focus:ring-2 focus:ring-primary ${getActiveClass(item.path)}`}
                                  >
                                    <div className="text-[14px] font-semibold text-foreground">{item.name}</div>
                                    <div className="text-[12px] text-muted-foreground mt-0.5">{item.desc}</div>
                                  </PreloadLink>
                                </li>
                              ))}
                            </ul>

                            {/* View All Services CTA */}
                            <div className="mt-6 pt-4 border-t border-border">
                              <PreloadLink
                                to="/services"
                                role="menuitem"
                                className="flex items-center gap-2 text-[14px] font-semibold text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                              >
                                View All Services
                                <ArrowRight className="h-4 w-4" />
                              </PreloadLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Platforms Dropdown */}
              <div className="relative">
                <button
                  className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg px-4 py-2.5 focus:ring-primary ${getNavTextClass()} ${
                    activeDropdown === "platforms" ? "text-primary" : ""
                  }`}
                  onMouseEnter={() => handleDropdownEnter("platforms")}
                  onMouseLeave={scheduleDropdownClose}
                  onClick={() => setActiveDropdown(activeDropdown === "platforms" ? null : "platforms")}
                  onKeyDown={(e) => handleKeyDown(e, "platforms")}
                  aria-expanded={activeDropdown === "platforms"}
                  aria-haspopup="menu"
                  aria-label="Platforms menu"
                >
                  Platforms
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "platforms" ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                {activeDropdown === "platforms" && (
                  <div
                    className="absolute left-0 top-[calc(100%+4px)] z-50"
                    onMouseEnter={() => handleDropdownEnter("platforms")}
                    onMouseLeave={scheduleDropdownClose}
                    role="menu"
                    aria-label="Platforms submenu"
                  >
                    <div className="w-[320px] bg-background rounded-xl shadow-xl border border-border p-3 animate-fade-in">
                      <ul className="space-y-1">
                        {platformsMenu.map((item) => (
                          <li key={item.path}>
                            <PreloadLink
                              to={item.path}
                              role="menuitem"
                              className={`block py-2.5 px-3 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:bg-muted focus:ring-2 focus:ring-primary ${getActiveClass(item.path)}`}
                            >
                              <div className="text-[14px] font-semibold text-foreground">{item.name}</div>
                              <div className="text-[12px] text-muted-foreground mt-0.5">{item.desc}</div>
                            </PreloadLink>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 pt-3 border-t border-border">
                        <PreloadLink
                          to="/platforms"
                          role="menuitem"
                          className="flex items-center gap-2 px-3 py-2 text-[14px] font-semibold text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                        >
                          View All Platforms
                          <ArrowRight className="h-4 w-4" />
                        </PreloadLink>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Key Sectors Dropdown */}
              <div className="relative">
                <button
                  className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg px-4 py-2.5 focus:ring-primary ${getNavTextClass()} ${
                    activeDropdown === "sectors" ? "text-primary" : ""
                  }`}
                  onMouseEnter={() => handleDropdownEnter("sectors")}
                  onMouseLeave={scheduleDropdownClose}
                  onClick={() => setActiveDropdown(activeDropdown === "sectors" ? null : "sectors")}
                  onKeyDown={(e) => handleKeyDown(e, "sectors")}
                  aria-expanded={activeDropdown === "sectors"}
                  aria-haspopup="menu"
                  aria-label="Key Sectors menu"
                >
                  Key Sectors
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "sectors" ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                {activeDropdown === "sectors" && (
                  <div
                    className="absolute left-0 top-[calc(100%+4px)] z-50"
                    onMouseEnter={() => handleDropdownEnter("sectors")}
                    onMouseLeave={scheduleDropdownClose}
                    role="menu"
                    aria-label="Key Sectors submenu"
                  >
                    <div className="w-[320px] bg-background rounded-xl shadow-xl border border-border p-3 animate-fade-in">
                      <ul className="space-y-1">
                        {sectorsMenu.map((item) => (
                          <li key={item.path}>
                            <PreloadLink
                              to={item.path}
                              role="menuitem"
                              className={`block py-2.5 px-3 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:bg-muted focus:ring-2 focus:ring-primary ${getActiveClass(item.path)}`}
                            >
                              <div className="text-[14px] font-semibold text-foreground">{item.name}</div>
                              <div className="text-[12px] text-muted-foreground mt-0.5">{item.desc}</div>
                            </PreloadLink>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 pt-3 border-t border-border">
                        <PreloadLink
                          to="/sectors"
                          role="menuitem"
                          className="flex items-center gap-2 px-3 py-2 text-[14px] font-semibold text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                        >
                          View All Sectors
                          <ArrowRight className="h-4 w-4" />
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
                  className={`text-[15px] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg px-4 py-2.5 focus:ring-primary ${getNavTextClass()} ${
                    location.pathname === link.path ? "text-primary font-semibold" : ""
                  }`}
                >
                  {link.name}
                </PreloadLink>
              ))}

              {/* Separator line */}
              <div className={`h-6 w-px mx-3 ${isScrolled ? "bg-border" : darkHero ? "bg-white/30" : "bg-border"}`} aria-hidden="true" />

              {/* Phone Number */}
              <a
                href="tel:+447123456789"
                className={`flex items-center gap-2 text-[15px] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg px-4 py-2.5 focus:ring-primary ${getNavTextClass()}`}
                aria-label="Call us on 07123 456789"
              >
                <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
                <span>07123 456789</span>
              </a>

              {/* CTA Button - Get In Touch */}
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2.5 h-auto rounded-lg shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 font-semibold text-[15px] ml-2"
              >
                <PreloadLink to="/contact">Get In Touch</PreloadLink>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                isScrolled ? "hover:bg-muted" : darkHero ? "hover:bg-white/10" : "hover:bg-muted"
              }`}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : darkHero ? "text-white" : "text-foreground"}`} aria-hidden="true" />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : darkHero ? "text-white" : "text-foreground"}`} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden bg-background border-t border-border animate-fade-in max-h-[80vh] overflow-y-auto"
            role="dialog"
            aria-label="Mobile menu"
          >
            <div className="px-4 py-5 space-y-4">
              {/* Services Accordion */}
              <MobileAccordion title="Services">
                <div className="space-y-4 pl-2">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">{servicesMenu.webDesign.title}</h4>
                    {servicesMenu.webDesign.items.map((item) => (
                      <PreloadLink key={item.path} to={item.path} className="block py-2 text-sm text-foreground hover:text-primary">
                        {item.name}
                      </PreloadLink>
                    ))}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">{servicesMenu.ecommerce.title}</h4>
                    {servicesMenu.ecommerce.items.map((item) => (
                      <PreloadLink key={item.path} to={item.path} className="block py-2 text-sm text-foreground hover:text-primary">
                        {item.name}
                      </PreloadLink>
                    ))}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">{servicesMenu.branding.title}</h4>
                    {servicesMenu.branding.items.map((item) => (
                      <PreloadLink key={item.path} to={item.path} className="block py-2 text-sm text-foreground hover:text-primary">
                        {item.name}
                      </PreloadLink>
                    ))}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">{servicesMenu.support.title}</h4>
                    {servicesMenu.support.items.map((item) => (
                      <PreloadLink key={item.path} to={item.path} className="block py-2 text-sm text-foreground hover:text-primary">
                        {item.name}
                      </PreloadLink>
                    ))}
                  </div>
                  <PreloadLink to="/services" className="flex items-center gap-2 py-2 text-sm font-semibold text-primary">
                    View All Services <ArrowRight className="h-4 w-4" />
                  </PreloadLink>
                </div>
              </MobileAccordion>

              {/* Platforms Accordion */}
              <MobileAccordion title="Platforms">
                <div className="pl-2">
                  {platformsMenu.map((item) => (
                    <PreloadLink key={item.path} to={item.path} className="block py-2 text-sm text-foreground hover:text-primary">
                      {item.name}
                    </PreloadLink>
                  ))}
                  <PreloadLink to="/platforms" className="flex items-center gap-2 py-2 text-sm font-semibold text-primary">
                    View All Platforms <ArrowRight className="h-4 w-4" />
                  </PreloadLink>
                </div>
              </MobileAccordion>

              {/* Key Sectors Accordion */}
              <MobileAccordion title="Key Sectors">
                <div className="pl-2">
                  {sectorsMenu.map((item) => (
                    <PreloadLink key={item.path} to={item.path} className="block py-2 text-sm text-foreground hover:text-primary">
                      {item.name}
                    </PreloadLink>
                  ))}
                  <PreloadLink to="/sectors" className="flex items-center gap-2 py-2 text-sm font-semibold text-primary">
                    View All Sectors <ArrowRight className="h-4 w-4" />
                  </PreloadLink>
                </div>
              </MobileAccordion>

              {/* Nav Links */}
              <div className="border-t border-border pt-4 space-y-1">
                {navLinks.map((link) => (
                  <PreloadLink
                    key={link.path}
                    to={link.path}
                    className={`block py-3 px-3 text-base font-medium rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                      location.pathname === link.path ? "text-primary font-semibold bg-muted" : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </PreloadLink>
                ))}
              </div>

              {/* Phone Number */}
              <a
                href="tel:+447123456789"
                className="flex items-center gap-3 py-3 px-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>07123 456789</span>
              </a>

              {/* Mobile CTA */}
              <div className="pt-3 border-t border-border">
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-4 text-base font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all"
                  asChild
                >
                  <PreloadLink to="/contact">Get In Touch</PreloadLink>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

// Mobile Accordion Component
const MobileAccordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border pb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-3 px-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
        aria-expanded={isOpen}
      >
        {title}
        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && <div className="py-2 animate-fade-in">{children}</div>}
    </div>
  );
};

export default Navigation;
