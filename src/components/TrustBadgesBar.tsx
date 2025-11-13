export default function TrustBadgesBar() {
  const items = [
    { name: "React", sub: "Modern framework" },
    { name: "OpenAI", sub: "AI-powered" },
    { name: "Stripe", sub: "Secure payments" },
    { name: "GDPR", sub: "Privacy compliant" },
    { name: "Zapier", sub: "Connected systems" },
    { name: "SSL", sub: "Bank-level security" },
  ];
  return (
    <section className="bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-center text-xs uppercase tracking-widest text-gray-500 mb-6 font-medium">
          Built With Modern, Secure Technology
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
          {items.map(({ name, sub }) => (
            <div key={name} className="text-center">
              <p className="text-lg font-semibold text-gray-700">{name}</p>
              <p className="text-xs text-gray-500">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
