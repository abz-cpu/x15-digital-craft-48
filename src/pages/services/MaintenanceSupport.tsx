import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Shield, RefreshCw, Clock, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container } from "@/components/Container";

const MaintenanceSupport = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Maintenance & Support | X15 Digital"
        description="Ongoing updates, fixes, and protection for your website. Keep your site secure, fast, and up-to-date."
        canonicalUrl="https://x15.digital/services/maintenance-support"
      />
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900">
          <Container>
            <div className="relative text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Maintenance & Support
              </h1>
              <p className="text-xl text-white/90 mb-4">
                Ongoing updates, fixes, and protection for your website.
              </p>
              <p className="text-lg text-white/80">
                Peace of mind so you can focus on running your business.
              </p>
            </div>
          </Container>
        </section>

        {/* Who This Is For */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 text-center">
                  Who This Is For
                </h2>
                <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
                  Website maintenance is essential for any business that relies on their website and wants to keep it running smoothly.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Businesses without in-house tech support",
                    "Companies that need their website to stay secure",
                    "Anyone who wants regular backups and updates",
                    "Businesses that need quick fixes when issues arise",
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
                    { icon: Shield, title: "Security Updates", desc: "Regular patches to keep your site protected" },
                    { icon: RefreshCw, title: "Weekly Backups", desc: "Automatic backups so you never lose data" },
                    { icon: Clock, title: "Priority Response", desc: "4-hour response time for urgent issues" },
                    { icon: Headphones, title: "Dedicated Support", desc: "Direct line to your support team" },
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

        {/* What's Included */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
                  What's Included
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Regular updates & security patches",
                    "Weekly automated backups",
                    "Performance monitoring",
                    "Bug fixes and troubleshooting",
                    "Content updates (up to 1 hour/month)",
                    "SSL certificate management",
                    "Uptime monitoring",
                    "Monthly performance reports",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
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
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Pricing
              </h2>
              <p className="text-lg text-muted-foreground mb-2">
                Affordable monthly plans to protect your investment.
              </p>
              <p className="text-2xl font-bold text-primary mb-6">
                From £25/month
              </p>
              <p className="text-muted-foreground">
                Cancel anytime. No long-term contracts required.
              </p>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready for Peace of Mind?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let us handle the technical stuff while you focus on your business.
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

export default MaintenanceSupport;
