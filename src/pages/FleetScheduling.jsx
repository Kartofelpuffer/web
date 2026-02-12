import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';
import CTAButton from '../components/CTAButton';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';

export default function FleetScheduling() {
  useEffect(() => {
    document.title = 'Fleet Scheduling | Summit Auto Care';
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Schedule fleet maintenance services with Summit Auto Care TX. Professional mobile fleet services for businesses in the Dallas-Fort Worth area.';

    // Add meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'fleet scheduling, fleet maintenance, mobile fleet service, dallas fleet service, business auto care';

    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar alwaysScrolled={true} />
      <CTAButton />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Schedule Fleet Services
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Keep your fleet running smoothly with our professional mobile maintenance services. Fill out the form below to schedule your fleet service.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 mx-auto"
          >
            <div className="calendly-inline-widget" data-url="https://calendly.com/contact-summitautocaretx/schedule-your-hassle-free-care-service-clone?hide_gdpr_banner=1" style={{ minWidth: '320px', height: '1800px' }}></div>
          </motion.div>

          <div className="text-center">
            <Link to={createPageUrl('Fleet')}>
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Fleet Services
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}