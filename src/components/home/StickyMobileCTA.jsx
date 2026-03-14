import React from 'react';
import { MessageSquare } from 'lucide-react';
import { SMS_QUOTE_HREF } from '@/lib/cta';

export default function StickyMobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur border-t border-slate-200 p-3"
      style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
    >
      <div className="max-w-md mx-auto">
        <a
          href={SMS_QUOTE_HREF}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 text-white py-3 font-semibold"
        >
          <MessageSquare className="w-4 h-4" />
          Text for Quote
        </a>
      </div>
    </div>
  );
}
