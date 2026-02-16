import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Calendar, Clock, ArrowLeft, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import CTAButton from '@/components/CTAButton';
import { getBlogPostById } from '@/data/blogPosts';

export default function BlogPost() {
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = parseInt(urlParams.get('id'), 10) || 1;
  const blog = getBlogPostById(blogId);

  React.useEffect(() => {
    if (!blog) return;

    document.title = `${blog.title} | Summit Auto Care`;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', blog.excerpt);

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', blog.seoKeywords || `${blog.category}, mobile mechanic, mobile detailing, McKinney, Frisco, Allen, Collin County`);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);

    const upsertOg = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    upsertOg('og:title', blog.title);
    upsertOg('og:description', blog.excerpt);
    upsertOg('og:image', blog.image);
  }, [blog]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Blog post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar alwaysScrolled={true} />
      <CTAButton />

      <main>
        <div className="relative h-[48vh] min-h-[360px]">
          <img
            src={blog.image}
            alt={`${blog.title} - Mobile auto tips for Collin County drivers`}
            loading="eager"
            decoding="async"
            width="1600"
            height="900"
            sizes="100vw"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70" />

          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-4xl mx-auto">
              <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">{blog.category}</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">{blog.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-white/80">
                <span className="flex items-center gap-2"><User className="w-4 h-4" />{blog.author}</span>
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{blog.date}</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{blog.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg prose-slate max-w-none"
            >
              <div className="whitespace-pre-line">
                {blog.content.split('\n').map((line, i) => {
                  if (line.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold text-slate-900 mt-10 mb-4">{line.replace('## ', '')}</h2>;
                  if (line.startsWith('### ')) return <h3 key={i} className="text-xl font-semibold text-slate-900 mt-8 mb-3">{line.replace('### ', '')}</h3>;
                  if (line.startsWith('- ')) return <li key={i} className="text-slate-600 ml-4">{line.replace('- ', '')}</li>;
                  if (line.trim() === '') return <br key={i} />;

                  const parts = line.split(/(\*\*[^*]+\*\*)/g);
                  return (
                    <p key={i} className="text-slate-600 leading-relaxed mb-4">
                      {parts.map((part, j) => (part.startsWith('**') && part.endsWith('**') ? <strong key={j} className="text-slate-900">{part.slice(2, -2)}</strong> : part))}
                    </p>
                  );
                })}
              </div>
            </motion.div>

            <div className="mt-12 bg-gradient-to-br from-blue-600 to-slate-900 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Mobile Service This Week?</h3>
              <p className="text-blue-100 mb-6">Summit Auto Care TX serves McKinney, Frisco, Allen, Plano, and all of Collin County.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={createPageUrl('Contact')}>
                  <Button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-6">Contact Us</Button>
                </Link>
                <a href="sms:+18337038934?&body=Hi%20Summit%20Auto%20Care%2C%20I%20need%20a%20quote.">
                  <Button className="bg-white text-blue-700 border border-white hover:bg-blue-50 px-8 py-6">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Text for Quote
                  </Button>
                </a>
              </div>
            </div>

            <div className="mt-12 flex justify-between items-center pt-8 border-t border-slate-200">
              <Link to={createPageUrl('Blog')}>
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  All Articles
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
