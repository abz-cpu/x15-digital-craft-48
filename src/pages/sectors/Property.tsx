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
  Building2,
  Search,
  Users,
  Camera,
  TrendingUp,
  ArrowRight,
  MessageSquare,
  MapPin,
  Home,
} from "lucide-react";

const Property = () => {
  const faqs = [
    {
      question: "How much does a property website cost in London?",
      answer: "Property websites in London typically cost £800-3,000 for brochure sites, £3,000-8,000 for sites with property listing integration, and £8,000-20,000+ for full property portals with search functionality, agent dashboards, and CRM integration. We offer custom-coded solutions from £200 for simpler sites."
    },
    {
      question: "Can you integrate with Rightmove and Zoopla?",
      answer: "Yes. We integrate with major property portals including Rightmove, Zoopla, OnTheMarket, and property management software like Alto, Reapit, and Jupix. Your listings can sync automatically, saving hours of manual work."
    },
    {
      question: "Do you build websites for estate agents, lettings agents, or developers?",
      answer: "All three. Estate agents need lead capture and property showcases. Lettings agents need tenant portals and application forms. Property developers need project marketing sites with off-plan sales functionality. We tailor the approach to your specific business model."
    },
    {
      question: "How important is SEO for property websites?",
      answer: "Critical. 80% of property searches start online. We optimise for local keywords like 'estate agents in [area]' and property-specific searches. Good SEO means appearing when potential sellers and landlords search for agents in your area."
    },
    {
      question: "Can you add virtual tours and floor plans?",
      answer: "Absolutely. We integrate Matterport 3D tours, video walkthroughs, interactive floor plans, and high-quality photography galleries. These features significantly increase engagement and reduce wasted viewings."
    }
  ];

  const processSteps = [
    {
      name: "Discovery & Analysis",
      text: "We analyse your market, competition, and target audience. Understand your property types, locations, and unique selling points."
    },
    {
      name: "Design & UX",
      text: "Create a design that showcases properties beautifully on all devices. Property search, filters, and lead capture optimised for conversions."
    },
    {
      name: "Development & Integration",
      text: "Build your site with property portal feeds, CRM integrations, and admin tools for easy property management."
    },
    {
      name: "Content & SEO",
      text: "Optimise for local property searches. Create area guides, property content, and Google Business Profile optimisation."
    },
    {
      name: "Launch & Training",
      text: "Go live with full training on adding properties, managing enquiries, and using your new website effectively."
    },
    {
      name: "Ongoing Support",
      text: "Monthly maintenance, SEO monitoring, and support to keep your property website performing at its best."
    }
  ];

  return (
    <>
      <SEO
        title="Property Website Design London | Estate Agent Websites from £800"
        description="Specialist property website design for estate agents, lettings agencies, and developers in London & UK. Rightmove integration, property search, lead capture. Get a free quote."
        keywords="property website design london, estate agent website uk, letting agent website design, property developer website, rightmove integration, zoopla website feed, property portal london, real estate website uk"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/sectors/property"
      />
      <ServiceSchema
        name="Property Website Design London"
        description="Specialist website design for estate agents, lettings agencies, and property developers. Property portal integration and lead generation."
        url="https://digital.luminousanddeliver.co.uk/sectors/property"
        priceRange="£800-£20,000"
        serviceType="Property Website Design"
      />
      <FAQSchema faqs={faqs} pageId="property-sector" />
      <HowToSchema
        name="How We Build Property Websites"
        description="Our 6-step process for creating high-converting property websites."
        steps={processSteps}
        totalTime="P4W"
        estimatedCost={{ currency: "GBP", value: "800-20000" }}
      />
      
      <Navigation darkHero />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-16 md:pt-44 md:pb-20 bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl text-center mx-auto">
                <span className="inline-block px-4 py-2 bg-white/10 text-primary-foreground rounded-full text-sm font-medium mb-6">
                  Property Sector Specialists
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-primary-foreground">
                  Property Website Design London
                </h1>
                <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Websites that showcase properties beautifully and generate qualified leads. For estate agents, lettings agencies, and property developers across London and the UK.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="text-lg bg-background text-primary hover:bg-muted">
                    <Link to="/contact">
                      Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                    <a href="https://wa.me/447424050827" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp Us
                    </a>
                  </Button>
                </div>
                <p className="mt-6 text-primary-foreground/80">
                  <span className="font-semibold">Property sites from £800</span> • Rightmove & Zoopla integration • UK-based team
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
                { stat: "80%", label: "of buyers start search online" },
                { stat: "3x", label: "more leads with good UX" },
                { stat: "47%", label: "expect mobile-friendly sites" },
                { stat: "£800", label: "starting price" },
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

        {/* Who This Is For */}
        <section className="py-16 lg:py-24">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Who We Work With
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Property professionals across London and the UK trust us with their online presence.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Building2, title: "Estate Agents", desc: "Sales-focused sites that generate vendor and buyer leads" },
                { icon: Home, title: "Lettings Agents", desc: "Tenant portals, application forms, and landlord services" },
                { icon: TrendingUp, title: "Property Developers", desc: "Project marketing sites with off-plan sales tools" },
                { icon: Users, title: "Property Managers", desc: "Client portals and property management showcases" },
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

        {/* Key Features */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Property Website Features
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Everything you need to showcase properties and capture leads.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Search, title: "Property Search", desc: "Advanced filters for location, price, beds, property type with instant results" },
                { icon: Camera, title: "Virtual Tours", desc: "Matterport 3D tours, video walkthroughs, and interactive floor plans" },
                { icon: MapPin, title: "Area Guides", desc: "Local content that ranks for '[area] property' searches" },
                { icon: TrendingUp, title: "Lead Capture", desc: "Valuation requests, viewing bookings, and enquiry forms that convert" },
                { icon: Building2, title: "Portal Integration", desc: "Rightmove, Zoopla, OnTheMarket feeds synced automatically" },
                { icon: Users, title: "Agent Profiles", desc: "Showcase your team with bios, photos, and contact details" },
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

        {/* Pricing Tiers */}
        <section className="py-16 lg:py-24">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Property Website Packages
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Choose the right level for your property business.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { 
                  title: "Starter", 
                  price: "From £800", 
                  desc: "Perfect for new agents or single-branch operations",
                  features: ["5-10 page website", "Property gallery", "Contact forms", "Mobile responsive", "Basic SEO setup", "Social media links"]
                },
                { 
                  title: "Professional", 
                  price: "From £3,000", 
                  desc: "For established agencies wanting lead generation",
                  features: ["Property search & filters", "Rightmove/Zoopla feed", "Valuation request forms", "Area guides", "Blog/news section", "Analytics dashboard"],
                  popular: true
                },
                { 
                  title: "Enterprise", 
                  price: "From £8,000", 
                  desc: "Full property portal with CRM integration",
                  features: ["Custom property portal", "Multi-branch support", "CRM integration", "Agent dashboards", "Vendor login area", "API integrations"]
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
              Or explore our <Link to="/web-package" className="text-primary hover:underline">custom website packages from £200</Link> for simpler property sites.
            </p>
          </Container>
        </section>

        {/* FAQs */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Property Website FAQs
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Common questions about property website development.
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
        <section className="py-16 lg:py-24">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Related Services
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Complete your property marketing with these services.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { title: "SEO for Estate Agents", desc: "Rank for local property searches", link: "/services/seo" },
                { title: "Property Copywriting", desc: "Compelling property descriptions", link: "/services/copywriting" },
                { title: "Digital Marketing", desc: "Social media & paid ads for property", link: "/services/digital-marketing" },
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

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary/90 to-secondary">
          <Container>
            <AnimatedSection animation="fade">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
                  Ready to Attract More Property Leads?
                </h2>
                <p className="text-xl mb-8 text-primary-foreground/90">
                  Get a free consultation and see examples of property websites we've built for agencies like yours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="text-lg bg-background text-primary hover:bg-muted">
                    <Link to="/contact">
                      Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
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
        <AreasFooter accentColor="primary" />
      </main>
      
      <Footer />
    </>
  );
};

export default Property;
