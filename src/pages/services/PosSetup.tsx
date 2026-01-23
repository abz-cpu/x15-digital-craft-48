import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { ServiceSchema } from "@/components/ServiceSchema";
import { FAQSchema } from "@/components/FAQSchema";
import { Container } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CreditCard,
  Store,
  Utensils,
  Scissors,
  Wrench,
  Clock,
  Shield,
  MapPin,
  Phone,
  CheckCircle2,
  ArrowRight,
  Zap,
  Users,
  Monitor,
  Truck,
  Gift,
  Calculator,
  Globe,
  XCircle,
  Lock,
  TrendingDown,
} from "lucide-react";

const PosSetup = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fade-section").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const faqItems = [
    {
      question: "Can I set up Square myself?",
      answer: "You can, but most business owners find that DIY setups lead to configuration errors, integration problems, and staff confusion. A professional installation ensures your system is optimised for your specific business type, staff are properly trained, and you have expert support when things go wrong. The cost of getting it right first time is significantly less than fixing problems later.",
    },
    {
      question: "What if I already have a payment system?",
      answer: "We can migrate your existing data and help you transition smoothly. If your current system is causing problems, we'll identify the issues and set up Square to avoid the same pitfalls. We also handle the hardware trade-in where possible, reducing your upfront costs.",
    },
    {
      question: "Do I really need ongoing support?",
      answer: "Consider this: one system failure during a busy Saturday typically costs £1,500-£5,000 in lost revenue and damaged reputation. Monthly support costs £79-£199 depending on your needs. The maths speaks for itself. Beyond emergencies, ongoing support means menu updates, staff changes, and system optimisations happen quickly without disrupting your business.",
    },
    {
      question: "What happens if the system goes down?",
      answer: "With our support plans, you call us directly—not a call centre, not a ticket system. Basic support includes same-day response during business hours. Premium support includes 24/7 emergency response. We're based in East London and can often resolve issues remotely within minutes, or attend on-site when needed.",
    },
    {
      question: "How quickly can you install?",
      answer: "Most installations take 2-3 days from consultation to go-live. This includes hardware setup, menu/product configuration, staff training, and testing. Compare this to competitors who often take 2+ weeks. We understand that downtime costs money, so we prioritise fast, thorough installations.",
    },
    {
      question: "Do you cover areas outside London?",
      answer: "Yes. While we're based in Stratford, East London, we provide services across the UK. Remote support is available for all clients, and we travel for installations where needed. Hardware can be shipped, configured, and supported remotely for businesses outside the London area.",
    },
  ];

  const industries = [
    {
      icon: Utensils,
      title: "Restaurants & Hospitality",
      features: ["Table management", "Kitchen display systems", "Course timing", "Split bills", "Tip handling"],
    },
    {
      icon: Store,
      title: "Retail & Shops",
      features: ["Inventory tracking", "Barcode scanning", "Stock alerts", "Supplier management", "Multi-location sync"],
    },
    {
      icon: Scissors,
      title: "Salons & Beauty",
      features: ["Appointment booking", "Staff commissions", "Loyalty programs", "Service packages", "Client history"],
    },
    {
      icon: Wrench,
      title: "Trades & Services",
      features: ["Mobile invoicing", "Deposit collection", "On-site payments", "Quote management", "Job tracking"],
    },
  ];

  const supportPlans = [
    {
      name: "Basic",
      price: "£79",
      period: "/month",
      description: "Essential support for smaller operations",
      features: [
        "Menu and product updates",
        "Staff account changes",
        "Email support (business hours)",
        "Same-day response",
        "Remote troubleshooting",
      ],
      highlight: false,
    },
    {
      name: "Standard",
      price: "£129",
      period: "/month",
      description: "Priority support for busy businesses",
      features: [
        "Everything in Basic",
        "Priority phone support",
        "Extended hours (7am-10pm)",
        "Quarterly system review",
        "Integration updates",
      ],
      highlight: true,
    },
    {
      name: "Premium",
      price: "£199",
      period: "/month",
      description: "Complete peace of mind",
      features: [
        "Everything in Standard",
        "24/7 emergency support",
        "Dedicated account manager",
        "Same-day on-site (London)",
        "Proactive monitoring",
      ],
      highlight: false,
    },
  ];

  const addOns = [
    { name: "Online Ordering Setup", price: "£299", icon: Globe },
    { name: "Delivery Platform Integration", price: "£349", icon: Truck, desc: "Uber Eats, Deliveroo, Just Eat" },
    { name: "QR Code Table Ordering", price: "£199", icon: Monitor },
    { name: "Customer Loyalty Program", price: "£249", icon: Gift },
    { name: "Accounting Sync", price: "£149", icon: Calculator, desc: "Xero, QuickBooks" },
    { name: "Digital Menu Screens", price: "£499+", icon: Monitor },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Square POS Setup & Installation | Payment Systems London | L&D Digital"
        description="Professional Square POS installation in 2-3 days. Serving restaurants, retail, salons across London & UK. Local support, no call centres. Setup from £499."
        canonicalUrl="https://digital.luminousanddeliver.co.uk/services/pos-setup"
        keywords="square pos setup, pos installation london, payment system setup, restaurant pos system, retail pos uk, salon booking system"
      />
      <ServiceSchema
        name="Square POS Setup & Installation"
        description="Professional Square POS system installation, configuration, and ongoing support for UK businesses. Fast 2-3 day installation with local support."
        url="https://digital.luminousanddeliver.co.uk/services/pos-setup"
        priceRange="£499-£2499"
        serviceType="Payment System Installation"
      />
      <FAQSchema faqs={faqItems} pageId="pos-setup" />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/website.png')] bg-cover bg-center opacity-[0.08]" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
              <CreditCard className="w-3 h-3 mr-1.5" />
              Payment Solutions
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Square POS Setup & Installation
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-4 leading-relaxed">
              When your payment system crashes during the Saturday lunch rush, customers walk out and revenue disappears.
            </p>
            <p className="text-base md:text-lg text-slate-400 mb-8">
              We install reliable Square systems in 2-3 days. You get working payments, trained staff, and someone local to call when you need help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <a href="tel:+442012345678">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <BreadcrumbNav />

      {/* Who This Serves */}
      <AnimatedSection className="py-16 md:py-20 bg-muted/30">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Who This Is For
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              If you accept in-person payments and need a system that works reliably without constant technical headaches, we can help.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Utensils, label: "Restaurants & Cafés" },
              { icon: Store, label: "Retail & Shops" },
              { icon: Scissors, label: "Salons & Spas" },
              { icon: Wrench, label: "Trade Businesses" },
            ].map((item, index) => (
              <Card key={index} className="text-center p-6 hover-lift bg-card">
                <item.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                <p className="font-medium text-foreground">{item.label}</p>
              </Card>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      {/* Complete System Installation */}
      <AnimatedSection className="py-16 md:py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Complete System Installation
              </h2>
              <p className="text-muted-foreground mb-8">
                A professional installation means your system is configured correctly from day one. No guesswork, no configuration errors, no frustrated staff trying to figure out software they weren't trained on.
              </p>
              <ul className="space-y-4">
                {[
                  "Initial consultation to understand your business needs",
                  "Menu and product setup tailored to your operations",
                  "Hardware sourcing, installation, and configuration",
                  "On-site or remote staff training",
                  "Payment testing before you go live",
                  "Integration with existing systems (accounting, inventory, online ordering)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="p-8 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">2-3 Days</p>
                  <p className="text-muted-foreground">Consultation to go-live</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                While competitors take 2+ weeks, we understand that every day without a working system costs you money. Fast installation without cutting corners.
              </p>
            </Card>
          </div>
        </Container>
      </AnimatedSection>

      {/* Industry-Specific Configuration */}
      <AnimatedSection className="py-16 md:py-20 bg-muted/30">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Industry-Specific Configuration
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your business isn't generic, so your payment system shouldn't be either. We configure Square specifically for how your industry operates.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="p-6 hover-lift">
                <CardHeader className="p-0 pb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <industry.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{industry.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="grid grid-cols-2 gap-2">
                    {industry.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      {/* Hardware Supply & Installation */}
      <AnimatedSection className="py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Hardware Supply & Installation
            </h2>
            <p className="text-muted-foreground mb-8">
              We source, install, and configure all the hardware you need. From basic card terminals to full multi-station setups with kitchen displays and customer-facing screens—everything is professionally installed and tested before you go live.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              <Card className="p-5">
                <CreditCard className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Card Terminals</h3>
                <p className="text-sm text-muted-foreground">Mobile, countertop, and portable options</p>
              </Card>
              <Card className="p-5">
                <Monitor className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Display Systems</h3>
                <p className="text-sm text-muted-foreground">Till screens, kitchen displays, customer-facing</p>
              </Card>
              <Card className="p-5">
                <Wrench className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Peripherals</h3>
                <p className="text-sm text-muted-foreground">Receipt printers, barcode scanners, cash drawers</p>
              </Card>
            </div>
            <p className="text-sm text-muted-foreground mt-8">
              Hardware is quoted separately based on your specific requirements. All equipment is professionally configured and tested.
            </p>
          </div>
        </Container>
      </AnimatedSection>

      {/* Monthly Support Plans */}
      <AnimatedSection className="py-16 md:py-20 bg-muted/30">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Monthly Support Plans
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              A payment system without reliable support is a liability. When something goes wrong during your busiest hours, you need someone who answers the phone—not a ticket queue.
            </p>
            <Card className="inline-block p-4 bg-amber-500/10 border-amber-500/30">
              <p className="text-sm font-medium text-amber-700 dark:text-amber-400">
                <strong>The reality:</strong> One system failure during peak hours typically costs £1,500-£5,000 in lost revenue. Monthly support is £79-£199.
              </p>
            </Card>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {supportPlans.map((plan, index) => (
              <Card
                key={index}
                className={`p-6 relative ${plan.highlight ? "border-primary ring-2 ring-primary/20" : ""}`}
              >
                {plan.highlight && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="p-0 pb-4 text-center">
                  <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      {/* Optional Add-Ons */}
      <AnimatedSection className="py-16 md:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Optional Add-Ons
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Extend your payment system's capabilities with professional integrations.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((addon, index) => (
              <Card key={index} className="p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <addon.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground text-sm">{addon.name}</p>
                  {addon.desc && <p className="text-xs text-muted-foreground">{addon.desc}</p>}
                </div>
                <p className="font-semibold text-primary whitespace-nowrap">{addon.price}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Card className="inline-block p-4 bg-muted/50">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Website + POS Integration:</strong> £799 — Connect your online presence directly to your payment system
              </p>
            </Card>
          </div>
        </Container>
      </AnimatedSection>

      {/* Transparent Pricing */}
      <AnimatedSection className="py-16 md:py-20 bg-muted/30">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Transparent Pricing
              </h2>
              <p className="text-muted-foreground">
                No hidden costs. Fixed price agreed before work starts.
              </p>
            </div>
            <Card className="p-8">
              <h3 className="font-semibold text-lg text-foreground mb-6">Setup Fees (One-Time)</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <div>
                    <p className="font-medium text-foreground">Small Business</p>
                    <p className="text-sm text-muted-foreground">Café, salon, small shop</p>
                  </div>
                  <p className="font-bold text-primary text-lg">£499-£799</p>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <div>
                    <p className="font-medium text-foreground">Mid-Size Operations</p>
                    <p className="text-sm text-muted-foreground">Restaurant, retail store</p>
                  </div>
                  <p className="font-bold text-primary text-lg">£799-£1,499</p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-foreground">Complex Setups</p>
                    <p className="text-sm text-muted-foreground">Multi-location, large venues, bars</p>
                  </div>
                  <p className="font-bold text-primary text-lg">£1,499-£2,499</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Hardware quoted separately based on your requirements. All prices are fixed and agreed before work begins.
              </p>
            </Card>
          </div>
        </Container>
      </AnimatedSection>

      {/* Why L&D Digital */}
      <AnimatedSection className="py-16 md:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why L&D Digital
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're not a hardware reseller. We're a service business that ensures your payment system works reliably so you can focus on running your business.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Fast Installation", desc: "2-3 days, not 2+ weeks" },
              { icon: MapPin, title: "Local Presence", desc: "Based in Stratford, East London" },
              { icon: Shield, title: "Security Expertise", desc: "Cybersecurity background" },
              { icon: Users, title: "Direct Support", desc: "You call us, not a call centre" },
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center">
                <item.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      {/* Square vs Legacy EPOS Comparison */}
      <AnimatedSection className="py-16 md:py-20 bg-muted/30">
        <Container>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-destructive/10 text-destructive border-destructive/30">
              The Real Comparison
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why Square Beats Legacy EPOS Systems
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Many businesses are locked into overpriced, restrictive EPOS systems with hidden fees and long contracts. Here's how Square compares—and why we recommend it.
            </p>
          </div>

          {/* Comparison Table */}
          <Card className="mb-12 overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Factor</TableHead>
                    <TableHead className="font-semibold text-primary">Square</TableHead>
                    <TableHead className="font-semibold text-destructive">Legacy/Proprietary EPOS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Hardware</TableCell>
                    <TableCell className="text-primary">Buy once, own it</TableCell>
                    <TableCell className="text-muted-foreground">Often leased (£30+/month)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Contract</TableCell>
                    <TableCell className="text-primary">None — cancel anytime</TableCell>
                    <TableCell className="text-muted-foreground">12-36 months lock-in</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Exit Fees</TableCell>
                    <TableCell className="text-primary">None</TableCell>
                    <TableCell className="text-muted-foreground">Often £1,000+</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Monthly Fees</TableCell>
                    <TableCell className="text-primary">Optional support only</TableCell>
                    <TableCell className="text-muted-foreground">Mandatory bundled fees</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Software Updates</TableCell>
                    <TableCell className="text-primary">Free, automatic</TableCell>
                    <TableCell className="text-muted-foreground">Often paid or restricted</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Payment Rates</TableCell>
                    <TableCell className="text-primary">Transparent (~1.75%)</TableCell>
                    <TableCell className="text-muted-foreground">Hidden fees common</TableCell>
                  </TableRow>
                  <TableRow className="bg-muted/30 font-semibold">
                    <TableCell className="font-bold">Total 3-Year Cost</TableCell>
                    <TableCell className="text-primary font-bold">~£1,500-£2,500</TableCell>
                    <TableCell className="text-destructive font-bold">~£5,000+</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Card>

          {/* Three Key Differentiators */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 border-primary/20 bg-primary/5">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">No Lock-In</h3>
              <p className="text-sm text-muted-foreground">
                You're not trapped. If you want to leave, you leave. No penalties, no exit fees, no awkward "retention" calls.
              </p>
            </Card>
            <Card className="p-6 border-primary/20 bg-primary/5">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Hardware Ownership</h3>
              <p className="text-sm text-muted-foreground">
                Buy once at £200-500. Legacy systems lease at £30+/month = £1,080 over 3 years. You own your equipment outright.
              </p>
            </Card>
            <Card className="p-6 border-primary/20 bg-primary/5">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingDown className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Future-Proof</h3>
              <p className="text-sm text-muted-foreground">
                Square updates automatically at no extra cost. Legacy systems often charge for upgrades or restrict features behind paywalls.
              </p>
            </Card>
          </div>

          <p className="text-center text-muted-foreground text-sm max-w-2xl mx-auto">
            We recommend Square because it's genuinely cheaper long-term for most UK businesses—not because we're locked into reselling one brand.
          </p>
        </Container>
      </AnimatedSection>

      {/* Next Steps */}
      <AnimatedSection className="py-16 md:py-20 bg-muted/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
              Next Steps
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Free Consultation", desc: "Discuss your business needs and current challenges" },
                { step: "2", title: "Custom Quote", desc: "Receive fixed pricing for setup, hardware, and support" },
                { step: "3", title: "Installation & Go-Live", desc: "System installed, staff trained, payments working in 2-3 days" },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/contact">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Common Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-foreground">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </AnimatedSection>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              The Reality
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Every day with an unreliable payment system is a day of lost revenue and frustrated customers. One system failure during a busy period costs more than a year of professional support. How much is your current setup costing you?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <Link to="/contact">
                  Get Your Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <a href="tel:+442012345678">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default PosSetup;
