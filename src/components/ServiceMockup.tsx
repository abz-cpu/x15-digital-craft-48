import React from "react";

interface ServiceMockupProps {
  type: "web-dev" | "maintenance" | "ai-automation" | "design" | "marketing" | "branding";
}

export const ServiceMockup: React.FC<ServiceMockupProps> = ({ type }) => {
  const mockups: Record<string, React.ReactNode> = {
    "web-dev": (
      // Browser mockup with website preview
      <div className="w-full mt-4 rounded-lg overflow-hidden border border-border/50 bg-slate-50 shadow-inner">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 border-b border-border/50">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <div className="flex-1 mx-3">
            <div className="h-4 bg-white rounded-md px-2 flex items-center">
              <span className="text-[8px] text-slate-400 truncate">yoursite.com</span>
            </div>
          </div>
        </div>
        {/* Website preview */}
        <div className="p-3 space-y-2">
          {/* Nav */}
          <div className="flex justify-between items-center">
            <div className="w-16 h-3 bg-primary/20 rounded" />
            <div className="flex gap-2">
              <div className="w-8 h-2 bg-slate-200 rounded" />
              <div className="w-8 h-2 bg-slate-200 rounded" />
              <div className="w-8 h-2 bg-slate-200 rounded" />
            </div>
          </div>
          {/* Hero */}
          <div className="h-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded flex items-center justify-center">
            <div className="w-24 h-3 bg-primary/30 rounded" />
          </div>
          {/* Cards */}
          <div className="flex gap-2">
            <div className="flex-1 h-8 bg-slate-100 rounded" />
            <div className="flex-1 h-8 bg-slate-100 rounded" />
            <div className="flex-1 h-8 bg-slate-100 rounded" />
          </div>
        </div>
      </div>
    ),

    maintenance: (
      // Dashboard with health indicator
      <div className="w-full mt-4 rounded-lg overflow-hidden border border-border/50 bg-slate-50 shadow-inner p-3">
        {/* Health status */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-emerald-600">Site Health: 100%</span>
          </div>
          <div className="text-[10px] text-slate-400">Last check: 2 min ago</div>
        </div>
        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white rounded p-2 text-center border border-border/30">
            <div className="text-sm font-bold text-primary">99.9%</div>
            <div className="text-[9px] text-slate-400">Uptime</div>
          </div>
          <div className="bg-white rounded p-2 text-center border border-border/30">
            <div className="text-sm font-bold text-primary">A+</div>
            <div className="text-[9px] text-slate-400">Security</div>
          </div>
          <div className="bg-white rounded p-2 text-center border border-border/30">
            <div className="text-sm font-bold text-primary">Fast</div>
            <div className="text-[9px] text-slate-400">Speed</div>
          </div>
        </div>
        {/* Progress bar */}
        <div className="mt-3">
          <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full" />
          </div>
        </div>
      </div>
    ),

    "ai-automation": (
      // Chat interface (no faces - just message bubbles)
      <div className="w-full mt-4 rounded-lg overflow-hidden border border-border/50 bg-slate-50 shadow-inner p-3 space-y-2">
        {/* Incoming message */}
        <div className="flex justify-start">
          <div className="bg-slate-200 rounded-2xl rounded-bl-sm px-3 py-1.5 max-w-[80%]">
            <p className="text-[10px] text-slate-700">Hi, do you have availability tomorrow?</p>
          </div>
        </div>
        {/* AI response */}
        <div className="flex justify-end">
          <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-sm px-3 py-1.5 max-w-[80%]">
            <p className="text-[10px]">Yes! I have slots at 10am, 2pm & 4pm. Want me to book one for you?</p>
          </div>
        </div>
        {/* Typing indicator */}
        <div className="flex justify-start">
          <div className="bg-slate-200 rounded-2xl px-3 py-2">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        </div>
        {/* Status badge */}
        <div className="flex justify-center">
          <span className="text-[9px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">AI Assistant • Online 24/7</span>
        </div>
      </div>
    ),

    design: (
      // Design canvas with UI components (Figma-style)
      <div className="w-full mt-4 rounded-lg overflow-hidden border border-border/50 bg-slate-50 shadow-inner p-3">
        {/* Canvas header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex gap-1">
            <div className="w-4 h-4 rounded bg-orange-200 border border-orange-300" />
            <div className="w-4 h-4 rounded bg-primary/20 border border-primary/30" />
          </div>
          <span className="text-[9px] text-slate-400">Design Canvas</span>
        </div>
        {/* Artboard */}
        <div className="bg-white rounded border border-slate-200 p-2 space-y-2">
          {/* Button component */}
          <div className="flex items-center gap-2">
            <div className="h-5 px-3 bg-primary rounded text-[8px] text-primary-foreground flex items-center">Button</div>
            <div className="h-5 px-3 bg-transparent border border-primary rounded text-[8px] text-primary flex items-center">Outline</div>
          </div>
          {/* Card component */}
          <div className="bg-slate-50 rounded p-1.5 border border-slate-100">
            <div className="w-12 h-2 bg-slate-200 rounded mb-1" />
            <div className="w-20 h-1.5 bg-slate-100 rounded" />
          </div>
          {/* Color palette */}
          <div className="flex gap-1">
            <div className="w-4 h-4 rounded-full bg-primary" />
            <div className="w-4 h-4 rounded-full bg-accent" />
            <div className="w-4 h-4 rounded-full bg-slate-800" />
            <div className="w-4 h-4 rounded-full bg-slate-200" />
          </div>
        </div>
      </div>
    ),

    marketing: (
      // Analytics dashboard with charts
      <div className="w-full mt-4 rounded-lg overflow-hidden border border-border/50 bg-slate-50 shadow-inner p-3">
        {/* Metrics row */}
        <div className="flex justify-between mb-3">
          <div className="text-center">
            <div className="text-sm font-bold text-primary">↑ 156%</div>
            <div className="text-[9px] text-slate-400">Traffic</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-bold text-emerald-600">↑ 89%</div>
            <div className="text-[9px] text-slate-400">Leads</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-bold text-blue-600">#1</div>
            <div className="text-[9px] text-slate-400">Ranking</div>
          </div>
        </div>
        {/* Chart */}
        <div className="h-12 flex items-end gap-1">
          <div className="flex-1 h-4 bg-primary/20 rounded-t" />
          <div className="flex-1 h-6 bg-primary/30 rounded-t" />
          <div className="flex-1 h-5 bg-primary/40 rounded-t" />
          <div className="flex-1 h-8 bg-primary/50 rounded-t" />
          <div className="flex-1 h-7 bg-primary/60 rounded-t" />
          <div className="flex-1 h-10 bg-primary/70 rounded-t" />
          <div className="flex-1 h-12 bg-primary rounded-t" />
        </div>
        <div className="mt-1 flex justify-between">
          <span className="text-[8px] text-slate-400">Jan</span>
          <span className="text-[8px] text-slate-400">Jul</span>
        </div>
      </div>
    ),

    branding: (
      // Brand identity assets
      <div className="w-full mt-4 rounded-lg overflow-hidden border border-border/50 bg-slate-50 shadow-inner p-3">
        {/* Logo variations */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="aspect-square bg-white rounded flex items-center justify-center border border-slate-100">
            <div className="w-6 h-6 bg-gradient-to-br from-primary to-primary/60 rounded-lg" />
          </div>
          <div className="aspect-square bg-slate-800 rounded flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-lg" />
          </div>
          <div className="aspect-square bg-primary rounded flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-lg" />
          </div>
        </div>
        {/* Color swatches */}
        <div className="flex gap-1 mb-2">
          <div className="flex-1 h-4 bg-violet-500 rounded-l-full" />
          <div className="flex-1 h-4 bg-violet-400" />
          <div className="flex-1 h-4 bg-violet-300" />
          <div className="flex-1 h-4 bg-violet-200 rounded-r-full" />
        </div>
        {/* Typography */}
        <div className="bg-white rounded p-1.5 border border-slate-100">
          <div className="text-[10px] font-bold text-slate-800">Aa Bb Cc</div>
          <div className="text-[8px] text-slate-400">Brand Typography</div>
        </div>
      </div>
    ),
  };

  return <>{mockups[type]}</>;
};

export default ServiceMockup;
