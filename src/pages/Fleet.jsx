import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Truck, Clock, Shield, DollarSign, Users, CheckCircle, ArrowLeft, Phone, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import CTAButton from '@/components/CTAButton';

const benefits = [
  {
    icon: Clock,
    title: "Minimize Downtime",
    description: "Keep your fleet on the road with scheduled on-site maintenance at your location."
  },
  {
    icon: DollarSign,
    title: "Reduce Costs",
    description: "Save on labor costs and eliminate the need to drive vehicles to a shop."
  },
  {
    icon: Shield,
    title: "Maintain Safety",
    description: "Regular inspections and maintenance ensure your fleet stays safe and compliant."
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "A dedicated technician who knows your fleet and keeps detailed service records."
  }
];

const services = [
  "Oil Changes & Fluid Services",
  "Brake Inspections & Repairs",
  "Multi-Point Inspections",
  "Preventive Maintenance",
  "Tire Services",
  "Battery Testing & Replacement",
  "Fleet Detailing",
  "Custom Maintenance Schedules"
];

export default function Fleet() {
  useEffect(() => {
    // Set page metadata
    document.title = 'Fleet Services | Summit Auto Care';
    
    // Add or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Professional mobile fleet maintenance for McKinney, Frisco, Allen, and Plano businesses. Minimize downtime with on-site oil changes, brake service, and preventive maintenance throughout Collin County. Call (833) 703-8934');

    // Add keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'fleet maintenance McKinney, fleet services Frisco, mobile fleet repair Allen, commercial vehicle maintenance Plano, Collin County fleet services, business vehicle service McKinney, fleet management Collin County');
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
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
              <Truck className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Fleet Maintenance Solutions
              </h1>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Keep your business moving with comprehensive mobile fleet maintenance in McKinney, Allen, Frisco, Plano, and throughout Collin County.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Mobile Fleet Services?</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Serving businesses across Collin County with professional on-site maintenance, saving you time and keeping your fleet operational.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Comprehensive Fleet Services
                </h2>
                <p className="text-slate-600 mb-8">
                  From routine maintenance to emergency repairs, we provide complete mobile auto care for your entire fleet.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/b19ddd3f8_pexels-robertkso-11725734.jpg" 
                  alt="Fleet vehicles"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Contact us today to discuss your fleet maintenance needs and get a custom quote
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-6">
                <a 
                  href="tel:+18337038934" 
                  className="flex-1 bg-white hover:bg-slate-100 text-blue-600 px-8 py-6 rounded-xl font-bold text-xl flex items-center justify-center gap-3 shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                  <Phone className="w-7 h-7" />
                  Call Now
                </a>
                <a 
                  href="sms:+18337038934" 
                  className="flex-1 bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 rounded-xl font-bold text-xl flex items-center justify-center gap-3 shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                  <MessageSquare className="w-7 h-7" />
                  Text Us
                </a>
              </div>
              <p className="text-2xl font-bold">(833) 703-8934</p>
            </motion.div>

            <div className="mt-8 text-center">
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