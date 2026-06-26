import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  {
    name: "Average Operating Cost",
    traditional: "£85k / Yr (Staff & Tools)",
    traditionalValue: 90,
    ai: "£15k / Yr (Subscriptions & Support)",
    aiValue: 20
  },
  {
    name: "Workflow Process Speed",
    traditional: "Hours or Days (Manual Processing)",
    traditionalValue: 15,
    ai: "Real-time or Seconds (Immediate execution)",
    aiValue: 95
  },
  {
    name: "Manual Error Rates",
    traditional: "5% - 8% (Typographical errors, fatigue)",
    traditionalValue: 80,
    ai: "<0.1% (Consistent programmatic validation)",
    aiValue: 2
  },
  {
    name: "Hours Reclaimed per Employee",
    traditional: "0 Hours (Tied to manual inputs)",
    traditionalValue: 5,
    ai: "25+ Hours Weekly (Focus on strategy)",
    aiValue: 85
  },
  {
    name: "Scalability Limit",
    traditional: "Linear (Requires hiring more staff)",
    traditionalValue: 30,
    ai: "Infinite (API scaling with zero extra headcount)",
    aiValue: 100
  }
];

export default function Comparison() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-8 py-32 z-10">
      <div className="text-center mb-20">
        <span className="text-wumify-purple font-semibold text-xs uppercase tracking-widest block mb-4">Performance Demographics</span>
        <h2 className="font-general text-[40px] md:text-[64px] leading-tight font-medium text-foreground mb-6">
          Traditional vs. <span className="text-transparent bg-clip-text bg-gradient-to-r from-wumify-cyan to-wumify-purple">AI Powered</span>
        </h2>
        <p className="text-hero-sub text-lg max-w-2xl mx-auto">
          Compare the real-world operational impact of traditional human workflows against secured AI integrations.
        </p>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        {metrics.map((metric, i) => (
          <div key={i} className="liquid-glass border border-white/10 rounded-2xl p-6 relative">
            <h3 className="text-lg font-general font-medium text-foreground mb-4">{metric.name}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Traditional */}
              <div>
                <div className="flex justify-between text-xs text-foreground/50 mb-1">
                  <span>Traditional Business Model</span>
                  <span>{metric.traditional}</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.traditionalValue}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-red-500/50"
                  />
                </div>
              </div>

              {/* AI Powered */}
              <div>
                <div className="flex justify-between text-xs text-wumify-purple mb-1">
                  <span>Wumify AI Integrations</span>
                  <span>{metric.ai}</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.aiValue}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-gradient-to-r from-wumify-cyan to-wumify-purple"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
