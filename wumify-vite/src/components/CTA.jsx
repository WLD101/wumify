import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="relative w-full pt-40 pb-20 z-10 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background glow specific to CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-wumify-purple/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <h2 className="font-general text-[60px] md:text-[100px] leading-tight font-medium tracking-tight mb-8">
          Ready to scale <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">your operations?</span>
        </h2>
        
        <div className="flex gap-4 justify-center items-center">
          <button className="hero-secondary-btn rounded-full px-8 py-4 text-[18px] font-medium flex items-center justify-center bg-white text-black hover:bg-white/90">
            Get Started
          </button>
          <button className="hero-secondary-btn rounded-full px-8 py-4 text-[18px] font-medium flex items-center justify-center">
            Book Demo
          </button>
        </div>
      </motion.div>
    </section>
  );
}
