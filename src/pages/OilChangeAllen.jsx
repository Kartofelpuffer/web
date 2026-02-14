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
      cityPhoto="https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=1600&q=80"
      cityPhotoAlt="Mobile oil change service in Allen, Texas"
      pricingRanges={[
        { label: 'Conventional Oil Service', range: '$89-$119', note: 'For supported vehicles with standard oil needs.' },
        { label: 'Full Synthetic Service', range: '$109-$169', note: 'Premium synthetic oil with quality filter replacement.' },
        { label: 'High-Mileage Package', range: '$129-$189', note: 'Conditioning additives and inspection for older engines.' }
      ]}
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
