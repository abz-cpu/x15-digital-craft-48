import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Code2, ShoppingCart, Puzzle, Rocket } from "lucide-react";
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

const platforms = [
  { 
    name: "WordPress", 
    path: "/platforms/wordpress", 
    desc: "The world's most popular CMS. Perfect for blogs, business sites, and more.",
    icon: Puzzle,
    features: ["Easy content management", "Thousands of plugins", "SEO-friendly", "Regular updates"],
    bestFor: "Blogs, business websites, portfolios"
  },
  { 
    name: "Shopify", 
    path: "/platforms/shopify", 
    desc: "Leading e-commerce platform for online stores of all sizes.",
    icon: ShoppingCart,
    features: ["Built-in payments", "Inventory management", "Mobile app", "24/7 support"],
    bestFor: "Online stores, dropshipping, retail"
  },
  { 
    name: "WooCommerce", 
    path: "/platforms/woocommerce", 
    desc: "Powerful WordPress e-commerce with full customization.",
    icon: ShoppingCart,
    features: ["Full ownership", "Unlimited products", "Flexible payments", "Complete control"],
    bestFor: "Growing stores, custom requirements"
  },
  { 
    name: "Custom Development", 
    path: "/platforms/custom-development", 
    desc: "Bespoke React/Next.js solutions for unique requirements.",
    icon: Code2,
    features: ["Unlimited flexibility", "High performance", "Scalable architecture", "Modern stack"],
    bestFor: "Complex apps, unique needs, scale"
  },
];

const platformFaqs = [
  {
    question: "Which platform is best for a small business website?",
    answer: "WordPress is ideal for most small business websites. It offers easy content management, thousands of plugins for added functionality, and excellent SEO capabilities. It's cost-effective and can grow with your business."
  },
  {
    question: "Should I choose Shopify or WooCommerce for my online store?",
    answer: "Shopify is best if you want a hassle-free, hosted solution with built-in support. WooCommerce is better if you want full ownership, more customization options, and lower long-term costs. We help you choose based on your specific needs."
  },
  {
    question: "When should I consider custom development?",
    answer: "Custom development (React/Next.js) is ideal when you need unique functionality that off-the-shelf platforms can't provide, require high performance at scale, or want a completely bespoke user experience. It's typically recommended for complex web applications."
  },
  {
    question: "Can you migrate my existing website to a new platform?",
    answer: "Yes, we handle complete platform migrations including content transfer, SEO preservation, and design updates. We ensure minimal downtime and maintain your search rankings during the transition."
  },
  {
    question: "How do I know which platform fits my budget?",
    answer: "WordPress sites typically start from £200, Shopify/WooCommerce stores from £500, and custom development from £1,400. During our free consultation, we'll recommend the best platform based on your goals and budget."
  },
];

const Platforms = () => (
  <div className="min-h-screen flex flex-col">
    <SEO 
      title="Web Development Platforms | WordPress, Shopify, Custom | L&D Digital" 
      description="We build on WordPress, Shopify, WooCommerce, and custom React/Next.js. Expert platform guidance to choose the right technology for your business website or online store."
      keywords="WordPress developer UK, Shopify expert London, WooCommerce development, custom web development, React developer, Next.js agency"
      canonicalUrl="https://digital.luminousanddeliver.co.uk/platforms"
    />
    <FAQSchema faqs={platformFaqs} pageId="platforms" />
    <Navigation darkHero />
    
    <main className="flex-1">
      {/* Hero */}
      <section className="pt-40 pb-16 md:pt-44 md:pb-20 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <Container className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Platforms We Work With
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Choosing the right platform is crucial for your project's success. We're experts in WordPress, Shopify, WooCommerce, and custom React development — and we'll help you pick the perfect fit.
          </p>
        </Container>
      </section>
      
      <BreadcrumbNav />

      {/* Why Platform Choice Matters */}
      <section className="py-12 md:py-16 bg-background">
        <Container>
          <AnimatedSection animation="fade">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Why Platform Choice Matters
              </h2>
              <p className="text-lg text-muted-foreground">
                The platform you choose affects everything from costs and maintenance to scalability and user experience. We help you make an informed decision based on your business goals, budget, and long-term vision.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { title: "Cost Efficiency", desc: "Right platform = lower ongoing costs and better ROI" },
                { title: "Scalability", desc: "Grow without expensive rebuilds or migrations" },
                { title: "Time to Market", desc: "Launch faster with the right tools for your needs" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                  <Rocket className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
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

      {/* Platform Cards */}
      <section className="py-12 md:py-16 bg-muted">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {platforms.map((p, index) => (
              <AnimatedSection key={p.path} animation="scale" staggerIndex={index}>
                <Card className="hover-lift h-full">
                  <CardContent className="p-6">
                    <p.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-secondary mb-2">{p.name}</h3>
                    <p className="text-muted-foreground mb-4">{p.desc}</p>
                    
                    <p className="text-xs font-semibold text-primary mb-2">Best for: {p.bestFor}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {p.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild variant="outline" className="w-full">
                      <Link to={p.path}>
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
              {platformFaqs.map((faq, index) => (
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
              Not Sure Which Platform Is Right for You?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Book a free consultation and we'll recommend the best technology for your goals and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-background text-primary hover:bg-muted">
                <Link to="/contact">
                  Get Free Advice <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/web-package">View Web Packages</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
    
    <Footer />
  </div>
);

export default Platforms;