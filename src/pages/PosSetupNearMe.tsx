import { Link } from "react-router-dom";
import { 
  MapPin, 
  Clock, 
  Phone, 
  ArrowRight, 
  CheckCircle2,
  Zap,
  Users,
  Store,
  Utensils,
  Scissors,
  Wrench
} from "lucide-react";
import { SEO } from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Container } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

const serviceAreas = [
  "Stratford (E15, E20)",
  "Ilford (IG1–IG6)",
  "Hackney (E8, E9)",
  "Shoreditch (E1, E2)",
  "Leyton (E10, E11)",
  "Walthamstow (E17)",
  "Newham (E6, E7, E12, E13, E16)",
  "Barking (IG11)",
  "Tower Hamlets (E1, E3, E14)",
  "Greenwich (SE10, SE7)",
  "Bethnal Green (E2)",
  "Canary Wharf (E14)",
  "Mile End (E3)",
  "Bow (E3)",
  "Plaistow (E13)",
  "East Ham (E6)"
];

const faqItems = [
  {
    question: "How do I find reliable POS installation near me?",
    answer: "Look for a local provider who offers on-site installation, staff training, and ongoing support—not just hardware sales. At L&D Digital, we're based in Stratford and cover all of London. We install the system ourselves, train your team, and provide direct phone support when something goes wrong. No remote-only setup, no overseas call centres."
  },
  {
    question: "How quickly can you install a POS system?",
    answer: "Most installations take 2-3 days from consultation to go-live. This includes hardware sourcing, system configuration, menu/product setup, staff training, and payment testing. Complex multi-location setups may take 4-5 days. Compare this to national providers who often quote 2-3 weeks."
  },
  {
    question: "Do you offer same-day emergency support in my area?",
    answer: "Premium support clients receive same-day emergency response across London. For East London (Stratford, Ilford, Hackney, Newham, etc.), we can often be on-site within hours. Basic and Standard support clients typically receive response within 24-48 hours."
  },
  {
    question: "What's the advantage of choosing a local POS provider?",
    answer: "Local providers offer faster installation, on-site training, emergency callouts, and direct phone support. When your system crashes during Saturday service, you need someone who can get there—not a ticket number. Being based in East London means we understand local business needs and can respond quickly."
  },
  {
    question: "Do you cover areas outside East London?",
    answer: "Yes. While we're based in Stratford, we install POS systems across all of London and can travel UK-wide for larger projects. Travel outside Greater London may incur additional fees, quoted upfront."
  },
  {
    question: "What's included in a local POS installation?",
    answer: "Every installation includes: initial consultation, hardware sourcing and setup, system configuration for your business, menu/product entry, staff training (on-site or remote), payment testing, and post-installation support. Hardware is quoted separately based on your requirements."
  }
];

const PosSetupNearMe = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="POS Installation Near Me London | Payment System Setup | L&D Digital"
        description="Local POS system installation in London. Square payment systems installed in 2-3 days with on-site training and direct support. Based in East London, serving all UK."
        canonicalUrl="https://digital.luminousanddeliver.co.uk/pos-setup-near-me"
        keywords="pos installation near me, payment system setup london, epos setup east london, square setup near me, pos system installation london, local pos provider"
      />
      <FAQSchema faqs={faqItems} pageId="pos-near-me" />
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.15),transparent_50%)]" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-teal-500/20 text-teal-200 border-teal-500/30">
              <MapPin className="w-3 h-3 mr-1" />
              Based in East London
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              POS Installation Near You
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8">
              When your payment system goes down, you need someone local who can actually get there. We install Square POS systems across London with on-site training and direct phone support—no call centres, no tickets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 font-semibold">
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

      <BreadcrumbNav />

      {/* Why Local Matters */}
      <AnimatedSection className="py-16 md:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why Local POS Installation Matters
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Remote setup and overseas call centres can't help when your system crashes at 7pm on a Friday. Local presence means real support when you need it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "2-3 Day Installation", desc: "Not 2-3 weeks like national providers" },
              { icon: Users, title: "On-Site Training", desc: "We train your team in person" },
              { icon: Zap, title: "Emergency Response", desc: "Same-day callouts for Premium clients" },
              { icon: Phone, title: "Direct Phone Support", desc: "You call us, not a call centre" },
            ].map((item, index) => (
              <Card key={index} className="text-center p-6">
                <item.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      {/* Service Areas */}
      <AnimatedSection className="py-16 md:py-20 bg-muted/30">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Areas We Cover
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Based in Stratford, East London, we provide POS installation and support across all London boroughs and UK-wide for larger projects.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {serviceAreas.map((area, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-background rounded-lg border border-border">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{area}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't see your area? We cover all of Greater London and can travel UK-wide for larger projects.
          </p>
        </Container>
      </AnimatedSection>

      {/* What We Install */}
      <AnimatedSection className="py-16 md:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              POS Systems for Every Business
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We install Square payment systems tailored to your industry. Same reliable hardware, configured for how you actually work.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Utensils, title: "Restaurants & Cafés", desc: "Table management, kitchen displays, split bills", link: "/sectors/restaurant-pos" },
              { icon: Store, title: "Retail Shops", desc: "Inventory tracking, barcode scanning, stock alerts", link: "/services/pos-setup" },
              { icon: Scissors, title: "Hair & Beauty", desc: "Appointment booking, staff commissions, loyalty", link: "/services/pos-setup" },
              { icon: Wrench, title: "Trades & Services", desc: "Invoicing, deposits, mobile payments", link: "/services/pos-setup" },
            ].map((item, index) => (
              <Card key={index} className="p-6 hover-lift">
                <item.icon className="w-8 h-8 mb-4 text-primary" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to={item.link}>
                    Learn More <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      {/* Speed Advantage */}
      <AnimatedSection className="py-16 md:py-20 bg-muted/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  Local Speed Advantage
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Installed in Days, Not Weeks
                </h2>
                <p className="text-muted-foreground mb-6">
                  National POS providers often quote 2-3 weeks for installation. We complete most setups in 2-3 days because we're local, we keep hardware in stock, and we don't have layers of scheduling bureaucracy.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Day 1: Consultation and hardware delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Day 2: Installation and configuration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Day 3: Staff training and go-live</span>
                  </li>
                </ul>
              </div>
              <Card className="p-8 text-center">
                <div className="text-6xl font-bold text-primary mb-4">2-3</div>
                <p className="text-xl font-semibold text-foreground mb-2">Days to Go-Live</p>
                <p className="text-muted-foreground">vs 2-3 weeks from national providers</p>
              </Card>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      {/* Pricing Overview */}
      <AnimatedSection className="py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Transparent Local Pricing
            </h2>
            <p className="text-muted-foreground mb-8">
              No hidden fees, no surprises. Setup pricing based on complexity, hardware quoted separately.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Small Business</h3>
                <p className="text-3xl font-bold text-primary mb-2">£299-£499</p>
                <p className="text-sm text-muted-foreground">Café, salon, small shop</p>
              </Card>
              <Card className="p-6 border-2 border-primary">
                <h3 className="font-semibold text-foreground mb-2">Mid-Size Operations</h3>
                <p className="text-3xl font-bold text-primary mb-2">£499-£899</p>
                <p className="text-sm text-muted-foreground">Restaurant, retail store</p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Complex Setups</h3>
                <p className="text-3xl font-bold text-primary mb-2">£899-£1,499</p>
                <p className="text-sm text-muted-foreground">Multi-location, large venues</p>
              </Card>
            </div>
            <Button asChild>
              <Link to="/services/pos-setup">
                View Full Pricing & Support Plans
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
              Local POS Installation Questions
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
              Ready for Reliable Local POS Support?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Stop dealing with remote-only providers and overseas call centres. Get a local expert who can actually be there when you need help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 font-semibold">
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <a href="https://wa.me/442012345678" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
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

export default PosSetupNearMe;
