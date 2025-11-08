import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Globe, Bot, Zap, CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const Start = () => {
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
      <ScrollProgressBar />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto text-center fade-in-section">
          <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
            Not Sure Where to Start?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            We offer two main services. Choose what you need most right now (or both!).
          </p>
          <p className="text-lg text-muted-foreground">
            No commitment required. Just exploring your options.
          </p>
        </div>
      </section>

      {/* Service Selector Cards */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto fade-in-section">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Website Card */}
            <Card className="hover-lift">
              <CardHeader className="text-center">
                <Globe className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">I Need a Website</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-center">
                  From simple landing pages to complex web applications.
                </p>
                <div className="mb-6">
                  <p className="font-semibold mb-3">What's included:</p>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Starter sites from £100",
                      "Business sites from £300",
                      "Custom web apps from £1,500",
                      "1–14 day delivery",
                      "Mobile-responsive design",
                      "SEO setup included",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-semibold mb-2">Perfect for:</p>
                  <p className="text-sm text-muted-foreground">
                    New businesses, redesigns, custom platforms
                  </p>
                </div>
                <Button asChild className="w-full">
                  <Link to="/services#web-packages">
                    See Web Packages <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* AI Automation Card */}
            <Card className="hover-lift">
              <CardHeader className="text-center">
                <Bot className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">I Need AI Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-center">
                  Chatbots, voice agents, workflow automation, and more.
                </p>
                <div className="mb-6">
                  <p className="font-semibold mb-3">What's included:</p>
                  <ul className="space-y-2 text-sm">
                    {[
                      "AI chatbot from £50/month",
                      "Voice agent from £100/month",
                      "7+ AI services available",
                      "Setup from £200",
                      "24/7 automated support",
                      "Works with any website",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-semibold mb-2">Perfect for:</p>
                  <p className="text-sm text-muted-foreground">
                    Customer support, lead capture, workflow automation
                  </p>
                </div>
                <Button asChild className="w-full">
                  <Link to="/services#ai-automation">
                    See AI Solutions <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Both Services Card */}
            <Card className="hover-lift border-2 border-primary">
              <CardHeader className="text-center">
                <div className="flex justify-center items-center gap-2 mb-4">
                  <Globe className="h-12 w-12 text-primary" />
                  <span className="text-2xl font-bold text-primary">+</span>
                  <Bot className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl">I Need Both</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-center">
                  Website + AI automation working together seamlessly.
                </p>
                <div className="mb-6">
                  <p className="font-semibold mb-3">What's included:</p>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Combined bundles available",
                      "Save 10–15% vs separate",
                      "Complete digital transformation",
                      "One provider, one point of contact",
                      "Integrated from day one",
                      "Full support for everything",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-semibold mb-2">Perfect for:</p>
                  <p className="text-sm text-muted-foreground">
                    New launches, complete rebrand, digital upgrade
                  </p>
                </div>
                <Button asChild className="w-full">
                  <Link to="/services#combined-packages">
                    See Bundle Packages <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Still Not Sure Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Still Not Sure What You Need?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Take our 30-second quiz and we'll recommend the best solution for your
            specific situation.
          </p>

          <Button
            size="lg"
            className="mb-8"
            data-tally-open="QUIZ_FORM_ID"
            data-tally-layout="modal"
            data-tally-width="600"
          >
            <Zap className="mr-2 h-5 w-5" />
            Take the Quiz <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <p className="text-muted-foreground mb-6">Or just talk to us:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg">
              <a
                href="https://wa.me/447424062513?text=Hi%2C%20I%20have%20a%20quick%20question%20about"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
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

export default Start;
