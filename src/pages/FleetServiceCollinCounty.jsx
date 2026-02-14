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
      cityPhoto="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/b19ddd3f8_pexels-robertkso-11725734.jpg"
      cityPhotoAlt="Fleet service vehicle maintenance in Collin County"
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
