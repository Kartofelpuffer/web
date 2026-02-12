import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { base44 } from '@/api/base44Client';
import { pagesConfig } from '@/pages.config';

export default function NavigationTracker() {
    const location = useLocation();
    const { isAuthenticated } = useAuth();
    const { Pages, mainPage } = pagesConfig;
    const mainPageKey = mainPage ?? Object.keys(Pages)[0];

        // Log user activity and update page title/meta when navigating
    useEffect(() => {
        const pathname = location.pathname;
        let pageName;
        let description;

        // 1. Define custom descriptions for each page
        const metaDescriptions = {
            "Home": "Expert car care at your doorstep. Hassle-free vehicle maintenance and repairs in McKinney.",
            "Services": "From oil changes to engine repair, explore our full range of professional auto services.",
            "Fleet": "Dedicated fleet maintenance solutions for McKinney businesses to keep your team on the road.",
            "Contact": "Get in touch with Summit Auto Care for reliable, mobile automotive services in Collin County.",
            "Blog": "Latest auto maintenance tips and news from Summit Auto Care.",
            "Reviews": "See what our McKinney customers are saying about our mobile auto services.",
            "WhyUs": "Learn why Summit Auto Care is the top choice for hassle-free car care in Collin County.",
            "Default": "Professional auto care and maintenance services in McKinney, TX."
};
        };

        // 2. Identify the current page
        if (pathname === '/' || pathname === '') {
            pageName = "Home";
        } else {
            const pathSegment = pathname.replace(/^\//, '').split('/')[0];
            const pageKeys = Object.keys(Pages);
            const matchedKey = pageKeys.find(
                key => key.toLowerCase() === pathSegment.toLowerCase()
            );
            pageName = matchedKey || "Page";
        }

        // 3. Update Title and Meta Description
        document.title = `${pageName} | Summit Auto Care`;
        
        description = metaDescriptions[pageName] || metaDescriptions["Default"];
        const metaTag = document.querySelector('meta[name="description"]');
        if (metaTag) {
            metaTag.setAttribute("content", description);
        }

        // 4. Log activity (existing logic)
        if (isAuthenticated && pageName && pageName !== "Page") {
            base44.appLogs.logUserInApp(pageName).catch(() => {});
        }
    }, [location, isAuthenticated, Pages, mainPageKey]);

    return null;
}
