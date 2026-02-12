import React, { useEffect, useState, Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import BottomTabBar from '@/components/mobile/BottomTabBar';
import MobileHeader from '@/components/mobile/MobileHeader';

// Lazy load tab pages
const HomePage = lazy(() => import('@/pages/Home'));
const ServicesPage = lazy(() => import('@/pages/Services'));
const BlogPage = lazy(() => import('@/pages/Blog'));
const ContactPage = lazy(() => import('@/pages/Contact'));
const FleetPage = lazy(() => import('@/pages/Fleet'));

export default function Layout({ children, currentPageName }) {
  const [pullRefresh, setPullRefresh] = useState({ y: 0, isRefreshing: false });
  const location = useLocation();
  
  const getActiveTab = (pathname) => {
    if (pathname === '/' || pathname.startsWith('/Home')) return 'Home';
    if (pathname.startsWith('/Services')) return 'Services';
    if (pathname.startsWith('/Blog') && !pathname.startsWith('/BlogPost')) return 'Blog';
    if (pathname.startsWith('/Contact')) return 'Contact';
    if (pathname.startsWith('/Fleet')) return 'Fleet';
    return null;
  };

  const activeTab = getActiveTab(location.pathname);

  useEffect(() => {
    // 1. Set the Title - This is the "Master" setting
    document.title = 'Summit Auto Care - Hassle Free Car Care';

    // 2. Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href.split('?')[0];

    // 3. Set Open Graph meta tags (For Link Previews)
    const ogTags = },
      { property: 'og:site_name', content: 'Summit Auto Care' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Summit Auto Care - Hassle Free Car Care' }
    ];

    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (tag.property) meta.setAttribute('property', tag.property);
        if (tag.name) meta.setAttribute('name', tag.name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });

    // 4. JSON-LD Schema (Simplified)
    let schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'AutoRepair',
      'name': 'Summit Auto Care',
      'description': 'Hassle-free mobile auto care in McKinney, TX.',
      'url': 'https://summitautocaretx.com',
      'telephone': '+12148427614'
    });

    // 5. Dark Mode Logic
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateDarkMode = (e) => {
      if (e.matches) document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    };
    updateDarkMode(darkModeMediaQuery);
    darkModeMediaQuery.addEventListener('change', updateDarkMode);

    return () => darkModeMediaQuery.removeEventListener('change', updateDarkMode);
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
