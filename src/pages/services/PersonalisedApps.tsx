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
        <section className="relative overflow-hidden pt-40 pb-20 md:pt-44 md:pb-24 lg:pt-48 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-secondary">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          </div>
          <Container>
            <div className="relative text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 mb-6">
                Custom Business Tools • From £500
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Stop Drowning in Spreadsheets
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4">
                Order trackers, invoice managers, financial dashboards — built exactly how you work.
              </p>
              <p className="text-lg text-white/70 mb-8">
                Personalised apps that replace your messy spreadsheets with clean, simple tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                  <Link to="/contact">
                    Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                  <Link to="/quick-start">
                    Start Project Brief
                  </Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Breadcrumb below hero */}
        <BreadcrumbNav />

        {/* Who This Is For */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    Is This You?
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                    Sound Familiar?
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    If you're nodding along, we built these tools for you.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { text: "Tracking orders on paper, WhatsApp, or sticky notes", emoji: "📝" },
                    { text: "Chasing invoices and losing track of who's paid", emoji: "💸" },
                    { text: "No idea where your money goes each month", emoji: "🤷" },
                    { text: "Customer details scattered across five different apps", emoji: "📱" },
                    { text: "Spending hours on admin instead of growing your business", emoji: "⏰" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 bg-muted/50 rounded-xl border border-border hover:border-primary/30 transition-colors">
                      <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                      <span className="text-secondary font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <p className="text-muted-foreground">
                    <strong className="text-secondary">You're not alone.</strong> Most small business owners start this way — but they don't have to stay there.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Real-World Examples */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <Container>
            <AnimatedSection animation="scale">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    Popular Solutions
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                    Tools Real Business Owners Use
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Stop juggling spreadsheets and WhatsApp notes. Here's what we build for UK businesses just like yours.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {realWorldExamples.map((example, i) => (
                    <Card key={i} className="hover-lift h-full border-0 shadow-md hover:shadow-xl transition-shadow duration-300 bg-background">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                          <example.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-secondary mb-2">{example.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">{example.description}</p>
                        <div className="pt-4 border-t border-border mt-auto">
                          <p className="text-xs text-muted-foreground mb-1">
                            <span className="font-medium">Best for:</span> {example.forWho}
                          </p>
                          <p className="text-primary font-bold text-lg">{example.startPrice}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="text-center mt-10">
                  <Link 
                    to="/blog/personalised-apps-struggling-business-owners" 
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Read our full guide: 5 Apps Every Struggling Business Owner Needs
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
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
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  Clear & Honest
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                  Transparent Pricing
                </h2>
                <p className="text-lg text-muted-foreground">
                  No hidden fees. No surprise invoices. Just straightforward pricing.
                </p>
              </div>
              
              <Card className="border-2 border-primary/20 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-primary/5 p-8 text-center border-b border-border">
                    <p className="text-muted-foreground mb-2">Most projects start from</p>
                    <p className="text-5xl font-bold text-primary mb-2">£500</p>
                    <p className="text-sm text-muted-foreground">One-time payment, you own it forever</p>
                  </div>
                  <div className="p-8">
                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-secondary">Quick Turnaround</p>
                          <p className="text-sm text-muted-foreground">1-2 weeks for simple tools</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-secondary">Fully Customised</p>
                          <p className="text-sm text-muted-foreground">Built to your exact workflow</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-secondary">Training Included</p>
                          <p className="text-sm text-muted-foreground">We show you how to use it</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-secondary">No Monthly Fees</p>
                          <p className="text-sm text-muted-foreground">Unlike SaaS subscriptions</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4 text-center">
                      <p className="text-sm text-muted-foreground">
                        <strong>Compare:</strong> Part-time admin = £800-1,200/month. Enterprise SaaS = £50-200/month forever.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    Got Questions?
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                    Frequently Asked Questions
                  </h2>
                </div>
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {faqs.map((faq, i) => (
                    <AccordionItem 
                      key={i} 
                      value={`faq-${i}`} 
                      className="bg-background rounded-xl border border-border px-6 data-[state=open]:border-primary/30 shadow-sm"
                    >
                      <AccordionTrigger className="text-left text-secondary hover:text-primary py-5 hover:no-underline">
                        <span className="font-medium pr-4">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <div className="text-center mt-8">
                  <p className="text-muted-foreground">
                    More questions? <Link to="/faq" className="text-primary hover:underline font-medium">Visit our complete FAQ page</Link> or <Link to="/contact" className="text-primary hover:underline font-medium">get in touch</Link>.
                  </p>
                </div>
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