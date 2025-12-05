import { useState } from "react";
import { CheckCircle2, Sparkles, ChevronDown, ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

type Cell = string | boolean;

const tiers = [
  { key: "foundation", label: "FOUNDATION", price: "£200", popular: false, highlight: "1 page • 48hr delivery" },
  { key: "growth", label: "GROWTH", price: "£600", popular: true, highlight: "3-5 pages • SEO included" },
  { key: "scale", label: "SCALE", price: "£1,400", popular: false, highlight: "7-12 pages • Full features" },
  { key: "enterprise", label: "ENTERPRISE", price: "£2,400+", popular: false, highlight: "10+ pages • Priority support" },
] as const;

const rows: { feature: string; foundation: Cell; growth: Cell; scale: Cell; enterprise: Cell }[] = [
  {
    feature: "Number of pages",
    foundation: "1 powerful page",
    growth: "3–5 custom pages",
    scale: "7–12 custom pages",
    enterprise: "10+ pages",
  },
  {
    feature: "Custom design level",
    foundation: "Template-based",
    growth: "Semi-custom",
    scale: "Fully custom",
    enterprise: "Premium custom",
  },
  {
    feature: "Mobile responsive",
    foundation: true,
    growth: true,
    scale: true,
    enterprise: true,
  },
  {
    feature: "Contact forms",
    foundation: true,
    growth: true,
    scale: true,
    enterprise: true,
  },
  {
    feature: "SEO setup",
    foundation: "Basic",
    growth: "Foundation",
    scale: "Full optimisation",
    enterprise: "Full + ongoing",
  },
  {
    feature: "Copywriting",
    foundation: "—",
    growth: "Key pages",
    scale: "All pages",
    enterprise: "All pages + strategy",
  },
  {
    feature: "Google Maps",
    foundation: "—",
    growth: true,
    scale: true,
    enterprise: true,
  },
  {
    feature: "Payment integration",
    foundation: "—",
    growth: "—",
    scale: true,
    enterprise: "✓ (multi-gateway)",
  },
  {
    feature: "Booking system",
    foundation: "—",
    growth: "Simple",
    scale: "Advanced",
    enterprise: "Advanced + automation",
  },
  {
    feature: "E-commerce",
    foundation: "—",
    growth: "—",
    scale: "—",
    enterprise: "✓ (full shop)",
  },
  {
    feature: "Customer accounts",
    foundation: "—",
    growth: "—",
    scale: "—",
    enterprise: true,
  },
  {
    feature: "CRM integration",
    foundation: "—",
    growth: "—",
    scale: "Basic",
    enterprise: "Advanced",
  },
  {
    feature: "Multi-user dashboard",
    foundation: "—",
    growth: "—",
    scale: "—",
    enterprise: true,
  },
  {
    feature: "Priority support",
    foundation: "—",
    growth: "—",
    scale: "—",
    enterprise: true,
  },
  {
    feature: "Delivery timeline",
    foundation: "48 hours",
    growth: "7–10 days",
    scale: "14–21 days",
    enterprise: "Custom",
  },
  {
    feature: "Rush delivery option",
    foundation: "—",
    growth: "5–7 days (+£150)",
    scale: "10–14 days (+£300)",
    enterprise: "Custom quote (from £500)",
  },
  {
    feature: "Revisions included",
    foundation: "2 rounds",
    growth: "3 rounds",
    scale: "4 rounds",
    enterprise: "Unlimited",
  },
  {
    feature: "Post-launch support",
    foundation: "7 days",
    growth: "14 days",
    scale: "30 days",
    enterprise: "90 days",
  },
];

const renderCell = (value: Cell, isPopular: boolean) => {
  if (typeof value === "boolean") {
    return value ? (
      <CheckCircle2
        className={`h-5 w-5 mx-auto ${isPopular ? "text-[#F59E0B]" : "text-emerald-500"}`}
        aria-hidden="true"
      />
    ) : (
      <span className="text-muted-foreground">—</span>
    );
  }

  if (value === "—") {
    return <span className="text-muted-foreground">—</span>;
  }

  return <span className="text-sm text-foreground font-medium">{value}</span>;
};

export const WebPackagesComparisonTable = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <Container>
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Detailed Package Comparison</h2>
          <p className="text-lg text-muted-foreground">
            See exactly what&apos;s included at each level so you can choose the right tier with confidence. If you need
            something beyond these, check the <strong>Advanced &amp; Enterprise solutions</strong> just below.
          </p>
        </div>

        {/* DESKTOP TABLE with Sticky Header */}
        <div className="hidden lg:block overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          {/* Badge Row - ABOVE TABLE */}
          <div className="bg-muted/30 py-2 border-b border-border">
            <div className="flex">
              <div className="w-52 px-6" /> {/* Feature column spacer */}
              <div className="flex-1" /> {/* Foundation spacer */}
              <div className="flex-1 flex justify-center">
                {/* Growth badge */}
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F59E0B] px-3 py-1.5 text-[11px] font-bold text-white shadow-lg uppercase tracking-wide">
                  <Sparkles className="h-3.5 w-3.5" />
                  Most Popular
                </span>
              </div>
              <div className="flex-1" /> {/* Scale spacer */}
              <div className="flex-1" /> {/* Enterprise spacer */}
            </div>
          </div>

          {/* Scrollable table container */}
          <div className="max-h-[600px] overflow-y-auto">
            <table className="min-w-full text-left border-collapse">
              {/* Sticky Header */}
              <thead className="sticky top-0 z-10">
                <tr className="bg-gradient-to-br from-[#0F766E] to-[#0D6660]">
                  <th className="py-5 px-6 text-white/90 font-semibold text-sm uppercase tracking-wider w-52">Feature</th>
                  {tiers.map((tier) => (
                    <th key={tier.key} className={`py-5 px-4 text-center ${tier.popular ? "bg-white/10" : ""}`}>
                      <div className="flex flex-col items-center gap-1.5">
                        <span className="text-[11px] uppercase tracking-[0.15em] text-white/70 font-semibold">
                          {tier.label}
                        </span>
                        <span className="text-2xl font-bold text-white">{tier.price}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-border">
                {rows.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={`transition-colors hover:bg-muted/50 ${idx % 2 === 0 ? "bg-card" : "bg-muted/20"}`}
                  >
                    <td className="py-4 px-6 font-medium text-foreground">{row.feature}</td>
                    <td className="py-4 px-4 text-center">{renderCell(row.foundation, false)}</td>
                    <td className="py-4 px-4 text-center bg-[#0F766E]/5">{renderCell(row.growth, true)}</td>
                    <td className="py-4 px-4 text-center">{renderCell(row.scale, false)}</td>
                    <td className="py-4 px-4 text-center">{renderCell(row.enterprise, false)}</td>
                  </tr>
                ))}
                
                {/* CTA Row */}
                <tr className="bg-muted/30 border-t-2 border-border">
                  <td className="py-6 px-6 font-semibold text-foreground">Get Started</td>
                  {tiers.map((tier) => (
                    <td key={tier.key} className={`py-6 px-4 text-center ${tier.popular ? "bg-[#0F766E]/5" : ""}`}>
                      <Button
                        asChild
                        size="sm"
                        className={cn(
                          "w-full max-w-[140px]",
                          tier.popular 
                            ? "bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-white" 
                            : "bg-primary hover:bg-primary/90"
                        )}
                      >
                        <Link to="/quick-start">
                          Start {tier.label.charAt(0) + tier.label.slice(1).toLowerCase()}
                          <ArrowRight className="ml-1 h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* MOBILE ACCORDION LAYOUT */}
        <div className="lg:hidden">
          <Accordion type="single" collapsible className="space-y-4">
            {tiers.map((tier) => (
              <AccordionItem
                key={tier.key}
                value={tier.key}
                className={cn(
                  "rounded-xl border-2 overflow-hidden bg-card",
                  tier.popular 
                    ? "border-[#F59E0B] shadow-lg shadow-[#F59E0B]/20" 
                    : "border-border"
                )}
              >
                <AccordionTrigger 
                  className={cn(
                    "px-4 py-4 hover:no-underline [&[data-state=open]>svg]:rotate-180",
                    tier.popular ? "bg-[#0F766E]" : "bg-muted"
                  )}
                >
                  <div className="flex flex-col items-start gap-1 text-left w-full pr-4 relative">
                    {tier.popular && (
                      <span className="absolute -top-1 right-0 inline-flex items-center gap-1 rounded-full bg-[#F59E0B] px-2 py-0.5 text-[10px] font-bold text-white shadow">
                        <Sparkles className="h-2.5 w-2.5" />
                        POPULAR
                      </span>
                    )}
                    <div className="flex items-center gap-3">
                      <span className={cn(
                        "text-xs uppercase tracking-widest font-semibold",
                        tier.popular ? "text-white/80" : "text-muted-foreground"
                      )}>
                        {tier.label}
                      </span>
                      <span className={cn(
                        "text-xl font-bold",
                        tier.popular ? "text-white" : "text-foreground"
                      )}>
                        {tier.price}
                      </span>
                    </div>
                    <span className={cn(
                      "text-xs",
                      tier.popular ? "text-white/70" : "text-muted-foreground"
                    )}>
                      {tier.highlight}
                    </span>
                  </div>
                  <ChevronDown className={cn(
                    "h-5 w-5 shrink-0 transition-transform duration-200",
                    tier.popular ? "text-white" : "text-muted-foreground"
                  )} />
                </AccordionTrigger>
                
                <AccordionContent className="px-0 pb-0">
                  <div className="p-4 space-y-3 bg-card">
                    {rows.map((row) => {
                      const value = row[tier.key];
                      return (
                        <div key={row.feature} className="flex items-start justify-between gap-3 text-sm">
                          <span className="text-muted-foreground flex-1">{row.feature}</span>
                          <span className="font-medium flex-shrink-0">{renderCell(value, tier.popular)}</span>
                        </div>
                      );
                    })}
                    
                    {/* CTA inside accordion */}
                    <div className="pt-4 mt-4 border-t border-border">
                      <Button
                        asChild
                        className={cn(
                          "w-full",
                          tier.popular 
                            ? "bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-white" 
                            : "bg-primary hover:bg-primary/90"
                        )}
                      >
                        <Link to="/quick-start">
                          Start with {tier.label.charAt(0) + tier.label.slice(1).toLowerCase()}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <p className="mt-8 text-sm text-muted-foreground text-center max-w-2xl mx-auto">
          All prices shown are starting points. Your final quote depends on specific features, content requirements, and
          integrations needed.
        </p>
      </Container>
    </section>
  );
};
