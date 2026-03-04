import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Droplets, Shield, Wrench } from 'lucide-react';

const detailingPackages = [
  {
    name: 'Essential Detail',
    price: 'From $149',
    items: ['Hand wash + wheel clean', 'Interior vacuum + wipe down', 'Windows + finishing touch-up'],
  },
  {
    name: 'Interior Reset',
    price: 'From $219',
    items: ['Deep vacuum + crevice cleaning', 'Stain spot treatment', 'Dash, door panel, and trim restoration'],
  },
  {
    name: 'Full Detail',
    price: 'From $299',
    items: ['Complete interior and exterior detail', 'Clay/polish enhancement (as needed)', 'Paint protection finish'],
  },
];

const maintenanceItems = [
  'Synthetic oil changes',
  'Fluid top-offs and visual checks',
  'Basic maintenance inspections',
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
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Detailing-First Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">Packages Built Around Results</h2>
          <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
            Summit Auto Care is now focused on mobile detailing. We still offer basic maintenance such as oil changes, but advanced mechanic work is no longer our core service line.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
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
              <p className="text-2xl font-bold text-blue-600 mb-4">{pkg.price}</p>
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
          <div className="flex items-center gap-2 mb-3">
            <Wrench className="w-5 h-5 text-blue-300" />
            <h3 className="text-2xl font-bold">Basic Maintenance (Limited)</h3>
          </div>
          <p className="text-slate-300 mb-4">
            Oil changes are available as a convenience service, especially when bundled with detailing appointments. Battery services and broader mechanic work have been phased out.
          </p>
          <ul className="grid md:grid-cols-3 gap-3 text-sm">
            {maintenanceItems.map((item) => (
              <li key={item} className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-300" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <Droplets className="w-5 h-5 text-blue-600 mx-auto mb-2" />
            <p className="font-semibold text-slate-900">Interior + Exterior Specialists</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <Shield className="w-5 h-5 text-blue-600 mx-auto mb-2" />
            <p className="font-semibold text-slate-900">Paint-Safe Process</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <Sparkles className="w-5 h-5 text-blue-600 mx-auto mb-2" />
            <p className="font-semibold text-slate-900">Photo-Ready Results</p>
          </div>
        </div>
      </div>
    </section>
  );
}
