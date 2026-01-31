import {
  Eye,
  Mic,
  Zap,
  ShieldCheck,
  Activity,
  Layers,
  Globe,
  Lock,
} from "lucide-react";

export default function Platform() {
  return (
    <section className="relative py-28 bg-gradient-to-br from-black via-slate-950 to-indigo-950">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          <Feature
            icon={Eye}
            title="Vision AI"
            desc="99.3% accuracy in real-time monitoring."
          />
          <Feature
            icon={Mic}
            title="Voice AI"
            desc="Agentic AI automation. Maximum efficiency."
          />
          <Feature
            icon={Zap}
            title="Edge Processing"
            desc="Instant alerts. No latency."
          />
          <Feature
            icon={ShieldCheck}
            title="Enterprise Grade"
            desc="ISO 27001, SOC 2 compliant. Battle-tested security."
          />
        </div>

        {/* Main content */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
            One Platform. Infinite Intelligence.
          </h2>

          <p className="text-blue-200 max-w-4xl mx-auto mb-6">
            Anvex.ai unifies Vision and Voice AI into a single platform,
            empowering enterprises with real-time intelligence for critical
            safety, compliance, and operational decisions.
          </p>

          <p className="text-blue-300 max-w-4xl mx-auto">
            Our hybrid edge-cloud architecture ensures real-time intelligence
            with unmatched speed, data sovereignty, and GDPR-ready compliance
            for mission-critical deployments.
          </p>
        </div>

        {/* Bottom capability cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Capability
            icon={Activity}
            title="Real-Time"
            desc="Sub-second processing with edge computing for instant alerts"
          />
          <Capability
            icon={Layers}
            title="Hybrid AI"
            desc="Vision + Voice fusion for comprehensive intelligence coverage"
          />
          <Capability
            icon={Globe}
            title="Enterprise Scale"
            desc="Proven across Fortune 500 and government deployments"
          />
          <Capability
            icon={Lock}
            title="Compliant"
            desc="ISO 27001, SOC 2, GDPR-ready, and data sovereignty guaranteed"
          />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, title, desc }: any) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
      <div className="w-12 h-12 mb-4 rounded-xl bg-blue-500/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-blue-200 text-sm">{desc}</p>
    </div>
  );
}

function Capability({ icon: Icon, title, desc }: any) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
      <div className="w-10 h-10 mb-3 rounded-lg bg-blue-500/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-blue-400" />
      </div>
      <h4 className="text-white font-semibold mb-2">{title}</h4>
      <p className="text-blue-200 text-sm">{desc}</p>
    </div>
  );
}
