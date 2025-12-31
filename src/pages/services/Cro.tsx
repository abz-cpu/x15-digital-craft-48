import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Target, BarChart3, MousePointer, Zap, TestTube, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container } from "@/components/Container";
import { ServiceSchema } from "@/components/ServiceSchema";

const Cro = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Conversion Rate Optimization (CRO) UK | A/B Testing | L&D Digital"
        description="Turn more visitors into customers with data-driven CRO. A/B testing, UX improvements, and conversion optimization strategies that boost your bottom line."
        keywords="conversion rate optimization UK, CRO agency, A/B testing services, website optimization, increase website conversions, landing page optimization"
        canonicalUrl="https://luminousanddeliver.co.uk/services/cro"
      />
      <ServiceSchema
        name="Conversion Rate Optimization"
        description="Turn more visitors into customers with data-driven CRO. A/B testing, UX improvements, and conversion optimization strategies."
        url="https://luminousanddeliver.co.uk/services/cro"
        priceRange="£400-£1500/month"
        serviceType="Conversion Rate Optimization"
      />
      <Navigation darkHero />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-40 pb-16 md:pt-44 md:pb-20 lg:pt-48 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-secondary">
          <Container>
            <div className="relative text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Conversion Rate Optimization
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-4">
                Turn more visitors into paying customers.
              </p>
              <p className="text-lg text-primary-foreground/80">
                Data-driven strategies to maximize your website's performance.
              </p>
            </div>
          </Container>
        </section>

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
                  Perfect for businesses getting traffic but not enough conversions.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "E-commerce stores with low checkout rates",
                    "Lead gen sites with poor form completion",
                    "SaaS companies optimizing trial signups",
                    "Any business wanting more from existing traffic",
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
                    { icon: BarChart3, title: "Conversion Audit", desc: "Deep analysis of your current funnel and drop-off points" },
                    { icon: TestTube, title: "A/B Testing", desc: "Scientific testing to find what works best" },
                    { icon: MousePointer, title: "UX Improvements", desc: "Friction-reducing design changes" },
                    { icon: Target, title: "Landing Page Optimization", desc: "High-converting page designs" },
                    { icon: Zap, title: "Speed Optimization", desc: "Faster pages = higher conversions" },
                    { icon: TrendingUp, title: "Monthly Reporting", desc: "Clear metrics showing your ROI" },
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

        {/* Pricing */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Pricing
              </h2>
              <p className="text-lg text-muted-foreground mb-2">
                CRO packages based on your traffic and goals.
              </p>
              <p className="text-2xl font-bold text-primary mb-6">
                From £400/month
              </p>
              <p className="text-muted-foreground">
                One-time audits available from £250. Monthly retainers include ongoing testing and optimization.
              </p>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-secondary">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Convert More Visitors?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Get a free conversion audit and discover your biggest opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-background text-primary hover:bg-muted">
                  <Link to="/contact">
                    Get Free Audit <ArrowRight className="ml-2 h-4 w-4" />
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

export default Cro;
