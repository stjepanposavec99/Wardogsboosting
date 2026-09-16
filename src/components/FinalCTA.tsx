import { Zap, ChevronRight } from 'lucide-react';
import CTAButton from './CTAButton';

export default function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-military-950 via-charcoal-900 to-charcoal-900" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-military-900/40 border border-military-700/50 px-4 py-1.5 clip-corner mb-6 reveal">
          <Zap className="w-4 h-4 text-military-400" />
          <span className="text-military-200 text-xs font-semibold uppercase tracking-widest">
            Ready When You Are
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white mb-5 text-balance reveal">
          Ready to Progress <span className="text-military-400">Faster</span> in Wardogs?
        </h2>

        <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-10 max-w-2xl mx-auto reveal">
          Choose between Wardogs Cash Boosting and Level Boosting and spend less time grinding.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center reveal">
          <CTAButton variant="primary" size="lg" icon={Zap}>
            Start Your Boost
          </CTAButton>
          <CTAButton variant="outline" size="lg" icon={ChevronRight}>
            Choose Your Boost
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
