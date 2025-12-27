import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Server, Shield, Zap, Clock, Globe, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container } from "@/components/Container";

const WebHosting = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Web Hosting Services | L&D Digital"
        description="Fast, secure, and reliable web hosting for your business. Managed hosting with 99.9% uptime, SSL, backups, and 24/7 support."
        canonicalUrl="https://landdigital.co.uk/services/web-hosting"
      />
      <Navigation darkHero />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-40 pb-16 md:pt-44 md:pb-20 lg:pt-48 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-secondary">
          <Container>
            <div className="relative text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Web Hosting
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-4">
                Fast, secure hosting you can rely on.
              </p>
              <p className="text-lg text-primary-foreground/80">
                Managed hosting so you can focus on your business.
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
                    { icon: Zap, title: "Lightning Fast", desc: "SSD storage and global CDN for speed" },
                    { icon: Shield, title: "SSL Certificate", desc: "Free HTTPS security included" },
                    { icon: Clock, title: "99.9% Uptime", desc: "Your site stays online, always" },
                    { icon: Server, title: "Daily Backups", desc: "Automatic backups with easy restore" },
                    { icon: Globe, title: "UK Data Centers", desc: "Fast loading for UK visitors" },
                    { icon: Headphones, title: "24/7 Support", desc: "Expert help when you need it" },
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

        {/* Why Choose Us */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 text-center">
                  Why Choose Our Hosting?
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "No technical knowledge required",
                    "We handle all updates and security",
                    "Included free with most web projects",
                    "Scalable as your business grows",
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
                From £15/month
              </p>
              <p className="text-muted-foreground">
                Includes SSL, backups, updates, and support. Discounts available for annual plans.
              </p>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-secondary">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready for Reliable Hosting?
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

export default WebHosting;
