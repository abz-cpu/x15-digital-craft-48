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
  Code,
  Wrench,
  AlertTriangle,
  Zap,
  HelpCircle,
  Sparkles,
  Clock,
} from "lucide-react";
import { SeoAuditForm } from "@/components/SeoAuditForm";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container } from "@/components/Container";
import { ServiceSchema } from "@/components/ServiceSchema";
import { HowToSchema } from "@/components/HowToSchema";

const Seo = () => {
  const faqs = [
    {
      q: "How long until I see results from local SEO?",
      a: "Most local businesses see ranking improvements within 30–60 days, with clearer traffic and enquiry movement by 60–90 days. Faster wins often come from Google Business Profile improvements, but competitive areas can take longer.",
    },
    {
      q: "Do I need the one-time setup, or can I just do monthly?",
      a: "Setup is required. It creates the baseline (audit, tracking, structure, GBP, technical checks). Without it, monthly work is guesswork and usually doesn't deliver meaningful results.",
    },
    {
      q: "What's included in Google Business Profile optimisation?",
      a: "Profile setup/cleanup, categories, services, descriptions, photos guidance, posting templates, Q&A, review strategy, and local signals that improve Maps visibility. This is often the fastest local win.",
    },
    {
      q: "Do you guarantee rankings?",
      a: "No. Anyone guaranteeing exact rankings is either lying or using risky tactics. We guarantee clear deliverables, transparent reporting, and a proven process focused on enquiries (not vanity metrics).",
    },
    {
      q: "Can I cancel the monthly retainer anytime?",
      a: "Yes. Month-to-month. You can cancel with 30 days' notice. No long-term contracts.",
    },
    {
      q: "What's the difference between local SEO and regular SEO?",
      a: "Local SEO targets Google Maps + 'near me' / location searches. Regular SEO often targets broader national keywords. For service businesses, local SEO usually produces faster, higher-intent leads.",
    },
    {
      q: "I already have a website. Do I need a new one?",
      a: "Usually not. We can work with your existing site if it's technically sound. If the site is severely outdated, slow, or locked behind a bloated builder/hosting setup, it may be cheaper long-term to rebuild SEO-ready.",
    },
    {
      q: "What industries do you work with?",
      a: "Local service businesses: trades, clinics, property, hospitality, professional services, and more. If people search for your service in your area, we can help you rank and convert.",
    },
    {
      q: "What if my website is on WordPress (Elementor/Divi/WPBakery)?",
      a: "We can still do SEO, but it can take longer if the theme/plugins cause speed, layout, or indexing issues. In those cases we prioritise the highest-leverage fixes first, and we'll be upfront if a rebuild is the smarter move.",
    },
    {
      q: "Do you also fix UX/UI and conversion rate?",
      a: "Yes. We include conversion-focused improvements (CRO) where it impacts enquiries: clearer CTAs, better page structure, trust signals, and mobile-first usability. SEO traffic is useless if the site doesn't convert.",
    },
    {
      q: "Do I need to provide access to my Google account and website?",
      a: "For best results, yes (Google Business Profile, Search Console, Analytics, and your website CMS). If access is limited, we can still advise and provide a checklist, but implementation is slower.",
    },
    {
      q: "What does 'Authority Building' mean and do I need it?",
      a: "Authority building is earning quality links and local mentions that improve trust and rankings. You don't always need it early on — we prioritise GBP + on-page + technical first, then add authority work if competition demands it.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Local SEO Services London & UK | Get Found on Google | L&D Digital"
        description="Local SEO for UK service businesses. Rank in Google Maps + local search, increase enquiries, and convert more website visitors into calls and bookings."
        keywords="local SEO London, SEO services UK, Google Maps ranking, Google Business Profile optimisation, small business SEO, SEO agency London, local service SEO"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/services/seo"
      />

      <ServiceSchema
        name="Local SEO Services"
        description="Local SEO for UK service businesses. We help you rank in Google Maps and local search, improve on-page SEO, and increase enquiries."
        url="https://digital.luminousanddeliver.co.uk/services/seo"
        priceRange="£150-£600+"
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
            text: "We start with a one-time setup to build a clean baseline: audit, local keyword plan, Google Business Profile optimisation, schema, tracking, and indexing checks.",
          },
          {
            name: "On-Page Improvements",
            text: "We optimise your key pages (titles, headings, internal links, and content) to match local intent and drive enquiries.",
          },
          {
            name: "Technical Health",
            text: "We fix crawl/index issues and improve speed/mobile usability where it impacts rankings and conversions.",
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
          <Container>
            <div className="relative text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/90 text-sm mb-6">
                <Zap className="h-4 w-4" />
                Lead-first Local SEO for UK service businesses
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Local SEO That Brings Calls & Bookings
              </h1>

              <p className="text-xl text-white/90 mb-4">Rank in Google Maps + local search across London and the UK.</p>

              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                We focus on measurable outcomes: more visibility, more enquiries, better conversion.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Link to="/contact">
                    Request a Free SEO Review <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/quick-start">Start Project Brief</Link>
                </Button>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                {[
                  { icon: MapPin, title: "Map Pack Focus", desc: "Google Business + local pages built for visibility" },
                  { icon: ShieldCheck, title: "Clean, Safe SEO", desc: "No spam tactics or fake guarantees" },
                  { icon: PhoneCall, title: "Lead-First", desc: "Optimised for calls, forms, and bookings" },
                ].map((b, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-5 bg-white/10 rounded-xl border border-white/15 backdrop-blur-sm"
                  >
                    <b.icon className="h-6 w-6 text-white mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">{b.title}</div>
                      <div className="text-white/80 text-sm leading-relaxed">{b.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <BreadcrumbNav />

        {/* WHO THIS IS FOR */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Who This Is For</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Best for service businesses that need consistent enquiries from people searching in your area.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Local businesses wanting to rank in Google Maps (Map Pack)",
                    "Service providers tired of paying for every lead with ads",
                    "Clinics, trades, property, hospitality, and professional services",
                    "Businesses ready to invest in steady, long-term growth",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-5 rounded-xl border bg-primary/5">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-secondary leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 rounded-xl border bg-background">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-secondary font-semibold mb-2">Quick reality check</div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        SEO is not instant. We focus on the highest-leverage wins first (Google Business Profile + local
                        pages + technical hygiene), then build momentum with monthly improvements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* NEW: SEO + UX/UI (CONVERSION) */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                    <Code className="h-4 w-4" />
                    SEO + UX/UI + Conversion
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                    Traffic Is Useless If The Website Doesn't Convert
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    We don't just chase rankings. We improve page structure, trust signals, and conversion flow so your
                    SEO turns into calls and bookings.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Target,
                      title: "Better CTAs + Structure",
                      desc: "Clear next steps, cleaner layouts, and pages built around user intent.",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Trust Signals That Sell",
                      desc: "Reviews, proof, service areas, FAQs, and credibility blocks that reduce hesitation.",
                    },
                    {
                      icon: BarChart3,
                      title: "CRO Improvements",
                      desc: "Make forms easier, improve mobile UX, and remove friction that kills enquiries.",
                    },
                  ].map((x, i) => (
                    <Card key={i} className="hover-lift border-2 bg-background">
                      <CardContent className="p-6">
                        <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                          <x.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-secondary mb-2">{x.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{x.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-10 p-6 rounded-xl border bg-background">
                  <div className="flex items-start gap-4">
                    <Wrench className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-secondary font-semibold mb-2">Important note about existing websites</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        SEO can be harder on old sites (WordPress builders, plugin conflicts, slow hosting, messy
                        structure). We'll prioritise the highest-impact fixes first, and we'll tell you directly if a
                        rebuild is the smarter and cheaper long-term move.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* WHAT YOU GET */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <AnimatedSection animation="scale">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">What You Get</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Practical, results-focused SEO that increases visibility and converts visitors into customers.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Search,
                      title: "Local Keyword Strategy",
                      desc: "Service + area terms that drive real enquiries (not vanity traffic).",
                    },
                    {
                      icon: Target,
                      title: "Google Business Profile",
                      desc: "Optimisation for Maps visibility, reviews, and trust signals.",
                    },
                    {
                      icon: FileText,
                      title: "On-Page SEO",
                      desc: "Titles, headings, copy, and internal links optimised for conversion.",
                    },
                    {
                      icon: Globe,
                      title: "Technical SEO (Practical)",
                      desc: "Speed, mobile, indexing, and crawl issues that matter.",
                    },
                    {
                      icon: TrendingUp,
                      title: "Authority Building (Optional)",
                      desc: "Higher-tier outreach for quality local/industry links when needed.",
                    },
                    {
                      icon: BarChart3,
                      title: "Reporting & Next Actions",
                      desc: "Clear updates + priorities for the next month.",
                    },
                  ].map((item, i) => (
                    <Card key={i} className="hover-lift border-2 bg-background">
                      <CardContent className="p-6">
                        <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-secondary mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">How It Works</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    A systematic local SEO process that builds momentum over time.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                  {[
                    {
                      step: "1",
                      title: "Setup",
                      desc: "Choose Foundation or Launch based on your niche and competition.",
                    },
                    { step: "2", title: "Fix + Align", desc: "Optimise key pages for local intent and conversion." },
                    {
                      step: "3",
                      title: "Build Signals",
                      desc: "Add service pages, content, and local signals as needed.",
                    },
                    {
                      step: "4",
                      title: "Track + Improve",
                      desc: "Monthly iteration based on rankings, traffic and leads.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-semibold text-secondary mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Setup is required",
                      desc: "We don't start monthly SEO without a clean baseline and tracking.",
                    },
                    { title: "No spam tactics", desc: "We avoid risky shortcuts that can damage rankings long-term." },
                    {
                      title: "Clear scope",
                      desc: "You'll know what's included, what's optional, and what changes monthly.",
                    },
                  ].map((x, i) => (
                    <Card key={i} className="border-2 bg-background">
                      <CardContent className="p-6">
                        <div className="font-semibold text-secondary mb-2">{x.title}</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{x.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* PRICING - IMPROVED LAYOUT */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Pricing</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Transparent pricing for UK service businesses. Monthly SEO requires a one-time setup first.
                  </p>
                </div>

                {/* ONE-TIME SETUP SECTION */}
                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-px flex-1 bg-border" />
                    <span className="text-sm font-semibold text-primary uppercase tracking-wide">One-Time Setup (Required)</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>

                  <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                    {/* Foundation */}
                    <Card className="hover-lift border-2 bg-background">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-secondary mb-2">Local SEO Foundation</h3>
                        <div className="text-4xl font-bold text-secondary mb-2">£200–£350</div>
                        <div className="text-sm text-muted-foreground mb-6">One-time payment</div>

                        <p className="text-muted-foreground mb-8 leading-relaxed">
                          Full SEO + local audit, local keyword plan, GBP optimisation, on-page fixes (core pages), local schema + indexing checks.
                        </p>

                        <ul className="space-y-4">
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

                    {/* Launch - Recommended */}
                    <Card className="hover-lift border-2 border-primary bg-background relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                        RECOMMENDED
                      </div>
                      <CardContent className="p-8 pt-14">
                        <h3 className="text-2xl font-bold text-secondary mb-2">Local SEO Launch</h3>
                        <div className="text-4xl font-bold text-secondary mb-2">£400–£600</div>
                        <div className="text-sm text-muted-foreground mb-6">One-time payment</div>

                        <p className="text-muted-foreground mb-8 leading-relaxed">
                          Everything in Foundation, plus on-page fixes up to 10 key pages, internal linking structure, CRO improvements, tracking + baseline reporting.
                        </p>

                        <ul className="space-y-4">
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

                {/* MONTHLY RETAINERS SECTION */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-px flex-1 bg-border" />
                    <span className="text-sm font-semibold text-primary uppercase tracking-wide">Monthly Retainers</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>

                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Local Visibility */}
                    <Card className="hover-lift border-2 bg-background">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-bold text-secondary mb-2">Local Visibility</h3>
                        <div className="text-3xl font-bold text-secondary mb-2">£150–£200<span className="text-lg font-normal text-muted-foreground">/mo</span></div>

                        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                          Best for maintaining Google Maps presence and site hygiene (not growth SEO).
                        </p>

                        <ul className="space-y-3 text-sm">
                          {[
                            "Google Business Profile updates",
                            "Local listing hygiene",
                            "Title & meta updates (light)",
                            "Basic local keyword tracking",
                            "Monthly check-in",
                          ].map((li, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-secondary">{li}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 p-3 rounded-lg border bg-muted/30 text-xs text-muted-foreground leading-relaxed">
                          Ideal for maintaining and protecting your current local presence.
                        </div>
                      </CardContent>
                    </Card>

                    {/* Starter */}
                    <Card className="hover-lift border-2 bg-background">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-bold text-secondary mb-2">Starter SEO</h3>
                        <div className="text-3xl font-bold text-secondary mb-2">£250–£350<span className="text-lg font-normal text-muted-foreground">/mo</span></div>

                        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                          For steady local SEO improvements and consistent ranking maintenance.
                        </p>

                        <ul className="space-y-3 text-sm">
                          {[
                            "Everything in Local Visibility",
                            "On-page improvements",
                            "Local intent optimisation",
                            "Review strategy guidance",
                            "Monthly performance update",
                          ].map((li, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-secondary">{li}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Growth - Popular */}
                    <Card className="hover-lift border-2 border-primary bg-background relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                        MOST POPULAR
                      </div>
                      <CardContent className="p-8 pt-14">
                        <h3 className="text-xl font-bold text-secondary mb-2">Growth SEO</h3>
                        <div className="text-3xl font-bold text-secondary mb-2">£400–£500<span className="text-lg font-normal text-muted-foreground">/mo</span></div>

                        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                          For businesses that want measurable growth in enquiries and revenue.
                        </p>

                        <ul className="space-y-3 text-sm">
                          {[
                            "Everything in Starter",
                            "1 service page OR blog content (monthly)",
                            "Internal linking improvements",
                            "Conversion-focused updates (CRO)",
                            "Priority support",
                          ].map((li, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-secondary">{li}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="mt-12 max-w-3xl mx-auto text-center">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Notes: pricing depends on site size, competition, and current SEO condition. We don't guarantee
                    rankings (nobody credible can), but we do commit to clear deliverables, transparent reporting, and
                    steady improvements.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* FREE SEO AUDIT SECTION */}
        <section id="free-audit" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 border-y border-border">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-6xl mx-auto">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
                  {/* Left Column - Benefits */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="h-5 w-5 text-primary" />
                      <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                        Free SEO Audit
                      </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                      Get Your Free Website Review
                    </h2>
                    
                    <p className="text-lg text-muted-foreground mb-8">
                      We'll analyse your site and send a custom SEO action plan within 24 hours.
                    </p>
                    
                    {/* Benefit checklist */}
                    <ul className="space-y-4 mb-8">
                      {[
                        "Custom analysis of your website + local competition",
                        "Google Business Profile review and opportunities",
                        "Top 3 actionable improvements you can make today",
                        "Honest assessment of whether SEO is worth it for your niche",
                      ].map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-secondary">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* No sales pitch trust box */}
                    <div className="p-5 rounded-xl bg-background border-2 border-border">
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-secondary mb-1">No sales pitch.</div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            We'll tell you what's working, what's not, and whether SEO makes sense. If we don't think we can help, we'll say so.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column - Form */}
                  <div>
                    <SeoAuditForm variant="embedded" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* FAQ (FULL, INCLUDES "MISSING" QUESTIONS) */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                    <HelpCircle className="h-4 w-4" />
                    FAQ
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Frequently Asked Questions</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Clear answers to the questions people ask before hiring a local SEO partner.
                  </p>
                </div>

                <div className="space-y-4">
                  {faqs.map((item, i) => (
                    <Card key={i} className="border-2 bg-background">
                      <CardContent className="p-6 md:p-7">
                        <div className="font-semibold text-secondary mb-2 leading-snug">{item.q}</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-10 p-6 rounded-xl border bg-background">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-secondary font-semibold mb-2">No pressure, no nonsense</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        If SEO isn't worth it for your niche/location, we'll tell you. If it is worth it, we'll give you
                        a short action plan and clear scope.
                      </p>
                    </div>
                  </div>
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
                Request a free SEO review and we'll tell you the biggest wins to improve visibility and conversions.
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
                We'll respond with a short action plan and whether SEO is worth it for your niche/location.
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
