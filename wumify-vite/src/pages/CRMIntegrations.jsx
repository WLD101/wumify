import React from 'react';
import { motion } from 'framer-motion';
import HowItWorks from '../components/HowItWorks';
import Comparison from '../components/Comparison';
import FAQ from '../components/FAQ';
import Booking from '../components/Booking';

export default function CRMIntegrations() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero explanation */}
      <section className="relative w-full max-w-5xl mx-auto px-8 pt-20 pb-16 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur w-fit mx-auto text-[11px] font-bold text-white tracking-wider uppercase select-none shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <div className="relative w-4 h-4 rounded-full overflow-hidden flex items-center justify-center shrink-0 border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" />
              <iconify-icon icon="circle-flags:gb" width="16" height="16" className="w-full h-full object-cover" />
            </div>
            UK Developed Integrations
          </div>
          <h1 className="font-general text-4xl md:text-7xl font-medium tracking-tight mb-6 text-white leading-tight">
            Secure CRM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-wumify-cyan to-wumify-purple">Integrations</span>
          </h1>
          <p className="text-hero-sub text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 opacity-80">
            Sync data between Salesforce, HubSpot, ActiveCampaign, and custom databases seamlessly. Keep records up to date automatically.
          </p>
        </motion.div>
      </section>

      {/* Benefits cards */}
      <section className="w-full max-w-7xl mx-auto px-8 pb-32 z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="liquid-glass border border-white/10 rounded-2xl p-8">
          <div className="text-wumify-purple mb-4">
            <iconify-icon icon="solar:database-linear" width="36" height="36" />
          </div>
          <h3 className="text-xl font-general font-medium text-white mb-2">Centralized Sync</h3>
          <p className="text-sm text-foreground/60 leading-relaxed">
            Eliminate double data entry. Any record updated in your sales funnel synchronizes with support databases instantly.
          </p>
        </div>

        <div className="liquid-glass border border-white/10 rounded-2xl p-8">
          <div className="text-wumify-purple mb-4">
            <iconify-icon icon="solar:programming-linear" width="36" height="36" />
          </div>
          <h3 className="text-xl font-general font-medium text-white mb-2">Bespoke Webhooks</h3>
          <p className="text-sm text-foreground/60 leading-relaxed">
            We code custom triggers and endpoints to support complex routing logic tailored to your team's sales pipelines.
          </p>
        </div>

        <div className="liquid-glass border border-white/10 rounded-2xl p-8">
          <div className="text-wumify-purple mb-4">
            <iconify-icon icon="solar:shield-keyhole-linear" width="36" height="36" />
          </div>
          <h3 className="text-xl font-general font-medium text-white mb-2">Data Isolation</h3>
          <p className="text-sm text-foreground/60 leading-relaxed">
            Keep sensitive UK and European customer contacts within local sandboxed environments to prevent database exposures.
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
