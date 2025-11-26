import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container } from "@/components/Container";

const WebPackage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Web Development Packages | X15 Digital"
        description="Professional websites from £100. One-time payment, you own everything. No monthly fees. Choose from Basic, Starter, or Business packages."
        canonicalUrl="https://x15.digital/web-package"
      />
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Web Development Packages
              </h1>
              <p className="text-xl text-white/90 mb-4">
                One-time payment. You own everything. No monthly fees.
              </p>
              <p className="text-lg text-white/80">
                Professional websites delivered in 1-14 days
              </p>
            </div>
          </Container>
        </section>

        {/* Packages Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <div className="grid gap-6 lg:gap-8 max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-12">
              {/* Basic Website */}
              <AnimatedSection staggerIndex={0} animation="scale">
                <Card className="hover-lift relative h-full">
                  <Badge className="absolute -top-3 left-4 bg-primary/10 text-primary border border-primary/30">
                    💡 BUDGET FRIENDLY
                  </Badge>

                  <CardHeader className="pt-6">
                    <CardTitle className="text-2xl">Basic Website</CardTitle>
                    <p className="text-3xl font-bold text-secondary">£100 - £300</p>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong>Perfect for:</strong> Simple one-page sites, early-stage ideas, basic online presence
                    </p>

                    <p className="font-semibold mb-3">What's Included:</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">1-page website (or simple landing page)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Template-based layout styled with your branding</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Mobile responsive design</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Basic contact or enquiry link</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">1–2 day delivery</span>
                      </li>
                    </ul>

                    <p className="text-xs font-semibold mb-2">Examples:</p>
                    <ul className="text-xs text-muted-foreground mb-6 space-y-1">
                      <li>• Simple "link in bio" page</li>
                      <li>• One-page promo site</li>
                      <li>• Basic idea validation page</li>
                    </ul>

                    <Button asChild className="w-full">
                      <Link to="/quick-start">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Starter Website */}
              <AnimatedSection staggerIndex={1} animation="scale">
                <Card className="hover-lift border border-primary/30 relative h-full">
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-warning text-warning-foreground">
                    ⚡ MOST POPULAR
                  </Badge>

                  <CardHeader className="pt-6">
                    <CardTitle className="text-2xl">STARTER WEBSITE</CardTitle>
                    <p className="text-3xl font-bold text-secondary">£250 - £500</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong>Perfect for:</strong> Trades, freelancers, solo businesses
                    </p>

                    <p className="font-semibold mb-3">What's Included:</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">1–3 custom pages (Home, About, Contact)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Fully custom or semi-custom design</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Mobile responsive</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Contact form integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Basic SEO setup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Social media links</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">1–3 day delivery</span>
                      </li>
                    </ul>

                    <p className="text-xs font-semibold mb-2">Examples:</p>
                    <ul className="text-xs text-muted-foreground mb-6 space-y-1">
                      <li>• Electrician landing page</li>
                      <li>• Plumber portfolio site</li>
                      <li>• Freelance consultant page</li>
                    </ul>

                    <Button asChild className="w-full">
                      <Link to="/quick-start">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Business Website */}
              <AnimatedSection staggerIndex={2} animation="scale">
                <Card className="hover-lift border border-primary/40 shadow-md shadow-primary/20 relative h-full">
                  <Badge className="absolute -top-3 right-4 bg-primary text-primary-foreground">🏆 PROFESSIONAL</Badge>

                  <CardHeader className="pt-6">
                    <CardTitle className="text-2xl">BUSINESS WEBSITE</CardTitle>
                    <p className="text-3xl font-bold text-secondary">£750 - £1,800</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong>Perfect for:</strong> Salons, consultants, local shops, small businesses
                    </p>

                    <p className="font-semibold mb-3">What's Included:</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">4–10 pages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Full custom layout & branding</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Contact + advanced forms/booking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Google Maps integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Portfolio / gallery options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Full SEO package</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">5–10 day delivery</span>
                      </li>
                    </ul>

                    <p className="text-xs font-semibold mb-2">Examples:</p>
                    <ul className="text-xs text-muted-foreground mb-6 space-y-1">
                      <li>• Salon with booking system</li>
                      <li>• Consultancy service site</li>
                      <li>• Local shop with products</li>
                    </ul>

                    <Button asChild className="w-full">
                      <Link to="/quick-start">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* Advanced Options */}
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-sm md:text-base text-muted-foreground mb-3">
                <span className="font-semibold text-secondary">Need something bigger?</span> Premium &amp; custom
                websites, e-commerce and web applications from <span className="font-semibold">£2,000</span>.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/services#web-apps">
                  See Advanced Options <ArrowRight className="ml-2 h-5 w-5" />
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

export default WebPackage;
