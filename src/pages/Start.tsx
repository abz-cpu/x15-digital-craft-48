import { useEffect, useRef, useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Globe, Bot, Zap, CheckCircle2, ArrowRight, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

type Goal = "website" | "automation" | "both" | "";
type Budget = "low" | "mid" | "high" | "";
type Urgency = "asap" | "soon" | "exploring" | "";

interface QuizResult {
  title: string;
  description: string;
  link: string;
  linkLabel: string;
}

const Start = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [goal, setGoal] = useState<Goal>("");
  const [budget, setBudget] = useState<Budget>("");
  const [urgency, setUrgency] = useState<Urgency>("");
  const [result, setResult] = useState<QuizResult | null>(null);
  const [error, setError] = useState<string | null>(null);

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

  const resetQuiz = () => {
    setGoal("");
    setBudget("");
    setUrgency("");
    setResult(null);
    setError(null);
  };

  const openQuiz = () => {
    resetQuiz();
    setIsQuizOpen(true);
  };

  const closeQuiz = () => {
    setIsQuizOpen(false);
  };

  const handleQuizSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!goal || !budget || !urgency) {
      setError("Please answer all three questions to see your recommendation.");
      return;
    }

    setError(null);

    let quizResult: QuizResult;

    if (goal === "website") {
      quizResult = {
        title: "You’re best suited for a Website Package",
        description:
          budget === "low"
            ? "Based on your answers, our Essential / Starter website package is likely the best fit. It gets you online quickly with a clean, conversion-focused site."
            : "You’re a strong fit for our Business or Premium website packages with more pages, stronger branding, and room to grow.",
        link: "/services#web-packages",
        linkLabel: "View Website Packages",
      };
    } else if (goal === "automation") {
      quizResult = {
        title: "You’re best suited for AI Automation",
        description:
          "Your answers point towards chatbots, voice agents, or workflow automation that can save you time and capture more leads automatically.",
        link: "/services#ai-automation",
        linkLabel: "View AI Automation Options",
      };
    } else {
      quizResult = {
        title: "You’re a great fit for a Website + AI Bundle",
        description:
          "You’ll benefit most from a website that’s built from day one to work with AI – handling leads, FAQs, and bookings automatically.",
        link: "/services#combined-packages",
        linkLabel: "View Bundle Packages",
      };
    }

    setResult(quizResult);
  };

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgressBar />
      <Navigation />
      
      {/* Breadcrumb below navbar */}
      <div className="pt-[88px]">
        <BreadcrumbNav />
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto text-center fade-in-section">
          <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-6">Not Sure Where to Start?</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            We offer two main services. Choose what you need most right now (or both!).
          </p>
          <p className="text-lg text-muted-foreground">No commitment required. Just exploring your options.</p>
        </div>
      </section>

      {/* Service Selector Cards */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto fade-in-section">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Website Card */}
            <Card className="hover-lift">
              <CardHeader className="text-center">
                <Globe className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">I Need a Website</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-center">
                  From simple landing pages to complex web applications.
                </p>
                <div className="mb-6">
                  <p className="font-semibold mb-3">What's included:</p>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Starter sites from £100",
                      "Business sites from £300",
                      "Custom web apps from £1,500",
                      "1–14 day delivery",
                      "Mobile-responsive design",
                      "SEO setup included",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-semibold mb-2">Perfect for:</p>
                  <p className="text-sm text-muted-foreground">New businesses, redesigns, custom platforms</p>
                </div>
                <Button asChild className="w-full">
                  <Link to="/services#web-packages">
                    See Web Packages <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* AI Automation Card */}
            <Card className="hover-lift">
              <CardHeader className="text-center">
                <Bot className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">I Need AI Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-center">
                  Chatbots, voice agents, workflow automation, and more.
                </p>
                <div className="mb-6">
                  <p className="font-semibold mb-3">What's included:</p>
                  <ul className="space-y-2 text-sm">
                    {[
                      "AI chatbot from £50/month",
                      "Voice agent from £100/month",
                      "7+ AI services available",
                      "Setup from £200",
                      "24/7 automated support",
                      "Works with any website",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-semibold mb-2">Perfect for:</p>
                  <p className="text-sm text-muted-foreground">Customer support, lead capture, workflow automation</p>
                </div>
                <Button asChild className="w-full">
                  <Link to="/services#ai-automation">
                    See AI Solutions <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Both Services Card */}
            <Card className="hover-lift border-2 border-primary">
              <CardHeader className="text-center">
                <div className="flex justify-center items-center gap-2 mb-4">
                  <Globe className="h-12 w-12 text-primary" />
                  <span className="text-2xl font-bold text-primary">+</span>
                  <Bot className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl">I Need Both</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-center">
                  Website + AI automation working together seamlessly.
                </p>
                <div className="mb-6">
                  <p className="font-semibold mb-3">What's included:</p>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Combined bundles available",
                      "Save 10–15% vs separate",
                      "Complete digital transformation",
                      "One provider, one point of contact",
                      "Integrated from day one",
                      "Full support for everything",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-semibold mb-2">Perfect for:</p>
                  <p className="text-sm text-muted-foreground">New launches, complete rebrand, digital upgrade</p>
                </div>
                <Button asChild className="w-full">
                  <Link to="/services#combined-packages">
                    See Bundle Packages <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Still Not Sure Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Still Not Sure What You Need?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Take our 30-second quiz and we'll recommend the best solution for your specific situation.
          </p>

          <Button size="lg" className="mb-8 min-w-[230px]" type="button" onClick={openQuiz}>
            <Zap className="mr-2 h-5 w-5" />
            Take the Quiz <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <p className="text-muted-foreground mb-6">Or just talk to us:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg">
              <a
                href="https://wa.me/447424062513?text=Hi%2C%20I%20have%20a%20quick%20question%20about"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* QUIZ MODAL */}
      {isQuizOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-lg rounded-2xl bg-background border border-border shadow-2xl p-6 sm:p-8">
            <button
              type="button"
              onClick={closeQuiz}
              className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground hover:bg-muted"
              aria-label="Close quiz"
            >
              <X className="h-4 w-4" />
            </button>

            <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-2">30-second Project Quiz</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Answer 3 quick questions and we&apos;ll show you the best starting point.
            </p>

            <form onSubmit={handleQuizSubmit} className="space-y-6">
              {/* Q1 */}
              <div className="text-left">
                <p className="text-sm font-semibold mb-2">1. What do you need most right now?</p>
                <div className="grid sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setGoal("website")}
                    className={`rounded-lg border px-3 py-2 text-sm text-left ${
                      goal === "website" ? "border-primary bg-primary/5 text-primary" : "border-border hover:bg-muted"
                    }`}
                  >
                    A website
                  </button>
                  <button
                    type="button"
                    onClick={() => setGoal("automation")}
                    className={`rounded-lg border px-3 py-2 text-sm text-left ${
                      goal === "automation"
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    AI / automation
                  </button>
                  <button
                    type="button"
                    onClick={() => setGoal("both")}
                    className={`rounded-lg border px-3 py-2 text-sm text-left ${
                      goal === "both" ? "border-primary bg-primary/5 text-primary" : "border-border hover:bg-muted"
                    }`}
                  >
                    Both together
                  </button>
                </div>
              </div>

              {/* Q2 */}
              <div className="text-left">
                <p className="text-sm font-semibold mb-2">2. Rough budget range?</p>
                <div className="grid sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setBudget("low")}
                    className={`rounded-lg border px-3 py-2 text-sm text-left ${
                      budget === "low" ? "border-primary bg-primary/5 text-primary" : "border-border hover:bg-muted"
                    }`}
                  >
                    Under £500
                  </button>
                  <button
                    type="button"
                    onClick={() => setBudget("mid")}
                    className={`rounded-lg border px-3 py-2 text-sm text-left ${
                      budget === "mid" ? "border-primary bg-primary/5 text-primary" : "border-border hover:bg-muted"
                    }`}
                  >
                    £500–£1500
                  </button>
                  <button
                    type="button"
                    onClick={() => setBudget("high")}
                    className={`rounded-lg border px-3 py-2 text-sm text-left ${
                      budget === "high" ? "border-primary bg-primary/5 text-primary" : "border-border hover:bg-muted"
                    }`}
                  >
                    £1500+
                  </button>
                </div>
              </div>

              {/* Q3 */}
              <div className="text-left">
                <p className="text-sm font-semibold mb-2">3. How soon do you want this live?</p>
                <div className="grid sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setUrgency("asap")}
                    className={`rounded-lg border px-3 py-2 text-sm text-left ${
                      urgency === "asap" ? "border-primary bg-primary/5 text-primary" : "border-border hover:bg-muted"
                    }`}
                  >
                    Within 1–2 weeks
                  </button>
                  <button
                    type="button"
                    onClick={() => setUrgency("soon")}
                    className={`rounded-lg border px-3 py-2 text-sm text-left ${
                      urgency === "soon" ? "border-primary bg-primary/5 text-primary" : "border-border hover:bg-muted"
                    }`}
                  >
                    This month
                  </button>
                  <button
                    type="button"
                    onClick={() => setUrgency("exploring")}
                    className={`rounded-lg border px-3 py-2 text-sm text-left ${
                      urgency === "exploring"
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    Just exploring
                  </button>
                </div>
              </div>

              {error && <p className="text-sm text-destructive">{error}</p>}

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-2">
                <Button type="submit" className="w-full sm:w-auto">
                  See My Recommendation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-xs text-muted-foreground text-left sm:text-right">
                  No email required. This is just to point you in the right direction.
                </p>
              </div>
            </form>

            {result && (
              <div className="mt-6 border-t pt-4 text-left">
                <h4 className="text-lg font-semibold mb-1">{result.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{result.description}</p>
                <Button asChild size="sm">
                  <Link to={result.link}>{result.linkLabel}</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Start;
