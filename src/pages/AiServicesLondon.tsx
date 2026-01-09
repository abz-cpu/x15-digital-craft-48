import { SEO } from "@/components/SEO";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Bot, MessageSquare, Phone, Workflow } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { question: "What are AI services for business?", answer: "AI services include chatbots for customer support, automated lead qualification, voice assistants, and workflow automation. At Luminous & Deliver Digital, we specialise in practical AI implementations for UK businesses." },
  { question: "How much does an AI chatbot cost in the UK?", answer: "AI chatbot costs range from £200 for simple FAQ bots to £5,000+ for custom solutions. Our packages start from £200, with monthly maintenance from £50/month." },
  { question: "Can AI really help small businesses?", answer: "Absolutely. AI helps small businesses compete by automating repetitive tasks, providing 24/7 customer support, and qualifying leads automatically." },
  { question: "What is L&D Digital?", answer: "L&D Digital (Luminous & Deliver Digital) is a London-based digital agency specialising in web development, AI automation, and digital marketing. We're based in Stratford, East London." },
  { question: "How long does it take to build an AI chatbot?", answer: "Simple AI chatbots can be built in 3-5 days. More complex chatbots with custom integrations typically take 1-2 weeks." }
];

const AiServicesLondon = () => {
  return (
    <>
      <SEO
        title="AI Services London | Chatbots & Automation from £200"
        description="Professional AI services in London. AI chatbots, voice assistants, workflow automation from £200. UK-based team. Fast deployment."
        canonicalUrl="/ai-services-london"
        keywords="AI services London, AI chatbot London, AI automation UK, best AI services London, AI chatbot development UK"
      />
      <FAQSchema faqs={faqs} pageId="ai-services-london" />
      
      <Navigation />
      <BreadcrumbNav />
      
      <main>
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/10" />
          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">AI-Powered Business Solutions</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">AI Services London: Chatbots & Automation from £200</h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">We're Luminous & Deliver Digital, a London-based AI agency helping businesses automate customer service and qualify leads.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg"><Link to="/contact">Get Free AI Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
                <Button asChild variant="outline" size="lg"><Link to="/ai-package">View AI Packages</Link></Button>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Services in London</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: MessageSquare, title: "AI Chatbots", description: "24/7 customer support chatbots trained on your business" },
                { icon: Phone, title: "AI Voice Assistants", description: "Voice-enabled AI that handles phone calls and bookings" },
                { icon: Bot, title: "WhatsApp AI Bots", description: "AI assistants for WhatsApp Business" },
                { icon: Workflow, title: "Workflow Automation", description: "Connect your tools and automate repetitive tasks" }
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Your Business Needs AI in 2026</h2>
                <ul className="space-y-4">
                  {[
                    "Never miss a lead - AI responds instantly, 24/7",
                    "Reduce customer service costs by up to 60%",
                    "Qualify leads automatically before they reach your sales team",
                    "Free up staff time for high-value work"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card p-8 rounded-xl border">
                <h3 className="text-2xl font-bold mb-4">AI Packages from £200</h3>
                <ul className="space-y-3 mb-6">
                  {["Custom AI chatbot trained on your business", "Website integration included", "Up to 100 FAQs programmed", "Monthly maintenance from £50"].map((item, index) => (
                    <li key={index} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" />{item}</li>
                  ))}
                </ul>
                <Button asChild className="w-full"><Link to="/ai-package">View AI Packages</Link></Button>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold mb-4">AI Services FAQ</h2></div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Automate Your Business?</h2>
              <p className="text-xl opacity-90 mb-8">Get a free AI consultation and discover how automation can transform your business.</p>
              <Button asChild size="lg" variant="secondary"><Link to="/contact">Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AiServicesLondon;
