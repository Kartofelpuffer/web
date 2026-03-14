import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Shield, Clock3, PlusCircle } from 'lucide-react';

const detailingPackages = [
  {
    name: 'Interior Detail',
    price: '$149–$179',
    time: 'Estimated time: 2–2.5 hours',
    items: [
      'Full interior vacuum',
      'Carpet and seat shampoo (as needed)',
      'Interior plastics and trim cleaned',
      'Interior protectant dressing',
      'Interior windows cleaned',
      'Door jamb wipe down'
    ]
  },
  {
    name: 'Full Detail',
    price: '$229–$279',
    time: 'Estimated time: ~3 hours',
    items: [
      'Foam pre-wash + hand wash',
      'Wheel and tire cleaning + tire shine',
      'Full interior vacuum',
      'Interior plastics wiped and cleaned',
      'Interior protectant dressing',
      'Windows cleaned + light stain removal'
    ]
  },
  {
    name: 'Ceramic Protection (1-Year)',
    price: '$399–$649',
    time: 'Estimated time: 4–5 hours',
    items: [
      'Full exterior wash',
      'Iron decontamination treatment',
      'Clay bar treatment',
      'Light machine polish',
      '1-year ceramic protection coating',
      'Hydrophobic beading + added paint protection',
      'Best for daily drivers and annual refresh'
    ]
  },
  {
    name: 'Premium Ceramic Coating (3–5 Years)',
    price: '$749–$1,149',
    time: 'Estimated time: 8–12 hours',
    items: [
      'Full exterior wash',
      'Iron decontamination + clay bar treatment',
      'One-step paint correction',
      'Professional ceramic coating application',
      'Wheel face protection + trim protection',
      'Long-term gloss and easier upkeep',
      'Best for long-term ownership and maximum gloss durability'
    ]
  }
];

const addOns = [
  'Headlight Restoration — $119',
  'Engine Bay Detail — $59',
  'Pet Hair Removal — $40–$80',
  'Odor / Smoke Treatment — $89–$149',
  'Clay Bar + Paint Sealant — $149',
  'Leather Conditioning — $49'
];

const upkeepItems = [
  'Oil Change Services',
  'Fluid top-offs',
  'Basic upkeep inspections'
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Detailing Packages & Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">Professional Mobile Detailing Services</h2>
          <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
            Clear package pricing with interior detailing, full detailing, and ceramic protection options delivered at your location.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {detailingPackages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
              </div>
              <p className="text-2xl font-bold text-blue-600">{pkg.price}</p>
              <p className="text-sm text-slate-500 mb-4">{pkg.time}</p>
              <ul className="space-y-2 mb-6">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-700">
                    <Check className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to={createPageUrl('Contact')} className="block">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Get Detailing Quote</Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 text-white rounded-2xl p-8 mb-10"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <PlusCircle className="w-5 h-5 text-blue-300" />
                <h3 className="text-2xl font-bold">Add-On Services</h3>
              </div>
              <ul className="space-y-2 text-sm">
                {addOns.map((item) => (
                  <li key={item} className="bg-white/10 border border-white/20 rounded-lg px-3 py-2">{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Clock3 className="w-5 h-5 text-blue-300" />
                <h3 className="text-2xl font-bold">Maintenance Services</h3>
              </div>
              <p className="text-slate-300 mb-4">
                We also provide routine detailing and ceramic coating services currently available for local drivers.
              </p>
              <ul className="space-y-2 text-sm mb-4">
                {upkeepItems.map((item) => (
                  <li key={item} className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-300" /> {item}
                  </li>
                ))}
              </ul>
              <Link to={createPageUrl('Contact')} className="block">
                <Button className="w-full bg-white text-slate-900 hover:bg-slate-100">Book Maintenance Service</Button>
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <Shield className="w-5 h-5 text-blue-600 mx-auto mb-2" />
            <p className="font-semibold text-slate-900">Paint-Safe Process</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <Sparkles className="w-5 h-5 text-blue-600 mx-auto mb-2" />
            <p className="font-semibold text-slate-900">High-Gloss Results</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <Clock3 className="w-5 h-5 text-blue-600 mx-auto mb-2" />
            <p className="font-semibold text-slate-900">Convenient On-Site Service</p>
          </div>
        </div>
      </div>
    </section>
  );
}
