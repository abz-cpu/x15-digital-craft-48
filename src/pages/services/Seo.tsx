import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Search, TrendingUp, BarChart3, Globe, Target, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container } from "@/components/Container";

const Seo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="SEO Services | X15 Digital"
        description="Get found on Google with expert SEO services. We help UK businesses rank higher, attract more traffic, and convert visitors into customers."
        canonicalUrl="https://x15.digital/services/seo"
      />
      <Navigation darkHero />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-40 pb-16 md:pt-44 md:pb-20 lg:pt-48 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900">
          <Container>
            <div className="relative text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                SEO Services
              </h1>
              <p className="text-xl text-white/90 mb-4">
                Get found on Google and attract customers who are ready to buy.
              </p>
              <p className="text-lg text-white/80">
                Strategic SEO that drives real traffic and measurable results.
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
                  SEO is perfect for businesses that want to be found by customers searching for their services online.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Local businesses wanting to rank in Google Maps",
                    "Service providers tired of paying for every lead",
                    "E-commerce stores looking to increase organic traffic",
                    "Companies ready to invest in long-term growth",
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
                    { icon: Search, title: "Keyword Research", desc: "Find the terms your customers actually search for" },
                    { icon: FileText, title: "On-Page SEO", desc: "Optimised content, titles, and meta descriptions" },
                    { icon: Globe, title: "Technical SEO", desc: "Site speed, mobile-friendliness, and crawlability" },
                    { icon: Target, title: "Local SEO", desc: "Google Business Profile and local ranking optimisation" },
                    { icon: TrendingUp, title: "Link Building", desc: "Quality backlinks that boost your authority" },
                    { icon: BarChart3, title: "Monthly Reports", desc: "Clear progress tracking and actionable insights" },
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
                    { step: "1", title: "Audit", desc: "We analyse your current SEO and competition" },
                    { step: "2", title: "Strategy", desc: "Create a tailored plan for your goals" },
                    { step: "3", title: "Optimise", desc: "Implement on-page and technical fixes" },
                    { step: "4", title: "Grow", desc: "Ongoing content and link building" },
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
                Flexible SEO packages to match your budget and goals.
              </p>
              <p className="text-2xl font-bold text-primary mb-6">
                From £300/month
              </p>
              <p className="text-muted-foreground">
                One-time SEO audits available from £150. Monthly packages include ongoing optimisation and reporting.
              </p>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Rank Higher?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get a free SEO audit and see where you can improve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Link to="/contact">
                    Get Free SEO Audit <ArrowRight className="ml-2 h-4 w-4" />
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

export default Seo;