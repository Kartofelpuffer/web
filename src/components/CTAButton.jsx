import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { MessageSquare, Phone } from 'lucide-react';

export default function CTAButton() {
  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col gap-3" style={{ paddingBottom: 'env(safe-area-inset-bottom)', paddingRight: 'env(safe-area-inset-right)' }}>
      <Link to={createPageUrl('Contact')}>
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 px-8 py-6 text-base font-semibold rounded-xl"
        >
          <Phone className="w-5 h-5 mr-2" />
          Get Quote
        </Button>
      </Link>
      <a href="sms:+18337038934?&body=Hi%20Summit%20Auto%20Care%2C%20I%20need%20a%20quote.">
        <Button
          size="lg"
          variant="outline"
          className="bg-white dark:bg-slate-800 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 shadow-xl transition-all duration-300 px-8 py-6 text-base font-semibold rounded-xl"
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          Text Now
        </Button>
      </a>
    </div>
  );
}
