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
    metaDescription.setAttribute('content', 'Detailing-first mobile services in McKinney, Frisco, Allen, and Plano. Interior and exterior packages with limited basic maintenance like oil changes.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'mobile detailing McKinney, interior detailing Frisco, full detail Allen, exterior detail Plano, mobile oil change Collin County');

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
    addMetaTag('og:description', 'Detailing-first mobile service in Dallas-Fort Worth. Interior and exterior packages with limited basic maintenance.');
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
                Learn more about our detailing packages and limited basic maintenance offerings.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">Interior Detailing</h3>
                <p className="text-slate-600 mb-4">
                  Deep interior cleaning that restores your cabin with vacuuming, wipe-downs, spot treatment, and trim finishing.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>✓ Deep vacuum & crevice cleaning</li>
                  <li>✓ Dash, console, and trim restoration</li>
                  <li>✓ Spot and stain treatment</li>
                  <li>✓ Interior glass finishing</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">Exterior Detailing</h3>
                <p className="text-slate-600 mb-4">
                  Paint-safe hand wash, wheels, door jambs, and finishing protection to keep your vehicle looking sharp between deep details.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>✓ Foam pre-wash + contact wash</li>
                  <li>✓ Wheels and tires cleaned</li>
                  <li>✓ Dry and gloss finish</li>
                  <li>✓ Protection add-on options</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">Basic Maintenance (Limited)</h3>
                <p className="text-slate-600 mb-4">
                  Limited maintenance is available for customers who want convenience support alongside a detailing-focused service plan.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>✓ Synthetic oil changes</li>
                  <li>✓ Fluid top-offs</li>
                  <li>✓ Multi-point visual checks</li>
                  <li>✓ Best value when bundled with detailing</li>
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
