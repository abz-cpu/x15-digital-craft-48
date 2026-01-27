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
  Sparkles,
  Clock,
  HelpCircle,
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
        {/* HERO */}
        <section className="relative overflow-hidden pt-40 pb-16 md:pt-44 md:pb-20 lg:pt-48 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900">
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-white blur-3xl" />
            <div className="absolute -bottom-40 left-10 h-80 w-80 rounded-full bg-teal-300 blur-3xl" />
            <div className="absolute -bottom-40 right-10 h-80 w-80 rounded-full bg-blue-300 blur-3xl" />
          </div>

          <Container>
            <div className="relative text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/90 text-sm mb-6 backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Free • No obligation • 24-hour turnaround
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Local SEO That Brings Calls & Bookings
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4">
                Rank in Google Maps + local search across London and the UK.
              </p>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                We focus on measurable outcomes: more visibility, more enquiries, better conversion.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-lg shadow-black/20">
                  <Link to="/contact">
                    Request a Free SEO Review <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
                  <Link to="/quick-start">Start Project Brief</Link>
                </Button>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                {[
                  { icon: MapPin, title: "Map Pack Focus", desc: "Google Business + local pages" },
                  { icon: ShieldCheck, title: "Clean, Safe SEO", desc: "No spam tactics or fake guarantees" },
                  { icon: PhoneCall, title: "Lead-First", desc: "Optimised for calls & forms" },
                ].map((b, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-white/10 rounded-xl border border-white/15 backdrop-blur"
                  >
                    <b.icon className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">{b.title}</div>
                      <div className="text-white/80 text-sm">{b.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <BreadcrumbNav />

        {/* FREE SEO AUDIT (FORM CTA BLOCK) */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-6xl mx-auto">
                <Card className="border-2">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                      <div>
                        <div className="inline-flex items-center gap-2 text-primary font-semibold mb-3">
                          <Sparkles className="h-4 w-4" />
                          FREE SEO AUDIT
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3">
                          Get Your Free Website Review
                        </h2>

                        <p className="text-muted-foreground text-lg mb-6">
                          Find out exactly where you’re losing visibility and what quick wins can improve your local
                          rankings.
                        </p>

                        <div className="space-y-3">
                          {[
                            "Custom analysis of your website and local competition",
                            "Google Business Profile review and opportunities",
                            "Top 3 actionable improvements you can make today",
                            "Honest assessment of whether SEO is right for you",
                          ].map((x, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-secondary">{x}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 p-4 rounded-xl border bg-primary/5">
                          <div className="flex items-start gap-3">
                            <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="text-secondary font-semibold mb-1">No sales pitch.</div>
                              <p className="text-muted-foreground text-sm">
                                We’ll tell you what’s working, what’s not, and whether SEO makes sense. If we don’t
                                think we can help, we’ll say so.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* This is a placeholder container to host your existing working form.
                          Replace the Link buttons with your actual form component if you want it embedded here.
                          Turnstile styling:
                          - You cannot truly “skin” Turnstile (iframe).
                          - You CAN often set size/theme:
                            data-size="compact" or "normal"
                            data-theme="light" or "dark"
                      */}
                      <div className="rounded-2xl border bg-muted/30 p-5 md:p-6">
                        <div className="text-sm font-semibold text-primary mb-2">SUBMIT YOUR DETAILS</div>
                        <div className="text-lg font-bold text-secondary mb-4">Start here (takes 60 seconds)</div>

                        <div className="space-y-3">
                          <Button asChild className="w-full">
                            <Link to="/contact">
                              Open Free SEO Audit Form <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>

                          <Button asChild variant="outline" className="w-full">
                            <Link to="/quick-start">Or Start Project Brief</Link>
                          </Button>

                          <div className="text-xs text-muted-foreground">
                            Turnstile tip: use <span className="font-mono">compact</span> size where supported to reduce
                            height and keep it clean.
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 text-center">Who This Is For</h2>
                <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
                  Best for service businesses that need consistent enquiries from people searching in your area.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Local businesses wanting to rank in Google Maps (Map Pack)",
                    "Service providers tired of paying for every lead with ads",
                    "Clinics, trades, property, hospitality, and professional services",
                    "Businesses ready to invest in steady, long-term growth",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-5 bg-background rounded-xl border">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-secondary">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-5 rounded-xl border bg-background">
                  <div className="text-secondary font-semibold mb-1">Quick reality check</div>
                  <p className="text-muted-foreground text-sm">
                    SEO is not instant. We focus on the highest-leverage wins first (Google Business Profile + local
                    pages + technical hygiene) and then build momentum with monthly improvements.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* WHAT YOU GET */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <AnimatedSection animation="scale">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">What You Get</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Search,
                      title: "Local Keyword Strategy",
                      desc: "Service + area terms that drive real enquiries",
                    },
                    {
                      icon: Target,
                      title: "Google Business Profile",
                      desc: "Optimisation for Maps visibility and trust signals",
                    },
                    {
                      icon: FileText,
                      title: "On-Page SEO",
                      desc: "Titles, headings, copy, and internal links that convert",
                    },
                    {
                      icon: Globe,
                      title: "Technical SEO (Practical)",
                      desc: "Speed, mobile, indexing, crawl issues that matter",
                    },
                    {
                      icon: TrendingUp,
                      title: "Authority Building (Optional)",
                      desc: "Higher-tier outreach for quality local/industry links",
                    },
                    {
                      icon: BarChart3,
                      title: "Reporting & Next Actions",
                      desc: "Clear updates + what we’ll do next month",
                    },
                  ].map((item, i) => (
                    <Card key={i} className="hover-lift border-2 hover:border-primary/40 transition-all">
                      <CardContent className="p-6">
                        <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-secondary mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">How It Works</h2>

                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    {
                      step: "1",
                      title: "Setup",
                      desc: "Choose Foundation or Launch based on your goals and competition",
                    },
                    { step: "2", title: "Fix + Align", desc: "Optimise key pages for local intent and conversion" },
                    {
                      step: "3",
                      title: "Build Signals",
                      desc: "Local relevance: service pages, content, citations (as needed)",
                    },
                    {
                      step: "4",
                      title: "Track + Improve",
                      desc: "Monthly iteration based on rankings, traffic and leads",
                    },
                  ].map((item, i) => (
                    <Card key={i} className="border-2 bg-background">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
                          {item.step}
                        </div>
                        <h3 className="text-lg font-semibold text-secondary mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 grid md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Setup is required",
                      desc: "We don’t start monthly SEO without a clean baseline and tracking.",
                    },
                    { title: "No spam tactics", desc: "We avoid risky shortcuts that can damage rankings long-term." },
                    { title: "Clear scope", desc: "You’ll know exactly what’s included and what’s optional." },
                  ].map((x, i) => (
                    <div key={i} className="p-5 rounded-xl border bg-background">
                      <div className="font-semibold text-secondary mb-1">{x.title}</div>
                      <p className="text-sm text-muted-foreground">{x.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* PRICING (FIXED: INCLUDES LOCAL VISIBILITY PLAN) */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Pricing</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Transparent pricing for UK service businesses. Monthly SEO requires a one-time setup first.
                  </p>
                </div>

                {/* 5 cards like your screenshot layout (2 setup + 3 monthly) */}
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                  {/* Setup - Foundation */}
                  <Card className="hover-lift border-2 lg:col-span-1">
                    <CardContent className="p-6">
                      <div className="text-sm font-semibold text-primary mb-2">One-time (Required)</div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Local SEO Foundation</h3>
                      <div className="text-2xl font-bold text-secondary mb-3">£300–£600</div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Best for smaller sites that need a clean baseline before ongoing work.
                      </p>
                      <ul className="space-y-2 text-sm">
                        {[
                          "Full SEO + local audit",
                          "Local keyword plan (service + area)",
                          "Google Business Profile optimisation",
                          "On-page fixes (core pages)",
                          "Local schema + indexing checks",
                        ].map((li, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                            <span className="text-secondary">{li}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Setup - Launch */}
                  <Card className="hover-lift border-2 border-primary shadow-lg lg:col-span-1">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-semibold text-primary">One-time (Required)</div>
                        <div className="px-2 py-1 bg-primary/10 rounded text-xs font-semibold text-primary">
                          RECOMMENDED
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Local SEO Launch</h3>
                      <div className="text-2xl font-bold text-secondary mb-3">£750–£950</div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Best for competitive niches that want faster traction and stronger conversion.
                      </p>
                      <ul className="space-y-2 text-sm">
                        {[
                          "Everything in Foundation",
                          "On-page fixes (up to 10 key pages)",
                          "Internal linking structure",
                          "Conversion-focused improvements (CRO)",
                          "Tracking + baseline reporting",
                        ].map((li, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                            <span className="text-secondary">{li}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Monthly - Local Visibility (MISSING BEFORE - NOW ADDED) */}
                  <Card className="hover-lift border-2 lg:col-span-1">
                    <CardContent className="p-6">
                      <div className="text-sm font-semibold text-primary mb-2">Monthly</div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Local Visibility</h3>
                      <div className="text-2xl font-bold text-secondary mb-3">£200–£250/mo</div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Best for maintaining Google Maps presence and site hygiene (not growth SEO).
                      </p>
                      <ul className="space-y-2 text-sm">
                        {[
                          "Google Business Profile updates",
                          "Local listing hygiene",
                          "Title & meta updates (light)",
                          "Basic local keyword tracking",
                          "Monthly check-in",
                        ].map((li, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                            <span className="text-secondary">{li}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 p-3 rounded-lg bg-muted/40 border text-xs text-muted-foreground flex items-start gap-2">
                        <XCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        Not suitable for competitive growth or scaling enquiries.
                      </div>
                    </CardContent>
                  </Card>

                  {/* Monthly - Starter */}
                  <Card className="hover-lift border-2 lg:col-span-1">
                    <CardContent className="p-6">
                      <div className="text-sm font-semibold text-primary mb-2">Monthly</div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Starter SEO</h3>
                      <div className="text-2xl font-bold text-secondary mb-3">£350–£400/mo</div>
                      <p className="text-sm text-muted-foreground mb-4">
                        For steady local SEO improvements and consistent ranking maintenance.
                      </p>
                      <ul className="space-y-2 text-sm">
                        {[
                          "Everything in Local Visibility",
                          "On-page improvements",
                          "Local intent optimisation",
                          "Review strategy guidance",
                          "Monthly performance update",
                        ].map((li, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                            <span className="text-secondary">{li}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Monthly - Growth */}
                  <Card className="hover-lift border-2 lg:col-span-1">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-semibold text-primary">Monthly</div>
                        <div className="px-2 py-1 bg-primary/10 rounded text-xs font-semibold text-primary">
                          POPULAR
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Growth SEO</h3>
                      <div className="text-2xl font-bold text-secondary mb-3">£550–£750/mo</div>
                      <p className="text-sm text-muted-foreground mb-4">
                        For businesses that want measurable growth in enquiries and revenue.
                      </p>
                      <ul className="space-y-2 text-sm">
                        {[
                          "Everything in Starter",
                          "1 service page OR blog content (monthly)",
                          "Internal linking improvements",
                          "Conversion-focused updates (CRO)",
                          "Priority support",
                        ].map((li, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                            <span className="text-secondary">{li}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 max-w-3xl mx-auto text-center">
                  <p className="text-sm text-muted-foreground">
                    Notes: pricing depends on site size, competition, and current SEO condition. We don’t guarantee
                    rankings (nobody credible can), but we do commit to clear deliverables, transparent reporting, and
                    steady improvements.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* FAQ (ADDED BACK) */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 text-primary font-semibold mb-2">
                    <HelpCircle className="h-4 w-4" />
                    FAQ
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3">Common Questions</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">Clear answers, no agency waffle.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      q: "Do I need the one-time setup first?",
                      a: "Yes. Setup creates a clean baseline: audit, tracking, local strategy, indexing checks, and priority fixes. Monthly SEO without setup wastes money.",
                    },
                    {
                      q: "How long until I see results?",
                      a: "Depends on competition and your starting point. Many local businesses see measurable progress within 2–3 months, with results compounding over time.",
                    },
                    {
                      q: "Can you guarantee #1 rankings?",
                      a: "No credible SEO provider can. What we guarantee is clear deliverables, transparent reporting, and steady improvement based on data.",
                    },
                    {
                      q: "Why is SEO harder on existing websites?",
                      a: "Older sites often have technical debt (slow stack, plugin conflicts, messy structure, indexing issues). Fixing that safely takes time and is why agencies charge more.",
                    },
                  ].map((item, i) => (
                    <Card key={i} className="border-2 bg-background">
                      <CardContent className="p-6">
                        <div className="text-secondary font-semibold mb-2">{item.q}</div>
                        <p className="text-muted-foreground">{item.a}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Want More Enquiries From Google?</h2>
              <p className="text-xl text-white/90 mb-8">
                Request a free SEO review and we’ll tell you the biggest wins to improve visibility and conversions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Link to="/contact">
                    Request Free SEO Review <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/quick-start">Start Project Brief</Link>
                </Button>
              </div>

              <p className="mt-6 text-sm text-white/75">
                We’ll respond with a short action plan and whether SEO is worth it for your niche/location.
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
