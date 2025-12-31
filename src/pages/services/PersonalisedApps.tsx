import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Cog, Calculator, FileText, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container } from "@/components/Container";
import { ServiceSchema } from "@/components/ServiceSchema";

const PersonalisedApps = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Custom Business Apps UK | Bespoke Tools & Calculators | L&D Digital"
        description="Custom mini-apps and tools tailored to how you work. Streamline your business processes with bespoke calculators, dashboards, and automation tools."
        keywords="custom business apps UK, bespoke software development, business automation tools, custom calculators, internal tools development"
        canonicalUrl="https://luminousanddeliver.co.uk/services/personalised-apps"
      />
      <ServiceSchema
        name="Personalised Apps & Tools"
        description="Custom mini-apps and tools tailored to how you work. Bespoke calculators, dashboards, and automation tools."
        url="https://luminousanddeliver.co.uk/services/personalised-apps"
        priceRange="£500-£2000"
        serviceType="Custom Software Development"
      />
      <Navigation darkHero />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-40 pb-16 md:pt-44 md:pb-20 lg:pt-48 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900">
          <Container>
            <div className="relative text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Personalised Apps
              </h1>
              <p className="text-xl text-white/90 mb-4">
                Custom mini-apps and tools tailored to how you work.
              </p>
              <p className="text-lg text-white/80">
                Streamline your unique business processes with bespoke solutions.
              </p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 text-center">
                  Who This Is For
                </h2>
                <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
                  Personalised apps are perfect for businesses with unique workflows that off-the-shelf software can't handle.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Businesses with unique calculation or quoting needs",
                    "Teams drowning in spreadsheets and manual processes",
                    "Companies needing custom internal tools",
                    "Service providers wanting client-facing portals",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-secondary">{item}</span>
                    </div>
                  ))}
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
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
                  What You Get
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: Calculator, title: "Custom Calculators", desc: "Pricing tools, quote generators, ROI calculators" },
                    { icon: FileText, title: "Form Builders", desc: "Complex multi-step forms with logic and validation" },
                    { icon: BarChart3, title: "Dashboards", desc: "Real-time data visualisation for your business" },
                    { icon: Cog, title: "Process Automation", desc: "Turn manual workflows into automated systems" },
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
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
                  How It Works
                </h2>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { step: "1", title: "Discovery", desc: "We map out your current process" },
                    { step: "2", title: "Design", desc: "Create a solution tailored to you" },
                    { step: "3", title: "Build", desc: "Develop and refine with your feedback" },
                    { step: "4", title: "Deploy", desc: "Launch and train your team" },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="h-12 w-12 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                        {item.step}
                      </div>
                      <h3 className="font-semibold text-secondary mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
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
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Pricing
              </h2>
              <p className="text-lg text-muted-foreground mb-2">
                Pricing depends on complexity and features required.
              </p>
              <p className="text-2xl font-bold text-primary mb-6">
                Most projects start from £500
              </p>
              <p className="text-muted-foreground">
                Simple tools can be ready in days. Complex systems take a few weeks.
              </p>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Streamline Your Workflow?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Tell us about your process and we'll build the perfect tool.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Link to="/contact">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/quick-start">
                    Start Project Brief
                  </Link>
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

export default PersonalisedApps;
