import { SEO } from "@/components/SEO";
import { Container } from "@/components/Container";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { ServiceSchema } from "@/components/ServiceSchema";
import { FAQSchema } from "@/components/FAQSchema";
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
  Utensils,
  ShoppingBag,
  Scissors,
  Wrench,
  Wifi,
  Shield,
  Users,
  Clock,
  CreditCard,
  Receipt,
  Settings,
  HeadphonesIcon,
} from "lucide-react";

const PosServices = () => {
  const faqs = [
    {
      question: "Do you install POS systems for businesses other than restaurants?",
      answer: "Yes, we install Square POS for restaurants, cafés, retail shops, salons, spas, barbershops, mechanics, repair shops, and service businesses. Each setup is configured specifically for your industry with relevant features enabled."
    },
    {
      question: "How much does a POS system installation cost?",
      answer: "Our setup packages start from £299 for small single-terminal installations, £499 for growing businesses with multiple terminals, and £899+ for complex multi-location setups. Monthly support plans range from £79-£199/month."
    },
    {
      question: "Can you integrate with my booking or inventory system?",
      answer: "Square integrates with popular booking systems like Acuity and Calendly for salons, inventory management tools for retail, and accounting software like Xero and QuickBooks. We configure all relevant integrations during setup."
    },
    {
      question: "What support do you offer after installation?",
      answer: "We offer three support tiers: Essential (£79/month) for remote support, Professional (£129/month) adding on-site visits, and Premium (£199/month) with priority response and quarterly reviews. All plans include software updates and troubleshooting."
    },
    {
      question: "Do you serve areas outside East London?",
      answer: "Yes. While we're based in East London and serve Stratford, Ilford, Newham, and surrounding areas, we install POS systems across Greater London and can arrange installations further afield for larger projects."
    },
    {
      question: "How long does POS installation take?",
      answer: "Most single-location installations are completed in 2-3 days, including hardware setup, software configuration, and staff training. Multi-location or complex setups may take longer depending on requirements."
    }
  ];

  const industries = [
    {
      icon: Utensils,
      title: "Restaurants & Hospitality",
      desc: "Cafés, restaurants, takeaways, pubs, and food trucks",
      features: ["Table management", "Kitchen display integration", "Split bills & tips", "Menu management"],
    },
    {
      icon: ShoppingBag,
      title: "Retail & Shops",
      desc: "High street stores, boutiques, convenience shops",
      features: ["Inventory tracking", "Barcode scanning", "Loyalty programmes", "Multi-location sync"],
    },
    {
      icon: Scissors,
      title: "Salons & Beauty",
      desc: "Hair salons, spas, barbershops, nail bars",
      features: ["Appointment booking", "Client profiles", "Retail add-ons", "Staff scheduling"],
    },
    {
      icon: Wrench,
      title: "Trades & Services",
      desc: "Mechanics, repair shops, service providers",
      features: ["Invoicing", "Job tracking", "Deposit collection", "Customer records"],
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

  return (
    <>
      <SEO
        title="POS System Setup London | Square Installation for All Industries"
        description="Professional Square POS installation for restaurants, retail, salons & trades in London. No contracts, hardware ownership, local support. Setup from £299."
        keywords="pos system london, square pos installation, epos setup uk, restaurant pos, retail pos, salon pos, pos installation east london, square terminal setup"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/sectors/pos-systems"
      />
      <ServiceSchema
        name="POS System Setup London"
        description="Professional Square POS installation and support for restaurants, retail, salons, and trades across London."
        url="https://digital.luminousanddeliver.co.uk/sectors/pos-systems"
        priceRange="£299-£899+"
        serviceType="POS Installation"
      />
      <FAQSchema faqs={faqs} pageId="pos-systems-sector" />
      
      <Navigation darkHero />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-16 md:pt-44 md:pb-20 bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl text-center mx-auto">
                <span className="inline-block px-4 py-2 bg-white/10 text-primary-foreground rounded-full text-sm font-medium mb-6">
                  POS Sector Specialists
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-primary-foreground">
                  POS System Setup London
                </h1>
                <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Square installation and support for restaurants, retail, salons, and trades across London & East London. No contracts, no lock-ins, just modern payment systems that work.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="text-lg bg-background text-primary hover:bg-muted">
                    <Link to="/contact">
                      Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                    <a href="https://wa.me/447356260648" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp Us
                    </a>
                  </Button>
                </div>
                <p className="mt-6 text-primary-foreground/80">
                  <span className="font-semibold">Setup from £299</span> • No lock-in contracts • Local East London support
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
                { stat: "73%", label: "of small businesses overpay for POS" },
                { stat: "£3,500+", label: "saved vs legacy systems" },
                { stat: "2-3 days", label: "typical installation" },
                { stat: "£299", label: "setup starting price" },
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

        {/* Who We Work With */}
        <section className="py-16 lg:py-24">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Who We Work With
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                We install and configure Square POS for businesses across four key sectors, each with industry-specific features.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors h-full">
                    <item.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                    <ul className="space-y-2">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* Key Features */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Why Choose Square POS
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Modern payment infrastructure with benefits legacy EPOS systems simply can't match.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: CreditCard, title: "Hardware Ownership", desc: "Buy your terminals once and own them forever. No leasing, no rental fees." },
                { icon: Shield, title: "No Contracts", desc: "Cancel anytime with zero exit fees. No 3-5 year lock-ins like legacy providers." },
                { icon: Wifi, title: "Offline Capability", desc: "Keep taking payments even when your internet drops. Syncs automatically when reconnected." },
                { icon: Settings, title: "Industry Configuration", desc: "Each setup is tailored to your sector with relevant features and integrations enabled." },
                { icon: Users, title: "Staff Training", desc: "Hands-on training included with every installation so your team is confident from day one." },
                { icon: HeadphonesIcon, title: "Local Support", desc: "Based in East London with on-site support available. Not an overseas call centre." },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-primary" />
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
                    <TableHead className="text-center bg-primary/5">Square POS</TableHead>
                    <TableHead className="text-center">Legacy EPOS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{row.feature}</TableCell>
                      <TableCell className="text-center bg-primary/5">
                        <span className="flex items-center justify-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          {row.square}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="flex items-center justify-center gap-2 text-muted-foreground">
                          <XCircle className="h-4 w-4 text-destructive flex-shrink-0" />
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

        {/* Pricing Tiers */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                POS Setup Packages
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Choose the right setup package for your business size and complexity.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { 
                  title: "Small Business", 
                  price: "From £299", 
                  desc: "Single terminal, single location",
                  features: ["1 Square terminal setup", "Basic software configuration", "Staff training (up to 3)", "Payment integration", "30-day support included"]
                },
                { 
                  title: "Growing Business", 
                  price: "From £499", 
                  desc: "Multi-terminal or integrations needed",
                  features: ["Up to 3 terminals", "Integration setup (accounting, booking)", "Staff training (up to 6)", "Inventory/menu configuration", "60-day support included"],
                  popular: true
                },
                { 
                  title: "Complex Setup", 
                  price: "From £899", 
                  desc: "Multi-location or advanced requirements",
                  features: ["Unlimited terminals", "Multi-location sync", "Full integration suite", "Comprehensive staff training", "Priority 90-day support"]
                },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className={`bg-card rounded-xl p-6 border h-full flex flex-col ${item.popular ? 'border-primary ring-2 ring-primary/20' : 'border-border'}`}>
                    {item.popular && (
                      <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-4 w-fit">Most Popular</span>
                    )}
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-2xl font-bold text-primary mb-2">{item.price}</p>
                    <p className="text-muted-foreground text-sm mb-6">{item.desc}</p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant={item.popular ? "default" : "outline"} className="w-full">
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            
            <p className="text-center text-muted-foreground mt-8">
              Need ongoing support? See our <Link to="/services/pos-setup" className="text-primary hover:underline">full POS service page</Link> for monthly support plans.
            </p>
          </Container>
        </section>

        {/* FAQs */}
        <section className="py-16 lg:py-24">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                POS Setup FAQs
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Common questions about our POS installation services.
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

        {/* Related Services */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Related Services
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Complete your business setup with these complementary services.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { title: "Website Design", desc: "Get online presence to match your new POS", link: "/web-package" },
                { title: "IT Support", desc: "Ongoing tech support for your business", link: "/services/it-support" },
                { title: "Digital Marketing", desc: "Attract more customers to your business", link: "/services/digital-marketing" },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <Link to={item.link} className="block bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
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
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
                  Ready to Upgrade Your Payment System?
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  Join hundreds of London businesses saving money with modern Square POS. No contracts, no hidden fees.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="bg-background text-primary hover:bg-muted">
                    <Link to="/contact">
                      Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                    <a href="https://wa.me/447356260648" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp Us
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        <AreasFooter />
      </main>
      
      <Footer />
    </>
  );
};

export default PosServices;