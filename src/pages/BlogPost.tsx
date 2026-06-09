import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Share2, Linkedin, Twitter, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActionMenu from "@/components/FloatingActionMenu";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { SEO } from "@/components/SEO";
import { ArticleSchema } from "@/components/ArticleSchema";
import { AuthorBio } from "@/components/AuthorBio";

import { HowToSchema } from "@/components/HowToSchema";
import { blogPosts, localSeoSteps } from "@/data/blogPosts";
import { renderMarkdown, getCategoryBadgeClass } from "@/lib/blogMarkdown";

const BlogPost = () => {
  const { slug } = useParams();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => observerRef.current?.observe(section));

    return () => observerRef.current?.disconnect();
  }, []);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Post link copied to clipboard",
    });
  };

  const currentPost = blogPosts[slug || ""];

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="py-16 px-4 text-center">
          <h1 className="text-3xl font-bold text-secondary mb-4">Post Not Found</h1>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={currentPost.seoTitle}
        description={currentPost.seoDescription}
        keywords={currentPost.seoKeywords}
        ogType="article"
        ogImage={currentPost.ogImage}
        canonicalUrl={`https://digital.luminousanddeliver.co.uk/blog/${slug}`}
        author={currentPost.author}
      />
      <ArticleSchema
        title={currentPost.title}
        description={currentPost.seoDescription}
        url={`https://digital.luminousanddeliver.co.uk/blog/${slug}`}
        image={
          typeof currentPost.ogImage === "string" && currentPost.ogImage.startsWith("http")
            ? currentPost.ogImage
            : `https://digital.luminousanddeliver.co.uk${currentPost.ogImage}`
        }
        datePublished={currentPost.date}
        author={currentPost.author}
        category={currentPost.category}
      />
      {slug === "local-seo-hackney-shoreditch" && (
        <HowToSchema
          name="How to Improve Local SEO for Hackney & Shoreditch Businesses"
          description="Complete 6-step guide to ranking higher on Google for Hackney and Shoreditch businesses in East London."
          steps={localSeoSteps}
          totalTime="P30D"
          estimatedCost={{ currency: "GBP", value: "0-300" }}
        />
      )}
      <ScrollProgressBar />
      <Navigation />

      {/* Back Button */}
      <div className="pt-40 pb-4 md:pt-44 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="ghost" className="gap-2">
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-48 sm:h-64 md:h-96 bg-muted overflow-hidden">
        <img src={currentPost.ogImage} alt={currentPost.heroAlt} className="w-full h-full object-cover" />
      </div>

      {/* Post Content */}
      <article className="py-10 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto fade-in-section">
          <Badge className={`mb-4 ${getCategoryBadgeClass(currentPost.category)}`}>{currentPost.category}</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-6">{currentPost.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8 pb-8 border-b border-border">
            <span>
              By{" "}
              <Link to="/author/abdul-m-taher" className="font-semibold text-secondary hover:text-primary hover:underline">
                {currentPost.author}
              </Link>
            </span>
            <span>•</span>
            <span>
              Published{" "}
              {new Date(currentPost.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span>•</span>
            <span>
              Updated{" "}
              {new Date(currentPost.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span>•</span>
            <span>{currentPost.readTime} min read</span>
          </div>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(currentPost.content) }}
          />

          {/* Author bio — E-E-A-T signal at end of article */}
          <div className="mt-12 pt-8 border-t border-border">
            <AuthorBio variant="full" />
          </div>
        </div>
      </article>

      {/* Share Section */}
      <section className="py-6 md:py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Share2 className="h-5 w-5 text-primary" />
            <p className="font-semibold">Like this post?</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              onClick={() =>
                window.open(
                  `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    window.location.href,
                  )}&text=${encodeURIComponent(currentPost.title)}`,
                  "_blank",
                )
              }
            >
              <Twitter className="mr-2 h-4 w-4" /> Share on Twitter
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                window.open(
                  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                  "_blank",
                )
              }
            >
              <Linkedin className="mr-2 h-4 w-4" /> Share on LinkedIn
            </Button>
            <Button variant="outline" onClick={copyLink}>
              <Share2 className="mr-2 h-4 w-4" /> Copy Link
            </Button>
          </div>
        </div>
      </section>

      {/* Available in These Areas */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-secondary mb-6 text-center">Available in These Areas</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Stratford", path: "/areas/stratford" },
              { name: "Ilford", path: "/areas/ilford" },
              { name: "Hackney", path: "/areas/hackney" },
              { name: "Shoreditch", path: "/areas/shoreditch" },
              { name: "Newham", path: "/areas/newham" },
              { name: "Leyton", path: "/areas/leyton" },
              { name: "Walthamstow", path: "/areas/walthamstow" },
              { name: "Barking", path: "/areas/barking" },
              { name: "Tower Hamlets", path: "/areas/tower-hamlets" },
              { name: "Bethnal Green", path: "/areas/bethnal-green" },
              { name: "East Ham", path: "/areas/east-ham" },
              { name: "Manor Park", path: "/areas/manor-park" },
              { name: "Plaistow", path: "/areas/plaistow" },
              { name: "Greenwich", path: "/areas/greenwich" },
            ].map((area) => (
              <Link
                key={area.path}
                to={area.path}
                className="px-4 py-2 bg-muted hover:bg-primary/10 text-secondary hover:text-primary rounded-full text-sm font-medium transition-colors border border-border hover:border-primary/30"
              >
                {area.name}
              </Link>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-4">
            Serving London & East London with professional web design, SEO, and AI automation services.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Ready to start your project?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/services">
                See Our Packages <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">
                Get Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-secondary mb-6 md:mb-8 text-center">Related Posts</h3>
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {[
              ...Object.entries(blogPosts).filter(([key, post]) => key !== slug && post.category === currentPost.category),
              ...Object.entries(blogPosts).filter(([key, post]) => key !== slug && post.category !== currentPost.category),
            ]
              .slice(0, 3)
              .map(([key, post]) => (
                <Card key={key} className="hover-lift flex flex-col">
                  <CardHeader>
                    <Badge className={`mb-2 w-fit ${getCategoryBadgeClass(post.category)}`}>{post.category}</Badge>
                    <CardTitle className="text-lg leading-snug">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">{post.seoDescription}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <span>{post.date}</span>
                      <span>{post.readTime} min read</span>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/blog/${key}`}>
                        Read Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActionMenu />
    </div>
  );
};

export default BlogPost;
