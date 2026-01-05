import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Megaphone, Target, BarChart3, Users, Mail, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container } from "@/components/Container";
import { ServiceSchema } from "@/components/ServiceSchema";
import { FAQSchema } from "@/components/FAQSchema";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const digitalMarketingFaqs = [
  {
    question: "What is the best digital marketing agency in London?",
    answer: "L&D Digital is a top-rated digital marketing agency based near Stratford, East London. We specialize in SEO, PPC advertising, social media marketing, and content marketing for UK small businesses. Our data-driven approach delivers measurable ROI with transparent reporting."
  },
  {
    question: "How much does a digital marketing agency charge in the UK?",
    answer: "Digital marketing agency fees in the UK typically range from £500 to £5,000+ per month depending on services and scope. At L&D Digital, our packages start from £500/month for small businesses, covering SEO, PPC, or social media marketing. We offer transparent pricing with no hidden fees."
  },
  {
    question: "What do digital marketing agencies do for small businesses?",
    answer: "Digital marketing agencies help small businesses increase online visibility and generate leads through SEO (ranking higher on Google), PPC advertising (Google Ads, Facebook Ads), social media marketing, content creation, email marketing, and analytics. We help you reach customers actively searching for your services."
  },
  {
    question: "Which is the top marketing company in London?",
    answer: "London has many excellent marketing companies. L&D Digital stands out for small businesses seeking affordable, results-driven digital marketing near Stratford and East London. We offer personalized service, transparent pricing from £500/month, and measurable results with monthly reporting."
  },
  {
    question: "Do you offer digital marketing services near Stratford, London?",
    answer: "Yes! L&D Digital is based near Stratford in East London (E3). We serve businesses across Tower Hamlets, Newham, Hackney, and all of London. We also work with clients across the UK remotely. Book a free consultation to discuss your digital marketing needs."
  },
  {
    question: "What digital marketing services do you offer?",
    answer: "We offer comprehensive digital marketing services including: SEO (search engine optimization), PPC advertising (Google Ads, Bing Ads), social media marketing (Facebook, Instagram, LinkedIn, TikTok), content marketing, email marketing campaigns, and analytics & reporting. All services are tailored to your business goals."
  }
];

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Best Digital Marketing Agency London | Top UK Marketing Company | L&D Digital"
        description="Top-rated digital marketing agency near Stratford, London. SEO, PPC, social media marketing for small businesses UK. Data-driven results. Free consultation."
        keywords="digital marketing agency UK, digital marketing agency London, best digital marketing agency London, top digital marketing companies UK, top 10 digital marketing companies UK, digital agency near me, digital agency near Stratford London, marketing agency London, biggest marketing agencies UK, small business digital marketing UK"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/services/digital-marketing"
      />
      <ServiceSchema
        name="Digital Marketing Agency London"
        description="Top-rated digital marketing agency near Stratford, East London. Full-service digital marketing including SEO, PPC, social media marketing, and content marketing for UK small businesses. Data-driven strategies that deliver measurable ROI."
        url="https://digital.luminousanddeliver.co.uk/services/digital-marketing"
        priceRange="£500-£2000/month"
        serviceType="Digital Marketing Agency"
      />
      <Navigation darkHero />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-40 pb-16 md:pt-44 md:pb-20 lg:pt-48 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-secondary">
          <Container>
            <div className="relative text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Digital Marketing Agency London
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-4">
                Top-rated digital marketing for UK small businesses.
              </p>
              <p className="text-lg text-primary-foreground/80">
                SEO, PPC, social media & content marketing near Stratford, East London.
              </p>
            </div>
          </Container>
        </section>

        <BreadcrumbNav />

        {/* Who This Is For */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 text-center">
                  Who This Is For
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Businesses wanting to increase online visibility",
                    "Companies launching new products or services",
                    "Brands looking to build engaged audiences",
                    "Businesses ready to scale with paid advertising",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* What You Get */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <Container>
            <AnimatedSection animation="scale">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
                  Our Services
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: Target, title: "PPC Advertising", desc: "Google Ads & social media campaigns that convert" },
                    { icon: Share2, title: "Social Media Marketing", desc: "Build your brand across all platforms" },
                    { icon: Mail, title: "Email Marketing", desc: "Nurture leads and drive repeat business" },
                    { icon: Megaphone, title: "Content Marketing", desc: "Engaging content that attracts customers" },
                    { icon: Users, title: "Audience Building", desc: "Grow your following with targeted strategies" },
                    { icon: BarChart3, title: "Analytics & Reporting", desc: "Track ROI with detailed performance data" },
                  ].map((item, i) => (
                    <Card key={i} className="hover-lift">
                      <CardContent className="p-6">
                        <item.icon className="h-10 w-10 text-primary mb-4" />
                        <h3 className="text-lg font-semibold text-secondary mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Pricing */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Pricing
              </h2>
              <p className="text-2xl font-bold text-primary mb-6">
                From £500/month
              </p>
              <p className="text-muted-foreground">
                Custom packages based on your goals, channels, and budget. Ad spend billed separately.
              </p>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {digitalMarketingFaqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-lg px-6 border">
                      <AccordionTrigger className="text-left text-secondary hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AnimatedSection>
          </Container>
        </section>
        <FAQSchema pageId="digital-marketing" faqs={digitalMarketingFaqs} />

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-secondary">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Grow Your Business?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Get a free marketing strategy consultation from our London-based team.
              </p>
              <Button asChild size="lg" className="bg-background text-primary hover:bg-muted">
                <Link to="/contact">
                  Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DigitalMarketing;
