import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Calendar, Clock, ArrowRight, ArrowLeft, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import CTAButton from '@/components/CTAButton';
import { blogPosts } from '@/data/blogPosts';

export default function Blog() {
  useEffect(() => {
    document.title = 'Blog | Summit Auto Care';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Expert auto care tips, maintenance guides, cost breakdowns, and emergency help for McKinney, Frisco, Allen, and Collin County drivers.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'brake replacement cost McKinney, car wont start Frisco, mobile detailing tips Collin County, mobile mechanic advice Allen');
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar alwaysScrolled={true} />
      <CTAButton />

      <main className="pt-14 md:pt-0" style={{ paddingTop: 'max(3.5rem, env(safe-area-inset-top))' }}>
        <section className="bg-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Blog</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">Auto Care Tips & Insights</h1>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Actionable local guides covering detailing, repairs, emergency checks, and real-world service costs.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((blog, index) => (
                <motion.article
                  key={blog.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="group"
                >
                  <Link to={createPageUrl(`BlogPost?id=${blog.id}`)}>
                    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={blog.image}
                          alt={`${blog.title} - Expert auto care guide for Collin County drivers`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">{blog.category}</span>
                        </div>
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{blog.date}</span>
                          <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{blog.readTime}</span>
                        </div>

                        <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">{blog.title}</h2>
                        <p className="text-slate-600 mb-4 flex-1 line-clamp-3">{blog.excerpt}</p>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                          <span className="flex items-center gap-2 text-sm text-slate-500"><User className="w-4 h-4" />{blog.author}</span>
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
