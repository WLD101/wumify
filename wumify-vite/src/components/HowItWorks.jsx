import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    step: "01",
    title: "Operational Audit",
    desc: "We analyze your manual workflows, spreadsheet architectures, and bottlenecks to identify high-ROI automation opportunities."
  },
  {
    step: "02",
    title: "System Architecture",
    desc: "We map out visual workflow systems, design secure database structures, and configure custom LLM tool-calling loops."
  },
  {
    step: "03",
    title: "Secure Deployment",
    desc: "Our cybersecurity experts audit the connection ports, verify data encryption compliance, and deploy live integrations."
  },
  {
    step: "04",
    title: "Continuous Tuning",
    desc: "We constantly refine prompt responses, update tool calls, and scale processing capabilities as your business expands."
  }
];

export default function HowItWorks() {
  return (
    <section className="relative w-full py-40 overflow-hidden bg-background/50 border-t border-b border-white/5 z-10">
      {/* Background Animated Logo with Low Opacity */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <motion.img 
          src="/logo.jpg" 
          alt="" 
          className="w-[600px] md:w-[800px] opacity-10 mix-blend-screen select-none object-contain filter blur-[4px]"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.08, 0.12, 0.08]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-8 z-10">
        <div className="text-center mb-24">
          <span className="text-wumify-purple font-semibold text-xs uppercase tracking-widest block mb-4">Our Method</span>
          <h2 className="font-general text-[40px] md:text-[64px] leading-tight font-medium text-foreground mb-6">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-wumify-cyan to-wumify-purple">Precision</span>
          </h2>
          <p className="text-hero-sub text-lg max-w-2xl mx-auto">
            From audit to optimization, we handle the technical execution while keeping your operations completely secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="liquid-glass border border-white/10 rounded-2xl p-6 relative flex flex-col justify-between min-h-[260px]"
            >
              <div>
                <span className="text-3xl font-general font-semibold text-wumify-purple/40 block mb-4">{step.step}</span>
                <h3 className="text-xl font-general font-medium text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
