import React from 'react';
import { motion } from 'framer-motion';

export default function CookiePolicy() {
  return (
    <div className="w-full py-20 px-4 md:px-8 z-10 relative">
      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="liquid-glass border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-md">
          <h1 className="font-general text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">Cookie Policy</h1>
          <p className="text-foreground/50 mb-10 text-sm">Last updated: June 2025</p>

          <div className="space-y-8 text-foreground/80 leading-relaxed font-geist text-base">
            <section>
              <h2 className="text-xl md:text-2xl font-general font-medium text-white mb-3">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They allow websites to remember information about your visit, such as your preferences and browsing history. Cookies are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-general font-medium text-white mb-3">2. Types of Cookies We Use</h2>
              
              <h3 className="text-lg font-medium text-wumify-purple mb-2">Essential Cookies</h3>
              <p className="mb-4">
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. Without these cookies, the website cannot operate correctly.
              </p>

              <h3 className="text-lg font-medium text-wumify-purple mb-2">Analytics Cookies</h3>
              <p className="mb-4">
                We use analytics cookies to understand how visitors interact with our website. These cookies collect information about the pages you visit, the time you spend on each page, and the links you click.
              </p>

              <h3 className="text-lg font-medium text-wumify-purple mb-2">Marketing Cookies</h3>
              <p>
                Marketing cookies are used to track your activity across websites and display personalized advertisements. These cookies may be set by third-party advertising networks.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-general font-medium text-white mb-3">3. Your Cookie Choices</h2>
              <p className="mb-4">You have the right to control cookies on your device. Most web browsers allow you to control cookies through their settings. You can choose to:</p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-foreground/75">
                <li>Accept all cookies</li>
                <li>Reject all cookies</li>
                <li>Accept only certain types of cookies</li>
                <li>Be prompted each time a cookie is set</li>
              </ul>
            </section>

            <section className="pt-4 border-t border-white/10">
              <h2 className="text-xl md:text-2xl font-general font-medium text-white mb-4">4. Contact Us</h2>
              <p className="mb-6">If you have questions about our use of cookies, please contact us at:</p>
              <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6 space-y-3">
                <p><strong>Email:</strong> <span className="text-foreground/75">contact@wumify.com</span></p>
                <p><strong>UK Address:</strong> <span className="text-foreground/75">61 Mosley Street, Manchester, M2 3HZ, England</span></p>
                <p><strong>USA Address:</strong> <span className="text-foreground/75">54 State Street, STE 804, Albany, NY 12207, USA</span></p>
              </div>
            </section>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
