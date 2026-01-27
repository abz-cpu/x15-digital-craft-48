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
        description="Local SEO for UK service businesses. Rank in Google Maps and local search, increase enquiries, and convert website visitors into calls and bookings."
        keywords="local SEO London, SEO services UK, Google Maps ranking, Google Business Profile optimisation"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/services/seo"
      />

      <ServiceSchema
        name="Local SEO Services"
        description="Local SEO for UK service businesses. Improve Google Maps visibility, local rankings, and enquiries."
        url="https://digital.luminousanddeliver.co.uk/services/seo"
        priceRange="£300-£950+"
        serviceType="Local Search Engine Optimization"
      />

      <HowToSchema
        name="How L&D Digital improves your local SEO"
        description="A structured local SEO process to increase visibility, enquiries, and conversions."
        totalTime="P30D"
        estimatedCost={{ currency: "GBP", value: "600" }}
        steps={[
          {
            name: "Setup",
            text: "One-time setup including audit, local keyword planning, Google Business Profile optimisation, schema, and indexing checks.",
          },
          {
            name: "On-Page Optimisation",
            text: "Optimise key pages to match local intent and convert traffic into enquiries.",
          },
          {
            name: "Technical Health",
            text: "Fix crawl, index, speed, and mobile issues that affect rankings and usability.",
          },
          {
            name: "Ongoing Growth",
            text: "Monthly iteration through content, local signals, tracking, and conversion improvements.",
          },
        ]}
      />

      <Navigation darkHero />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden pt-40 pb-24 px-4 bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Local SEO That Brings Calls & Bookings
              </h1>
              <p className="text-xl text-white/90 mb-4">
                Rank in Google Maps and local search across London and the UK.
              </p>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                We focus on outcomes: visibility, enquiries, and conversion.
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

              <div className="mt-12 grid md:grid-cols-3 gap-4">
                {[
                  {
                    icon: MapPin,
                    title: "Map Pack Focus",
                    desc: "Google Business Profile and local pages optimised for visibility",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Clean, Safe SEO",
                    desc: "No spam tactics or fake guarantees that harm rankings",
                  },
                  {
                    icon: PhoneCall,
                    title: "Lead-First",
                    desc: "Pages designed to convert visitors into calls and bookings",
                  },
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-3 p-5 bg-white/10 rounded-lg border border-white/20">
                    <b.icon className="h-6 w-6 text-white mt-0.5" />
                    <div className="text-left">
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

        {/* EXISTING SITE VS NEW BUILD */}
        <section className="py-20 px-4 bg-primary/5">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                    SEO Is Easier When We Build Your Site
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Existing websites often carry technical debt and structural issues. Building SEO-ready from day one
                    is usually faster and more cost-effective than fixing problems long-term.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-secondary mb-4 flex items-center gap-2">
                        <XCircle className="text-red-500" /> Existing Websites
                      </h3>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        <li>• Broken structure and inconsistent headings</li>
                        <li>• Slow speed and plugin conflicts</li>
                        <li>• Poor internal linking and conversion flow</li>
                        <li>• Higher risk when making changes</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-primary">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-secondary mb-4 flex items-center gap-2">
                        <CheckCircle2 className="text-primary" /> SEO-Ready Builds
                      </h3>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        <li>• Clean structure and fast performance</li>
                        <li>• Correct service + location pages</li>
                        <li>• Built-in schema and SEO foundations</li>
                        <li>• Lower setup cost and faster results</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Want More Enquiries From Google?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Request a free SEO review and we’ll highlight the biggest opportunities for growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Link to="/contact">
                    Request Free SEO Review <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/quick-start">Start Project Brief</Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Seo;
