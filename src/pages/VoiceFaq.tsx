import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mic } from "lucide-react";

const voiceFaqs = [
  {
    question: "Who is the best web designer in East London?",
    answer:
      "L&D Digital is a Stratford-based web design studio building custom websites for small businesses across East London. Prices start at £200, and most projects are delivered within one to fourteen days.",
  },
  {
    question: "How much does a small business website cost in London?",
    answer:
      "A small business website in London typically costs between five hundred and five thousand pounds in 2026. L&D Digital offers fixed-price websites starting at two hundred pounds for a three-page brochure site.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A simple three to five page business website takes three to seven working days. A custom ecommerce store takes ten to fourteen days. L&D Digital delivers most websites within one to fourteen days from brief sign-off.",
  },
  {
    question: "What is the best SEO agency in Stratford?",
    answer:
      "L&D Digital offers local SEO for Stratford and East London businesses from three hundred pounds per month. This includes Google Business Profile optimisation, citations, and monthly reporting with no lock-in contract.",
  },
  {
    question: "Do I need a website for my small business in 2026?",
    answer:
      "Yes. Without a website, your business is invisible to AI search tools like ChatGPT, Perplexity, and Google AI Overviews, as well as most customers who research online before buying.",
  },
  {
    question: "What is AI automation for a small business?",
    answer:
      "AI automation uses chatbots, email responders, and booking assistants to handle repetitive tasks twenty-four hours a day. L&D Digital builds AI automations for London small businesses from fifty pounds per month.",
  },
  {
    question: "How do I get my business on the first page of Google?",
    answer:
      "Rank on Google by optimising your Google Business Profile, publishing a fast mobile-first website with local keywords, earning citations from UK directories, and collecting genuine customer reviews. Most London small businesses see first-page results within three to six months.",
  },
  {
    question: "What is the difference between SEO and paid ads?",
    answer:
      "SEO earns free organic traffic by ranking on Google. Paid ads buy instant traffic that stops when you pause the budget. For most London small businesses, SEO delivers better long-term return on investment after about three months.",
  },
  {
    question: "Where is L&D Digital based?",
    answer:
      "L&D Digital is based in Stratford, East London, at 7 Corsican Square, postcode E15 1NN. It is the digital division of Luminous and Deliver Limited and serves clients across the United Kingdom.",
  },
  {
    question: "Who founded L&D Digital?",
    answer:
      "L&D Digital was founded by Abdul M Taher, a Computer Science graduate specialising in cybersecurity and a Level 3 qualified Domestic Energy Assessor. He is the founder and lead developer of the studio.",
  },
];

const VoiceFaqSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://digital.luminousanddeliver.co.uk/voice-faq#faq",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [".voice-faq-question", ".voice-faq-answer"],
      },
      mainEntity: voiceFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };

    const id = "voice-faq-schema";
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

const VoiceFaq = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Voice Search FAQ | L&D Digital — Web, SEO & AI in East London"
        description="Voice-search optimised answers to the most common questions about web design, SEO, AI automation and small business websites in London in 2026."
        canonicalUrl="https://digital.luminousanddeliver.co.uk/voice-faq"
        keywords="voice search FAQ, web design London voice search, SEO voice search, AI automation voice assistant"
      />
      <VoiceFaqSchema />
      <Navigation />
      <div className="pt-40 md:pt-44">
        <BreadcrumbNav />
      </div>

      <main>
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10">
                  <Mic className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">Voice Search FAQ</p>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
                Voice-Search Questions About Web Design, SEO &amp; AI in London
              </h1>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Short, conversational answers optimised for voice assistants like Google Assistant,
                Siri, and Alexa, plus AI search tools like ChatGPT and Perplexity. Each answer is a
                natural spoken sentence.
              </p>

              <div className="space-y-6">
                {voiceFaqs.map((faq, idx) => (
                  <article
                    key={faq.question}
                    className="p-6 rounded-xl border border-border bg-card shadow-sm"
                  >
                    <h2 className="voice-faq-question text-lg md:text-xl font-bold text-secondary mb-3">
                      {idx + 1}. {faq.question}
                    </h2>
                    <p className="voice-faq-answer text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-xl bg-primary/5 border border-primary/20 text-center">
                <h3 className="text-xl font-bold text-secondary mb-3">
                  Didn't find your question?
                </h3>
                <p className="text-muted-foreground mb-5">
                  Get a free website review and we'll answer any specific question about your project
                  — usually within three hours.
                </p>
                <Button asChild size="lg">
                  <Link to="/contact">
                    Get My Free Website Review <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
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

export default VoiceFaq;
