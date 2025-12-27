import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Share2, Linkedin, Twitter, ArrowLeft } from "lucide-react";
import blogWebDev from "@/assets/blog-web-dev.png";
import blogAiAutomation from "@/assets/blog-ai-automation.png";
import blogOffshoreRisks from "@/assets/blog-offshore-risks.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

type BlogPostConfig = {
  title: string;
  category: "Web Development" | "AI Automation";
  date: string;
  readTime: number;
  author: string;
  content: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  ogImage: string;
  heroAlt: string;
};

const getCategoryBadgeClass = (category: string) => {
  switch (category) {
    case "Web Development":
      return "bg-teal-600 text-white";
    case "AI Automation":
      return "bg-violet-600 text-white";
    default:
      return "bg-secondary text-secondary-foreground";
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => observerRef.current?.observe(section));

    return () => observerRef.current?.disconnect();
  }, []);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Post link copied to clipboard",
    });
  };

  const posts: Record<string, BlogPostConfig> = {
    "cheap-websites": {
      title: "Why Cheap Websites Cost More in the Long Run",
      category: "Web Development",
      date: "2024-03-15",
      readTime: 5,
      author: "Abdul M Taher",
      seoTitle: "Why Cheap Websites Cost More in the Long Run | X15 Digital",
      seoDescription:
        "That £50 website builder might seem like a bargain, but hidden platform fees, lost time, SEO issues and migration costs quickly turn it into a £2,000+ problem.",
      seoKeywords:
        "cheap websites, £50 website builder, website builder hidden costs, professional web design UK, cheap website problems",
      ogImage: blogWebDev,
      heroAlt: "Small business website layout representing cheap website builders versus professional design",
      content: `
## The £50 Website Promise

You've seen the ads: "Professional website for £50!" or "Free website builder - no credit card required!"

Sounds great, right? Wrong.

Here's what actually happens when you go cheap:

### Hidden Cost 1: Your Time

That "free" website builder? You'll spend 20+ hours figuring out how to use it. That's £200-500 of your time at minimum wage.

Most small business owners give up after 2 weeks and hire someone anyway.

### Hidden Cost 2: Features That Cost Extra

- Want a custom domain? £10-20/year
- SSL certificate? £50/year
- Remove platform branding? £5-10/month
- Connect to payment processor? £15/month
- Email marketing integration? £20/month
- Advanced analytics? £30/month

Suddenly that free website costs £100-150/month.

### Hidden Cost 3: SEO Disasters

Cheap website builders often:
- Generate bloated code that loads slowly
- Don't allow proper SEO optimization
- Use shared hosting that hurts rankings
- Create duplicate content issues

Result? Nobody finds your website on Google.

### Hidden Cost 4: Maintenance Nightmares

When something breaks (and it will):
- Support takes 3-5 days to respond
- You can't access the code to fix it yourself
- Platform updates break your customizations
- No backups unless you pay extra

### Hidden Cost 5: Migration Headaches

Want to switch platforms later? 

Most cheap builders lock you in with proprietary code. You'll pay £500-1,500 to migrate everything to a proper platform.

### Hidden Cost 6: The Offshore Gamble

Tempted by a £200 developer in India or Pakistan? 

[Read why offshore development comes with even more hidden costs and legal risks](/blog/offshore-development-risks) - from GDPR fines to communication nightmares.

### Hidden Cost 7: Missed Automation Opportunities

A cheap site usually can't integrate proper AI or automation:

- No smart lead capture
- No chatbot or FAQ automation
- No integration with booking systems
- No retargeting or proper tracking

[See how small businesses use AI to save 10–20 hours per week](/blog/ai-for-small-businesses).

## The Real Cost of Cheap

Let's do the math:

**Cheap Website Builder (Year 1):**
- Initial setup: £0-50
- Monthly fees: £100 × 12 = £1,200
- Your time (20 hours): £300
- Migration costs (later): £1,000
- **Total: £2,500-3,000**

**Professional Website from X15 Digital:**
- One-time payment: £300-600
- Monthly fees: £0
- Your time: 2 hours
- Migration costs: £0 (you own everything)
- **Total: £300-600**

## What You're Actually Paying For

When you hire a professional (us or anyone reputable), you get:

1. **Speed** - Days, not weeks of your time
2. **Ownership** - All files, no lock-in
3. **SEO** - Proper setup from day one
4. **Support** - Direct access to the developer
5. **Quality** - Code that works and scales

## The Bottom Line

Cheap websites aren't cheap. They're expensive lessons in why professional work costs what it costs.

Want to do it right the first time? [See our packages](/services) or [get a free quote](/contact).
      `,
    },
    "ai-for-small-businesses": {
      title: "How Small Businesses Can Use AI Without Being Techy",
      category: "AI Automation",
      date: "2024-03-10",
      readTime: 7,
      author: "Abdul M Taher",
      seoTitle: "How Small Businesses Can Use AI Without Being Techy | X15 Digital",
      seoDescription:
        "AI automation isn't just for tech giants. Learn how UK small businesses use chatbots, voice agents and automation to save 10–20 hours per week without any technical skills.",
      seoKeywords:
        "AI for small business, AI automation UK, chatbot for small business, AI voice agent, save time with AI",
      ogImage: blogAiAutomation,
      heroAlt: "Business owner using AI tools on a laptop to automate messages and bookings",
      content: `
## AI Isn't Just for Tech Giants

Small businesses are using AI to save 20+ hours per week. Here's how you can too - without needing a computer science degree.

### Real Example: Sarah's Salon

Sarah runs a salon in Brighton. She was spending 2 hours daily:
- Answering booking inquiries
- Responding to "Are you open?" messages
- Handling after-hours calls

**Solution:** AI chatbot (£50/month)

**Results:**
- 80% of questions answered automatically
- Bookings increased 30% (24/7 availability)
- Sarah saves 10 hours/week
- ROI: Paid for itself in 5 days

### Real Example: James the Plumber

James gets 30+ calls daily. Half are "How much for X?" He was missing jobs because he couldn't answer during work.

**Solution:** AI voice agent (£100/month)

**Results:**
- Answers calls naturally 24/7
- Quotes common jobs automatically
- Books appointments in James's calendar
- Saves 15 hours/week

### 5 AI Tools That Actually Make Sense

#### 1. AI Chatbot (£50-100/month)
**Perfect for:** Service businesses, e-commerce, consultants

**What it does:**
- Answers FAQs instantly
- Captures lead information
- Works on website, Facebook, WhatsApp
- Qualifies customers before they reach you

**Setup time:** 2-4 days

**Real savings:** 10-15 hours/week

#### 2. AI Voice Agent (£100-200/month)
**Perfect for:** Salons, clinics, offices with high call volume

**What it does:**
- Answers phone calls naturally
- Books appointments
- Takes detailed messages
- Handles after-hours inquiries

**Setup time:** 5-7 days

**Real savings:** 15-20 hours/week

#### 3. Email Automation (£100-400/month)
**Perfect for:** Sales teams, marketing, lead nurturing

**What it does:**
- Automated email sequences
- Smart follow-ups
- Personalized at scale
- A/B testing

**Setup time:** 3-5 days

**Real savings:** 5-10 hours/week

#### 4. Social Media Manager (£50-150/month)
**Perfect for:** Retail, online brands, content creators

**What it does:**
- Auto-posts to platforms
- Responds to comments
- Schedules content
- Analytics tracking

**Setup time:** 2-4 days

**Real savings:** 8-12 hours/week

#### 5. Workflow Automation (£150-600/month)
**Perfect for:** E-commerce, logistics, operations

**What it does:**
- Multi-app integrations
- Automated data entry
- Order processing
- Custom workflows

**Setup time:** 5-10 days

**Real savings:** 10-20 hours/week

### Common Objections (And Why They're Wrong)

**"But AI isn't personal!"**

Modern AI sounds human. Customers can't tell the difference for basic inquiries. For complex questions, it routes to you.

**"It's too expensive!"**

£50-200/month vs. hiring part-time help (£800-1,200/month). You do the math.

**"I don't have time to set it up!"**

We do it for you. 2-7 days and it's live. You spend 30 minutes training it on your business.

**"What if it makes mistakes?"**

It routes complex questions to you. Learns from corrections. Gets smarter over time.

### How to Get Started (3 Steps)

#### Step 1: Identify Your Time Sink
Where do you spend the most repetitive time?
- Answering the same questions?
- Booking appointments?
- Email follow-ups?
- Social media posting?

#### Step 2: Choose the Right Tool
Match your time sink to the right AI solution. Not sure? [Take our 30-second quiz](/start).

#### Step 3: Set It Up (We Help)
We handle the technical stuff. You just tell us about your business.

Setup takes 2-7 days. You save hours every week forever.

## The Bottom Line

AI automation isn't complicated. It's just smart business.

**£50-200/month** to save **10-20 hours/week** = **No-brainer investment**

If your current website is weak or built on a cheap builder, fix that first so AI actually has something solid to plug into. [See why cheap websites cost more in the long run](/blog/cheap-websites).

Ready to automate? [See our AI services](/services#ai-automation) or [get a free quote](/contact).
      `,
    },
    "offshore-development-risks": {
      title: "The Hidden Dangers of Hiring Offshore Web Developers",
      category: "Web Development",
      date: "2024-03-20",
      readTime: 6,
      author: "Abdul M Taher",
      seoTitle: "The Hidden Dangers of Hiring Offshore Web Developers | X15 Digital",
      seoDescription:
        "That £200 offshore developer might look cheap, but GDPR fines up to £17.5M, poor quality, and zero legal protection make it an expensive gamble for UK businesses.",
      seoKeywords:
        "offshore web development risks, hire UK developer, GDPR fines, cheap offshore developer, UK website compliance",
      ogImage: blogOffshoreRisks,
      heroAlt: "Laptop showing a red warning sign symbolising offshore web development risks for UK businesses",
      content: `
## Why That £100 Developer in India Costs £2,000 Later

"Get a website built in India for £100!"

Sounds brilliant. Until you actually try it.

Here's what happens when UK businesses go offshore.

### Danger 1: They Don't Know the UK Market

You hire someone in Pakistan or India for £150. Site looks decent at first.

Then your actual UK customers start using it.

**What they notice:**

Phone number's in some weird international format (not 020 or 07)  
Everything's spelled wrong - "color", "center", "labor"  
No mention of Gas Safe, FCA, or whatever your industry needs  
Cookie popup looks legit but does absolutely nothing  
Stock photos that scream "not British"  

**What happens:**

Visitors quietly wonder if you're even a real UK business.  
Trust drops.  
Enquiries drop.  
You end up paying someone else to fix it.

**Why this happens:**

They've never lived here. They don't know what UK customers expect.

Gas Safe certificate? Never seen one.  
UK phone numbers? No idea they start with 020 or 07.  
"Colour" vs "color"? They spell it the way Microsoft does.

None of this is obvious until your customers notice.

**What it costs to fix:**

Rewrite everything in proper English: £300-600  
Add UK trust signals and certifications: £300-800  
Sort the forms and GDPR mess: £200-400  
**Total: £800-1,800**

That £100 saving just cost you £800-1,800.

---

### Danger 2: GDPR Will Absolutely Destroy You

The ICO can fine you **£17.5 million or 4% of your turnover** - whichever's bigger.

**Real fines they've actually issued:**

British Airways - **£20 million**  
Marriott - **£18.4 million**  
Ticketmaster - **£1.25 million**

These companies have entire legal departments.

Your developer in Mumbai has never even heard of PECR.

**What they get wrong:**

Contact forms with no privacy notice  
Your data sitting on some random server in god-knows-where  
Cookie banner that looks professional but does precisely nothing  
Email lists built with zero consent tracking  
No legal agreements with any of the services they've plugged in  

**The killer:**

**You're** legally responsible. Not them.

The ICO doesn't care that "my developer was supposed to handle that."

**What it costs when you realize:**

GDPR audit: £800-2,000  
Actually implementing proper consent: £500-1,500  
Rewriting all your legal pages: £300-700  
Getting proper agreements in place: £300-800  
**Total: £1,900-5,000**

Your £100 website just became a £2,000 nightmare.

---

### Danger 3: They Take Your Money and Disappear

Standard pattern:

Pay 50% up front.  
They send a preview (template they've tweaked).  
Pay the other 50%.  
Communication slows.  
Then stops completely.

Half-finished site. Money gone. No recourse.

**Why you're stuck:**

No UK contract.  
No UK small claims court.  
They're in Karachi or Manila or Delhi.  
Good luck.

---

### Danger 4: Time Zones Kill Everything

Contact form breaks Tuesday 9am.

You message your developer in India. It's 2:30pm there - they're finishing work.

Wednesday morning: "Will check this."

You reply. They're asleep.

Thursday: Fixed.

**Two days for a 10-minute fix.**

**Time differences:**

Eastern Europe - 2-3 hours ahead (manageable)  
India, Pakistan, Bangladesh - 5-5.5 hours ahead  
China, Philippines, Vietnam - 7-8 hours ahead  
Mexico, Brazil - 5 hours behind  

Every single change becomes a 24-48 hour cycle.

When you need something fixed *today*, you're screwed.

---

### Danger 5: The Real Problem Isn't English

Most offshore devs speak decent English.

The problem is they don't know:

UK business culture  
What UK customers expect  
UK-specific legal requirements  
How your UK competitors do things  

**Example:**

They build you a contact form asking for: full address, date of birth, company registration number, detailed project requirements.

Sounds thorough, right?

Dead wrong.

UK visitors see that and leave. You'll lose 70% of enquiries.

A UK developer knows: name, email, phone, quick message. Done. Get details on the call.

Small difference. **Massive** impact.

---

### Danger 6: You Can't Check What They're Actually Building

You're not a developer. You can't tell if:

The code's secure  
It'll actually last  
Google can find it  
It meets UK accessibility law (legal requirement)  

**What we see constantly:**

Code copy-pasted from five different YouTube tutorials  
Fifteen plugins stacked up with no security updates  
Works on their laptop, completely broken on mobile  
Zero consideration for UK accessibility requirements  

By the time you realize, you're paying someone £800-1,500 to rebuild it properly.

---

### Danger 7: Support When You Actually Need It

Website's broken. You need it fixed today.

**Real scenarios:**

Contact form stops working - no more enquiries  
Your Google tracking breaks - you're flying blind  
Urgent promotion needs adding - deadline's tomorrow  
Legal change requires new wording - you need it now  

**Offshore support:**

Message them. Wait overnight.  
They reply. You're asleep.  
Each tiny change: 24-48 hours minimum.  

**UK support:**

Usually sorted same day.  
Often within a couple hours.  
You can actually call them if it's urgent.  

Massive difference when it's costing you customers.

---

### Danger 8: You're Just Job #147

To your developer in Mumbai, you're another ticket in the queue.

To a UK developer building local reputation? You're a potential 5-star Google review and three referrals.

Changes everything.

**Offshore thinking:** Ship it. Get paid. Next.

**UK thinking:** Make them successful. Get reviews. Build reputation.

---

### What You'll Actually Pay

**Offshore developer (real total cost):**

Initial build: £100-200  
Your time chasing them: 20 hours (£300+ of your time)  
GDPR fixes: £500-1,500  
Quality issues: £800-1,500  
Final rebuild with UK dev: £600-1,400  
**Real total: £2,300-4,400**

**UK developer:**

Initial build: £300-600  
Your time: 2-3 hours  
GDPR: included  
Quality: guaranteed  
Support: same-day  
**Real total: £300-600**

Math doesn't lie.

---

### When Offshore Actually Works

Offshore isn't always wrong.

**It works if:**

You've got a tech lead managing them  
You're a tech company augmenting your team  
It's an internal tool, not your public site  
You can review code quality yourself  

**It doesn't work if:**

This is your main website  
You're a small UK business  
You can't check code quality  
You need reliable support  

Simple.

---

### Better Options

**Option 1 - Hire UK**

Same legal system.  
Know your market.  
Same timezone.  
Actually accountable.  

**Option 2 - Decent no-code tools**

Webflow, Framer, Squarespace.  
Learn it yourself in a weekend.  
Better than a botched offshore job.  

**Option 3 - Hybrid**

UK dev builds the foundation.  
You handle content updates.  
Call them for bigger stuff.  

---

### Cheap UK Builders Have the Same Problem

Different trap, same expensive outcome.

[See why those £50 "website builders" end up costing £2,500+](/blog/cheap-websites).

---

## Bottom Line

£100 saved now = £2,000+ spent later.

Plus stress. Lost customers. Wasted time.

Want a site built for the UK market, legally compliant, and actually supported?

[See our UK packages](/web-package) or [get a free quote](/contact).

**P.S.** We're in London. UK company, UK address, UK phone number, UK courts. When something breaks, you know exactly where to find us. Try doing that with your developer in Delhi.
  `,
    },
  };

  const currentPost = posts[slug || ""];

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="py-16 px-4 text-center">
          <h1 className="text-3xl font-bold text-secondary mb-4">Post Not Found</h1>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={currentPost.seoTitle}
        description={currentPost.seoDescription}
        keywords={currentPost.seoKeywords}
        ogType="article"
        ogImage={currentPost.ogImage}
      />
      <ScrollProgressBar />
      <Navigation />

      {/* Back Button */}
      <div className="pt-40 pb-4 md:pt-44 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="ghost" className="gap-2">
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-64 md:h-96 bg-muted overflow-hidden">
        <img src={currentPost.ogImage} alt={currentPost.heroAlt} className="w-full h-full object-cover" />
      </div>

      {/* Post Content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto fade-in-section">
          <Badge className={`mb-4 ${getCategoryBadgeClass(currentPost.category)}`}>{currentPost.category}</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-6">{currentPost.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8 pb-8 border-b border-border">
            <span>By {currentPost.author}</span>
            <span>•</span>
            <span>
              {new Date(currentPost.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span>•</span>
            <span>{currentPost.readTime} min read</span>
          </div>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{
              __html: currentPost.content
                .split("\n")
                .map((line: string) => {
                  if (line.startsWith("## ")) {
                    return `<h2 class="text-2xl font-bold text-secondary mt-8 mb-4">${line.slice(3)}</h2>`;
                  } else if (line.startsWith("### ")) {
                    return `<h3 class="text-xl font-bold text-secondary mt-6 mb-3">${line.slice(4)}</h3>`;
                  } else if (line.startsWith("#### ")) {
                    return `<h4 class="text-lg font-semibold text-secondary mt-4 mb-2">${line.slice(5)}</h4>`;
                  } else if (line.startsWith("- ")) {
                    return `<li class="ml-6">${line.slice(2)}</li>`;
                  } else if (line.includes("[") && line.includes("](/")) {
                    const match = line.match(/\[([^\]]+)\]\(([^)]+)\)/);
                    if (match) {
                      return line.replace(
                        match[0],
                        `<a href="${match[2]}" class="text-primary hover:underline">${match[1]}</a>`,
                      );
                    }
                  }
                  return line ? `<p class="mb-4">${line}</p>` : "";
                })
                .join(""),
            }}
          />
        </div>
      </article>

      {/* Share Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Share2 className="h-5 w-5 text-primary" />
            <p className="font-semibold">Like this post?</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              onClick={() =>
                window.open(
                  `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    window.location.href,
                  )}&text=${encodeURIComponent(currentPost.title)}`,
                  "_blank",
                )
              }
            >
              <Twitter className="mr-2 h-4 w-4" /> Share on Twitter
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                window.open(
                  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                  "_blank",
                )
              }
            >
              <Linkedin className="mr-2 h-4 w-4" /> Share on LinkedIn
            </Button>
            <Button variant="outline" onClick={copyLink}>
              <Share2 className="mr-2 h-4 w-4" /> Copy Link
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Ready to start your project?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/services">
                See Our Packages <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">
                Get Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-secondary mb-8 text-center">Related Posts</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(posts)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, post]) => (
                <Card key={key} className="hover-lift">
                  <CardHeader>
                    <Badge className={`mb-2 w-fit ${getCategoryBadgeClass(post.category)}`}>{post.category}</Badge>
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/blog/${key}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default BlogPost;
