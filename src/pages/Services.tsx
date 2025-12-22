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
  Gauge,
  Eye,
  TrendingUp,
  Target,
  Mail,
  Search,
  PenTool,
  FileText,
  ShoppingCart,
  Server,
  CheckCircle2,
  Mic,
} from "lucide-react";

const Services = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

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
        title="Services | X15 Digital - Web Development, AI Automation & Digital Marketing"
        description="Professional websites, AI chatbots, digital marketing, and ongoing support for UK businesses. Clear pricing, fast delivery, no jargon."
        canonicalUrl="https://x15.digital/services"
      />

      <Navigation darkHero />

      <main className="flex-1">
        {/* ================================================================
            HERO SECTION
        ================================================================ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(45,212,191,0.18),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_100%,rgba(59,130,246,0.16),transparent_55%)]" />

          <Container>
            <div className="relative max-w-3xl mx-auto text-center fade-in-section">
              <Badge className="mb-4 bg-white/5 text-emerald-200 border-emerald-400/30">
                Everything You Need to Grow Online
              </Badge>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Websites, AI & Marketing That Actually Work
              </h1>

              <p className="text-base md:text-lg text-slate-200/90 mb-6">
                From your first website to AI-powered automation and full digital marketing — 
                we handle everything so you can focus on your business.
              </p>

              <p className="text-xs md:text-sm text-emerald-200/90 mb-8">
                Currently booking new projects <span className="font-semibold">2–3 weeks in advance</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 shadow-md hover:shadow-lg"
                >
                  <Link to="/contact">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/60 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link to="/web-package">
                    View Packages
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        <BreadcrumbNav />

        {/* ================================================================
            SECTION 1: WEBSITES & APPS
        ================================================================ */}
        <section id="websites" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12 fade-in-section">
              <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">Websites & Apps</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
                Professional Websites Built to Convert
              </h2>
              <p className="text-muted-foreground">
                Whether you need a simple landing page or a full web application, 
                we build fast, mobile-friendly sites that turn visitors into customers.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto fade-in-section">
              {/* Website Packages */}
              <AnimatedSection staggerIndex={0} animation="scale">
                <Card className="h-full hover-lift border-2 border-primary/20">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-10 h-10 rounded-lg bg-primary/10 items-center justify-center mb-2">
                      <Globe2 className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-secondary">Website Packages</CardTitle>
                    <p className="text-sm text-muted-foreground">From £299</p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>Complete websites with hosting, SEO, and ongoing support. Choose from Foundation, Growth, or Scale packages.</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Mobile-responsive design</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> SEO optimised</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 1–7 day delivery</li>
                    </ul>
                    <Button asChild size="sm" className="w-full mt-2">
                      <Link to="/web-package">View Packages <ArrowRight className="ml-2 h-3 w-3" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* E-commerce */}
              <AnimatedSection staggerIndex={1} animation="scale">
                <Card className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-10 h-10 rounded-lg bg-amber-500/10 items-center justify-center mb-2">
                      <ShoppingCart className="h-5 w-5 text-amber-600" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-secondary">E-commerce & Online Shops</CardTitle>
                    <p className="text-sm text-muted-foreground">From £599</p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>Sell products online with Shopify, WooCommerce, or custom solutions. Secure payments, inventory management, and order tracking.</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Secure checkout</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Product management</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Payment integration</li>
                    </ul>
                    <Button asChild size="sm" variant="outline" className="w-full mt-2">
                      <Link to="/services/ecommerce">Learn More <ArrowRight className="ml-2 h-3 w-3" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Landing Pages */}
              <AnimatedSection staggerIndex={2} animation="scale">
                <Card className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-10 h-10 rounded-lg bg-teal-500/10 items-center justify-center mb-2">
                      <LayoutTemplate className="h-5 w-5 text-teal-600" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-secondary">Landing Pages</CardTitle>
                    <p className="text-sm text-muted-foreground">From £199</p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>High-converting single pages for campaigns, product launches, or lead generation. Perfect for paid ads.</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Conversion-focused</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Fast load times</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> A/B testing ready</li>
                    </ul>
                    <Button asChild size="sm" variant="outline" className="w-full mt-2">
                      <Link to="/services/landing-pages">Learn More <ArrowRight className="ml-2 h-3 w-3" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* App Development */}
              <AnimatedSection staggerIndex={3} animation="scale">
                <Card className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-10 h-10 rounded-lg bg-blue-500/10 items-center justify-center mb-2">
                      <Smartphone className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-secondary">App Development</CardTitle>
                    <p className="text-sm text-muted-foreground">Custom quote</p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>Web and mobile applications for your unique business needs. From simple tools to complex platforms.</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Web & mobile apps</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Custom functionality</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Scalable architecture</li>
                    </ul>
                    <Button asChild size="sm" variant="outline" className="w-full mt-2">
                      <Link to="/services/app-development">Learn More <ArrowRight className="ml-2 h-3 w-3" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* UX/UI Design */}
              <AnimatedSection staggerIndex={4} animation="scale">
                <Card className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-10 h-10 rounded-lg bg-purple-500/10 items-center justify-center mb-2">
                      <Eye className="h-5 w-5 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-secondary">UX/UI Design</CardTitle>
                    <p className="text-sm text-muted-foreground">From £299</p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>User-centred design that looks beautiful and works intuitively. Wireframes, prototypes, and final designs.</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> User research</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Interactive prototypes</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Design systems</li>
                    </ul>
                    <Button asChild size="sm" variant="outline" className="w-full mt-2">
                      <Link to="/services/ux-ui-design">Learn More <ArrowRight className="ml-2 h-3 w-3" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Personalised Tools */}
              <AnimatedSection staggerIndex={5} animation="scale">
                <Card className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-10 h-10 rounded-lg bg-emerald-500/10 items-center justify-center mb-2">
                      <Cpu className="h-5 w-5 text-emerald-600" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-secondary">Custom Tools & Dashboards</CardTitle>
                    <p className="text-sm text-muted-foreground">From £399</p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>Calculators, trackers, CRMs, and internal tools built around how you actually work.</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Tailored to your workflow</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Data dashboards</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Automation-ready</li>
                    </ul>
                    <Button asChild size="sm" variant="outline" className="w-full mt-2">
                      <Link to="/services/personalised-apps">Learn More <ArrowRight className="ml-2 h-3 w-3" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* ================================================================
            SECTION 2: AI & AUTOMATION
        ================================================================ */}
        <section id="ai" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/40 border-t border-border/60">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12 fade-in-section">
              <Badge className="mb-3 bg-violet-500/10 text-violet-700 border-violet-500/20">AI & Automation</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
                AI That Works While You Sleep
              </h2>
              <p className="text-muted-foreground">
                Chatbots, voice agents, and workflow automation that handle repetitive tasks, 
                answer customer questions, and capture leads 24/7.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto fade-in-section">
              {/* AI Chatbots */}
              <AnimatedSection staggerIndex={0} animation="scale">
                <Card className="h-full hover-lift border-2 border-violet-500/20">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-10 h-10 rounded-lg bg-violet-500/10 items-center justify-center mb-2">
                      <Bot className="h-5 w-5 text-violet-600" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-secondary">AI Chatbots</CardTitle>
                    <p className="text-sm text-muted-foreground">From £299</p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>Smart chatbots that answer FAQs, qualify leads, and book appointments automatically. Trained on your business.</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-violet-600" /> 24/7 availability</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-violet-600" /> Lead qualification</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-violet-600" /> CRM integration</li>
                    </ul>
                    <Button asChild size="sm" className="w-full mt-2 bg-violet-600 hover:bg-violet-700">
                      <Link to="/ai-package">View AI Packages <ArrowRight className="ml-2 h-3 w-3" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Voice Agents */}
              <AnimatedSection staggerIndex={1} animation="scale">
                <Card className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-10 h-10 rounded-lg bg-rose-500/10 items-center justify-center mb-2">
                      <Mic className="h-5 w-5 text-rose-600" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-secondary">AI Voice Agents</CardTitle>
                    <p className="text-sm text-muted-foreground">From £499</p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>Phone agents that handle calls, take bookings, and answer questions with natural conversation.</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Natural speech</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Appointment booking</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Call transcripts</li>
                    </ul>
                    <Button asChild size="sm" variant="outline" className="w-full mt-2">
                      <Link to="/ai-package">Learn More <ArrowRight className="ml-2 h-3 w-3" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Workflow Automation */}
              <AnimatedSection staggerIndex={2} animation="scale">
                <Card className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-10 h-10 rounded-lg bg-orange-500/10 items-center justify-center mb-2">
                      <Zap className="h-5 w-5 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-secondary">Workflow Automation</CardTitle>
                    <p className="text-sm text-muted-foreground">From £199</p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>Automate repetitive tasks like data entry, email follow-ups, and report generation.</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Save hours weekly</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Reduce errors</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Connect your tools</li>
                    </ul>
                    <Button asChild size="sm" variant="outline" className="w-full mt-2">
                      <Link to="/ai-package">Learn More <ArrowRight className="ml-2 h-3 w-3" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* ================================================================
            SECTION 3: BRANDING & DESIGN
        ================================================================ */}
        <section id="branding" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12 fade-in-section">
              <Badge className="mb-3 bg-amber-500/10 text-amber-700 border-amber-500/20">Branding & Design</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
                Look Professional, Be Memorable
              </h2>
              <p className="text-muted-foreground">
                From logos to complete brand identities — visual design that makes your business stand out.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto fade-in-section">
              {/* Logo Design */}
              <AnimatedSection staggerIndex={0} animation="scale">
                <Card className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-10 h-10 rounded-lg bg-amber-500/10 items-center justify-center mb-2">
                      <Brush className="h-5 w-5 text-amber-600" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-secondary">Logo Design</CardTitle>
                    <p className="text-sm text-muted-foreground">From £99</p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>Clean, memorable logos with 2–3 concepts and unlimited revisions until you're happy.</p>
                    <Button asChild size="sm" variant="outline" className="w-full mt-2">
                      <Link to="/services/logo-design">Learn More <ArrowRight className="ml-2 h-3 w-3" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Branding */}
              <AnimatedSection staggerIndex={1} animation="scale">
                <Card className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-10 h-10 rounded-lg bg-indigo-500/10 items-center justify-center mb-2">
                      <Sparkles className="h-5 w-5 text-indigo-600" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-secondary">Full Brand Identity</CardTitle>
                    <p className="text-sm text-muted-foreground">From £299</p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>Logo, colours, typography, and brand guidelines for a consistent, professional look everywhere.</p>
                    <Button asChild size="sm" variant="outline" className="w-full mt-2">
                      <Link to="/services/branding">Learn More <ArrowRight className="ml-2 h-3 w-3" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Copywriting */}
              <AnimatedSection staggerIndex={2} animation="scale">
                <Card className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-10 h-10 rounded-lg bg-slate-500/10 items-center justify-center mb-2">
                      <PenTool className="h-5 w-5 text-slate-600" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-secondary">Copywriting</CardTitle>
                    <p className="text-sm text-muted-foreground">From £40/page</p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>Professional website copy that sounds like you and converts visitors into customers.</p>
                    <Button asChild size="sm" variant="outline" className="w-full mt-2">
                      <Link to="/services/copywriting">Learn More <ArrowRight className="ml-2 h-3 w-3" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* ================================================================
            SECTION 4: DIGITAL MARKETING
        ================================================================ */}
        <section id="marketing" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/40 border-t border-border/60">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12 fade-in-section">
              <Badge className="mb-3 bg-green-500/10 text-green-700 border-green-500/20">Digital Marketing</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
                Get Found, Get Leads, Get Sales
              </h2>
              <p className="text-muted-foreground">
                SEO, Google Ads, email marketing, and content that brings customers to your door.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto fade-in-section">
              {/* SEO */}
              <AnimatedSection staggerIndex={0} animation="scale">
                <Card className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-10 h-10 rounded-lg bg-green-500/10 items-center justify-center mb-2">
                      <Search className="h-5 w-5 text-green-600" />
                    </div>
                    <CardTitle className="text-base font-semibold text-secondary">SEO</CardTitle>
                    <p className="text-sm text-muted-foreground">From £199/mo</p>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>Rank higher on Google with keyword research, on-page optimisation, and local SEO.</p>
                    <Button asChild size="sm" variant="outline" className="w-full mt-3">
                      <Link to="/services/seo">Details <ArrowRight className="ml-2 h-3 w-3" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Google Ads */}
              <AnimatedSection staggerIndex={1} animation="scale">
                <Card className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-10 h-10 rounded-lg bg-red-500/10 items-center justify-center mb-2">
                      <Target className="h-5 w-5 text-red-600" />
                    </div>
                    <CardTitle className="text-base font-semibold text-secondary">Google Ads</CardTitle>
                    <p className="text-sm text-muted-foreground">From £299 setup</p>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>Paid advertising that brings immediate traffic and leads. Campaign setup and management.</p>
                    <Button asChild size="sm" variant="outline" className="w-full mt-3">
                      <Link to="/services/digital-marketing">Details <ArrowRight className="ml-2 h-3 w-3" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Email Marketing */}
              <AnimatedSection staggerIndex={2} animation="scale">
                <Card className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-10 h-10 rounded-lg bg-blue-500/10 items-center justify-center mb-2">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-base font-semibold text-secondary">Email Marketing</CardTitle>
                    <p className="text-sm text-muted-foreground">From £149</p>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>Newsletters, automation sequences, and email campaigns that nurture leads into customers.</p>
                    <Button asChild size="sm" variant="outline" className="w-full mt-3">
                      <Link to="/services/email-marketing">Details <ArrowRight className="ml-2 h-3 w-3" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Content Marketing */}
              <AnimatedSection staggerIndex={3} animation="scale">
                <Card className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-10 h-10 rounded-lg bg-purple-500/10 items-center justify-center mb-2">
                      <FileText className="h-5 w-5 text-purple-600" />
                    </div>
                    <CardTitle className="text-base font-semibold text-secondary">Content Marketing</CardTitle>
                    <p className="text-sm text-muted-foreground">From £199</p>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>Blog posts, articles, and content that establishes you as an authority and attracts organic traffic.</p>
                    <Button asChild size="sm" variant="outline" className="w-full mt-3">
                      <Link to="/services/content-marketing">Details <ArrowRight className="ml-2 h-3 w-3" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* ================================================================
            SECTION 5: SUPPORT & HOSTING
        ================================================================ */}
        <section id="support" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12 fade-in-section">
              <Badge className="mb-3 bg-slate-500/10 text-slate-700 border-slate-500/20">Support & Hosting</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
                Keep Everything Running Smoothly
              </h2>
              <p className="text-muted-foreground">
                Hosting, maintenance, security updates, and ongoing support so you can focus on your business.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto fade-in-section">
              {/* Maintenance */}
              <AnimatedSection staggerIndex={0} animation="scale">
                <Card className="h-full hover-lift border-2 border-primary/20">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-10 h-10 rounded-lg bg-primary/10 items-center justify-center mb-2">
                      <Wrench className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-secondary">Maintenance & Support</CardTitle>
                    <p className="text-sm text-muted-foreground">From £25/month</p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>Regular updates, security patches, backups, and content changes. Priority support when you need it.</p>
                    <Button asChild size="sm" className="w-full mt-2">
                      <Link to="/services/maintenance-support">View Plans <ArrowRight className="ml-2 h-3 w-3" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Web Hosting */}
              <AnimatedSection staggerIndex={1} animation="scale">
                <Card className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-10 h-10 rounded-lg bg-cyan-500/10 items-center justify-center mb-2">
                      <Server className="h-5 w-5 text-cyan-600" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-secondary">Web Hosting</CardTitle>
                    <p className="text-sm text-muted-foreground">From £10/month</p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>Fast, secure hosting with 99.9% uptime, SSL certificates, and daily backups included.</p>
                    <Button asChild size="sm" variant="outline" className="w-full mt-2">
                      <Link to="/services/web-hosting">Learn More <ArrowRight className="ml-2 h-3 w-3" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* IT Support */}
              <AnimatedSection staggerIndex={2} animation="scale">
                <Card className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-10 h-10 rounded-lg bg-slate-500/10 items-center justify-center mb-2">
                      <Headset className="h-5 w-5 text-slate-600" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-secondary">IT Support</CardTitle>
                    <p className="text-sm text-muted-foreground">From £50/hour</p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>General tech support for small businesses — email setup, domain management, troubleshooting.</p>
                    <Button asChild size="sm" variant="outline" className="w-full mt-2">
                      <Link to="/services/it-support">Learn More <ArrowRight className="ml-2 h-3 w-3" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* ================================================================
            FINAL CTA
        ================================================================ */}
        <section className="relative py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 border-t border-border/60">
          <Container size="narrow" className="fade-in-section">
            <div className="text-center space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">
                Not Sure Where to Start?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Tell us about your business and we'll recommend the right services — no pressure, no jargon.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href="https://wa.me/447424062513?text=Hi%2C%20I%27d%20like%20to%20discuss%20my%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                We reply within 4 hours · No obligation · No sales pressure
              </p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
