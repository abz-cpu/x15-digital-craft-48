import { SEO } from "@/components/SEO";
import { Container } from "@/components/Container";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { ServiceSchema } from "@/components/ServiceSchema";
import { FAQSchema } from "@/components/FAQSchema";
import { HowToSchema } from "@/components/HowToSchema";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AreasFooter } from "@/components/AreasFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle,
  Code,
  Layers,
  Rocket,
  Shield,
  Zap,
  Database,
  TrendingUp,
  ArrowRight,
  MessageSquare,
  Cpu,
  Globe,
} from "lucide-react";

const CustomDevelopment = () => {
  const faqs = [
    {
      question: "When should I choose custom development over WordPress or Shopify?",
      answer: "Choose custom development when: you need functionality that templates can't provide, performance is critical (complex calculations, real-time features), you're building a product/SaaS rather than a website, you have unique business logic requirements, or you need to integrate deeply with internal systems. For standard websites and ecommerce, WordPress or Shopify are often more cost-effective."
    },
    {
      question: "How much does custom web development cost in London?",
      answer: "Custom web applications in London typically start from £3,000 for simpler projects and can range from £10,000-£50,000+ for complex applications. Cost depends on functionality, integrations, user authentication requirements, and ongoing maintenance needs. We provide detailed fixed-price quotes after understanding your requirements."
    },
    {
      question: "What technologies do you use for custom development?",
      answer: "Our primary stack is React (with TypeScript) for frontends, with various backend options including Node.js, Supabase, and serverless functions. We also work with Next.js for server-rendered applications. Our technology choices are driven by your specific requirements, scalability needs, and long-term maintenance considerations."
    },
    {
      question: "How long does custom development take?",
      answer: "Simple custom applications take 4-8 weeks. Medium complexity projects (user authentication, dashboards, integrations) take 8-16 weeks. Complex applications with multiple user roles, advanced features, and integrations can take 4-6+ months. We use agile methodology with regular demos so you see progress throughout."
    },
    {
      question: "Do you provide ongoing support for custom applications?",
      answer: "Yes. Custom applications require ongoing maintenance, security updates, and feature development. We offer retainer packages from £500/month for maintenance and support, with additional development time available. We also provide documentation and training if you have internal developers."
    }
  ];

  const processSteps = [
    {
      name: "Discovery & Scoping",
      text: "Deep dive into your requirements, user journeys, integrations, and success metrics. Output: detailed specification document."
    },
    {
      name: "Technical Architecture",
      text: "Design the system architecture, choose technologies, plan database structure, and define API contracts."
    },
    {
      name: "UI/UX Design",
      text: "Create wireframes and high-fidelity designs. User testing and refinement before development begins."
    },
    {
      name: "Agile Development",
      text: "Build in 2-week sprints with regular demos. You see working software throughout, not just at the end."
    },
    {
      name: "Testing & QA",
      text: "Automated testing, security audits, performance optimisation, and user acceptance testing."
    },
    {
      name: "Launch & Iteration",
      text: "Deploy to production with monitoring. Gather user feedback and iterate based on real usage."
    }
  ];

  return (
    <>
      <SEO
        title="Custom Web Development London | React & Node.js Apps from £3,000"
        description="Bespoke web application development in London. React, TypeScript, Node.js experts. Build custom software that template solutions can't deliver. Free consultation."
        keywords="custom web development london, react developer london, bespoke web app uk, node.js developer london, typescript developer uk, web application development london, software development agency london, custom software uk"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/platforms/custom-development"
      />
      <ServiceSchema
        name="Custom Web Development London"
        description="Bespoke web application development in London using React, TypeScript, and modern technologies. Custom solutions for complex business requirements."
        url="https://digital.luminousanddeliver.co.uk/platforms/custom-development"
        priceRange="£3,000-£50,000"
        serviceType="Custom Web Development"
      />
      <FAQSchema faqs={faqs} />
      <HowToSchema
        name="How We Build Custom Web Applications"
        description="Our 6-step agile process for delivering custom web applications."
        steps={processSteps}
        totalTime="P12W"
        estimatedCost={{ currency: "GBP", value: "3000-50000" }}
      />
      
      <Navigation />
      <BreadcrumbNav />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-background via-background to-orange-500/5 overflow-hidden">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl">
                <span className="inline-block px-4 py-2 bg-orange-500/10 text-orange-600 rounded-full text-sm font-medium mb-6">
                  Custom Development UK
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Custom Web Development London
                  <span className="text-orange-600 block mt-2">Beyond Templates & Themes</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                  When off-the-shelf solutions can't deliver what you need, we build bespoke web applications using React, TypeScript, and modern technologies. Custom software that gives you competitive advantage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="text-lg bg-orange-600 hover:bg-orange-700">
                    <Link to="/contact">
                      Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-lg">
                    <a href="https://wa.me/447356260648" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp Us
                    </a>
                  </Button>
                </div>
                <p className="mt-6 text-muted-foreground">
                  <span className="text-orange-600 font-semibold">Projects from £3,000</span> • Agile delivery • UK-based team
                </p>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Who This Is For */}
        <section className="py-16 lg:py-24">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                When Custom Development Makes Sense
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Custom development isn't always the answer—but when you need it, nothing else will do.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Cpu, title: "Unique Business Logic", desc: "Workflows, calculations, or processes specific to your industry" },
                { icon: Database, title: "Complex Integrations", desc: "Connect multiple systems, APIs, and data sources seamlessly" },
                { icon: Rocket, title: "SaaS Products", desc: "Building a product to sell to others requires custom development" },
                { icon: Globe, title: "High Performance", desc: "Real-time features, complex calculations, heavy traffic loads" },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className="bg-card rounded-xl p-6 border border-border hover:border-orange-500/50 transition-colors h-full">
                    <item.icon className="h-10 w-10 text-orange-600 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* What We Build */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                What We Build
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Custom applications that solve real business problems.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Customer Portals", desc: "Self-service dashboards for your clients to manage accounts, orders, and data", price: "From £5,000" },
                { title: "Internal Tools", desc: "Admin panels, CRMs, inventory systems tailored to your workflows", price: "From £4,000" },
                { title: "Booking Systems", desc: "Appointment scheduling, resource management, availability calendars", price: "From £6,000" },
                { title: "Marketplaces", desc: "Multi-vendor platforms with buyer/seller dashboards and payments", price: "From £15,000" },
                { title: "SaaS Applications", desc: "Subscription products with user management, billing, and analytics", price: "From £20,000" },
                { title: "AI-Powered Tools", desc: "Custom AI integrations, chatbots, and intelligent automation", price: "From £3,000" },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className="bg-card rounded-xl p-6 border border-border h-full">
                    <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.desc}</p>
                    <span className="text-orange-600 font-semibold">{item.price}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* Technology Stack */}
        <section className="py-16 lg:py-24">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Our Technology Stack
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Modern, proven technologies chosen for performance, maintainability, and scalability.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "React", desc: "Frontend" },
                { name: "TypeScript", desc: "Type Safety" },
                { name: "Node.js", desc: "Backend" },
                { name: "Next.js", desc: "Full Stack" },
                { name: "PostgreSQL", desc: "Database" },
                { name: "Supabase", desc: "Backend-as-a-Service" },
              ].map((tech, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className="bg-card rounded-xl p-4 border border-border text-center h-full">
                    <Code className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <h3 className="font-semibold">{tech.name}</h3>
                    <p className="text-xs text-muted-foreground">{tech.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Why Choose Custom Development?
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Advantages over template-based solutions.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Layers, title: "Perfect Fit", desc: "Built exactly for your requirements. No compromises or workarounds" },
                { icon: Zap, title: "Maximum Performance", desc: "Optimised code without bloat from unused features" },
                { icon: Shield, title: "Full Control", desc: "Own your codebase. No platform lock-in or dependency on third parties" },
                { icon: TrendingUp, title: "Scalable", desc: "Architected for growth. Add features and capacity as needed" },
                { icon: Code, title: "Maintainable", desc: "Clean, documented code that your team (or ours) can maintain" },
                { icon: Database, title: "Integration Ready", desc: "Connect to any API or system with custom integrations" },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-orange-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* Custom vs Template */}
        <section className="py-16 lg:py-24">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Custom vs Template Solutions
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Understanding when each approach makes sense.
              </p>
            </AnimatedSection>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 font-semibold text-center">
                  <div>Factor</div>
                  <div className="text-orange-600">Custom</div>
                  <div className="text-primary">WordPress/Shopify</div>
                </div>
                {[
                  { feature: "Initial cost", custom: "Higher", template: "Lower" },
                  { feature: "Time to launch", custom: "Longer", template: "Faster" },
                  { feature: "Customisation", custom: "Unlimited", template: "Limited" },
                  { feature: "Performance", custom: "Optimal", template: "Variable" },
                  { feature: "Unique features", custom: true, template: false },
                  { feature: "Long-term costs", custom: "Predictable", template: "Can grow" },
                  { feature: "Best for", custom: "Complex needs", template: "Standard sites" },
                ].map((row, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 p-4 border-t border-border text-center">
                    <div className="text-left">{row.feature}</div>
                    <div>
                      {row.custom === true ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : row.custom === false ? (
                        <span className="text-muted-foreground">✗</span>
                      ) : (
                        <span>{row.custom}</span>
                      )}
                    </div>
                    <div>
                      {row.template === true ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : row.template === false ? (
                        <span className="text-muted-foreground">✗</span>
                      ) : (
                        <span>{row.template}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-6">
                Not sure which approach is right? <Link to="/contact" className="text-orange-600 hover:underline">Book a free consultation</Link>—we'll give honest advice.
              </p>
            </div>
          </Container>
        </section>

        {/* FAQs */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Custom Development FAQs
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Common questions about bespoke web development answered.
              </p>
            </AnimatedSection>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
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
        <section className="py-16 lg:py-24 bg-orange-600 text-white">
          <Container>
            <AnimatedSection animation="fade">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Have a Complex Project in Mind?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Let's discuss your requirements. We'll help you understand if custom development is the right approach—and if not, we'll recommend alternatives.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild className="text-lg">
                    <Link to="/contact">
                      Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-lg border-white/30 text-white hover:bg-white/10">
                    <Link to="/portfolio">View Our Work</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Related Services */}
        <section className="py-16 lg:py-24">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl font-bold text-center mb-12">
                Related Services
              </h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "App Development", link: "/services/app-development", desc: "Native and progressive web apps" },
                { title: "AI & Automation", link: "/ai-package", desc: "Intelligent automation solutions" },
                { title: "WordPress Development", link: "/platforms/wordpress", desc: "When templates can meet your needs" },
              ].map((service, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <Link 
                    to={service.link}
                    className="block bg-card rounded-xl p-6 border border-border hover:border-orange-500/50 transition-colors"
                  >
                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{service.desc}</p>
                    <span className="text-orange-600 text-sm">Learn more →</span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* Areas Footer */}
        <AreasFooter accentColor="orange" />
      </main>
      
      <Footer />
    </>
  );
};

export default CustomDevelopment;
