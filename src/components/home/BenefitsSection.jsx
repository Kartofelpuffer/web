import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Eye, Shield, Clock, ThumbsUp } from 'lucide-react';
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: MapPin,
    title: "We Come to You",
    description: "No need to drive to a shop or wait in a lobby. We bring professional service to your home, office, or anywhere convenient."
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Our expert technicians give your vehicle careful, individual attention — unlike busy shops rushing through jobs."
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "We'll show you exactly what your vehicle needs and why. No surprises, no unnecessary upsells — just honest service."
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "We use premium parts and stand behind our work. Your satisfaction is backed by our service guarantee."
  },
  {
    icon: Clock,
    title: "Save Your Time",
    description: "No more waiting rooms. Continue your day while we work — your time is valuable and we respect that."
  },
  {
    icon: ThumbsUp,
    title: "Certified Technicians",
    description: "Our mechanics are fully certified and experienced. Your vehicle is in skilled, professional hands."
  }
];

export default function BenefitsSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/bd7223fc5_145.jpg" 
                alt="Professional mechanic"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </div>
            

          </motion.div>

          {/* Right Side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-8">
              Your Benefits, Our Promise
            </h2>

            <div className="grid gap-6">
              {benefits.slice(0, 4).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors duration-300">
                    <benefit.icon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button 
              onClick={scrollToTop}
              className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
            >
              Book Your Service
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}