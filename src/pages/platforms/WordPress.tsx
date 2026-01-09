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
  Code,
  Palette,
  Settings,
  Shield,
  Zap,
  Users,
  TrendingUp,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

const WordPress = () => {
  const faqs = [
    {
      question: "How much does a WordPress website cost in London?",
      answer: "WordPress websites in London typically start from £200 for a starter site. A full business website with custom design, SEO optimisation, and essential plugins ranges from £500-£2,000. Enterprise WordPress solutions with custom functionality can range from £3,000-£10,000+. We offer transparent pricing with no hidden fees."
    },
    {
      question: "Is WordPress good for SEO?",
      answer: "Absolutely. WordPress powers over 43% of all websites because it's inherently SEO-friendly. With proper structure, optimised themes, and plugins like Yoast SEO or Rank Math, WordPress sites can achieve excellent search rankings. We build every WordPress site with SEO best practices baked in from day one."
    },
    {
      question: "Can I update my WordPress website myself?",
      answer: "Yes! WordPress has an intuitive admin dashboard that lets you update content, add blog posts, change images, and manage pages without any coding knowledge. We provide training and documentation so you're confident making changes. For more complex updates, our support packages are available."
    },
    {
      question: "How long does it take to build a WordPress website?",
      answer: "A standard WordPress business website takes 2-4 weeks from design approval to launch. Simpler sites can be ready in 1-2 weeks, while complex projects with custom functionality may take 6-8 weeks. We provide clear timelines during our discovery call and keep you updated throughout."
    },
    {
      question: "Do you provide WordPress maintenance and support?",
      answer: "Yes, we offer ongoing WordPress maintenance packages from £49/month. This includes security updates, plugin updates, regular backups, uptime monitoring, and priority support. Keeping WordPress updated is crucial for security and performance."
    }
  ];

  const processSteps = [
    {
      name: "Discovery & Planning",
      text: "We discuss your goals, target audience, and requirements. You'll receive a detailed proposal with timeline and transparent pricing."
    },
    {
      name: "Design & Wireframing",
      text: "We create mockups and wireframes for your approval. You'll see exactly how your site will look before development begins."
    },
    {
      name: "WordPress Development",
      text: "Our developers build your site using clean code, optimised themes, and essential plugins. Every site is mobile-responsive and fast-loading."
    },
    {
      name: "Content & SEO Setup",
      text: "We optimise your content, set up SEO plugins, configure meta tags, and ensure your site is ready to rank on Google."
    },
    {
      name: "Testing & Launch",
      text: "Rigorous testing across devices and browsers. We handle domain setup, SSL certificates, and a smooth go-live process."
    },
    {
      name: "Training & Handover",
      text: "You receive full training on managing your WordPress site, plus documentation and ongoing support options."
    }
  ];

  return (
    <>
      <SEO
        title="WordPress Developer London | Custom WordPress Websites from £200"
        description="Expert WordPress development in London & East London. Custom themes, WooCommerce integration, SEO-optimised sites. Starter websites from £200. Get a free quote today."
        keywords="wordpress developer london, wordpress agency uk, wordpress web design london, wordpress developer near me, custom wordpress themes, wordpress website design uk, wordpress developer east london, wordpress seo, wordpress ecommerce"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/platforms/wordpress"
      />
      <ServiceSchema
        name="WordPress Development London"
        description="Professional WordPress development services in London. Custom themes, plugins, WooCommerce stores, and SEO-optimised websites."
        url="https://digital.luminousanddeliver.co.uk/platforms/wordpress"
        priceRange="£200-£10,000"
        serviceType="WordPress Development"
      />
      <FAQSchema faqs={faqs} />
      <HowToSchema
        name="How We Build WordPress Websites"
        description="Our 6-step process for creating professional WordPress websites that drive results."
        steps={processSteps}
        totalTime="P4W"
        estimatedCost={{ currency: "GBP", value: "200-5000" }}
      />
      
      <Navigation />
      <BreadcrumbNav />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                  WordPress Development UK
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  WordPress Developer London
                  <span className="text-primary block mt-2">Custom Websites That Convert</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                  Professional WordPress development for London businesses. From starter sites to enterprise solutions—we build fast, secure, SEO-optimised WordPress websites that grow with your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="text-lg">
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
                  <span className="text-primary font-semibold">Websites from £200</span> • No hidden fees • UK-based team
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
                Who WordPress Is Perfect For
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                WordPress powers 43% of all websites for good reason. It's the ideal choice for businesses that want control, flexibility, and room to grow.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, title: "Small Businesses", desc: "Affordable, professional sites that compete with larger competitors" },
                { icon: TrendingUp, title: "Growing Companies", desc: "Scalable platform that grows with your business needs" },
                { icon: Palette, title: "Creative Professionals", desc: "Portfolio sites that showcase your work beautifully" },
                { icon: Code, title: "Content Creators", desc: "Powerful blogging and content management capabilities" },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors h-full">
                    <item.icon className="h-10 w-10 text-primary mb-4" />
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
                What We Build on WordPress
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                From simple brochure sites to complex web applications—WordPress can do it all with the right expertise.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Business Websites", desc: "Professional sites that establish credibility and generate leads", price: "From £200" },
                { title: "Portfolio Sites", desc: "Stunning showcases for photographers, designers, and artists", price: "From £300" },
                { title: "WooCommerce Stores", desc: "Full ecommerce functionality with payment processing", price: "From £800" },
                { title: "Membership Sites", desc: "Gated content, subscriptions, and member management", price: "From £1,500" },
                { title: "Directory Listings", desc: "Property listings, job boards, business directories", price: "From £2,000" },
                { title: "Custom Applications", desc: "Bespoke functionality with custom plugins", price: "From £3,000" },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className="bg-card rounded-xl p-6 border border-border h-full">
                    <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.desc}</p>
                    <span className="text-primary font-semibold">{item.price}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 lg:py-24">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Why Choose WordPress?
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                The world's most popular CMS gives you power, flexibility, and long-term value.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Settings, title: "Easy Content Management", desc: "Update your site without any coding knowledge using the intuitive WordPress dashboard" },
                { icon: Shield, title: "Secure & Reliable", desc: "Regular security updates, robust architecture, and extensive backup options" },
                { icon: Zap, title: "Lightning Fast", desc: "Optimised code, caching, and CDN integration for excellent performance" },
                { icon: TrendingUp, title: "SEO-Friendly", desc: "Built-in SEO features plus powerful plugins like Yoast and Rank Math" },
                { icon: Code, title: "60,000+ Plugins", desc: "Extend functionality with plugins for forms, booking, payments, and more" },
                { icon: Users, title: "Full Ownership", desc: "You own your website. No monthly platform fees or vendor lock-in" },
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

        {/* WordPress vs Alternatives */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                WordPress vs Website Builders
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Thinking about Wix, Squarespace, or other builders? Here's why WordPress wins for serious businesses.
              </p>
            </AnimatedSection>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 font-semibold text-center">
                  <div>Feature</div>
                  <div className="text-primary">WordPress</div>
                  <div className="text-muted-foreground">Wix/Squarespace</div>
                </div>
                {[
                  { feature: "Full ownership", wp: true, other: false },
                  { feature: "Custom functionality", wp: true, other: false },
                  { feature: "SEO control", wp: true, other: "Limited" },
                  { feature: "Move to any host", wp: true, other: false },
                  { feature: "60,000+ plugins", wp: true, other: false },
                  { feature: "No monthly platform fee", wp: true, other: false },
                  { feature: "Unlimited scalability", wp: true, other: "Limited" },
                ].map((row, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 p-4 border-t border-border text-center">
                    <div className="text-left">{row.feature}</div>
                    <div>
                      {row.wp === true ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <span>{row.wp}</span>
                      )}
                    </div>
                    <div>
                      {row.other === true ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : row.other === false ? (
                        <span className="text-muted-foreground">✗</span>
                      ) : (
                        <span className="text-muted-foreground">{row.other}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* FAQs */}
        <section className="py-16 lg:py-24">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                WordPress FAQs
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Common questions about WordPress development answered.
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
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <Container>
            <AnimatedSection animation="fade">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Build Your WordPress Website?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Get a free consultation and quote. No obligation, just honest advice on the best solution for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild className="text-lg">
                    <Link to="/contact">
                      Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
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
                { title: "WooCommerce Development", link: "/platforms/woocommerce", desc: "Sell online with WordPress + WooCommerce" },
                { title: "SEO Services", link: "/services/seo", desc: "Rank higher on Google with our SEO expertise" },
                { title: "Website Maintenance", link: "/services/maintenance-support", desc: "Keep your WordPress site secure and updated" },
              ].map((service, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <Link 
                    to={service.link}
                    className="block bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
                  >
                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{service.desc}</p>
                    <span className="text-primary text-sm">Learn more →</span>
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

export default WordPress;
