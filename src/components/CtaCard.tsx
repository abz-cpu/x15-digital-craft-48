import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Container } from "./Container";

const CtaCard: React.FC = () => {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-br from-background via-paper-light to-background">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--accent)/0.05),transparent_50%)]" />

      <Container size="narrow" className="relative">
        {/* Heading */}
        <div className="text-center mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold animate-fade-in">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Let's Build Something Amazing</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-ink leading-tight">
            Ready to Grow Your{" "}
            <span className="bg-gradient-to-r from-primary via-teal-400 to-accent bg-clip-text text-transparent">
              Business?
            </span>
          </h2>

          <p className="text-base md:text-lg text-ink-light max-w-xl mx-auto leading-relaxed">
            Get a clean, modern website and smart AI automation that actually bring you leads and sales — not just
            pretty pixels.
          </p>

          <div className="flex items-center justify-center gap-2 text-xs font-medium text-primary">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-1 h-1 bg-primary rounded-full animate-pulse" />
              Free quote within 3 hours
            </span>
            <span className="text-border">•</span>
            <span>You own everything</span>
          </div>
        </div>

        {/* Main Card */}
        <div className="mx-auto max-w-2xl rounded-3xl bg-card/90 backdrop-blur-sm border border-border shadow-lg shadow-primary/5 overflow-hidden transition-all duration-500">
          <div className="px-5 sm:px-6 py-6 space-y-4">
            <div className="text-center space-y-1.5">
              <p className="text-sm text-muted-foreground">
                Tell us what you need in about 2 minutes. We’ll map out your website + automation plan and send a clear
                quote.
              </p>

              <p className="text-xs text-muted-foreground">You’ll work directly with the founder — no outsourcing.</p>
            </div>

            {/* Primary CTA */}
            <Link
              to="/contact"
              className="group w-full flex items-center justify-center gap-2
                h-12 px-5 text-sm font-semibold rounded-xl
                bg-gradient-to-r from-primary via-teal-500 to-primary
                text-primary-foreground shadow-md
                hover:shadow-lg hover:scale-[1.015]
                active:scale-[0.98] transition-all"
            >
              Get Your Free Quote
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* WhatsApp */}
            <div className="text-center space-y-2 pt-1">
              <p className="text-sm text-muted-foreground">Prefer to ask a few questions first?</p>

              <a
                href="https://wa.me/447424062513?text=Hi%20X15%20Digital%2C%20I'd%20like%20to%20ask%20a%20few%20questions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-primary hover:border-[#25D366] hover:text-[#25D366] transition-all"
              >
                <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1.5">
                  <MessageCircle className="h-4 w-4" />
                </span>
                Let's chat on WhatsApp
              </a>
            </div>

            {/* Trust */}
            <div className="text-center space-y-1 pt-2">
              <p className="text-xs text-ink/80 font-medium">
                No pushy sales • Free quote within 3 hours • Transparent pricing • Work directly with the founder
              </p>

              <p className="text-[11px] text-muted-foreground leading-tight">
                If it’s not a fit, you still keep the plan — no obligation to continue.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaCard;
