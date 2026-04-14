import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Shield,
  MapPin,
  Linkedin,
  Mail,
  ArrowRight,
  Award,
  Code2,
  Briefcase,
} from "lucide-react";

const PersonSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Abdul M Taher",
      alternateName: "Abdul Taher",
      givenName: "Abdul",
      familyName: "Taher",
      jobTitle: "Founder and Lead Developer",
      description:
        "Founder of L&D Digital, a Stratford-based web design, SEO and AI automation studio. BSc Computer Science graduate specialising in cybersecurity, and Level 3 qualified Domestic Energy Assessor.",
      url: "https://digital.luminousanddeliver.co.uk/author/abdul-m-taher",
      image: "https://digital.luminousanddeliver.co.uk/og-image.jpg",
      worksFor: {
        "@type": "Organization",
        name: "Luminous & Deliver Ltd",
        url: "https://luminousanddeliver.co.uk",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "[PLACEHOLDER — university name]",
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "BSc Computer Science (Cybersecurity specialism)",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "Level 3 Domestic Energy Assessor",
        },
      ],
      knowsAbout: [
        "Web development",
        "React",
        "TypeScript",
        "Next.js",
        "Cybersecurity",
        "SEO",
        "AI automation",
        "Large language models",
        "Small business technology",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Stratford",
        addressRegion: "London",
        addressCountry: "GB",
      },
      sameAs: [
        "https://www.linkedin.com/company/luminous-deliver-digital",
        "https://digital.luminousanddeliver.co.uk/about",
      ],
    };

    const id = "person-schema-abdul-m-taher";
    const existing = document.getElementById(id);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, []);

  return null;
};

const AuthorAbdul = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Abdul M Taher — Founder, L&D Digital | Web, SEO & AI in London"
        description="Abdul M Taher is the founder of L&D Digital, a Stratford-based web design, SEO and AI automation studio. BSc Computer Science graduate specialising in cybersecurity, Level 3 DEA qualified."
        canonicalUrl="https://digital.luminousanddeliver.co.uk/author/abdul-m-taher"
        keywords="Abdul M Taher, L&D Digital founder, web developer East London, cybersecurity developer UK, Stratford web designer"
      />
      <PersonSchema />
      <Navigation />
      <div className="pt-40 md:pt-44">
        <BreadcrumbNav />
      </div>

      <main>
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
                <div className="flex-shrink-0 w-32 h-32 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <span className="text-5xl font-bold text-primary">AT</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">
                    Founder · L&amp;D Digital
                  </p>
                  <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-4">Abdul M Taher</h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Founder and lead developer of L&amp;D Digital, a Stratford-based web design, SEO and AI
                    automation studio serving small businesses across East London and the UK.
                  </p>
                </div>
              </div>

              {/* Quick facts */}
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                <Card>
                  <CardContent className="pt-6 flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-secondary">BSc Computer Science</p>
                      <p className="text-sm text-muted-foreground">Specialising in cybersecurity</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 flex items-start gap-3">
                    <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-secondary">Level 3 DEA Qualified</p>
                      <p className="text-sm text-muted-foreground">Domestic Energy Assessor (L&amp;D Assured)</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-secondary">Stratford, East London</p>
                      <p className="text-sm text-muted-foreground">Serving UK clients remotely</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 flex items-start gap-3">
                    <Briefcase className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-secondary">Luminous &amp; Deliver Ltd</p>
                      <p className="text-sm text-muted-foreground">Parent company (Digital · Builds · Assured)</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Bio */}
              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Background</h2>
                <p className="text-muted-foreground mb-4">
                  I'm Abdul, the founder of L&amp;D Digital. I started building websites and automations for
                  small businesses because I kept seeing the same pattern: local shops and service
                  businesses being quoted £3,000–£10,000 for websites that should cost a fraction of that,
                  with 8–12 week timelines for what is genuinely a few days of work.
                </p>
                <p className="text-muted-foreground mb-4">
                  L&amp;D Digital is the web, SEO and AI division of <strong>Luminous &amp; Deliver Ltd</strong>,
                  the holding company I run. The group also operates L&amp;D Builds (custom PC building,
                  trading since 2020) and L&amp;D Assured (Level 3 Domestic Energy Assessments for UK
                  landlords and homeowners).
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4 mt-8">Credentials</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>BSc Computer Science — specialism in cybersecurity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Level 3 qualified Domestic Energy Assessor (DEA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Google-verified business owner (L&amp;D Digital, Stratford)</span>
                  </li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4 mt-8">What I work on</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Code2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Custom websites built with React, TypeScript, Next.js and WordPress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Code2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Local SEO for East London businesses — Google Business Profile, citations, technical fixes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Code2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>AI automation — chatbots, voice assistants, WhatsApp bots and workflow automation</span>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="flex flex-wrap gap-4 mb-12">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="mailto:contact@luminousanddeliver.co.uk">
                    <Mail className="mr-2 h-4 w-4" /> contact@luminousanddeliver.co.uk
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a
                    href="https://www.linkedin.com/company/luminous-deliver-digital"
                    target="_blank"
                    rel="noopener noreferrer me"
                  >
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
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

export default AuthorAbdul;
