import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, MessageCircle, Sparkles, CheckCircle2, Send } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

const CtaCard: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Thank you! We'll get back to you within 3 hours.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-[#0a1628]">
      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_0%_0%,hsl(var(--primary)/0.15),transparent_50%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_100%_100%,hsl(var(--primary)/0.10),transparent_50%)]" />
      
      {/* Decorative border line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <Container size="wide" className="relative">
        <div className="bg-[#0f1f35] rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left side - Content */}
            <div className="p-8 md:p-10 lg:p-12 xl:p-14 flex flex-col justify-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 text-primary text-xs font-semibold mb-6 w-fit">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Let's Build Something Amazing</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Ready to Grow Your{" "}
                <span className="text-primary">Business?</span>
              </h2>

              <p className="text-base md:text-lg text-white/60 max-w-md leading-relaxed mb-8">
                Get a clean, modern website and smart AI automation that actually brings you leads and sales.
              </p>

              {/* Social proof avatars */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center text-white text-xs font-bold border-2 border-[#0f1f35] shadow-sm">S</div>
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold border-2 border-[#0f1f35] shadow-sm">J</div>
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center text-white text-xs font-bold border-2 border-[#0f1f35] shadow-sm">R</div>
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-white text-xs font-bold border-2 border-[#0f1f35] shadow-sm">M</div>
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-400 to-violet-500 flex items-center justify-center text-white text-xs font-bold border-2 border-[#0f1f35] shadow-sm">+</div>
                </div>
                <span className="text-sm text-white font-medium">Join 50+ UK businesses</span>
              </div>
            </div>

            {/* Right side - Form Card */}
            <div className="p-6 md:p-8 lg:p-10 bg-white lg:rounded-l-3xl flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
                Let's build something amazing
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl focus:border-primary focus:ring-primary/20"
                />
                
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl focus:border-primary focus:ring-primary/20"
                />
                
                <Textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[100px] bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl resize-none focus:border-primary focus:ring-primary/20"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl shadow-lg shadow-primary/25 transition-all"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Get Your Free Quote
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-5 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  <span>Free quote in 3 hrs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  <span>No pushy sales</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  <span>You own everything</span>
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
