import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { Clock, Check, TrendingUp, Package, AlertCircle } from 'lucide-react';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('packages');

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
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Transparent Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">Pricing & Packages</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Honest pricing for McKinney, Frisco, Allen & Plano. Professional mobile auto services with no hidden fees.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-white shadow-md p-1 border border-slate-200">
            <button
              onClick={() => setActiveTab('core')}
              className={`px-6 py-3 rounded-md text-sm font-semibold transition-all ${
                activeTab === 'core' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              A-La-Carte Services
            </button>
            <button
              onClick={() => setActiveTab('packages')}
              className={`px-6 py-3 rounded-md text-sm font-semibold transition-all ${
                activeTab === 'packages' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Money-Saving Packages
            </button>
          </div>
        </div>

        {/* A-La-Carte Services */}
        {activeTab === 'core' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Brake Services - Featured */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 md:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center"
            >
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full -mr-24 sm:-mr-32 -mt-24 sm:-mt-32" />
              <div className="relative flex flex-col items-center text-center">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-yellow-400 text-slate-900 text-xs font-bold rounded-full">MOST POPULAR</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">🛑 Full Pad and Rotor Replacement</h3>
                  <p className="text-blue-100 text-base sm:text-lg mb-4 max-w-2xl">Your safety is our priority. We come to you with professional-grade equipment, saving you time while ensuring your brakes are serviced correctly. VIN required for accurate quote.</p>
                  <div className="flex items-center gap-2 text-sm text-blue-100">
                    <Clock className="w-4 h-4" />
                    <span>1.5–3 hours</span>
                  </div>
                </div>
                
                <div className="mb-6 max-w-2xl w-full">
                  <div className="bg-white/15 backdrop-blur rounded-xl p-5 sm:p-6">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold">Full Pad and Rotor Replacement</div>
                      <div className="text-3xl sm:text-4xl font-bold mt-2">Starting at $599</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 bg-yellow-400/20 border border-yellow-400/30 rounded-xl p-4 mb-6">
                  <AlertCircle className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-yellow-100"><strong>Important:</strong> We provide exact quotes only after VIN verification to ensure proper parts and accurate pricing.</p>
                </div>

                <Link to={createPageUrl('Contact')}>
                  <Button size="lg" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 font-bold shadow-xl text-base sm:text-lg px-8 py-6">
                    Get Brake Quote
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Other Services Grid */}
            <div className="grid md:grid-cols-2 gap-6 md:grid-rows-2">
              {/* Oil Change */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-200 flex flex-col h-full"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">🛢️ Mobile Oil Change</h3>
                  <p className="text-slate-600 text-sm mb-4">Includes oil, filter, fluid check & disposal</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                      <span className="text-blue-900 font-medium">Full Synthetic</span>
                      <span className="text-2xl font-bold text-blue-600">$99</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span>30–45 minutes</span>
                  </div>
                </div>

                <Link to={createPageUrl('Contact')} className="mt-6">
                  <Button className="w-full bg-slate-900 hover:bg-blue-600 text-white">Book Oil Change</Button>
                </Link>
              </motion.div>

              {/* Battery Replacement */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-200 flex flex-col h-full"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">🔋 Battery Replacement</h3>
                  <p className="text-slate-600 text-sm mb-4">Testing, install & disposal included</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                      <span className="text-blue-900 font-medium">Premium Battery</span>
                      <span className="text-2xl font-bold text-blue-600">$199</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span>20–30 minutes</span>
                  </div>
                </div>

                <Link to={createPageUrl('Contact')} className="mt-6">
                  <Button className="w-full bg-slate-900 hover:bg-blue-600 text-white">Get Battery Installed</Button>
                </Link>
              </motion.div>

              {/* Interior Detail */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-200 flex flex-col"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">🧼 Interior Detail</h3>
                <p className="text-slate-600 text-sm mb-4">Deep clean, vacuum & protection</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-700">Cars</span>
                    <span className="text-xl font-bold text-slate-900">$139</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-700">SUVs / Trucks</span>
                    <span className="text-xl font-bold text-slate-900">$169</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
                  <Clock className="w-4 h-4" />
                  <span>1.5–2 hours</span>
                </div>

                <Link to={createPageUrl('Contact')} className="mt-auto">
                  <Button className="w-full bg-slate-900 hover:bg-blue-600 text-white">Book Detailing</Button>
                </Link>
              </motion.div>

              {/* Full Detail */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-200 flex flex-col"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">✨ Full Detail</h3>
                <p className="text-slate-600 text-sm mb-4">Interior + Exterior complete makeover</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border-2 border-blue-200">
                    <span className="text-blue-900 font-medium">Cars</span>
                    <span className="text-xl font-bold text-blue-600">$219</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border-2 border-blue-200">
                    <span className="text-blue-900 font-medium">SUVs / Trucks</span>
                    <span className="text-xl font-bold text-blue-600">$269</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
                  <Clock className="w-4 h-4" />
                  <span>2.5–3.5 hours</span>
                </div>

                <Link to={createPageUrl('Contact')} className="mt-auto">
                  <Button className="w-full bg-slate-900 hover:bg-blue-600 text-white">Book Full Detail</Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Package Deals */}
        {activeTab === 'packages' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Most Popular Package - Featured */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 md:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center"
            >
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full -mr-24 sm:-mr-32 -mt-24 sm:-mt-32" />
              <div className="relative flex flex-col items-center text-center">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-yellow-400 text-slate-900 text-xs font-bold rounded-full">MOST POPULAR</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">✨ Full Detail + Oil Change</h3>
                  <p className="text-blue-100 text-base sm:text-lg mb-4 max-w-2xl">Our most requested combo! Complete interior & exterior detail plus a synthetic oil change. Perfect for keeping your car looking and running its best.</p>
                  <div className="flex items-center gap-2 text-sm text-blue-100">
                    <Clock className="w-4 h-4" />
                    <span>3–4 hours</span>
                  </div>
                </div>
                
                <div className="mb-6 max-w-2xl w-full">
                  <div className="bg-white/15 backdrop-blur rounded-xl p-5 sm:p-6">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold">Complete Package</div>
                      <div className="text-3xl sm:text-4xl font-bold mt-2">$269</div>
                      <p className="text-blue-100 text-sm mt-2">Save $49 compared to separate services</p>
                    </div>
                  </div>
                </div>

                <Link to={createPageUrl('Contact')}>
                  <Button size="lg" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 font-bold shadow-xl text-base sm:text-lg px-8 py-6">
                    Book This Package
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Other Packages Grid */}
            <div className="grid md:grid-cols-2 gap-6 md:grid-rows-2">
            {/* Package 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-6 shadow-lg border-2 border-blue-200 flex flex-col items-center justify-center text-center"
            >
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Package className="w-6 h-6 text-blue-600" />
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">BEST VALUE</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">🔥 Daily Driver Refresh</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">$199</div>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Synthetic oil change</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Interior detail</span>
                  </li>
                </ul>
              </div>

              <div className="w-full space-y-4">
                <div className="bg-white rounded-lg p-3 border border-blue-200 w-full">
                  <p className="text-sm text-slate-600"><strong className="text-blue-700">Save $39+</strong> vs. purchasing separately</p>
                </div>

                <Link to={createPageUrl('Contact')} className="w-full block">
                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold">
                    Book This Package
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Package 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-6 shadow-lg border-2 border-blue-200 flex flex-col items-center justify-center text-center"
            >
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Package className="w-6 h-6 text-blue-600" />
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">$100 OFF</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">🔥 Brake + Clean Bundle</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">Starting at $699</div>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Brake service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Interior or full detail at $100 discount</span>
                  </li>
                </ul>
              </div>

              <div className="w-full space-y-4">
                <div className="bg-white rounded-lg p-3 border border-blue-200 w-full">
                  <p className="text-sm text-slate-600"><strong className="text-blue-700">Save $99+</strong> - Brake service + detailing at discounted rate</p>
                </div>

                <Link to={createPageUrl('Contact')} className="w-full block">
                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold">
                    Get This Deal
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Package 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg border-2 border-blue-200 flex flex-col items-center justify-center text-center"
            >
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Package className="w-6 h-6 text-blue-600" />
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">FAMILY FAVORITE</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">🔥 Road-Ready Package</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">$239–$289</div>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Synthetic oil change</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Battery test & inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Complete interior detail</span>
                  </li>
                </ul>
              </div>

              <div className="w-full space-y-4">
                <div className="bg-white rounded-lg p-3 border border-blue-200 w-full">
                  <p className="text-sm text-slate-600">Perfect for busy families & commuters</p>
                </div>

                <Link to={createPageUrl('Contact')} className="w-full block">
                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold">
                    Book Road-Ready
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Package 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-6 shadow-lg border-2 border-blue-200 flex flex-col items-center justify-center text-center"
            >
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Package className="w-6 h-6 text-blue-600" />
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">PREMIUM</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">🔥 Full Vehicle Reset</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">$799–$1,199</div>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">All 4 brakes (pads & rotors)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Complete interior & exterior detail</span>
                  </li>
                </ul>
              </div>

              <div className="w-full space-y-4">
                <div className="bg-white rounded-lg p-3 border border-blue-200 w-full">
                  <p className="text-sm text-slate-600"><strong className="text-blue-700">Ultimate refresh</strong> for your vehicle - like new condition</p>
                </div>

                <Link to={createPageUrl('Contact')} className="w-full block">
                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold">
                    Get Full Reset
                  </Button>
                </Link>
              </div>
            </motion.div>
            </div>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-slate-900 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-3">Questions About Pricing?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Every vehicle is unique. Contact us for a personalized quote based on your specific needs and vehicle requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+12148427614">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold">
                Call (214) 842-7614
              </Button>
            </a>
            <a href="sms:+12148427614">
              <Button size="lg" variant="outline" className="bg-white text-slate-900 hover:bg-slate-100 font-bold">
                Text for Quote
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}