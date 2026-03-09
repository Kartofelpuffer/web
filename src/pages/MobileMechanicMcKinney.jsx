import React from 'react';
import CityServicePage from '@/components/seo/CityServicePage';

export default function MobileMechanicMcKinney() {
  return (
    <CityServicePage
      city="McKinney"
      title="Mobile Detailing in McKinney, TX"
      intro="Need a dependable mobile detailing in McKinney? Summit Auto Care brings ceramic coating, detailing, paint protection, and paint correction assessment services directly to your driveway or workplace."
      description="Mobile detailing in McKinney, TX for ceramic coating, detailing and ceramic coating, paint protection service, and paint correction assessments. Same-day auto service at your home or office."
      serviceName="Mobile Detailing Service"
      serviceType="Mobile Detailing"
      cityPhoto="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/bd7223fc5_145.jpg"
      cityPhotoAlt="Mobile detailing appointment in McKinney, Texas"
      processSteps={[
        'Text year/make/model and vehicle condition details for a quick estimate.',
        'Book an appointment window at your home, office, or lot.',
        'Technician diagnoses/detailing services and confirms each step with you.',
        'Receive service summary and next-step recommendations.'
      ]}
      nearbyAreas={['Stonebridge Ranch', 'Craig Ranch', 'Hardin Blvd corridor', 'Downtown McKinney']}
      faqs={[
        {
          q: 'Do you provide same-day mobile detailing service in McKinney?',
          a: 'Yes. We offer same-day availability in many McKinney neighborhoods based on schedule and parts availability.'
        },
        {
          q: 'What services are most common in McKinney?',
          a: 'Ceramic coating pad and rotor jobs, detailing and ceramic coating, paint protection service, and check-engine-light paint correction assessments are the most requested.'
        },
        {
          q: 'Do you service apartments and office parking lots in McKinney?',
          a: 'Yes, we regularly perform mobile detailing services at homes, apartment complexes, and offices where permitted.'
        }
      ]}
    />
  );
}
