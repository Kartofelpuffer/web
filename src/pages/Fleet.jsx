import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Truck, Clock, Shield, DollarSign, Users, CheckCircle, ArrowLeft } from 'lucide-react';
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
    document.title = 'Fleet Maintenance Services | Summit Auto Care TX';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional mobile fleet maintenance for Dallas-Fort Worth businesses. Minimize downtime with on-site oil changes, brake service, and preventive maintenance.');
    }

    // Load HubSpot form script
    const script = document.createElement('script');
    script.src = 'https://js-na2.hsforms.net/forms/embed/245017920.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
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
              <Truck className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Fleet Maintenance Solutions
              </h1>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Keep your business moving with our comprehensive mobile fleet maintenance services in the Dallas-Fort Worth area.
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
                We bring professional maintenance to your location, saving you time and keeping your fleet operational.
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
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/f1142810f_pexels-robertkso-11725734.jpg" 
                  alt="Fleet maintenance"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Get a Custom Fleet Quote</h2>
              <p className="text-slate-600">
                Tell us about your fleet and we'll create a customized maintenance plan that fits your needs and budget.
              </p>
            </motion.div>

            <div className="bg-slate-50 rounded-2xl p-8 shadow-lg">
              {/* HubSpot Fleet Form */}
              <div className="hs-form-frame" data-region="na2" data-form-id="88437fb5-64e8-4ce7-8a2a-15a0527cff5c" data-portal-id="245017920"></div>
            </div>

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