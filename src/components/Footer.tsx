import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Phone, ArrowRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[hsl(208,30%,14%)] text-white">
      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-24">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">X15 DIGITAL</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Professional web development & AI automation for UK businesses. Two services. One transparent provider.
            </p>

            {/* socials */}
            <div className="flex gap-3 mb-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                 className="p-2.5 rounded-lg bg-white/10 text-white/70 hover:bg-white/15 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                 className="p-2.5 rounded-lg bg-white/10 text-white/70 hover:bg-white/15 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                 className="p-2.5 rounded-lg bg-white/10 text-white/70 hover:bg-white/15 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            {/* sister company */}
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="text-xs text-white/60 mb-1">Sister company</p>
              <a
                href="https://x15pcbuilders.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(210,90%,56%)] hover:text-white inline-flex items-center gap-2 font-semibold"
              >
                X15 PC Builders <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link to="/services#web-packages" className="hover:text-white">Web Development</Link></li>
              <li><Link to="/services#ai-automation" className="hover:text-white">AI Automation</Link></li>
              <li><Link to="/services#combined-packages" className="hover:text-white">Combined Packages</Link></li>
              <li><Link to="/enterprise" className="hover:text-white">Enterprise Solutions</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/quick-start" className="hover:text-white">Quick Start Quiz</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-xs text-white/50">LOCATION</p>
                <p className="text-white/80 font-medium">London, UK</p>
              </div>
              <div>
                <p className="text-xs text-white/50">EMAIL</p>
                <a href="mailto:info@x15digital.co.uk" className="text-white/80 hover:text-white">
                  info@x15digital.co.uk
                </a>
              </div>
              <div>
                <p className="text-xs text-white/50 mb-2">WHATSAPP</p>
                <a
                  href="https://wa.me/447424062513"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 text-sm"
                >
                  <Phone className="h-4 w-4" /> +44 7424 062513
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-[hsl(208,28%,12%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
            <p>© {year} X15 Digital. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms of Service</Link>
              <button onClick={() => (window as any).openCookieSettings?.()} className="hover:text-white">
                Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
