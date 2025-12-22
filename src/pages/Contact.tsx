import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  MessageCircle,
  ArrowRight,
  Clock,
  Copy,
  Check,
  X,
  Globe,
  Phone,
  ChevronDown,
  FileText,
  ListChecks,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

const Contact = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".fade-in-section").forEach((s) => observerRef.current?.observe(s));

    return () => observerRef.current?.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("info@x15digital.co.uk");
    setCopied(true);
    toast({ title: "Email copied", description: "info@x15digital.co.uk" });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInquirySubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Inquiry sent",
      description: "We’ll reply within 2–4 hours.",
    });
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact – Get a Free Quote | X15 Digital"
        description="Request a free quote for web design or AI automation. Fast response, WhatsApp support, London-based."
      />

      <ScrollProgressBar />
      <Navigation />

      {/* HERO */}
      <section className="pt-28 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center fade-in-section">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Let's Talk About Your Project</h1>
          <p className="text-muted-foreground mb-3">
            Tell us what you need — we’ll send a clear quote, no sales pitch.
          </p>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            We reply within 4 hours (usually faster)
          </p>
        </div>
      </section>

      <BreadcrumbNav />

      {/* MAIN GRID */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start fade-in-section">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 space-y-6" id="contact-form">
            {/* FORM */}
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl font-semibold text-secondary mb-4">Request a Quote</h2>

                <form onSubmit={handleInquirySubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input required placeholder="Your name" className="input" />
                    <input required type="email" placeholder="Email" className="input" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <input placeholder="Phone (optional)" className="input" />
                    <select className="input">
                      <option>New website</option>
                      <option>Website redesign</option>
                      <option>AI automation</option>
                      <option>Website + AI</option>
                    </select>
                  </div>

                  <textarea rows={5} placeholder="Tell us about your project..." className="input" />

                  <Button type="submit" size="lg" className="w-full">
                    Send Inquiry <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* 🔥 GAP FILLER SECTION */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* WHAT WE NEED */}
              <Card className="border border-border/70">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-secondary mb-4 flex gap-2">
                    <ListChecks className="h-5 w-5 text-primary" />
                    What we need from you
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {[
                      "Your goal & audience",
                      "2–3 example sites you like",
                      "Pages required",
                      "Any integrations needed",
                    ].map((x) => (
                      <li key={x} className="flex gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* WHAT HAPPENS NEXT */}
              <Card className="border border-border/70">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-secondary mb-4 flex gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    What happens next
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {[
                      "We review your request",
                      "You receive a clear quote",
                      "Optional clarification call",
                      "Project starts on approval",
                    ].map((x) => (
                      <li key={x} className="flex gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="border border-border/70">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-secondary mb-4">Reach us directly</h3>

                <Button className="w-full mb-3 bg-emerald-600">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp (Fastest)
                </Button>

                <Button variant="outline" onClick={copyEmail} className="w-full justify-between mb-3">
                  info@x15digital.co.uk
                  {copied ? <Check /> : <Copy />}
                </Button>

                <Button variant="outline" className="w-full justify-between">
                  <Phone className="h-4 w-4" />
                  07123 456789
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-border/70">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-secondary mb-4">Location</h3>
                <p className="text-sm text-muted-foreground mb-3">Stratford, London (E15)</p>
                <div className="h-[200px] rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    loading="lazy"
                    src="https://www.google.com/maps?q=Abbey%20Road%20DLR%20London&output=embed"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Contact;
