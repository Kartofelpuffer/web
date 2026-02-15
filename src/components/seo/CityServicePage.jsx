import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { createPageUrl } from '@/utils';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import CTAButton from '@/components/CTAButton';
import { Button } from '@/components/ui/button';

export default function CityServicePage({
  city,
  title,
  intro,
  description,
  faqs,
  serviceName,
  serviceType,
  processSteps = [],
  cityPhoto,
  cityPhotoAlt,
  nearbyAreas = []
}) {
  useEffect(() => {
    document.title = `${title} | Summit Auto Care`;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);

    const upsertOg = (property, content) => {
      let og = document.querySelector(`meta[property="${property}"]`);
      if (!og) {
        og = document.createElement('meta');
        og.setAttribute('property', property);
        document.head.appendChild(og);
      }
      og.setAttribute('content', content);
    };

    upsertOg('og:title', title);
    upsertOg('og:description', description);

    let faqScript = document.getElementById('city-faq-schema');
    if (!faqScript) {
      faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.id = 'city-faq-schema';
      document.head.appendChild(faqScript);
    }

    faqScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a
        }
      }))
    });

    let serviceScript = document.getElementById('city-service-schema');
    if (!serviceScript) {
      serviceScript = document.createElement('script');
      serviceScript.type = 'application/ld+json';
      serviceScript.id = 'city-service-schema';
      document.head.appendChild(serviceScript);
    }

    serviceScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceName,
      serviceType,
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://summitautocaretx.com/#localbusiness',
        name: 'Summit Auto Care',
        telephone: '+1-833-703-8934',
        areaServed: ['McKinney', 'Frisco', 'Allen', 'Collin County'],
        sameAs: [
          'https://www.facebook.com/share/1BwAacmCiZ/',
          'https://www.instagram.com/summitautotx'
        ]
      },
      areaServed: {
        '@type': 'City',
        name: city
      }
    });
  }, [title, description, faqs, city, serviceName, serviceType]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar alwaysScrolled={true} />
      <CTAButton />

      <main className="pt-14 md:pt-0" style={{ paddingTop: 'max(3.5rem, env(safe-area-inset-top))' }}>
        <section className="bg-slate-900 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
            <p className="text-slate-300 text-lg">{intro}</p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Why drivers in {city} choose Summit Auto Care</h2>
            <ul className="grid md:grid-cols-2 gap-4 text-slate-700">
              <li className="p-4 bg-white rounded-lg shadow-sm flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />Transparent pricing and fast communication from first text to final walkthrough.</li>
              <li className="p-4 bg-white rounded-lg shadow-sm flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />On-site service at homes, offices, apartments, and fleet lots where allowed.</li>
              <li className="p-4 bg-white rounded-lg shadow-sm flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />Digital updates and photos so you can approve work before and after service.</li>
              <li className="p-4 bg-white rounded-lg shadow-sm flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />Fast support by call or text at (833) 703-8934.</li>
            </ul>
          </div>
        </section>

        {cityPhoto && (
          <section className="pb-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <img src={cityPhoto} alt={cityPhotoAlt} className="w-full h-80 object-cover rounded-xl shadow-lg" loading="lazy" />
            </div>
          </section>
        )}

        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">How our {serviceName.toLowerCase()} process works</h2>
            <ol className="grid md:grid-cols-2 gap-4">
              {processSteps.map((step, index) => (
                <li key={step} className="p-5 rounded-lg bg-white border border-slate-200">
                  <p className="text-sm font-semibold text-blue-700 mb-2">Step {index + 1}</p>
                  <p className="text-slate-700">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">FAQ for {city} {serviceName.toLowerCase()}</h2>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <article key={faq.q} className="p-5 rounded-lg border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="tel:+18337038934" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">Call (833) 703-8934</a>
              <a href="sms:+18337038934" className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold">Text for a Quote</a>
              <Link to={createPageUrl('Contact')} className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold">Book Service</Link>
            </div>

            {nearbyAreas.length > 0 && (
              <div className="mt-8 text-sm text-slate-600">
                <span className="font-semibold text-slate-800">Nearby areas covered:</span> {nearbyAreas.join(', ')}
              </div>
            )}
          </div>
        </section>

        <section className="py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3">
            <Link to={createPageUrl('Services')}>
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" /> Back to Services
              </Button>
            </Link>
            <Link to={createPageUrl('Contact')}>
              <Button variant="outline">Contact Page</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
