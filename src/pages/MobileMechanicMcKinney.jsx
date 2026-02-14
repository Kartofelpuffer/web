import React from 'react';
import CityServicePage from '@/components/seo/CityServicePage';

export default function MobileMechanicMcKinney() {
  return (
    <CityServicePage
      city="McKinney"
      title="Mobile Auto Detailing in McKinney, TX"
      intro="Summit Auto Care delivers premium mobile detailing in McKinney with interior restoration, exterior protection, and convenient on-site appointments."
      description="Mobile auto detailing in McKinney, TX with interior deep cleaning, exterior protection, and optional light mechanic services for brakes, oil, and batteries."
      faqs={[
        {
          q: 'Do you provide same-day mobile detailing in McKinney?',
          a: 'Yes. We offer same-day detailing availability in many McKinney neighborhoods based on schedule and package size.'
        },
        {
          q: 'Can you also handle mechanic work in McKinney?',
          a: 'Yes. Detailing is our primary focus, and we also provide brake, oil, battery, and diagnostic support as needed.'
        },
        {
          q: 'Do you service apartments and office parking lots in McKinney?',
          a: 'Yes, we regularly perform mobile detailing and approved maintenance at homes, apartment complexes, and offices.'
        }
      ]}
    />
  );
}
