import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submit
    setSubmitted(true);
  };

  return (
    <div className="w-full py-20 px-4 md:px-8 z-10 relative">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Side Details */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <div className="mb-6 flex items-center gap-2 px-3 py-1 rounded-full border border-wumify-purple/30 bg-wumify-purple/10 backdrop-blur w-fit text-[11px] font-bold text-white tracking-wider uppercase select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] animate-ping" />
            Contact Us
          </div>
          <h1 className="font-general text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">Let's scale your operations</h1>
          <p className="text-foreground/60 mb-8 text-base">
            Reach out to schedule a consultation, request an audit, or apply for an open role. We'll get back to you within 24 hours.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4 items-center">
              <div className="liquid-glass w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 text-emerald-500">
                <iconify-icon icon="logos:whatsapp-icon" width="24" height="24" />
              </div>
              <div>
                <span className="block text-xs text-foreground/40 font-semibold tracking-wider uppercase">WhatsApp Support (Chat Only)</span>
                <a href="https://wa.me/447752941226" target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-400 transition-colors font-medium">+44 7752 941226</a>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="liquid-glass w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 text-wumify-purple">
                <iconify-icon icon="solar:letter-linear" width="24" height="24" />
              </div>
              <div>
                <span className="block text-xs text-foreground/40 font-semibold tracking-wider uppercase">Direct Email</span>
                <a href="mailto:contact@wumify.com" className="text-white hover:text-wumify-purple transition-colors font-medium">contact@wumify.com</a>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="liquid-glass w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 text-wumify-purple">
                <iconify-icon icon="solar:map-point-linear" width="24" height="24" />
              </div>
              <div>
                <span className="block text-xs text-foreground/40 font-semibold tracking-wider uppercase">Manchester HQ</span>
                <span className="text-white font-medium text-sm">61 Mosley Street, M2 3HZ, UK</span>
              </div>
            </div>
            
            <div className="flex gap-4 items-center">
              <div className="liquid-glass w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 text-wumify-purple">
                <iconify-icon icon="solar:shield-keyhole-linear" width="24" height="24" />
              </div>
              <div>
                <span className="block text-xs text-foreground/40 font-semibold tracking-wider uppercase">Cybersecurity Audit</span>
                <span className="text-white font-medium text-sm">Free security scan included in all quotes</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <div className="liquid-glass border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-wumify-purple mb-4 flex justify-center">
                  <iconify-icon icon="solar:check-circle-linear" width="64" height="64" />
                </div>
                <h3 className="text-2xl font-general font-medium text-white mb-2">Message Sent!</h3>
                <p className="text-foreground/60 text-sm">Thank you. An AI & Cybersecurity consultant will reach out to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-wumify-purple transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-wumify-purple transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">Company Name</label>
                  <input 
                    type="text" 
                    id="company"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-wumify-purple transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows="4"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-wumify-purple transition-colors"
                    placeholder="Tell us about your automation or cybersecurity requirements..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full hero-secondary-btn py-3 rounded-lg text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                >
                  <iconify-icon icon="solar:paper-plane-linear" width="16" height="16" />
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
