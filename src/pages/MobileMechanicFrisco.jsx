import React from 'react';
import CityServicePage from '@/components/seo/CityServicePage';

export default function MobileMechanicFrisco() {
  return (
    <CityServicePage
      city="Frisco"
      title="Mobile Auto Detailing in Frisco, TX"
      intro="Need your vehicle professionally detailed in Frisco without leaving home? Summit Auto Care brings premium detailing directly to you."
      description="Top-rated mobile auto detailing in Frisco, TX for interior and exterior packages, plus optional mobile mechanic support for brakes and maintenance."
      faqs={[
        {
          q: 'How quickly can you detail my car in Frisco?',
          a: 'Most Frisco detailing appointments are available same day or next day depending on technician route and package requested.'
        },
        {
          q: 'Do you detail family SUVs and trucks in Frisco?',
          a: 'Yes. We detail most domestic and import sedans, SUVs, and light-duty trucks using paint-safe products.'
        },
        {
          q: 'Can I request mechanic services with my Frisco detailing appointment?',
          a: 'Yes. We can bundle approved mechanical services like oil, brakes, or battery support when needed.'
        }
      ]}
    />
  );
}
