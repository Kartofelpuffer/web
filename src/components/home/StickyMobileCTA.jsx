import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';

export default function StickyMobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur border-t border-slate-200 p-3"
      style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
        <a
          href="tel:+18337038934"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white py-3 font-semibold"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <a
          href="sms:+18337038934?&body=Hi%20Summit%20Auto%20Care%2C%20I%20need%20a%20quote."
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 text-white py-3 font-semibold"
        >
          <MessageSquare className="w-4 h-4" />
          Text Quote
        </a>
      </div>
    </div>
  );
}
