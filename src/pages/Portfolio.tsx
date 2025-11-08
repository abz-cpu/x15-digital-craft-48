import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Bot, ShoppingBag, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { SEO } from "@/components/SEO";

type FilterType = "all" | "web" | "ecommerce" | "webapp" | "ai";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
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

  const portfolioItems = [
    {
      id: 1,
      title: "Elite Salon & Spa",
      category: "web" as FilterType,
      type: "Web Development",
      features: [
        "Professional booking system",
        "Mobile-responsive design",
        "Automated appointment reminders",
        "Payment integration (Stripe)",
        "Gallery showcase",
        "Google Maps integration",
      ],
      timeline: "5-7 days",
      tech: "React, Stripe, Calendly",
      image: "salon",
    },
    {
      id: 2,
      title: "Premium Plumbing Services",
      category: "web" as FilterType,
      type: "Web Development",
      features: [
        "Service showcase pages",
        "Emergency contact system",
        "Quote request form",
        "Before/after gallery",
        "Local SEO optimisation",
        "Mobile-first design",
      ],
      timeline: "3-5 days",
      tech: "React, Tailwind, Tally Forms",
      image: "plumbing",
    },
    {
      id: 3,
      title: "Boutique Fashion Store",
      category: "ecommerce" as FilterType,
      type: "E-commerce",
      features: [
        "Product catalog (50+ items)",
        "Shopping cart & checkout",
        "Payment processing (Stripe)",
        "Inventory management",
        "Customer accounts",
        "Order tracking",
      ],
      timeline: "10-14 days",
      tech: "React, Stripe, Supabase",
      image: "fashion",
    },
    {
      id: 4,
      title: "Customer Support Chatbot",
      category: "ai" as FilterType,
      type: "AI Automation",
      features: [
        "24/7 automated responses",
        "Lead capture & qualification",
        "Multi-platform integration",
        "Custom training on business FAQs",
        "Email/SMS notifications",
        "Analytics dashboard",
      ],
      timeline: "3-5 days",
      tech: "OpenAI, Custom API",
      image: "chatbot",
    },
    {
      id: 5,
      title: "Business Consultancy",
      category: "web" as FilterType,
      type: "Web Development",
      features: [
        "Professional landing page",
        "Service packages showcase",
        "Testimonials section",
        "Contact + booking forms",
        "Blog for thought leadership",
        "SEO optimisation",
      ],
      timeline: "5-7 days",
      tech: "React, Tailwind, Tally",
      image: "consultancy",
    },
    {
      id: 6,
      title: "Appointment Booking Platform",
      category: "webapp" as FilterType,
      type: "Web Application",
      features: [
        "User authentication",
        "Calendar sync integration",
        "Payment processing",
        "Email/SMS reminders",
        "Admin dashboard",
        "Analytics & reporting",
      ],
      timeline: "4-6 weeks",
      tech: "React, Node.js, PostgreSQL",
      image: "booking",
    },
    {
      id: 7,
      title: "AI Receptionist (Voice Agent)",
      category: "ai" as FilterType,
      type: "AI Automation",
      features: [
        "Natural phone conversation AI",
        "Appointment booking automation",
        "Call routing & transfers",
        "Message taking system",
        "Calendar integration",
        "Call transcripts & analytics",
      ],
      timeline: "5-7 days",
      tech: "Twilio, OpenAI, Custom AI",
      image: "voice",
    },
    {
      id: 8,
      title: "Restaurant & Takeaway",
      category: "ecommerce" as FilterType,
      type: "Web Development + E-commerce",
      features: [
        "Online menu system",
        "Order & delivery integration",
        "Table reservation system",
        "Payment processing",
        "Customer reviews",
        "Mobile ordering app",
      ],
      timeline: "10-14 days",
      tech: "React, Stripe, Google Maps",
      image: "restaurant",
    },
    {
      id: 9,
      title: "Sales & Lead Automation",
      category: "ai" as FilterType,
      type: "AI Automation",
      features: [
        "Automated lead generation",
        "Email outreach sequences",
        "CRM integration (HubSpot)",
        "Lead scoring system",
        "Follow-up automation",
        "Performance analytics",
      ],
      timeline: "7-10 days",
      tech: "Zapier, Make, OpenAI",
      image: "sales",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const filters = [
    { id: "all" as FilterType, label: "All", icon: Globe },
    { id: "web" as FilterType, label: "Web Dev", icon: Globe },
    { id: "ecommerce" as FilterType, label: "E-commerce", icon: ShoppingBag },
    { id: "webapp" as FilterType, label: "Web Apps", icon: Code },
    { id: "ai" as FilterType, label: "AI Automation", icon: Bot },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Portfolio - Our Recent Work | X15 Digital"
        description="View our portfolio of web development projects, e-commerce sites, web apps, and AI automation implementations. Real examples of websites and AI solutions for UK businesses."
        keywords="web development portfolio, AI automation examples, website showcase, web design examples UK"
      />
      <ScrollProgressBar />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto text-center fade-in-section">
          <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
            Recent Work & Capabilities
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what we can build for your business. Most projects are capability
            examples showing our work - real client projects coming soon.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-40 py-4 px-4 sm:px-6 lg:px-8 bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={
                  activeFilter === filter.id
                    ? "bg-primary text-primary-foreground"
                    : "border-primary text-primary hover:bg-primary/10"
                }
              >
                <filter.icon className="h-4 w-4 mr-2" />
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="hover-lift fade-in-section">
                <div className="h-48 bg-muted rounded-t-lg flex items-center justify-center">
                  {item.category === "ai" ? (
                    <Bot className="h-24 w-24 text-primary" />
                  ) : item.category === "ecommerce" ? (
                    <ShoppingBag className="h-24 w-24 text-primary" />
                  ) : item.category === "webapp" ? (
                    <Code className="h-24 w-24 text-primary" />
                  ) : (
                    <Globe className="h-24 w-24 text-primary" />
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Capability Example</Badge>
                    <Badge variant="outline">{item.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-3">What We Built:</p>
                  <ul className="space-y-2 mb-4 text-sm">
                    {item.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                  <div className="text-sm text-muted-foreground space-y-1 mb-4">
                    <p>
                      <strong>Timeline:</strong> {item.timeline}
                    </p>
                    <p>
                      <strong>Technology:</strong> {item.tech}
                    </p>
                  </div>
                  <div className="bg-muted p-3 rounded-lg mb-4">
                    <p className="text-xs text-muted-foreground flex items-start gap-2">
                      <Globe className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      This is a capability demonstration showing what we can build for
                      your business.
                    </p>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">
                      Interested in something similar? Get a quote{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No projects found for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Project?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss your requirements and create something great.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-transform"
            >
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link to="/services">See All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Portfolio;
