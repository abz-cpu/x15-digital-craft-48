import React from "react";
import { Link } from "react-router-dom";
import { Mail, MessageCircle, Phone } from "lucide-react";

const CtaCard: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Get professional websites and AI automation that actually deliver results. 
            <span className="block mt-2 font-medium text-[#0F766E]">Free quote in 4 hours • You own everything</span>
          </p>
        </div>

        {/* Main Card */}
        <div className="mx-auto max-w-2xl rounded-2xl bg-white border border-slate-200 shadow-lg overflow-hidden">
          
          {/* Service Selection */}
          <div className="px-6 sm:px-8 py-6 bg-gradient-to-br from-slate-50 to-white border-b border-slate-100">
            <p className="text-sm font-semibold text-slate-700 mb-4 text-center">
              What do you need help with?
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/services/websites"
                className="px-5 py-2.5 rounded-lg text-sm font-semibold
                           bg-white text-slate-700 border-2 border-slate-200
                           hover:border-[#0F766E] hover:bg-[#0F766E] hover:text-white 
                           transition-all duration-200 shadow-sm hover:shadow-md"
              >
                🌐 Websites
              </Link>
              <Link
                to="/services/ai"
                className="px-5 py-2.5 rounded-lg text-sm font-semibold
                           bg-white text-slate-700 border-2 border-slate-200
                           hover:border-[#0F766E] hover:bg-[#0F766E] hover:text-white 
                           transition-all duration-200 shadow-sm hover:shadow-md"
              >
                🤖 AI Automation
              </Link>
              <Link
                to="/services"
                className="px-5 py-2.5 rounded-lg text-sm font-semibold
                           bg-white text-slate-700 border-2 border-slate-200
                           hover:border-[#0F766E] hover:bg-[#0F766E] hover:text-white 
                           transition-all duration-200 shadow-sm hover:shadow-md"
              >
                ✨ Complete Solution
              </Link>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="px-6 sm:px-8 py-6 bg-white">
            <Link
              to="/contact"
              className="
                w-full flex items-center justify-center gap-2
                h-14 px-8 text-lg font-bold rounded-xl
                bg-[#0F766E] text-white shadow-md
                hover:bg-[#0d5e58] hover:shadow-xl hover:scale-[1.02]
                transition-all duration-200
              "
            >
              Get Your Free Quote →
            </Link>
            <p className="text-xs text-slate-500 text-center mt-3">
              No obligation • Average response time: 3 hours
            </p>
          </div>

          {/* Divider */}
          <div className="px-6 sm:px-8">
            <div className="flex items-center gap-3 my-4">
              <div className="h-px bg-slate-200 flex-1" />
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Or contact us</span>
              <div className="h-px bg-slate-200 flex-1" />
            </div>
          </div>

          {/* Contact Options */}
          <div className="px-6 sm:px-8 py-6 bg-gradient-to-br from-slate-50 to-white">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href="https://wa.me/447424062513?text=Hi%20X15%20Digital%2C%20I'd%20like%20a%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex flex-col items-center gap-2 p-4
                  rounded-xl bg-white border-2 border-slate-200
                  text-slate-700 font-semibold
                  hover:border-[#25D366] hover:bg-[#25D366] hover:text-white
                  transition-all duration-200 shadow-sm hover:shadow-md
                "
              >
                <MessageCircle className="h-6 w-6" />
                <span className="text-sm">WhatsApp</span>
              </a>

              <a
                href="mailto:info@x15digital.co.uk"
                className="
                  flex flex-col items-center gap-2 p-4
                  rounded-xl bg-white border-2 border-slate-200
                  text-slate-700 font-semibold
                  hover:border-[#0F766E] hover:bg-[#0F766E] hover:text-white
                  transition-all duration-200 shadow-sm hover:shadow-md
                "
              >
                <Mail className="h-6 w-6" />
                <span className="text-sm">Email Us</span>
              </a>

              <Link
                to="/contact"
                className="
                  flex flex-col items-center gap-2 p-4
                  rounded-xl bg-white border-2 border-slate-200
                  text-slate-700 font-semibold
                  hover:border-[#0F766E] hover:bg-[#0F766E] hover:text-white
                  transition-all duration-200 shadow-sm hover:shadow-md
                "
              >
                <Phone className="h-6 w-6" />
                <span className="text-sm">Book Call</span>
              </a>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="px-6 sm:px-8 py-4 bg-slate-900 text-white">
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Available Now
              </span>
              <span className="hidden sm:inline text-slate-400">•</span>
              <span>100% Transparent Pricing</span>
              <span className="hidden sm:inline text-slate-400">•</span>
              <span>You Own Everything</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaCard;