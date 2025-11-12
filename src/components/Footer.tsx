import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";
import { useMemo } from "react";

const Footer = () => {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="relative">
      {/* Curved bridge from blue CTA -> footer */}
      <svg
        className="block w-full h-20 text-[hsl(var(--primary))]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,224L80,197.3C160,171,320,117,480,117.3C640,117,800,171,960,186.7C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>

      {/* FOOTER */}
      <footer className="relative bg-[#0a1a2f] text-white">
        {/* Accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/60 via-primary to-primary/60" />

        {/* Depth overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(10,26,47,1) 0%, rgba(8,18,35,1) 40%, rgba(3,10,22,1) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company */}
            <div>
              <h3 className="text-2xl font-bold mb-6 tracking-tight">X15 DIGITAL</h3>
              <p className="text-white/70 mb-6 leading-relaxed text-sm max-w-sm">
                Professional web development & AI automation for UK businesses. Two services. One transparent provider.
              </p>

              {/* Socials */}
              <div className="flex gap-3 mb-6">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-lg bg-white/10 text-white/70 hover:bg-primary hover:text-white transition-all"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="p-2.5 rounded-lg bg-white/10 text-white/70 hover:bg-primary hover:text-white transition-all"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2.5 rounded-lg bg-white/10 text-white/70 hover:bg-primary hover:text-white transition-all"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>

              {/* Sister company callout */}
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/30 max-w-xs">
                <p className="text-xs text-white/60 mb-1">Sister company</p>
                <a
                  href="https://x15pcbuilders.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2 transition-colors"
                >
                  X15 PC Builders <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Services</h4>
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
                      className="text-white/70 hover:text-primary transition-colors inline-flex items-center gap-2 group text-sm"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="h-3 w-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Company</h4>
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
                      className="text-white/70 hover:text-primary transition-colors inline-flex items-center gap-2 group text-sm"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="h-3 w-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact (email + WhatsApp only) */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Get in Touch</h4>
              <div className="space-y-5">
                <div>
                  <p className="text-xs text-white/50 mb-1 uppercase tracking-wide">Location</p>
                  <p className="text-white/80">London, UK</p>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-white/70" />
                  <a
                    href="mailto:info@x15digital.co.uk"
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    info@x15digital.co.uk
                  </a>
                </div>

                <div>
                  <p className="text-xs text-white/50 mb-2 uppercase tracking-wide">WhatsApp</p>
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

                {/* Optional CTA if you want it here too (kept subtle) */}
                <Button asChild className="mt-4 bg-primary hover:bg-primary/90">
                  <Link to="/contact">
                    Get Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 border-t border-white/10 bg-[#050b14]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/50">
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
    </div>
  );
};

export default Footer;
