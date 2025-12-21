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
  ChevronDown,
  Smartphone,
  Palette,
  TrendingUp,
  Search,
  ShoppingBag,
  Package,
  MessageSquare,
  MapPin,
  Image,
  Settings,
  Clock,
  Receipt,
  ShieldCheck,
  BadgeCheck,
  X,
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
import MobileFloatingCTA from "@/components/MobileFloatingCTA";
import heroIllustration from "@/assets/hero-illustration.png";
import whyChooseUsIllustration from "@/assets/why-choose-us-illustration.png";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const parallaxOffset = useParallax({
    speed: 0.5,
    maxOffset: 50,
  });

  const currentMonth = new Date().toLocaleString("en-GB", { month: "long" });

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
      {
        threshold: 0.1,
      },
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
    el.scrollIntoView({
      behavior: "smooth",
    });
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
        description="Professional web development from £100 & AI automation from £50/month for UK businesses. Transparent pricing, 1-14 day delivery, no monthly platform fees. Based in London."
        keywords="web development UK, AI automation, website design London, affordable websites, small business web design, AI chatbots"
      />
      <ReviewSchema ratingValue="4.9" reviewCount="12" />
      <ScrollProgressBar />
      <Navigation />

      {/* Hero */}
      <section
        className="relative overflow-hidden bg-white pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 xl:pt-36 xl:pb-28 px-4 sm:px-6 lg:px-8 xl:px-10"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column - Content */}
            <div className="text-center lg:text-left space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span>
                  Accepting 3 new projects for <span className="font-semibold">{currentMonth}</span>
                </span>
              </div>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
                  Your Business Sleeps.
                  <br />
                  <span className="text-teal-600">Your Website Shouldn't.</span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Professional websites and AI automation that capture leads and book clients 24/7— even while you sleep.
                  Websites from £200, AI from £50/month.
                </p>
              </div>

              {/* Trust line */}
              <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto lg:mx-0">
                Built for UK businesses. Delivered in <span className="font-semibold text-slate-700">1–14 days</span>.
                Client-Hosted & Managed. Optional support from{" "}
                <span className="font-semibold text-slate-700">£25/month</span>.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-500/25 px-8"
                >
                  <Link to="/quick-start">
                    Book a Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-slate-300 text-slate-700 hover:bg-amber-500 hover:text-white hover:border-amber-500 px-8"
                >
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>

              {/* Service pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                  Web Development
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                  AI Automation
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                  Digital Marketing
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                  Branding
                </span>
              </div>

              {/* Quick stats */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-slate-500 pt-2">
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>
                    <span className="font-semibold text-slate-700">4.9/5</span> rating
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageCircle className="h-4 w-4 text-teal-500" />
                  <span>Quote in 1–3 hours</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="h-4 w-4 text-slate-400" />
                  <span>UK-based team</span>
                </div>
              </div>
            </div>

            {/* Right column - Illustration */}
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
              <img
                src={heroIllustration}
                alt="Team collaborating on website design"
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl"
              />
            </div>
          </div>

          {/* Bouncing scroll indicator */}
          <div className="flex justify-center pt-12 lg:pt-16">
            <div className="animate-bounce flex flex-col items-center text-muted-foreground/60">
              <ChevronDown className="h-6 w-6" />
              <ChevronDown className="h-6 w-6 -mt-3" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="legacy-section py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-10 bg-background">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">
            Everything You Need to Grow Online
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Digital services built to attract customers, increase revenue, and scale your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {[
              {
                id: "web-dev",
                icon: Globe,
                iconBg: "bg-rose-100",
                iconColor: "text-rose-600",
                title: "Web Development",
                tagline: "Lightning-fast sites delivered in days, not weeks",
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
                id: "maintenance",
                icon: Settings,
                iconBg: "bg-sky-100",
                iconColor: "text-sky-600",
                title: "Website Maintenance",
                tagline: "Keep your site secure, fast, and running perfectly",
                fullDescription:
                  "Regular updates, security monitoring, and priority support so you never have to worry about your website. We handle backups, performance optimization, content updates, and emergency fixes while you focus on your business. Every maintenance plan includes proactive monitoring to catch issues before they become problems.",
                process: [
                  "Security Updates & Monitoring",
                  "Performance Optimization",
                  "Content Updates & Backups",
                  "Priority Support & Emergency Fixes",
                ],
                link: "/services#maintenance",
              },
              {
                id: "ai-automation",
                icon: Bot,
                iconBg: "bg-emerald-100",
                iconColor: "text-emerald-600",
                title: "AI Automation",
                tagline: "Work smarter with 24/7 AI assistance",
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
              {
                id: "design",
                icon: Palette,
                iconBg: "bg-orange-100",
                iconColor: "text-orange-600",
                title: "Web/App Design",
                tagline: "Sites that convert visitors into customers",
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
                id: "marketing",
                icon: TrendingUp,
                iconBg: "bg-blue-100",
                iconColor: "text-blue-600",
                title: "Digital Marketing",
                tagline: "Get found by customers ready to buy",
                fullDescription:
                  "Strategic digital marketing that puts you in front of high-intent buyers. We combine proven SEO tactics, targeted PPC campaigns, compelling content, and social media management to increase visibility where it matters. Every campaign includes transparent reporting and continuous optimization for measurable ROI.",
                process: [
                  "Market & Competitor Analysis",
                  "Strategy & Budget Planning",
                  "Campaign Launch (SEO, PPC & Content)",
                  "Performance Tracking & Optimization",
                ],
                link: "/services#marketing",
              },
              {
                id: "branding",
                icon: Image,
                iconBg: "bg-violet-100",
                iconColor: "text-violet-600",
                title: "Graphic Design",
                tagline: "Branding that makes you stand out",
                fullDescription:
                  "Professional branding and visual design that communicates your unique value and sets you apart. From logos to complete brand identities, we create cohesive visual systems that resonate with your audience and build lasting recognition.",
                process: [
                  "Brand Discovery & Research",
                  "Concept Creation & Exploration",
                  "Design Development & Refinement",
                  "Brand Guidelines & Assets Delivery",
                ],
                link: "/services#branding",
              },
            ].map((service) => {
              const Icon = service.icon;
              const isExpanded = expandedService === service.id;

              return (
                <Card
                  key={service.id}
                  className="group cursor-pointer bg-card border border-border/50 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                  onClick={() => setExpandedService(isExpanded ? null : service.id)}
                  role="button"
                  tabIndex={0}
                >
                  <CardHeader className="pb-3">
                    <div className={`h-14 w-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-4`}>
                      <Icon className={`h-6 w-6 ${service.iconColor}`} strokeWidth={2} />
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground">{service.title}</CardTitle>
                    <p className="text-sm font-medium text-muted-foreground mt-1">{service.tagline}</p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* DESKTOP: smooth expand, same paragraph continues */}
                    <div className="hidden md:block">
                      <div className="overflow-hidden transition-[max-height] duration-300 ease-out max-h-[140px] group-hover:max-h-[420px]">
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 group-hover:line-clamp-none leading-relaxed">
                          {service.fullDescription}
                        </p>

                        {/* Hover hint - only visible when collapsed */}
                        <div className="flex items-center gap-2 mt-2 text-muted-foreground font-medium text-sm transition-[opacity,max-height] duration-200 ease-out max-h-8 opacity-100 group-hover:max-h-0 group-hover:opacity-0">
                          <span>Hover for details</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>

                        {/* Expanded content - only visible on hover */}
                        <div className="mt-2 border-t border-border/60 pt-3 transition-[max-height,opacity] duration-300 ease-out max-h-0 opacity-0 group-hover:max-h-[260px] group-hover:opacity-100">
                          <p className="text-xs font-semibold mb-2 text-foreground">Our Process:</p>
                          <ol className="space-y-1">
                            {service.process.map((step: string, i: number) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                                <span className="font-semibold text-foreground">{i + 1}.</span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                          <ButtonLegacy
                            variant="outline"
                            size="sm"
                            className="w-full mt-4"
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();

                              if (service.id === "web-dev") {
                                scrollToSection("web-preview");
                              } else if (service.id === "ai-automation") {
                                scrollToSection("ai-preview");
                              } else if (service.link.startsWith("/services")) {
                                window.location.href = service.link;
                              }
                            }}
                          >
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </ButtonLegacy>
                        </div>
                      </div>
                    </div>

                    {/* MOBILE/TABLET: click-to-expand */}
                    <div className="md:hidden">
                      {!isExpanded && (
                        <div>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{service.fullDescription}</p>
                          <div className="flex items-center gap-2 mt-2 text-muted-foreground font-medium text-sm">
                            <span>Tap for details</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      )}

                      {isExpanded && (
                        <div className="space-y-4">
                          {/* Close indicator */}
                          <div className="flex items-center justify-center gap-2 text-primary font-medium text-sm bg-primary/10 py-2 px-3 rounded-lg -mt-2">
                            <X className="h-4 w-4" />
                            <span>Tap to close</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{service.fullDescription}</p>
                          <div>
                            <p className="text-xs font-semibold mb-2 text-foreground">Our Process:</p>
                            <ol className="space-y-1">
                              {service.process.map((step: string, i: number) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                                  <span className="font-semibold text-foreground">{i + 1}.</span>
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
                See More <ArrowRight className="ml-2 h-5 w-5" />
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
                      <span className="text-sm text-[#1F2937]">Client-hosted (your domain &amp; hosting)</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-sm text-[#1F2937]">1–14 day delivery</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-sm text-[#1F2937]">No forced monthly platform fees</span>
                    </div>
                  </div>

                  {/* PRICE */}
                  <p className="text-xl font-semibold text-[#0F766E] mb-2">Starting at £200</p>

                  {/* SUBTLE URGENCY */}
                  <p className="text-sm text-[#6B7280] mb-6">Currently booking 2–3 weeks ahead</p>

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

                  {/* PRICE */}
                  <p className="text-xl font-semibold text-[#0F766E] mb-2">Starting at £50/month</p>

                  {/* SUBTLE URGENCY */}
                  <p className="text-sm text-[#6B7280] mb-6">Limited onboarding slots each month</p>

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

      {/* Why Choose Us Section - with illustration */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left column - Content */}
            <div>
              <span className="inline-block text-sm font-semibold text-teal-600 uppercase tracking-wider mb-4">
                Why Choose L&D Digital
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
                We Make Digital Simple, Fast, and Transparent
              </h2>
              
              <div className="space-y-6">
                {/* Checklist item 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Lightning-Fast Delivery</h3>
                    <p className="text-slate-600">Your project delivered in 1–14 days, not months. We move fast without cutting corners.</p>
                  </div>
                </div>

                {/* Checklist item 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">100% Transparent Pricing</h3>
                    <p className="text-slate-600">No hidden fees, no surprises. You know exactly what you're paying for upfront.</p>
                  </div>
                </div>

                {/* Checklist item 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">14-Day Money-Back Guarantee</h3>
                    <p className="text-slate-600">Not happy with the result? Full refund within 14 days. Zero risk to you.</p>
                  </div>
                </div>

                {/* Checklist item 4 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">UK-Based Support</h3>
                    <p className="text-slate-600">Real people, same timezone, responsive communication throughout your project.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-500/25">
                  <Link to="/quick-start">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right column - Illustration */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={whyChooseUsIllustration}
                alt="Professional consultation between team members"
                className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-xl"
              />
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
              style={{
                transform: "translateY(-50%)",
              }}
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
              <p className="text-[#6B7280] mb-2">Go live + optional support</p>
              <p className="text-[#6B7280]">No monthly platform rental fees</p>
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

      {/* FAQ Section - Improved UX/UI */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F9FAFB] to-white">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0F766E]/10 mb-6">
              <MessageSquare className="h-8 w-8 text-[#0F766E]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg text-[#6B7280] max-w-2xl mx-auto">
              Everything you need to know before getting started
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-3">
            <AccordionItem
              value="item-1"
              className="border border-[#E5E7EB] rounded-xl px-5 py-1 bg-white shadow-sm hover:shadow-md hover:border-[#0F766E]/30 transition-all duration-200"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5 group">
                <span className="flex items-start gap-3 text-[15px] md:text-base font-semibold text-[#1F2937] pr-4">
                  <Clock className="h-5 w-5 text-[#0F766E] mt-0.5 flex-shrink-0" />
                  <span>How long does a typical project take?</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-[14px] md:text-[15px] text-[#6B7280] pb-5 pl-8 leading-relaxed">
                <strong className="text-[#1F2937]">Entry/Starter websites:</strong> 5–10 days
                <br />
                <strong className="text-[#1F2937]">Business packages:</strong> 14–21 days
                <br />
                <strong className="text-[#1F2937]">AI automation setup:</strong> 3–10 days
                <br />
                <br />
                Most projects are delivered faster than agencies that take 4–12 weeks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-[#E5E7EB] rounded-xl px-5 py-1 bg-white shadow-sm hover:shadow-md hover:border-[#0F766E]/30 transition-all duration-200"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="flex items-start gap-3 text-[15px] md:text-base font-semibold text-[#1F2937] pr-4">
                  <DollarSign className="h-5 w-5 text-[#0F766E] mt-0.5 flex-shrink-0" />
                  <span>Why is your pricing lower than typical agencies?</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-[14px] md:text-[15px] text-[#6B7280] pb-5 pl-8 leading-relaxed">
                We use modern tools and work lean—no expensive offices or account managers. You get agency-quality work
                without the overhead. Same results, better price.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-[#E5E7EB] rounded-xl px-5 py-1 bg-white shadow-sm hover:shadow-md hover:border-[#0F766E]/30 transition-all duration-200"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="flex items-start gap-3 text-[15px] md:text-base font-semibold text-[#1F2937] pr-4">
                  <ShieldCheck className="h-5 w-5 text-[#0F766E] mt-0.5 flex-shrink-0" />
                  <span>What do I actually own?</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-[14px] md:text-[15px] text-[#6B7280] pb-5 pl-8 leading-relaxed">
                You fully own your domain, hosting account, and all of your content. The underlying codebase stays with
                X15 Digital to ensure quality, security, and long-term maintainability.
                <br />
                <br />
                If you host the site yourself, it stays online as long as your hosting stays active. If you're on one of
                our hosting or maintenance plans, the site remains live while the plan is active.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-[#E5E7EB] rounded-xl px-5 py-1 bg-white shadow-sm hover:shadow-md hover:border-[#0F766E]/30 transition-all duration-200"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="flex items-start gap-3 text-[15px] md:text-base font-semibold text-[#1F2937] pr-4">
                  <Settings className="h-5 w-5 text-[#0F766E] mt-0.5 flex-shrink-0" />
                  <span>What if I need changes after launch?</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-[14px] md:text-[15px] text-[#6B7280] pb-5 pl-8 leading-relaxed">
                Unlimited revisions until you're happy. After launch, minor tweaks are free for 30 days. We also offer
                affordable maintenance if you prefer we handle updates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border border-[#E5E7EB] rounded-xl px-5 py-1 bg-white shadow-sm hover:shadow-md hover:border-[#0F766E]/30 transition-all duration-200"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="flex items-start gap-3 text-[15px] md:text-base font-semibold text-[#1F2937] pr-4">
                  <Globe className="h-5 w-5 text-[#0F766E] mt-0.5 flex-shrink-0" />
                  <span>Can you work with my existing website?</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-[14px] md:text-[15px] text-[#6B7280] pb-5 pl-8 leading-relaxed">
                In most cases, yes. We can either improve your current site or build a new one and migrate content. AI
                automation works with almost any existing platform.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="border border-[#E5E7EB] rounded-xl px-5 py-1 bg-white shadow-sm hover:shadow-md hover:border-[#0F766E]/30 transition-all duration-200"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="flex items-start gap-3 text-[15px] md:text-base font-semibold text-[#1F2937] pr-4">
                  <Image className="h-5 w-5 text-[#0F766E] mt-0.5 flex-shrink-0" />
                  <span>Can I see examples of your work?</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-[14px] md:text-[15px] text-[#6B7280] pb-5 pl-8 leading-relaxed">
                Absolutely. Check the Portfolio page for recent projects and capability examples. We're building our
                first 10 client projects and documenting everything transparently.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-7"
              className="border border-[#E5E7EB] rounded-xl px-5 py-1 bg-white shadow-sm hover:shadow-md hover:border-[#0F766E]/30 transition-all duration-200"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="flex items-start gap-3 text-[15px] md:text-base font-semibold text-[#1F2937] pr-4">
                  <Receipt className="h-5 w-5 text-[#0F766E] mt-0.5 flex-shrink-0" />
                  <span>Do you offer payment plans?</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-[14px] md:text-[15px] text-[#6B7280] pb-5 pl-8 leading-relaxed">
                Yes. Typically 50% upfront and 50% on delivery for projects over £500. AI automation is billed monthly,
                so there's no large upfront investment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-8"
              className="border border-[#E5E7EB] rounded-xl px-5 py-1 bg-white shadow-sm hover:shadow-md hover:border-[#0F766E]/30 transition-all duration-200"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="flex items-start gap-3 text-[15px] md:text-base font-semibold text-[#1F2937] pr-4">
                  <BadgeCheck className="h-5 w-5 text-[#0F766E] mt-0.5 flex-shrink-0" />
                  <span>What happens if I'm not happy with the result?</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-[14px] md:text-[15px] text-[#6B7280] pb-5 pl-8 leading-relaxed">
                We offer unlimited revisions until you're satisfied. If we genuinely can't deliver what you need, we
                provide a full refund. Your success is our reputation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* CTA Card - Compact */}
          <div className="mt-12 flex justify-center animate-fade-in">
            <div className="relative inline-flex items-center gap-4 md:gap-6 px-6 py-4 md:px-8 md:py-5 rounded-2xl bg-gradient-to-r from-[#F0FDFA] to-[#E6FAF7] border border-[#0F766E]/15 shadow-md hover:shadow-lg transition-shadow">
              {/* Icon */}
              <div className="flex-shrink-0 p-2.5 rounded-full bg-[#0F766E]/10">
                <MessageCircle className="h-5 w-5 text-[#0F766E]" />
              </div>

              {/* Text */}
              <div className="text-left">
                <p className="text-sm md:text-base font-semibold text-[#1F2937]">Still have questions?</p>
                <p className="text-xs md:text-sm text-[#6B7280]">We typically respond within a few hours</p>
              </div>

              {/* Button */}
              <Button
                asChild
                size="sm"
                className="group bg-[#0F766E] text-white hover:bg-[#0D9488] shadow-sm hover:shadow-md transition-all font-medium px-4 py-2 text-sm"
              >
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust + global CTA + footer */}
      <TrustBadgesBar />
      <CtaCard />
      <Footer />
      <FloatingActionMenu />
      <MobileFloatingCTA />
    </div>
  );
};

export default Index;
