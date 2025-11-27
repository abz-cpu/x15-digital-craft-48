import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MessageCircle, FileText, ArrowRight, MapPin, Clock, Copy, Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

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
      { threshold: 0.1 },
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
      <SEO
        title="Contact Us - Get Your Free Quote | X15 Digital"
        description="Contact X15 Digital for a free quote on web development or AI automation. Fast response times, WhatsApp support, based in London UK. Email, phone, or form contact."
        keywords="contact web developer UK, get free quote website, AI automation consultation, web development London"
      />
      <ScrollProgressBar />
      <Navigation />
      <BreadcrumbNav />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Have a project in mind? Questions about our services? Want a straightforward quote with no sales pitch?
          </p>
          <p className="text-lg text-muted-foreground flex items-center justify-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            We typically respond within 4 hours (usually faster).
          </p>
          <p className="text-lg font-semibold text-secondary mt-6 mb-8">Choose your preferred way to reach us:</p>
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
                  Most detailed option. We'll reply with a comprehensive quote within 4 hours.
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
                  Prefer email? Send us your requirements and we'll respond within 4 hours.
                </p>
                <div className="space-y-2">
                  <a href="mailto:info@x15digital.co.uk" className="block text-primary hover:underline font-medium">
                    info@x15digital.co.uk
                  </a>
                  <Button variant="outline" className="w-full" onClick={copyEmail}>
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
      <section id="contact-form" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-3xl mx-auto fade-in-section">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Project Inquiry Form</h2>
            <p className="text-lg text-muted-foreground mb-2">
              Tell us about your project and we'll send you a detailed quote with timeline and next steps.
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
          <p className="text-center text-muted-foreground mb-12">Quick answers to save you time:</p>

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
                  <Link to={faq.link} className="text-primary hover:underline inline-flex items-center gap-1 text-sm">
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
                <p className="font-semibold">Based in Stratford, London (E15 3JZ)</p>
                <p className="text-muted-foreground">
                  Near Abbey Road DLR — serving businesses nationwide and English-speaking clients worldwide.
                </p>
                <p className="text-sm text-muted-foreground italic mt-4">
                  Remote-first business – all meetings via video call unless otherwise arranged.
                </p>

                {/* Google Map */}
                <div className="mt-4 rounded-lg overflow-hidden h-[220px] border border-border/60">
                  <iframe
                    src="https://www.google.com/maps?q=Stratford%20E15%203JZ%20Abbey%20Road%20Station&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                    allowFullScreen
                  />
                </div>
              </CardContent>
            </Card>

            {/* Response Times & Process */}
            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Response Times & Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Response Times */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <p className="text-sm">
                      <strong>Monday–Friday:</strong> <span className="text-muted-foreground">Within 2–4 hours</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <p className="text-sm">
                      <strong>Weekends:</strong> <span className="text-muted-foreground">Within 24 hours</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <p className="text-sm">
                      <strong>Bank Holidays:</strong> <span className="text-muted-foreground">Within 48 hours</span>
                    </p>
                  </div>
                </div>

                {/* WhatsApp Callout */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm font-medium flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-green-600" />
                    <span className="text-green-700">WhatsApp: Instant during business hours (9am–6pm GMT)</span>
                  </p>
                </div>

                {/* Process Steps */}
                <div className="pt-2">
                  <p className="font-semibold text-sm mb-3">What happens after you contact us:</p>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                        1
                      </span>
                      <div>
                        <p className="text-sm font-medium">We review your requirements</p>
                        <p className="text-xs text-muted-foreground">Usually within 2 hours on weekdays</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                        2
                      </span>
                      <div>
                        <p className="text-sm font-medium">You get a detailed quote + timeline</p>
                        <p className="text-xs text-muted-foreground">Transparent pricing, no hidden costs</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                        3
                      </span>
                      <div>
                        <p className="text-sm font-medium">Quick call to clarify any questions</p>
                        <p className="text-xs text-muted-foreground">Optional - only if you need it</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                        4
                      </span>
                      <div>
                        <p className="text-sm font-medium">Project starts immediately upon approval</p>
                        <p className="text-xs text-muted-foreground">No delays, no bureaucracy</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="pt-3 border-t">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-green-600" />
                      No obligation quotes
                    </span>
                    <span className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-green-600" />
                      No sales pressure
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final soft CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background border-t">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <h3 className="text-2xl font-bold text-secondary mb-3">Still deciding?</h3>
          <p className="text-muted-foreground mb-6">
            No stress. Browse our packages or take a quick quiz to see what fits your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                View Packages <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button asChild size="lg">
              <Link to="/start">
                Take 30s Quiz <Zap className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Contact;
