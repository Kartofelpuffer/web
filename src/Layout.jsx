import React, { useEffect, Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import BottomTabBar from '@/components/mobile/BottomTabBar';
import MobileHeader from '@/components/mobile/MobileHeader';

export default function Layout({ children }) {
  const location = useLocation();
  
  // This determines which tab is highlighted in the blue bar
  const getActiveTab = (pathname) => {
    if (pathname === '/' || pathname.startsWith('/Home')) return 'Home';
    if (pathname.startsWith('/Services')) return 'Services';
    if (pathname.startsWith('/Blog')) return 'Blog';
    if (pathname.startsWith('/Contact')) return 'Contact';
    if (pathname.startsWith('/Fleet')) return 'Fleet';
    return null;
  };

  const activeTab = getActiveTab(location.pathname);

  useEffect(() => {
    // Locks the tab name to your new branding
    document.title = 'Summit Auto Care - Hassle Free Car Care';

    // Updates the meta tags for link previews
    const updateMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (meta) meta.setAttribute("content", content);
    };

    updateMeta("description", "Expert mobile car care and fleet maintenance in McKinney. Professional service at your doorstep.");
    updateMeta("og:title", "Summit Auto Care - Hassle Free Car Care");
  }, [location]);

  return (
    /* These Tailwind classes restore your site's theme and background */
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans">
      <MobileHeader activeTab={activeTab} />
      
      <main className="relative z-0">
        <Suspense fallback={<div className="h-screen bg-slate-950" />}>
          {children}
        </Suspense>
      </main>

      <BottomTabBar activeTab={activeTab} />
    </div>
  );
}
