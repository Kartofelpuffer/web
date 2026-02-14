import React from 'react';
import { ShieldCheck, Star, Clock3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const recentJobs = [
  {
    title: 'Brake Service - McKinney',
    detail: 'Pads + rotors completed in 2.5 hours at customer driveway.',
  },
  {
    title: 'Interior Detail - Frisco',
    detail: 'Pet hair extraction and stain treatment for family SUV.',
  },
  {
    title: 'Fleet PM - Allen',
    detail: '3 service vans completed before business opening.',
  },
];

const reviewSnippets = [
  {
    quote: 'Quick, honest, and super convenient. They fixed my brakes same day.',
    source: 'Google Reviews',
    href: 'https://www.google.com/search?q=Summit+Auto+Care+TX+reviews'
  },
  {
    quote: 'Detailing quality was excellent and communication was top-notch.',
    source: 'Facebook',
    href: 'https://www.facebook.com/share/1BwAacmCiZ/'
  }
];

export default function TrustProofSection() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Trusted Mobile Service Across Collin County</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            We pair transparent communication with quality workmanship—so you know exactly what is being done and why.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <ShieldCheck className="w-7 h-7 text-emerald-600 mb-3" />
            <h3 className="font-semibold text-slate-900 mb-2">Warranty-Backed Work</h3>
            <p className="text-sm text-slate-600">Clear parts and labor coverage explained before service begins.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <Clock3 className="w-7 h-7 text-blue-600 mb-3" />
            <h3 className="font-semibold text-slate-900 mb-2">Same-Day Availability</h3>
            <p className="text-sm text-slate-600">Fast response windows for many jobs in McKinney, Frisco, Allen, and Plano.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <Star className="w-7 h-7 text-amber-500 mb-3" />
            <h3 className="font-semibold text-slate-900 mb-2">Real Customer Feedback</h3>
            <p className="text-sm text-slate-600">Review snippets and source links help customers verify trust before booking.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Recent Jobs</h3>
            <ul className="space-y-3">
              {recentJobs.map((job) => (
                <li key={job.title} className="rounded-lg border border-slate-200 p-4">
                  <p className="font-semibold text-slate-900">{job.title}</p>
                  <p className="text-sm text-slate-600">{job.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">What Drivers Are Saying</h3>
            <ul className="space-y-4">
              {reviewSnippets.map((review) => (
                <li key={review.quote} className="rounded-lg border border-slate-200 p-4">
                  <p className="text-slate-700 mb-2">“{review.quote}”</p>
                  <a className="text-sm text-blue-700 hover:underline" href={review.href} target="_blank" rel="noopener noreferrer">
                    Source: {review.source}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link to={createPageUrl('Contact')} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold">
                Get a Fast Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
