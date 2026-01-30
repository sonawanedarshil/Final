import { MessageSquare, Search, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Consultation',
    description: 'We start by understanding your business challenges, goals, and requirements through in-depth consultation sessions.',
  },
  {
    icon: Search,
    number: '02',
    title: 'Analysis',
    description: 'Our team analyzes your data, systems, and processes to identify opportunities for AI-driven improvements.',
  },
  {
    icon: Code,
    number: '03',
    title: 'Development',
    description: 'We design and develop custom AI solutions tailored to your specific needs using cutting-edge technology.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Deployment',
    description: 'Seamless integration and deployment of AI solutions with ongoing support and optimization for maximum impact.',
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzA2YjZkNCIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Process
          </h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            A proven methodology to deliver exceptional AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent transform -translate-y-1/2"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-cyan-400/30 hover:bg-white/15 transition-all duration-300 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center relative z-10">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-cyan-400/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xs font-bold text-cyan-300">{step.number}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">
                      {step.title}
                    </h3>

                    <p className="text-cyan-100 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-cyan-500 to-blue-500"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
