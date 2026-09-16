import { useEffect, useState } from 'react';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';
import { NAV_LINKS, BOOST_URL } from '@/lib/constants';

const GUIDE_LINKS = [
  { label: 'Wardogs Beginner Guide', href: '#guide/wardogs-beginner-guide' },
  { label: 'How to Level Up Faster', href: '#guide/how-to-level-up-faster-in-wardogs' },
  { label: 'How to Make Cash Faster', href: '#guide/how-to-make-cash-faster-in-wardogs' },
  { label: 'Wardogs Cash Guide', href: '#guide/wardogs-cash-guide' },
  { label: 'Wardogs Leveling Guide', href: '#guide/wardogs-leveling-guide' },
  { label: 'Wardogs Tips and Tricks', href: '#guide/wardogs-tips-and-tricks' },
  { label: 'Wardogs Progression Guide', href: '#guide/wardogs-progression-guide' },
  { label: 'Wardogs Boosting Explained', href: '#guide/wardogs-boosting-explained' },
  { label: 'Cash Boosting Explained', href: '#guide/wardogs-cash-boosting-explained' },
  { label: 'Level Boosting Explained', href: '#guide/wardogs-level-boosting-explained' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setGuidesOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-charcoal-900/95 backdrop-blur-md border-b border-military-900/50 shadow-lg shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 bg-military-600 clip-corner flex items-center justify-center group-hover:bg-military-500 transition-colors">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-lg md:text-xl text-white tracking-wide">
              Wardogs<span className="text-military-400">Boosting</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.label === 'Guides' ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setGuidesOpen(true)}
                  onMouseLeave={() => setGuidesOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-300 hover:text-military-300 transition-colors uppercase tracking-wide"
                    onClick={() => setGuidesOpen((v) => !v)}
                  >
                    Guides
                    <ChevronDown className={`w-4 h-4 transition-transform ${guidesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {guidesOpen && (
                    <div className="absolute top-full right-0 w-72 pt-2">
                      <div className="bg-charcoal-800 border border-military-900/50 rounded-lg shadow-xl shadow-black/50 py-2 max-h-96 overflow-y-auto">
                        {GUIDE_LINKS.map((g) => (
                          <a
                            key={g.href}
                            href={g.href}
                            onClick={() => handleNavClick(g.href)}
                            className="block px-4 py-2 text-sm text-gray-400 hover:text-military-300 hover:bg-military-900/20 transition-colors"
                          >
                            {g.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-military-300 transition-colors uppercase tracking-wide"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={BOOST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-military-500 hover:bg-military-400 text-white font-display font-semibold text-sm uppercase tracking-wider px-5 py-2.5 clip-corner transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-military-900/50"
            >
              Start Boosting
            </a>
            <button
              className="lg:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-charcoal-800 border-t border-military-900/30 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) =>
                link.label === 'Guides' ? (
                  <details key={link.label} className="group">
                    <summary className="flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-300 hover:text-military-300 transition-colors uppercase tracking-wide cursor-pointer list-none">
                      Guides
                      <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="pl-4 space-y-1">
                      {GUIDE_LINKS.map((g) => (
                        <a
                          key={g.href}
                          href={g.href}
                          onClick={() => handleNavClick(g.href)}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-military-300 transition-colors"
                        >
                          {g.label}
                        </a>
                      ))}
                    </div>
                  </details>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-military-300 transition-colors uppercase tracking-wide"
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href={BOOST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 text-center bg-military-500 hover:bg-military-400 text-white font-display font-semibold text-sm uppercase tracking-wider px-5 py-3 clip-corner transition-colors"
              >
                Start Boosting
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
