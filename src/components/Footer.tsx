import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-background via-background/95 to-background border-t border-border/40">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-6">
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-6">
          
          {/* Left Column - Company Info */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">X15 DIGITAL</h3>
              <p className="text-[11px] md:text-sm text-muted-foreground leading-relaxed">
                Web design, development, and AI automation for UK businesses and creators.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-[10px] md:text-xs text-muted-foreground">
                <MapPin className="h-3 w-3 md:h-4 md:w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>London, United Kingdom</span>
              </div>
              <div className="flex items-start gap-2 text-[10px] md:text-xs text-muted-foreground">
                <Phone className="h-3 w-3 md:h-4 md:w-4 text-primary mt-0.5 flex-shrink-0" />
                <a 
                  href="https://wa.me/447424062513" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  +44 7424 062 513
                </a>
              </div>
              <div className="flex items-start gap-2 text-[10px] md:text-xs text-muted-foreground">
                <Mail className="h-3 w-3 md:h-4 md:w-4 text-primary mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:hello@x15digital.co.uk"
                  className="hover:text-primary transition-colors"
                >
                  hello@x15digital.co.uk
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - 3 Column Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* Services */}
            <div>
              <h4 className="text-xs md:text-sm font-semibold mb-3 text-foreground">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/services#web" 
                    className="text-[10px] md:text-xs text-slate-400 hover:text-primary transition-colors block"
                  >
                    Websites & Landing Pages
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services#ai-automation" 
                    className="text-[10px] md:text-xs text-slate-400 hover:text-primary transition-colors block"
                  >
                    AI Chatbots & Automation
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services#combined-packages" 
                    className="text-[10px] md:text-xs text-slate-400 hover:text-primary transition-colors block"
                  >
                    Combined Packages
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services#addons" 
                    className="text-[10px] md:text-xs text-slate-400 hover:text-primary transition-colors block"
                  >
                    SEO & Add-ons
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs md:text-sm font-semibold mb-3 text-foreground">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/portfolio" 
                    className="text-[10px] md:text-xs text-slate-400 hover:text-primary transition-colors block"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/blog" 
                    className="text-[10px] md:text-xs text-slate-400 hover:text-primary transition-colors block"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="text-[10px] md:text-xs text-slate-400 hover:text-primary transition-colors block"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="text-[10px] md:text-xs text-slate-400 hover:text-primary transition-colors block"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/quick-start" 
                    className="text-[10px] md:text-xs text-slate-400 hover:text-primary transition-colors block"
                  >
                    Quick Start
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-xs md:text-sm font-semibold mb-3 text-foreground">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/privacy" 
                    className="text-[10px] md:text-xs text-slate-400 hover:text-primary transition-colors block"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/terms" 
                    className="text-[10px] md:text-xs text-slate-400 hover:text-primary transition-colors block"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a
                    href="https://x15pcbuilders.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] md:text-xs text-slate-400 hover:text-primary transition-colors block"
                  >
                    X15 PC Builders ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Business Hours & Service Areas */}
        <div className="border-t border-border/40 pt-4 pb-4 grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex items-start gap-2">
            <Clock className="h-3 w-3 md:h-4 md:w-4 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[10px] md:text-xs font-semibold text-foreground mb-1">Business Hours</p>
              <p className="text-[10px] md:text-xs text-muted-foreground">
                Available evenings & weekends for small business owners
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="h-3 w-3 md:h-4 md:w-4 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[10px] md:text-xs font-semibold text-foreground mb-1">Service Areas</p>
              <p className="text-[10px] md:text-xs text-muted-foreground">
                Based in London, working remotely across the UK
              </p>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-border/40 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 order-2 sm:order-1">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              <Linkedin className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="p-2 rounded-lg border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              <Twitter className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-lg border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              <Instagram className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </a>
          </div>
          
          <p className="text-[10px] md:text-xs text-muted-foreground order-1 sm:order-2">
            © {year} X15 Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
