import React from 'react';
import CityServicePage from '@/components/seo/CityServicePage';

export default function MobileDetailingFrisco() {
  return (
    <CityServicePage
      city="Frisco"
      title="Mobile Detailing in Frisco, TX"
      intro="Premium mobile detailing in Frisco for drivers who want a clean, protected vehicle without spending time at a shop."
      description="Mobile detailing in Frisco, TX with interior detail, full detail, ceramic protection, and add-ons delivered at your home or office."
      serviceName="Mobile Detailing"
      serviceType="Mobile Auto Detailing"
      cityPhoto="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/bd7223fc5_145.jpg"
      cityPhotoAlt="Mobile detailing service setup for a vehicle in Frisco, Texas"
      processSteps={[
        'Text your vehicle details and desired package for an accurate quote.',
        'Choose interior detail, full detail, or ceramic protection options.',
        'Our team arrives on-site in Frisco with professional detailing tools and products.',
        'Review results, photos, and ongoing care recommendations before wrap-up.'
      ]}
      nearbyAreas={['The Star District', 'Phillips Creek Ranch', 'Frisco Square', 'Stonebriar']}
      faqs={[
        {
          q: 'How long does mobile detailing take in Frisco?',
          a: 'Interior detail appointments are typically 2 to 2.5 hours, full details around 3 hours, and ceramic services vary by package.'
        },
        {
          q: 'Do you offer ceramic protection in Frisco?',
          a: 'Yes. We offer 1-year ceramic protection and 3–5 year ceramic coating packages with prep and paint enhancement steps.'
        },
        {
          q: 'What add-on services can I request in Frisco?',
          a: 'Common add-ons include pet hair removal, odor treatment, engine bay detail, headlight restoration, leather conditioning, and clay bar plus paint sealant.'
        }
      ]}
    />
  );
}
