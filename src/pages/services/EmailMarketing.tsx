import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Mail, Zap, Users, BarChart3, Target, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container } from "@/components/Container";
import { ServiceSchema } from "@/components/ServiceSchema";

const EmailMarketing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Email Marketing Services UK | Automated Campaigns | L&D Digital"
        description="Email campaigns that nurture leads and drive sales. Automated sequences, newsletters, and email strategy that delivers results. Mailchimp & Klaviyo experts."
        keywords="email marketing UK, email automation, newsletter design, email campaign management, Mailchimp expert UK, email marketing for small business"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/services/email-marketing"
      />
      <ServiceSchema
        name="Email Marketing Services"
        description="Email campaigns that nurture leads and drive sales. Automated sequences, newsletters, and email strategy that delivers results."
        url="https://digital.luminousanddeliver.co.uk/services/email-marketing"
        priceRange="£200-£800/month"
        serviceType="Email Marketing"
      />
      <Navigation darkHero />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-40 pb-16 md:pt-44 md:pb-20 lg:pt-48 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-secondary">
          <Container>
            <div className="relative text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Email Marketing
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-4">
                Turn your inbox into a sales machine.
              </p>
              <p className="text-lg text-primary-foreground/80">
                Email campaigns that nurture, convert, and retain customers.
              </p>
            </div>
          </Container>
        </section>

        <BreadcrumbNav />

        {/* What You Get */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <AnimatedSection animation="scale">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
                  What's Included
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: Mail, title: "Campaign Design", desc: "Beautiful, on-brand email templates" },
                    { icon: Zap, title: "Automation Sequences", desc: "Welcome, nurture, and re-engagement flows" },
                    { icon: Users, title: "List Management", desc: "Segmentation and list hygiene" },
                    { icon: Target, title: "Personalization", desc: "Dynamic content based on user behavior" },
                    { icon: Clock, title: "Scheduling", desc: "Optimal send times for your audience" },
                    { icon: BarChart3, title: "Analytics", desc: "Open rates, clicks, and conversion tracking" },
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

        {/* Stats */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 text-center">
                  Why Email Marketing?
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "£42 average return for every £1 spent",
                    "4x higher conversion than social media",
                    "Own your audience (no algorithm changes)",
                    "Works on autopilot with automation",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-secondary">{item}</span>
                    </div>
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
                From £300/month
              </p>
              <p className="text-muted-foreground">
                Includes strategy, design, copywriting, and ongoing optimization. Platform fees billed separately.
              </p>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-secondary">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Boost Your Email ROI?
              </h2>
              <Button asChild size="lg" className="bg-background text-primary hover:bg-muted">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
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

export default EmailMarketing;
