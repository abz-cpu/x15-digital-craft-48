import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const year = new Date().getFullYear();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // TODO: integrate Mailchimp/ConvertKit/Resend here.
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 700);
  };

  return (
    <footer className="bg-white text-ink">
      {/* Newsletter section with gradient */}
      <div
        className="text-white"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-700)) 55%, hsl(var(--primary-800)) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">Stay Updated with Digital Trends</h3>
          <p className="mt-2 text-white/90 max-w-2xl mx-auto">
            Monthly insights on web design, AI automation, and growth tactics. No spam—just useful stuff.
          </p>
          <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/95 text-ink border-0 h-12"
              aria-label="Email address"
            />
            <Button
              type="submit"
              disabled={status === "loading"}
              className="bg-white text-ink hover:bg-white/90 h-12 px-6"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          {status === "success" && <p className="mt-3 text-sm">✓ Subscribed. Check your inbox.</p>}
        </div>
      </div>

      {/* Light main footer */}
      <div className="bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company */}
            <div>
              <h3 className="text-2xl font-bold">X15 DIGITAL</h3>
              <p className="mt-3 text-ink/70">
                Professional web development & AI automation for UK businesses. Two services. One transparent provider.
              </p>
              <div className="mt-5 flex gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-black/5 text-ink/70 hover:bg-ink/90 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-black/5 text-ink/70 hover:bg-ink/90 hover:text-white transition-colors"
                  aria-label="Twitter / X"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-black/5 text-ink/70 hover:bg-ink/90 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-6 p-4 rounded-lg border border-primary/20 bg-primary/5">
                <p className="text-xs text-ink/60 mb-1">Sister company</p>
                <a
                  href="https://x15pcbuilders.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold inline-flex items-center gap-2 hover:underline"
                >
                  X15 PC Builders <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold">Services</h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    to="/services#web-packages"
                    className="text-ink/70 hover:text-primary inline-flex items-center gap-2 group transition-colors"
                  >
                    Web Development
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services#ai-automation"
                    className="text-ink/70 hover:text-primary inline-flex items-center gap-2 group transition-colors"
                  >
                    AI Automation
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services#combined-packages"
                    className="text-ink/70 hover:text-primary inline-flex items-center gap-2 group transition-colors"
                  >
                    Combined Packages
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/enterprise"
                    className="text-ink/70 hover:text-primary inline-flex items-center gap-2 group transition-colors"
                  >
                    Enterprise Solutions
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold">Company</h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    to="/about"
                    className="text-ink/70 hover:text-primary inline-flex items-center gap-2 group transition-colors"
                  >
                    About Us
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="text-ink/70 hover:text-primary inline-flex items-center gap-2 group transition-colors"
                  >
                    Portfolio
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-ink/70 hover:text-primary inline-flex items-center gap-2 group transition-colors"
                  >
                    Blog
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-ink/70 hover:text-primary inline-flex items-center gap-2 group transition-colors"
                  >
                    Contact
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quick-start"
                    className="text-ink/70 hover:text-primary inline-flex items-center gap-2 group transition-colors"
                  >
                    Quick Start Quiz
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact – WhatsApp only */}
            <div>
              <h4 className="text-lg font-semibold">Get in Touch</h4>
              <div className="mt-4 space-y-4 text-ink/80">
                <div>
                  <p className="text-sm text-ink/60">Location</p>
                  <p className="font-medium">London, UK</p>
                </div>
                <div>
                  <p className="text-sm text-ink/60">Email</p>
                  <a href="mailto:info@x15digital.co.uk" className="font-medium hover:text-primary transition-colors">
                    info@x15digital.co.uk
                  </a>
                </div>
                <div>
                  <p className="text-sm text-ink/60 mb-2">WhatsApp</p>
                  <a
                    href="https://wa.me/447424062513"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-success hover:opacity-90 transition-opacity"
                  >
                    <Phone className="h-4 w-4" /> +44 7424 062513
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-black/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink/60">
            <p>© {year} X15 Digital. All rights reserved.</p>
            <div className="flex gap-6">
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
