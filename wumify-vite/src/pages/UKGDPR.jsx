import React from 'react';
import { motion } from 'framer-motion';

export default function UKGDPR() {
  return (
    <div className="w-full py-20 px-4 md:px-8 z-10 relative">
      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="liquid-glass border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-md">
          <h1 className="font-general text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">UK GDPR Compliance</h1>
          <p className="text-foreground/50 mb-10 text-sm">Last updated: June 2025</p>

          <div className="space-y-8 text-foreground/80 leading-relaxed font-geist text-base">
            <section>
              <h2 className="text-xl md:text-2xl font-general font-medium text-white mb-3">1. Scope of Compliance</h2>
              <p>
                Wumify Ltd is committed to complying fully with the United Kingdom General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. As a Manchester-based agency, we strictly process personal data under the lawful bases outlined in the UK GDPR guidelines.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-general font-medium text-white mb-3">2. Data Sovereignty & Protection</h2>
              <p>
                For our UK operations and local business partners, all automated database pipelines, server logs, and AI training inputs are stored on secure servers located within the United Kingdom. We implement end-to-end cryptographic encryption and strict role-based access controls to prevent unauthorized processing or accidental data loss.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-general font-medium text-white mb-3">3. Key Subject Rights</h2>
              <p className="mb-3">Under the UK GDPR, data subjects have the right to request:</p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-foreground/75">
                <li>Access to their personal data (Subject Access Request)</li>
                <li>Rectification or erasure of inaccurate personal databases</li>
                <li>Restriction or objection to profiling and automated decision making</li>
                <li>Transfer of data to another data controller (Data Portability)</li>
              </ul>
            </section>

            <section className="pt-4 border-t border-white/10">
              <h2 className="text-xl md:text-2xl font-general font-medium text-white mb-4">4. Inquiries & DPO Contact</h2>
              <p className="mb-6">To exercise any rights under the UK GDPR, please contact our Data Protection Office:</p>
              <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6 space-y-3">
                <p><strong>Email:</strong> <span className="text-foreground/75">dpo@wumify.com</span></p>
                <p><strong>Office:</strong> <span className="text-foreground/75">61 Mosley Street, Manchester, M2 3HZ, England</span></p>
              </div>
            </section>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
