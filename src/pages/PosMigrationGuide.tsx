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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  MessageSquare,
  ClipboardCheck,
  Calendar,
  Database,
  Monitor,
  GraduationCap,
  Rocket,
  AlertTriangle,
  FileText,
  Users,
  Package,
  
  Gift,
  Clock,
  Shield,
  Phone,
  Settings,
  TrendingDown,
  Lock,
  Ban,
  RefreshCcw,
} from "lucide-react";

const PosMigrationGuide = () => {
  const faqs = [
    {
      question: "How long does migration take?",
      answer: "Most single-location migrations are completed in 2-3 days. This includes assessment, data transfer, hardware setup, and staff training. Multi-location businesses may require 1-2 weeks depending on complexity.",
    },
    {
      question: "Will I lose my sales history?",
      answer: "No. We export your historical sales data from your legacy system in PDF/CSV format for your records. While not all data can be imported into Square (due to different data structures), you retain full access to your historical reports.",
    },
    {
      question: "What if I'm still under contract?",
      answer: "We'll review your contract during the free assessment. Many businesses are out of contract without realising. If you're still locked in, we can advise on negotiation strategies or help you plan for a future migration date.",
    },
    {
      question: "Can I run both systems in parallel?",
      answer: "Yes. For larger businesses or those concerned about disruption, we can set up Square alongside your existing system for a trial period. This adds complexity but provides peace of mind during the transition.",
    },
    {
      question: "What happens to my gift card balances?",
      answer: "Gift card balance transfers depend on your current provider. Many legacy systems don't allow balance exports. We'll assess this during planning and advise on options, which may include honouring balances manually during a transition period.",
    },
    {
      question: "Do you handle the data export from my old system?",
      answer: "Yes. We manage the entire export process from your legacy provider, including product catalogues, customer records, and any available sales history. Some providers charge exit fees for data exports, which we'll identify upfront.",
    },
  ];

  const migrationSteps = [
    {
      step: 1,
      title: "Free Assessment",
      duration: "30 minutes",
      icon: ClipboardCheck,
      description: "We review your current system, contracts, and exit options. Identify any penalties, data export limitations, and hardware return requirements.",
    },
    {
      step: 2,
      title: "Migration Planning",
      duration: "1-2 days",
      icon: Calendar,
      description: "Create a detailed migration plan including data export strategy, hardware requirements, integration needs, and staff training schedule.",
    },
    {
      step: 3,
      title: "Data Transfer",
      duration: "Same day",
      icon: Database,
      description: "Export and transfer your products, menus, customer records, pricing, and modifiers. Configure categories and inventory levels.",
    },
    {
      step: 4,
      title: "Hardware Setup",
      duration: "1 day",
      icon: Monitor,
      description: "Install and configure Square terminals, receipt printers, barcode scanners, and any peripherals. Test all payment methods.",
    },
    {
      step: 5,
      title: "Staff Training",
      duration: "Half day",
      icon: GraduationCap,
      description: "Hands-on training for your team on the new system. Cover transactions, refunds, reports, and day-to-day operations.",
    },
    {
      step: 6,
      title: "Go Live",
      duration: "Day 3",
      icon: Rocket,
      description: "Switch to Square for all transactions. We provide 30 days of priority support to ensure a smooth transition.",
    },
  ];

  const legacyProblems = [
    {
      icon: Lock,
      title: "Contract Lock-ins",
      description: "3-5 year contracts with no easy exit. Even if you're unhappy, you're stuck paying.",
    },
    {
      icon: TrendingDown,
      title: "Monthly Lease Fees",
      description: "£80-150/month for hardware you'll never own. Over 5 years, that's £4,800-9,000 wasted.",
    },
    {
      icon: Ban,
      title: "Expensive Exit Penalties",
      description: "£500-2,000+ to cancel early. Providers profit from your frustration.",
    },
    {
      icon: Clock,
      title: "Slow, Outdated Software",
      description: "Clunky interfaces, slow transactions, no modern features like online ordering.",
    },
    {
      icon: Phone,
      title: "Poor Customer Support",
      description: "Overseas call centres with long wait times. On-site support costs extra.",
    },
    {
      icon: Settings,
      title: "Hardware You Never Own",
      description: "Return it at contract end or keep paying. Either way, you've paid thousands for nothing.",
    },
  ];

  const migrationChecklist = [
    {
      category: "Products & Menus",
      icon: Package,
      items: ["Items and categories", "Prices and modifiers", "Product images", "Variants and options"],
    },
    {
      category: "Customer Records",
      icon: Users,
      items: ["Names and contact details", "Purchase history (where available)", "Loyalty points (manual transfer)", "Notes and preferences"],
    },
    {
      category: "Inventory",
      icon: Database,
      items: ["Stock levels", "Supplier information", "Reorder points", "Cost prices"],
    },
    {
      category: "Financial Data",
      icon: FileText,
      items: ["Sales reports (PDF/CSV export)", "Tax records", "End-of-day reports", "Historical analytics"],
    },
    {
      category: "Gift Cards & Loyalty",
      icon: Gift,
      items: ["Outstanding balances", "Loyalty programme status", "Customer points", "Reward tiers"],
    },
    {
      category: "Staff & Operations",
      icon: Users,
      items: ["Staff accounts", "Permission levels", "Clock-in/out data", "Commission records"],
    },
  ];

  const comparisonData = [
    { feature: "Hardware ownership", square: "Buy once, own it", legacy: "Lease forever" },
    { feature: "Contracts", square: "None — cancel anytime", legacy: "3-5 year lock-in" },
    { feature: "Monthly software fees", square: "Free (basic) or £49/month", legacy: "£80-150/month" },
    { feature: "Exit fees", square: "£0", legacy: "£500-2,000+" },
    { feature: "Hardware cost (typical)", square: "£500-1,500", legacy: "£0 upfront, £4,000+ over term" },
    { feature: "3-year total cost (estimate)", square: "£1,500-2,500", legacy: "£5,000-10,000+" },
    { feature: "Offline capability", square: "Yes", legacy: "Usually no" },
    { feature: "Software updates", square: "Free, automatic", legacy: "Often paid" },
  ];

  const migrationPackages = [
    {
      name: "Simple Migration",
      price: "From £299",
      ideal: "Single terminal, basic setup",
      features: [
        "Single terminal migration",
        "Basic product/menu transfer",
        "Hardware installation",
        "Half-day staff training",
        "7-day post-migration support",
      ],
    },
    {
      name: "Full Migration",
      price: "From £499",
      ideal: "Growing businesses",
      popular: true,
      features: [
        "Up to 3 terminals",
        "Complete data migration",
        "Customer record transfer",
        "Integration setup",
        "Full-day staff training",
        "30-day priority support",
      ],
    },
    {
      name: "Enterprise Migration",
      price: "From £899+",
      ideal: "Multi-location businesses",
      features: [
        "Unlimited terminals",
        "Full data mapping",
        "Custom integrations",
        "Dedicated project manager",
        "Extended training programme",
        "60-day premium support",
        "Parallel running option",
      ],
    },
  ];

  const howToSteps = migrationSteps.map((step) => ({
    name: step.title,
    text: step.description,
    url: "https://digital.luminousanddeliver.co.uk/pos-migration-guide",
  }));

  return (
    <>
      <SEO
        title="POS Migration Guide | Switch from Legacy EPOS to Square | London"
        description="Step-by-step guide to migrating from legacy EPOS to Square POS. Data transfer, contract exit advice, and professional installation in 2-3 days. London & UK."
        keywords="pos migration, switch epos system, legacy epos replacement, square migration uk, epos data transfer, pos system upgrade london, replace epos system, pos contract exit"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/pos-migration-guide"
      />
      <ServiceSchema
        name="POS Migration Service"
        description="Professional migration from legacy EPOS systems to Square POS, including data transfer, contract exit guidance, and staff training."
        url="https://digital.luminousanddeliver.co.uk/pos-migration-guide"
        priceRange="£299-£899+"
        serviceType="POS Migration"
      />
      <FAQSchema faqs={faqs} pageId="pos-migration-guide" />
      <HowToSchema
        name="How to Migrate from Legacy EPOS to Square POS"
        description="Complete guide to switching from traditional EPOS systems to modern Square POS, including data transfer and staff training."
        steps={howToSteps}
        totalTime="P3D"
      />

      <Navigation darkHero />

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-16 md:pt-44 md:pb-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 overflow-hidden">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl text-center mx-auto">
                <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
                  POS Migration Specialists
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                  Switch from Legacy EPOS to Square Without the Headaches
                </h1>
                <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                  Escape expensive contracts, outdated hardware, and poor support. We handle the entire migration—data transfer, hardware setup, and staff training—in 2-3 days.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="text-lg bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link to="/contact">
                      Get Free Migration Assessment <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-lg border-slate-400 text-slate-200 hover:bg-slate-800">
                    <a href="https://wa.me/447356260648" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp Us
                    </a>
                  </Button>
                </div>
                <p className="mt-6 text-slate-400">
                  <span className="font-semibold text-white">Migration from £299</span> • No hidden fees • Local London support
                </p>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        <BreadcrumbNav />

        {/* Stats Section */}
        <section className="py-12 bg-muted/30">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { stat: "73%", label: "of businesses overpay for legacy EPOS" },
                { stat: "£3,500+", label: "average savings over 3 years" },
                { stat: "2-3 days", label: "typical migration timeline" },
                { stat: "£0", label: "exit fees with Square" },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className="p-4">
                    <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{item.stat}</p>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* Why Migrate Section */}
        <section className="py-16 lg:py-24">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                The Problem with Legacy EPOS
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Traditional EPOS providers lock you into expensive contracts with hardware you never own. It's time to break free.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {legacyProblems.map((problem, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className="bg-card rounded-xl p-6 border border-destructive/20 h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                        <problem.icon className="h-5 w-5 text-destructive" />
                      </div>
                      <h3 className="font-semibold">{problem.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{problem.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                Your Migration Timeline
              </h2>
              <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
                From assessment to go-live in just 2-3 days. Here's exactly what happens at each stage.
              </p>
            </AnimatedSection>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/40 -translate-x-1/2 hidden md:block" />

              {migrationSteps.map((step, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className={`relative flex items-start gap-6 mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full items-center justify-center text-primary-foreground font-bold z-10">
                      {step.step}
                    </div>

                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-sm">
                        <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center md:hidden">
                            <span className="font-bold text-primary">{step.step}</span>
                          </div>
                          <step.icon className="h-5 w-5 text-primary hidden md:block" />
                          <h3 className="font-semibold text-lg text-white">{step.title}</h3>
                          <step.icon className="h-5 w-5 text-primary md:hidden" />
                        </div>
                        <span className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded mb-3">
                          {step.duration}
                        </span>
                        <p className="text-slate-300 text-sm">{step.description}</p>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* What Gets Migrated */}
        <section className="py-16 lg:py-24">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                What Gets Migrated
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                We transfer everything possible from your legacy system. Here's the complete migration checklist.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {migrationChecklist.map((category, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className="bg-card rounded-xl p-6 border border-border h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <category.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">{category.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection animation="fade">
              <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg max-w-3xl mx-auto">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Note:</strong> Some legacy EPOS providers restrict data exports or charge exit fees. We'll identify these limitations during your free assessment and advise on the best approach.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Contract Exit Guidance */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Contract Exit Guidance
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Don't know how to get out of your current contract? Here's what you need to know.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <AnimatedSection animation="fade" staggerIndex={0}>
                <div className="bg-card rounded-xl p-6 border border-border h-full">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Check Your Contract End Date
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Many businesses are out of contract without realising. Dig out your original agreement and check the term length and start date. You may be free to leave with minimal notice.
                  </p>
                  <p className="text-sm text-primary font-medium">
                    Tip: Rolling monthly contracts after the initial term often have 30-day notice periods.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade" staggerIndex={1}>
                <div className="bg-card rounded-xl p-6 border border-border h-full">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Negotiate Exit Terms
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    If you're mid-contract, don't assume you're stuck. Providers often negotiate reduced exit fees, especially if you've been a long-term customer or experienced service issues.
                  </p>
                  <p className="text-sm text-primary font-medium">
                    We can advise on negotiation strategies during your assessment.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade" staggerIndex={2}>
                <div className="bg-card rounded-xl p-6 border border-border h-full">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" />
                    Hardware Return Requirements
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Leased hardware typically needs returning. Check what equipment is leased vs. owned, and understand any fees for non-return or damage. Receipt printers and cash drawers are often yours to keep.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade" staggerIndex={3}>
                <div className="bg-card rounded-xl p-6 border border-border h-full">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <RefreshCcw className="h-5 w-5 text-primary" />
                    Parallel Running Option
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    For businesses concerned about disruption, we can run Square alongside your existing system during the transition. This provides a safety net while your team builds confidence.
                  </p>
                  <p className="text-sm text-primary font-medium">
                    Available with Full and Enterprise migration packages.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* Comparison Table */}
        <section className="py-16 lg:py-24">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Square vs Legacy EPOS
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                See the real cost difference between modern Square POS and traditional EPOS systems.
              </p>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/3">Feature</TableHead>
                    <TableHead className="text-center bg-primary/5">
                      <span className="text-primary font-semibold">Square POS</span>
                    </TableHead>
                    <TableHead className="text-center">Legacy EPOS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{row.feature}</TableCell>
                      <TableCell className="text-center bg-primary/5">
                        <span className="flex items-center justify-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          {row.square}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="flex items-center justify-center gap-2 text-muted-foreground">
                          <XCircle className="h-4 w-4 text-destructive" />
                          {row.legacy}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Container>
        </section>

        {/* Migration Packages */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Migration Packages
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Professional migration services tailored to your business size and complexity.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {migrationPackages.map((pkg, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className={`bg-card rounded-xl p-6 border h-full flex flex-col ${pkg.popular ? 'border-primary shadow-lg relative' : 'border-border'}`}>
                    {pkg.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        Most Popular
                      </span>
                    )}
                    <h3 className="font-semibold text-xl mb-2">{pkg.name}</h3>
                    <p className="text-2xl font-bold text-primary mb-2">{pkg.price}</p>
                    <p className="text-sm text-muted-foreground mb-4">{pkg.ideal}</p>
                    <ul className="space-y-3 mb-6 flex-1">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className={pkg.popular ? '' : 'variant-outline'} variant={pkg.popular ? 'default' : 'outline'}>
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              Hardware costs quoted separately based on your requirements. All prices exclude VAT.
            </p>
          </Container>
        </section>

        {/* FAQs */}
        <section className="py-16 lg:py-24">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Migration FAQs
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Common questions about switching from legacy EPOS to Square.
              </p>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Container>
        </section>

        {/* Related Services */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Related Services
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Explore our full range of POS solutions and support options.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { title: "POS System Overview", desc: "Full details on Square POS for all industries", link: "/sectors/pos-systems" },
                { title: "POS Setup & Installation", desc: "New Square POS installation service", link: "/services/pos-setup" },
                { title: "Restaurant POS", desc: "Specialised hospitality solutions", link: "/sectors/restaurant-pos" },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <Link to={item.link} className="block h-full">
                    <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all h-full group">
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                      <span className="text-primary font-medium text-sm inline-flex items-center group-hover:underline">
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary/90 to-secondary">
          <Container>
            <AnimatedSection animation="fade">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
                  Ready to Escape Your EPOS Contract?
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  Get a free assessment of your current system. We'll identify exit options, data migration requirements, and provide a detailed quote—no obligation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="text-lg bg-background text-primary hover:bg-muted">
                    <Link to="/contact">
                      Get Free Migration Assessment <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                    <a href="https://wa.me/447356260648" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp Us
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>
      </main>

      <AreasFooter />
      <Footer />
    </>
  );
};

export default PosMigrationGuide;
