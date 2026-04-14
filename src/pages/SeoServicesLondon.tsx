import { SEO } from "@/components/SEO";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AreasFooter } from "@/components/AreasFooter";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Search, TrendingUp, BarChart3, MapPin, BookOpen, Layers, Globe } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does SEO cost in London in 2026?",
    answer: "London SEO typically costs £300–£2,000 per month in 2026, depending on scope and competitiveness. L&D Digital offers local SEO from £300 per month covering Google Business Profile optimisation, citations, on-page fixes, and transparent monthly reporting. All plans are no lock-in."
  },
  {
    question: "How long does SEO take to show results in London?",
    answer: "Most London small businesses see first-page results for long-tail and local keywords within 3–6 months. Competitive London keywords take 6–12 months. L&D Digital reports progress monthly so you can see ranking improvements transparently as they happen."
  },
  {
    question: "What is the difference between SEO and paid ads?",
    answer: "SEO earns free, compounding organic traffic by ranking on Google. Paid ads buy instant traffic that stops when you pause the budget. For most London SMEs, SEO delivers better long-term ROI after month 3 — paid ads suit short-term launches and seasonal campaigns."
  },
  {
    question: "How do I get my business on the first page of Google in London?",
    answer: "Rank in London by optimising your Google Business Profile, publishing location-specific content, building a fast mobile-first website with local keywords, earning citations from UK directories, and collecting genuine Google reviews. L&D Digital handles all of this from £300 per month."
  },
  {
    question: "Is it worth hiring an SEO agency for a small business?",
    answer: "Yes, when the agency is transparent and fairly priced. A good SEO agency pays for itself through qualified organic leads you would otherwise buy with ads. L&D Digital is aimed at small London businesses — no lock-in, no minimum term, and monthly reports you actually understand."
  }
];

const SeoServicesLondon = () => {
  return (
    <>
      <SEO
        title="SEO Services London 2026 | Local SEO from £300/month | L&D Digital"
        description="Stratford-based SEO agency offering local and technical SEO for London small businesses from £300 per month. Transparent monthly reporting, no lock-in, free SEO audit."
        canonicalUrl="https://digital.luminousanddeliver.co.uk/seo-services-london"
        keywords="SEO services London, SEO agency East London, local SEO Stratford, SEO agency UK, Google Maps ranking London"
      />
      <FAQSchema faqs={faqs} pageId="seo-services-london" />
      
      <Navigation />
      <BreadcrumbNav />
      
      <main>
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">Stratford, East London · Local SEO from £300/mo</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">SEO Services in London — Rank Higher on Google</h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">L&amp;D Digital is a Stratford-based SEO agency helping London small businesses rank in local search and win more qualified enquiries — from £300/month with transparent reporting.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg"><Link to="/contact">Get My Free SEO Audit <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
                <Button asChild variant="outline" size="lg"><Link to="/services/seo">Our SEO Services</Link></Button>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-12 bg-muted/30">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { title: "Local SEO", label: "Google Business Profile + map pack optimisation" },
                { title: "Technical SEO", label: "Site speed, crawlability, structured data, Core Web Vitals" },
                { title: "On-Page SEO", label: "Titles, meta, headings, content, internal linking" },
                { title: "Monthly Reporting", label: "Transparent rank tracking, no lock-in, cancel any time" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <p className="text-xl md:text-2xl font-bold text-primary mb-2">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our SEO Services in London</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Search, title: "Technical SEO", description: "Comprehensive analysis and fixes for crawling and indexing issues", link: "/services/seo" },
                { icon: TrendingUp, title: "On-Page SEO", description: "Optimising titles, meta descriptions, and content structure", link: "/services/seo" },
                { icon: MapPin, title: "Local SEO", description: "Dominate local search with Google Business Profile optimisation", link: "/areas/stratford" },
                { icon: BarChart3, title: "Content Strategy", description: "Data-driven content targeting keywords your customers search for", link: "/services/content-marketing" }
              ].map((service, index) => (
                <Link to={service.link} key={index} className="bg-card p-6 rounded-xl border hover:border-primary/50 transition-colors h-full block">
                  <service.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* Related Resources Section */}
        <section className="py-16 bg-muted/30">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Resources</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Explore our other digital services and sector expertise.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Related Services */}
              <div className="bg-card p-6 rounded-xl border">
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Related Services</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Link to="/services/digital-marketing" className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-primary/10 transition-colors">Digital Marketing</Link>
                  <Link to="/services/content-marketing" className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-primary/10 transition-colors">Content Marketing</Link>
                  <Link to="/web-design-agency-london" className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-primary/10 transition-colors">Web Design</Link>
                  <Link to="/ai-services-london" className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-primary/10 transition-colors">AI & Automation</Link>
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
            <div className="bg-card p-6 rounded-xl border flex flex-wrap items-center justify-center gap-4">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="font-medium">Helpful Resources:</span>
              <Link to="/faq" className="text-primary hover:underline">FAQ</Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/platforms/wordpress" className="text-primary hover:underline">WordPress SEO</Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/blog" className="text-primary hover:underline">Blog</Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/portfolio" className="text-primary hover:underline">Portfolio</Link>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">SEO FAQ</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Common questions about SEO services in London. <Link to="/faq" className="text-primary hover:underline">View all FAQs →</Link></p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Rank Higher on Google?</h2>
              <p className="text-xl opacity-90 mb-8">Get a free SEO audit and discover opportunities to improve your search rankings.</p>
              <Button asChild size="lg" variant="secondary"><Link to="/contact">Get Free SEO Audit <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
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

export default SeoServicesLondon;