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
import { AnimatedSection } from "@/components/AnimatedSection";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import blogWebDev from "@/assets/blog-web-dev.png";
import blogAiAutomation from "@/assets/blog-ai-automation.png";
import blogOffshoreRisks from "@/assets/blog-offshore-risks.png";

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
      date: "2024-03-15",
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
      date: "2024-03-20",
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
      date: "2024-03-10",
      author: "Abdul M Taher",
      image: blogAiAutomation,
    },
    {
      id: 4,
      slug: "best-web-developer-stratford-2025",
      title: "Best Web Developer in Stratford: What to Look for in 2025",
      category: "web-dev" as Category,
      categoryLabel: "Web Development",
      excerpt:
        "Looking for a web developer in Stratford? Learn what separates great developers from the rest, and how to choose the right partner for your Olympic Park area business.",
      readTime: 8,
      date: "2025-01-05",
      author: "Abdul M Taher",
      image: blogWebDev,
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
      date: "2025-01-08",
      author: "Abdul M Taher",
      image: blogWebDev,
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
      date: "2025-01-09",
      author: "Abdul M Taher",
      image: blogWebDev,
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
        title="Blog - Web Development & AI Automation Insights | L&D Digital"
        description="Read expert insights on web development, offshore risks, cheap website pitfalls, and AI automation. Practical guides and case studies for UK small businesses."
        keywords="web development blog UK, offshore development risks, cheap websites, AI automation guides, website tips, UK small business"
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
