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

  const posts: any = {
    "cheap-websites": {
      title: "Why Cheap Websites Cost More in the Long Run",
      category: "Web Development",
      date: "2024-03-15",
      readTime: 5,
      author: "Abdul M Taher",
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

Ready to automate? [See our AI services](/services#ai-automation) or [get a free quote](/contact).
      `,
    },
    "offshore-development-risks": {
      title: "The Hidden Dangers of Hiring Offshore Web Developers",
      category: "Web Development",
      date: "2024-03-20",
      readTime: 6,
      author: "Abdul M Taher",
      content: `
## Why £200 from India Costs £2,000 in the Long Run

"Get a website built in India for £200!" 

Sounds tempting. Until you realize what you're actually getting.

Here's what nobody tells you about offshore development:

### Danger 1: They Don't Understand the UK Market

**Real Example:**

A London plumber hired a developer in Pakistan for £150. The website looked professional.

**Problems:**
- Phone number format was wrong (international, not UK)
- Spelling was American ("color" not "colour")
- No mention of Gas Safe certification (required by UK law)
- No GDPR compliance whatsoever
- Called customers "clients" instead of using UK trades terminology

**Cost to fix:** £800 + lost customers who thought it was a scam site

### Danger 2: GDPR Violations Can Cost You £17.5 Million

This isn't a typo. The ICO (UK data regulator) can fine you **up to £17.5 million** for GDPR violations.

**Common offshore GDPR failures:**
- Contact forms with no privacy policy
- Data stored outside UK/EU without proper safeguards
- No cookie consent (£50,000+ fine)
- Email lists without proper opt-in
- No data protection officer contact

**One UK business** was fined £80,000 because their offshore developer didn't implement basic GDPR requirements.

You're legally responsible - not them.

### Danger 3: The "Paid and Disappeared" Scam

**How it works:**

1. You pay 50% upfront (£100-500)
2. They send "preview" (stolen template)
3. You pay remaining 50%
4. They disappear or deliver rubbish
5. You can't sue them (they're overseas)

**UK legal protection:** ZERO

No UK contracts. No UK courts. No recourse.

### Danger 4: Communication Nightmares

**Time zones:**
- India: 5.5 hours ahead
- Philippines: 8 hours ahead
- Pakistan: 5 hours ahead

**Real conversation:**

**You (9am UK):** "The contact form is broken"

**Them (2pm their time, already leaving):** "Will check tomorrow"

**You (next morning):** "Any update?"

**Them (just waking up):** "Looking now"

**Result:** 2 days to fix a 10-minute problem.

### Danger 5: English Isn't the Problem - Context Is

Most offshore developers speak English well. That's not the issue.

**The real problem:**

They don't know:
- UK business culture
- UK consumer expectations
- UK legal requirements
- UK payment systems (Stripe vs UK banks)
- UK competitor standards

**Example:**

Indian developer: "Contact form requires full address"

**Why it's wrong:** UK customers won't fill out long forms. You'll lose 70% of leads.

A UK developer knows: "Just name, email, phone - we'll get details later."

### Danger 6: Quality Control Is Impossible

You can't check the code quality. You don't know if:
- It's secure (hackers love poorly coded sites)
- It's optimized (affects Google rankings)
- It follows UK accessibility law (required by Equality Act 2010)
- It works on all devices

**One business** discovered their offshore developer copy-pasted code from 5 different sources. Site broke after 3 months.

**Fix cost:** £1,200

### Danger 7: Ongoing Support? Good Luck.

**What happens when:**
- Your website breaks at 2pm Friday?
- You need urgent changes for a promotion?
- Google changes their algorithm?
- You want to add a feature?

**Offshore:** 24-48 hour response (if they respond at all)

**UK-based:** Same-day fixes, often within hours

### Danger 8: They Don't Care About Your Success

Hard truth: To an offshore developer, you're job #147 this month.

To a UK developer building a local reputation? You're a potential 5-star review and referral source.

**Offshore motivation:** Finish fast, get paid, move to next client

**UK motivation:** Make you successful so you refer others

### The Real Cost Comparison

**Offshore Developer:**
- Initial cost: £200-500
- Communication delays: 20 hours of your time (£300)
- GDPR compliance fixes: £500-1,000
- Quality issues: £800-1,500
- Redo with UK developer: £600-1,400
- **Total: £2,400-4,400**

**UK Developer (X15 Digital):**
- Initial cost: £300-600
- Your time: 2 hours
- GDPR: Included
- Quality: Guaranteed
- Redo: £0
- **Total: £300-600**

### When Offshore Makes Sense

I'll be honest - there ARE situations where offshore works:

**Good offshore scenarios:**
- You're a tech company with full-time dev team
- You need a developer to augment your in-house team
- You're building an internal tool (not customer-facing)
- You have technical expertise to review code

**Bad offshore scenarios:**
- You're a small UK business
- This is your main website
- You don't know how to check code quality
- You need ongoing support

### Not Sure What's Worse?

Cheap UK website builders have their own hidden costs too. 

[See our full breakdown of why cheap websites cost more than you think](/blog/cheap-websites).

### What to Do Instead

**Option 1:** Hire UK-based (us or competitors)
- Full GDPR compliance
- UK consumer understanding
- Same-day support
- Legal recourse

**Option 2:** Use quality no-code tools yourself
- Framer, Webflow, Squarespace
- Learn in a weekend
- Better than bad offshore work

**Option 3:** Hybrid approach
- UK developer sets up foundation
- You handle small updates
- Call them for major changes

## The Bottom Line

£200 saved = £2,000+ in problems

**Offshore development isn't cheap. It's expensive amateur hour.**

Want it done right? [See our UK-based packages](/web-package) or [get a free quote](/contact).

**P.S.** We're based in London. You can literally visit our office. Try doing that with your developer in Mumbai.
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
        title={`${currentPost.title} | X15 Digital Blog`}
        description={currentPost.content
          .substring(0, 160)
          .replace(/[#*\n]/g, " ")
          .trim()}
        keywords={`${currentPost.category}, web development, AI automation, UK business`}
        ogType="article"
      />
      <ScrollProgressBar />
      <Navigation />
      <BreadcrumbNav />

      {/* Back Button */}
      <div className="py-4 px-4 sm:px-6 lg:px-8 bg-background">
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
        <img
          src={
            slug === "cheap-websites"
              ? blogWebDev
              : slug === "offshore-development-risks"
                ? blogOffshoreRisks
                : blogAiAutomation
          }
          alt={currentPost.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Post Content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto fade-in-section">
          <Badge className="mb-4">{currentPost.category}</Badge>
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
              .map(([key, post]: [string, any]) => (
                <Card key={key} className="hover-lift">
                  <CardHeader>
                    <Badge className="mb-2 w-fit">{post.category}</Badge>
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
