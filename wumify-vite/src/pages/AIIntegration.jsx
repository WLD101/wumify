import React from 'react';
import { motion } from 'framer-motion';
import HowItWorks from '../components/HowItWorks';
import Comparison from '../components/Comparison';
import FAQ from '../components/FAQ';
import Booking from '../components/Booking';

export default function AIIntegration() {
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
            Secure AI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-wumify-cyan to-wumify-purple">Integration</span>
          </h1>
          <p className="text-hero-sub text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 opacity-80">
            Inject state-of-the-art LLMs, custom vector databases, and semantic search directly into your legacy ERP, CRM, and operational systems safely.
          </p>
        </motion.div>
      </section>

      {/* Benefits cards */}
      <section className="w-full max-w-7xl mx-auto px-8 pb-32 z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="liquid-glass border border-white/10 rounded-2xl p-8">
          <div className="text-wumify-purple mb-4">
            <iconify-icon icon="solar:cpu-linear" width="36" height="36" />
          </div>
          <h3 className="text-xl font-general font-medium text-white mb-2">Model Optimization</h3>
          <p className="text-sm text-foreground/60 leading-relaxed">
            We select and configure the best model (GPT-4, Claude, Gemini, or open-source Llama models) for your budget, speed, and accuracy needs.
          </p>
        </div>

        <div className="liquid-glass border border-white/10 rounded-2xl p-8">
          <div className="text-wumify-purple mb-4">
            <iconify-icon icon="solar:shield-keyhole-linear" width="36" height="36" />
          </div>
          <h3 className="text-xl font-general font-medium text-white mb-2">Data Leakage Prevention</h3>
          <p className="text-sm text-foreground/60 leading-relaxed">
            We construct secure proxy gateways to prevent model providers from utilizing your corporate documents or customer inquiries to train public models.
          </p>
        </div>

        <div className="liquid-glass border border-white/10 rounded-2xl p-8">
          <div className="text-wumify-purple mb-4">
            <iconify-icon icon="solar:database-linear" width="36" height="36" />
          </div>
          <h3 className="text-xl font-general font-medium text-white mb-2">Vector Search (RAG)</h3>
          <p className="text-sm text-foreground/60 leading-relaxed">
            Index thousands of corporate manuals and PDFs to let your AI Agents answer complex support tickets instantly with zero hallucination.
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
