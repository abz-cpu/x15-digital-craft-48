import { Link } from "react-router-dom";
import { 
  Store, 
  Barcode, 
  Package, 
  Bell,
  Building2,
  Users,
  ArrowRight,
  Check,
  X,
  Phone,
  ShoppingBag,
  Gift,
  CreditCard,
  RefreshCw,
  Shield,
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
    question: "Can Square handle barcode scanning?",
    answer: "Yes. Square integrates with USB and Bluetooth barcode scanners for fast checkout. You can scan existing barcodes or generate new ones through the Square Dashboard. We supply and configure compatible scanners as part of your installation."
  },
  {
    question: "How does inventory sync across locations?",
    answer: "Square's multi-location feature automatically syncs stock levels across all your branches in real-time. When you sell an item at one location, the central inventory updates instantly. You can also transfer stock between locations and track it all from one dashboard."
  },
  {
    question: "What about age-restricted products?",
    answer: "Square includes age verification prompts for products you flag as restricted (alcohol, tobacco, vapes, etc.). Staff receive on-screen reminders to check ID, and all verification attempts are logged for compliance purposes."
  },
  {
    question: "Can I track shrinkage and stock loss?",
    answer: "Yes. Square's inventory reports show discrepancies between expected and actual stock counts. You can run regular stock takes through the app and identify patterns in shrinkage. We configure custom reports during installation to highlight losses."
  },
  {
    question: "Do you integrate with e-commerce platforms?",
    answer: "Square syncs with Shopify, WooCommerce, and BigCommerce. Your online and in-store inventory stays unified—sell something online and your shop floor stock updates automatically. We can set up these integrations as part of your installation."
  },
  {
    question: "How long does retail POS installation take?",
    answer: "Most single-location retail setups take 1-2 days. Multi-store installations with inventory migration typically take 3-5 days. We work around your trading hours to minimise disruption."
  }
];

const retailFeatures = [
  {
    icon: Package,
    title: "Real-Time Inventory",
    description: "Know exact stock levels instantly. No more manual counts or spreadsheet chaos."
  },
  {
    icon: Barcode,
    title: "Barcode Scanning",
    description: "Speed up checkout with fast scanning. Works with existing barcodes or generate new ones."
  },
  {
    icon: Bell,
    title: "Low Stock Alerts",
    description: "Never run out of bestsellers. Get notified before stock hits critical levels."
  },
  {
    icon: Building2,
    title: "Multi-Location Sync",
    description: "Stock moves between branches seamlessly. One dashboard for all locations."
  },
  {
    icon: RefreshCw,
    title: "Supplier Management",
    description: "Track purchase orders, supplier costs, and reorder points in one place."
  },
  {
    icon: Users,
    title: "Loyalty Programmes",
    description: "Reward repeat customers automatically. Build loyalty without paper punch cards."
  }
];

const retailTypes = [
  {
    icon: Store,
    title: "High Street Shops",
    description: "Fashion, gifts, homeware, and general retail. Fast checkout and stock management."
  },
  {
    icon: ShoppingBag,
    title: "Convenience Stores",
    description: "Quick transactions, age verification, and grab-and-go efficiency."
  },
  {
    icon: Gift,
    title: "Boutiques & Galleries",
    description: "Customer profiles, wish lists, and personalised service tracking."
  }
];

const supportPlans = [
  {
    name: "Basic",
    annualPrice: "£25",
    monthlyPrice: "£30",
    description: "Essential support for smaller shops",
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
    description: "Priority support for growing retailers",
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
    description: "Full coverage for multi-location retail",
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

export default function RetailPos() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Retail POS Systems London | Square for Shops & Stores | L&D Digital"
        description="Professional Square POS installation for retail shops in London. Real-time inventory, barcode scanning, multi-location sync. Setup from £299, no contracts."
        keywords="retail pos london, shop epos system, boutique pos uk, inventory management pos, retail point of sale, square pos retail"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/sectors/retail-pos"
      />
      <ServiceSchema
        name="Retail POS System Installation"
        description="Professional Square POS setup for retail shops including inventory management, barcode scanning, and multi-location sync."
        url="https://digital.luminousanddeliver.co.uk/sectors/retail-pos"
        priceRange="£299-£899"
        serviceType="POS System Installation"
      />
      <FAQSchema faqs={faqItems} pageId="retail-pos" />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-cover bg-center" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
              <Store className="w-3 h-3 mr-1" />
              Retail Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Retail POS Systems That Track Every Item
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Stock disappearing? Manual counts taking hours? Square POS with real-time inventory tracking for shops across London.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <a href="https://wa.me/447424abortsignal" target="_blank" rel="noopener noreferrer">
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
              <p className="text-3xl md:text-4xl font-bold text-primary">73%</p>
              <p className="text-muted-foreground text-sm">of retailers overpay for legacy EPOS</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">£3,500+</p>
              <p className="text-muted-foreground text-sm">saved vs traditional systems</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">1-2 days</p>
              <p className="text-muted-foreground text-sm">typical installation</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Retail Businesses We Work With</h2>
            <p className="text-muted-foreground text-lg">
              From high street shops to multi-location chains, we configure Square for your specific retail needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {retailTypes.map((type, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Features Your Shop Actually Needs</h2>
            <p className="text-muted-foreground text-lg">
              Square POS configured specifically for retail operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {retailFeatures.map((feature, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hardware for Your Shop</h2>
            <p className="text-muted-foreground text-lg">
              Own your equipment outright—no leasing, no rental fees.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Square Register",
                price: "From £599",
                specs: ["Dual touchscreens", "Customer-facing display", "Built-in payments"],
                ideal: "High-volume retail",
              },
              {
                name: "Barcode Scanners",
                price: "From £79",
                specs: ["USB & wireless", "1D & 2D barcodes", "Fast scanning"],
                ideal: "Inventory management",
              },
              {
                name: "Receipt Printers",
                price: "From £199",
                specs: ["Thermal printing", "USB & Bluetooth", "Fast & reliable"],
                ideal: "Counter checkout",
              },
              {
                name: "Square Terminal",
                price: "From £149",
                specs: ["All-in-one device", "Built-in printer", "Portable option"],
                ideal: "Multi-purpose",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Square vs Legacy Retail EPOS</h2>
            <p className="text-muted-foreground text-lg">
              See why modern retailers are switching from expensive legacy systems.
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
                  <td className="py-4 px-4">Real-time inventory</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /> Included</td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-500 mx-auto" /> Extra module (£50+/mo)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4">Multi-location sync</td>
                  <td className="text-center py-4 px-4"><Check className="w-5 h-5 text-green-500 mx-auto" /> Included</td>
                  <td className="text-center py-4 px-4"><X className="w-5 h-5 text-red-500 mx-auto" /> £100+/mo per site</td>
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
                <CardTitle className="text-xl">Small Shop</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">£299</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">One-time setup</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Single terminal</li>
                  <li>• Basic inventory setup</li>
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
                <CardTitle className="text-xl">Growing Retail</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">£499</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">One-time setup</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Up to 3 terminals</li>
                  <li>• Full inventory migration</li>
                  <li>• Barcode setup</li>
                  <li>• Loyalty programme</li>
                  <li>• 60-day support</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Multi-Store</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">£899</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">One-time setup</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Multiple locations</li>
                  <li>• Centralised inventory</li>
                  <li>• E-commerce integration</li>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Retail POS Questions</h2>
            <p className="text-muted-foreground text-lg">
              Common questions from shop owners about Square POS.
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
              Ready to Upgrade Your Shop's POS?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a free quote for Square POS installation tailored to your retail business.
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
