import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Mail, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container } from "@/components/Container";

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

        {/* AI Solutions */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <Container>
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                Automate Your Admin. Capture More Leads.
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                AI systems that answer customers, capture leads, and run admin — while you focus on what you do best.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {/* =======================
          AI WEBSITE CHATBOT — MOST POPULAR
      ======================== */}
              <AnimatedSection staggerIndex={0} animation="fade">
                <Card className="hover-lift h-full border border-primary/30">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Icon + Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="inline-flex p-3 rounded-lg bg-primary/10">
                        <MessageSquare className="h-8 w-8 text-primary" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F59E0B] px-3 py-1 text-[11px] font-bold text-white uppercase tracking-wide shadow">
                        ⭐ Most Popular
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-2">AI Website Chatbot</h3>

                    {/* Benefit-first description */}
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Capture leads while you sleep. AI converts visitors into qualified enquiries by answering
                      questions, booking calls, and collecting details automatically — 24/7.
                    </p>

                    {/* Pricing */}
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

                    {/* Perfect For */}
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

                    {/* CTA + Trust line */}
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

              {/* =======================
          AI INBOX ASSISTANT
      ======================== */}
              <AnimatedSection staggerIndex={1} animation="fade">
                <Card className="hover-lift h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <div className="inline-flex p-3 rounded-lg bg-primary/10">
                        <Mail className="h-8 w-8 text-primary" />
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

              {/* =======================
          AI RECEPTIONIST 
      ======================== */}
              <AnimatedSection staggerIndex={2} animation="fade">
                <Card className="hover-lift h-full border border-primary/40">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <div className="inline-flex p-3 rounded-lg bg-primary/10">
                        <Phone className="h-8 w-8 text-primary" />
                      </div>
                    </div>

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

            {/* Bottom CTA */}
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-sm md:text-base text-muted-foreground mb-3">
                <span className="font-semibold text-secondary">Need something else?</span> We build custom AI
                assistants, automations, and internal tools tailored to your business.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/contact">
                  Discuss Your Needs <ArrowRight className="ml-2 h-5 w-5" />
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

export default AiPackage;
