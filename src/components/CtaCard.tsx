import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function CtaCard() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 xl:px-10 py-16 md:py-24 bg-gradient-to-br from-[#0F766E] to-[#0d5e58]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to start a project?</h2>
        <p className="text-base md:text-lg text-white/90 mb-10">
          Free quote in 4 hours. Zero pressure. You own everything. Let's build something great.
        </p>

        {/* Primary CTA */}
        <div className="flex justify-center mb-8">
          <Button
            asChild
            className="h-14 px-12 text-lg font-bold bg-[#F59E0B] text-[#0F766E] hover:bg-[#F59E0B]/90 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <Link to="/contact">Get Free Quote →</Link>
          </Button>
        </div>

        {/* OR Separator */}
        <div className="flex items-center gap-4 mb-6 max-w-md mx-auto">
          <div className="flex-1 h-px bg-white/30"></div>
          <span className="text-white/70 text-sm font-medium">OR</span>
          <div className="flex-1 h-px bg-white/30"></div>
        </div>

        {/* Alternative Contact Methods */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://wa.me/447424062513"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-transparent border-2 border-white/30 text-white hover:bg-white/10 transition-all font-medium"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp
          </a>

          <a
            href="mailto:info@x15digital.co.uk"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-transparent border-2 border-white/30 text-white hover:bg-white/10 transition-all font-medium"
          >
            <Mail className="h-4 w-4 mr-2" />
            Email
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-transparent border-2 border-white/30 text-white hover:bg-white/10 transition-all font-medium"
          >
            <Phone className="h-4 w-4 mr-2" />
            Book Call
          </Link>
        </div>

        {/* Trust Indicators */}
        <p className="text-sm text-white/70">Avg. response: ~3 hours • 100% transparent pricing</p>
      </div>
    </section>
  );
}
