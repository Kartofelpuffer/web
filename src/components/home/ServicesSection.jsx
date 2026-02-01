import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Brake Services",
    description: "Complete brake pad replacement, rotor resurfacing, caliper repair, and brake fluid flush. Stop safely with confidence.",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/47012ff76_SummitAuto.png",
    duration: "60-90 min",
    features: ["Pad Replacement", "Rotor Service", "Caliper Repair", "Fluid Flush"]
  },
  {
    title: "Oil Changes",
    description: "Full synthetic oil changes with premium filters. Keep your engine running smooth and extend its lifespan.",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
    duration: "30-45 min",
    features: ["Synthetic Oil", "Premium Filter", "Fluid Top-Off", "Multi-Point Check"]
  },
  {
    title: "Auto Detailing",
    description: "Interior and exterior detailing that makes your car look brand new. Professional cleaning and protection.",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/e869438e6_Interior.jpg",
    duration: "2-4 hours",
    features: ["Interior Clean", "Exterior Wash", "Wax & Polish", "Tire Shine"]
  }
];

export default function ServicesSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">Our Services</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Professional auto services delivered to your location with the same quality you'd expect from a top-tier shop.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{service.duration}</span>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4 flex-1">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link to={createPageUrl('Quote')} className="block">
                    <Button className="w-full bg-slate-900 hover:bg-blue-600 text-white transition-colors duration-300 group/btn">
                      Contact Us
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}