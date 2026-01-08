import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { FAQSchema } from "@/components/FAQSchema";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, CheckCircle, ArrowRight, Globe, Zap, Shield, Star } from "lucide-react";

interface LocationData {
  name: string;
  slug: string;
  postcodes: string[];
  description: string;
  nearbyAreas: { name: string; slug: string }[];
}

interface LocationPageTemplateProps {
  location: LocationData;
}

const services = [
  { name: "Website Design", price: "200", icon: Globe },
  { name: "Ecommerce Stores", price: "200", icon: Zap },
  { name: "AI Chatbots", price: "50/month", icon: Shield },
  { name: "SEO Services", price: "300", icon: Star },
];

export const LocationPageTemplate = ({ location }: LocationPageTemplateProps) => {
  const faqs = [
    {
      question: `How much does a website cost in ${location.name}?`,
      answer: `Our websites for ${location.name} businesses start from just £200. This includes responsive design, SEO optimization, and hosting setup. Ecommerce stores and advanced features may have additional costs.`,
    },
    {
      question: `How long does it take to build a website in ${location.name}?`,
      answer: `We deliver most websites in 1-14 days. Simple landing pages can be ready in 1-3 days, while full ecommerce stores typically take 7-14 days. We serve all ${location.postcodes.join(", ")} postcodes.`,
    },
    {
      question: `Do you offer SEO services in ${location.name}?`,
      answer: `Yes! We provide comprehensive SEO services for ${location.name} businesses from £300. This includes local SEO to help you rank for "${location.name}" searches, keyword optimization, and Google Business Profile setup.`,
    },
    {
      question: `Can you help my ${location.name} business with AI automation?`,
      answer: `Absolutely. We offer AI chatbots from £50/month and AI receptionist services for ${location.name} businesses. These tools can handle customer inquiries 24/7, saving you time and improving customer service.`,
    },
    {
      question: `Why choose L&D Digital for my ${location.name} business?`,
      answer: `We're a London-based agency with deep knowledge of East London markets. We understand ${location.name} businesses, offer competitive pricing, fast delivery, and ongoing support. Plus, we're just a WhatsApp message away!`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`Web Developer ${location.name} | Website Design ${location.postcodes[0]} | L&D Digital`}
        description={`Professional web development and digital marketing for ${location.name} businesses. Websites from £200, AI chatbots, SEO services. Serving ${location.postcodes.join(", ")} postcodes. Fast delivery 1-14 days.`}
        keywords={`web developer ${location.name}, website design ${location.postcodes[0]}, digital marketing ${location.name}, SEO ${location.name}, web design ${location.postcodes.join(" ")}`}
        canonicalUrl={`https://digital.luminousanddeliver.co.uk/areas/${location.slug}`}
      />
      <FAQSchema faqs={faqs} pageId={`area-${location.slug}`} />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">Serving {location.postcodes.join(", ")}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Web Developer in{" "}
              <span className="text-primary">{location.name}</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {location.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a
                  href="https://wa.me/447356260648?text=Hi%2C%20I%27m%20from%20${encodeURIComponent(location.name)}%20and%20I%27m%20interested%20in%20your%20web%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/30">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services in {location.name}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions for {location.name} businesses. From websites to AI automation, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
              >
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                <p className="text-2xl font-bold text-primary">
                  From £{service.price}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why {location.name} Businesses Choose L&D Digital
              </h2>
              <ul className="space-y-4">
                {[
                  "Local expertise in East London markets",
                  "Fast delivery in 1-14 days",
                  "Affordable pricing from £200",
                  "24/7 WhatsApp support",
                  "SEO-optimized websites",
                  "AI-powered automation tools",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">Projects Delivered</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">1-14</p>
                  <p className="text-sm text-muted-foreground">Days Delivery</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">£200</p>
                  <p className="text-sm text-muted-foreground">Starting Price</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-muted-foreground">Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 border border-border"
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Nearby Areas */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold text-center mb-8">
            Also Serving Nearby Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {location.nearbyAreas.map((area) => (
              <Link
                key={area.slug}
                to={`/areas/${area.slug}`}
                className="px-4 py-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Grow Your {location.name} Business?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Get a free quote today. No obligations, just honest advice on how we can help your business succeed online.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <a
                  href="https://wa.me/447356260648"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-5 w-5" />
                  WhatsApp Us Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/contact">Contact Form</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default LocationPageTemplate;
