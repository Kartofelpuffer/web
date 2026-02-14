import React from 'react';
import CityServicePage from '@/components/seo/CityServicePage';

export default function CollinCountyMobileMechanic() {
  return (
    <CityServicePage
      city="Collin County"
      title="Collin County Mobile Mechanic Services"
      intro="Summit Auto Care serves drivers across Collin County with on-site automotive maintenance and repair, helping you avoid shop downtime and towing hassles."
      description="Collin County mobile mechanic services for brakes, oil changes, battery replacement, and diagnostics. Fast, local, on-site auto service in North Texas."
      serviceName="Mobile Mechanic Service"
      serviceType="Mobile Mechanic"
      cityPhoto="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1600&q=80"
      cityPhotoAlt="Collin County mobile mechanic at customer location"
      pricingRanges={[
        { label: 'On-Site Inspection', range: '$99-$169', note: 'Troubleshooting for warning lights and drivability.' },
        { label: 'Routine Service', range: '$89-$249', note: 'Oil, batteries, filters, and tune-up support.' },
        { label: 'Repair Appointments', range: '$149-$699', note: 'Part and labor ranges vary by vehicle platform.' }
      ]}
      processSteps={[
        'Share your city, issue, and vehicle details with our team.',
        'We route the nearest technician and confirm appointment window.',
        'On-site service is completed with approval before added work.',
        'Digital summary helps you track all future maintenance needs.'
      ]}
      nearbyAreas={['McKinney', 'Frisco', 'Allen', 'Plano', 'Prosper', 'Celina']}
      faqs={[
        {
          q: 'Which Collin County cities do you serve?',
          a: 'We frequently serve McKinney, Frisco, Allen, and Plano, plus nearby communities throughout Collin County.'
        },
        {
          q: 'Can businesses schedule recurring fleet service in Collin County?',
          a: 'Yes. We offer scheduled fleet maintenance and repair support tailored to your operating hours and vehicle usage.'
        },
        {
          q: 'How do I book service in Collin County?',
          a: 'Call or text (214) 842-7614 with your location and vehicle details, and we will confirm the soonest available appointment.'
        }
      ]}
    />
  );
}
