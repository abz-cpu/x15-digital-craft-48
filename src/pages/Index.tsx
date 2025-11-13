import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  DollarSign,
  Zap,
  MessageCircle,
  Globe,
  Bot,
  Lock,
  Shield,
  ClipboardCheck,
  Star,
  Target,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Palette,
  TrendingUp,
  Search,
  ShoppingBag,
  Image,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import FloatingActionMenu from "@/components/FloatingActionMenu";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { AnimatedSection } from "@/components/AnimatedSection";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import CtaCard from "@/components/CtaCard";
import { useParallax } from "@/hooks/useParallax";
import { SEO } from "@/components/SEO";
import { ReviewSchema } from "@/components/ReviewSchema";
import TrustBadgesBar from "@/components/TrustBadgesBar";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const parallaxOffset = useParallax({ speed: 0.5, maxOffset: 50 });
  const [expandedService, setExpandedService] = useState<string | null>(null);

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

  const testimonials = [
    {
      quote: "Got a quote in 2 hours - way faster than other devs",
      author: "Sarah, Salon Owner",
      location: "SE15, London",
    },
    {
      quote: "Love how transparent the pricing is. No BS.",
      author: "James, Plumber",
      location: "Birmingham",
    },
    {
      quote: "The AI chatbot handles 80% of basic questions now",
      author: "Rachel, Consultant",
      location: "Manchester",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="X15 Digital - Affordable Web Development & AI Automation for UK Businesses"
        description="Professional web development from £100 & AI automation from £50/month for UK businesses. Transparent pricing, 1-14 day delivery, you own everything. Based in London."
        keywords="web development UK, AI automation, website design London, affordable websites, small business web design, cheap web development, AI chatbots"
      />
      <ReviewSchema ratingValue="4.9" reviewCount="12" />
      <ScrollProgressBar />
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[radial-gradient(circle_at_top,_hsl(221,83%,30%)_0,_hsl(222,47%,10%)_45%,_hsl(222,47%,5%)_100%)]"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* soft glows */}
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at 0% 0%, rgba(82,255,248,0.16) 0, transparent 55%), radial-gradient(circle at 100% 0%, rgba(41,98,255,0.2) 0, transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* LEFT – copy + CTAs */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs sm:text-sm text-white/75">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              <span>Websites & AI automation for UK businesses and creators</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Websites & AI Automation
                <span className="text-cyan-300"> That Pay for Themselves</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0">
                Fast, modern websites and AI systems that capture leads and save time. Built for UK small businesses who
                want results, not complexity.
              </p>
            </div>

            <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto lg:mx-0">
              Websites from <span className="font-semibold text-cyan-300">£100</span> and AI automation from{" "}
              <span className="font-semibold text-cyan-300">£50/month</span>.
              <br />
              Transparent pricing. Full ownership. 1-14 day delivery.
            </p>

            {/* 3 CTAs – proper hierarchy */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4 justify-center lg:justify-start pt-1">
              <Button
                size="lg"
                onClick={() => scrollToSection("web-preview")}
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] transition-transform shadow-lg shadow-primary/40"
              >
                See Web Packages <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                onClick={() => scrollToSection("ai-preview")}
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] transition-transform shadow-lg shadow-primary/40"
              >
                AI Automation Solutions <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Link
                to="/enterprise"
                className="text-sm font-medium text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1 transition-colors"
              >
                Enterprise Inquiry
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* trust row – cleaner version */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-center lg:justify-start pt-3 text-xs sm:text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span>
                  <span className="font-semibold text-white">4.9/5</span> rating
                </span>
              </div>
              <div className="hidden sm:block h-px w-8 bg-white/20" />
              <span>⚡ Quote: 1-3 hours</span>
              <div className="hidden sm:block h-px w-8 bg-white/20" />
              <span>🚀 Delivery: 1-14 days</span>
              <div className="hidden sm:block h-px w-8 bg-white/20" />
              <span>🇬🇧 UK-based team</span>
            </div>
          </div>

          {/* RIGHT – comparison card */}
          <div className="flex-1 max-w-md w-full">
            <div className="rounded-2xl bg-[hsla(222,47%,9%,0.96)] border border-white/14 shadow-2xl shadow-black/40 p-6 sm:p-8 backdrop-blur-md">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/55 mb-1">PROJECT SNAPSHOT</p>
                  <p className="text-lg font-semibold text-white">What working with X15 feels like</p>
                </div>
                <Badge className="bg-white/10 text-cyan-200 border border-white/15 text-[10px] px-2 py-1">
                  NO AGENCY BLOAT
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm mb-6">
                <div className="space-y-2">
                  <p className="text-white/60 font-semibold text-[11px] uppercase tracking-wide">Typical Agency</p>
                  <ul className="space-y-1.5 text-white/50">
                    <li>• Vague pricing</li>
                    <li>• Slow replies</li>
                    <li>• Over-designed</li>
                    <li>• You don't own it</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-cyan-300 font-semibold text-[11px] uppercase tracking-wide">X15 Digital</p>
                  <ul className="space-y-1.5 text-white/85">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>Clear packages from £100</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>Fast WhatsApp replies</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>Built for conversions</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>You own everything</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center text-[11px] sm:text-xs text-white/75 mb-5">
                <div className="rounded-xl border border-white/12 py-2.5">
                  <p className="text-sm font-semibold text-white">&lt;4 hrs</p>
                  <p className="text-[10px] text-white/60">quote time</p>
                </div>
                <div className="rounded-xl border border-white/12 py-2.5">
                  <p className="text-sm font-semibold text-white">1-14d</p>
                  <p className="text-[10px] text-white/60">delivery</p>
                </div>
                <div className="rounded-xl border border-white/12 py-2.5">
                  <p className="text-sm font-semibold text-white">UK-wide</p>
                  <p className="text-[10px] text-white/60">service</p>
                </div>
              </div>

              <Button
                asChild
                size="sm"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
              >
                <Link to="/quick-start">
                  Get Your Quote in 5 Questions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">What We Offer</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Comprehensive digital services designed to transform your business. Each service is tailored to solve your
            specific challenges and drive growth.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                id: "design",
                icon: Palette,
                title: "Web/App Design",
                tagline: "Sites that convert visitors into customers",
                shortDescription:
                  "Beautiful, user-focused designs that capture your brand and guide visitors to take action...",
                fullDescription:
                  "Beautiful, user-focused designs that capture your brand and guide visitors to take action. Every element is crafted to create an engaging experience that turns clicks into customers and builds lasting impressions.",
                process: [
                  "Discovery & Brand Research",
                  "Design Concepts & Mockups",
                  "User Experience Testing",
                  "Final Design & Handoff",
                ],
                link: "/services#design",
              },
              {
                id: "web-dev",
                icon: Globe,
                title: "Web Development",
                tagline: "Lightning-fast sites delivered in days",
                shortDescription:
                  "Modern, responsive websites built with the latest technology and optimized for speed...",
                fullDescription:
                  "Modern, responsive websites built with the latest technology and optimized for speed. From simple business sites to complex web applications, we create platforms that perform flawlessly across all devices and grow with your business.",
                process: [
                  "Technical Planning & Architecture",
                  "Development & Integration",
                  "Quality Testing & Optimization",
                  "Launch & Ongoing Support",
                ],
                link: "#web-preview",
              },
              {
                id: "app-dev",
                icon: Smartphone,
                title: "App Development",
                tagline: "Apps your customers will love",
                shortDescription: "Native iOS and Android applications designed for an exceptional user experience...",
                fullDescription:
                  "Native iOS and Android applications designed for an exceptional user experience. From initial concept through app store launch, we handle every detail to create mobile solutions that engage users and deliver real value to your business.",
                process: [
                  "Strategy & Feature Planning",
                  "Design & Development",
                  "Testing & Refinement",
                  "App Store Launch & Updates",
                ],
                link: "/services#app-development",
              },
              {
                id: "marketing",
                icon: TrendingUp,
                title: "Digital Marketing",
                tagline: "Rank higher, get more customers",
                shortDescription:
                  "Smart SEO, PPC, and content marketing to put your business in front of people ready to buy...",
                fullDescription:
                  "Get seen on Google and drive real leads with results-focused digital marketing. We combine SEO (search ranking), PPC ads, engaging content, and social media—so your business attracts the right buyers and you see measurable ROI, with reporting you can trust.",
                process: [
                  "Market & competitor analysis",
                  "Strategy & budget planning",
                  "SEO, PPC & content / social campaign launch",
                  "Reporting, tracking & continuous improvement",
                ],
                link: "/services#marketing",
              },
              {
                id: "branding",
                icon: Image,
                title: "Graphic Design",
                tagline: "Branding that makes you memorable",
                shortDescription: "Professional branding and visual design that communicates your unique value...",
                fullDescription:
                  "Professional branding and visual design that communicates your unique value and sets you apart. From logos to complete brand identities, we create cohesive visual systems that resonate with your audience and build recognition.",
                process: [
                  "Brand Discovery & Research",
                  "Concept Creation & Exploration",
                  "Design Development & Refinement",
                  "Brand Guidelines & Assets",
                ],
                link: "/services#branding",
              },
              {
                id: "ai-automation",
                icon: Bot,
                title: "AI Automation",
                tagline: "24/7 customer service on autopilot",
                shortDescription: "Intelligent AI solutions that handle customer inquiries, schedule appointments...",
                fullDescription:
                  "Intelligent AI solutions that handle customer inquiries, schedule appointments, and manage routine tasks around the clock. Free up your time while delivering instant, professional responses that keep customers happy and your business running smoothly.",
                process: [
                  "Workflow Analysis & Planning",
                  "AI Training & Configuration",
                  "Integration & Testing",
                  "Launch & Performance Monitoring",
                ],
                link: "#ai-preview",
              },
            ].map((service) => {
              const Icon = service.icon;
              const isExpanded = expandedService === service.id;

              return (
                <Card
                  key={service.id}
                  className="hover-lift group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-primary/30"
                  onClick={() => setExpandedService(isExpanded ? null : service.id)}
                  role="button"
                  tabIndex={0}
                >
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-7 w-7 text-secondary" />
                    </div>
                    <CardTitle className="text-xl text-secondary">{service.title}</CardTitle>
                    <p className="text-sm font-semibold text-secondary mt-1">{service.tagline}</p>
                  </CardHeader>

                  <CardContent>
                    {/* DESKTOP: Hover to expand */}
                    <div className="hidden md:block">
                      {/* Default state - short description */}
                      <div className="transition-all duration-500 group-hover:max-h-0 group-hover:opacity-0 group-hover:overflow-hidden max-h-96 opacity-100">
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{service.shortDescription}</p>
                        {/* CHANGED THIS ↓ */}
                        <div className="flex items-center justify-center gap-2 mt-2 text-muted-foreground font-medium text-sm">
                          <span>Hover for details</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>

                      {/* Expanded state - full details (shows on hover) */}
                      <div className="transition-all duration-500 overflow-hidden max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100">
                        <p className="text-sm text-muted-foreground mb-4">{service.fullDescription}</p>
                        <div className="mb-4">
                          <p className="text-xs font-semibold mb-2 text-secondary">Our Process:</p>
                          <ol className="space-y-1">
                            {service.process.map((step: string, i: number) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                                <span className="font-semibold text-secondary">{i + 1}.</span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          onClick={(e) => {
                            e.stopPropagation(); // don't collapse the card
                            e.preventDefault();
                            scrollToSection("ai-preview");
                          }}
                        >
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* MOBILE/TABLET: Click to expand */}
                    <div className="md:hidden">
                      {/* Default state */}
                      {!isExpanded && (
                        <div>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{service.shortDescription}</p>
                          {/* CHANGED THIS ↓ */}
                          <div className="flex items-center justify-center gap-2 mt-2 text-muted-foreground font-medium text-sm">
                            <span>Tap for details</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      )}

                      {/* Expanded state */}
                      {isExpanded && (
                        <div className="space-y-4">
                          <p className="text-sm text-muted-foreground">{service.fullDescription}</p>
                          <div>
                            <p className="text-xs font-semibold mb-2 text-secondary">Our Process:</p>
                            <ol className="space-y-1">
                              {service.process.map((step: string, i: number) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                                  <span className="font-semibold text-secondary">{i + 1}.</span>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="w-full"
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                          >
                            <Link to={service.link}>
                              Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/services">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Selector Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">What Do You Need?</h2>
          <p className="text-center text-muted-foreground mb-12">
            Choose the service that fits your business right now.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection staggerIndex={0} animation="slide">
              <Card className="hover-lift">
                <CardHeader className="text-center">
                  <Globe className="h-16 w-16 text-secondary mx-auto mb-4" />
                  <CardTitle className="text-2xl">Need a Website?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">From simple business sites to complex web applications.</p>
                  <p className="font-semibold text-lg mb-2">Packages from £100</p>
                  <p className="text-sm text-muted-foreground mb-4">Delivery: 1-14 days</p>
                  <p className="text-sm font-semibold mb-2">Perfect for:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                    <li>• New businesses</li>
                    <li>• Website redesigns</li>
                    <li>• Custom web apps</li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/services">
                      See Web Packages <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection staggerIndex={1} animation="slide">
              <Card className="hover-lift">
                <CardHeader className="text-center">
                  <Bot className="h-16 w-16 text-secondary mx-auto mb-4" />
                  <CardTitle className="text-2xl">Need AI Automation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    From customer support to sales automation, email outreach to workflow optimisation.
                  </p>
                  <p className="font-semibold text-lg mb-2">7+ AI Solutions Available</p>
                  <p className="text-sm text-muted-foreground mb-1">From £50/month</p>
                  <p className="text-sm text-muted-foreground mb-4">Setup: £200-£2,000</p>
                  <p className="text-sm font-semibold mb-2">Perfect for:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                    <li>• Existing websites</li>
                    <li>• Customer support</li>
                    <li>• 24/7 availability</li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/services#ai-automation">
                      See AI Solutions <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection staggerIndex={2} animation="slide">
              <Card className="hover-lift border border-primary/30">
                <CardHeader className="text-center">
                  <div className="flex justify-center items-center gap-2 mb-4">
                    <Globe className="h-12 w-12 text-secondary" />
                    <span className="text-2xl font-bold text-secondary">+</span>
                    <Bot className="h-12 w-12 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Need Both?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Website + AI automation working together seamlessly.</p>
                  <p className="font-semibold text-lg mb-2">Combined packages available</p>
                  <p className="text-sm text-muted-foreground mb-4">Save 10-15% vs separate</p>
                  <p className="text-sm font-semibold mb-2">Perfect for:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                    <li>• New launches</li>
                    <li>• Complete rebrand</li>
                    <li>• Digital upgrade</li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/services#combined-packages">
                      See Combined Packages <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Agency Comparison */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
            How We're Different from Typical Agencies
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left font-semibold">Feature</th>
                  <th className="p-4 text-left font-semibold">Typical Agency</th>
                  <th className="p-4 text-left font-semibold">X15 Digital</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Price for basic site", "£3,000-£10,000", "£100–£500 (Entry/Starter)"],
                  ["Timeline", "4-12 weeks", "1–3 days (Entry/Starter), 1–2 weeks (Business)"],
                  ["Who you work with", "Account manager", "Lead developer, direct support"],
                  ["Pricing transparency", '"Let\'s discuss your budget"', "All prices on website"],
                  ["AI automation", "Extra £5k+", "From £50–£200 as add-on, fully integrated"],
                  ["Monthly fees", "£50-200/month hosting", "£0–£30 (you own it, affordable maintenance)"],
                  ["Revisions", "2-3 rounds max", "Unlimited until happy"],
                ].map(([feature, agency, x15], index) => (
                  <tr key={index} className="border-b border-border last:border-b-0">
                    <td className="p-4 font-medium">{feature}</td>
                    <td className="p-4 text-muted-foreground">{agency}</td>
                    <td className="p-4 bg-muted font-semibold text-secondary">{x15}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-muted-foreground mt-8 flex items-center justify-center gap-2">
            <Zap className="h-5 w-5 text-secondary" />
            We keep costs low by using modern tools and working smart. You get professional results without agency
            overhead.
          </p>
        </div>
      </section>

      {/* Web Packages Preview */}
      <section id="web-preview" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">Web Development Packages</h2>
          <p className="text-center text-muted-foreground mb-12">
            One-time payment. You own everything. No monthly fees.
          </p>

          {/* 3 Main Cards – Budget → Starter → Business */}
          <div className="grid gap-8 max-w-6xl mx-auto md:grid-cols-3 mb-12">
            {/* DIY / Template – Budget Friendly */}
            <AnimatedSection staggerIndex={0} animation="scale">
              <Card className="hover-lift relative">
                <Badge className="absolute -top-3 left-4 bg-primary/10 text-primary border border-primary/30">
                  💡 BUDGET FRIENDLY
                </Badge>

                <CardHeader className="pt-6">
                  <CardTitle className="text-2xl">Basic Website</CardTitle>
                  <p className="text-3xl font-bold text-secondary">£100 - £300</p>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Perfect for:</strong> Simple one-page sites, early-stage ideas, basic online presence
                  </p>

                  <p className="font-semibold mb-3">What's Included:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">1-page website (or simple landing page)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Template-based layout styled with your branding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Mobile responsive design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Basic contact or enquiry link</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">1–2 day delivery</span>
                    </li>
                  </ul>

                  <p className="text-xs font-semibold mb-2">Examples:</p>
                  <ul className="text-xs text-muted-foreground mb-6 space-y-1">
                    <li>• Simple “link in bio” page</li>
                    <li>• One-page promo site</li>
                    <li>• Basic idea validation page</li>
                  </ul>

                  <Button asChild className="w-full">
                    <Link to="/quick-start">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Starter Website – Most Popular */}
            <AnimatedSection staggerIndex={1} animation="scale">
              <Card className="hover-lift border border-primary/30 relative">
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-warning text-warning-foreground">
                  ⚡ MOST POPULAR
                </Badge>

                <CardHeader className="pt-6">
                  <CardTitle className="text-2xl">STARTER WEBSITE</CardTitle>
                  <p className="text-3xl font-bold text-secondary">£250 - £500</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Perfect for:</strong> Trades, freelancers, solo businesses
                  </p>

                  <p className="font-semibold mb-3">What's Included:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">1–3 custom pages (Home, About, Contact)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Fully custom or semi-custom design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Mobile responsive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Contact form integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Basic SEO setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Social media links</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">1–3 day delivery</span>
                    </li>
                  </ul>

                  <p className="text-xs font-semibold mb-2">Examples:</p>
                  <ul className="text-xs text-muted-foreground mb-6 space-y-1">
                    <li>• Electrician landing page</li>
                    <li>• Plumber portfolio site</li>
                    <li>• Freelance consultant page</li>
                  </ul>

                  <Button asChild className="w-full">
                    <Link to="/quick-start">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Business Website – Professional */}
            <AnimatedSection staggerIndex={2} animation="scale">
              <Card className="hover-lift border border-primary/40 shadow-md shadow-primary/20 relative">
                <Badge className="absolute -top-3 right-4 bg-primary text-primary-foreground">🏆 PROFESSIONAL</Badge>

                <CardHeader className="pt-6">
                  <CardTitle className="text-2xl">BUSINESS WEBSITE</CardTitle>
                  <p className="text-3xl font-bold text-secondary">£750 - £1,800</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Perfect for:</strong> Salons, consultants, local shops, small businesses
                  </p>

                  <p className="font-semibold mb-3">What's Included:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">4–10 pages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Full custom layout & branding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Contact + advanced forms/booking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Google Maps integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Portfolio / gallery options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Full SEO package</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">5–10 day delivery</span>
                    </li>
                  </ul>

                  <p className="text-xs font-semibold mb-2">Examples:</p>
                  <ul className="text-xs text-muted-foreground mb-6 space-y-1">
                    <li>• Salon with booking system</li>
                    <li>• Consultancy service site</li>
                    <li>• Local shop with products</li>
                  </ul>

                  <Button asChild className="w-full">
                    <Link to="/quick-start">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Bigger / Advanced Options – simple line */}
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm md:text-base text-muted-foreground mb-3">
              <span className="font-semibold text-secondary">Need something bigger?</span> Premium &amp; custom
              websites, e-commerce and web applications from <span className="font-semibold">£2,000</span>.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/services#web-apps">
                See Advanced Options <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Automation Preview */}
      <section id="ai-preview" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">AI Automation Solutions</h2>
          <p className="text-center text-muted-foreground mb-8">
            Stand-alone or integrated with your website.
            <br />
            Works with ANY website — yours or ours.
          </p>

          <div className="bg-white rounded-lg p-8 mb-12 text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-4">
              Your customer texts at 11 PM.
              <br />
              Your phone rings during dinner.
              <br />
              Your inbox has 47 unread emails.
            </p>
            <p className="text-xl font-semibold text-secondary mb-4">
              What if you had a digital assistant that works 24/7?
            </p>
            <p className="text-muted-foreground">
              Already have a website? Add AI automation.
              <br />
              Works with ANY website — yours or ours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover-lift border border-primary/30 relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-warning text-warning-foreground">
                <Star className="h-3 w-3 mr-1" /> MOST POPULAR
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl">AI Chatbot</CardTitle>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Setup: £200-400</p>
                  <p className="text-sm text-muted-foreground">Monthly: £50-100</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-4">What It Does:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                    <span>Answers FAQs instantly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                    <span>Captures lead information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                    <span>Qualifies customer needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                    <span>Works 24/7, never sleeps</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Perfect For:</strong> Service businesses, e-commerce, consultants
                </p>
                <Button asChild className="w-full">
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift border border-primary/10 relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-info text-info-foreground">
                <Target className="h-3 w-3 mr-1" /> BEST FOR LOCAL BUSINESSES
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl">AI Receptionist</CardTitle>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Setup: £400-800</p>
                  <p className="text-sm text-muted-foreground">Monthly: £100-200</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-4">What It Does:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                    <span>Answers phone calls naturally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                    <span>Books appointments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                    <span>Takes messages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                    <span>Handles after-hours inquiries</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Perfect For:</strong> Salons, clinics, offices with high call volume
                </p>
                <Button asChild className="w-full">
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              7+ AI Services Available: Sales Agents, Email Outreach, Social Media, Workflow Automation & More
            </p>
            <Button asChild size="lg">
              <Link to="/services?scroll=ai-automation">
                See All AI Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio-preview" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">Recent Work & Capabilities</h2>
          <p className="text-center text-muted-foreground mb-12">See what we can build for your business.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Elite Salon Website",
                features: ["Professional booking system", "Mobile-responsive design", "Payment integration"],
                timeline: "5-7 days",
                tech: "React, Stripe, Calendly",
              },
              {
                title: "Trade Business Site",
                features: ["Service showcase", "Quote request form", "Local SEO optimisation"],
                timeline: "3-5 days",
                tech: "React, Tailwind, Tally",
              },
              {
                title: "AI Chatbot Integration",
                features: ["24/7 customer support", "Lead qualification", "Multi-platform (web + social)"],
                timeline: "2-4 days",
                tech: "OpenAI, Custom API",
              },
            ].map((project, index) => (
              <AnimatedSection key={index} staggerIndex={index} animation="fade">
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <Badge variant="secondary">Capability Example</Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-sm text-muted-foreground space-y-1 mb-4">
                      <p>
                        <strong>Timeline:</strong> {project.timeline}
                      </p>
                      <p>
                        <strong>Tech:</strong> {project.tech}
                      </p>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/portfolio">View Full Portfolio →</Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
            Recent Inquiries & Early Feedback
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialsCarousel testimonials={testimonials} />

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-4">Recent Project Inquiries:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Salon website + booking system (£450)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Trade business site with quote forms (£300)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">E-commerce site for local retail (£1,100)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">AI chatbot for property management (£350 setup)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Voice agent for clinic (£600 setup)</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong>Average response time:</strong> 3.2 hours
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Projects currently booking:</strong> 2-3 weeks out
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-muted-foreground mb-12">Everything you need to know before getting started</p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold">
                How long does a typical project take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Entry/Starter websites: 1-3 days. Business packages: 5-10 days. AI automation setup: 2-5 days. Most
                projects delivered faster than agencies that take 4-12 weeks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold">
                Why is your pricing so much lower than typical agencies?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We use modern tools and work lean—no expensive offices or account managers. You get agency-quality
                websites without the overhead. Same results, better price.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold">Do I own everything after launch?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, 100%. Full ownership of all code, designs, and files. No platform fees, no ongoing licensing. It's
                completely yours.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-semibold">
                What if I need changes after launch?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Unlimited revisions until you're happy. After launch, minor tweaks are free for 30 days. We also offer
                £30/month maintenance if you prefer we handle updates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-semibold">How do I get started?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Fill out our contact form or WhatsApp us at +44 7424 062513. We'll reply within 4 hours with a clear
                quote and timeline. No sales calls, just straight answers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left font-semibold">Can I see examples of your work?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely! Check our Portfolio page for recent projects and capability examples. We're building our
                first 10 client projects and documenting everything transparently.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left font-semibold">Do you offer payment plans?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! We offer 50% upfront, 50% on delivery for projects over £500. AI automation is billed monthly, so
                there's no large upfront investment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left font-semibold">
                What happens if I'm not happy with the result?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer unlimited revisions until you're satisfied. If we can't deliver what you need, we provide a
                full refund. Your success is our reputation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadgesBar />

      {/* Floating CTA Card */}
      <CtaCard />

      <Footer />
      <FloatingActionMenu />
    </div>
  );
};

export default Index;
