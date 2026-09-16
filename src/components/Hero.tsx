import { Zap, ChevronRight, Shield, Clock, Lock, Headphones } from 'lucide-react';
import CTAButton from './CTAButton';
import { SERVICE_IMAGES, TRUST_INDICATORS } from '@/lib/constants';

const TRUST_ICONS = [Zap, Shield, Lock, Headphones];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={SERVICE_IMAGES.hero}
          alt=""
          loading="eager"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900 via-charcoal-900/80 to-charcoal-900/40" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-radial-glow" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-military-900/40 border border-military-700/50 px-4 py-2 clip-corner mb-6 animate-fade-in-down">
            <Shield className="w-4 h-4 text-military-400" />
            <span className="text-military-200 text-sm font-medium uppercase tracking-wider">
              Professional Wardogs Boosting
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-[1.1] mb-4 text-balance animate-fade-in-up">
            Wardogs <span className="text-military-400">Boosting</span> Services
          </h1>

          {/* Supporting headline */}
          <p className="text-xl sm:text-2xl text-military-200 font-display font-medium mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Get More Cash. Level Up Faster. Skip the Grind.
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Professional Wardogs boosting for players who want to progress faster without spending
            countless hours grinding. Choose Cash Boosting or Level Boosting and continue enjoying
            the game your way.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <CTAButton variant="primary" size="lg" icon={Zap}>
              Start Your Wardogs Boost
            </CTAButton>
            <CTAButton variant="outline" size="lg" icon={ChevronRight}>
              View Boosting Services
            </CTAButton>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {TRUST_INDICATORS.map((indicator, i) => {
              const Icon = TRUST_ICONS[i];
              return (
                <div key={indicator} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-military-400" />
                  <span className="text-sm text-gray-400 font-medium">{indicator}</span>
                  {i < TRUST_INDICATORS.length - 1 && (
                    <span className="text-military-800 ml-4 hidden sm:inline">•</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal-900 to-transparent z-5 pointer-events-none" />
    </section>
  );
}
