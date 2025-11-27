import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MessageSquare,
  Mail,
  Phone,
  CheckCircle2,
  Star,
  Target,
  Inbox,
  TrendingUp,
  Share2,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container } from "@/components/Container";
import { Badge } from "@/components/ui/badge";

type HighlightedService = {
  name: string;
  description: string;
  setup: string;
  monthly: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  bullets: string[];
  cta: string;
  trust: string;
};

const highlightedServices: HighlightedService[] = [
  {
    name: "AI Sales Assistant",
    description:
      "Stop chasing cold leads. AI finds qualified prospects, books calls with decision-makers, and follows up automatically — so you only speak to people ready to buy.",
    setup: "£800–2,000 setup",
    monthly: "£200–800/month",
    icon: TrendingUp,
    bullets: [
      "B2B consultants wasting 15+ hours/week on manual outreach",
      "Agencies losing £10k+ deals to faster competitors",
      "Sales teams with 100+ leads but no follow-up system",
    ],
    cta: "Get Sales Assistant Quote",
    trust: "Free consultation • Built around your sales process",
  },
  {
    name: "AI Email Outreach",
    description:
      "Generate 20+ qualified leads per month while you sleep. AI sends personalised outreach, warms up prospects, and books meetings automatically — no spam, no manual work.",
    setup: "£400–1,000 setup",
    monthly: "£100–400/month",
    icon: Mail,
    bullets: [
      "Founders who hate writing cold emails but need 20+ leads/month",
      "Agencies needing consistent pipeline without hiring a £35k/year SDR",
      "Teams whose campaigns die after 1 week because follow-up is manual",
    ],
    cta: "See Outreach Plan",
    trust: "Strategy + setup included • No long-term contract",
  },
  {
    name: "AI Social Media Manager",
    description:
      "Stay visible without the daily grind. AI creates, schedules, and posts engaging content across platforms — plus responds to comments — so your brand grows on autopilot.",
    setup: "£200–600 setup",
    monthly: "£50–150/month",
    icon: Share2,
    bullets: [
      "Business owners posting once a month (if they remember)",
      "Solo founders juggling 4+ social accounts manually",
      "Local shops and gyms losing customers to competitors who post daily",
    ],
    cta: "Get Social Plan",
    trust: "Content calendar + setup • You approve before it goes live",
  },
  {
    name: "AI Admin Assistant",
    description:
      "Reclaim 20+ hours per week. AI handles invoicing, data entry, order processing, and routine admin automatically — so you can focus on growing the business, not paperwork.",
    setup: "£500–1,500 setup",
    monthly: "£150–600/month",
    icon: Briefcase,
    bullets: [
      "Owners spending 5+ hours/week on invoices and admin",
      "Ops teams manually copying data between systems every day",
      "Businesses stuck in admin hell instead of growing revenue",
    ],
    cta: "See How It Works",
    trust: "Process audit included • Usually live in under 14 days",
  },
];

const secondaryServices = [
  {
    name: "LinkedIn Lead Prospecting",
    setup: "£500–900",
    monthly: "£75–200",
    bestFor: "B2B sales teams needing 50+ qualified leads/month",
  },
  {
    name: "AI Invoice & Admin Bot",
    setup: "£350–900",
    monthly: "£50–200",
    bestFor: "Growing businesses drowning in manual invoicing & billing",
  },
  {
    name: "AI Meeting Notes & Transcription",
    setup: "£300–700",
    monthly: "£75–200",
    bestFor: "Remote / hybrid teams with 10+ calls or meetings per week",
  },
  {
    name: "AI Data Insights & Reporting",
    setup: "£200–1,000",
    monthly: "£50–350",
    bestFor: "Teams making decisions without real-time dashboards",
  },
  {
    name: "Workflow / RPA Automation",
    setup: "£1,000+",
    monthly: "£200+",
    bestFor: "Ops teams repeating the same tasks across tools every day",
  },
  {
    name: "AI Recruitment Screening",
    setup: "£200–800",
    monthly: "£50–250",
    bestFor: "HR teams screening 50+ applications per role",
  },
  {
    name: "AI Customer Feedback Analysis",
    setup: "£400–800",
    monthly: "£100–250",
    bestFor: "Service businesses with 100+ reviews or surveys to analyse",
  },
];

const AiPackage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="AI Automation Solutions | X15 Digital"
        description="AI automation from £50/month. 24/7 chatbots, inbox assistants, and AI receptionists. Works with any website."
        canonicalUrl="https://x15.digital/ai-package"
      />
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 via-teal-700 to-gray-900">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">AI Automation Solutions</h1>
              <p className="text-xl text-white/90 mb-4">Stand-alone or integrated with your website.</p>
              <p className="text-lg text-white/80">Works with ANY website — yours or ours.</p>
            </div>
          </Container>
        </section>

        {/* Scenario Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <div className="bg-card rounded-2xl p-8 md:p-10 mb-12 text-center max-w-3xl mx-auto shadow-lg border border-border">
              <p className="text-lg text-muted-foreground mb-4">
                Your customer texts at 11 PM.
                <br />
                Your phone rings during dinner.
                <br />
                Your inbox has 47 unread emails.
              </p>
              <p className="text-xl md:text-2xl font-semibold text-secondary mb-4">
                What if you had a digital assistant that works 24/7?
              </p>
              <p className="text-muted-foreground">
                Already have a website? Add AI automation.
                <br />
                Works with ANY website — yours or ours.
              </p>
            </div>
          </Container>
        </section>

        {/* MAIN AI SOLUTIONS (3 PRIMARY CARDS) */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <Container>
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                Automate Your Admin. Capture More Leads.
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                AI systems that answer customers, capture leads, and handle admin — while you focus on what you do best.
              </p>
            </div>

            {/* 3 FEATURED SERVICES */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {/* AI WEBSITE CHATBOT — MOST POPULAR */}
              <AnimatedSection staggerIndex={0} animation="fade">
                <Card className="hover-lift h-full border border-primary/30 relative">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Badge */}
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-white px-3 py-1.5 text-[11px] font-bold rounded-full shadow-md flex items-center gap-1.5 uppercase tracking-wide">
                      <Star className="h-3 w-3" />
                      MOST POPULAR
                    </Badge>

                    <div className="mb-4">
                      <div className="inline-flex p-3 rounded-lg bg-primary/10">
                        <MessageSquare className="h-8 w-8 text-primary" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-2">AI Website Chatbot</h3>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Capture leads while you sleep. AI converts visitors into qualified enquiries by answering
                      questions, booking calls, and collecting details automatically — 24/7.
                    </p>

                    <div className="mb-5 pb-4 border-b border-border">
                      <p className="text-sm text-muted-foreground mb-1">
                        From <span className="font-semibold text-foreground">£50/month</span> (less than £2/day for 24/7
                        coverage)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        One-time setup: <span className="font-semibold">£250–600</span> | Includes up to 1,000
                        interactions/month
                      </p>
                    </div>

                    <div className="mb-6 space-y-2">
                      <h4 className="font-semibold mb-1 text-sm">Perfect For:</h4>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" />
                          <span>Service businesses losing leads to faster competitors</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" />
                          <span>Trades missing £5k+ jobs because no one answers after 5pm</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" />
                          <span>Websites with 100+ visitors but under 5 enquiries</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <Button asChild size="lg" className="w-full">
                        <Link to="/contact">
                          See How It Works <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <p className="text-xs text-muted-foreground text-center mt-2">
                        Setup in 48 hours • No long-term contract
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* AI INBOX ASSISTANT */}
              <AnimatedSection staggerIndex={1} animation="fade">
                <Card className="hover-lift h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <div className="inline-flex p-3 rounded-lg bg-primary/10">
                        <Inbox className="h-8 w-8 text-primary" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-2">AI Inbox Assistant</h3>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Reclaim 15+ hours per week. AI manages your inbox — replying, sorting, removing spam, and routing
                      urgent enquiries — so you only see what actually matters.
                    </p>

                    <div className="mb-5 pb-4 border-b border-border">
                      <p className="text-sm text-muted-foreground mb-1">
                        From <span className="font-semibold">£50/month</span>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        One-time setup: <span className="font-semibold">£200–500</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Works with email + WhatsApp + website forms.</p>
                    </div>

                    <div className="mb-6 space-y-2">
                      <h4 className="font-semibold mb-1 text-sm">Perfect For:</h4>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" />
                          <span>Business owners spending 2+ hours daily on email</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" />
                          <span>Teams missing leads buried in 100+ daily messages</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" />
                          <span>Businesses needing admin support but not £25k/year staff</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <Button asChild size="lg" className="w-full">
                        <Link to="/contact">
                          Get Inbox Quote <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <p className="text-xs text-muted-foreground text-center mt-2">
                        Free consultation • See it work with your emails
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* AI RECEPTIONIST */}
              <AnimatedSection staggerIndex={2} animation="fade">
                <Card className="hover-lift h-full border border-primary/40 relative">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <div className="inline-flex p-3 rounded-lg bg-primary/10">
                        <Phone className="h-8 w-8 text-primary" />
                      </div>
                    </div>

                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0F766E] text-white px-3 py-1.5 text-[11px] font-bold rounded-full shadow-md flex items-center gap-1.5 uppercase tracking-wide">
                      <Target className="h-3 w-3" />
                      BEST FOR LOCAL BUSINESSES
                    </Badge>

                    <h3 className="text-2xl font-bold mb-2">AI Receptionist</h3>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Never miss a call again. AI receptionist answers 24/7 with a natural voice that books
                      appointments, handles messages, and transfers urgent calls — customers won’t know it’s not human.
                    </p>

                    <div className="mb-5 pb-4 border-b border-border">
                      <p className="text-sm text-muted-foreground mb-1">
                        From <span className="font-semibold">£100/month</span> (replaces a £25k/year receptionist)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        One-time setup: <span className="font-semibold">£500–2,000</span> | Pays for itself after 5
                        missed calls
                      </p>
                    </div>

                    <div className="mb-6 space-y-2">
                      <h4 className="font-semibold mb-1 text-sm">Perfect For:</h4>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" />
                          <span>Salons/clinics losing £10k/month from missed appointments</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" />
                          <span>Trades losing quotes because you're on the tools</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5" />
                          <span>Businesses where one missed call = £500+ lost revenue</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <Button asChild size="lg" className="w-full">
                        <Link to="/contact">
                          Book a Demo Call <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <p className="text-xs text-muted-foreground text-center mt-2">
                        Hear the AI live • 15-minute demo
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* ADDITIONAL AI SERVICES (4 CARDS) */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <h3 className="text-xl md:text-2xl font-semibold">Additional AI Services</h3>
                <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                  Powerful add-ons for sales, marketing, and operations — built on the same AI engine.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {highlightedServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <AnimatedSection key={service.name} staggerIndex={3 + index} animation="fade">
                      <Card className="hover-lift h-full">
                        <CardContent className="p-5 flex flex-col h-full">
                          <div className="mb-3">
                            <div className="inline-flex p-2.5 rounded-lg bg-primary/10">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                          </div>

                          <CardHeader className="p-0 mb-2">
                            <CardTitle className="text-lg font-semibold">{service.name}</CardTitle>
                          </CardHeader>

                          <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{service.description}</p>

                          <div className="mb-3">
                            <p className="text-xs text-muted-foreground">
                              <span className="font-medium">{service.setup}</span>
                            </p>
                            <p className="text-xs text-muted-foreground">
                              <span className="font-medium">{service.monthly}</span>
                            </p>
                          </div>

                          <div className="mb-4">
                            <h4 className="text-[11px] font-semibold mb-1">Best For:</h4>
                            <ul className="space-y-1 text-[11px] text-muted-foreground">
                              {service.bullets.map((item) => (
                                <li key={item} className="flex items-start gap-1.5">
                                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-auto">
                            <Button asChild size="sm" className="w-full text-xs py-2">
                              <Link to="/contact">
                                {service.cta} <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                              </Link>
                            </Button>
                            <p className="text-[10px] text-muted-foreground text-center mt-1.5">{service.trust}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>

            {/* SPECIALIZED AI SOLUTIONS TABLE */}
            <div className="mt-4 border-t border-border pt-10">
              <div className="text-center mb-6">
                <h3 className="text-lg md:text-xl font-semibold">Specialized AI Solutions</h3>
                <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                  Advanced automations for specific business needs. Pick what fits you best — or combine them for a full
                  custom stack.
                </p>
              </div>

              <div className="max-w-5xl mx-auto overflow-x-auto rounded-2xl border border-border bg-card/80 shadow-lg">
                <table className="min-w-full text-left text-sm">
                  <thead>
                    <tr className="bg-[#0F766E]">
                      <th className="py-3.5 px-4 text-white font-semibold">Service</th>
                      <th className="py-3.5 px-4 text-white font-semibold">Setup</th>
                      <th className="py-3.5 px-4 text-white font-semibold">Monthly</th>
                      <th className="py-3.5 px-4 text-white font-semibold">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {secondaryServices.map((service) => (
                      <tr key={service.name} className="hover:bg-muted/60 transition-colors">
                        <td className="py-3 px-4 font-medium text-foreground">{service.name}</td>
                        <td className="py-3 px-4 text-muted-foreground">{service.setup}</td>
                        <td className="py-3 px-4 text-primary font-semibold">{service.monthly}</td>
                        <td className="py-3 px-4 text-muted-foreground">{service.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-muted-foreground text-center max-w-2xl mx-auto">
                All prices are starting points. Final cost depends on complexity, integrations, and volume.
              </p>

              <p className="mt-3 text-xs sm:text-sm text-muted-foreground text-center">
                Don&apos;t see what you need?{" "}
                <Link to="/contact" className="font-medium text-primary hover:underline">
                  Request a Custom AI Solution →
                </Link>
              </p>
            </div>
          </Container>
        </section>

        {/* CUSTOM AI SOLUTION - BLUE SECTION */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F766E] via-[#0B4F4A] to-[#062F2B]">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Something Custom?</h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  We build bespoke AI automation tailored to your exact business needs — no templates, no compromises.
                </p>
              </div>

              <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Recent Custom Solutions:</h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3 text-white/90">
                      <CheckCircle2 className="h-5 w-5 text-emerald-300 mt-0.5 flex-shrink-0" />
                      <span>Healthcare appointment automation with patient intake &amp; insurance verification</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/90">
                      <CheckCircle2 className="h-5 w-5 text-emerald-300 mt-0.5 flex-shrink-0" />
                      <span>E-commerce inventory management with supplier API integration</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/90">
                      <CheckCircle2 className="h-5 w-5 text-emerald-300 mt-0.5 flex-shrink-0" />
                      <span>Restaurant multi-location ordering system with delivery coordination</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/90">
                      <CheckCircle2 className="h-5 w-5 text-emerald-300 mt-0.5 flex-shrink-0" />
                      <span>Property management applicant filtering &amp; tenant communication</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/90">
                      <CheckCircle2 className="h-5 w-5 text-emerald-300 mt-0.5 flex-shrink-0" />
                      <span>Legal firm document intake workflows with client portal integration</span>
                    </li>
                  </ul>

                  <div className="bg-white/5 rounded-lg p-4 mb-6">
                    <p className="text-white/80 text-sm mb-2">
                      <span className="font-semibold text-white">Starting from £800 setup</span> | Monthly from £200+
                    </p>
                    <p className="text-white/70 text-xs">
                      Price depends on complexity, integrations, and volume. Most custom builds are live within 4–6
                      weeks.
                    </p>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-white text-[#0F766E] hover:bg-white/90 shadow-xl shadow-black/20"
                  >
                    <Link to="/contact">
                      Request Custom AI Solution <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* CUSTOM AI SOLUTION - BLUE SECTION */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F766E] via-[#0B4F4A] to-[#062F2B]">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Something Custom?</h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  We build bespoke AI automation tailored to your exact business needs — no templates, no compromises.
                </p>
              </div>

              <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Recent Custom Solutions:</h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3 text-white/90">
                      <CheckCircle2 className="h-5 w-5 text-emerald-300 mt-0.5 flex-shrink-0" />
                      <span>Healthcare appointment automation with patient intake &amp; insurance verification</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/90">
                      <CheckCircle2 className="h-5 w-5 text-emerald-300 mt-0.5 flex-shrink-0" />
                      <span>E-commerce inventory management with supplier API integration</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/90">
                      <CheckCircle2 className="h-5 w-5 text-emerald-300 mt-0.5 flex-shrink-0" />
                      <span>Restaurant multi-location ordering system with delivery coordination</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/90">
                      <CheckCircle2 className="h-5 w-5 text-emerald-300 mt-0.5 flex-shrink-0" />
                      <span>Property management applicant filtering &amp; tenant communication</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/90">
                      <CheckCircle2 className="h-5 w-5 text-emerald-300 mt-0.5 flex-shrink-0" />
                      <span>Legal firm document intake workflows with client portal integration</span>
                    </li>
                  </ul>

                  <div className="bg-white/5 rounded-lg p-4 mb-6">
                    <p className="text-white/80 text-sm mb-2">
                      <span className="font-semibold text-white">Starting from £800 setup</span> | Monthly from £200+
                    </p>
                    <p className="text-white/70 text-xs">
                      Price depends on complexity, integrations, and volume. Most custom builds are live within 4–6
                      weeks.
                    </p>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-white text-[#0F766E] hover:bg-white/90 shadow-xl shadow-black/20"
                  >
                    <Link to="/contact">
                      Request Custom AI Solution <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AiPackage;
