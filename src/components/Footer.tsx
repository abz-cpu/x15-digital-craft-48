import { Link } from "react-router-dom";
import { Phone, Instagram, Linkedin, Twitter, ArrowRight } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  const BG = "#0b1728"; // keep footer dark-navy, not black
  const MUTED = "text-gray-400";
  const LINK = "hover:text-[#2a8df0] transition-colors";

  return (
    <footer className="relative" style={{ backgroundColor: BG, color: "white" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">X15 DIGITAL</h3>
            <p className={`${MUTED} leading-relaxed mb-6 text-sm max-w-xs`}>
              Professional web development & AI automation for UK businesses. Two services. One transparent provider.
            </p>

            <div className="flex gap-3 mb-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/10 text-gray-300 hover:bg-white/15 transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/10 text-gray-300 hover:bg-white/15 transition-all"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/10 text-gray-300 hover:bg-white/15 transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            <Link
              to="https://x15pcbuilders.co.uk"
              className="group inline-flex items-center gap-2 text-sm rounded-xl px-4 py-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <span className="text-gray-200">Sister company</span>
              <span className="font-semibold">X15 PC Builders</span>
              <ArrowRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition" />
            </Link>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services#web-packages" className={`${MUTED} ${LINK}`}>
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services#ai-automation" className={`${MUTED} ${LINK}`}>
                  AI Automation
                </Link>
              </li>
              <li>
                <Link to="/services#combined-packages" className={`${MUTED} ${LINK}`}>
                  Combined Packages
                </Link>
              </li>
              <li>
                <Link to="/enterprise" className={`${MUTED} ${LINK}`}>
                  Enterprise Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className={`${MUTED} ${LINK}`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className={`${MUTED} ${LINK}`}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className={`${MUTED} ${LINK}`}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`${MUTED} ${LINK}`}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/quick-start" className={`${MUTED} ${LINK}`}>
                  Quick Start Quiz
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Get in Touch</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="uppercase tracking-wide text-gray-500 text-xs mb-1">Location</p>
                <p className="text-gray-200 font-medium">London, UK</p>
              </div>
              <div>
                <p className="uppercase tracking-wide text-gray-500 text-xs mb-1">Email</p>
                <a href="mailto:info@x15digital.co.uk" className={`${MUTED} ${LINK} font-medium`}>
                  info@x15digital.co.uk
                </a>
              </div>
              <div>
                <p className="uppercase tracking-wide text-gray-500 text-xs mb-2">WhatsApp</p>
                <a
                  href="https://wa.me/447424062513"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-all"
                >
                  <Phone className="h-4 w-4" />
                  +44 7424 062513
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {year} X15 Digital. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy" className={LINK}>
              Privacy Policy
            </Link>
            <Link to="/terms" className={LINK}>
              Terms of Service
            </Link>
            <button onClick={() => (window as any).openCookieSettings?.()} className={LINK}>
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
