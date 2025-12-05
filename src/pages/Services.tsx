// src/pages/Services.tsx

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Container } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe2,
  Smartphone,
  Bot,
  MessageSquare,
  PhoneCall,
  Sparkles,
  Shield,
  Wrench,
  Cpu,
  LayoutTemplate,
  Brush,
  Headset,
  Zap,
} from "lucide-react";

const Services = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Simple fade-in observer for .fade-in-section blocks
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "200px",
      },
    );

    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => observerRef.current?.observe(section));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Services | X15 Digital"
        description="Websites, apps, and AI systems that actually get you clients. Choose from web packages, AI automation, and ongoing support – all built for UK businesses."
        canonicalUrl="https://x15.digital/services"
      />

      <Navigation />

      <main className="flex-1">
        {/* HERO – Services Hub */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          {/* Soft background accents */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(45,212,191,0.18),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_100%,rgba(59,130,246,0.16),transparent_55%)]" />

          <Container>
            <div className="relative max-w-3xl mx-auto text-center fade-in-section">
              <Badge className="mb-4 bg-white/5 text-emerald-200 border-emerald-400/30">
                Websites · Apps · AI Systems
              </Badge>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Websites, Apps &amp; AI that actually get you clients.
              </h1>

              <p className="text-base md:text-lg text-slate-200/90 mb-6">
                Choose a clear package or mix-and-match services. No bloated retainers, no confusing jargon — just
                systems that help your business run smoother and convert more leads.
              </p>

              {/* Micro trust + booking state */}
              <p className="text-xs md:text-sm text-emerald-200/90 mb-8">
                Currently booking new projects <span className="font-semibold">2–3 weeks in advance</span>.
              </p>

              {/* Hero CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 shadow-md hover:shadow-lg"
                >
                  <Link to="/web-package">
                    View Web Packages
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/60 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link to="/ai-package">
                    View AI Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* 1. CHOOSE YOUR PATH – 3 Main Tiles */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-10 fade-in-section">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Choose your starting point</h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Most clients start with a website or app, then add AI and support once they&apos;re live. You can keep
                it simple or build a full system over time.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto fade-in-section">
              {/* Websites & Apps */}
              <AnimatedSection staggerIndex={0} animation="up">
                <Card className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-teal-600/10 mb-3">
                      <Globe2 className="h-5 w-5 text-teal-700" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-secondary">Websites &amp; Apps</CardTitle>
                    <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground mt-1">
                      Design · Build · Launch
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-muted-foreground">
                    <p>
                      From one-page sites to full web applications — built to look premium and convert visitors into
                      enquiries.
                    </p>
                    <ul className="space-y-1">
                      <li>• One-time payment, you own everything</li>
                      <li>• Mobile-perfect, fast, SEO-friendly</li>
                      <li>• Launch in 2–4 weeks (on average)</li>
                    </ul>

                    <Button asChild className="w-full mt-2">
                      <Link to="/web-package">
                        View Web Packages
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* AI Automation */}
              <AnimatedSection staggerIndex={1} animation="up">
                <Card className="h-full hover-lift border-primary/40 shadow-primary/20 shadow-sm">
                  <CardHeader className="pb-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 mb-3">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-secondary">AI Automation</CardTitle>
                    <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground mt-1">
                      Chatbots · Receptionists · Workflows
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-muted-foreground">
                    <p>
                      AI that answers questions, books appointments, and follows up with leads — while you&apos;re
                      offline.
                    </p>
                    <ul className="space-y-1">
                      <li>• Save 20+ hours per week</li>
                      <li>• Works with any existing website</li>
                      <li>• Live in as little as 48 hours</li>
                    </ul>

                    <Button asChild className="w-full mt-2" variant="outline">
                      <Link to="/ai-package">
                        View AI Solutions
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Support & Care */}
              <AnimatedSection staggerIndex={2} animation="up">
                <Card className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/10 mb-3">
                      <Shield className="h-5 w-5 text-emerald-700" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-secondary">Maintenance &amp; Support</CardTitle>
                    <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground mt-1">
                      After Launch · Peace of Mind
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-muted-foreground">
                    <p>Stay secure, up-to-date, and bug-free without touching the tech yourself.</p>
                    <ul className="space-y-1">
                      <li>• Updates, backups &amp; monitoring</li>
                      <li>• Priority fixes when something breaks</li>
                      <li>• Works even if we didn&apos;t build your site</li>
                    </ul>

                    <Button asChild className="w-full mt-2" variant="outline">
                      <Link to="/contact">
                        Discuss Support Options
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* 2. WEB & APP SERVICES – with anchors for hash links */}
        <section
          id="web-services"
          className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/40 border-t border-border/60"
        >
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-10 fade-in-section">
              <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">Websites, Apps &amp; Brand</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
                Web &amp; Brand services you can mix and match
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Start lean or go all-in — everything here can be combined with your main web package or used
                individually.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto fade-in-section">
              {/* App Development */}
              <AnimatedSection staggerIndex={0} animation="scale">
                <Card id="app-development" className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-9 h-9 rounded-lg bg-primary/10 items-center justify-center mb-2">
                      <Smartphone className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base font-semibold text-secondary">App Development</CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">
                      Native &amp; hybrid mobile apps for iOS and Android.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      From idea to App Store / Play Store — strategy, development, testing, and launch handled for you.
                    </p>
                    <p className="text-xs font-semibold text-secondary">
                      Best for: Products, tools &amp; on-the-go users
                    </p>
                    <Button asChild size="sm" className="mt-1 w-full">
                      <Link to="/contact">
                        Discuss an App
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Personalised Apps */}
              <AnimatedSection staggerIndex={1} animation="scale">
                <Card id="personalised-apps" className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-9 h-9 rounded-lg bg-emerald-600/10 items-center justify-center mb-2">
                      <Cpu className="h-5 w-5 text-emerald-700" />
                    </div>
                    <CardTitle className="text-base font-semibold text-secondary">
                      Personalised Tools &amp; Mini Apps
                    </CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">
                      Custom calculators, dashboards, trackers &amp; internal tools.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Invoices tracker, simple CRM, booking helper — lightweight tools built around how you actually
                      work.
                    </p>
                    <p className="text-xs font-semibold text-secondary">Best for: Solo founders &amp; small teams</p>
                    <Button asChild size="sm" className="mt-1 w-full" variant="outline">
                      <Link to="/contact">
                        Talk about a custom tool
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Landing Pages */}
              <AnimatedSection staggerIndex={2} animation="scale">
                <Card id="landing-pages" className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-9 h-9 rounded-lg bg-teal-600/10 items-center justify-center mb-2">
                      <LayoutTemplate className="h-5 w-5 text-teal-700" />
                    </div>
                    <CardTitle className="text-base font-semibold text-secondary">Landing Page Creation</CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">High-converting pages for one clear offer.</p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>Perfect for ads, limited campaigns, or one flagship service.</p>
                    <p className="text-xs font-semibold text-secondary">Best for: Launches &amp; paid traffic</p>
                    <Button asChild size="sm" className="mt-1 w-full" variant="outline">
                      <Link to="/web-package">
                        See Web Packages
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Logo Design */}
              <AnimatedSection staggerIndex={3} animation="scale">
                <Card id="logo-design" className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-9 h-9 rounded-lg bg-amber-500/10 items-center justify-center mb-2">
                      <Brush className="h-5 w-5 text-amber-600" />
                    </div>
                    <CardTitle className="text-base font-semibold text-secondary">Logo Design</CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">
                      Clean, memorable logos that work across web &amp; print.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>2–3 concepts, refinements, and social-ready exports.</p>
                    <p className="text-xs font-semibold text-secondary">Best for: New brands &amp; rebrands</p>
                    <Button asChild size="sm" className="mt-1 w-full" variant="outline">
                      <Link to="/contact">
                        Discuss branding
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Branding */}
              <AnimatedSection staggerIndex={4} animation="scale">
                <Card id="branding" className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-9 h-9 rounded-lg bg-indigo-500/10 items-center justify-center mb-2">
                      <Sparkles className="h-5 w-5 text-indigo-600" />
                    </div>
                    <CardTitle className="text-base font-semibold text-secondary">
                      Branding &amp; Visual System
                    </CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">
                      Colours, typography, and visuals that stay consistent.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>Build a recognisable, professional look across web, socials, and print.</p>
                    <p className="text-xs font-semibold text-secondary">Best for: Businesses ready to level up</p>
                    <Button asChild size="sm" className="mt-1 w-full" variant="outline">
                      <Link to="/contact">
                        Plan a brand refresh
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* IT Support */}
              <AnimatedSection staggerIndex={5} animation="scale">
                <Card id="it-support" className="h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-9 h-9 rounded-lg bg-slate-500/10 items-center justify-center mb-2">
                      <Headset className="h-5 w-5 text-slate-700" />
                    </div>
                    <CardTitle className="text-base font-semibold text-secondary">IT Support &amp; Care</CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">
                      Tech support for small businesses without an in-house team.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>Lightweight IT help for hosting, email, domains, and basic troubleshooting.</p>
                    <p className="text-xs font-semibold text-secondary">Best for: Small local businesses</p>
                    <Button asChild size="sm" className="mt-1 w-full" variant="outline">
                      <Link to="/contact">
                        Ask about IT support
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </Container>
        </section>

        {/* 3. AI AUTOMATION PREVIEW (links into AiPackage) */}
        <section
          id="ai-automation"
          className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white border-t border-slate-800"
        >
          <Container>
            {/* Scenario card */}
            <div className="max-w-3xl mx-auto mb-10 fade-in-section">
              <div className="bg-slate-900/70 border border-slate-700/80 rounded-2xl p-8 md:p-10 text-center shadow-lg">
                <p className="text-lg text-slate-200 mb-3">
                  Your customer texts at 11 PM.
                  <br />
                  Your phone rings during dinner.
                  <br />
                  Your inbox has 47 unread emails.
                </p>
                <p className="text-xl md:text-2xl font-semibold text-white mb-4">
                  What if you had a digital assistant that works 24/7?
                </p>
                <p className="text-sm text-slate-300">
                  Already have a website? Add AI automation.
                  <br />
                  Works with <span className="font-semibold">any</span> website — yours or ours.
                </p>

                {/* Soft arrow to next section */}
                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
                  <span>See what AI can handle for you</span>
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-600">
                    ↓
                  </span>
                </div>
              </div>
            </div>

            {/* 3 main AI solution cards */}
            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto fade-in-section">
              {/* AI Chatbot */}
              <AnimatedSection staggerIndex={0} animation="up">
                <Card className="bg-slate-900 border-slate-700/80 h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-9 h-9 rounded-lg bg-emerald-500/15 items-center justify-center mb-2">
                      <MessageSquare className="h-5 w-5 text-emerald-300" />
                    </div>
                    <CardTitle className="text-base font-semibold text-white">AI Website Chatbot</CardTitle>
                    <p className="text-xs text-slate-400 mt-1">24/7 answers on your site</p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-slate-300">
                    <p>Instant replies to common questions and automatic lead capture.</p>
                    <p className="text-xs font-semibold text-emerald-300">
                      Best for: Local services, clinics, salons, trades
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* AI Receptionist */}
              <AnimatedSection staggerIndex={1} animation="up">
                <Card className="bg-slate-900 border-slate-700/80 h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-9 h-9 rounded-lg bg-cyan-500/15 items-center justify-center mb-2">
                      <PhoneCall className="h-5 w-5 text-cyan-300" />
                    </div>
                    <CardTitle className="text-base font-semibold text-white">AI Phone Receptionist</CardTitle>
                    <p className="text-xs text-slate-400 mt-1">Never miss a call again</p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-slate-300">
                    <p>Answers calls, books appointments, and sends summaries to you.</p>
                    <p className="text-xs font-semibold text-cyan-300">
                      Best for: Busy owners who can&apos;t live on the phone
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Custom AI */}
              <AnimatedSection staggerIndex={2} animation="up">
                <Card className="bg-slate-900 border-slate-700/80 h-full hover-lift">
                  <CardHeader className="pb-3">
                    <div className="inline-flex w-9 h-9 rounded-lg bg-indigo-500/15 items-center justify-center mb-2">
                      <Zap className="h-5 w-5 text-indigo-300" />
                    </div>
                    <CardTitle className="text-base font-semibold text-white">Custom AI Automation</CardTitle>
                    <p className="text-xs text-slate-400 mt-1">Email triage, admin &amp; workflows</p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-slate-300">
                    <p>AI that plugs into your existing tools and removes boring admin.</p>
                    <p className="text-xs font-semibold text-indigo-300">Best for: Teams drowning in manual work</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* CTA to AI page */}
            <div className="mt-10 text-center fade-in-section">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link to="/ai-package">
                  See Full AI Automation Packages
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* 4. SUPPORT & MAINTENANCE – short version */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary/5 border-t border-primary/10">
          <Container>
            <div className="max-w-4xl mx-auto fade-in-section">
              <Card className="border-2 border-primary/20 bg-background">
                <CardContent className="p-8 md:p-10 flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Wrench className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-xs uppercase tracking-[0.16em] text-primary mb-2 font-semibold">
                      Recommended for all websites &amp; apps
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-2">Support &amp; Maintenance</h3>
                    <p className="text-2xl font-bold text-primary mb-3">From £25/month</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Keep your website or app secure, fast, and up-to-date — without worrying about updates, backups,
                      or bugs.
                    </p>

                    <div className="grid md:grid-cols-2 gap-2 mb-4 text-sm text-muted-foreground">
                      <p>• Regular updates &amp; security patches</p>
                      <p>• Weekly backups &amp; uptime checks</p>
                      <p>• Priority fixes when something breaks</p>
                      <p>• Content tweaks &amp; small changes included</p>
                    </div>

                    <p className="text-xs text-muted-foreground mb-4">
                      Works with sites we build and sites built elsewhere.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                      <Button asChild>
                        <Link to="/contact">
                          Add Maintenance &amp; Support
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline">
                        <a
                          href="https://wa.me/447424062513?text=Hi%2C%20I%27m%20interested%20in%20Support%20%26%20Maintenance%20for%20my%20website"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Chat on WhatsApp
                          <MessageSquare className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* 5. X15 PC BUILDERS STRIP */}
        <section className="py-10 md:py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-slate-50">
          <Container>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4 fade-in-section">
              <div className="flex-1 text-center md:text-left">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400 mb-1">
                  Sister brand · Custom PCs &amp; Repairs
                </p>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Need a custom PC or repair work?</h3>
                <p className="text-sm text-slate-300">
                  For high-performance gaming rigs, creator builds, and PC repair in the UK, we run{" "}
                  <span className="font-semibold">X15 PC Builders</span> as a dedicated service.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button asChild variant="outline" className="border-slate-500 text-slate-50 hover:bg-slate-800">
                  <a href="https://x15pcbuilders.co.uk" target="_blank" rel="noopener noreferrer">
                    Visit X15 PC Builders
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* 6. FINAL CTA */}
        <section className="relative py-16 md:py-20 bg-[#D9F7F4] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.06),transparent_55%)]" />
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_60%,hsl(var(--accent)/0.06),transparent_55%)]" />

          <Container size="narrow" className="relative fade-in-section">
            <div className="text-center mb-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-semibold tracking-wider uppercase">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span>Quick plan in under 24 hours</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink leading-tight">
                Not sure which{" "}
                <span className="bg-gradient-to-r from-primary via-teal-500 to-accent bg-clip-text text-transparent">
                  service
                </span>{" "}
                you actually need?
              </h2>

              <p className="text-base md:text-lg text-ink-light max-w-2xl mx-auto">
                Tell me where your business is now, and I&apos;ll recommend a simple path — website, AI, or both — with
                a clear price and timeline.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Link
                to="/quick-start"
                className="group flex items-center justify-center gap-2
                h-12 px-6 text-sm font-semibold rounded-xl
                bg-gradient-to-r from-primary via-teal-500 to-primary
                text-primary-foreground shadow-md hover:shadow-lg
                hover:scale-[1.015] active:scale-[0.97]
                transition-all"
              >
                Take 30-second Project Quiz
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="group flex items-center justify-center gap-2
                h-12 px-6 text-sm font-semibold rounded-xl
                border border-border bg-background/70
                text-ink hover:border-primary hover:bg-primary/5 hover:text-primary
                shadow-sm hover:shadow-md hover:scale-[1.015]
                active:scale-[0.97] transition-all"
              >
                Book Free Call
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <p className="text-xs text-ink/80 text-center">
              No pressure, no hard sell — just a clear plan for your website, app, or AI system.
            </p>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
