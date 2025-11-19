import { Check, Minus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesComparisonTable = () => {
  const features = [
    { name: "Number of pages", diy: "1 page", starter: "1-3 pages", business: "5-10 pages", premium: "10+ pages" },
    { name: "Custom design level", diy: "Template", starter: "Semi-custom", business: "Fully custom", premium: "Premium custom" },
    { name: "Mobile responsive", diy: true, starter: true, business: true, premium: true },
    { name: "Contact forms", diy: true, starter: true, business: true, premium: true },
    { name: "SEO setup", diy: "Basic", starter: "Basic", business: "Advanced", premium: "Advanced" },
    { name: "Social media links", diy: true, starter: true, business: true, premium: true },
    { name: "Google Maps integration", diy: false, starter: true, business: true, premium: true },
    { name: "Payment integration", diy: false, starter: false, business: true, premium: true },
    { name: "Booking system", diy: false, starter: false, business: true, premium: true },
    { name: "Admin dashboard", diy: false, starter: false, business: false, premium: true },
    { name: "Delivery timeline", diy: "24-48 hours", starter: "1-3 days", business: "5-10 days", premium: "1-4 weeks" },
    { name: "Revisions included", diy: "1 round", starter: "2 rounds", business: "3 rounds", premium: "Unlimited" },
    { name: "Post-launch support", diy: "7 days", starter: "14 days", business: "30 days", premium: "90 days" },
  ];

  const renderCell = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-success mx-auto" />
      ) : (
        <Minus className="h-5 w-5 text-muted-foreground mx-auto" />
      );
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-secondary mb-4">Package Comparison</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compare features across all our web development packages to find the perfect fit for your business.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse bg-background rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-muted">
                <th className="text-left p-4 font-semibold">Feature</th>
                <th className="text-center p-4 font-semibold">
                  <div>DIY/Template</div>
                  <div className="text-sm font-normal text-muted-foreground">£100-£300</div>
                </th>
                <th className="text-center p-4 font-semibold bg-primary/5 border-x-2 border-primary/20">
                  <div>Starter</div>
                  <div className="text-sm font-normal text-muted-foreground">£250-£500</div>
                </th>
                <th className="text-center p-4 font-semibold">
                  <div>Business</div>
                  <div className="text-sm font-normal text-muted-foreground">£750-£1,800</div>
                </th>
                <th className="text-center p-4 font-semibold">
                  <div>Premium</div>
                  <div className="text-sm font-normal text-muted-foreground">£2,000-£3,500</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-t border-border hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium">{feature.name}</td>
                  <td className="p-4 text-center">{renderCell(feature.diy)}</td>
                  <td className="p-4 text-center bg-primary/5">{renderCell(feature.starter)}</td>
                  <td className="p-4 text-center">{renderCell(feature.business)}</td>
                  <td className="p-4 text-center">{renderCell(feature.premium)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-6">
          {[
            { title: "DIY/Template", price: "£100-£300", data: features.map(f => ({ name: f.name, value: f.diy })) },
            { title: "Starter", price: "£250-£500", data: features.map(f => ({ name: f.name, value: f.starter })), highlight: true },
            { title: "Business", price: "£750-£1,800", data: features.map(f => ({ name: f.name, value: f.business })) },
            { title: "Premium", price: "£2,000-£3,500", data: features.map(f => ({ name: f.name, value: f.premium })) },
          ].map((package_, idx) => (
            <Card key={idx} className={package_.highlight ? "border-2 border-primary" : ""}>
              <CardHeader className={package_.highlight ? "bg-primary/5" : ""}>
                <CardTitle className="flex justify-between items-center">
                  <span>{package_.title}</span>
                  <span className="text-lg text-primary">{package_.price}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {package_.data.map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-muted-foreground">{renderCell(item.value)}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesComparisonTable;
