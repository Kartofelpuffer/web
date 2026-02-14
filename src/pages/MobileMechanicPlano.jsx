import React from 'react';
import CityServicePage from '@/components/seo/CityServicePage';

export default function MobileMechanicPlano() {
  return (
    <CityServicePage
      city="Plano"
      title="Mobile Auto Detailing in Plano, TX"
      intro="Need high-end mobile detailing in Plano? Summit Auto Care brings interior and exterior detailing directly to your driveway or office lot."
      description="Mobile auto detailing in Plano, TX offering interior deep cleaning, exterior paint-safe treatment, and optional mobile mechanic services."
      faqs={[
        {
          q: 'Do you offer same-day detailing appointments in Plano?',
          a: 'Yes, many Plano detailing requests can be scheduled same day based on technician route and package requirements.'
        },
        {
          q: 'Can you service my car at my workplace in Plano?',
          a: 'Yes. We frequently service vehicles at office parking lots when property rules allow mobile detailing or maintenance.'
        },
        {
          q: 'Do you also provide mechanic work in Plano?',
          a: 'Yes. While detailing is primary, we can support maintenance like oil changes, battery service, and brake checks.'
        }
      ]}
    />
  );
}
