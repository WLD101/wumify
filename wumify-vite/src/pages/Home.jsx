import React from 'react';
import Features from '../components/Features';
import Solutions from '../components/Solutions';
import IntegrationsGrid from '../components/IntegrationsGrid';
import HowItWorks from '../components/HowItWorks';
import Comparison from '../components/Comparison';
import FAQ from '../components/FAQ';
import Booking from '../components/Booking';
import CTA from '../components/CTA';

const BRANDS = [
  { name: 'Vodafone', initial: 'V' },
  { name: 'Barclays', initial: 'B' },
  { name: 'Unilever', initial: 'U' },
  { name: 'Tesco', initial: 'T' },
  { name: 'GSK', initial: 'G' },
  { name: 'Aston Martin', initial: 'A' },
];

export default function Home() {
  return (
    <div className="flex-grow flex flex-col w-full justify-between">
      {/* SECTION 2: Hero Content */}
      <div className="flex-grow flex flex-col items-center justify-center text-center px-4 py-24 md:py-32 -mt-[40px] z-10 relative">
        <div className="mb-6 flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur text-[11px] font-bold text-white tracking-wider uppercase select-none shadow-[0_0_15px_rgba(255,255,255,0.05)]">
          <div className="relative w-4 h-4 rounded-full overflow-hidden flex items-center justify-center shrink-0 border border-white/20">
            {/* Shimmer/flash overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" />
            <iconify-icon icon="circle-flags:gb" width="16" height="16" className="w-full h-full object-cover" />
          </div>
          UK Based AI Agency
        </div>
        <h1 className="font-general text-[80px] md:text-[180px] font-normal leading-[1.02] tracking-[-0.024em] whitespace-nowrap text-white">
          Wumify <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#fcd34d] via-[#a855f7] to-[#6366f1]">AI</span>
        </h1>
        <p className="text-hero-sub text-lg max-w-2xl leading-8 opacity-80 mt-4 mb-8">
          For businesses that don't have time. Our AI Agents automate your entire operation. Elite traditional digital services and military-grade cybersecurity, supercharged with cutting-edge AI.
        </p>
        <button 
          onClick={() => {
            const el = document.getElementById('booking');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="hero-secondary-btn rounded-full px-[29px] py-[24px] text-[18px] font-medium flex items-center justify-center text-white cursor-pointer"
        >
          Schedule a Consult
        </button>
      </div>

      {/* SECTION 3: Marquee */}
      <div className="max-w-5xl mx-auto w-full px-8 pb-10 z-10 overflow-hidden">
        <p className="text-sm text-foreground/50 text-center mb-6">Relied on by brands across the globe</p>
        
        <div 
          className="w-full overflow-hidden relative flex"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
          <div className="flex animate-marquee-scroll hover:[animation-play-state:paused] w-max gap-16 pr-16 items-center">
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <div key={i} className="flex items-center gap-3 shrink-0">
                <div className="liquid-glass w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold text-white/80">
                  {brand.initial}
                </div>
                <span className="text-foreground/80 font-medium text-sm">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- NEW SECTIONS --- */}
      <Features />
      <Solutions />
      <IntegrationsGrid />
      <HowItWorks />
      <Comparison />
      <FAQ />
      <Booking />
      <CTA />
    </div>
  );
}
