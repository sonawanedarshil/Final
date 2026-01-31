import {
  Banknote,
  Shield,
  Factory,
  Plane,
  Ship,
  Building2,
  ShoppingBag,
  Heart,
  GraduationCap,
  HardHat,
  Briefcase,
  ChevronDown,
} from "lucide-react";

const industries = [
  { title: "Banking & Financial Services", icon: Banknote },
  { title: "Insurance & NBFC", icon: Shield },
  { title: "Manufacturing & Industrial", icon: Factory },
  { title: "Airports & Aviation", icon: Plane },
  { title: "Ports & Logistics", icon: Ship },
  { title: "Smart Cities & Traffic", icon: Building2 },
  { title: "Retail & E-commerce", icon: ShoppingBag },
  { title: "Healthcare & Hospitals", icon: Heart },
  { title: "Education & Institutions", icon: GraduationCap },
  { title: "Construction & Infrastructure", icon: HardHat },
  { title: "Government & Public Sector", icon: Building2 },
  { title: "Enterprise & Corporate", icon: Briefcase },
];

export default function Industries() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-400 mb-4">
          Trusted Across Critical Industries
        </h2>

        <p className="text-center text-blue-200 max-w-3xl mx-auto mb-16">
          From banking to manufacturing, healthcare to smart cities—Anvex AI
          powers mission-critical operations worldwide
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <p className="text-white font-medium">{item.title}</p>
              </div>

              <ChevronDown className="w-5 h-5 text-cyan-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
