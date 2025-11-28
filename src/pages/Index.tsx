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
  Package,
  MessageSquare,
  MapPin,
  Image,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonLegacy } from "@/components/ui/button-legacy";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
import { Container } from "@/components/Container";
import { LazyImage } from "@/components/LazyImage";

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
      quote: "Got a quote in 2 hours – way faster than other devs.",
      author: "Sarah, Salon Owner",
      location: "SE15, London",
    },
    {
      quote: "Love how transparent the pricing is. No BS.",
      author: "James, Plumber",
      location: "Birmingham",
    },
    {
      quote: "The AI chatbot handles 80% of basic questions now.",
      author: "Rachel, Consultant",
      location: "Manchester",
    },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      id: "web-app",
      icon: Globe,
      title: "Web/App Design",
      tagline: "Sites that convert visitors into customers",
      shortDescription: "Beautiful, user-focused designs that capture your brand and guide visitors to take action...",
      fullDescription:
        "Beautiful, user-focused designs that capture your brand and guide visitors to take action. We focus on layouts that feel clean, modern, and mobile-first—so every page feels fast, logical, and easy to use.",
      process: ["UX-first layout", "Responsive design", "Conversion-focused structure", "Launch-ready assets"],
      link: "/services#web",
    },
    {
      id: "web-dev",
      icon: Smartphone,
      title: "Web Development",
      tagline: "Lightning-fast sites delivered in days",
      shortDescription: "Modern, responsive websites built with the latest technology and optimised for speed...",
      fullDescription:
        "Modern, responsive websites built with the latest technology and optimised for speed. Clean code, SEO-friendly structure, and an editing experience that doesn’t require a developer every time you want a small change.",
      process: ["Architecture & setup", "Component-based build", "Testing & optimisation", "Launch & handover"],
      link: "/services#web-development",
    },
    {
      id: "apps",
      icon: Smartphone,
      title: "App Development",
      tagline: "Apps your customers will love",
      shortDescription: "Native or cross-platform apps designed for a smooth, modern user experience...",
      fullDescription:
        "From initial concept through app store launch, we handle every detail to create mobile solutions that engage users and deliver real value to your business.",
      process: ["Strategy & feature planning", "Design & development", "Testing & refinement", "Launch & updates"],
      link: "/services#app-development",
    },
    {
      id: "marketing",
      icon: TrendingUp,
      title: "Digital Marketing",
      tagline: "Rank higher, get more customers",
      shortDescription: "Smart SEO, PPC, and content marketing to put your business in front of people ready to buy...",
      fullDescription:
        "Get seen on Google and drive real leads with results-focused digital marketing. We combine SEO, PPC ads, content, and social media so your business attracts the right buyers and you see measurable ROI.",
      process: ["Market & competitor research", "Strategy & budget planning", "SEO/PPC/content launch", "Reporting"],
      link: "/services#marketing",
    },
    {
      id: "branding",
      icon: Image,
      title: "Graphic Design",
      tagline: "Branding that makes you memorable",
      shortDescription: "Professional branding and visual design that communicates your unique value...",
      fullDescription:
        "Professional branding and visual design that communicates your unique value and sets you apart. From logos to full brand systems, we create visual identities that people remember.",
      process: ["Brand discovery", "Concept exploration", "Design refinement", "Guidelines & asset delivery"],
      link: "/services#branding",
    },
    {
      id: "ai-automation",
      icon: Bot,
      title: "AI Automation",
      tagline: "24/7 customer service on autopilot",
      shortDescription: "Intelligent AI solutions that handle customer inquiries, bookings and follow-up...",
      fullDescription:
        "Intelligent AI solutions that handle FAQs, bookings, lead capture and simple workflows around the clock. Free your time while giving customers instant responses.",
      process: ["Workflow mapping", "AI training & configuration", "Integration & testing", "Launch & optimisation"],
      link: "#ai-preview",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="X15 Digital - Affordable Web Development & AI Automation for UK Businesses"
        description="Professional web development from £100 & AI automation from £50/month for UK businesses. Transparent pricing, 1-14 day delivery, you own everything. Based in London."
        keywords="web development UK, AI automation, website design London, affordable websites, small business web design, AI chatbots"
      />
      <ReviewSchema ratingValue="4.9" reviewCount="12" />
      <ScrollProgressBar />
      <Navigation />

      {/* Hero */}
      <section
        className="relative overflow-hidden hero-gradient pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-20 lg:pb-20 xl:pt-24 xl:pb-24 px-4 sm:px-6 lg:px-8 xl:px-10"
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

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-10 xl:gap-14">
          {/* LEFT – copy + CTAs */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/30 px-4 py-2 text-sm font-medium text-white shadow-lg mb-1">
              <span className="relative flex h-2.5 w-2.5">
                {/* Outer pulsing ring - ENHANCED */}
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-90"></span>
                {/* Middle glow ring - ADDED */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 blur-sm"></span>
                {/* Inner solid dot - ENHANCED WITH GLOW */}
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 dot-glow"></span>
              </span>
              <span>UK Websites &amp; AI Automation</span>
            </div>

            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.3rem] font-bold tracking-tight text-white leading-tight">
                Your Website Should Work
                <br />
                As Hard As You Do
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Professional websites and smart AI that work 24/7. You run your business—we handle the tech.
              </p>
            </div>

            {/* Small text - COMBINED & IMPROVED */}
            <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto lg:mx-0">
              Built for UK businesses. Delivered in 1–14 days. Full ownership. No monthly fees.
            </p>

            {/* CHOICE CARDS + stats */}
            <div className="pt-4">
              {/* CHOICE CARDS */}
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch gap-4 sm:gap-4 justify-center lg:justify-start max-w-xl mx-auto lg:mx-0">
                {/* Website Packages card */}
                <button
                  type="button"
                  onClick={() => scrollToSection("web-preview")}
                  className="flex-1 min-h-[56px] cursor-pointer rounded-xl border border-white/20 bg-white/10 px-4 flex items-center gap-3 text-left
                 hover:border-cyan-300/80 hover:bg-white/15 hover:scale-[1.02]
                 hover:shadow-[0_0_18px_rgba(34,211,238,0.25)]
                 active:scale-[0.98] active:shadow-none
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                 transition-all duration-200 transform"
                >
                  <Globe className="h-4 w-4 text-white/80" />
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-semibold text-white">Explore Website Packages</span>
                    <span className="text-xs text-cyan-300">From £200 →</span>
                  </div>
                </button>

                {/* AI Automation card */}
                <button
                  type="button"
                  onClick={() => scrollToSection("ai-preview")}
                  className="flex-1 min-h-[56px] cursor-pointer rounded-xl border border-white/20 bg-white/10 px-4 flex items-center gap-3 text-left
                 hover:border-cyan-300/80 hover:bg-white/15 hover:scale-[1.02]
                 hover:shadow-[0_0_18px_rgba(34,211,238,0.25)]
                 active:scale-[0.98] active:shadow-none
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                 transition-all duration-200 transform"
                >
                  <Bot className="h-4 w-4 text-white/80" />
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-semibold text-white">Explore AI Automation</span>
                    <span className="text-xs text-cyan-300">From £50/mo →</span>
                  </div>
                </button>
              </div>

              {/* quick stats - REDUCED TO TOP 3 */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-2 text-[11px] sm:text-xs text-white/70 pt-6">
                <div className="flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5 text-yellow-300" />
                  <span>
                    <span className="font-semibold">4.9/5</span> rating
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageCircle className="h-3.5 w-3.5 text-cyan-300" />
                  <span>Quote in 1–3 hours</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="h-3.5 w-3.5 text-white/80" />
                  <span>UK-based team</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – comparison card */}
          <div className="flex-1 w-full max-w-md mx-auto lg:mx-0">
            <div className="hero-card p-6 sm:p-7 md:p-8 text-white">
              <div className="flex items-center justify-between mb-4 gap-3">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/50 font-semibold">Project snapshot</p>
                  <p className="text-lg sm:text-xl font-semibold text-white">What working with X15 feels like</p>
                </div>
                <Badge
                  variant="outline"
                  className="text-[10px] border-emerald-400/60 text-emerald-300 bg-emerald-500/5"
                >
                  No agency bloat
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-5 mb-6">
                <div className="space-y-3 rounded-2xl bg-white/5 p-3 border border-white/8">
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/55">Typical agency</p>
                  <ul className="space-y-1.5 text-[11px] text-white/75">
                    <li className="flex items-start gap-1.5">
                      <ClipboardCheck className="h-3.5 w-3.5 mt-0.5 text-white/60" />
                      <span>Vague pricing</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <ClipboardCheck className="h-3.5 w-3.5 mt-0.5 text-white/60" />
                      <span>Slow replies</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <ClipboardCheck className="h-3.5 w-3.5 mt-0.5 text-white/60" />
                      <span>Over-designed &amp; over-priced</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <ClipboardCheck className="h-3.5 w-3.5 mt-0.5 text-white/60" />
                      <span>You don&apos;t own it fully</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3 rounded-2xl bg-emerald-400/10 p-3 border border-emerald-300/40">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">X15 Digital</p>
                  <ul className="space-y-1.5 text-[11px] text-white/85">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>Clear packages from £200</span>
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
                  <p className="text-sm font-semibold text-white">1–14d</p>
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
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/50"
              >
                <Link to="/quick-start">
                  Get Quote (Takes 2 Minutes)
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="legacy-section py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-10 bg-background">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">What We Offer</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Comprehensive digital services designed to transform your business. Each service is tailored to solve your
            specific challenges and drive growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
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
                  className="hover-lift group cursor-pointer
             transition-all duration-300
             border-2 border-transparent shadow-lg
             hover:border-primary hover:shadow-[0_0_60px_rgba(15,118,110,0.4)]"
                  onClick={() => setExpandedService(isExpanded ? null : service.id)}
                  role="button"
                  tabIndex={0}
                >
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(15,118,110,0.45)]">
                      <Icon className="h-7 w-7 text-secondary group-hover:drop-shadow-[0_0_8px_rgba(15,118,110,0.6)]" />
                    </div>
                    <CardTitle className="text-xl text-secondary">{service.title}</CardTitle>
                    <p className="text-sm font-semibold text-secondary mt-1">{service.tagline}</p>
                  </CardHeader>

                  <CardContent>
                    {/* DESKTOP: Hover to expand */}
                    <div className="hidden md:block">
                      {/* Default state - short description */}
                      <div className="group-hover:hidden">
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{service.shortDescription}</p>
                        <div className="flex items-center justify-center gap-2 mt-2 text-muted-foreground font-medium text-sm">
                          <span>Hover for details</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>

                      {/* Expanded state - full details (shows on hover) */}
                      <div className="hidden group-hover:block">
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
                        <ButtonLegacy
                          variant="outline"
                          size="sm"
                          className="w-full"
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            scrollToSection("ai-preview");
                          }}
                        >
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </ButtonLegacy>
                      </div>
                    </div>

                    {/* MOBILE/TABLET: Click to expand (keep as you had) */}
                    <div className="md:hidden">
                      {!isExpanded && (
                        <div>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{service.shortDescription}</p>
                          <div className="flex items-center justify-center gap-2 mt-2 text-muted-foreground font-medium text-sm">
                            <span>Tap for details</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      )}

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
                          <ButtonLegacy
                            asChild
                            variant="outline"
                            size="sm"
                            className="w-full"
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                          >
                            <Link to={service.link}>
                              Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </ButtonLegacy>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <ButtonLegacy asChild size="lg">
              <Link to="/services">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </ButtonLegacy>
          </div>
        </div>
      </section>

      {/* Ready to Get Started Section */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-[#6B7280]">Choose your path below.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
            {/* LEFT CARD - WEB PACKAGES */}
            <AnimatedSection animation="fade" staggerIndex={0}>
              <Card className="h-full hover:border-[#F59E0B] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 p-12 border-2 border-[#E5E7EB] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <div className="flex flex-col items-center text-center h-full">
                  <Globe className="h-16 w-16 text-[#0F766E] mb-6" />
                  <h3 className="text-3xl font-bold text-[#1F2937] mb-4">Professional Websites Built to Convert</h3>
                  <p className="text-base text-[#6B7280] mb-8">For businesses ready to show up professionally online</p>

                  <div className="space-y-4 mb-8 flex-1">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-sm text-[#1F2937]">One-time payment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-sm text-[#1F2937]">Full ownership</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-sm text-[#1F2937]">1-14 day delivery</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-sm text-[#1F2937]">No monthly fees</span>
                    </div>
                  </div>

                  <p className="text-xl font-semibold text-[#0F766E] mb-6">Starting at £200</p>

                  <Button asChild className="w-full bg-[#0F766E] hover:bg-[#F59E0B] text-white py-6 text-base">
                    <Link to="/web-package">
                      View Web Packages <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </AnimatedSection>

            {/* RIGHT CARD - AI AUTOMATION */}
            <AnimatedSection animation="fade" staggerIndex={1}>
              <Card className="h-full hover:border-[#F59E0B] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 p-12 border-2 border-[#E5E7EB] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <div className="flex flex-col items-center text-center h-full">
                  <Bot className="h-16 w-16 text-[#0F766E] mb-6" />
                  <h3 className="text-3xl font-bold text-[#1F2937] mb-4">AI That Never Misses A Lead</h3>
                  <p className="text-base text-[#6B7280] mb-8">
                    For businesses ready to automate customer interactions 24/7
                  </p>

                  <div className="space-y-4 mb-8 flex-1">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-sm text-[#1F2937]">Handles calls &amp; messages</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-sm text-[#1F2937]">Books appointments</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-sm text-[#1F2937]">Qualifies leads</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-sm text-[#1F2937]">Works while you sleep</span>
                    </div>
                  </div>

                  <p className="text-xl font-semibold text-[#0F766E] mb-6">Starting at £50/month</p>

                  <Button asChild className="w-full bg-[#0F766E] hover:bg-[#F59E0B] text-white py-6 text-base">
                    <Link to="/ai-package">
                      View AI Solutions <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trust Section - Why Choose X15 Digital */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F2937] mb-16">Why Choose X15 Digital</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Fast Delivery */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F59E0B]/10 mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-[#1F2937] mb-3">Fast Delivery</h3>
              <p className="text-[#6B7280]">1-14 days, not months</p>
            </div>

            {/* Transparent Pricing */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F59E0B]/10 mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-[#1F2937] mb-3">Transparent Pricing</h3>
              <p className="text-[#6B7280]">No hidden fees</p>
            </div>

            {/* Full Ownership */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F59E0B]/10 mb-6">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="text-xl font-bold text-[#1F2937] mb-3">Full Ownership</h3>
              <p className="text-[#6B7280]">You own everything</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">How It Works</h2>
            <p className="text-lg text-[#6B7280]">Simple Process. Professional Results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Timeline connector line - hidden on mobile */}
            <div
              className="hidden md:block absolute top-16 left-1/4 right-1/4 h-1 bg-[#F59E0B]/30"
              style={{ transform: "translateY(-50%)" }}
            ></div>

            {/* Step 1 - Discovery */}
            <div className="text-center relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0F766E] text-white text-2xl font-bold mb-6 relative z-10">
                1
              </div>
              <h3 className="text-2xl font-bold text-[#1F2937] mb-3">DISCOVERY</h3>
              <p className="text-[#6B7280] mb-2">15-minute chat</p>
              <p className="text-[#6B7280]">Book a quick call</p>
            </div>

            {/* Step 2 - Build */}
            <div className="text-center relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0F766E] text-white text-2xl font-bold mb-6 relative z-10">
                2
              </div>
              <h3 className="text-2xl font-bold text-[#1F2937] mb-3">BUILD</h3>
              <p className="text-[#6B7280] mb-2">We create &amp; optimize</p>
              <p className="text-[#6B7280]">1-14 days depending on your package</p>
            </div>

            {/* Step 3 - Launch */}
            <div className="text-center relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0F766E] text-white text-2xl font-bold mb-6 relative z-10">
                3
              </div>
              <h3 className="text-2xl font-bold text-[#1F2937] mb-3">LAUNCH</h3>
              <p className="text-[#6B7280] mb-2">Go live + ongoing support</p>
              <p className="text-[#6B7280]">You own everything</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section
        id="portfolio-preview"
        className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-10 bg-muted"
      >
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">
            Recent Work &amp; Capabilities
          </h2>
          <p className="text-center text-muted-foreground mb-8">See what we can build for your business.</p>

          {/* Promotional Text */}
          <div className="max-w-2xl mx-auto text-center mb-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-foreground font-medium mb-3">
              <a
                href="https://x15pcbuilders.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                X15 PC Builders
              </a>{" "}
              is our sister company - proving we build sites that actually work for real businesses.
            </p>
            <p className="text-muted-foreground">
              <Link to="/contact" className="text-primary hover:underline font-medium">
                Get in touch for a quote
              </Link>{" "}
              and we'll build something amazing for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "X15 PC Builders",
                features: ["Professional showcase website", "Service packages display", "Build request form"],
                timeline: "LIVE PROJECT",
                tech: "React, Tailwind CSS",
                isLive: true,
                badge: "Live Client Project",
              },
              {
                title: "Elite Salon Website",
                features: ["Professional booking system", "Mobile-responsive design", "Payment integration"],
                timeline: "5–7 days",
                tech: "React, Stripe, Calendly",
                badge: "Capability Example",
              },
              {
                title: "AI Chatbot Integration",
                features: ["24/7 customer support", "Lead qualification", "Multi-platform (web + social)"],
                timeline: "2–4 days",
                tech: "OpenAI, Custom API",
                badge: "Capability Example",
              },
            ].map((project, index) => (
              <AnimatedSection key={project.title} staggerIndex={index} animation="fade">
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <Badge variant={project.isLive ? "default" : "secondary"}>{project.badge}</Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
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
                    {project.isLive ? (
                      <div className="space-y-2">
                        <Button asChild variant="default" className="w-full">
                          <Link to="/portfolio">
                            View Full Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    ) : (
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/portfolio">View Full Portfolio →</Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-10 bg-background">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
            Recent Inquiries &amp; Early Feedback
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
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
                    <strong>Projects currently booking:</strong> 2–3 weeks out
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-10 bg-muted">
        <div className="max-w-4xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-muted-foreground mb-12">Everything you need to know before getting started.</p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold">
                How long does a typical project take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Entry/Starter websites: 1–3 days. Business packages: 5–10 days. AI automation setup: 2–5 days. Most
                projects are delivered faster than agencies that take 4–12 weeks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold">
                Why is your pricing lower than typical agencies?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We use modern tools and work lean—no expensive offices or account managers. You get agency-quality work
                without the overhead. Same results, better price.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold">Do I own everything after launch?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, 100%. Full ownership of all code, designs, and files. No platform lock-in, no ongoing licensing
                fees. It&apos;s completely yours.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-semibold">
                What if I need changes after launch?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Unlimited revisions until you&apos;re happy. After launch, minor tweaks are free for 30 days. We also
                offer affordable maintenance if you prefer we handle updates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-semibold">
                Can you work with my existing website?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                In most cases, yes. We can either improve your current site or build a new one and migrate content. AI
                automation works with almost any existing platform.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left font-semibold">Can I see examples of your work?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely. Check the Portfolio page for recent projects and capability examples. We&apos;re building
                our first 10 client projects and documenting everything transparently.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left font-semibold">Do you offer payment plans?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes. Typically 50% upfront and 50% on delivery for projects over £500. AI automation is billed monthly,
                so there&apos;s no large upfront investment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left font-semibold">
                What happens if I&apos;m not happy with the result?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer unlimited revisions until you&apos;re satisfied. If we genuinely can&apos;t deliver what you
                need, we provide a full refund. Your success is our reputation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Trust + global CTA + footer */}
      <TrustBadgesBar />
      <CtaCard />
      <Footer />
      <FloatingActionMenu />
    </div>
  );
};

export default Index;
