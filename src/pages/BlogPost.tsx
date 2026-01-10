import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Share2, Linkedin, Twitter, ArrowLeft } from "lucide-react";
import blogWebDev from "@/assets/blog-web-dev.png";
import blogAiAutomation from "@/assets/blog-ai-automation.png";
import blogOffshoreRisks from "@/assets/blog-offshore-risks.png";
import blogStratfordWebDev from "@/assets/blog-stratford-web-developer.png";
import blogEastLondonTips from "@/assets/blog-east-london-website-tips.png";
import blogHackneySeo from "@/assets/blog-hackney-shoreditch-seo.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActionMenu from "@/components/FloatingActionMenu";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { SEO } from "@/components/SEO";
import { ArticleSchema } from "@/components/ArticleSchema";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { HowToSchema } from "@/components/HowToSchema";

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
      date: "2025-03-15",
      readTime: 5,
      author: "Abdul M Taher",
      seoTitle: "Why Cheap Websites Cost More in the Long Run | L&D Digital",
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

**Professional Website from L&D Digital:**
- One-time payment: £300-600
- Monthly hosting: Optional from £25/month
- Your time: 2 hours
- No hidden fees, transparent pricing
- **Total: £300-600 + optional hosting**

## What You're Actually Paying For

When you hire a professional (us or anyone reputable), you get:

1. **Speed** - Days, not weeks of your time
2. **Your domain & content** - No lock-in on what's yours
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
      date: "2025-03-10",
      readTime: 7,
      author: "Abdul M Taher",
      seoTitle: "How Small Businesses Can Use AI Without Being Techy | L&D Digital",
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
      date: "2025-03-20",
      readTime: 6,
      author: "Abdul M Taher",
      seoTitle: "The Hidden Dangers of Hiring Offshore Web Developers | L&D Digital",
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
    "best-web-developer-stratford-2026": {
      title: "Best Web Developer in Stratford: What to Look for in 2026",
      category: "Web Development",
      date: "2026-01-05",
      readTime: 8,
      author: "Abdul M Taher",
      seoTitle: "Best Web Developer in Stratford 2026 | What to Look For | L&D Digital",
      seoDescription:
        "Looking for the best web developer in Stratford, East London? Learn what makes a great developer, red flags to avoid, and how to choose the right partner for your E15/E20 business.",
      seoKeywords:
        "web developer stratford 2026, best web developer E15, stratford website design, web design stratford east london, website developer olympic park",
      ogImage: blogStratfordWebDev,
      heroAlt: "Modern website design for Stratford businesses near the Olympic Park",
      content: `
## Finding the Best Web Developer in Stratford

Stratford has transformed dramatically since the 2012 Olympics. The Queen Elizabeth Olympic Park, Westfield Stratford City, and the International Quarter have turned E15 and E20 into one of London's most dynamic business hubs.

Whether you're a startup in the East Village, a retailer near Westfield, or a service provider serving the Stratford community, your website needs to work as hard as you do.

But how do you find the right web developer in Stratford? Here's what to look for.

### What Makes a Great Stratford Web Developer?

#### 1. Local Market Knowledge

A developer who understands Stratford knows:

- The diverse mix of businesses from tech startups to traditional trades
- The importance of standing out in a competitive, regenerated area
- Local customer expectations and search behaviours
- The balance between premium Olympic Park businesses and community-focused services

**Red flag:** Developers who've never heard of Westfield Stratford or don't know what E15 means.

#### 2. Transparent Pricing

Stratford businesses range from bootstrapped startups to well-funded enterprises. A good developer offers:

- Clear pricing from the start (we start at £200)
- No hidden fees or surprise costs
- Scalable solutions that grow with your business
- Honest advice about what you actually need

**Red flag:** Vague quotes like "it depends" with no ballpark figures.

#### 3. Fast Turnaround

In a fast-moving area like Stratford, you can't wait months for a website. Look for:

- Realistic timelines (most sites can launch in 1-14 days)
- Clear milestones and communication
- Responsive to urgent requests
- Understanding of your business launch timelines

**Red flag:** Developers who can't give you a delivery date.

#### 4. Mobile-First Design

Stratford's commuters and shoppers are on their phones. Your developer should prioritise:

- Mobile responsiveness as standard
- Fast loading on 4G/5G networks
- Touch-friendly navigation
- Local SEO for "near me" searches

**Red flag:** Desktop-only mockups or slow mobile load times.

### Questions to Ask Before Hiring

1. **"Can you show me Stratford or East London client work?"** - Local experience matters.

2. **"What's included in your price?"** - Avoid surprise add-ons.

3. **"Who owns the website after you build it?"** - Understand what you're getting.

4. **"How do you handle support after launch?"** - You'll need help eventually.

5. **"Are you GDPR compliant?"** - Non-negotiable for UK businesses.

### Local Stratford Landmarks We Serve

We work with businesses near:

- **Queen Elizabeth Olympic Park** - Sports, leisure, and event businesses
- **Westfield Stratford City** - Retail, hospitality, and services
- **International Quarter** - Corporate and professional services
- **East Village** - Residential services and local traders
- **Stratford High Street** - Traditional retail and community businesses

### Why Local Matters for Stratford Businesses

Choosing a local web developer means:

- Same-day meetings when you need them
- Understanding of Stratford's unique business landscape
- Knowledge of local competition and opportunities
- Faster support when issues arise
- Personal accountability and reputation at stake

### What We Offer Stratford Businesses

At L&D Digital, we're based in East London and understand the Stratford market:

- **Websites from £200** - Professional sites that don't break the bank
- **1-14 day delivery** - Launch when you're ready
- **Your domain & content** - You own what's yours
- **GDPR compliant** - Built for UK businesses
- **WhatsApp support** - We're one message away

### Ready to Get Started?

Whether you're a new business in the Olympic Park or an established Stratford trader, we'd love to help you succeed online.

For more tips on building your East London business website, check out our [Website Design Tips for East London Small Businesses](/blog/website-design-tips-east-london).

[Get a free quote](/contact) or [WhatsApp us on 07356 260648](https://wa.me/447356260648).

**Local tip:** Mention you're from Stratford when you get in touch - we love supporting local businesses!
      `,
    },
    "website-design-tips-east-london": {
      title: "Website Design Tips for East London Small Businesses",
      category: "Web Development",
      date: "2026-01-08",
      readTime: 7,
      author: "Abdul M Taher",
      seoTitle: "Website Design Tips for East London Small Businesses | L&D Digital",
      seoDescription:
        "Practical website design advice for small businesses in Stratford, Ilford, Hackney, and across East London. Build trust, improve SEO, and convert more local customers.",
      seoKeywords:
        "website design east london 2026, web design tips small business, east london business website, local business website design, ilford web design, hackney website",
      ogImage: blogEastLondonTips,
      heroAlt: "Small business owner in East London working on their website design",
      content: `
## Website Design Tips for East London Small Businesses

Running a small business in East London means competing with everyone from global chains to local specialists. Your website is often your first impression - make it count.

Whether you're a plumber in Ilford, a salon in Hackney, or a café in Walthamstow, these tips will help your website convert more visitors into customers.

### Tip 1: Lead With Your Location

East London customers want to know you're local. Make it obvious:

- Put your area in your headline ("Trusted Electrician in Stratford")
- List the postcodes you serve (E15, E20, etc.)
- Mention local landmarks ("5 minutes from Westfield")
- Include your full UK address and phone number

**Why it works:** 46% of Google searches are looking for local businesses. Make sure they find you.

### Tip 2: Show Your Face (or Team)

East London is a community. People buy from people they trust.

- Use real photos, not stock images
- Show your team, your van, your shop front
- Include a personal bio or "About" section
- Share your connection to the local area

**Why it works:** Faces build trust. Anonymous businesses lose customers to personal ones.

### Tip 3: Make Contact Ridiculously Easy

Don't hide your contact details. East London customers expect:

- Phone number visible on every page
- WhatsApp option for quick queries
- Contact form that works (test it!)
- Click-to-call on mobile devices
- Response time expectations ("We reply within 2 hours")

**Why it works:** Every barrier to contact costs you customers. Remove them all.

### Tip 4: Mobile First, Desktop Second

Most East London searches happen on phones - on the bus, in the queue, walking down the high street.

- Test your site on mobile before anything else
- Keep buttons large and tap-friendly
- Load fast on 4G (under 3 seconds)
- Make phone numbers clickable
- Don't use tiny fonts or horizontal scrolling

**Why it works:** 60%+ of your visitors are on mobile. Ignore them at your peril.

### Tip 5: Include Social Proof

East London businesses thrive on word of mouth. Bring that online:

- Google reviews prominently displayed
- Before/after photos of your work
- Customer testimonials with real names
- Industry certifications (Gas Safe, FCA, etc.)
- Case studies or project examples

**Why it works:** Reviews are the digital version of "my mate recommended them."

### Tip 6: Optimise for Local SEO

Help East London customers find you on Google:

- Include your area in page titles ("Plumber Ilford | Emergency Plumbing IG1")
- Create location-specific pages if you serve multiple areas
- Set up Google Business Profile (free!)
- Get listed in local directories
- Use schema markup for local business

**Why it works:** Local SEO puts you in front of people actively searching for your services.

### Tip 7: Keep It Simple and Fast

East London customers are busy. Don't waste their time:

- Clear navigation (Home, Services, About, Contact)
- Prominent call-to-action ("Get Quote", "Book Now")
- Fast loading (compress images, minimal animations)
- Easy-to-read fonts and colours
- No autoplay videos or popups

**Why it works:** Confused visitors leave. Clear websites convert.

### Tip 8: Show Your Prices (or Ranges)

Price transparency builds trust with East London customers:

- At least show "from" prices
- Explain what's included
- Be clear about call-out fees
- Avoid "contact for quote" on everything
- Competitive pricing displayed confidently

**Why it works:** People compare prices. If yours aren't visible, they'll assume you're expensive.

### East London Areas We Specialise In

We've helped small businesses across:

- **Stratford & Olympic Park** - E15, E20
- **Ilford & Redbridge** - IG1-IG6
- **Hackney & Shoreditch** - E5, E8, E9, EC2
- **Walthamstow** - E17
- **Newham & East Ham** - E6, E7, E12, E13
- **Tower Hamlets** - E1, E14
- **Greenwich** - SE3, SE10

### Ready to Improve Your Website?

If your website isn't bringing in local customers, we can help. We build affordable websites (from £200) specifically for East London small businesses.

Want to improve your local search rankings? Read our [Local SEO Guide for Hackney & Shoreditch Businesses](/blog/local-seo-hackney-shoreditch). Looking for a developer in Stratford? See our guide on [What to Look for in a Web Developer](/blog/best-web-developer-stratford-2026).

[See our packages](/services) or [get a free quote](/contact).
      `,
    },
    "local-seo-hackney-shoreditch": {
      title: "Local SEO Guide: How Hackney & Shoreditch Businesses Get Found",
      category: "Web Development",
      date: "2026-01-09",
      readTime: 9,
      author: "Abdul M Taher",
      seoTitle: "Local SEO Guide for Hackney & Shoreditch Businesses 2026 | L&D Digital",
      seoDescription:
        "Complete local SEO guide for businesses in Hackney, Shoreditch, and East London. Learn how to rank higher on Google and attract more local customers.",
      seoKeywords:
        "local seo hackney 2026, seo shoreditch, local seo east london, google my business hackney, seo for small business london, hackney digital marketing",
      ogImage: blogHackneySeo,
      heroAlt: "Hackney and Shoreditch business owners discussing local SEO strategy",
      content: `
## Local SEO Guide: How Hackney & Shoreditch Businesses Get Found

Hackney and Shoreditch are home to some of London's most innovative businesses - from tech startups in Silicon Roundabout to artisan cafés on Broadway Market. But with so much competition, how do you make sure local customers find you?

This guide covers everything you need to rank higher on Google in E5, E8, E9, EC2, and N1.

### What is Local SEO?

Local SEO helps your business appear when people search for services "near me" or in a specific area. When someone in Hackney searches "coffee shop near me" or "electrician Shoreditch", local SEO determines who shows up first.

**The three places you want to appear:**

1. Google Maps (the map pack at the top of search results)
2. Regular search results (organic listings)
3. Google Business Profile (when people search your business name)

### Step 1: Claim and Optimise Google Business Profile

This is the single most important thing for local SEO. It's free and takes 30 minutes.

**What to do:**

1. Go to [Google Business Profile](https://business.google.com)
2. Claim or create your listing
3. Verify your address (Google sends a postcard or calls)
4. Complete every section:
   - Business name (exactly as it appears on signage)
   - Full address with postcode
   - Phone number (local UK number)
   - Website URL
   - Business hours (keep updated!)
   - Business description with keywords
   - Categories (choose carefully)
   - Photos (exterior, interior, team, products)

**Hackney/Shoreditch tips:**

- Use "Hackney" or "Shoreditch" in your business description
- Add photos of recognisable local landmarks
- Respond to every review within 24 hours

### Step 2: Get Your Website Right

Your website needs to tell Google where you are and what you do.

**Essential elements:**

- **NAP consistency:** Name, Address, Phone number exactly the same everywhere
- **Location pages:** If you serve multiple areas, create separate pages for each
- **Schema markup:** Technical code that helps Google understand your business
- **Local keywords:** "plumber Hackney", "café Shoreditch", "accountant E8"
- **Mobile optimised:** Most local searches are on phones

**Page title examples:**

- "Emergency Plumber Hackney | 24/7 Plumbing E5 E8 | [Business Name]"
- "Best Coffee Shop Shoreditch | Specialty Coffee EC2 | [Business Name]"
- "IT Support Hackney | Business Tech Services E9 | [Business Name]"

### Step 3: Build Local Citations

Citations are mentions of your business name, address, and phone number on other websites.

**Where to get listed:**

- Yell.com
- Thomson Local
- Yelp UK
- Bark.com
- Checkatrade (for trades)
- TripAdvisor (for hospitality)
- Industry-specific directories
- Local Hackney/Shoreditch business directories

**Critical rule:** Your NAP must be identical everywhere. "123 High Street" and "123 High St" count as different addresses to Google.

### Step 4: Collect Reviews (Systematically)

Reviews are huge for local SEO. More reviews + higher ratings = higher rankings.

**How to get more reviews:**

1. Ask happy customers directly ("Would you mind leaving us a Google review?")
2. Send follow-up emails with review links
3. Put QR codes at your premises linking to your review page
4. Respond to every review (positive and negative)
5. Never buy fake reviews (Google will penalise you)

**Hackney/Shoreditch context:**

Customers in these areas are savvy. They read reviews carefully. A few genuine, detailed reviews beat hundreds of fake 5-star ratings.

### Step 5: Create Local Content

Content that mentions Hackney and Shoreditch helps Google associate your business with the area.

**Content ideas:**

- "Best [Your Service] in Hackney: What to Look For"
- "Guide to [Topic] for Shoreditch Businesses"
- "How [Local Event] Affects [Your Industry]"
- Case studies featuring local clients
- Blog posts about local events or news

**Examples for different businesses:**

- Café: "Best Coffee Near Broadway Market"
- Plumber: "Common Plumbing Problems in Victorian Hackney Homes"
- Designer: "5 Shoreditch Startups With Amazing Branding"

### Step 6: Build Local Backlinks

Backlinks from other local websites boost your authority.

**How to get them:**

- Sponsor local events or sports teams
- Join Hackney/Shoreditch business networks
- Get featured in local publications (Hackney Gazette, etc.)
- Partner with complementary local businesses
- Offer expert quotes to local journalists

### Local SEO for Different Hackney/Shoreditch Areas

Each area has its own character. Tailor your approach:

**Shoreditch (EC2):**
- Tech-focused audience
- Competitive for creative services
- Emphasise innovation and modern approach

**Hackney Central (E8):**
- Mix of residential and commercial
- Community-focused businesses do well
- Emphasise local roots and reliability

**Hackney Wick (E9):**
- Creative and arts community
- Emerging business area
- Emphasise unique offering and creativity

**Dalston (E8):**
- Diverse, vibrant community
- Hospitality and nightlife strong
- Emphasise personality and character

### Common Local SEO Mistakes

**Avoid these:**

1. **Inconsistent NAP** - Different addresses on different sites
2. **Ignoring reviews** - Not responding or not asking for them
3. **No local keywords** - Generic content that doesn't mention your area
4. **Neglecting mobile** - Sites that don't work on phones
5. **Buying fake reviews** - Google will find out and penalise you

### How Long Does Local SEO Take?

Honest answer: 3-6 months for meaningful results.

**Timeline:**

- Week 1-2: Set up Google Business Profile
- Month 1: Fix website and build initial citations
- Month 2-3: Collect reviews and create content
- Month 3-6: Build backlinks and refine strategy

Local SEO is a marathon, not a sprint. But the compound effect is powerful - once you rank, you keep getting leads without paying for ads.

### Need Help With Local SEO?

We offer SEO services specifically for Hackney, Shoreditch, and East London businesses. From £300, we'll help you:

- Optimise your Google Business Profile
- Fix your website for local search
- Build citations and reviews strategy
- Create locally-focused content

Need a website built for local success? Check out our guide on [What Makes a Great Web Developer](/blog/best-web-developer-stratford-2026) or read our [Website Design Tips for East London Small Businesses](/blog/website-design-tips-east-london).

[Get a free SEO audit](/contact) or [learn about our SEO services](/services/seo).
      `,
    },
  };

  const currentPost = posts[slug || ""];

  // HowTo steps for the local SEO blog post
  const localSeoSteps = [
    {
      name: "Claim and Optimise Google Business Profile",
      text: "Go to business.google.com, claim or create your listing, verify your address, and complete every section including business name, address, phone number, hours, description, categories, and photos.",
    },
    {
      name: "Get Your Website Right",
      text: "Ensure NAP consistency, create location pages for multiple areas, add schema markup, use local keywords like 'plumber Hackney', and optimise for mobile devices.",
    },
    {
      name: "Build Local Citations",
      text: "Get listed on Yell.com, Thomson Local, Yelp UK, Bark.com, Checkatrade, TripAdvisor, and local Hackney/Shoreditch business directories with identical NAP everywhere.",
    },
    {
      name: "Collect Reviews Systematically",
      text: "Ask happy customers directly, send follow-up emails with review links, put QR codes at your premises, respond to every review, and never buy fake reviews.",
    },
    {
      name: "Create Local Content",
      text: "Write content that mentions Hackney and Shoreditch, including 'Best [Service] in Hackney' guides, case studies featuring local clients, and blog posts about local events.",
    },
    {
      name: "Build Local Backlinks",
      text: "Sponsor local events, join Hackney/Shoreditch business networks, get featured in local publications, partner with complementary businesses, and offer expert quotes to journalists.",
    },
  ];

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
      <ArticleSchema
        title={currentPost.title}
        description={currentPost.seoDescription}
        url={`https://luminousanddeliver.co.uk/blog/${slug}`}
        image={
          typeof currentPost.ogImage === "string"
            ? currentPost.ogImage
            : `https://luminousanddeliver.co.uk${currentPost.ogImage}`
        }
        datePublished={currentPost.date}
        author={currentPost.author}
        category={currentPost.category}
      />
      {slug === "local-seo-hackney-shoreditch" && (
        <HowToSchema
          name="How to Improve Local SEO for Hackney & Shoreditch Businesses"
          description="Complete 6-step guide to ranking higher on Google for Hackney and Shoreditch businesses in East London."
          steps={localSeoSteps}
          totalTime="P30D"
          estimatedCost={{ currency: "GBP", value: "0-300" }}
        />
      )}
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

      {/* Available in These Areas */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-secondary mb-6 text-center">Available in These Areas</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Stratford", path: "/areas/stratford" },
              { name: "Ilford", path: "/areas/ilford" },
              { name: "Hackney", path: "/areas/hackney" },
              { name: "Shoreditch", path: "/areas/shoreditch" },
              { name: "Newham", path: "/areas/newham" },
              { name: "Leyton", path: "/areas/leyton" },
              { name: "Walthamstow", path: "/areas/walthamstow" },
              { name: "Barking", path: "/areas/barking" },
              { name: "Tower Hamlets", path: "/areas/tower-hamlets" },
              { name: "Bethnal Green", path: "/areas/bethnal-green" },
              { name: "East Ham", path: "/areas/east-ham" },
              { name: "Manor Park", path: "/areas/manor-park" },
              { name: "Plaistow", path: "/areas/plaistow" },
              { name: "Greenwich", path: "/areas/greenwich" },
            ].map((area) => (
              <Link
                key={area.path}
                to={area.path}
                className="px-4 py-2 bg-muted hover:bg-primary/10 text-secondary hover:text-primary rounded-full text-sm font-medium transition-colors border border-border hover:border-primary/30"
              >
                {area.name}
              </Link>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-4">
            Serving London & East London with professional web design, SEO, and AI automation services.
          </p>
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
      <FloatingActionMenu />
    </div>
  );
};

export default BlogPost;
