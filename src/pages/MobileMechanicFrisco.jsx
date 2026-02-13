import React from 'react';
import CityServicePage from '@/components/seo/CityServicePage';

export default function MobileMechanicFrisco() {
  return (
    <CityServicePage
      city="Frisco"
      title="Mobile Mechanic in Frisco, TX"
      intro="Summit Auto Care provides mobile mechanic services in Frisco for drivers who want fast, transparent service without visiting a repair shop."
      description="Top-rated mobile mechanic in Frisco, TX for brake jobs, oil services, battery replacement, and diagnostics. On-site service at home or work."
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
          a: 'Absolutely. Text your vehicle year/make/model and issue details to (214) 842-7614 for a fast estimate.'
        }
      ]}
    />
  );
}
