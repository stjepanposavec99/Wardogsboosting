import CTAButton from './CTAButton';
import { BookOpen, DollarSign, TrendingUp, Clock, Gamepad2 } from 'lucide-react';

const SECTIONS = [
  {
    icon: BookOpen,
    heading: 'What Is Wardogs Boosting?',
    paragraphs: [
      'Wardogs boosting is a service designed to help players progress faster in Wardogs without spending the hours normally required to grind through content. Whether you are looking to build up your in-game cash or advance through levels more quickly, boosting services provide a way to reach your goals while spending less time on repetitive gameplay.',
      'At WardogsBoosting.com, we focus on exactly two services: Wardogs Cash Boosting and Wardogs Level Boosting. Both are designed to help you get more out of your available gaming time by reducing the grind that sits between you and the content you want to play.',
    ],
  },
  {
    icon: DollarSign,
    heading: 'Wardogs Cash Boosting',
    paragraphs: [
      'Wardogs Cash Boosting is a service for players who want to increase their in-game cash without spending excessive amounts of time on grinding. In-game cash is one of the primary progression resources in Wardogs, and earning enough of it through normal gameplay can require significant time investment.',
      'With Cash Boosting, you can choose the amount of progress you need and have experienced boosters handle the grind for you. This is particularly useful for players who have limited gaming time and want to spend their available hours playing the content they enjoy rather than grinding for cash.',
    ],
  },
  {
    icon: TrendingUp,
    heading: 'Wardogs Level Boosting',
    paragraphs: [
      'Wardogs Level Boosting is a service for players who want to progress through levels faster. As you advance through Wardogs, each level typically requires more time than the last, which means the grind becomes longer and more repetitive the further you progress.',
      'Level Boosting allows you to skip the repetitive portions of the leveling process and jump to the level you want. This is ideal for players who want to reach content locked behind higher levels or who simply want to reduce the time they spend on repetitive progression.',
    ],
  },
  {
    icon: Clock,
    heading: 'Why Players Use Boosting',
    paragraphs: [
      'Players use Wardogs boosting services for a variety of reasons, but the most common is time. Not everyone has the hours required to grind through every level and cash milestone, and boosting provides a way to maintain progression without the time commitment.',
      'Another common reason is reducing repetitive grinding. Many players reach a point in Wardogs where the gameplay loop becomes monotonous, and boosting allows them to skip past the repetitive content and get back to the parts of the game they find engaging.',
    ],
  },
  {
    icon: Gamepad2,
    heading: 'How WardogsBoosting.com Works',
    paragraphs: [
      'WardogsBoosting.com is a specialized destination for players looking for professional Wardogs boosting. The site provides clear information about the two available services — Cash Boosting and Level Boosting — and redirects customers to a trusted boosting platform where orders can be placed.',
      'The process is straightforward: choose your boost type, select the amount of progress you need, and the service begins once the order is ready. Throughout the process, customers can receive progress updates and customer support, ensuring a smooth experience from start to finish.',
      'WardogsBoosting.com is an independent service and is not affiliated with or endorsed by the developers or publishers of Wardogs. Our sole purpose is to help players find professional boosting services for the two areas that matter most: cash and levels.',
    ],
  },
];

export default function SEOContent() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-charcoal-800 scroll-mt-20">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 bg-military-900/30 border border-military-800/50 px-4 py-1.5 clip-corner mb-4">
            <span className="text-military-300 text-xs font-semibold uppercase tracking-widest">
              Wardogs Boosting Guide
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Everything You Need to Know About <span className="text-military-400">Wardogs Boosting</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            A complete overview of Wardogs boosting, how it works, and how it can help you progress faster.
          </p>
        </div>

        <div className="space-y-10">
          {SECTIONS.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.heading} className="reveal">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-military-900/40 border border-military-700/40 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-military-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                    {section.heading}
                  </h3>
                </div>
                <div className="pl-0 sm:pl-13 space-y-3">
                  {section.paragraphs.map((para, i) => (
                    <p key={i} className="text-gray-400 leading-relaxed text-sm sm:text-base">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center reveal">
          <CTAButton variant="primary" size="lg">
            Start Your Wardogs Boost
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
