import { SEO } from "@/components/SEO";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Search, TrendingUp, BarChart3, MapPin } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { question: "How much should SEO cost in the UK?", answer: "SEO costs in the UK typically range from £300-£2,000+ per month. At Luminous & Deliver Digital, our SEO services start from £300/month with transparent reporting." },
  { question: "What is the 80/20 rule for SEO?", answer: "The 80/20 rule means 80% of your results come from 20% of your efforts. Focus on high-intent keywords, fixing technical issues, and building quality backlinks." },
  { question: "Is it worth paying someone for SEO?", answer: "Yes, professional SEO typically delivers 5-10x ROI through increased organic traffic and higher-quality leads. The key is choosing an agency with transparent reporting." },
  { question: "How much does it cost to hire someone to do SEO?", answer: "Hiring an SEO professional costs £300-£5,000+ per month depending on experience and scope. We offer affordable packages from £300/month." },
  { question: "How long does SEO take to show results?", answer: "SEO typically takes 3-6 months to show significant results, though some improvements can be seen within weeks." }
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
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">We're Luminous & Deliver Digital, a London-based SEO agency helping businesses rank higher and convert visitors into customers.</p>
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
                { icon: Search, title: "Technical SEO", description: "Comprehensive analysis and fixes for crawling and indexing issues" },
                { icon: TrendingUp, title: "On-Page SEO", description: "Optimising titles, meta descriptions, and content structure" },
                { icon: MapPin, title: "Local SEO", description: "Dominate local search with Google Business Profile optimisation" },
                { icon: BarChart3, title: "Content Strategy", description: "Data-driven content targeting keywords your customers search for" }
              ].map((service, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border hover:border-primary/50 transition-colors h-full">
                  <service.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 bg-muted/30">
          <Container>
            <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold mb-4">SEO FAQ</h2></div>
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

        <section className="py-16 bg-primary text-primary-foreground">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Rank Higher on Google?</h2>
              <p className="text-xl opacity-90 mb-8">Get a free SEO audit and discover opportunities to improve your search rankings.</p>
              <Button asChild size="lg" variant="secondary"><Link to="/contact">Get Free SEO Audit <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SeoServicesLondon;
