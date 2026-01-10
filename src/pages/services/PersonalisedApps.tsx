import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Cog, Calculator, FileText, BarChart3, Package, Receipt, PiggyBank, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container } from "@/components/Container";
import { ServiceSchema } from "@/components/ServiceSchema";
import { FAQSchema } from "@/components/FAQSchema";
import { AreasFooter } from "@/components/AreasFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PersonalisedApps = () => {
  const realWorldExamples = [
    {
      icon: Package,
      title: "Order Tracker",
      description: "Track orders with order numbers, delivery status (Received/Processing/Delivered), and customer management.",
      forWho: "Product sellers, food businesses, trades with deliveries",
      startPrice: "From £500",
    },
    {
      icon: Receipt,
      title: "Invoice Tracker",
      description: "Manage invoices with Paid/Pending/Overdue status, payment reminders, and financial summaries.",
      forWho: "Freelancers, consultants, service providers",
      startPrice: "From £500",
    },
    {
      icon: PiggyBank,
      title: "Personal Financial Manager",
      description: "Income/expense tracking, budget management, goal setting, and visual analytics dashboard.",
      forWho: "Sole traders, small business owners tracking cash flow",
      startPrice: "From £600",
    },
    {
      icon: Users,
      title: "Customer Database (CRM)",
      description: "Centralised customer info, order history, notes, and follow-up scheduling in one place.",
      forWho: "Any customer-facing business with repeat clients",
      startPrice: "From £500",
    },
    {
      icon: Calendar,
      title: "Booking System",
      description: "Appointment scheduling, automated confirmations, reminders, and calendar sync.",
      forWho: "Salons, clinics, consultants, coaches",
      startPrice: "From £600",
    },
  ];

  const faqs = [
    {
      question: "How much does a custom order tracker cost?",
      answer: (
        <>
          A basic order tracking app starts from £500, with more advanced versions including customer portals ranging from £800-1,500. <Link to="/contact" className="text-primary hover:underline">Contact us for a personalised quote</Link> based on your specific requirements.
        </>
      ),
    },
    {
      question: "Can you build an invoice management system for my business?",
      answer: (
        <>
          Absolutely! We build custom invoice trackers showing paid, pending, and overdue invoices at a glance. Basic tracking starts from £500, with automated reminders and client portals from £1,000+. <Link to="/blog/personalised-apps-struggling-business-owners" className="text-primary hover:underline">Read how business owners use these tools →</Link>
        </>
      ),
    },
    {
      question: "Do you offer financial tracking apps?",
      answer: (
        <>
          Yes, we build personal financial management dashboards for small business owners. Track income, expenses, budgets, and cash flow forecasts. These can integrate with <Link to="/ai-package" className="text-primary hover:underline">AI automation features</Link> for smarter insights and predictions.
        </>
      ),
    },
    {
      question: "How long does it take to build a custom app?",
      answer: "Simple tools like basic trackers can be ready in 1-2 weeks. More complex systems with multiple features typically take 2-4 weeks. We provide clear timelines during our discovery call and keep you updated throughout.",
    },
    {
      question: "Can I access my app on mobile?",
      answer: "Yes! All our custom apps are responsive and work beautifully on phones, tablets, and desktops. You can access your order tracker, invoice manager, or financial dashboard from anywhere.",
    },
    {
      question: "Do you provide training and support after launch?",
      answer: (
        <>
          Absolutely. Every project includes training to ensure you're confident using your new tool. We also offer <Link to="/services/maintenance-support" className="text-primary hover:underline">ongoing maintenance and support packages</Link> for peace of mind.
        </>
      ),
    },
  ];

  const faqsForSchema = faqs.map(faq => ({
    question: faq.question,
    answer: typeof faq.answer === 'string' ? faq.answer : faq.question,
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Custom Business Apps UK | Order Trackers, Invoice Managers & More | L&D Digital"
        description="Bespoke business apps for UK SMEs. Order tracking, invoice management, financial dashboards, and CRM tools built to your workflow. From £500."
        keywords="personalised business apps UK, order tracker app small business, invoice tracker freelancer, custom CRM UK, financial dashboard small business, bespoke software development London"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/services/personalised-apps"
      />
      <ServiceSchema
        name="Personalised Apps & Custom Business Tools"
        description="Bespoke business apps for UK SMEs including order tracking, invoice management, financial dashboards, CRM, and booking systems. Built to your exact workflow."
        url="https://digital.luminousanddeliver.co.uk/services/personalised-apps"
        priceRange="£500-£2000"
        serviceType="Custom Software Development"
      />
      <FAQSchema faqs={faqsForSchema} />
      <Navigation darkHero />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-40 pb-16 md:pt-44 md:pb-20 lg:pt-48 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900">
          <Container>
            <div className="relative text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Personalised Apps for UK Businesses
              </h1>
              <p className="text-xl text-white/90 mb-4">
                Order trackers, invoice managers, financial dashboards, and more.
              </p>
              <p className="text-lg text-white/80">
                Custom tools built exactly how you work. From £500.
              </p>
            </div>
          </Container>
        </section>

        {/* Breadcrumb below hero */}
        <BreadcrumbNav />

        {/* Who This Is For */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 text-center">
                  Who This Is For
                </h2>
                <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
                  Personalised apps are perfect for businesses drowning in spreadsheets and manual processes.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Business owners tracking orders on paper or WhatsApp",
                    "Freelancers chasing invoices and payments manually",
                    "Sole traders with no visibility on cash flow",
                    "Service providers juggling customer details across apps",
                    "Anyone spending hours on tasks that could be automated",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Real-World Examples */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <Container>
            <AnimatedSection animation="scale">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
                  Real-World Examples
                </h2>
                <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
                  These are the custom apps UK business owners are building to take back control.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {realWorldExamples.map((example, i) => (
                    <Card key={i} className="hover-lift h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <example.icon className="h-10 w-10 text-primary mb-4" />
                        <h3 className="text-lg font-semibold text-secondary mb-2">{example.title}</h3>
                        <p className="text-muted-foreground text-sm mb-3 flex-grow">{example.description}</p>
                        <div className="mt-auto">
                          <p className="text-xs text-muted-foreground mb-2"><strong>For:</strong> {example.forWho}</p>
                          <p className="text-primary font-semibold">{example.startPrice}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <p className="text-center text-muted-foreground mt-8">
                  <Link to="/blog/personalised-apps-struggling-business-owners" className="text-primary hover:underline">
                    Read our full guide: 5 Apps Every Struggling Business Owner Needs →
                  </Link>
                </p>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* What You Get */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
                  What You Get
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: Calculator, title: "Custom Calculators", desc: "Pricing tools, quote generators, ROI calculators" },
                    { icon: FileText, title: "Form Builders", desc: "Complex multi-step forms with logic and validation" },
                    { icon: BarChart3, title: "Dashboards", desc: "Real-time data visualisation for your business" },
                    { icon: Cog, title: "Process Automation", desc: "Turn manual workflows into automated systems" },
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

        {/* How It Works */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
                  How It Works
                </h2>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { step: "1", title: "Discovery", desc: "We map out your current process and pain points" },
                    { step: "2", title: "Design", desc: "Create a solution tailored to your workflow" },
                    { step: "3", title: "Build", desc: "Develop and refine with your feedback" },
                    { step: "4", title: "Deploy", desc: "Launch, train your team, and support you" },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="h-12 w-12 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                        {item.step}
                      </div>
                      <h3 className="font-semibold text-secondary mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
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
                Transparent Pricing
              </h2>
              <p className="text-lg text-muted-foreground mb-2">
                Pricing depends on complexity and features required.
              </p>
              <p className="text-2xl font-bold text-primary mb-6">
                Most projects start from £500
              </p>
              <p className="text-muted-foreground mb-4">
                Simple tools can be ready in 1-2 weeks. Complex systems take 2-4 weeks.
              </p>
              <p className="text-sm text-muted-foreground">
                Compare that to £800-1,200/month for a part-time admin, or £50-200/month × forever for enterprise software subscriptions.
              </p>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-lg mb-2 px-4">
                      <AccordionTrigger className="text-left text-secondary hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <p className="text-center text-muted-foreground mt-6">
                  More questions? <Link to="/faq" className="text-primary hover:underline">Visit our complete FAQ page</Link> or <Link to="/contact" className="text-primary hover:underline">get in touch</Link>.
                </p>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Related Services */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6 text-center">
                Related Services
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link to="/ai-package" className="p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors text-center">
                  <span className="font-semibold text-secondary">AI Automation</span>
                  <p className="text-sm text-muted-foreground mt-1">Add AI to your tools</p>
                </Link>
                <Link to="/platforms/custom-development" className="p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors text-center">
                  <span className="font-semibold text-secondary">Custom Development</span>
                  <p className="text-sm text-muted-foreground mt-1">Full web applications</p>
                </Link>
                <Link to="/services/maintenance-support" className="p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors text-center">
                  <span className="font-semibold text-secondary">Maintenance & Support</span>
                  <p className="text-sm text-muted-foreground mt-1">Ongoing care for your app</p>
                </Link>
                <Link to="/blog/personalised-apps-struggling-business-owners" className="p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors text-center">
                  <span className="font-semibold text-secondary">Read Our Guide</span>
                  <p className="text-sm text-muted-foreground mt-1">5 apps every owner needs</p>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Streamline Your Workflow?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Tell us about your process and we'll build the perfect tool.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Link to="/contact">
                    Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/quick-start">
                    Start Project Brief
                  </Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Areas Footer */}
        <AreasFooter />
      </main>

      <Footer />
    </div>
  );
};

export default PersonalisedApps;