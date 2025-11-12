import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Zap } from "lucide-react";

type Props = {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  showWhatsApp?: boolean;
};

export default function PremiumCTA({
  title = "Ready to Start Your Project?",
  subtitle = "No sales pitch. No pressure. Just a straightforward conversation about what you need and how we can help.",
  primaryLabel = "See Our Packages",
  primaryTo = "/services",
  secondaryLabel = "Get Free Quote",
  secondaryTo = "/contact",
  showWhatsApp = true,
}: Props) {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Sapphire gradient background with subtle pattern */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-700)) 55%, hsl(var(--primary-800)) 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.5'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
        <p className="mt-4 text-white/90 max-w-3xl mx-auto">{subtitle}</p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="bg-white text-ink hover:bg-white/95 shadow-xl">
            <Link to={secondaryTo}>
              {secondaryLabel} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
          >
            <Link to={primaryTo}>{primaryLabel}</Link>
          </Button>
        </div>

        {showWhatsApp && (
          <div className="mt-8 space-y-2">
            <div className="flex items-center justify-center gap-3 text-white/85">
              <div className="h-px w-10 bg-white/30" />
              <span className="text-xs uppercase tracking-wider">or</span>
              <div className="h-px w-10 bg-white/30" />
            </div>
            <a
              href="https://wa.me/447424062513"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white hover:text-white/90 transition-colors"
            >
              <span className="inline-flex p-2 rounded-full bg-white/20">
                <Phone className="h-5 w-5" />
              </span>
              <span className="font-semibold">WhatsApp: +44 7424 062513</span>
            </a>
            <p className="text-xs text-white/70 flex items-center gap-2 justify-center">
              <Zap className="h-4 w-4" /> No sales calls. No pressure. Just clear answers.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
