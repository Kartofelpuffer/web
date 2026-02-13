import React from 'react';
import CityServicePage from '@/components/seo/CityServicePage';

export default function CollinCountyMobileMechanic() {
  return (
    <CityServicePage
      city="Collin County"
      title="Collin County Mobile Mechanic Services"
      intro="Summit Auto Care serves drivers across Collin County with on-site automotive maintenance and repair, helping you avoid shop downtime and towing hassles."
      description="Collin County mobile mechanic services for brakes, oil changes, battery replacement, and diagnostics. Fast, local, on-site auto service in North Texas."
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
