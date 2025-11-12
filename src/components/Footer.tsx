import { Link } from "react-router-dom";
import { Phone, Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-gray-900 text-white">
      {/* thin accent line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-primary/60 to-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold mb-4">X15 DIGITAL</h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Professional web development & AI automation for UK businesses. Two services. One transparent provider.
            </p>
            <div className="flex gap-3 mb-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/10 text-gray-400 hover:bg-primary hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/10 text-gray-400 hover:bg-primary hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/10 text-gray-400 hover:bg-primary hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
              <p className="text-xs text-gray-400 mb-1">Sister company</p>
              <a
                href="https://x15pcbuilders.co.uk"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2 transition-colors"
              >
                X15 PC Builders <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                { label: "Web Development", link: "/services#web-packages" },
                { label: "AI Automation", link: "/services#ai-automation" },
                { label: "Combined Packages", link: "/services#combined-packages" },
                { label: "Enterprise Solutions", link: "/enterprise" },
              ].map((item) => (
                <li key={item.link}>
                  <Link
                    to={item.link}
                    className="text-gray-400 hover:text-primary inline-flex items-center gap-2 group text-sm"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", link: "/about" },
                { label: "Portfolio", link: "/portfolio" },
                { label: "Blog", link: "/blog" },
                { label: "Contact", link: "/contact" },
                { label: "Quick Start Quiz", link: "/quick-start" },
              ].map((item) => (
                <li key={item.link}>
                  <Link
                    to={item.link}
                    className="text-gray-400 hover:text-primary inline-flex items-center gap-2 group text-sm"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (WhatsApp only) */}
          <div>
            <h4 className="text-lg font-bold mb-4">Get in Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Location</p>
                <p className="text-gray-300 font-medium">London, UK</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Email</p>
                <a href="mailto:info@x15digital.co.uk" className="text-gray-300 hover:text-primary font-medium text-sm">
                  info@x15digital.co.uk
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">WhatsApp</p>
                <a
                  href="https://wa.me/447424062513"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-white bg-success hover:bg-success/90 transition-all font-medium text-sm"
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
      <div className="border-t border-white/10 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {year} X15 Digital. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="hover:text-primary">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary">
                Terms of Service
              </Link>
              <button onClick={() => (window as any).openCookieSettings?.()} className="hover:text-primary">
                Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
