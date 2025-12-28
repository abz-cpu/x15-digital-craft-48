import React, { useState } from "react";
import { Send, CheckCircle2, Globe, Sparkles } from "lucide-react";
import { Container } from "./Container";
import { toast } from "@/hooks/use-toast";

const CtaCard: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 3 hours.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="relative py-14 md:py-20 overflow-hidden bg-[#D9F7F4]">
      {/* Premium soft radial background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_25%,hsl(var(--primary)/0.10),transparent_55%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_65%,hsl(var(--accent)/0.10),transparent_55%)]" />
      
      {/* Decorative geometric shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary/10 rounded-2xl rotate-12 hidden lg:block" />
      <div className="absolute bottom-20 right-16 w-16 h-16 border-2 border-accent/10 rounded-full hidden lg:block" />
      <div className="absolute top-1/2 left-5 w-3 h-3 bg-primary/20 rounded-full hidden lg:block" />
      <div className="absolute top-1/3 right-10 w-4 h-4 bg-accent/20 rounded hidden lg:block" />

      <Container size="narrow" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Device mockup */}
          <div className="hidden lg:flex justify-center order-2 lg:order-1">
            <div className="relative">
              {/* Multi-device display */}
              <div className="flex items-end justify-center gap-3">
                {/* Laptop */}
                <div className="relative">
                  <div className="w-48 h-28 bg-slate-800 rounded-t-lg p-2 shadow-xl">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-sm overflow-hidden">
                      <div className="p-2 space-y-1.5">
                        <div className="flex justify-between items-center">
                          <div className="w-10 h-2 bg-primary/30 rounded" />
                          <div className="flex gap-1">
                            <div className="w-4 h-1.5 bg-slate-200 rounded" />
                            <div className="w-4 h-1.5 bg-slate-200 rounded" />
                          </div>
                        </div>
                        <div className="h-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded flex items-center justify-center">
                          <div className="w-16 h-2 bg-primary/30 rounded" />
                        </div>
                        <div className="flex gap-1.5">
                          <div className="flex-1 h-5 bg-slate-100 rounded" />
                          <div className="flex-1 h-5 bg-slate-100 rounded" />
                          <div className="flex-1 h-5 bg-slate-100 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-52 h-2.5 bg-slate-700 rounded-b-xl mx-auto shadow-md" />
                  
                  {/* Success badge */}
                  <div className="absolute -top-3 -right-3 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Live
                  </div>
                </div>

                {/* Phone */}
                <div className="relative -mb-2">
                  <div className="w-14 h-24 bg-slate-800 rounded-2xl p-1 shadow-xl">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl overflow-hidden">
                      <div className="p-1.5">
                        <div className="w-6 h-1 bg-primary/30 rounded mb-1" />
                        <div className="h-4 bg-primary/10 rounded mb-1" />
                        <div className="space-y-0.5">
                          <div className="h-2 bg-slate-200 rounded" />
                          <div className="h-2 bg-slate-200 rounded w-3/4" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-slate-600 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-2 flex items-center gap-2 animate-bounce" style={{ animationDuration: "3s" }}>
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Globe className="w-3 h-3 text-emerald-600" />
                </div>
                <span className="text-xs font-medium text-slate-700">24/7 Online</span>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            {/* Heading */}
            <div className="text-center lg:text-left mb-6 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold animate-fade-in">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Ready to Grow Your Business?</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight">
                Let&apos;s Build Something{" "}
                <span className="bg-gradient-to-r from-primary via-teal-400 to-accent bg-clip-text text-transparent">
                  Amazing
                </span>
              </h2>

              <p className="text-base md:text-lg text-ink-light max-w-xl leading-relaxed">
                Get a clean, modern website and smart AI automation that actually bring you leads and sales.
              </p>
            </div>

            {/* Social proof avatars */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-sm">S</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-sm">J</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-sm">R</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-sm">M</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-violet-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-sm">+</div>
              </div>
              <span className="text-sm text-ink-light">Join 50+ UK businesses</span>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all text-slate-900 placeholder:text-slate-400" 
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all text-slate-900 placeholder:text-slate-400" 
                />
                <textarea 
                  placeholder="Tell us about your project..." 
                  rows={3} 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all text-slate-900 placeholder:text-slate-400 resize-none"
                />
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Get Your Free Quote"} 
                  <Send size={20} />
                </button>
              </form>
              <div className="text-center mt-5 text-sm text-slate-400">
                Free quote in 3 hrs • No pushy sales • You own everything
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaCard;
