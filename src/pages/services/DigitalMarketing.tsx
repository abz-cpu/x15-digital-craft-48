import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Megaphone, Target, BarChart3, Users, Mail, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container } from "@/components/Container";

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Digital Marketing Services | L&D Digital"
        description="Grow your business with comprehensive digital marketing. PPC, social media, content marketing, and more. Data-driven strategies that deliver results."
        canonicalUrl="https://landdigital.co.uk/services/digital-marketing"
      />
      <Navigation darkHero />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-40 pb-16 md:pt-44 md:pb-20 lg:pt-48 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-secondary">
          <Container>
            <div className="relative text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Digital Marketing
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-4">
                Reach more customers and grow your business online.
              </p>
              <p className="text-lg text-primary-foreground/80">
                Strategic marketing that delivers measurable results.
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
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Businesses wanting to increase online visibility",
                    "Companies launching new products or services",
                    "Brands looking to build engaged audiences",
                    "Businesses ready to scale with paid advertising",
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
                  Our Services
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: Target, title: "PPC Advertising", desc: "Google Ads & social media campaigns that convert" },
                    { icon: Share2, title: "Social Media Marketing", desc: "Build your brand across all platforms" },
                    { icon: Mail, title: "Email Marketing", desc: "Nurture leads and drive repeat business" },
                    { icon: Megaphone, title: "Content Marketing", desc: "Engaging content that attracts customers" },
                    { icon: Users, title: "Audience Building", desc: "Grow your following with targeted strategies" },
                    { icon: BarChart3, title: "Analytics & Reporting", desc: "Track ROI with detailed performance data" },
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
              <p className="text-2xl font-bold text-primary mb-6">
                From £500/month
              </p>
              <p className="text-muted-foreground">
                Custom packages based on your goals, channels, and budget. Ad spend billed separately.
              </p>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-secondary">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Grow Your Business?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Get a free marketing strategy consultation.
              </p>
              <Button asChild size="lg" className="bg-background text-primary hover:bg-muted">
                <Link to="/contact">
                  Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DigitalMarketing;
