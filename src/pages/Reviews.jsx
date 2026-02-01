import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTAButton from '@/components/CTAButton';

export default function Reviews() {
  useEffect(() => {
    document.title = 'Customer Reviews - Summit Auto Care TX Mobile Mechanic McKinney & Collin County';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read 5-star customer reviews for Summit Auto Care TX. See why customers in McKinney, Frisco, Allen, and Plano trust us for mobile brake repair, oil changes, and auto detailing. Real testimonials from Collin County residents.');
    }

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'customer reviews Summit Auto Care McKinney, mobile mechanic reviews Frisco, auto service testimonials Allen, Collin County mechanic reviews, best mobile mechanic Plano, trusted auto service McKinney');

    const addMetaTag = (name, content) => {
      let tag = document.querySelector(`meta[property="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    addMetaTag('og:title', 'Customer Reviews - Summit Auto Care TX');
    addMetaTag('og:description', 'Read 5-star reviews from satisfied customers in Dallas-Fort Worth about our mobile mechanic services.');
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar alwaysScrolled={true} />
      <CTAButton />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Customer Reviews</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
                What Our Customers Say
              </h1>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Real reviews from satisfied customers in McKinney, Allen, Frisco, Plano, and throughout Collin County.
              </p>
            </motion.div>
          </div>
        </section>

        <TestimonialsSection />

        {/* Additional Reviews */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">More Happy Customers</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Thousands of satisfied customers across McKinney, Frisco, Allen, Plano, and Collin County trust us with their vehicles.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Michael B., Plano",
                  service: "Oil Change & Brake Inspection",
                  review: "Scheduled an appointment at 10 AM, and they were at my house by 10:30. Service was quick, professional, and I was back to work by lunch. Worth every penny!"
                },
                {
                  name: "Jennifer L., Irving",
                  service: "Full Auto Detailing",
                  review: "My car looks like it just rolled off the lot. The attention to detail is incredible. Will definitely be a repeat customer!"
                },
                {
                  name: "David M., Arlington",
                  service: "Brake Service",
                  review: "Had a brake issue and needed it fixed ASAP. They came out same day, diagnosed the problem, and had me driving safely again. Exceptional service!"
                },
                {
                  name: "Lisa P., Frisco",
                  service: "Oil Change",
                  review: "I love not having to take time off work to get my oil changed. Mobile service is a game-changer. Highly recommend Summit Auto Care!"
                },
                {
                  name: "Robert K., Garland",
                  service: "Maintenance Package",
                  review: "I use them for all my vehicle maintenance. Transparent pricing, professional service, and they always go the extra mile."
                },
                {
                  name: "Amanda S., Lewisville",
                  service: "Detailing & Maintenance",
                  review: "Best mobile mechanic service I've found. They treat your car right and communicate every step of the way."
                }
              ].map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-blue-600 text-sm font-semibold mb-2">{review.service}</p>
                  <p className="text-slate-700 mb-4">"{review.review}"</p>
                  <p className="font-bold text-slate-900">- {review.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">4.9★</div>
                <p className="text-slate-300">Average Rating</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">2,500+</div>
                <p className="text-slate-300">Happy Customers</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
                <p className="text-slate-300">Years in Business</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <p className="text-slate-300">Availability</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link to={createPageUrl('Home')}>
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}