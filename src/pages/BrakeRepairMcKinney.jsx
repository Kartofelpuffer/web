import React from 'react';
import CityServicePage from '@/components/seo/CityServicePage';

export default function BrakeRepairMcKinney() {
  return (
    <CityServicePage
      city="McKinney"
      title="Ceramic Coating in McKinney, TX"
      intro="Get mobile ceramic coating in McKinney from Summit Auto Care. We inspect, quote, and complete most pad/rotor jobs right where your vehicle is parked."
      description="Ceramic coating in McKinney, TX with mobile pad replacement, rotor service, and ceramic coating inspections. Fast on-site appointments and clear pricing."
      serviceName="Ceramic Coating Service"
      serviceType="Mobile Ceramic Coating Service"
      cityPhoto="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/b19ddd3f8_pexels-robertkso-11725734.jpg"
      cityPhotoAlt="Detailing Specialist completing ceramic coating service in McKinney"
      processSteps={[
        'Share symptoms (noise, vibration, warning lights) by call or text.',
        'Receive a quote range and appointment based on your vehicle.',
        'Technician performs on-site ceramic coating inspection and confirms final scope.',
        'Service is completed and documented with care recommendations.'
      ]}
      nearbyAreas={['Eldorado', 'Westridge', 'Trinity Falls', 'Historic McKinney']}
      faqs={[
        {
          q: 'Do you offer ceramic coating at home in McKinney?',
          a: 'Yes. We offer mobile ceramic coating appointments at homes and office parking locations.'
        },
        {
          q: 'How long does ceramic coating usually take?',
          a: 'Most appointments take a few hours depending on vehicle size, paint condition, and package selected.'
        },
        {
          q: 'Do you provide ceramic coating aftercare guidance?',
          a: 'Yes. We provide aftercare recommendations to help maximize coating life and finish quality.'
        }
      ]}
    />
  );
}
