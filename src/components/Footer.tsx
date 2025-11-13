import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Phone, ArrowRight } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[radial-gradient(circle_at_top,_hsl(221,83%,22%)_0,_hsl(222,47%,10%)_40%,_hsl(222,47%,5%)_100%)] text-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Top strip: mini CTA */}
        <div className="mb-10 md:mb-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 md:px-8 md:py-5">
            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-1">READY WHEN YOU ARE</p>
              <p className="text-base md:text-lg font-semibold text-white">
                Send your idea, links, or screenshots – get a clear quote back fast.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://wa.me/447424062513?text=Hi%2C%20I%20want%20to%20discuss%20a%20website%20or%20AI%20automation%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-success px-4 py-2.5 text-sm font-semibold text-success-foreground shadow-lg shadow-success/30 hover:bg-success/90 transition-colors w-full sm:w-auto"
              >
                <Phone className="mr-2 h-4 w-4" />
                WhatsApp X15 Digital
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/25 px-4 py-2.5 text-sm font-semibold text-white/80 hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                Send project brief
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-10">
          {/* Brand / summary */}
          <div>
            <h3 className="text-2xl font-bold mb-3 tracking-tight">X15 DIGITAL</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Web design, development, and AI automation for UK businesses and creators. Transparent, fast, and built to
              actually convert.
            </p>
            <p className="text-xs text-white/50 mb-5">Based in London, working remotely across the UK.</p>

            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg bg-white/8 text-white/70 hover:bg-white/15 hover:text-white hover:scale-110 transition-all duration-150"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-2.5 rounded-lg bg-white/8 text-white/70 hover:bg-white/15 hover:text-white hover:scale-110 transition-all duration-150"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-lg bg-white/8 text-white/70 hover:bg-white/15 hover:text-white hover:scale-110 transition-all duration-150"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>

            {/* Sister Company */}
            <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/15 transition-all duration-300">
              <p className="text-xs text-white/50 mb-1.5 uppercase tracking-wider">Sister company</p>
              <a
                href="https://x15pcbuilders.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-white inline-flex items-center gap-2 font-semibold text-sm transition-all hover:gap-3"
              >
                X15 PC Builders <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/80 tracking-wide uppercase">Services</h4>
            <ul className="space-y-2 text-sm text-white/65">
              <li>
                <Link to="/services#web" className="hover:text-cyan-300 transition-colors">
                  Websites & landing pages
                </Link>
              </li>
              <li>
                <Link to="/services#ai-automation" className="hover:text-cyan-300 transition-colors">
                  AI chatbots & automation
                </Link>
              </li>
              <li>
                <Link to="/services#combined-packages" className="hover:text-cyan-300 transition-colors">
                  Combined web + AI packages
                </Link>
              </li>
              <li>
                <Link to="/services#addons" className="hover:text-cyan-300 transition-colors">
                  SEO, maintenance & add-ons
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/80 tracking-wide uppercase">Company</h4>
            <ul className="space-y-2 text-sm text-white/65">
              <li>
                <Link to="/portfolio" className="hover:text-cyan-300 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-cyan-300 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-300 transition-colors">
                  About X15 Digital
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-300 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/quick-start" className="hover:text-cyan-300 transition-colors">
                  Quick-start project form
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / details */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/80 tracking-wide uppercase">Contact & Details</h4>
            <div className="space-y-2 text-sm text-white/70 mb-4">
              <p>📍 London, United Kingdom</p>
              <p>📞 WhatsApp: +44 7424 062 513</p>
              <p>✉️ Email: hello@x15digital.co.uk</p>
            </div>
            <p className="text-xs text-white/50">
              Available evenings & weekends for small business owners and creators who are busy during the day.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-white/50">
          <p>© {year} X15 Digital. All rights reserved.</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/privacy" className="hover:text-cyan-300 transition-colors">
              Privacy
            </Link>
            <span className="opacity-40">•</span>
            <Link to="/terms" className="hover:text-cyan-300 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
