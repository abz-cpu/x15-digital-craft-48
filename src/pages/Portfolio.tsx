import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Bot, ShoppingBag, Code } from "lucide-react";
import x15Screenshot from "@/assets/x15pcbuilders-screenshot.png";
import salonImage from "@/assets/portfolio-salon.png";
import plumbingImage from "@/assets/portfolio-plumbing.png";
import fashionImage from "@/assets/portfolio-fashion.png";
import chatbotImage from "@/assets/portfolio-chatbot.png";
import consultancyImage from "@/assets/portfolio-consultancy.png";
import bookingImage from "@/assets/portfolio-booking.png";
import voiceImage from "@/assets/portfolio-voice.png";
import restaurantImage from "@/assets/portfolio-restaurant.png";
import salesImage from "@/assets/portfolio-sales.png";
import { Button } from "@/components/ui/button";
import { PortfolioModal } from "@/components/PortfolioModal";
import { X15CaseStudyModal } from "@/components/X15CaseStudyModal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import CtaCard from "@/components/CtaCard";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

type FilterType = "all" | "web" | "ecommerce" | "webapp" | "ai";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [showX15CaseStudy, setShowX15CaseStudy] = useState(false);
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
      { threshold: 0.05, rootMargin: "50px" },
    );

    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => observerRef.current?.observe(section));

    return () => observerRef.current?.disconnect();
  }, [activeFilter]);

  const portfolioImages: Record<string, string> = {
    pcbuilder: x15Screenshot,
    salon: salonImage,
    plumbing: plumbingImage,
    fashion: fashionImage,
    chatbot: chatbotImage,
    consultancy: consultancyImage,
    booking: bookingImage,
    voice: voiceImage,
    restaurant: restaurantImage,
    sales: salesImage,
  };

  const portfolioItems = [
    {
      id: 0,
      title: "X15 PC Builders",
      category: "web" as FilterType,
      type: "Web Development",
      features: [
        "Professional showcase website",
        "Service packages display",
        "Build request form",
        "Responsive mobile design",
        "Fast loading performance",
        "SEO optimization",
      ],
      timeline: "Live Project",
      tech: "React, Tailwind CSS",
      image: "pcbuilder",
      isLive: true,
      liveUrl: "https://x15pcbuilders.com/",
    },
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
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter);

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
      <BreadcrumbNav />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto text-center fade-in-section">
          <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-6">Recent Work & Capabilities</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what we can build for your business. Most projects are capability examples showing our work - real
            client projects coming soon.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-40 py-4 px-4 sm:px-6 lg:px-8 bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? "default" : "outline"}
                size="sm"
                className={`text-xs sm:text-sm ${
                  activeFilter === filter.id
                    ? "bg-primary text-primary-foreground"
                    : "border-primary text-primary hover:bg-primary/10"
                }`}
              >
                <filter.icon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="hover-lift fade-in-section">
                <div 
                  className="h-48 bg-muted rounded-t-lg flex items-center justify-center relative overflow-hidden group cursor-pointer"
                  onClick={() => item.id === 0 ? setShowX15CaseStudy(true) : setSelectedProject(item)}
                >
                  {item.isLive && (
                    <Badge className="absolute top-3 right-3 bg-green-500 text-white z-10">LIVE</Badge>
                  )}
                  {item.image && portfolioImages[item.image] ? (
                    <img 
                      src={portfolioImages[item.image]} 
                      alt={`${item.title} Website Mockup`} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : item.category === "ai" ? (
                    <Bot className="h-24 w-24 text-primary transition-transform duration-300 group-hover:scale-110" />
                  ) : item.category === "ecommerce" ? (
                    <ShoppingBag className="h-24 w-24 text-primary transition-transform duration-300 group-hover:scale-110" />
                  ) : item.category === "webapp" ? (
                    <Code className="h-24 w-24 text-primary transition-transform duration-300 group-hover:scale-110" />
                  ) : (
                    <Globe className="h-24 w-24 text-primary transition-transform duration-300 group-hover:scale-110" />
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                      Click to view details
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant={item.isLive ? "default" : "secondary"}>
                      {item.isLive ? "Live Client Project" : "Capability Example"}
                    </Badge>
                    <Badge variant="outline">{item.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-3">{item.isLive ? "What We Built:" : "What We Can Build:"}</p>
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
                  {item.isLive ? (
                    <>
                      <div className="bg-primary/10 p-3 rounded-lg mb-4">
                        <p className="text-xs text-foreground flex items-start gap-2">
                          <Globe className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          Live client project - built and deployed by X15 Digital
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button asChild variant="default" className="flex-1">
                          <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                            View Live Site <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                        <Button asChild variant="outline" className="flex-1">
                          <Link to="/contact">Get Quote</Link>
                        </Button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-muted p-3 rounded-lg mb-4">
                        <p className="text-xs text-muted-foreground flex items-start gap-2">
                          <Globe className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          This is a capability demonstration showing what we can build for your business.
                        </p>
                      </div>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/contact">
                          Interested in something similar? Get a quote <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>

      <CtaCard />

      <Footer />
      <WhatsAppWidget />
      
      {/* Modals */}
      {selectedProject && (
        <PortfolioModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
          imageSrc={portfolioImages[selectedProject.image]}
        />
      )}
      
      <X15CaseStudyModal
        isOpen={showX15CaseStudy}
        onClose={() => setShowX15CaseStudy(false)}
      />
    </div>
  );
};

export default Portfolio;
