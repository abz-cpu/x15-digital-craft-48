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
## Why That £200 Offshore Developer Costs £2,000 Later

"Get a website built for £200!"

Sounds brilliant. Until it isn't.

Here's what actually happens when UK businesses hire offshore developers.

### Danger 1: They Don't Know the UK Market

You hire someone overseas for £200. The site looks fine at first.

Then your actual UK customers start using it.

**What they notice:**

Phone numbers that look weird (international format instead of 020 or 07)  
American spelling everywhere - "color", "center", "optimize"  
No mention of UK certifications (Gas Safe, FCA, whatever your industry needs)  
Generic cookie popup that does nothing  
Stock photos that don't look remotely British  

**What happens next:**

Visitors quietly wonder if you're actually a UK business.  
Trust drops.  
Enquiries drop.  
You pay someone else to fix it all.

**Why this happens:**

The developer's never lived in the UK. They don't know what UK customers expect to see.

They don't know:
- How UK phone numbers work
- That we spell "colour" not "color"  
- What Gas Safe certification is
- Why GDPR matters here
- How UK customers compare you to competitors

**The fix costs:**

Content rewrite in proper English: £300-600  
Fixing trust signals and certifications: £300-800  
Sorting forms and GDPR stuff: £200-400  
**Total: £800-1,800**

All because it wasn't built for your market.

---

### Danger 2: GDPR Will Destroy You

The ICO can fine you **£17.5 million or 4% of your turnover** - whichever's higher.

**Real fines they've actually issued:**

British Airways - **£20 million**  
Marriott - **£18.4 million**  
Ticketmaster - **£1.25 million**

Those companies have legal teams and security experts.

Now imagine your site's built by someone who's never actually dealt with UK GDPR.

**What offshore developers get wrong:**

Contact forms with no privacy notice  
Data stored on random servers overseas  
Cookie banners that look legit but do nothing  
Email lists with zero consent records  
No agreements with the services they're using  

**Here's the killer:**

You're legally responsible. Not them.

When the ICO comes asking questions, "my developer handled that" won't save you.

**What it costs to fix later:**

GDPR audit: £800-2,000  
Proper consent mechanisms: £500-1,500  
Legal documents: £300-700  
Data processing agreements: £300-800  
**Total: £1,900-5,000**

That £200 saving doesn't look so clever now.

---

### Danger 3: They Take Your Money and Vanish

You pay 50% up front.  
They send you a preview (usually a template they've tweaked).  
You pay the other 50%.  
Communication slows down.  
Then stops.

You're left with half-finished work and no way to get your money back.

**Why you can't do anything:**

No UK contract.  
No UK court you can use.  
They're in another country.  
You're stuck.

---

### Danger 4: Time Zones Kill Your Speed

Your contact form breaks at 9am Tuesday morning.

You message your developer. It's 2pm where they are - they're finishing up.

Wednesday morning: "Looking at it now."

You reply. They're asleep.

Thursday: Fixed.

**A 10-minute job just took two days.**

**Common time gaps:**

Eastern Europe - 2-3 hours ahead  
India, Pakistan, Bangladesh - 5-5.5 hours ahead  
China, Philippines, Vietnam - 7-8 hours ahead  
Mexico, Brazil, Argentina - 5 hours behind  

The further away they are, the slower everything moves.

When you need something sorted *today*, this is a nightmare.

---

### Danger 5: English Isn't the Problem

Most offshore developers speak fine English.

That's not the issue.

The issue is they don't know:

How UK business works  
What UK customers expect  
UK-specific legal requirements  
How your competitors here do things  

**Example:**

They build you a contact form that asks for full address, date of birth, and a detailed project description.

Sounds thorough, right?

Wrong.

UK visitors see a long form and bounce. You lose 70% of enquiries.

A UK developer knows: name, email, phone, short message. That's it. Get details later.

Small difference. Massive impact.

---

### Danger 6: You Can't Check the Quality

Most business owners aren't developers. You can't tell if the code's:

- Secure  
- Going to work long-term  
- Search-engine friendly  
- Accessible (which you legally need)  

**What we see a lot:**

Code copy-pasted from 5 different tutorials  
Plugins stacked up with no security updates  
Sites that work on a laptop but break on phones  
Zero attention to UK accessibility law  

By the time you realize there's a problem, you're paying someone else £800-1,500 to rebuild it properly.

---

### Danger 7: Support When You Need It

Your website's how you get work. When something breaks, you need it fixed *now*.

Real situations:

Contact form stops working  
Google Analytics breaks  
You need to add an urgent promotion  
Legal requirement changes and you need new wording  

**Offshore support:**

Reply comes overnight.  
Each small change takes 24-48 hours.  
Your working days don't overlap.  

**UK-based support:**

Usually sorted same day.  
Often within hours.  
You can actually call them.  

---

### Danger 8: They Don't Care If You Succeed

To most offshore developers, you're job #147 this month.

To a UK developer building local reputation? You're a potential 5-star Google review and three referrals.

That changes everything.

**Offshore thinking:** Finish it. Get paid. Next job.

**UK thinking:** Make them successful. Get reviews. Get more work.

---

### The Actual Cost

**Offshore developer - what you actually end up paying:**

Initial build: £200-500  
Your time chasing and explaining: 20 hours (£300+)  
Fixing GDPR and compliance: £500-1,500  
Sorting quality issues: £800-1,500  
Rebuild with UK developer: £600-1,400  
**Total: £2,400-4,400**

**UK developer - what you actually pay:**

Initial build: £300-600  
Your time: 2-3 hours  
Compliance: included  
Support: available same day  
**Total: £300-600**

---

### When Offshore Actually Works

Look, offshore isn't always wrong.

It can work if:

You've got a tech lead in-house to manage them  
You're a tech company adding to an existing team  
It's an internal tool, not your public website  
You know how to check code quality yourself  

**It doesn't work if:**

This is your main website  
You're a small UK business  
You can't assess code quality  
You need reliable support  

---

### What to Do Instead

**Option 1 - Hire UK-based**

Same legal system.  
They know your market.  
Faster communication.  
You can actually chase them up.  

**Option 2 - Use proper no-code tools yourself**

Webflow, Framer, Squarespace.  
Learn it in a weekend.  
Still better than a messy offshore build.  

**Option 3 - Hybrid**

UK developer builds the foundation.  
You update content yourself.  
Bring them back for bigger changes.  

---

### Cheap Website Builders Aren't Better

Different problems, same expensive outcome.

[See why "cheap" website builders cost more than you think](/blog/cheap-websites).

---

## The Bottom Line

£200 saved now = £2,000+ in fixes later.

Plus stress. Plus lost customers. Plus wasted time.

Want a site built for the UK market, legally solid, and properly supported?

[See our UK-based packages](/web-package) or [get a free quote](/contact).

**P.S.** We're in London. UK address, UK phone, UK legal system. When something needs fixing, you know where to find us.
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
