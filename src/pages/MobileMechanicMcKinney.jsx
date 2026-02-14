import React from 'react';
import CityServicePage from '@/components/seo/CityServicePage';

export default function MobileMechanicMcKinney() {
  return (
    <CityServicePage
      city="McKinney"
      title="Mobile Mechanic in McKinney, TX"
      intro="Need a dependable mobile mechanic in McKinney? Summit Auto Care brings brake, oil, battery, and diagnostic services directly to your driveway or workplace."
      description="Mobile mechanic in McKinney, TX for brake repair, oil changes, battery replacement, and diagnostics. Same-day auto service at your home or office."
      serviceName="Mobile Mechanic Service"
      serviceType="Mobile Mechanic"
      cityPhoto="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1600&q=80"
      cityPhotoAlt="Mobile mechanic appointment in McKinney, Texas"
      pricingRanges={[
        { label: 'Diagnostic Visit', range: '$99-$169', note: 'On-site troubleshooting and digital estimate.' },
        { label: 'Battery Replacement', range: '$189-$369', note: 'Testing, installation, and terminal cleaning.' },
        { label: 'Common Repairs', range: '$149-$599', note: 'Final pricing depends on parts and labor scope.' }
      ]}
      processSteps={[
        'Text year/make/model and issue details for a quick estimate.',
        'Book an appointment window at your home, office, or lot.',
        'Technician diagnoses/repairs and confirms each step with you.',
        'Receive service summary and next-step recommendations.'
      ]}
      nearbyAreas={['Stonebridge Ranch', 'Craig Ranch', 'Hardin Blvd corridor', 'Downtown McKinney']}
      faqs={[
        {
          q: 'Do you provide same-day mobile mechanic service in McKinney?',
          a: 'Yes. We offer same-day availability in many McKinney neighborhoods based on schedule and parts availability.'
        },
        {
          q: 'What services are most common in McKinney?',
          a: 'Brake pad and rotor jobs, oil changes, battery replacement, and check-engine-light diagnostics are the most requested.'
        },
        {
          q: 'Do you service apartments and office parking lots in McKinney?',
          a: 'Yes, we regularly perform mobile repairs at homes, apartment complexes, and offices where permitted.'
        }
      ]}
    />
  );
}
