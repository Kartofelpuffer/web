import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import BenefitsSection from '@/components/home/BenefitsSection';
import CTAButton from '@/components/CTAButton';

export default function WhyUs() {
  useEffect(() => {
    document.title = 'Why Choose Summit Auto Care TX - Trusted Mobile Mechanic in Dallas-Fort Worth';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover why Summit Auto Care TX is the trusted mobile mechanic in Dallas-Fort Worth. Certified technicians, same-day service, transparent pricing, and guaranteed quality. Serving DFW with professional auto care.');
    }

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'trusted mobile mechanic Dallas, best auto services Fort Worth, professional technicians DFW, convenient car repair, reliable mobile mechanic, certified auto technician, same-day service Dallas');

    const addMetaTag = (name, content) => {
      let tag = document.querySelector(`meta[property="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    addMetaTag('og:title', 'Why Choose Summit Auto Care TX - Trusted Mobile Mechanic');
    addMetaTag('og:description', 'Professional, certified, and convenient mobile auto services in Dallas-Fort Worth.');
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
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Why Us</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
                Why Choose Summit Auto Care
              </h1>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Experience the difference with our professional, convenient, and reliable mobile auto services.
              </p>
            </motion.div>
          </div>
        </section>

        <BenefitsSection />

        {/* Our Promise */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Promise to You</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                We're committed to delivering exceptional service every single time.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <h3 className="font-bold text-slate-900 mb-2">Satisfaction Guarantee</h3>
                <p className="text-sm text-slate-600">We stand behind our work with comprehensive guarantees.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <h3 className="font-bold text-slate-900 mb-2">Same-Day Service</h3>
                <p className="text-sm text-slate-600">Emergency service available when you need it most.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                <h3 className="font-bold text-slate-900 mb-2">Years Experience</h3>
                <p className="text-sm text-slate-600">Trusted by thousands of DFW residents.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">$</div>
                <h3 className="font-bold text-slate-900 mb-2">Transparent Pricing</h3>
                <p className="text-sm text-slate-600">No hidden fees, honest quotes upfront always.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Customer Stories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why DFW Chooses Us</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Real testimonials from satisfied customers across Dallas-Fort Worth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">
                  "They came to my house and serviced my car in less than an hour. Professional, friendly, and affordable!"
                </p>
                <p className="font-bold text-slate-900">- Maria R., Dallas</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">
                  "Best decision ever. No more taking time off work to sit in a mechanic's waiting room. Highly recommend!"
                </p>
                <p className="font-bold text-slate-900">- James T., Fort Worth</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">
                  "Transparent pricing, quality work, and they treat your car like it's their own. Five stars!"
                </p>
                <p className="font-bold text-slate-900">- Sarah K., Arlington</p>
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