import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function HeroSection() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);



  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/68635ea89_Untitleddesign.png" 
          alt="Mobile mechanic working"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-blue-500/30">
              Mobile Auto Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Expert Car Care
              <span className="block text-blue-400">At Your Doorstep</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-lg">
              We bring professional auto maintenance directly to you. Brakes, oil changes, and detailing — all done at your home or office.
            </p>
            <div className="flex items-center gap-4">
              <a href="tel:+12148427614" className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
                <div className="p-3 bg-blue-500 rounded-full">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-semibold">(214) 842-7614</span>
              </a>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="calendly-inline-widget w-full" data-url="https://calendly.com/summitautocaretx/new-meeting?primary_color=003057" style={{ minWidth: '320px', height: '700px' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}