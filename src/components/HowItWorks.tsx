import { MousePointerClick, SlidersHorizontal, Rocket, Gamepad2 } from 'lucide-react';
import CTAButton from './CTAButton';

const STEPS = [
  {
    number: '01',
    icon: MousePointerClick,
    title: 'Choose Your Boost',
    description: 'Select Cash Boosting or Level Boosting based on what you need.',
  },
  {
    number: '02',
    icon: SlidersHorizontal,
    title: 'Choose Your Progress',
    description: 'Select the amount of cash or leveling progression you require.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Boosting Begins',
    description: 'The service begins once the order is ready.',
  },
  {
    number: '04',
    icon: Gamepad2,
    title: 'Enjoy Your Progress',
    description: 'Return to Wardogs with your requested progression completed.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 sm:py-28 bg-charcoal-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <div className="inline-flex items-center gap-2 bg-military-900/30 border border-military-800/50 px-4 py-1.5 clip-corner mb-4">
            <span className="text-military-300 text-xs font-semibold uppercase tracking-widest">
              Process
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            How It <span className="text-military-400">Works</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Four simple steps from choosing your boost to enjoying your progress.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-military-800/50 to-transparent" />

          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative reveal"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="bg-charcoal-800 border border-military-900/40 hover:border-military-700/50 rounded-xl p-6 text-center transition-all duration-500 hover:shadow-xl hover:shadow-military-900/20 h-full">
                  {/* Number + Icon */}
                  <div className="relative inline-flex items-center justify-center mb-5">
                    <div className="w-16 h-16 bg-military-900/40 border-2 border-military-700/50 rounded-full flex items-center justify-center group hover:bg-military-600 transition-all duration-300">
                      <Icon className="w-7 h-7 text-military-400" />
                    </div>
                    <span className="absolute -top-2 -right-2 bg-tactical-orange text-white text-xs font-display font-bold w-7 h-7 rounded-full flex items-center justify-center shadow-lg">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white mb-2 uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 reveal">
          <CTAButton variant="primary" size="lg">
            Start Boosting
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
