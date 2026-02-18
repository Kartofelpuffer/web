import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import CTAButton from '@/components/CTAButton';

const policySections = [
  {
    title: 'Information We Collect',
    content: [
      'We collect information you provide directly when you request a quote, book a service, call, text, or email us. This can include your name, phone number, email address, service address, vehicle details, and requested service information.',
      'We may also collect limited technical data from our website such as device/browser type, pages visited, and approximate location data through analytics tools to improve site performance and customer experience.'
    ]
  },
  {
    title: 'How We Use Your Information',
    content: [
      'We use your information to provide and schedule mobile auto services, communicate about appointments, send quotes and service updates, process payments, and respond to customer support requests.',
      'We may use contact information to send occasional service-related reminders or promotions. You can opt out of promotional messages at any time by contacting us directly.'
    ]
  },
  {
    title: 'Sharing of Information',
    content: [
      'We do not sell your personal information. We only share information with trusted service providers when needed to operate our business, such as payment processors, scheduling platforms, website hosting, or legal/compliance support.',
      'Information may also be disclosed when required by law, regulation, or to protect our rights and customers.'
    ]
  },
  {
    title: 'Data Security',
    content: [
      'We take reasonable administrative, technical, and physical safeguards to protect your personal information. However, no online system is 100% secure, and we cannot guarantee absolute security.'
    ]
  },
  {
    title: 'Your Choices',
    content: [
      'You can request updates, corrections, or deletion of your personal information by contacting us. You may also opt out of marketing communications while still receiving service-related messages.'
    ]
  },
  {
    title: 'Third-Party Links and Services',
    content: [
      'Our website may include links or embedded tools from third-party services (such as booking and payment providers). Their privacy practices are governed by their own policies, and we encourage you to review them.'
    ]
  },
  {
    title: 'Children’s Privacy',
    content: [
      'Our services are not directed to children under 13, and we do not knowingly collect personal information from children.'
    ]
  },
  {
    title: 'Policy Updates',
    content: [
      'We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.'
    ]
  },
  {
    title: 'Contact Us',
    content: [
      'If you have questions about this Privacy Policy or your data, contact Summit Auto Care TX at Contact@SummitAutoCareTx.com or (833) 703-8934.'
    ]
  }
];

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | Summit Auto Care';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      'content',
      'Read the Summit Auto Care TX privacy policy to understand what information we collect, how we use it, and your choices regarding your personal data.'
    );
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar alwaysScrolled={true} />
      <CTAButton />

      <main className="pt-14 md:pt-20" style={{ paddingTop: 'max(3.5rem, calc(3.5rem + env(safe-area-inset-top)))' }}>
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10"
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Privacy Policy</h1>
              <p className="text-slate-500 mb-8">Effective date: February 18, 2026</p>

              <div className="space-y-8">
                {policySections.map((section) => (
                  <section key={section.title}>
                    <h2 className="text-xl font-semibold text-slate-900 mb-3">{section.title}</h2>
                    <div className="space-y-3">
                      {section.content.map((paragraph) => (
                        <p key={paragraph} className="text-slate-700 leading-relaxed">{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
