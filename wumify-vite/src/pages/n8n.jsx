import React from 'react';
import { motion } from 'framer-motion';
import HowItWorks from '../components/HowItWorks';
import Comparison from '../components/Comparison';
import FAQ from '../components/FAQ';
import Booking from '../components/Booking';

export default function N8nService() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero explanation */}
      <section className="relative w-full max-w-5xl mx-auto px-8 pt-20 pb-16 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-wumify-purple/30 bg-wumify-purple/10 backdrop-blur w-fit mx-auto text-[11px] font-bold text-white tracking-wider uppercase select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] animate-ping" />
            Our Expertise
          </div>
          <h1 className="font-general text-4xl md:text-7xl font-medium tracking-tight mb-6 text-white leading-tight">
            n8n Workflow <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-wumify-cyan to-wumify-purple">Automation</span>
          </h1>
          <p className="text-hero-sub text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 opacity-80">
            Automate manual administrative tasks, sync data across APIs, and integrate secure databases with visual node-based execution. Secure, fast, and fully customized.
          </p>
        </motion.div>
      </section>

      {/* Benefits cards */}
      <section className="w-full max-w-7xl mx-auto px-8 pb-32 z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="liquid-glass border border-white/10 rounded-2xl p-8">
          <div className="text-wumify-purple mb-4">
            <iconify-icon icon="solar:programming-linear" width="36" height="36" />
          </div>
          <h3 className="text-xl font-general font-medium text-white mb-2">Visual Logic Nodes</h3>
          <p className="text-sm text-foreground/60 leading-relaxed">
            See exactly how data flows. Every node represents an API, spreadsheet, or model. Easy to monitor, troubleshoot, and scale.
          </p>
        </div>

        <div className="liquid-glass border border-white/10 rounded-2xl p-8">
          <div className="text-wumify-purple mb-4">
            <iconify-icon icon="solar:shield-keyhole-linear" width="36" height="36" />
          </div>
          <h3 className="text-xl font-general font-medium text-white mb-2">Secure Local Hosting</h3>
          <p className="text-sm text-foreground/60 leading-relaxed">
            We host your n8n workflow engines on private UK servers, keeping all customer metrics within UK GDPR jurisdiction without third-party leakages.
          </p>
        </div>

        <div className="liquid-glass border border-white/10 rounded-2xl p-8">
          <div className="text-wumify-purple mb-4">
            <iconify-icon icon="simple-icons:n8n" width="36" height="36" />
          </div>
          <h3 className="text-xl font-general font-medium text-white mb-2">Infinite Connections</h3>
          <p className="text-sm text-foreground/60 leading-relaxed">
            Connect Slack, Salesforce, Google Drive, OpenAI, SQL servers, and custom portals seamlessly under a unified system.
          </p>
        </div>
      </section>

      {/* Unified sub-sections */}
      <HowItWorks />
      <Comparison />
      <FAQ />
      <Booking />
    </div>
  );
}
