import { SEO } from "@/components/SEO";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AreasFooter } from "@/components/AreasFooter";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Globe, Clock, PoundSterling, Award, BookOpen, Layers } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { 
    question: "How much does a website design cost in London?", 
    answer: "Website design costs in London typically range from £200 to £15,000+ depending on complexity. At L&D Digital, we offer professional websites from £200 with transparent pricing. View our complete pricing on our web packages page." 
  },
  { 
    question: "What is the best web design agency in London?", 
    answer: "The best web design agency depends on your needs, budget, and project requirements. L&D Digital specialises in fast-turnaround, affordable websites for small businesses across London and East London areas including Stratford, Ilford, and Hackney." 
  },
  { 
    question: "How long does it take to build a website in London?", 
    answer: "Template-based sites can be ready in 1-3 days, custom websites typically take 7-14 days. We specialise in rapid delivery, completing most projects within 1-14 days." 
  },
  { 
    question: "Do I need a London-based web designer?", 
    answer: "While not essential, working with a London-based designer offers advantages: face-to-face meetings, understanding of the local market, and same timezone communication. We're based in East London and serve the entire capital." 
  },
  { 
    question: "What should I look for in a web design agency UK?", 
    answer: "Key factors include: a strong portfolio, transparent pricing, clear communication, mobile-responsive designs, SEO knowledge, post-launch support, and positive testimonials. Read our comprehensive FAQ for more guidance." 
  }
];

const WebDesignAgencyLondon = () => {
  return (
    <>
      <SEO
        title="Web Design Agency London | Websites from £200 | L&D Digital"
        description="L&D Digital is a Stratford, East London web design agency building fast, conversion-focused websites and ecommerce stores from £200. 1–14 day delivery, UK-based team."
        canonicalUrl="https://digital.luminousanddeliver.co.uk/web-design-agency-london"
        keywords="web design agency London, web design East London, web design Stratford, website design London, best web design agency London, web design agency UK"
      />
      <FAQSchema faqs={faqs} pageId="web-design-agency-london" />
      
      <Navigation />
      <BreadcrumbNav />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">London's Trusted Web Design Agency</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Web Design Agency London: Professional Websites from £200</h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">We're L&D Digital, a London-based web design agency creating stunning, high-converting websites for businesses across the UK.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg"><Link to="/contact">Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
                <Button asChild variant="outline" size="lg"><Link to="/portfolio">View Our Work</Link></Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-muted/30">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why London Businesses Choose Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Unlike traditional agencies charging £5,000+, we deliver professional websites at accessible prices without compromising on quality or speed.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: PoundSterling, title: "From £200", description: "Professional websites at small business-friendly prices" },
                { icon: Clock, title: "1-14 Days", description: "Rapid delivery without sacrificing quality" },
                { icon: Globe, title: "SEO-Optimised", description: "Built to rank on Google from day one" },
                { icon: Award, title: "UK-Based Team", description: "Real people, real communication, real results" }
              ].map((feature, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border hover:border-primary/50 transition-colors h-full">
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Web Design Services We Offer in London</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">From simple brochure sites to complex ecommerce platforms, we create websites that drive business growth.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Business Websites", description: "Professional brochure sites that establish credibility and convert visitors into customers.", features: ["Mobile-responsive design", "Contact forms & CTAs", "SEO optimisation", "Fast loading speeds"], link: "/services/landing-pages" },
                { title: "Ecommerce Websites", description: "Online stores built to sell. Shopify, WooCommerce, or custom solutions.", features: ["Secure payment gateways", "Product management", "Inventory tracking", "Order automation"], link: "/services/ecommerce" },
                { title: "WordPress Development", description: "Custom WordPress sites with easy content management and powerful functionality.", features: ["Easy content editing", "Plugin integration", "Custom themes", "Regular updates"], link: "/platforms/wordpress" },
                { title: "Restaurant Websites", description: "Mouth-watering designs with online menus, booking systems, and delivery integration.", features: ["Online menus", "Table reservations", "Delivery integration", "Local SEO"], link: "/web-package" },
                { title: "Landing Pages", description: "High-converting landing pages designed to capture leads and drive action.", features: ["A/B testing ready", "Form integration", "Fast loading", "Conversion focused"], link: "/services/landing-pages" },
                { title: "Website Redesign", description: "Transform outdated websites into modern, mobile-friendly experiences.", features: ["Modern aesthetics", "Improved UX", "Better performance", "SEO preservation"], link: "/contact" }
              ].map((service, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border hover:shadow-lg transition-all h-full flex flex-col">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="mt-auto">
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-muted/30">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Web Design Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A streamlined process that delivers exceptional results without the agency overhead.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Discovery Call", description: "We learn about your business, goals, and requirements in a free 15-minute call." },
                { title: "Design & Build", description: "Our team creates your website with regular updates and feedback loops." },
                { title: "Review & Refine", description: "You review the design and we make unlimited revisions until you're happy." },
                { title: "Launch & Support", description: "We launch your site and provide ongoing support to ensure success." }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">{index + 1}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Related Resources Section */}
        <section className="py-16">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Resources</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Explore our platforms, sector expertise, and helpful guides.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Platforms */}
              <div className="bg-card p-6 rounded-xl border">
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Platforms We Build On</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Link to="/platforms/wordpress" className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-primary/10 transition-colors">WordPress</Link>
                  <Link to="/platforms/shopify" className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-primary/10 transition-colors">Shopify</Link>
                  <Link to="/platforms/woocommerce" className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-primary/10 transition-colors">WooCommerce</Link>
                  <Link to="/platforms/custom-development" className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-primary/10 transition-colors">Custom Development</Link>
                </div>
              </div>

              {/* Sectors */}
              <div className="bg-card p-6 rounded-xl border">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Sectors We Serve</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Link to="/sectors/property" className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-primary/10 transition-colors">Property & Estate Agents</Link>
                  <Link to="/sectors/charity" className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-primary/10 transition-colors">Charities & Non-Profits</Link>
                  <Link to="/sectors/b2b" className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-primary/10 transition-colors">B2B Companies</Link>
                  <Link to="/sectors/b2c" className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-primary/10 transition-colors">B2C & Retail</Link>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-muted/30 p-6 rounded-xl border flex flex-wrap items-center justify-center gap-4">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="font-medium">Helpful Resources:</span>
              <Link to="/faq" className="text-primary hover:underline">FAQ</Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/seo-services-london" className="text-primary hover:underline">SEO Services</Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/ai-services-london" className="text-primary hover:underline">AI & Automation</Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/blog" className="text-primary hover:underline">Blog</Link>
            </div>
          </Container>
        </section>

        {/* Areas Served */}
        <section className="py-16 bg-muted/30">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Businesses Across London</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Based in Stratford, East London, we work with clients throughout the capital and across the UK.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Stratford", link: "/areas/stratford" },
                { name: "Ilford", link: "/areas/ilford" },
                { name: "Hackney", link: "/areas/hackney" },
                { name: "Shoreditch", link: "/areas/shoreditch" },
                { name: "Leyton", link: "/areas/leyton" },
                { name: "Newham", link: "/areas/newham" },
                { name: "Tower Hamlets", link: "/areas/tower-hamlets" },
                { name: "Barking", link: "/areas/barking" },
                { name: "Greenwich", link: "/areas/greenwich" },
                { name: "Walthamstow", link: "/areas/walthamstow" }
              ].map((area, index) => (
                <Link key={index} to={area.link} className="px-4 py-2 bg-card border rounded-full hover:border-primary hover:bg-primary/5 transition-colors">{area.name}</Link>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Common questions about web design services in London. <Link to="/faq" className="text-primary hover:underline">View all FAQs →</Link></p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Online Presence?</h2>
              <p className="text-xl opacity-90 mb-8">Get a free, no-obligation quote for your new website.</p>
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Areas Footer */}
        <AreasFooter />
      </main>

      <Footer />
    </>
  );
};

export default WebDesignAgencyLondon;