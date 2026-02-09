import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/68635ea89_Untitleddesign.png" 
          alt="Professional mobile mechanic providing car maintenance at your location in McKinney, Frisco, Allen, Plano and Collin County Texas"
          fetchpriority="high"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pt-24 pt-12 pb-20">
        {/* Business Name */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex justify-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            <span className="text-blue-400">Summit</span> Auto Care TX
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-blue-500/30">
              Mobile Auto Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Expert Car Care
              <span className="block text-blue-400">At Your Doorstep</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-lg mx-auto lg:mx-0">
              Serving McKinney, Allen, Frisco, Plano, and all of Collin County. Professional auto maintenance at your home or office—brakes, oil changes, and detailing.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a href="tel:+12148427614" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg transition-all hover:scale-105 active:scale-95">
                <Phone className="w-6 h-6" />
                Call Now
              </a>
              <a href="sms:+12148427614" className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg transition-all hover:scale-105 active:scale-95">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Text Us
              </a>
            </div>
          </motion.div>

          {/* Right Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-10 border border-slate-700/50 shadow-2xl">
              <div className="text-center space-y-6">
                <h3 className="text-3xl font-bold text-white">Ready to Get Started?</h3>
                <p className="text-slate-300 text-lg">Contact us today for a free quote</p>
                <div className="grid grid-cols-1 gap-4 pt-4">
                  <div className="bg-blue-600/80 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
                    <p className="text-blue-200 font-semibold mb-2 text-lg">Fast Response</p>
                    <p className="text-white text-sm">We respond to all inquiries within hours</p>
                  </div>
                  <div className="bg-blue-600/80 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
                    <p className="text-blue-200 font-semibold mb-2 text-lg">Transparent Pricing</p>
                    <p className="text-white text-sm">Get a detailed quote before we start</p>
                  </div>
                  <div className="bg-blue-600/80 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
                    <p className="text-blue-200 font-semibold mb-2 text-lg">Quality Guaranteed</p>
                    <p className="text-white text-sm">100% satisfaction on every service</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}