import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Container } from "./Container";
import { toast } from "sonner";

const CtaCard: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Thanks! We'll get back to you within 3 hours.");
    setFormData({ name: "", email: "", project: "" });
    setIsSubmitting(false);
  };

  return (
    <section className="relative py-14 md:py-20 overflow-hidden bg-[hsl(222,47%,11%)]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.08),transparent_60%)]" />

      <Container size="narrow" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Ready to Grow Your{" "}
              <span className="bg-gradient-to-r from-primary via-teal-400 to-accent bg-clip-text text-transparent">
                Business?
              </span>
            </h2>

            <p className="text-base md:text-lg text-slate-300 max-w-xl leading-relaxed mb-6">
              Get a clean, modern website and smart AI automation that actually brings you leads and sales.
            </p>

            {/* Social proof avatars */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center text-white text-xs font-bold border-2 border-slate-800 shadow-sm">S</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold border-2 border-slate-800 shadow-sm">J</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center text-white text-xs font-bold border-2 border-slate-800 shadow-sm">R</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-white text-xs font-bold border-2 border-slate-800 shadow-sm">M</div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-violet-500 flex items-center justify-center text-white text-xs font-bold border-2 border-slate-800 shadow-sm">+</div>
              </div>
              <span className="text-sm text-slate-400">Join 50+ UK businesses</span>
            </div>
          </div>

          {/* Right side - Form Card */}
          <div className="rounded-2xl bg-white shadow-2xl overflow-hidden">
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Let's build something amazing</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                
                <div>
                  <textarea
                    placeholder="Tell us about your project..."
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 h-12 px-5 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-70 transition-all"
                >
                  {isSubmitting ? "Sending..." : "Get Your Free Quote"}
                  <Send className="h-4 w-4" />
                </button>
              </form>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-5 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Free quote in 3 hrs</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>No pushy sales</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
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