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

const tabComponents = {
  Home: HomePage,
  Services: ServicesPage,
  Blog: BlogPage,
  Contact: ContactPage,
  Fleet: FleetPage
};

export default function Layout({ children, currentPageName }) {
  const [pullRefresh, setPullRefresh] = useState({ y: 0, isRefreshing: false });
  const location = useLocation();
  
  // Determine active tab based on current path
  const getActiveTab = (pathname) => {
    if (pathname === '/' || pathname.startsWith('/Home')) return 'Home';
    if (pathname.startsWith('/Services')) return 'Services';
    if (pathname.startsWith('/Blog') && !pathname.startsWith('/BlogPost')) return 'Blog';
    if (pathname.startsWith('/Contact')) return 'Contact';
    if (pathname.startsWith('/Fleet')) return 'Fleet';
    return null;
  };

  const activeTab = getActiveTab(location.pathname);
  const isTabPage = activeTab !== null;
  const ActiveTabComponent = activeTab ? tabComponents[activeTab] : null;

  useEffect(() => {
    // Set default title
    if (!document.title || document.title === '') {
      document.title = 'Summit Auto Care';
    }

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href.split('?')[0];

    // Set Open Graph meta tags
    const ogTags = [
      { property: 'og:type', content: 'business.business' },
      { property: 'og:title', content: document.title },
      { property: 'og:description', content: 'Mobile detailing in McKinney, Frisco, Allen & Plano with interior, full detail, ceramic protection, and maintenance services.' },
      { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/105fc819a_SummitAuto.png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:url', content: window.location.href.split('?')[0] },
      { property: 'og:site_name', content: 'Summit Auto Care TX' },
      { property: 'og:locale', content: 'en_US' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: document.title },
      { name: 'twitter:description', content: 'Mobile detailing and maintenance services in McKinney, Frisco, Allen & Plano.' },
      { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/105fc819a_SummitAuto.png' }
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

    // Add JSON-LD structured data
    const upsertJsonLd = (id, schema) => {
      let schemaScript = document.getElementById(id);
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.type = 'application/ld+json';
        schemaScript.id = id;
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    };

    upsertJsonLd('local-business-schema', {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://summitautocaretx.com/#business',
      'name': 'Summit Auto Care TX',
      'image': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/105fc819a_SummitAuto.png',
      'description': 'Mobile detailing services in McKinney, Frisco, Allen, and Plano, TX including interior details, full details, ceramic protection, and maintenance services.',
      'url': 'https://summitautocaretx.com',
      'telephone': '+18337038934',
      'email': 'Contact@SummitAutoCareTx.com',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'McKinney',
        'addressRegion': 'TX',
        'addressCountry': 'US'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '33.1972',
        'longitude': '-96.6154'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'customer service',
        'telephone': '+18337038934',
        'areaServed': 'US-TX',
        'availableLanguage': ['English']
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '05:00',
          'closes': '08:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '16:00',
          'closes': '22:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Saturday', 'Sunday'],
          'opens': '05:00',
          'closes': '22:00'
        }
      ],
      'areaServed': [
        { '@type': 'City', 'name': 'McKinney' },
        { '@type': 'City', 'name': 'Frisco' },
        { '@type': 'City', 'name': 'Allen' },
        { '@type': 'City', 'name': 'Plano' },
        { '@type': 'AdministrativeArea', 'name': 'Collin County' }
      ],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Detailing and Basic Maintenance Services',
        'itemListElement': [
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Interior Detailing' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Exterior Detailing' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Full Detail Package' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Full Synthetic Oil Change' } }
        ]
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '230',
        'bestRating': '5'
      }
    });

    upsertJsonLd('website-schema', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://summitautocaretx.com/#website',
      'url': 'https://summitautocaretx.com',
      'name': 'Summit Auto Care TX',
      'publisher': {
        '@id': 'https://summitautocaretx.com/#business'
      }
    });

    // Dark mode detection
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateDarkMode = (e) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    updateDarkMode(darkModeMediaQuery);
    darkModeMediaQuery.addEventListener('change', updateDarkMode);

    // Set favicon and mobile icons
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
    }
    favicon.type = 'image/png';
    favicon.href = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/105fc819a_SummitAuto.png';

    let appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]');
    if (!appleTouchIcon) {
      appleTouchIcon = document.createElement('link');
      appleTouchIcon.rel = 'apple-touch-icon';
      document.head.appendChild(appleTouchIcon);
    }
    appleTouchIcon.href = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/105fc819a_SummitAuto.png';
    
    // Add mobile web app meta tags
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.name = 'viewport';
      document.head.appendChild(viewport);
    }
    viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0';
    
    let themeColor = document.querySelector('meta[name="theme-color"]');
    if (!themeColor) {
      themeColor = document.createElement('meta');
      themeColor.name = 'theme-color';
      document.head.appendChild(themeColor);
    }
    themeColor.content = '#1e40af';

    // Google Analytics
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-7W12MBS78G';
    setTimeout(() => document.head.appendChild(gtagScript), 1000);

    const gtagConfigScript = document.createElement('script');
    gtagConfigScript.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7W12MBS78G');
      gtag('config', 'AW-17960880614');
    `;
    setTimeout(() => document.head.appendChild(gtagConfigScript), 1000);

    const googleAdsScript = document.createElement('script');
    googleAdsScript.async = true;
    googleAdsScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17960880614';
    setTimeout(() => document.head.appendChild(googleAdsScript), 1000);

    return () => darkModeMediaQuery.removeEventListener('change', updateDarkMode);
  }, []);

  // Pull-to-refresh mechanism
  useEffect(() => {
    let startY = 0;
    let currentY = 0;

    const handleTouchStart = (e) => {
      if (window.scrollY === 0) {
        startY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (window.scrollY === 0 && !pullRefresh.isRefreshing) {
        currentY = e.touches[0].clientY;
        const pullDistance = Math.max(0, Math.min(currentY - startY, 80));
        setPullRefresh({ y: pullDistance, isRefreshing: false });
      }
    };

    const handleTouchEnd = () => {
      if (pullRefresh.y > 60 && !pullRefresh.isRefreshing) {
        setPullRefresh({ y: 0, isRefreshing: true });

        setTimeout(() => {
          setPullRefresh({ y: 0, isRefreshing: false });
        }, 500);
      } else {
        setPullRefresh({ y: 0, isRefreshing: false });
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [pullRefresh.y, pullRefresh.isRefreshing]);

  return (
    <>
      {/* Pull-to-refresh indicator */}
      {pullRefresh.y > 0 && (
        <div 
          className="fixed top-0 left-0 right-0 flex justify-center z-50 pointer-events-none"
          style={{ transform: `translateY(${pullRefresh.y - 40}px)`, opacity: pullRefresh.y / 60 }}
        >
          <div className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg">
            {pullRefresh.isRefreshing ? 'Refreshing...' : 'Pull to refresh'}
          </div>
        </div>
        )}

        <div className="overscroll-none">
        <MobileHeader />
        <div className="w-full relative">
          {isTabPage ? (
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
              <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full" />
            </div>}>
              {ActiveTabComponent ? <ActiveTabComponent /> : null}
            </Suspense>
          ) : (
            // For non-tab pages (like BlogPost), render normally
            children
          )}
        </div>
        <BottomTabBar />
        </div>
    </>
  );
}
