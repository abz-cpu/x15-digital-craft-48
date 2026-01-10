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
  CheckCircle2,
  ShoppingBag,
  Smartphone,
  Zap,
  TrendingUp,
  ArrowRight,
  MessageSquare,
  Star,
  CreditCard,
  Globe,
} from "lucide-react";

const B2C = () => {
  const faqs = [
    {
      question: "What makes a B2C website different from B2B?",
      answer: "B2C websites focus on driving immediate action—purchases, bookings, or signups. They prioritise emotional appeal, fast load times, mobile experience, easy checkout, and trust signals like reviews. The buying decision is quicker, so the website must convert on first visit."
    },
    {
      question: "How much does a B2C website cost in London?",
      answer: "B2C websites in London typically cost £500-2,000 for service businesses needing bookings and enquiries, £1,500-5,000 for e-commerce stores, and £5,000-20,000+ for larger retail sites with advanced features. Our custom-coded sites start from £200 for simpler consumer-facing sites."
    },
    {
      question: "How important is mobile for B2C websites?",
      answer: "Critical. Over 60% of consumer web traffic is mobile. We design mobile-first, ensuring fast load times, easy navigation, and seamless checkout on phones. A poor mobile experience means losing the majority of potential customers."
    },
    {
      question: "Can you integrate with booking and payment systems?",
      answer: "Yes. We integrate with Stripe, PayPal, Square, and other payment processors. For bookings, we work with Calendly, Acuity, SimplyBook, and custom booking systems. Your customers get a seamless experience from browsing to purchase or booking."
    },
    {
      question: "How do you ensure fast website speed?",
      answer: "We optimise images, use modern coding practices, implement caching, and choose quality hosting. For B2C sites where speed directly impacts sales, we often recommend our custom-coded approach—no bloated themes or plugins slowing things down."
    }
  ];

  const processSteps = [
    {
      name: "Customer Research",
      text: "Understand your target customers, their journey, pain points, and what drives purchase decisions in your market."
    },
    {
      name: "Conversion-Focused Design",
      text: "Create designs that drive action. Clear CTAs, trust signals, social proof, and emotional appeal that resonates."
    },
    {
      name: "Mobile-First Development",
      text: "Build mobile-first for the majority of your traffic. Fast, intuitive, and optimised for touch interactions."
    },
    {
      name: "Checkout Optimisation",
      text: "Streamline the path to purchase. Reduce friction, offer multiple payment options, and minimise cart abandonment."
    },
    {
      name: "Speed & Performance",
      text: "Optimise for speed. Every second of load time costs conversions—we ensure your site is lightning fast."
    },
    {
      name: "Launch & Analytics",
      text: "Go live with conversion tracking, heatmaps, and A/B testing capability to continuously improve performance."
    }
  ];

  return (
    <>
      <SEO
        title="B2C Website Design London | Consumer Websites from £500"
        description="B2C website design for consumer brands, retail, hospitality, and service businesses in London. Mobile-first, conversion-optimised, fast-loading websites that drive sales."
        keywords="b2c website design london, consumer website uk, ecommerce website london, retail website design, mobile website design, fast website uk, conversion optimised website, booking website design"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/sectors/b2c"
      />
      <ServiceSchema
        name="B2C Website Design London"
        description="Consumer-focused website design for retail, hospitality, and service businesses. Mobile-first, conversion-optimised design."
        url="https://digital.luminousanddeliver.co.uk/sectors/b2c"
        priceRange="£500-£20,000"
        serviceType="B2C Website Design"
      />
      <FAQSchema faqs={faqs} pageId="b2c-sector" />
      <HowToSchema
        name="How We Build B2C Websites"
        description="Our 6-step process for creating high-converting B2C websites."
        steps={processSteps}
        totalTime="P3W"
        estimatedCost={{ currency: "GBP", value: "500-20000" }}
      />
      
      <Navigation darkHero />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-16 md:pt-44 md:pb-20 bg-gradient-to-br from-violet-600 via-violet-700 to-purple-900 overflow-hidden">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl text-center mx-auto">
                <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
                  B2C Sector Specialists
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                  B2C Website Design London
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Fast, mobile-first websites that convert browsers into buyers. For consumer brands, retail, hospitality, and service businesses across London and the UK.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="text-lg bg-white text-violet-700 hover:bg-violet-50">
                    <Link to="/contact">
                      Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-lg border-white text-white hover:bg-white/10">
                    <a href="https://wa.me/447424050827" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp Us
                    </a>
                  </Button>
                </div>
                <p className="mt-6 text-white/80">
                  <span className="font-semibold">B2C sites from £500</span> • Mobile-first design • Conversion optimised
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
                { stat: "60%+", label: "of traffic is mobile" },
                { stat: "53%", label: "leave slow sites" },
                { stat: "3s", label: "max acceptable load time" },
                { stat: "£500", label: "starting price" },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className="p-4">
                    <p className="text-3xl md:text-4xl font-bold text-violet-600 mb-1">{item.stat}</p>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* Who This Is For */}
        <section className="py-16 lg:py-24">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Who We Work With
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Consumer-facing businesses trust us to drive their online sales and bookings.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: ShoppingBag, title: "Retail & E-commerce", desc: "Fashion, beauty, homeware, and consumer products" },
                { icon: Star, title: "Hospitality", desc: "Restaurants, cafes, hotels, and experience providers" },
                { icon: CreditCard, title: "Service Businesses", desc: "Salons, fitness, health, and personal services" },
                { icon: Globe, title: "Consumer Brands", desc: "DTC brands, lifestyle, and consumer goods" },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className="bg-card rounded-xl p-6 border border-border hover:border-violet-500/50 transition-colors h-full">
                    <item.icon className="h-10 w-10 text-violet-600 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
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
                B2C Website Features
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Everything you need to convert visitors into customers.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Smartphone, title: "Mobile-First Design", desc: "Designed for the 60%+ of your visitors on mobile devices" },
                { icon: Zap, title: "Lightning Fast", desc: "Optimised for speed—under 3 seconds load time target" },
                { icon: CreditCard, title: "Easy Checkout", desc: "Streamlined purchase flow with multiple payment options" },
                { icon: Star, title: "Reviews & Social Proof", desc: "Customer reviews, testimonials, and trust badges that convert" },
                { icon: TrendingUp, title: "Conversion Optimised", desc: "Strategic CTAs, urgency elements, and persuasive design" },
                { icon: ShoppingBag, title: "E-commerce Ready", desc: "Product catalogues, carts, and inventory management" },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-violet-500/10 rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-violet-600" />
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

        {/* Pricing Tiers */}
        <section className="py-16 lg:py-24">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                B2C Website Packages
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Choose the right level for your consumer business.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { 
                  title: "Service", 
                  price: "From £500", 
                  desc: "For service businesses needing bookings and enquiries",
                  features: ["5-page website", "Contact/booking forms", "Mobile responsive", "Fast loading", "Basic SEO", "Social links"]
                },
                { 
                  title: "E-commerce", 
                  price: "From £1,500", 
                  desc: "Sell products online with a conversion-focused store",
                  features: ["Product catalogue", "Shopping cart", "Stripe/PayPal", "Inventory tracking", "Customer accounts", "Order notifications"],
                  popular: true
                },
                { 
                  title: "Brand", 
                  price: "From £5,000", 
                  desc: "Premium consumer brand experience",
                  features: ["Custom design", "Advanced animations", "Multi-channel integration", "Loyalty features", "Advanced analytics", "A/B testing"]
                },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className={`bg-card rounded-xl p-6 border h-full flex flex-col ${item.popular ? 'border-violet-500 ring-2 ring-violet-500/20' : 'border-border'}`}>
                    {item.popular && (
                      <span className="inline-block px-3 py-1 bg-violet-600 text-white text-xs font-medium rounded-full mb-4 w-fit">Most Popular</span>
                    )}
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-2xl font-bold text-violet-600 mb-2">{item.price}</p>
                    <p className="text-muted-foreground text-sm mb-6">{item.desc}</p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-violet-600 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant={item.popular ? "default" : "outline"} className={item.popular ? "bg-violet-600 hover:bg-violet-700" : ""}>
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            
            <p className="text-center text-muted-foreground mt-8">
              Want maximum speed? Our <Link to="/platforms/custom-development" className="text-violet-600 hover:underline">custom-coded sites</Link> outperform WordPress and Shopify. <Link to="/web-package" className="text-violet-600 hover:underline">View packages →</Link>
            </p>
          </Container>
        </section>

        {/* Platform Comparison */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Which Platform for Your Store?
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                We build on multiple platforms—here's how to choose.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { title: "Shopify", desc: "Quick launch, hosted, easy to use. Monthly fees apply.", link: "/platforms/shopify", color: "text-green-600" },
                { title: "WooCommerce", desc: "WordPress-based, flexible, no platform fees.", link: "/platforms/woocommerce", color: "text-purple-600" },
                { title: "Custom Coded", desc: "Maximum speed, unique design, lowest long-term cost.", link: "/platforms/custom-development", color: "text-orange-600", recommended: true },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <Link to={item.link} className={`block bg-card rounded-xl p-6 border transition-colors ${item.recommended ? 'border-violet-500 ring-2 ring-violet-500/20' : 'border-border hover:border-violet-500/50'}`}>
                    {item.recommended && (
                      <span className="inline-block px-2 py-1 bg-violet-100 text-violet-700 text-xs font-medium rounded mb-3">Recommended for Speed</span>
                    )}
                    <h3 className={`font-semibold text-lg mb-2 ${item.color}`}>{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQs */}
        <section className="py-16 lg:py-24">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                B2C Website FAQs
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Common questions about B2C website development.
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
        <section className="py-16 lg:py-24 bg-gradient-to-br from-violet-600 via-violet-700 to-purple-900">
          <Container>
            <AnimatedSection animation="fade">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Ready to Convert More Customers?
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Get a free consultation and see how we can help your consumer business grow online.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="text-lg bg-white text-violet-700 hover:bg-violet-50">
                    <Link to="/contact">
                      Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-lg border-white text-white hover:bg-white/10">
                    <Link to="/portfolio">
                      View Our Work
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Areas Footer */}
        <AreasFooter accentColor="violet" />
      </main>
      
      <Footer />
    </>
  );
};

export default B2C;
