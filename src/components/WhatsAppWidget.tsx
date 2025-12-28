import { MessageCircle } from "lucide-react";

const WhatsAppWidget = () => {
  return (
    <a
      href="https://wa.me/447356260648?text=Hi%20L%26D%20Digital%2C%20I%27m%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[1000] group"
      aria-label="Message us on WhatsApp"
    >
      <div className="relative">
        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#1F2937] text-white px-3 py-2 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Message us
        </span>
        
        {/* WhatsApp Button */}
        <div className="bg-[#0F766E] text-white w-14 h-14 rounded-full shadow-[0_4px_12px_rgba(15,118,110,0.3)] hover:scale-105 hover:bg-[#F59E0B] transition-all duration-200 flex items-center justify-center">
          <MessageCircle className="h-6 w-6" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppWidget;
