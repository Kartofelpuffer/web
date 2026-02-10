import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Home, Wrench, BookOpen, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function BottomTabBar() {
  const location = useLocation();
  
  const tabs = [
    { name: 'Home', icon: Home, path: createPageUrl('Home') },
    { name: 'Services', icon: Wrench, path: createPageUrl('Services') },
    { name: 'Blog', icon: BookOpen, path: createPageUrl('Blog') },
    { name: 'Contact', icon: MessageSquare, path: createPageUrl('Contact') }
  ];

  const isActive = (path) => {
    return location.pathname === path || location.pathname === path + '/';
  };

  const handleTabClick = (e, path) => {
    if (isActive(path)) {
      e.preventDefault();
      // Scroll to top and reset to root of section
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // If on a sub-route (e.g., /Blog/post-slug), navigate to root
      const currentPath = location.pathname;
      const pathSegments = currentPath.split('/').filter(Boolean);
      if (pathSegments.length > 1) {
        // Force navigation to root of this section
        window.location.href = path;
      }
    }
  };

  return (
    <nav 
      className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 z-50 select-none"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="grid grid-cols-4 h-16">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = isActive(tab.path);
          
          return (
            <Link
              key={tab.name}
              to={tab.path}
              onClick={(e) => handleTabClick(e, tab.path)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 transition-colors",
                active 
                  ? "text-blue-600 dark:text-blue-400" 
                  : "text-slate-600 dark:text-slate-400"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{tab.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}