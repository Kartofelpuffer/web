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
    document.title = 'Mobile Auto Services McKinney TX | Summit Auto Care Collin County';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional mobile auto services in McKinney, Frisco, Allen, and Plano. Expert brake repair, oil changes, and detailing throughout Collin County. Same-day service. Call (214) 842-7614 for your free quote.');
    }

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'mobile brake repair McKinney, mobile oil change Frisco, mobile auto detailing Allen, mobile mechanic Plano, Collin County auto services, professional vehicle maintenance McKinney');

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

    addMetaTag('og:title', 'Summit Auto Care TX - Professional Mobile Auto Services');
    addMetaTag('og:description', 'Expert mobile auto services in Dallas-Fort Worth. Brake repair, oil changes, detailing, and more.');
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar alwaysScrolled={true} />
      <CTAButton />
      
      <main className="pt-20">
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
                Professional Mobile Auto Services
              </h1>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Quality auto care services delivered right to your location in the Dallas-Fort Worth area.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Service Details</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Learn more about our comprehensive auto services designed to keep your vehicle running smoothly.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">Brake Services</h3>
                <p className="text-slate-600 mb-4">
                  Professional brake inspection, pad replacement, rotor service, and brake fluid maintenance. We ensure your vehicle stops safely every time.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>✓ Brake pad replacement</li>
                  <li>✓ Rotor resurfacing</li>
                  <li>✓ Brake fluid service</li>
                  <li>✓ Safety inspection</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">Oil Changes</h3>
                <p className="text-slate-600 mb-4">
                  Regular oil changes keep your engine running efficiently. We use quality oils and provide thorough vehicle inspections during every visit.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>✓ Premium oil selection</li>
                  <li>✓ Filter replacement</li>
                  <li>✓ Fluid top-ups</li>
                  <li>✓ Quick service (30 min)</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">Auto Detailing</h3>
                <p className="text-slate-600 mb-4">
                  Professional exterior and interior detailing to keep your vehicle looking showroom-fresh and protected from the Texas weather.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>✓ Exterior washing & wax</li>
                  <li>✓ Interior vacuuming</li>
                  <li>✓ Paint protection</li>
                  <li>✓ Premium finishes</li>
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