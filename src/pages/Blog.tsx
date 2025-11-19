import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Bot, TrendingUp, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { SEO } from "@/components/SEO";
import { AnimatedSection } from "@/components/AnimatedSection";

type Category = "all" | "web-dev" | "ai-automation" | "business" | "case-studies";

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
        "That £50 website builder might seem like a bargain, but hidden costs add up fast. Here's what you're really paying for.",
      readTime: 5,
      date: "2024-03-15",
      author: "Abdul M Taher",
    },
    {
      id: 2,
      slug: "ai-for-small-businesses",
      title: "How Small Businesses Can Use AI Without Being Techy",
      category: "ai-automation" as Category,
      categoryLabel: "AI Automation",
      excerpt:
        "AI automation isn't just for tech companies. Here's how small businesses are using chatbots and voice agents to save 20+ hours per week.",
      readTime: 7,
      date: "2024-03-10",
      author: "Abdul M Taher",
    },
  ];

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const categories = [
    { id: "all" as Category, label: "All", icon: FileText },
    { id: "web-dev" as Category, label: "Web Development", icon: Globe },
    { id: "ai-automation" as Category, label: "AI Automation", icon: Bot },
    { id: "business" as Category, label: "Business Growth", icon: TrendingUp },
    { id: "case-studies" as Category, label: "Case Studies", icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Blog - Web Development & AI Automation Insights | X15 Digital"
        description="Read expert insights on web development, AI automation, and business growth. Tips, case studies, and guides for UK small businesses."
        keywords="web development blog UK, AI automation guides, website tips, business automation advice"
      />
      <ScrollProgressBar />
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
            Resources & Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical tips on web development, AI automation, and growing your business
            online.
            <br />
            No fluff. No jargon. Just actionable advice.
          </p>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="sticky top-16 z-40 py-4 px-4 sm:px-6 lg:px-8 bg-background border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "border-primary text-primary hover:bg-primary/10"
                }
              >
                <category.icon className="h-4 w-4 mr-2" />
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
              <AnimatedSection key={post.id} staggerIndex={index}>
                <Card className="hover-lift h-full">
                  <div className="h-48 bg-muted rounded-t-lg flex items-center justify-center">
                    {post.category === "web-dev" ? (
                      <Globe className="h-24 w-24 text-primary" />
                    ) : post.category === "ai-automation" ? (
                      <Bot className="h-24 w-24 text-primary" />
                    ) : (
                      <TrendingUp className="h-24 w-24 text-primary" />
                    )}
                  </div>
                  <CardHeader>
                    <Badge className="mb-2 w-fit">{post.categoryLabel}</Badge>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>{post.readTime} min read</span>
                    </div>
                    <div className="border-t border-border pt-4 mb-4">
                      <p className="text-xs text-muted-foreground">
                        By {post.author}
                      </p>
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
              </AnimatedSection>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No posts found in this category yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Blog;
