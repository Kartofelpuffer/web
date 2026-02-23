import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MessageSquare, Phone } from 'lucide-react';
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

const includedServices = [
  'Mobile oil changes and fluid services',
  'Brake inspection, pads, and rotor replacement',
  'Battery diagnostics and replacement',
  'No-start diagnostics and check engine light support',
  'Pre-purchase and maintenance inspections',
  'Fleet maintenance support for local businesses'
];

export default function Quote() {
  useEffect(() => {
    document.title = 'Text for a Free Quote | Summit Auto Care';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Text Summit Auto Care at (833) 703-8934 for a fast, no-pressure mobile mechanic quote in McKinney, Allen, Frisco, Plano, and Collin County.'
      );
    }
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
                High-priority quote line
              </p>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
                Get Your Quote by Text — No Forms, No Waiting, No Shop Visit
              </h1>

              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                If you found us through Google Ads and need help now, this page is built for speed.
                Skip long forms and text us directly with your vehicle details. We reply quickly with
                pricing guidance, timing, and the next best step.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <a
                  href="sms:+18337038934?&body=Hi%20Summit%20Auto%20Care%2C%20I%20need%20a%20quote."
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-6 py-4 transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  Text (833) 703-8934
                </a>
                <a
                  href="tel:+18337038934"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl px-6 py-4 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call (833) 703-8934
                </a>
              </div>

              <div className="space-y-5 text-slate-700 leading-relaxed">
                <p>
                  <strong>What to text us for the fastest quote:</strong> your vehicle year/make/model,
                  the problem or service needed, your ZIP code, and when you want service. That helps us
                  give you a clear estimate quickly and avoids unnecessary back-and-forth.
                </p>

                <p>
                  <strong>Why this works better for busy drivers:</strong> most people calling from ads are
                  either short on time, stuck at work, or trying to avoid a tow/shop delay. Texting keeps
                  everything simple and documented, and lets you compare options without pressure.
                </p>

                <p>
                  <strong>What you can expect from us:</strong> honest communication, practical recommendations,
                  and straightforward pricing. If something needs in-person inspection first, we tell you that
                  upfront before you commit.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Services we quote every day</h2>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  {includedServices.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Service area</h2>
                <p className="text-slate-700 leading-relaxed mb-3">
                  We provide mobile service across North Texas and surrounding communities. If your city is
                  nearby and not listed, text us and we’ll confirm availability.
                </p>
                <p className="text-slate-700 font-medium">
                  {serviceAreas.join(' • ')}
                </p>
              </div>

              <div className="mt-10 rounded-xl bg-blue-50 border border-blue-100 p-5">
                <p className="text-slate-800 leading-relaxed">
                  <strong>Ready now?</strong> Text <a className="text-blue-700 font-bold hover:underline" href="sms:+18337038934?&body=Hi%20Summit%20Auto%20Care%2C%20I%20need%20a%20quote.">(833) 703-8934</a> and
                  we’ll help you get a fast, accurate quote and a realistic service window.
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
