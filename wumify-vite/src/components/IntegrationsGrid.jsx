import React from 'react';
import { motion } from 'framer-motion';

const integrations = [
  { name: "n8n Automation", icon: "simple-icons:n8n", desc: "Advanced workflow orchestration & database synchronization" },
  { name: "OpenAI GPT-4o", icon: "solar:cpu-bold-duotone", desc: "Natural language reasoning, classification & writing automation" },
  { name: "Salesforce / CRM", icon: "solar:database-bold-duotone", desc: "Sync contact status, automate data inputs & customer files" },
  { name: "Slack / Teams", icon: "solar:chat-square-call-bold-duotone", desc: "Real-time alerts, prompt notifications & customer routing" },
  { name: "Claude 3.5 Sonnet", icon: "solar:bolt-bold-duotone", desc: "High-accuracy code writing, operations planning & logic verification" },
  { name: "HubSpot Marketing", icon: "solar:presentation-graph-bold-duotone", desc: "Track conversions, trigger cold emails & schedule bookings" }
];

export default function IntegrationsGrid() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-8 py-32 z-10">
      <div className="text-center mb-20">
        <span className="text-wumify-purple font-semibold text-xs uppercase tracking-widest block mb-4">Integrations Ecosystem</span>
        <h2 className="font-general text-[40px] md:text-[64px] leading-tight font-medium text-foreground mb-6">
          Connect any <span className="text-transparent bg-clip-text bg-gradient-to-r from-wumify-cyan to-wumify-purple">API</span>
        </h2>
        <p className="text-hero-sub text-lg max-w-2xl mx-auto">
          We integrate secure AI models and custom automation triggers directly into your existing business software stack.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {integrations.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="liquid-glass border border-white/10 rounded-2xl p-6 flex gap-4 items-start hover:border-wumify-purple/35 transition-all duration-300 group"
          >
            <div className="text-wumify-purple group-hover:text-wumify-cyan transition-colors shrink-0">
              <iconify-icon icon={item.icon} width="32" height="32" />
            </div>
            <div>
              <h3 className="text-lg font-general font-medium text-foreground mb-2">{item.name}</h3>
              <p className="text-xs text-foreground/60 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
