import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Container } from "./Container";

const CtaCard: React.FC = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-[#D9F7F4]">
      {/* Very soft radial accents – matched to other final CTA */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.06),transparent_55%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_60%,hsl(var(--accent)/0.06),transparent_55%)]" />

      <Container size="narrow" className="relative">
        {/* Heading */}
        <div className="text-center mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold animate-fade-in">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Let&apos;s Build Something Amazing</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight">
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

        {/* Supporting copy (no card, just inline under heading) */}
        <div className="text-center space-y-1.5 mb-6">
          <p className="text-sm text-muted-foreground">
            Tell us what you need in about 2 minutes. We’ll map out your website + automation plan and send a clear
            quote.
          </p>
          <p className="text-xs text-muted-foreground">You’ll work directly with the founder — no outsourcing.</p>
        </div>

        {/* Primary + Secondary CTAs (same system as final AI CTA) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          {/* Primary CTA – Free Quote */}
          <Link
            to="/contact"
            className="group flex items-center justify-center gap-2
              h-12 px-6 text-sm font-semibold rounded-xl
              bg-gradient-to-r from-primary via-teal-500 to-primary
              text-primary-foreground shadow-md hover:shadow-lg
              hover:scale-[1.015] active:scale-[0.97]
              transition-all"
          >
            Get Your Free Quote
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary CTA – WhatsApp */}
          <a
            href="https://wa.me/447424062513?text=Hi%20X15%20Digital%2C%20I%27d%20like%20to%20ask%20a%20few%20questions"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2
              h-12 px-6 text-sm font-semibold rounded-xl
              border border-border bg-background/70
              text-primary hover:border-[#25D366] hover:text-[#25D366]
              shadow-sm hover:shadow-md hover:scale-[1.015]
              active:scale-[0.97] transition-all"
          >
            <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-1.5">
              <MessageCircle className="h-4 w-4" />
            </span>
            Let&apos;s chat on WhatsApp
          </a>
        </div>

        {/* Trust */}
        <div className="text-center space-y-1">
          <p className="text-xs text-ink/80 font-medium">
            No pushy sales • Free quote within 3 hours • Transparent pricing • Work directly with the founder
          </p>

          <p className="text-[11px] text-muted-foreground leading-tight">
            If it’s not a fit, you still keep the plan — no obligation to continue.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default CtaCard;
