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
  Briefcase,
  Users,
  TrendingUp,
  ArrowRight,
  MessageSquare,
  FileText,
  Shield,
  Target,
  BarChart3,
} from "lucide-react";

const B2B = () => {
  const faqs = [
    {
      question: "What makes a B2B website different from B2C?",
      answer: "B2B websites focus on longer sales cycles, building credibility, and generating qualified leads rather than immediate purchases. They emphasise case studies, testimonials, service explanations, and thought leadership content. The goal is to capture contact information and nurture prospects, not drive impulse buys."
    },
    {
      question: "How much does a B2B website cost in London?",
      answer: "B2B websites in London typically cost £1,000-3,000 for professional services brochure sites, £3,000-8,000 for lead generation sites with content marketing capabilities, and £8,000-25,000+ for complex enterprise sites with client portals and integrations. Our custom-coded sites start from £200 for simpler needs."
    },
    {
      question: "How do B2B websites generate leads?",
      answer: "Through strategic calls-to-action: contact forms, quote requests, consultation bookings, downloadable resources (whitepapers, guides), newsletter signups, and demo requests. We optimise every page for lead capture while building trust through case studies, testimonials, and credibility signals."
    },
    {
      question: "Can you integrate with CRM systems?",
      answer: "Yes. We integrate with HubSpot, Salesforce, Pipedrive, Zoho CRM, and others. Form submissions can feed directly into your CRM, trigger email sequences, and notify your sales team. This automation ensures no lead falls through the cracks."
    },
    {
      question: "How important is content marketing for B2B?",
      answer: "Critical. 70% of B2B buyers research extensively online before contacting vendors. A blog with valuable industry content, case studies, and whitepapers positions you as an expert, improves SEO, and nurtures prospects through longer buying cycles."
    }
  ];

  const processSteps = [
    {
      name: "Discovery & Strategy",
      text: "Understand your services, target clients, sales process, and competition. Define the website's role in your lead generation strategy."
    },
    {
      name: "Credibility-Focused Design",
      text: "Create a professional design that builds trust. Showcase case studies, testimonials, certifications, and team expertise prominently."
    },
    {
      name: "Lead Capture Optimisation",
      text: "Strategic placement of CTAs, forms, and conversion points. Every page designed to capture qualified leads."
    },
    {
      name: "Content & SEO",
      text: "Develop service pages, case studies, and blog structure. Optimise for B2B search terms your prospects use."
    },
    {
      name: "CRM & Analytics Integration",
      text: "Connect to your CRM, set up tracking, and configure lead notifications so your sales team acts fast."
    },
    {
      name: "Launch & Iteration",
      text: "Go live with A/B testing capability. Monitor conversions and continuously optimise for better lead quality."
    }
  ];

  return (
    <>
      <SEO
        title="B2B Website Design London | Lead Generation Websites from £1,000"
        description="B2B website design for professional services, consultancies, and business-focused companies in London. Lead generation, CRM integration, and credibility-building design."
        keywords="b2b website design london, business website uk, professional services website, lead generation website, b2b web design, corporate website design london, consultancy website uk, b2b lead generation"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/sectors/b2b"
      />
      <ServiceSchema
        name="B2B Website Design London"
        description="Professional website design for B2B companies, consultancies, and professional services. Lead generation and credibility building."
        url="https://digital.luminousanddeliver.co.uk/sectors/b2b"
        priceRange="£1,000-£25,000"
        serviceType="B2B Website Design"
      />
      <FAQSchema faqs={faqs} pageId="b2b-sector" />
      <HowToSchema
        name="How We Build B2B Websites"
        description="Our 6-step process for creating high-converting B2B websites."
        steps={processSteps}
        totalTime="P4W"
        estimatedCost={{ currency: "GBP", value: "1000-25000" }}
      />
      
      <Navigation darkHero />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-16 md:pt-44 md:pb-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 overflow-hidden">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl text-center mx-auto">
                <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
                  B2B Sector Specialists
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                  B2B Website Design London
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Websites that establish credibility and generate qualified leads. For professional services, consultancies, and B2B companies across London and the UK.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="text-lg bg-white text-slate-900 hover:bg-slate-100">
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
                  <span className="font-semibold">B2B sites from £1,000</span> • Lead generation focused • CRM integration
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
                { stat: "70%", label: "of B2B buyers research online" },
                { stat: "5-12", label: "touchpoints before contact" },
                { stat: "64%", label: "prefer credible-looking sites" },
                { stat: "£1,000", label: "starting price" },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className="p-4">
                    <p className="text-3xl md:text-4xl font-bold text-slate-800 mb-1">{item.stat}</p>
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
                B2B companies across industries trust us with their lead generation.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Briefcase, title: "Consultancies", desc: "Management, IT, HR, and specialist consulting firms" },
                { icon: FileText, title: "Professional Services", desc: "Accountants, lawyers, architects, and advisors" },
                { icon: Target, title: "Agencies", desc: "Marketing, PR, recruitment, and creative agencies" },
                { icon: Shield, title: "Tech Companies", desc: "SaaS, IT services, and technology providers" },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className="bg-card rounded-xl p-6 border border-border hover:border-slate-500/50 transition-colors h-full">
                    <item.icon className="h-10 w-10 text-slate-700 mb-4" />
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
                B2B Website Features
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Everything you need to build credibility and capture qualified leads.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: FileText, title: "Case Studies", desc: "Showcase successful projects with results, testimonials, and client logos" },
                { icon: Users, title: "Team Profiles", desc: "Build trust by showcasing your experts, qualifications, and experience" },
                { icon: Target, title: "Service Pages", desc: "Clear, benefit-focused service descriptions that address client pain points" },
                { icon: TrendingUp, title: "Lead Capture", desc: "Strategic CTAs, forms, and downloadable resources that convert" },
                { icon: BarChart3, title: "CRM Integration", desc: "HubSpot, Salesforce, Pipedrive—leads flow directly to your sales team" },
                { icon: Briefcase, title: "Thought Leadership", desc: "Blog, resources, and insights that position you as industry experts" },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-slate-500/10 rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-slate-700" />
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
                B2B Website Packages
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Choose the right level for your business needs.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { 
                  title: "Professional", 
                  price: "From £1,000", 
                  desc: "Solid foundation for smaller consultancies",
                  features: ["5-8 page website", "Service pages", "Contact forms", "Mobile responsive", "Basic SEO setup", "Google Analytics"]
                },
                { 
                  title: "Lead Generation", 
                  price: "From £3,000", 
                  desc: "Optimised for capturing qualified leads",
                  features: ["Case study section", "Blog/resources", "Lead magnets", "CRM integration", "Advanced SEO", "A/B testing ready"],
                  popular: true
                },
                { 
                  title: "Enterprise", 
                  price: "From £8,000", 
                  desc: "Full-featured B2B platform",
                  features: ["Client portal", "Multi-service microsites", "Advanced integrations", "Marketing automation", "Custom functionality", "Priority support"]
                },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <div className={`bg-card rounded-xl p-6 border h-full flex flex-col ${item.popular ? 'border-slate-700 ring-2 ring-slate-700/20' : 'border-border'}`}>
                    {item.popular && (
                      <span className="inline-block px-3 py-1 bg-slate-800 text-white text-xs font-medium rounded-full mb-4 w-fit">Most Popular</span>
                    )}
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-2xl font-bold text-slate-800 mb-2">{item.price}</p>
                    <p className="text-muted-foreground text-sm mb-6">{item.desc}</p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-slate-700 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant={item.popular ? "default" : "outline"} className={item.popular ? "bg-slate-800 hover:bg-slate-900" : ""}>
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            
            <p className="text-center text-muted-foreground mt-8">
              Need something simpler? Our <Link to="/web-package" className="text-slate-700 hover:underline">custom-coded sites start from £200</Link>.
            </p>
          </Container>
        </section>

        {/* FAQs */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                B2B Website FAQs
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Common questions about B2B website development.
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
                Complete your B2B marketing with these services.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { title: "Content Marketing", desc: "Thought leadership content that attracts leads", link: "/services/content-marketing" },
                { title: "SEO Services", desc: "Rank for B2B search terms", link: "/services/seo" },
                { title: "LinkedIn Marketing", desc: "Reach decision-makers directly", link: "/services/digital-marketing" },
              ].map((item, index) => (
                <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                  <Link to={item.link} className="block bg-card rounded-xl p-6 border border-border hover:border-slate-500/50 transition-colors">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
          <Container>
            <AnimatedSection animation="fade">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Ready to Generate More B2B Leads?
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Get a free consultation and see how we can help your business attract better clients.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="text-lg bg-white text-slate-900 hover:bg-slate-100">
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

export default B2B;
