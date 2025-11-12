import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Zap } from "lucide-react";

export default function PremiumCTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Depthy gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(65% 65% at 50% 10%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 40%), linear-gradient(135deg, #207aff 0%, #1548b7 100%)",
        }}
      />
      {/* Super-subtle noise */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready to Start?</h2>

        <p className="text-white/90 mt-3 md:mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          Get a free, transparent quote in under 4 hours. No sales pitch. No pressure.
        </p>

        {/* CTA row */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="h-12 px-8 rounded-xl text-base bg-white text-[#1548b7] hover:bg-white/95 shadow-[0_8px_30px_rgba(255,255,255,.15)] hover:scale-[1.02] transition-transform"
          >
            <Link to="/contact">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <a
            href="https://wa.me/447424062513"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-8 rounded-xl text-base font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition-all shadow-[0_8px_30px_rgba(16,185,129,.25)] hover:scale-[1.02]"
          >
            <Phone className="h-5 w-5 mr-2" />
            WhatsApp Now
          </a>
        </div>

        {/* Micro trust line */}
        <p className="mt-4 text-sm text-white/80 flex items-center justify-center gap-2">
          <Zap className="h-4 w-4" />
          Average response time: 3 hours • 100% transparent pricing
        </p>
      </div>
    </section>
  );
}
