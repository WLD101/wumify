import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    category: "Pricing & Investment",
    questions: [
      {
        q: "How much does AI automation implementation cost?",
        a: "Our engagements are scope-based. A basic n8n integration may start around £2,500, while complete operation-wide enterprise integrations with custom models and cybersecurity penetration tests range from £10,000 to £25,000. All setups include detailed documentation and staff handovers."
      },
      {
        q: "What ROI can I expect from AI automation?",
        a: "Most clients claw back the initial implementation cost within 3 to 6 months by eliminating manual administrative overhead, reducing data entry errors to zero, and saving 20-30 hours per employee every single week."
      }
    ]
  },
  {
    category: "Implementation & Timeline",
    questions: [
      {
        q: "How long does it take to implement a workflow?",
        a: "Standard automation workflows take between 2 to 4 weeks from audit to production deploy. Larger multi-agent architectures integrated into legacy databases typically take 6 to 8 weeks."
      },
      {
        q: "Will automation disrupt my current operations?",
        a: "No. We build, test, and audit all workflows in sandbox staging environments first. We only switch to production once everything has been approved and thoroughly verified by our cybersecurity team."
      }
    ]
  },
  {
    category: "Security & Tools",
    questions: [
      {
        q: "Is my corporate data secure with Wumify?",
        a: "Absolutely. Security is our foundation. We implement UK GDPR compliant local hosting options, encrypt all sensitive API connections, and run complete penetration tests before deployment to protect your system ports."
      },
      {
        q: "What tools and platforms do you integrate with?",
        a: "We are tool-agnostic. We integrate with n8n, Make, Salesforce, HubSpot, OpenAI, Anthropic, Slack, custom APIs, SQL/NoSQL databases, and legacy on-premise business systems."
      }
    ]
  }
];

function FAQItem({ q, a }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 py-4 last:border-none">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-foreground hover:text-wumify-purple transition-colors py-2"
      >
        <span className="font-general font-medium text-base md:text-lg">{q}</span>
        <iconify-icon 
          icon={isOpen ? "solar:minus-circle-linear" : "solar:add-circle-linear"} 
          width="24" 
          height="24" 
          className="text-foreground/40"
        />
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm md:text-base text-foreground/60 leading-relaxed pt-2 pb-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-8 py-32 z-10">
      <div className="text-center mb-20">
        <span className="text-wumify-purple font-semibold text-xs uppercase tracking-widest block mb-4">Support & FAQ</span>
        <h2 className="font-general text-[40px] md:text-[64px] leading-tight font-medium text-foreground mb-6">
          Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-wumify-cyan to-wumify-purple">Questions</span>
        </h2>
        <p className="text-hero-sub text-lg max-w-xl mx-auto">
          Got questions about costs, security, or implementation timelines? Here are the answers.
        </p>
      </div>

      <div className="space-y-12">
        {faqs.map((cat, i) => (
          <div key={i} className="liquid-glass border border-white/10 rounded-2xl p-6 md:p-8">
            <h3 className="font-general text-lg font-bold text-wumify-purple uppercase tracking-wider mb-6 border-b border-white/10 pb-4">
              {cat.category}
            </h3>
            <div className="divide-y divide-white/5">
              {cat.questions.map((faq, idx) => (
                <FAQItem key={idx} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
