import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container } from "@/components/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
   
  Mail, 
  Calendar,
  Shield,
  FileText,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";

const SupportSla = () => {
  const responseTimes = [
    {
      priority: "Critical",
      time: "4 hours",
      examples: "Website down, major functionality broken, security breach",
      color: "bg-red-50 border-red-200",
      textColor: "text-red-700",
      iconColor: "text-red-600",
    },
    {
      priority: "High",
      time: "24 hours",
      examples: "Broken forms, payment issues, significant bugs affecting users",
      color: "bg-amber-50 border-amber-200",
      textColor: "text-amber-700",
      iconColor: "text-amber-600",
    },
    {
      priority: "Normal",
      time: "24–72 hours",
      examples: "Content updates, minor bugs, styling adjustments",
      color: "bg-blue-50 border-blue-200",
      textColor: "text-blue-700",
      iconColor: "text-blue-600",
    },
    {
      priority: "Low",
      time: "5 business days",
      examples: "Feature requests, enhancements, non-urgent improvements",
      color: "bg-slate-50 border-slate-200",
      textColor: "text-slate-700",
      iconColor: "text-slate-600",
    },
  ];

  const escalationSteps = [
    {
      step: 1,
      title: "Initial Contact",
      description: "Submit your request via contact form, email, or WhatsApp",
      icon: MessageSquare,
    },
    {
      step: 2,
      title: "Acknowledgement",
      description: "We confirm receipt within the stated response time",
      icon: CheckCircle2,
    },
    {
      step: 3,
      title: "Triage",
      description: "Issue is assessed and prioritised based on severity",
      icon: FileText,
    },
    {
      step: 4,
      title: "Resolution",
      description: "Fix implemented, tested, and deployed to your site",
      icon: Shield,
    },
    {
      step: 5,
      title: "Follow-up",
      description: "Confirmation that the issue is resolved to your satisfaction",
      icon: CheckCircle2,
    },
  ];

  const faqs = [
    {
      question: "What counts as a 'critical' issue?",
      answer: "Critical issues are those that make your website completely inaccessible to users, cause significant data loss, or represent an active security threat. Examples include: your site returning error pages, checkout completely broken on an e-commerce site, or evidence of a hack or malware.",
    },
    {
      question: "Does 'response time' mean my issue will be fixed by then?",
      answer: "Response time refers to when we'll acknowledge your request and begin investigating. Resolution time depends on the complexity of the issue. Simple fixes may be same-day; complex problems may take longer. We'll always keep you informed of progress.",
    },
    {
      question: "What if I have an emergency outside business hours?",
      answer: "For critical issues (site down) outside business hours, we provide emergency coverage. Use our WhatsApp or email with 'URGENT' in the subject. Non-critical issues submitted outside hours will be addressed the next business day.",
    },
    {
      question: "Can I escalate my issue if I'm not satisfied with the response?",
      answer: "Absolutely. If you feel your issue isn't being handled appropriately, simply reply to your support thread requesting escalation, or contact us directly. We take all escalations seriously.",
    },
    {
      question: "Is support included in all packages?",
      answer: "Support & Maintenance is available as an optional add-on service at £24.99/month. It's only available for websites built or managed by L&D Digital. Without an active support plan, ad-hoc support is billed at our standard hourly rate.",
    },
    {
      question: "What's not covered under support?",
      answer: "Support covers bug fixes, content updates, and minor adjustments. Major redesigns, new features, or significant functionality changes are quoted separately as project work. We'll always discuss this with you before any additional charges.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Support SLA | Response Times & Service Levels | L&D Digital"
        description="Our support service level agreement. Learn about response times, coverage hours, and how we handle your website issues."
        keywords="website support UK, web maintenance SLA, support response times, website maintenance service level"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/support-sla"
      />

      <Navigation darkHero />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-40 pb-12 md:pt-44 md:pb-16 lg:pt-48 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56, 189, 248, 0.15), transparent), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(20, 184, 166, 0.1), transparent)",
            }}
          />

          <Container className="relative z-10 text-center">
            <AnimatedSection animation="fade">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Support Service Level Agreement
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Transparent response times, clear coverage hours, and a straightforward process for handling your website issues.
              </p>
            </AnimatedSection>
          </Container>
        </section>

        {/* Breadcrumb */}
        <BreadcrumbNav />

        {/* Response Times Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <AnimatedSection animation="fade">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">
                  Response Times by Priority
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We triage all requests by severity. Response time is when we acknowledge your issue; resolution time depends on complexity.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid gap-4 md:grid-cols-2">
              {responseTimes.map((item, index) => (
                <AnimatedSection key={item.priority} staggerIndex={index} animation="fade">
                  <Card className={`h-full border ${item.color}`}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className={`text-lg font-semibold ${item.textColor}`}>
                          {item.priority} Priority
                        </CardTitle>
                        <div className={`flex items-center gap-1.5 ${item.iconColor}`}>
                          <Clock className="h-4 w-4" />
                          <span className="font-bold">{item.time}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.examples}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* Coverage Hours Section */}
        <section className="py-16 md:py-20 bg-slate-50">
          <Container>
            <AnimatedSection animation="fade">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">
                  Coverage Hours
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  When you can expect us to be available and how we handle out-of-hours emergencies.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid gap-6 md:grid-cols-3">
              <AnimatedSection staggerIndex={0} animation="fade">
                <Card className="h-full text-center">
                  <CardHeader>
                    <Calendar className="h-10 w-10 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-secondary mb-2">Mon–Fri</p>
                    <p className="text-muted-foreground">9:00 AM – 6:00 PM GMT</p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection staggerIndex={1} animation="fade">
                <Card className="h-full text-center">
                  <CardHeader>
                    <AlertTriangle className="h-10 w-10 text-warning mx-auto mb-2" />
                    <CardTitle className="text-lg">Weekend Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-secondary mb-2">Emergency Only</p>
                    <p className="text-muted-foreground">Critical issues (site down)</p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection staggerIndex={2} animation="fade">
                <Card className="h-full text-center">
                  <CardHeader>
                    <Clock className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                    <CardTitle className="text-lg">Bank Holidays</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-secondary mb-2">Closed</p>
                    <p className="text-muted-foreground">Emergency coverage for critical issues</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fade" className="mt-8">
              <div className="p-4 bg-white rounded-lg border border-slate-200 text-center">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-secondary">Important:</strong> Response time = acknowledgement time. 
                  We'll confirm receipt of your request within the stated period. Resolution time depends on issue complexity.
                </p>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Escalation Procedures Section */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <AnimatedSection animation="fade">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">
                  How We Handle Your Issues
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our clear, five-step process ensures nothing falls through the cracks.
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto">
              {escalationSteps.map((step, index) => (
                <AnimatedSection key={step.step} staggerIndex={index} animation="fade">
                  <div className="flex gap-4 mb-6 last:mb-0">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <step.icon className="h-5 w-5 text-primary" />
                      </div>
                      {index < escalationSteps.length - 1 && (
                        <div className="w-0.5 h-8 bg-border ml-5 mt-2" />
                      )}
                    </div>
                    <div className="pt-1">
                      <h3 className="font-semibold text-secondary mb-1">
                        Step {step.step}: {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-slate-50">
          <Container size="narrow">
            <AnimatedSection animation="fade">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Common questions about our support service.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-white to-primary/5">
          <Container>
            <AnimatedSection animation="scale">
              <Card className="text-center p-8 md:p-12 border-primary/20">
                <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">
                  Need Support or Have Questions?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Whether you're an existing client or considering our support plans, we're here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/contact">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Us
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/web-package#support-maintenance">
                      View Support Plans <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </AnimatedSection>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SupportSla;
