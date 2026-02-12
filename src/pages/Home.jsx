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
    
    // Add or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Professional mobile mechanic in McKinney, Allen, Frisco, and Plano TX. Expert oil changes, brake repair, and auto detailing throughout Collin County. Same-day service available. Call (214) 842-7614 for a free quote!');

    // Add or update keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'mobile mechanic McKinney TX, mobile mechanic Frisco, mobile mechanic Allen, mobile mechanic Plano, Collin County mobile mechanic, McKinney oil change, McKinney brake repair, mobile auto detailing McKinney');

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
      
      <main className="pt-14 md:pt-0" style={{ paddingTop: 'max(0px, env(safe-area-inset-top))' }}>
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