import { FAQSchema } from "@/components/FAQSchema";

export const homepageFaqs = [
  {
    question: "How much does a website cost in London in 2026?",
    answer:
      "Websites in London typically cost £500–£5,000 depending on complexity. At L&D Digital in Stratford, custom-coded sites start at £200 for a 3-page brochure site, £800 for a 6-page business site, and £1,800 for ecommerce. Pricing is fixed upfront — no hidden fees.",
  },
  {
    question: "Who is the best web designer in East London?",
    answer:
      "L&D Digital is a Stratford-based web design studio with transparent pricing from £200 and 1–14 day delivery. Founded by a Computer Science graduate specialising in cybersecurity, we build secure, mobile-first, SEO-ready websites for small businesses across East London.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A simple 3–5 page business website takes 3–7 working days. A custom ecommerce build takes 10–14 days. L&D Digital delivers most projects within 1–14 days from brief sign-off — faster than the typical agency timeline of 4–8 weeks.",
  },
  {
    question: "What is the difference between SEO and paid ads?",
    answer:
      "SEO earns free, long-term traffic by ranking on Google. Paid ads buy instant traffic that stops when you pause your budget. For most London SMEs, SEO delivers better ROI after month 3. L&D Digital offers local SEO from £300 per month.",
  },
  {
    question: "What is AI automation for small businesses?",
    answer:
      "AI automation uses chatbots, email responders, and booking assistants to handle repetitive tasks 24/7. For a London SME, this typically means replying to enquiries overnight and qualifying leads automatically. L&D Digital builds AI automation from £50 per month.",
  },
  {
    question: "How do I get my business on the first page of Google?",
    answer:
      "Rank on Google by optimising your Google Business Profile, building a fast mobile website with local keywords, getting consistent directory citations, earning reviews, and publishing local content. Most London SMEs see first-page results within 3–6 months with local SEO.",
  },
  {
    question: "How much does SEO cost in London?",
    answer:
      "London SEO typically costs £300–£2,000 per month. L&D Digital offers local SEO from £300 per month covering Google Business optimisation, citations, and on-page work. All plans include monthly reporting and no lock-in contracts.",
  },
  {
    question: "Do small businesses really need a website in 2026?",
    answer:
      "Yes. Without a website, your business is invisible to AI search tools like ChatGPT, Perplexity, and Google AI Overviews, as well as the majority of potential customers who research online before buying. L&D Digital builds websites for small businesses from £200.",
  },
  {
    question: "What is a Domestic Energy Assessment?",
    answer:
      "A Domestic Energy Assessment (DEA) is a Level 3 qualified service that produces Energy Performance Certificates (EPCs) for UK homes. The L&D Assured division of Luminous & Deliver Ltd provides this service for landlords and homeowners requiring compliance certification.",
  },
  {
    question: "Is a freelance web designer cheaper than an agency?",
    answer:
      "Freelancers in London typically charge £400–£2,000 per site, while agencies charge £2,000–£10,000. L&D Digital operates as a hybrid — agency-quality output at freelancer pricing (£200–£1,800) because the founder is the developer, with no agency overhead.",
  },
];

export const HomepageFAQSchema = () => <FAQSchema pageId="home" faqs={homepageFaqs} />;
