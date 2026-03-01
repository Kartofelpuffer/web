import { useEffect } from 'react';

const canonicalUrl = 'https://www.summitautocaretx.com/';
const businessName = 'Summit Auto Care TX';
const primaryPhone = '+1-833-703-8934';
const serviceAreas = ['McKinney', 'Allen', 'Frisco', 'Plano', 'Collin County'];

const faqItems = [
  {
    question: 'How quickly can I book a mobile mechanic appointment?',
    answer: 'Many service windows are available same day in McKinney, Allen, Frisco, and Plano. Text or call for the fastest scheduling response.',
  },
  {
    question: 'What services can be completed on-site?',
    answer: 'We handle oil changes, brake repair, diagnostics, battery replacement, scheduled maintenance, and mobile detailing at your home or workplace.',
  },
  {
    question: 'Do you offer fleet maintenance services?',
    answer: 'Yes. We support fleet preventive maintenance, inspections, and routine repairs across Collin County with business-friendly scheduling.',
  },
];

export default function HomeSeo() {
  useEffect(() => {
    document.title = 'Mobile Mechanic in Collin County | Summit Auto Care TX';

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
      content: 'Mobile mechanic and detailing in McKinney, Allen, Frisco, and Plano. Same-day service windows, transparent pricing, and warranty-backed work. Call (833) 703-8934.',
    });

    setMetaTag('meta[name="keywords"]', {
      name: 'keywords',
      content: 'mobile mechanic McKinney, mobile mechanic Allen, mobile mechanic Frisco, mobile mechanic Plano, Collin County auto repair, mobile detailing Texas',
    });

    setMetaTag('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-image-preview:large',
    });

    setMetaTag('meta[property="og:title"]', {
      property: 'og:title',
      content: 'Summit Auto Care TX | Mobile Mechanic & Detailing in Collin County',
    });

    setMetaTag('meta[property="og:description"]', {
      property: 'og:description',
      content: 'Skip the repair shop wait. Book mobile oil changes, brake repair, diagnostics, and detailing at your home or office in Collin County.',
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
      content: 'Summit Auto Care TX | Mobile Mechanic & Detailing',
    });

    setMetaTag('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: 'Mobile car care with same-day availability across McKinney, Allen, Frisco, and Plano.',
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
          '@type': 'AutoRepair',
          '@id': `${canonicalUrl}#business`,
          name: businessName,
          image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/4bc626bfb_Lightlogo-clear.png',
          url: canonicalUrl,
          telephone: primaryPhone,
          areaServed: serviceAreas.map((name) => ({ '@type': 'City', name })),
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '05:00',
              closes: '22:00',
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Saturday', 'Sunday'],
              opens: '05:00',
              closes: '22:00',
            },
          ],
          priceRange: '$$',
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
