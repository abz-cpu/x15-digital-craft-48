import { Link } from "react-router-dom";
import { 
  Utensils, 
  Clock, 
  CreditCard, 
  Users, 
  ChefHat, 
  Receipt, 
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Shield,
  MapPin,
  Zap,
  Phone,
  XCircle,
  Lock,
  TrendingDown
} from "lucide-react";
import { SEO } from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Container } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema } from "@/components/FAQSchema";
import { ServiceSchema } from "@/components/ServiceSchema";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const faqItems = [
  {
    question: "Can Square handle busy restaurant service periods?",
    answer: "Yes. Square processes payments in under 2 seconds and handles high transaction volumes without slowing down. The system works offline if your internet drops, storing transactions until connectivity returns. We've installed Square in busy London restaurants serving 200+ covers per evening without issues."
  },
  {
    question: "How does Square compare to legacy restaurant EPOS systems?",
    answer: "Square costs significantly less long-term because there are no lease fees, no lock-in contracts, and free software updates. A typical legacy system costs £5,000+ over three years in leases and fees. Square hardware ownership plus optional support costs £1,500-£2,500 total. The software is also more intuitive, reducing staff training time."
  },
  {
    question: "Can you integrate Square with our existing booking system?",
    answer: "Square integrates with major restaurant booking platforms including OpenTable, Resy, and ResDiary. We can also connect it to your existing kitchen display system, accounting software, and inventory management. Integration fees are quoted based on complexity."
  },
  {
    question: "What happens if the Square terminal breaks during service?",
    answer: "We keep spare equipment in stock and offer same-day emergency replacement for Premium support clients. For basic and standard support, we typically have replacement hardware on-site within 24-48 hours. Square terminals are also highly reliable with a failure rate below 1%."
  },
  {
    question: "Do you provide staff training?",
    answer: "Every installation includes hands-on training for your team. We train managers on reporting and analytics, front-of-house staff on taking payments and managing tables, and kitchen staff on display systems. We also provide printed quick-reference guides and video tutorials for new staff onboarding."
  },
  {
    question: "Can Square handle tips and service charges?",
    answer: "Yes. Square supports customisable tip prompts (percentage or fixed amount), automatic service charge calculations, and fair tip distribution tracking. You can configure tip pooling rules and generate reports for transparent staff distribution."
  }
];

const hospitalityFeatures = [
  { icon: ChefHat, title: "Kitchen Display System", desc: "Orders sent directly to kitchen screens with timing alerts" },
  { icon: Receipt, title: "Course Timing", desc: "Starters, mains, desserts paced correctly for service" },
  { icon: Users, title: "Table Management", desc: "Visual floor plan with table status and covers tracking" },
  { icon: CreditCard, title: "Split Bills", desc: "Split by seat, item, or custom amount in seconds" },
  { icon: Smartphone, title: "QR Ordering", desc: "Customers order from their phones, reducing wait times" },
  { icon: Clock, title: "Staff Scheduling", desc: "Shift management with clock-in/out and labour costs" },
];

const RestaurantPos = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Restaurant POS Systems London | EPOS for Hospitality | L&D Digital"
        description="Square POS installation for restaurants, cafés, and bars in London. Table management, kitchen displays, split bills, and 24/7 support. Setup in 2-3 days."
        canonicalUrl="https://digital.luminousanddeliver.co.uk/sectors/restaurant-pos"
        keywords="restaurant pos system london, cafe epos uk, hospitality payment systems, square for restaurants, kitchen display system, restaurant epos east london"
      />
      <ServiceSchema
        name="Restaurant POS System Installation"
        description="Professional Square POS setup for restaurants, cafés, and hospitality businesses in London. Includes table management, kitchen displays, and ongoing support."
        url="https://digital.luminousanddeliver.co.uk/sectors/restaurant-pos"
        priceRange="£499-£2499"
        serviceType="POS System Installation"
      />
      <FAQSchema faqs={faqItems} pageId="restaurant-pos" />
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 bg-gradient-to-br from-orange-900 via-amber-900 to-orange-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.15),transparent_50%)]" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-amber-500/20 text-amber-200 border-amber-500/30">
              Hospitality Solutions
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Restaurant POS Systems That Don't Crash During the Rush
            </h1>
            <p className="text-lg md:text-xl text-amber-100/90 mb-8">
              Your payment system failing at 8pm on a Saturday costs thousands in lost revenue and damages your reputation. We install reliable Square systems for restaurants, cafés, and bars—with local support when you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-amber-950 font-semibold">
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <Link to="/services/pos-setup">
                  View All POS Services
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <BreadcrumbNav />

      {/* Industry Stats */}
      <AnimatedSection className="py-16 md:py-20 bg-muted/30">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">67%</p>
              <p className="text-muted-foreground">of POS failures happen during peak service hours</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">£2,400</p>
              <p className="text-muted-foreground">average revenue lost per system outage</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">2-3 days</p>
              <p className="text-muted-foreground">our typical installation time vs 2+ weeks for competitors</p>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      {/* Who This Is For */}
      <AnimatedSection className="py-16 md:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Built for Hospitality
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you're a neighbourhood café or a multi-floor restaurant, we configure Square to match how your kitchen and front-of-house actually work.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Utensils, title: "Restaurants", desc: "Fine dining to casual eateries" },
              { icon: ChefHat, title: "Cafés & Coffee Shops", desc: "Quick service and takeaway" },
              { icon: Smartphone, title: "Takeaways & Delivery", desc: "Kitchen efficiency and order tracking" },
            ].map((item, index) => (
              <Card key={index} className="text-center p-6">
                <item.icon className="w-10 h-10 mx-auto mb-4 text-amber-600" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      {/* Hospitality Features */}
      <AnimatedSection className="py-16 md:py-20 bg-muted/30">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Features Your Restaurant Actually Needs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Not generic retail features renamed for hospitality. Proper restaurant functionality built by people who understand service.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitalityFeatures.map((feature, index) => (
              <Card key={index} className="p-6">
                <feature.icon className="w-8 h-8 mb-4 text-amber-600" />
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      {/* Square vs Legacy EPOS */}
      <AnimatedSection className="py-16 md:py-20">
        <Container>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-500/10 text-red-700 border-red-500/20">
              The Real Comparison
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why We Recommend Square Over Legacy EPOS
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Many restaurants are locked into overpriced, restrictive systems with long contracts and hidden fees. Here's what you're actually paying.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
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
                    <TableCell><span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Buy once, own it</span></TableCell>
                    <TableCell><span className="flex items-center gap-2"><XCircle className="h-4 w-4 text-destructive" /> Often leased (£30+/month)</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Contract</TableCell>
                    <TableCell><span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> None — cancel anytime</span></TableCell>
                    <TableCell><span className="flex items-center gap-2"><Lock className="h-4 w-4 text-destructive" /> 12-36 months lock-in</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Exit Fees</TableCell>
                    <TableCell><span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> None</span></TableCell>
                    <TableCell><span className="flex items-center gap-2"><TrendingDown className="h-4 w-4 text-destructive" /> Often £1,000+</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Monthly Fees</TableCell>
                    <TableCell><span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Optional support</span></TableCell>
                    <TableCell><span className="flex items-center gap-2"><XCircle className="h-4 w-4 text-destructive" /> Mandatory bundled fees</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Software Updates</TableCell>
                    <TableCell><span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Free, automatic</span></TableCell>
                    <TableCell><span className="flex items-center gap-2"><XCircle className="h-4 w-4 text-destructive" /> Often paid or restricted</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Payment Rates</TableCell>
                    <TableCell><span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Transparent (~1.75%)</span></TableCell>
                    <TableCell><span className="flex items-center gap-2"><XCircle className="h-4 w-4 text-destructive" /> Hidden fees common</span></TableCell>
                  </TableRow>
                  <TableRow className="bg-muted/30">
                    <TableCell className="font-bold">Total 3-Year Cost</TableCell>
                    <TableCell className="font-bold text-primary">~£1,500-£2,500</TableCell>
                    <TableCell className="font-bold text-destructive">~£5,000+</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card className="p-6 border-primary/20">
                <Lock className="w-8 h-8 mb-4 text-primary" />
                <h3 className="font-semibold text-foreground mb-2">No Lock-In</h3>
                <p className="text-sm text-muted-foreground">You're not trapped. If you want to leave, you leave. No penalties, no pressure, no games.</p>
              </Card>
              <Card className="p-6 border-primary/20">
                <CreditCard className="w-8 h-8 mb-4 text-primary" />
                <h3 className="font-semibold text-foreground mb-2">Hardware Ownership</h3>
                <p className="text-sm text-muted-foreground">Buy once at £200-500. Legacy systems lease at £30+/month = £1,080 over 3 years.</p>
              </Card>
              <Card className="p-6 border-primary/20">
                <Zap className="w-8 h-8 mb-4 text-primary" />
                <h3 className="font-semibold text-foreground mb-2">Future-Proof</h3>
                <p className="text-sm text-muted-foreground">Square updates automatically with new features. Legacy systems charge for upgrades.</p>
              </Card>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              We recommend Square because it's genuinely cheaper long-term for most UK hospitality businesses—not because we're locked into reselling one brand.
            </p>
          </div>
        </Container>
      </AnimatedSection>

      {/* Hardware Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <Container>
          <AnimatedSection animation="fade">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Hardware for Your Restaurant</h2>
              <p className="text-muted-foreground text-lg">
                Own your equipment outright—no leasing, no rental fees.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Square Register",
                price: "From £599",
                specs: ["Dual touchscreens", "Customer-facing display", "Built-in payments"],
                ideal: "Main counter",
              },
              {
                name: "Kitchen Display",
                price: "From £299",
                specs: ["Order routing", "Course timing", "Bump-bar compatible"],
                ideal: "Kitchen stations",
              },
              {
                name: "Square Terminal",
                price: "From £149",
                specs: ["Portable payments", "Built-in printer", "All-day battery"],
                ideal: "Tableside service",
              },
              {
                name: "Receipt Printers",
                price: "From £199",
                specs: ["Kitchen & counter", "Fast thermal printing", "Wi-Fi options"],
                ideal: "Order printing",
              },
            ].map((item, index) => (
              <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                <Card className="p-5 h-full">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">Hardware</Badge>
                    <span className="font-bold text-primary text-sm">{item.price}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{item.name}</h3>
                  <ul className="space-y-1 mb-3">
                    {item.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground border-t pt-2">
                    <strong>Ideal for:</strong> {item.ideal}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Why L&D Digital */}
      <AnimatedSection className="py-16 md:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why Restaurants Choose Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Fast Installation", desc: "2-3 days, not 2+ weeks. Minimal disruption to service." },
              { icon: MapPin, title: "Local Presence", desc: "Based in Stratford, East London. On-site when you need us." },
              { icon: Shield, title: "Restaurant Experience", desc: "We understand service flow, not just technology." },
              { icon: Users, title: "Direct Support", desc: "You call us directly. No call centres, no tickets." },
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center">
                <item.icon className="w-10 h-10 mx-auto mb-4 text-amber-600" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      {/* Pricing Overview */}
      <AnimatedSection className="py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Restaurant Setup Pricing
            </h2>
            <p className="text-muted-foreground mb-8">
              Transparent pricing based on your restaurant's complexity. No hidden fees, no surprises.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Small Café</h3>
                <p className="text-3xl font-bold text-primary mb-2">£299-£499</p>
                <p className="text-sm text-muted-foreground">Single counter, basic menu</p>
              </Card>
              <Card className="p-6 border-2 border-primary">
                <h3 className="font-semibold text-foreground mb-2">Restaurant</h3>
                <p className="text-3xl font-bold text-primary mb-2">£499-£899</p>
                <p className="text-sm text-muted-foreground">Table service, kitchen display</p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Multi-Site/Complex</h3>
                <p className="text-3xl font-bold text-primary mb-2">£899-£1,499</p>
                <p className="text-sm text-muted-foreground">Multiple floors, large venues</p>
              </Card>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Hardware quoted separately. Monthly support from £50/mo (billed annually) or £59/mo (billed monthly).
            </p>
            <Button asChild className="mt-6">
              <Link to="/services/pos-setup">
                View Full Pricing Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-16 md:py-20 bg-muted/30">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Restaurant POS Questions
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-orange-900 via-amber-900 to-orange-950">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stop Losing Revenue to Unreliable Systems
            </h2>
            <p className="text-amber-100/90 mb-8 text-lg">
              One system failure during a busy Saturday service costs more than a year of professional support. How much is your current setup really costing you?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-amber-950 font-semibold">
                <Link to="/contact">
                  Get Free Consultation
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

export default RestaurantPos;
