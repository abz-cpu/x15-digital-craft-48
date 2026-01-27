import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ProductSchema } from "@/components/ProductSchema";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, MessageSquare, Phone, Briefcase, Shield, Tag, Info, Clock, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container } from "@/components/Container";
import { WebPackagesComparisonTable } from "@/components/WebPackagesComparisonTable";
import { DeviceMockupModal } from "@/components/DeviceMockupModal";
import { LifestyleMockup } from "@/components/LifestyleMockup";
import blogWebDevHero from "@/assets/blog-web-dev-hero.png";
import blogOffshoreRisks from "@/assets/blog-offshore-risks.png";
import portfolioPlumbing from "@/assets/portfolio-plumbing.png";
import portfolioSalon from "@/assets/portfolio-salon.png";
import x15pcbuilders from "@/assets/x15pcbuilders-screenshot-new.png";
const portfolioItems = [
  {
    id: "ld-builds",
    title: "L&D Builds",
    category: "Scale Package • PC Building",
    type: "Scale",
    features: [
      "Custom PC building services showcase",
      "FAQ section with common questions",
      "Lead capture forms",
      "Service pages with pricing",
    ],
    timeline: "10-14 days",
    tech: "React, Tailwind CSS, SEO optimised",
    image: x15pcbuilders,
    isLive: true,
    liveUrl: "https://builds.luminousanddeliver.co.uk",
  },
  {
    id: "elite-salon",
    title: "Elite Salon",
    category: "Growth Package • Professional Services",
    type: "Growth",
    features: ["Online booking integration", "Service gallery", "Staff profiles", "Contact forms"],
    timeline: "5-7 days",
    tech: "React, Tailwind CSS, Booking system",
    image: portfolioSalon,
    isLive: false,
  },
  {
    id: "local-plumber",
    title: "Local Plumber",
    category: "Foundation Package • Local Business",
    type: "Foundation",
    features: ["Single-page lead generation", "Clear call-to-actions", "Service area map", "Contact form"],
    timeline: "48 hours",
    tech: "React, Tailwind CSS, Mobile-first",
    image: portfolioPlumbing,
    isLive: false,
  },
];
const WebPackage = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof portfolioItems)[0] | null>(null);
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Web Development Packages | Websites from £200 UK | L&D Digital"
        description="Choose from Foundation, Growth, or Scale website packages. One-time build fee, you keep your domain and content. Optional hosting and maintenance."
        keywords="cheap website package for startups UK, best website builder for small business, how to get a professional website on a budget, affordable web design packages, small business website cost UK"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/web-package"
      />
      <ProductSchema
        name="L&D Digital Web Development Packages"
        description="Professional website development packages for UK businesses. Foundation from £200, Growth from £600, Scale from £1,400. One-time build fee, you keep your domain and content."
        category="Web Development Services"
        offers={[
          { price: 200, priceCurrency: "GBP", url: "https://digital.luminousanddeliver.co.uk/web-package" },
          { price: 600, priceCurrency: "GBP", url: "https://digital.luminousanddeliver.co.uk/web-package" },
          { price: 1400, priceCurrency: "GBP", url: "https://digital.luminousanddeliver.co.uk/web-package" },
        ]}
        aggregateRating={{ ratingValue: 4.9, reviewCount: 47 }}
      />

      <Navigation darkHero />

      <main className="flex-1">
        {/* 1. HERO */}
        <section className="relative overflow-hidden pt-40 pb-12 md:pt-44 md:pb-16 lg:pt-48 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
          {/* Subtle gradient overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56, 189, 248, 0.15), transparent), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(20, 184, 166, 0.1), transparent)",
            }}
          />
          {/* Background image overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-no-repeat bg-[center_25%] md:bg-[center_35%] lg:bg-center opacity-25 pointer-events-none"
            style={{
              backgroundImage: "url('/website.png')",
            }}
          />

          <Container>
            {/* Keep content above background */}
            <div className="relative text-center max-w-3xl mx-auto">
              {/* Urgency / scarcity badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full bg-emerald-500/90 backdrop-blur-sm border border-emerald-400/50 shadow-lg shadow-emerald-500/25">
                <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-xs font-bold tracking-wide uppercase text-white">
                  Currently booking 2–3 weeks out
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
                Web Development Packages
              </h1>

              <p className="text-lg text-white mb-3">
                Professional websites that attract customers and grow your business.
              </p>

              <p className="text-base text-slate-200">
                One-time build fee. You keep your domain &amp; content. No forced monthly platform fees.
              </p>

              {/* Hero CTAs */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-teal-500 text-white hover:bg-teal-400 font-semibold tracking-tight shadow-[0_8px_30px_rgba(20,184,166,0.3)] hover:shadow-[0_12px_40px_rgba(20,184,166,0.4)] transition-all"
                >
                  <Link to="/quick-start">
                    Start Your Project
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
                    Book Free Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Breadcrumb below hero */}
        <BreadcrumbNav />

        {/* 2. MAIN PACKAGES + COMPARISON */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3">Choose Your Growth Package</h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Pick the website package that matches where your business is today. One clear build price. You keep
                control of your domain and content.
              </p>
            </div>

            {/* Tier cards */}
            <div className="grid gap-6 lg:gap-8 max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {/* FOUNDATION TIER */}
              <AnimatedSection staggerIndex={0} animation="scale">
                <Card className="hover-lift relative h-full bg-white">
                  {/* Budget Friendly Badge */}
                  <Badge className="absolute -top-3 left-4 bg-white text-teal-700 border border-teal-200 shadow-sm flex items-center gap-1 px-3 py-1 text-[11px] font-medium tracking-wide">
                    🚀 Essential
                  </Badge>

                  <CardHeader className="pt-8 pb-4">
                    <CardTitle className="text-sm font-semibold tracking-[0.12em] text-teal-700 uppercase">
                      Foundation
                    </CardTitle>
                    <p className="text-3xl font-bold text-secondary mt-1">
                      £200 <span className="block text-xs font-medium text-muted-foreground">One payment</span>
                    </p>
                    {/* Best for + value line */}
                    <p className="text-xs font-medium text-muted-foreground mt-2">
                      Best for: new businesses, trades, and solo founders needing a clean, simple site.
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-1">
                      Roughly less than £0.10 per visitor converted over a year.
                    </p>
                  </CardHeader>

                  <CardContent className="pb-6">
                    <p className="text-sm font-semibold text-secondary mb-1">Start Attracting Customers</p>
                    <p className="text-sm text-muted-foreground mb-5">
                      Launch a professional online presence quickly and start attracting customers immediately.
                    </p>

                    <p className="text-xs font-semibold mb-2">What you get:</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">One powerful page designed to convert visitors into enquiries</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Mobile-perfect, responsive design</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Contact form or enquiry integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Ready in 48 hours</span>
                      </li>
                    </ul>

                    <Button asChild className="w-full">
                      <Link to="/quick-start">
                        Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* GROWTH TIER (MOST POPULAR) */}
              <AnimatedSection staggerIndex={1} animation="scale">
                <Card
                  className="
                    hover-lift relative h-full bg-white border border-primary/40
                    shadow-md shadow-primary/20 lg:-mt-2
                    transition-all duration-200
                    hover:border-[#F59E0B] hover:shadow-lg hover:shadow-[#F59E0B]/30
                  "
                >
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-black font-semibold px-3 py-1 text-[11px] tracking-wide">
                    ⭐ MOST POPULAR
                  </Badge>

                  <CardHeader className="pt-6 pb-4">
                    <CardTitle className="text-sm font-semibold tracking-[0.12em] text-teal-700 uppercase">
                      Growth
                    </CardTitle>
                    <p className="text-3xl font-bold text-secondary mt-1">
                      £600{" "}
                      <span className="block text-xs font-medium text-muted-foreground">
                        One-time build fee, no forced monthly platform fees
                      </span>
                    </p>
                    {/* Best for + value line */}
                    <p className="text-xs font-medium text-muted-foreground mt-2">
                      Best for: growing service businesses that need multiple pages and stronger conversion.
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-1">
                      Often pays for itself with a few extra booked clients.
                    </p>
                  </CardHeader>

                  <CardContent className="pb-6">
                    <p className="text-sm font-semibold text-secondary mb-1">Stand Out & Convert More</p>
                    <p className="text-sm text-muted-foreground mb-5">
                      For growing businesses that want to stand out and convert more visitors into customers.
                    </p>

                    <p className="text-xs font-semibold mb-2">What you get:</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">3–5 custom pages (e.g. Home, About, Services, Contact)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Strategic copywriting for key pages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">SEO foundation (metadata, structure, speed)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Contact + simple booking or enquiry system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Ready in 5–7 days</span>
                      </li>
                    </ul>

                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <Link to="/quick-start">
                        Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* SCALE TIER */}
              <AnimatedSection staggerIndex={2} animation="scale">
                <Card className="hover-lift relative h-full bg-white border border-primary/30">
                  <CardHeader className="pt-6 pb-4">
                    <CardTitle className="text-sm font-semibold tracking-[0.12em] text-teal-700 uppercase">
                      Scale
                    </CardTitle>
                    <p className="text-3xl font-bold text-secondary mt-1">
                      £1,400{" "}
                      <span className="block text-xs font-medium text-muted-foreground">
                        One payment, client-owned assets
                      </span>
                    </p>

                    {/* Best for + value line */}
                    <p className="text-xs font-medium text-muted-foreground mt-2">
                      Best for: established businesses ready to turn their website into a true sales engine.
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-1">
                      Built to generate leads daily and support long-term growth.
                    </p>
                  </CardHeader>

                  <CardContent className="pb-6">
                    <p className="text-sm font-semibold text-secondary mb-1">Your Customer Generation Engine</p>
                    <p className="text-sm text-muted-foreground mb-5">
                      For businesses serious about growth and ready to dominate their market.
                    </p>

                    <p className="text-xs font-semibold mb-2">What you get:</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">7–12 custom pages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Advanced features &amp; integrations (booking, payments, automations)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Full SEO optimisation across all pages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Portfolio, blog, or advanced booking system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Ready in 10–14 days</span>
                      </li>
                    </ul>

                    <Button asChild className="w-full">
                      <Link to="/quick-start">
                        Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* Pricing disclaimer */}
            <p className="mt-6 text-center text-sm text-muted-foreground">
              All prices shown are starting points. Your final quote depends on specific features, content requirements,
              and integrations needed.
            </p>

            {/* Support & Maintenance Strip */}
            <div className="mt-8 mb-8 p-4 bg-gradient-to-r from-teal-50 to-primary/5 rounded-xl border border-teal-200 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-teal-600" />
                <span className="text-sm font-medium text-secondary">Need ongoing support?</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <a
                  href="#support-maintenance"
                  className="text-sm font-semibold text-teal-700 hover:text-teal-900 underline underline-offset-2"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("support-maintenance")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Support & Maintenance from £24.99/month ↓
                </a>
                <span className="hidden sm:inline text-muted-foreground">|</span>
                <Link
                  to="/services/maintenance-support"
                  className="text-sm font-medium text-primary hover:text-primary/80 underline underline-offset-2"
                >
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Comparison Table */}
            <WebPackagesComparisonTable />
          </Container>
        </section>

        {/* 3. ADVANCED SOLUTIONS */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background lg:py-[5px]">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:3xl font-bold text-center mb-3">Need Something More Advanced?</h3>
              <p className="text-base text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                For larger projects that go beyond standard websites, we design fully bespoke systems tailored to how
                your business actually works.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Enterprise Systems */}
                <Card className="h-full hover-lift">
                  <CardHeader className="pb-4">
                    <p className="text-xs font-bold tracking-[0.16em] uppercase text-primary mb-2">
                      ENTERPRISE SYSTEMS
                    </p>
                    <p className="text-3xl font-bold text-secondary">From £2,400</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      E-commerce platforms, customer portals, multi-user dashboards, and CRM integrations with full
                      business automation.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>Payment gateway integration (Stripe, PayPal)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>Customer accounts &amp; order history</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>Advanced booking systems with calendar sync</span>
                      </li>
                    </ul>
                    <Button asChild size="lg" className="w-full">
                      <Link to="/contact">
                        Request Enterprise Quote <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Custom Web Applications */}
                <Card className="h-full hover-lift">
                  <CardHeader className="pb-4">
                    <p className="text-xs font-bold tracking-[0.16em] uppercase text-primary mb-2">
                      CUSTOM WEB APPLICATIONS
                    </p>
                    <p className="text-3xl font-bold text-secondary">From £3,500</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Bespoke platforms, SaaS tools, internal systems, and advanced integrations built to match your
                      exact workflows.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>Custom database architecture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>API integrations with your existing tools</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>Advanced analytics &amp; reporting dashboards</span>
                      </li>
                    </ul>

                    <Button asChild variant="outline" size="lg" className="w-full">
                      <Link to="/contact">
                        Request Custom Quote <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Container>
        </section>

        {/* CLOUDFLARE PERFORMANCE & SECURITY PACKAGES */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
          <Container>
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-teal-600/10 text-teal-700 border-teal-200">
                  ⚡ Powered by Cloudflare Enterprise Infrastructure
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                  Make Your Website Faster, Safer & More Reliable
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Your site can feel up to 3× faster and more secure by running through the same global network that
                  powers brands like Netflix, Discord, and Shopify — without you touching a single setting.
                </p>
              </div>

              {/* Three Package Cards */}
              <div className="grid gap-6 lg:gap-8 max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-12">
                {/* PACKAGE 1: Setup Only */}
                <AnimatedSection staggerIndex={0} animation="scale">
                  <Card className="hover-lift relative h-full bg-white border border-border">
                    <CardHeader className="pt-6 pb-4">
                      <CardTitle className="text-sm font-semibold tracking-[0.12em] text-teal-700 uppercase">
                        Cloudflare Setup
                      </CardTitle>
                      <p className="text-3xl font-bold text-secondary mt-1">
                        £35
                        <span className="block text-xs font-medium text-muted-foreground">One-time setup fee</span>
                      </p>
                    </CardHeader>

                    <CardContent className="pb-6">
                      <p className="text-sm font-semibold text-secondary mb-1">Transform Your Website Performance</p>
                      <p className="text-sm text-muted-foreground mb-5">
                        Get enterprise-grade speed and security in one setup.
                      </p>

                      <p className="text-xs font-semibold mb-2">Your website gets:</p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Lightning-fast loading from 300+ global locations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Industry-standard encryption & security</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Protection against attacks & bots</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Optimised DNS routing for faster loading</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Smart caching & redirects</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Real-time analytics</span>
                        </li>
                      </ul>

                      {/* Micro-trust badges */}
                      <div className="mb-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <p className="text-xs text-slate-600 flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-teal-600" />
                          One-time professional setup
                        </p>
                        <p className="text-xs text-slate-600 flex items-center gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-teal-600" />
                          No ongoing commitment
                        </p>
                      </div>

                      {/* Service scope note */}
                      <div className="mb-4 p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                        <p className="text-xs text-slate-600 flex items-start gap-2">
                          <Info className="h-3.5 w-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
                          <span>For websites needing CDN/caching setup only</span>
                        </p>
                        <p className="text-xs text-slate-600 flex items-start gap-2">
                          <Zap className="h-3.5 w-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
                          <span>Works with any existing host or platform you use</span>
                        </p>
                      </div>

                      <Button asChild variant="outline" className="w-full">
                        <Link to="/contact">
                          Upgrade Your Site <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                {/* PACKAGE 2: Support & Maintenance - HIGHLIGHTED MIDDLE OPTION */}
                <AnimatedSection staggerIndex={1} animation="scale">
                  <Card
                    id="support-maintenance"
                    className="hover-lift relative h-full bg-white border-2 border-primary/40 shadow-lg lg:-mt-2 scroll-mt-24"
                  >
                    {/* MATCHED BADGE (same style & placement as Hosting + Support) */}
                    <Badge
                      className="absolute -top-3 left-4
                 inline-flex items-center gap-1
                 rounded-full bg-white
                 text-[#0F766E]
                 border border-[#0F766E]/30
                 shadow-sm
                 px-3 py-1
                 text-[11px] font-medium tracking-wide"
                    >
                      <span className="text-xs">💼</span>
                      STRESS-FREE CHOICE
                    </Badge>

                    <CardHeader className="pt-8 pb-4">
                      <CardTitle className="text-sm font-semibold tracking-[0.12em] text-teal-700 uppercase">
                        Support &amp; Maintenance
                      </CardTitle>
                      <p className="text-3xl font-bold text-secondary mt-1">
                        £24.99<span className="block text-xs font-medium text-muted-foreground">/month</span>
                      </p>
                    </CardHeader>

                    <CardContent className="pb-6">
                      <p className="text-sm font-semibold text-secondary mb-1">Never Worry About Your Website Again</p>
                      <p className="text-sm text-muted-foreground mb-5">
                        We handle everything so you can focus on your business.
                      </p>

                      <p className="text-xs font-semibold mb-2">Everything in Cloudflare Setup, plus:</p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Priority fixes when issues arise</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Monthly content updates (1 Hour)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Security monitoring &amp; threat blocking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Speed optimisation tuning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Priority support (24–48h response)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Monthly health reports</span>
                        </li>
                      </ul>

                      <p className="text-xs text-muted-foreground mb-4 italic">* Works with your existing hosting</p>

                      {/* Micro-trust badge */}
                      <div className="mb-4 p-3 bg-teal-50 rounded-lg border border-teal-200">
                        <p className="text-xs text-teal-700 flex items-center gap-1.5 font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5 text-teal-600" />
                          Works with any hosting provider
                        </p>
                        <Link
                          to="/services/maintenance-support"
                          className="text-xs text-teal-600 hover:text-teal-800 flex items-center gap-1.5 mt-1.5 underline underline-offset-2"
                        >
                          <ArrowRight className="h-3.5 w-3.5" />
                          View full maintenance details
                        </Link>
                      </div>

                      {/* Availability & response note */}
                      <div className="mb-4 p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                        <p className="text-xs text-slate-600 flex items-start gap-2">
                          <Info className="h-3.5 w-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
                          <span>Available only for websites built or managed by L&D Digital</span>
                        </p>
                        <p className="text-xs text-slate-600 flex items-start gap-2">
                          <Clock className="h-3.5 w-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
                          <span>Non-urgent support. Typical response within 24–72 hours.</span>
                        </p>
                      </div>

                      <Button asChild className="w-full bg-primary hover:bg-primary/90">
                        <Link to="/contact">
                          Get Peace of Mind <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                {/* PACKAGE 3: Hosting + Support */}
                <AnimatedSection staggerIndex={2} animation="scale">
                  <Card className="hover-lift relative h-full bg-white border border-primary/30">
                    <Badge className="absolute -top-3 left-4 bg-white text-[#F59E0B] border border-[#F59E0B]/30 shadow-sm flex items-center gap-1 px-3 py-1 text-[11px] font-medium tracking-wide">
                      ⭐ Best Value
                    </Badge>

                    <CardHeader className="pt-8 pb-4">
                      <CardTitle className="text-sm font-semibold tracking-[0.12em] text-teal-700 uppercase">
                        Hosting + Support
                      </CardTitle>
                      <p className="text-3xl font-bold text-secondary mt-1">
                        £34.99
                        <span className="block text-xs font-medium text-muted-foreground">/month all-inclusive</span>
                      </p>
                    </CardHeader>

                    <CardContent className="pb-6">
                      <p className="text-sm font-semibold text-secondary mb-1">Maximum Speed, Security & Reliability</p>
                      <p className="text-sm text-muted-foreground mb-5">
                        Fully managed hosting on enterprise infrastructure.
                      </p>

                      <p className="text-xs font-semibold mb-2">Everything in Support & Maintenance, plus:</p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Enterprise hosting with 99.99% uptime</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Instant loading from 300+ data centres</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Automatic seamless updates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Complete domain control</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Advanced visitor analytics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Proactive monitoring & instant fixes</span>
                        </li>
                      </ul>

                      <p className="text-xs text-emerald-700 mb-4 font-medium">
                        Perfect for business sites, portfolios & web apps
                      </p>

                      {/* Micro-trust badge */}
                      <div className="mb-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                        <p className="text-xs text-amber-800 flex items-center gap-1.5 font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5 text-amber-600" />
                          Replaces your hosting bill
                        </p>
                        <p className="text-xs text-amber-700 mt-1">No separate hosting subscription needed</p>
                      </div>

                      {/* Availability & response note */}
                      <div className="mb-4 p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                        <p className="text-xs text-slate-600 flex items-start gap-2">
                          <Info className="h-3.5 w-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
                          <span>Available only for websites built or managed by L&D Digital</span>
                        </p>
                        <p className="text-xs text-slate-600 flex items-start gap-2">
                          <Clock className="h-3.5 w-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
                          <span>Non-urgent support. Typical response within 24–72 hours.</span>
                        </p>
                      </div>

                      <Button asChild className="w-full">
                        <Link to="/contact">
                          Get Complete Protection <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>

              {/* What's NOT Included - Collapsible Section */}
              <details className="mb-8 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200 overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer flex items-center justify-between text-sm font-semibold text-secondary hover:bg-slate-50 transition-colors">
                  <span>What's NOT included in these packages?</span>
                  <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-4 pt-2 text-sm text-muted-foreground space-y-2 border-t border-slate-100">
                  <p className="flex items-start gap-2">
                    <span className="text-slate-400 mt-0.5">•</span>
                    <span>Full website redesigns or complete rebuilds</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-slate-400 mt-0.5">•</span>
                    <span>New pages or major content additions (available as separate add-on)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-slate-400 mt-0.5">•</span>
                    <span>Custom backend features or advanced integrations</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-slate-400 mt-0.5">•</span>
                    <span>New brand identity or logo design</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-slate-400 mt-0.5">•</span>
                    <span>Migration from slow/incompatible hosts (small add-on cost applies)</span>
                  </p>
                  <p className="text-xs text-slate-500 mt-3 italic">
                    These packages focus on performance, security, and maintenance. Need more? We offer custom
                    solutions.
                  </p>
                </div>
              </details>

              {/* Bottom Trust Statement */}
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-teal-100">
                <p className="text-sm text-muted-foreground mb-2">
                  <span className="font-semibold text-secondary">Perfect for existing websites:</span> Already have a
                  website? These packages work with any site to make it faster, more secure, and more reliable.
                </p>
                <p className="text-xs text-muted-foreground">
                  Enterprise-grade infrastructure · 24/7 monitoring · No technical knowledge required
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* 4. PORTFOLIO SHOWCASE */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Trusted by Growing UK Businesses</h2>
                <p className="text-slate-600 max-w-xl">
                  From local trades to tech startups—websites that attract customers and drive growth.
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                className="shrink-0 border-slate-300 text-slate-700 hover:bg-slate-50 gap-2"
              >
                <Link to="/portfolio">
                  View Full Portfolio
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              {portfolioItems.map((item, index) => {
                const variants: Array<"imac" | "macbook" | "laptop"> = ["imac", "macbook", "laptop"];
                return (
                  <AnimatedSection key={item.id} staggerIndex={index} animation="fade">
                    <div className="cursor-pointer group" onClick={() => setSelectedProject(item)}>
                      {/* Lifestyle Mockup with Category Badge */}
                      <div className="relative mb-6">
                        <LifestyleMockup
                          imageSrc={item.image}
                          alt={`${item.title} Website`}
                          variant={variants[index % 3]}
                          className="transform group-hover:scale-[1.02] transition-transform duration-500 rounded-2xl"
                        />
                        {/* Category Badge Overlay */}
                        <div className="absolute top-4 left-4 z-10">
                          <Badge className="bg-teal-600/90 backdrop-blur-sm text-white border-0 px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 shadow-lg">
                            <Tag className="h-3 w-3" />
                            {item.category.split(" • ")[1]?.toUpperCase() || item.category.toUpperCase()}
                          </Badge>
                        </div>
                      </div>

                      {/* Content Card */}
                      <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors">
                          {item.title}
                        </h3>

                        {/* Tech Stack */}
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-slate-500 font-medium">Tech Stack:</span>
                          <span className="text-slate-700 font-semibold">{item.tech}</span>
                        </div>

                        {/* Timeline */}
                        <div className="flex items-center justify-between text-sm mb-5">
                          <span className="text-slate-500 font-medium">Timeline:</span>
                          <span className="text-teal-600 font-bold">{item.timeline}</span>
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
                );
              })}
            </div>

            {/* Portfolio Modal */}
            {selectedProject && (
              <DeviceMockupModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
                imageSrc={selectedProject.image}
              />
            )}
          </Container>
        </section>

        {/* 4.5. EDUCATIONAL CONTENT - VALUE VS PRICE (DUAL FEATURED ARTICLES) */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white">
          <Container>
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-10">
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">📚 Essential Reading</Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
                  Before You Choose: Know What You&apos;re Really Paying For
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Understanding the true cost of cheap websites and offshore development helps you make informed
                  decisions.
                </p>
              </div>

              {/* Two Featured Articles Grid */}
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8 items-stretch">
                {/* Article 1: Cheap Websites */}
                <Card className="overflow-hidden border-2 border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg group h-full">
                  <Link to="/blog/cheap-websites" className="flex flex-col h-full">
                    {/* Image */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={blogWebDevHero}
                        alt="Code editor next to website builder showing the hidden costs of cheap websites"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        Web Development
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-secondary mb-3 leading-tight group-hover:text-primary transition-colors">
                        Why Cheap Websites Cost More in the Long Run
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                        That £50 website builder might seem like a bargain, but hidden rebuild costs add up fast. Learn
                        what you&apos;re really paying for and why transparent pricing saves money.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">5 min read</span>
                        <span className="text-sm font-medium text-primary inline-flex items-center gap-1">
                          Read Article
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </Card>

                {/* Article 2: Offshore Risks */}
                <Card className="overflow-hidden border-2 border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg group h-full">
                  <Link to="/blog/offshore-development-risks" className="flex flex-col h-full">
                    {/* Image */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={blogOffshoreRisks}
                        alt="Laptop with red warning sign and UK flag representing offshore development risks"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        Web Development
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-secondary mb-3 leading-tight group-hover:text-primary transition-colors">
                        The Hidden Dangers of Hiring Offshore Developers
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                        That £200 developer in India might seem tempting, but GDPR fines start at £17.5M and quality
                        issues often require complete rebuilds. Learn why UK-based development protects your business.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">6 min read</span>
                        <span className="text-sm font-medium text-primary inline-flex items-center gap-1">
                          Read Article
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </Card>
              </div>

              {/* Bottom CTA */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Want more insights on web development and business growth?
                </p>
                <Button asChild variant="ghost" size="sm">
                  <Link to="/blog">
                    View All Articles <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* 5. LEVEL UP: ADD AI AUTOMATION */}
        <section className="py-16 md:py-20 bg-muted/30">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Level Up: Add AI Automation</h2>
              <p className="text-lg text-muted-foreground">
                Your website brings the visitors. AI takes care of the follow-up.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              {/* AI Chatbot */}
              <Card className="text-center hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="inline-flex p-3 rounded-lg bg-[#0F766E]/10 mb-4 self-center">
                    <MessageSquare className="h-8 w-8 text-[#0F766E]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">AI Website Chatbot</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    Answers questions 24/7 and captures leads while you sleep.
                  </p>
                  <p className="text-xl font-bold text-[#0F766E] mb-4">From £50/month</p>
                  <Button asChild variant="outline" className="w-full mt-auto"></Button>
                </CardContent>
              </Card>

              {/* AI Receptionist */}
              <Card className="text-center hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="inline-flex p-3 rounded-lg bg-[#0F766E]/10 mb-4 self-center">
                    <Phone className="h-8 w-8 text-[#0F766E]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">AI Phone Receptionist</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    Never miss a call again — bookings and enquiries handled for you.
                  </p>
                  <p className="text-xl font-bold text-[#0F766E] mb-4">From £100/month</p>
                  <Button asChild variant="outline" className="w-full mt-auto"></Button>
                </CardContent>
              </Card>

              {/* Custom Automation */}
              <Card className="text-center hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="inline-flex p-3 rounded-lg bg-[#0F766E]/10 mb-4 self-center">
                    <Briefcase className="h-8 w-8 text-[#0F766E]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Custom AI Solution</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    Built around your workflows — from inbox to operations.
                  </p>
                  <p className="text-xl font-bold text-[#0F766E] mb-4">Custom pricing</p>
                  <Button asChild variant="outline" className="w-full mt-auto"></Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild size="lg" variant="outline">
                <Link to="/ai-package">
                  See All AI Solutions <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Section Separator */}
        <div className="w-full h-px bg-slate-200 my-12 md:my-16"></div>

        {/* 6. WEBSITE-SPECIFIC FAQ */}
        <section className="py-16 md:py-20 bg-muted/50">
          <Container>
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Website Packages — Frequently Asked Questions</h2>
                <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto">
                  Clear, simple answers — no hidden fees, no complicated terms.
                </p>
              </div>

              {/* FAQ List */}
              <div className="space-y-4">
                {/* FAQ Item 1 */}
                <div className="bg-background rounded-lg p-6 shadow-sm border border-border hover:border-primary/50 transition-colors">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                      1
                    </span>
                    Can I modify my website later?
                  </h3>
                  <p className="text-muted-foreground pl-8 leading-relaxed">
                    Yes — your website is fully editable and expandable. For ongoing help, fixes, and small updates, the
                    Support & Maintenance plan (from £25/month) is available.
                  </p>
                </div>

                {/* FAQ Item 2 */}
                <div className="bg-background rounded-lg p-6 shadow-sm border border-border hover:border-primary/50 transition-colors">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                      2
                    </span>
                    Do you provide hosting?
                  </h3>
                  <p className="text-muted-foreground pl-8 leading-relaxed">
                    Yes — you can use your own hosting, or I can fully manage everything for you:
                    <br />• <strong>£34.99/month</strong> — Hosting + Support (fully managed, replaces your hosting
                    bill)
                    <br />• <strong>£19.99/month</strong> — Support only (if you already have hosting)
                    <br />• <strong>£0</strong> — Use your own hosting with no extra monthly cost from me
                    <br />
                    <br />
                    If you&apos;re on my Hosting + Support plan and stop paying, hosting and maintenance stop and the
                    site goes offline. If you host it yourself, it stays online as long as your own hosting is active.
                  </p>
                </div>

                {/* FAQ Item 3 */}
                <div className="bg-background rounded-lg p-6 shadow-sm border border-border hover:border-primary/50 transition-colors">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                      3
                    </span>
                    What if I already have a domain?
                  </h3>
                  <p className="text-muted-foreground pl-8 leading-relaxed">
                    That’s perfect. I’ll connect your new website to your existing domain. If you don’t have one yet,
                    I’ll help you set it up (usually around £10/year).
                  </p>
                </div>

                {/* FAQ Item 4 */}
                <div className="bg-background rounded-lg p-6 shadow-sm border border-border hover:border-primary/50 transition-colors">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                      4
                    </span>
                    How does the process work?
                  </h3>
                  <div className="text-muted-foreground pl-8 leading-relaxed space-y-2">
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-primary">1.</span>
                      <span>Choose your package and pay a 50% deposit.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-primary">2.</span>
                      <span>Fill out a short questionnaire about your business.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-primary">3.</span>
                      <span>I build your website and send preview pages.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-primary">4.</span>
                      <span>You request changes (revisions included in your package).</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-primary">5.</span>
                      <span>
                        We launch the site on your domain and hand over your content, key settings, and any agreed
                        logins.
                      </span>
                    </p>
                  </div>
                </div>

                {/* FAQ Item 5 */}
                <div className="bg-background rounded-lg p-6 shadow-sm border border-border hover:border-primary/50 transition-colors">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                      5
                    </span>
                    Can you add features later?
                  </h3>
                  <p className="text-muted-foreground pl-8 leading-relaxed">
                    Yes — your website is fully expandable. I can add booking systems, payments, dashboards,
                    integrations and more. Most add-ons range from <strong>£200–800</strong> depending on complexity.
                  </p>
                </div>

                {/* FAQ Item 6 */}
                <div className="bg-background rounded-lg p-6 shadow-sm border border-border hover:border-primary/50 transition-colors">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                      6
                    </span>
                    What platforms do you build on?
                  </h3>
                  <p className="text-muted-foreground pl-8 leading-relaxed">
                    I use modern frameworks like React and Next.js, as well as premium no-code tools like Webflow and
                    Framer when suitable. Your site will be fast, mobile-friendly, and optimised for conversions.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 7. FINAL CTA – WEB PACKAGES, MATCHED TO GLOBAL CTA STYLE */}
        <section className="relative py-16 md:py-20 overflow-hidden bg-[#D9F7F4]">
          {/* Soft radial accents to match global CTA styling */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.06),transparent_55%)]" />
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_60%,hsl(var(--accent)/0.06),transparent_55%)]" />

          <Container size="narrow" className="relative">
            {/* Heading block */}
            <div className="text-center mb-10 space-y-4">
              {/* Badge styled like first CTA */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-semibold tracking-wider uppercase">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span>Launch-Ready In 2–14 Days</span>
              </div>

              {/* Headline (content kept, style matched) */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight">
                Let&apos;s Get Your{" "}
                <span className="bg-gradient-to-r from-primary via-teal-400 to-accent bg-clip-text text-transparent">
                  Website Live
                </span>
              </h2>

              {/* Subhead – same content, global CTA styling */}
              <p className="text-base md:text-lg text-ink-light max-w-2xl mx-auto leading-relaxed">
                Pick your package and start today, or book a call to discuss custom requirements.
              </p>
            </div>

            {/* Dual CTAs – same UX/UI as AI final CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              {/* Primary: Start Your Project */}
              <Link
                to="/quick-start"
                className="group flex items-center justify-center gap-2
          h-12 px-6 text-sm font-semibold rounded-xl
          bg-gradient-to-r from-primary via-teal-500 to-primary
          text-primary-foreground shadow-md hover:shadow-lg
          hover:scale-[1.015] active:scale-[0.97]
          transition-all"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary: Book Free Consultation */}
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-2
          h-12 px-6 text-sm font-semibold rounded-xl
          border border-border bg-background/70
          text-ink hover:border-primary hover:bg-primary/5 hover:text-primary
          shadow-sm hover:shadow-md hover:scale-[1.015]
          active:scale-[0.97] transition-all"
              >
                Book Free Consultation
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust line – content kept, styling matched */}
            <p className="text-xs text-ink/80 text-center">
              Quick quote in 4 hours · You keep your domain &amp; content · No forced monthly platform fees
            </p>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
};
export default WebPackage;
