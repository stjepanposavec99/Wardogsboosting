import { DollarSign, TrendingUp, Clock, Zap, Target, Gamepad2 } from 'lucide-react';
import CTAButton from './CTAButton';
import { SERVICE_IMAGES } from '@/lib/constants';

const FOCUS_POINTS = {
  cash: [
    { icon: Clock, title: 'Save Time', text: 'Stop spending hours on repetitive grinding when you could be playing the content you actually enjoy.' },
    { icon: Zap, title: 'Faster Progression', text: 'Build up your in-game cash more quickly and access the content you want sooner.' },
    { icon: Target, title: 'Reduce Repetitive Grinding', text: 'Skip the monotonous cash-earning activities and focus on what makes Wardogs fun for you.' },
    { icon: DollarSign, title: 'Build Up In-Game Cash', text: 'Increase your available cash to unlock gear, content, and features without the wait.' },
  ],
  level: [
    { icon: TrendingUp, title: 'Faster Leveling', text: 'Progress through Wardogs levels more quickly without spending hours on each level.' },
    { icon: Target, title: 'Skip Repetitive Progression', text: 'Avoid grinding through the same types of content over and over to gain levels.' },
    { icon: Clock, title: 'Save Time', text: 'Spend less time on leveling and more time on the parts of Wardogs you actually enjoy.' },
    { icon: Gamepad2, title: 'Reach Higher Progression Sooner', text: 'Get to the content locked behind higher levels without the long grind to get there.' },
  ],
};

interface BoostingSectionProps {
  variant: 'cash' | 'level';
}

export default function BoostingSection({ variant }: BoostingSectionProps) {
  const isCash = variant === 'cash';
  const config = {
    cash: {
      id: 'cash-boosting-detail',
      title: 'Wardogs Cash Boosting',
      subtitle: 'Build Your In-Game Cash Without the Grind',
      description:
        'Wardogs Cash Boosting is designed for players who want to increase their in-game cash without spending excessive amounts of time grinding. Whether you want to access new content, gear up, or simply skip the repetitive cash-earning activities, Cash Boosting helps you get there faster.',
      focusPoints: FOCUS_POINTS.cash,
      image: SERVICE_IMAGES.cash,
      cta: 'Start Cash Boosting',
      icon: DollarSign,
    },
    level: {
      id: 'level-boosting-detail',
      title: 'Wardogs Level Boosting',
      subtitle: 'Progress Through Levels Faster',
      description:
        'Wardogs Level Boosting helps players progress through Wardogs levels faster. Instead of spending hours grinding through each level, you can have experienced boosters handle the progression and return to the game at the level you want. Spend more time enjoying Wardogs and less time on repetitive leveling.',
      focusPoints: FOCUS_POINTS.level,
      image: SERVICE_IMAGES.level,
      cta: 'Start Level Boosting',
      icon: TrendingUp,
    },
  };

  const data = config[variant];
  const MainIcon = data.icon;

  return (
    <section
      id={data.id}
      className="relative py-20 sm:py-24 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isCash ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image */}
          <div className={`relative reveal ${!isCash ? 'lg:order-2' : ''}`}>
            <div className="relative rounded-xl overflow-hidden clip-corner">
              <img
                src={data.image}
                alt={data.title}
                loading="lazy"
                className="w-full h-72 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-military-600 clip-corner flex items-center justify-center shadow-xl">
                  <MainIcon className="w-6 h-6 text-white" />
                </div>
                <span className="font-display font-bold text-white text-lg">{data.title}</span>
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -inset-2 border border-military-900/30 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div className={`reveal ${!isCash ? 'lg:order-1' : ''}`}>
            <div className="inline-flex items-center gap-2 bg-military-900/30 border border-military-800/50 px-4 py-1.5 clip-corner mb-4">
              <span className="text-military-300 text-xs font-semibold uppercase tracking-widest">
                {isCash ? 'Cash Boosting' : 'Level Boosting'}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
              {data.title}
            </h2>
            <p className="text-military-300 font-display font-medium text-lg mb-5">
              {data.subtitle}
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              {data.description}
            </p>

            {/* Focus points */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {data.focusPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.title}
                    className="bg-charcoal-800/60 border border-military-900/30 rounded-lg p-4 hover:border-military-700/50 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-military-400" />
                      <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wide">
                        {point.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{point.text}</p>
                  </div>
                );
              })}
            </div>

            <CTAButton variant="primary" size="lg" icon={MainIcon}>
              {data.cta}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
