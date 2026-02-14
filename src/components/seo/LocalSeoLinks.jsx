import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const cityPages = [
  { title: 'Mobile Detailing in McKinney, TX', page: 'MobileDetailingMcKinney' },
  { title: 'Brake Repair in McKinney, TX', page: 'BrakeRepairMcKinney' },
  { title: 'Oil Change in Allen, TX', page: 'OilChangeAllen' },
  { title: 'Fleet Service in Collin County', page: 'FleetServiceCollinCounty' },
  { title: 'Mobile Mechanic in McKinney, TX', page: 'MobileMechanicMcKinney' },
  { title: 'Mobile Mechanic in Frisco, TX', page: 'MobileMechanicFrisco' },
  { title: 'Mobile Mechanic in Allen, TX', page: 'MobileMechanicAllen' },
  { title: 'Collin County Mobile Mechanic Services', page: 'CollinCountyMobileMechanic' }
];

export default function LocalSeoLinks() {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Service Areas & City-Specific Landing Pages</h2>
        <p className="text-slate-600 mb-6">
          Browse dedicated pages with local pricing ranges, FAQs, and process details for each service area.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {cityPages.map((item) => (
            <Link
              key={item.page}
              to={createPageUrl(item.page)}
              className="rounded-lg border border-slate-200 p-4 text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-colors font-medium"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
