import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MessageSquare,
  Mail,
  Phone,
  CheckCircle2,
  Star,
  Target,
  Inbox,
  TrendingUp,
  Share2,
  Briefcase,
  ChevronDown,
  X,
  Info,
} from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container } from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type HighlightedService = {
  name: string;
  description: string;
  setup: string;
  monthly: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  bullets: string[];
  cta: string;
  trust: string;
};

const highlightedServices: HighlightedService[] = [
  {
    name: "AI Sales Assistant",
    description:
      "Stop chasing cold leads. AI finds qualified prospects, books calls with decision-makers, and follows up automatically — so you only speak to people ready to buy.",
    setup: "£800–2,000 setup",
    monthly: "£200–800/month",
    icon: TrendingUp,
    bullets: [
      "B2B consultants wasting 15+ hours/week on manual outreach",
      "Agencies losing £10k+ deals to faster competitors",
      "Sales teams with 100+ leads but no follow-up system",
    ],
    cta: "Get Sales Assistant Quote",
    trust: "Free consultation • Built around your sales process",
  },
  {
    name: "AI Email Outreach",
    description:
      "Generate 20+ qualified leads per month while you sleep. AI sends personalised outreach, warms up prospects, and books meetings automatically — no spam, no manual work.",
    setup: "£400–1,000 setup",
    monthly: "£100–400/month",
    icon: Mail,
    bullets: [
      "Founders who hate writing cold emails but need 20+ leads/month",
      "Agencies needing consistent pipeline without hiring a £35k/year SDR",
      "Teams whose campaigns die after 1 week because follow-up is manual",
    ],
    cta: "See Outreach Plan",
    trust: "Strategy + setup included • No long-term contract",
  },
  {
    name: "AI Social Media Manager",
    description:
      "Stay visible without the daily grind. AI creates, schedules, and posts engaging content across platforms — plus responds to comments — so your brand grows on autopilot.",
    setup: "£200–600 setup",
    monthly: "£50–150/month",
    icon: Share2,
    bullets: [
      "Business owners posting once a month (if they remember)",
      "Solo founders juggling 4+ social accounts manually",
      "Local shops and gyms losing customers to competitors who post daily",
    ],
    cta: "Get Social Plan",
    trust: "Content calendar + setup • You approve before it goes live",
  },
  {
    name: "AI Admin Assistant",
    description:
      "Reclaim 20+ hours per week. AI handles invoicing, data entry, order processing, and routine admin automatically — so you can focus on growing the business, not paperwork.",
    setup: "£500–1,500 setup",
    monthly: "£150–600/month",
    icon: Briefcase,
    bullets: [
      "Owners spending 5+ hours/week on invoices and admin",
      "Ops teams manually copying data between systems every day",
      "Businesses stuck in admin hell instead of growing revenue",
    ],
    cta: "See How It Works",
    trust: "Process audit included • Usually live in under 14 days",
  },
];

const secondaryServices = [
  {
    name: "LinkedIn Lead Prospecting",
    setup: "£500–900",
    monthly: "£75–200",
    bestFor: "B2B sales teams needing 50+ qualified leads/month",
  },
  {
    name: "AI Invoice & Admin Bot",
    setup: "£350–900",
    monthly: "£50–200",
    bestFor: "Growing businesses drowning in manual invoicing & billing",
  },
  {
    name: "AI Meeting Notes & Transcription",
    setup: "£300–700",
    monthly: "£75–200",
    bestFor: "Remote / hybrid teams with 10+ calls or meetings per week",
  },
  {
    name: "AI Data Insights & Reporting",
    setup: "£200–1,000",
    monthly: "£50–350",
    bestFor: "Teams making decisions without real-time dashboards",
  },
  {
    name: "Workflow / RPA Automation",
    setup: "£1,000+",
    monthly: "£200+",
    bestFor: "Ops teams repeating the same tasks across tools every day",
  },
  {
    name: "AI Recruitment Screening",
    setup: "£200–800",
    monthly: "£50–250",
    bestFor: "HR teams screening 50+ applications per role",
  },
  {
    name: "AI Customer Feedback Analysis",
    setup: "£400–800",
    monthly: "£100–250",
    bestFor: "Service businesses with 100+ reviews or surveys to analyse",
  },
];

// Mobile Sticky CTA Component
const MobileStickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = 500; // Approximate hero height
      const footerOffset = document.body.scrollHeight - window.innerHeight - 400;
      
      setIsVisible(scrollY > heroHeight);
      setIsNearFooter(scrollY > footerOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible || isNearFooter) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-sm border-t border-border p-3 shadow-lg animate-fade-in">
      <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
        <p className="text-sm font-medium text-foreground truncate">
          Ready to add AI?
        </p>
        <Button asChild size="sm" className="shrink-0">
          <Link to="/quick-start">
            Get Started
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

// Exit Intent Popup Component (Desktop Only)
const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hasShown = useRef(false);

  useEffect(() => {
    // Only show on desktop
    if (window.innerWidth < 1024) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown.current) {
        hasShown.current = true;
        setIsOpen(true);
      }
    };

    document.addEventListener("mouseout", handleMouseLeave);
    return () => document.removeEventListener("mouseout", handleMouseLeave);
  }, []);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] hidden lg:flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={() => setIsOpen(false)}
    >
      <div 
        className="relative bg-card rounded-2xl p-8 max-w-md mx-4 shadow-2xl border border-border animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Close popup"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        <div className="text-center">
          <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
            <MessageSquare className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Before you go…</h3>
          <p className="text-muted-foreground mb-6">
            Get a free 5-minute AI strategy plan tailored to your business. 
            No commitment, just clarity on what AI could automate for you.
          </p>
          <Button asChild size="lg" className="w-full mb-3">
            <Link to="/quick-start">
              Get a 5-Minute AI Plan
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:underline"
          >
            No thanks, I'll explore more
          </button>
        </div>
      </div>
    </div>
  );
};

const AiPackage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="AI Automation Solutions UK | AI Chatbots & Virtual Assistants | L&D Digital"
        description="AI automation from £50/month. 24/7 chatbots, inbox assistants, and AI receptionists. Works with any website."
        keywords="AI chatbot for small business UK, AI automation for customer service, how to automate business with AI, affordable AI assistant UK, virtual receptionist AI, AI lead generation"
        canonicalUrl="https://luminousanddeliver.co.uk/ai-package"
      />
      <Navigation darkHero />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
          {/* Subtle gradient overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 92, 246, 0.15), transparent), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(99, 102, 241, 0.1), transparent)",
            }}
          />
          {/* Background image (AI blueprint) */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-no-repeat bg-[center_30%] md:bg-center opacity-25 pointer-events-none"
            style={{ backgroundImage: "url('/ai.png')" }}
          />

          <Container>
            <div className="relative text-center max-w-3xl mx-auto">
              {/* Micro badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full bg-emerald-500/90 backdrop-blur-sm border border-emerald-400/50 shadow-lg shadow-emerald-500/25">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-xs font-bold tracking-wide uppercase text-white">
                  🤖 Live in 48 hours
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
                AI Automation Solutions
              </h1>

              <p className="text-xl text-white mb-3">
                Save 20+ hours every week with AI that answers, books, and follows up 24/7.
              </p>

              <p className="text-lg text-slate-200">Works with any website — yours or ours. No IT team required.</p>

              {/* Urgency micro-copy */}
              <p className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-400/40 text-sm text-amber-200 font-semibold">
                ⏱️ Currently booking AI setups 1–2 weeks in advance
              </p>

              {/* Hero CTAs */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-violet-500 text-white hover:bg-violet-400 font-semibold shadow-[0_8px_30px_rgba(139,92,246,0.3)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.4)] transition-all"
                >
                  <Link to="#ai-solutions">
                    See AI Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-slate-400 text-white bg-white/10 hover:bg-white/20 hover:border-white backdrop-blur-sm transition-all duration-300"
                >
                  <Link to="/contact">
                    Book Free Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Breadcrumb below hero */}
        <BreadcrumbNav />

        {/* Scenario Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <div className="bg-card rounded-2xl p-8 md:p-10 mb-8 text-center max-w-3xl mx-auto shadow-lg border border-border">
              {/* Pain points with icons */}
              <div className="space-y-1.5 mb-4">
                <p className="flex items-center justify-center gap-2 text-muted-foreground text-base leading-tight">
                  <MessageSquare className="h-4 w-4 text-primary" aria-hidden="true" />
                  Your customer texts at 11 PM.
                </p>

                <p className="flex items-center justify-center gap-2 text-muted-foreground text-base leading-tight">
                  <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                  Your phone rings during dinner.
                </p>

                <p className="flex items-center justify-center gap-2 text-muted-foreground text-base leading-tight">
                  <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                  Your inbox has 47 unread emails.
                </p>
              </div>

              {/* Main question */}
              <h2 className="text-xl md:text-2xl font-semibold text-secondary mb-4">
                What if you had a digital assistant that works 24/7?
              </h2>

              {/* Support copy */}
              <p className="text-muted-foreground">
                Already have a website? Add AI automation.
                <br />
                Works with ANY website — yours or ours.
              </p>
            </div>

            {/* Soft transition to next section */}
            <div className="flex justify-center">
              <a
                href="#ai-packages"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#0F766E] transition-colors focus:outline-none focus:underline"
              >
                See AI systems in action
                <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
              </a>
            </div>
          </Container>
        </section>

        {/* MAIN AI SOLUTIONS (3 PRIMARY CARDS) */}
        <section id="ai-solutions" className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <Container>
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                Automate Your Admin. Capture More Leads.
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                AI systems that answer customers, capture leads, and handle admin — while you focus on what you do best.
              </p>
            </div>

            {/* 3 FEATURED SERVICES */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {/* AI WEBSITE CHATBOT — MOST POPULAR */}
              <AnimatedSection staggerIndex={0} animation="fade">
                <Card className="hover-lift h-full border border-primary/30 relative">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Badge */}
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-white px-3 py-1.5 text-[11px] font-bold rounded-full shadow-md flex items-center gap-1.5 uppercase tracking-wide">
                      <Star className="h-3 w-3" aria-hidden="true" />
                      MOST POPULAR
                    </Badge>

                    <div className="mb-4">
                      <div className="inline-flex p-3 rounded-lg bg-primary/10">
                        <MessageSquare className="h-8 w-8 text-primary" aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-2">AI Website Chatbot</h3>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Capture leads while you sleep. AI converts visitors into qualified enquiries by answering
                      questions, booking calls, and collecting details automatically — 24/7.
                    </p>

                    <div className="mb-5 pb-4 border-b border-border">
                      <p className="text-sm text-muted-foreground mb-1">
                        From <span className="font-semibold text-foreground">£50/month</span> (less than £2/day for 24/7
                        coverage)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        One-time setup: <span className="font-semibold">£250–600</span> | Includes up to 1,000
                        interactions/month
                      </p>
                    </div>

                    <div className="mb-6 space-y-2">
                      <h4 className="font-semibold mb-1 text-sm">Perfect For:</h4>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" aria-hidden="true" />
                          <span>Service businesses losing leads to faster competitors</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" aria-hidden="true" />
                          <span>Trades missing £5k+ jobs because no one answers after 5pm</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" aria-hidden="true" />
                          <span>Websites with 100+ visitors but under 5 enquiries</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <Button asChild size="lg" className="w-full focus:ring-2 focus:ring-primary focus:ring-offset-2">
                        <Link to="/contact">
                          See How It Works <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                        </Link>
                      </Button>
                      <p className="text-xs text-muted-foreground text-center mt-2">
                        Setup in 48 hours • No long-term contract
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* AI INBOX ASSISTANT */}
              <AnimatedSection staggerIndex={1} animation="fade">
                <Card className="hover-lift h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <div className="inline-flex p-3 rounded-lg bg-primary/10">
                        <Inbox className="h-8 w-8 text-primary" aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-2">AI Inbox Assistant</h3>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Reclaim 15+ hours per week. AI manages your inbox — replying, sorting, removing spam, and routing
                      urgent enquiries — so you only see what actually matters.
                    </p>

                    <div className="mb-5 pb-4 border-b border-border">
                      <p className="text-sm text-muted-foreground mb-1">
                        From <span className="font-semibold">£50/month</span>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        One-time setup: <span className="font-semibold">£200–500</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Works with email + WhatsApp + website forms.</p>
                    </div>

                    <div className="mb-6 space-y-2">
                      <h4 className="font-semibold mb-1 text-sm">Perfect For:</h4>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" aria-hidden="true" />
                          <span>Business owners spending 2+ hours daily on email</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" aria-hidden="true" />
                          <span>Teams missing leads buried in 100+ daily messages</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" aria-hidden="true" />
                          <span>Businesses needing admin support but not £25k/year staff</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <Button asChild size="lg" className="w-full focus:ring-2 focus:ring-primary focus:ring-offset-2">
                        <Link to="/contact">
                          Get Inbox Quote <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                        </Link>
                      </Button>
                      <p className="text-xs text-muted-foreground text-center mt-2">
                        Free consultation • See it work with your emails
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* AI RECEPTIONIST */}
              <AnimatedSection staggerIndex={2} animation="fade">
                <Card className="hover-lift h-full border border-primary/40 relative">
                  <CardContent className="p-6 flex flex-col h-full">
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0F766E] text-white px-3 py-1.5 text-[11px] font-bold rounded-full shadow-md flex items-center gap-1.5 uppercase tracking-wide">
                      <Target className="h-3 w-3" aria-hidden="true" />
                      BEST FOR LOCAL BUSINESSES
                    </Badge>

                    <div className="mb-4">
                      <div className="inline-flex p-3 rounded-lg bg-primary/10">
                        <Phone className="h-8 w-8 text-primary" aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-2">AI Receptionist</h3>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Never miss a call again. AI receptionist answers 24/7 with a natural voice that books
                      appointments, handles messages, and transfers urgent calls — customers won't know it's not human.
                    </p>

                    <div className="mb-5 pb-4 border-b border-border">
                      <p className="text-sm text-muted-foreground mb-1">
                        From <span className="font-semibold">£100/month</span> (replaces a £25k/year receptionist)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        One-time setup: <span className="font-semibold">£500–2,000</span> | Pays for itself after 5
                        missed calls
                      </p>
                    </div>

                    <div className="mb-6 space-y-2">
                      <h4 className="font-semibold mb-1 text-sm">Perfect For:</h4>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" aria-hidden="true" />
                          <span>Salons/clinics losing £10k/month from missed appointments</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" aria-hidden="true" />
                          <span>Trades losing quotes because you're on the tools</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" aria-hidden="true" />
                          <span>Businesses where one missed call = £500+ lost revenue</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <Button asChild size="lg" className="w-full focus:ring-2 focus:ring-primary focus:ring-offset-2">
                        <Link to="/contact">
                          Book a Demo Call <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                        </Link>
                      </Button>
                      <p className="text-xs text-muted-foreground text-center mt-2">
                        Hear the AI live • 15-minute demo
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* ADDITIONAL AI SERVICES (4 CARDS) */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <h3 className="text-xl md:text-2xl font-semibold">Additional AI Services</h3>
                <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                  Powerful add-ons for sales, marketing, and operations — built on the same AI engine.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {highlightedServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <AnimatedSection key={service.name} staggerIndex={3 + index} animation="fade">
                      <Card className="hover-lift h-full">
                        <CardContent className="p-5 flex flex-col h-full">
                          <div className="mb-3">
                            <div className="inline-flex p-2.5 rounded-lg bg-primary/10">
                              <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                            </div>
                          </div>

                          <CardHeader className="p-0 mb-2">
                            <CardTitle className="text-lg font-semibold">{service.name}</CardTitle>
                          </CardHeader>

                          <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{service.description}</p>

                          <div className="mb-3">
                            <p className="text-xs text-muted-foreground">
                              <span className="font-medium">{service.setup}</span>
                            </p>
                            <p className="text-xs text-muted-foreground">
                              <span className="font-medium">{service.monthly}</span>
                            </p>
                          </div>

                          <div className="mb-4">
                            <h4 className="text-[11px] font-semibold mb-1">Best For:</h4>
                            <ul className="space-y-1 text-[11px] text-muted-foreground">
                              {service.bullets.map((item) => (
                                <li key={item} className="flex items-start gap-1.5">
                                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 mt-0.5" aria-hidden="true" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-auto">
                            <Button asChild size="sm" className="w-full text-xs py-2 focus:ring-2 focus:ring-primary focus:ring-offset-2">
                              <Link to="/contact">
                                {service.cta} <ArrowRight className="ml-1.5 h-3.5 w-3.5" aria-hidden="true" />
                              </Link>
                            </Button>
                            <p className="text-[10px] text-muted-foreground text-center mt-1.5">{service.trust}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>

            {/* SPECIALIZED AI SOLUTIONS TABLE */}
            <div className="mt-4 border-t border-border pt-10">
              <div className="text-center mb-6">
                <h3 className="text-lg md:text-xl font-semibold">7+ AI Services Available</h3>
                <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                  Advanced automations for specific business needs. Pick what fits you best — or combine them for a full
                  custom stack.
                </p>
              </div>

              <TooltipProvider>
                <div className="max-w-5xl mx-auto overflow-x-auto rounded-2xl border border-border bg-card/80 shadow-lg">
                  <table className="min-w-full text-left text-sm">
                    <thead>
                      <tr className="bg-[#0F766E]">
                        <th className="py-3.5 px-4 text-white font-semibold">Service</th>
                        <th className="py-3.5 px-4 text-white font-semibold">Setup</th>
                        <th className="py-3.5 px-4 text-white font-semibold">Monthly</th>
                        <th className="py-3.5 px-4 text-white font-semibold hidden md:table-cell">Best For</th>
                        <th className="py-3.5 px-4 text-white font-semibold md:hidden w-12"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {secondaryServices.map((service) => (
                        <tr key={service.name} className="hover:bg-muted/60 transition-colors">
                          <td className="py-3 px-4 font-medium text-foreground">{service.name}</td>
                          <td className="py-3 px-4 text-muted-foreground">{service.setup}</td>
                          <td className="py-3 px-4 text-primary font-semibold">{service.monthly}</td>
                          {/* Desktop: Show Best For text */}
                          <td className="py-3 px-4 text-muted-foreground hidden md:table-cell">{service.bestFor}</td>
                          {/* Mobile: Show tooltip icon */}
                          <td className="py-3 px-4 md:hidden">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button 
                                  className="p-1.5 rounded-full hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                                  aria-label={`Best for: ${service.bestFor}`}
                                >
                                  <Info className="h-4 w-4 text-muted-foreground" />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent side="left" className="max-w-[200px]">
                                <p className="text-xs"><strong>Best For:</strong> {service.bestFor}</p>
                              </TooltipContent>
                            </Tooltip>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TooltipProvider>

              <p className="mt-4 text-xs sm:text-sm text-muted-foreground text-center max-w-2xl mx-auto">
                All prices are starting points. Final cost depends on complexity, integrations, and volume.
              </p>

              <p className="mt-3 text-xs sm:text-sm text-muted-foreground text-center">
                Don&apos;t see what you need?{" "}
                <Link to="/contact" className="font-medium text-primary hover:underline focus:outline-none focus:underline">
                  Request a Custom AI Solution →
                </Link>
              </p>
            </div>
          </Container>
        </section>

        {/* CUSTOM AI SOLUTION - LIGHT SECTION */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/40">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3">Custom AI Solution</h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Need something specific? We design bespoke AI systems around your exact workflow, tools, and goals.
                </p>
              </div>

              <Card className="rounded-2xl border border-teal-200 bg-[#E8F7F5]/60 shadow-sm md:shadow-md backdrop-blur-[2px]">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold text-secondary mb-4">Recent Custom Builds</h3>

                  <ul className="space-y-3 mb-8 text-sm md:text-base">
                    <li className="flex items-start gap-3 text-foreground/80">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Healthcare appointment automation with patient intake & insurance verification</span>
                    </li>
                    <li className="flex items-start gap-3 text-foreground/80">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>E-commerce inventory management with supplier API integration</span>
                    </li>
                    <li className="flex items-start gap-3 text-foreground/80">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Restaurant multi-location ordering system with delivery coordination</span>
                    </li>
                    <li className="flex items-start gap-3 text-foreground/80">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Property management applicant filtering & tenant communication</span>
                    </li>
                    <li className="flex items-start gap-3 text-foreground/80">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>Legal firm document intake workflows with client portal integration</span>
                    </li>
                  </ul>

                  <div className="bg-white/70 border border-teal-100 rounded-xl p-4 mb-6 shadow-sm">
                    <p className="text-sm text-foreground mb-1">
                      <span className="font-semibold">Starting from £800 setup</span> · Monthly from £200+
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Final pricing depends on complexity, integrations, and volume. Most projects go live within 4–6
                      weeks.
                    </p>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-gradient-to-r from-teal-500 to-teal-700 text-white hover:opacity-90 shadow-md focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  >
                    <Link to="/contact">
                      Request Custom AI Solution <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* AI-SPECIFIC FAQ */}
        <section className="py-16 md:py-20 bg-muted/50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10 md:mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Common Questions About AI Automation</h2>
                <p className="text-base md:text-lg text-muted-foreground">
                  Clear answers so you know exactly what you're getting.
                </p>
              </div>

              <div className="space-y-4">
                {/* FAQ Item 1 */}
                <div className="bg-background rounded-xl p-5 md:p-6 border border-border shadow-sm hover:border-primary/50 transition-colors focus-within:ring-2 focus-within:ring-primary">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                      1
                    </span>
                    What if customers don&apos;t like talking to AI?
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground pl-8 leading-relaxed">
                    Our AI is trained to sound natural and helpful. Most customers can&apos;t tell the difference — and
                    if they prefer a human, the AI can transfer to you or take a message. You stay in control the whole
                    time.
                  </p>
                </div>

                {/* FAQ Item 2 */}
                <div className="bg-background rounded-xl p-5 md:p-6 border border-border shadow-sm hover:border-primary/50 transition-colors focus-within:ring-2 focus-within:ring-primary">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                      2
                    </span>
                    Can I change the AI&apos;s responses later?
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground pl-8 leading-relaxed">
                    Yes. You can update responses, add new services, or tweak behaviour anytime. We give you simple
                    tools to do it yourself, and we include adjustments for free during the first 30 days.
                  </p>
                </div>

                {/* FAQ Item 3 */}
                <div className="bg-background rounded-xl p-5 md:p-6 border border-border shadow-sm hover:border-primary/50 transition-colors focus-within:ring-2 focus-within:ring-primary">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                      3
                    </span>
                    What platforms do you use?
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground pl-8 leading-relaxed">
                    We use industry-leading AI platforms (like OpenAI, Anthropic, and Google) combined with custom code.
                    Everything is encrypted, GDPR-compliant, and built to be reliable for real businesses.
                  </p>
                </div>

                {/* FAQ Item 4 */}
                <div className="bg-background rounded-xl p-5 md:p-6 border border-border shadow-sm hover:border-primary/50 transition-colors focus-within:ring-2 focus-within:ring-primary">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                      4
                    </span>
                    How much integration work is required?
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground pl-8 leading-relaxed">
                    Very little. We handle the technical side. For websites, we add a small code snippet. For phone
                    systems, we connect to your existing number. For email, we plug into your inbox. Most setups are
                    live within 48 hours.
                  </p>
                </div>

                {/* FAQ Item 5 */}
                <div className="bg-background rounded-xl p-5 md:p-6 border border-border shadow-sm hover:border-primary/50 transition-colors focus-within:ring-2 focus-within:ring-primary">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                      5
                    </span>
                    Do you charge per conversation?
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground pl-8 leading-relaxed">
                    No surprise bills. Each plan includes a set number of interactions (usually 500–1,000+ per month).
                    If you&apos;re consistently above that, we&apos;ll recommend a higher tier — but most businesses
                    stay well within limits.
                  </p>
                </div>

                {/* FAQ Item 6 */}
                <div className="bg-background rounded-xl p-5 md:p-6 border border-border shadow-sm hover:border-primary/50 transition-colors focus-within:ring-2 focus-within:ring-primary">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                      6
                    </span>
                    What if the AI makes a mistake?
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground pl-8 leading-relaxed">
                    We build safety rules into every system, test with your real scenarios before launch, and monitor
                    performance. If something isn&apos;t right, you can pause the AI instantly and we&apos;ll correct it
                    within 24 hours.
                  </p>
                </div>
              </div>

              {/* FAQ CTA */}
              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">Still have questions?</p>
                <Button asChild variant="outline" size="lg" className="focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  <Link to="/contact">
                    Let's Chat <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* FINAL CTA – FULL WIDTH, MATCHED TO MAIN CTA STYLE */}
        <section className="relative py-16 md:py-20 overflow-hidden bg-[#D9F7F4]">
          {/* Very soft radial accents to match your main CTA */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.06),transparent_55%)]" aria-hidden="true" />
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_60%,hsl(var(--accent)/0.06),transparent_55%)]" aria-hidden="true" />

          <Container size="narrow" className="relative">
            {/* Heading Block */}
            <div className="text-center mb-10 space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-semibold tracking-wider uppercase">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
                <span>Live in 48 Hours – 2 Weeks</span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight">
                Ready to Add{" "}
                <span className="bg-gradient-to-r from-primary via-teal-400 to-accent bg-clip-text text-transparent">
                  AI to Your Business?
                </span>
              </h2>

              {/* Subhead */}
              <p className="text-base md:text-lg text-ink-light max-w-2xl mx-auto leading-relaxed">
                Book a 15-minute call. We'll show you exactly what AI can automate in YOUR business — with pricing in
                the same conversation.
              </p>
            </div>

            {/* Buttons – Same styling as main CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              {/* Primary CTA */}
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-2
          h-12 px-6 text-sm font-semibold rounded-xl
          bg-gradient-to-r from-primary via-teal-500 to-primary
          text-primary-foreground shadow-md hover:shadow-lg
          hover:scale-[1.015] active:scale-[0.97]
          transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Start AI Project
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>

              {/* Secondary CTA */}
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-2
          h-12 px-6 text-sm font-semibold rounded-xl
          border border-border bg-background/70
          text-ink hover:border-primary hover:bg-primary/5 hover:text-primary
          shadow-sm hover:shadow-md hover:scale-[1.015]
          active:scale-[0.97] transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Book Strategy Call
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>

            {/* Trust Line */}
            <p className="text-xs text-ink/80 text-center">
              Free demo • No long-term contracts • Live in as little as 48 hours
            </p>
          </Container>
        </section>
      </main>

      <Footer />

      {/* Mobile Sticky CTA */}
      <MobileStickyCTA />

      {/* Exit Intent Popup (Desktop) */}
      <ExitIntentPopup />
    </div>
  );
};

export default AiPackage;
