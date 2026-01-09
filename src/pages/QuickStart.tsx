import type { FormEvent, MouseEvent as ReactMouseEvent, KeyboardEvent as ReactKeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Zap, CheckCircle2, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActionMenu from "@/components/FloatingActionMenu";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

const QuickStart = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isQuickStartOpen, setIsQuickStartOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  // Close modals with Escape
  useEffect(() => {
    if (!isQuickStartOpen && !isCalendlyOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsQuickStartOpen(false);
        setIsCalendlyOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isQuickStartOpen, isCalendlyOpen]);

  const handleQuickStartSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: send to backend / Airtable / Make / Zapier
    setTimeout(() => {
      setIsSubmitting(false);
      setIsQuickStartOpen(false);
      // plug toast here if you want
    }, 800);
  };

  const handleOverlayClick = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsQuickStartOpen(false);
      setIsCalendlyOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Quick Start Guide | Get Your Quote Fast | L&D Digital"
        description="Get started in 30 seconds. Tell us what you need and receive a clear quote within 4 hours. Fast, no-pressure web development and AI automation quotes."
        keywords="quick quote website, fast web development UK, get website quote, AI automation quote"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/quick-start"
      />
      <ScrollProgressBar />
      <Navigation />
      
      {/* Breadcrumb below navbar - extra padding for top banner */}
      <div className="pt-32 md:pt-36">
        <BreadcrumbNav />
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-3xl mx-auto text-center fade-in-section">
          <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-6">Let&apos;s Get Started Quickly</h1>
          <p className="text-xl text-muted-foreground mb-4">
            Tell us what you need in 30 seconds. We&apos;ll reply within 4 hours with a clear quote and next steps.
          </p>
          <p className="text-lg text-muted-foreground flex items-center justify-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Average response time: 2–3 hours
          </p>
        </div>
      </section>

      {/* Quick Start Form CTA */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-3xl mx-auto fade-in-section">
          <Card>
            <CardContent className="pt-8">
              <p className="text-center text-muted-foreground mb-4">
                This is the fast track for straightforward projects.
              </p>
              <p className="text-center text-sm text-muted-foreground mb-6">
                For complex or enterprise projects, use our{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  detailed inquiry form
                </Link>{" "}
                instead.
              </p>

              <Button size="lg" className="w-full mb-3" type="button" onClick={() => setIsQuickStartOpen(true)}>
                <Zap className="mr-2 h-5 w-5" />
                Start Your Project Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Prefer to talk it through?{" "}
                <button
                  type="button"
                  onClick={() => setIsCalendlyOpen(true)}
                  className="text-primary font-medium hover:underline underline-offset-2"
                >
                  Book a free 30-minute strategy call
                </button>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Below Form Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <p className="text-muted-foreground mb-6 flex items-center justify-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            Not ready yet?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline">
              <Link to="/services">
                Browse all packages <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://wa.me/447356260648?text=Hi%2C%20I%20have%20a%20quick%20question%20about"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Talk to us on WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link to="/services#faq">Read FAQs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
            What Happens After You Submit?
          </h2>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Within 1 hour",
                description: "We review your requirements and check feasibility.",
              },
              {
                step: "2",
                title: "Within 4 hours (usually 2–3)",
                description:
                  "You receive a detailed quote with: exact price breakdown, delivery timeline, what's included, and next steps.",
              },
              {
                step: "3",
                title: "Within 24 hours (if you approve)",
                description: "We start your project and send you login details for our project tracker.",
              },
              {
                step: "4",
                title: "Within 1–14 days (depending on package)",
                description: "Your website or AI automation is live and working.",
              },
            ].map((item) => (
              <Card key={item.step} className="hover-lift">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-secondary mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg font-semibold text-secondary mb-2">No hidden fees. No surprises. No BS.</p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              {["Transparent pricing", "Fast delivery", "Direct communication", "No long-term contracts"].map((item, i) => (
                <span key={i} className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Modal */}
      {isQuickStartOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center sm:items-center bg-black/60 backdrop-blur-sm px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quick-start-title"
          onClick={handleOverlayClick}
        >
          <div className="w-full max-w-lg rounded-2xl bg-background shadow-2xl border border-border relative max-h-[90vh] flex flex-col">
            {/* Close button */}
            <button
              type="button"
              aria-label="Close quick start form"
              className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-background/80 hover:bg-muted transition"
              onClick={() => setIsQuickStartOpen(false)}
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>

            {/* Scrollable content */}
            <div className="p-6 sm:p-7 overflow-y-auto">
              <h3
                id="quick-start-title"
                className="text-xl sm:text-2xl font-semibold text-secondary mb-2 flex items-center gap-2"
              >
                <Zap className="h-5 w-5 text-primary" />
                Quick Project Snapshot
              </h3>
              <p className="text-sm text-muted-foreground mb-5">
                Give us the basics in under 30 seconds. We&apos;ll respond with a clear quote and timeline within a few
                hours.
              </p>

              <form onSubmit={handleQuickStartSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Your name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
                      placeholder="e.g. Sarah Khan"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
                      placeholder="you@business.co.uk"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">What do you need?</label>
                  <select
                    name="projectType"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
                    defaultValue="website"
                  >
                    <option value="website">New website</option>
                    <option value="redesign">Redesign my current website</option>
                    <option value="ai-automation">AI automation / chatbot</option>
                    <option value="both">Website + AI automation</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                    Rough budget (one-off)
                  </label>
                  <select
                    name="budget"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
                    defaultValue="not-sure"
                  >
                    <option value="under-300">Under £300</option>
                    <option value="300-600">£300 – £600</option>
                    <option value="600-1000">£600 – £1,000</option>
                    <option value="1000-plus">£1,000+</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                    One or two sentences about your project
                  </label>
                  <textarea
                    name="details"
                    rows={3}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
                    placeholder="e.g. Local barber shop in London, need a simple 3-page site and online booking."
                  />
                </div>

                <Button type="submit" className="w-full mt-2" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit & Get My Quote"}
                  {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>

                <p className="mt-2 text-[11px] text-muted-foreground text-center">
                  No spam. No obligations. We&apos;ll only use your details to send your quote and follow-up questions
                  if needed.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

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
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-1">Free strategy call</p>
                <h2 className="text-lg md:text-xl font-semibold text-secondary">
                  Book a 30-minute call with L&D Digital
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">
                  We'll review your goals and advise the best package – no pressure, no obligation.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsCalendlyOpen(false)}
                className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/70 text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                aria-label="Close call booking"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1">
              <iframe
                src="https://calendly.com/x15builds/30min?hide_gdpr_banner=1"
                className="w-full h-full border-0"
                loading="lazy"
                title="Book a 30-minute strategy call with L&D Digital"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingActionMenu />
    </div>
  );
};

export default QuickStart;
