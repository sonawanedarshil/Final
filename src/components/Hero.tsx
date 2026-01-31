import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzA2YjZkNCIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />

      {/* Animated blobs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob animation-delay-4000" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-cyan-400/30 mb-8">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-100 text-sm font-medium">
            Enterprise AI Powered by Vision & Voice
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
          Turn Vision and Voice
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            into Real-World Action
          </span>
        </h1>

        <p className="text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto mb-12">
          Enterprise AI that detects, responds, and protects — powered by
          cutting-edge Vision and Voice intelligence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 flex items-center gap-2">
            Explore Vision AI
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300">
            Discover Voice AI
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
          <div>
            <p className="text-4xl font-bold text-cyan-400">5+</p>
            <p className="text-sm text-blue-200">Countries</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-cyan-400">99.3%</p>
            <p className="text-sm text-blue-200">Accuracy</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-cyan-400">20+</p>
            <p className="text-sm text-blue-200">Clients</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-cyan-400">24/7</p>
            <p className="text-sm text-blue-200">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
