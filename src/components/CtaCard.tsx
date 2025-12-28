import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, CheckCircle2, Send } from "lucide-react";
import { Container } from "./Container";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "@/hooks/use-toast";

const CtaCard: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 3 hours.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-[#D5F2ED]">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_30%,hsl(var(--primary)/0.08),transparent_50%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_85%_70%,hsl(var(--accent)/0.06),transparent_50%)]" />

      <Container size="wide" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left side - Headline & Social Proof */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Ready to Grow Your{" "}
              <span className="text-primary">Business?</span>
            </h2>

            <p className="text-base md:text-lg text-slate-600 max-w-md leading-relaxed">
              Get a clean, modern website and smart AI automation that actually brings you leads and sales.
            </p>

            {/* Social proof avatars */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2.5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center text-white text-sm font-bold border-2 border-white shadow-sm">
                  S
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-white text-sm font-bold border-2 border-white shadow-sm">
                  J
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center text-white text-sm font-bold border-2 border-white shadow-sm">
                  R
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-white text-sm font-bold border-2 border-white shadow-sm">
                  M
                </div>
              </div>
              <span className="text-sm font-medium text-slate-700">Join 50+ UK businesses</span>
            </div>
          </div>

          {/* Right side - White Card with Form */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/10 p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
                Let's build something amazing
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/20 placeholder:text-slate-400"
                />

                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12 bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/20 placeholder:text-slate-400"
                />

                <Textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="bg-slate-50 border-slate-200 focus:border-primary focus:ring-primary/20 placeholder:text-slate-400 resize-none"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
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

              {/* Trust indicators */}
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

              {/* WhatsApp option */}
              <div className="mt-5 text-center">
                <p className="text-xs text-slate-400 mb-2">Or chat with us directly</p>
                <a
                  href="https://wa.me/447356260648?text=Hi%20L%26D%20Digital%2C%20I%27d%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#25D366] hover:underline"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaCard;
