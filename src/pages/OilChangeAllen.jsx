import React from 'react';
import CityServicePage from '@/components/seo/CityServicePage';

export default function OilChangeAllen() {
  return (
    <CityServicePage
      city="Allen"
      title="Detailing in Allen, TX"
      intro="Fast mobile detailing and ceramic coating in Allen that fit your schedule. Summit Auto Care handles filter replacement, fluid check, and reset reminders on-site."
      description="Mobile detailing and ceramic coating service in Allen, TX with synthetic and conventional options, filter replacement, and quick on-site upkeep."
      serviceName="Detailing Service"
      serviceType="Mobile Detailing Service"
      cityPhoto="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/bd7223fc5_145.jpg"
      cityPhotoAlt="Mobile detailing service in Allen, Texas"
      processSteps={[
        'Text year/make/model and mileage for the right detailing spec.',
        'Select a morning, midday, or evening appointment window.',
        'Technician performs detailing/filter service and multi-point inspection.',
        'Receive service notes and recommended interval for next change.'
      ]}
      nearbyAreas={['Watters Creek', 'Twin Creeks', 'West Allen', 'Exchange Parkway corridor']}
      faqs={[
        {
          q: 'How often should I schedule detailing in Allen?',
          a: 'Most vehicles need service every 5,000 to 7,500 miles depending on manufacturer guidance and driving conditions.'
        },
        {
          q: 'Can I choose add-ons like ceramic coating?',
          a: 'Yes. We can discuss available detailing packages and ceramic coating options when you request a quote.'
        },
        {
          q: 'Do you service multiple cars in one Allen stop?',
          a: 'Yes, bundled household appointments are available and can reduce downtime.'
        }
      ]}
    />
  );
}
