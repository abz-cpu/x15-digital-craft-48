import { Link } from "react-router-dom";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function CtaCard() {
  return (
    <section 
      className="px-4 sm:px-6 lg:px-8 xl:px-10 py-12 md:py-16"
      style={{
        background: 'linear-gradient(135deg, #0F766E 0%, #0d5e58 100%)'
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Ready to Get Started?
        </h2>
        <p className="text-base text-white/80 mb-8 max-w-2xl mx-auto">
          Free quote in 4 hours. Zero pressure. You own everything. Let's build something great.
        </p>
        
        {/* Primary CTA + Alternatives in One Row */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-12 px-8 text-base font-semibold bg-[#F59E0B] text-white hover:bg-[#F59E0B]/90 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Get Free Quote →
          </Link>
          
          <span className="hidden sm:inline text-white/50 text-sm">or</span>
          
          <div className="flex gap-3">
            
              href="https://wa.me/447424062513"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition-all font-medium"
            >
              <MessageCircle className="h-4 w-4 mr-1.5" />
              WhatsApp
            </a>
            
              href="mailto:hello@x15digital.co.uk"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition-all font-medium"
            >
              <Mail className="h-4 w-4 mr-1.5" />
              Email
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition-all font-medium"
            >
              <Phone className="h-4 w-4 mr-1.5" />
              Call
            </Link>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <p className="text-xs text-white/60">
          Avg. response: ~3 hours • 100% transparent pricing
        </p>
      </div>
    </section>
  );
}

export default CtaCard;
