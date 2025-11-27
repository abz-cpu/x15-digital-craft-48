import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, MessageSquare, Phone, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container } from "@/components/Container";
import { WebPackagesComparisonTable } from "@/components/WebPackagesComparisonTable";

const WebPackage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Web Development Packages | X15 Digital"
        description="Choose from Foundation, Growth, or Scale website packages. One payment, you own everything. No monthly fees or surprises."
        canonicalUrl="https://x15.digital/web-package"
      />
      <Navigation />

      <main className="flex-1">
        {/* 1. HERO */}
        <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Web Development Packages</h1>
              <p className="text-xl text-white/90 mb-3">One-time payment. You own everything. No monthly fees.</p>
              <p className="text-lg text-white/80">Professional websites delivered in 2–14 days.</p>
            </div>
          </Container>
        </section>

        {/* 2. MAIN PACKAGES + COMPARISON */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3">Your Investment Options</h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Choose the tier that matches where your business is today. One payment. Full ownership. No surprises.
              </p>
            </div>

            {/* Tier cards */}
            <div className="grid gap-6 lg:gap-8 max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {/* FOUNDATION TIER */}
              <AnimatedSection staggerIndex={0} animation="scale">
                <Card className="hover-lift relative h-full bg-white">
                  {/* Budget Friendly Badge */}
                  <Badge className="absolute -top-3 left-4 bg-white text-teal-700 border border-teal-200 shadow-sm flex items-center gap-1 px-3 py-1 text-[11px] font-medium tracking-wide">
                    💡 Budget Friendly
                  </Badge>

                  <CardHeader className="pt-8 pb-4">
                    <CardTitle className="text-sm font-semibold tracking-[0.12em] text-teal-700 uppercase">
                      Foundation
                    </CardTitle>
                    <p className="text-3xl font-bold text-secondary mt-1">
                      £200 <span className="block text-xs font-medium text-muted-foreground">One payment</span>
                    </p>
                  </CardHeader>

                  <CardContent className="pb-6">
                    <p className="text-sm font-semibold text-secondary mb-1">Your Digital Presence</p>
                    <p className="text-sm text-muted-foreground mb-5">
                      Perfect for testing your offer or establishing credibility fast.
                    </p>

                    <p className="text-xs font-semibold mb-2">What you get:</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">One powerful page that converts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Mobile-perfect, responsive design</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Contact form or enquiry integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Ready in 48 hours</span>
                      </li>
                    </ul>

                    <Button asChild className="w-full">
                      <Link to="/quick-start">
                        Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* GROWTH TIER (MOST POPULAR) */}
              <AnimatedSection staggerIndex={1} animation="scale">
                <Card
                  className="
                    hover-lift relative h-full bg-white border border-primary/40
                    shadow-md shadow-primary/20 lg:-mt-2
                    transition-all duration-200
                    hover:border-[#F59E0B] hover:shadow-lg hover:shadow-[#F59E0B]/30
                  "
                >
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-black font-semibold px-3 py-1 text-[11px] tracking-wide">
                    ⭐ MOST POPULAR
                  </Badge>

                  <CardHeader className="pt-6 pb-4">
                    <CardTitle className="text-sm font-semibold tracking-[0.12em] text-teal-700 uppercase">
                      Growth
                    </CardTitle>
                    <p className="text-3xl font-bold text-secondary mt-1">
                      £600{" "}
                      <span className="block text-xs font-medium text-muted-foreground">
                        One payment, yours forever
                      </span>
                    </p>
                  </CardHeader>

                  <CardContent className="pb-6">
                    <p className="text-sm font-semibold text-secondary mb-1">Scale With Confidence</p>
                    <p className="text-sm text-muted-foreground mb-5">
                      For businesses ready to show up professionally and start attracting more customers.
                    </p>

                    <p className="text-xs font-semibold mb-2">What you get:</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">3–5 custom pages (e.g. Home, About, Services, Contact)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Strategic copywriting for key pages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">SEO foundation (metadata, structure, speed)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Contact + simple booking or enquiry system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Ready in 5–7 days</span>
                      </li>
                    </ul>

                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <Link to="/quick-start">
                        Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* SCALE TIER */}
              <AnimatedSection staggerIndex={2} animation="scale">
                <Card className="hover-lift relative h-full bg-white border border-primary/30">
                  <CardHeader className="pt-6 pb-4">
                    <CardTitle className="text-sm font-semibold tracking-[0.12em] text-teal-700 uppercase">
                      Scale
                    </CardTitle>
                    <p className="text-3xl font-bold text-secondary mt-1">
                      £1,400{" "}
                      <span className="block text-xs font-medium text-muted-foreground">
                        One payment, yours forever
                      </span>
                    </p>
                  </CardHeader>

                  <CardContent className="pb-6">
                    <p className="text-sm font-semibold text-secondary mb-1">Your Customer Generation Engine</p>
                    <p className="text-sm text-muted-foreground mb-5">
                      For businesses serious about growth and ready to dominate their market.
                    </p>

                    <p className="text-xs font-semibold mb-2">What you get:</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">7–12 custom pages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">
                          Advanced features &amp; integrations (booking, payments, automations)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Full SEO optimisation across all pages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Portfolio, blog, or advanced booking system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Ready in 10–14 days</span>
                      </li>
                    </ul>

                    <Button asChild className="w-full">
                      <Link to="/quick-start">
                        Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* Comparison Table */}
            <WebPackagesComparisonTable />
          </Container>
        </section>

        {/* 3. ADVANCED SOLUTIONS (MOVED UP, IMPROVED) */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-3">Need Something More Advanced?</h3>
              <p className="text-base text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                Custom platforms, SaaS tools, and internal systems built to your exact specifications.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Enterprise Systems */}
                <Card className="h-full hover-lift">
                  <CardHeader className="pb-4">
                    <p className="text-xs font-bold tracking-[0.16em] uppercase text-primary mb-2">
                      ENTERPRISE SYSTEMS
                    </p>
                    <p className="text-3xl font-bold text-secondary">From £2,400</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      E-commerce platforms, customer portals, multi-user dashboards, and CRM integrations with full
                      business automation.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>Payment gateway integration (Stripe, PayPal)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>Customer accounts &amp; order history</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>Advanced booking systems with calendar sync</span>
                      </li>
                    </ul>
                    <Button asChild variant="outline" size="lg" className="w-full">
                      <Link to="/contact">
                        Request Enterprise Quote <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Custom Web Applications */}
                <Card className="h-full hover-lift">
                  <CardHeader className="pb-4">
                    <p className="text-xs font-bold tracking-[0.16em] uppercase text-primary mb-2">
                      CUSTOM WEB APPLICATIONS
                    </p>
                    <p className="text-3xl font-bold text-secondary">From £3,500</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Bespoke SaaS platforms, internal tools, advanced integrations, and systems built exactly how your
                      business operates.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>Custom database architecture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>API integrations with your existing tools</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>Advanced analytics &amp; reporting dashboards</span>
                      </li>
                    </ul>
                    <Button asChild size="lg" className="w-full">
                      <Link to="/contact">
                        Request Custom Quote <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Container>
        </section>

        {/* 4. PORTFOLIO SHOWCASE */}
        <section className="py-16 md:py-20 bg-background">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">What We&apos;ve Built</h2>
              <p className="text-lg text-muted-foreground">Real websites for real UK businesses.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {/* Portfolio Item 1 - X15 PC Builders */}
              <Link
                to="/portfolio"
                className="group relative overflow-hidden rounded-xl border border-border hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-slate-100">
                  <img
                    src="/images/portfolio/x15-pc-builders.jpg"
                    alt="X15 PC Builders Website"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-xs uppercase tracking-wider text-[#F59E0B] font-semibold mb-2">
                    Scale Package • PC Building
                  </p>
                  <h3 className="text-xl font-bold text-white mb-2">X15 PC Builders</h3>
                  <p className="text-sm text-white/80">
                    Custom PC building site with services, FAQs, and lead capture.
                  </p>
                </div>
              </Link>

              {/* Portfolio Item 2 */}
              <Link
                to="/portfolio"
                className="group relative overflow-hidden rounded-xl border border-border hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-slate-100">
                  <img
                    src="/images/portfolio/sample-salon.jpg"
                    alt="Client Website"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-xs uppercase tracking-wider text-[#F59E0B] font-semibold mb-2">
                    Growth Package • Professional Services
                  </p>
                  <h3 className="text-xl font-bold text-white mb-2">Elite Salon</h3>
                  <p className="text-sm text-white/80">Booking-focused website for a London salon.</p>
                </div>
              </Link>

              {/* Portfolio Item 3 */}
              <Link
                to="/portfolio"
                className="group relative overflow-hidden rounded-xl border border-border hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-slate-100">
                  <img
                    src="/images/portfolio/sample-trades.jpg"
                    alt="Client Website"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-xs uppercase tracking-wider text-[#F59E0B] font-semibold mb-2">
                    Foundation Package • Local Business
                  </p>
                  <h3 className="text-xl font-bold text-white mb-2">Local Plumber</h3>
                  <p className="text-sm text-white/80">Single-page lead-generation site with clear call-to-actions.</p>
                </div>
              </Link>
            </div>

            <div className="text-center">
              <Button asChild size="lg">
                <Link to="/portfolio">
                  View Full Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* 5. LEVEL UP: ADD AI AUTOMATION */}
        <section className="py-16 md:py-20 bg-[#FFFBEB] border-y border-[#FEF3C7]">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Level Up: Add AI Automation</h2>
              <p className="text-lg text-muted-foreground">
                Your website closes deals. Our AI handles everything else.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              {/* AI Chatbot */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-[#0F766E]/10 mb-4">
                    <MessageSquare className="h-8 w-8 text-[#0F766E]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">AI Website Chatbot</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Answers questions 24/7 and captures leads while you sleep.
                  </p>
                  <p className="text-xl font-bold text-[#0F766E] mb-4">From £50/month</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/ai-package">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* AI Receptionist */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-[#0F766E]/10 mb-4">
                    <Phone className="h-8 w-8 text-[#0F766E]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">AI Phone Receptionist</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Never miss a call again — bookings and enquiries handled for you.
                  </p>
                  <p className="text-xl font-bold text-[#0F766E] mb-4">From £100/month</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/ai-package">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Custom Automation */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-[#0F766E]/10 mb-4">
                    <Briefcase className="h-8 w-8 text-[#0F766E]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Custom AI Solution</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Built around your workflows — from inbox to operations.
                  </p>
                  <p className="text-xl font-bold text-[#0F766E] mb-4">Custom pricing</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/ai-package">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild size="lg" variant="outline">
                <Link to="/ai-package">
                  See All AI Solutions <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* 6. WEBSITE-SPECIFIC FAQ - IMPROVED STYLING */}
        <section className="py-16 md:py-20 bg-muted/50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions About Web Packages</h2>
                <p className="text-lg text-muted-foreground">Everything you need to know before getting started</p>
              </div>

              <div className="space-y-4">
                {/* FAQ Item 1 */}
                <div className="bg-background rounded-lg p-6 shadow-sm border border-border hover:border-primary/50 transition-colors">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                      1
                    </span>
                    Can I modify my website later?
                  </h3>
                  <p className="text-muted-foreground pl-8 leading-relaxed">
                    Absolutely. You own everything—code, content, and design. Make changes yourself or hire us for
                    updates. We offer maintenance packages starting at £50/month for ongoing support and updates.
                  </p>
                </div>

                {/* FAQ Item 2 */}
                <div className="bg-background rounded-lg p-6 shadow-sm border border-border hover:border-primary/50 transition-colors">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                      2
                    </span>
                    Do you provide hosting?
                  </h3>
                  <p className="text-muted-foreground pl-8 leading-relaxed">
                    Yes. We can handle hosting for you (from £10/month) or you can host it yourself. We&apos;ll give you
                    all the files and help you set it up wherever you want—no lock-in, no hidden fees.
                  </p>
                </div>

                {/* FAQ Item 3 */}
                <div className="bg-background rounded-lg p-6 shadow-sm border border-border hover:border-primary/50 transition-colors">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                      3
                    </span>
                    What if I already have a domain?
                  </h3>
                  <p className="text-muted-foreground pl-8 leading-relaxed">
                    Perfect—we&apos;ll use it. Just give us access and we&apos;ll connect your new website to your
                    existing domain. Don&apos;t have one yet? We&apos;ll help you register one for about £10/year.
                  </p>
                </div>

                {/* FAQ Item 4 */}
                <div className="bg-background rounded-lg p-6 shadow-sm border border-border hover:border-primary/50 transition-colors">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                      4
                    </span>
                    How does the process work?
                  </h3>
                  <div className="text-muted-foreground pl-8 leading-relaxed space-y-2">
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-primary flex-shrink-0">1.</span>
                      <span>Choose your package and pay the deposit (50%).</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-primary flex-shrink-0">2.</span>
                      <span>We send a questionnaire about your business.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-primary flex-shrink-0">3.</span>
                      <span>We build your site and send previews.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-primary flex-shrink-0">4.</span>
                      <span>You request changes (included in your package).</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-primary flex-shrink-0">5.</span>
                      <span>We launch your site and hand over everything.</span>
                    </p>
                  </div>
                </div>

                {/* FAQ Item 5 */}
                <div className="bg-background rounded-lg p-6 shadow-sm border border-border hover:border-primary/50 transition-colors">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                      5
                    </span>
                    Can you add features later?
                  </h3>
                  <p className="text-muted-foreground pl-8 leading-relaxed">
                    Yes. Need booking, payments, or integrations added later? We can do it. Most additions are £200–800
                    depending on complexity. You&apos;re never locked into your original package.
                  </p>
                </div>

                {/* FAQ Item 6 */}
                <div className="bg-background rounded-lg p-6 shadow-sm border border-border hover:border-primary/50 transition-colors">
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                      6
                    </span>
                    What platforms do you build on?
                  </h3>
                  <p className="text-muted-foreground pl-8 leading-relaxed">
                    We use modern web technologies (React, Next.js) and no-code tools (Webflow, Framer) depending on
                    your needs. You&apos;ll get a fast, mobile-friendly website that works on all devices. No WordPress
                    bloat.
                  </p>
                </div>
              </div>

              {/* FAQ CTA */}
              <div className="mt-12 text-center p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
                <p className="text-lg font-semibold mb-2">Still have questions?</p>
                <p className="text-muted-foreground mb-6">
                  We&apos;re happy to walk you through everything on a free call.
                </p>
                <Button asChild size="lg">
                  <Link to="/contact">
                    Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* 7. FINAL CTA – TIGHTER, MORE PREMIUM */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#0F766E] via-[#0B4F4A] to-[#062F2B]">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-300" />
                <span className="text-xs font-medium tracking-[0.16em] text-white/80 uppercase">
                  Launch-Ready In 2–14 Days
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Your Website Live?</h2>
              <p className="text-base md:text-lg text-white/85 mb-8">
                Choose your package, book a call, or request a custom quote. We&apos;ll help you pick the right option
                in one conversation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#0F766E] hover:bg-white/90 shadow-xl shadow-black/20 text-base px-7"
                >
                  <Link to="/quick-start">
                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-base px-7"
                >
                  <Link to="/contact">
                    Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <p className="text-sm text-white/70 mt-6">Free quote in 4 hours • No retainers • You own everything</p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WebPackage;
