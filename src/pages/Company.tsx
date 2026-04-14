import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, Cpu, Home, Globe } from "lucide-react";

const CompanyPageSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://digital.luminousanddeliver.co.uk/company#organization",
      name: "Luminous & Deliver Ltd",
      alternateName: ["L&D", "Luminous and Deliver", "Luminous & Deliver"],
      url: "https://luminousanddeliver.co.uk",
      logo: "https://digital.luminousanddeliver.co.uk/favicon-96x96.png",
      description:
        "Luminous & Deliver Ltd is a UK holding company operating three divisions: L&D Digital (web design, SEO and AI automation), L&D Builds (custom gaming PCs), and L&D Assured (Level 3 Domestic Energy Assessments).",
      foundingDate: "[PLACEHOLDER — owner to add Companies House incorporation date]",
      founder: {
        "@type": "Person",
        name: "Abdul M Taher",
        url: "https://digital.luminousanddeliver.co.uk/author/abdul-m-taher",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "7 Corsican Square",
        addressLocality: "Stratford",
        addressRegion: "London",
        postalCode: "E15 1NN",
        addressCountry: "GB",
      },
      email: "contact@luminousanddeliver.co.uk",
      telephone: "+447356260648",
      identifier: {
        "@type": "PropertyValue",
        propertyID: "Companies House",
        value: "[PLACEHOLDER — owner to add company number]",
      },
      subOrganization: [
        {
          "@type": "Organization",
          name: "L&D Digital",
          url: "https://digital.luminousanddeliver.co.uk",
          description: "Web design, SEO and AI automation for London small businesses.",
        },
        {
          "@type": "Organization",
          name: "L&D Builds",
          url: "https://builds.luminousanddeliver.co.uk",
          description: "Custom gaming PCs for UK customers, trading since 2020.",
        },
        {
          "@type": "Organization",
          name: "L&D Assured",
          description:
            "Level 3 qualified Domestic Energy Assessment (DEA) and EPC service for UK landlords and homeowners.",
        },
      ],
    };

    const id = "company-page-schema";
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

const Company = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Luminous & Deliver Ltd | Parent Company of L&D Digital, Builds & Assured"
        description="Luminous & Deliver Ltd is the UK parent company of L&D Digital (web, SEO, AI), L&D Builds (custom PCs) and L&D Assured (Level 3 DEA service). Founded by Abdul M Taher, based in Stratford, East London."
        canonicalUrl="https://digital.luminousanddeliver.co.uk/company"
        keywords="Luminous and Deliver Ltd, L&D Digital parent company, L&D Builds, L&D Assured, Abdul M Taher company, UK tech holding company"
      />
      <CompanyPageSchema />
      <Navigation />
      <div className="pt-40 md:pt-44">
        <BreadcrumbNav />
      </div>

      <main>
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <Container>
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">Company Profile</p>
              <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-4">Luminous &amp; Deliver Ltd</h1>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Luminous &amp; Deliver Ltd is a privately held UK company operating three specialist divisions
                across web technology, hardware, and property compliance. Founded and led by Abdul M Taher,
                the group is headquartered in Stratford, East London.
              </p>

              {/* Facts table */}
              <Card className="mb-12">
                <CardContent className="p-0">
                  <table className="w-full text-sm">
                    <tbody>
                      {[
                        { label: "Legal name", value: "Luminous & Deliver Ltd" },
                        { label: "Trading names", value: "L&D Digital · L&D Builds · L&D Assured" },
                        { label: "Company type", value: "Private limited company (UK)" },
                        {
                          label: "Companies House number",
                          value: "[PLACEHOLDER — owner to add]",
                          placeholder: true,
                        },
                        {
                          label: "Incorporation date",
                          value: "[PLACEHOLDER — owner to add]",
                          placeholder: true,
                        },
                        { label: "Founder", value: "Abdul M Taher" },
                        { label: "Headquarters", value: "Stratford, East London, United Kingdom" },
                        { label: "Registered address", value: "7 Corsican Square, London E15 1NN" },
                        { label: "Industries", value: "Web design · SEO · AI automation · Custom PCs · Energy assessment" },
                        { label: "Country served", value: "United Kingdom" },
                        { label: "Website", value: "luminousanddeliver.co.uk" },
                      ].map((row, idx) => (
                        <tr
                          key={row.label}
                          className={idx % 2 === 0 ? "bg-muted/40" : "bg-background"}
                        >
                          <th className="text-left font-semibold text-secondary p-4 w-1/3 align-top">
                            {row.label}
                          </th>
                          <td
                            className={`p-4 ${row.placeholder ? "text-amber-600" : "text-muted-foreground"}`}
                          >
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              {/* Divisions */}
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">Divisions</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <Globe className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-secondary mb-2">L&amp;D Digital</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Web design, local SEO and AI automation studio for London small businesses. Custom
                      websites from £200, local SEO from £300/month, AI chatbots from £50/month.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link to="/">
                        Visit L&amp;D Digital <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <Cpu className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-secondary mb-2">L&amp;D Builds</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Custom gaming PC building service for UK customers. Trading since 2020. Component-level
                      builds, tuning and aftercare support.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <a href="https://builds.luminousanddeliver.co.uk" target="_blank" rel="noopener noreferrer">
                        Visit L&amp;D Builds <ArrowRight className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <Home className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-secondary mb-2">L&amp;D Assured</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Level 3 qualified Domestic Energy Assessment service producing Energy Performance
                      Certificates (EPCs) for UK landlords and homeowners.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link to="/contact">
                        Enquire <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Founder */}
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">Founder</h2>
              <Card className="mb-12">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Building2 className="h-10 w-10 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-secondary mb-2">Abdul M Taher</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        Abdul M Taher is the founder and sole director of Luminous &amp; Deliver Ltd, and
                        the founder and lead developer of L&amp;D Digital. He is a BSc Computer Science graduate
                        specialising in cybersecurity, and a Level 3 qualified Domestic Energy Assessor —
                        credentials that underpin both the web security posture of L&amp;D Digital builds and the
                        compliance work of L&amp;D Assured.
                      </p>
                      <Button asChild variant="outline">
                        <Link to="/author/abdul-m-taher">
                          Read founder bio <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* History */}
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">History</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
                <p>
                  Luminous &amp; Deliver began as L&amp;D Builds in 2020, a custom gaming PC service run by
                  Abdul M Taher while studying Computer Science. After graduating, the operation was
                  formalised as Luminous &amp; Deliver Ltd and expanded into web technology as L&amp;D Digital,
                  with a focus on East London small businesses who were being priced out of the
                  traditional agency market.
                </p>
                <p>
                  L&amp;D Assured was added to provide Level 3 Domestic Energy Assessments (DEAs) and
                  Energy Performance Certificates (EPCs) for UK landlords and homeowners, leveraging the
                  founder's qualification in the assessment profession.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Contact us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/about">About L&amp;D Digital</Link>
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

export default Company;
