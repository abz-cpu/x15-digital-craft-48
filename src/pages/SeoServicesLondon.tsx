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
    question: "How much should SEO cost in the UK?", 
    answer: "SEO costs in the UK typically range from £300-£2,000+ per month. At L&D Digital, our SEO services start from £300/month with transparent reporting. Learn more on our dedicated SEO page." 
  },
  { 
    question: "What is the 80/20 rule for SEO?", 
    answer: "The 80/20 rule means 80% of your results come from 20% of your efforts. Focus on high-intent keywords, fixing technical issues, and building quality backlinks. We apply this principle to deliver maximum value for London businesses." 
  },
  { 
    question: "Is it worth paying someone for SEO?", 
    answer: "Yes, professional SEO typically delivers 5-10x ROI through increased organic traffic and higher-quality leads. The key is choosing an agency with transparent reporting and a proven track record in your industry." 
  },
  { 
    question: "How much does it cost to hire someone to do SEO?", 
    answer: "Hiring an SEO professional costs £300-£5,000+ per month depending on experience and scope. We offer affordable packages from £300/month, ideal for small businesses and startups in London." 
  },
  { 
    question: "How long does SEO take to show results?", 
    answer: "SEO typically takes 3-6 months to show significant results, though some improvements can be seen within weeks. Local SEO for areas like Stratford, Ilford, and East London often delivers faster results." 
  }
];

const SeoServicesLondon = () => {
  return (
    <>
      <SEO
        title="SEO Services London | Professional SEO Agency from £300/month"
        description="Results-driven SEO agency in London. Technical SEO, local SEO, link building & content strategy from £300/month. UK-based team. Real results."
        canonicalUrl="/seo-services-london"
        keywords="SEO services London, SEO agency London, professional SEO London, best SEO agency London, local SEO London"
      />
      <FAQSchema faqs={faqs} pageId="seo-services-london" />
      
      <Navigation />
      <BreadcrumbNav />
      
      <main>
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">Professional SEO Services London</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">SEO Services London: Get Found on Google</h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">We're L&D Digital, a London-based SEO agency helping businesses rank higher and convert visitors into customers.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg"><Link to="/contact">Get Free SEO Audit <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
                <Button asChild variant="outline" size="lg"><Link to="/services/seo">Our SEO Services</Link></Button>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-12 bg-muted/30">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { stat: "75%", label: "Of users never scroll past page 1" },
                { stat: "5-10x", label: "Average ROI from SEO" },
                { stat: "53%", label: "Of traffic comes from organic search" },
                { stat: "3-6", label: "Months to see significant results" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{item.stat}</p>
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