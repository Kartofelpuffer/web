import React from 'react';
import CityServicePage from '@/components/seo/CityServicePage';

export default function OilChangeAllen() {
  return (
    <CityServicePage
      city="Allen"
      title="Oil Change in Allen, TX"
      intro="Fast mobile oil changes in Allen that fit your schedule. Summit Auto Care handles filter replacement, fluid check, and reset reminders on-site."
      description="Mobile oil change in Allen, TX with synthetic and conventional options, filter replacement, and quick on-site maintenance."
      serviceName="Oil Change"
      serviceType="Mobile Oil Change Service"
      cityPhoto="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/bd7223fc5_145.jpg"
      cityPhotoAlt="Mobile oil change service in Allen, Texas"
      processSteps={[
        'Text year/make/model and mileage for the right oil spec.',
        'Select a morning, midday, or evening appointment window.',
        'Technician performs oil/filter service and multi-point inspection.',
        'Receive service notes and recommended interval for next change.'
      ]}
      nearbyAreas={['Watters Creek', 'Twin Creeks', 'West Allen', 'Exchange Parkway corridor']}
      faqs={[
        {
          q: 'How often should I schedule an oil change in Allen?',
          a: 'Most vehicles need service every 5,000 to 7,500 miles depending on manufacturer guidance and driving conditions.'
        },
        {
          q: 'Can I choose synthetic oil brands?',
          a: 'Yes. We can discuss approved oil grades and preferred brands when you request a quote.'
        },
        {
          q: 'Do you service multiple cars in one Allen stop?',
          a: 'Yes, bundled household appointments are available and can reduce downtime.'
        }
      ]}
    />
  );
}
