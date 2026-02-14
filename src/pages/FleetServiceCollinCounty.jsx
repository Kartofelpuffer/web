import React from 'react';
import CityServicePage from '@/components/seo/CityServicePage';

export default function FleetServiceCollinCounty() {
  return (
    <CityServicePage
      city="Collin County"
      title="Fleet Service in Collin County"
      intro="Mobile fleet maintenance across Collin County for service vans, delivery vehicles, and small business fleets that need less downtime."
      description="Fleet service in Collin County with mobile oil changes, brake inspections, diagnostics, and scheduled maintenance for business vehicles."
      serviceName="Fleet Service"
      serviceType="Mobile Fleet Maintenance"
      cityPhoto="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80"
      cityPhotoAlt="Fleet service vehicle maintenance in Collin County"
      pricingRanges={[
        { label: 'Fleet Health Check', range: '$79-$129', note: 'Inspection and preventive recommendations per vehicle.' },
        { label: 'Routine PM Service', range: '$99-$189', note: 'Oil/filter plus fluid and wear-item checks.' },
        { label: 'Brake + Safety Package', range: '$239-$589', note: 'Pads/rotors by axle depending on fleet platform.' }
      ]}
      processSteps={[
        'Share your fleet list, mileage, and operating schedule.',
        'We build a recurring service cadence by vehicle and route.',
        'Technicians perform maintenance on-site at your lot or jobsite.',
        'You get digital records for each service to support compliance.'
      ]}
      nearbyAreas={['McKinney', 'Frisco', 'Allen', 'Plano', 'Prosper', 'Melissa']}
      faqs={[
        {
          q: 'Can you service fleets before business hours?',
          a: 'Yes. We offer early and after-hours scheduling options to keep your vehicles available during core operations.'
        },
        {
          q: 'Do you handle mixed fleets?',
          a: 'We support most light-duty gas vehicles across domestic and import makes commonly used by local businesses.'
        },
        {
          q: 'Do you provide service logs for each unit?',
          a: 'Yes. Every visit includes documented service details, findings, and recommended next intervals.'
        }
      ]}
    />
  );
}
