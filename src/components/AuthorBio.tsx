import { Link } from "react-router-dom";
import { User, ArrowRight, Shield, GraduationCap, MapPin } from "lucide-react";

interface AuthorBioProps {
  variant?: "full" | "compact";
}

export const AuthorBio = ({ variant = "full" }: AuthorBioProps) => {
  if (variant === "compact") {
    return (
      <div className="flex items-start gap-4 p-5 rounded-xl bg-muted/50 border border-border">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <User className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-secondary">Abdul M Taher</p>
          <p className="text-xs text-muted-foreground mb-2">
            Founder of L&amp;D Digital · BSc Computer Science (cybersecurity)
          </p>
          <Link
            to="/author/abdul-m-taher"
            className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
          >
            Read full bio <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <aside className="p-6 md:p-8 rounded-2xl bg-muted/50 border border-border">
      <div className="flex items-start gap-5">
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <User className="h-8 w-8 text-primary" />
        </div>
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
            About the author
          </p>
          <h3 className="text-lg font-bold text-secondary mb-2">Abdul M Taher</h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            Founder of L&amp;D Digital, a Stratford-based web design, SEO and AI automation studio.
            BSc Computer Science graduate specialising in cybersecurity, and a Level 3 qualified
            Domestic Energy Assessor through the L&amp;D Assured division of Luminous &amp; Deliver Ltd.
          </p>
          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
            <span className="inline-flex items-center gap-1">
              <GraduationCap className="h-3.5 w-3.5 text-primary" /> BSc Computer Science
            </span>
            <span className="inline-flex items-center gap-1">
              <Shield className="h-3.5 w-3.5 text-primary" /> Cybersecurity specialism
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-primary" /> Stratford, East London
            </span>
          </div>
          <Link
            to="/author/abdul-m-taher"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Read full founder bio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </aside>
  );
};
