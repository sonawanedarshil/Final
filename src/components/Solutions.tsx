import { Bot, BarChart3, Puzzle, Zap } from 'lucide-react';

const solutions = [
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Streamline your operations with intelligent automation that learns and adapts to your business processes, reducing costs and increasing efficiency.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with advanced analytics powered by machine learning and predictive modeling.',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Puzzle,
    title: 'Custom AI Integration',
    description: 'Seamlessly integrate AI capabilities into your existing systems with tailored solutions designed for your specific requirements.',
    gradient: 'from-cyan-600 to-blue-600',
  },
  {
    icon: Zap,
    title: 'Real-Time Processing',
    description: 'Process and analyze data in real-time with lightning-fast AI models that deliver instant results and immediate value.',
    gradient: 'from-blue-600 to-cyan-500',
  },
];

export default function Solutions() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cyan-900/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
            Our Solutions
          </h2>
          <p className="text-xl text-blue-800 max-w-3xl mx-auto">
            Comprehensive AI services designed to transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-cyan-300 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-blue-950 mb-4">
                    {solution.title}
                  </h3>

                  <p className="text-blue-700 leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${solution.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
