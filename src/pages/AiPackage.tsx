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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                AI Automation Solutions
              </h1>
              <p className="text-xl text-white/90 mb-4">
                Stand-alone or integrated with your website.
              </p>
              <p className="text-lg text-white/80">
                Works with ANY website — yours or ours.
              </p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {/* AI Website Chatbot */}
              <AnimatedSection staggerIndex={0} animation="fade">
                <Card className="hover-lift h-full">
                  <CardHeader>
                    <MessageSquare className="h-12 w-12 text-primary mb-3" />
                    <CardTitle className="text-2xl">AI Website Chatbot</CardTitle>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Setup: £250–600</p>
                      <p className="text-lg font-semibold text-primary">From £50/month</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Live AI chat widget on your website. Answers questions, qualifies leads, collects contact info —
                      instantly.
                    </p>
                    <p className="text-xs font-semibold mb-2">Use Cases:</p>
                    <ul className="text-xs text-muted-foreground space-y-1 mb-6">
                      <li>• Answer common questions 24/7</li>
                      <li>• Qualify leads before they reach you</li>
                      <li>• Collect contact details automatically</li>
                      <li>• Works on any website</li>
                    </ul>
                    <Button asChild className="w-full">
                      <Link to="/contact">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* AI Inbox Assistant */}
              <AnimatedSection staggerIndex={1} animation="fade">
                <Card className="hover-lift h-full">
                  <CardHeader>
                    <Mail className="h-12 w-12 text-primary mb-3" />
                    <CardTitle className="text-2xl">AI Inbox Assistant</CardTitle>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Setup: £200–500</p>
                      <p className="text-lg font-semibold text-primary">From £50/month</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      AI reads and replies to your emails, WhatsApp messages, or contact forms. Drafts replies or sends
                      them automatically — your choice.
                    </p>
                    <p className="text-xs font-semibold mb-2">Use Cases:</p>
                    <ul className="text-xs text-muted-foreground space-y-1 mb-6">
                      <li>• Sort and respond to customer emails</li>
                      <li>• Handle WhatsApp enquiries</li>
                      <li>• Route urgent messages to you</li>
                      <li>• Never miss a message again</li>
                    </ul>
                    <Button asChild className="w-full">
                      <Link to="/contact">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* AI Receptionist */}
              <AnimatedSection staggerIndex={2} animation="fade">
                <Card className="hover-lift h-full border border-primary/30">
                  <CardHeader>
                    <Phone className="h-12 w-12 text-primary mb-3" />
                    <CardTitle className="text-2xl">AI Receptionist</CardTitle>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Setup: £500–2,000</p>
                      <p className="text-lg font-semibold text-primary">From £100/month</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      AI answers phone calls, books appointments, takes messages, and transfers calls. Natural-sounding
                      voice — customers won't know it's AI.
                    </p>
                    <p className="text-xs font-semibold mb-2">Use Cases:</p>
                    <ul className="text-xs text-muted-foreground space-y-1 mb-6">
                      <li>• Answer calls 24/7</li>
                      <li>• Book appointments automatically</li>
                      <li>• Take detailed messages</li>
                      <li>• Transfer to staff when needed</li>
                    </ul>
                    <Button asChild className="w-full">
                      <Link to="/contact">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* More AI Services */}
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-sm md:text-base text-muted-foreground mb-3">
                <span className="font-semibold text-secondary">Need something else?</span> We offer 7+ AI services
                including sales assistants, lead qualification, workflow automation, and custom AI solutions.
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
