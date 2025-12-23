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
  Bot,
  Zap,
  CheckCircle2,
  Phone,
  ChevronDown,
  FileText,
  ListChecks,
  ShieldCheck,
  Calendar,
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

  // ✅ FAQ state (requested)
  const [openFaq, setOpenFaq] = useState<string | null>(null);

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
          HERO
      ==================================================================== */}
      <section className="pt-36 pb-12 md:pt-44 md:pb-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-3xl mx-auto text-center fade-in-section">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-5 leading-tight">
            Let's Talk About Your Project
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-3 leading-relaxed">
            Tell us what you need and we'll send you a clear quote — no sales pitch.
          </p>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            We reply within 4 hours (usually faster)
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
              onClick={() => {
                const el = document.getElementById("contact-form");
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button size="lg" variant="outline" onClick={() => setIsCalendlyOpen(true)} className="shadow-sm">
              <Calendar className="h-4 w-4 mr-2" />
              Book a Free Call
            </Button>
          </div>
        </div>
      </section>

      <BreadcrumbNav />

      {/* ====================================================================
          PRIMARY GRID: Form + Sidebar
      ==================================================================== */}
      <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start fade-in-section">
          {/* LEFT: FORM + NEW "What you'll receive" (fills empty space under form) */}
          <div className="lg:col-span-7 space-y-6" id="contact-form">
            {/* FORM (unchanged) */}
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="mb-6">
                  <h2 className="text-xl md:text-2xl font-semibold text-secondary">Request a Quote</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Share a few details and we’ll reply with pricing + timeline.
                  </p>
                </div>

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

                  {/* Phone + Project Type */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-sm font-medium text-secondary">
                        Phone (optional)
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        inputMode="tel"
                        autoComplete="tel"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                        placeholder="+44 7xxx xxx xxx"
                      />
                      <p className="text-xs text-muted-foreground">
                        Useful if you prefer a quick call to clarify requirements.
                      </p>
                    </div>

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
                      <p className="text-xs text-muted-foreground">
                        Not sure? Use the quiz below — it recommends the right path.
                      </p>
                    </div>
                  </div>

                  {/* Budget + Deadline */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="budgetRange" className="text-sm font-medium text-secondary">
                        Budget range (optional)
                      </label>
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                        defaultValue=""
                      >
                        <option value="">Select budget range</option>
                        <option value="under-500">Under £500</option>
                        <option value="500-1500">£500 – £1,500</option>
                        <option value="1500-plus">£1,500+</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="deadline" className="text-sm font-medium text-secondary">
                        Desired deadline (optional)
                      </label>
                      <input
                        id="deadline"
                        name="deadline"
                        type="date"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-secondary">
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                      placeholder="What are you trying to achieve? Any examples you like? Pages needed? Integrations (booking, payments, CRM)?"
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

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
                    <p className="text-xs text-muted-foreground text-center">
                      No spam. No pressure. Just a clear quote and honest advice.
                    </p>
                    <span className="hidden sm:inline text-xs text-muted-foreground">•</span>
                    <button
                      type="button"
                      onClick={openQuiz}
                      className="text-xs text-primary hover:underline font-medium"
                    >
                      Take the 30-second quiz
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* NEW SECTION (fills the empty white space under the form) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* What we need from you */}
              <Card className="border border-border/70 shadow-sm">
                <CardContent className="p-6 md:p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/15 flex items-center justify-center">
                      <ListChecks className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary">What we need from you</h3>
                      <p className="text-sm text-muted-foreground">So we can quote fast & accurately.</p>
                    </div>
                  </div>

                  <ul className="space-y-3 text-sm">
                    {[
                      { title: "Goal + target audience", desc: "What success looks like (leads, bookings, sales)." },
                      { title: "Example sites you like", desc: "2–3 links so we match your taste quickly." },
                      { title: "Pages needed", desc: "Home, Services, Pricing, Contact, etc." },
                      { title: "Any integrations", desc: "Calendly, forms, payments, CRM, WhatsApp." },
                    ].map((x) => (
                      <li key={x.title} className="flex gap-3">
                        <div className="mt-0.5 h-5 w-5 rounded-full bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0">
                          <Check className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-secondary">{x.title}</p>
                          <p className="text-muted-foreground">{x.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 rounded-xl border border-border/70 bg-muted/30 p-4">
                    <p className="text-sm font-semibold text-secondary">Tip</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      If you’re unsure, send what you have — we’ll ask only what’s missing.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* What you get + timeline */}
              <Card className="border border-border/70 shadow-sm">
                <CardContent className="p-6 md:p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/15 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary">What you’ll receive</h3>
                      <p className="text-sm text-muted-foreground">Clear, written, no-surprises quote.</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    {[
                      { title: "Scope summary", desc: "So both sides agree on what’s included." },
                      { title: "Timeline + milestones", desc: "You’ll know exactly what happens when." },
                      { title: "Transparent pricing", desc: "No hidden add-ons or vague “from” pricing." },
                    ].map((x) => (
                      <div key={x.title} className="flex gap-3">
                        <div className="mt-0.5 h-5 w-5 rounded-full bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0">
                          <Check className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-secondary">{x.title}</p>
                          <p className="text-muted-foreground">{x.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                    <p className="text-sm font-semibold text-secondary flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-emerald-700" />
                      Typical timelines
                    </p>
                    <div className="mt-3 space-y-2 text-sm">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-secondary font-medium">Landing pages</span>
                        <span className="text-muted-foreground">1–3 days</span>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-secondary font-medium">Small business site</span>
                        <span className="text-muted-foreground">3–7 days</span>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-secondary font-medium">AI automation</span>
                        <span className="text-muted-foreground">3–10 days</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="mt-5 w-full text-sm py-3 h-auto whitespace-normal leading-snug" 
                    onClick={() => setIsCalendlyOpen(true)}
                  >
                    <span className="flex items-center justify-center gap-2 flex-wrap">
                      <span>Prefer to explain it on a call?</span>
                      <span className="font-semibold flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Book free call
                      </span>
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* RIGHT SIDEBAR (kept): Reach + Response/Process + (NEW) Quick Brief card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct reach card */}
            <Card className="border border-border/70 shadow-sm">
              <CardContent className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-secondary">Reach us directly</h3>
                    <p className="text-sm text-muted-foreground mt-1">Choose the fastest channel for you.</p>
                  </div>
                  <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Fast replies</span>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {/* WhatsApp */}
                  <Button asChild size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm">
                    <a
                      href="https://wa.me/447424062513?text=Hi%20X15%20Digital%2C%20I%27m%20interested%20in%20your%20services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp (Fastest)
                      <ArrowRight className="ml-1 h-4 w-4 opacity-90" />
                    </a>
                  </Button>

                  {/* Email (copy) */}
                  <Button variant="outline" size="lg" onClick={copyEmail} className="w-full justify-between">
                    <span className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm">info@x15digital.co.uk</span>
                    </span>
                    <span className="flex items-center gap-2 text-xs text-muted-foreground">
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 text-emerald-600" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" /> Copy
                        </>
                      )}
                    </span>
                  </Button>

                  {/* Phone */}
                  <Button asChild variant="outline" size="lg" className="w-full justify-between">
                    <a href="tel:+447123456789">
                      <span className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm">07123 456789</span>
                      </span>
                      <span className="text-xs text-muted-foreground">Call</span>
                    </a>
                  </Button>

                  <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-4">
                    <p className="text-sm font-medium text-secondary mb-1">Prefer to explain it on a call?</p>
                    <p className="text-sm text-muted-foreground">
                      Book a free 15-min call and we'll discuss your project together.
                    </p>
                    <div className="mt-3 flex flex-col sm:flex-row gap-2">
                      <Button variant="outline" className="flex-1" onClick={openQuiz}>
                        Take 30-sec quiz
                      </Button>
                      <Button className="flex-1" onClick={() => setIsCalendlyOpen(true)}>
                        <Phone className="h-4 w-4 mr-2" />
                        Book free call
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response times + mini process card */}
            <Card className="border border-border/70 shadow-sm">
              <CardContent className="p-6 md:p-7">
                <h3 className="text-lg font-semibold text-secondary">Response times & process</h3>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-secondary font-medium">Mon–Fri:</span>
                    <span className="text-muted-foreground">Within 2–4 hours</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-secondary font-medium">Weekends:</span>
                    <span className="text-muted-foreground">Within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-secondary font-medium">Bank holidays:</span>
                    <span className="text-muted-foreground">Within 48 hours</span>
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                  <p className="text-sm font-semibold text-secondary flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-emerald-700" />
                    WhatsApp: instant during business hours (9am–6pm GMT)
                  </p>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-secondary mb-3">What happens next</p>
                  <div className="space-y-3">
                    {[
                      { n: "1", title: "We review your requirements", sub: "Usually within 2 hours on weekdays" },
                      {
                        n: "2",
                        title: "You get a detailed quote + timeline",
                        sub: "Transparent pricing, no hidden costs",
                      },
                      { n: "3", title: "Quick call to clarify (optional)", sub: "Only if you need it" },
                      { n: "4", title: "Project starts upon approval", sub: "No delays, no bureaucracy" },
                    ].map((item) => (
                      <div key={item.n} className="flex gap-3">
                        <div className="h-7 w-7 rounded-full bg-primary/10 border border-primary/15 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                          {item.n}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-secondary">{item.title}</p>
                          <p className="text-xs text-muted-foreground">{item.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" /> No obligation quotes
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" /> No sales pressure
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* ✅ NEW: Send a quick brief (optional) - correctly placed INSIDE sidebar */}
            <Card className="border border-border/70 shadow-sm">
              <CardContent className="p-5 md:p-6">
                <h3 className="text-base font-semibold text-secondary">Send a quick brief (optional)</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Want the fastest quote? Paste this into your message:
                </p>

                <div className="mt-4 rounded-xl border border-border/70 bg-muted/30 p-4">
                  <div className="space-y-2 text-sm">
                    {[
                      "Business type + what you sell",
                      "Main goal (leads, bookings, sales)",
                      "Pages needed + any examples you like",
                      "Any integrations (Calendly, payments, CRM)",
                    ].map((line) => (
                      <div key={line} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{line}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row gap-2">
                  <Button asChild variant="outline" className="w-full">
                    <a href="mailto:info@x15digital.co.uk?subject=Project%20Brief%20(Quick%20Quote)&body=Business%20type%3A%0AWebsite%20goal%3A%0APages%20needed%3A%0AExample%20sites%3A%0AIntegrations%3A%0ABudget%20(optional)%3A%0ATimeline%20(optional)%3A">
                      Email brief <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>

                  <Button asChild className="w-full">
                    <a
                      href="https://wa.me/447424062513?text=Hi%20X15%20Digital%2C%20here%E2%80%99s%20my%20quick%20brief%3A%0A%0ABusiness%20type%3A%0AWebsite%20goal%3A%0APages%20needed%3A%0AExample%20sites%3A%0AIntegrations%3A%0ABudget%20(optional)%3A%0ATimeline%20(optional)%3A"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp brief <MessageCircle className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ====================================================================
          LOCATION (Full-width, balanced spacing)
      ==================================================================== */}
      <section className="pt-10 pb-12 md:pt-12 md:pb-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto fade-in-section">
          <Card className="border border-border/70 shadow-sm">
            <CardContent className="p-6 md:p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/15 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Location</h3>
                  <p className="text-sm text-muted-foreground">Stratford, London (E15)</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Map (bigger) */}
                <div className="lg:col-span-7 overflow-hidden rounded-xl border border-border/70 shadow-sm">
                  <div className="relative w-full h-[260px] md:h-[320px] bg-muted">
                    <iframe
                      title="X15 Digital location map"
                      className="absolute inset-0 w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps?q=Abbey%20Road%20DLR%20London&output=embed"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Near Abbey Road DLR — serving businesses nationwide and English-speaking clients worldwide.
                  </p>
                  <p className="text-sm text-muted-foreground mt-3 italic">
                    Remote-first business — all meetings via video call unless otherwise arranged.
                  </p>

                  <div className="mt-5 space-y-3">
                    <div className="rounded-xl border border-border/70 bg-background p-4">
                      <p className="text-sm font-semibold text-secondary">Best way to reach us</p>
                      <p className="text-sm text-muted-foreground mt-1">WhatsApp is fastest during business hours.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button asChild variant="outline" className="w-full">
                        <a
                          href="https://www.google.com/maps?q=Abbey%20Road%20DLR%20London"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View larger map <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <Button asChild className="w-full">
                        <a
                          href="https://wa.me/447424062513?text=Hi%20X15%20Digital%2C%20I%27d%20like%20to%20discuss%20a%20project"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Message on WhatsApp <MessageCircle className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ====================================================================
          WHY CLIENTS LIKE THIS PROCESS
      ==================================================================== */}
      <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto fade-in-section">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary">Why clients like this process</h2>
            <p className="text-sm md:text-base text-muted-foreground mt-2">
              It’s structured, fast, and doesn’t waste your time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Clear scope before build",
                desc: "We confirm the goal, pages, and key actions so nothing is missed.",
              },
              {
                title: "Conversion-focused structure",
                desc: "We prioritise clarity, trust, and user flow — not random visuals.",
              },
              {
                title: "Simple handover + next steps",
                desc: "You get a clear plan, timeline, and what we need from you.",
              },
            ].map((x) => (
              <Card key={x.title} className="border border-border/70 shadow-sm">
                <CardContent className="p-6 md:p-7">
                  <div className="flex gap-3">
                    <div className="h-9 w-9 rounded-full bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-secondary">{x.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{x.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 max-w-2xl mx-auto">
            <div className="rounded-xl border border-border/70 bg-muted/30 p-5 text-center">
              <p className="text-sm font-semibold text-secondary">Want a recommendation?</p>
              <p className="text-sm text-muted-foreground mt-1">
                If you’re unsure whether you need a website, AI automation, or both — take the quiz.
              </p>
              <Button variant="outline" className="mt-4" onClick={openQuiz}>
                Take the 30-second quiz <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          FAQ - Clean Custom Accordion
      ==================================================================== */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto fade-in-section">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-2 text-center">Common Questions</h2>
          <p className="text-sm md:text-base text-muted-foreground text-center mb-8">
            Quick answers before you message — keeps things fast and clear.
          </p>

          <div className="space-y-2">
            {[
              {
                id: "timeline",
                question: "How long will my project take?",
                answer:
                  "Most websites: 1–7 days. AI automation: 3–10 days. We'll give you an exact timeline in your quote.",
              },
              {
                id: "revisions",
                question: "Do you offer revisions?",
                answer:
                  "Yes. We iterate until it's right. We'll confirm revision scope in the quote so expectations are clear.",
              },
              {
                id: "technical",
                question: "Do I need technical knowledge?",
                answer: "Not at all. We handle everything and explain it in plain English. You focus on your business.",
              },
              {
                id: "pricing",
                question: "How do pricing and quotes work?",
                answer: "You'll receive a clear quote with scope + timeline. No pressure — decide when you're ready.",
              },
              {
                id: "location",
                question: "Where are you based?",
                answer:
                  "Stratford, London (E15). We work remotely with clients across the UK and worldwide. All meetings via video call.",
              },
            ].map((faq) => (
              <div key={faq.id} className="border border-border rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/50 transition-colors"
                  aria-expanded={openFaq === faq.id}
                >
                  <span className="text-base font-medium text-secondary pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                      openFaq === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === faq.id && (
                  <div className="px-5 pb-4 pt-1">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center mt-6">
            <Link to="/services#faq" className="text-sm text-primary hover:underline font-medium">
              View all FAQs <ArrowRight className="inline h-3.5 w-3.5" />
            </Link>
          </p>
        </div>
      </section>

      {/* ====================================================================
          STILL DECIDING CTA
      ==================================================================== */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background border-t">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <h3 className="text-2xl font-bold text-secondary mb-3">Still deciding?</h3>
          <p className="text-muted-foreground mb-6">
            No stress. Browse our packages or take a quick quiz to see what fits your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                View Packages <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button asChild size="lg">
              <Link to="/start">
                Take 30s Quiz <Zap className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />

      {/* ====================================================================
          MODALS (Calendly + Quiz)
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
                <h2 className="text-lg md:text-xl font-semibold text-secondary">Book a Free 30-Minute Call</h2>
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
                        <option.icon
                          className={`h-5 w-5 ${goal === option.value ? "text-primary" : "text-muted-foreground"}`}
                        />
                        <span className="text-sm font-medium">{option.label}</span>
                        {goal === option.value && <CheckCircle2 className="h-4 w-4 text-primary ml-auto" />}
                      </label>
                    ))}
                  </div>
                </div>

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

                {quizError && <p className="text-sm text-red-500">{quizError}</p>}

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
            <p className="text-center text-muted-foreground">
              Form submitted successfully. Modal preserved for backend integration.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
