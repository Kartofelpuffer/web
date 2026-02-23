import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MessageSquare, Sparkles, ShieldCheck, Clock3 } from 'lucide-react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import CTAButton from '@/components/CTAButton';

const serviceAreas = [
  'McKinney',
  'Allen',
  'Frisco',
  'Plano',
  'Prosper',
  'Celina',
  'Collin County'
];

const primaryServices = [
  'Mobile detailing (interior + exterior packages)',
  'Oil changes at your home or office',
  'Brake pad and rotor service'
];

const quoteBenefits = [
  {
    title: 'Convenience first',
    text: 'Get a fast quote by text without taking time off work, waiting in a lobby, or driving to a shop.'
  },
  {
    title: 'No shop hassle',
    text: 'We come to your location, so you can stay productive while your vehicle gets the care it needs.'
  },
  {
    title: 'Transparent pricing',
    text: 'We provide straightforward quote guidance up front so you can make a confident, informed decision.'
  }
];

export default function Quote() {
  useEffect(() => {
    document.title = 'Text for a Free Quote | Summit Auto Care';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Text Summit Auto Care at (833) 703-8934 for a transparent mobile quote on detailing, oil changes, and brake service in McKinney, Allen, Frisco, Plano, and Collin County.'
      );
    }

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      'content',
      'mobile detailing McKinney, mobile detailing Frisco, mobile oil change Allen, brake service McKinney, text for auto quote, Collin County mobile mechanic'
    );
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar alwaysScrolled={true} />
      <CTAButton />

      <main className="pt-20">
        <section className="py-12 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-10"
            >
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-blue-700 mb-3">
                Fast quote by text
              </p>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
                Get a Simple, Transparent Quote Without Visiting a Shop
              </h1>

              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                Summit Auto Care is built for busy drivers. If you need detailing, an oil change,
                or brake service, text us and get real quote guidance quickly. No long forms,
                no shop wait, and no guesswork.
              </p>

              <div className="mb-8">
                <a
                  href="sms:+18337038934?&body=Hi%20Summit%20Auto%20Care%2C%20I%20need%20a%20quote."
                  className="inline-flex w-full items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-6 py-4 transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  Text (833) 703-8934 for a Quote
                </a>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold mb-1">
                    <Clock3 className="w-4 h-4 text-blue-600" />
                    Fast response
                  </div>
                  <p className="text-sm text-slate-700">We reply quickly so you can plan your day and next step.</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold mb-1">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    Clear expectations
                  </div>
                  <p className="text-sm text-slate-700">Know what to expect on service scope, timing, and pricing.</p>
                </div>
                <div className="rounded-xl border border-slate-200 p-4 bg-slate-50">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold mb-1">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    Detail-focused care
                  </div>
                  <p className="text-sm text-slate-700">Our primary focus is mobile detailing done at your location.</p>
                </div>
              </div>

              <div className="space-y-5 text-slate-700 leading-relaxed">
                {quoteBenefits.map((benefit) => (
                  <p key={benefit.title}>
                    <strong>{benefit.title}:</strong> {benefit.text}
                  </p>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Services we currently quote</h2>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  {primaryServices.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Service area</h2>
                <p className="text-slate-700 leading-relaxed mb-3">
                  We provide mobile service across North Texas. If your city is nearby and not listed,
                  send us a text and we’ll confirm availability.
                </p>
                <p className="text-slate-700 font-medium">
                  {serviceAreas.join(' • ')}
                </p>
              </div>

              <div className="mt-10 rounded-xl bg-blue-50 border border-blue-100 p-5">
                <p className="text-slate-800 leading-relaxed">
                  <strong>Ready now?</strong> Text{' '}
                  <a className="text-blue-700 font-bold hover:underline" href="sms:+18337038934?&body=Hi%20Summit%20Auto%20Care%2C%20I%20need%20a%20quote.">
                    (833) 703-8934
                  </a>{' '}
                  and include your vehicle, needed service, and ZIP for a quick quote.
                </p>
              </div>
            </motion.div>

            <div className="text-center mt-8">
              <Link to={createPageUrl('Home')}>
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
