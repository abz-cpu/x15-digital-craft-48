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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle,
  ShoppingCart,
  CreditCard,
  BarChart3,
  Shield,
  Zap,
  Package,
  TrendingUp,
  ArrowRight,
  MessageSquare,
  Globe,
} from "lucide-react";

const Shopify = () => {
  const faqs = [
    {
      question: "How much does a Shopify store cost in London in 2026?",
      answer: "For London in 2026, Shopify stores typically cost: £1,000-2,000 for a starter store with theme customisation, £2,000-4,000 for custom theme design, and £4,000-8,000+ for advanced features and integrations. You'll also pay Shopify's monthly subscription (from £25/month for Basic). For businesses with simpler needs, our custom-coded ecommerce solutions can be more cost-effective without ongoing platform fees."
    },
    {
      question: "Is Shopify better than WooCommerce for ecommerce?",
      answer: "It depends on your needs. Shopify is better for: businesses wanting a hosted solution with less technical management, those prioritising ease of use, and fast launches. WooCommerce is better for: businesses needing maximum customisation, those already on WordPress, and those wanting to avoid monthly platform fees. We can advise which suits you best."
    },
    {
      question: "Can I migrate my existing store to Shopify?",
      answer: "Yes! We handle complete migrations from WooCommerce, Magento, BigCommerce, and other platforms. We migrate products, customers, order history, and SEO settings to minimise disruption. Most migrations are completed within 1-2 weeks."
    },
    {
      question: "Do you provide ongoing Shopify support?",
      answer: "Absolutely. We offer Shopify support packages from £99/month covering app updates, theme tweaks, product uploads, analytics monitoring, and priority support. Keeping your store optimised is key to maximising sales."
    },
    {
      question: "Can you integrate Shopify with my other systems?",
      answer: "Yes. We integrate Shopify with accounting software (Xero, QuickBooks), email marketing (Klaviyo, Mailchimp), inventory management, fulfilment services, and custom APIs. Shopify's app ecosystem makes most integrations straightforward."
    }
  ];

  const processSteps = [
    {
      name: "Discovery & Strategy",
      text: "We analyse your products, target market, and competitors to create a winning ecommerce strategy tailored to your business."
    },
    {
      name: "Theme Selection & Design",
      text: "Choose from premium Shopify themes or get a custom design. We create mockups for approval before development."
    },
    {
      name: "Store Development",
      text: "We build your store with optimised product pages, collections, navigation, and essential apps for functionality."
    },
    {
      name: "Payment & Shipping Setup",
      text: "Configure Shopify Payments, PayPal, and other gateways. Set up shipping zones, rates, and tax calculations for UK compliance."
    },
    {
      name: "Testing & Optimisation",
      text: "Thorough testing of checkout flow, mobile experience, and page speed. We optimise for conversions before launch."
    },
    {
      name: "Launch & Training",
      text: "Go live with confidence. We provide full training on managing orders, products, and analytics in Shopify admin."
    }
  ];

  return (
    <>
      <SEO
        title="Shopify Expert London | Ecommerce Store Setup from £800"
        description="Certified Shopify development in London & UK. Custom store design, app integrations, payment setup. Launch your online store fast. Get a free consultation."
        keywords="shopify developer london, shopify expert uk, shopify store setup london, ecommerce website uk, shopify designer near me, shopify agency london, shopify development uk, online store design london"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/platforms/shopify"
      />
      <ServiceSchema
        name="Shopify Development London"
        description="Professional Shopify store development in London. Custom themes, app integrations, and conversion-optimised ecommerce stores."
        url="https://digital.luminousanddeliver.co.uk/platforms/shopify"
        priceRange="£800-£5,000"
        serviceType="Shopify Development"
      />
      <FAQSchema faqs={faqs} />
      <HowToSchema
        name="How We Build Shopify Stores"
        description="Our 6-step process for launching successful Shopify ecommerce stores."
        steps={processSteps}
        totalTime="P3W"
        estimatedCost={{ currency: "GBP", value: "800-5000" }}
      />
      
      <Navigation />
      <BreadcrumbNav />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-background via-background to-green-500/5 overflow-hidden">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl">
                <span className="inline-block px-4 py-2 bg-green-500/10 text-green-600 rounded-full text-sm font-medium mb-6">
                  Shopify Experts UK
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Shopify Expert London
                  <span className="text-green-600 block mt-2">Sell More Online</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                  Launch your Shopify store with confidence. We design and build conversion-optimised ecommerce stores for London businesses—from product setup to payment integration, we handle everything.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="text-lg bg-green-600 hover:bg-green-700">
                    <Link to="/contact">
                      Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-lg">
                    <a href="https://wa.me/447424050827" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp Us
                    </a>
                  </Button>
                </div>
                <p className="mt-6 text-muted-foreground">
                  <span className="text-green-600 font-semibold">Stores from £1,000</span> • Launch in 2-3 weeks • Or <Link to="/platforms/custom-development" className="text-green-600 hover:underline">custom solutions with no monthly fees</Link>
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
                Who Shopify Is Perfect For
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Shopify powers over 4 million stores worldwide. It's the go-to platform for businesses that want to sell online without technical headaches.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Package, title: "Product Sellers", desc: "Physical products, fashion, homeware, beauty, and more" },
                { icon: Globe, title: "Dropshippers", desc: "Easy integrations with Oberlo, DSers, and fulfilment apps" },
                { icon: TrendingUp, title: "Growing Brands", desc: "Scalable platform that handles thousands of orders" },
                { icon: ShoppingCart, title: "Retail Expansion", desc: "Brick-and-mortar shops going online for the first time" },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className="bg-card rounded-xl p-6 border border-border hover:border-green-500/50 transition-colors h-full">
                    <item.icon className="h-10 w-10 text-green-600 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* What We Deliver */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                What We Deliver
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Everything you need to launch and grow a successful Shopify store.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Starter Store Setup", desc: "Theme customisation, product upload, payment setup—ready to sell", price: "From £1,000" },
                { title: "Custom Theme Design", desc: "Unique branded design that stands out from competitors", price: "From £2,000" },
                { title: "App Integrations", desc: "Email marketing, reviews, inventory, accounting integrations", price: "From £400" },
                { title: "Migration Service", desc: "Move from WooCommerce, Magento, or other platforms seamlessly", price: "From £600" },
                { title: "Conversion Optimisation", desc: "Improve checkout flow, reduce cart abandonment, increase sales", price: "From £500" },
                { title: "Shopify Plus", desc: "Enterprise-grade solutions for high-volume merchants", price: "From £6,000" },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className="bg-card rounded-xl p-6 border border-border h-full">
                    <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.desc}</p>
                    <span className="text-green-600 font-semibold">{item.price}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            
            {/* Nudge to Custom */}
            <div className="mt-12 bg-green-500/5 rounded-xl p-6 border border-green-500/20 max-w-3xl mx-auto">
              <h3 className="font-semibold text-lg mb-2 text-center">💡 Avoid Monthly Platform Fees?</h3>
              <p className="text-muted-foreground text-center mb-4">
                Shopify's monthly fees (£25-300) add up over time. For some businesses, our <Link to="/platforms/custom-development" className="text-green-600 hover:underline font-medium">custom-coded ecommerce solutions</Link> can be more cost-effective—no monthly platform fees, full ownership, and unlimited customisation. <Link to="/web-package" className="text-green-600 hover:underline">Compare our packages →</Link>
              </p>
            </div>
          </Container>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 lg:py-24">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Why Choose Shopify?
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                The world's leading ecommerce platform for a reason.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Zap, title: "Fast Setup", desc: "Launch your store in days, not months. No server management or technical setup required" },
                { icon: Shield, title: "Secure & Reliable", desc: "PCI-compliant hosting, SSL included, 99.99% uptime. Shopify handles security" },
                { icon: CreditCard, title: "Easy Payments", desc: "Shopify Payments, PayPal, Apple Pay, Google Pay—accept all major payment methods" },
                { icon: BarChart3, title: "Built-in Analytics", desc: "Track sales, visitors, and customer behaviour with Shopify's powerful reporting" },
                { icon: Globe, title: "Multi-Channel Selling", desc: "Sell on Instagram, Facebook, Amazon, and eBay from one dashboard" },
                { icon: TrendingUp, title: "Scalable", desc: "From 10 orders to 10,000—Shopify scales with your business automatically" },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-green-600" />
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

        {/* Shopify vs WooCommerce */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Shopify vs WooCommerce
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Both are excellent platforms. Here's how they compare.
              </p>
            </AnimatedSection>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 font-semibold text-center">
                  <div>Feature</div>
                  <div className="text-green-600">Shopify</div>
                  <div className="text-purple-600">WooCommerce</div>
                </div>
                {[
                  { feature: "Ease of use", shopify: "Excellent", woo: "Good" },
                  { feature: "Hosting included", shopify: true, woo: false },
                  { feature: "Transaction fees", shopify: "0-2%", woo: "0%" },
                  { feature: "Customisation", shopify: "Good", woo: "Excellent" },
                  { feature: "App ecosystem", shopify: "6,000+ apps", woo: "60,000+ plugins" },
                  { feature: "Best for", shopify: "Simplicity", woo: "Flexibility" },
                ].map((row, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 p-4 border-t border-border text-center">
                    <div className="text-left">{row.feature}</div>
                    <div>
                      {row.shopify === true ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : row.shopify === false ? (
                        <span className="text-muted-foreground">✗</span>
                      ) : (
                        <span>{row.shopify}</span>
                      )}
                    </div>
                    <div>
                      {row.woo === true ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : row.woo === false ? (
                        <span className="text-muted-foreground">✗</span>
                      ) : (
                        <span>{row.woo}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-6">
                Not sure which is right for you? <Link to="/contact" className="text-green-600 hover:underline">Book a free consultation</Link> and we'll advise based on your specific needs.
              </p>
            </div>
          </Container>
        </section>

        {/* FAQs */}
        <section className="py-16 lg:py-24">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Shopify FAQs
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Common questions about Shopify development answered.
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
        <section className="py-16 lg:py-24 bg-green-600 text-white">
          <Container>
            <AnimatedSection animation="fade">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Launch Your Shopify Store?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Get a free consultation and quote. We'll help you understand costs, timelines, and what's possible with Shopify.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild className="text-lg">
                    <Link to="/contact">
                      Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
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
                { title: "WooCommerce Development", link: "/platforms/woocommerce", desc: "WordPress-based ecommerce for maximum flexibility" },
                { title: "Ecommerce Services", link: "/services/ecommerce", desc: "Complete ecommerce solutions and strategy" },
                { title: "Digital Marketing", link: "/services/digital-marketing", desc: "Drive traffic to your new Shopify store" },
              ].map((service, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <Link 
                    to={service.link}
                    className="block bg-card rounded-xl p-6 border border-border hover:border-green-500/50 transition-colors"
                  >
                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{service.desc}</p>
                    <span className="text-green-600 text-sm">Learn more →</span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Shopify;
