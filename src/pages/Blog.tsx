import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Bot, TrendingUp, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActionMenu from "@/components/FloatingActionMenu";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { SEO } from "@/components/SEO";

import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import blogWebDev from "@/assets/blog-web-dev.png";
import blogAiAutomation from "@/assets/blog-ai-automation.png";
import blogOffshoreRisks from "@/assets/blog-offshore-risks.png";
import blogStratfordWebDev from "@/assets/blog-stratford-web-developer.png";
import blogEastLondonTips from "@/assets/blog-east-london-website-tips.png";
import blogHackneySeo from "@/assets/blog-hackney-shoreditch-seo.png";
import blogPersonalisedApps from "@/assets/blog-personalised-apps.png";

type Category = "all" | "web-dev" | "ai-automation" | "business" | "case-studies";

const getCategoryBadgeClass = (category: Category) => {
  switch (category) {
    case "web-dev":
      return "bg-teal-600 text-white";
    case "ai-automation":
      return "bg-violet-600 text-white";
    case "business":
      return "bg-amber-600 text-white";
    case "case-studies":
      return "bg-sky-600 text-white";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const blogPosts = [
    {
      id: 1,
      slug: "cheap-websites",
      title: "Why Cheap Websites Cost More in the Long Run",
      category: "web-dev" as Category,
      categoryLabel: "Web Development",
      excerpt:
        "That £50 website builder might seem like a bargain, but hidden platform fees, lost time, and migration costs quickly turn it into a £2,000 problem.",
      readTime: 5,
      date: "2025-03-15",
      author: "Abdul M Taher",
      image: blogWebDev,
    },
    {
      id: 2,
      slug: "offshore-development-risks",
      title: "The Hidden Dangers of Hiring Offshore Web Developers",
      category: "web-dev" as Category,
      categoryLabel: "Web Development",
      excerpt:
        "That £200 developer in India might seem tempting, but one GDPR mistake could cost £17.5M. Learn why UK-based development protects your business.",
      readTime: 6,
      date: "2025-03-20",
      author: "Abdul M Taher",
      image: blogOffshoreRisks,
    },
    {
      id: 3,
      slug: "ai-for-small-businesses",
      title: "How Small Businesses Can Use AI Without Being Techy",
      category: "ai-automation" as Category,
      categoryLabel: "AI Automation",
      excerpt:
        "AI automation isn't just for tech companies. See how UK small businesses use chatbots and voice agents to save 10–20 hours per week without being technical.",
      readTime: 7,
      date: "2025-03-10",
      author: "Abdul M Taher",
      image: blogAiAutomation,
    },
    {
      id: 4,
      slug: "best-web-developer-stratford-2026",
      title: "Best Web Developer in Stratford: What to Look for in 2026",
      category: "web-dev" as Category,
      categoryLabel: "Web Development",
      excerpt:
        "Looking for a web developer in Stratford? Learn what separates great developers from the rest, and how to choose the right partner for your Olympic Park area business.",
      readTime: 8,
      date: "2026-01-05",
      author: "Abdul M Taher",
      image: blogStratfordWebDev,
    },
    {
      id: 5,
      slug: "website-design-tips-east-london",
      title: "Website Design Tips for East London Small Businesses",
      category: "web-dev" as Category,
      categoryLabel: "Web Development",
      excerpt:
        "Practical website design advice for small businesses in Stratford, Ilford, Hackney, and across East London. Build trust and convert more local customers.",
      readTime: 7,
      date: "2026-01-08",
      author: "Abdul M Taher",
      image: blogEastLondonTips,
    },
    {
      id: 6,
      slug: "local-seo-hackney-shoreditch",
      title: "Local SEO Guide: How Hackney & Shoreditch Businesses Get Found",
      category: "business" as Category,
      categoryLabel: "Business Growth",
      excerpt:
        "Complete local SEO guide for businesses in Hackney, Shoreditch, and East London. Rank higher on Google and attract more local customers to your business.",
      readTime: 9,
      date: "2026-01-09",
      author: "Abdul M Taher",
      image: blogHackneySeo,
    },
    {
      id: 7,
      slug: "personalised-apps-struggling-business-owners",
      title: "5 Personalised Apps Every Struggling Business Owner Needs in 2026",
      category: "ai-automation" as Category,
      categoryLabel: "AI Automation",
      excerpt:
        "Order trackers, invoice managers, and financial dashboards. Learn how UK small business owners escape spreadsheet chaos with custom apps from £500.",
      readTime: 8,
      date: "2026-01-10",
      author: "Abdul M Taher",
      image: blogPersonalisedApps,
    },
    {
      id: 8,
      slug: "restaurant-website-design-east-london",
      title: "Why Your Restaurant Needs a Professional Website in 2026",
      category: "business" as Category,
      categoryLabel: "Business Growth",
      excerpt:
        "83% of diners check online before visiting. If your restaurant doesn't have a professional website with an online menu and booking system, you're losing covers every day.",
      readTime: 6,
      date: "2026-02-10",
      author: "Abdul M Taher",
      image: blogWebDev,
    },
    {
      id: 9,
      slug: "ai-chatbots-east-london-trades",
      title: "AI Chatbots for East London Trades: Plumbers, Electricians & Builders",
      category: "ai-automation" as Category,
      categoryLabel: "AI Automation",
      excerpt:
        "You can't answer calls when you're under a sink. AI chatbots capture leads 24/7, qualify enquiries, and book jobs automatically — starting from £50/month.",
      readTime: 7,
      date: "2026-02-18",
      author: "Abdul M Taher",
      image: blogAiAutomation,
    },
    {
      id: 10,
      slug: "google-maps-local-seo-east-london",
      title: "How to Get Found on Google Maps in East London",
      category: "web-dev" as Category,
      categoryLabel: "Web Development",
      excerpt:
        "A step-by-step guide for East London businesses to rank higher on Google Maps, collect reviews, and appear in near me searches across E1–E17 and Ilford.",
      readTime: 8,
      date: "2026-03-01",
      author: "Abdul M Taher",
      image: blogEastLondonTips,
    },
    {
      id: 11,
      slug: "shopify-vs-woocommerce-2026",
      title: "Shopify vs WooCommerce: Which Should You Choose in 2026?",
      category: "web-dev" as Category,
      categoryLabel: "Web Development",
      excerpt:
        "An honest comparison for UK small businesses. We break down real costs, ease of use, SEO differences, and which platform suits which type of business.",
      readTime: 9,
      date: "2026-03-10",
      author: "Abdul M Taher",
      image: blogWebDev,
    },
    {
      id: 12,
      slug: "website-costing-you-customers",
      title: "5 Signs Your Website Is Costing You Customers Right Now",
      category: "business" as Category,
      categoryLabel: "Business Growth",
      excerpt:
        "A slow load, broken mobile layout, or missing call-to-action could be silently losing you thousands of pounds a month. Here's how to spot — and fix — the 5 biggest problems.",
      readTime: 5,
      date: "2026-03-18",
      author: "Abdul M Taher",
      image: blogWebDev,
    },
    {
      id: 13,
      slug: "whatsapp-vs-ai-chatbot",
      title: "WhatsApp Business vs AI Chatbot: Which Is Right for Your Business?",
      category: "ai-automation" as Category,
      categoryLabel: "AI Automation",
      excerpt:
        "Both are useful. But only one works without you. We compare WhatsApp Business and AI chatbots honestly, with costs and a guide to choosing the right tool.",
      readTime: 7,
      date: "2026-03-25",
      author: "Abdul M Taher",
      image: blogAiAutomation,
    },
    {
      id: 14,
      slug: "web-design-barbers-salons-east-london",
      title: "Web Design for Barbers & Salons in East London",
      category: "web-dev" as Category,
      categoryLabel: "Web Development",
      excerpt:
        "Online booking, gallery portfolios, and Google Maps visibility for East London barbers and salons. Real examples from Stratford, Hackney, and Walthamstow.",
      readTime: 6,
      date: "2026-04-01",
      author: "Abdul M Taher",
      image: blogEastLondonTips,
    },
    {
      id: 15,
      slug: "mobile-friendly-website-cost",
      title: "The True Cost of Not Having a Mobile-Friendly Website in 2026",
      category: "business" as Category,
      categoryLabel: "Business Growth",
      excerpt:
        "64% of web searches happen on mobile. If your website doesn't work on phones, you could be losing £14,000+ per year in missed customers. Here's the real maths.",
      readTime: 6,
      date: "2026-04-05",
      author: "Abdul M Taher",
      image: blogWebDev,
    },
    {
      id: 16,
      slug: "laser-light-skin-clinic-case-study",
      title: "Case Study: Laser Light Skin Clinic — From WordPress to a Modern Website",
      category: "case-studies" as Category,
      categoryLabel: "Case Studies",
      excerpt:
        "Before and after breakdown of our redesign for East London's only 5-Star NHS-approved laser clinic — broken shortcodes, confusing navigation, and slow load times, all fixed.",
      readTime: 6,
      date: "2026-04-07",
      author: "Abdul M Taher",
      image: blogEastLondonTips,
    },
  ];

  // sort by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const filteredPosts =
    activeCategory === "all" ? sortedPosts : sortedPosts.filter((post) => post.category === activeCategory);

  const categories = [
    { id: "all" as Category, label: "All", icon: Globe },
    { id: "web-dev" as Category, label: "Web Development", icon: Globe },
    { id: "ai-automation" as Category, label: "AI Automation", icon: Bot },
    { id: "business" as Category, label: "Business Growth", icon: TrendingUp },
    { id: "case-studies" as Category, label: "Case Studies", icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog | Web Design, SEO & AI Guides for London SMEs | L&D Digital"
        description="Honest guides on web design costs, SEO, and AI automation for London small businesses. Written by L&D Digital's Stratford-based team. No jargon."
        keywords="web development blog UK, offshore development risks, cheap websites, AI automation guides, website tips, UK small business"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/blog"
      />
      <ScrollProgressBar />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-16 md:pt-44 md:pb-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-6">Resources & Insights</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical tips on web development, AI automation, and growing your business online.
            <br />
            No fluff. No jargon. Just actionable advice.
          </p>
        </div>
      </section>

      {/* Breadcrumb below hero */}
      <BreadcrumbNav />

      {/* Category Filter Bar */}
      <section className="sticky top-16 z-40 py-4 px-4 sm:px-6 lg:px-8 bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                className={`text-xs sm:text-sm ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "border-primary text-primary hover:bg-amber-500 hover:border-amber-500 hover:text-white"
                }`}
              >
                <category.icon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Post Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div key={activeCategory} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div key={post.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <Card className="hover-lift h-full">
                  <div className="h-48 bg-muted rounded-t-lg overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <Badge className={`mb-2 w-fit ${getCategoryBadgeClass(post.category)}`}>{post.categoryLabel}</Badge>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>{post.readTime} min read</span>
                    </div>
                    <div className="border-t border-border pt-4 mb-4">
                      <p className="text-xs text-muted-foreground">By {post.author}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No posts found in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <FloatingActionMenu />
    </div>
  );
};

export default Blog;
