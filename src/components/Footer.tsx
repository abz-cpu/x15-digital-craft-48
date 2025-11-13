import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Phone, ArrowRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-gradient-to-b from-[hsl(220,30%,12%)] to-[hsl(220,30%,8%)] text-white overflow-hidden">
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")"
        }}
      />
      
      {/* Main */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 lg:gap-20">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">X15 DIGITAL</h3>
            <p className="text-white/65 text-sm leading-relaxed mb-6">
              Professional web development & AI automation for UK businesses. Two services. One transparent provider.
            </p>

            {/* socials */}
            <div className="flex gap-3 mb-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg bg-white/10 text-white/65 hover:bg-primary/20 hover:text-white hover:scale-110 transition-all duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter"
                className="p-2.5 rounded-lg bg-white/10 text-white/65 hover:bg-primary/20 hover:text-white hover:scale-110 transition-all duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="p-2.5 rounded-lg bg-white/10 text-white/65 hover:bg-primary/20 hover:text-white hover:scale-110 transition-all duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            {/* sister company */}
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/15 transition-all duration-300">
              <p className="text-xs text-white/50 mb-1.5 uppercase tracking-wider">Sister company</p>
              <a
                href="https://x15pcbuilders.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-white inline-flex items-center gap-2 font-semibold transition-all hover:gap-3"
              >
                X15 PC Builders <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-5 uppercase tracking-wider text-white/90">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services#web-packages" className="text-white/65 hover:text-white text-sm transition-colors group inline-flex items-center gap-1">
                  Web Development
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services#ai-automation" className="text-white/65 hover:text-white text-sm transition-colors group inline-flex items-center gap-1">
                  AI Automation
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services#combined-packages" className="text-white/65 hover:text-white text-sm transition-colors group inline-flex items-center gap-1">
                  Combined Packages
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/enterprise" className="text-white/65 hover:text-white text-sm transition-colors group inline-flex items-center gap-1">
                  Enterprise Solutions
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-5 uppercase tracking-wider text-white/90">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/65 hover:text-white text-sm transition-colors group inline-flex items-center gap-1">
                  About Us
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white/65 hover:text-white text-sm transition-colors group inline-flex items-center gap-1">
                  Portfolio
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/65 hover:text-white text-sm transition-colors group inline-flex items-center gap-1">
                  Blog
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/65 hover:text-white text-sm transition-colors group inline-flex items-center gap-1">
                  Contact
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/quick-start" className="text-white/65 hover:text-white text-sm transition-colors group inline-flex items-center gap-1">
                  Quick Start Quiz
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-5 uppercase tracking-wider text-white/90">Get in Touch</h4>
            <div className="space-y-5 text-sm">
              <div>
                <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Location</p>
                <p className="text-white/75 font-medium">London, UK</p>
              </div>
              <div>
                <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:info@x15digital.co.uk" className="text-white/75 hover:text-white transition-colors">
                  info@x15digital.co.uk
                </a>
              </div>
              <div>
                <p className="text-xs text-white/50 uppercase tracking-wider mb-2">WhatsApp</p>
                <a
                  href="https://wa.me/447424062513"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-emerald-500/20 text-sm font-medium"
                >
                  <Phone className="h-4 w-4" /> +44 7424 062513
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 bg-[hsl(220,28%,7%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/55">
            <p>© {year} X15 Digital. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <button onClick={() => (window as any).openCookieSettings?.()} className="hover:text-white transition-colors">
                Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
