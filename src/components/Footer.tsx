import { Shield } from 'lucide-react';
import { BOOST_URL } from '@/lib/constants';

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Cash Boosting', href: '#cash-boosting' },
  { label: 'Level Boosting', href: '#level-boosting' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Guides', href: '#guides' },
  { label: 'Contact', href: 'mailto:support@wardogsboosting.com' },
  { label: 'Privacy Policy', href: '#privacy-policy' },
  { label: 'Terms of Service', href: '#terms-of-service' },
  { label: 'Refund Policy', href: '#refund-policy' },
];

export default function Footer() {
  return (
    <footer className="relative bg-charcoal-900 border-t border-military-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-military-600 clip-corner flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-lg text-white tracking-wide">
                Wardogs<span className="text-military-400">Boosting.com</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-xs">
              Professional Wardogs boosting services. Cash Boosting and Level Boosting for players
              who want to progress faster.
            </p>
            <a
              href={BOOST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-military-600 hover:bg-military-500 text-white font-display font-semibold text-sm uppercase tracking-wider px-5 py-2.5 clip-corner transition-colors"
            >
              Start Boosting
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-display font-bold text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-military-300 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-display font-bold text-sm uppercase tracking-widest mb-4">
              Services
            </h3>
            <ul className="space-y-2 mb-4">
              <li>
                <a
                  href="#cash-boosting"
                  className="text-gray-500 hover:text-military-300 text-sm transition-colors"
                >
                  Wardogs Cash Boosting
                </a>
              </li>
              <li>
                <a
                  href="#level-boosting"
                  className="text-gray-500 hover:text-military-300 text-sm transition-colors"
                >
                  Wardogs Level Boosting
                </a>
              </li>
            </ul>
            <p className="text-gray-600 text-xs leading-relaxed">
              Two focused boosting services designed to help you save time and progress faster in Wardogs.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-military-900/30 pt-6">
          <p className="text-gray-600 text-xs leading-relaxed text-center mb-4">
            WardogsBoosting.com is an independent service and is not affiliated with or endorsed by
            the developers or publishers of Wardogs unless explicitly stated otherwise.
          </p>
          <p className="text-gray-700 text-xs text-center">
            &copy; {new Date().getFullYear()} WardogsBoosting.com — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
