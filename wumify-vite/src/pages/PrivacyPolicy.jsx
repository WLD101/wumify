import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div className="w-full py-20 px-4 md:px-8 z-10 relative">
      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="liquid-glass border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-md">
          <h1 className="font-general text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">Privacy Policy</h1>
          <p className="text-foreground/50 mb-10 text-sm">Last updated: June 2025</p>

          <div className="space-y-8 text-foreground/80 leading-relaxed font-geist text-base">
            <section>
              <h2 className="text-xl md:text-2xl font-general font-medium text-white mb-3">1. Introduction</h2>
              <p>
                Wumify Ltd ("we", "us", "our", or "Company") operates the Wumify website and provides AI automation services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p className="mt-3">
                Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-general font-medium text-white mb-3">2. Information We Collect</h2>
              <h3 className="text-lg font-medium text-wumify-purple mb-2">Personal Information</h3>
              <p className="mb-3">We may collect the following personal information:</p>
              <ul className="list-disc list-inside space-y-2 mb-4 pl-4 text-foreground/75">
                <li>Name and contact information (email, phone number)</li>
                <li>Company name and business information</li>
                <li>Billing and payment information</li>
                <li>Communication preferences</li>
                <li>Information provided through contact forms and inquiries</li>
              </ul>

              <h3 className="text-lg font-medium text-wumify-purple mb-2">Automatically Collected Information</h3>
              <p className="mb-3">When you visit our website, we automatically collect:</p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-foreground/75">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website information</li>
                <li>Device information and operating system</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-general font-medium text-white mb-3">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect for:</p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-foreground/75">
                <li>Providing and improving our services</li>
                <li>Processing transactions and sending related information</li>
                <li>Sending promotional communications (with your consent)</li>
                <li>Responding to your inquiries and customer support</li>
                <li>Analyzing website usage and trends</li>
                <li>Detecting and preventing fraud</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-general font-medium text-white mb-3">4. Your Rights (GDPR & CCPA)</h2>
              <h3 className="text-lg font-medium text-wumify-purple mb-2">GDPR Rights (EU Residents)</h3>
              <p className="mb-3">If you are located in the EU, you have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 mb-4 pl-4 text-foreground/75">
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent at any time</li>
              </ul>

              <h3 className="text-lg font-medium text-wumify-purple mb-2">CCPA Rights (California Residents)</h3>
              <p className="mb-3">If you are a California resident, you have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-foreground/75">
                <li>Right to know what personal information is collected</li>
                <li>Right to know whether personal information is sold or disclosed</li>
                <li>Right to say no to the sale or sharing of personal information</li>
                <li>Right to delete personal information collected</li>
                <li>Right to correct inaccurate personal information</li>
              </ul>
            </section>

            <section className="pt-4 border-t border-white/10">
              <h2 className="text-xl md:text-2xl font-general font-medium text-white mb-4">5. Contact Us</h2>
              <p className="mb-6">If you have questions about this Privacy Policy, please contact us at:</p>
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
