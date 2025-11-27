import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/Container";

type Cell = string | boolean;

const tiers = [
  { key: "foundation", label: "FOUNDATION", price: "£200" },
  { key: "growth", label: "GROWTH", price: "£600" },
  { key: "scale", label: "SCALE", price: "£1,400" },
  { key: "enterprise", label: "ENTERPRISE", price: "£2,400+" },
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
    scale: "—",
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
    enterprise: "7–10 days (+£500)",
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

const renderCell = (value: Cell) => {
  if (typeof value === "boolean") {
    return value ? (
      <CheckCircle2 className="h-4 w-4 text-emerald-500 mx-auto" aria-hidden="true" />
    ) : (
      <span className="text-slate-500">—</span>
    );
  }

  if (value === "—") {
    return <span className="text-slate-400">—</span>;
  }

  return <span className="text-xs md:text-sm text-slate-100">{value}</span>;
};

export const WebPackagesComparisonTable = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-slate-950">
      <Container>
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Detailed Package Comparison</h2>
          <p className="text-sm md:text-base text-slate-400">
            See exactly what&apos;s included at each level so you can choose the right tier with confidence.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/80 shadow-xl shadow-black/40">
          <table className="min-w-full text-left text-xs md:text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/90">
                <th className="py-4 pl-4 pr-3 md:pl-6 text-slate-300 font-semibold sticky left-0 bg-slate-900/90">
                  Feature
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.key}
                    className="py-4 px-3 text-slate-100 font-semibold text-center whitespace-nowrap"
                  >
                    <div className="flex flex-col items-center gap-0.5">
                      <span className="text-[11px] uppercase tracking-[0.12em] text-slate-400">
                        {tier.label}
                      </span>
                      <span className="text-sm md:text-base font-bold">{tier.price}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={row.feature}
                  className={idx % 2 === 0 ? "bg-slate-900/80" : "bg-slate-900/60 border-y border-slate-800/60"}
                >
                  <td className="py-3 pl-4 pr-3 md:pl-6 align-top text-slate-200 text-xs md:text-sm sticky left-0 bg-inherit">
                    {row.feature}
                  </td>
                  <td className="py-3 px-3 text-center align-top">{renderCell(row.foundation)}</td>
                  <td className="py-3 px-3 text-center align-top">{renderCell(row.growth)}</td>
                  <td className="py-3 px-3 text-center align-top">{renderCell(row.scale)}</td>
                  <td className="py-3 px-3 text-center align-top">{renderCell(row.enterprise)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-[11px] md:text-xs text-slate-500 text-center">
          All prices are guide ranges – final quote depends on features, content, and integrations required.
        </p>
      </Container>
    </section>
  );
};
