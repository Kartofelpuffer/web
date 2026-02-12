import React, { useEffect } from 'react';
import Navbar from '@/components/home/Navbar';
import HeroSection from '@/components/home/HeroSection';
import HowItWorks from '@/components/home/HowItWorks';
import ServicesSection from '@/components/home/ServicesSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import BlogSection from '@/components/home/BlogSection';
import CTASection from '@/components/home/CTASection';
import Footer from '@/components/home/Footer';

export default function Home() {
  useEffect(() => {
    document.title = 'Home | Summit Auto Care';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional mobile mechanic services in DFW. Oil changes, brake repair, and auto detailing at your location. Call (214) 842-7614 for a free quote today!');
    }

    // Add keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'mobile mechanic Dallas, mobile mechanic Fort Worth, mobile oil change DFW, mobile brake repair Texas, mobile auto detailing, mobile car repair, Dallas Fort Worth auto service, DFW mobile mechanic');

    // Handle hash navigation from other pages
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.getElementById(window.location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <HowItWorks />
        
        <div id="services">
          <ServicesSection />
        </div>
        
        <div id="about">
          <BenefitsSection />
        </div>
        
        <div id="testimonials">
          <TestimonialsSection />
        </div>

        <BlogSection />

        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}