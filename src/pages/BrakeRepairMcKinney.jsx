import React from 'react';
import CityServicePage from '@/components/seo/CityServicePage';

export default function BrakeRepairMcKinney() {
  return (
    <CityServicePage
      city="McKinney"
      title="Brake Repair in McKinney, TX"
      intro="Get mobile brake repair in McKinney from Summit Auto Care. We inspect, quote, and complete most pad/rotor jobs right where your vehicle is parked."
      description="Brake repair in McKinney, TX with mobile pad replacement, rotor service, and brake inspections. Fast on-site appointments and clear pricing."
      serviceName="Brake Repair"
      serviceType="Mobile Brake Service"
      cityPhoto="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1600&q=80"
      cityPhotoAlt="Mechanic completing brake repair service in McKinney"
      pricingRanges={[
        { label: 'Brake Inspection', range: '$49-$89', note: 'Safety inspection with recommendations and estimate.' },
        { label: 'Pads + Labor (per axle)', range: '$189-$329', note: 'Quality pads with mobile installation included.' },
        { label: 'Pads + Rotors (per axle)', range: '$349-$579', note: 'Complete axle refresh for stopping performance.' }
      ]}
      processSteps={[
        'Share symptoms (noise, vibration, warning lights) by call or text.',
        'Receive a quote range and appointment based on your vehicle.',
        'Technician performs on-site brake inspection and confirms final scope.',
        'Repair completed, tested, and documented with recommendations.'
      ]}
      nearbyAreas={['Eldorado', 'Westridge', 'Trinity Falls', 'Historic McKinney']}
      faqs={[
        {
          q: 'Do you replace rotors and pads on-site in McKinney?',
          a: 'Yes. Many pad and rotor replacements can be completed at your home or office parking location.'
        },
        {
          q: 'What if my brakes are grinding?',
          a: 'Grinding indicates urgent wear. Stop driving when possible and contact us for immediate brake diagnosis.'
        },
        {
          q: 'Do you warranty brake work?',
          a: 'Yes. We review parts and labor coverage in writing before service begins.'
        }
      ]}
    />
  );
}
