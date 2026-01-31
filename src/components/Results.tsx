import {
  Factory,
  Building2,
  Shield,
  Landmark,
  ChevronDown,
} from "lucide-react";

const results = [
  {
    tag: "MANUFACTURING",
    title: "Industrial Safety",
    subtitle: "Helmet & Fire Detection System",
    problem: "Manual safety monitoring led to delayed incident response",
    highlight: "₹4.2Cr in insurance savings",
    icon: Factory,
  },
  {
    tag: "GOVERNMENT",
    title: "Thane RTO",
    subtitle: "Voice AI Collection Automation",
    problem: "Low recovery rate due to manual calling inefficiency",
    highlight: "5x ROI in first year",
    icon: Landmark,
  },
  {
    tag: "LAW ENFORCEMENT",
    title: "Dewas Police Department",
    subtitle: "Smart City Surveillance System",
    problem: "Reactive policing with delayed incident awareness",
    highlight: "35% improvement in public safety metrics",
    icon: Shield,
  },
  {
    tag: "BANKING & FINANCE",
    title: "Financial Institution",
    subtitle: "Voice Biometric Fraud Prevention",
    problem: "Rising fraud cases costing millions annually",
    highlight: "15x ROI within 6 months",
    icon: Building2,
  },
];

export default function Results() {
  return (
    <section className="py-28 bg-gradient-to-br from-black via-slate-950 to-blue-950">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
            PROVEN BUSINESS IMPACT
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Results,{" "}
            <span className="text-blue-400">Real Impact</span>
          </h2>

          <p className="text-blue-200 max-w-3xl mx-auto">
            See how leading organizations are transforming their operations
            with our AI solutions
          </p>
        </div>

        {/* Filters (UI only) */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {["All", "Manufacturing", "Government", "Law Enforcement", "Banking & Finance"].map(
            (item, i) => (
              <button
                key={i}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  i === 0
                    ? "bg-blue-500 text-white"
                    : "bg-white/5 text-blue-200 hover:bg-white/10"
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {results.map((item, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-400/40 transition"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-400 font-semibold mb-1">
                      {item.tag}
                    </p>
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-blue-200 text-sm">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <ChevronDown className="w-5 h-5 text-blue-400" />
              </div>

              <p className="text-blue-200 mb-6">
                {item.problem}
              </p>

              <span className="inline-block px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold">
                {item.highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
