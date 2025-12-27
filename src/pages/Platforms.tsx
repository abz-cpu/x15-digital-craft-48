import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/Container";

const platforms = [
  { name: "WordPress", path: "/platforms/wordpress", desc: "The world's most popular CMS. Perfect for blogs, business sites, and more." },
  { name: "Shopify", path: "/platforms/shopify", desc: "Leading e-commerce platform for online stores of all sizes." },
  { name: "WooCommerce", path: "/platforms/woocommerce", desc: "Powerful WordPress e-commerce with full customization." },
  { name: "Custom Development", path: "/platforms/custom-development", desc: "Bespoke React/Next.js solutions for unique requirements." },
];

const Platforms = () => (
  <div className="min-h-screen flex flex-col">
    <SEO title="Platforms We Work With | L&D Digital" description="We build on WordPress, Shopify, WooCommerce, and custom React/Next.js. Choose the right platform for your business." />
    <Navigation darkHero />
    <main className="flex-1">
      <section className="pt-40 pb-16 md:pt-44 md:pb-20 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        <Container className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">Platforms We Work With</h1>
          <p className="text-xl text-primary-foreground/90">Choose the right technology for your project.</p>
        </Container>
      </section>
      <BreadcrumbNav />
      <section className="py-16 bg-background">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {platforms.map((p) => (
              <Card key={p.path} className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">{p.name}</h3>
                  <p className="text-muted-foreground mb-4">{p.desc}</p>
                  <Button asChild variant="outline"><Link to={p.path}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
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

export default Platforms;
