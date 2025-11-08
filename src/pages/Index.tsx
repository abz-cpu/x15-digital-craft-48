import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  DollarSign,
  Zap,
  MessageCircle,
  Globe,
  Bot,
  Lock,
  Shield,
  ClipboardCheck,
  Star,
  Target,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import FloatingActionMenu from "@/components/FloatingActionMenu";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { AnimatedSection } from "@/components/AnimatedSection";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { useParallax } from "@/hooks/useParallax";
import { SEO } from "@/components/SEO";
import { ReviewSchema } from "@/components/ReviewSchema";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const parallaxOffset = useParallax({ speed: 0.5, maxOffset: 50 });

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

  const testimonials = [
    {
      quote: "Got a quote in 2 hours - way faster than other devs",
      author: "Sarah, Salon Owner",
      location: "SE15, London",
    },
    {
      quote: "Love how transparent the pricing is. No BS.",
      author: "James, Plumber",
      location: "Birmingham",
    },
    {
      quote: "The AI chatbot handles 80% of basic questions now",
      author: "Rachel, Consultant",
      location: "Manchester",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="X15 Digital - Affordable Web Development & AI Automation for UK Businesses"
        description="Professional web development from £100 & AI automation from £50/month for UK businesses. Transparent pricing, 1-14 day delivery, you own everything. Based in London."
        keywords="web development UK, AI automation, website design London, affordable websites, small business web design, cheap web development, AI chatbots"
      />
      <ReviewSchema ratingValue="4.9" reviewCount="12" />
      <ScrollProgressBar />
      <Navigation />

      {/* Hero Section */}
      <section
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        <div className="max-w-7xl mx-auto text-center fade-in-section relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
            Affordable Web Development & AI Automation for UK Businesses
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-6 leading-tight">
            £300 Website. 5 Days. You Own Everything.
            <br />
            AI Automation from £50/Month
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            We offer professional web development & AI automation for UK and global businesses. Choose one service or
            both — transparent pricing, no surprises.
            <br />
            <br />
            Websites from £100. AI Automation from £50/month. Enterprise solutions for scaling businesses.
            <br />
            <br />
            No hidden fees. No sales games.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button
              size="lg"
              onClick={() => scrollToSection("web-preview")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform"
            >
              See Web Packages <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform"
            >
              <Link to="/services#ai-automation">
                AI Automation Solutions <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>

          <Link to="/enterprise" className="text-primary hover:underline inline-flex items-center gap-1">
            Enterprise Inquiry <ArrowRight className="h-4 w-4" />
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            {["UK-Wide Service", "1-14 Day Delivery", "24/7 AI Automation", "You Own Everything"].map((pill) => (
              <div key={pill} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                {pill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose X15 */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">Why Choose X15 Digital?</h2>
          <p className="text-center text-muted-foreground mb-12">
            We're not the cheapest. We're not the biggest. But here's what we are:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection staggerIndex={0}>
              <Card className="hover-lift">
                <CardHeader>
                  <DollarSign className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Transparent Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You see the cost before we talk. No "it depends." No surprise invoices. What you see is what you
                    pay.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection staggerIndex={1}>
              <Card className="hover-lift">
                <CardHeader>
                  <Zap className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Dual Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Web development (1-14 days) & AI automation that works 24/7. Complete digital solutions.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection staggerIndex={2}>
              <Card className="hover-lift">
                <CardHeader>
                  <MessageCircle className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Direct Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Work directly with our team. No account managers, no runaround. You get responses, not excuses.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Service Selector Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">What Do You Need?</h2>
          <p className="text-center text-muted-foreground mb-12">
            Choose the service that fits your business right now.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection staggerIndex={0} animation="slide">
              <Card className="hover-lift">
                <CardHeader className="text-center">
                  <Globe className="h-16 w-16 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl">Need a Website?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">From simple business sites to complex web applications.</p>
                  <p className="font-semibold text-lg mb-2">Packages from £100</p>
                  <p className="text-sm text-muted-foreground mb-4">Delivery: 1-14 days</p>
                  <p className="text-sm font-semibold mb-2">Perfect for:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                    <li>• New businesses</li>
                    <li>• Website redesigns</li>
                    <li>• Custom web apps</li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/services">
                      See Web Packages <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection staggerIndex={1} animation="slide">
              <Card className="hover-lift">
                <CardHeader className="text-center">
                  <Bot className="h-16 w-16 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl">Need AI Automation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    From customer support to sales automation, email outreach to workflow optimisation.
                  </p>
                  <p className="font-semibold text-lg mb-2">7+ AI Solutions Available</p>
                  <p className="text-sm text-muted-foreground mb-1">From £50/month</p>
                  <p className="text-sm text-muted-foreground mb-4">Setup: £200-£2,000</p>
                  <p className="text-sm font-semibold mb-2">Perfect for:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                    <li>• Existing websites</li>
                    <li>• Customer support</li>
                    <li>• 24/7 availability</li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/services#ai-automation">
                      See AI Solutions <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection staggerIndex={2} animation="slide">
              <Card className="hover-lift border-2 border-primary">
                <CardHeader className="text-center">
                  <div className="flex justify-center items-center gap-2 mb-4">
                    <Globe className="h-12 w-12 text-primary" />
                    <span className="text-2xl font-bold text-primary">+</span>
                    <Bot className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Need Both?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Website + AI automation working together seamlessly.</p>
                  <p className="font-semibold text-lg mb-2">Combined packages available</p>
                  <p className="text-sm text-muted-foreground mb-4">Save 10-15% vs separate</p>
                  <p className="text-sm font-semibold mb-2">Perfect for:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                    <li>• New launches</li>
                    <li>• Complete rebrand</li>
                    <li>• Digital upgrade</li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/services#combined-packages">
                      See Combined Packages <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Agency Comparison */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
            How We're Different from Typical Agencies
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left font-semibold">Feature</th>
                  <th className="p-4 text-left font-semibold">Typical Agency</th>
                  <th className="p-4 text-left font-semibold bg-primary/10">X15 Digital</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Price for basic site", "£3,000-£10,000", "£100-£1,200"],
                  ["Timeline", "4-12 weeks", "1-14 days"],
                  ["Who you work with", "Account manager", "Lead developer directly"],
                  ["Pricing transparency", '"Let\'s discuss your budget"', "All prices on website"],
                  ["AI automation", "Extra £5k+", "From £50/month"],
                  ["Monthly fees", "£50-200/month hosting", "£0 (you own it)"],
                  ["Revisions", "2-3 rounds max", "Unlimited until happy"],
                ].map(([feature, agency, x15], index) => (
                  <tr key={index} className="border-b border-border last:border-b-0">
                    <td className="p-4 font-medium">{feature}</td>
                    <td className="p-4 text-muted-foreground">{agency}</td>
                    <td className="p-4 bg-primary/5 font-semibold text-primary">{x15}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-muted-foreground mt-8 flex items-center justify-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            We keep costs low by using modern tools and working smart. You get professional results without agency
            overhead.
          </p>
        </div>
      </section>

      {/* Web Packages Preview */}
      <section id="web-preview" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">Web Development Packages</h2>
          <p className="text-center text-muted-foreground mb-12">
            One-time payment. You own everything. No monthly fees.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: DIY/Template - NEW */}
            <AnimatedSection staggerIndex={0} animation="scale">
              <Card className="hover-lift relative">
                <Badge className="absolute -top-3 right-4 bg-primary text-primary-foreground">🚀 FASTEST START</Badge>
                <CardHeader>
                  <CardTitle className="text-2xl">DIY/TEMPLATE</CardTitle>
                  <p className="text-3xl font-bold text-primary">£100 - £300</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>Optimised 1-page site OR landing page</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>Quick promotional page</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>Mobile responsive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>1 business day delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>Upgrade to Starter anytime</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Perfect for:</strong> Individuals, startups, micro-businesses
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/quick-start">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Card 2: Starter - UPDATED PRICING */}
            <AnimatedSection staggerIndex={1} animation="scale">
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl">STARTER</CardTitle>
                  <p className="text-3xl font-bold text-primary">£250 - £500</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>1-3 custom pages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>Mobile responsive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>Contact form</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>Basic SEO setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>1-3 days delivery</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Perfect for:</strong> Trades, freelancers, solo businesses
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/quick-start">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Card 3: Business - UPDATED PRICING - MOST POPULAR */}
            <AnimatedSection staggerIndex={2} animation="scale">
              <Card className="hover-lift border-2 border-primary relative">
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  <Star className="h-3 w-3 mr-1" /> MOST POPULAR
                </Badge>
                <CardHeader>
                  <CardTitle className="text-2xl">BUSINESS</CardTitle>
                  <p className="text-3xl font-bold text-primary">£750 - £1,800</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>4-10 pages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>Custom design & branding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>Contact + booking forms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>Full SEO package</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>5-10 days delivery</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Perfect for:</strong> Salons, consultants, small businesses
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/quick-start">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <div className="text-center mt-12 space-y-4">
            <p className="text-muted-foreground">
              Need something bigger?{" "}
              <Link to="/services#web-apps" className="text-primary hover:underline inline-flex items-center gap-1">
                See Web Application packages <ArrowRight className="h-4 w-4" />
              </Link>
            </p>
            <p className="text-muted-foreground">
              See all packages, add-ons & FAQ{" "}
              <Link to="/services" className="text-primary hover:underline inline-flex items-center gap-1">
                View full Services page <ArrowRight className="h-4 w-4" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* AI Automation Preview */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">AI Automation Solutions</h2>
          <p className="text-center text-muted-foreground mb-8">
            Stand-alone or integrated with your website.
            <br />
            Works with ANY website — yours or ours.
          </p>

          <div className="bg-white rounded-lg p-8 mb-12 text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-4">
              Your customer texts at 11 PM.
              <br />
              Your phone rings during dinner.
              <br />
              Your inbox has 47 unread emails.
            </p>
            <p className="text-xl font-semibold text-secondary mb-4">
              What if you had a digital assistant that works 24/7?
            </p>
            <p className="text-muted-foreground">
              Already have a website? Add AI automation.
              <br />
              Works with ANY website — yours or ours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover-lift border-2 border-primary relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                <Star className="h-3 w-3 mr-1" /> MOST POPULAR
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl">AI Chatbot</CardTitle>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Setup: £200-400</p>
                  <p className="text-sm text-muted-foreground">Monthly: £50-100</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-4">What It Does:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span>Answers FAQs instantly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span>Captures lead information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span>Qualifies customer needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span>Works 24/7, never sleeps</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Perfect For:</strong> Service businesses, e-commerce, consultants
                </p>
                <Button asChild className="w-full">
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-lift relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white">
                <Target className="h-3 w-3 mr-1" /> BEST FOR LOCAL BUSINESSES
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl">Voice Agent</CardTitle>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Setup: £400-800</p>
                  <p className="text-sm text-muted-foreground">Monthly: £100-200</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-4">What It Does:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span>Answers phone calls naturally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span>Books appointments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span>Takes messages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span>Handles after-hours inquiries</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Perfect For:</strong> Salons, clinics, offices with high call volume
                </p>
                <Button asChild className="w-full">
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              7+ AI Services Available: Sales Agents, Email Outreach, Social Media, Workflow Automation & More
            </p>
            <Button asChild size="lg">
              <Link to="/services#ai-automation">
                See All AI Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">How It Really Works</h2>
          <p className="text-center text-muted-foreground mb-12">
            From first contact to final delivery - no mystery, no runaround.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "You Tell Us What You Need",
                description: "Fill out a 2-minute form or WhatsApp us. We reply within 4 hours (usually faster).",
              },
              {
                step: "2",
                title: "We Send You a Clear Quote",
                description: 'Exact price, timeline, what\'s included. No "it depends" or sales calls.',
              },
              {
                step: "3",
                title: "We Build It",
                description: "You get progress updates. Unlimited revisions until you're happy.",
              },
              {
                step: "4",
                title: "You Own Everything",
                description: "All code, all files, all access. No monthly fees (unless you want AI automation).",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6 flex items-center justify-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Most websites delivered in 1-7 days. AI setups take 2-5 days.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">
            Built With Security in Mind
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Every website and AI system we build follows industry best practices for data protection and security.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>SSL Encryption</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  All sites include HTTPS for secure connections and encrypted data transfer.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <ClipboardCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>GDPR Ready</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Forms, cookies, and privacy policies setup included to keep you compliant.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Secure Hosting</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Hosted on enterprise-grade infrastructure with automatic backups and monitoring.
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-muted-foreground mt-12">
            Your customers' data stays safe. Your business stays compliant.
          </p>
        </div>
      </section>

      {/* Honest Stats */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">By The Numbers</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-primary">BUILDING</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold mb-2">Our First 10</p>
                <p className="text-2xl font-semibold mb-2">Projects</p>
                <p className="text-sm text-muted-foreground mt-4">(Yours Could Be Next!)</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-primary">PROMISE</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold mb-2">100% Money-Back</p>
                <p className="text-2xl font-semibold mb-2">Guarantee</p>
                <p className="text-sm text-muted-foreground mt-4">(No Risk, Just Results!)</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-primary">
                  &lt; <AnimatedCounter end={7} />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold mb-2">Days</p>
                <p className="text-2xl font-semibold mb-2">Avg Build</p>
                <p className="text-sm text-muted-foreground mt-4">(Typically)</p>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-muted-foreground mt-12 max-w-3xl mx-auto flex items-center justify-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            We're new, and we're honest about it. That means better prices for early clients and full attention to every
            project.
          </p>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">Recent Work & Capabilities</h2>
          <p className="text-center text-muted-foreground mb-12">See what we can build for your business.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Elite Salon Website",
                features: ["Professional booking system", "Mobile-responsive design", "Payment integration"],
                timeline: "5-7 days",
                tech: "React, Stripe, Calendly",
              },
              {
                title: "Trade Business Site",
                features: ["Service showcase", "Quote request form", "Local SEO optimisation"],
                timeline: "3-5 days",
                tech: "React, Tailwind, Tally",
              },
              {
                title: "AI Chatbot Integration",
                features: ["24/7 customer support", "Lead qualification", "Multi-platform (web + social)"],
                timeline: "2-4 days",
                tech: "OpenAI, Custom API",
              },
            ].map((project, index) => (
              <AnimatedSection key={index} staggerIndex={index} animation="fade">
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <Badge variant="secondary">Capability Example</Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-sm text-muted-foreground space-y-1 mb-4">
                      <p>
                        <strong>Timeline:</strong> {project.timeline}
                      </p>
                      <p>
                        <strong>Tech:</strong> {project.tech}
                      </p>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/portfolio">View Full Portfolio →</Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
            Recent Inquiries & Early Feedback
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialsCarousel testimonials={testimonials} />

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-4">Recent Project Inquiries:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Salon website + booking system (£450)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Trade business site with quote forms (£300)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">E-commerce site for local retail (£1,100)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">AI chatbot for property management (£350 setup)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Voice agent for clinic (£600 setup)</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong>Average response time:</strong> 3.2 hours
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Projects currently booking:</strong> 2-3 weeks out
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-xl mb-8 text-white/90">Get a free, transparent quote in under 4 hours.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-transform"
            >
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/services">See All Services</Link>
            </Button>
          </div>

          <p className="text-white/90 mb-2">
            Or WhatsApp us now:{" "}
            <a href="https://wa.me/447424062513" className="font-semibold hover:underline">
              +44 7424 062513
            </a>
          </p>
          <p className="text-sm text-white/80 flex items-center justify-center gap-2">
            <Zap className="h-4 w-4" />
            No sales calls. No pressure. Just clear answers.
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm text-muted-foreground mb-6">Built With Modern, Secure Technology</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-center">
              <p className="text-2xl font-bold">React</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">OpenAI</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">Stripe</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">Zapier</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">GDPR</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">SSL</p>
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6">
            We use industry-standard tools and follow security best practices
          </p>
        </div>
      </section>

      <Footer />
      <FloatingActionMenu />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;
