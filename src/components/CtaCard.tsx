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
          {/* Service Selection */}
          <div className="px-6 sm:px-8 py-8 bg-gradient-to-br from-paper-light/50 to-transparent border-b border-border">
            <p className="text-sm font-bold text-ink mb-5 text-center tracking-wide uppercase">
              Choose Your Service
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/services/websites"
                className="group px-6 py-3 rounded-xl text-sm font-bold
                           bg-background text-ink border-2 border-border
                           hover:border-primary hover:bg-primary hover:text-primary-foreground 
                           transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105
                           flex items-center gap-2"
              >
                <span>🌐</span>
                <span>Websites</span>
              </Link>
              <Link
                to="/services/ai"
                className="group px-6 py-3 rounded-xl text-sm font-bold
                           bg-background text-ink border-2 border-border
                           hover:border-accent hover:bg-accent hover:text-accent-foreground 
                           transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105
                           flex items-center gap-2"
              >
                <span>🤖</span>
                <span>AI Automation</span>
              </Link>
              <Link
                to="/services"
                className="group px-6 py-3 rounded-xl text-sm font-bold
                           bg-background text-ink border-2 border-border
                           hover:border-secondary hover:bg-secondary hover:text-secondary-foreground 
                           transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105
                           flex items-center gap-2"
              >
                <span>✨</span>
                <span>Complete Solution</span>
              </Link>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="px-6 sm:px-8 py-8 bg-gradient-to-br from-background to-paper-light">
            <Link
              to="/contact"
              className="group relative w-full flex items-center justify-center gap-3
                h-16 px-8 text-lg font-bold rounded-xl
                bg-gradient-to-r from-primary via-teal-500 to-primary bg-size-200 bg-pos-0
                hover:bg-pos-100 text-primary-foreground
                shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40
                hover:scale-[1.02] active:scale-[0.98]
                transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Get Your Free Quote
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
            <p className="text-xs text-muted-foreground text-center mt-4 flex items-center justify-center gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-success rounded-full" />
              No obligation • Average response time: 3 hours
            </p>
          </div>

          {/* Divider */}
          <div className="px-6 sm:px-8">
            <div className="flex items-center gap-3 my-2">
              <div className="h-px bg-border flex-1" />
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Or reach out directly
              </span>
              <div className="h-px bg-border flex-1" />
            </div>
          </div>

          {/* Contact Options */}
          <div className="px-6 sm:px-8 py-8 bg-gradient-to-br from-paper-light/30 to-transparent">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="https://wa.me/447424062513?text=Hi%20X15%20Digital%2C%20I%27d%20like%20a%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-5
                  rounded-2xl bg-background border-2 border-border
                  text-ink font-bold text-sm
                  hover:border-[#25D366] hover:bg-[#25D366] hover:text-white
                  transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105"
              >
                <MessageCircle className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
                <span>WhatsApp</span>
              </a>

              <a
                href="mailto:info@x15digital.co.uk"
                className="group flex flex-col items-center gap-3 p-5
                  rounded-2xl bg-background border-2 border-border
                  text-ink font-bold text-sm
                  hover:border-primary hover:bg-primary hover:text-primary-foreground
                  transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105"
              >
                <Mail className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
                <span>Email Us</span>
              </a>

              <Link
                to="/contact"
                className="group flex flex-col items-center gap-3 p-5
                  rounded-2xl bg-background border-2 border-border
                  text-ink font-bold text-sm
                  hover:border-accent hover:bg-accent hover:text-accent-foreground
                  transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105"
              >
                <Phone className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
                <span>Book Call</span>
              </Link>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="px-6 sm:px-8 py-5 bg-gradient-to-r from-ink via-ink-light to-ink">
            <div className="flex flex-wrap justify-center items-center gap-5 text-xs font-semibold text-paper">
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-success rounded-full animate-pulse shadow-sm shadow-success" />
                Available Now
              </span>
              <span className="hidden sm:inline text-paper-light/50">•</span>
              <span>100% Transparent Pricing</span>
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
