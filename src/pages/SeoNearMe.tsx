import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { FAQSchema } from "@/components/FAQSchema";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, CheckCircle, ArrowRight, Search, TrendingUp, Globe, BarChart3 } from "lucide-react";

const faqs = [
  {
    question: "How do I find a good SEO agency near me?",
    answer: "Look for an SEO agency with proven rankings, case studies, transparent reporting, and no black-hat techniques. L&D Digital is a London-based SEO agency with a track record of improving rankings for local businesses.",
  },
  {
    question: "How much does SEO cost in London?",
    answer: "London SEO agencies typically charge £500-£2,000/month. At L&D Digital, we offer SEO services from £300/month, making professional SEO accessible to small and medium businesses.",
  },
  {
    question: "How long does SEO take to show results?",
    answer: "SEO typically takes 3-6 months to show significant results. You may see initial improvements within 4-8 weeks, but sustainable rankings require ongoing optimization. We provide monthly reports so you can track progress.",
  },
  {
    question: "What does local SEO include?",
    answer: "Local SEO includes: Google Business Profile optimization, local keyword targeting, citation building, review management, local content creation, and location-specific on-page optimization. These help you rank for 'near me' searches.",
  },
  {
    question: "Why is local SEO important for my business?",
    answer: "46% of Google searches have local intent. Local SEO helps you appear in 'near me' searches, Google Maps, and local pack results. For London businesses, ranking locally can significantly increase foot traffic and leads.",
  },
];

const SeoNearMe = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="SEO Agency Near Me London | Local SEO Services | L&D Digital"
        description="Looking for an SEO agency near me in London? L&D Digital offers professional SEO services from £300/month. Local SEO, technical SEO, and content optimization."
        keywords="SEO agency near me, SEO services london, local SEO near me, SEO company london, search engine optimization near me, SEO consultant london"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/seo-agency-near-me"
      />
      <FAQSchema faqs={faqs} pageId="seo-near-me" />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">London SEO Experts</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              SEO Agency <span className="text-primary">Near Me</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Looking for an SEO agency near you in London? L&D Digital helps UK businesses rank higher on Google with proven SEO strategies from £300/month.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a
                  href="https://wa.me/447356260648?text=Hi%2C%20I%27m%20interested%20in%20your%20SEO%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Free SEO Audit <ArrowRight className="ml-2 h-4 w-4" />
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
              Our SEO Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive SEO solutions to help your London business rank higher and attract more customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Local SEO", price: "300", icon: MapPin, desc: "Rank in local searches" },
              { name: "Technical SEO", price: "400", icon: Globe, desc: "Site optimization" },
              { name: "Content SEO", price: "350", icon: Search, desc: "Keyword-rich content" },
              { name: "SEO Reporting", price: "included", icon: BarChart3, desc: "Monthly analytics" },
            ].map((service) => (
              <div
                key={service.name}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
              >
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-1">{service.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{service.desc}</p>
                <p className="text-2xl font-bold text-primary">
                  {service.price === "included" ? "Included" : `From £${service.price}`}
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
                Why Choose Our SEO Services?
              </h2>
              <ul className="space-y-4">
                {[
                  "White-hat SEO techniques only",
                  "Local London market expertise",
                  "Transparent monthly reporting",
                  "No long-term contracts",
                  "Proven ranking improvements",
                  "Google Business Profile optimization",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">SEO Results</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-primary">Top 10</p>
                  <p className="text-sm text-muted-foreground">Google Rankings</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">200%</p>
                  <p className="text-sm text-muted-foreground">Traffic Increase</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">£300</p>
                  <p className="text-sm text-muted-foreground">Starting Price</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">3-6</p>
                  <p className="text-sm text-muted-foreground">Months to Results</p>
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
              Ready to Rank Higher on Google?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Get a free SEO audit today. We'll show you exactly what's holding your website back and how to fix it.
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
                <Link to="/services/seo">Learn More</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default SeoNearMe;
