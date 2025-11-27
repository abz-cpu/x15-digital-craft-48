import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Mail, Phone } from "lucide-react";
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
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Most Popular AI Solutions</h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Plug-in AI systems that answer customers, capture leads, and handle admin while you focus on the work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {/* AI Website Chatbot – MOST POPULAR */}
              <AnimatedSection staggerIndex={0} animation="fade">
                <Card className="hover-lift h-full border border-primary/30">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Badge + Icon */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="inline-flex p-3 rounded-lg bg-primary/10">
                        <MessageSquare className="h-8 w-8 text-primary" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F59E0B] px-3 py-1 text-[11px] font-bold text-white uppercase tracking-wide shadow">
                        ⭐ Most Popular
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-2">AI Website Chatbot</h3>

                    {/* Description FIRST */}
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Turn more visitors into customers. AI chat answers questions instantly, qualifies leads, and
                      captures contact details 24/7 — even while you sleep.
                    </p>

                    {/* Pricing AFTER description */}
                    <div className="mb-5 pb-4 border-b border-border">
                      <p className="text-sm text-muted-foreground mb-1">
                        From <span className="font-semibold text-foreground">£50/month</span> — less than £2/day for
                        24/7 coverage
                      </p>
                      <p className="text-sm text-muted-foreground">
                        One-time setup: <span className="font-semibold">£250–600</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Includes up to 1,000 interactions/month.</p>
                    </div>

                    {/* Perfect For */}
                    <div className="mb-6 space-y-2">
                      <h4 className="font-semibold mb-1 text-sm">Perfect For:</h4>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Service businesses needing 24/7 FAQ + lead capture</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Trades capturing leads outside working hours</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Websites with decent traffic wasting enquiries</span>
                        </li>
                      </ul>
                    </div>

                    {/* CTA */}
                    <Button asChild size="lg" className="w-full mt-auto">
                      <Link to="/contact">
                        See How It Works <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* AI Inbox Assistant */}
              <AnimatedSection staggerIndex={1} animation="fade">
                <Card className="hover-lift h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="inline-flex p-3 rounded-lg bg-primary/10">
                        <Mail className="h-8 w-8 text-primary" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-2">AI Inbox Assistant</h3>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      Never miss a customer enquiry again. AI reads and replies to emails, WhatsApp, and contact forms
                      instantly — so every lead gets a fast response, even at 3am.
                    </p>

                    <div className="mb-5 pb-4 border-b border-border">
                      <p className="text-sm text-muted-foreground mb-1">
                        From <span className="font-semibold text-foreground">£50/month</span> for shared inbox
                        automation
                      </p>
                      <p className="text-sm text-muted-foreground">
                        One-time setup: <span className="font-semibold">£200–500</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Handles email + WhatsApp templates, routing, and canned replies.
                      </p>
                    </div>

                    <div className="mb-6 space-y-2">
                      <h4 className="font-semibold mb-1 text-sm">Perfect For:</h4>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Owners drowning in emails and WhatsApp messages</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Small teams who need instant first replies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Businesses that can’t justify a full-time admin</span>
                        </li>
                      </ul>
                    </div>

                    <Button asChild size="lg" className="w-full mt-auto">
                      <Link to="/contact">
                        Get Inbox Quote <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* AI Receptionist */}
              <AnimatedSection staggerIndex={2} animation="fade">
                <Card className="hover-lift h-full border border-primary/40">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="inline-flex p-3 rounded-lg bg-primary/10">
                        <Phone className="h-8 w-8 text-primary" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-2">AI Receptionist</h3>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      AI answers phone calls, books appointments, takes messages, and passes calls to staff when needed.
                      Natural-sounding voice — clients think it’s a real receptionist.
                    </p>

                    <div className="mb-5 pb-4 border-b border-border">
                      <p className="text-sm text-muted-foreground mb-1">
                        From <span className="font-semibold text-foreground">£100/month</span> for 24/7 phone coverage
                      </p>
                      <p className="text-sm text-muted-foreground">
                        One-time setup: <span className="font-semibold">£500–2,000</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Often cheaper than 1 day of staff per month.</p>
                    </div>

                    <div className="mb-6 space-y-2">
                      <h4 className="font-semibold mb-1 text-sm">Perfect For:</h4>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Clinics, salons, garages, and booking-heavy businesses</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Trades that miss calls while working on-site</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Any business that can’t afford to miss calls</span>
                        </li>
                      </ul>
                    </div>

                    <Button asChild size="lg" className="w-full mt-auto">
                      <Link to="/contact">
                        Book a Demo Call <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* More AI Services */}
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-sm md:text-base text-muted-foreground mb-3">
                <span className="font-semibold text-secondary">Need something else?</span> We also build sales
                assistants, lead-qualifying bots, workflow automation, and fully custom AI systems for your stack.
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
