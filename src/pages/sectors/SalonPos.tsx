import { Link } from "react-router-dom";
import { 
  Scissors, 
  Calendar, 
  User, 
  Clock,
  DollarSign,
  ShoppingBag,
  ArrowRight,
  Check,
  X,
  Phone,
  Sparkles,
  Heart,
  MessageCircle
} from "lucide-react";
import { SEO } from "@/components/SEO";
import Navigation from "@/components/Navigation";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
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
    question: "Can clients book online through Square?",
    answer: "Yes. Square Appointments lets clients book 24/7 through a customisable booking page. They can select services, choose their preferred stylist, and see real-time availability. Confirmations and reminders are sent automatically via email or text."
  },
  {
    question: "How does staff commission work?",
    answer: "Square tracks each service by staff member, making commission calculations automatic. You set commission rates per employee or per service, and the system generates reports showing exactly what each team member has earned. No spreadsheets needed."
  },
  {
    question: "Can I take deposits for bookings?",
    answer: "Absolutely. Square lets you require deposits for specific services or new clients. You set the amount (fixed or percentage), and clients pay when booking. Deposits reduce no-shows and secure your time."
  },
  {
    question: "What about product retail sales?",
    answer: "Square handles retail seamlessly alongside services. You can sell hair products, beauty items, and accessories at the same terminal. Inventory tracks separately from services, and you get reports showing service vs retail revenue."
  },
  {
    question: "Do you support multiple branches?",
    answer: "Yes. Square's multi-location features work well for salon groups. Staff can work across locations, clients can book at any branch, and you get consolidated reporting. We configure everything centrally during installation."
  },
  {
    question: "How long does salon POS installation take?",
    answer: "Most single-salon setups take 1 day. If you're migrating client data from an existing system, allow 2-3 days. We work around your appointments to minimise disruption to your bookings."
  }
];

const salonFeatures = [
  {
    icon: Calendar,
    title: "Online Booking",
    description: "Clients book 24/7 through your custom booking page. No more phone tag."
  },
  {
    icon: User,
    title: "Client Profiles",
    description: "Colour formulas, preferences, allergies—everything stored for each client."
  },
  {
    icon: Clock,
    title: "Staff Scheduling",
    description: "Manage who's working when. Staff see their appointments in real-time."
  },
  {
    icon: DollarSign,
    title: "Commission Tracking",
    description: "Automated calculations based on your rules. No manual spreadsheets."
  },
  {
    icon: ShoppingBag,
    title: "Retail Add-ons",
    description: "Sell products at checkout. One transaction for services and retail."
  },
  {
    icon: Heart,
    title: "Deposit Collection",
    description: "Secure bookings upfront. Reduce no-shows with required deposits."
  }
];

const salonTypes = [
  {
    icon: Scissors,
    title: "Hair Salons",
    description: "Walk-ins and appointments, colour formulas, retail products, and commission tracking."
  },
  {
    icon: Sparkles,
    title: "Spas & Wellness",
    description: "Treatment packages, gift cards, therapist scheduling, and membership management."
  },
  {
    icon: User,
    title: "Barbershops",
    description: "Quick cuts, loyalty programmes, walk-in queues, and product sales."
  }
];

const supportPlans = [
  {
    name: "Basic",
    annualPrice: "£25",
    monthlyPrice: "£30",
    description: "Essential support for smaller salons",
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
    description: "Priority support for growing salons",
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
    description: "Full coverage for salon groups",
    features: [
      "Dedicated account manager",
      "4-hour response SLA",
      "On-site visits included",
      "Annual hardware servicing",
      "Priority feature requests",
      "Multi-location coordination"
    ]
  }
];

export default function SalonPos() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Salon POS Systems London | Booking & Payments for Beauty | L&D Digital"
        description="Square POS installation for salons, spas, and barbershops in London. Online booking, client profiles, commission tracking. Setup from £299, no contracts."
        keywords="salon pos london, beauty spa epos, barbershop pos system, appointment booking pos, hair salon point of sale, square appointments"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/sectors/salon-pos"
      />
      <ServiceSchema
        name="Salon POS System Installation"
        description="Professional Square POS setup for salons and spas including online booking, client management, and commission tracking."
        url="https://digital.luminousanddeliver.co.uk/sectors/salon-pos"
        priceRange="£299-£899"
        serviceType="POS System Installation"
      />
      <FAQSchema faqs={faqItems} pageId="salon-pos" />
      <Navigation />
      <BreadcrumbNav />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-cover bg-center" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
              <Scissors className="w-3 h-3 mr-1" />
              Beauty & Wellness
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Salon POS With Built-In Booking
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Stop juggling paper diaries and card machines. One system for appointments, payments, and client history.
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
              <p className="text-3xl md:text-4xl font-bold text-primary">40%</p>
              <p className="text-muted-foreground text-sm">reduction in no-shows with deposits</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">£3,500+</p>
              <p className="text-muted-foreground text-sm">saved vs legacy systems</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">24/7</p>
              <p className="text-muted-foreground text-sm">online booking availability</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Beauty Businesses We Work With</h2>
            <p className="text-muted-foreground text-lg">
              From single-chair barbershops to multi-location salon groups.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {salonTypes.map((type, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Features Your Salon Actually Needs</h2>
            <p className="text-muted-foreground text-lg">
              Square POS configured specifically for beauty and wellness.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {salonFeatures.map((feature, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hardware for Your Salon</h2>
            <p className="text-muted-foreground text-lg">
              Own your equipment outright—no leasing, no rental fees.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Square Terminal",
                price: "From £149",
                specs: ["Built-in receipt printer", "All-day battery", "Countertop or mobile"],
                ideal: "Reception desk",
              },
              {
                name: "Square Stand",
                price: "From £99",
                specs: ["Swivels for signatures", "Sleek countertop design", "USB peripherals"],
                ideal: "Check-in stations",
              },
              {
                name: "Receipt Printers",
                price: "From £199",
                specs: ["Fast thermal printing", "USB & Bluetooth", "Compact design"],
                ideal: "Appointment receipts",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Square vs Legacy Salon EPOS</h2>
            <p className="text-muted-foreground text-lg">
              See why modern salons are switching from expensive legacy systems.
            </p>
          </div>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">Square POS</th>
                  <th className="text-center py-4 px-4 font-semibold text-muted-foreground">Legacy EPOS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">Hardware ownership</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /> Buy once, own it</td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-500 mx-auto" /> Leased (£150+/mo)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">Online booking</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /> Included free</td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-500 mx-auto" /> Extra module (£30+/mo)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">Contract length</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /> No contract</td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-500 mx-auto" /> 3-5 years</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">Exit fees</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /> £0</td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-500 mx-auto" /> £2,000+</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">Client management</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /> Included</td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-500 mx-auto" /> Extra (£25+/mo)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold">3-year total cost</td>
                  <td className="text-center py-4 px-4 font-semibold text-primary">~£1,500-2,500</td>
                  <td className="text-center py-4 px-4 font-semibold text-muted-foreground">~£5,000+</td>
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
                <CardTitle className="text-xl">Single Chair</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">£299</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">One-time setup</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Single terminal</li>
                  <li>• Basic booking setup</li>
                  <li>• Staff training</li>
                  <li>• 30-day support</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-primary relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Growing Salon</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">£499</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">One-time setup</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Up to 3 terminals</li>
                  <li>• Client data migration</li>
                  <li>• Commission setup</li>
                  <li>• Online booking</li>
                  <li>• 60-day support</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Multi-Branch</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">£899</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">One-time setup</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Multiple locations</li>
                  <li>• Centralised booking</li>
                  <li>• Staff across branches</li>
                  <li>• Advanced reporting</li>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Salon POS Questions</h2>
            <p className="text-muted-foreground text-lg">
              Common questions from salon owners about Square POS.
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
              Ready to Upgrade Your Salon's POS?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a free quote for Square POS installation tailored to your beauty business.
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
