import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import {
  DollarSign,
  MessageCircle,
  Globe,
  Bot,
  Star,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Smartphone,
  Palette,
  TrendingUp,
  MessageSquare,
  MapPin,
  Image,
  Settings,
  Clock,
  Receipt,
  ShieldCheck,
  BadgeCheck,
  X,
  ExternalLink,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonLegacy } from "@/components/ui/button-legacy";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import FloatingActionMenu from "@/components/FloatingActionMenu";

import { AnimatedSection } from "@/components/AnimatedSection";
import CtaCard from "@/components/CtaCard";
import { useParallax } from "@/hooks/useParallax";
import { SEO } from "@/components/SEO";
import { ReviewSchema } from "@/components/ReviewSchema";
import { FAQSchema } from "@/components/FAQSchema";
import { VideoSchema } from "@/components/VideoSchema";
import { SiteNavigationSchema } from "@/components/SiteNavigationSchema";
import TrustBadgesBar from "@/components/TrustBadgesBar";
import MobileFloatingCTA from "@/components/MobileFloatingCTA";
import { ServiceMockup } from "@/components/ServiceMockup";
import { DeviceMockup } from "@/components/DeviceMockup";

import { DeviceMockupModal } from "@/components/DeviceMockupModal";
import whyChooseUsIllustration from "@/assets/why-choose-us-illustration.png";
import x15Screenshot from "@/assets/x15pcbuilders-screenshot.png";
import portfolioSalon from "@/assets/portfolio-salon.png";
import portfolioChatbot from "@/assets/portfolio-chatbot.png";
import heroBackground from "@/assets/hero-background.jpg";
import heroVideo from "@/assets/hero-video.mp4";

// Lazy load heavy below-the-fold components
const ProcessTimeline = lazy(() => import("@/components/ProcessTimeline").then(m => ({ default: m.ProcessTimeline })));
const SeoAuditForm = lazy(() => import("@/components/SeoAuditForm").then(m => ({ default: m.SeoAuditForm })));
const AIEstimator = lazy(() => import("@/components/AIEstimator").then(m => ({ default: m.AIEstimator })));
const LifestyleMockup = lazy(() => import("@/components/LifestyleMockup").then(m => ({ default: m.LifestyleMockup })));

// Simple loading placeholder
const SectionLoader = () => (
  <div className="flex items-center justify-center py-12">
    <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const parallaxOffset = useParallax({
    speed: 0.5,
    maxOffset: 50,
  });

  const currentMonth = new Date().toLocaleString("en-GB", { month: "long" });

  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [selectedPortfolioProject, setSelectedPortfolioProject] = useState<any | null>(null);

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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Services data intentionally kept for future use
  void [
    { id: "web-app", icon: Globe, title: "Web/App Design", tagline: "Sites that convert visitors into customers", link: "/services#web" },
    { id: "web-dev", icon: Smartphone, title: "Web Development", tagline: "Lightning-fast sites delivered in days", link: "/services#web-development" },
    { id: "apps", icon: Smartphone, title: "App Development", tagline: "Apps your customers will love", link: "/services#app-development" },
    { id: "marketing", icon: TrendingUp, title: "Digital Marketing", tagline: "Rank higher, get more customers", link: "/services#marketing" },
    { id: "branding", icon: Image, title: "Graphic Design", tagline: "Branding that makes you memorable", link: "/services#branding" },
    { id: "ai-automation", icon: Bot, title: "AI Automation", tagline: "24/7 customer service on autopilot", link: "#ai-preview" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Web Development London | Restaurant & Ecommerce Websites | L&D Digital"
        description="Professional website design for restaurants, ecommerce, and brands. Built in 1-14 days from £200. UK-based team. SEO-optimized, mobile-responsive websites."
        keywords="web development London, restaurant website design UK, ecommerce website developer London, professional website builder UK, small business website London, web developer near me, custom website design UK, affordable website design London"
      />
      <ReviewSchema ratingValue="4.9" reviewCount="3" />
      <VideoSchema
        name="L&D Digital - Professional Web Development London"
        description="Professional websites and AI automation that capture leads and book clients 24/7. Websites from £200, AI from £50/month. Built for UK businesses, delivered in 1-14 days."
        thumbnailUrl="https://digital.luminousanddeliver.co.uk/og-image-2026-01-05.jpg"
        contentUrl="https://digital.luminousanddeliver.co.uk/assets/hero-video.mp4"
        uploadDate="2026-01-01"
        duration="PT30S"
      />
      <SiteNavigationSchema />
      <FAQSchema
        pageId="home"
        faqs={[
          {
            question: "How much does a website cost in London?",
            answer: "Professional websites start from £200 for small businesses. Restaurant websites typically cost £200-£400, ecommerce sites £500+, depending on features and complexity."
          },
          {
            question: "How long does it take to build a website?",
            answer: "Most websites are completed in 1-14 days. Simple 5-page sites take 3-7 days, while ecommerce stores typically take 10-14 days."
          },
          {
            question: "Do you design restaurant websites?",
            answer: "Yes, we specialize in restaurant websites with online menus, table booking systems, delivery integration, and mobile optimization for customers searching 'restaurants near me'."
          },
          {
            question: "Can you build ecommerce websites?",
            answer: "Yes, we build full-featured online stores with product catalogs, payment processing (Stripe, PayPal), shopping carts, inventory management, and secure checkout."
          },
          {
            question: "Are your websites mobile-friendly?",
            answer: "Yes, all websites are fully mobile-responsive and optimized for phones, tablets, and desktops. We test on all major devices."
          },
          {
            question: "Do you provide website hosting?",
            answer: "Yes, we provide and manage hosting for your website. This includes security updates, backups, and technical maintenance. Your domain name and content remain yours—we handle the technical side so you can focus on your business."
          },
          {
            question: "Will my website be SEO-optimized?",
            answer: "Yes, all websites are built with SEO best practices including proper meta tags, fast loading speeds, mobile optimization, clean URLs, and semantic HTML."
          },
          {
            question: "Can I update my website myself?",
            answer: "Yes, we build websites with user-friendly content management systems (CMS) so you can easily update content, add blog posts, and make changes without coding."
          },
          {
            question: "Do you work with businesses outside London?",
            answer: "Yes, we serve clients across the UK and internationally. All work is done remotely with video consultations."
          },
          {
            question: "What if I already have a website?",
            answer: "We can redesign existing websites, migrate content, improve SEO, or add new features like booking systems or ecommerce functionality."
          },
          {
            question: "Do you offer ongoing website maintenance?",
            answer: "Yes, we offer optional monthly maintenance packages including updates, security monitoring, backups, and content updates from £25/month."
          },
          {
            question: "What technologies do you use?",
            answer: "We use modern web technologies including React, TypeScript, Tailwind CSS for fast, secure, and scalable websites."
          }
        ]}
      />
      <ScrollProgressBar />
      <Navigation darkHero={true} />

      {/* Hero */}
      <section
        className="relative overflow-hidden min-h-screen flex items-center px-4 sm:px-6 lg:px-8 xl:px-10"
      >
        {/* Cinematic Background Video with Ken Burns + Parallax */}
        <div 
          className="absolute inset-0 scale-110"
          style={{
            transform: `translateY(${parallaxOffset * 0.5}px) scale(1.1)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={heroBackground}
            className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
            aria-hidden="true"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/75 to-slate-900/95" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 text-sm font-medium text-white/90 shadow-lg">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Accepting 3 new projects for <span className="font-semibold text-emerald-400">{currentMonth}</span>
            </div>

            {/* Main heading — large, clear, breathing room */}
            <h1 className="text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              <span className="block text-white">Most Websites</span>
              <span className="block text-white">Lose Clients.</span>
              <span className="block mt-2 md:mt-3">
                <span className="text-white">Yours </span>
                <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent italic">Doesn't Have To.</span>
              </span>
            </h1>

            {/* Subtitle — tighter, scannable */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl mx-auto leading-relaxed">
              Fast, conversion-focused websites for UK businesses — with optional AI automation that captures leads around the clock. From <span className="text-white font-semibold">£200</span>. Delivered in days.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-teal-500 hover:bg-teal-400 text-white shadow-lg shadow-teal-500/25 px-8 text-base"
              >
                <Link to="/contact">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/25 bg-white/5 backdrop-blur-md text-white hover:bg-white/15 px-8 text-base"
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>

            {/* Trust signals — compact row */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-400 pt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400/80 shrink-0" />
                14-Day Money-Back
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400/80 shrink-0" />
                No Lock-in Contracts
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400/80 shrink-0" />
                UK-Based Team
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 text-amber-400/80 shrink-0" />
                <a href="https://g.page/r/CV1yY8JP6yoIEAI/review" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  4.9/5 rating ↗
                </a>
              </span>
            </div>

            {/* Service pills — understated */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              {["Web Development", "AI Automation", "Digital Marketing", "Branding"].map((service) => (
                <span key={service} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-slate-300 tracking-wide">
                  <span className="h-1 w-1 rounded-full bg-teal-400" />
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform & Tools Marquee — inline styles bypass Tailwind flex conflicts */}
      <section aria-label="Platforms and tools we work with" className="bg-white border-y border-slate-100 py-5 relative z-20">
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest text-center mb-4">
          Platforms &amp; Tools We Work With
        </p>
        {/* overflow:hidden on this div clips the animation; no flex here so width:max-content works */}
        <div className="marquee-wrapper group">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-48 z-10" style={{ background: 'linear-gradient(to right, white 0%, white 10%, transparent 100%)' }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-48 z-10" style={{ background: 'linear-gradient(to left, white 0%, white 10%, transparent 100%)' }} />

          {/* Single animated row — both logo sets inside so translateX(-50%) loops */}
          <div className="marquee-strip">
            {/* ---- Logo set A ---- */}
            {/* --- Logo set (duplicated below for seamless loop) --- */}
            {[
              /* Google */
              <span key="google" className="flex items-center gap-2 mx-5 opacity-55 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 flex-shrink-0">
                <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-xs font-semibold text-slate-600 tracking-wide">Google</span>
              </span>,
              /* Ahrefs */
              <span key="ahrefs" className="flex items-center gap-2 mx-5 opacity-55 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 flex-shrink-0">
                <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" aria-hidden="true" fill="#FF642D">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.45 14.5h-2.1l-1.1-3H7.5l-1.05 3H4.4L8.3 7.5h2.85l3.3 9zm4.8 0h-1.95V7.5h1.95v9z"/>
                  <path d="M9.2 12.2l-1-2.85-1 2.85h2z"/>
                </svg>
                <span className="text-xs font-semibold text-slate-600 tracking-wide">Ahrefs</span>
              </span>,
              /* Shopify */
              <span key="shopify" className="flex items-center gap-2 mx-5 opacity-55 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 flex-shrink-0">
                <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" aria-hidden="true" fill="#96BF48">
                  <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.902-.134-1.902-.134-.943-.942-1.055-1.037c-.018-.02-.037-.038-.076-.057l-.943 19.711zM11.088 8.162s-.423-.114-1.057-.114c-1.69 0-2.511 1.056-2.511 2.072 0 1.132.862 1.69 1.649 2.188 1.035.634 1.4.942 1.4 1.593 0 .65-.576 1.114-1.34 1.114-.961 0-1.496-.327-1.496-.327l-.269 1.613s.596.308 1.573.308c1.842 0 3.049-1.075 3.049-2.457 0-1.191-.865-1.746-1.63-2.225-.748-.479-1.418-.882-1.418-1.573 0-.479.362-1.056 1.383-1.056.537 0 .962.154.962.154l.705-1.29zm5.457-.115c-.018-.019-.038-.038-.076-.057-.018 0-.787-.096-.787-.096L15.337.057C15.337.057 14.394 0 14.376 0c-.153 0-.269.038-.346.096L12.338 3.55l-2.052-.576c-.942 1.65-1.573 3.26-1.805 4.755h-.038l-2.01 1.056L5.108 23.94l10.98 2.04L15.337 23.979zM12.76 4.011l-1.228 3.127c-.191-.057-.384-.096-.577-.134.194-1.016.595-2.19 1.036-2.993h.769zm-2.149-.499c-.019 0-.019 0 0 0-.461.883-.845 2.033-1.037 3.164-.288-.076-.577-.153-.844-.23.269-1.075.75-2.15 1.344-2.934h.537zm1.229-.403l-.058.019c-.616.864-1.075 2.092-1.247 3.299-.25-.076-.5-.134-.75-.192C9.977 4.97 10.477 3.703 11.15 2.9l.69.21z"/>
                </svg>
                <span className="text-xs font-semibold text-slate-600 tracking-wide">Shopify</span>
              </span>,
              /* React */
              <span key="react" className="flex items-center gap-2 mx-5 opacity-55 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 flex-shrink-0">
                <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" aria-hidden="true" fill="#61DAFB">
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.104-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.398-.465-.784-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                </svg>
                <span className="text-xs font-semibold text-slate-600 tracking-wide">React</span>
              </span>,
              /* SEMrush */
              <span key="semrush" className="flex items-center gap-2 mx-5 opacity-55 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 flex-shrink-0">
                <svg viewBox="0 0 40 40" className="h-5 w-5 flex-shrink-0" aria-hidden="true">
                  <rect width="40" height="40" rx="8" fill="#FA4B0E"/>
                  <text x="20" y="27" textAnchor="middle" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="18" fill="#fff">S</text>
                </svg>
                <span className="text-xs font-semibold text-slate-600 tracking-wide">SEMrush</span>
              </span>,
              /* Stripe */
              <span key="stripe" className="flex items-center gap-2 mx-5 opacity-55 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 flex-shrink-0">
                <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" aria-hidden="true" fill="#635BFF">
                  <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
                </svg>
                <span className="text-xs font-semibold text-slate-600 tracking-wide">Stripe</span>
              </span>,
              /* Cloudflare */
              <span key="cloudflare" className="flex items-center gap-2 mx-5 opacity-55 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 flex-shrink-0">
                <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" aria-hidden="true" fill="#F48120">
                  <path d="M16.608 15.175l.109-.375c.264-.9.165-1.727-.275-2.332-.405-.558-1.073-.874-1.88-.894l-8.935-.121a.187.187 0 01-.165-.107.197.197 0 01.018-.196c.085-.127.236-.206.395-.206l9.012.122c1.068.046 2.216-.71 2.614-1.672l.511-1.338a.229.229 0 00.014-.122A6.576 6.576 0 008.604 6.4a4.8 4.8 0 00-8.355 3.306c0 .16.009.318.024.474A3.41 3.41 0 000 13.343C0 15.349 1.619 17 3.588 17l12.644-.004c.178 0 .34-.1.42-.256a.467.467 0 00-.044-.565z"/>
                </svg>
                <span className="text-xs font-semibold text-slate-600 tracking-wide">Cloudflare</span>
              </span>,
              /* HubSpot */
              <span key="hubspot" className="flex items-center gap-2 mx-5 opacity-55 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 flex-shrink-0">
                <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" aria-hidden="true" fill="#FF7A59">
                  <path d="M22.13 11.384a4.54 4.54 0 00-2.016-1.42V7.575a1.91 1.91 0 001.104-1.725 1.916 1.916 0 00-1.917-1.916 1.916 1.916 0 00-1.916 1.916c0 .78.467 1.452 1.14 1.748v2.36a4.558 4.558 0 00-2.208 1.155l-6.42-4.994a2.133 2.133 0 00.079-.545 2.135 2.135 0 00-2.135-2.135 2.135 2.135 0 00-2.135 2.135 2.135 2.135 0 002.135 2.135c.39 0 .754-.106 1.066-.29l6.3 4.9a4.548 4.548 0 00-.63 2.308c0 .88.25 1.7.686 2.394l-1.917 1.917a1.564 1.564 0 00-.47-.078 1.58 1.58 0 00-1.58 1.581 1.58 1.58 0 001.58 1.58 1.58 1.58 0 001.58-1.58c0-.178-.033-.347-.085-.506l1.886-1.886a4.542 4.542 0 002.867 1.02 4.558 4.558 0 004.558-4.558c0-1.55-.772-2.92-1.95-3.747zm-2.608 6.217a2.469 2.469 0 01-2.469-2.47 2.469 2.469 0 012.469-2.468 2.469 2.469 0 012.469 2.469 2.469 2.469 0 01-2.47 2.469z"/>
                </svg>
                <span className="text-xs font-semibold text-slate-600 tracking-wide">HubSpot</span>
              </span>,
              /* Yell.com */
              <span key="yell" className="flex items-center gap-2 mx-5 opacity-55 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 flex-shrink-0">
                <svg viewBox="0 0 48 20" className="h-4 w-auto flex-shrink-0" aria-hidden="true">
                  <rect width="48" height="20" rx="4" fill="#FFD400"/>
                  <text x="24" y="15" textAnchor="middle" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="13" fill="#222">yell</text>
                </svg>
                <span className="text-xs font-semibold text-slate-600 tracking-wide">Yell.com</span>
              </span>,
              /* Elementor */
              <span key="elementor" className="flex items-center gap-2 mx-5 opacity-55 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 flex-shrink-0">
                <svg viewBox="0 0 40 40" className="h-5 w-5 flex-shrink-0" aria-hidden="true">
                  <rect width="40" height="40" rx="8" fill="#92003B"/>
                  <rect x="10" y="10" width="5" height="20" rx="1" fill="#fff"/>
                  <rect x="18" y="10" width="12" height="5" rx="1" fill="#fff"/>
                  <rect x="18" y="17.5" width="12" height="5" rx="1" fill="#fff"/>
                  <rect x="18" y="25" width="12" height="5" rx="1" fill="#fff"/>
                </svg>
                <span className="text-xs font-semibold text-slate-600 tracking-wide">Elementor</span>
              </span>,
              /* Square */
              <span key="square" className="flex items-center gap-2 mx-5 opacity-55 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 flex-shrink-0">
                <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" aria-hidden="true" fill="#000000">
                  <path d="M19.394 0H4.606C2.062 0 0 2.062 0 4.606v14.788C0 21.938 2.062 24 4.606 24h14.788C21.938 24 24 21.938 24 19.394V4.606C24 2.062 21.938 0 19.394 0zM16.08 16.08c0 1.104-.896 2-2 2H9.92c-1.104 0-2-.896-2-2V9.92c0-1.104.896-2 2-2h4.16c1.104 0 2 .896 2 2v6.16z"/>
                </svg>
                <span className="text-xs font-semibold text-slate-600 tracking-wide">Square</span>
              </span>,
              /* Google Cloud */
              <span key="gcloud" className="flex items-center gap-2 mx-5 opacity-55 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 flex-shrink-0">
                <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" aria-hidden="true">
                  <path d="M12.19 2.38a9.344 9.344 0 00-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11.247 10.62l.05.030a6.548 6.548 0 003.281.875H19.2a5.862 5.862 0 003.814-1.404 5.741 5.741 0 00.88-7.967l-.037-.048-.049-.055a5.698 5.698 0 00-2.37-1.638 9.344 9.344 0 00-9.248-7.306z" fill="#4285F4"/>
                  <path d="M12.19 2.38a9.344 9.344 0 019.248 7.306 5.698 5.698 0 012.37 1.638l-.067-.077A9.344 9.344 0 0012.19 2.38z" fill="#4285F4"/>
                  <path d="M6.545 15.354l1.71-1.71.195.05a6.5 6.5 0 007.8-7.8l-.05-.195 1.71-1.71A9.337 9.337 0 0119.2 20.83H6.556a6.521 6.521 0 01-3.281-.875l-.05-.03c-4.17-2.51-4.122-8.069-.247-10.62a9.25 9.25 0 013.567-7.516z" fill="#AECBFA"/>
                </svg>
                <span className="text-xs font-semibold text-slate-600 tracking-wide">Google Cloud</span>
              </span>,
            ]}
            {/* ---- Logo set B (duplicate for seamless loop) ---- */}
            {[
              <span key="google-b" className="flex items-center gap-2 mx-5 opacity-55 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 flex-shrink-0"><svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" aria-hidden="true"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg><span className="text-xs font-semibold text-slate-600 tracking-wide">Google</span></span>,
              <span key="ahrefs-b" className="flex items-center gap-2 mx-5 opacity-55 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 flex-shrink-0"><svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" aria-hidden="true" fill="#FF642D"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.45 14.5h-2.1l-1.1-3H7.5l-1.05 3H4.4L8.3 7.5h2.85l3.3 9zm4.8 0h-1.95V7.5h1.95v9z"/><path d="M9.2 12.2l-1-2.85-1 2.85h2z"/></svg><span className="text-xs font-semibold text-slate-600 tracking-wide">Ahrefs</span></span>,
              <span key="shopify-b" className="flex items-center gap-2 mx-5 opacity-55 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 flex-shrink-0"><svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" aria-hidden="true" fill="#96BF48"><path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.902-.134-1.902-.134-.943-.942-1.055-1.037c-.018-.02-.037-.038-.076-.057l-.943 19.711zM11.088 8.162s-.423-.114-1.057-.114c-1.69 0-2.511 1.056-2.511 2.072 0 1.132.862 1.69 1.649 2.188 1.035.634 1.4.942 1.4 1.593 0 .65-.576 1.114-1.34 1.114-.961 0-1.496-.327-1.496-.327l-.269 1.613s.596.308 1.573.308c1.842 0 3.049-1.075 3.049-2.457 0-1.191-.865-1.746-1.63-2.225-.748-.479-1.418-.882-1.418-1.573 0-.479.362-1.056 1.383-1.056.537 0 .962.154.962.154l.705-1.29z"/></svg><span className="text-xs font-semibold text-slate-600 tracking-wide">Shopify</span></span>,
              <span key="react-b" className="flex items-center gap-2 mx-5 opacity-55 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 flex-shrink-0"><svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" aria-hidden="true" fill="#61DAFB"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278z"/></svg><span className="text-xs font-semibold text-slate-600 tracking-wide">React</span></span>,
              <span key="semrush-b" className="flex items-center gap-2 mx-5 opacity-55 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 flex-shrink-0"><svg viewBox="0 0 40 40" className="h-5 w-5 flex-shrink-0" aria-hidden="true"><rect width="40" height="40" rx="8" fill="#FA4B0E"/><text x="20" y="27" textAnchor="middle" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="18" fill="#fff">S</text></svg><span className="text-xs font-semibold text-slate-600 tracking-wide">SEMrush</span></span>,
              <span key="stripe-b" className="flex items-center gap-2 mx-5 opacity-55 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 flex-shrink-0"><svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" aria-hidden="true" fill="#635BFF"><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/></svg><span className="text-xs font-semibold text-slate-600 tracking-wide">Stripe</span></span>,
              <span key="cloudflare-b" className="flex items-center gap-2 mx-5 opacity-55 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 flex-shrink-0"><svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" aria-hidden="true" fill="#F48120"><path d="M16.608 15.175l.109-.375c.264-.9.165-1.727-.275-2.332-.405-.558-1.073-.874-1.88-.894l-8.935-.121a.187.187 0 01-.165-.107.197.197 0 01.018-.196c.085-.127.236-.206.395-.206l9.012.122c1.068.046 2.216-.71 2.614-1.672l.511-1.338a.229.229 0 00.014-.122A6.576 6.576 0 008.604 6.4a4.8 4.8 0 00-8.355 3.306c0 .16.009.318.024.474A3.41 3.41 0 000 13.343C0 15.349 1.619 17 3.588 17l12.644-.004c.178 0 .34-.1.42-.256a.467.467 0 00-.044-.565z"/></svg><span className="text-xs font-semibold text-slate-600 tracking-wide">Cloudflare</span></span>,
              <span key="hubspot-b" className="flex items-center gap-2 mx-5 opacity-55 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 flex-shrink-0"><svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" aria-hidden="true" fill="#FF7A59"><path d="M22.13 11.384a4.54 4.54 0 00-2.016-1.42V7.575a1.91 1.91 0 001.104-1.725 1.916 1.916 0 00-1.917-1.916 1.916 1.916 0 00-1.916 1.916c0 .78.467 1.452 1.14 1.748v2.36a4.558 4.558 0 00-2.208 1.155l-6.42-4.994a2.133 2.133 0 00.079-.545 2.135 2.135 0 00-2.135-2.135 2.135 2.135 0 00-2.135 2.135 2.135 2.135 0 002.135 2.135c.39 0 .754-.106 1.066-.29l6.3 4.9a4.548 4.548 0 00-.63 2.308c0 .88.25 1.7.686 2.394l-1.917 1.917a1.564 1.564 0 00-.47-.078 1.58 1.58 0 00-1.58 1.581 1.58 1.58 0 001.58 1.58 1.58 1.58 0 001.58-1.58c0-.178-.033-.347-.085-.506l1.886-1.886a4.542 4.542 0 002.867 1.02 4.558 4.558 0 004.558-4.558c0-1.55-.772-2.92-1.95-3.747zm-2.608 6.217a2.469 2.469 0 01-2.469-2.47 2.469 2.469 0 012.469-2.468 2.469 2.469 0 012.469 2.469 2.469 2.469 0 01-2.47 2.469z"/></svg><span className="text-xs font-semibold text-slate-600 tracking-wide">HubSpot</span></span>,
              <span key="yell-b" className="flex items-center gap-2 mx-5 opacity-55 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 flex-shrink-0"><svg viewBox="0 0 48 20" className="h-4 w-auto flex-shrink-0" aria-hidden="true"><rect width="48" height="20" rx="4" fill="#FFD400"/><text x="24" y="15" textAnchor="middle" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="13" fill="#222">yell</text></svg><span className="text-xs font-semibold text-slate-600 tracking-wide">Yell.com</span></span>,
              <span key="elementor-b" className="flex items-center gap-2 mx-5 opacity-55 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 flex-shrink-0"><svg viewBox="0 0 40 40" className="h-5 w-5 flex-shrink-0" aria-hidden="true"><rect width="40" height="40" rx="8" fill="#92003B"/><rect x="10" y="10" width="5" height="20" rx="1" fill="#fff"/><rect x="18" y="10" width="12" height="5" rx="1" fill="#fff"/><rect x="18" y="17.5" width="12" height="5" rx="1" fill="#fff"/><rect x="18" y="25" width="12" height="5" rx="1" fill="#fff"/></svg><span className="text-xs font-semibold text-slate-600 tracking-wide">Elementor</span></span>,
              <span key="square-b" className="flex items-center gap-2 mx-5 opacity-55 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 flex-shrink-0"><svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" aria-hidden="true" fill="#000000"><path d="M19.394 0H4.606C2.062 0 0 2.062 0 4.606v14.788C0 21.938 2.062 24 4.606 24h14.788C21.938 24 24 21.938 24 19.394V4.606C24 2.062 21.938 0 19.394 0zM16.08 16.08c0 1.104-.896 2-2 2H9.92c-1.104 0-2-.896-2-2V9.92c0-1.104.896-2 2-2h4.16c1.104 0 2 .896 2 2v6.16z"/></svg><span className="text-xs font-semibold text-slate-600 tracking-wide">Square</span></span>,
              <span key="gcloud-b" className="flex items-center gap-2 mx-5 opacity-55 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300 flex-shrink-0"><svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" aria-hidden="true"><path d="M12.19 2.38a9.344 9.344 0 00-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11.247 10.62l.05.030a6.548 6.548 0 003.281.875H19.2a5.862 5.862 0 003.814-1.404 5.741 5.741 0 00.88-7.967l-.037-.048-.049-.055a5.698 5.698 0 00-2.37-1.638 9.344 9.344 0 00-9.248-7.306z" fill="#4285F4"/></svg><span className="text-xs font-semibold text-slate-600 tracking-wide">Google Cloud</span></span>,
            ]}
          </div>{/* end marquee-strip */}
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
                title: "Sites That Win New Business",
                tagline: "Built fast, built to convert, built to last",
                fullDescription:
                  "Modern, responsive websites built for speed and performance. From simple business sites to complex web applications, we create platforms that work flawlessly on every device and scale as you grow.",
                process: [
                  "Technical Planning & Architecture",
                  "Development & Integration",
                  "Quality Testing & Optimization",
                  "Launch & Ongoing Support",
                ],
                link: "#web-preview",
                mockupType: "web-dev" as const,
              },
              {
                id: "maintenance",
                icon: Settings,
                iconBg: "bg-sky-100",
                iconColor: "text-sky-600",
                title: "Keep Your Site Safe & Earning",
                tagline: "No downtime. No surprises. Just peace of mind.",
                fullDescription:
                  "Regular updates, security monitoring, and priority support so you never have to worry about your website. We handle backups, performance optimization, content updates, and emergency fixes while you focus on your business.",
                process: [
                  "Security Updates & Monitoring",
                  "Performance Optimization",
                  "Content Updates & Backups",
                  "Priority Support & Emergency Fixes",
                ],
                link: "/services#maintenance",
                mockupType: "maintenance" as const,
              },
              {
                id: "ai-automation",
                icon: Bot,
                iconBg: "bg-emerald-100",
                iconColor: "text-emerald-600",
                title: "Your 24/7 Sales & Booking Agent",
                tagline: "Answers enquiries, books clients, works while you sleep",
                fullDescription:
                  "AI that handles customer inquiries, schedules appointments, and manages routine tasks 24/7. Respond instantly to every customer while freeing up hours in your day.",
                process: [
                  "Workflow Analysis & Planning",
                  "AI Training & Configuration",
                  "Integration & Testing",
                  "Launch & Performance Monitoring",
                ],
                link: "#ai-preview",
                mockupType: "ai-automation" as const,
              },
              {
                id: "design",
                icon: Palette,
                iconBg: "bg-orange-100",
                iconColor: "text-orange-600",
                title: "Designs That Turn Clicks Into Clients",
                tagline: "First impressions that stop the scroll",
                fullDescription:
                  "Beautiful, user-focused designs that capture your brand and guide visitors to take action. Every element is crafted to create an engaging experience that turns clicks into customers.",
                process: [
                  "Discovery & Brand Research",
                  "Design Concepts & Mockups",
                  "User Experience Testing",
                  "Final Design & Handoff",
                ],
                link: "/services#design",
                mockupType: "design" as const,
              },
              {
                id: "marketing",
                icon: TrendingUp,
                iconBg: "bg-blue-100",
                iconColor: "text-blue-600",
                title: "Get Found. Get Customers.",
                tagline: "More visibility, more traffic, more revenue",
                fullDescription:
                  "Digital marketing that puts you in front of high-intent buyers. We combine SEO, targeted ads, content strategy, and social media to drive visibility where it matters.",
                process: [
                  "Market & Competitor Analysis",
                  "Strategy & Budget Planning",
                  "Campaign Launch (SEO, PPC & Content)",
                  "Performance Tracking & Optimization",
                ],
                link: "/services#marketing",
                mockupType: "marketing" as const,
              },
              {
                id: "branding",
                icon: Image,
                iconBg: "bg-violet-100",
                iconColor: "text-violet-600",
                title: "A Brand They Remember",
                tagline: "Stand out and stay top of mind",
                fullDescription:
                  "Professional branding and visual design that communicates your unique value and sets you apart. From logos to complete brand identities, we create cohesive visual systems.",
                process: [
                  "Brand Discovery & Research",
                  "Concept Creation & Exploration",
                  "Design Development & Refinement",
                  "Brand Guidelines & Assets Delivery",
                ],
                link: "/services#branding",
                mockupType: "branding" as const,
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
                    <div
                      className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
                        service.iconColor === "text-rose-600"
                          ? "bg-gradient-to-br from-rose-400 to-rose-500 shadow-[0_8px_25px_rgba(251,113,133,0.5)] group-hover:shadow-[0_12px_35px_rgba(251,113,133,0.7)]"
                          : service.iconColor === "text-sky-600"
                            ? "bg-gradient-to-br from-sky-400 to-sky-500 shadow-[0_8px_25px_rgba(56,189,248,0.5)] group-hover:shadow-[0_12px_35px_rgba(56,189,248,0.7)]"
                            : service.iconColor === "text-emerald-600"
                              ? "bg-gradient-to-br from-emerald-400 to-emerald-500 shadow-[0_8px_25px_rgba(52,211,153,0.5)] group-hover:shadow-[0_12px_35px_rgba(52,211,153,0.7)]"
                              : service.iconColor === "text-orange-600"
                                ? "bg-gradient-to-br from-orange-400 to-orange-500 shadow-[0_8px_25px_rgba(251,146,60,0.5)] group-hover:shadow-[0_12px_35px_rgba(251,146,60,0.7)]"
                                : service.iconColor === "text-blue-600"
                                  ? "bg-gradient-to-br from-blue-400 to-blue-500 shadow-[0_8px_25px_rgba(96,165,250,0.5)] group-hover:shadow-[0_12px_35px_rgba(96,165,250,0.7)]"
                                  : "bg-gradient-to-br from-violet-400 to-violet-500 shadow-[0_8px_25px_rgba(167,139,250,0.5)] group-hover:shadow-[0_12px_35px_rgba(167,139,250,0.7)]"
                      }`}
                    >
                      <Icon className="h-7 w-7 text-gray-900" strokeWidth={2.5} />
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground">{service.title}</CardTitle>
                    <p className="text-sm font-medium text-muted-foreground mt-1">{service.tagline}</p>
                    
                    {/* Service Mockup Preview */}
                    <div className="mt-4 transition-all duration-300 opacity-80 group-hover:opacity-100">
                      <ServiceMockup type={service.mockupType} />
                    </div>
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
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                            {service.fullDescription}
                          </p>
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

      {/* Free Website Audit — Lead Magnet */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-50/40 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Not Sure What Your Site Needs?
          </h2>
          <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto">
            Get a free website audit in 24 hours — we'll tell you exactly what's costing you customers. No fluff, no obligation.
          </p>
          <Suspense fallback={<SectionLoader />}>
            <SeoAuditForm variant="embedded" />
          </Suspense>
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
              <Card className="h-full hover:border-[#F59E0B] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 p-8 md:p-12 border-2 border-[#E5E7EB] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <div className="flex flex-col items-center text-center h-full">
                  {/* Image Container - Fixed Height */}
                  <div className="h-[180px] md:h-[240px] flex items-center justify-center mb-6">
                    <DeviceMockup type="web" className="scale-100 md:scale-110" />
                  </div>
                  
                  {/* Title - min height to prevent shifting */}
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-4 min-h-[72px] flex items-center">Professional Websites That Win Customers</h3>

                  {/* Subtitle */}
                  <p className="text-base text-[#6B7280] mb-6 min-h-[48px]">For businesses ready to grow online</p>

                  {/* Features - grows to fill space */}
                  <div className="space-y-3 text-left w-full flex-1">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-sm text-[#1F2937]">One-time payment</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-sm text-[#1F2937]">Your domain & content stay yours</span>
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

                  {/* Bottom section - pushed to bottom */}
                  <div className="mt-auto pt-6 text-center w-full">
                    <p className="text-xl font-semibold text-[#0F766E] mb-2">Starting at £200</p>
                    <p className="text-sm text-[#6B7280] mb-6">Currently booking 2–3 weeks ahead</p>

                    <Button asChild className="w-full bg-[#0F766E] hover:bg-[#F59E0B] text-white py-6 text-base">
                      <Link to="/web-package">
                        View Web Packages <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            {/* RIGHT CARD - AI AUTOMATION */}
            <AnimatedSection animation="fade" staggerIndex={1}>
              <Card className="h-full hover:border-[#F59E0B] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 p-8 md:p-12 border-2 border-[#E5E7EB] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <div className="flex flex-col items-center text-center h-full">
                  {/* Image Container - Fixed Height */}
                  <div className="h-[180px] md:h-[240px] flex items-center justify-center mb-6">
                    <DeviceMockup type="ai" className="scale-100 md:scale-110" />
                  </div>
                  
                  {/* Title - min height to prevent shifting */}
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-4 min-h-[72px] flex items-center">AI That Never Misses A Lead</h3>

                  {/* Subtitle */}
                  <p className="text-base text-[#6B7280] mb-6 min-h-[48px]">
                    For businesses ready to automate customer service 24/7
                  </p>

                  {/* Features - grows to fill space */}
                  <div className="space-y-3 text-left w-full flex-1">
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

                  {/* Bottom section - pushed to bottom */}
                  <div className="mt-auto pt-6 text-center w-full">
                    <p className="text-xl font-semibold text-[#0F766E] mb-2">Starting at £50/month</p>
                    <p className="text-sm text-[#6B7280] mb-6">Limited onboarding slots each month</p>

                    <Button asChild className="w-full bg-[#0F766E] hover:bg-[#F59E0B] text-white py-6 text-base">
                      <Link to="/ai-package">
                        View AI Solutions <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
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
                {/* Checklist item 1 - Lightning Fast Delivery */}
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-100 to-rose-50 flex items-center justify-center mt-0.5 shadow-sm border border-rose-200/50 group-hover:scale-105 transition-transform">
                    <div className="text-center">
                      <Clock className="h-5 w-5 text-rose-500 mx-auto" />
                      <span className="text-[10px] font-bold text-rose-600">1-14</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Lightning-Fast Delivery</h3>
                    <p className="text-slate-600">
                      Your project delivered in 1–14 days, not months. We move fast without cutting corners.
                    </p>
                  </div>
                </div>

                {/* Checklist item 2 - Transparent Pricing */}
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center mt-0.5 shadow-sm border border-emerald-200/50 group-hover:scale-105 transition-transform">
                    <div className="text-center">
                      <Receipt className="h-5 w-5 text-emerald-500 mx-auto" />
                      <span className="text-[10px] font-bold text-emerald-600">100%</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">100% Transparent Pricing</h3>
                    <p className="text-slate-600">
                      No hidden fees, no surprises. You know exactly what you're paying for upfront.
                    </p>
                  </div>
                </div>

                {/* Checklist item 3 - Money Back Guarantee */}
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mt-0.5 shadow-sm border border-blue-200/50 group-hover:scale-105 transition-transform">
                    <div className="text-center">
                      <ShieldCheck className="h-5 w-5 text-blue-500 mx-auto" />
                      <span className="text-[10px] font-bold text-blue-600">14 DAY</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">14-Day Money-Back Guarantee</h3>
                    <p className="text-slate-600">
                      Not happy with the result? Full refund within 14 days. Zero risk to you.
                    </p>
                  </div>
                </div>

                {/* Checklist item 4 - UK Based */}
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center mt-0.5 shadow-sm border border-amber-200/50 group-hover:scale-105 transition-transform">
                    <div className="text-center">
                      <MapPin className="h-5 w-5 text-amber-500 mx-auto" />
                      <span className="text-[10px] font-bold text-amber-600">UK</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">UK-Based Support</h3>
                    <p className="text-slate-600">
                      Real people, same timezone, responsive communication throughout your project.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button
                  asChild
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-500/25"
                >
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

          <Suspense fallback={<SectionLoader />}>
            <ProcessTimeline />
          </Suspense>
        </div>
      </section>

      {/* Personalised Apps Promo - Subtle Banner */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-50 via-teal-50/30 to-slate-50 border-y border-border/40">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-teal-100 flex items-center justify-center shrink-0">
                <Smartphone className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Need a Custom Business Tool?</h3>
                <p className="text-sm text-slate-600">Invoice trackers, finance managers, booking systems — built just for you.</p>
              </div>
            </div>
            <Button asChild variant="outline" className="shrink-0 border-teal-200 text-teal-700 hover:bg-teal-50 hover:text-teal-800">
              <Link to="/services/personalised-apps">
                Explore Personalised Apps <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Estimator Section */}
      <Suspense fallback={<SectionLoader />}>
        <AIEstimator />
      </Suspense>

      {/* Portfolio Preview */}
      <section
        id="portfolio-preview"
        className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Recent Work &amp; Capabilities
              </h2>
              <p className="text-slate-600 max-w-xl">
                See how we've helped other businesses scale and automate their operations with modern technology.
              </p>
            </div>
            <Button 
              asChild 
              variant="outline" 
              className="shrink-0 border-slate-300 text-slate-700 hover:bg-slate-50 gap-2"
            >
              <Link to="/portfolio">
                View All Projects
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Portfolio Cards */}
          {(() => {
            const portfolioProjects = [
              {
                id: "x15-pc",
                title: "L&D Builds",
                category: "Web Development",
                type: "Scale Package",
                features: ["Professional showcase website", "Service packages display", "Build request form", "SEO optimization", "Fast loading performance"],
                timeline: "10–14 Days",
                tech: "React, Tailwind CSS, SEO",
                isLive: true,
                liveUrl: "https://builds.luminousanddeliver.co.uk",
                image: x15Screenshot,
              },
              {
                id: "elite-salon",
                title: "Elite Salon Website",
                category: "Booking & Automation",
                type: "Growth Package",
                features: ["Professional booking system", "Mobile-responsive design", "Payment integration", "Service gallery", "Contact forms"],
                timeline: "5–7 Days",
                tech: "React, Stripe, Calendly",
                image: portfolioSalon,
              },
              {
                id: "ai-chatbot",
                title: "AI Chatbot Integration",
                category: "AI Solutions",
                type: "AI Solution",
                features: ["24/7 customer support", "Lead qualification", "Multi-platform (web + social)", "Custom training", "Analytics dashboard"],
                timeline: "2–4 Days",
                tech: "OpenAI, Node.js, React",
                image: portfolioChatbot,
              },
            ];

            const variants: Array<'imac' | 'macbook' | 'laptop'> = ['imac', 'macbook', 'laptop'];
            
            return (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
                  {portfolioProjects.map((project, index) => (
                    <AnimatedSection key={project.title} staggerIndex={index} animation="fade">
                      <div 
                        className="cursor-pointer group"
                        onClick={() => setSelectedPortfolioProject(project)}
                      >
                        {/* Lifestyle Mockup with Category Badge */}
                        <div className="relative mb-6">
                          <Suspense fallback={<div className="aspect-[4/3] bg-muted animate-pulse rounded-2xl" />}>
                            <LifestyleMockup 
                              imageSrc={project.image} 
                              alt={`${project.title} Website`}
                              variant={variants[index % 3]}
                              className="transform group-hover:scale-[1.02] transition-transform duration-500 rounded-2xl"
                            />
                          </Suspense>
                          {/* Category Badge Overlay */}
                          <div className="absolute top-4 left-4 z-10">
                            <Badge className="bg-teal-600/90 backdrop-blur-sm text-white border-0 px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 shadow-lg">
                              <Tag className="h-3 w-3" />
                              {project.category.toUpperCase()}
                            </Badge>
                          </div>
                        </div>
                        
                        {/* Content Card */}
                        <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                          <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors">
                            {project.title}
                          </h3>
                          
                          {/* Tech Stack */}
                          <div className="flex items-center justify-between text-sm mb-2">
                            <span className="text-slate-500 font-medium">Tech Stack:</span>
                            <span className="text-slate-700 font-semibold">{project.tech}</span>
                          </div>
                          
                          {/* Timeline */}
                          <div className="flex items-center justify-between text-sm mb-5">
                            <span className="text-slate-500 font-medium">Timeline:</span>
                            <span className="text-teal-600 font-bold">{project.timeline}</span>
                          </div>
                          
                          {/* Button */}
                          <Button 
                            variant="outline" 
                            className="w-full border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-teal-300 hover:text-teal-700 rounded-full py-5"
                          >
                            Project Details
                          </Button>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>

                {/* Device Mockup Modal */}
                {selectedPortfolioProject && (
                  <DeviceMockupModal
                    isOpen={!!selectedPortfolioProject}
                    onClose={() => setSelectedPortfolioProject(null)}
                    project={selectedPortfolioProject}
                    imageSrc={selectedPortfolioProject.image}
                  />
                )}
              </>
            );
          })()}
        </div>
      </section>

      {/* Client Wins */}
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-10 bg-slate-50">
        <div className="max-w-7xl mx-auto fade-in-section">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-3">Real Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Achieved</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Not just pretty websites — measurable changes for real UK businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {/* Card 1 — Laser Light Skin Clinic (real client) */}
            <Card className="bg-white border border-border/50 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-teal-100 text-teal-700 border-0 text-xs font-semibold">Healthcare / Clinic</Badge>
                  <span className="text-xs text-slate-400 font-medium">East London</span>
                </div>
                <CardTitle className="text-base font-bold text-slate-900 leading-snug">Laser Light Skin Clinic</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-4 pt-0">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-rose-500 mb-1">The Problem</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A slow, broken WordPress site was hiding their NHS-approved credentials behind broken shortcodes and a cluttered 20-item menu — losing bookings to competitors daily.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-teal-600 mb-1">What We Did</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Rebuilt the entire site in React in 7 days: clean navigation, structured pricing cards, NHS trust badge in the hero, and local SEO across Dagenham and Barking.
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 mb-2">The Result</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-medium">
                      <CheckCircle2 className="h-3 w-3" /> Live in 7 days
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-medium">
                      <CheckCircle2 className="h-3 w-3" /> 5★ trust signals above fold
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-medium">
                      <CheckCircle2 className="h-3 w-3" /> Local SEO across 6 areas
                    </span>
                  </div>
                </div>
                <a
                  href="https://laserlightskinclinic.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-teal-600 hover:text-teal-700 font-semibold flex items-center gap-1"
                >
                  View Live Site <ExternalLink className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>

            {/* Card 2 — Hair Salon */}
            <Card className="bg-white border border-border/50 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-rose-100 text-rose-700 border-0 text-xs font-semibold">Salon / Beauty</Badge>
                  <span className="text-xs text-slate-400 font-medium">SE15, London</span>
                </div>
                <CardTitle className="text-base font-bold text-slate-900 leading-snug">Independent Hair Salon</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-4 pt-0">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-rose-500 mb-1">The Problem</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Clients were calling to book during busy hours, then hanging up. No online presence meant evenings and weekends were dead time for capturing new business.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-teal-600 mb-1">What We Did</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Built a clean salon site with integrated online booking, a service gallery, and a mobile-first layout optimised for "hair salon near me" searches.
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 mb-2">The Result</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-medium">
                      <CheckCircle2 className="h-3 w-3" /> Bookings 24/7, no phone needed
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-medium">
                      <CheckCircle2 className="h-3 w-3" /> Delivered in 5 days
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 italic">"Got a quote in 2 hours — way faster than any other developer." — Sarah, Salon Owner</p>
              </CardContent>
            </Card>

            {/* Card 3 — Trades */}
            <Card className="bg-white border border-border/50 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-sky-100 text-sky-700 border-0 text-xs font-semibold">Trades / Home Services</Badge>
                  <span className="text-xs text-slate-400 font-medium">Birmingham</span>
                </div>
                <CardTitle className="text-base font-bold text-slate-900 leading-snug">Independent Plumber</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-4 pt-0">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-rose-500 mb-1">The Problem</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Relying entirely on word-of-mouth and a Facebook page. No website meant no quote requests from Google, and no way for new customers to verify credentials.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-teal-600 mb-1">What We Did</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Built a trust-led trades site with a quote request form, areas covered map, gas-safe badge in the hero, and transparent pricing — live in 4 days.
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 mb-2">The Result</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-medium">
                      <CheckCircle2 className="h-3 w-3" /> Quote requests from Google Search
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-medium">
                      <CheckCircle2 className="h-3 w-3" /> £300, live in 4 days
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 italic">"Love how transparent the pricing is. No BS." — James, Plumber</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50">
              <Link to="/portfolio">See All Client Work <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
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
                Most projects delivered in under 3 weeks.
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
                We use modern tools and run lean—no expensive offices or account managers. You get agency-quality work
                without the overhead.
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
                You own your domain, hosting account, and all content. The codebase remains with L&D Digital to ensure
                quality, security, and maintainability.
                <br />
                <br />
                If you host the site yourself, it stays online as long as your hosting is active. If you're on our
                hosting or maintenance plan, the site remains live while your plan is active.
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
                Unlimited revisions until you're satisfied. After launch, minor tweaks are free for 30 days. We also
                offer maintenance plans if you prefer we handle ongoing updates.
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
                <p className="text-xs md:text-sm text-[#6B7280]">
                  Still have questions? We typically respond within 3 hours
                </p>
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
