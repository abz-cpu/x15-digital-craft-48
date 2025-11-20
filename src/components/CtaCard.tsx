import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function CtaCard() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 xl:px-10 my-12 lg:my-14 xl:my-16">
      <div className="max-w-5xl mx-auto">
        <div className="mx-auto max-w-xl rounded-2xl bg-white shadow-[0_10px_40px_rgba(16,24,40,.12)] border border-[hsl(210,90%,56%)/.25] p-7 sm:p-9 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[hsl(208,30%,14%)]">Ready to Start?</h2>
          <p className="text-[15px] sm:text-base text-black/70 mt-2">
            Get a free, transparent quote in under 4 hours. No sales pitch. No pressure.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="h-11 px-6 rounded-xl bg-[hsl(210,90%,56%)] hover:bg-[hsl(213,78%,44%)]">
              <Link to="/contact">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>

            <a
              href="https://wa.me/447424062513"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-11 px-6 rounded-xl font-semibold bg-emerald-600 text-white hover:bg-emerald-500"
            >
              <Phone className="h-4 w-4 mr-2" />
              WhatsApp Now
            </a>
          </div>

          <p className="mt-3 text-xs text-black/55">
            Avg. response: ~3 hours • 100% transparent pricing
          </p>
        </div>
      </div>
    </section>
  );
}
