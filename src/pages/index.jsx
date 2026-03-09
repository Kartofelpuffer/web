import React, { useEffect } from 'react';
import Navbar from '@/components/home/Navbar';
import HeroSection from '@/components/home/HeroSection';
import HowItWorks from '@/components/home/HowItWorks';
import ServicesSection from '@/components/home/ServicesSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import BlogSection from '@/components/home/BlogSection';
import CTASection from '@/components/home/CTASection';
import TrustProofSection from '@/components/home/TrustProofSection';
import Footer from '@/components/home/Footer';

export default function Home() {
  useEffect(() => {
    document.title = 'Home | Summit Auto Care';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional mobile detailing services in DFW. Interior details, full details, ceramic protection, and upkeep at your location. Call (833) 703-8934 for a free quote today!');
    }

    // Add keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'mobile detailing Dallas, mobile detailing Fort Worth, interior detail DFW, ceramic coating Texas, mobile detailing and ceramic coating service DFW, Dallas Fort Worth detailing service');

    let localBusinessSchema = document.getElementById('local-business-schema');
    if (!localBusinessSchema) {
      localBusinessSchema = document.createElement('script');
      localBusinessSchema.type = 'application/ld+json';
      localBusinessSchema.id = 'local-business-schema';
      document.head.appendChild(localBusinessSchema);
    }

    localBusinessSchema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://summitautocaretx.com/#localbusiness',
      name: 'Summit Auto Care',
      telephone: '+1-833-703-8934',
      areaServed: ['McKinney', 'Frisco', 'Allen', 'Collin County'],
      sameAs: [
        'https://www.facebook.com/share/1BwAacmCiZ/',
        'https://www.instagram.com/summitautotx'
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Mobile Detailing & Maintenance Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Detailing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Ceramic Protection' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Oil Change' } },
        ]
      }
    });

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

        <BlogSection />

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

        <TrustProofSection />

        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}