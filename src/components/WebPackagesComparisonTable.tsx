import { CheckCircle2, Sparkles } from "lucide-react";
import { Container } from "@/components/Container";

type Cell = string | boolean;

const tiers = [
  { key: "foundation", label: "FOUNDATION", price: "£200", popular: false },
  { key: "growth", label: "GROWTH", price: "£600", popular: true },
  { key: "scale", label: "SCALE", price: "£1,400", popular: false },
  { key: "enterprise", label: "ENTERPRISE", price: "£2,400+", popular: false },
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
    enterprise: "Quote individually (+£500)",
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
            See exactly what&apos;s included at each level so you can choose the right tier with confidence.
          </p>
        </div>

        {/* DESKTOP TABLE */}
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

          {/* Clean Header - NO BADGE INSIDE TH */}
          <table className="min-w-full text-left border-collapse">
            <thead>
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
            </tbody>
          </table>
        </div>

        {/* MOBILE STACKED CARDS */}
        <div className="lg:hidden space-y-6">
          {tiers.map((tier) => (
            <div
              key={tier.key}
              className={`rounded-xl border-2 overflow-hidden ${
                tier.popular ? "border-[#F59E0B] shadow-lg shadow-[#F59E0B]/20" : "border-border"
              }`}
            >
              {/* Header */}
              <div className={`p-4 ${tier.popular ? "bg-[#0F766E]" : "bg-muted"} relative`}>
                {tier.popular && (
                  <div className="absolute -top-3 right-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F59E0B] px-3 py-1 text-xs font-bold text-white shadow-lg">
                      <Sparkles className="h-3 w-3" />
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="text-center mt-2">
                  <p
                    className={`text-xs uppercase tracking-widest mb-1 ${
                      tier.popular ? "text-white/70" : "text-muted-foreground"
                    }`}
                  >
                    {tier.label}
                  </p>
                  <p className={`text-2xl font-bold ${tier.popular ? "text-white" : "text-foreground"}`}>
                    {tier.price}
                  </p>
                </div>
              </div>

              {/* Features */}
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
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground text-center max-w-2xl mx-auto">
          All prices shown are starting points. Your final quote depends on specific features, content requirements, and
          integrations needed.
        </p>
      </Container>
    </section>
  );
};
