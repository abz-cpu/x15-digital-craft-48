import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Zap, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

const QuickStart = () => {
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
      <BreadcrumbNav />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-3xl mx-auto text-center fade-in-section">
          <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
            Let's Get Started Quickly
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Tell us what you need in 30 seconds. We'll reply within 4 hours with a
            clear quote and next steps.
          </p>
          <p className="text-lg text-muted-foreground flex items-center justify-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Average response time: 2–3 hours
          </p>
        </div>
      </section>

      {/* Quick Start Form */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-3xl mx-auto fade-in-section">
          <Card>
            <CardContent className="pt-8">
              <p className="text-center text-muted-foreground mb-4">
                This is the fast track for straightforward projects.
              </p>
              <p className="text-center text-sm text-muted-foreground mb-6">
                For complex or enterprise projects, use our{" "}
                <Link to="/contact" className="text-primary hover:underline">
                  detailed inquiry form
                </Link>{" "}
                instead.
              </p>

              <Button
                size="lg"
                className="w-full mb-4"
                data-tally-open="QUICK_START_FORM_ID"
                data-tally-layout="modal"
                data-tally-width="600"
              >
                <Zap className="mr-2 h-5 w-5" />
                Start Your Project Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Below Form Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <p className="text-muted-foreground mb-6 flex items-center justify-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            Not ready yet?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline">
              <Link to="/services">
                Browse all packages <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://wa.me/447424062513?text=Hi%2C%20I%20have%20a%20quick%20question%20about"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Talk to us on WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link to="/services#faq">Read FAQs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
            What Happens After You Submit?
          </h2>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Within 1 hour",
                description:
                  "We review your requirements and check feasibility.",
              },
              {
                step: "2",
                title: "Within 4 hours (usually 2–3)",
                description:
                  "You receive a detailed quote with: exact price breakdown, delivery timeline, what's included, and next steps.",
              },
              {
                step: "3",
                title: "Within 24 hours (if you approve)",
                description:
                  "We start your project and send you login details for our project tracker.",
              },
              {
                step: "4",
                title: "Within 1–14 days (depending on package)",
                description: "Your website or AI automation is live and working.",
              },
            ].map((item) => (
              <Card key={item.step} className="hover-lift">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-secondary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg font-semibold text-secondary mb-2">
              No hidden fees. No surprises. No BS.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              {[
                "Transparent pricing",
                "Fast delivery",
                "Direct communication",
                "You own everything",
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default QuickStart;
