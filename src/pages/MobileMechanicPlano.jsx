import React from 'react';
import CityServicePage from '@/components/seo/CityServicePage';

export default function MobileMechanicPlano() {
  return (
    <CityServicePage
      city="Plano"
      title="Mobile Mechanic in Plano, TX"
      intro="Need fast mobile auto repair in Plano? Summit Auto Care brings expert brake, oil, battery, and diagnostic service directly to your home or office."
      description="Mobile mechanic in Plano, TX offering on-site brake repair, oil changes, battery replacement, and diagnostics with same-day availability."
      faqs={[
        {
          q: 'Do you offer same-day appointments in Plano?',
          a: 'Yes, many Plano requests can be scheduled same day based on technician route and parts availability.'
        },
        {
          q: 'Can you service my car at my workplace in Plano?',
          a: 'Yes. We frequently service vehicles at office parking lots when property rules allow mobile maintenance.'
        },
        {
          q: 'What Plano services are requested most often?',
          a: 'Brake pad/rotor replacement, synthetic oil changes, battery installs, and check-engine diagnostics are our most common services.'
        }
      ]}
    />
  );
}
