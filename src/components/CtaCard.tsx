import React, { useState } from "react";
import { Send, CheckCircle2, Globe, Sparkles, Zap, Users, ArrowRight } from "lucide-react";
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
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-[#E6FAF8] via-[#D9F7F4] to-[#CCEFE9]">
      {/* Premium soft radial backgrounds */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_20%,hsl(var(--primary)/0.15),transparent_40%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_90%_80%,hsl(168_76%_42%/0.12),transparent_45%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--primary)/0.08),transparent_50%)]" />
      
      {/* Decorative geometric shapes */}
      <div className="absolute top-20 left-[8%] w-24 h-24 border-2 border-primary/15 rounded-3xl rotate-12 hidden lg:block animate-pulse" style={{ animationDuration: "4s" }} />
      <div className="absolute top-32 right-[12%] w-16 h-16 border-2 border-emerald-400/15 rounded-full hidden lg:block" />
      <div className="absolute bottom-24 left-[15%] w-20 h-20 border-2 border-teal-400/10 rounded-2xl -rotate-6 hidden lg:block" />
      <div className="absolute bottom-32 right-[8%] w-12 h-12 bg-gradient-to-br from-primary/10 to-emerald-400/10 rounded-xl rotate-45 hidden lg:block" />
      
      {/* Floating dots */}
      <div className="absolute top-1/4 left-[5%] w-3 h-3 bg-primary/25 rounded-full hidden lg:block animate-bounce" style={{ animationDuration: "3s" }} />
      <div className="absolute top-1/3 right-[6%] w-4 h-4 bg-emerald-400/20 rounded-full hidden lg:block animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }} />
      <div className="absolute bottom-1/4 left-[10%] w-2.5 h-2.5 bg-teal-500/30 rounded-full hidden lg:block animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }} />
      <div className="absolute top-2/3 right-[15%] w-3 h-3 bg-primary/20 rounded-full hidden lg:block animate-bounce" style={{ animationDuration: "2.5s" }} />

      <Container size="wide" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Content (60%) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20 animate-fade-in">
                <Sparkles className="h-4 w-4" />
                <span>Ready to Grow Your Business?</span>
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight text-center lg:text-left mb-6">
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-teal-500 via-teal-400 to-amber-400 bg-clip-text text-transparent">
                Amazing
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed text-center lg:text-left mb-8">
              Get a clean, modern website and smart AI automation that actually bring you leads and sales.
            </p>

            {/* Social proof avatars */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-10">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center text-white text-sm font-bold border-3 border-white shadow-md ring-2 ring-white">S</div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-white text-sm font-bold border-3 border-white shadow-md ring-2 ring-white">J</div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center text-white text-sm font-bold border-3 border-white shadow-md ring-2 ring-white">R</div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-white text-sm font-bold border-3 border-white shadow-md ring-2 ring-white">M</div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-violet-500 flex items-center justify-center text-white text-sm font-bold border-3 border-white shadow-md ring-2 ring-white">+</div>
              </div>
              <div className="text-slate-700">
                <span className="font-bold text-slate-900">25+</span> UK businesses trust us
              </div>
            </div>

            {/* Device Mockup - Visible on larger screens between content and form */}
            <div className="hidden lg:flex items-center gap-6 mb-0">
              <div className="relative">
                {/* Laptop mockup */}
                <div className="relative">
                  <div className="w-56 h-32 bg-slate-800 rounded-t-xl p-2.5 shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 via-white to-emerald-50 rounded-md overflow-hidden">
                      <div className="p-3 space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="w-12 h-2.5 bg-primary/40 rounded-full" />
                          <div className="flex gap-1.5">
                            <div className="w-5 h-2 bg-slate-300 rounded-full" />
                            <div className="w-5 h-2 bg-slate-300 rounded-full" />
                          </div>
                        </div>
                        <div className="h-10 bg-gradient-to-r from-primary/15 to-emerald-400/10 rounded flex items-center justify-center">
                          <div className="w-20 h-2.5 bg-primary/30 rounded-full" />
                        </div>
                        <div className="flex gap-2">
                          <div className="flex-1 h-6 bg-slate-100 rounded" />
                          <div className="flex-1 h-6 bg-slate-100 rounded" />
                          <div className="flex-1 h-6 bg-slate-100 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-60 h-3 bg-slate-700 rounded-b-xl mx-auto shadow-lg" />
                  
                  {/* Live badge */}
                  <div className="absolute -top-3 -right-3 bg-emerald-500 text-white text-xs font-bold px-2.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 animate-pulse">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    Live
                  </div>
                </div>

                {/* 24/7 Online floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-3 flex items-center gap-2.5 animate-bounce border border-slate-100" style={{ animationDuration: "3s" }}>
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Globe className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">24/7 Online</span>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 mt-8 lg:mt-12">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-sm border border-white/80">
                <Zap className="h-4 w-4 text-amber-500" />
                <span className="text-sm font-medium text-slate-700">Free quote in 3 hours</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-sm border border-white/80">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-slate-700">No pushy sales</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-sm border border-white/80">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span className="text-sm font-medium text-slate-700">Fast, reliable delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form Card (40%) */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            {/* Glassmorphism Form Card */}
            <div className="relative group">
              {/* Gradient border glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-teal-400 to-emerald-500 rounded-[2rem] opacity-30 group-hover:opacity-50 blur-sm transition-opacity duration-500" />
              
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl shadow-primary/10 border border-white/50 animate-fade-in">
                {/* Form header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Let's talk about your project</h3>
                  <p className="text-slate-500 text-sm">Fill out the form and we'll get back to you shortly</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full bg-slate-50/80 border border-slate-200 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400 hover:border-slate-300" 
                    />
                  </div>
                  <div className="space-y-1">
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full bg-slate-50/80 border border-slate-200 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400 hover:border-slate-300" 
                    />
                  </div>
                  <div className="space-y-1">
                    <textarea 
                      placeholder="Tell us about your project..." 
                      rows={4} 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="w-full bg-slate-50/80 border border-slate-200 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400 resize-none hover:border-slate-300"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Get Your Free Quote
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>

                {/* Response time indicator */}
                <div className="flex items-center justify-center gap-2 mt-5 text-slate-500 text-sm">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span>Response within 3 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaCard;
