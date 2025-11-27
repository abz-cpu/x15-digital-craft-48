import React from "react";
import { Link } from "react-router-dom";
import { Mail, MessageCircle, Phone } from "lucide-react";

const CtaCard: React.FC = () => {
  return (
    <section
      className="px-4 sm:px-6 lg:px-8 xl:px-10 py-16 md:py-20"
      style={{
        background: "radial-gradient(circle at 30% 0%, rgba(15,118,110,0.45), rgba(10,53,49,1) 70%)",
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Ready to get started?</h2>

        <p className="text-base md:text-lg text-white/80 mb-8">
          Free quote in 4 hours. Zero pressure. You own everything.
        </p>

        {/* PRIMARY CTA */}
        <div className="flex justify-center mb-6">
          <Link
            to="/contact"
            className="
              inline-flex items-center justify-center
              h-12 px-10 text-base font-semibold
              rounded-lg
              bg-[#F59E0B] text-white
              shadow-[0_6px_20px_rgba(245,158,11,0.25)]
              hover:shadow-[0_8px_28px_rgba(245,158,11,0.35)]
              hover:translate-y-[-1px]
              transition-all duration-200
            "
          >
            Get Free Quote →
          </Link>
        </div>

        {/* OR Divider */}
        <div className="flex items-center gap-4 mb-5 max-w-md mx-auto opacity-70">
          <div className="flex-1 h-px bg-white/20" />
          <span className="text-white/60 text-xs font-medium tracking-wide">OR</span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        {/* Secondary Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <a
            href="https://wa.me/447424062513"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
              bg-white/5 backdrop-blur border border-white/10
              text-white/90 hover:bg-white/10 hover:border-white/20
              transition-all
            "
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>

          <a
            href="mailto:info@x15digital.co.uk"
            className="
              inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
              bg-white/5 backdrop-blur border border-white/10
              text-white/90 hover:bg-white/10 hover:border-white/20
              transition-all
            "
          >
            <Mail className="h-4 w-4" /> Email
          </a>

          <Link
            to="/contact"
            className="
              inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
              bg-white/5 backdrop-blur border border-white/10
              text-white/90 hover:bg-white/10 hover:border-white/20
              transition-all
            "
          >
            <Phone className="h-4 w-4" /> Book Call
          </Link>
        </div>

        <p className="text-xs text-white/50 tracking-wide">Avg. response ~3 hours • 100% transparent pricing</p>
      </div>
    </section>
  );
};

export default CtaCard;
