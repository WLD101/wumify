import React from 'react';
import { motion } from 'framer-motion';

export default function TermsOfService() {
  return (
    <div className="w-full py-20 px-4 md:px-8 z-10 relative">
      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="liquid-glass border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-md">
          <h1 className="font-general text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">Terms of Service</h1>
          <p className="text-foreground/50 mb-10 text-sm">Last updated: June 2025</p>

          <div className="space-y-8 text-foreground/80 leading-relaxed font-geist text-base">
            <section>
              <h2 className="text-xl md:text-2xl font-general font-medium text-white mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing and using the Wumify website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-general font-medium text-white mb-3">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Wumify's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-foreground/75">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-general font-medium text-white mb-3">3. Disclaimer</h2>
              <p>
                The materials on Wumify's website are provided on an 'as is' basis. Wumify makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-general font-medium text-white mb-3">4. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom, and you irrevocably submit to the exclusive jurisdiction of the courts located in Manchester, England.
              </p>
            </section>

            <section className="pt-4 border-t border-white/10">
              <h2 className="text-xl md:text-2xl font-general font-medium text-white mb-4">5. Contact Information</h2>
              <p className="mb-6">For questions about these Terms of Service, please contact us at:</p>
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
