import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { FAQSchema } from "@/components/FAQSchema";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, CheckCircle, ArrowRight, Globe, Zap, Shield, Star } from "lucide-react";

const serviceAreas = [
  "Stratford (E15, E20)",
  "Ilford (IG1-IG6)",
  "Leyton (E10, E11)",
  "East Ham (E6, E7)",
  "Manor Park (E12)",
  "Newham (E6, E7, E12, E13, E16)",
  "Plaistow (E13, E16)",
  "Barking (IG11, RM8-RM10)",
  "Walthamstow (E17)",
  "Hackney (E5, E8, E9)",
  "Bethnal Green (E2, E3)",
  "Shoreditch (EC2, N1)",
  "Tower Hamlets (E1, E14)",
  "Greenwich (SE3, SE7, SE8, SE10, SE18)",
];

const faqs = [
  {
    question: "How do I find a reliable web developer near me?",
    answer: "Look for a local web developer with a proven portfolio, transparent pricing, and positive reviews. L&D Digital is based in East London and serves businesses across all London boroughs. We offer free consultations, fixed pricing from £200, and 1-14 day delivery.",
  },
  {
    question: "How much does a web developer near me charge?",
    answer: "Web development costs vary widely. In London, freelancers charge £30-100/hour, while agencies charge £50-200/hour. At L&D Digital, we offer fixed-price packages starting from £200 for a complete website, with no hidden costs.",
  },
  {
    question: "What should I look for in a local web developer?",
    answer: "Key factors include: relevant portfolio examples, clear communication, transparent pricing, responsive design capabilities, SEO knowledge, and ongoing support options. Check reviews and ask for references from local businesses.",
  },
  {
    question: "Why choose a local web developer over a remote one?",
    answer: "Local developers understand your market, can meet in person, offer quicker communication, and are in the same timezone. For London businesses, working with a London-based developer like L&D Digital means we understand UK business requirements and local SEO.",
  },
  {
    question: "Do you offer web development services near me in London?",
    answer: "Yes! L&D Digital serves all of East London including Stratford, Ilford, Hackney, Shoreditch, Greenwich, and surrounding areas. We also work with clients across London and the UK remotely.",
  },
];

const WebDeveloperNearMe = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Web Developer Near Me London | Local Website Designer | L&D Digital"
        description="Looking for a web developer near me in London? L&D Digital offers professional website design from £200. Fast 1-14 day delivery. Serving East London and all UK."
        keywords="web developer near me, web designer near me, website developer london, local web developer, web design near me, website designer near me london"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/web-developer-near-me"
      />
      <FAQSchema faqs={faqs} pageId="web-developer-near-me" />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">Based in East London</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Web Developer <span className="text-primary">Near Me</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Looking for a professional web developer near you in London? L&D Digital creates stunning, fast-loading websites from just £200. Delivered in 1-14 days.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a
                  href="https://wa.me/447356260648?text=Hi%2C%20I%27m%20looking%20for%20a%20web%20developer%20near%20me"
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

      {/* What We Offer */}
      <section className="py-16 bg-muted/30">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Local Web Development Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              As your local London web developer, we offer comprehensive digital solutions to help your business succeed online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Website Design", price: "200", icon: Globe, desc: "Custom responsive websites" },
              { name: "Ecommerce Stores", price: "200", icon: Zap, desc: "Sell products online" },
              { name: "AI Chatbots", price: "50/month", icon: Shield, desc: "24/7 customer support" },
              { name: "SEO Services", price: "300", icon: Star, desc: "Rank higher on Google" },
            ].map((service) => (
              <div
                key={service.name}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
              >
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-1">{service.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{service.desc}</p>
                <p className="text-2xl font-bold text-primary">
                  From £{service.price}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Local */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose a Local Web Developer?
              </h2>
              <ul className="space-y-4">
                {[
                  "Face-to-face meetings available",
                  "Deep understanding of London market",
                  "Same timezone for quick communication",
                  "Support UK businesses and economy",
                  "Local SEO expertise",
                  "Quick turnaround times",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">L&D Digital at a Glance</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-primary">£200</p>
                  <p className="text-sm text-muted-foreground">Starting Price</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">1-14</p>
                  <p className="text-sm text-muted-foreground">Days Delivery</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">Projects Done</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-muted-foreground">WhatsApp Support</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-muted/30">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Areas We Serve
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Based in East London, we serve businesses across the following areas and beyond:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm"
              >
                {area}
              </span>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/areas">View All Service Areas</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
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

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work With a Local Web Developer?
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

export default WebDeveloperNearMe;
