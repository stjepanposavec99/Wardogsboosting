import { DollarSign, TrendingUp, Check } from 'lucide-react';
import CTAButton from './CTAButton';
import { SERVICE_IMAGES } from '@/lib/constants';

const SERVICES = [
  {
    id: 'cash-boosting',
    icon: DollarSign,
    title: 'Wardogs Cash Boosting',
    headline: 'Get More Wardogs Cash',
    description:
      'Save time on grinding and increase your in-game cash with professional Wardogs Cash Boosting. Choose the amount of progress you need and get started quickly.',
    benefits: [
      'Save hours of grinding',
      'Increase your in-game cash faster',
      'Professional boosting service',
      'Simple ordering process',
      'Progress updates',
    ],
    cta: 'Get Cash Boosting',
    image: SERVICE_IMAGES.cash,
    accent: 'tactical-orange',
  },
  {
    id: 'level-boosting',
    icon: TrendingUp,
    title: 'Wardogs Level Boosting',
    headline: 'Level Up Faster in Wardogs',
    description:
      'Accelerate your Wardogs progression with professional Level Boosting. Spend less time grinding levels and more time playing the parts of Wardogs you enjoy.',
    benefits: [
      'Faster level progression',
      'Reduce repetitive grinding',
      'Experienced boosters',
      'Simple ordering process',
      'Progress updates',
    ],
    cta: 'Get Level Boosting',
    image: SERVICE_IMAGES.level,
    accent: 'military-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <div className="inline-flex items-center gap-2 bg-military-900/30 border border-military-800/50 px-4 py-1.5 clip-corner mb-4">
            <span className="text-military-300 text-xs font-semibold uppercase tracking-widest">
              Boosting Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Choose Your <span className="text-military-400">Wardogs Boost</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Two focused boosting services designed to help you progress faster in Wardogs.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                id={service.id}
                className="group relative bg-charcoal-800 border border-military-900/40 hover:border-military-700/60 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-military-900/30 reveal scroll-mt-24"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800 via-charcoal-800/50 to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-military-600 clip-corner flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-display font-bold text-white mb-3">
                    {service.headline}
                  </h3>
                  <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-2.5 mb-7">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <div className="mt-0.5 w-5 h-5 bg-military-900/60 border border-military-700/50 rounded flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-military-400" />
                        </div>
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <CTAButton variant="primary" size="md" className="w-full">
                    {service.cta}
                  </CTAButton>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
