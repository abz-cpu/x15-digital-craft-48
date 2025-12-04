import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Monitor, Wifi, HardDrive, LifeBuoy } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container } from "@/components/Container";

const ItSupport = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="IT Support | X15 Digital"
        description="Reliable technical support for your day-to-day operations. Keep your business running smoothly with expert IT help."
        canonicalUrl="https://x15.digital/services/it-support"
      />
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900">
          <Container>
            <div className="relative text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                IT Support
              </h1>
              <p className="text-xl text-white/90 mb-4">
                Reliable technical support for your day-to-day operations.
              </p>
              <p className="text-lg text-white/80">
                Expert help when you need it, without the full-time cost.
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
                  IT support is perfect for small businesses that need technical help but don't have a dedicated IT team.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Small businesses without in-house IT staff",
                    "Teams struggling with tech issues that slow them down",
                    "Companies needing help with software and hardware",
                    "Anyone who wants a reliable tech partner on call",
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
                    { icon: Monitor, title: "Remote Support", desc: "Quick fixes without waiting for on-site visits" },
                    { icon: Wifi, title: "Network Help", desc: "WiFi, connectivity, and network troubleshooting" },
                    { icon: HardDrive, title: "Hardware Advice", desc: "Guidance on equipment and upgrades" },
                    { icon: LifeBuoy, title: "Software Support", desc: "Help with common business applications" },
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

        {/* What's Covered */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
                  What's Covered
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Email setup and troubleshooting",
                    "Software installation and updates",
                    "Printer and peripheral setup",
                    "Cloud storage and backup help",
                    "Password and security advice",
                    "Basic network configuration",
                    "Remote desktop support",
                    "General tech guidance",
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
                Flexible support options to suit your needs.
              </p>
              <p className="text-2xl font-bold text-primary mb-6">
                From £35/hour or £75/month retainer
              </p>
              <p className="text-muted-foreground">
                Pay as you go or lock in a monthly rate for priority support.
              </p>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Tech Help?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get reliable IT support without the overhead of a full-time hire.
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

export default ItSupport;
