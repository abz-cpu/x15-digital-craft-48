import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Target, Zap, BarChart3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container } from "@/components/Container";

const LandingPages = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Landing Page Creation | X15 Digital"
        description="High-converting landing pages for campaigns and offers. Designed to turn visitors into customers."
        canonicalUrl="https://x15.digital/services/landing-pages"
      />
      <Navigation darkHero />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900">
          <Container>
            <div className="relative text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Landing Page Creation
              </h1>
              <p className="text-xl text-white/90 mb-4">
                High-converting landing pages for campaigns and offers.
              </p>
              <p className="text-lg text-white/80">
                Designed to turn visitors into customers, fast.
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
                  Landing pages are perfect for businesses running ads, promotions, or campaigns that need a focused page to drive conversions.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Businesses running Google or Facebook ads",
                    "Companies launching new products or services",
                    "Event organisers needing registration pages",
                    "Anyone wanting to capture leads effectively",
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
                    { icon: Target, title: "Conversion-Focused Design", desc: "Every element designed to drive action" },
                    { icon: Zap, title: "Lightning Fast", desc: "Optimised for speed and mobile devices" },
                    { icon: BarChart3, title: "Analytics Ready", desc: "Track conversions and optimise performance" },
                    { icon: Sparkles, title: "Professional Copy", desc: "Compelling headlines and persuasive content" },
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
                    { step: "1", title: "Brief", desc: "Share your offer and target audience" },
                    { step: "2", title: "Design", desc: "We create a high-converting layout" },
                    { step: "3", title: "Build", desc: "Develop with fast load times" },
                    { step: "4", title: "Launch", desc: "Go live and start converting" },
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
                Simple, transparent pricing for landing pages.
              </p>
              <p className="text-2xl font-bold text-primary mb-6">
                From £150 per page
              </p>
              <p className="text-muted-foreground">
                Most landing pages delivered within 48-72 hours.
              </p>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Converting?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get a landing page that turns your traffic into customers.
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

export default LandingPages;
