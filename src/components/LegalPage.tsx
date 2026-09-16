import { ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'refund';
  onBack: () => void;
}

const LEGAL_CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
      {
        heading: 'Information We Collect',
        body: 'WardogsBoosting.com may collect information you provide when you contact us or use our services. This may include your name, email address, and details related to your boosting order. We only collect information necessary for completing the requested service.',
      },
      {
        heading: 'How We Use Your Information',
        body: 'Your information is used only as necessary for completing the service you requested. We do not sell or rent your personal information to third parties. Information may be used to communicate with you about your order and to provide customer support.',
      },
      {
        heading: 'Data Security',
        body: 'We take reasonable measures to protect your information. Customer privacy and account security should be prioritized throughout the boosting process. However, no method of transmission or storage is completely secure.',
      },
      {
        heading: 'Third-Party Services',
        body: 'WardogsBoosting.com redirects users to third-party boosting platforms for order placement. These platforms have their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of third-party services.',
      },
      {
        heading: 'Contact Us',
        body: 'If you have questions about this Privacy Policy, you can contact us at support@wardogsboosting.com.',
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    sections: [
      {
        heading: 'Acceptance of Terms',
        body: 'By accessing WardogsBoosting.com, you agree to these Terms of Service. If you do not agree with any part of these terms, you should not use this website.',
      },
      {
        heading: 'Service Description',
        body: 'WardogsBoosting.com is an independent service that provides information about Wardogs boosting services and redirects users to a third-party boosting platform. We are not affiliated with or endorsed by the developers or publishers of Wardogs.',
      },
      {
        heading: 'No Affiliation',
        body: 'WardogsBoosting.com is not affiliated with, endorsed by, or sponsored by the developers or publishers of Wardogs. All trademarks and game-related content belong to their respective owners.',
      },
      {
        heading: 'Third-Party Services',
        body: 'When you click a link on our website, you may be redirected to a third-party platform. We are not responsible for the services, content, or practices of these third-party platforms. You should review their terms before using their services.',
      },
      {
        heading: 'Limitation of Liability',
        body: 'WardogsBoosting.com is not liable for any damages arising from the use of this website or the third-party services it links to. All services are provided through third-party platforms, and any disputes should be directed to those platforms.',
      },
      {
        heading: 'Contact Us',
        body: 'If you have questions about these Terms of Service, you can contact us at support@wardogsboosting.com.',
      },
    ],
  },
  refund: {
    title: 'Refund Policy',
    sections: [
      {
        heading: 'Refund Overview',
        body: 'WardogsBoosting.com redirects users to a third-party boosting platform for all orders. Refunds are handled by the third-party platform, not by WardogsBoosting.com. Please refer to the platform\'s refund policy for specific details.',
      },
      {
        heading: 'Before Order Completion',
        body: 'Refund eligibility for orders that have not yet been completed depends on the third-party platform\'s policies. Contact the platform directly for refund requests on incomplete orders.',
      },
      {
        heading: 'After Order Completion',
        body: 'Once a boosting service has been completed, refunds are generally not available. Any exceptions would be determined by the third-party platform based on their policies.',
      },
      {
        heading: 'How to Request a Refund',
        body: 'To request a refund, contact the third-party boosting platform where you placed your order. WardogsBoosting.com does not process payments or handle refunds directly.',
      },
      {
        heading: 'Contact Us',
        body: 'If you have questions about this Refund Policy, you can contact us at support@wardogsboosting.com.',
      },
    ],
  },
};

export default function LegalPage({ type, onBack }: LegalPageProps) {
  const content = LEGAL_CONTENT[type];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-military-400 hover:text-military-300 text-sm font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-8">
          {content.title}
        </h1>

        <div className="space-y-8">
          {content.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-lg sm:text-xl font-display font-bold text-white mb-2">
                {section.heading}
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <p className="text-gray-600 text-xs mt-12">
          Last updated: {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
