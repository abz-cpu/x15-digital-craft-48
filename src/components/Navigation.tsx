import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PreloadLink } from "@/components/PreloadLink";

interface NavigationProps {
  darkHero?: boolean;
}

/* ===== LAYOUT STRATEGY =====
 * LWDA-style spacing:
 * - Expanded (on load): 100px tall, logo 44px, generous padding
 * - Compact (on scroll): 68px tall, logo 36px, tighter but not cramped
 * - Use a 3-zone layout: logo (left), nav links (center-ish), actions (right)
 * - Smaller font sizes (12px uppercase) with generous letter-spacing
 * - Increased gaps between nav items (gap-10 to gap-12)
 * - Actions section spaced away from nav links with ml-auto for natural distribution
 */

const ANNOUNCEMENT_BAR_HEIGHT = 44;
const NAV_HEIGHT_EXPANDED = 100; // Taller for premium feel
const NAV_HEIGHT_COMPACT = 68; // Still roomy when compact

const Navigation = ({ darkHero = false }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [announcementDismissed, setAnnouncementDismissed] = useState(() => {
    // Check localStorage on initial load
    if (typeof window !== 'undefined') {
      return localStorage.getItem('announcementDismissed') === 'true';
    }
    return false;
  });
  const showAnnouncementBar = !announcementDismissed && !isScrolled;

  const handleDismissAnnouncement = () => {
    setAnnouncementDismissed(true);
    localStorage.setItem('announcementDismissed', 'true');
  };

  const closeTimeoutRef = useRef<number | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const platformsButtonRef = useRef<HTMLButtonElement>(null);
  const sectorsButtonRef = useRef<HTMLButtonElement>(null);

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
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
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
      title: "E-Commerce & CRO",
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
      title: "Support & AI",
      items: [
        { name: "Web Hosting", path: "/services/web-hosting", desc: "Fast, secure hosting" },
        { name: "Maintenance & Support", path: "/services/maintenance-support", desc: "Ongoing website care" },
        { name: "IT Support", path: "/services/it-support", desc: "Technical assistance" },
        { name: "AI Solutions", path: "/ai-package", desc: "Smart automation tools" },
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
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  const clearCloseTimeout = useCallback(() => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const scheduleDropdownClose = useCallback(() => {
    clearCloseTimeout();
    closeTimeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  }, [clearCloseTimeout]);

  const handleDropdownEnter = useCallback(
    (dropdown: string) => {
      clearCloseTimeout();
      setActiveDropdown(dropdown);
    },
    [clearCloseTimeout],
  );

  const handleKeyDown = (e: React.KeyboardEvent, dropdown: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    }
  };

  const getActiveClass = (path: string) => {
    const basePath = path.split("#")[0];
    const isActive = location.pathname === basePath || (basePath !== "/" && location.pathname.startsWith(basePath));
    return isActive ? "font-semibold text-primary bg-primary/10" : "";
  };

  const isPathActive = (path: string) => {
    const basePath = path.split("#")[0];
    return location.pathname === basePath || (basePath !== "/" && location.pathname.startsWith(basePath));
  };

  // Check if any item in a dropdown is active (for parent menu highlighting)
  const isDropdownActive = (items: Array<{ path: string }>) => {
    return items.some((item) => {
      const basePath = item.path.split("#")[0];
      return location.pathname === basePath || (basePath !== "/" && location.pathname.startsWith(basePath));
    });
  };

  // Get all services paths for parent highlighting
  const allServicesPaths = [
    ...servicesMenu.webDesign.items,
    ...servicesMenu.ecommerce.items,
    ...servicesMenu.branding.items,
    ...servicesMenu.support.items,
  ];

  // Determine text color based on scroll state and dark hero
  const getNavTextClass = () => {
    if (isScrolled) {
      return "text-foreground hover:text-primary";
    }
    return darkHero ? "text-white/90 hover:text-white" : "text-foreground hover:text-primary";
  };

  const getMutedTextClass = () => {
    if (isScrolled) {
      return "text-muted-foreground";
    }
    return darkHero ? "text-white/70" : "text-muted-foreground";
  };

  // Calculate dropdown position dynamically
  const getDropdownTop = () => {
    const navHeight = isScrolled ? NAV_HEIGHT_COMPACT : NAV_HEIGHT_EXPANDED;
    const announcementHeight = showAnnouncementBar ? ANNOUNCEMENT_BAR_HEIGHT : 0;
    return navHeight + announcementHeight;
  };

  /* ===== SIZING RULES =====
   * Logo: 44px expanded → 36px compact (smooth transition)
   * Font: 12px uppercase with tracking-[0.15em] for LWDA-style spacing
   * Gaps: gap-10 xl:gap-12 between nav items for breathing room
   * Actions: use ml-auto to push to far right, with gap-6 between items
   */

  return (
    <>
      {/* Accessibility: Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Announcement Bar - Like LWDA */}
      {showAnnouncementBar && (
        <div
          className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white px-4 text-center"
          style={{ height: `${ANNOUNCEMENT_BAR_HEIGHT}px` }}
        >
          <div className="max-w-7xl mx-auto h-full flex items-center justify-center gap-3 text-sm font-medium">
            <span className="hidden sm:inline">🚀 Get Your Free Website Audit in 24 Hours</span>
            <span className="sm:hidden">🚀 Free Website Audit</span>
            <PreloadLink
              to="/contact"
              className="inline-flex items-center gap-1 underline underline-offset-2 hover:no-underline font-bold"
            >
              Claim Now
              <ArrowRight className="h-3.5 w-3.5" />
            </PreloadLink>
            <button
              onClick={handleDismissAnnouncement}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded transition-colors"
              aria-label="Close announcement"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <nav
        ref={navRef}
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
        style={{
          top: showAnnouncementBar ? `${ANNOUNCEMENT_BAR_HEIGHT}px` : 0,
          height: isScrolled ? `${NAV_HEIGHT_COMPACT}px` : `${NAV_HEIGHT_EXPANDED}px`,
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Container: max-w-[1400px] for wider feel, generous horizontal padding */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-full">
          {/* Main flex row: logo left, everything else right-aligned with spacing */}
          <div className="flex items-center h-full">
            {/* === ZONE 1: Logo === */}
            <PreloadLink
              to="/"
              className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg transition-all shrink-0"
              aria-label="L&D Digital home"
            >
              {/* L&D Monogram Icon - scales with scroll */}
              <svg
                width={isScrolled ? 36 : 44}
                height={isScrolled ? 36 : 44}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 transition-all duration-300"
              >
                {/* Gradient definition - green to gold blend */}
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="60%" stopColor="#14B8A6" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>
                {/* Outer frame with gradient */}
                <path
                  d="M15 10 L15 75 L35 90 L85 90 L85 25 L65 10 L15 10 Z"
                  fill="none"
                  stroke="url(#logoGradient)"
                  strokeWidth="6"
                  strokeLinejoin="round"
                />
                <path
                  d="M28 28 L28 65 L48 65"
                  fill="none"
                  stroke="url(#logoGradient)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Ampersand with gold color */}
                <text x="42" y="58" fill="#F59E0B" fontSize="18" fontWeight="600" fontFamily="system-ui">
                  &amp;
                </text>
                <path
                  d="M55 28 L55 65 M55 28 L70 28 Q82 28 82 46.5 Q82 65 70 65 L55 65"
                  fill="none"
                  stroke="url(#logoGradient)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex flex-col leading-none whitespace-nowrap">
                <span
                  className={`font-bold tracking-tight transition-all duration-300 ${isScrolled ? "text-base" : "text-lg"}`}
                  style={{ textShadow: !isScrolled && darkHero ? '0 1px 3px rgba(0,0,0,0.3)' : 'none' }}
                >
                  <span className={isScrolled ? "text-foreground" : darkHero ? "text-white" : "text-foreground"}>
                    L&amp;D
                  </span>{" "}
                  <span className={isScrolled ? "text-primary" : darkHero ? "text-white" : "text-primary"}>DIGITAL</span>
                </span>
                {/* Tagline: hide on compact to reduce clutter */}
                <span
                  className={`font-medium tracking-[0.12em] mt-0.5 uppercase transition-all duration-300 ${getMutedTextClass()} ${isScrolled ? "text-[7px] opacity-70" : "text-[9px]"}`}
                  style={{ textShadow: !isScrolled && darkHero ? '0 1px 2px rgba(0,0,0,0.25)' : 'none' }}
                >
                  Luminous &amp; Deliver —
                </span>
              </div>
            </PreloadLink>

            {/* === ZONE 2 + 3: Nav Links + Actions (pushed to the right) === */}
            <div className="hidden xl:flex items-center flex-1 justify-end">
              {/* Nav Items Container - tighter gap to fit all items */}
              <div className="flex items-center gap-6 xl:gap-8">
                {/* Services Dropdown */}
                <div className="relative">
                  <button
                    ref={servicesButtonRef}
                    className={`flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.15em] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg whitespace-nowrap focus:ring-primary py-2 px-3 ${getNavTextClass()} ${
                      activeDropdown === "services" || isDropdownActive(allServicesPaths) ? "text-primary" : ""
                    } hover:bg-primary/10`}
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
                      className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Services Mega Menu - Anchored under Services, ~1000px wide */}
                  {activeDropdown === "services" && (
                    <div
                      className="fixed z-50"
                      style={{
                        top: `${getDropdownTop()}px`,
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                      onMouseEnter={() => handleDropdownEnter("services")}
                      onMouseLeave={scheduleDropdownClose}
                      role="menu"
                      aria-label="Services submenu"
                    >
                      {/* Hover bridge - invisible area to prevent close when moving mouse */}
                      <div className="absolute -top-4 left-0 right-0 h-5" />

                      <div className="w-[1000px] max-w-[95vw] bg-background rounded-lg shadow-2xl border border-border animate-fade-in">
                        <div className="p-6">
                          <div className="grid grid-cols-4 gap-6">
                            {/* Column 1: Web & Design */}
                            <div>
                              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 pb-2 border-b border-border">
                                {servicesMenu.webDesign.title}
                              </h3>
                              <ul className="space-y-0.5">
                                {servicesMenu.webDesign.items.map((item) => (
                                  <li key={item.path}>
                                    <PreloadLink
                                      to={item.path}
                                      role="menuitem"
                                      className={`block py-2 px-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary hover:bg-primary/10 ${getActiveClass(item.path)}`}
                                    >
                                      <div className="text-[13px] font-medium text-foreground">{item.name}</div>
                                      <div className="text-[11px] text-muted-foreground mt-0.5 leading-tight">
                                        {item.desc}
                                      </div>
                                    </PreloadLink>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Column 2: E-Commerce & CRO */}
                            <div>
                              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 pb-2 border-b border-border">
                                {servicesMenu.ecommerce.title}
                              </h3>
                              <ul className="space-y-0.5">
                                {servicesMenu.ecommerce.items.map((item) => (
                                  <li key={item.path}>
                                    <PreloadLink
                                      to={item.path}
                                      role="menuitem"
                                      className={`block py-2 px-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary hover:bg-primary/10 ${getActiveClass(item.path)}`}
                                    >
                                      <div className="text-[13px] font-medium text-foreground">{item.name}</div>
                                      <div className="text-[11px] text-muted-foreground mt-0.5 leading-tight">
                                        {item.desc}
                                      </div>
                                    </PreloadLink>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Column 3: Brand & Marketing */}
                            <div>
                              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 pb-2 border-b border-border">
                                {servicesMenu.branding.title}
                              </h3>
                              <ul className="space-y-0.5">
                                {servicesMenu.branding.items.map((item) => (
                                  <li key={item.path}>
                                    <PreloadLink
                                      to={item.path}
                                      role="menuitem"
                                      className={`block py-2 px-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary hover:bg-primary/10 ${getActiveClass(item.path)}`}
                                    >
                                      <div className="text-[13px] font-medium text-foreground">{item.name}</div>
                                      <div className="text-[11px] text-muted-foreground mt-0.5 leading-tight">
                                        {item.desc}
                                      </div>
                                    </PreloadLink>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Column 4: Support & Hosting */}
                            <div>
                              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 pb-2 border-b border-border">
                                {servicesMenu.support.title}
                              </h3>
                              <ul className="space-y-0.5">
                                {servicesMenu.support.items.map((item) => (
                                  <li key={item.path}>
                                    <PreloadLink
                                      to={item.path}
                                      role="menuitem"
                                      className={`block py-2 px-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary hover:bg-primary/10 ${getActiveClass(item.path)}`}
                                    >
                                      <div className="text-[13px] font-medium text-foreground">{item.name}</div>
                                      <div className="text-[11px] text-muted-foreground mt-0.5 leading-tight">
                                        {item.desc}
                                      </div>
                                    </PreloadLink>
                                  </li>
                                ))}
                              </ul>

                              {/* View All Services CTA */}
                              <div className="mt-4 pt-3 border-t border-border">
                                <PreloadLink
                                  to="/services"
                                  role="menuitem"
                                  className="flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                                >
                                  View All Services
                                  <ArrowRight className="h-3.5 w-3.5" />
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
                    ref={platformsButtonRef}
                    className={`flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.15em] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg whitespace-nowrap focus:ring-primary py-2 px-3 ${getNavTextClass()} ${
                      activeDropdown === "platforms" || isDropdownActive(platformsMenu) ? "text-primary" : ""
                    } hover:bg-primary/10`}
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
                      className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === "platforms" ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  {activeDropdown === "platforms" && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 z-50"
                      style={{ top: "calc(100% + 12px)" }}
                      onMouseEnter={() => handleDropdownEnter("platforms")}
                      onMouseLeave={scheduleDropdownClose}
                      role="menu"
                      aria-label="Platforms submenu"
                    >
                      {/* Hover bridge */}
                      <div className="absolute -top-4 left-0 right-0 h-5" />

                      <div className="w-[280px] bg-background rounded-lg shadow-xl border border-border p-3 animate-fade-in">
                        <ul className="space-y-0.5">
                          {platformsMenu.map((item) => (
                            <li key={item.path}>
                              <PreloadLink
                                to={item.path}
                                role="menuitem"
                                className={`block py-2 px-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary hover:bg-primary/10 ${getActiveClass(item.path)}`}
                              >
                                <div className="text-[13px] font-medium text-foreground">{item.name}</div>
                                <div className="text-[11px] text-muted-foreground mt-0.5">{item.desc}</div>
                              </PreloadLink>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-2 pt-2 border-t border-border">
                          <PreloadLink
                            to="/platforms"
                            role="menuitem"
                            className="flex items-center gap-1.5 px-3 py-2 text-[13px] font-semibold text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                          >
                            View All Platforms
                            <ArrowRight className="h-3.5 w-3.5" />
                          </PreloadLink>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Key Sectors Dropdown */}
                <div className="relative">
                  <button
                    ref={sectorsButtonRef}
                    className={`flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.15em] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg whitespace-nowrap focus:ring-primary py-2 px-3 ${getNavTextClass()} ${
                      activeDropdown === "sectors" || isDropdownActive(sectorsMenu) ? "text-primary" : ""
                    } hover:bg-primary/10`}
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
                      className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === "sectors" ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  {activeDropdown === "sectors" && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 z-50"
                      style={{ top: "calc(100% + 12px)" }}
                      onMouseEnter={() => handleDropdownEnter("sectors")}
                      onMouseLeave={scheduleDropdownClose}
                      role="menu"
                      aria-label="Key Sectors submenu"
                    >
                      {/* Hover bridge */}
                      <div className="absolute -top-4 left-0 right-0 h-5" />

                      <div className="w-[280px] bg-background rounded-lg shadow-xl border border-border p-3 animate-fade-in">
                        <ul className="space-y-0.5">
                          {sectorsMenu.map((item) => (
                            <li key={item.path}>
                              <PreloadLink
                                to={item.path}
                                role="menuitem"
                                className={`block py-2 px-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary hover:bg-primary/10 ${getActiveClass(item.path)}`}
                              >
                                <div className="text-[13px] font-medium text-foreground">{item.name}</div>
                                <div className="text-[11px] text-muted-foreground mt-0.5">{item.desc}</div>
                              </PreloadLink>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-2 pt-2 border-t border-border">
                          <PreloadLink
                            to="/sectors"
                            role="menuitem"
                            className="flex items-center gap-1.5 px-3 py-2 text-[13px] font-semibold text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                          >
                            View All Sectors
                            <ArrowRight className="h-3.5 w-3.5" />
                          </PreloadLink>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Nav Links - same styling */}
                {navLinks.map((link) => (
                  <PreloadLink
                    key={link.path}
                    to={link.path}
                    className={`text-[12px] font-semibold uppercase tracking-[0.15em] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg whitespace-nowrap focus:ring-primary py-2 px-3 hover:bg-primary/10 ${getNavTextClass()} ${
                      location.pathname === link.path ? "text-primary" : ""
                    }`}
                  >
                    {link.name}
                  </PreloadLink>
                ))}
              </div>

              {/* === Actions Zone: Phone + CTA (separated with margin) === */}
              <div className="flex items-center gap-4 ml-6 xl:ml-8 shrink-0">
                {/* Separator line */}
                <div
                  className={`h-5 w-px ${isScrolled ? "bg-border" : darkHero ? "bg-white/30" : "bg-border"}`}
                  aria-hidden="true"
                />

                {/* Phone Number - smaller, cleaner */}
                <a
                  href="tel:+447356260648"
                  className={`flex items-center gap-2 text-[12px] font-semibold tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg whitespace-nowrap focus:ring-primary ${getNavTextClass()}`}
                  aria-label="Call us on +44 7356 260648"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>+44 7356 260648</span>
                </a>

                {/* CTA Button - slightly smaller for balance */}
                <Button
                  asChild
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-5 h-8 rounded-md shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 font-semibold text-[11px] uppercase tracking-wider"
                >
                  <PreloadLink to="/contact">Get In Touch</PreloadLink>
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`xl:hidden p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ml-auto ${
                isScrolled ? "hover:bg-muted" : darkHero ? "hover:bg-white/10" : "hover:bg-muted"
              }`}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X
                  className={`h-6 w-6 ${isScrolled ? "text-foreground" : darkHero ? "text-white" : "text-foreground"}`}
                  aria-hidden="true"
                />
              ) : (
                <Menu
                  className={`h-6 w-6 ${isScrolled ? "text-foreground" : darkHero ? "text-white" : "text-foreground"}`}
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="xl:hidden fixed left-0 right-0 bg-background border-t border-border shadow-xl animate-fade-in overflow-y-auto"
            style={{
              top: `${(showAnnouncementBar ? ANNOUNCEMENT_BAR_HEIGHT : 0) + (isScrolled ? NAV_HEIGHT_COMPACT : NAV_HEIGHT_EXPANDED)}px`,
              maxHeight: `calc(100vh - ${(showAnnouncementBar ? ANNOUNCEMENT_BAR_HEIGHT : 0) + (isScrolled ? NAV_HEIGHT_COMPACT : NAV_HEIGHT_EXPANDED)}px)`,
            }}
            role="dialog"
            aria-label="Mobile menu"
          >
            <div className="px-5 py-6 space-y-2">
              {/* Services Accordion */}
              <MobileAccordion
                title="Services"
                isActive={isDropdownActive(allServicesPaths)}
                isPathActive={isPathActive}
              >
                <div className="space-y-4 pl-1 pt-2">
                  <div className="space-y-1">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-primary/70 mb-2 px-3">
                      {servicesMenu.webDesign.title}
                    </h4>
                    {servicesMenu.webDesign.items.map((item) => (
                      <PreloadLink
                        key={item.path}
                        to={item.path}
                        className={`block py-2.5 px-3 text-sm rounded-lg transition-all ${
                          isPathActive(item.path)
                            ? "text-primary font-semibold bg-primary/10"
                            : "text-foreground hover:bg-primary/5 hover:text-primary active:bg-primary/10"
                        }`}
                      >
                        {item.name}
                      </PreloadLink>
                    ))}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-primary/70 mb-2 px-3">
                      {servicesMenu.ecommerce.title}
                    </h4>
                    {servicesMenu.ecommerce.items.map((item) => (
                      <PreloadLink
                        key={item.path}
                        to={item.path}
                        className={`block py-2.5 px-3 text-sm rounded-lg transition-all ${
                          isPathActive(item.path)
                            ? "text-primary font-semibold bg-primary/10"
                            : "text-foreground hover:bg-primary/5 hover:text-primary active:bg-primary/10"
                        }`}
                      >
                        {item.name}
                      </PreloadLink>
                    ))}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-primary/70 mb-2 px-3">
                      {servicesMenu.branding.title}
                    </h4>
                    {servicesMenu.branding.items.map((item) => (
                      <PreloadLink
                        key={item.path}
                        to={item.path}
                        className={`block py-2.5 px-3 text-sm rounded-lg transition-all ${
                          isPathActive(item.path)
                            ? "text-primary font-semibold bg-primary/10"
                            : "text-foreground hover:bg-primary/5 hover:text-primary active:bg-primary/10"
                        }`}
                      >
                        {item.name}
                      </PreloadLink>
                    ))}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-primary/70 mb-2 px-3">
                      {servicesMenu.support.title}
                    </h4>
                    {servicesMenu.support.items.map((item) => (
                      <PreloadLink
                        key={item.path}
                        to={item.path}
                        className={`block py-2.5 px-3 text-sm rounded-lg transition-all ${
                          isPathActive(item.path)
                            ? "text-primary font-semibold bg-primary/10"
                            : "text-foreground hover:bg-primary/5 hover:text-primary active:bg-primary/10"
                        }`}
                      >
                        {item.name}
                      </PreloadLink>
                    ))}
                  </div>
                  <PreloadLink
                    to="/services"
                    className="flex items-center gap-2 py-2.5 px-3 text-sm font-semibold text-primary hover:bg-primary/5 rounded-lg transition-all"
                  >
                    View All Services <ArrowRight className="h-4 w-4" />
                  </PreloadLink>
                </div>
              </MobileAccordion>

              {/* Platforms Accordion */}
              <MobileAccordion title="Platforms" isActive={isDropdownActive(platformsMenu)} isPathActive={isPathActive}>
                <div className="pl-1 pt-2 space-y-1">
                  {platformsMenu.map((item) => (
                    <PreloadLink
                      key={item.path}
                      to={item.path}
                      className={`block py-2.5 px-3 text-sm rounded-lg transition-all ${
                        isPathActive(item.path)
                          ? "text-primary font-semibold bg-primary/10"
                          : "text-foreground hover:bg-primary/5 hover:text-primary active:bg-primary/10"
                      }`}
                    >
                      {item.name}
                    </PreloadLink>
                  ))}
                  <PreloadLink
                    to="/platforms"
                    className="flex items-center gap-2 py-2.5 px-3 text-sm font-semibold text-primary hover:bg-primary/5 rounded-lg transition-all"
                  >
                    View All Platforms <ArrowRight className="h-4 w-4" />
                  </PreloadLink>
                </div>
              </MobileAccordion>

              {/* Key Sectors Accordion */}
              <MobileAccordion title="Key Sectors" isActive={isDropdownActive(sectorsMenu)} isPathActive={isPathActive}>
                <div className="pl-1 pt-2 space-y-1">
                  {sectorsMenu.map((item) => (
                    <PreloadLink
                      key={item.path}
                      to={item.path}
                      className={`block py-2.5 px-3 text-sm rounded-lg transition-all ${
                        isPathActive(item.path)
                          ? "text-primary font-semibold bg-primary/10"
                          : "text-foreground hover:bg-primary/5 hover:text-primary active:bg-primary/10"
                      }`}
                    >
                      {item.name}
                    </PreloadLink>
                  ))}
                  <PreloadLink
                    to="/sectors"
                    className="flex items-center gap-2 py-2.5 px-3 text-sm font-semibold text-primary hover:bg-primary/5 rounded-lg transition-all"
                  >
                    View All Sectors <ArrowRight className="h-4 w-4" />
                  </PreloadLink>
                </div>
              </MobileAccordion>

              {/* Divider */}
              <div className="h-px bg-border my-3" />

              {/* Nav Links */}
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <PreloadLink
                    key={link.path}
                    to={link.path}
                    className={`block py-3 px-4 text-base font-medium rounded-xl transition-all ${
                      location.pathname === link.path
                        ? "text-primary font-semibold bg-primary/10"
                        : "text-foreground hover:bg-primary/5 hover:text-primary active:bg-primary/10"
                    }`}
                  >
                    {link.name}
                  </PreloadLink>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-border my-3" />

              {/* CTA Section */}
              <div className="bg-muted/50 rounded-2xl p-4 space-y-4">
                {/* Phone Number */}
                <a
                  href="tel:+447356260648"
                  className="flex items-center gap-3 py-3 px-4 text-base font-medium text-foreground bg-background hover:bg-primary/5 rounded-xl transition-all border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Call us now</p>
                    <p className="font-semibold">+44 7356 260648</p>
                  </div>
                </a>

                {/* Mobile CTA */}
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all rounded-xl"
                  asChild
                >
                  <PreloadLink to="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </PreloadLink>
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
const MobileAccordion = ({
  title,
  children,
  isActive = false,
}: {
  title: string;
  children: React.ReactNode;
  isActive?: boolean;
  isPathActive?: (path: string) => boolean;
}) => {
  const [isOpen, setIsOpen] = useState(isActive);

  return (
    <div className="rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full py-3.5 px-4 text-base font-semibold rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-primary ${
          isActive ? "text-primary bg-primary/5" : "text-foreground hover:bg-primary/5"
        } ${isOpen ? "bg-primary/5" : ""}`}
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2">
          {title}
          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-2">{children}</div>
      </div>
    </div>
  );
};

export default Navigation;
