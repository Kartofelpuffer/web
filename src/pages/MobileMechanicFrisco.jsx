import React from 'react';
import CityServicePage from '@/components/seo/CityServicePage';

export default function MobileMechanicFrisco() {
  return (
    <CityServicePage
      city="Frisco"
      title="Mobile Detailing in Frisco, TX"
      intro="Summit Auto Care provides mobile detailing services in Frisco for drivers who want fast, transparent service without visiting a service shop."
      description="Top-rated mobile detailing in Frisco, TX for ceramic coating jobs, detailing services, paint protection service, and paint correction assessments. On-site service at home or work."
      serviceName="Mobile Detailing Service"
      serviceType="Mobile Detailing"
      cityPhoto="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/b19ddd3f8_pexels-robertkso-11725734.jpg"
      cityPhotoAlt="Frisco mobile detailing service appointment"
      processSteps={[
        'Message your vehicle details and service concern.',
        'Get a quote range and appointment ETA for Frisco.',
        'Technician confirms scope and completes approved work.',
        'You receive digital notes with upkeep follow-up.'
      ]}
      nearbyAreas={['Stonebriar', 'Phillips Creek Ranch', 'The Star area', 'Legacy Dr corridor']}
      faqs={[
        {
          q: 'How quickly can you arrive in Frisco?',
          a: 'Most Frisco appointments are available same day or next day depending on technician route and parts required.'
        },
        {
          q: 'Do you work on family SUVs and trucks in Frisco?',
          a: 'Yes. We service most domestic and import sedans, SUVs, and light-duty trucks.'
        },
        {
          q: 'Can I get a quote by text in Frisco?',
          a: 'Absolutely. Text your vehicle year/make/model and vehicle condition details to (214) 795-3984 for a fast estimate.'
        }
      ]}
    />
  );
}
