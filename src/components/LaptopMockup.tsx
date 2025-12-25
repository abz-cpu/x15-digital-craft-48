import { cn } from "@/lib/utils";

interface LaptopMockupProps {
  imageSrc: string;
  alt: string;
  className?: string;
}

export const LaptopMockup = ({ imageSrc, alt, className }: LaptopMockupProps) => {
  return (
    <div className={cn("relative", className)}>
      {/* Laptop Frame */}
      <div className="relative mx-auto">
        {/* Screen bezel */}
        <div className="relative bg-slate-800 rounded-t-xl p-2 shadow-2xl">
          {/* Camera notch */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-600" />
          
          {/* Screen */}
          <div className="relative bg-white rounded-lg overflow-hidden aspect-[16/10]">
            <img 
              src={imageSrc} 
              alt={alt}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
        
        {/* Keyboard base */}
        <div className="relative">
          {/* Hinge */}
          <div className="h-3 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-sm" />
          
          {/* Keyboard deck */}
          <div className="h-2 bg-gradient-to-b from-slate-300 to-slate-400 rounded-b-xl mx-4" />
          
          {/* Bottom edge */}
          <div className="h-1 bg-slate-500 rounded-b-xl mx-8" />
        </div>
      </div>
    </div>
  );
};

interface PhoneMockupProps {
  imageSrc: string;
  alt: string;
  className?: string;
}

export const PhoneMockup = ({ imageSrc, alt, className }: PhoneMockupProps) => {
  return (
    <div className={cn("relative", className)}>
      {/* Phone Frame */}
      <div className="relative bg-slate-800 rounded-[2rem] p-2 shadow-2xl">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-slate-900 z-10" />
        
        {/* Screen */}
        <div className="relative bg-white rounded-[1.5rem] overflow-hidden aspect-[9/19.5]">
          <img 
            src={imageSrc} 
            alt={alt}
            className="w-full h-full object-cover object-top"
          />
        </div>
        
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-slate-600" />
      </div>
    </div>
  );
};