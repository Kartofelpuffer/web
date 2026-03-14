import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import { SMS_QUOTE_HREF } from '@/lib/cta';

export default function CTAButton() {
  return (
    <div
      className="hidden md:flex fixed bottom-6 right-6 z-40"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)', paddingRight: 'env(safe-area-inset-right)' }}
    >
      <a href={SMS_QUOTE_HREF}>
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 px-8 py-6 text-base font-semibold rounded-xl"
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          Text for Quote
        </Button>
      </a>
    </div>
  );
}
