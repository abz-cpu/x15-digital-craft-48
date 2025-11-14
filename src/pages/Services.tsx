import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Zap,
  DollarSign,
  MessageCircle,
  Globe,
  Bot,
  Lock,
  ClipboardCheck,
  Shield,
  Star,
  Target,
  Phone,
  Mail,
  Users,
  BarChart,
  Workflow,
  Inbox,
  X,
  ChevronDown,
  ChevronUp,
  Rocket,
  Gauge,
  Eye,
  FolderSync,
  Palette,
  Image,
  TrendingUp,
  Calendar,
  FileText,
  Video,
  Cloud,
  HardDrive,
  Activity,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import CtaCard from "@/components/CtaCard";
import { SEO } from "@/components/SEO";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Services = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<string[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { search } = useLocation();
  const aiRef = useRef<HTMLDivElement | null>(null);

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

  useLayoutEffect(() => {
    const scrollTarget = new URLSearchParams(search).get("scroll");

    if (scrollTarget === "ai-automation" && aiRef.current) {
      aiRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [search]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

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
          icon: Rocket,
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
          icon: Globe,
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
          icon: Palette,
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
          icon: DollarSign,
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
          icon: HardDrive,
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
      icon: BarChart,
      addons: [
        {
          name: "Analytics Dashboard",
          icon: Activity,
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
          icon: Rocket,
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

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Services & Pricing - Web Development & AI Automation | X15 Digital"
        description="Web development packages from £100-£3,500 + AI automation from £50-£400/month. 5 transparent pricing tiers + 26 add-ons across 10 categories. 1 day to 4 week delivery. View our full service menu for UK businesses."
        keywords="web development pricing UK, AI automation cost, website packages, AI chatbot pricing, business automation"
      />
      <ScrollProgressBar />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto text-center fade-in-section">
          <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-6">Services & Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Choose what you need. See exactly what you'll pay. No surprises.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => scrollToSection("web-packages")}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Web Packages <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={() => scrollToSection("ai-automation")}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              AI Solutions <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={() => scrollToSection("combined-packages")}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Combined Bundles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section id="web-packages" className="scroll-mt-24 py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">Web Development Packages</h2>
          <p className="text-center text-muted-foreground mb-4">
            One-time payment. You own everything. No monthly fees.
          </p>
          <p className="text-center text-sm text-muted-foreground mb-12">
            (Optional: Add support/maintenance for peace of mind — from £30/month)
            <br />
            Choose your perfect starting point — upgrade anytime as you grow.
          </p>

          {/* ROW 1 – MAIN PACKAGES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* DIY / TEMPLATE – Budget option (slightly smaller) */}
            <Card className="hover-lift relative transition-transform md:scale-95 md:opacity-95 md:shadow-sm">
              <Badge className="absolute -top-3 right-4 bg-secondary text-white flex items-center gap-1 text-xs">
                💡 BUDGET FRIENDLY
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl">DIY/TEMPLATE WEBSITE</CardTitle>
                <p className="text-3xl font-bold text-primary">£100 - £300</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-semibold mb-4">Perfect for: Individuals, startups, micro-businesses</p>

                <p className="font-semibold mb-2">What&apos;s Included:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    "1-page site OR custom landing page",
                    "Professional template selection",
                    "Simple content editor instructions",
                    "Mobile responsive design",
                    "1 business day delivery",
                    "Upgrade path to Starter/Business",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm font-semibold mb-2">Examples:</p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                  <li>• New freelancer portfolio</li>
                  <li>• Event RSVP / campaign landing page</li>
                  <li>• &quot;Coming soon&quot; placeholder</li>
                  <li>• Quick promotional page</li>
                </ul>

                <p className="text-xs text-primary font-semibold mb-4">
                  💡 Upgrade to Starter anytime for full custom design
                </p>

                <Button asChild className="w-full">
                  <Link to="/quick-start">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* STARTER – HERO / MOST POPULAR */}
            <Card className="hover-lift relative transition-transform md:scale-105 md:border-2 md:border-primary md:shadow-2xl md:ring-4 md:ring-primary/10 z-10">
              {/* subtle glow behind card (desktop only) */}
              <div className="pointer-events-none absolute -inset-1 hidden md:block bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl -z-10" />

              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-400 text-white flex items-center gap-1 text-xs">
                <Star className="h-3 w-3" /> MOST POPULAR
              </Badge>

              <CardHeader>
                <CardTitle className="text-2xl">STARTER WEBSITE</CardTitle>
                <p className="text-3xl font-bold text-primary">£250 - £500</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-semibold mb-4">Perfect for: Trades, freelancers, solo businesses</p>

                {/* HONEST value callout – no fake stats */}
                <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Star className="h-4 w-4 text-orange-600 fill-orange-600" />
                    <p className="text-xs font-semibold text-orange-900">Best value for growing businesses</p>
                  </div>
                  <p className="text-xs text-orange-800">Everything you need to start strong.</p>
                </div>

                <p className="font-semibold mb-2">What&apos;s Included:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    "1-3 custom pages (Home, About, Contact)",
                    "Fully custom or semi-custom design",
                    "Mobile responsive",
                    "Contact form integration",
                    "Basic SEO setup",
                    "Social media links",
                    "1-3 day delivery",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm font-semibold mb-2">Examples:</p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-6">
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

            {/* BUSINESS – Professional tier */}
            <Card className="hover-lift relative transition-transform md:border-2 md:border-secondary/30 md:shadow-lg">
              <Badge className="absolute -top-3 right-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white flex items-center gap-1 text-xs">
                🏆 PROFESSIONAL
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl">BUSINESS WEBSITE</CardTitle>
                <p className="text-3xl font-bold text-primary">£750 - £1,800</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-semibold mb-4">
                  Perfect for: Salons, consultants, local shops, small businesses
                </p>

                <p className="font-semibold mb-2">What&apos;s Included:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    "4-10 pages",
                    "Full custom layout & branding",
                    "Contact + advanced forms/booking",
                    "Google Maps integration",
                    "Portfolio/gallery options",
                    "Full SEO package",
                    "5-10 day delivery",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm font-semibold mb-2">Examples:</p>
                <ul className="text-sm text-muted-foreground space-y-1 mb-6">
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
          </div>

          {/* PREMIUM & ENTERPRISE – PROGRESSIVE DISCLOSURE */}
          <div className="mt-16 mb-12">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-secondary mb-2">Premium &amp; Enterprise Solutions</h3>
              <p className="text-muted-foreground">E-commerce, web applications &amp; custom platforms from £2,000.</p>
            </div>

            <Collapsible defaultOpen={false}>
              <div className="max-w-4xl mx-auto">
                {/* Clean trigger button */}
                <CollapsibleTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <span className="flex items-center justify-center gap-2 w-full">
                      <Zap className="h-5 w-5 text-primary" />
                      <span className="font-semibold">View premium options</span>
                      <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </span>
                  </Button>
                </CollapsibleTrigger>

                {/* Expanded content – two clean cards, no nesting */}
                <CollapsibleContent className="mt-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* PREMIUM WEBSITE */}
                    <Card className="hover-lift border-2 border-border hover:border-primary/50 transition-all">
                      <CardHeader>
                        <CardTitle className="text-xl">PREMIUM WEBSITE</CardTitle>
                        <p className="text-2xl md:text-3xl font-bold text-primary">£2,000 - £3,500</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Perfect for: E-commerce, agencies, larger service sites
                        </p>

                        <p className="font-semibold mb-2 text-sm">What&apos;s Included:</p>
                        <ul className="space-y-2 mb-6">
                          {[
                            "10+ fully custom pages",
                            "E-commerce & advanced features",
                            "Payment integration (Stripe, PayPal, Apple Pay)",
                            "Advanced SEO & performance",
                            "1–4 week timeline",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>

                        <Button asChild className="w-full">
                          <Link to="/contact">
                            Get Started <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>

                    {/* WEB APPLICATION */}
                    <Card className="hover-lift border-2 border-border hover:border-primary/50 transition-all">
                      <CardHeader>
                        <CardTitle className="text-xl">WEB APPLICATION</CardTitle>
                        <p className="text-2xl md:text-3xl font-bold text-primary">
                          £3,500+
                          <span className="text-base font-normal text-muted-foreground"> (custom quote)</span>
                        </p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Perfect for: SaaS, CRMs, internal tools &amp; advanced platforms
                        </p>

                        <p className="font-semibold mb-2 text-sm">What&apos;s Included:</p>
                        <ul className="space-y-2 mb-6">
                          {[
                            "Custom web application build",
                            "User authentication & roles",
                            "Database & API integrations",
                            "Admin dashboard",
                            "Ongoing support/maintenance options",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>

                        <Button asChild className="w-full">
                          <Link to="/contact">
                            Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          </div>

          {/* Not sure which package? */}
          <div className="mt-8 text-center">
            <p className="text-lg text-muted-foreground mb-4">💡 Not sure which package fits your needs?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline">
                <Link to="/quick-start">Take our 30-second quiz</Link>
              </Button>
              <Button asChild variant="outline">
                <a
                  href="https://wa.me/447424062513?text=Hi%2C%20I%20need%20help%20choosing%20a%20web%20package"
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

      {/* Support & Maintenance Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-5xl mx-auto">
          <Card className="border-2 border-primary/20 bg-background">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-sm text-muted-foreground mb-2">Recommended for All Packages</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-2">Support & Maintenance</h3>
                  <p className="text-3xl font-bold text-primary mb-4">From £30/month</p>
                  <p className="text-muted-foreground mb-4">Keep your website secure, fast, and up-to-date.</p>

                  <div className="grid md:grid-cols-2 gap-2 mb-6">
                    {[
                      "Regular updates & security patches",
                      "Weekly backups",
                      "Priority support (4-hour response)",
                      "Performance monitoring",
                      "Fast bug fixes",
                      "Content updates (up to 1 hour/month)",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Perfect for:</strong> Any business that wants peace of mind
                  </p>

                  <Button asChild>
                    <Link to="/contact">
                      Add to Any Package <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  <p className="text-xs text-muted-foreground mt-4">
                    💡 Optional but highly recommended — protect your investment
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Add-Ons & Extras - Categorized Tabs */}
      <section id="add-ons" className="scroll-mt-24 py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-4">Add-Ons & Extras</h3>
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
                              {addon.perfectFor.map((item, j) => (
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
                                {addon.perfectFor.map((item, j) => (
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

      {/* AI Automation Section */}
      <section
        id="ai-automation"
        ref={aiRef}
        className="scroll-mt-24 py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background"
      >
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">AI Automation Solutions</h2>
          <p className="text-center text-muted-foreground mb-8">
            Stand-alone or integrated with your website.
            <br />
            Works with ANY website — yours or ours.
          </p>

          {/* Pain-first intro */}
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

          {/* Main AI Services - 7 cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* AI Chatbot */}
            <Card className="hover-lift border-2 border-primary relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-warning text-warning-foreground">
                <Star className="h-3 w-3 mr-1" /> MOST POPULAR
              </Badge>
              <CardHeader>
                <Bot className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">AI Chatbot</CardTitle>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Setup: £200-400</p>
                  <p className="text-sm text-muted-foreground">Monthly: £50-100</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-4">What It Does:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Answers FAQs instantly",
                    "Captures lead information",
                    "Qualifies customer needs",
                    "Works 24/7, never sleeps",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Perfect For:</strong> Service businesses, e-commerce, consultants
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  <strong>Technical Details:</strong> Custom trained on your business, integrates with your website,
                  multi-platform support
                </p>
                <Button asChild className="w-full">
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Voice Agent */}
            <Card className="hover-lift relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white">
                <Target className="h-3 w-3 mr-1" /> BEST FOR LOCAL BUSINESSES
              </Badge>
              <CardHeader>
                <Phone className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">AI Receptionist</CardTitle>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Setup: £400-800</p>
                  <p className="text-sm text-muted-foreground">Monthly: £100-200</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-4">What It Does:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Answers phone calls naturally",
                    "Books appointments",
                    "Takes messages",
                    "Handles after-hours inquiries",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Perfect For:</strong> Salons, clinics, offices with high call volume
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  <strong>Technical Details:</strong> Natural conversational AI, calendar sync, call transcripts
                </p>
                <Button asChild className="w-full">
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Sales Agent */}
            <Card className="hover-lift">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">AI Sales Assistant</CardTitle>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Setup: £800-2,000</p>
                  <p className="text-sm text-muted-foreground">Monthly: £200-800</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-4">What It Does:</p>
                <ul className="space-y-2 mb-4">
                  {["Automated lead generation", "Qualifies prospects", "Books sales calls", "Follow-up sequences"].map(
                    (item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ),
                  )}
                </ul>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Perfect For:</strong> B2B services, consultants, agencies, SaaS
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  <strong>Technical Details:</strong> Multi-channel outreach, CRM integration, lead scoring
                </p>
                <Button asChild className="w-full">
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Email Outreach */}
            <Card className="hover-lift">
              <CardHeader>
                <Mail className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">AI Email Outreach</CardTitle>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Setup: £400-1,000</p>
                  <p className="text-sm text-muted-foreground">Monthly: £100-400</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-4">What It Does:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Automated email campaigns",
                    "Lead nurturing sequences",
                    "Smart follow-ups",
                    "Personalised at scale",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Perfect For:</strong> Sales teams, marketing, lead generation
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  <strong>Technical Details:</strong> Custom templates, A/B testing, analytics & tracking
                </p>
                <Button asChild className="w-full">
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Social Media Manager */}
            <Card className="hover-lift">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">AI Social Media Manager</CardTitle>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Setup: £200-600</p>
                  <p className="text-sm text-muted-foreground">Monthly: £50-150</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-4">What It Does:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Auto-posts to platforms",
                    "Responds to comments",
                    "Analytics & insights",
                    "Content scheduling",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Perfect For:</strong> Retail, online brands, content creators
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  <strong>Technical Details:</strong> Multi-platform support, engagement monitoring, performance reports
                </p>
                <Button asChild className="w-full">
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Workflow Automation */}
            <Card className="hover-lift">
              <CardHeader>
                <Workflow className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">AI Admin Assistant</CardTitle>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Setup: £500-1,500</p>
                  <p className="text-sm text-muted-foreground">Monthly: £150-600</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-4">What It Does:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Multi-app integrations",
                    "Automated data entry",
                    "Order/payment processing",
                    "Custom workflows",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Perfect For:</strong> E-commerce, logistics, operations teams
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  <strong>Technical Details:</strong> Zapier/Make integration, 1,000+ app connections, error handling
                </p>
                <Button asChild className="w-full">
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Inbox Manager */}
            <Card className="hover-lift">
              <CardHeader>
                <Inbox className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">AI Email Assistant</CardTitle>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Setup: £500-1,000</p>
                  <p className="text-sm text-muted-foreground">Monthly: £150-300</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-4">What It Does:</p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Sorts and prioritises emails",
                    "Sends auto-responses",
                    "Flags urgent messages",
                    "Automates workflows",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Perfect For:</strong> Busy professionals, customer support teams
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  <strong>Technical Details:</strong> Smart categorisation, CRM integration, daily summaries
                </p>
                <Button asChild className="w-full">
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional AI Services */}
          <div className="bg-white rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-secondary mb-6 text-center">Additional AI Automation Services</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              {[
                {
                  name: "AI Invoice & Admin Bot",
                  setup: "£350-900",
                  monthly: "£50-200/month",
                },
                {
                  name: "AI Data Insights & Reporting",
                  setup: "£200-1,000",
                  monthly: "£50-350/month",
                },
                {
                  name: "RPA (Robotic Process Automation)",
                  setup: "£1,000+",
                  monthly: "£200+/month",
                },
                {
                  name: "AI Meeting Notes & Transcription",
                  setup: "£300-700",
                  monthly: "£75-200/month",
                },
                {
                  name: "LinkedIn Lead Prospecting",
                  setup: "£500-900",
                  monthly: "£75-200/month",
                },
                {
                  name: "AI Customer Feedback Analysis",
                  setup: "£400-800",
                  monthly: "£100-250/month",
                },
                {
                  name: "AI Recruitment Screening",
                  setup: "£200-800",
                  monthly: "£50-250/month",
                },
              ].map((service, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-medium">{service.name}</span>
                  <span className="text-muted-foreground">
                    {service.setup} setup | {service.monthly}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-center mt-6 text-muted-foreground">
              Don't see what you need?{" "}
              <Link to="/contact" className="text-primary hover:underline inline-flex items-center gap-1">
                Request Custom AI Solution <ArrowRight className="h-4 w-4" />
              </Link>
            </p>
          </div>

          {/* AI Pricing Table */}
          <div className="bg-white rounded-lg p-8 overflow-x-auto mb-12">
            <h3 className="text-2xl font-bold text-secondary mb-6 text-center">AI Automation Pricing Overview</h3>
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-3 text-left font-semibold">Service</th>
                  <th className="p-3 text-left font-semibold">Setup</th>
                  <th className="p-3 text-left font-semibold">Monthly</th>
                  <th className="p-3 text-left font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Chatbot", "£200-400", "£50-100", "Customer support, FAQs"],
                  ["AI Receptionist", "£400-800", "£100-200", "Phone answering, bookings"],
                  ["AI Sales Assistant", "£800-2,000", "£200-800", "Lead generation, B2B"],
                  ["Email Outreach", "£400-1,000", "£100-400", "Marketing campaigns"],
                  ["Social Media", "£200-600", "£50-150", "Content automation"],
                  ["AI Admin Assistant", "£500-1,500", "£150-600", "Process optimisation"],
                  ["Inbox Manager", "£500-1,000", "£150-300", "Email management"],
                  ["Custom Solution", "£800+", "£200+", "Bespoke requirements"],
                ].map(([service, setup, monthly, bestFor], i) => (
                  <tr key={i} className="border-b border-border last:border-b-0">
                    <td className="p-3 font-medium">{service}</td>
                    <td className="p-3 text-primary">{setup}</td>
                    <td className="p-3 text-primary">{monthly}</td>
                    <td className="p-3 text-muted-foreground">{bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Custom AI Solution CTA */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Custom AI Solution</h2>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Need something specific? We build bespoke AI automation tailored to your exact business needs.
            </p>
            <div className="mb-6 text-left max-w-2xl mx-auto">
              <p className="font-semibold mb-2">Recent Custom Solutions:</p>
              <ul className="space-y-1">
                {[
                  "Healthcare appointment automation",
                  "Legal document processing",
                  "Restaurant multi-location ordering",
                  "Property management workflows",
                  "Marketing agency white-label AI",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <p className="text-xl font-semibold">Setup: £800+ | Monthly: £200+</p>
              <p className="text-sm mt-2">
                Every project is unique. Let's discuss your requirements and build the perfect AI solution for your
                business.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-transform"
            >
              <Link to="/contact">Request Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Combined Packages */}
      <section id="combined-packages" className="scroll-mt-24 py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">
            Website + AI Bundles (Save 10-15%)
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Get more value by combining services. All bundles include setup, training, and ongoing support.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "STARTER BUNDLE",
                desc: "Website (£250-500) + Chatbot",
                price: "£550 total setup + £50/month",
                save: "Save £100 on setup",
                link: "/quick-start",
              },
              {
                title: "BUSINESS BUNDLE",
                desc: "Website (£750-1,800) + Chatbot",
                price: "£1,000 total setup + £75/month",
                save: "Save £150 on setup",
                popular: true,
                link: "/quick-start",
              },
              {
                title: "PREMIUM BUNDLE",
                desc: "Website (£2,000-3,500) + Voice Agent",
                price: "£2,800 total setup + £100/month",
                save: "Save £300 on setup",
                link: "/quick-start",
              },
              {
                title: "SALES ACCELERATOR",
                desc: "Website (£750-1,800) + Sales Agent",
                price: "£1,800 total setup + £250/month",
                save: "Save £250 on setup",
                link: "/quick-start",
              },
              {
                title: "MARKETING PRO",
                desc: "Website (£750-1,800) + Email + Social",
                price: "£1,400 total setup + £200/month",
                save: "Save £250 on setup",
                link: "/quick-start",
              },
              {
                title: "COMPLETE AUTOMATION",
                desc: "Website (£2,000-3,500) + Multi-AI Stack",
                price: "Custom quote",
                save: "Maximum savings",
                link: "/contact",
              },
            ].map((bundle, i) => (
              <Card key={i} className={`hover-lift ${bundle.popular ? "border-2 border-primary relative" : ""}`}>
                {bundle.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-warning text-warning-foreground">
                    <Star className="h-3 w-3 mr-1" /> MOST POPULAR
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{bundle.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{bundle.desc}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary mb-2">{bundle.price}</p>
                  <p className="text-sm text-success mb-4">{bundle.save}</p>
                  <Button asChild className="w-full">
                    <Link to={bundle.link}>
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance (Repeat from Homepage) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">
            Built With Security in Mind
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Every website and AI system we build follows industry best practices for data protection and security.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>SSL Encryption</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  All sites include HTTPS for secure connections and encrypted data transfer.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <ClipboardCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>GDPR Ready</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Forms, cookies, and privacy policies setup included to keep you compliant.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Secure Hosting</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Hosted on enterprise-grade infrastructure with automatic backups and monitoring.
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-muted-foreground mt-12">
            Your customers' data stays safe. Your business stays compliant.
          </p>
        </div>
      </section>

      {/* Who This ISN'T For */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">Who This ISN'T For</h2>
          <p className="text-center text-muted-foreground mb-12">We're honest about what we can't do.</p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-destructive/50">
              <CardHeader className="text-center">
                <X className="h-12 w-12 text-destructive mx-auto mb-4" />
                <CardTitle>You Need It Yesterday</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  We're fast (1-14 days), but we're not same-day. If you need a site live tomorrow, we're not the right
                  fit.
                </p>
              </CardContent>
            </Card>

            <Card className="border-destructive/50">
              <CardHeader className="text-center">
                <X className="h-12 w-12 text-destructive mx-auto mb-4" />
                <CardTitle>You Want Endless Meetings</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  We work efficiently. One kickoff call, async updates, done. If you need weekly check-ins and
                  presentations, hire an agency.
                </p>
              </CardContent>
            </Card>

            <Card className="border-destructive/50">
              <CardHeader className="text-center">
                <X className="h-12 w-12 text-destructive mx-auto mb-4" />
                <CardTitle>You Have a £50 Budget</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Our pricing is fair, but we can't compete with £50 Fiverr sites. Quality costs more than that (but way
                  less than agencies).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table (Repeat from Homepage) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
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
                  <th className="p-4 text-left font-semibold bg-primary/10">X15 Digital</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Price for basic site", "£3,000-£10,000", "£100-£500 (Entry/Starter)"],
                  ["Timeline", "4-12 weeks", "1-3 days (Entry/Starter), 1-2 weeks (Business)"],
                  ["Who you work with", "Account manager", "Lead developer, direct support"],
                  ["Pricing transparency", '"Let\'s discuss your budget"', "All prices on website"],
                  ["AI automation", "Extra £5k+", "From £50-£200 as add-on, fully integrated"],
                  ["Monthly fees", "£50-£200/month hosting", "£0-£30 (you own it, affordable maintenance)"],
                  ["Revisions", "2-3 rounds max", "Unlimited until happy"],
                ].map(([feature, agency, x15], i) => (
                  <tr key={i} className="border-b border-border last:border-b-0">
                    <td className="p-4 font-medium">{feature}</td>
                    <td className="p-4 text-muted-foreground">{agency}</td>
                    <td className="p-4 bg-primary/5 font-semibold text-primary">{x15}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-muted-foreground mt-8 flex items-center justify-center gap-2">
            <Zap className="h-5 w-5 text-success" />
            We keep costs low by using modern tools and working smart. You get professional results without agency
            overhead.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-muted-foreground mb-12">
            Let's address the deal-breakers first, then the details.
          </p>

          {/* Deal-Breaker FAQs */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <X className="h-6 w-6 text-destructive" />
              <h3 className="text-2xl font-bold text-destructive">Deal-Breakers (Read These First)</h3>
            </div>

            <Accordion type="multiple" className="space-y-4">
              <AccordionItem value="q1" className="border border-destructive/30 rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold">Can you build my site for £50?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-4">
                    No. Our minimum is £100 for a basic 1-page site, and that's already below what quality work costs.
                  </p>
                  <p className="mb-2">If your budget is under £100, we recommend:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Free builders like Wix or Carrd</li>
                    <li>£50 Fiverr templates (you get what you pay for)</li>
                  </ul>
                  <p className="mt-4">We focus on quality over rock-bottom pricing.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2" className="border border-destructive/30 rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold">
                  Can you build my site in 24 hours?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-4">Not unless it's extremely simple (1 page, no custom features).</p>
                  <p className="mb-2">Realistic timelines:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Starter site (1-3 pages): 1-3 days</li>
                    <li>Business site (4-10 pages): 5-7 days</li>
                    <li>Premium/e-commerce: 7-14 days</li>
                    <li>Web application: 2-6 weeks</li>
                  </ul>
                  <p className="mt-4">We're fast, but we don't sacrifice quality for speed.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q3" className="border border-destructive/30 rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold">
                  Do you offer monthly payment plans?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-4">Not for web development (you pay once, own it forever).</p>
                  <p className="mb-2">We DO offer monthly subscriptions for:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>AI automation services (£50-800/month)</li>
                    <li>Ongoing support/maintenance (optional)</li>
                  </ul>
                  <p className="mt-4">But website builds are one-time payments.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* AI-Focused FAQs */}
          <Accordion type="multiple" className="space-y-4 mb-12">
            {[
              {
                q: "Do I need a website to use your AI automation?",
                a: "No! Our AI automation works with ANY website - including sites you already have (Wix, WordPress, Shopify, Squarespace, custom-built, etc.) or even if you don't have a website yet. We can integrate AI chatbots, voice agents, or inbox managers into your existing digital presence, regardless of who built it.",
              },
              {
                q: "I already have a website. Can I just get AI automation?",
                a: "Absolutely! Many of our AI automation clients already have websites and just need intelligent automation to handle customer inquiries, bookings, or support. We'll integrate seamlessly with your existing site - no rebuild required.",
              },
              {
                q: "Can I start with one service and add the other later?",
                a: "Yes! Start with web development and add AI later, or start with AI and build a website later. No pressure to bundle. (Though we do offer 10-15% bundle discounts if you want both!)",
              },
              {
                q: "Which AI automation service should I choose?",
                a: "It depends on your biggest pain point:\n\n• Overwhelmed by customer inquiries? → Chatbot or Voice Agent\n• Need more leads? → Sales Agent or Email Outreach\n• Social media taking too much time? → Social Media Manager\n• Manual data entry killing productivity? → Workflow Automation\n• Email inbox chaos? → Inbox Manager\n\nNot sure? Book a free 15-min consultation and we'll recommend the best solution for your specific situation.",
              },
              {
                q: "Can I combine multiple AI automation services?",
                a: "Yes! Many clients combine services for complete automation:\n\nPopular combinations:\n• Chatbot + Email Outreach (capture leads + nurture them)\n• Voice Agent + Social Media (phone + online presence)\n• Sales Agent + Workflow Automation (generate + process leads)\n\nMulti-service packages available with 15-20% discount.",
              },
              {
                q: "Do these AI services work with my existing tools?",
                a: "Yes! Our AI automation integrates with:\n• CRMs (HubSpot, Salesforce, Pipedrive)\n• Email (Gmail, Outlook, Mailchimp)\n• Calendar (Google, Outlook, Calendly)\n• Social Media (Instagram, Facebook, LinkedIn, Twitter)\n• E-commerce (Shopify, WooCommerce, Stripe)\n• And 1,000+ other apps via Zapier/Make\n\nIf you have specific tools, let us know and we'll confirm compatibility.",
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`ai-${i}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground whitespace-pre-line">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Standard FAQs */}
          <Accordion type="multiple" className="space-y-4">
            {[
              {
                q: "What's included in 'SEO setup'?",
                a: "Basic SEO (included in all packages):\n• Page titles and meta descriptions\n• Header tag structure (H1, H2, H3)\n• Image alt text\n• Mobile optimisation\n• Fast loading speed\n• XML sitemap\n\nAdvanced SEO (Premium package or £200-400 add-on):\n• Keyword research\n• Competitor analysis\n• Schema markup\n• Google Business setup\n• Monthly performance reports",
              },
              {
                q: "Do you do ongoing maintenance?",
                a: "Websites: No monthly fees required (you own everything).\n\nOptional support packages available:\n• £50/month: Security updates, backups, small tweaks\n• £100/month: Above + content updates, performance monitoring\n• £200/month: Above + priority support, strategic consulting\n\nAI automation: Monthly fees include support and monitoring.",
              },
              {
                q: "What if I don't like the design?",
                a: "Unlimited revisions until you're happy (within scope).\n\nWe start with a mockup/wireframe for your approval before building. Changes to structure/layout are free until final delivery.\n\nAfter final delivery:\n• Minor tweaks (text, colours): Free for 30 days\n• Major changes (new pages, features): Quoted separately",
              },
              {
                q: "Can I update the site myself after it's built?",
                a: "Yes! We build with:\n• Easy-to-edit CMS (if requested)\n• Clear documentation\n• Training video (for Premium+ packages)\n\nOr we can update it for you (see maintenance packages).",
              },
              {
                q: "What payment methods do you accept?",
                a: "• Bank transfer (preferred)\n• PayPal\n• Stripe (card payments)\n\nPayment schedule:\n• <£500 projects: 50% upfront, 50% on delivery\n• £500-£1,500: 50% upfront, 25% mid-project, 25% on delivery\n• £1,500+: Custom schedule (typically 3-4 milestones)",
              },
              {
                q: "Do you offer refunds?",
                a: "100% Money-Back Guarantee within first 7 days if:\n• We miss agreed deadline by more than 3 days (without your approval)\n• Final product doesn't match agreed scope\n• You're unsatisfied and we can't resolve it\n\nAfter final delivery approval: No refunds (you own the complete site).",
              },
              {
                q: "Can you redesign my existing website?",
                a: "Yes! We can:\n• Rebuild your site from scratch (keeping content)\n• Modernise design while keeping structure\n• Add new features to existing site\n\nPricing depends on current site complexity. Contact us for a quote.",
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`std-${i}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground whitespace-pre-line">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CtaCard />

      <Footer />
      <WhatsAppWidget />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Services;
