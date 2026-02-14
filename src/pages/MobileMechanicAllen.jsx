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
      cityPhoto="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/bd7223fc5_145.jpg"
      cityPhotoAlt="Mobile mechanic service for driver in Allen, TX"
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
