import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, MessageSquare } from 'lucide-react';

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

  const scrollToSection = (sectionId) => {
    // Check if we're on the home page
    const isHomePage = window.location.pathname === '/' || window.location.pathname.includes('/Home');
    
    if (sectionId === 'top') {
      if (isHomePage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.location.href = createPageUrl('Home');
      }
    } else {
      if (isHomePage) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home page with hash
        window.location.href = createPageUrl('Home') + '#' + sectionId;
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to={createPageUrl('Home')}
              className="flex items-center gap-2"
            >
              <img 
                src={isScrolled ? "/summit-logo-dark.png" : "/summit-logo-light.png"} 
                alt="Summit Auto Care TX"
                className="h-12 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <span className={`text-xl font-bold hidden ${isScrolled ? 'text-slate-900' : 'text-white drop-shadow-lg'}`}>
                <span className="text-blue-500">Summit</span> Auto Care TX
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link 
                to={createPageUrl('Services')}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white drop-shadow-lg hover:text-blue-200'
                }`}
              >
                Services
              </Link>
              <Link 
                to={createPageUrl('WhyUs')}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white drop-shadow-lg hover:text-blue-200'
                }`}
              >
                Why Us
              </Link>
              <Link 
                to={createPageUrl('Reviews')}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white drop-shadow-lg hover:text-blue-200'
                }`}
              >
                Reviews
              </Link>
              <Link 
                to={createPageUrl('Blog')}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white drop-shadow-lg hover:text-blue-200'
                }`}
              >
                Blog
              </Link>
              <Link 
                to={createPageUrl('Fleet')}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white drop-shadow-lg hover:text-blue-200'
                }`}
              >
                Fleet Services
              </Link>
              
              <a 
                href="sms:+12148427614"
                className={`flex items-center gap-2 font-medium ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                (214) 842-7614
              </a>

              <Link to={createPageUrl('Contact')}>
                <Button 
                  className={`font-semibold transition-all ${
                    isScrolled 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg'
                  }`}
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      <AnimatePresence>
      {isMobileMenuOpen && (
      <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed top-20 left-0 right-0 bg-white shadow-xl z-40 md:hidden"
      >
      <div className="p-6 space-y-4">
        <Link 
          to={createPageUrl('Services')}
          className="block w-full text-left py-3 text-slate-700 hover:text-blue-600 font-medium border-b border-slate-100"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Services
        </Link>
        <Link 
          to={createPageUrl('WhyUs')}
          className="block w-full text-left py-3 text-slate-700 hover:text-blue-600 font-medium border-b border-slate-100"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Why Us
        </Link>
        <Link 
          to={createPageUrl('Reviews')}
          className="block w-full text-left py-3 text-slate-700 hover:text-blue-600 font-medium border-b border-slate-100"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Reviews
        </Link>
              <Link 
                to={createPageUrl('Blog')}
                className="block w-full text-left py-3 text-slate-700 hover:text-blue-600 font-medium border-b border-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to={createPageUrl('Fleet')}
                className="block w-full text-left py-3 text-slate-700 hover:text-blue-600 font-medium border-b border-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fleet Services
              </Link>
              <a 
                href="sms:+12148427614"
                className="flex items-center gap-2 py-3 text-slate-900 font-semibold"
              >
                <MessageSquare className="w-5 h-5 text-blue-600" />
                (214) 842-7614
              </a>
              <Link to={createPageUrl('Contact')} className="w-full">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}