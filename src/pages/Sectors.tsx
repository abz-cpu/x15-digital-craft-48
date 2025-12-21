import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Heart, Briefcase, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/Container";

const sectors = [
  { name: "Property Websites", path: "/sectors/property", desc: "Estate agents, property developers, and letting agencies.", icon: Building2 },
  { name: "Charity Websites", path: "/sectors/charity", desc: "Non-profits, charities, and community organizations.", icon: Heart },
  { name: "B2B Websites", path: "/sectors/b2b", desc: "Business-to-business services and professional firms.", icon: Briefcase },
  { name: "B2C Websites", path: "/sectors/b2c", desc: "Consumer-focused businesses and retail.", icon: ShoppingBag },
];

const Sectors = () => (
  <div className="min-h-screen flex flex-col">
    <SEO title="Key Sectors | L&D Digital" description="We specialize in websites for property, charity, B2B, and B2C sectors. Industry expertise that delivers results." />
    <Navigation />
    <main className="flex-1">
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <Container className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">Key Sectors</h1>
          <p className="text-xl text-primary-foreground/90">Industry expertise that delivers results.</p>
        </Container>
      </section>
      <BreadcrumbNav />
      <section className="py-16 bg-background">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sectors.map((s) => (
              <Card key={s.path} className="hover-lift">
                <CardContent className="p-6">
                  <s.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-2">{s.name}</h3>
                  <p className="text-muted-foreground mb-4">{s.desc}</p>
                  <Button asChild variant="outline"><Link to={s.path}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </main>
    <Footer />
  </div>
);

export default Sectors;
