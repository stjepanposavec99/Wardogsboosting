import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import CTAButton from './CTAButton';

const FAQS = [
  {
    question: 'What is Wardogs boosting?',
    answer:
      'Wardogs boosting is a service designed to help players progress faster in the game. Instead of spending hours grinding through content, players can use a boosting service to achieve their progression goals more quickly. Boosting covers two main areas in Wardogs: cash and levels.',
  },
  {
    question: 'What is Wardogs Cash Boosting?',
    answer:
      'Wardogs Cash Boosting helps players build their in-game cash faster while reducing time spent grinding. Instead of spending hours on repetitive cash-earning activities, a boosting service can help you reach your cash goals in a fraction of the time.',
  },
  {
    question: 'What is Wardogs Level Boosting?',
    answer:
      'Wardogs Level Boosting helps players progress through levels faster. Rather than spending hours grinding through each level, experienced boosters handle the progression on your behalf so you can return to the game at the level you want.',
  },
  {
    question: 'Which Wardogs boosting services do you offer?',
    answer:
      'We offer exactly two Wardogs boosting services: Cash Boosting and Level Boosting. Cash Boosting focuses on increasing your in-game cash, while Level Boosting focuses on advancing your level progression. No other boosting categories are offered.',
  },
  {
    question: 'How long does Wardogs boosting take?',
    answer:
      'Completion time depends on the requested service and your starting position. The amount of cash or leveling progress you request will influence how long the boost takes to complete. More details are available when you place your order.',
  },
  {
    question: 'When does my Wardogs boost start?',
    answer:
      'Starting time depends on current availability. Once your order is placed and ready, the service will begin as soon as a booster is available. You will be kept informed throughout the process.',
  },
  {
    question: 'Can I receive progress updates?',
    answer:
      'Yes, customers can receive updates regarding their order. Staying informed throughout the boosting process is an important part of the service, and progress updates help you track how your boost is coming along.',
  },
  {
    question: 'Is my information kept private?',
    answer:
      'Customer information should only be used as necessary for completing the service. Privacy and account security are prioritized throughout the boosting process, and information is handled with care.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Build FAQ JSON-LD schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-charcoal-900 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 bg-military-900/30 border border-military-800/50 px-4 py-1.5 clip-corner mb-4">
            <span className="text-military-300 text-xs font-semibold uppercase tracking-widest">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Frequently Asked <span className="text-military-400">Questions</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Everything you need to know about Wardogs boosting services.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-charcoal-800 border border-military-900/30 hover:border-military-800/50 rounded-lg overflow-hidden transition-colors reveal"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={openIndex === idx}
              >
                <span className="font-display font-semibold text-white text-base sm:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-military-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5">
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                      {faq.answer}
                    </p>
                    {idx % 3 === 0 && (
                      <CTAButton variant="outline" size="md">
                        Start Your Boost
                      </CTAButton>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <CTAButton variant="primary" size="lg">
            Start Boosting
          </CTAButton>
        </div>
      </div>

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
