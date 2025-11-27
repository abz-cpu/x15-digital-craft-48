import React from "react";
import { Link } from "react-router-dom";
import { Mail, MessageCircle, Phone } from "lucide-react";

const CtaCard: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-14 md:py-18 bg-slate-50">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Ready to Grow Your Business?</h2>

        <p className="text-base md:text-lg text-slate-600 mb-7 max-w-xl mx-auto">
          Free quote in 4 hours. Zero pressure. You own everything. Let’s build something great.
        </p>

        {/* Main CTA */}
        <Link
          to="/contact"
          className="
            inline-flex items-center justify-center
            h-11 px-8 text-base font-semibold rounded-lg
            bg-[#0F766E] text-white shadow-md
            hover:bg-[#0d5e58] hover:shadow-lg hover:scale-[1.02]
            transition-all duration-200
          "
        >
          Get Free Quote →
        </Link>

        {/* Card with options */}
        <div className="mt-8 mx-auto max-w-xl rounded-2xl bg-white border border-slate-100 shadow-sm px-5 sm:px-6 py-5 sm:py-6 text-left">
          {/* Category selector */}
          <p className="text-xs font-medium text-slate-500 mb-3 text-center">What do you need help with?</p>

          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <Link
              to="/services/websites"
              className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium
                         bg-slate-50 text-slate-700 border border-slate-200
                         hover:border-[#0F766E] hover:text-[#0F766E] transition"
            >
              Websites
            </Link>
            <Link
              to="/services/ai"
              className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium
                         bg-slate-50 text-slate-700 border border-slate-200
                         hover:border-[#0F766E] hover:text-[#0F766E] transition"
            >
              AI Automation
            </Link>
            <Link
              to="/services"
              className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium
                         bg-slate-50 text-slate-700 border border-slate-200
                         hover:border-[#0F766E] hover:text-[#0F766E] transition"
            >
              Both
            </Link>
          </div>

          {/* Divider */}
          <div className="h-px bg-slate-100 my-3" />

          {/* Contact options */}
          <p className="text-xs text-slate-500 mb-2 text-center">Prefer to talk first?</p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-2">
            <a
              href="https://wa.me/447424062513?text=Hi%20X15%20Digital%2C%20I'd%20like%20a%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 px-4 py-2
                rounded-lg bg-slate-50 border border-slate-200
                text-slate-700 text-xs sm:text-sm font-medium
                hover:border-[#0F766E] hover:text-[#0F766E]
                transition-all
              "
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>

            <a
              href="mailto:info@x15digital.co.uk"
              className="
                inline-flex items-center gap-2 px-4 py-2
                rounded-lg bg-slate-50 border border-slate-200
                text-slate-700 text-xs sm:text-sm font-medium
                hover:border-[#0F766E] hover:text-[#0F766E]
                transition-all
              "
            >
              <Mail className="h-4 w-4" />
              Email
            </a>

            <Link
              to="/contact"
              className="
                inline-flex items-center gap-2 px-4 py-2
                rounded-lg bg-slate-50 border border-slate-200
                text-slate-700 text-xs sm:text-sm font-medium
                hover:border-[#0F766E] hover:text-[#0F766E]
                transition-all
              "
            >
              <Phone className="h-4 w-4" />
              Book Call
            </Link>
          </div>

          {/* Trust line */}
          <p className="text-[11px] text-slate-500 text-center mt-1">
            Avg. response ~3 hours • 100% transparent pricing
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaCard;
