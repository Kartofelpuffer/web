import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, Wrench } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: "Get Your Free Quote",
    description: "Speak directly with an expert about your car's needs. We'll provide a transparent quote tailored to your vehicle."
  },
  {
    icon: Calendar,
    title: "Pick Your Schedule",
    description: "Choose a day and time that works for you. We'll give you a convenient arrival window for peace of mind."
  },
  {
    icon: Wrench,
    title: "We Come to You",
    description: "Sit back and relax while our certified technicians handle everything right at your doorstep."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">How It Works</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-300" />
              )}
              
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <span className="absolute top-6 right-6 text-6xl font-bold text-slate-100">
                  {index + 1}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}