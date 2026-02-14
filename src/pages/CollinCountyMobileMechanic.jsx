import React from 'react';
import CityServicePage from '@/components/seo/CityServicePage';

export default function CollinCountyMobileMechanic() {
  return (
    <CityServicePage
      city="Collin County"
      title="Collin County Mobile Detailing Services"
      intro="Summit Auto Care serves drivers across Collin County with professional mobile detailing and optional mechanic support for convenient, at-location vehicle care."
      description="Collin County mobile detailing services with interior and exterior care, plus optional mobile mechanic support for maintenance and repairs."
      faqs={[
        {
          q: 'Which Collin County cities do you serve?',
          a: 'We frequently serve McKinney, Frisco, Allen, and Plano, plus nearby communities throughout Collin County.'
        },
        {
          q: 'Can businesses schedule recurring detailing for fleets in Collin County?',
          a: 'Yes. We offer scheduled fleet detailing and maintenance support tailored to your operating hours and vehicle usage.'
        },
        {
          q: 'How do I book detailing service in Collin County?',
          a: 'Call or text (214) 842-7614 with your location and vehicle details, and we will confirm the soonest available appointment.'
        }
      ]}
    />
  );
}
