import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Calendar, Clock, ArrowRight, ArrowLeft, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import CTAButton from '@/components/CTAButton';

const blogs = [
  {
    id: 1,
    slug: "mobile-oil-change-dallas-fort-worth",
    title: "Why Mobile Oil Changes in Dallas-Fort Worth Save You Time and Money",
    excerpt: "Discover how mobile oil change services in the DFW area can save busy Texans hours of waiting at traditional auto shops while providing the same quality service at competitive prices.",
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&q=80",
    date: "January 15, 2025",
    readTime: "5 min read",
    author: "Summit Auto Care",
    category: "Oil Change"
  },
  {
    id: 2,
    slug: "signs-you-need-brake-replacement-texas",
    title: "5 Warning Signs Your Brakes Need Replacement: A Texas Driver's Guide",
    excerpt: "Learn the critical warning signs that indicate your vehicle needs brake service. From squeaking sounds to vibrating pedals, know when it's time to call a mobile mechanic in Texas.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    date: "January 10, 2025",
    readTime: "7 min read",
    author: "Summit Auto Care",
    category: "Brake Services"
  },
  {
    id: 3,
    slug: "auto-detailing-benefits-texas-weather",
    title: "How Professional Auto Detailing Protects Your Car from Texas Heat and Weather",
    excerpt: "Texas weather can be brutal on your vehicle's exterior and interior. Learn how regular professional detailing can extend your car's life and maintain its value in the harsh DFW climate.",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80",
    date: "January 5, 2025",
    readTime: "6 min read",
    author: "Summit Auto Care",
    category: "Auto Detailing"
  }
];

export default function Blog() {
  useEffect(() => {
    document.title = 'Auto Care Blog McKinney TX | Summit Auto Care Collin County Tips';
    
    // Add or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Expert auto care tips, maintenance guides, and industry insights for McKinney, Frisco, Allen, and Plano drivers from Summit Auto Care TX mobile mechanics serving Collin County.');

    // Add or update keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'auto care tips McKinney, car maintenance Frisco, vehicle maintenance Allen, Plano auto repair tips, mobile mechanic advice Collin County, brake service tips McKinney, oil change guide');
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar alwaysScrolled={true} />
      <CTAButton />
      
      <main className="pt-14 md:pt-0" style={{ paddingTop: 'max(3.5rem, env(safe-area-inset-top))' }}>
        {/* Hero Section */}
        <section className="bg-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Blog</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
                Auto Care Tips & Insights
              </h1>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Expert advice for McKinney, Frisco, Allen, and Plano drivers on vehicle maintenance, DIY tips, and industry insights.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <motion.article
                  key={blog.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={createPageUrl(`BlogPost?id=${blog.id}`)}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                      <div className="relative h-56 overflow-hidden">
                        <img 
                          src={blog.image} 
                          alt={`${blog.title} - Expert auto care guide for McKinney, Frisco, Allen, Plano and Collin County`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                            {blog.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {blog.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {blog.readTime}
                          </span>
                        </div>
                        
                        <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {blog.title}
                        </h2>
                        
                        <p className="text-slate-600 mb-4 flex-1 line-clamp-3">
                          {blog.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                          <span className="flex items-center gap-2 text-sm text-slate-500">
                            <User className="w-4 h-4" />
                            {blog.author}
                          </span>
                          <span className="text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* Back to Home */}
            <div className="text-center mt-12">
              <Link to={createPageUrl('Home')}>
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}