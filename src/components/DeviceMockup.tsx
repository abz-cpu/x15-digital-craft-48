import React from "react";

interface DeviceMockupProps {
  type: "web" | "ai";
  className?: string;
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({ type, className = "" }) => {
  if (type === "web") {
    return (
      <div className={`relative ${className}`}>
        {/* Multi-device mockup - Laptop, tablet, phone */}
        <div className="flex items-end justify-center gap-2">
          {/* Laptop */}
          <div className="relative">
            <div className="w-32 sm:w-40 h-20 sm:h-24 bg-slate-800 rounded-t-lg p-1.5 shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-sm overflow-hidden">
                {/* Mini website preview */}
                <div className="p-1.5">
                  <div className="w-8 h-1.5 bg-primary/30 rounded mb-1" />
                  <div className="w-full h-4 bg-primary/10 rounded mb-1" />
                  <div className="flex gap-1">
                    <div className="flex-1 h-3 bg-slate-200 rounded" />
                    <div className="flex-1 h-3 bg-slate-200 rounded" />
                  </div>
                </div>
              </div>
            </div>
            {/* Laptop base */}
            <div className="w-36 sm:w-44 h-2 bg-slate-700 rounded-b-xl mx-auto shadow-md" />
          </div>

          {/* Tablet - hidden on very small screens */}
          <div className="hidden sm:block relative -mb-2">
            <div className="w-16 h-20 bg-slate-800 rounded-lg p-1 shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-sm">
                <div className="p-1">
                  <div className="w-4 h-1 bg-primary/30 rounded mb-1" />
                  <div className="w-full h-3 bg-primary/10 rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="relative -mb-1">
            <div className="w-8 sm:w-10 h-16 sm:h-18 bg-slate-800 rounded-xl p-0.5 shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg">
                <div className="p-1">
                  <div className="w-3 h-0.5 bg-primary/30 rounded mb-0.5" />
                  <div className="w-full h-2 bg-primary/10 rounded" />
                </div>
              </div>
              {/* Home indicator */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-slate-600 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // AI chat mockup
  return (
    <div className={`relative ${className}`}>
      {/* Phone with chat interface */}
      <div className="relative mx-auto w-28 sm:w-32">
        {/* Phone frame */}
        <div className="bg-slate-800 rounded-[1.5rem] p-1.5 shadow-xl">
          {/* Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-3 bg-slate-800 rounded-full z-10" />
          
          {/* Screen */}
          <div className="bg-white rounded-[1.25rem] overflow-hidden">
            {/* Chat header */}
            <div className="bg-primary p-2 pt-5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded" />
                </div>
                <div>
                  <div className="text-[8px] text-white font-medium">AI Assistant</div>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-[7px] text-white/80">Online</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Chat messages */}
            <div className="p-2 space-y-1.5 bg-slate-50 min-h-[80px]">
              {/* User message */}
              <div className="flex justify-end">
                <div className="bg-primary text-white rounded-xl rounded-br-sm px-2 py-1 max-w-[70%]">
                  <span className="text-[7px]">Book for tomorrow?</span>
                </div>
              </div>
              {/* AI response */}
              <div className="flex justify-start">
                <div className="bg-white shadow-sm rounded-xl rounded-bl-sm px-2 py-1 max-w-[70%] border border-slate-100">
                  <span className="text-[7px] text-slate-700">Done! 2pm confirmed ✓</span>
                </div>
              </div>
            </div>
            
            {/* Input bar */}
            <div className="p-1.5 border-t border-slate-100 bg-white">
              <div className="flex items-center gap-1">
                <div className="flex-1 h-5 bg-slate-100 rounded-full px-2">
                  <span className="text-[7px] text-slate-400 leading-5">Type a message...</span>
                </div>
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[4px] border-l-white border-y-[3px] border-y-transparent ml-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative notification bubble */}
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[8px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg animate-bounce">
          3
        </div>
      </div>
    </div>
  );
};

export default DeviceMockup;
