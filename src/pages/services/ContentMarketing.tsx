import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, BookOpen, TrendingUp, Users, Calendar, Search, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container } from "@/components/Container";

const ContentMarketing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Content Marketing Services | L&D Digital"
        description="Strategic content marketing that attracts, engages, and converts. Blog posts, articles, guides, and content strategy for sustainable growth."
        canonicalUrl="https://landdigital.co.uk/services/content-marketing"
      />
      <Navigation darkHero />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-40 pb-16 md:pt-44 md:pb-20 lg:pt-48 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-secondary">
          <Container>
            <div className="relative text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Content Marketing
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-4">
                Content that attracts customers and builds authority.
              </p>
              <p className="text-lg text-primary-foreground/80">
                Strategic content that drives traffic and conversions.
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
                  What's Included
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: Calendar, title: "Content Strategy", desc: "Editorial calendar and topic planning" },
                    { icon: BookOpen, title: "Blog Posts", desc: "SEO-optimized articles that rank" },
                    { icon: Search, title: "Keyword Research", desc: "Find what your audience is searching for" },
                    { icon: TrendingUp, title: "Performance Tracking", desc: "Measure content ROI and optimize" },
                    { icon: Share2, title: "Distribution", desc: "Get your content in front of the right people" },
                    { icon: Users, title: "Audience Building", desc: "Grow your email list and social following" },
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

        {/* Why Content Marketing */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 text-center">
                  Why Content Marketing Works
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Costs 62% less than traditional marketing",
                    "Generates 3x more leads per pound spent",
                    "Builds long-term organic traffic",
                    "Establishes you as an industry expert",
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
                From £400/month
              </p>
              <p className="text-muted-foreground">
                Includes content strategy, writing, SEO optimization, and monthly reporting.
              </p>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-secondary">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Start Your Content Strategy?
              </h2>
              <Button asChild size="lg" className="bg-background text-primary hover:bg-muted">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
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

export default ContentMarketing;
