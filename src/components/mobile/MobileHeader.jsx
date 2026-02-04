import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';

export default function MobileHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Show back button on child routes (not on Home)
  const isChildRoute = !location.pathname.includes('Home') && location.pathname !== '/';
  
  if (!isChildRoute) return null;

  return (
    <header 
      className="md:hidden fixed top-0 left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 z-40 select-none"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="flex items-center h-14 px-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="select-none"
        >
          <ArrowLeft className="w-5 h-5 text-slate-900 dark:text-slate-100" />
        </Button>
        <div className="flex-1 flex justify-center">
          <span className="text-lg font-bold text-slate-900 dark:text-white">
            <span className="text-blue-500">Summit</span> Auto Care TX
          </span>
        </div>
        <div className="w-10" />
      </div>
    </header>
  );
}