import React, { useEffect } from 'react';

export default function Layout({ children, currentPageName }) {
  useEffect(() => {
    // Set default title - always ensure it exists
    if (!document.title || document.title === '') {
      document.title = 'Summit Auto Care TX | Mobile Mechanic McKinney TX';
    }

    // Set favicon - ensure it's always set correctly for Vercel hosting
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
    }
    favicon.type = 'image/png';
    favicon.href = '/summit-logo-dark.png';
    
    // Also add apple-touch-icon for better mobile support
    let appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]');
    if (!appleTouchIcon) {
      appleTouchIcon = document.createElement('link');
      appleTouchIcon.rel = 'apple-touch-icon';
      document.head.appendChild(appleTouchIcon);
    }
    appleTouchIcon.href = '/summit-logo-dark.png';

    // Defer Google Tag Manager script
    const gtmScript = document.createElement('script');
    gtmScript.defer = true;
    gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-569H9KCZ');`;
    setTimeout(() => document.head.appendChild(gtmScript), 1000);

    // Defer Google Analytics script
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-301GVJ1MJX';
    setTimeout(() => document.head.appendChild(gtagScript), 1000);

    const gtagConfigScript = document.createElement('script');
    gtagConfigScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-301GVJ1MJX');
    `;
    setTimeout(() => document.head.appendChild(gtagConfigScript), 1000);
  }, []);

  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-569H9KCZ"
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      
      {children}
    </>
  );
}