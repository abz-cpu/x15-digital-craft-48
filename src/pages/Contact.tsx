import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  MessageCircle,
  FileText,
  ArrowRight,
  MapPin,
  Clock,
  Copy,
  Check,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const Contact = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

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

  const copyEmail = () => {
    navigator.clipboard.writeText("info@x15digital.co.uk");
    setCopied(true);
    toast({
      title: "Email copied!",
      description: "info@x15digital.co.uk copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgressBar />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Have a project in mind? Questions about our services? Want a straightforward
            quote with no sales pitch?
          </p>
          <p className="text-lg text-muted-foreground flex items-center justify-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            We typically respond within 4 hours (usually faster).
          </p>
          <p className="text-lg font-semibold text-secondary mt-6 mb-8">
            Choose your preferred way to reach us:
          </p>
        </div>
      </section>

      {/* Contact Options Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto fade-in-section">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Form Card */}
            <Card className="hover-lift cursor-pointer" onClick={scrollToForm}>
              <CardHeader className="text-center">
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Fill Out the Form</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Most detailed option. We'll reply with a comprehensive quote within 4
                  hours.
                </p>
                <Button variant="outline" className="w-full">
                  Use Contact Form <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* WhatsApp Card */}
            <Card className="hover-lift border-2 border-primary">
              <CardHeader className="text-center">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">WhatsApp Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Fastest option. Get instant replies during UK business hours (9am–6pm).
                </p>
                <Button asChild className="w-full">
                  <a
                    href="https://wa.me/447424062513?text=Hi%20X15%20Digital%2C%20I%27m%20interested%20in%20your%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="hover-lift">
              <CardHeader className="text-center">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Email Directly</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Prefer email? Send us your requirements and we'll respond within 4
                  hours.
                </p>
                <div className="space-y-2">
                  <a
                    href="mailto:info@x15digital.co.uk"
                    className="block text-primary hover:underline font-medium"
                  >
                    info@x15digital.co.uk
                  </a>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={copyEmail}
                  >
                    {copied ? (
                      <>
                        <Check className="mr-2 h-4 w-4" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" /> Copy Email Address
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact-form"
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted"
      >
        <div className="max-w-3xl mx-auto fade-in-section">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Project Inquiry Form
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              Tell us about your project and we'll send you a detailed quote with
              timeline and next steps.
            </p>
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              We typically respond within 4 hours (usually faster)
            </p>
          </div>

          <Card>
            <CardContent className="pt-8">
              <Button
                size="lg"
                className="w-full mb-4"
                data-tally-open="MAIN_CONTACT_FORM_ID"
                data-tally-layout="modal"
                data-tally-width="700"
              >
                Start Your Project Inquiry <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                Not sure what you need?{" "}
                <Link to="/start" className="text-primary hover:underline">
                  Take our 30-second quiz
                </Link>{" "}
                or{" "}
                <Link to="/services" className="text-primary hover:underline">
                  Browse packages first
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Shortcut Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto fade-in-section">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-8">
            Common Questions Before You Contact Us
          </h3>
          <p className="text-center text-muted-foreground mb-12">
            Quick answers to save you time:
          </p>

          <div className="space-y-6">
            {[
              {
                q: "How long will my project take?",
                a: "Most websites: 1–7 days. AI automation: 3–10 days.",
                link: "/services#faq",
                linkText: "See full timeline FAQ",
              },
              {
                q: "What if I don't like the result?",
                a: "Free revisions until you're happy, or money-back guarantee.",
                link: "/services#faq",
                linkText: "See our guarantee",
              },
              {
                q: "Do I need to know technical stuff?",
                a: "Not at all. We handle everything and explain it in plain English.",
                link: "/services",
                linkText: "See how it works",
              },
            ].map((faq, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <p className="font-semibold text-lg mb-2">Q: {faq.q}</p>
                  <p className="text-muted-foreground mb-2">A: {faq.a}</p>
                  <Link
                    to={faq.link}
                    className="text-primary hover:underline inline-flex items-center gap-1 text-sm"
                  >
                    {faq.linkText} <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/services#faq">
                View All FAQs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-6xl mx-auto fade-in-section">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Location */}
            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold">Based in London, UK</p>
                <p className="text-muted-foreground">
                  Serving businesses nationwide and English-speaking clients worldwide
                </p>
                <p className="text-sm text-muted-foreground italic mt-4">
                  (Remote-first business - all meetings via video call)
                </p>
              </CardContent>
            </Card>

            {/* Response Times */}
            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Response Times</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  <strong>Monday–Friday:</strong> Within 2–4 hours
                </p>
                <p>
                  <strong>Weekends:</strong> Within 24 hours
                </p>
                <p>
                  <strong>Bank Holidays:</strong> Within 48 hours
                </p>
                <p className="text-sm text-primary font-semibold mt-4">
                  WhatsApp: Instant during business hours (9am–6pm GMT)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Contact;
