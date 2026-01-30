import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Absolutely fantastic service! They came right to my office parking lot and had my oil changed during my lunch break. So convenient and professional. Will definitely use them again!",
    service: "Oil Change"
  },
  {
    name: "Michael R.",
    rating: 5,
    text: "My brakes were grinding badly and I couldn't take time off work. They came to my house on a Saturday and fixed everything. The technician was knowledgeable and showed me exactly what was wrong.",
    service: "Brake Repair"
  },
  {
    name: "Jennifer L.",
    rating: 5,
    text: "The detailing service was incredible. My car looks better than when I bought it! They were thorough, professional, and the price was very fair. Highly recommend!",
    service: "Auto Detailing"
  },
  {
    name: "David K.",
    rating: 5,
    text: "I was skeptical about mobile mechanics, but these guys changed my mind. Quick, professional, and they cleaned up after themselves. My go-to for car maintenance now.",
    service: "Oil Change"
  }
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2">What Our Customers Say</h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/30">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="pt-4">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8 font-light italic">
                  "{testimonials[current].text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 text-lg">{testimonials[current].name}</div>
                  </div>
                  <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    {testimonials[current].service}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full border-slate-200 hover:bg-blue-50 hover:border-blue-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current 
                      ? 'w-8 bg-blue-600' 
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-slate-200 hover:bg-blue-50 hover:border-blue-200"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}