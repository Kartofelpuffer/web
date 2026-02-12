import React, { useEffect, Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import BottomTabBar from '@/components/mobile/BottomTabBar';
import MobileHeader from '@/components/mobile/MobileHeader';

export default function Layout({ children }) {
  const location = useLocation();
  
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
    // This locks the title for every page
    document.title = 'Summit Auto Care - Hassle Free Car Care';

    // This updates the meta description for link previews
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert mobile car care and fleet maintenance in McKinney. Professional service at your doorstep.");
    }

    // Force Open Graph title for social previews
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Summit Auto Care - Hassle Free Car Care");
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MobileHeader activeTab={activeTab} />
      <main className="pb-20">
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </main>
      <BottomTabBar activeTab={activeTab} />
    </div>
  );
}
