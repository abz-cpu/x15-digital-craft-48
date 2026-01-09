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
  CheckCircle2,
  Heart,
  Users,
  Calendar,
  TrendingUp,
  ArrowRight,
  MessageSquare,
  HandHeart,
  Shield,
  Globe,
} from "lucide-react";

const Charity = () => {
  const faqs = [
    {
      question: "How much does a charity website cost in the UK?",
      answer: "Charity websites typically cost £500-2,000 for brochure sites with donation integration, £2,000-5,000 for sites with event management and volunteer signups, and £5,000-15,000+ for complex platforms with member portals and campaign tools. We offer discounted rates for registered charities and non-profits."
    },
    {
      question: "Can you integrate donation platforms?",
      answer: "Yes. We integrate with all major donation platforms including JustGiving, GoFundMe Charity, CAF Donate, Stripe, PayPal Giving Fund, and direct payment processing. We can also set up Gift Aid capture to maximise your donations."
    },
    {
      question: "Do you offer discounts for charities?",
      answer: "Yes. We offer up to 20% discount for registered charities and non-profit organisations. We also offer flexible payment terms and can work within grant funding timelines. Ask us about charity pricing when you get in touch."
    },
    {
      question: "Can you help with GDPR compliance for donor data?",
      answer: "Absolutely. Charity websites handle sensitive donor data, so we ensure full GDPR compliance including consent management, privacy policies, data retention settings, and secure donation processing. We can also integrate with GDPR-compliant CRM systems."
    },
    {
      question: "Do you build fundraising campaign pages?",
      answer: "Yes. We create dedicated campaign pages with progress trackers, donor walls, social sharing, and urgency elements that drive donations. These can be standalone or integrated into your main charity website."
    }
  ];

  const processSteps = [
    {
      name: "Discovery & Mission",
      text: "We understand your charity's mission, audience, and goals. What story do you need to tell? What actions do you want visitors to take?"
    },
    {
      name: "Impact-Focused Design",
      text: "Create designs that emotionally connect with supporters. Showcase your impact with compelling visuals, stories, and clear calls to action."
    },
    {
      name: "Donation & Forms Setup",
      text: "Integrate donation platforms, volunteer signups, event registrations, and contact forms optimised for conversions."
    },
    {
      name: "Content & Storytelling",
      text: "Help structure your content to tell your story effectively. Case studies, impact reports, and beneficiary stories that resonate."
    },
    {
      name: "Launch & Training",
      text: "Go live with full training so your team can update content, manage donations, and track impact independently."
    },
    {
      name: "Ongoing Support",
      text: "Affordable maintenance packages to keep your site secure, updated, and performing well."
    }
  ];

  return (
    <>
      <SEO
        title="Charity Website Design UK | Non-Profit Websites from £500"
        description="Specialist charity website design for UK non-profits, charities, and community organisations. Donation integration, volunteer signups, and impact storytelling. Charity discounts available."
        keywords="charity website design uk, non-profit website uk, charity web design london, donation website, volunteer signup website, fundraising website design, charity sector website, ngo website design"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/sectors/charity"
      />
      <ServiceSchema
        name="Charity Website Design UK"
        description="Specialist website design for charities, non-profits, and community organisations. Donation integration and impact storytelling."
        url="https://digital.luminousanddeliver.co.uk/sectors/charity"
        priceRange="£500-£15,000"
        serviceType="Charity Website Design"
      />
      <FAQSchema faqs={faqs} pageId="charity-sector" />
      <HowToSchema
        name="How We Build Charity Websites"
        description="Our 6-step process for creating impactful charity websites."
        steps={processSteps}
        totalTime="P3W"
        estimatedCost={{ currency: "GBP", value: "500-15000" }}
      />
      
      <Navigation darkHero />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-16 md:pt-44 md:pb-20 bg-gradient-to-br from-rose-600 via-rose-700 to-rose-900 overflow-hidden">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl text-center mx-auto">
                <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
                  Charity Sector Specialists
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                  Charity Website Design UK
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Websites that tell your story, inspire action, and maximise donations. For charities, non-profits, and community organisations across the UK.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="text-lg bg-white text-rose-700 hover:bg-rose-50">
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
                  <span className="font-semibold">Charity sites from £500</span> • Charity discounts available • JustGiving & donation integration
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
                { stat: "42%", label: "growth in online donations" },
                { stat: "67%", label: "research charities online first" },
                { stat: "3x", label: "more donations with good UX" },
                { stat: "20%", label: "charity discount" },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className="p-4">
                    <p className="text-3xl md:text-4xl font-bold text-rose-600 mb-1">{item.stat}</p>
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
                Charities and non-profits of all sizes trust us with their online presence.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Heart, title: "Registered Charities", desc: "Established charities needing a professional online presence" },
                { icon: Users, title: "Community Groups", desc: "Local organisations connecting communities and volunteers" },
                { icon: Globe, title: "Social Enterprises", desc: "Purpose-driven businesses making positive impact" },
                { icon: HandHeart, title: "Foundations", desc: "Grant-giving bodies and philanthropic organisations" },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className="bg-card rounded-xl p-6 border border-border hover:border-rose-500/50 transition-colors h-full">
                    <item.icon className="h-10 w-10 text-rose-600 mb-4" />
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
                Charity Website Features
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Everything you need to inspire action and maximise impact.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Heart, title: "Donation Integration", desc: "JustGiving, Stripe, PayPal with Gift Aid capture and recurring donations" },
                { icon: Users, title: "Volunteer Signups", desc: "Forms, availability calendars, and volunteer management tools" },
                { icon: Calendar, title: "Event Management", desc: "Event listings, ticketing, and fundraising event pages" },
                { icon: TrendingUp, title: "Impact Storytelling", desc: "Case studies, beneficiary stories, and impact reports that resonate" },
                { icon: Shield, title: "GDPR Compliance", desc: "Consent management, privacy policies, and secure data handling" },
                { icon: Globe, title: "Campaign Pages", desc: "Dedicated fundraising campaigns with progress trackers and social sharing" },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-rose-500/10 rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-rose-600" />
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
                Charity Website Packages
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Affordable options for organisations of all sizes.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { 
                  title: "Starter", 
                  price: "From £500", 
                  desc: "Perfect for small charities and community groups",
                  features: ["5-page website", "Donation button/link", "Contact forms", "Mobile responsive", "Basic SEO setup", "Social media links"]
                },
                { 
                  title: "Impact", 
                  price: "From £2,000", 
                  desc: "For growing charities wanting more engagement",
                  features: ["Donation platform integration", "Volunteer signup forms", "Event listings", "Impact/case studies section", "Newsletter signup", "Blog/news section"],
                  popular: true
                },
                { 
                  title: "Campaign", 
                  price: "From £5,000", 
                  desc: "Full-featured charity platform",
                  features: ["Campaign fundraising pages", "Member/donor portal", "CRM integration", "Grant application section", "Multi-language support", "Advanced analytics"]
                },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className={`bg-card rounded-xl p-6 border h-full flex flex-col ${item.popular ? 'border-rose-500 ring-2 ring-rose-500/20' : 'border-border'}`}>
                    {item.popular && (
                      <span className="inline-block px-3 py-1 bg-rose-600 text-white text-xs font-medium rounded-full mb-4 w-fit">Most Popular</span>
                    )}
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-2xl font-bold text-rose-600 mb-2">{item.price}</p>
                    <p className="text-muted-foreground text-sm mb-6">{item.desc}</p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-rose-600 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant={item.popular ? "default" : "outline"} className={item.popular ? "bg-rose-600 hover:bg-rose-700" : ""}>
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            
            <p className="text-center text-muted-foreground mt-8">
              All prices include charity discount. <Link to="/web-package" className="text-rose-600 hover:underline">View our standard packages</Link> for comparison.
            </p>
          </Container>
        </section>

        {/* FAQs */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Charity Website FAQs
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Common questions about charity website development.
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
        <section className="py-16 lg:py-24 bg-gradient-to-br from-rose-600 via-rose-700 to-rose-900">
          <Container>
            <AnimatedSection animation="fade">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Ready to Amplify Your Impact?
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Get a free consultation and see how we can help your charity reach more supporters online.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="text-lg bg-white text-rose-700 hover:bg-rose-50">
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
      </main>
      
      <Footer />
    </>
  );
};

export default Charity;
