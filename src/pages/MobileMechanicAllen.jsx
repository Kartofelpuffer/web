import React from 'react';
import CityServicePage from '@/components/seo/CityServicePage';

export default function MobileMechanicAllen() {
  return (
    <CityServicePage
      city="Allen"
      title="Mobile Mechanic in Allen, TX"
      intro="Looking for a mobile mechanic in Allen who shows up on time and communicates clearly? Summit Auto Care handles your repairs where your car is parked."
      description="Mobile mechanic in Allen, TX for brakes, oil changes, battery service, and inspections. Reliable on-site auto care from Summit Auto Care."
      serviceName="Mobile Mechanic Service"
      serviceType="Mobile Mechanic"
      cityPhoto="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=1600&q=80"
      cityPhotoAlt="Mobile mechanic service for driver in Allen, TX"
      pricingRanges={[
        { label: 'Inspection + Diagnostic', range: '$99-$169', note: 'Identify root cause and map out repair options.' },
        { label: 'Preventive Maintenance', range: '$89-$229', note: 'Oil, filters, fluid checks, and tune-up support.' },
        { label: 'Repair Services', range: '$149-$649', note: 'Depends on part type, labor time, and access.' }
      ]}
      processSteps={[
        'Submit vehicle and symptom details by text.',
        'Receive quote range and earliest available Allen slot.',
        'We complete diagnosis and approved repairs on-site.',
        'Final documentation includes notes for future maintenance.'
      ]}
      nearbyAreas={['Twin Creeks', 'Watters Creek', 'Bethany area', 'Stacy Road corridor']}
      faqs={[
        {
          q: 'What areas of Allen do you cover?',
          a: 'We cover all Allen neighborhoods and nearby business zones, with convenient booking windows for morning and evening service.'
        },
        {
          q: 'Can you perform brake repairs in Allen at my home?',
          a: 'Yes. We can complete many brake repairs at residential locations, including pads, rotors, and inspections.'
        },
        {
          q: 'Do you service multiple vehicles in one Allen appointment?',
          a: 'Yes. We can coordinate multi-vehicle household or small fleet appointments when scheduled ahead of time.'
        }
      ]}
    />
  );
}
