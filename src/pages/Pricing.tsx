import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import FloatingActionMenu from "@/components/FloatingActionMenu";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

const websitePackages = [
  {
    name: "Foundation",
    price: "£200",
    priceNote: "one-off",
    badge: null as string | null,
    description: "Perfect for trades, sole traders, and simple service businesses.",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Contact form",
      "Basic SEO setup",
      "Google Analytics",
      "Delivered in 3–5 days",
    ],
    cta: "/contact",
  },
  {
    name: "Growth",
    price: "£600",
    priceNote: "one-off",
    badge: "Most Popular" as string | null,
    description: "Ideal for restaurants, salons, and service businesses that need more.",
    features: [
      "Up to 10 pages",
      "Online booking or enquiry system",
      "Google Maps integration",
      "Local SEO optimisation",
      "Social media links",
      "Delivered in 5–7 days",
    ],
    cta: "/contact",
  },
  {
    name: "Scale",
    price: "£1,400",
    priceNote: "one-off",
    badge: null as string | null,
    description: "For businesses ready to grow with advanced features and automation.",
    features: [
      "Unlimited pages",
      "Blog / content system",
      "Advanced SEO strategy",
      "Email marketing integration",
      "Custom domain & hosting setup",
      "Delivered in 7–10 days",
    ],
    cta: "/contact",
  },
  {
    name: "Enterprise",
    price: "£3,500+",
    priceNote: "one-off",
    badge: null as string | null,
    description: "Custom builds for complex platforms, e-commerce, and bespoke applications.",
    features: [
      "Full e-commerce store",
      "Custom web application",
      "Multi-user dashboards",
      "API integrations",
      "Priority support included",
      "Timeline quoted on request",
    ],
    cta: "/contact",
  },
];

const aiPackages = [
  {
    name: "AI Chatbot",
    price: "from £50",
    priceNote: "per month",
    badge: null as string | null,
    description: "Answer questions, capture leads, and handle bookings 24/7.",
    features: [
      "Trained on your business info",
      "Booking & enquiry capture",
      "WhatsApp or website widget",
      "Monthly conversation reports",
      "Setup included",
    ],
    cta: "/ai-package",
  },
  {
    name: "AI Receptionist",
    price: "from £100",
    priceNote: "per month",
    badge: "Best Value" as string | null,
    description: "Full front-of-house automation — chat, bookings, and follow-ups.",
    features: [
      "Everything in AI Chatbot",
      "Automated follow-up messages",
      "CRM integration",
      "Appointment reminders",
      "Voice agent (add-on)",
    ],
    cta: "/ai-package",
  },
];

const otherPackages = [
  {
    name: "IT Support",
    price: "from £25",
    priceNote: "per month",
    description: "Remote IT help for small businesses — computers, networks, security.",
    features: ["Remote troubleshooting", "Security monitoring", "Software setup", "Monthly check-ins"],
    cta: "/services/it-support",
  },
  {
    name: "Local SEO",
    price: "from £300",
    priceNote: "one-off",
    description: "Get found on Google for local searches in your area.",
    features: ["Google Business Profile setup", "On-page SEO", "Local citation building", "Ranking report"],
    cta: "/services/seo",
  },
  {
    name: "POS Setup",
    price: "from £299",
    priceNote: "one-off",
    description: "Square POS installation, training, and configuration for your shop or restaurant.",
    features: ["Hardware setup", "Menu / product configuration", "Staff training", "Ongoing support available"],
    cta: "/services/pos-setup",
  },
];

const faqs = [
  {
    q: "Do I have to pay everything upfront?",
    a: "No. We typically split payments: 50% to start, 50% on delivery. For monthly packages, you pay monthly with no long-term commitment.",
  },
  {
    q: "What does the 14-day money-back guarantee cover?",
    a: "If you're not happy with your website within 14 days of delivery, we'll refund you in full — no questions asked. This applies to one-off website builds.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No. Our prices include everything listed. Domain registration and third-party hosting costs (if applicable) are discussed and agreed upfront.",
  },
  {
    q: "Can I upgrade my package later?",
    a: "Yes. Many clients start on Foundation and upgrade as their business grows. We'll quote any upgrades at a fair additional cost.",
  },
  {
    q: "What ongoing costs should I expect?",
    a: "Optional: domain renewal (~£15/year), hosting if self-hosted (~£10–£20/month), and our support plans from £25/month. Most clients host on Cloudflare Pages which is free.",
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Pricing | Websites, AI & SEO | L&D Digital"
        description="Transparent pricing from L&D Digital (Stratford, East London): websites from £200, AI chatbots from £50/month, local SEO from £300/month. No hidden fees."
        keywords="web design pricing UK, website cost London, AI chatbot price, SEO cost Stratford, affordable web design East London"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/pricing"
      />
      <ScrollProgressBar />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-36 md:pb-16 bg-background px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-4">Transparent Pricing</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Simple, honest prices.</h1>
          <p className="text-xl text-muted-foreground mb-6">
            No hidden fees. No lock-in contracts. 14-day money-back guarantee on all website builds.
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              14-Day Money-Back Guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              No Lock-in Contracts
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              Free Consultation
            </span>
          </div>
        </div>
      </section>

      <BreadcrumbNav />

      {/* Website Packages */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Website Packages</h2>
            <p className="text-muted-foreground">One-off builds — you own it outright.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {websitePackages.map((pkg) => (
              <Card key={pkg.name} className={`relative flex flex-col ${pkg.badge ? "border-primary shadow-lg" : ""}`}>
                {pkg.badge && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    {pkg.badge}
                  </Badge>
                )}
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div>
                    <span className="text-3xl font-bold">{pkg.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">{pkg.priceNote}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full" variant={pkg.badge ? "default" : "outline"}>
                    <Link to={pkg.cta}>
                      Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Packages */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">AI Automation</h2>
            <p className="text-muted-foreground">Monthly plans — cancel any time.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {aiPackages.map((pkg) => (
              <Card key={pkg.name} className={`relative flex flex-col ${pkg.badge ? "border-primary shadow-lg" : ""}`}>
                {pkg.badge && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    {pkg.badge}
                  </Badge>
                )}
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div>
                    <span className="text-3xl font-bold">{pkg.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">{pkg.priceNote}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full" variant={pkg.badge ? "default" : "outline"}>
                    <Link to={pkg.cta}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IT, SEO & POS */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">IT, SEO &amp; POS</h2>
            <p className="text-muted-foreground">Supporting services for growing businesses.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherPackages.map((pkg) => (
              <Card key={pkg.name} className="flex flex-col">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div>
                    <span className="text-3xl font-bold">{pkg.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">{pkg.priceNote}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full" variant="outline">
                    <Link to={pkg.cta}>
                      Find Out More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Pricing FAQ</h2>
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
          <h2 className="text-3xl font-bold mb-4">Not sure which package?</h2>
          <p className="text-lg opacity-90 mb-8">
            Book a free 15-minute consultation. We'll recommend the right fit — no hard sell.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
      <FloatingActionMenu />
    </div>
  );
}
