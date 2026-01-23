import { Link } from "react-router-dom";
import { 
  Wrench, 
  FileText, 
  Wallet, 
  ClipboardList,
  User,
  WifiOff,
  ArrowRight,
  Check,
  X,
  Phone,
  Car,
  Settings,
  Truck,
  MessageCircle
} from "lucide-react";
import { SEO } from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema } from "@/components/FAQSchema";
import { ServiceSchema } from "@/components/ServiceSchema";

const faqItems = [
  {
    question: "Can I take payments without internet?",
    answer: "Yes. Square's offline mode lets you process card payments even without signal. Transactions queue up and process automatically when you're back online. Essential for mobile trades working in areas with poor connectivity."
  },
  {
    question: "How do deposits work for larger jobs?",
    answer: "Square lets you take partial payments upfront before starting work. You create an invoice for the full amount, collect a deposit (fixed amount or percentage), and the balance shows as outstanding. Clients can pay the remainder on completion via card, link, or bank transfer."
  },
  {
    question: "Can I send invoices via text or email?",
    answer: "Absolutely. Square invoices can be sent via email, SMS, or shared link. Clients click to pay online with card or bank transfer. You get notified when they view and pay. Perfect for quotes that convert to invoices."
  },
  {
    question: "Do you integrate with accounting software?",
    answer: "Yes. Square integrates with Xero, QuickBooks, and FreeAgent. Your sales, invoices, and payments sync automatically. No double entry, no missing transactions at tax time."
  },
  {
    question: "Is it suitable for mobile work?",
    answer: "Very much so. The Square Reader connects to your phone via Bluetooth for on-site card payments. Invoicing works anywhere with mobile signal. The app runs on iOS and Android—no special hardware needed for basic mobile payments."
  },
  {
    question: "How long does trade POS installation take?",
    answer: "Most trade setups take half a day. We configure your invoicing templates, payment links, and any integrations you need. For workshops with multiple terminals or complex job tracking, allow 1-2 days."
  }
];

const tradesFeatures = [
  {
    icon: FileText,
    title: "Mobile Invoicing",
    description: "Create and send invoices on-site. Professional templates with your branding."
  },
  {
    icon: Wallet,
    title: "Deposit Collection",
    description: "Secure payment before starting work. Reduce payment chasing."
  },
  {
    icon: ClipboardList,
    title: "Quote to Invoice",
    description: "Convert quotes to invoices in one tap when the job is approved."
  },
  {
    icon: Settings,
    title: "Job Tracking",
    description: "Know what's outstanding, what's paid, and what needs follow-up."
  },
  {
    icon: User,
    title: "Customer Records",
    description: "Service history for each client. Know what you did last time."
  },
  {
    icon: WifiOff,
    title: "Offline Payments",
    description: "Works without signal. Transactions sync when you're back online."
  }
];

const tradesTypes = [
  {
    icon: Car,
    title: "Mechanics & Garages",
    description: "Job cards, parts tracking, labour rates, and MOT reminders."
  },
  {
    icon: Wrench,
    title: "Repair Services",
    description: "Quotes, deposits, and invoicing for electronics, appliances, and equipment."
  },
  {
    icon: Truck,
    title: "Mobile Services",
    description: "Plumbers, electricians, locksmiths—get paid on-site without hassle."
  }
];

const supportPlans = [
  {
    name: "Basic",
    annualPrice: "£25",
    monthlyPrice: "£30",
    description: "Essential support for solo traders",
    features: [
      "Email support",
      "Software updates",
      "Monthly health checks",
      "Knowledge base access"
    ]
  },
  {
    name: "Standard",
    annualPrice: "£55",
    monthlyPrice: "£65",
    description: "Priority support for growing businesses",
    features: [
      "Phone & email support",
      "Same-day response",
      "Quarterly reviews",
      "Staff refresher training",
      "Hardware troubleshooting"
    ],
    popular: true
  },
  {
    name: "Premium",
    annualPrice: "£93",
    monthlyPrice: "£110",
    description: "Full coverage for workshops",
    features: [
      "Dedicated account manager",
      "4-hour response SLA",
      "On-site visits included",
      "Annual hardware servicing",
      "Priority feature requests",
      "Multi-site coordination"
    ]
  }
];

export default function TradesPos() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Mobile POS for Trades London | Invoicing & Payments | L&D Digital"
        description="Square POS for mechanics, repair shops, and mobile trades in London. Invoicing, deposits, offline payments. Setup from £299, no contracts."
        keywords="mobile pos trades, mechanic payment system, service business pos, invoicing pos london, trade payment solutions, square pos trades"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/sectors/trades-pos"
      />
      <ServiceSchema
        name="Trades POS System Installation"
        description="Professional Square POS setup for trades and service businesses including mobile invoicing, deposits, and offline payments."
        url="https://digital.luminousanddeliver.co.uk/sectors/trades-pos"
        priceRange="£299-£899"
        serviceType="POS System Installation"
      />
      <FAQSchema faqs={faqItems} pageId="trades-pos" />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-cover bg-center" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
              <Wrench className="w-3 h-3 mr-1" />
              Trades & Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Get Paid On-Site Without the Hassle
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Invoice customers, take deposits, and collect payment on the job. No office, no problem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <a href="https://wa.me/447424356789" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
            <p className="text-slate-400">
              Setup from <span className="text-primary font-semibold">£299</span> • No lock-in contracts • Local London support
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">65%</p>
              <p className="text-muted-foreground text-sm">faster payment collection</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">£3,500+</p>
              <p className="text-muted-foreground text-sm">saved vs legacy systems</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">Offline</p>
              <p className="text-muted-foreground text-sm">payments work without signal</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">From £299</p>
              <p className="text-muted-foreground text-sm">complete setup</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trade Businesses We Work With</h2>
            <p className="text-muted-foreground text-lg">
              From solo mobile traders to multi-bay workshops.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tradesTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Features Your Trade Actually Needs</h2>
            <p className="text-muted-foreground text-lg">
              Square POS configured specifically for trades and services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tradesFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hardware for Mobile Work</h2>
            <p className="text-muted-foreground text-lg">
              Own your equipment outright—no leasing, no rental fees.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Square Reader",
                price: "From £19",
                specs: ["Bluetooth connection", "Pocket-size", "Works with phone"],
                ideal: "On-site payments",
              },
              {
                name: "Square Terminal",
                price: "From £149",
                specs: ["Built-in printer", "All-day battery", "Wi-Fi & offline mode"],
                ideal: "Workshop counter",
              },
              {
                name: "Receipt Printers",
                price: "From £199",
                specs: ["Portable options", "Bluetooth connection", "Fast thermal printing"],
                ideal: "Invoice receipts",
              },
            ].map((item, index) => (
              <Card key={index} className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">Hardware</Badge>
                  <span className="font-bold text-primary text-sm">{item.price}</span>
                </div>
                <h3 className="font-semibold mb-2">{item.name}</h3>
                <ul className="space-y-1 mb-3">
                  {item.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check className="w-3 h-3 text-primary flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground border-t pt-2">
                  <strong>Ideal for:</strong> {item.ideal}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Square vs Traditional Payment Solutions</h2>
            <p className="text-muted-foreground text-lg">
              See why trades are switching from card terminals and paper invoicing.
            </p>
          </div>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">Square POS</th>
                  <th className="text-center py-4 px-4 font-semibold text-muted-foreground">Traditional</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">Terminal ownership</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /> Buy once (£49)</td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-500 mx-auto" /> Leased (£20+/mo)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">Invoicing</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /> Built-in, free</td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-500 mx-auto" /> Separate software</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">Offline payments</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /> Works offline</td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-500 mx-auto" /> Requires connection</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">Contract length</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /> No contract</td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-500 mx-auto" /> 12-24 months</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">Deposits & partial payments</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /> Built-in</td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-500 mx-auto" /> Manual workarounds</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold">3-year total cost</td>
                  <td className="text-center py-4 px-4 font-semibold text-primary">~£500-1,500</td>
                  <td className="text-center py-4 px-4 font-semibold text-muted-foreground">~£2,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Setup Pricing</h2>
            <p className="text-muted-foreground text-lg">
              One-time installation fees. No hidden costs, no ongoing setup charges.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Solo Trader</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">£299</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">One-time setup</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Mobile card reader</li>
                  <li>• Invoice templates</li>
                  <li>• Basic training</li>
                  <li>• 30-day support</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-primary relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Growing Workshop</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">£499</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">One-time setup</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Counter terminal + reader</li>
                  <li>• Accounting integration</li>
                  <li>• Custom invoicing</li>
                  <li>• Job tracking setup</li>
                  <li>• 60-day support</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Multi-Site</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">£899</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">One-time setup</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Multiple locations</li>
                  <li>• Centralised reporting</li>
                  <li>• Fleet/van setup</li>
                  <li>• Advanced integrations</li>
                  <li>• 90-day support</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Monthly Support Plans */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Monthly Support Plans</h3>
            <p className="text-muted-foreground">
              Optional ongoing support after your included support period ends.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {supportPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`text-center hover:shadow-lg transition-shadow ${plan.popular ? 'border-primary relative' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Recommended</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-sm text-muted-foreground">From </span>
                    <span className="text-4xl font-bold text-primary">{plan.annualPrice}</span>
                    <span className="text-lg text-muted-foreground"> /mo</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Billed annually, per site.</p>
                  <p className="text-xs text-muted-foreground">{plan.monthlyPrice} if billed monthly</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <ul className="space-y-2 text-sm text-left">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trade POS Questions</h2>
            <p className="text-muted-foreground text-lg">
              Common questions from trades about Square POS.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Paid Faster?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a free quote for Square POS installation tailored to your trade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Quote
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/sectors/pos-systems">
                  View All POS Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
