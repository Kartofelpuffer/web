import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { Menu, X, MessageSquare } from 'lucide-react';
import { SMS_QUOTE_HREF } from '@/lib/cta';

export default function Navbar({ alwaysScrolled = false }) {
  const [isScrolled, setIsScrolled] = useState(alwaysScrolled);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!alwaysScrolled) {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [alwaysScrolled]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link
              to={createPageUrl('Home')}
              className="flex items-center gap-2"
            >
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697bfe1b4fe92b3f18e45e7b/4bc626bfb_Lightlogo-clear.png"
                alt="Summit Auto Care TX Logo"
                className="h-14 w-auto"
              />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link to={createPageUrl('Services')} className={`font-medium transition-colors select-none ${isScrolled ? 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400' : 'text-white drop-shadow-lg hover:text-blue-200'}`}>Services</Link>
              <Link to={createPageUrl('WhyUs')} className={`font-medium transition-colors select-none ${isScrolled ? 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400' : 'text-white drop-shadow-lg hover:text-blue-200'}`}>Why Us</Link>
              <Link to={createPageUrl('Reviews')} className={`font-medium transition-colors select-none ${isScrolled ? 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400' : 'text-white drop-shadow-lg hover:text-blue-200'}`}>Reviews</Link>
              <Link to={createPageUrl('Blog')} className={`font-medium transition-colors select-none ${isScrolled ? 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400' : 'text-white drop-shadow-lg hover:text-blue-200'}`}>Blog</Link>
              <Link to={createPageUrl('Fleet')} className={`font-medium transition-colors select-none ${isScrolled ? 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400' : 'text-white drop-shadow-lg hover:text-blue-200'}`}>Fleet Services</Link>

              <a
                href={SMS_QUOTE_HREF}
                className={`flex items-center gap-2 font-medium select-none ${
                  isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'
                }`}
              >
                <MessageSquare className="w-4 h-4 select-none" />
                (833) 703-8934
              </a>

              <a href={SMS_QUOTE_HREF}>
                <Button
                  className={`font-semibold transition-all select-none ${
                    isScrolled
                      ? 'bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600'
                      : 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg'
                  }`}
                >
                  Text for Quote
                </Button>
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 bg-white shadow-xl z-40 md:hidden"
          >
            <div className="p-6 space-y-4">
              <Link to={createPageUrl('Services')} className="block w-full text-left py-3 text-slate-700 hover:text-blue-600 font-medium border-b border-slate-100" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <Link to={createPageUrl('WhyUs')} className="block w-full text-left py-3 text-slate-700 hover:text-blue-600 font-medium border-b border-slate-100" onClick={() => setIsMobileMenuOpen(false)}>Why Us</Link>
              <Link to={createPageUrl('Reviews')} className="block w-full text-left py-3 text-slate-700 hover:text-blue-600 font-medium border-b border-slate-100" onClick={() => setIsMobileMenuOpen(false)}>Reviews</Link>
              <Link to={createPageUrl('Blog')} className="block w-full text-left py-3 text-slate-700 hover:text-blue-600 font-medium border-b border-slate-100" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
              <Link to={createPageUrl('Fleet')} className="block w-full text-left py-3 text-slate-700 hover:text-blue-600 font-medium border-b border-slate-100" onClick={() => setIsMobileMenuOpen(false)}>Fleet Services</Link>
              <a href={SMS_QUOTE_HREF} className="flex items-center gap-2 py-3 text-slate-900 font-semibold">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                Text (833) 703-8934 for a Quote
              </a>
              <a href={SMS_QUOTE_HREF} className="w-full block">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6">
                  Text for Quote
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
