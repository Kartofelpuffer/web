import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { localServicePages } from '@/content/localServicePages';

export default function LocalSeoLinks() {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Local Detailing Services by City</h2>
        <p className="text-slate-600 mb-6">
          Explore city-specific pages for premium detailing packages, pricing guidance, and optional mobile mechanic support.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {localServicePages.map((item) => (
            <Link
              key={item.key}
              to={createPageUrl(item.key)}
              className="rounded-lg border border-slate-200 p-4 text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-colors font-medium"
            >
              {item.navTitle}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
