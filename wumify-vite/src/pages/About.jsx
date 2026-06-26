import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="w-full py-20 px-4 md:px-8 z-10 relative">
      <motion.article 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="liquid-glass border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-md">
          <div className="mb-6 flex items-center gap-2 px-3 py-1 rounded-full border border-wumify-purple/30 bg-wumify-purple/10 backdrop-blur w-fit text-[11px] font-bold text-white tracking-wider uppercase select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] animate-ping" />
            Our Story & Legacy
          </div>
          <h1 className="font-general text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">About Wumify</h1>
          <p className="text-foreground/50 mb-10 text-sm">6+ Years of Elite AI Automation & Cyber Protection</p>

          <div className="space-y-8 text-foreground/80 leading-relaxed font-geist text-base">
            <section>
              <h2 className="text-xl md:text-2xl font-general font-medium text-white mb-3">Who We Are</h2>
              <p>
                Founded in Manchester, Wumify has spent the last 6 years engineering bespoke automation software and protecting critical enterprise infrastructure. We saw early on that the future of business operations would rely on a convergence of **Artificial Intelligence** and **uncompromising Cybersecurity**. 
              </p>
              <p className="mt-3">
                Today, we support leading UK and US brands by taking manual operations entirely off their plates, deploying intelligent autonomous agents, and shielding their cloud assets from evolving threat landscapes.
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                <div className="text-wumify-purple mb-3"><iconify-icon icon="solar:shield-keyhole-linear" width="28" height="28" /></div>
                <h3 className="text-lg font-medium text-white mb-2">Cybersecurity Native</h3>
                <p className="text-sm text-foreground/60">
                  Every AI model integration and workflow engine we build undergoes rigorous penetration testing. Our team has decades of combined experience defending secure financial networks and healthcare systems.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                <div className="text-wumify-purple mb-3"><iconify-icon icon="solar:cpu-linear" width="28" height="28" /></div>
                <h3 className="text-lg font-medium text-white mb-2">6 Years of Experience</h3>
                <p className="text-sm text-foreground/60">
                  We've spent over half a decade building and optimizing automation scripts, moving from traditional ETL pipeline coding to complex agentic LLM tool call loops.
                </p>
              </div>
            </section>

            <section className="pt-4 border-t border-white/10 text-center">
              <h2 className="text-xl md:text-2xl font-general font-medium text-white mb-4">Empower Your Team</h2>
              <p className="mb-6">Stop wasting hours on repetitive workflows. Let us automate it safely.</p>
              <Link to="/contact" className="hero-secondary-btn py-3 px-8 rounded-full text-white inline-block">
                Work With Us
              </Link>
            </section>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

import { Link } from 'react-router-dom';
