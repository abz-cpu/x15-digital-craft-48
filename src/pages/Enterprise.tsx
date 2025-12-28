import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Code,
  Zap,
  Users,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

const Enterprise = () => {
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
        title="Enterprise Solutions - Complex Projects & Custom Development | X15 Digital"
        description="Custom enterprise web applications, complex AI automation, and large-scale projects for UK businesses. Flexible pricing for unique requirements."
        keywords="enterprise web development UK, custom web applications, complex AI automation, enterprise software development"
      />
      <ScrollProgressBar />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-16 md:pt-44 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary to-secondary/80 text-white">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Enterprise & Complex Projects
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Custom web applications, AI automation stacks, and ongoing development
            partnerships for scaling businesses.
          </p>
          <p className="text-lg mb-8 text-white/90 max-w-3xl mx-auto">
            Need more than a website? We build custom platforms, complex AI systems, and
            provide ongoing technical partnership for businesses with bigger ambitions.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-secondary hover:bg-white/90 hover:scale-105 transition-transform"
            data-tally-open="ENTERPRISE_FORM_ID"
            data-tally-layout="modal"
            data-tally-width="600"
          >
            <button>Get Enterprise Quote</button>
          </Button>
        </div>
      </section>

      {/* Breadcrumb below hero */}
      <BreadcrumbNav />

      {/* Main Content */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-6">
            What We Build for Enterprises
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Beyond standard websites and single AI solutions, we build:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Custom web applications & SaaS platforms",
              "Multi-service AI automation stacks",
              "API development & third-party integrations",
              "Ongoing technical partnership & support",
              "White-label solutions for agencies",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-muted p-6 rounded-lg space-y-2">
            <p className="text-muted-foreground">
              <strong>Pricing:</strong> Custom quotes starting from £3,000+
            </p>
            <p className="text-muted-foreground">
              <strong>Timeline:</strong> 4-12 weeks depending on complexity
            </p>
            <p className="text-muted-foreground">
              <strong>Payment:</strong> Milestone-based or retainer agreements
            </p>
          </div>
        </div>
      </section>

      {/* Project Examples */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">
            Recent Enterprise Projects
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <Code className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">
                  Multi-Location Booking System
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Platform for salon chain (5 locations)
                </p>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-3">Built:</p>
                <ul className="space-y-2 text-sm mb-4">
                  {[
                    "Centralised booking management",
                    "Staff scheduling system",
                    "Payment processing & reporting",
                    "Customer loyalty program",
                    "Mobile app integration",
                  ].map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>
                    <strong>Timeline:</strong> 8 weeks
                  </p>
                  <p>
                    <strong>Investment:</strong> £8,500
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">
                  Healthcare Appointment Automation
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  AI system for private clinic
                </p>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-3">Built:</p>
                <ul className="space-y-2 text-sm mb-4">
                  {[
                    "Voice agent for phone bookings",
                    "SMS reminder automation",
                    "Patient record integration",
                    "Multi-practitioner calendar",
                    "Billing automation",
                  ].map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>
                    <strong>Timeline:</strong> 6 weeks
                  </p>
                  <p>
                    <strong>Investment:</strong> £6,200
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Agency White-Label AI</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Resellable chatbot platform
                </p>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-3">Built:</p>
                <ul className="space-y-2 text-sm mb-4">
                  {[
                    "White-label AI chatbot system",
                    "Client management dashboard",
                    "Automated deployment",
                    "Usage analytics",
                    "Monthly revenue share model",
                  ].map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>
                    <strong>Timeline:</strong> 10 weeks
                  </p>
                  <p>
                    <strong>Investment:</strong> £12,000 + revenue share
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Engagement Options */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">
            How We Work with Enterprises
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <Code className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Project-Based</CardTitle>
                <p className="text-sm text-muted-foreground">
                  One-time complex build
                </p>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-3">Best for:</p>
                <ul className="space-y-2 text-sm mb-4">
                  <li>• Custom web applications</li>
                  <li>• One-off AI systems</li>
                  <li>• Platform migrations</li>
                </ul>
                <div className="text-sm text-muted-foreground space-y-1 mb-6">
                  <p>
                    <strong>Pricing:</strong> Fixed quote
                  </p>
                  <p>
                    <strong>Timeline:</strong> 4-12 weeks
                  </p>
                  <p>
                    <strong>Payment:</strong> Milestone-based
                  </p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full"
                  data-tally-open="ENTERPRISE_FORM_ID"
                  data-tally-layout="modal"
                  data-tally-width="600"
                >
                  <button>
                    Discuss Project <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 border-primary">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Retainer Partnership</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Ongoing development support
                </p>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-3">Best for:</p>
                <ul className="space-y-2 text-sm mb-4">
                  <li>• Continuous feature development</li>
                  <li>• Technical partnership</li>
                  <li>• Regular updates & maintenance</li>
                </ul>
                <div className="text-sm text-muted-foreground space-y-1 mb-6">
                  <p>
                    <strong>Pricing:</strong> £2,000-£10,000/month
                  </p>
                  <p>
                    <strong>Commitment:</strong> 3-6 month minimum
                  </p>
                  <p>
                    <strong>Includes:</strong> Dedicated dev time + support
                  </p>
                </div>
                <Button
                  asChild
                  className="w-full"
                  data-tally-open="ENTERPRISE_FORM_ID"
                  data-tally-layout="modal"
                  data-tally-width="600"
                >
                  <button>
                    Discuss Retainer <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Revenue Share</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Build + ongoing partnership
                </p>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-3">Best for:</p>
                <ul className="space-y-2 text-sm mb-4">
                  <li>• SaaS/platform products</li>
                  <li>• White-label solutions</li>
                  <li>• High-growth startups</li>
                </ul>
                <div className="text-sm text-muted-foreground space-y-1 mb-6">
                  <p>
                    <strong>Pricing:</strong> Reduced upfront + % revenue
                  </p>
                  <p>
                    <strong>Timeline:</strong> Custom
                  </p>
                  <p>
                    <strong>Partnership:</strong> Long-term aligned growth
                  </p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full"
                  data-tally-open="ENTERPRISE_FORM_ID"
                  data-tally-layout="modal"
                  data-tally-width="600"
                >
                  <button>
                    Discuss Partnership <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">
            What Happens Next
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "We Review Your Inquiry (1-2 hours)",
                description:
                  "We'll review your requirements and determine if we're a good fit.",
              },
              {
                step: "2",
                title: "Discovery Call (30-60 min)",
                description:
                  "We'll discuss your goals, technical requirements, and timeline in detail.",
              },
              {
                step: "3",
                title: "Custom Proposal (2-3 days)",
                description:
                  "We'll send a detailed proposal with scope, timeline, milestones, and pricing.",
              },
              {
                step: "4",
                title: "Kick-off & Build",
                description:
                  "Once approved, we'll start building. Regular updates via Slack/email.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Scale?</h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how we can help build your technical infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-transform"
              data-tally-open="ENTERPRISE_FORM_ID"
              data-tally-layout="modal"
              data-tally-width="600"
            >
              <button>Get Enterprise Quote</button>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link to="/services">See Standard Services</Link>
            </Button>
          </div>

          <p className="text-white/90">
            Or email us directly:{" "}
            <a
              href="mailto:luminusanddeliver@gmail.com"
              className="font-semibold hover:underline"
            >
              luminusanddeliver@gmail.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Enterprise;
