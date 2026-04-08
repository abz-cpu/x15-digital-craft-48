import { Link } from "react-router-dom";
import { MessageCircle, Palette, Code, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import FloatingActionMenu from "@/components/FloatingActionMenu";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Discovery",
    duration: "Day 1",
    description:
      "We start with a free 15-minute consultation — by phone, WhatsApp, or email. We ask about your business, your goals, and what you need. No jargon, no pressure.",
    deliverables: [
      "Clear project brief",
      "Agreed scope and price",
      "Timeline confirmed",
      "50% deposit to start",
    ],
  },
  {
    number: "02",
    icon: Palette,
    title: "Design",
    duration: "Days 2–3",
    description:
      "We create an initial design based on your brand, industry, and competitors. You review it and give feedback. We refine until you're happy before writing a single line of code.",
    deliverables: [
      "Homepage design mockup",
      "Colour palette & fonts agreed",
      "Content structure confirmed",
      "Your feedback incorporated",
    ],
  },
  {
    number: "03",
    icon: Code,
    title: "Build",
    duration: "Days 3–12",
    description:
      "We build your site with clean, fast code. You get a staging link to review the real working site throughout the build — no surprises at the end.",
    deliverables: [
      "Working staging site",
      "Mobile & desktop tested",
      "All pages built to brief",
      "Forms & integrations connected",
    ],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    duration: "Final day",
    description:
      "Once you approve, we go live. Domain connected, SSL secured, SEO configured. We hand over everything you need — logins, training, and a 14-day guarantee.",
    deliverables: [
      "Live on your domain",
      "SSL & security configured",
      "SEO meta setup",
      "Logins & handover pack",
    ],
  },
];

const faqs = [
  {
    q: "How long does a website take to build?",
    a: "Most websites are delivered in 3–14 days depending on the package. Foundation sites take 3–5 days, Growth sites 5–7 days, Scale sites 7–10 days. We'll confirm your exact timeline when we start.",
  },
  {
    q: "What do I need to provide?",
    a: "Ideally: your logo, brand colours (or a reference site you like), and the text content for each page. If you don't have content, we can help write it for a small additional fee.",
  },
  {
    q: "Can I make changes after launch?",
    a: "Yes. We offer optional ongoing maintenance plans from £25/month. Alternatively, we can train you to make simple edits yourself — it's your site, you own it.",
  },
  {
    q: "What if I'm not happy with the result?",
    a: "We offer a 14-day money-back guarantee on all website builds. If you're not satisfied, we'll refund you in full, no questions asked.",
  },
  {
    q: "Do you work with businesses outside East London?",
    a: "Yes. While we specialise in East London businesses, we work with clients across the UK. Everything is handled remotely — calls, screen shares, and a staging link for review.",
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="How It Works — Our Web Design Process | L&D Digital"
        description="See how we build websites for East London businesses in 4 simple steps: Discovery, Design, Build, Launch. Delivered in 3–14 days with a 14-day money-back guarantee."
        keywords="how website design works, web design process UK, website build steps, fast website delivery London"
      />
      <ScrollProgressBar />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-36 md:pb-16 bg-background px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-4">Our Process</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            From idea to live site in days, not months.
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            A simple 4-step process designed to get your business online fast — with no stress, no surprises,
            and a money-back guarantee.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <BreadcrumbNav />

      {/* Steps */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 1;
              return (
                <div
                  key={step.number}
                  className={`flex flex-col md:flex-row gap-8 items-start ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Step number + icon */}
                  <div className="flex-shrink-0 flex flex-col items-center gap-3 w-full md:w-48">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <span className="text-5xl font-bold text-muted-foreground/20 leading-none">{step.number}</span>
                    <Badge variant="outline">{step.duration}</Badge>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3">{step.title}</h2>
                    <p className="text-muted-foreground mb-5 leading-relaxed">{step.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Connector line (hidden on mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:hidden" aria-hidden="true" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guarantee strip */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-emerald-50 border-y border-emerald-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg font-semibold text-emerald-800 mb-1">14-Day Money-Back Guarantee</p>
          <p className="text-emerald-700 text-sm">
            Not happy within 14 days of launch? Full refund, no questions asked.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Common Questions</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg opacity-90 mb-8">
            Book a free consultation today. We'll have your site live within the week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActionMenu />
    </div>
  );
}
