import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import CTAButton from '@/components/CTAButton';
import ServiceInquiryForm from '@/components/forms/ServiceInquiryForm';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us - Summit Auto Care TX | Mobile Mechanic McKinney & Collin County';
    
    // Add or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Contact Summit Auto Care TX for mobile auto services in McKinney, Allen, Frisco, Plano, and throughout Collin County. Free quotes on oil changes, brake repair, and detailing. Call (214) 842-7614.');

    // Add keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'mobile mechanic McKinney, mobile mechanic Frisco, mobile mechanic Allen, mobile mechanic Plano, Collin County auto service, McKinney oil change, McKinney brake repair');
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar alwaysScrolled={true} />
      <CTAButton />

      <main className="pt-14 md:pt-20" style={{ paddingTop: 'max(3.5rem, calc(3.5rem + env(safe-area-inset-top)))' }}>
        <section className="py-12 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Contact Us</h1>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Serving McKinney, Allen, Frisco, Plano, and all of Collin County with professional mobile auto services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <ServiceInquiryForm />
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