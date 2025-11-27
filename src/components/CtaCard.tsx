import React from "react";
import { Link } from "react-router-dom";
import { Mail, MessageCircle, Phone } from "lucide-react";

const CtaCard: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 xl:px-10 py-14 md:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">Ready to Grow Your Business?</h2>

        <p className="text-base md:text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Free quote in 4 hours. Zero pressure. You own everything. Let&apos;s build something great.
        </p>

        {/* Main CTA */}
        <Link
          to="/contact"
          className="
        inline-flex items-center justify-center
        h-12 px-8 text-base font-semibold rounded-lg
        bg-[#0F766E] text-white shadow-lg
        hover:bg-[#0d5e58] hover:shadow-xl hover:scale-[1.03]
        transition-all duration-200
      "
        >
          Get Free Quote →
        </Link>

        {/* Text category links */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-500">
          <Link to="/services/websites" className="hover:text-[#0F766E] transition">
            Websites
          </Link>
          <span className="text-slate-300">•</span>
          <Link to="/services/ai" className="hover:text-[#0F766E] transition">
            AI Automation
          </Link>
          <span className="text-slate-300">•</span>
          <Link to="/services" className="hover:text-[#0F766E] transition">
            Both
          </Link>
        </div>

        {/* Spacer */}
        <div className="mt-6 mb-2 text-slate-400 text-sm">or</div>

        {/* Contact options */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
          <a
            href="https://wa.me/447424062513?text=Hi%20X15%20Digital%2C%20I%27d%20like%20a%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="
          inline-flex items-center justify-center px-5 py-2.5
          rounded-lg bg-white border border-slate-200
          text-slate-700 text-sm font-medium
          hover:border-[#0F766E] hover:text-[#0F766E]
          transition-all
        "
          >
            <MessageCircle className="h-4 w-4 mr-1.5" />
            WhatsApp
          </a>

          <a
            href="mailto:info@x15digital.co.uk"
            className="
          inline-flex items-center justify-center px-5 py-2.5
          rounded-lg bg-white border border-slate-200
          text-slate-700 text-sm font-medium
          hover:border-[#0F766E] hover:text-[#0F766E]
          transition-all
        "
          >
            <Mail className="h-4 w-4 mr-1.5" />
            Email
          </a>

          <Link
            to="/contact"
            className="
          inline-flex items-center justify-center px-5 py-2.5
          rounded-lg bg-white border border-slate-200
          text-slate-700 text-sm font-medium
          hover:border-[#0F766E] hover:text-[#0F766E]
          transition-all
        "
          >
            <Phone className="h-4 w-4 mr-1.5" />
            Book Call
          </Link>
        </div>

        {/* Trust text */}
        <p className="text-xs text-slate-500">Avg. response: ~3 hours • 100% transparent pricing</p>
      </div>
    </section>
  );
};

export default CtaCard;
