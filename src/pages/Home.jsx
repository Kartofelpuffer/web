import React, { useEffect } from 'react';
import HomeSeo from '@/components/seo/HomeSeo';
import Navbar from '@/components/home/Navbar';
import HeroSection from '@/components/home/HeroSection';
import HowItWorks from '@/components/home/HowItWorks';
import ServicesSection from '@/components/home/ServicesSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import BlogSection from '@/components/home/BlogSection';
import CTASection from '@/components/home/CTASection';
import Footer from '@/components/home/Footer';
import TrustProofSection from '@/components/home/TrustProofSection';
import LocalSeoLinks from '@/components/seo/LocalSeoLinks';
import FAQSection from '@/components/home/FAQSection';
import StickyMobileCTA from '@/components/home/StickyMobileCTA';

export default function Home() {
  useEffect(() => {
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
      <HomeSeo />
      <Navbar />
      
      <main className="pt-14 md:pt-0" style={{ paddingTop: 'max(0px, env(safe-area-inset-top))' }}>
        <HeroSection />
        
        <HowItWorks />

        <TrustProofSection />
        
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

        <LocalSeoLinks />

        <FAQSection />

        <CTASection />
      </main>
      
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}