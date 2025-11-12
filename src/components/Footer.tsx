import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a1a2f] text-white overflow-hidden">
      {/* Smooth top curve blending from CTA */}
      <div className="absolute top-0 left-0 right-0 -mt-px">
        <svg className="block w-full h-20 text-[hsl(var(--primary))]" viewBox="0 0 1440 64" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,32 C240,64 480,0 720,0 C960,0 1200,64 1440,32 L1440,64 L0,64 Z" />
        </svg>
      </div>

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Column 1: Company */}
          <div>
            <h3 className="text-2xl font-bold mb-4">X15 DIGITAL</h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Professional web development & AI automation for UK businesses. Two services. One transparent provider.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mb-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/10 text-gray-400 hover:bg-primary hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/10 text-gray-400 hover:bg-primary hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/10 text-gray-400 hover:bg-primary hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>

            {/* Sister Company */}
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
              <p className="text-xs text-gray-400 mb-1">Sister company</p>
              <a
                href="https://x15pcbuilders.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2 transition-colors"
              >
                X15 PC Builders
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
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
                    className="text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-2 group text-sm"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
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
                    className="text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-2 group text-sm"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
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
                  className="text-gray-300 hover:text-primary transition-colors font-medium text-sm"
                >
                  info@x15digital.co.uk
                </a>
              </div>

              {/* WhatsApp Button */}
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

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#091526]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {year} X15 Digital. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <button
                onClick={() => (window as any).openCookieSettings?.()}
                className="hover:text-primary transition-colors"
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
