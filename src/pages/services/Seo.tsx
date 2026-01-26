import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ArrowRight,
  Search,
  TrendingUp,
  BarChart3,
  Globe,
  Target,
  FileText,
  MapPin,
  Building2,
  Settings,
  PenTool,
  Sparkles,
  Clock,
  Star,
  Users,
  Zap,
  Phone,
  MessageCircle,
  Stethoscope,
  Wrench,
  UtensilsCrossed,
  Store,
  Home,
  Briefcase,
  Check,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Container } from "@/components/Container";
import { ServiceSchema } from "@/components/ServiceSchema";
import { HowToSchema } from "@/components/HowToSchema";
import { FAQSchema } from "@/components/FAQSchema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long until I see results?",
    answer:
      "Most local businesses see ranking improvements within 30-60 days, with significant traffic increases by 90 days. SEO is a long-term investment that compounds over time — the longer you invest, the greater the returns.",
  },
  {
    question: "Do I need the one-time setup, or can I just do monthly?",
    answer:
      "The one-time setup creates the foundation that makes monthly work effective. Without proper on-page SEO and technical fixes, monthly efforts won't deliver results. Think of it like building a house — you need a solid foundation first.",
  },
  {
    question: "What's included in the Google Business Profile optimisation?",
    answer:
      "Full profile setup or optimisation, category selection, service descriptions, photo guidelines, post templates, Q&A management, and review response strategy. We ensure your profile is fully optimised to appear in the local map pack.",
  },
  {
    question: "Do you guarantee rankings?",
    answer:
      "We never guarantee specific rankings — anyone who does is lying. Google's algorithm changes constantly. What we guarantee is effort, transparency, and a proven process that has worked for 47+ local businesses across London.",
  },
  {
    question: "Can I cancel the monthly retainer anytime?",
    answer:
      "Yes. No long-term contracts. We work month-to-month because we believe results should keep you, not contracts. If you're not seeing value, you can cancel anytime with 30 days' notice.",
  },
  {
    question: "What's the difference between local SEO and regular SEO?",
    answer:
      "Local SEO focuses on ranking in Google Maps and 'near me' searches for customers in your area. Regular SEO targets broader, often national keywords. For most small businesses, local SEO delivers faster, more tangible results.",
  },
  {
    question: "I already have a website. Do I need a new one?",
    answer:
      "Usually not. The Foundational SEO Setup works with your existing site. We only recommend a new website if yours is severely outdated, built on a platform that limits SEO, or has fundamental structural issues that can't be fixed.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We specialise in local London businesses: clinics, trades, restaurants, retail, property, and professional services. If customers search for you locally and your business has a physical presence or service area, we can help.",
  },
];

const targetClients = [
  {
    icon: Stethoscope,
    title: "Clinics & Healthcare",
    pain: "Losing patients to competitors who rank higher",
  },
  {
    icon: Wrench,
    title: "Trades & Home Services",
    pain: "Paying £50+ per lead on Checkatrade/Bark",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Hospitality",
    pain: "Not showing up in 'near me' searches",
  },
  {
    icon: Store,
    title: "Retail & Shops",
    pain: "Foot traffic declining despite good reviews",
  },
  {
    icon: Home,
    title: "Property & Estate Agents",
    pain: "Leads going to Rightmove instead of your site",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    pain: "Referrals drying up, need online visibility",
  },
];

const whatYouGet = [
  {
    icon: MapPin,
    title: "Local SEO",
    desc: "Google Maps, 'near me' searches, local pack rankings",
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    desc: "Titles, headings, meta descriptions, content optimisation",
  },
  {
    icon: Settings,
    title: "Technical SEO",
    desc: "Speed, mobile, Core Web Vitals, indexing fixes",
  },
  {
    icon: Building2,
    title: "Google Business Profile",
    desc: "Setup, optimisation, posts, Q&A management",
  },
  {
    icon: PenTool,
    title: "Content Strategy",
    desc: "Service pages, blogs, FAQs that actually rank",
  },
  {
    icon: BarChart3,
    title: "Monthly Reporting",
    desc: "Clear metrics, rankings, traffic, conversions",
  },
];

const comparisonData = [
  {
    factor: "Local focus",
    ld: "London specialists",
    diy: "Generic advice",
    others: "Often national focus",
  },
  {
    factor: "Setup time",
    ld: "7-10 days",
    diy: "Months of learning",
    others: "2-4 weeks",
  },
  {
    factor: "Monthly cost",
    ld: "£400-£1,200",
    diy: '"Free" (your time)',
    others: "£1,500-£5,000+",
  },
  {
    factor: "Contract",
    ld: "No lock-in",
    diy: "N/A",
    others: "6-12 month contracts",
  },
  {
    factor: "Communication",
    ld: "Direct access",
    diy: "N/A",
    others: "Account managers",
  },
  {
    factor: "Results focus",
    ld: "Local bookings",
    diy: "Traffic metrics",
    others: "Vanity metrics",
  },
];

const relatedServices = [
  {
    title: "Web Development",
    link: "/web-package",
    desc: "Need a new website first?",
  },
  {
    title: "Content Marketing",
    link: "/services/content-marketing",
    desc: "Ongoing blog & content strategy",
  },
  {
    title: "Digital Marketing",
    link: "/services/digital-marketing",
    desc: "Full marketing strategy",
  },
  {
    title: "Google Ads",
    link: "/contact",
    desc: "Paid search for immediate results",
  },
];

const Seo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Local SEO Services London | Get Found on Google | From £400/month | L&D Digital"
        description="Local SEO packages for London SMEs. One-time setup from £950, monthly retainers from £400. More calls, more bookings, more foot traffic. Free SEO audit."
        keywords="local SEO London, small business SEO UK, local SEO packages, affordable SEO agency London, Google Business Profile optimisation, local search ranking, SEO East London"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/services/seo"
      />
      <ServiceSchema
        name="Local SEO Services London"
        description="Local SEO packages for London SMEs. One-time setup from £950, monthly retainers from £400. Get found on Google Maps and local search results."
        url="https://digital.luminousanddeliver.co.uk/services/seo"
        priceRange="£400-£1,200/month"
        serviceType="Search Engine Optimization"
      />
      <HowToSchema
        name="How to Improve Your Local SEO with L&D Digital"
        description="Our proven 4-step local SEO process to help London businesses rank higher on Google"
        totalTime="P10D"
        estimatedCost={{ currency: "GBP", value: "950" }}
        steps={[
          {
            name: "Free SEO Audit",
            text: "We analyse your current SEO performance, competition, and identify quick wins within 24 hours",
          },
          {
            name: "Strategy Development",
            text: "Create a custom SEO plan based on your goals and local market within 2-3 days",
          },
          {
            name: "Implementation",
            text: "On-page fixes, Google Business Profile setup, and technical improvements over 7-10 days",
          },
          {
            name: "Ongoing Growth",
            text: "Monthly optimisation, content creation, and link building for continuous improvement",
          },
        ]}
      />
      <FAQSchema faqs={faqs} pageId="seo-services" />
      <Navigation darkHero />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.15"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          />
          <Container className="relative">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground mb-6">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">
                  Local SEO Specialists • London & East London
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Get Found Locally.{" "}
                <span className="text-primary">Get More Bookings.</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-200 mb-4 max-w-3xl mx-auto">
                We help London SMEs rank on Google Maps and local search — so
                customers nearby actually call or book you.
              </p>

              <p className="text-lg text-slate-300 mb-8">
                One-time setup from <span className="font-semibold">£950</span>{" "}
                • Monthly retainers from{" "}
                <span className="font-semibold">£400/month</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
                >
                  <Link to="/contact">
                    Get Free SEO Audit <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 text-lg px-8"
                >
                  <Link to="/quick-start">
                    <Phone className="mr-2 h-5 w-5" />
                    Book Discovery Call
                  </Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Trust Stats Bar */}
        <section className="py-6 bg-primary/10 border-y border-primary/20">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <TrendingUp className="h-6 w-6 text-primary mb-2" />
                <span className="font-bold text-secondary">
                  Page 1 in 90 Days
                </span>
                <span className="text-sm text-muted-foreground">
                  Average improvement
                </span>
              </div>
              <div className="flex flex-col items-center">
                <Star className="h-6 w-6 text-primary mb-2" />
                <span className="font-bold text-secondary">5-Star Rated</span>
                <span className="text-sm text-muted-foreground">
                  Customer satisfaction
                </span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="h-6 w-6 text-primary mb-2" />
                <span className="font-bold text-secondary">24-Hour Audit</span>
                <span className="text-sm text-muted-foreground">
                  Fast turnaround
                </span>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-6 w-6 text-primary mb-2" />
                <span className="font-bold text-secondary">
                  Local Businesses Only
                </span>
                <span className="text-sm text-muted-foreground">
                  Our speciality
                </span>
              </div>
            </div>
          </Container>
        </section>

        {/* Breadcrumb below hero */}
        <BreadcrumbNav />

        {/* Who This Is For */}
        <section className="py-16 md:py-20 bg-background">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                    Who This Is For
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    We specialise in local London businesses that rely on
                    customers finding them online.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {targetClients.map((client, i) => (
                    <Card key={i} className="hover-lift border-border/50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-primary/10">
                            <client.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-secondary mb-1">
                              {client.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {client.pain}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* One-Time Setup Packages */}
        <section className="py-16 md:py-20 bg-muted/30">
          <Container>
            <AnimatedSection animation="scale">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                    One-Time SEO Setup
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Build a solid foundation first. Every successful SEO
                    campaign starts here.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Foundational SEO Setup */}
                  <Card className="relative overflow-hidden border-2 border-border hover-lift">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Search className="h-4 w-4" />
                        Best for existing websites
                      </div>
                      <CardTitle className="text-2xl">
                        Foundational SEO Setup
                      </CardTitle>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-primary">
                          £950
                        </span>
                        <span className="text-muted-foreground">one-time</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">
                        Complete SEO foundation for businesses with an existing
                        website that needs a boost.
                      </p>
                      <ul className="space-y-3 mb-6">
                        {[
                          "Full SEO audit & competitor analysis",
                          "On-page optimisation (titles, meta, headings)",
                          "Local keyword research & implementation",
                          "Google Business Profile optimisation",
                          "Local schema markup (LocalBusiness)",
                          "Technical SEO fixes (speed, mobile, indexing)",
                          "Internal linking structure",
                          "Sitemap & robots.txt setup",
                          "CTA & conversion improvements",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-secondary">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                        <Clock className="h-4 w-4" />
                        <span>Delivery: 7-10 days</span>
                      </div>
                      <Button asChild className="w-full" size="lg">
                        <Link to="/contact">Get Started</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* AI-Powered Website + SEO Setup */}
                  <Card className="relative overflow-hidden border-2 border-primary hover-lift">
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-bold bg-amber-500 text-white rounded-full">
                        BEST VALUE
                      </span>
                    </div>
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Sparkles className="h-4 w-4" />
                        Best for new or outdated websites
                      </div>
                      <CardTitle className="text-2xl">
                        AI-Powered Website + SEO
                      </CardTitle>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-primary">
                          £1,500 - £2,500
                        </span>
                        <span className="text-muted-foreground">one-time</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">
                        Brand new SEO-optimised website plus complete SEO
                        foundation — everything you need.
                      </p>
                      <ul className="space-y-3 mb-6">
                        {[
                          "Everything in Foundational SEO Setup",
                          "Brand new SEO-optimised website (3-5 pages)",
                          "Mobile-first responsive design",
                          "Contact forms & booking integration",
                          "Speed-optimised hosting setup",
                          "Professional copywriting included",
                          "SSL certificate & security setup",
                          "Analytics & tracking setup",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-secondary">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                        <Clock className="h-4 w-4" />
                        <span>Delivery: 10-14 days</span>
                      </div>
                      <Button asChild className="w-full" size="lg">
                        <Link to="/contact">Get Started</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Monthly Retainer Packages */}
        <section className="py-16 md:py-20 bg-background">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                    Monthly SEO Retainers
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Ongoing optimisation that compounds over time. Choose the
                    level that matches your growth goals.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Local Starter */}
                  <Card className="relative overflow-hidden border-2 border-border hover-lift">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl">Local Starter</CardTitle>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-primary">
                          £400
                        </span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Basic local visibility for small businesses
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {[
                          "Google Business Profile management",
                          "Local keyword tracking (10 keywords)",
                          "Review management guidance",
                          "Minor on-page tweaks",
                          "Monthly performance report",
                          "Email support",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                            <span className="text-sm text-secondary">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full"
                        size="lg"
                      >
                        <Link to="/contact">Get Started</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Growth - Most Popular */}
                  <Card className="relative overflow-hidden border-2 border-primary hover-lift scale-105 shadow-xl">
                    <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-bold">
                      MOST POPULAR
                    </div>
                    <CardHeader className="pb-4 pt-12">
                      <CardTitle className="text-xl">Growth</CardTitle>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-primary">
                          £750
                        </span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Consistent local leads for growing businesses
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {[
                          "Everything in Local Starter",
                          "1 new service page OR blog post/month",
                          "Internal linking & content optimisation",
                          "Conversion rate improvements",
                          "Competitor monitoring",
                          "Priority support",
                          "Monthly strategy call",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                            <span className="text-sm text-secondary">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-full" size="lg">
                        <Link to="/contact">Get Started</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Dominator */}
                  <Card className="relative overflow-hidden border-2 border-border hover-lift">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl">Dominator</CardTitle>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-primary">
                          £1,200+
                        </span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Dominate local search for established businesses
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {[
                          "Everything in Growth",
                          "Link building (2-3 quality links/month)",
                          "Advanced technical SEO monitoring",
                          "Comprehensive competitor analysis",
                          "Multi-location optimisation",
                          "Dedicated account manager",
                          "Bi-weekly strategy calls",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                            <span className="text-sm text-secondary">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full"
                        size="lg"
                      >
                        <Link to="/contact">Get Started</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <p className="text-center text-muted-foreground mt-8 text-sm">
                  All monthly plans require the one-time Foundational SEO Setup
                  (£950) or can be bundled at a discount.
                </p>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* What You Get */}
        <section className="py-16 md:py-20 bg-muted/30">
          <Container>
            <AnimatedSection animation="scale">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                    What You Get
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Complete local SEO services to help you rank higher and get
                    more customers.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {whatYouGet.map((item, i) => (
                    <Card key={i} className="hover-lift border-border/50">
                      <CardContent className="p-6">
                        <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-secondary mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {item.desc}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-20 bg-background">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                    How It Works
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Our proven 4-step process to get you ranking locally.
                  </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    {
                      step: "1",
                      title: "Free Audit",
                      desc: "We analyse your SEO, competition & quick wins",
                      time: "24 hours",
                    },
                    {
                      step: "2",
                      title: "Strategy",
                      desc: "Custom plan based on your goals and local market",
                      time: "2-3 days",
                    },
                    {
                      step: "3",
                      title: "Implementation",
                      desc: "On-page fixes, GBP setup, technical improvements",
                      time: "7-10 days",
                    },
                    {
                      step: "4",
                      title: "Ongoing Growth",
                      desc: "Monthly optimisation, content, and link building",
                      time: "Continuous",
                    },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-semibold text-secondary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.desc}
                      </p>
                      <span className="text-xs font-medium text-primary">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Comparison Table */}
        <section className="py-16 md:py-20 bg-muted/30">
          <Container>
            <AnimatedSection animation="scale">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                    Why Choose L&D Digital?
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    See how we compare to DIY tools and other agencies.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full bg-card rounded-xl border border-border overflow-hidden">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left p-4 font-semibold text-secondary">
                          Factor
                        </th>
                        <th className="text-center p-4 font-semibold text-primary">
                          L&D Digital
                        </th>
                        <th className="text-center p-4 font-semibold text-muted-foreground">
                          DIY / Free Tools
                        </th>
                        <th className="text-center p-4 font-semibold text-muted-foreground">
                          Other Agencies
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, i) => (
                        <tr
                          key={i}
                          className="border-t border-border hover:bg-muted/30 transition-colors"
                        >
                          <td className="p-4 font-medium text-secondary">
                            {row.factor}
                          </td>
                          <td className="p-4 text-center">
                            <span className="inline-flex items-center gap-2 text-primary font-medium">
                              <Check className="h-4 w-4" />
                              {row.ld}
                            </span>
                          </td>
                          <td className="p-4 text-center text-muted-foreground">
                            {row.diy}
                          </td>
                          <td className="p-4 text-center text-muted-foreground">
                            {row.others}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-20 bg-background">
          <Container>
            <AnimatedSection animation="fade">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Common questions about our local SEO services.
                  </p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="bg-card rounded-lg border border-border px-6"
                    >
                      <AccordionTrigger className="text-left font-medium text-secondary hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Related Services */}
        <section className="py-16 md:py-20 bg-muted/30">
          <Container>
            <AnimatedSection animation="scale">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                    Related Services
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Complement your SEO with these services.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {relatedServices.map((service, i) => (
                    <Link
                      key={i}
                      to={service.link}
                      className="group block p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all"
                    >
                      <h3 className="font-semibold text-secondary group-hover:text-primary transition-colors mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {service.desc}
                      </p>
                      <ArrowRight className="h-4 w-4 text-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-primary via-primary/90 to-slate-900">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Found Locally?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get a free SEO audit and see exactly where you can improve. No
                obligation, no hard sell.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 text-lg px-8"
                >
                  <Link to="/contact">
                    Get Free SEO Audit <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 text-lg px-8"
                >
                  <a
                    href="https://wa.me/447404294518"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Seo;
