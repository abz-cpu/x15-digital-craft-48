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
    }, 900);
  };

  return (
    <footer className="bg-secondary text-white">
      {/* ZONE 1: Newsletter */}
      <div className="border-b border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Stay Updated with Digital Trends</h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Monthly insights on web design, AI automation, and growth tactics. No spam—just useful stuff.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-0 focus:border-primary"
              aria-label="Email address"
            />
            <Button
              type="submit"
              disabled={status === "loading"}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          {status === "success" && <p className="mt-3 text-sm text-success">✓ Subscribed. Check your inbox.</p>}
        </div>
      </div>

      {/* ZONE 2: 4-column grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold mb-4">X15 DIGITAL</h3>
            <p className="text-white/80 mb-4">
              Professional web development & AI automation for UK businesses. Two services. One transparent provider.
            </p>

            <div className="flex space-x-4 mb-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 hover:text-primary transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            <p className="text-sm text-white/60">
              Sister company:{" "}
              <a
                href="https://x15pcbuilders.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                X15 PC Builders
              </a>
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#web-packages" className="text-white/80 hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services#ai-automation" className="text-white/80 hover:text-primary transition-colors">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link to="/services#combined-packages" className="text-white/80 hover:text-primary transition-colors">
                  Combined Packages
                </Link>
              </li>
              <li>
                <Link to="/enterprise" className="text-white/80 hover:text-primary transition-colors">
                  Enterprise Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white/80 hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/quick-start" className="text-white/80 hover:text-primary transition-colors">
                  Quick Start Quiz
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-white/80">
              <p>London, UK</p>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@x15digital.co.uk" className="hover:text-primary transition-colors">
                  info@x15digital.co.uk
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+447424062513" className="hover:text-primary transition-colors">
                  +44 7424 062513
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href="https://wa.me/447424062513"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp: +44 7424 062513
                </a>
              </div>
            </div>

            <Button asChild className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">
                Get Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* ZONE 3: Bottom bar */}
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>© {year} X15 Digital. All rights reserved.</p>
          <div className="mt-2 flex flex-wrap justify-center items-center gap-3">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span className="hidden md:inline">|</span>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <span className="hidden md:inline">|</span>
            <button
              onClick={() => (window as any).openCookieSettings?.()}
              className="hover:text-primary transition-colors"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
