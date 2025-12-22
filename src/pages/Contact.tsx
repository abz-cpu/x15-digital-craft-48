import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MessageCircle, ArrowRight, Clock, Copy, Check, X, Globe, Bot, Zap, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// ============================================================================
// Types for quiz functionality (preserved for future backend integration)
// ============================================================================
type Goal = "website" | "automation" | "both" | "";
type Budget = "low" | "mid" | "high" | "";
type Urgency = "asap" | "soon" | "exploring" | "";

interface QuizResult {
  title: string;
  description: string;
  link: string;
  linkLabel: string;
}

const Contact = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [copied, setCopied] = useState(false);
  
  // ============================================================================
  // State preserved for future backend integration
  // ============================================================================
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [goal, setGoal] = useState<Goal>("");
  const [budget, setBudget] = useState<Budget>("");
  const [urgency, setUrgency] = useState<Urgency>("");
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [quizError, setQuizError] = useState<string | null>(null);
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

    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => observerRef.current?.observe(section));

    return () => observerRef.current?.disconnect();
  }, []);

  // Close modals with Escape key
  useEffect(() => {
    if (!isInquiryOpen && !isCalendlyOpen && !isQuizOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsInquiryOpen(false);
        setIsCalendlyOpen(false);
        setIsQuizOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isInquiryOpen, isCalendlyOpen, isQuizOpen]);

  // ============================================================================
  // Handlers preserved for future backend integration
  // ============================================================================
  const resetQuiz = () => {
    setGoal("");
    setBudget("");
    setUrgency("");
    setQuizResult(null);
    setQuizError(null);
  };

  const openQuiz = () => {
    resetQuiz();
    setIsQuizOpen(true);
  };

  const handleQuizSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!goal || !budget || !urgency) {
      setQuizError("Please answer all three questions to see your recommendation.");
      return;
    }

    setQuizError(null);

    let result: QuizResult;

    if (goal === "website") {
      result = {
        title: "You're best suited for a Website Package",
        description:
          budget === "low"
            ? "Based on your answers, our Foundation website package is likely the best fit. It gets you online quickly with a clean, conversion-focused site."
            : "You're a strong fit for our Growth or Scale website packages with more pages, stronger branding, and room to grow.",
        link: "/web-package",
        linkLabel: "View Website Packages",
      };
    } else if (goal === "automation") {
      result = {
        title: "You're best suited for AI Automation",
        description:
          "Your answers point towards chatbots, voice agents, or workflow automation that can save you time and capture more leads automatically.",
        link: "/ai-package",
        linkLabel: "View AI Automation Options",
      };
    } else {
      result = {
        title: "You're a great fit for a Website + AI Bundle",
        description:
          "You'll benefit most from a website that's built from day one to work with AI – handling leads, FAQs, and bookings automatically.",
        link: "/services",
        linkLabel: "View All Services",
      };
    }

    setQuizResult(result);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("info@x15digital.co.uk");
    setCopied(true);
    toast({
      title: "Email copied!",
      description: "info@x15digital.co.uk copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInquirySubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Later you can send this to Airtable / backend / email
    // const formData = new FormData(e.currentTarget);

    toast({
      title: "Inquiry sent",
      description: "We'll reply within 2–4 hours with a detailed quote and next steps.",
    });

    (e.currentTarget as HTMLFormElement).reset();
    setIsInquiryOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsInquiryOpen(false);
      setIsCalendlyOpen(false);
      setIsQuizOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Us - Get Your Free Quote | X15 Digital"
        description="Contact X15 Digital for a free quote on web development or AI automation. Fast response times, WhatsApp support, based in London UK. Email, phone, or form contact."
        keywords="contact web developer UK, get free quote website, AI automation consultation, web development London"
      />
      <ScrollProgressBar />
      <Navigation />

      {/* ====================================================================
          HERO: Simple, clear headline with trust signal
      ==================================================================== */}
      <section className="pt-28 pb-8 md:pt-32 md:pb-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-3xl mx-auto text-center fade-in-section">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Let's Talk About Your Project
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            Tell us what you need and we'll send you a clear quote — no sales pitch.
          </p>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            We reply within 4 hours (usually faster)
          </p>
        </div>
      </section>

      <BreadcrumbNav />

      {/* ====================================================================
          MAIN INQUIRY FORM (Hero of the page - inline, not modal)
      ==================================================================== */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto fade-in-section">
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleInquirySubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-secondary">
                      Your name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                      placeholder="e.g. Sarah Ahmed"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-secondary">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                {/* What do you need? */}
                <div className="space-y-1.5">
                  <label htmlFor="projectType" className="text-sm font-medium text-secondary">
                    What do you need?
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                    defaultValue="website"
                  >
                    <option value="website">New website</option>
                    <option value="redesign">Redesign existing site</option>
                    <option value="ai">AI automation / chatbot</option>
                    <option value="both">Website + AI</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-secondary">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                    placeholder="What are you trying to achieve? Any examples you like? Budget range?"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                >
                  Send Inquiry <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  No spam. No pressure. Just a clear quote and honest advice.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ====================================================================
          SECONDARY OPTIONS: WhatsApp + Email/Phone (compact strip)
      ==================================================================== */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-2xl mx-auto fade-in-section">
          <p className="text-center text-sm text-muted-foreground mb-4">Or reach us directly:</p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {/* WhatsApp - Primary secondary option */}
            <Button asChild size="lg" variant="outline" className="border-green-500/30 hover:bg-green-50 hover:border-green-500">
              <a
                href="https://wa.me/447424062513?text=Hi%20X15%20Digital%2C%20I%27m%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5 text-green-600" />
                WhatsApp Us
              </a>
            </Button>

            {/* Email */}
            <Button variant="outline" size="lg" onClick={copyEmail}>
              <Mail className="h-5 w-5 mr-2 text-muted-foreground" />
              {copied ? (
                <>
                  <Check className="h-4 w-4 mr-1 text-green-600" /> Copied!
                </>
              ) : (
                "info@x15digital.co.uk"
              )}
            </Button>
          </div>

          {/* Not sure? Quiz link */}
          <p className="text-center text-sm text-muted-foreground mt-4">
            Not sure what you need?{" "}
            <button
              type="button"
              onClick={openQuiz}
              className="text-primary hover:underline font-medium"
            >
              Take our 30-second quiz
            </button>
            {" "}or{" "}
            <button
              type="button"
              onClick={() => setIsCalendlyOpen(true)}
              className="text-primary hover:underline font-medium"
            >
              book a free call
            </button>
          </p>
        </div>
      </section>

      {/* ====================================================================
          COMMON QUESTIONS SECTION (Expanded with cards below)
      ==================================================================== */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto fade-in-section">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3 text-center">
            Common Questions Before You Contact Us
          </h2>
          <p className="text-muted-foreground text-center mb-10">Quick answers to save you time:</p>
          
          {/* FAQ Cards */}
          <div className="space-y-4 mb-8">
            <Card className="border border-border/60">
              <CardContent className="p-5">
                <p className="font-semibold text-secondary mb-1">Q: How long will my project take?</p>
                <p className="text-muted-foreground text-sm mb-2">A: Most websites: 1–7 days. AI automation: 3–10 days.</p>
                <Link to="/services#faq" className="text-primary text-sm hover:underline inline-flex items-center gap-1">
                  See full timeline FAQ <ArrowRight className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border border-border/60">
              <CardContent className="p-5">
                <p className="font-semibold text-secondary mb-1">Q: What if I don't like the result?</p>
                <p className="text-muted-foreground text-sm mb-2">A: Free revisions until you're happy, or money-back guarantee.</p>
                <Link to="/terms" className="text-primary text-sm hover:underline inline-flex items-center gap-1">
                  See our guarantee <ArrowRight className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border border-border/60">
              <CardContent className="p-5">
                <p className="font-semibold text-secondary mb-1">Q: Do I need to know technical stuff?</p>
                <p className="text-muted-foreground text-sm mb-2">A: Not at all. We handle everything and explain it in plain English.</p>
                <Link to="/services" className="text-primary text-sm hover:underline inline-flex items-center gap-1">
                  See how it works <ArrowRight className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-16">
            <Button asChild variant="outline" size="lg">
              <Link to="/services#faq">
                View All FAQs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Location + Response Times Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Location Card */}
            <Card className="border border-border/60">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-secondary">Location</h3>
                </div>
                <p className="font-medium text-secondary mb-2">Based in Stratford, London (E15 3JZ)</p>
                <p className="text-muted-foreground text-sm mb-3">
                  Near Abbey Road DLR — serving businesses nationwide and English-speaking clients worldwide.
                </p>
                <p className="text-muted-foreground text-xs italic mb-4">
                  Remote-first business – all meetings via video call unless otherwise arranged.
                </p>
                {/* Google Maps Embed */}
                <div className="rounded-lg overflow-hidden border border-border/40">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.6395!2d0.0035!3d51.5315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7c3e9f8c8c9%3A0x1234567890!2sAbbey%20Road%2C%20London%20E15!5e0!3m2!1sen!2suk!4v1234567890"
                    width="100%"
                    height="150"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="X15 Digital Location"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Response Times Card */}
            <Card className="border border-border/60">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-secondary">Response Times & Process</h3>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-secondary">Monday–Friday:</span>
                    <span className="text-muted-foreground">Within 2–4 hours</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-secondary">Weekends:</span>
                    <span className="text-muted-foreground">Within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-secondary">Bank Holidays:</span>
                    <span className="text-muted-foreground">Within 48 hours</span>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 mb-5">
                  <p className="text-green-700 text-sm font-medium flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp: Instant during business hours (9am–6pm GMT)
                  </p>
                </div>

                <p className="font-medium text-secondary text-sm mb-3">What happens after you contact us:</p>
                <div className="space-y-3">
                  {[
                    { num: "1", title: "We review your requirements", desc: "Usually within 2 hours on weekdays" },
                    { num: "2", title: "You get a detailed quote + timeline", desc: "Transparent pricing, no hidden costs" },
                    { num: "3", title: "Quick call to clarify any questions", desc: "Optional – only if you need it" },
                    { num: "4", title: "Project starts immediately upon approval", desc: "No delays, no bureaucracy" },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0">
                        {step.num}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-secondary">{step.title}</p>
                        <p className="text-xs text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-5 pt-4 border-t border-border/40 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-primary" /> No obligation quotes
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-primary" /> No sales pressure
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ====================================================================
          STILL DECIDING SECTION
      ==================================================================== */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-2xl mx-auto text-center fade-in-section">
          <h2 className="text-xl md:text-2xl font-bold text-secondary mb-3">Still deciding?</h2>
          <p className="text-muted-foreground mb-6">
            No stress. Browse our packages or take a quick quiz to see what fits your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                View Packages <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" onClick={openQuiz} className="bg-primary hover:bg-primary/90">
              Take 30s Quiz <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />

      {/* ====================================================================
          MODALS (Preserved for future use - Calendly + Quiz)
      ==================================================================== */}
      
      {/* Calendly Modal */}
      {isCalendlyOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Book a free 30-minute strategy call"
          onClick={handleOverlayClick}
        >
          <div className="relative w-full max-w-3xl rounded-2xl bg-background shadow-2xl border border-border/60 h-[80vh] flex flex-col">
            <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-border/60">
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-secondary">
                  Book a Free 30-Minute Call
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  We'll review your goals and advise the best approach — no pressure.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsCalendlyOpen(false)}
                className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/70 text-muted-foreground hover:bg-muted hover:text-foreground"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1">
              <iframe
                src="https://calendly.com/x15builds/30min?hide_gdpr_banner=1"
                className="w-full h-full border-0"
                loading="lazy"
                title="Book a 30-minute strategy call with X15 Digital"
              />
            </div>
          </div>
        </div>
      )}

      {/* Quiz Modal */}
      {isQuizOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Service recommendation quiz"
          onClick={handleOverlayClick}
        >
          <div className="relative w-full max-w-lg rounded-2xl bg-background shadow-2xl border border-border/60 p-6 md:p-8 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setIsQuizOpen(false)}
              className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/70 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Close quiz"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.16em] text-primary mb-2 font-semibold">30-Second Quiz</p>
              <h2 className="text-xl md:text-2xl font-bold text-secondary">
                {quizResult ? quizResult.title : "What do you need help with?"}
              </h2>
            </div>

            {!quizResult ? (
              <form onSubmit={handleQuizSubmit} className="space-y-6">
                {/* Goal Question */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-secondary">1. What's your primary goal?</p>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      { value: "website", label: "I need a website", icon: Globe },
                      { value: "automation", label: "I need AI automation", icon: Bot },
                      { value: "both", label: "Both website + AI", icon: Zap },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                          goal === option.value
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="goal"
                          value={option.value}
                          checked={goal === option.value}
                          onChange={(e) => setGoal(e.target.value as Goal)}
                          className="sr-only"
                        />
                        <option.icon className={`h-5 w-5 ${goal === option.value ? "text-primary" : "text-muted-foreground"}`} />
                        <span className="text-sm font-medium">{option.label}</span>
                        {goal === option.value && <CheckCircle2 className="h-4 w-4 text-primary ml-auto" />}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Budget Question */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-secondary">2. What's your budget?</p>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      { value: "low", label: "Under £500" },
                      { value: "mid", label: "£500 – £1,500" },
                      { value: "high", label: "£1,500+" },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                          budget === option.value
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="budget"
                          value={option.value}
                          checked={budget === option.value}
                          onChange={(e) => setBudget(e.target.value as Budget)}
                          className="sr-only"
                        />
                        <span className="text-sm font-medium">{option.label}</span>
                        {budget === option.value && <CheckCircle2 className="h-4 w-4 text-primary ml-auto" />}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Urgency Question */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-secondary">3. How soon do you need it?</p>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      { value: "asap", label: "ASAP (this week)" },
                      { value: "soon", label: "Within 2–4 weeks" },
                      { value: "exploring", label: "Just exploring" },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                          urgency === option.value
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="urgency"
                          value={option.value}
                          checked={urgency === option.value}
                          onChange={(e) => setUrgency(e.target.value as Urgency)}
                          className="sr-only"
                        />
                        <span className="text-sm font-medium">{option.label}</span>
                        {urgency === option.value && <CheckCircle2 className="h-4 w-4 text-primary ml-auto" />}
                      </label>
                    ))}
                  </div>
                </div>

                {quizError && (
                  <p className="text-sm text-red-500">{quizError}</p>
                )}

                <Button type="submit" className="w-full">
                  See My Recommendation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            ) : (
              <div className="space-y-6">
                <p className="text-muted-foreground">{quizResult.description}</p>
                <div className="flex flex-col gap-3">
                  <Button asChild className="w-full">
                    <Link to={quizResult.link}>
                      {quizResult.linkLabel} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => setIsQuizOpen(false)}>
                    Close
                  </Button>
                  <Button variant="ghost" className="w-full text-muted-foreground" onClick={resetQuiz}>
                    Retake Quiz
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Inquiry Modal - preserved but currently replaced by inline form */}
      {isInquiryOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Project inquiry form"
          onClick={handleOverlayClick}
        >
          <div className="relative w-full max-w-xl rounded-2xl bg-background shadow-2xl border border-border/60 p-6">
            <button
              type="button"
              onClick={() => setIsInquiryOpen(false)}
              className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/70 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <p className="text-center text-muted-foreground">Form submitted successfully. Modal preserved for backend integration.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
