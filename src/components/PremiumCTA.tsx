import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export default function PremiumCTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient bg with subtle texture */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/.9) 60%, hsl(var(--primary)/.8) 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.35'%3E%3Ccircle cx='40' cy='40' r='1.2'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Ready to Start?</h2>
        <p className="text-white/90 mb-10 max-w-2xl mx-auto">
          Get a free, transparent quote in under 4 hours. No sales pitch. No pressure.
        </p>

        {/* Primary action ONLY */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/95 h-12 px-8 font-semibold shadow-xl"
          >
            <Link to="/contact">
              Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          {/* Secondary: WhatsApp */}
          <a
            href="https://wa.me/447424062513"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition-all"
          >
            <Phone className="h-5 w-5" />
            WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}
