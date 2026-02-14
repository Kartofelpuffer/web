import React from 'react';
import CityServicePage from '@/components/seo/CityServicePage';

export default function MobileMechanicFrisco() {
  return (
    <CityServicePage
      city="Frisco"
      title="Mobile Mechanic in Frisco, TX"
      intro="Summit Auto Care provides mobile mechanic services in Frisco for drivers who want fast, transparent service without visiting a repair shop."
      description="Top-rated mobile mechanic in Frisco, TX for brake jobs, oil services, battery replacement, and diagnostics. On-site service at home or work."
      serviceName="Mobile Mechanic Service"
      serviceType="Mobile Mechanic"
      cityPhoto="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1600&q=80"
      cityPhotoAlt="Frisco mobile mechanic service appointment"
      pricingRanges={[
        { label: 'Mobile Diagnosis', range: '$99-$169', note: 'Issue isolation and clear repair recommendations.' },
        { label: 'Battery + Starting', range: '$189-$379', note: 'Battery, terminals, and charging checks on-site.' },
        { label: 'General Repair', range: '$149-$649', note: 'Common mechanical services at your location.' }
      ]}
      processSteps={[
        'Message your vehicle details and service concern.',
        'Get a quote range and appointment ETA for Frisco.',
        'Technician confirms scope and completes approved work.',
        'You receive digital notes with maintenance follow-up.'
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
          a: 'Absolutely. Text your vehicle year/make/model and issue details to (214) 842-7614 for a fast estimate.'
        }
      ]}
    />
  );
}
