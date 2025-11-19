import { MessageCircle } from "lucide-react";

const WhatsAppWidget = () => {
  return (
    <a
      href="https://wa.me/447424062513?text=Hi%20X15%20Digital%2C%20I%27m%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-8 md:right-10 z-40 group"
      aria-label="Message us on WhatsApp"
    >
      <div className="relative">
        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-secondary text-white px-3 py-2 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Message us
        </span>
        
        {/* WhatsApp Button */}
        <div className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-200">
          <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppWidget;
