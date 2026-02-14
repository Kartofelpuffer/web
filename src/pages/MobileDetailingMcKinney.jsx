import React from 'react';
import CityServicePage from '@/components/seo/CityServicePage';

export default function MobileDetailingMcKinney() {
  return (
    <CityServicePage
      city="McKinney"
      title="Mobile Detailing in McKinney, TX"
      intro="Professional mobile detailing in McKinney for busy drivers who want showroom-level results without driving to a shop."
      description="Mobile detailing in McKinney, TX with interior deep cleaning, paint-safe hand wash, and protection packages delivered at your location."
      serviceName="Mobile Detailing"
      serviceType="Mobile Auto Detailing"
      cityPhoto="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/bd7223fc5_145.jpg"
      cityPhotoAlt="Mobile detailing service setup for a vehicle in McKinney, Texas"
      processSteps={[
        'Send photos + vehicle size by text for accurate quoting.',
        'Choose your package and preferred appointment window.',
        'We arrive on-site in McKinney with water/equipment options.',
        'You receive before/after photos and maintenance tips.'
      ]}
      nearbyAreas={['Craig Ranch', 'Stonebridge Ranch', 'Adriatica', 'Downtown McKinney']}
      faqs={[
        {
          q: 'How long does mobile detailing take in McKinney?',
          a: 'Most appointments run 2 to 4 hours depending on vehicle size and condition. We provide exact timing with your quote.'
        },
        {
          q: 'Do you need access to water or power for detailing?',
          a: 'For many appointments we can work with on-site utilities, and we can discuss self-contained options during booking.'
        },
        {
          q: 'Can you remove pet hair and odor from interiors?',
          a: 'Yes. We offer add-on pet hair extraction and odor treatment for family SUVs, sedans, and trucks.'
        }
      ]}
    />
  );
}
