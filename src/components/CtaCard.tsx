import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
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
            Get a clean, modern website and smart AI automation that actually bring you leads and sales — not just
            pretty pixels.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-primary">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              Free quote within 3 hours
            </span>
            <span className="text-border">•</span>
            <span>You own everything</span>
          </div>
        </div>

        {/* Main Card – Minimal & Focused */}
        <div className="mx-auto max-w-2xl rounded-3xl bg-card/90 backdrop-blur-sm border border-border shadow-2xl shadow-primary/5 overflow-hidden hover:shadow-primary/10 transition-all duration-500">
          <div className="px-6 sm:px-8 py-8 space-y-6">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Tell us what you need in about 2 minutes. We’ll map out your website and automation plan and send a
                clear, no-pressure quote.
              </p>
              <p className="text-xs text-muted-foreground">
                You&apos;ll work directly with the founder — no outsourcing, no runaround.
              </p>
            </div>

            {/* Primary Path – Free Quote */}
            <Link
              to="/contact"
              className="group relative w-full flex items-center justify-center gap-2
                h-14 px-6 text-base font-semibold rounded-xl
                bg-gradient-to-r from-primary via-teal-500 to-primary bg-size-200 bg-pos-0
                hover:bg-pos-100 text-primary-foreground
                shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40
                hover:scale-[1.02] active:scale-[0.98]
                transition-all duration-300"
            >
              Get Your Free Quote
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            {/* Secondary Path – Questions? WhatsApp */}
            <p className="text-sm text-muted-foreground text-center">Prefer to ask a few questions first?</p>
            <div className="flex justify-center">
              <a
                href="https://wa.me/447424062513?text=Hi%20X15%20Digital%2C%20I%27d%20like%20to%20ask%20a%20few%20questions%20about%20your%20web%20and%20AI%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80
                  px-4 py-2 text-sm font-medium text-primary hover:border-[#25D366]
                  hover:bg-[#25D366]/10 hover:text-[#25D366]
                  transition-all duration-300"
              >
                <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1.5">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <span>Let&apos;s chat on WhatsApp</span>
              </a>
            </div>

            {/* Inline Trust Signals */}
            <div className="space-y-1 text-center">
              <p className="text-xs sm:text-[13px] text-ink/80 font-medium">
                No pushy sales • Free quote within 3 hours • Transparent pricing • You work directly with the founder
              </p>
              <p className="text-[11px] text-muted-foreground">
                If it&apos;s not a fit, you still keep the plan — no obligation to continue.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaCard;
