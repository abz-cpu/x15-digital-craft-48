import React from "react";
import { Link } from "react-router-dom";
import { Mail, MessageCircle, Phone, Shield, Zap, Code, Lock, Database, Cloud } from "lucide-react";

const CtaCard: React.FC = () => {
  return (
    <>
      {/* Technology Trust Bar */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold text-slate-500 text-center mb-6 uppercase tracking-wider">
            Built with Modern, Secure Technology
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
            <div className="text-center">
              <Code className="h-8 w-8 text-slate-400 mx-auto mb-2" />
              <p className="text-xs font-semibold text-slate-700">React</p>
              <p className="text-[10px] text-slate-500">Modern framework</p>
            </div>
            <div className="text-center">
              <Zap className="h-8 w-8 text-slate-400 mx-auto mb-2" />
              <p className="text-xs font-semibold text-slate-700">OpenAI</p>
              <p className="text-[10px] text-slate-500">AI-powered</p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 text-slate-400 mx-auto mb-2" />
              <p className="text-xs font-semibold text-slate-700">Stripe</p>
              <p className="text-[10px] text-slate-500">Secure payments</p>
            </div>
            <div className="text-center">
              <Database className="h-8 w-8 text-slate-400 mx-auto mb-2" />
              <p className="text-xs font-semibold text-slate-700">GDPR</p>
              <p className="text-[10px] text-slate-500">Privacy compliant</p>
            </div>
            <div className="text-center">
              <Cloud className="h-8 w-8 text-slate-400 mx-auto mb-2" />
              <p className="text-xs font-semibold text-slate-700">Zapier</p>
              <p className="text-[10px] text-slate-500">Connected systems</p>
            </div>
            <div className="text-center">
              <Lock className="h-8 w-8 text-slate-400 mx-auto mb-2" />
              <p className="text-xs font-semibold text-slate-700">SSL</p>
              <p className="text-[10px] text-slate-500">Bank-level security</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-3">
              Get professional websites and AI automation that actually deliver results.
            </p>
            <div className="flex items-center justify-center gap-3 text-[#0F766E] font-semibold text-base">
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-[#0F766E] rounded-full" />
                Free quote in 4 hours
              </span>
              <span className="text-slate-300">•</span>
              <span>You own everything</span>
            </div>
          </div>

          {/* CTA Card */}
          <div className="mx-auto max-w-3xl rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden">
            
            {/* Service Selection */}
            <div className="px-8 py-8 bg-gradient-to-br from-slate-50/50 to-white">
              <p className="text-base font-bold text-slate-800 mb-5 text-center">
                What do you need help with?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/services/websites"
                  className="group flex items-center gap-2 px-6 py-3 rounded-xl text-base font-bold
                             bg-white text-slate-700 border-2 border-slate-200
                             hover:border-[#0F766E] hover:bg-[#0F766E] hover:text-white 
                             transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105"
                >
                  <span className="text-xl">🌐</span>
                  Websites
                </Link>
                <Link
                  to="/services/ai"
                  className="group flex items-center gap-2 px-6 py-3 rounded-xl text-base font-bold
                             bg-white text-slate-700 border-2 border-slate-200
                             hover:border-[#0F766E] hover:bg-[#0F766E] hover:text-white 
                             transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105"
                >
                  <span className="text-xl">🤖</span>
                  AI Automation
                </Link>
                <Link
                  to="/services"
                  className="group flex items-center gap-2 px-6 py-3 rounded-xl text-base font-bold
                             bg-white text-slate-700 border-2 border-slate-200
                             hover:border-[#0F766E] hover:bg-[#0F766E] hover:text-white 
                             transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105"
                >
                  <span className="text-xl">✨</span>
                  Complete Solution
                </Link>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="px-8 py-8 bg-white">
              <Link
                to="/contact"
                className="
                  w-full flex items-center justify-center gap-3
                  h-16 px-8 text-xl font-bold rounded-2xl
                  bg-[#0F766E] text-white shadow-lg
                  hover:bg-[#0d5e58] hover:shadow-2xl hover:scale-[1.02]
                  transition-all duration-300
                "
              >
                Get Your Free Quote
                <span className="text-2xl">→</span>
              </Link>
              <p className="text-sm text-slate-500 text-center mt-4 font-medium">
                No obligation • Average response time: 3 hours
              </p>
            </div>

            {/* Divider */}
            <div className="px-8">
              <div className="flex items-center gap-4">
                <div className="h-px bg-slate-200 flex-1" />
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Or Contact Us</span>
                <div className="h-px bg-slate-200 flex-1" />
              </div>
            </div>

            {/* Contact Options */}
            <div className="px-8 py-8 bg-gradient-to-br from-slate-50/50 to-white">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a
                  href="https://wa.me/447424062513?text=Hi%20X15%20Digital%2C%20I'd%20like%20a%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group flex flex-col items-center justify-center gap-3 p-5
                    rounded-2xl bg-white border-2 border-slate-200
                    text-slate-700 font-bold
                    hover:border-[#25D366] hover:bg-[#25D366] hover:text-white
                    transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105
                  "
                >
                  <MessageCircle className="h-7 w-7" />
                  <span className="text-sm">WhatsApp</span>
                </a>

                <a
                  href="mailto:info@x15digital.co.uk"
                  className="
                    group flex flex-col items-center justify-center gap-3 p-5
                    rounded-2xl bg-white border-2 border-slate-200
                    text-slate-700 font-bold
                    hover:border-[#0F766E] hover:bg-[#0F766E] hover:text-white
                    transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105
                  "
                >
                  <Mail className="h-7 w-7" />
                  <span className="text-sm">Email Us</span>
                </a>

                <Link
                  to="/contact"
                  className="
                    group flex flex-col items-center justify-center gap-3 p-5
                    rounded-2xl bg-white border-2 border-slate-200
                    text-slate-700 font-bold
                    hover:border-[#0F766E] hover:bg-[#0F766E] hover:text-white
                    transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105
                  "
                >
                  <Phone className="h-7 w-7" />
                  <span className="text-sm">Book Call</span>
                </a>
              </div>
            </div>

            {/* Trust Footer */}
            <div className="px-8 py-5 bg-slate-900 text-white">
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm">
                <span className="flex items-center gap-2 font-semibold">
                  <span className="inline-block w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                  Available Now
                </span>
                <span className="hidden sm:inline text-slate-500">•</span>
                <span className="font-semibold">100% Transparent Pricing</span>
                <span className="hidden sm:inline text-slate-500">•</span>
                <span className="font-semibold">You Own Everything</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Bar */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-r from-[#0F766E] to-[#0d5e58]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm font-bold text-white/80 mb-2 uppercase tracking-wide">
                Ready When You Are
              </p>
              <p className="text-xl md:text-2xl font-bold text-white">
                Send your idea, links, or screenshots – get a clear quote back fast.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="https://wa.me/447424062513?text=Hi%20X15%20Digital%2C%20I'd%20like%20a%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center gap-2
                  px-6 py-3 rounded-xl text-base font-bold
                  bg-white text-[#0F766E] shadow-lg
                  hover:bg-slate-50 hover:shadow-xl hover:scale-105
                  transition-all duration-300
                "
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp X15 Digital
              </a>
              <Link
                to="/contact"
                className="
                  inline-flex items-center justify-center gap-2
                  px-6 py-3 rounded-xl text-base font-bold
                  bg-slate-900 text-white border-2 border-white/20
                  hover:bg-slate-800 hover:border-white/40 hover:scale-105
                  transition-all duration-300
                "
              >
                Send Project Brief →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaCard;