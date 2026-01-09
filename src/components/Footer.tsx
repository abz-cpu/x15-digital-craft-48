import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const Footer = forwardRef<HTMLElement>(function Footer(_props, ref) {
  const year = new Date().getFullYear();

  return (
    <footer ref={ref} className="relative bg-[radial-gradient(circle_at_top,_hsl(170,83%,22%)_0,_hsl(170,47%,10%)_40%,_hsl(170,47%,5%)_100%)] text-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Ready When You Are CTA */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 md:px-8 md:py-5 backdrop-blur-sm">
            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-1">READY WHEN YOU ARE</p>
              <p className="text-base md:text-lg font-semibold text-white">
                Send your idea, links, or screenshots – get a clear quote back fast.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href="https://wa.me/447356260648?text=Hi%2C%20I%20want%20to%20discuss%20a%20website%20or%20AI%20automation%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-success px-4 py-2.5 text-sm font-semibold text-success-foreground shadow-lg shadow-success/30 hover:bg-success/90 transition-colors w-full sm:w-auto min-h-[44px]"
              >
                <Phone className="mr-2 h-4 w-4" />
                WhatsApp L&D Digital
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/25 px-4 py-2.5 text-sm font-semibold text-white/80 hover:bg-white/10 transition-colors w-full sm:w-auto min-h-[44px]"
              >
                Send project brief →
              </Link>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 md:gap-8 mb-6">
          {/* Left Column - Company Info & Contact */}
          <div className="space-y-5">
            <div>
              <div className="flex items-center gap-3 mb-3">
                {/* L&D Monogram - Same as navbar */}
                <svg 
                  width={40} 
                  height={40} 
                  viewBox="0 0 100 100" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                  aria-hidden="true"
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
                <h3 className="text-lg md:text-xl font-bold tracking-tight">
                  <span className="text-white">L&D</span>{" "}
                  <span className="text-primary">DIGITAL</span>
                </h3>
              </div>
              <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                Web design, development, and AI automation for UK businesses and creators. Built for performance and conversion.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>London, United Kingdom</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="https://wa.me/447356260648"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  +44 7356 260648
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:contact.luminousanddeliver@gmail.com" className="hover:text-accent transition-colors">
                  contact.luminousanddeliver@gmail.com
                </a>
              </div>
            </div>

            {/* Sister Company */}
            <div className="pt-3 border-t border-white/10">
              <p className="text-[10px] md:text-xs uppercase tracking-wider text-white/50 mb-2">Sister Company</p>
              <a
                href="https://x15pcbuilders.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-accent text-sm font-semibold transition-all hover:gap-3 min-h-[44px]"
              >
                L&D Builds <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right Side - 3 Column Grid for Links */}
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {/* Services */}
            <nav aria-label="Services navigation">
              <h4 className="text-sm font-semibold mb-3 text-white/90">Services</h4>
              <ul className="space-y-1.5">
                <li>
                  <Link
                    to="/services#web"
                    className="text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    Websites & Landing Pages
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services#ai-automation"
                    className="text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    AI Chatbots & Automation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services#combined-packages"
                    className="text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    Combined Packages
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services#addons"
                    className="text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    SEO & Add-ons
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Company */}
            <nav aria-label="Company navigation">
              <h4 className="text-sm font-semibold mb-3 text-white/90">Company</h4>
              <ul className="space-y-1.5">
                <li>
                  <Link
                    to="/portfolio"
                    className="text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/enterprise"
                    className="text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    Enterprise
                  </Link>
                </li>
                <li>
                  <Link
                    to="/platforms"
                    className="text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    Platforms
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sectors"
                    className="text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    Sectors
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Resources */}
            <nav aria-label="Resources navigation">
              <h4 className="text-sm font-semibold mb-3 text-white/90">Resources</h4>
              <ul className="space-y-1.5">
                <li>
                  <Link
                    to="/privacy"
                    className="text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-sm text-white/60 hover:text-accent transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-white/10 pt-5 pb-5 mb-5">
          <div className="flex items-start gap-2 mb-4">
            <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-xs md:text-sm font-semibold text-white/90">Service Areas</p>
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            {[
              { name: "Stratford (E15, E20)", slug: "stratford" },
              { name: "Ilford (IG1-IG6)", slug: "ilford" },
              { name: "Leyton (E10, E11)", slug: "leyton" },
              { name: "East Ham (E6, E7)", slug: "east-ham" },
              { name: "Manor Park (E12)", slug: "manor-park" },
              { name: "Newham", slug: "newham" },
              { name: "Plaistow (E13, E16)", slug: "plaistow" },
              { name: "Barking (IG11)", slug: "barking" },
              { name: "Walthamstow (E17)", slug: "walthamstow" },
              { name: "Hackney (E5, E8, E9)", slug: "hackney" },
              { name: "Bethnal Green (E2, E3)", slug: "bethnal-green" },
              { name: "Shoreditch (EC2, N1)", slug: "shoreditch" },
              { name: "Tower Hamlets (E1, E14)", slug: "tower-hamlets" },
              { name: "Greenwich (SE3, SE10)", slug: "greenwich" },
            ].map((area, index, arr) => (
              <span key={area.slug} className="text-xs text-white/60">
                <Link to={`/areas/${area.slug}`} className="hover:text-accent transition-colors">
                  {area.name}
                </Link>
                {index < arr.length - 1 && <span className="ml-2">•</span>}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Clock className="h-4 w-4 text-primary flex-shrink-0" />
            <p className="text-xs md:text-sm text-white/60">
              Available evenings & weekends for London businesses
            </p>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 order-2 sm:order-1">
            <a
              href="https://www.linkedin.com/company/luminous-deliver-digital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-lg bg-white/5 text-white/60 hover:text-accent hover:bg-white/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/lddigital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="p-3 rounded-lg bg-white/5 text-white/60 hover:text-accent hover:bg-white/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/lddigital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-3 rounded-lg bg-white/5 text-white/60 hover:text-accent hover:bg-white/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs md:text-sm text-white/50 order-1 sm:order-2">
            <span>© {year} L&D Digital. All rights reserved.</span>
            <span className="hidden sm:inline opacity-40">•</span>
            <Link to="/privacy" className="hover:text-accent transition-colors py-2">
              Privacy
            </Link>
            <span className="opacity-40">•</span>
            <Link to="/terms" className="hover:text-accent transition-colors py-2">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;