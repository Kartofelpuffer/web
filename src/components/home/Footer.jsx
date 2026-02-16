import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Footer() {
  return (
    <footer 
      className="bg-slate-900 dark:bg-slate-950 text-white pb-20 md:pb-0"
      style={{ paddingBottom: 'calc(5rem + env(safe-area-inset-bottom))' }}
    >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/render/image/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/4bc626bfb_Lightlogo-clear.png?width=320&quality=85&format=webp"
              alt="Summit Auto Care TX Logo"
              width="320"
              height="100"
              loading="lazy"
              decoding="async"
              className="h-16 w-auto mb-4"
            />
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">Professional mobile auto services in Texas. Quality you can trust, convenience you deserve.

            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1BwAacmCiZ/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/summitautotx" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link to={createPageUrl('BrakeRepairMcKinney')} className="text-sm hover:text-blue-400 transition-colors">Brake Repair McKinney</Link></li>
              <li><Link to={createPageUrl('OilChangeAllen')} className="text-sm hover:text-blue-400 transition-colors">Oil Change Allen</Link></li>
              <li><Link to={createPageUrl('MobileDetailingMcKinney')} className="text-sm hover:text-blue-400 transition-colors">Detailing McKinney</Link></li>
              <li><Link to={createPageUrl('FleetServiceCollinCounty')} className="text-sm hover:text-blue-400 transition-colors">Fleet Service Collin County</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Hours</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Mon - Fri: 5-8am & 4-10pm</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Sat - Sun: 5am - 10pm</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="tel:+18337038934" className="text-sm flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Phone className="w-4 h-4 text-blue-400" />
                  (833) 703-8934
                </a>
              </li>
              <li>
                <a href="mailto:Contact@SummitAutoCareTx.com" className="text-sm flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4 text-blue-400" />
                  Contact@SummitAutoCareTx.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm">Serving the Dallas-Fort Worth Area</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Summit Auto Care TX. All rights reserved.</p>
        </div>
      </div>
    </footer>);

}