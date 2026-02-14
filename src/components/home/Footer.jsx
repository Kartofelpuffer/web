import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from 'lucide-react';
import { createPageUrl } from '@/utils';

export default function Footer() {
  return (
    <footer
      className="bg-slate-900 dark:bg-slate-950 text-white pb-20 md:pb-0"
      style={{ paddingBottom: 'calc(5rem + env(safe-area-inset-bottom))' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/4bc626bfb_Lightlogo-clear.png"
              alt="Summit Auto Care TX Logo"
              className="h-16 w-auto mb-4"
            />
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              Professional mobile auto services in McKinney, Frisco, Allen, Plano, and throughout Collin County.
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

          <div>
            <h4 className="font-semibold text-lg mb-4">Top Pages</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link to={createPageUrl('Services')} className="text-sm hover:text-blue-400 transition-colors">Mobile Auto Services</Link></li>
              <li><Link to={createPageUrl('Fleet')} className="text-sm hover:text-blue-400 transition-colors">Fleet Services</Link></li>
              <li><Link to={createPageUrl('Blog')} className="text-sm hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link to={createPageUrl('Contact')} className="text-sm hover:text-blue-400 transition-colors">Free Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Service Areas</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link to={createPageUrl('MobileMechanicMcKinney')} className="text-sm hover:text-blue-400 transition-colors">Mobile Detailing McKinney</Link></li>
              <li><Link to={createPageUrl('MobileMechanicFrisco')} className="text-sm hover:text-blue-400 transition-colors">Mobile Detailing Frisco</Link></li>
              <li><Link to={createPageUrl('MobileMechanicAllen')} className="text-sm hover:text-blue-400 transition-colors">Mobile Detailing Allen</Link></li>
              <li><Link to={createPageUrl('MobileMechanicPlano')} className="text-sm hover:text-blue-400 transition-colors">Mobile Detailing Plano</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact & Hours</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="tel:+12148427614" className="text-sm flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Phone className="w-4 h-4 text-blue-400" />
                  (214) 842-7614
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
                <span className="text-sm">McKinney, Frisco, Allen, Plano & Collin County</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Mon-Fri: 5-8am & 4-10pm · Sat-Sun: 5am-10pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Summit Auto Care TX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
