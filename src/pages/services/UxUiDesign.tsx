import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Palette, Users, MousePointer, Smartphone, Layers, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container } from "@/components/Container";
import { ServiceSchema } from "@/components/ServiceSchema";
import { FAQSchema } from "@/components/FAQSchema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const uxUiFaqs = [
  {
    question: "What's the difference between UX and UI design?",
    answer: "UX (User Experience) focuses on how the product works and feels — the user journey, ease of use, and problem-solving. UI (User Interface) focuses on how it looks — visual design, colors, typography, and layout. We do both."
  },
  {
    question: "How much does UX/UI design cost?",
    answer: "UX/UI design typically starts from £500 for a focused project (like a landing page redesign) and ranges to £2,000+ for comprehensive app or website design with research, wireframes, and full visual design."
  },
  {
    question: "Do you provide the final design files?",
    answer: "Yes, you receive complete design files in Figma, including all components, style guides, and assets ready for development. These are your property and can be used by any developer."
  },
  {
    question: "Can you redesign my existing website or app?",
    answer: "Absolutely. We start with an audit of your current design, identify UX issues affecting conversions, and create an improved design that addresses user pain points while maintaining your brand identity."
  },
  {
    question: "How long does a UX/UI project take?",
    answer: "Timeline depends on scope: landing page redesigns take 1-2 weeks, multi-page websites 2-4 weeks, and complex apps 4-8 weeks. We include research, wireframing, visual design, and revision rounds."
  },
];

const UxUiDesign = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="UX/UI Design Services UK | User Experience Design | L&D Digital"
        description="User-centered design that delights customers and drives conversions. Beautiful interfaces backed by research and best practices. Mobile-first design approach."
        keywords="UX design UK, UI design services, user experience designer London, mobile app design, website UX audit, conversion-focused design"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/services/ux-ui-design"
      />
      <FAQSchema faqs={uxUiFaqs} pageId="ux-ui-design" />
      <ServiceSchema
        name="UX/UI Design Services"
        description="User-centered design that delights customers and drives conversions. Beautiful interfaces backed by research and best practices."
        url="https://digital.luminousanddeliver.co.uk/services/ux-ui-design"
        priceRange="£500-£2000"
        serviceType="UX/UI Design"
      />
      <Navigation darkHero />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-40 pb-16 md:pt-44 md:pb-20 lg:pt-48 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-secondary">
          <Container>
            <div className="relative text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                UX/UI Design
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-4">
                Interfaces users love to use.
              </p>
              <p className="text-lg text-primary-foreground/80">
                Beautiful design meets seamless user experience.
              </p>
            </div>
          </Container>
        </section>

        <BreadcrumbNav />

        {/* What You Get */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <AnimatedSection animation="scale">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
                  Our Process
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: Users, title: "User Research", desc: "Understand your users' needs and behaviors" },
                    { icon: Layers, title: "Wireframing", desc: "Map out the user journey and structure" },
                    { icon: Palette, title: "Visual Design", desc: "Create beautiful, on-brand interfaces" },
                    { icon: MousePointer, title: "Prototyping", desc: "Interactive mockups you can test" },
                    { icon: Smartphone, title: "Responsive Design", desc: "Perfect on every device size" },
                    { icon: Sparkles, title: "Micro-interactions", desc: "Delightful animations and feedback" },
                  ].map((item, i) => (
                    <Card key={i} className="hover-lift">
                      <CardContent className="p-6">
                        <item.icon className="h-10 w-10 text-primary mb-4" />
                        <h3 className="text-lg font-semibold text-secondary mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Why UX Matters */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 text-center">
                  Why Good Design Matters
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Every £1 invested in UX returns £100",
                    "88% of users won't return after a bad experience",
                    "Good design builds trust and credibility",
                    "Intuitive interfaces reduce support costs",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Pricing */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Pricing
              </h2>
              <p className="text-2xl font-bold text-primary mb-6">
                From £500
              </p>
              <p className="text-muted-foreground">
                Includes research, wireframes, visual design, and prototype. Scope depends on project size.
              </p>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {uxUiFaqs.map((faq, index) => (
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

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-secondary">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Improve Your User Experience?
              </h2>
              <Button asChild size="lg" className="bg-background text-primary hover:bg-muted">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UxUiDesign;
