import React from "react";
import { Calendar, Code2, Rocket, Sparkles } from "lucide-react";

interface ProcessTimelineProps {
  className?: string;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ className = "" }) => {
  const steps = [
    {
      number: 1,
      title: "DISCOVERY",
      subtitle: "15-minute chat",
      description: "Book a quick call",
      icon: Calendar,
      color: "from-rose-400 to-rose-500",
      shadowColor: "rgba(251,113,133,0.4)",
      bgColor: "bg-rose-50",
    },
    {
      number: 2,
      title: "BUILD",
      subtitle: "We create & optimize",
      description: "1-14 days depending on your package",
      icon: Code2,
      color: "from-primary to-teal-400",
      shadowColor: "rgba(15,118,110,0.4)",
      bgColor: "bg-teal-50",
    },
    {
      number: 3,
      title: "LAUNCH",
      subtitle: "Go live + optional support",
      description: "No monthly platform rental fees",
      icon: Rocket,
      color: "from-amber-400 to-amber-500",
      shadowColor: "rgba(245,158,11,0.4)",
      bgColor: "bg-amber-50",
    },
  ];

  return (
    <div className={`relative ${className}`}>
      {/* Desktop connecting line */}
      <div className="hidden md:block absolute top-[60px] left-[16.67%] right-[16.67%] h-0.5">
        <div className="h-full bg-gradient-to-r from-rose-300 via-teal-300 to-amber-300 rounded-full" />
        {/* Animated dots on the line */}
        <div className="absolute top-1/2 left-1/4 w-2 h-2 -translate-y-1/2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-y-1/2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "300ms" }} />
        <div className="absolute top-1/2 left-3/4 w-2 h-2 -translate-y-1/2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "600ms" }} />
      </div>

      {/* Mobile connecting line */}
      <div className="md:hidden absolute left-8 top-[80px] bottom-[80px] w-0.5">
        <div className="h-full bg-gradient-to-b from-rose-300 via-teal-300 to-amber-300 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {steps.map((step, _index) => {
          const Icon = step.icon;
          return (
            <div 
              key={step.number} 
              className="relative text-center md:text-center group"
            >
              {/* Mobile layout - horizontal card */}
              <div className="md:hidden flex items-start gap-4">
                {/* Icon container */}
                <div 
                  className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                  style={{ boxShadow: `0 8px 25px ${step.shadowColor}` }}
                >
                  <Icon className="h-7 w-7 text-white" strokeWidth={2} />
                  {/* Number badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md border border-border/50">
                    <span className="text-xs font-bold text-foreground">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-left pt-1">
                  <h3 className="text-xl font-bold text-[#1F2937] mb-1">{step.title}</h3>
                  <p className="text-[#6B7280] text-sm mb-1">{step.subtitle}</p>
                  <p className="text-[#6B7280] text-sm">{step.description}</p>
                </div>
              </div>

              {/* Desktop layout - vertical card */}
              <div className="hidden md:block">
                {/* Icon container with illustration */}
                <div className="mb-6 flex justify-center">
                  <div 
                    className={`relative w-[120px] h-[120px] rounded-3xl ${step.bgColor} flex items-center justify-center transition-all duration-300 group-hover:scale-105 border border-border/20`}
                    style={{ boxShadow: `0 12px 35px ${step.shadowColor}` }}
                  >
                    {/* Main icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" strokeWidth={2} />
                    </div>
                    
                    {/* Decorative elements */}
                    {step.number === 1 && (
                      <>
                        <div className="absolute top-3 right-3 w-3 h-3 bg-rose-300 rounded-full opacity-60" />
                        <div className="absolute bottom-4 left-3 w-2 h-2 bg-rose-400 rounded-full opacity-40" />
                      </>
                    )}
                    {step.number === 2 && (
                      <>
                        <div className="absolute top-4 left-4 w-2 h-6 bg-teal-200 rounded opacity-60" />
                        <div className="absolute bottom-4 right-4 w-2 h-4 bg-teal-300 rounded opacity-50" />
                        <Sparkles className="absolute top-3 right-3 w-4 h-4 text-teal-400 opacity-60" />
                      </>
                    )}
                    {step.number === 3 && (
                      <>
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-1">
                          <div className="w-1 h-3 bg-amber-300 rounded-full" />
                          <div className="w-1 h-4 bg-amber-400 rounded-full" />
                          <div className="w-1 h-3 bg-amber-300 rounded-full" />
                        </div>
                        <div className="absolute bottom-3 right-4 w-3 h-3 rotate-45 bg-amber-200 opacity-60" />
                      </>
                    )}

                    {/* Number badge */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#0F766E] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                      <span className="text-sm font-bold text-white">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#1F2937] mb-3">{step.title}</h3>
                <p className="text-[#6B7280] mb-2">{step.subtitle}</p>
                <p className="text-[#6B7280]">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessTimeline;
