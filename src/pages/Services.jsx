import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import ServicesSection from '@/components/home/ServicesSection';
import CTAButton from '@/components/CTAButton';

export default function Services() {
  useEffect(() => {
    document.title = 'Detailing & Maintenance Services | Summit Auto Care';
    
    // Add or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Mobile detailing services in McKinney, Frisco, Allen, and Plano with interior details, full details, ceramic protection, and detailing and ceramic coating services.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'mobile detailing McKinney, interior detailing Frisco, full detail Allen, exterior detail Plano, mobile detailing and ceramic coating service Collin County');

    // Add Open Graph meta tags
    const addMetaTag = (name, content) => {
      let tag = document.querySelector(`meta[property="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    addMetaTag('og:title', 'Summit Auto Care TX - Mobile Detailing & Basic Maintenance');
    addMetaTag('og:description', 'Mobile detailing service in Dallas-Fort Worth with interior, full detail, ceramic protection, and detailing and ceramic coating services.');
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar alwaysScrolled={true} />
      <CTAButton />
      
      <main className="pt-14 md:pt-0" style={{ paddingTop: 'max(3.5rem, env(safe-area-inset-top))' }}>
        {/* Hero Section */}
        <section className="bg-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Services</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
                Mobile Detailing & Basic Maintenance
              </h1>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Detailing-first care delivered right to your location in the Dallas-Fort Worth area.
              </p>
            </motion.div>
          </div>
        </section>

        <ServicesSection />


        {/* Detailed Service Info */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Detailing Service Details</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Learn more about our detailing packages, ceramic protection options, and detailing and ceramic coating services.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">Interior Detail — $149–$179</h3>
                <p className="text-slate-600 mb-4">
                  Complete deep cleaning of the vehicle interior (estimated 2–2.5 hours).
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>✓ Full interior vacuum</li>
                  <li>✓ Carpet and seat shampoo (as needed)</li>
                  <li>✓ Interior plastics and trim cleaned</li>
                  <li>✓ Interior protectant dressing, windows cleaned, and door jamb wipe down</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">Full Detail — $229–$279</h3>
                <p className="text-slate-600 mb-4">
                  Complete interior and exterior detailing service (estimated ~3 hours).
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>✓ Exterior: foam pre-wash, hand wash, wheel/tire cleaning, tire shine</li>
                  <li>✓ Interior: full vacuum, plastics cleaned, protectant dressing</li>
                  <li>✓ Windows cleaned and light stain removal</li>
                  <li>✓ Balanced inside-and-out refresh in one appointment</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">Ceramic Protection Options</h3>
                <p className="text-slate-600 mb-4">
                  Durable protection packages for enhanced gloss and easier upkeep.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>✓ 1-Year Ceramic Protection — $449–$749 (4–5 hours)</li>
                  <li>✓ 3–5 Year Ceramic Coating — $1,149–$1,349 (8–12 hours)</li>
                  <li>✓ Includes decontamination, clay bar, and polish/correction steps</li>
                  <li>✓ Wheel face and trim protection included in long-term package</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Mobile Service */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Mobile Service?</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Our mobile service model brings convenience and quality directly to you.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <div>
                    <h3 className="font-bold text-slate-900">No Wait Times</h3>
                    <p className="text-slate-600 text-sm">We come to you, eliminating the need to sit in a waiting room.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <div>
                    <h3 className="font-bold text-slate-900">Transparent Pricing</h3>
                    <p className="text-slate-600 text-sm">No hidden fees. You know exactly what you're paying before we start.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <div>
                    <h3 className="font-bold text-slate-900">Flexibility</h3>
                    <p className="text-slate-600 text-sm">Schedule appointments that work with your busy schedule.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <div>
                    <h3 className="font-bold text-slate-900">Certified Technicians</h3>
                    <p className="text-slate-600 text-sm">Highly trained professionals with years of automotive experience.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <div>
                    <h3 className="font-bold text-slate-900">Quality Workmanship</h3>
                    <p className="text-slate-600 text-sm">We stand behind our work with comprehensive service guarantees.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <div>
                    <h3 className="font-bold text-slate-900">DFW Coverage</h3>
                    <p className="text-slate-600 text-sm">Serving Dallas-Fort Worth with fast, reliable mobile service.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link to={createPageUrl('Home')}>
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
