import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import CTAButton from '@/components/CTAButton';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us | Summit Auto Care';
    
    // Add or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Contact Summit Auto Care TX for mobile auto services in McKinney, Allen, Frisco, Plano, and throughout Collin County. Free quotes on oil changes, brake repair, and detailing. Call (833) 703-8934.');

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
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 pt-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Get in Touch</h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                Contact us today for a free quote on any of our mobile auto services
              </p>
            </motion.div>

            {/* Mobile-Optimized CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16 max-w-2xl mx-auto"
            >
              <a 
                href="tel:+18337038934" 
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl font-bold text-xl flex items-center justify-center gap-3 shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <Phone className="w-7 h-7" />
                Call Now
              </a>
              <a 
                href="sms:+18337038934" 
                className="flex-1 bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 rounded-xl font-bold text-xl flex items-center justify-center gap-3 shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <MessageSquare className="w-7 h-7" />
                Text Us
              </a>
            </motion.div>

            {/* Contact Information Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Phone</p>
                      <a href="tel:+18337038934" className="text-blue-600 hover:underline text-lg">
                        (833) 703-8934
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Email</p>
                      <a href="mailto:Contact@SummitAutoCareTx.com" className="text-blue-600 hover:underline">
                        Contact@SummitAutoCareTx.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Service Area</p>
                      <p className="text-slate-600">
                        McKinney, Frisco, Allen, Plano<br />
                        & All of Collin County, TX
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Business Hours</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold text-slate-900">Monday - Friday</p>
                      <p className="text-slate-600">5-8am & 4-10pm</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold text-slate-900">Saturday - Sunday</p>
                      <p className="text-slate-600">5am - 10pm</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
                  <p className="text-blue-900 font-semibold mb-2">Fast Response Time</p>
                  <p className="text-blue-800 text-sm">
                    We respond to all inquiries within a few hours during business hours
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <Link to={createPageUrl('Home')}>
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}