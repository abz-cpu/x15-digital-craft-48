import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Heart, Briefcase, ShoppingBag, CheckCircle2, Target, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import { FAQSchema } from "@/components/FAQSchema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const sectors = [
  { 
    name: "Property Websites", 
    path: "/sectors/property", 
    desc: "Estate agents, property developers, and letting agencies need websites that showcase listings beautifully and generate qualified leads.",
    icon: Building2,
    features: ["Property listing integration", "Lead capture forms", "Virtual tour support", "SEO for local searches"],
    stats: "80% of buyers start their property search online"
  },
  { 
    name: "Charity Websites", 
    path: "/sectors/charity", 
    desc: "Non-profits, charities, and community organizations need compelling websites that tell their story and encourage donations.",
    icon: Heart,
    features: ["Donation integration", "Event management", "Volunteer signups", "Impact storytelling"],
    stats: "Online donations grew 42% in the last 3 years"
  },
  { 
    name: "B2B Websites", 
    path: "/sectors/b2b", 
    desc: "Professional services and B2B companies need websites that build credibility and generate high-quality leads for longer sales cycles.",
    icon: Briefcase,
    features: ["Lead generation focus", "Case study showcases", "Service explainers", "Trust-building content"],
    stats: "70% of B2B buyers research online before contacting"
  },
  { 
    name: "B2C Websites", 
    path: "/sectors/b2c", 
    desc: "Consumer-focused businesses need fast, mobile-friendly websites that drive immediate action and sales.",
    icon: ShoppingBag,
    features: ["E-commerce ready", "Mobile-first design", "Fast checkout flows", "Customer reviews"],
    stats: "53% of mobile users leave slow websites"
  },
  { 
    name: "POS Systems", 
    path: "/sectors/pos-systems", 
    desc: "Square POS setup for restaurants, retail, salons, and trades. No contracts, hardware ownership, local support.",
    icon: CreditCard,
    features: ["Restaurants & hospitality", "Retail & shops", "Salons & beauty", "Trades & services"],
    stats: "Save £3,500+ vs legacy EPOS systems"
  },
];

const sectorFaqs = [
  {
    question: "Do you specialize in websites for specific industries?",
    answer: "Yes, we have deep experience in property, charity, B2B, and B2C sectors. This means we understand the unique challenges, user expectations, and conversion strategies for each industry. We apply proven patterns while customizing to your brand."
  },
  {
    question: "Can you integrate with industry-specific tools?",
    answer: "Absolutely. We integrate with property portals like Rightmove and Zoopla, donation platforms like JustGiving, CRM systems, booking tools, and e-commerce platforms. We ensure your website works seamlessly with your existing workflow."
  },
  {
    question: "How do you ensure my website converts visitors into customers?",
    answer: "We apply conversion rate optimization (CRO) principles specific to your industry. This includes strategic call-to-action placement, trust signals, clear value propositions, and user journey optimization based on sector benchmarks."
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Yes, we offer maintenance packages from £25/month that include security updates, performance monitoring, content updates, and priority support. This keeps your website secure and performing well long-term."
  },
  {
    question: "How long does it take to build a sector-specific website?",
    answer: "Timelines vary based on complexity: simple sites take 1-2 weeks, multi-page business sites 2-4 weeks, and complex e-commerce or property portals 4-8 weeks. We'll give you a clear timeline during our initial consultation."
  },
];

const Sectors = () => (
  <div className="min-h-screen flex flex-col">
    <SEO 
      title="Industry Sector Websites | Property, Charity, B2B, B2C | L&D Digital" 
      description="Specialized website design for property, charity, B2B, and B2C sectors. Industry expertise that delivers higher conversions and better results for your business."
      keywords="property website design UK, charity website developer, B2B website agency, ecommerce website London, sector specialist web design"
      canonicalUrl="https://digital.luminousanddeliver.co.uk/sectors"
    />
    <FAQSchema faqs={sectorFaqs} pageId="sectors" />
    <Navigation darkHero />
    
    <main className="flex-1">
      {/* Hero */}
      <section className="pt-40 pb-16 md:pt-44 md:pb-20 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <Container className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Industry-Specific Website Expertise
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            We don't just build websites — we build websites that work for your specific industry. Our sector expertise means faster launches, higher conversions, and better ROI.
          </p>
        </Container>
      </section>
      
      <BreadcrumbNav />

      {/* Our Approach */}
      <section className="py-12 md:py-16 bg-background">
        <Container>
          <AnimatedSection animation="fade">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Why Sector Expertise Matters
              </h2>
              <p className="text-lg text-muted-foreground">
                A website that works for a restaurant won't work for an estate agent. Each industry has unique user expectations, conversion patterns, and technical requirements. Our sector specialization means you get a website built on proven patterns that actually work.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { title: "Industry Benchmarks", desc: "We know what converts in your sector" },
                { title: "Proven Patterns", desc: "Skip the guesswork with tested approaches" },
                { title: "Tool Integrations", desc: "We work with your industry-specific software" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                  <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Sector Cards */}
      <section className="py-12 md:py-16 bg-muted">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {sectors.map((s, index) => (
              <AnimatedSection key={s.path} animation="scale" staggerIndex={index}>
                <Card className="hover-lift h-full">
                  <CardContent className="p-6">
                    <s.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-secondary mb-2">{s.name}</h3>
                    <p className="text-muted-foreground mb-4">{s.desc}</p>
                    
                    <p className="text-xs font-semibold text-primary mb-3">{s.stats}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {s.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild variant="outline" className="w-full">
                      <Link to={s.path}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-background">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {sectorFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Build a Website That Works for Your Industry?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's discuss your specific needs and show you examples from your sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-background text-primary hover:bg-muted">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
    
    <Footer />
  </div>
);

export default Sectors;