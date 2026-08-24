import { useEffect } from 'react';

const canonicalUrl = 'https://www.summitautocaretx.com/';
const businessName = 'Summit Auto Care TX';
const primaryPhone = '+1-214-795-3984';
const serviceAreas = ['McKinney', 'Allen', 'Frisco', 'Plano', 'Collin County'];

const faqItems = [
  {
    question: 'How quickly can I book a mobile detailing appointment?',
    answer: 'Many detailing windows are available same day in McKinney, Allen, Frisco, and Plano. Text us for the fastest scheduling response.',
  },
  {
    question: 'What services does Summit Auto Care TX offer?',
    answer: 'Summit Auto Care TX offers mobile interior and exterior detailing, full details, ceramic protection, and seasonal care recommendations for North Texas heat.',
  },
];

export default function HomeSeo() {
  useEffect(() => {
    document.title = 'Summit Auto Care TX | Mobile Detailing & Ceramic Protection in Collin County';

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
      content: 'Summit Auto Care TX provides mobile detailing, ceramic protection, and summer heat-focused vehicle care in McKinney, Allen, Frisco, Plano, and Collin County.'
    });

    setMetaTag('meta[name="keywords"]', {
      name: 'keywords',
      content: 'Summit Auto Care TX, mobile detailing McKinney, mobile detailing Allen, mobile detailing Frisco, mobile detailing Plano, ceramic protection Collin County, summer car care Texas',
    });

    setMetaTag('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-image-preview:large',
    });

    setMetaTag('meta[property="og:title"]', {
      property: 'og:title',
      content: 'Summit Auto Care TX | Mobile Detailing & Ceramic Protection in Collin County',
    });

    setMetaTag('meta[property="og:description"]', {
      property: 'og:description',
      content: 'Book mobile detailing, ceramic protection, and seasonal summer heat care from a local Summit team serving Collin County homes and offices.'
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
      content: 'Local mobile detailing and ceramic protection built around Collin County drivers and North Texas heat.',
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
            name: 'Mobile Detailing, Ceramic Protection, and Seasonal Auto Care',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Interior Detailing' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Exterior Detailing' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full Detail Package' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Summer Heat Paint and Interior Protection' } },
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
