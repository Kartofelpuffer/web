import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SMS_QUOTE_HREF } from '@/lib/cta';

const faqItems = [
  {
    question: 'How fast can you come out for service?',
    answer: 'In many areas we can offer same-day windows. Reach out by text and we will confirm your earliest appointment options.',
  },
  {
    question: 'Do you provide parts and labor warranty?',
    answer: 'Yes. We explain part quality options and warranty coverage before approval so there are no surprises.',
  },
  {
    question: 'Can you service vehicles at my workplace or apartment?',
    answer: 'Absolutely. As long as the location allows on-site service and we can safely access your vehicle, we can perform most jobs there.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We support convenient digital payment options and will confirm all pricing before work begins.',
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Quick answers to help you book faster and feel confident before your appointment.</p>
        </div>

        <div className="space-y-4">
          {faqItems.map((faq) => (
            <article key={faq.question} className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
              <p className="text-slate-600">{faq.answer}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={SMS_QUOTE_HREF}
            className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800"
          >
            Have a specific question? Text us
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
