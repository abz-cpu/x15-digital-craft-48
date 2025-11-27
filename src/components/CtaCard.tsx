import React from "react";
import { Link } from "react-router-dom";
import { Mail, MessageCircle, Phone } from "lucide-react";

const CtaCard: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 xl:px-10 py-12 md:py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-3">Ready to get started?</h2>

        <p className="text-base text-slate-600 mb-8 max-w-2xl mx-auto">
          Free quote in 4 hours. Zero pressure. You own everything. Let&apos;s build something great.
        </p>

        {/* Primary CTA + Alternatives */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
          {/* Main button */}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-12 px-8 text-base font-semibold bg-[#0F766E] text-white hover:bg-[#0d5e58] rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Get Free Quote →
          </Link>

          <span className="hidden sm:inline text-slate-400 text-sm">or</span>

          {/* Secondary options */}
          <div className="flex gap-3">
            <a
              href="https://wa.me/447424062513?text=Hi%20X15%20Digital%2C%20I%27d%20like%20a%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm hover:border-[#0F766E] hover:text-[#0F766E] transition-all font-medium"
            >
              <MessageCircle className="h-4 w-4 mr-1.5" />
              WhatsApp
            </a>

            <a
              href="mailto:info@x15digital.co.uk"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm hover:border-[#0F766E] hover:text-[#0F766E] transition-all font-medium"
            >
              <Mail className="h-4 w-4 mr-1.5" />
              Email
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm hover:border-[#0F766E] hover:text-[#0F766E] transition-all font-medium"
            >
              <Phone className="h-4 w-4 mr-1.5" />
              Book Call
            </Link>
          </div>
        </div>

        {/* Trust row */}
        <p className="text-xs text-slate-500">Avg. response: ~3 hours • 100% transparent pricing</p>
      </div>
    </section>
  );
};

export default CtaCard;
