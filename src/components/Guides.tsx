import { ArrowRight, Clock, Tag } from 'lucide-react';
import { GUIDES } from '@/lib/guides';
import { BOOST_URL } from '@/lib/constants';

export default function Guides() {
  return (
    <section id="guides" className="relative py-20 sm:py-28 bg-charcoal-800 scroll-mt-20">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <div className="inline-flex items-center gap-2 bg-military-900/30 border border-military-800/50 px-4 py-1.5 clip-corner mb-4">
            <span className="text-military-300 text-xs font-semibold uppercase tracking-widest">
              Guides & Articles
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Wardogs <span className="text-military-400">Guides</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Tips, strategies, and insights to help you get more out of Wardogs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GUIDES.map((guide, idx) => (
            <article
              key={guide.slug}
              className="group bg-charcoal-700/50 border border-military-900/30 hover:border-military-700/50 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-military-900/20 hover:-translate-y-1 reveal"
              style={{ transitionDelay: `${idx * 40}ms` }}
            >
              <a href={`#guide/${guide.slug}`} className="block p-6 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 bg-military-900/40 border border-military-800/50 px-2.5 py-1 rounded text-military-300 text-xs font-medium uppercase tracking-wide">
                    <Tag className="w-3 h-3" />
                    {guide.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-gray-500 text-xs">
                    <Clock className="w-3 h-3" />
                    {guide.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-military-300 transition-colors">
                  {guide.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {guide.excerpt}
                </p>

                <div className="flex items-center gap-2 text-military-400 text-sm font-medium group-hover:gap-3 transition-all">
                  <span>Read Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a
            href={BOOST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-military-500 hover:bg-military-400 text-white font-display font-semibold text-sm uppercase tracking-wider px-6 py-3 clip-corner transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-military-900/50"
          >
            Start Your Wardogs Boost
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
