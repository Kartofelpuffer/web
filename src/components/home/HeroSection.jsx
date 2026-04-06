import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ShieldCheck, Clock3, Star } from 'lucide-react';
import { SMS_QUOTE_HREF } from '@/lib/cta';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/68635ea89_Untitleddesign.png"
          alt="Professional mobile detailing team servicing vehicles in McKinney, Frisco, Allen, Plano and Collin County Texas"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/92 via-slate-900/78 to-slate-900/58" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pt-24 pt-12 pb-20">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-blue-500/30">
            Mobile Detailing Specialists
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Showroom-Level Detailing
            <span className="block text-blue-400">At Your Doorstep</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Serving McKinney, Allen, Frisco, Plano, and Collin County with interior detailing, full details, ceramic protection, and detailing and ceramic coating services.
          </p>

          <div className="grid sm:grid-cols-3 gap-3 mb-8 text-sm">
            <div className="bg-white/10 border border-white/20 rounded-lg py-2 px-3 text-white flex items-center justify-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-300" /> Paint-safe products</div>
            <div className="bg-white/10 border border-white/20 rounded-lg py-2 px-3 text-white flex items-center justify-center gap-2"><Clock3 className="w-4 h-4 text-blue-300" /> Same-day windows available</div>
            <div className="bg-white/10 border border-white/20 rounded-lg py-2 px-3 text-white flex items-center justify-center gap-2"><Star className="w-4 h-4 text-amber-300" /> Local trusted detailers</div>
          </div>

          <div className="flex items-center justify-center">
            <a href={SMS_QUOTE_HREF} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg transition-all hover:scale-105 active:scale-95">
              <MessageSquare className="w-6 h-6" />
              Text for Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
