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
  Code,
  Settings,
  Shield,
  Zap,
  Package,
  TrendingUp,
  ArrowRight,
  MessageSquare,
  Palette,
} from "lucide-react";

const WooCommerce = () => {
  const faqs = [
    {
      question: "How much does a WooCommerce store cost in London in 2025?",
      answer: "For London in 2025-2026, WooCommerce stores typically cost: £1,000-2,000 for a standard setup with theme customisation, £2,000-4,000 for custom design with advanced functionality, and £4,000-10,000+ for enterprise solutions. Unlike Shopify, there's no monthly platform fee—you own everything. For simpler stores, our custom-coded ecommerce from £200 can be even more cost-effective."
    },
    {
      question: "Is WooCommerce better than Shopify?",
      answer: "WooCommerce is better if you: want full ownership with no monthly platform fees, need maximum customisation, are already using WordPress, or have specific integration requirements. Shopify is better if you: prioritise ease of use over customisation, want hosting and security handled for you, or need to launch quickly with minimal technical involvement."
    },
    {
      question: "What hosting do I need for WooCommerce?",
      answer: "WooCommerce requires quality WordPress hosting. We recommend managed WooCommerce hosting from providers like Cloudways, Kinsta, or WP Engine (from £20-50/month). Good hosting is crucial for speed and security. We can set up and manage hosting as part of our packages."
    },
    {
      question: "Can WooCommerce handle high-volume sales?",
      answer: "Yes! WooCommerce powers millions of stores including high-volume merchants. With proper hosting, caching, and optimisation, WooCommerce handles thousands of products and orders. It's infinitely scalable—you're not limited by the platform."
    },
    {
      question: "Do you provide WooCommerce maintenance?",
      answer: "Yes. We offer WooCommerce maintenance packages from £89/month (2025 pricing) including WordPress and plugin updates, security monitoring, backups, performance optimisation, and priority support. Keeping WooCommerce updated is essential for security."
    },
    {
      question: "Should I use WooCommerce or a custom-coded ecommerce solution?",
      answer: "WooCommerce is great if you need WordPress's content capabilities alongside ecommerce. However, WooCommerce can become slow with many plugins and requires ongoing maintenance. For businesses wanting maximum performance and lower long-term costs, our custom-coded ecommerce solutions offer better speed and less maintenance overhead. We can advise which suits your needs."
    }
  ];

  const processSteps = [
    {
      name: "Requirements Analysis",
      text: "We understand your products, sales process, and integration needs. You'll receive a detailed specification and quote."
    },
    {
      name: "Design & UX Planning",
      text: "Custom design mockups for your store, optimised for conversions and aligned with your brand identity."
    },
    {
      name: "WooCommerce Development",
      text: "Build on WordPress with WooCommerce, essential plugins, payment gateways, and shipping configuration."
    },
    {
      name: "Custom Functionality",
      text: "Develop any custom features: product configurators, B2B pricing, subscriptions, bookings, or integrations."
    },
    {
      name: "Testing & Optimisation",
      text: "Comprehensive testing across devices, checkout flow optimisation, and performance tuning."
    },
    {
      name: "Launch & Training",
      text: "Deploy to production, configure analytics, and train your team on managing products, orders, and reports."
    }
  ];

  return (
    <>
      <SEO
        title="WooCommerce Developer London | WordPress Ecommerce from £800"
        description="Expert WooCommerce development in London. Custom WordPress ecommerce stores with full ownership. No monthly platform fees. Stores from £800. Free consultation."
        keywords="woocommerce developer london, woocommerce agency uk, wordpress ecommerce london, woocommerce expert near me, woocommerce store setup, wordpress online shop, woocommerce developer east london"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/platforms/woocommerce"
      />
      <ServiceSchema
        name="WooCommerce Development London"
        description="Professional WooCommerce development in London. Custom WordPress ecommerce stores with advanced functionality and full ownership."
        url="https://digital.luminousanddeliver.co.uk/platforms/woocommerce"
        priceRange="£800-£10,000"
        serviceType="WooCommerce Development"
      />
      <FAQSchema faqs={faqs} />
      <HowToSchema
        name="How We Build WooCommerce Stores"
        description="Our 6-step process for creating powerful WooCommerce ecommerce stores."
        steps={processSteps}
        totalTime="P5W"
        estimatedCost={{ currency: "GBP", value: "800-10000" }}
      />
      
      <Navigation />
      <BreadcrumbNav />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-background via-background to-purple-500/5 overflow-hidden">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl">
                <span className="inline-block px-4 py-2 bg-purple-500/10 text-purple-600 rounded-full text-sm font-medium mb-6">
                  WooCommerce Experts UK
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  WooCommerce Developer London
                  <span className="text-purple-600 block mt-2">WordPress Ecommerce Done Right</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                  Own your ecommerce store completely. WooCommerce gives you the power of WordPress with unlimited customisation, no monthly platform fees, and total control over your online shop.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="text-lg bg-purple-600 hover:bg-purple-700">
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
                  <span className="text-purple-600 font-semibold">Stores from £1,000</span> • No platform fees • Or <Link to="/platforms/custom-development" className="text-purple-600 hover:underline">custom ecommerce from £200</Link>
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
                Who WooCommerce Is Perfect For
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                WooCommerce powers 28% of all online stores. It's ideal for businesses that want complete control and customisation.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Code, title: "Customisation Seekers", desc: "Businesses needing unique functionality beyond templates" },
                { icon: Package, title: "WordPress Users", desc: "Already on WordPress? Add ecommerce seamlessly" },
                { icon: TrendingUp, title: "Cost-Conscious Brands", desc: "Avoid monthly platform fees—own everything" },
                { icon: Settings, title: "Complex Requirements", desc: "B2B, subscriptions, bookings, custom products" },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className="bg-card rounded-xl p-6 border border-border hover:border-purple-500/50 transition-colors h-full">
                    <item.icon className="h-10 w-10 text-purple-600 mb-4" />
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
                What We Build with WooCommerce
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                From simple shops to complex ecommerce ecosystems—WooCommerce's flexibility makes it all possible.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Standard Online Shops", desc: "Product catalogues, cart, checkout—everything you need to sell", price: "From £1,000" },
                { title: "Variable Products", desc: "Size, colour, material variations with stock management", price: "From £1,300" },
                { title: "B2B Wholesale Stores", desc: "Tiered pricing, minimum orders, customer-specific catalogues", price: "From £3,000" },
                { title: "Subscription Products", desc: "Recurring payments for memberships, boxes, services", price: "From £2,000" },
                { title: "Booking & Appointments", desc: "Service booking, rentals, reservations with calendar", price: "From £2,500" },
                { title: "Multi-vendor Marketplaces", desc: "Multiple sellers, vendor dashboards, commission systems", price: "From £6,000" },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className="bg-card rounded-xl p-6 border border-border h-full">
                    <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.desc}</p>
                    <span className="text-purple-600 font-semibold">{item.price}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            
            {/* Nudge to Custom */}
            <div className="mt-12 bg-purple-500/5 rounded-xl p-6 border border-purple-500/20 max-w-3xl mx-auto">
              <h3 className="font-semibold text-lg mb-2 text-center">💡 Want Maximum Performance?</h3>
              <p className="text-muted-foreground text-center mb-4">
                WooCommerce can get slow with many plugins. For businesses prioritising speed and lower maintenance, our <Link to="/platforms/custom-development" className="text-purple-600 hover:underline font-medium">custom-coded ecommerce solutions</Link> offer lightning-fast performance without plugin bloat. <Link to="/web-package" className="text-purple-600 hover:underline">Explore our packages →</Link>
              </p>
            </div>
          </Container>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 lg:py-24">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Why Choose WooCommerce?
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                The most customisable ecommerce platform available.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Code, title: "Unlimited Customisation", desc: "No restrictions. Build exactly what you need with custom code and plugins" },
                { icon: Shield, title: "Full Ownership", desc: "You own your store, data, and code. No vendor lock-in or platform fees" },
                { icon: Zap, title: "WordPress Power", desc: "Combine ecommerce with powerful content marketing and SEO capabilities" },
                { icon: Settings, title: "60,000+ Plugins", desc: "Extend functionality with the massive WordPress plugin ecosystem" },
                { icon: Palette, title: "Design Freedom", desc: "Any design is possible. Custom themes, page builders, complete control" },
                { icon: TrendingUp, title: "Cost Effective", desc: "No monthly platform fees. Pay only for hosting and maintenance" },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-purple-600" />
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

        {/* WooCommerce vs Shopify */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                WooCommerce vs Shopify
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Understanding which platform suits your needs.
              </p>
            </AnimatedSection>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 font-semibold text-center">
                  <div>Feature</div>
                  <div className="text-purple-600">WooCommerce</div>
                  <div className="text-green-600">Shopify</div>
                </div>
                {[
                  { feature: "Monthly platform fee", woo: "£0", shopify: "From £25" },
                  { feature: "Transaction fees", woo: "0%", shopify: "0-2%" },
                  { feature: "Customisation", woo: "Unlimited", shopify: "Limited" },
                  { feature: "Plugin ecosystem", woo: "60,000+", shopify: "6,000+" },
                  { feature: "Hosting included", woo: false, shopify: true },
                  { feature: "Technical knowledge needed", woo: "Moderate", shopify: "Low" },
                  { feature: "Best for", woo: "Flexibility", shopify: "Simplicity" },
                ].map((row, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 p-4 border-t border-border text-center">
                    <div className="text-left">{row.feature}</div>
                    <div>
                      {row.woo === true ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : row.woo === false ? (
                        <span className="text-muted-foreground">✗</span>
                      ) : (
                        <span>{row.woo}</span>
                      )}
                    </div>
                    <div>
                      {row.shopify === true ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : row.shopify === false ? (
                        <span className="text-muted-foreground">✗</span>
                      ) : (
                        <span>{row.shopify}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-6">
                We build on both platforms. <Link to="/contact" className="text-purple-600 hover:underline">Let's discuss which is right for you</Link>.
              </p>
            </div>
          </Container>
        </section>

        {/* FAQs */}
        <section className="py-16 lg:py-24">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                WooCommerce FAQs
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Common questions about WooCommerce development answered.
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
        <section className="py-16 lg:py-24 bg-purple-600 text-white">
          <Container>
            <AnimatedSection animation="fade">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Build Your WooCommerce Store?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Get a free consultation and quote. We'll help you understand if WooCommerce is the right choice for your business.
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
                { title: "WordPress Development", link: "/platforms/wordpress", desc: "WordPress sites beyond ecommerce" },
                { title: "Shopify Development", link: "/platforms/shopify", desc: "Hosted ecommerce alternative" },
                { title: "SEO Services", link: "/services/seo", desc: "Get your store ranking on Google" },
              ].map((service, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <Link 
                    to={service.link}
                    className="block bg-card rounded-xl p-6 border border-border hover:border-purple-500/50 transition-colors"
                  >
                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{service.desc}</p>
                    <span className="text-purple-600 text-sm">Learn more →</span>
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

export default WooCommerce;
