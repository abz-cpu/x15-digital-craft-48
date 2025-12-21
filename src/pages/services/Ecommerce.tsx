import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, ShoppingCart, CreditCard, Package, TrendingUp, Shield, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container } from "@/components/Container";

const Ecommerce = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="E-Commerce Website Development | L&D Digital"
        description="Build a powerful online store that converts. Custom e-commerce solutions with secure payments, inventory management, and beautiful design."
        canonicalUrl="https://landdigital.co.uk/services/ecommerce"
      />
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-secondary">
          <Container>
            <div className="relative text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                E-Commerce Solutions
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-4">
                Build an online store that sells while you sleep.
              </p>
              <p className="text-lg text-primary-foreground/80">
                From product catalogs to checkout, we handle everything.
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
                <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
                  Perfect for businesses ready to sell products or services online.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Retailers wanting to expand online",
                    "Artisans & makers selling handmade products",
                    "Service businesses offering digital products",
                    "Established stores needing a website upgrade",
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
                    { icon: ShoppingCart, title: "Product Catalog", desc: "Beautiful, searchable product listings with filters" },
                    { icon: CreditCard, title: "Secure Payments", desc: "Stripe, PayPal, Apple Pay & more integrations" },
                    { icon: Package, title: "Inventory Management", desc: "Track stock levels and get low-stock alerts" },
                    { icon: TrendingUp, title: "Sales Analytics", desc: "Understand your customers and boost revenue" },
                    { icon: Shield, title: "Secure & Compliant", desc: "SSL, GDPR-ready, and PCI compliant checkout" },
                    { icon: Headphones, title: "Ongoing Support", desc: "We're here to help as your store grows" },
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
                    { step: "1", title: "Discovery", desc: "We learn about your products and goals" },
                    { step: "2", title: "Design", desc: "Create a stunning store design" },
                    { step: "3", title: "Build", desc: "Develop your store with all features" },
                    { step: "4", title: "Launch", desc: "Go live and start selling" },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-semibold text-secondary mb-2">{item.title}</h3>
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
                E-commerce solutions tailored to your business size.
              </p>
              <p className="text-2xl font-bold text-primary mb-6">
                From £1,500
              </p>
              <p className="text-muted-foreground">
                Includes design, development, payment integration, and 30 days support. Monthly maintenance available.
              </p>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-secondary">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Start Selling Online?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Get a free consultation and see how we can build your perfect store.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-background text-primary hover:bg-muted">
                  <Link to="/contact">
                    Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/portfolio">
                    View Our Work
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

export default Ecommerce;
