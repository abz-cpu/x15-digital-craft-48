import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { FAQSchema } from "@/components/FAQSchema";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, CheckCircle, ArrowRight, TrendingUp, Target, BarChart3, Users } from "lucide-react";

const faqs = [
  {
    question: "What services does a digital marketing agency near me offer?",
    answer: "A full-service digital marketing agency like L&D Digital offers SEO, PPC advertising, social media marketing, content marketing, email marketing, and conversion rate optimization. We tailor strategies specifically for London and UK businesses.",
  },
  {
    question: "How much does a digital marketing agency in London charge?",
    answer: "London digital marketing agencies typically charge £500-£5,000/month depending on services. L&D Digital offers competitive packages starting from £500/month for comprehensive digital marketing, or individual services like SEO from £300.",
  },
  {
    question: "How do I choose the right digital marketing agency near me?",
    answer: "Look for an agency with: proven results and case studies, transparent pricing, local market knowledge, clear communication, and services that match your needs. Always ask for references from similar businesses.",
  },
  {
    question: "What results can I expect from digital marketing?",
    answer: "Results vary by industry and competition, but you can expect: increased website traffic within 1-3 months, improved search rankings within 3-6 months, and measurable ROI within 6-12 months. We provide monthly reports tracking all key metrics.",
  },
  {
    question: "Do you offer digital marketing services near me in London?",
    answer: "Yes! L&D Digital is based in East London and serves businesses across all London boroughs and the UK. We combine local market expertise with proven digital marketing strategies to help your business grow.",
  },
];

const DigitalMarketingNearMe = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Digital Marketing Agency Near Me London | Local Marketing | L&D Digital"
        description="Looking for a digital marketing agency near me in London? L&D Digital offers SEO, PPC, social media marketing from £500/month. Proven results for UK businesses."
        keywords="digital marketing agency near me, marketing agency london, local digital marketing, SEO agency near me, PPC agency london, social media marketing near me"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/digital-marketing-agency-near-me"
      />
      <FAQSchema faqs={faqs} pageId="digital-marketing-near-me" />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">London-Based Agency</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Digital Marketing Agency <span className="text-primary">Near Me</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Looking for a results-driven digital marketing agency near you in London? L&D Digital helps UK businesses grow with SEO, PPC, and social media marketing.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a
                  href="https://wa.me/447356260648?text=Hi%2C%20I%27m%20looking%20for%20digital%20marketing%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Get a Free Audit <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted/30">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Digital Marketing Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored for London and UK businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "SEO Services", price: "300", icon: TrendingUp, desc: "Rank higher on Google" },
              { name: "PPC Advertising", price: "500", icon: Target, desc: "Targeted paid campaigns" },
              { name: "Social Media", price: "400", icon: Users, desc: "Grow your audience" },
              { name: "Analytics & CRO", price: "300", icon: BarChart3, desc: "Data-driven growth" },
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

      {/* Why Choose Us */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose L&D Digital?
              </h2>
              <ul className="space-y-4">
                {[
                  "Data-driven marketing strategies",
                  "Transparent monthly reporting",
                  "Local London market expertise",
                  "Proven track record of results",
                  "No long-term contracts required",
                  "Dedicated account manager",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Our Results</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-primary">150%</p>
                  <p className="text-sm text-muted-foreground">Avg Traffic Increase</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">3x</p>
                  <p className="text-sm text-muted-foreground">ROI Improvement</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">Clients Served</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">4.9</p>
                  <p className="text-sm text-muted-foreground">Client Rating</p>
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

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Get a free digital marketing audit. We'll analyze your current presence and show you exactly how to improve.
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
                <Link to="/contact">Request Audit</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalMarketingNearMe;
