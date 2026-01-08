import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Smartphone, Users, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container } from "@/components/Container";
import { ServiceSchema } from "@/components/ServiceSchema";
import { FAQSchema } from "@/components/FAQSchema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const appDevFaqs = [
  {
    question: "How much does mobile app development cost?",
    answer: "App development typically starts from £2,000 for simple apps and ranges to £10,000+ for complex, feature-rich applications. The cost depends on features, platforms (iOS, Android, or both), and integrations required."
  },
  {
    question: "Should I build a native app or a cross-platform app?",
    answer: "Cross-platform (React Native) is usually more cost-effective as one codebase works on both iOS and Android. Native apps offer better performance for complex features. We'll recommend the best approach based on your specific requirements."
  },
  {
    question: "How long does it take to build an app?",
    answer: "Simple apps take 4-6 weeks, medium complexity apps 8-12 weeks, and complex apps 3-6 months. We work in sprints with regular demos so you can see progress throughout development."
  },
  {
    question: "Do you help with app store submission?",
    answer: "Yes, we handle the entire app store submission process for both Apple App Store and Google Play Store, including screenshots, descriptions, and compliance with their guidelines."
  },
  {
    question: "Can you integrate my app with existing systems?",
    answer: "Absolutely. We integrate apps with CRMs, payment systems, booking platforms, APIs, and custom backends. We'll map out all integrations during the discovery phase."
  },
];

const AppDevelopment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Mobile App Development UK | iOS & Android Apps | L&D Digital"
        description="Native & hybrid mobile apps built for performance and real users. Custom iOS and Android applications for UK businesses. From concept to app store launch."
        keywords="mobile app development UK, iOS app developer, Android app developer, cross-platform app development, React Native developer, app development agency London"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/services/app-development"
      />
      <FAQSchema faqs={appDevFaqs} pageId="app-development" />
      <ServiceSchema
        name="Mobile App Development"
        description="Native & hybrid mobile apps built for performance and real users. Custom iOS and Android applications for UK businesses."
        url="https://digital.luminousanddeliver.co.uk/services/app-development"
        priceRange="£2000-£10000"
        serviceType="Mobile App Development"
      />
      <Navigation darkHero />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-40 pb-16 md:pt-44 md:pb-20 lg:pt-48 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900">
          <Container>
            <div className="relative text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                App Development
              </h1>
              <p className="text-xl text-white/90 mb-4">
                Native & hybrid mobile apps built for performance and real users.
              </p>
              <p className="text-lg text-white/80">
                Custom iOS and Android applications that your customers will love.
              </p>
            </div>
          </Container>
        </section>

        {/* Breadcrumb below hero */}
        <BreadcrumbNav />

        {/* Who This Is For */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 text-center">
                  Who This Is For
                </h2>
                <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
                  Mobile app development is ideal for businesses that want to reach customers directly on their phones with a seamless, branded experience.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Businesses wanting to engage customers on mobile",
                    "Service providers needing booking or scheduling apps",
                    "Companies looking to streamline internal processes",
                    "Startups with innovative app ideas",
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
                  What You Get
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: Smartphone, title: "Cross-Platform Development", desc: "Apps that work seamlessly on iOS and Android" },
                    { icon: Users, title: "User-Centred Design", desc: "Intuitive interfaces your customers will love" },
                    { icon: Zap, title: "High Performance", desc: "Fast, responsive apps optimised for mobile" },
                    { icon: Shield, title: "Secure & Scalable", desc: "Built with security and growth in mind" },
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

        {/* How It Works */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
                  How It Works
                </h2>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { step: "1", title: "Discovery", desc: "We understand your goals and user needs" },
                    { step: "2", title: "Design", desc: "Create wireframes and visual designs" },
                    { step: "3", title: "Build", desc: "Develop and test your application" },
                    { step: "4", title: "Launch", desc: "Deploy to app stores with ongoing support" },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="h-12 w-12 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                        {item.step}
                      </div>
                      <h3 className="font-semibold text-secondary mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Pricing */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Pricing
              </h2>
              <p className="text-lg text-muted-foreground mb-2">
                Pricing depends on scope and complexity.
              </p>
              <p className="text-2xl font-bold text-primary mb-6">
                Most projects start from £2,000
              </p>
              <p className="text-muted-foreground">
                Get in touch for a custom quote tailored to your specific requirements.
              </p>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {appDevFaqs.map((faq, index) => (
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
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Your App?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let's discuss your app idea and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Link to="/contact">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/quick-start">
                    Start Project Brief
                  </Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AppDevelopment;
