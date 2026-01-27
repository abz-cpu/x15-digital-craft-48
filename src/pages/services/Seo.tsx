import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ArrowRight,
  Search,
  TrendingUp,
  BarChart3,
  Globe,
  Target,
  FileText,
  ShieldCheck,
  MapPin,
  PhoneCall,
  AlertTriangle,
  Wrench,
  Code,
  Zap,
  XCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container } from "@/components/Container";
import { ServiceSchema } from "@/components/ServiceSchema";
import { HowToSchema } from "@/components/HowToSchema";

const Seo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Local SEO Services London & UK | Get Found on Google | L&D Digital"
        description="Local SEO for UK service businesses. We help you rank in Google Maps + local search, increase enquiries, and convert more website visitors into calls and bookings."
        keywords="local SEO London, SEO services UK, Google Maps ranking, Google Business Profile optimisation, small business SEO, SEO agency London, local service SEO"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/services/seo"
      />

      <ServiceSchema
        name="Local SEO Services"
        description="Local SEO for UK service businesses. We help you rank in Google Maps and local search, improve on-page SEO, and increase enquiries."
        url="https://digital.luminousanddeliver.co.uk/services/seo"
        priceRange="£300-£950+"
        serviceType="Local Search Engine Optimization"
      />

      <HowToSchema
        name="How L&D Digital improves your local SEO"
        description="Our 4-step local SEO process to increase Google visibility, enquiries, and conversions."
        totalTime="P30D"
        estimatedCost={{ currency: "GBP", value: "600" }}
        steps={[
          {
            name: "Setup (Foundation or Launch)",
            text: "We start with a one-time setup to build a clean baseline: audit, local keyword plan, Google Business Profile optimisation, schema, and indexing checks.",
          },
          {
            name: "On-Page Improvements",
            text: "Optimise your key pages (titles, headings, internal links, and content) to match local intent and drive enquiries.",
          },
          {
            name: "Technical Health",
            text: "Fix crawl/index issues and improve speed/mobile usability where it impacts rankings and conversions.",
          },
          {
            name: "Ongoing Growth",
            text: "Monthly updates: content/service pages, local signals, performance tracking, and conversion improvements.",
          },
        ]}
      />

      <Navigation darkHero />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-40 pb-20 md:pt-44 md:pb-24 lg:pt-48 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900">
          <Container>
            <div className="relative text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Local SEO That Brings Calls & Bookings
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4">
                Rank in Google Maps + local search across London and the UK.
              </p>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                We focus on measurable outcomes: more visibility, more enquiries, better conversion.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
                  <Link to="/contact">
                    Request Free SEO Review <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                >
                  <Link to="/quick-start">Start Project Brief</Link>
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: MapPin, title: "Map Pack Focus", desc: "Google Business + local pages optimised for visibility" },
                  { icon: ShieldCheck, title: "Clean, Safe SEO", desc: "No spam tactics or "guarantees" that damage your site" },
                  { icon: PhoneCall, title: "Lead-First", desc: "Pages built to convert visitors into calls and bookings" },
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-3 p-5 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
                    <b.icon className="h-6 w-6 text-white mt-0.5 flex-shrink-0" />
                    <div className="text-left">
                      <div className="text-white font-semibold text-lg mb-1">{b.title}</div>
                      <div className="text-white/80 text-sm">{b.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Breadcrumb below hero */}
        <BreadcrumbNav />

        {/* Who This Is For */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Who This Is For</h2>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                    Service businesses that need consistent enquiries from people searching in their area.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {[
                    {
                      icon: MapPin,
                      title: "Local Businesses",
                      desc: "Want to rank in Google Maps (Map Pack) and drive foot traffic or service bookings",
                    },
                    {
                      icon: Target,
                      title: "Service Providers",
                      desc: "Tired of paying for every lead with ads and want steady organic enquiries",
                    },
                    {
                      icon: TrendingUp,
                      title: "Growth-Focused",
                      desc: "Clinics, trades, property, hospitality, professional services looking to scale",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Long-Term Players",
                      desc: "Ready to invest in steady growth rather than quick-fix tactics",
                    },
                  ].map((item, i) => (
                    <Card key={i} className="border-2 hover:border-primary/50 transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <item.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg text-secondary mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="p-6 rounded-lg border-l-4 border-primary bg-primary/5">
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-secondary font-semibold mb-2">Timeline Expectation</div>
                      <p className="text-muted-foreground">
                        SEO is not instant. We focus on the highest-leverage wins first (Google Business Profile + local pages + technical hygiene), then build momentum with monthly improvements. Most businesses see measurable progress within 2-3 months.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* NEW SECTION: SEO Is Easier When We Build Your Site */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                    <Code className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">SEO + Web Development Package</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                    SEO Is Easier (and Cheaper) When We Build Your Site
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                    Existing sites often carry technical debt, structural issues, and performance problems. In many cases, building SEO-ready from day one is faster and more cost-effective than fixing long-term issues.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-10">
                  {/* Left: The Problem */}
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="p-2 bg-red-500/10 rounded">
                        <XCircle className="h-5 w-5 text-red-600" />
                      </div>
                      <h3 className="text-xl font-bold text-secondary">Why Existing Sites Are Harder</h3>
                    </div>

                    <div className="space-y-4">
                      {[
                        {
                          title: "You're Undoing Damage First",
                          desc: "Broken heading structure, thin content, bad URLs, slow speed, plugin conflicts, old SEO hacks. Before growth, you must clean up.",
                        },
                        {
                          title: "You're Constrained by the Stack",
                          desc: "Bloated themes (Elementor, WPBakery, Divi), plugin conflicts, cheap hosting, poor markup. You can't move fast without refactoring.",
                        },
                        {
                          title: "Structure Is Usually Wrong",
                          desc: "No service + location pages, poor internal linking, blog not connected to money pages, no conversion flow.",
                        },
                        {
                          title: "You Can Break Things",
                          desc: "SEO changes can break layouts, plugin updates break pages, forms stop working. Client blames you. That's why agencies charge more.",
                        },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                          <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-secondary mb-1">{item.title}</div>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: The Solution */}
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="p-2 bg-primary/10 rounded">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-secondary">Why Fresh Builds Are Better</h3>
                    </div>

                    <div className="space-y-4">
                      {[
                        {
                          title: "Built SEO-Ready From Day One",
                          desc: "Clean heading hierarchy, proper URL structure, fast loading, mobile-first, schema markup included.",
                        },
                        {
                          title: "Modern, Lightweight Stack",
                          desc: "No bloated themes or plugin conflicts. Fast, secure, and built for performance and conversions.",
                        },
                        {
                          title: "Correct Structure From the Start",
                          desc: "Service + location pages, internal linking strategy, clear conversion paths, lead capture optimised.",
                        },
                        {
                          title: "No Risk of Breaking Things",
                          desc: "Everything is built to work together. No legacy issues, no surprises, no unexpected costs.",
                        },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-secondary mb-1">{item.title}</div>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Card className="border-2 border-primary">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Wrench className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-secondary mb-3">Combined Package Discount</h3>
                        <p className="text-muted-foreground mb-4">
                          When you build your website with L&D Digital, we include baseline SEO optimisation in the build process. This means your SEO setup cost is significantly lower because the site is already built correctly.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 bg-background rounded-lg border">
                            <div className="text-sm text-muted-foreground mb-1">Existing Site SEO Setup</div>
                            <div className="text-2xl font-bold text-secondary">£300-£950</div>
                            <div className="text-sm text-muted-foreground mt-1">Plus fixing technical issues</div>
                          </div>
                          <div className="p-4 bg-primary/5 rounded-lg border-2 border-primary">
                            <div className="text-sm text-primary font-semibold mb-1">Build + SEO Package</div>
                            <div className="text-2xl font-bold text-primary">£150-£400</div>
                            <div className="text-sm text-primary/80 mt-1">SEO add-on (site built clean)</div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Button asChild className="w-full sm:w-auto">
                            <Link to="/services/web-development">
                              View Web Development Services <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* What You Get */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <AnimatedSection animation="scale">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">What You Get</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Practical, results-focused SEO services that increase visibility and convert visitors into customers.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Search,
                      title: "Local Keyword Strategy",
                      desc: "Service + area terms that drive real enquiries, not vanity traffic",
                    },
                    {
                      icon: Target,
                      title: "Google Business Profile",
                      desc: "Optimisation for Maps visibility, reviews, and trust signals",
                    },
                    {
                      icon: FileText,
                      title: "On-Page SEO",
                      desc: "Titles, headings, copy, and internal links optimised for conversion",
                    },
                    {
                      icon: Globe,
                      title: "Technical SEO",
                      desc: "Speed, mobile, indexing, and crawl fixes that impact rankings",
                    },
                    {
                      icon: TrendingUp,
                      title: "Authority Building",
                      desc: "Higher-tier outreach for quality local and industry backlinks",
                    },
                    {
                      icon: BarChart3,
                      title: "Clear Reporting",
                      desc: "Monthly updates showing what we did and what's next",
                    },
                  ].map((item, i) => (
                    <Card key={i} className="hover-lift border-2 hover:border-primary/50 transition-all">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="p-4 bg-primary/10 rounded-lg mb-4">
                            <item.icon className="h-8 w-8 text-primary" />
                          </div>
                          <h3 className="text-lg font-semibold text-secondary mb-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">How It Works</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    A systematic approach to local SEO that builds momentum over time.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                  {[
                    {
                      step: "1",
                      title: "Setup",
                      desc: "Choose Foundation or Launch based on your goals and competition level",
                    },
                    {
                      step: "2",
                      title: "Fix + Align",
                      desc: "Optimise key pages for local search intent and lead conversion",
                    },
                    {
                      step: "3",
                      title: "Build Signals",
                      desc: "Add service pages, content, and local citations as needed",
                    },
                    {
                      step: "4",
                      title: "Track + Improve",
                      desc: "Monthly iteration based on rankings, traffic, and lead quality",
                    },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-teal-700 text-white text-2xl font-bold mb-4 shadow-lg">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-semibold text-secondary mb-3">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: ShieldCheck,
                      title: "Setup is required",
                      desc: "We don't start monthly SEO without a clean baseline and proper tracking in place.",
                    },
                    {
                      icon: XCircle,
                      title: "No spam tactics",
                      desc: "We avoid risky shortcuts that can damage your rankings and reputation long-term.",
                    },
                    {
                      icon: FileText,
                      title: "Clear scope",
                      desc: "You'll know exactly what's included, what's optional, and what to expect each month.",
                    },
                  ].map((x, i) => (
                    <Card key={i}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-primary/10 rounded">
                            <x.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold text-secondary mb-2">{x.title}</div>
                            <p className="text-sm text-muted-foreground">{x.desc}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Pricing */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Pricing</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Transparent pricing for UK service businesses. Monthly SEO requires a one-time setup first.
                  </p>
                </div>

                {/* Setup Options */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-secondary mb-6 text-center">One-Time Setup (Required First)</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="hover-lift border-2">
                      <CardContent className="p-8">
                        <div className="text-sm font-semibold text-primary uppercase mb-2">One-time Setup</div>
                        <h3 className="text-2xl font-bold text-secondary mb-2">Local SEO Foundation</h3>
                        <div className="text-3xl font-bold text-secondary mb-4">£300–£600</div>
                        <p className="text-muted-foreground mb-6">
                          For smaller sites that need a clean baseline before ongoing SEO work.
                        </p>
                        <ul className="space-y-3">
                          {[
                            "Full SEO + local audit",
                            "Local keyword plan (service + area)",
                            "Google Business Profile optimisation",
                            "On-page fixes (core pages)",
                            "Local schema + indexing checks",
                          ].map((li, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-secondary">{li}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="hover-lift border-2 border-primary shadow-lg">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="text-sm font-semibold text-primary uppercase">One-time Setup</div>
                          <div className="px-2 py-1 bg-primary/10 rounded text-xs font-semibold text-primary">
                            RECOMMENDED
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-secondary mb-2">Local SEO Launch</h3>
                        <div className="text-3xl font-bold text-secondary mb-4">£750–£950</div>
                        <p className="text-muted-foreground mb-6">
                          For competitive niches that want faster progress and stronger conversion from day one.
                        </p>
                        <ul className="space-y-3">
                          {[
                            "Everything in Foundation",
                            "On-page fixes (up to 10 key pages)",
                            "Internal linking structure",
                            "Conversion-focused improvements (CRO)",
                            "Tracking + baseline reporting",
                          ].map((li, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-secondary">{li}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Monthly Options */}
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-6 text-center">Ongoing Monthly SEO</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Local Visibility */}
                    <Card className="hover-lift border-2">
                      <CardContent className="p-8">
                        <div className="text-sm font-semibold text-primary uppercase mb-2">Monthly Plan</div>
                        <h3 className="text-2xl font-bold text-secondary mb-2">Local Visibility</h3>
                        <div className="text-3xl font-bold text-secondary mb-4">£200–£250/mo</div>
                        <p className="text-sm text-muted-foreground mb-6">
                          For maintaining Google Maps presence and site hygiene (not growth SEO).
                        </p>
                        <ul className="space-y-3 mb-6">
                          {[
                            "Google Business Profile updates",
                            "Local listing hygiene",
                            "Title & meta updates (light)",
                            "Basic local keyword tracking",
                            "Monthly check-in",
                          ].map((li, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-secondary">{li}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs text-muted-foreground italic">
                          Not suitable for competitive growth or scaling enquiries.
                        </p>
                      </CardContent>
                    </Card>

                    {/* Starter SEO */}
                    <Card className="hover-lift border-2">
                      <CardContent className="p-8">
                        <div className="text-sm font-semibold text-primary uppercase mb-2">Monthly Plan</div>
                        <h3 className="text-2xl font-bold text-secondary mb-2">Starter SEO</h3>
                        <div className="text-3xl font-bold text-secondary mb-4">£350–£400/mo</div>
                        <p className="text-sm text-muted-foreground mb-6">
                          For steady local SEO improvements and consistent ranking maintenance.
                        </p>
                        <ul className="space-y-3">
                          {[
                            "Everything in Local Visibility",
                            "On-page improvements",
                            "Local intent optimisation",
                            "Review strategy guidance",
                            "Monthly performance update",
                          ].map((li, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-secondary">{li}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Growth SEO */}
                    <Card className="hover-lift border-2 border-primary shadow-lg">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="text-sm font-semibold text-primary uppercase">Monthly Plan</div>
                          <div className="px-2 py-1 bg-primary/10 rounded text-xs font-semibold text-primary">
                            POPULAR
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-secondary mb-2">Growth SEO</h3>
                        <div className="text-3xl font-bold text-secondary mb-4">£550–£750/mo</div>
                        <p className="text-sm text-muted-foreground mb-6">
                          For businesses that want measurable growth in enquiries and revenue.
                        </p>
                        <ul className="space-y-3">
                          {[
                            "Everything in Starter",
                            "1 service page OR blog content (monthly)",
                            "Internal linking improvements",
                            "Conversion-focused updates (CRO)",
                            "Priority support",
                          ].map((li, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-secondary">{li}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="mt-10 p-6 rounded-lg border bg-muted/50 text-center max-w-3xl mx-auto">
                  <p className="text-sm text-muted-foreground">
                    Pricing depends on site size, competition, and current SEO condition. We don't guarantee rankings
                    (nobody credible can), but we commit to clear deliverables, transparent reporting, and steady
                    improvements.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Want More Enquiries From Google?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Request a free SEO review and we'll tell you the biggest wins to improve visibility and conversions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
                  <Link to="/contact">
                    Request Free SEO Review <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                >
                  <Link to="/quick-start">Start Project Brief</Link>
                </Button>
              </div>
              <p className="mt-8 text-white/80 max-w-2xl mx-auto">
                We'll respond with a short action plan and whether SEO is worth it for your niche and location. No sales pitch.
              </p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Seo;