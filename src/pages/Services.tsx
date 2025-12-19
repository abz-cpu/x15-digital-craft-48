// src/pages/Services.tsx

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Container } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe2,
  Smartphone,
  Bot,
  MessageSquare,
  MessageCircle,
  PhoneCall,
  Sparkles,
  Shield,
  Wrench,
  Cpu,
  LayoutTemplate,
  Brush,
  Headset,
  Zap,
  HardDrive,
  Activity,
  Gauge,
  Eye,
  FolderSync,
  Lock,
  ClipboardCheck,
  Palette,
  Image,
  TrendingUp,
  Target,
  Mail,
  DollarSign,
  Users,
  Calendar,
  FileText,
  Video,
  Star,
  Cloud,
  ShoppingBag,
  Activity as ActivityIcon,
  HardDrive as HardDriveIcon,
  CheckCircle2,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

// ADD-ONS DATA
const addOnCategories = [
  {
    id: "speed",
    label: "Speed & Priority",
    icon: Zap,
    addons: [
      {
        name: "Rush Delivery",
        icon: Zap,
        price: "£150 - £500",
        description: "Jump the queue. Launch in 24-48 hours instead of standard timeline.",
        perfectFor: ["Urgent launches", "Time-sensitive campaigns", '"We needed it yesterday" situations'],
        details: "Pricing: DIY/Starter £150, Business £250, Premium £400, Web App £500",
      },
      {
        name: "Priority Setup",
        icon: Sparkles,
        price: "£100 - £200",
        description: "Start your project within 24 hours (instead of 2-3 day wait).",
        perfectFor: ["Fast-moving businesses", "Seasonal launches", "Beating competitors to market"],
        details: "Doesn't speed up delivery, just starts faster",
      },
    ],
  },
  {
    id: "technical",
    label: "Technical & Performance",
    icon: Gauge,
    addons: [
      {
        name: "Performance Optimization",
        icon: Gauge,
        price: "£150 - £400",
        description: "Speed tuning, Core Web Vitals optimization, Google PageSpeed 90+ score.",
        perfectFor: ["E-commerce (speed = sales)", "SEO improvement", "Mobile-first businesses"],
        details: "Image optimization, code minification, Core Web Vitals fixes, before/after report",
      },
      {
        name: "Accessibility Compliance",
        icon: Eye,
        price: "£100 - £350",
        description: "WCAG 2.1 AA compliance, screen reader optimization, keyboard navigation.",
        perfectFor: [
          "Public sector/government",
          "Healthcare, education, finance",
          "Legal compliance (ADA, Equality Act)",
        ],
        details: "Pricing: Starter £100, Business £200, Premium/complex £350",
      },
      {
        name: "Multi-language Setup",
        icon: Globe2,
        price: "£200 - £500",
        description: "Reach international customers with multi-language support.",
        perfectFor: ["UK businesses targeting EU", "International services", "Tourism, hospitality, e-commerce"],
        details: "2 languages £200, 3 languages £350, 4+ languages £500",
      },
      {
        name: "Content Migration",
        icon: FolderSync,
        price: "£150 - £500",
        description: "Hassle-free move from your old site. We handle everything.",
        perfectFor: ["Redesigns", "Platform switches (Wix → custom, etc.)", "Modernizing legacy sites"],
        details: "<20 pages £150, 20-50 pages £300, 50+ pages £500",
      },
    ],
  },
  {
    id: "security",
    label: "Security & Compliance",
    icon: Shield,
    addons: [
      {
        name: "SSL Certificate & Security",
        icon: Lock,
        price: "Included Free ✅",
        description: "HTTPS encryption, secure connection (padlock icon), basic security hardening.",
        perfectFor: ["All websites"],
        details: "This is standard in ALL our packages.",
      },
      {
        name: "Advanced Security & Monitoring",
        icon: Shield,
        price: "£100 - £300",
        description: "Enhanced protection: DDoS protection, malware scanning, security monitoring.",
        perfectFor: ["E-commerce sites", "Sites handling sensitive data", "High-traffic sites"],
        details: "WAF, DDoS protection, malware scanning, security dashboard, automated alerts",
      },
      {
        name: "GDPR Compliance Setup",
        icon: ClipboardCheck,
        price: "£80 - £200",
        description: "Cookie consent, privacy policy, data handling compliant with UK/EU law.",
        perfectFor: ["UK/EU businesses", "Sites with forms/email capture", "E-commerce sites"],
        details: "Basic (banner + privacy) £80, Standard (+ forms) £150, Advanced (e-commerce) £200",
      },
    ],
  },
  {
    id: "branding",
    label: "Branding & Design",
    icon: Palette,
    addons: [
      {
        name: "Logo Design",
        icon: Brush,
        price: "£80 - £250",
        description: "Professional logo design with 2-3 concepts and unlimited revisions.",
        perfectFor: ["New businesses", "Rebrands", "Startups without existing branding"],
        details: "Basic logo £80, Logo + variations £150, Full brand identity £250",
      },
      {
        name: "Custom Illustrations",
        icon: Image,
        price: "£100 - £400",
        description: "Bespoke illustrations, icons, or graphics for your website.",
        perfectFor: ["Unique brand personality", "Storytelling sections", "Service/product explanations"],
        details: "3 icons £100, 5-7 illustrations £250, 10+ illustrations £400",
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing & SEO",
    icon: TrendingUp,
    addons: [
      {
        name: "Advanced SEO Package",
        icon: TrendingUp,
        price: "£250 - £600",
        description: "Comprehensive SEO: keyword research, competitor analysis, technical optimization.",
        perfectFor: ["Local businesses", "High-competition industries", "Long-term organic growth"],
        details: "Local SEO £250, Regional SEO £400, National/competitive £600",
      },
      {
        name: "Google Ads Setup",
        icon: Target,
        price: "£200 - £400",
        description: "Professional Google Ads campaign setup for immediate traffic.",
        perfectFor: ["Immediate lead generation", "Seasonal campaigns", "Testing market demand"],
        details: "Campaign setup, keyword research, conversion tracking (ad spend not included)",
      },
      {
        name: "Email Marketing Setup",
        icon: Mail,
        price: "£150 - £350",
        description: "Professional email setup: Mailchimp/ConvertKit integration, templates, automation.",
        perfectFor: ["Building email lists", "Customer nurture sequences", "Newsletter launches"],
        details: "Basic (signup + 1 template) £150, Standard (+ sequences) £250, Advanced £350",
      },
    ],
  },
  {
    id: "ecommerce",
    label: "E-commerce & Conversions",
    icon: DollarSign,
    addons: [
      {
        name: "E-commerce Setup",
        icon: ShoppingBag,
        price: "£400 - £900",
        description: "Full online shop: products, cart, checkout, payment processing.",
        perfectFor: ["Retail businesses", "Service packages for sale", "Digital products"],
        details: "Up to 10 products £400, 11-30 products £650, 31-50 products £900, 50+ custom quote",
      },
      {
        name: "Membership Portal",
        icon: Users,
        price: "£300 - £800",
        description: "Members-only area with user accounts, gated content, subscriptions.",
        perfectFor: ["Online courses", "Subscription services", "Community platforms", "Premium content"],
        details: "Basic (login + content) £300, Standard (+ payments) £500, Advanced (full portal) £800",
      },
      {
        name: "Booking System",
        icon: Calendar,
        price: "£200 - £500",
        description: "Appointment booking, calendar sync, automated reminders.",
        perfectFor: ["Salons, clinics, consultants", "Service-based businesses", "1-on-1 appointments"],
        details: "Basic (Calendly embed) £200, Standard (custom) £350, Advanced (payments) £500",
      },
    ],
  },
  {
    id: "content",
    label: "Content & Training",
    icon: FileText,
    addons: [
      {
        name: "Professional Content Writing",
        icon: FileText,
        price: "£40 - £120 per page",
        description: "Professional, SEO-optimized copywriting for your website.",
        perfectFor: ["Businesses without time to write", "SEO-optimized content", "Professional tone & polish"],
        details: "Basic page (300 words) £40, Standard (500 words) £70, Long-form (1,000+ words) £120",
      },
      {
        name: "Website Training (1 hour)",
        icon: Video,
        price: "£80 - £150",
        description: "1-hour Zoom session: learn to update your site, add content, manage forms.",
        perfectFor: ["DIY content updates", "Empowering your team", "Reducing reliance on developers"],
        details: "1 person £80, 2-5 people (team training) £150",
      },
    ],
  },
  {
    id: "hosting",
    label: "Hosting & Infrastructure",
    icon: Cloud,
    addons: [
      {
        name: "Cloud Hosting Setup",
        icon: Cloud,
        price: "£80 - £200",
        description: "Professional hosting setup on AWS, Google Cloud, or premium providers.",
        perfectFor: ["High-traffic sites", "E-commerce", "Custom requirements"],
        details: "Basic (shared) £80, Standard (VPS/cloud) £150, Enterprise (dedicated) £200",
      },
      {
        name: "Automated Backups",
        icon: HardDriveIcon,
        price: "£50 - £150",
        description: "Daily automated backups, uptime monitoring, instant alerts.",
        perfectFor: ["E-commerce sites", "Business-critical sites", "Peace of mind"],
        details: "Daily backups, 30-day retention, uptime monitoring, 1-click restore",
      },
    ],
  },
  {
    id: "analytics",
    label: "Analytics & Tracking",
    icon: Activity,
    addons: [
      {
        name: "Analytics Dashboard",
        icon: ActivityIcon,
        price: "£150 - £350",
        description: "Custom analytics setup: Google Analytics, goals, conversion tracking, reports.",
        perfectFor: ["Data-driven businesses", "Tracking ROI", "Understanding customer behavior"],
        details: "Basic (GA4 + goals) £150, Standard (+ e-commerce) £250, Advanced (custom tracking) £350",
      },
      {
        name: "Heatmap & User Recording",
        icon: Eye,
        price: "£100 - £250",
        description: "See how users interact with your site: clicks, scrolls, recordings.",
        perfectFor: ["Conversion rate optimization", "UX improvement", "Understanding user behavior"],
        details: "Basic (1,000 sessions) £100, Standard (5,000 sessions) £180, Advanced (10,000+) £250",
      },
    ],
  },
  {
    id: "bundles",
    label: "Bundles (Save 10-20%)",
    icon: ShoppingBag,
    addons: [
      {
        name: "Launch Bundle",
        icon: Star,
        price: "£250 (Save £80)",
        description: "Logo + SEO + Email Setup + Training",
        perfectFor: ["New businesses launching for the first time"],
        details: "Regular price: £330 → Bundle: £250",
      },
      {
        name: "Growth Bundle",
        icon: TrendingUp,
        price: "£700 (Save £200)",
        description: "Advanced SEO + Email Marketing + Analytics + Content (5 pages)",
        perfectFor: ["Established businesses ready to scale"],
        details: "Regular price: £900 → Bundle: £700",
      },
      {
        name: "E-commerce Bundle",
        icon: ShoppingBag,
        price: "£1,200 (Save £300)",
        description: "E-commerce (50 products) + Performance Optimization + Analytics + Security",
        perfectFor: ["Online shops ready to launch"],
        details: "Regular price: £1,500 → Bundle: £1,200",
      },
    ],
  },
];

const Services = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Simple fade-in observer for .fade-in-section blocks
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
        threshold: 0.08,
        rootMargin: "200px",
      },
    );

    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => observerRef.current?.observe(section));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Services | X15 Digital"
        description="Websites, apps, and AI systems that actually get you clients. Choose from web packages, AI automation, and ongoing support – all built for UK businesses."
        canonicalUrl="https://x15.digital/services"
      />

      <Navigation />

      <main className="flex-1">
        {/* HERO – Services Hub */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8">
          {/* Soft background accents */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(45,212,191,0.18),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_100%,rgba(59,130,246,0.16),transparent_55%)]" />

          <Container>
            <div className="relative max-w-3xl mx-auto text-center fade-in-section">
              <Badge className="mb-4 bg-white/5 text-emerald-200 border-emerald-400/30">
                Websites · Apps · AI Systems
              </Badge>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Websites, Apps &amp; AI that actually get you clients.
              </h1>

              <p className="text-base md:text-lg text-slate-200/90 mb-6">
                Choose a clear package or mix-and-match services. No bloated retainers, no confusing jargon — just
                systems that help your business run smoother and convert more leads.
              </p>

              {/* Micro trust + booking state */}
              <p className="text-xs md:text-sm text-emerald-200/90 mb-8">
                Currently booking new projects <span className="font-semibold">2–3 weeks in advance</span>.
              </p>

              {/* Hero CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 shadow-md hover:shadow-lg"
                >
                  <Link to="/web-package">
                    View Web Packages
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/60 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link to="/ai-package">
                    View AI Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Breadcrumb below hero */}
        <BreadcrumbNav />

        {/* 2. WEB & APP SERVICES – with anchors for hash links */}
        <section
          id="web-services"
          className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/40 border-t border-border/60"
        >
          <Container>
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center mb-10 fade-in-section">
              <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">Websites, Apps &amp; Brand</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
                Web &amp; brand services you can mix and match
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Start lean or go all-in — everything here can be combined with your main web package or used
                individually.
              </p>
            </div>

            {/* Service grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto fade-in-section">
              {/* App Development */}
              <AnimatedSection staggerIndex={0} animation="scale">
                <Card id="app-development" className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-9 h-9 rounded-lg bg-primary/10 items-center justify-center mb-2">
                      <Smartphone className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base font-semibold text-secondary">App Development</CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">
                      Custom web &amp; mobile apps for your workflows.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>From idea to launch — strategy, development, testing, and deployment handled for you.</p>
                    <p className="text-xs font-semibold text-secondary">
                      Best for: Products, tools &amp; on-the-go users
                    </p>
                    <Button asChild size="sm" className="mt-1 w-full">
                      <Link to="/services/app-development">
                        View app services
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Personalised Apps */}
              <AnimatedSection staggerIndex={1} animation="scale">
                <Card id="personalised-apps" className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-9 h-9 rounded-lg bg-emerald-600/10 items-center justify-center mb-2">
                      <Cpu className="h-5 w-5 text-emerald-700" />
                    </div>
                    <CardTitle className="text-base font-semibold text-secondary">
                      Personalised Tools &amp; Mini Apps
                    </CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">
                      Custom calculators, dashboards, trackers &amp; internal tools.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Invoice trackers, simple CRMs, booking helpers — lightweight tools built around how you actually
                      work.
                    </p>
                    <p className="text-xs font-semibold text-secondary">Best for: Solo founders &amp; small teams</p>
                    <Button asChild size="sm" className="mt-1 w-full" variant="outline">
                      <Link to="/services/personalised-apps">
                        View personalised tools
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Landing Pages */}
              <AnimatedSection staggerIndex={2} animation="scale">
                <Card id="landing-pages" className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-9 h-9 rounded-lg bg-teal-600/10 items-center justify-center mb-2">
                      <LayoutTemplate className="h-5 w-5 text-teal-700" />
                    </div>
                    <CardTitle className="text-base font-semibold text-secondary">Landing Page Creation</CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">High-converting pages for one clear offer.</p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>Perfect for ads, limited campaigns, or one flagship service.</p>
                    <p className="text-xs font-semibold text-secondary">Best for: Launches &amp; paid traffic</p>
                    <Button asChild size="sm" className="mt-1 w-full" variant="outline">
                      <Link to="/services/landing-pages">
                        View landing page options
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Logo Design */}
              <AnimatedSection staggerIndex={3} animation="scale">
                <Card id="logo-design" className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-9 h-9 rounded-lg bg-amber-500/10 items-center justify-center mb-2">
                      <Brush className="h-5 w-5 text-amber-600" />
                    </div>
                    <CardTitle className="text-base font-semibold text-secondary">Logo Design</CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">
                      Clean, memorable logos that work across web &amp; print.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>2–3 concepts, refinements, and social-ready exports.</p>
                    <p className="text-xs font-semibold text-secondary">Best for: New brands &amp; rebrands</p>
                    <Button asChild size="sm" className="mt-1 w-full" variant="outline">
                      <Link to="/services/logo-design">
                        View logo design
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Branding */}
              <AnimatedSection staggerIndex={4} animation="scale">
                <Card id="branding" className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-9 h-9 rounded-lg bg-indigo-500/10 items-center justify-center mb-2">
                      <Sparkles className="h-5 w-5 text-indigo-600" />
                    </div>
                    <CardTitle className="text-base font-semibold text-secondary">
                      Branding &amp; Visual System
                    </CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">
                      Colours, typography, and visuals that stay consistent.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>Build a recognisable, professional look across web, socials, and print.</p>
                    <p className="text-xs font-semibold text-secondary">Best for: Businesses ready to level up</p>
                    <Button asChild size="sm" className="mt-1 w-full" variant="outline">
                      <Link to="/services/branding">
                        View branding services
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* IT Support */}
              <AnimatedSection staggerIndex={5} animation="scale">
                <Card id="it-support" className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-9 h-9 rounded-lg bg-slate-500/10 items-center justify-center mb-2">
                      <Headset className="h-5 w-5 text-slate-700" />
                    </div>
                    <CardTitle className="text-base font-semibold text-secondary">IT Support &amp; Care</CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">
                      Tech support for small businesses without an in-house team.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>Lightweight IT help for hosting, email, domains, and basic troubleshooting.</p>
                    <p className="text-xs font-semibold text-secondary">Best for: Small local businesses</p>
                    <Button asChild size="sm" className="mt-1 w-full" variant="outline">
                      <Link to="/services/it-support">
                        View IT support
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* 4. SUPPORT & MAINTENANCE – short version */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary/5 border-t border-primary/10">
          <Container>
            <div className="max-w-4xl mx-auto fade-in-section">
              <Card className="border-2 border-primary/20 bg-background">
                <CardContent className="p-8 md:p-10 flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Wrench className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-xs uppercase tracking-[0.16em] text-primary mb-2 font-semibold">
                      Recommended for all websites &amp; apps
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-2">Support &amp; Maintenance</h3>
                    <p className="text-2xl font-bold text-primary mb-3">From £25/month</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Keep your website or app secure, fast, and up-to-date — without worrying about updates, backups,
                      or bugs.
                    </p>

                    <div className="grid md:grid-cols-2 gap-2 mb-4 text-sm text-muted-foreground">
                      <p>• Regular updates &amp; security patches</p>
                      <p>• Weekly backups &amp; uptime checks</p>
                      <p>• Priority fixes when something breaks</p>
                      <p>• Content tweaks &amp; small changes included</p>
                    </div>

                    <p className="text-xs text-muted-foreground mb-4">
                      Works with sites we build and sites built elsewhere.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                      <Button asChild>
                        <Link to="/contact">
                          Add Maintenance &amp; Support
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline">
                        <a
                          href="https://wa.me/447424062513?text=Hi%2C%20I%27m%20interested%20in%20Support%20%26%20Maintenance%20for%20my%20website"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Chat on WhatsApp
                          <MessageSquare className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* X15 PC Builders - Sister Brand Services (BIG SECTION) */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-7xl mx-auto fade-in-section">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary">SISTER BRAND</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">X15 PC Builders</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Custom PC builds, repairs, and maintenance services in the UK
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {/* Custom PC Builds */}
              <Card className="hover-lift">
                <CardHeader>
                  <HardDrive className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Custom PC Builds</CardTitle>
                  <p className="text-3xl font-bold text-primary">From £500</p>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-4">What's Included:</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "Custom component selection",
                      "Professional assembly",
                      "Cable management",
                      "Initial setup & testing",
                      "Windows installation",
                      "1-year parts warranty",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Perfect for:</strong> Gaming, video editing, 3D rendering, or general use
                  </p>
                  <Button asChild className="w-full">
                    <a href="https://x15pcbuilders.com" target="_blank" rel="noopener noreferrer">
                      View PC Builds <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* PC Repairs */}
              <Card className="hover-lift">
                <CardHeader>
                  <Activity className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">PC Repairs</CardTitle>
                  <p className="text-3xl font-bold text-primary">From £40</p>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-4">What We Fix:</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "Hardware diagnostics",
                      "Component replacement",
                      "Software troubleshooting",
                      "Virus & malware removal",
                      "Performance upgrades",
                      "Data recovery assistance",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Perfect for:</strong> When your PC isn't running right or won't start
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <a href="https://x15pcbuilders.com" target="_blank" rel="noopener noreferrer">
                      Get a Repair Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Maintenance & Cleaning */}
              <Card className="hover-lift">
                <CardHeader>
                  <Gauge className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Maintenance &amp; Cleaning</CardTitle>
                  <p className="text-3xl font-bold text-primary">From £50</p>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-4">What's Included:</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "Deep dust cleaning",
                      "Thermal paste replacement",
                      "Fan optimization",
                      "Software updates",
                      "Performance testing",
                      "Health check report",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Perfect for:</strong> Keeping your PC running smoothly and quietly
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <a href="https://x15pcbuilders.com" target="_blank" rel="noopener noreferrer">
                      Book Maintenance <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                X15 PC Builders is our sister brand specializing in custom PC solutions
              </p>
              <Button asChild size="lg">
                <a href="https://x15pcbuilders.com" target="_blank" rel="noopener noreferrer">
                  Visit X15 PC Builders <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Add-Ons & Extras - Categorized Tabs */}
        <section
          id="add-ons"
          className="scroll-mt-24 py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-10 bg-background"
        >
          <div className="max-w-7xl mx-auto fade-in-section">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-4">Add-Ons &amp; Extras</h3>
            <p className="text-center text-muted-foreground mb-2">Enhance any package with these optional features.</p>
            <p className="text-center text-sm text-muted-foreground mb-12">
              💡 Bundle 2-3 add-ons and save 10-20% — ask us about package deals!
            </p>

            {/* Desktop: Tabs */}
            <div className="hidden md:block">
              <Tabs defaultValue="speed" className="w-full">
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 bg-muted p-2 rounded-lg mb-8 h-auto">
                  {addOnCategories.map((cat) => {
                    const shortLabels: Record<string, string> = {
                      "Speed & Priority": "Speed & Priority",
                      "Technical & Performance": "Performance",
                      "Security & Compliance": "Security",
                      "Branding & Design": "Branding",
                      "Marketing & SEO": "Marketing",
                      "E-commerce & Conversions": "E-commerce",
                      "Content & Training": "Content",
                      "Hosting & Infrastructure": "Hosting",
                      "Analytics & Tracking": "Analytics",
                      "Bundles (Save 10-20%)": "Bundles",
                    };
                    return (
                      <TabsTrigger
                        key={cat.id}
                        value={cat.id}
                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs sm:text-sm py-3 px-3 rounded-md hover:bg-accent transition-colors whitespace-normal text-center leading-tight"
                      >
                        <cat.icon className="h-4 w-4 mr-1 flex-shrink-0" />
                        <span>{shortLabels[cat.label] || cat.label}</span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>

                {addOnCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.addons.map((addon, i) => (
                        <Card key={i} className="hover-lift p-4">
                          <div className="flex items-start gap-3 mb-3">
                            <addon.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-base text-secondary mb-1 leading-tight">{addon.name}</h4>
                              <p className="text-lg font-bold text-primary">{addon.price}</p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{addon.description}</p>
                          {addon.perfectFor && (
                            <div className="mb-3">
                              <p className="text-xs font-semibold mb-1">Perfect for:</p>
                              <ul className="text-xs text-muted-foreground space-y-0.5">
                                {addon.perfectFor.map((item: string, j: number) => (
                                  <li key={j}>• {item}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          <p className="text-xs text-muted-foreground mb-3">{addon.details}</p>
                          <Button size="sm" className="w-full" asChild>
                            <Link to="/contact">Add to Package</Link>
                          </Button>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>

            {/* Mobile: Accordion */}
            <div className="md:hidden">
              <Accordion type="single" collapsible className="w-full">
                {addOnCategories.map((category) => (
                  <AccordionItem key={category.id} value={category.id}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-2">
                        <category.icon className="h-5 w-5 text-success" />
                        <span className="font-semibold">{category.label}</span>
                        <span className="text-xs text-muted-foreground">({category.addons.length})</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-4">
                        {category.addons.map((addon, i) => (
                          <Card key={i} className="p-4">
                            <div className="flex items-start gap-3 mb-3">
                              <addon.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                              <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-base text-secondary mb-1 leading-tight">{addon.name}</h4>
                                <p className="text-lg font-bold text-primary">{addon.price}</p>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{addon.description}</p>
                            {addon.perfectFor && (
                              <div className="mb-3">
                                <p className="text-xs font-semibold mb-1">Perfect for:</p>
                                <ul className="text-xs text-muted-foreground space-y-0.5">
                                  {addon.perfectFor.map((item: string, j: number) => (
                                    <li key={j}>• {item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            <p className="text-xs text-muted-foreground mb-3">{addon.details}</p>
                            <Button size="sm" className="w-full" asChild>
                              <Link to="/contact">Add to Package</Link>
                            </Button>
                          </Card>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Footer CTA */}
            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground mb-4">Don't see what you need?</p>
              <p className="text-muted-foreground mb-6">
                We can customize any add-on or create bespoke solutions for your specific requirements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline">
                  <Link to="/contact">Request Custom Solution</Link>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href="https://wa.me/447424062513?text=Hi%2C%20I%20need%20a%20custom%20add-on"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 6. FINAL CTA */}
        <section className="relative py-16 md:py-20 bg-[#D9F7F4] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.06),transparent_55%)]" />
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_60%,hsl(var(--accent)/0.06),transparent_55%)]" />

          <Container size="narrow" className="relative fade-in-section">
            <div className="text-center mb-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-semibold tracking-wider uppercase">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span>Quick plan in under 24 hours</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight">
                Not sure which{" "}
                <span className="bg-gradient-to-r from-primary via-teal-500 to-accent bg-clip-text text-transparent">
                  service
                </span>{" "}
                you actually need?
              </h2>

              <p className="text-base md:text-lg text-ink-light max-w-2xl mx-auto">
                Tell me where your business is now, and I&apos;ll recommend a simple path — website, AI, or both — with
                a clear price and timeline.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Link
                to="/quick-start"
                className="group flex items-center justify-center gap-2
                h-12 px-6 text-sm font-semibold rounded-xl
                bg-gradient-to-r from-primary via-teal-500 to-primary
                text-primary-foreground shadow-md hover:shadow-lg
                hover:scale-[1.015] active:scale-[0.97]
                transition-all"
              >
                Take 30-second Project Quiz
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="group flex items-center justify-center gap-2
                h-12 px-6 text-sm font-semibold rounded-xl
                border border-border bg-background/70
                text-ink hover:border-primary hover:bg-primary/5 hover:text-primary
                shadow-sm hover:shadow-md hover:scale-[1.015]
                active:scale-[0.97] transition-all"
              >
                Book Free Call
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <p className="text-xs text-ink/80 text-center">
              No pressure, no hard sell — just a clear plan for your website, app, or AI system.
            </p>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
