import { Link } from "react-router-dom";
import { Phone, Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0b1728] text-white overflow-hidden">
      {/* Smooth curve that EATS the bottom of the CTA */}
      <div className="absolute top-0 left-0 right-0 -mt-px">
        <svg className="block w-full h-24" viewBox="0 0 1440 96" preserveAspectRatio="none">
          {/* match footer bg so no white strip */}
          <path fill="#0b1728" d="M0,52 C300,100 600,0 900,10 C1100,16 1270,60 1440,48 L1440,96 L0,96 Z" />
        </svg>
      </div>

      {/* Main */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">X15 DIGITAL</h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Professional web development & AI automation for UK businesses. Two services. One transparent provider.
            </p>

            <div className="flex gap-3 mb-6">
              {[
                { Icon: Linkedin, href: "https://linkedin.com" },
                { Icon: Twitter, href: "https://twitter.com" },
                { Icon: Instagram, href: "https://instagram.com" },
              ].map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/10 text-gray-300 hover:bg-[#207aff] hover:text-white transition-all"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="p-4 rounded-lg bg-[#207aff1a] border border-[#207aff40]">
              <p className="text-xs text-gray-400 mb-1">Sister company</p>
              <a
                href="https://x15pcbuilders.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#78aaff] hover:text-[#a7c7ff] font-semibold inline-flex items-center gap-2 transition-colors"
              >
                X15 PC Builders
                <ArrowRight className="h-3 w-3" />
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
                    className="text-gray-400 hover:text-[#78aaff] transition-colors inline-flex items-center gap-2 group text-sm"
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
                    className="text-gray-400 hover:text-[#78aaff] transition-colors inline-flex items-center gap-2 group text-sm"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Get in Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Location</p>
                <p className="text-gray-300 font-medium">London, UK</p>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Email</p>
                <a
                  href="mailto:info@x15digital.co.uk"
                  className="text-gray-300 hover:text-[#78aaff] transition-colors font-medium text-sm"
                >
                  info@x15digital.co.uk
                </a>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">WhatsApp</p>
                <a
                  href="https://wa.me/447424062513"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-white bg-emerald-600 hover:bg-emerald-500 transition-all font-medium text-sm"
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
      <div className="border-t border-white/10 bg-[#0a1322]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {year} X15 Digital. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="hover:text-[#78aaff] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-[#78aaff] transition-colors">
                Terms of Service
              </Link>
              <button
                onClick={() => (window as any).openCookieSettings?.()}
                className="hover:text-[#78aaff] transition-colors"
              >
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
