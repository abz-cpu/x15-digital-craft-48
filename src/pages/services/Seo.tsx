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
  Zap,
  Clock,
  BadgeCheck,
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
        title="Local SEO Services London & UK | Google Maps Rankings | L&D Digital"
        description="Local SEO for UK service businesses. Rank higher in Google Maps and local search, increase enquiries, and convert more visitors into calls and bookings."
        keywords="local SEO London, Google Maps SEO, Google Business Profile optimisation, local search rankings, UK SEO services, small business SEO"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/services/seo"
      />

      <ServiceSchema
        name="Local SEO Services"
        description="Local SEO for UK service businesses to improve Google Maps visibility, local rankings, and enquiries."
        url="https://digital.luminousanddeliver.co.uk/services/seo"
        priceRange="£200-£950+"
        serviceType="Local Search Engine Optimization"
      />

      <HowToSchema
        name="How L&D Digital improves your local SEO"
        description="A structured local SEO process to increase Google visibility, enquiries, and conversions."
        totalTime="P30D"
        estimatedCost={{ currency: "GBP", value: "600" }}
        steps={[
          {
            name: "Setup (Foundation or Launch)",
            text: "One-time setup: audit, local keyword plan, Google Business Profile optimisation, schema, and indexing checks.",
          },
          {
            name: "On-Page Improvements",
            text: "Optimise key pages to match local intent and convert visitors into enquiries.",
          },
          {
            name: "Technical Health",
            text: "Fix crawl/index issues and improve speed/mobile usability where it impacts rankings and conversions.",
          },
          {
            name: "Ongoing Growth",
            text: "Monthly iteration through content, local signals, tracking, and conversion improvements.",
          },
        ]}
      />

      <Navigation darkHero />

      {/* Sticky CTA (desktop) */}
      <div className="hidden md:block sticky top-0 z-40 bg-background/80 backdrop-blur border-b">
        <Container>
          <div className="py-3 flex items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-secondary">Free SEO Review</span> — action plan in 24 hours.
            </div>
            <div className="flex items-center gap-3">
              <Button asChild size="sm">
                <Link to="/contact">
                  Request Free Review <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline">
                <Link to="/quick-start">Start Brief</Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-40 pb-20 md:pt-44 md:pb-24 lg:pt-48 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900">
          <Container>
            <div className="relative text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/90 text-sm mb-6">
                <BadgeCheck className="h-4 w-4" />
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

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Link to="/contact">
                    Request Free SEO Review <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/quick-start">Start Project Brief</Link>
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                {[
                  { icon: MapPin, title: "Map Pack Focus", desc: "Google Business Profile + local pages" },
                  { icon: ShieldCheck, title: "Clean, Safe SEO", desc: "No spam tactics or fake guarantees" },
                  { icon: PhoneCall, title: "Lead-First", desc: "Pages optimised for calls & enquiries" },
                ].map((b, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-5 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm"
                  >
                    <b.icon className="h-6 w-6 text-white mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold text-lg mb-1">{b.title}</div>
                      <div className="text-white/80 text-sm">{b.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <BreadcrumbNav />

        {/* 24-hour deliverable (conversion booster) */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-5xl mx-auto">
                <Card className="border-2">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                      <div>
                        <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                          <Clock className="h-4 w-4" />
                          What you get within 24 hours
                        </div>
                        <div className="text-2xl font-bold text-secondary mb-2">
                          A clear, personalised SEO action plan (not generic advice)
                        </div>
                        <p className="text-muted-foreground">
                          We’ll tell you what’s working, what’s blocking growth, and the top fixes that move the needle
                          first.
                        </p>
                      </div>
                      <div className="w-full md:w-auto">
                        <Button asChild size="lg" className="w-full md:w-auto">
                          <Link to="/contact">
                            Get Free Review <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <div className="mt-2 text-xs text-muted-foreground text-center md:text-left">
                          No sales pressure. If SEO isn’t worth it, we’ll say so.
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 grid md:grid-cols-4 gap-3">
                      {[
                        "Quick technical checks",
                        "Google Business Profile review",
                        "Local keyword opportunities",
                        "Top 3 priority fixes",
                      ].map((x, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-lg bg-primary/5 border text-sm text-secondary flex items-center gap-2"
                        >
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          {x}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Who This Is For */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">Who This Is For</h2>
                <p className="text-lg text-muted-foreground mb-10 text-center max-w-2xl mx-auto">
                  Best for service businesses that need consistent enquiries from people searching in your area.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Local businesses wanting to rank in Google Maps (Map Pack)",
                    "Service providers tired of paying for every lead with ads",
                    "Clinics, trades, property, hospitality, and professional services",
                    "Businesses ready to invest in steady, long-term growth",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-5 bg-background rounded-lg border">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-secondary">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-5 rounded-lg border bg-background">
                  <div className="text-secondary font-semibold mb-1">Reality check</div>
                  <p className="text-muted-foreground text-sm">
                    SEO isn’t instant. We prioritise the highest-leverage wins first (Google Business Profile + local
                    pages + technical hygiene), then build momentum with monthly improvements.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* What You Get */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <AnimatedSection animation="scale">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-10 text-center">What You Get</h2>

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
                      desc: "Speed, mobile, indexing, and crawl issues that matter",
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
                    <Card key={i} className="hover-lift border-2 hover:border-primary/50 transition-all">
                      <CardContent className="p-6">
                        <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
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

        {/* Pricing */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Pricing</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Monthly SEO requires a one-time setup first. Setup cost depends on whether we’re fixing an existing
                    site or building clean from scratch.
                  </p>
                </div>

                {/* Setup */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <Card className="hover-lift border-2">
                    <CardContent className="p-7">
                      <div className="text-sm font-semibold text-primary mb-2">One-time (Required)</div>
                      <h3 className="text-2xl font-bold text-secondary mb-2">Local SEO Foundation</h3>
                      <div className="text-3xl font-bold text-secondary mb-4">£300–£600</div>
                      <p className="text-sm text-muted-foreground mb-6">
                        Best for: smaller sites that need a clean baseline before ongoing SEO.
                      </p>
                      <ul className="space-y-3 text-sm">
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

                  <Card className="hover-lift border-2 border-primary shadow-lg">
                    <CardContent className="p-7">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-sm font-semibold text-primary">One-time (Required)</div>
                        <div className="px-2 py-1 rounded bg-primary/10 text-xs font-semibold text-primary">
                          RECOMMENDED
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-secondary mb-2">Local SEO Launch</h3>
                      <div className="text-3xl font-bold text-secondary mb-4">£750–£950</div>
                      <p className="text-sm text-muted-foreground mb-6">
                        Best for: competitive niches that want stronger conversion and faster traction.
                      </p>
                      <ul className="space-y-3 text-sm">
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
                </div>

                {/* Monthly */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="hover-lift border-2">
                    <CardContent className="p-7">
                      <div className="text-sm font-semibold text-primary mb-2">Monthly</div>
                      <h3 className="text-2xl font-bold text-secondary mb-2">Local Visibility</h3>
                      <div className="text-3xl font-bold text-secondary mb-4">£200–£250/mo</div>
                      <p className="text-sm text-muted-foreground mb-6">
                        Best for: maintaining Maps presence + site hygiene (not growth SEO).
                      </p>
                      <ul className="space-y-3 text-sm">
                        {[
                          "Google Business Profile updates",
                          "Local listing hygiene",
                          "Light title/meta updates",
                          "Basic local keyword tracking",
                          "Monthly check-in",
                        ].map((li, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                            <span className="text-secondary">{li}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover-lift border-2">
                    <CardContent className="p-7">
                      <div className="text-sm font-semibold text-primary mb-2">Monthly</div>
                      <h3 className="text-2xl font-bold text-secondary mb-2">Starter SEO</h3>
                      <div className="text-3xl font-bold text-secondary mb-4">£350–£400/mo</div>
                      <p className="text-sm text-muted-foreground mb-6">
                        Best for: steady local improvements and ranking stability.
                      </p>
                      <ul className="space-y-3 text-sm">
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

                  <Card className="hover-lift border-2 border-primary shadow-lg">
                    <CardContent className="p-7">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-sm font-semibold text-primary">Monthly</div>
                        <div className="px-2 py-1 rounded bg-primary/10 text-xs font-semibold text-primary">
                          POPULAR
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-secondary mb-2">Growth SEO</h3>
                      <div className="text-3xl font-bold text-secondary mb-4">£550–£750/mo</div>
                      <p className="text-sm text-muted-foreground mb-6">
                        Best for: measurable growth in enquiries and revenue.
                      </p>
                      <ul className="space-y-3 text-sm">
                        {[
                          "Everything in Starter",
                          "1 service page OR blog content (monthly)",
                          "Internal linking improvements",
                          "Conversion optimisation (CRO)",
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
                    rankings (nobody credible can), but we commit to clear deliverables, honest scope, and steady
                    improvements.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-10 text-center">FAQ</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      q: "Do I need the one-time setup?",
                      a: "Yes. Setup builds the baseline: audit, tracking, local plan, and fixes. Monthly work without a clean baseline wastes money.",
                    },
                    {
                      q: "Can you guarantee #1 rankings?",
                      a: "No credible agency can. What we guarantee is clear deliverables, tracking, and consistent improvements based on data.",
                    },
                    {
                      q: "Why does SEO cost more for existing websites?",
                      a: "Older sites often have technical debt: speed issues, plugin conflicts, poor structure, and broken indexing. Fixing that takes time and carries risk.",
                    },
                    {
                      q: "How long until I see results?",
                      a: "Most local businesses see progress within 2–3 months depending on competition, site condition, and location coverage.",
                    },
                  ].map((item, i) => (
                    <Card key={i} className="border-2">
                      <CardContent className="p-6">
                        <div className="font-semibold text-secondary mb-2">{item.q}</div>
                        <p className="text-muted-foreground">{item.a}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-10 flex justify-center">
                  <Button asChild size="lg">
                    <Link to="/contact">
                      Request Free SEO Review <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
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
                Request a free SEO review and we’ll highlight the biggest wins to improve visibility and conversion.
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
