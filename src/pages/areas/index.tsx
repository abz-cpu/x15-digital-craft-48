import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Container } from "@/components/Container";
import { MapPin, ArrowRight } from "lucide-react";

const serviceAreas = [
  { name: "Stratford", slug: "stratford", postcodes: "E15, E20" },
  { name: "Ilford", slug: "ilford", postcodes: "IG1-IG6" },
  { name: "Leyton", slug: "leyton", postcodes: "E10, E11" },
  { name: "East Ham", slug: "east-ham", postcodes: "E6, E7" },
  { name: "Manor Park", slug: "manor-park", postcodes: "E12" },
  { name: "Newham", slug: "newham", postcodes: "E6, E7, E12, E13, E16" },
  { name: "Plaistow", slug: "plaistow", postcodes: "E13, E16" },
  { name: "Barking", slug: "barking", postcodes: "IG11, RM8-RM10" },
  { name: "Walthamstow", slug: "walthamstow", postcodes: "E17" },
  { name: "Hackney", slug: "hackney", postcodes: "E5, E8, E9" },
  { name: "Bethnal Green", slug: "bethnal-green", postcodes: "E2, E3" },
  { name: "Shoreditch", slug: "shoreditch", postcodes: "EC2, N1" },
  { name: "Tower Hamlets", slug: "tower-hamlets", postcodes: "E1, E14" },
  { name: "Greenwich", slug: "greenwich", postcodes: "SE3, SE7, SE8, SE10, SE18" },
];

const AreasIndex = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Service Areas | Web Developer East London | L&D Digital"
        description="L&D Digital serves businesses across East London including Stratford, Ilford, Hackney, Shoreditch, and more. Web development, SEO, and AI services from £200."
        keywords="web developer east london, website design stratford, digital marketing ilford, SEO hackney, web developer shoreditch"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/areas"
      />

      <Navigation />

      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">East London Coverage</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Service Areas
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We provide web development, digital marketing, and AI services to businesses across East London. Find your area below.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                to={`/areas/${area.slug}`}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {area.name}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Postcodes: {area.postcodes}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default AreasIndex;
