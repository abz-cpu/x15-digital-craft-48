import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { FAQSchema } from "@/components/FAQSchema";
import { ServiceAreaSchema } from "@/components/ServiceAreaSchema";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Container } from "@/components/Container";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { MapPin, ArrowRight, Globe, Bot, TrendingUp, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceAreas = [
  { name: "Stratford", slug: "stratford", postcodes: "E15, E20", highlight: "Olympic Park & Westfield" },
  { name: "Ilford", slug: "ilford", postcodes: "IG1-IG6", highlight: "Business Hub" },
  { name: "Leyton", slug: "leyton", postcodes: "E10, E11", highlight: "Growing Community" },
  { name: "East Ham", slug: "east-ham", postcodes: "E6, E7", highlight: "Diverse High Street" },
  { name: "Manor Park", slug: "manor-park", postcodes: "E12", highlight: "Local Trades" },
  { name: "Newham", slug: "newham", postcodes: "E6, E7, E12, E13, E16", highlight: "ExCeL & Royal Docks" },
  { name: "Plaistow", slug: "plaistow", postcodes: "E13, E16", highlight: "Growing Area" },
  { name: "Barking", slug: "barking", postcodes: "IG11, RM8-RM10", highlight: "Enterprise Zone" },
  { name: "Walthamstow", slug: "walthamstow", postcodes: "E17", highlight: "Europe's Longest Market" },
  { name: "Hackney", slug: "hackney", postcodes: "E5, E8, E9", highlight: "Creative Industries" },
  { name: "Bethnal Green", slug: "bethnal-green", postcodes: "E2, E3", highlight: "Arts & Community" },
  { name: "Shoreditch", slug: "shoreditch", postcodes: "EC2, N1", highlight: "Tech & Startups" },
  { name: "Tower Hamlets", slug: "tower-hamlets", postcodes: "E1, E14", highlight: "Canary Wharf" },
  { name: "Greenwich", slug: "greenwich", postcodes: "SE3, SE7, SE8, SE10, SE18", highlight: "Heritage & Tourism" },
];

const services = [
  { icon: Globe, title: "Website Design", desc: "From £200" },
  { icon: TrendingUp, title: "SEO Services", desc: "From £300" },
  { icon: Bot, title: "AI Chatbots", desc: "From £50/month" },
];

const areaFaqs = [
  {
    question: "Which areas in East London do you serve?",
    answer: "We serve businesses across East London including Stratford, Ilford, Hackney, Shoreditch, Tower Hamlets, Greenwich, Walthamstow, Newham, Leyton, East Ham, Manor Park, Plaistow, Barking, and Bethnal Green. We cover postcodes E1-E20, IG1-IG11, SE3-SE18, and surrounding areas."
  },
  {
    question: "Do you offer on-site meetings in East London?",
    answer: "Yes, we're based in East London and happy to meet local clients in person. We can meet at your business premises or a convenient location in your area. Most consultations can also be done via video call or WhatsApp."
  },
  {
    question: "How much does web design cost in East London?",
    answer: "Our websites start from £200 for simple sites. Ecommerce stores start from £500, and AI chatbots from £50/month. We offer transparent pricing with no hidden fees. Get a free quote for your specific requirements."
  },
  {
    question: "Why choose a local East London web developer?",
    answer: "Working with a local developer means same-day support, understanding of UK business requirements including GDPR, and knowledge of the East London market. We're just a WhatsApp message or phone call away."
  },
];

const AreasIndex = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Service Areas | Web Developer East London | L&D Digital"
        description="L&D Digital serves businesses across East London including Stratford, Ilford, Hackney, Shoreditch, Greenwich, and more. Local web development, SEO, and AI services from £200."
        keywords="web developer east london, website design stratford, digital marketing ilford, SEO hackney, web developer shoreditch, web design greenwich, east london digital agency"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/areas"
      />
      <FAQSchema faqs={areaFaqs} pageId="areas-index" />
      <ServiceAreaSchema />

      <Navigation />
      <BreadcrumbNav />

      {/* Hero Section */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">14 East London Areas Covered</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Web Development Across{" "}
              <span className="text-primary">East London</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              We provide professional web development, digital marketing, and AI automation services to businesses across East London. From Stratford to Shoreditch, Ilford to Greenwich – we're your local digital partner.
            </p>

            <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
              Based in East London, we understand the local market. Our team delivers fast, affordable websites that help local businesses compete online. Websites from £200, delivered in 1-14 days.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a
                  href="https://wa.me/447356260648?text=Hi%2C%20I%27m%20looking%20for%20web%20services%20in%20East%20London"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Quick Overview */}
      <section className="py-12 bg-muted/30">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {services.map((service) => (
              <div key={service.title} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <service.icon className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Coverage Map */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our East London Coverage
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From the Olympic Park to Greenwich, we serve businesses across 14 East London areas. Click on an area below to learn more about our services in your location.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border border-border mb-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79426.47854478!2d-0.0456523!3d51.5354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d67b58b0d3f%3A0x4d6adee7b65e4c93!2sEast%20London!5e0!3m2!1sen!2suk!4v1704672000000!5m2!1sen!2suk"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="East London Service Areas Map"
            />
          </div>
        </Container>
      </section>

      {/* Area Cards Grid */}
      <section className="py-16 bg-muted/30">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Your Area
            </h2>
            <p className="text-muted-foreground">
              Select your area for local web development services and pricing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                to={`/areas/${area.slug}`}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                      {area.name}
                    </h3>
                    <p className="text-xs text-primary font-medium">
                      {area.highlight}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Postcodes: {area.postcodes}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* "Near Me" Links */}
      <section className="py-16">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Looking for Specific Services?
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/web-developer-near-me"
              className="px-4 py-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
            >
              Web Developer Near Me
            </Link>
            <Link
              to="/seo-agency-near-me"
              className="px-4 py-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
            >
              SEO Agency Near Me
            </Link>
            <Link
              to="/digital-marketing-agency-near-me"
              className="px-4 py-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
            >
              Digital Marketing Near Me
            </Link>
            <Link
              to="/ai-chatbot-near-me"
              className="px-4 py-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
            >
              AI Chatbot Near Me
            </Link>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {areaFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 border border-border"
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Grow Your East London Business?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Get a free, no-obligation quote today. WhatsApp us on <strong>07356 260648</strong> or email <strong>contact.luminousanddeliver@gmail.com</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <a
                  href="https://wa.me/447356260648"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-5 w-5" />
                  WhatsApp Us Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/contact">Contact Form</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default AreasIndex;
