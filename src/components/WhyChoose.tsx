import { Zap, Users, Shield, Layout, Headphones, Activity } from 'lucide-react';

const FEATURES = [
  {
    icon: Zap,
    title: 'Fast Completion',
    description: 'Services are focused on completing the requested progression efficiently.',
  },
  {
    icon: Users,
    title: 'Experienced Boosters',
    description: 'Boosting is handled by experienced players.',
  },
  {
    icon: Shield,
    title: 'Secure Process',
    description: 'Customer privacy and account security should be prioritized throughout the process.',
  },
  {
    icon: Layout,
    title: 'Clear Service Options',
    description: 'Customers can easily choose between Cash Boosting and Level Boosting.',
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    description: 'Customers can receive assistance throughout the process.',
  },
  {
    icon: Activity,
    title: 'Progress Updates',
    description: 'Customers can stay informed while their boost is being completed.',
  },
];

export default function WhyChoose() {
  return (
    <section id="why-choose" className="relative py-20 sm:py-28 bg-charcoal-800 scroll-mt-20">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <div className="inline-flex items-center gap-2 bg-military-900/30 border border-military-800/50 px-4 py-1.5 clip-corner mb-4">
            <span className="text-military-300 text-xs font-semibold uppercase tracking-widest">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Why Choose <span className="text-military-400">WardogsBoosting?</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            A focused, professional boosting experience built around two clear services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-charcoal-700/50 border border-military-900/30 hover:border-military-700/50 rounded-xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-military-900/20 hover:-translate-y-1 reveal"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="w-12 h-12 bg-military-900/40 border border-military-700/40 rounded-lg flex items-center justify-center mb-4 group-hover:bg-military-600 group-hover:border-military-500 transition-all duration-300">
                  <Icon className="w-6 h-6 text-military-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2 uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
