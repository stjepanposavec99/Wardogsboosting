import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import BoostingSection from '@/components/BoostingSection';
import WhyChoose from '@/components/WhyChoose';
import HowItWorks from '@/components/HowItWorks';
import SEOContent from '@/components/SEOContent';
import FAQ from '@/components/FAQ';
import Guides from '@/components/Guides';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import GuideArticleView from '@/components/GuideArticleView';
import LegalPage from '@/components/LegalPage';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type Route =
  | { name: 'home' }
  | { name: 'guide'; slug: string }
  | { name: 'legal'; type: 'privacy' | 'terms' | 'refund' };

function parseHash(): Route {
  const hash = window.location.hash;
  if (hash.startsWith('#guide/')) {
    const slug = hash.slice('#guide/'.length);
    return { name: 'guide', slug };
  }
  if (hash === '#privacy-policy') return { name: 'legal', type: 'privacy' };
  if (hash === '#terms-of-service') return { name: 'legal', type: 'terms' };
  if (hash === '#refund-policy') return { name: 'legal', type: 'refund' };
  return { name: 'home' };
}

function App() {
  const [route, setRoute] = useState<Route>(parseHash());
  const ref = useScrollReveal<HTMLDivElement>();

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHash());
      if (parseHash().name === 'home' && window.location.hash && !window.location.hash.startsWith('#guide/') && !window.location.hash.includes('policy')) {
        // scroll to section
        const el = document.querySelector(window.location.hash);
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const goHome = () => {
    window.location.hash = '';
    setRoute({ name: 'home' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div ref={ref} className="min-h-screen bg-charcoal-900">
      <Navbar />

      {route.name === 'home' && (
        <main>
          <Hero />
          <Services />
          <BoostingSection variant="cash" />
          <BoostingSection variant="level" />
          <WhyChoose />
          <HowItWorks />
          <SEOContent />
          <FAQ />
          <Guides />
          <FinalCTA />
        </main>
      )}

      {route.name === 'guide' && (
        <main>
          <GuideArticleView slug={route.slug} onBack={goHome} />
        </main>
      )}

      {route.name === 'legal' && (
        <main>
          <LegalPage type={route.type} onBack={goHome} />
        </main>
      )}

      <Footer />
    </div>
  );
}

export default App;
