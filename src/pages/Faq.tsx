import { useState } from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Container } from "@/components/Container";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { FAQSchema } from "@/components/FAQSchema";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AreasFooter } from "@/components/AreasFooter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Globe,
  ShoppingCart,
  Search,
  Bot,
  Settings,
  HelpCircle,
  ArrowRight,
  MessageSquare,
  LayoutGrid,
} from "lucide-react";

interface FAQ {
  question: string;
  answer: React.ReactNode;
}

interface FAQCategory {
  id: string;
  name: string;
  icon: typeof Globe;
  faqs: FAQ[];
}

const faqCategories: FAQCategory[] = [
  {
    id: "website-pricing",
    name: "Website & Pricing",
    icon: Globe,
    faqs: [
      {
        question: "How much does a website cost in London?",
        answer: (
          <>
            Our websites start from £200 for a custom-coded brochure site. <Link to="/platforms/wordpress" className="text-primary hover:underline">WordPress sites</Link> typically cost £400-2,500, while complex sites with advanced functionality can range from £2,500-10,000+. We provide transparent, fixed-price quotes after understanding your requirements. <Link to="/web-package" className="text-primary hover:underline">View our packages →</Link>
          </>
        )
      },
      {
        question: "What's included in your website packages?",
        answer: (
          <>
            All packages include responsive design, <Link to="/services/seo" className="text-primary hover:underline">SEO optimisation</Link>, SSL certificate, mobile-friendly layout, contact forms, and basic analytics setup. Higher tiers add more pages, advanced features, and longer support periods. <Link to="/web-package" className="text-primary hover:underline">Compare packages →</Link>
          </>
        )
      },
      {
        question: "How long does it take to build a website?",
        answer: "Simple brochure websites take 1-2 weeks. Standard business websites take 2-4 weeks. Complex sites with custom functionality may take 6-8 weeks. We provide clear timelines during our discovery call."
      },
      {
        question: "Do I need to pay upfront?",
        answer: "We typically require a 50% deposit to begin work, with the balance due on completion before launch. For larger projects, we can arrange milestone-based payments."
      },
      {
        question: "What if I'm not happy with the design?",
        answer: "We include revision rounds in all packages. We work collaboratively, showing you progress throughout, so there are no surprises. We don't consider a project complete until you're satisfied."
      },
      {
        question: "Do you offer payment plans?",
        answer: (
          <>
            Yes, we can arrange payment plans for projects over £1,000. <Link to="/contact" className="text-primary hover:underline">Speak to us</Link> about your budget and we'll find a solution that works for you.
          </>
        )
      },
    ],
  },
  {
    id: "platforms",
    name: "Platforms",
    icon: ShoppingCart,
    faqs: [
      {
        question: "Should I choose WordPress or a custom-coded website?",
        answer: (
          <>
            <Link to="/platforms/wordpress" className="text-primary hover:underline">WordPress</Link> is ideal if you need to frequently update content yourself and want access to the plugin ecosystem. However, for many businesses, our <Link to="/platforms/custom-development" className="text-primary hover:underline">custom-coded websites</Link> from £200 offer better performance, lower maintenance costs, and a unique design without template limitations.
          </>
        )
      },
      {
        question: "How much does a WordPress website cost in London in 2026?",
        answer: (
          <>
            <Link to="/platforms/wordpress" className="text-primary hover:underline">WordPress websites</Link> typically cost £400-800 for a starter theme-based site, £800-2,500 for a custom-designed business website, and £2,500-5,000+ for complex sites with advanced functionality.
          </>
        )
      },
      {
        question: "Is Shopify better than WooCommerce for ecommerce?",
        answer: (
          <>
            It depends on your needs. <Link to="/platforms/shopify" className="text-primary hover:underline">Shopify</Link> is better for businesses wanting a hosted solution with less technical management. <Link to="/platforms/woocommerce" className="text-primary hover:underline">WooCommerce</Link> is better for businesses needing maximum customisation, those already on WordPress, and those wanting to avoid monthly platform fees.
          </>
        )
      },
      {
        question: "How much does a Shopify store cost?",
        answer: (
          <>
            <Link to="/platforms/shopify" className="text-primary hover:underline">Shopify stores</Link> typically cost £1,000-2,000 for a starter store with theme customisation, £2,000-4,000 for custom theme design, and £4,000-8,000+ for advanced features. You'll also pay Shopify's monthly subscription (from £25/month).
          </>
        )
      },
      {
        question: "What hosting do I need for WooCommerce?",
        answer: (
          <>
            <Link to="/platforms/woocommerce" className="text-primary hover:underline">WooCommerce</Link> requires quality WordPress hosting. We recommend managed WooCommerce hosting from providers like Cloudways, Kinsta, or WP Engine (from £20-50/month). We can set up and manage hosting as part of our packages.
          </>
        )
      },
      {
        question: "When should I choose custom development?",
        answer: (
          <>
            Choose <Link to="/platforms/custom-development" className="text-primary hover:underline">custom development</Link> when you need functionality that templates can't provide, performance is critical, you're building a product/SaaS, you have unique business logic requirements, or you need to integrate deeply with internal systems.
          </>
        )
      },
    ],
  },
  {
    id: "seo-marketing",
    name: "SEO & Marketing",
    icon: Search,
    faqs: [
      {
        question: "How much does SEO cost in London?",
        answer: (
          <>
            <Link to="/services/seo" className="text-primary hover:underline">SEO services</Link> typically start from £300/month for local SEO, £500-1,500/month for competitive terms, and £1,500+/month for enterprise SEO. We offer packages tailored to your goals and competition level. <Link to="/seo-services-london" className="text-primary hover:underline">Learn more about our SEO services →</Link>
          </>
        )
      },
      {
        question: "How long does SEO take to show results?",
        answer: (
          <>
            SEO is a long-term strategy. You'll typically see initial improvements in 3-6 months, with significant results in 6-12 months. <Link to="/areas/stratford" className="text-primary hover:underline">Local SEO</Link> for areas like Stratford and Ilford often shows faster results than national campaigns.
          </>
        )
      },
      {
        question: "Is WordPress good for SEO?",
        answer: (
          <>
            Absolutely. <Link to="/platforms/wordpress" className="text-primary hover:underline">WordPress</Link> powers over 43% of all websites because it's inherently SEO-friendly. With proper structure, optimised themes, and plugins like Yoast SEO or Rank Math, WordPress sites can achieve excellent search rankings.
          </>
        )
      },
      {
        question: "Do you offer digital marketing services?",
        answer: (
          <>
            Yes, we offer comprehensive <Link to="/services/digital-marketing" className="text-primary hover:underline">digital marketing</Link> including SEO, Google Ads, social media marketing, <Link to="/services/email-marketing" className="text-primary hover:underline">email marketing</Link>, and <Link to="/services/content-marketing" className="text-primary hover:underline">content marketing</Link>. We can create a tailored strategy for your business goals.
          </>
        )
      },
      {
        question: "How important is content marketing for B2B?",
        answer: (
          <>
            Critical. 70% of <Link to="/sectors/b2b" className="text-primary hover:underline">B2B buyers</Link> research extensively online before contacting vendors. A <Link to="/blog" className="text-primary hover:underline">blog</Link> with valuable industry content, case studies, and whitepapers positions you as an expert and nurtures prospects through longer buying cycles.
          </>
        )
      },
      {
        question: "Can you help with Google Business Profile?",
        answer: (
          <>
            Yes, we optimise and manage Google Business Profiles as part of our <Link to="/services/seo" className="text-primary hover:underline">local SEO services</Link>. This includes profile setup, regular posts, review management, and local citation building.
          </>
        )
      },
    ],
  },
  {
    id: "ai-automation",
    name: "AI & Automation",
    icon: Bot,
    faqs: [
      {
        question: "How much does an AI chatbot cost?",
        answer: (
          <>
            AI chatbots start from £500 for a simple FAQ bot, £1,000-3,000 for a lead qualification chatbot, and £3,000+ for advanced chatbots with CRM integration and custom training. <Link to="/ai-package" className="text-primary hover:underline">View our AI packages →</Link>
          </>
        )
      },
      {
        question: "What can AI automation do for my business?",
        answer: (
          <>
            <Link to="/ai-services-london" className="text-primary hover:underline">AI automation</Link> can handle customer enquiries 24/7, qualify leads, book appointments, answer FAQs, process orders, and integrate with your existing systems. It saves time and ensures no lead is missed.
          </>
        )
      },
      {
        question: "Do I need technical knowledge to use an AI chatbot?",
        answer: "No. We handle all the technical setup and provide training on managing your chatbot. You can easily update responses and view analytics through a simple dashboard."
      },
      {
        question: "Can AI chatbots integrate with my existing systems?",
        answer: (
          <>
            Yes, we integrate chatbots with popular CRMs (HubSpot, Salesforce), booking systems (Calendly, Acuity), <Link to="/services/email-marketing" className="text-primary hover:underline">email marketing platforms</Link>, and custom APIs. Your chatbot becomes part of your workflow.
          </>
        )
      },
      {
        question: "How do voice agents work?",
        answer: (
          <>
            Voice agents handle phone calls automatically—answering FAQs, booking appointments, and qualifying leads. They work 24/7 and can transfer to human agents when needed. Ideal for businesses receiving many enquiry calls. <Link to="/ai-package" className="text-primary hover:underline">Learn more →</Link>
          </>
        )
      },
      {
        question: "Is AI automation suitable for small businesses?",
        answer: (
          <>
            Absolutely. Small businesses often benefit most from automation, as it extends your capacity without hiring staff. Even simple automation like lead capture or appointment booking can save hours each week. <Link to="/contact" className="text-primary hover:underline">Get a free consultation →</Link>
          </>
        )
      },
    ],
  },
  {
    id: "sectors",
    name: "Sectors & Industries",
    icon: Settings,
    faqs: [
      {
        question: "How much does a property website cost in London?",
        answer: (
          <>
            <Link to="/sectors/property" className="text-primary hover:underline">Property websites</Link> typically cost £800-3,000 for brochure sites, £3,000-8,000 for sites with property listing integration, and £8,000-20,000+ for full property portals with search functionality and CRM integration.
          </>
        )
      },
      {
        question: "Can you integrate with Rightmove and Zoopla?",
        answer: (
          <>
            Yes. We integrate with major property portals including Rightmove, Zoopla, OnTheMarket, and property management software like Alto, Reapit, and Jupix. <Link to="/sectors/property" className="text-primary hover:underline">Learn more about property websites →</Link>
          </>
        )
      },
      {
        question: "Do you offer discounts for charities?",
        answer: (
          <>
            Yes. We offer up to 20% discount for registered <Link to="/sectors/charity" className="text-primary hover:underline">charities and non-profit organisations</Link>. We also offer flexible payment terms and can work within grant funding timelines.
          </>
        )
      },
      {
        question: "Can you integrate donation platforms?",
        answer: (
          <>
            Yes. We integrate with all major donation platforms including JustGiving, GoFundMe Charity, CAF Donate, Stripe, PayPal Giving Fund, and direct payment processing with Gift Aid capture. <Link to="/sectors/charity" className="text-primary hover:underline">Charity website services →</Link>
          </>
        )
      },
      {
        question: "What makes a B2B website different from B2C?",
        answer: (
          <>
            <Link to="/sectors/b2b" className="text-primary hover:underline">B2B websites</Link> focus on longer sales cycles, building credibility, and generating qualified leads. They emphasise case studies, testimonials, service explanations, and thought leadership rather than immediate purchases. <Link to="/sectors/b2c" className="text-primary hover:underline">B2C websites</Link> prioritise conversion and user experience.
          </>
        )
      },
      {
        question: "How important is mobile for B2C websites?",
        answer: (
          <>
            Critical. Over 60% of consumer web traffic is mobile. We design mobile-first for all <Link to="/sectors/b2c" className="text-primary hover:underline">B2C websites</Link>, ensuring fast load times, easy navigation, and seamless checkout on phones.
          </>
        )
      },
    ],
  },
  {
    id: "process-support",
    name: "Process & Support",
    icon: HelpCircle,
    faqs: [
      {
        question: "What is your design process?",
        answer: (
          <>
            We follow a 6-step process: Discovery & Planning, Design & Wireframing, Development, Content & SEO Setup, Testing & Launch, and Training & Handover. You're involved at every stage. <Link to="/about" className="text-primary hover:underline">Learn more about us →</Link>
          </>
        )
      },
      {
        question: "Do you provide ongoing maintenance?",
        answer: (
          <>
            Yes. We offer <Link to="/services/maintenance-support" className="text-primary hover:underline">maintenance packages</Link> from £59/month including security updates, backups, uptime monitoring, and priority support. This is especially important for <Link to="/platforms/wordpress" className="text-primary hover:underline">WordPress</Link> and <Link to="/platforms/woocommerce" className="text-primary hover:underline">WooCommerce</Link> sites.
          </>
        )
      },
      {
        question: "Can I update my website myself?",
        answer: (
          <>
            Yes! We build all websites with easy content management. For <Link to="/platforms/wordpress" className="text-primary hover:underline">WordPress sites</Link>, you get full access to the admin dashboard. For custom sites, we provide simple editing tools. We include training with every project.
          </>
        )
      },
      {
        question: "What happens if something breaks?",
        answer: (
          <>
            <Link to="/services/maintenance-support" className="text-primary hover:underline">Maintenance clients</Link> get priority support—usually same-day response. For others, we offer ad-hoc support at competitive rates. We also include a warranty period after launch (typically 30 days).
          </>
        )
      },
      {
        question: "Do you work with clients outside London?",
        answer: (
          <>
            Absolutely. While we're based in <Link to="/areas/stratford" className="text-primary hover:underline">East London</Link>, we work with clients across the UK and internationally. Everything can be done remotely via video calls and screen sharing.
          </>
        )
      },
      {
        question: "How do I get started?",
        answer: (
          <>
            <Link to="/contact" className="text-primary hover:underline">Contact us</Link> for a free consultation. We'll discuss your goals, provide honest advice, and give you a clear quote with no obligation. You can reach us via our contact form, WhatsApp, or email.
          </>
        )
      },
    ],
  },
];

// Flatten all FAQs for schema (convert ReactNode to string for schema)
const allFaqsForSchema = faqCategories.flatMap((category) => 
  category.faqs.map(faq => ({
    question: faq.question,
    answer: typeof faq.answer === 'string' ? faq.answer : faq.question // Fallback for schema
  }))
);

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const currentCategory = faqCategories.find((c) => c.id === activeCategory);
  const isAllSelected = activeCategory === "all";

  return (
    <>
      <SEO
        title="FAQ | Web Design, SEO & AI Questions Answered | L&D Digital"
        description="Find answers to common questions about web design, SEO, AI chatbots, and digital marketing in London. Pricing, timelines, process, and more explained."
        keywords="web design FAQ, website cost london, SEO questions UK, AI chatbot FAQ, digital marketing questions, website pricing UK"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/faq"
      />
      <FAQSchema faqs={allFaqsForSchema} pageId="faq-page" />

      <Navigation />
      <BreadcrumbNav />

      <main>
        {/* Hero Section */}
        <section className="pt-12 pb-8 md:pt-16 md:pb-12 bg-gradient-to-br from-background via-background to-primary/5">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  Frequently Asked Questions
                </h1>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Everything you need to know about our web design, SEO, and AI services. Can't find your answer?{" "}
                  <Link to="/contact" className="text-primary hover:underline font-medium">
                    Get in touch
                  </Link>
                  .
                </p>
                <p className="text-sm text-muted-foreground">
                  {faqCategories.reduce((acc, cat) => acc + cat.faqs.length, 0)} questions across {faqCategories.length} categories
                </p>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Category Tabs */}
        <section className="py-8 bg-muted/30 border-y border-border sticky top-16 z-40">
          <Container>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {/* All FAQs button */}
              <button
                onClick={() => setActiveCategory("all")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isAllSelected
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-muted-foreground hover:text-secondary hover:bg-muted border border-border"
                }`}
              >
                <LayoutGrid className="h-4 w-4" />
                <span className="hidden sm:inline">All FAQs</span>
                <span className="sm:hidden">All</span>
              </button>
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-muted-foreground hover:text-secondary hover:bg-muted border border-border"
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(" ")[0]}</span>
                </button>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ Content */}
        <section className="py-12 md:py-16">
          <Container>
            <div className="max-w-3xl mx-auto">
              {isAllSelected ? (
                // Show all categories
                <>
                  {faqCategories.map((category, catIndex) => (
                    <div key={category.id} className={catIndex > 0 ? "mt-12" : ""}>
                      <AnimatedSection animation="fade">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center">
                            <category.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold">{category.name}</h2>
                            <p className="text-xs text-muted-foreground">
                              {category.faqs.length} questions
                            </p>
                          </div>
                        </div>
                      </AnimatedSection>

                      <Accordion type="single" collapsible className="w-full space-y-3">
                        {category.faqs.map((faq, index) => (
                          <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                            <AccordionItem
                              value={`${category.id}-item-${index}`}
                              className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/30"
                            >
                              <AccordionTrigger className="text-left py-5 hover:no-underline">
                                <span className="font-medium pr-4">{faq.question}</span>
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          </AnimatedSection>
                        ))}
                      </Accordion>
                    </div>
                  ))}
                </>
              ) : (
                // Show single category
                currentCategory && (
                  <>
                    <AnimatedSection animation="fade">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <currentCategory.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold">{currentCategory.name}</h2>
                          <p className="text-sm text-muted-foreground">
                            {currentCategory.faqs.length} questions answered
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>

                    <Accordion type="single" collapsible className="w-full space-y-3">
                      {currentCategory.faqs.map((faq, index) => (
                        <AnimatedSection key={index} animation="fade" staggerIndex={index}>
                          <AccordionItem
                            value={`item-${index}`}
                            className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/30"
                          >
                            <AccordionTrigger className="text-left py-5 hover:no-underline">
                              <span className="font-medium pr-4">{faq.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        </AnimatedSection>
                      ))}
                    </Accordion>
                  </>
                )
              )}
            </div>
          </Container>
        </section>

        {/* All Categories Quick Links */}
        <section className="py-12 md:py-16 bg-muted/30 border-t border-border">
          <Container>
            <AnimatedSection animation="fade">
              <h2 className="text-2xl font-bold text-center mb-8">Browse By Category</h2>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {faqCategories.map((category, index) => (
                <AnimatedSection key={category.id} animation="fade" staggerIndex={index}>
                  <button
                    onClick={() => {
                      setActiveCategory(category.id);
                      window.scrollTo({ top: 300, behavior: "smooth" });
                    }}
                    className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors text-center"
                  >
                    <category.icon className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium">{category.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {category.faqs.length} FAQs
                    </span>
                  </button>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <Container>
            <AnimatedSection animation="fade">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  We're here to help. Get in touch for a free, no-obligation consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild className="text-lg">
                    <Link to="/contact">
                      Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <a href="https://wa.me/447356260648" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp Us
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Areas Footer - removed self-referential FAQ link */}
        <AreasFooter />
      </main>

      <Footer />
    </>
  );
};

export default Faq;