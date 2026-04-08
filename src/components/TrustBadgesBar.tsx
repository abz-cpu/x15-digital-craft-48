import { MapPin, Clock, ShieldCheck, Unlock, Star, MessageCircle } from "lucide-react";

const items = [
  { icon: MapPin, name: "UK-Based Team", sub: "East London, not offshore" },
  { icon: Clock, name: "1–14 Day Delivery", sub: "Fast, reliable turnaround" },
  { icon: ShieldCheck, name: "14-Day Guarantee", sub: "Money-back if not happy" },
  { icon: Unlock, name: "No Lock-in", sub: "Cancel any time, no fees" },
  { icon: Star, name: "4.9★ Rated", sub: "By real UK clients" },
  { icon: MessageCircle, name: "Free Consultation", sub: "No commitment required" },
];

export default function TrustBadgesBar() {
  return (
    <section className="bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-center text-xs uppercase tracking-widest text-gray-500 mb-6 font-medium">
          Why Businesses Choose L&amp;D Digital
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
          {items.map(({ icon: Icon, name, sub }) => (
            <div key={name} className="flex items-center gap-2.5 text-left">
              <Icon className="h-5 w-5 text-teal-600 shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-gray-800">{name}</p>
                <p className="text-xs text-gray-500">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
