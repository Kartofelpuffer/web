export const localServicePages = [
  {
    key: 'MobileMechanicMcKinney',
    city: 'McKinney',
    title: 'Mobile Auto Detailing in McKinney, TX',
    navTitle: 'Mobile Detailing in McKinney, TX',
    intro: 'Summit Auto Care delivers premium mobile detailing in McKinney with interior restoration, exterior protection, and convenient on-site appointments.',
    description: 'Mobile auto detailing in McKinney, TX with interior deep cleaning, exterior protection, and optional light mechanic services for brakes, oil, and batteries.',
    faqs: [
      { q: 'Do you provide same-day mobile detailing in McKinney?', a: 'Yes. We offer same-day detailing availability in many McKinney neighborhoods based on schedule and package size.' },
      { q: 'Can you also handle mechanic work in McKinney?', a: 'Yes. Detailing is our primary focus, and we also provide brake, oil, battery, and diagnostic support as needed.' },
      { q: 'Do you service apartments and office parking lots in McKinney?', a: 'Yes, we regularly perform mobile detailing and approved maintenance at homes, apartment complexes, and offices.' }
    ]
  },
  {
    key: 'MobileMechanicFrisco',
    city: 'Frisco',
    title: 'Mobile Auto Detailing in Frisco, TX',
    navTitle: 'Mobile Detailing in Frisco, TX',
    intro: 'Need your vehicle professionally detailed in Frisco without leaving home? Summit Auto Care brings premium detailing directly to you.',
    description: 'Top-rated mobile auto detailing in Frisco, TX for interior and exterior packages, plus optional mobile mechanic support for brakes and maintenance.',
    faqs: [
      { q: 'How quickly can you detail my car in Frisco?', a: 'Most Frisco detailing appointments are available same day or next day depending on technician route and package requested.' },
      { q: 'Do you detail family SUVs and trucks in Frisco?', a: 'Yes. We detail most domestic and import sedans, SUVs, and light-duty trucks using paint-safe products.' },
      { q: 'Can I request mechanic services with my Frisco detailing appointment?', a: 'Yes. We can bundle approved mechanical services like oil, brakes, or battery support when needed.' }
    ]
  },
  {
    key: 'MobileMechanicAllen',
    city: 'Allen',
    title: 'Mobile Auto Detailing in Allen, TX',
    navTitle: 'Mobile Detailing in Allen, TX',
    intro: 'Looking for premium mobile detailing in Allen with dependable scheduling and quality results? Summit Auto Care details your vehicle where it is parked.',
    description: 'Mobile auto detailing in Allen, TX for interior and exterior care, with optional mobile mechanic support for maintenance and minor repair needs.',
    faqs: [
      { q: 'What areas of Allen do you cover?', a: 'We cover all Allen neighborhoods and nearby business zones, with convenient morning and evening appointment windows.' },
      { q: 'Can you do both detailing and brake work in Allen?', a: 'Yes. We prioritize detailing packages and can add brake service or other maintenance when requested.' },
      { q: 'Do you service multiple vehicles in one Allen appointment?', a: 'Yes. We can coordinate multi-vehicle household or small fleet detailing and maintenance when scheduled ahead of time.' }
    ]
  },
  {
    key: 'MobileMechanicPlano',
    city: 'Plano',
    title: 'Mobile Auto Detailing in Plano, TX',
    navTitle: 'Mobile Detailing in Plano, TX',
    intro: 'Need high-end mobile detailing in Plano? Summit Auto Care brings interior and exterior detailing directly to your driveway or office lot.',
    description: 'Mobile auto detailing in Plano, TX offering interior deep cleaning, exterior paint-safe treatment, and optional mobile mechanic services.',
    faqs: [
      { q: 'Do you offer same-day detailing appointments in Plano?', a: 'Yes, many Plano detailing requests can be scheduled same day based on technician route and package requirements.' },
      { q: 'Can you service my car at my workplace in Plano?', a: 'Yes. We frequently service vehicles at office parking lots when property rules allow mobile detailing or maintenance.' },
      { q: 'Do you also provide mechanic work in Plano?', a: 'Yes. While detailing is primary, we can support maintenance like oil changes, battery service, and brake checks.' }
    ]
  },
  {
    key: 'CollinCountyMobileMechanic',
    city: 'Collin County',
    title: 'Collin County Mobile Detailing Services',
    navTitle: 'Collin County Mobile Detailing & Auto Care',
    intro: 'Summit Auto Care serves drivers across Collin County with professional mobile detailing and optional mechanic support for convenient, at-location vehicle care.',
    description: 'Collin County mobile detailing services with interior and exterior care, plus optional mobile mechanic support for maintenance and repairs.',
    faqs: [
      { q: 'Which Collin County cities do you serve?', a: 'We frequently serve McKinney, Frisco, Allen, and Plano, plus nearby communities throughout Collin County.' },
      { q: 'Can businesses schedule recurring detailing for fleets in Collin County?', a: 'Yes. We offer scheduled fleet detailing and maintenance support tailored to your operating hours and vehicle usage.' },
      { q: 'How do I book detailing service in Collin County?', a: 'Call or text (214) 842-7614 with your location and vehicle details, and we will confirm the soonest available appointment.' }
    ]
  }
];

export const localServicePageMap = Object.fromEntries(localServicePages.map((page) => [page.key, page]));
