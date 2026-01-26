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
        priceRange="£350-£950+"
        serviceType="Local Search Engine Optimization"
      />

      <HowToSchema
        name="How L&D Digital improves your local SEO"
        description="Our 4-step local SEO process to increase Google visibility, enquiries, and conversions."
        totalTime="P30D"
        estimatedCost={{ currency: "GBP", value: "750" }}
        steps={[
          {
            name: "Local SEO Launch (Setup)",
            text: "Audit + local keyword plan + Google Business Profile optimisation + schema + indexing checks.",
          },
          {
            name: "On-Page Improvements",
            text: "Optimise key pages (titles, headings, internal links) to match local intent and drive enquiries.",
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
        <section className="relative overflow-hidden pt-40 pb-16 md:pt-44 md:pb-20 lg:pt-48 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900">
          <Container>
            <div className="relative text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Local SEO That Brings Calls & Bookings
              </h1>
              <p className="text-xl text-white/90 mb-4">Rank in Google Maps + local search across London and the UK.</p>
              <p className="text-lg text-white/80">
                We focus on measurable outcomes: more visibility, more enquiries, better conversion.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Link to="/contact">
                    Request a Free SEO Review <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/quick-start">Start Project Brief</Link>
                </Button>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                {[
                  { icon: MapPin, title: "Map Pack Focus", desc: "Google Business + local pages" },
                  { icon: ShieldCheck, title: "Clean, Safe SEO", desc: "No spam tactics or “guarantees”" },
                  { icon: PhoneCall, title: "Lead-First", desc: "Optimised for calls & forms" },
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white/10 rounded-lg border border-white/10">
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

        {/* Breadcrumb below hero */}
        <BreadcrumbNav />

        {/* Who This Is For */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
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
                    <div key={i} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-secondary">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 md:p-5 rounded-lg border bg-background">
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

        {/* What You Get */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <Container>
            <AnimatedSection animation="scale">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">What You Get</h2>
                <div className="grid md:grid-cols-2 gap-6">
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
                    <Card key={i} className="hover-lift">
                      <CardContent className="p-6">
                        <item.icon className="h-10 w-10 text-primary mb-4" />
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

        {/* How It Works */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">How It Works</h2>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { step: "1", title: "Launch Setup", desc: "Audit + local plan + GBP + schema + indexing checks" },
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
                    <div key={i} className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-semibold text-secondary mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
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
                    <div key={i} className="p-4 rounded-lg border bg-primary/5">
                      <div className="font-semibold text-secondary mb-1">{x.title}</div>
                      <p className="text-sm text-muted-foreground">{x.desc}</p>
                    </div>
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
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Pricing</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Transparent pricing for UK service businesses. Most clients start with the Local SEO Launch and then
                    move onto a monthly plan.
                  </p>
                </div>

                <div className="grid lg:grid-cols-4 gap-6">
                  {/* Setup */}
                  <Card className="hover-lift lg:col-span-1">
                    <CardContent className="p-6">
                      <div className="text-sm font-semibold text-primary mb-2">One-time (Required)</div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Local SEO Launch</h3>
                      <div className="text-2xl font-bold text-secondary mb-3">£750–£950</div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Best for: businesses that want a proper baseline before ongoing SEO.
                      </p>
                      <ul className="space-y-2 text-sm">
                        {[
                          "Full SEO + local audit",
                          "Local keyword plan",
                          "Google Business Profile optimisation",
                          "On-page fixes (up to 10 key pages)",
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

                  {/* Starter */}
                  <Card className="hover-lift lg:col-span-1">
                    <CardContent className="p-6">
                      <div className="text-sm font-semibold text-primary mb-2">Monthly</div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Starter</h3>
                      <div className="text-2xl font-bold text-secondary mb-3">£350–£400/mo</div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Best for: stable visibility + consistent local maintenance.
                      </p>
                      <ul className="space-y-2 text-sm">
                        {[
                          "GBP ongoing management",
                          "Local keyword tracking",
                          "Small on-page improvements",
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

                  {/* Growth */}
                  <Card className="hover-lift lg:col-span-1 border-primary/30">
                    <CardContent className="p-6">
                      <div className="text-sm font-semibold text-primary mb-2">Monthly</div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Growth</h3>
                      <div className="text-2xl font-bold text-secondary mb-3">£550–£750/mo</div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Best for: businesses that want measurable growth in enquiries.
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

                  {/* Custom */}
                  <Card className="hover-lift lg:col-span-1">
                    <CardContent className="p-6">
                      <div className="text-sm font-semibold text-primary mb-2">Custom</div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Campaigns</h3>
                      <div className="text-2xl font-bold text-secondary mb-3">From £1,200/mo</div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Best for: competitive niches and multi-location growth.
                      </p>
                      <ul className="space-y-2 text-sm">
                        {[
                          "Advanced technical monitoring",
                          "Competitor analysis + gap plan",
                          "Optional outreach for authority links",
                          "Landing pages for multiple areas",
                          "Custom reporting & tracking",
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

        {/* CTA Section */}
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
