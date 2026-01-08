import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { FAQSchema } from "@/components/FAQSchema";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, CheckCircle, ArrowRight, Bot, MessageSquare, Mic, Zap } from "lucide-react";

const faqs = [
  {
    question: "What is an AI chatbot for business?",
    answer: "An AI chatbot is an automated assistant that can handle customer inquiries 24/7. It uses artificial intelligence to understand questions and provide helpful responses, saving you time and improving customer service.",
  },
  {
    question: "How much does an AI chatbot cost for UK businesses?",
    answer: "AI chatbot costs vary widely from £0-500/month for basic solutions to £500-5,000/month for enterprise systems. L&D Digital offers AI chatbots from £50/month, making them accessible to small businesses.",
  },
  {
    question: "What is an AI receptionist?",
    answer: "An AI receptionist is a voice-based AI that can answer phone calls, take messages, book appointments, and handle basic inquiries. It works 24/7 and never calls in sick, ensuring you never miss a customer call.",
  },
  {
    question: "Can AI chatbots really help my small business?",
    answer: "Absolutely! AI chatbots can: answer FAQs instantly, qualify leads while you sleep, book appointments automatically, provide customer support 24/7, and free up your time to focus on what matters. Even small businesses see significant benefits.",
  },
  {
    question: "Do you offer AI automation services in London?",
    answer: "Yes! L&D Digital is based in East London and offers AI chatbots, AI receptionists, and workflow automation for UK businesses. We help local businesses leverage AI to improve efficiency and customer service.",
  },
];

const AiChatbotNearMe = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Chatbot for Business UK | AI Receptionist London | L&D Digital"
        description="Looking for AI chatbots or AI receptionist services in London? L&D Digital offers AI automation from £50/month. 24/7 customer support, lead qualification, appointment booking."
        keywords="AI chatbot for business UK, AI receptionist london, AI automation near me, chatbot development london, AI customer service UK, conversational AI"
        canonicalUrl="https://digital.luminousanddeliver.co.uk/ai-chatbot-near-me"
      />
      <FAQSchema faqs={faqs} pageId="ai-chatbot-near-me" />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">AI Specialists in London</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              AI Chatbot & <span className="text-primary">AI Receptionist</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Looking for AI automation for your UK business? L&D Digital offers AI chatbots and AI receptionists from £50/month. Never miss a customer inquiry again.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a
                  href="https://wa.me/447356260648?text=Hi%2C%20I%27m%20interested%20in%20AI%20chatbot%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/ai-package">
                  View AI Packages <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted/30">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our AI Automation Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge AI solutions to automate your business and delight your customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "AI Chatbot", price: "50/month", icon: MessageSquare, desc: "24/7 customer support" },
              { name: "AI Receptionist", price: "100/month", icon: Mic, desc: "Answer calls automatically" },
              { name: "Lead Qualification", price: "75/month", icon: Bot, desc: "Qualify leads 24/7" },
              { name: "Workflow Automation", price: "150", icon: Zap, desc: "Automate repetitive tasks" },
            ].map((service) => (
              <div
                key={service.name}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
              >
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-1">{service.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{service.desc}</p>
                <p className="text-2xl font-bold text-primary">
                  From £{service.price}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why AI */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Your Business Needs AI
              </h2>
              <ul className="space-y-4">
                {[
                  "Answer customer questions 24/7/365",
                  "Never miss a lead while you're busy",
                  "Reduce response time to seconds",
                  "Handle multiple inquiries simultaneously",
                  "Free up your time for important work",
                  "Professional customer experience always",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">AI Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-muted-foreground">Availability</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">&lt;1s</p>
                  <p className="text-sm text-muted-foreground">Response Time</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">80%</p>
                  <p className="text-sm text-muted-foreground">Time Saved</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">£50</p>
                  <p className="text-sm text-muted-foreground">Starting Price</p>
                </div>
              </div>
            </div>
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
              {faqs.map((faq, index) => (
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
              Ready to Automate Your Business?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Get a free AI consultation today. We'll show you exactly how AI can save you time and improve customer satisfaction.
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
                <Link to="/ai-package">View AI Packages</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default AiChatbotNearMe;
