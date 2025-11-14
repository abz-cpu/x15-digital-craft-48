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
        className="relative overflow-hidden hero-gradient pt-24 pb-24 px-4 sm:px-6 lg:px-8"
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
            <div className="pill mb-1 bg-white/10 border-white/20 text-white/80">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              <span>Websites &amp; AI automation for UK businesses and creators</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.3rem] font-bold tracking-tight text-white">
                Websites &amp; AI Automation
                <span className="text-cyan-300"> That Pay for Themselves</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Fast, modern websites and AI systems that capture leads and save time. Built for UK small businesses who
                want results, not complexity.
              </p>
            </div>

            <p className="text-sm sm:text-base text-white/75 max-w-xl mx-auto lg:mx-0">
              Websites from <span className="font-semibold text-cyan-300">£100</span> and AI automation from{" "}
              <span className="font-semibold text-cyan-300">£50/month</span>.
              <br />
              Transparent pricing. Full ownership. 1–14 day delivery.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4 justify-center lg:justify-start pt-2">
              <Button
                size="lg"
                onClick={() => scrollToSection("web-preview")}
                className="w-full sm:w-auto shadow-[0_18px_40px_rgba(37,99,235,0.45)] hover:scale-[1.02]"
              >
                See Web Packages <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                onClick={() => scrollToSection("ai-preview")}
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] shadow-[0_18px_40px_rgba(37,99,235,0.45)]"
              >
                AI Automation Solutions <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/35 text-white/85 hover:border-white hover:bg-white/10"
                asChild
              >
                <Link to="/enterprise">Enterprise Inquiry →</Link>
              </Button>
            </div>

            {/* quick stats */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-[11px] sm:text-xs text-white/70 pt-4">
              <div className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 text-yellow-300" />
                <span>
                  <span className="font-semibold">4.9/5</span> rating
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <MessageCircle className="h-3.5 w-3.5 text-cyan-300" />
                <span>Quote: 1–3 hours</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-emerald-300" />
                <span>Delivery: 1–14 days</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5 text-white/80" />
                <span>UK-based team</span>
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">What We Offer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital services designed to transform your business. Each service is tailored to solve your
              specific challenges and drive growth.
            </p>
          </div>

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
                link: "/services#web-app-design",
              },
              {
                id: "web-dev",
                icon: Globe,
                title: "Web Development",
                tagline: "Lightning-fast sites delivered in days",
                shortDescription:
                  "Modern, responsive websites built with the latest technology and optimized for speed...",
                fullDescription:
                  "Modern, responsive websites built with the latest technology and optimized for speed and performance. We build stable, secure sites that load quickly and give your visitors a smooth experience on any device.",
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
                  "Smart SEO, PPC, and content marketing that puts your business in front of people ready to buy. We focus on measurable results – more traffic, more leads, and a clear return on your marketing spend.",
                process: [
                  "Market & Competitor Analysis",
                  "Strategy & Campaign Planning",
                  "SEO/PPC & Content Execution",
                  "Reporting & Continuous Improvement",
                ],
                link: "/services#marketing",
              },
              {
                id: "branding",
                icon: ImageIcon,
                title: "Graphic Design",
                tagline: "Branding that makes you memorable",
                shortDescription: "Professional branding and visual design that communicates your unique value...",
                fullDescription:
                  "Professional branding and visual design that communicates your unique value. From logos and brand guidelines to social media graphics, we help your business look polished and consistent everywhere.",
                process: [
                  "Brand Discovery & Positioning",
                  "Logo & Visual Identity Design",
                  "Brand Guidelines & Assets",
                  "Launch & Implementation Support",
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
                  "Intelligent AI solutions that handle customer inquiries, schedule appointments, and automate repetitive tasks. We build custom chatbots and workflow automations that keep customers happy and your business running smoothly.",
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
                  <CardHeader className="space-y-3">
                    <div className="inline-flex items-center justify-center rounded-xl bg-primary/5 text-primary p-2.5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{service.tagline}</p>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3">
                      {/* Collapsed state - short description + hover prompt */}
                      <div
                        className={`transition-all duration-300 ${
                          isExpanded ? "max-h-0 opacity-0 overflow-hidden" : "max-h-96 opacity-100"
                        } group-hover:opacity-0 group-hover:overflow-hidden`}
                      >
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{service.shortDescription}</p>
                        <div className="flex items-center justify-center gap-2 mt-2 text-muted-foreground font-medium text-sm">
                          <span>Hover for details</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>

                      {/* Expanded state - full details (on hover / click) */}
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        } group-hover:max-h-96 group-hover:opacity-100`}
                      >
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

                        {/* Desktop/hover CTA – uses outline variant so it turns green on hover */}
                        {service.id === "ai-automation" ? (
                          <Button
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
                          </Button>
                        ) : (
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                          >
                            <Link to={service.link}>
                              Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg px-8"
              onClick={() => scrollToSection("packages")}
            >
              Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* What Do You Need? */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-3">What Do You Need?</h2>
          <p className="text-center text-muted-foreground mb-12">
            Choose the service that fits your business right now.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Need a Website */}
            <AnimatedSection animation="fade" staggerIndex={0}>
              <Card className="hover-lift">
                <CardHeader className="text-center">
                  <Globe className="h-10 w-10 text-secondary mx-auto mb-3" />
                  <CardTitle className="text-2xl">Need a Website?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">From simple business sites to complex web applications.</p>
                  <p className="font-semibold text-lg mb-1">Packages from £100</p>
                  <p className="text-sm text-muted-foreground mb-4">Delivery: 1–14 days</p>
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

            {/* Need AI Automation */}
            <AnimatedSection animation="fade" staggerIndex={1}>
              <Card className="hover-lift">
                <CardHeader className="text-center">
                  <Bot className="h-10 w-10 text-secondary mx-auto mb-3" />
                  <CardTitle className="text-2xl">Need AI Automation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    From customer support to sales automation, email outreach to workflow optimisation.
                  </p>
                  <p className="font-semibold text-lg mb-1">7+ AI Solutions Available</p>
                  <p className="text-sm text-muted-foreground mb-1">From £50/month</p>
                  <p className="text-sm text-muted-foreground mb-4">Setup: £200–£2,000</p>
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

            {/* Need both */}
            <AnimatedSection animation="fade" staggerIndex={2}>
              <Card className="hover-lift border border-primary/30">
                <CardHeader className="text-center">
                  <div className="flex justify-center items-center gap-2 mb-4">
                    <Globe className="h-10 w-10 text-secondary" />
                    <span className="text-2xl font-bold text-secondary">+</span>
                    <Bot className="h-10 w-10 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Need Both?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Website + AI automation working together seamlessly.</p>
                  <p className="font-semibold text-lg mb-1">Combined packages available</p>
                  <p className="text-sm text-muted-foreground mb-4">Save 10–15% vs separate</p>
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

      {/* Web Packages Preview */}
      <section id="web-preview" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">Website Packages</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Simple, transparent pricing. Choose the level that matches where your business is today.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Entry / Starter */}
            <AnimatedSection staggerIndex={0} animation="scale">
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl">ENTRY / STARTER</CardTitle>
                  <p className="text-3xl font-bold text-secondary">£100 – £350</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Perfect for:</strong> Tradespeople, solo service providers, &quot;one-page&quot; sites.
                  </p>
                  <p className="font-semibold mb-3">What&apos;s included:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">1–3 sections (landing page)</span>
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

            {/* Business Website */}
            <AnimatedSection staggerIndex={1} animation="scale">
              <Card className="hover-lift border border-primary/40 shadow-md shadow-primary/20 relative">
                <Badge className="absolute -top-3 right-4 bg-primary text-primary-foreground badge-animated">
                  🏆 PROFESSIONAL
                </Badge>

                <CardHeader className="pt-6">
                  <CardTitle className="text-2xl">BUSINESS WEBSITE</CardTitle>
                  <p className="text-3xl font-bold text-secondary">£750 – £1,800</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Perfect for:</strong> Salons, consultants, local shops, small businesses.
                  </p>

                  <p className="font-semibold mb-3">What&apos;s included:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">4–10 pages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Full custom layout &amp; branding</span>
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

            {/* Online Shop */}
            <AnimatedSection staggerIndex={2} animation="scale">
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl">ONLINE SHOP</CardTitle>
                  <p className="text-3xl font-bold text-secondary">£1,200 – £3,500</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Perfect for:</strong> Product-based businesses, small e-commerce brands.
                  </p>

                  <p className="font-semibold mb-3">What&apos;s included:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Product pages &amp; collections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Payment &amp; checkout integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Cart, discounts &amp; order emails</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Analytics &amp; tracking setup</span>
                    </li>
                  </ul>

                  <Button asChild className="w-full">
                    <Link to="/services#ecommerce">
                      See E-commerce Options <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <div className="text-center max-w-4xl mx-auto mt-10">
            <p className="text-sm md:text-base text-muted-foreground mb-3">
              <span className="font-semibold text-secondary">Need something bigger?</span> Premium &amp; custom
              websites, e-commerce and web applications from <span className="font-semibold">£2,000</span>.
            </p>
            <Button asChild size="lg">
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

          <div className="bg-white rounded-2xl p-8 md:p-10 mb-12 text-center max-w-3xl mx-auto shadow-sm">
            <p className="text-lg text-muted-foreground mb-4">
              Your customer texts at 11 PM.
              <br />
              Your phone rings during dinner.
              <br />
              Your inbox has 47 unread emails.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-secondary mb-4">
              What if you had a digital assistant that works 24/7?
            </p>
            <p className="text-muted-foreground">
              Already have a website? Add AI automation.
              <br />
              Works with ANY website — yours or ours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Website Chatbot */}
            <AnimatedSection staggerIndex={0} animation="fade">
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl">AI Website Chatbot</CardTitle>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Setup: £250–600</p>
                    <p className="text-sm text-muted-foreground">Monthly: £50–120</p>
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
                      <span>Collects leads while you&apos;re offline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                      <span>Works on mobile &amp; desktop</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Perfect For:</strong> Service businesses, trades, consultants
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* AI Inbox Assistant */}
            <AnimatedSection staggerIndex={1} animation="fade">
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl">AI Inbox Assistant</CardTitle>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Setup: £300–900</p>
                    <p className="text-sm text-muted-foreground">Monthly: £80–200</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-4">What It Does:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                      <span>Drafts replies to common emails</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                      <span>Sorts leads vs spam</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                      <span>Follows simple rules you control</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Perfect For:</strong> Consultants, agencies, inbox-heavy businesses
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* AI Receptionist */}
            <AnimatedSection staggerIndex={2} animation="fade">
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl">AI Receptionist</CardTitle>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Setup: £400–800</p>
                    <p className="text-sm text-muted-foreground">Monthly: £100–200</p>
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
            </AnimatedSection>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              7+ AI Services Available: Sales agents, email outreach, social media, workflow automation &amp; more.
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">
            Recent Work &amp; Capabilities
          </h2>
          <p className="text-center text-muted-foreground mb-12">See what we can build for your business.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Elite Salon Website",
                features: ["Professional booking system", "Mobile-responsive design", "Payment integration"],
                timeline: "5–7 days",
                tech: "React, Stripe, Calendly",
              },
              {
                title: "Trade Business Site",
                features: ["Service showcase", "Quote request form", "Local SEO optimisation"],
                timeline: "3–5 days",
                tech: "React, Tailwind, Tally",
              },
              {
                title: "AI Chatbot Integration",
                features: ["24/7 customer support", "Lead qualification", "Multi-platform (web + social)"],
                timeline: "2–4 days",
                tech: "OpenAI, Custom API",
              },
            ].map((project, index) => (
              <AnimatedSection key={project.title} staggerIndex={index} animation="fade">
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <Badge variant="secondary">Capability Example</Badge>
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
            Recent Inquiries &amp; Early Feedback
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
                    <strong>Projects currently booking:</strong> 2–3 weeks out
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
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
