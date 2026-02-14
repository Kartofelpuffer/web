import React from 'react';
import CityServicePage from '@/components/seo/CityServicePage';

export default function MobileMechanicAllen() {
  return (
    <CityServicePage
      city="Allen"
      title="Mobile Auto Detailing in Allen, TX"
      intro="Looking for premium mobile detailing in Allen with dependable scheduling and quality results? Summit Auto Care details your vehicle where it is parked."
      description="Mobile auto detailing in Allen, TX for interior and exterior care, with optional mobile mechanic support for maintenance and minor repair needs."
      faqs={[
        {
          q: 'What areas of Allen do you cover?',
          a: 'We cover all Allen neighborhoods and nearby business zones, with convenient morning and evening appointment windows.'
        },
        {
          q: 'Can you do both detailing and brake work in Allen?',
          a: 'Yes. We prioritize detailing packages and can add brake service or other maintenance when requested.'
        },
        {
          q: 'Do you service multiple vehicles in one Allen appointment?',
          a: 'Yes. We can coordinate multi-vehicle household or small fleet detailing and maintenance when scheduled ahead of time.'
        }
      ]}
    />
  );
}
