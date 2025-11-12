import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Zap } from "lucide-react";

export default function PreFooter() {
  // Match this to your footer bg hex:
  const FOOTER_BG = "#0b1728";

  return (
    <section className="relative overflow-hidden isolate">
      {/* Depth: tri-gradient + spotlight + soft noise */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(900px 420px at 50% 0%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 52%),
            linear-gradient(125deg, #2a8df0 0%, #1c59c6 55%, #173b74 86%),
            linear-gradient(180deg, transparent 0%, ${FOOTER_BG} 100%)
          `,
          backgroundBlendMode: "screen, normal, normal",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.08] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready to Start?</h2>
        <p className="text-white/90 mt-3 md:mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          Get a free, transparent quote in under 4 hours. No sales pitch. No pressure.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="h-12 px-8 rounded-xl text-base bg-white text-[#1548b7] hover:bg-white/95 shadow-[0_8px_30px_rgba(255,255,255,.18)] hover:scale-[1.02] transition-transform"
          >
            <Link to="/contact">
              Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
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

        <p className="mt-4 text-sm text-white/80 flex items-center justify-center gap-2">
          <Zap className="h-4 w-4" />
          Average response time: 3 hours • 100% transparent pricing
        </p>
      </div>

      {/* Smooth wave into footer – no harsh band */}
      <svg
        className="absolute bottom-[-1px] left-0 right-0 w-full -z-10"
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
      >
        <path d="M0,70 C500,120 900,0 1440,60 L1440,110 L0,110 Z" fill={FOOTER_BG} />
      </svg>
    </section>
  );
}
