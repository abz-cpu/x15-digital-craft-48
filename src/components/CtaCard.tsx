import React from "react";
import { Link } from "react-router-dom";
import { Mail, MessageCircle, Phone, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "./Container";

const CtaCard: React.FC = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-background via-paper-light to-background">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--accent)/0.05),transparent_50%)]" />
      
      <Container size="narrow" className="relative">
        {/* Heading Section */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span>Let's Build Something Amazing</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight">
            Ready to Grow Your{" "}
            <span className="bg-gradient-to-r from-primary via-teal-400 to-accent bg-clip-text text-transparent">
              Business?
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-ink-light max-w-2xl mx-auto leading-relaxed">
            Get professional websites and AI automation that actually deliver results.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-primary">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              Free quote in 4 hours
            </span>
            <span className="text-border">•</span>
            <span>You own everything</span>
          </div>
        </div>

        {/* Main Card */}
        <div className="mx-auto max-w-2xl rounded-3xl bg-card/80 backdrop-blur-sm border border-border shadow-2xl shadow-primary/5 overflow-hidden hover:shadow-primary/10 transition-all duration-500">
          {/* Service Selection & Primary CTA Combined */}
          <div className="px-6 sm:px-8 py-6 bg-gradient-to-br from-paper-light/30 to-transparent">
            <div className="flex flex-wrap justify-center gap-2 mb-5">
              <Link
                to="/services/websites"
                className="group px-4 py-2 rounded-lg text-xs font-bold
                           bg-background text-ink border border-border
                           hover:border-primary hover:bg-primary hover:text-primary-foreground 
                           transition-all duration-300 hover:scale-105"
              >
                🌐 Websites
              </Link>
              <Link
                to="/services/ai"
                className="group px-4 py-2 rounded-lg text-xs font-bold
                           bg-background text-ink border border-border
                           hover:border-accent hover:bg-accent hover:text-accent-foreground 
                           transition-all duration-300 hover:scale-105"
              >
                🤖 AI Automation
              </Link>
              <Link
                to="/services"
                className="group px-4 py-2 rounded-lg text-xs font-bold
                           bg-background text-ink border border-border
                           hover:border-secondary hover:bg-secondary hover:text-secondary-foreground 
                           transition-all duration-300 hover:scale-105"
              >
                ✨ Complete Solution
              </Link>
            </div>
            
            <Link
              to="/contact"
              className="group relative w-full flex items-center justify-center gap-3
                h-14 px-6 text-base font-bold rounded-xl
                bg-gradient-to-r from-primary via-teal-500 to-primary bg-size-200 bg-pos-0
                hover:bg-pos-100 text-primary-foreground
                shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40
                hover:scale-[1.02] active:scale-[0.98]
                transition-all duration-300"
            >
              Get Your Free Quote
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <p className="text-xs text-muted-foreground text-center mt-3">
              <span className="inline-block w-1.5 h-1.5 bg-success rounded-full mr-1.5" />
              No obligation • Response in 3 hours
            </p>
          </div>

          {/* Contact Options - Compact */}
          <div className="px-6 sm:px-8 py-5 border-t border-border bg-gradient-to-br from-background to-paper-light/20">
            <p className="text-xs text-muted-foreground text-center mb-3 font-medium">
              Or reach out directly
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <a
                href="https://wa.me/447424062513?text=Hi%20X15%20Digital%2C%20I%27d%20like%20a%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2.5 rounded-lg
                  bg-background border border-border text-ink font-medium text-xs
                  hover:border-[#25D366] hover:bg-[#25D366] hover:text-white
                  transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href="mailto:info@x15digital.co.uk"
                className="group flex items-center gap-2 px-4 py-2.5 rounded-lg
                  bg-background border border-border text-ink font-medium text-xs
                  hover:border-primary hover:bg-primary hover:text-primary-foreground
                  transition-all duration-300 hover:scale-105"
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </a>

              <Link
                to="/contact"
                className="group flex items-center gap-2 px-4 py-2.5 rounded-lg
                  bg-background border border-border text-ink font-medium text-xs
                  hover:border-accent hover:bg-accent hover:text-accent-foreground
                  transition-all duration-300 hover:scale-105"
              >
                <Phone className="h-4 w-4" />
                <span>Book Call</span>
              </Link>
            </div>
          </div>

          {/* Trust Signals - Compact */}
          <div className="px-6 sm:px-8 py-3 bg-gradient-to-r from-ink via-ink-light to-ink">
            <div className="flex flex-wrap justify-center items-center gap-3 text-xs font-semibold text-paper">
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
                Available Now
              </span>
              <span className="hidden sm:inline text-paper-light/50">•</span>
              <span>Transparent Pricing</span>
              <span className="hidden sm:inline text-paper-light/50">•</span>
              <span>You Own Everything</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaCard;
