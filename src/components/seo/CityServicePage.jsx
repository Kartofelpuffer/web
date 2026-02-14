import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { createPageUrl } from '@/utils';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import CTAButton from '@/components/CTAButton';
import { Button } from '@/components/ui/button';

export default function CityServicePage({ city, intro, title, description, faqs }) {
  useEffect(() => {
    document.title = `${title} | Summit Auto Care`;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

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
  }, [title, description, faqs]);

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
              <li className="p-4 bg-white rounded-lg shadow-sm flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />Same-day mobile repairs at home, work, or roadside.</li>
              <li className="p-4 bg-white rounded-lg shadow-sm flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />Transparent estimates for brakes, oil, battery, and diagnostics.</li>
              <li className="p-4 bg-white rounded-lg shadow-sm flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />Service built for busy families and professionals in Collin County.</li>
              <li className="p-4 bg-white rounded-lg shadow-sm flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />Fast support by call or text at (214) 842-7614.</li>
            </ul>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">FAQ for {city} mobile auto services</h2>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <article key={faq.q} className="p-5 rounded-lg border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="tel:+12148427614" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">Call (214) 842-7614</a>
              <a href="sms:+12148427614" className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold">Text for a Quote</a>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to={createPageUrl('Services')}>
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" /> Back to Services
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
