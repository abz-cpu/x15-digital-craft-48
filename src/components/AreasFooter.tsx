import { Link } from "react-router-dom";
import { Container } from "@/components/Container";
import { AnimatedSection } from "@/components/AnimatedSection";

const serviceAreas = [
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
];

const relatedBlogs = [
  { title: "Best Web Developer Stratford 2026", path: "/blog/best-web-developer-stratford-2026" },
  { title: "Website Design Tips for East London", path: "/blog/website-design-tips-east-london" },
  { title: "Local SEO: Hackney & Shoreditch", path: "/blog/local-seo-hackney-shoreditch" },
  { title: "AI for Small Businesses", path: "/blog/ai-for-small-businesses" },
];

interface AreasFooterProps {
  accentColor?: string;
}

export const AreasFooter = ({ accentColor = "primary" }: AreasFooterProps) => {
  const colorClasses = {
    primary: "hover:text-primary hover:border-primary/30",
    green: "hover:text-green-600 hover:border-green-500/30",
    purple: "hover:text-purple-600 hover:border-purple-500/30",
    orange: "hover:text-orange-600 hover:border-orange-500/30",
    rose: "hover:text-rose-600 hover:border-rose-500/30",
    slate: "hover:text-slate-700 hover:border-slate-500/30",
    violet: "hover:text-violet-600 hover:border-violet-500/30",
  };

  const hoverClass = colorClasses[accentColor as keyof typeof colorClasses] || colorClasses.primary;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30 border-t border-border">
      <Container>
        <AnimatedSection animation="fade">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-bold text-secondary mb-6 text-center">
              Available in These Areas
            </h3>
            
            {/* Location Links */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {serviceAreas.map((area) => (
                <Link
                  key={area.path}
                  to={area.path}
                  className={`px-4 py-2 bg-background hover:bg-primary/5 text-secondary rounded-full text-sm font-medium transition-colors border border-border ${hoverClass}`}
                >
                  {area.name}
                </Link>
              ))}
            </div>

            {/* Blog Links */}
            <div className="border-t border-border pt-6">
              <p className="text-center text-sm text-muted-foreground mb-4">
                Related articles from our blog:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {relatedBlogs.map((blog) => (
                  <Link
                    key={blog.path}
                    to={blog.path}
                    className={`text-sm text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline`}
                  >
                    {blog.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* FAQ Link */}
            <p className="text-center text-sm text-muted-foreground mt-6">
              Have questions? Check our{" "}
              <Link to="/faq" className="text-primary hover:underline font-medium">
                comprehensive FAQ page
              </Link>
              .
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default AreasFooter;
