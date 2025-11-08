import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  MapPin,
  Globe,
  Mail,
  Phone,
  Linkedin,
  MessageCircle,
  DollarSign,
  Zap,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { SEO } from "@/components/SEO";

const About = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => observerRef.current?.observe(section));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="About Us - Fast, Transparent Web Development & AI | X15 Digital"
        description="Learn about X15 Digital's mission: affordable, transparent web development & AI automation for UK businesses. No hidden fees, fast turnaround, you own everything."
        keywords="about X15 Digital, web development agency UK, AI automation company London, transparent pricing"
      />
      <ScrollProgressBar />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto fade-in-section">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Left Column - 60% */}
            <div className="md:col-span-3">
              <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
                About X15 Digital
              </h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-4">
                  Hi, I'm Abdul M Taher, the founder of X15 Digital.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  We are a London-based web development and AI automation specialist
                  helping UK and English-speaking businesses worldwide get online fast
                  and affordably.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  I started X15 Digital because I was sick of seeing agencies charge
                  £5,000 for £500 websites.
                </p>
                <div className="my-6">
                  <p className="text-lg font-semibold mb-3">Our mission is simple:</p>
                  <ul className="space-y-2">
                    {[
                      "Transparent pricing (see exact costs before we talk)",
                      "Fast delivery (days, not months)",
                      "Direct communication (you work directly with the specialist)",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="my-6">
                  <p className="text-lg font-semibold mb-3">We specialise in:</p>
                  <ul className="space-y-2">
                    {[
                      "Web development (from landing pages to complex web apps)",
                      "AI automation (7+ services from chatbots to sales agents)",
                      "Complete digital transformation for growing businesses",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  I've been coding for years, but we're building X15 Digital from
                  scratch. That means better prices for early clients and full attention
                  to every project.
                </p>
                <p className="text-lg font-semibold text-secondary">
                  No BS. No hidden fees. Just good work at fair prices.
                </p>
                <p className="text-lg text-muted-foreground mt-4 flex items-center gap-2">
                  Let's build something great together.{" "}
                  <Zap className="h-5 w-5 text-primary" />
                </p>
              </div>
            </div>

            {/* Right Column - 40% */}
            <div className="md:col-span-2">
              {/* Placeholder Image */}
              <div className="mb-8">
                <div className="w-full aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <Users className="h-32 w-32 text-primary" />
                </div>
              </div>

              {/* Location Card */}
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Based in London, UK</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">
                        Serving English-speaking clients worldwide
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <a
                        href="mailto:info@x15digital.co.uk"
                        className="hover:text-primary transition-colors"
                      >
                        info@x15digital.co.uk
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <a
                        href="tel:+447424062513"
                        className="hover:text-primary transition-colors"
                      >
                        +44 7424 062513
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4 pt-4 border-t border-border">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                      href="https://wa.me/447424062513"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle className="h-6 w-6" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-8">
            Why X15 Digital Exists
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-4">
              Most small businesses get quoted £3,000–£10,000 for websites that should
              cost £500. They wait 8–12 weeks for projects that could be done in 5 days.
            </p>
            <p className="text-lg font-semibold text-secondary mb-4">
              We're changing that.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              X15 Digital was built to offer:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Honest, transparent pricing (no surprise invoices)",
                "Fast turnaround (most sites in 1–7 days)",
                "Direct communication (no account manager middlemen)",
                "Modern technology (React, AI automation, secure hosting)",
              ].map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
            <p className="text-lg text-muted-foreground mb-4">
              We use the same tools as expensive agencies, but without the overhead, the
              sales teams, or the markup.
            </p>
            <p className="text-lg font-semibold text-secondary">
              The result? Professional websites and AI automation at prices that make
              sense for small businesses.
            </p>
          </div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
            What We Stand For
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Radical Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You see the price before we talk. No "it depends" quotes or hourly
                  rate games. What you see is what you pay.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Speed Without Shortcuts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fast doesn't mean sloppy. We use modern tools and proven processes to
                  deliver quality work in days, not months.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Direct Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You work with the developer, not a project manager who emails the
                  developer. Faster decisions, better results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sister Company Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
            Part of the X15 Family
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            X15 Digital is the sister company of X15 PC Builders, a custom gaming PC
            business serving UK customers since 2020.
          </p>
          <p className="text-lg font-semibold text-secondary mb-6">
            Same values. Same transparency. Different expertise.
          </p>
          <Button asChild variant="outline">
            <a
              href="https://x15pcbuilders.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit X15 PC Builders <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            No sales pitch. No pressure. Just a straightforward conversation about what
            you need and how we can help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-transform"
            >
              <Link to="/services">See Our Packages</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default About;
