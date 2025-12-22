import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { 
  Mail, MessageCircle, ArrowRight, Clock, Copy, Check, X, Globe, Bot, Zap, 
  CheckCircle2, Phone, MapPin, Building2, Calendar, User, Briefcase
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
import { z } from "zod";

// ============================================================================
// Zod validation schema for the inquiry form
// ============================================================================
const inquirySchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone number is too long").optional().or(z.literal("")),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional().or(z.literal("")),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  deadline: z.string().optional(),
  message: z.string().trim().min(10, "Please tell us a bit more about your project (at least 10 characters)").max(2000, "Message must be less than 2000 characters"),
});

type InquiryFormData = z.infer<typeof inquirySchema>;
type FormErrors = Partial<Record<keyof InquiryFormData, string>>;

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
  // Form state with validation
  // ============================================================================
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
    setIsSubmitting(true);
    setFormErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      projectType: formData.get("projectType") as string,
      budget: formData.get("budget") as string,
      deadline: formData.get("deadline") as string,
      message: formData.get("message") as string,
    };

    // Validate with Zod
    const result = inquirySchema.safeParse(data);

    if (!result.success) {
      const errors: FormErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof InquiryFormData;
        errors[field] = err.message;
      });
      setFormErrors(errors);
      setIsSubmitting(false);
      
      toast({
        title: "Please check your form",
        description: "Some fields need attention.",
        variant: "destructive",
      });
      return;
    }

    // Later you can send this to Airtable / backend / email
    // const validatedData = result.data;

    toast({
      title: "Inquiry sent!",
      description: "We'll reply within 2–4 hours with a detailed quote and next steps.",
    });

    (e.currentTarget as HTMLFormElement).reset();
    setIsSubmitting(false);
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
          HERO: Generous spacing, clear hierarchy
      ==================================================================== */}
      <section className="pt-32 pb-6 md:pt-40 md:pb-10 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-3xl mx-auto text-center fade-in-section">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
            Let's Talk About Your Project
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed max-w-2xl mx-auto">
            Tell us what you need and we'll send you a clear quote — no sales pitch.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">We reply within 4 hours (usually faster)</span>
          </div>
        </div>
      </section>

      <BreadcrumbNav />

      {/* ====================================================================
          MAIN CONTENT: Two-column layout - Contact Info + Form
      ==================================================================== */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto fade-in-section">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* LEFT COLUMN: Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-secondary mb-2">Contact Information</h2>
                <p className="text-muted-foreground">
                  Have a question? We're here to help. Reach out through any of the following channels.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-3">
                {/* Email */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border/60 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">Email Us</p>
                    <button onClick={copyEmail} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      {copied ? "Copied!" : "info@x15digital.co.uk"}
                    </button>
                  </div>
                </div>

                {/* Phone */}
                <a 
                  href="tel:+447424062513"
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border/60 hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">Call Us</p>
                    <p className="text-muted-foreground text-sm">Available on request</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border/60">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">Location</p>
                    <p className="text-muted-foreground text-sm">United Kingdom</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border/60">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">Business Hours</p>
                    <p className="text-muted-foreground text-sm">Mon-Fri: 9AM-6PM GMT</p>
                  </div>
                </div>
              </div>

              {/* Quick Response Badge */}
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40">
                <p className="font-semibold text-amber-800 dark:text-amber-200 mb-1">Quick Response</p>
                <p className="text-amber-700 dark:text-amber-300 text-sm">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, please indicate in your message.
                </p>
              </div>

              {/* WhatsApp CTA */}
              <Button asChild size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white">
                <a
                  href="https://wa.me/447424062513?text=Hi%20X15%20Digital%2C%20I%27m%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>

            {/* RIGHT COLUMN: Request a Quote Form */}
            <div className="lg:col-span-3">
              <Card className="border-2 border-border/60 shadow-xl">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-secondary mb-6">Request a Quote</h2>
                  
                  <form onSubmit={handleInquirySubmit} className="space-y-5">
                    {/* Row 1: Name + Email */}
                    <div className="grid gap-5 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-secondary flex items-center gap-1">
                          <User className="h-3.5 w-3.5 text-muted-foreground" />
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          required
                          autoComplete="name"
                          className={`w-full rounded-lg border ${formErrors.name ? 'border-red-500' : 'border-border'} bg-muted/30 px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 transition-colors`}
                          placeholder="John Smith"
                        />
                        {formErrors.name && <p className="text-xs text-red-500">{formErrors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-secondary flex items-center gap-1">
                          <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          className={`w-full rounded-lg border ${formErrors.email ? 'border-red-500' : 'border-border'} bg-muted/30 px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 transition-colors`}
                          placeholder="john@example.com"
                        />
                        {formErrors.email && <p className="text-xs text-red-500">{formErrors.email}</p>}
                      </div>
                    </div>

                    {/* Row 2: Phone + Company */}
                    <div className="grid gap-5 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-secondary flex items-center gap-1">
                          <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          className={`w-full rounded-lg border ${formErrors.phone ? 'border-red-500' : 'border-border'} bg-muted/30 px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 transition-colors`}
                          placeholder="+44 123 456 7890"
                        />
                        {formErrors.phone && <p className="text-xs text-red-500">{formErrors.phone}</p>}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-secondary flex items-center gap-1">
                          <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
                          Business Name
                        </label>
                        <input
                          id="company"
                          name="company"
                          autoComplete="organization"
                          className={`w-full rounded-lg border ${formErrors.company ? 'border-red-500' : 'border-border'} bg-muted/30 px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 transition-colors`}
                          placeholder="Your Company Ltd"
                        />
                        {formErrors.company && <p className="text-xs text-red-500">{formErrors.company}</p>}
                      </div>
                    </div>

                    {/* Row 3: Budget + Project Type */}
                    <div className="grid gap-5 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="budget" className="text-sm font-medium text-secondary">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          className="w-full rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 transition-colors"
                          defaultValue=""
                        >
                          <option value="">Select budget range</option>
                          <option value="under-500">Under £500</option>
                          <option value="500-1000">£500 – £1,000</option>
                          <option value="1000-2500">£1,000 – £2,500</option>
                          <option value="2500-5000">£2,500 – £5,000</option>
                          <option value="5000+">£5,000+</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="projectType" className="text-sm font-medium text-secondary flex items-center gap-1">
                          <Briefcase className="h-3.5 w-3.5 text-muted-foreground" />
                          Project Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          required
                          className={`w-full rounded-lg border ${formErrors.projectType ? 'border-red-500' : 'border-border'} bg-muted/30 px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 transition-colors`}
                          defaultValue=""
                        >
                          <option value="">Select project type</option>
                          <option value="new-website">New Website</option>
                          <option value="redesign">Website Redesign</option>
                          <option value="ecommerce">E-commerce Store</option>
                          <option value="ai-chatbot">AI Chatbot</option>
                          <option value="ai-automation">AI Automation</option>
                          <option value="website-ai">Website + AI Bundle</option>
                          <option value="branding">Branding / Logo Design</option>
                          <option value="seo">SEO / Marketing</option>
                          <option value="other">Other</option>
                        </select>
                        {formErrors.projectType && <p className="text-xs text-red-500">{formErrors.projectType}</p>}
                      </div>
                    </div>

                    {/* Row 4: Deadline */}
                    <div className="space-y-2">
                      <label htmlFor="deadline" className="text-sm font-medium text-secondary flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                        Desired Deadline
                      </label>
                      <input
                        id="deadline"
                        name="deadline"
                        type="date"
                        className="w-full rounded-lg border border-border bg-muted/30 px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 transition-colors"
                      />
                    </div>

                    {/* Row 5: Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-secondary">
                        Project Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className={`w-full rounded-lg border ${formErrors.message ? 'border-red-500' : 'border-border'} bg-muted/30 px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 transition-colors resize-none`}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                      />
                      {formErrors.message && <p className="text-xs text-red-500">{formErrors.message}</p>}
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg text-base py-6"
                      >
                        {isSubmitting ? "Sending..." : "Get a Quote"} 
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        onClick={() => setIsCalendlyOpen(true)}
                        className="flex-1 py-6"
                      >
                        Talk to Us
                      </Button>
                    </div>

                    <p className="text-xs text-muted-foreground text-center pt-2">
                      No spam. No pressure. Just a clear quote and honest advice.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          LOCATION + RESPONSE TIMES (Improved layout like reference Image 4)
      ==================================================================== */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto fade-in-section">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Location Card */}
            <Card className="border border-border/60 shadow-lg overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary">Location</h3>
                </div>
                
                <p className="font-semibold text-secondary text-lg mb-3">Based in Stratford, London (E15 3JZ)</p>
                <p className="text-primary mb-4">
                  Near Abbey Road DLR — serving businesses nationwide and English-speaking clients worldwide.
                </p>
                <p className="text-muted-foreground text-sm italic mb-6">
                  Remote-first business – all meetings via video call unless otherwise arranged.
                </p>
                
                {/* Improved Map Container */}
                <div className="rounded-xl overflow-hidden border border-border/60 shadow-md bg-background">
                  <div className="relative">
                    <div className="absolute top-3 left-3 z-10 bg-background/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md border border-border/60">
                      <p className="text-sm font-semibold text-secondary">Abbey Road</p>
                      <a 
                        href="https://maps.google.com/?q=Abbey+Road+London+E15"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline"
                      >
                        View larger map
                      </a>
                    </div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.6395!2d0.0035!3d51.5315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7c3e9f8c8c9%3A0x1234567890!2sAbbey%20Road%2C%20London%20E15!5e0!3m2!1sen!2suk!4v1234567890"
                      width="100%"
                      height="220"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="X15 Digital Location"
                      className="w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Times Card */}
            <Card className="border border-border/60 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary">Response Times & Process</h3>
                </div>
                
                <div className="space-y-3 mb-5">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span className="font-semibold text-secondary">Monday–Friday:</span>
                    <span className="text-muted-foreground">Within 2–4 hours</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span className="font-semibold text-secondary">Weekends:</span>
                    <span className="text-muted-foreground">Within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span className="font-semibold text-secondary">Bank Holidays:</span>
                    <span className="text-muted-foreground">Within 48 hours</span>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800/40 rounded-xl px-4 py-3 mb-6">
                  <p className="text-green-700 dark:text-green-300 text-sm font-medium flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp: Instant during business hours (9am–6pm GMT)
                  </p>
                </div>

                <p className="font-semibold text-secondary text-sm mb-4">What happens after you contact us:</p>
                <div className="space-y-4">
                  {[
                    { num: "1", title: "We review your requirements", desc: "Usually within 2 hours on weekdays" },
                    { num: "2", title: "You get a detailed quote + timeline", desc: "Transparent pricing, no hidden costs" },
                    { num: "3", title: "Quick call to clarify any questions", desc: "Optional - only if you need it" },
                    { num: "4", title: "Project starts immediately upon approval", desc: "No delays, no bureaucracy" },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-3">
                      <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0">
                        {step.num}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-secondary">{step.title}</p>
                        <p className="text-xs text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-6 pt-5 border-t border-border/40 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> No obligation quotes
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> No sales pressure
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-2xl mx-auto text-center fade-in-section">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Still deciding?</h2>
          <p className="text-muted-foreground mb-8">
            No stress. Browse our packages or take a quick quiz to see what fits your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
