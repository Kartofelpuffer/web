import React from 'react';
import CityServicePage from '@/components/seo/CityServicePage';

export default function CollinCountyMobileMechanic() {
  return (
    <CityServicePage
      city="Collin County"
      title="Collin County Mobile Detailing Services"
      intro="Summit Auto Care serves drivers across Collin County with on-site automotive upkeep and service, helping you avoid shop downtime and towing hassles."
      description="Collin County mobile detailing services for ceramic coating options, detailing and ceramic coating, paint protection service, and paint correction assessments. Fast, local, on-site auto service in North Texas."
      serviceName="Mobile Detailing Service"
      serviceType="Mobile Detailing"
      cityPhoto="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/b19ddd3f8_pexels-robertkso-11725734.jpg"
      cityPhotoAlt="Collin County mobile detailing at customer location"
      processSteps={[
        'Share your city, vehicle condition, and vehicle details with our team.',
        'We route the nearest technician and confirm appointment window.',
        'On-site service is completed with approval before added work.',
        'Digital summary helps you track all future upkeep needs.'
      ]}
      nearbyAreas={['McKinney', 'Frisco', 'Allen', 'Plano', 'Prosper', 'Celina']}
      faqs={[
        {
          q: 'Which Collin County cities do you serve?',
          a: 'We frequently serve McKinney, Frisco, Allen, and Plano, plus nearby communities throughout Collin County.'
        },
        {
          q: 'Can businesses schedule recurring fleet service in Collin County?',
          a: 'Yes. We offer scheduled fleet upkeep and service support tailored to your operating hours and vehicle usage.'
        },
        {
          q: 'How do I book service in Collin County?',
          a: 'Call or text (214) 795-3984 with your location and vehicle details, and we will confirm the soonest available appointment.'
        }
      ]}
    />
  );
}
