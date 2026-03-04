import { useEffect } from 'react';

const canonicalUrl = 'https://www.summitautocaretx.com/';
const businessName = 'Summit Auto Care TX';
const primaryPhone = '+1-833-703-8934';
const serviceAreas = ['McKinney', 'Allen', 'Frisco', 'Plano', 'Collin County'];

const faqItems = [
  {
    question: 'How quickly can I book a mobile detailing appointment?',
    answer: 'Many detailing windows are available same day in McKinney, Allen, Frisco, and Plano. Text us for the fastest scheduling response.',
  },
  {
    question: 'Do you still offer maintenance services?',
    answer: 'Yes. We offer limited basic maintenance, including oil changes. Our core focus is mobile detailing.',
  },
  {
    question: 'Do you offer battery replacement?',
    answer: 'No. Battery services have been discontinued as part of our detailing-first business model.',
  },
];

export default function HomeSeo() {
  useEffect(() => {
    document.title = 'Mobile Detailing in Collin County | Summit Auto Care TX';

    const setMetaTag = (selector, attributes) => {
      let tag = document.head.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        document.head.appendChild(tag);
      }
      Object.entries(attributes).forEach(([key, value]) => tag.setAttribute(key, value));
    };

    setMetaTag('meta[name="description"]', {
      name: 'description',
      content: 'Mobile detailing in McKinney, Allen, Frisco, and Plano. Interior and exterior packages with same-day windows plus limited basic maintenance like oil changes.',
    });

    setMetaTag('meta[name="keywords"]', {
      name: 'keywords',
      content: 'mobile detailing McKinney, mobile detailing Allen, mobile detailing Frisco, mobile detailing Plano, interior detail Collin County, exterior car detailing Texas, mobile oil change Allen',
    });

    setMetaTag('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-image-preview:large',
    });

    setMetaTag('meta[property="og:title"]', {
      property: 'og:title',
      content: 'Summit Auto Care TX | Mobile Detailing in Collin County',
    });

    setMetaTag('meta[property="og:description"]', {
      property: 'og:description',
      content: 'Book mobile detailing packages at your home or office in Collin County. Limited basic maintenance available.',
    });

    setMetaTag('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    });

    setMetaTag('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    });

    setMetaTag('meta[property="og:image"]', {
      property: 'og:image',
      content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/68635ea89_Untitleddesign.png',
    });

    setMetaTag('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    setMetaTag('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: 'Summit Auto Care TX | Mobile Detailing',
    });

    setMetaTag('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: 'Detailing-first mobile car care across McKinney, Allen, Frisco, and Plano.',
    });

    setMetaTag('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/68635ea89_Untitleddesign.png',
    });

    let canonicalTag = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('rel', 'canonical');
    canonicalTag.setAttribute('href', canonicalUrl);

    let structuredData = document.getElementById('home-structured-data');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.type = 'application/ld+json';
      structuredData.id = 'home-structured-data';
      document.head.appendChild(structuredData);
    }

    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': `${canonicalUrl}#business`,
          name: businessName,
          image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/4bc626bfb_Lightlogo-clear.png',
          url: canonicalUrl,
          telephone: primaryPhone,
          areaServed: serviceAreas.map((name) => ({ '@type': 'City', name })),
          priceRange: '$$',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Mobile Detailing and Basic Maintenance Services',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Interior Detailing' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Exterior Detailing' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full Detail Package' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Oil Change' } },
            ],
          },
        },
        {
          '@type': 'FAQPage',
          '@id': `${canonicalUrl}#faq`,
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        },
      ],
    });
  }, []);

  return null;
}
