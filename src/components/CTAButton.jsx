import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { Phone } from 'lucide-react';

export default function CTAButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Link to="/">
        <Button 
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 px-8 py-6 text-base font-semibold rounded-xl"
        >
          Get Free Quote
        </Button>
      </Link>
      <a href="tel:+12148427614">
        <Button 
          size="lg"
          variant="outline"
          className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 shadow-xl transition-all duration-300 px-8 py-6 text-base font-semibold rounded-xl"
        >
          <Phone className="w-5 h-5 mr-2" />
          Call Now
        </Button>
      </a>
    </div>
  );
}