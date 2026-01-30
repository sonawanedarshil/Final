import { Target, Users, Lightbulb, Shield } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Making AI accessible and beneficial for businesses of all sizes.',
  },
  {
    icon: Users,
    title: 'Customer-Centric',
    description: 'Your success is our priority, with solutions tailored to your needs.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Pioneering cutting-edge AI technologies to solve complex challenges.',
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'Enterprise-grade security and ethical AI practices you can rely on.',
  },
];

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-cyan-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
              About Zwiebel AI
            </h2>
            <div className="space-y-6 text-lg text-blue-800">
              <p>
                At Zwiebel AI, we believe that artificial intelligence should be accessible,
                practical, and transformative for every organization. Our mission is to bridge
                the gap between cutting-edge AI technology and real-world business applications.
              </p>
              <p>
                Founded on the principle that AI should work for you, not the other way around,
                we've built a team of experts dedicated to creating personalized solutions that
                drive measurable results and sustainable growth.
              </p>
              <p>
                We're not just building AI systems - we're crafting intelligent solutions that
                understand your business, adapt to your needs, and evolve with your goals.
                Our commitment to innovation, transparency, and excellence ensures that you
                have a trusted partner in your AI journey.
              </p>
            </div>

            <div className="mt-10 inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold">
              <Lightbulb className="w-5 h-5" />
              <span>AI FOR YOU - Our Promise</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-cyan-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-blue-700">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
