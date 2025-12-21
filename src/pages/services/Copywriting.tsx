import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, FileText, PenTool, MessageSquare, Target, Sparkles, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container } from "@/components/Container";

const Copywriting = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Copywriting Services | L&D Digital"
        description="Compelling website copy that converts visitors into customers. Professional copywriting for websites, landing pages, and marketing materials."
        canonicalUrl="https://landdigital.co.uk/services/copywriting"
      />
      <Navigation darkHero />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-secondary">
          <Container>
            <div className="relative text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Copywriting
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-4">
                Words that sell, stories that connect.
              </p>
              <p className="text-lg text-primary-foreground/80">
                Professional copy that turns browsers into buyers.
              </p>
            </div>
          </Container>
        </section>

        <BreadcrumbNav />

        {/* What You Get */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <AnimatedSection animation="scale">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
                  What We Write
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: FileText, title: "Website Copy", desc: "Homepage, about, services, and more" },
                    { icon: Target, title: "Landing Pages", desc: "High-converting sales pages" },
                    { icon: MessageSquare, title: "Product Descriptions", desc: "E-commerce copy that sells" },
                    { icon: PenTool, title: "Brand Messaging", desc: "Taglines, value propositions, brand voice" },
                    { icon: Sparkles, title: "Ad Copy", desc: "PPC and social media ad copy" },
                    { icon: BookOpen, title: "Blog Content", desc: "SEO-optimized articles and thought leadership" },
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

        {/* Why Good Copy Matters */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 text-center">
                  Why Good Copy Matters
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Clear messaging increases conversions by up to 300%",
                    "Professional copy builds trust and credibility",
                    "SEO-optimized content improves search rankings",
                    "Consistent voice strengthens your brand",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-secondary">{item}</span>
                    </div>
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
                From £150 per page
              </p>
              <p className="text-muted-foreground">
                Full website copy packages available. Includes research, drafts, and revisions.
              </p>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-secondary">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready for Copy That Converts?
              </h2>
              <Button asChild size="lg" className="bg-background text-primary hover:bg-muted">
                <Link to="/contact">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
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

export default Copywriting;
