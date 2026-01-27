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
import SeoAuditForm from "@/components/SeoAuditForm";

const Seo = () => {
  const scrollToAudit = () => {
    document.getElementById("free-audit")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* SEO */}
      <SEO
        title="Local SEO Services London & UK | Get More Calls | L&D Digital"
        description="Local SEO for UK service businesses. Rank in Google Maps and local search, increase enquiries, and turn traffic into calls and bookings."
        keywords="local SEO London, SEO services UK, Google Maps SEO, Google Business Profile optimisation"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/services/seo"
      />

      <ServiceSchema
        name="Local SEO Services"
        description="Local SEO for UK service businesses focused on Google Maps visibility, enquiries, and conversions."
        url="https://digital.luminousanddeliver.co.uk/services/seo"
        priceRange="£300–£950+"
        serviceType="Local Search Engine Optimization"
      />

      <HowToSchema
        name="How L&D Digital improves your local SEO"
        description="A practical 4-step SEO process focused on visibility, enquiries, and conversion."
        totalTime="P30D"
        estimatedCost={{ currency: "GBP", value: "600" }}
        steps={[
          {
            name: "Foundation Setup",
            text: "Audit, keyword mapping, Google Business Profile optimisation, schema, and tracking.",
          },
          {
            name: "On-Page Alignment",
            text: "Optimise service pages for local intent and conversions.",
          },
          {
            name: "Technical Hygiene",
            text: "Fix indexing, speed, and mobile issues that block growth.",
          },
          {
            name: "Monthly Growth",
            text: "Iterative improvements based on rankings, traffic, and leads.",
          },
        ]}
      />

      <Navigation darkHero />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Local SEO That Brings Calls & Bookings
              </h1>
              <p className="text-xl text-white/90 mb-4">
                Get found in Google Maps and local search across London and the UK.
              </p>
              <p className="text-lg text-white/80">No gimmicks. Just clean SEO focused on enquiries and conversions.</p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="bg-white text-primary" onClick={scrollToAudit}>
                  Get a Free SEO Audit <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white">
                  <Link to="/quick-start">Start Project Brief</Link>
                </Button>
              </div>

              <div className="mt-10 grid sm:grid-cols-3 gap-3 text-left">
                {[
                  { icon: MapPin, title: "Maps Focused", desc: "Google Business + local pages" },
                  { icon: ShieldCheck, title: "Safe SEO", desc: "No spam or risky shortcuts" },
                  { icon: PhoneCall, title: "Lead Driven", desc: "Optimised for calls & forms" },
                ].map((b, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-white/10 rounded-lg border border-white/10">
                    <b.icon className="h-5 w-5 text-white mt-1" />
                    <div>
                      <div className="font-semibold text-white">{b.title}</div>
                      <div className="text-sm text-white/80">{b.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <BreadcrumbNav />

        {/* WHO THIS IS FOR */}
        <section className="py-14 bg-background">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Who This Is For</h2>
                <p className="text-muted-foreground mb-8">
                  Best suited for service businesses that need consistent local enquiries.
                </p>

                <div className="grid md:grid-cols-2 gap-4 text-left">
                  {[
                    "Local businesses targeting Google Maps visibility",
                    "Service providers tired of paying per click",
                    "Trades, clinics, property, hospitality, professionals",
                    "Businesses ready for long-term growth",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 p-4 bg-primary/5 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 border rounded-lg text-left">
                  <strong>Reality check:</strong> SEO takes time. We prioritise the fastest wins first, then build
                  momentum month by month.
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* WHAT YOU GET */}
        <section className="py-16 bg-primary/5">
          <Container>
            <AnimatedSection animation="scale">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">What You Get</h2>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: Search, title: "Local Keyword Strategy", desc: "Service + area terms that convert" },
                  { icon: Target, title: "Google Business Profile", desc: "Optimised for Maps visibility" },
                  { icon: FileText, title: "On-Page SEO", desc: "Pages built to rank and convert" },
                  { icon: Globe, title: "Technical SEO", desc: "Speed, mobile, indexing fixes" },
                  { icon: TrendingUp, title: "Authority (Optional)", desc: "Quality local & niche links" },
                  { icon: BarChart3, title: "Reporting", desc: "Clear monthly actions and progress" },
                ].map((item, i) => (
                  <Card key={i} className="hover-lift">
                    <CardContent className="p-6">
                      <item.icon className="h-10 w-10 text-primary mb-4" />
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-16 bg-background">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How It Works</h2>

              <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
                {[
                  { step: "1", title: "Setup", desc: "Foundation or Launch setup" },
                  { step: "2", title: "Align", desc: "Pages + intent + conversion" },
                  { step: "3", title: "Build", desc: "Local relevance & signals" },
                  { step: "4", title: "Improve", desc: "Monthly iteration" },
                ].map((s) => (
                  <div key={s.step}>
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                      {s.step}
                    </div>
                    <h3 className="font-semibold mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* FREE AUDIT */}
        <section id="free-audit" className="py-20 bg-gradient-to-br from-teal-700 via-slate-900 to-slate-950">
          <Container>
            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10">
              <div className="text-white">
                <span className="inline-block mb-4 px-3 py-1 text-xs rounded-full bg-white/10">
                  Free • No obligation • Typically within 24 hours
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Free SEO Audit</h2>
                <p className="text-white/80 mb-6">
                  See what’s blocking your visibility and what will move the needle fastest.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Website + local competitor snapshot",
                    "Google Business Profile review",
                    "Top 3 actionable improvements",
                    "Honest verdict: is SEO worth it?",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-white mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-white/70">
                  No sales pressure. If SEO isn’t right for your business, we’ll say so.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <SeoAuditForm />
              </div>
            </div>
          </Container>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 bg-background text-center">
          <Container>
            <h2 className="text-3xl font-bold mb-4">Want More Enquiries From Google?</h2>
            <Button size="lg" onClick={scrollToAudit}>
              Get a Free SEO Audit
            </Button>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Seo;
