import { useEffect } from 'react';
import { ArrowLeft, Clock, Tag, ChevronRight, Zap } from 'lucide-react';
import { GUIDES, type GuideArticle } from '@/lib/guides';
import { BOOST_URL } from '@/lib/constants';

interface GuideArticleViewProps {
  slug: string;
  onBack: () => void;
}

function buildArticleSchema(guide: GuideArticle) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.metaDescription,
    articleSection: guide.category,
    author: {
      '@type': 'Organization',
      name: 'WardogsBoosting.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'WardogsBoosting.com',
    },
  };
}

function buildBreadcrumbSchema(guide: GuideArticle) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://wardogsboosting.com/' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://wardogsboosting.com/#guides' },
      { '@type': 'ListItem', position: 3, name: guide.title, item: `https://wardogsboosting.com/#guide/${guide.slug}` },
    ],
  };
}

export default function GuideArticleView({ slug, onBack }: GuideArticleViewProps) {
  const guide = GUIDES.find((g) => g.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    if (guide) {
      document.title = guide.metaTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', guide.metaDescription);
    }
    return () => {
      document.title = 'Wardogs Boosting | Cash & Level Boosting Services';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Professional Wardogs boosting services including Cash Boosting and Level Boosting. Save time, progress faster and reduce the grind in Wardogs.'
        );
      }
    };
  }, [guide]);

  if (!guide) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-gray-400 mb-4">Guide not found.</p>
        <button
          onClick={onBack}
          className="text-military-400 hover:text-military-300 font-medium"
        >
          Back to Guides
        </button>
      </div>
    );
  }

  const articleSchema = buildArticleSchema(guide);
  const breadcrumbSchema = buildBreadcrumbSchema(guide);

  return (
    <article className="pt-24 pb-20 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <a href="#home" className="hover:text-military-300 transition-colors">Home</a>
          <ChevronRight className="w-3 h-3" />
          <a href="#guides" className="hover:text-military-300 transition-colors">Guides</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-400 truncate">{guide.title}</span>
        </nav>

        {/* Back button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-military-400 hover:text-military-300 text-sm font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Guides
        </button>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 bg-military-900/40 border border-military-800/50 px-2.5 py-1 rounded text-military-300 text-xs font-medium uppercase tracking-wide">
              <Tag className="w-3 h-3" />
              {guide.category}
            </span>
            <span className="inline-flex items-center gap-1 text-gray-500 text-xs">
              <Clock className="w-3 h-3" />
              {guide.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 text-balance">
            {guide.title}
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            {guide.excerpt}
          </p>
        </header>

        {/* Content */}
        <div className="space-y-8">
          {guide.content.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
                {section.heading}
              </h2>
              <div className="space-y-3">
                {section.body.map((para, i) => (
                  <p key={i} className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Inline CTA */}
        <div className="mt-12 bg-charcoal-800 border border-military-900/40 rounded-xl p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
            Ready to Progress Faster in Wardogs?
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            Choose between Cash Boosting and Level Boosting and skip the grind.
          </p>
          <a
            href={BOOST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-military-500 hover:bg-military-400 text-white font-display font-semibold text-sm uppercase tracking-wider px-6 py-3 clip-corner transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-military-900/50"
          >
            <Zap className="w-4 h-4" />
            Start Your Boost
          </a>
        </div>

        {/* Related guides */}
        <div className="mt-12">
          <h2 className="text-lg font-display font-bold text-white mb-4 uppercase tracking-wide">
            Related Guides
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {GUIDES.filter((g) => g.slug !== guide.slug)
              .slice(0, 4)
              .map((g) => (
                <a
                  key={g.slug}
                  href={`#guide/${g.slug}`}
                  className="block bg-charcoal-800 border border-military-900/30 hover:border-military-700/50 rounded-lg p-4 transition-colors group"
                >
                  <span className="text-military-300 text-xs uppercase tracking-wide">{g.category}</span>
                  <h3 className="text-white font-display font-semibold text-sm mt-1 group-hover:text-military-300 transition-colors">
                    {g.title}
                  </h3>
                </a>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
}
