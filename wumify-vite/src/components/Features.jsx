import React from 'react';
import { motion } from 'framer-motion';

// A helper for floating geometric shapes
function FloatingShapes() {
  return (
    <>
      {/* Triangle */}
      <motion.polygon 
        points="45,15 50,22 40,22" 
        fill="none" 
        stroke="rgba(168, 85, 247, 0.4)" 
        strokeWidth="1"
        animate={{ y: [0, -8, 0], rotate: 360 }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      />
      {/* Star/Diamond */}
      <motion.path 
        d="M 140 15 L 143 20 L 140 25 L 137 20 Z" 
        fill="none" 
        stroke="rgba(59, 130, 246, 0.4)" 
        strokeWidth="1"
        animate={{ y: [0, 8, 0], rotate: -360 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      />
      {/* Square outline */}
      <motion.rect 
        x="90" y="75" width="6" height="6" 
        fill="none" 
        stroke="rgba(236, 72, 153, 0.3)" 
        strokeWidth="1"
        animate={{ y: [0, -6, 0], rotate: 45 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
      />
      {/* Small circle outline */}
      <motion.circle 
        cx="160" cy="70" r="3" 
        fill="none" 
        stroke="rgba(16, 185, 129, 0.3)" 
        strokeWidth="1"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
    </>
  );
}

function WorkflowGraphic() {
  return (
    <div className="w-full h-36 flex items-center justify-center mb-6 relative overflow-hidden rounded-2xl bg-white/[0.01]">
      <svg className="w-full h-full max-w-[280px]" viewBox="0 0 200 100">
        <FloatingShapes />
        {/* Network connections */}
        {/* Source to Mid */}
        <motion.path d="M 25 50 C 45 50, 45 25, 65 25" fill="none" stroke="rgba(168, 85, 247, 0.25)" strokeWidth="1.5" />
        <motion.path d="M 25 50 C 45 50, 45 75, 65 75" fill="none" stroke="rgba(59, 130, 246, 0.25)" strokeWidth="1.5" />
        <motion.path d="M 25 50 L 65 50" fill="none" stroke="rgba(236, 72, 153, 0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
        
        {/* Central hub branches */}
        <motion.path d="M 65 25 C 90 25, 95 15, 115 15" fill="none" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1.5" />
        <motion.path d="M 65 25 C 90 25, 95 35, 115 35" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" />
        <motion.path d="M 65 75 C 90 75, 95 65, 115 65" fill="none" stroke="rgba(236, 72, 153, 0.3)" strokeWidth="1.5" />
        <motion.path d="M 65 75 C 90 75, 95 85, 115 85" fill="none" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1.5" />

        {/* Branching outputs to destination nodes */}
        <motion.path d="M 115 35 C 135 35, 140 25, 160 25" fill="none" stroke="rgba(168, 85, 247, 0.25)" strokeWidth="1.2" />
        <motion.path d="M 115 35 C 135 35, 140 45, 160 45" fill="none" stroke="rgba(59, 130, 246, 0.25)" strokeWidth="1.2" />
        <motion.path d="M 115 65 C 135 65, 140 55, 160 55" fill="none" stroke="rgba(236, 72, 153, 0.25)" strokeWidth="1.2" />
        <motion.path d="M 115 65 C 135 65, 140 75, 160 75" fill="none" stroke="rgba(16, 185, 129, 0.25)" strokeWidth="1.2" />
        
        {/* Pulsing spark particles traveling along paths */}
        <motion.path 
          d="M 25 50 C 45 50, 45 25, 65 25 C 90 25, 95 15, 115 15" 
          fill="none" stroke="url(#glowGrad1)" strokeWidth="2.5" strokeLinecap="round"
          animate={{ strokeDashoffset: [400, 0] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 4.5 }}
          strokeDasharray="20 180"
        />
        <motion.path 
          d="M 25 50 C 45 50, 45 75, 65 75 C 90 75, 95 65, 115 65 C 135 65, 140 55, 160 55" 
          fill="none" stroke="url(#glowGrad2)" strokeWidth="2.5" strokeLinecap="round"
          animate={{ strokeDashoffset: [400, 0] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5, delay: 1 }}
          strokeDasharray="25 175"
        />

        {/* Nodes (Glowing colored circles) */}
        {/* Source */}
        <circle cx="25" cy="50" r="8" fill="#38bdf8" className="animate-pulse" />
        <circle cx="25" cy="50" r="5" fill="#0284c7" />

        {/* Mid Hubs */}
        <circle cx="65" cy="25" r="5.5" fill="#c084fc" />
        <circle cx="65" cy="75" r="5.5" fill="#38bdf8" />
        <circle cx="65" cy="50" r="4" fill="#f472b6" />

        {/* Outer branching nodes */}
        <circle cx="115" cy="15" r="5" fill="#a855f7" />
        <circle cx="115" cy="35" r="5.5" fill="#3b82f6" />
        <circle cx="115" cy="65" r="5.5" fill="#ec4899" />
        <circle cx="115" cy="85" r="5" fill="#10b981" />

        {/* Destination end nodes */}
        <circle cx="160" cy="25" r="4" fill="#c084fc" />
        <circle cx="160" cy="45" r="4" fill="#38bdf8" />
        <circle cx="160" cy="55" r="4" fill="#f472b6" />
        <circle cx="160" cy="75" r="4" fill="#34d399" />

        <defs>
          <linearGradient id="glowGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="50%" stopColor="#c084fc" stopOpacity="1" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="glowGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="50%" stopColor="#f472b6" stopOpacity="1" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function SecurityGraphic() {
  return (
    <div className="w-full h-36 flex items-center justify-center mb-6 relative overflow-hidden rounded-2xl bg-white/[0.01]">
      <svg className="w-full h-full max-w-[200px]" viewBox="0 0 100 100">
        <FloatingShapes />
        {/* Layered circuit loops */}
        <motion.circle 
          cx="50" cy="50" r="38" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" 
          animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        />
        <motion.circle 
          cx="50" cy="50" r="30" fill="none" stroke="rgba(168, 85, 247, 0.2)" strokeWidth="1.5" strokeDasharray="15 8 5 8"
          animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
        
        {/* Shield outline */}
        <motion.path 
          d="M 50 25 C 58 25, 66 21, 66 21 C 66 38, 64 54, 50 63 C 36 54, 34 38, 34 21 C 34 21, 42 25, 50 25 Z"
          fill="url(#shieldGlow)" stroke="#3b82f6" strokeWidth="2.5"
          animate={{ filter: ["drop-shadow(0 0 3px rgba(59,130,246,0.3))", "drop-shadow(0 0 10px rgba(59,130,246,0.7))", "drop-shadow(0 0 3px rgba(59,130,246,0.3))"] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
        
        {/* Security nodes and paths inside */}
        <path d="M 50 32 L 50 52 M 42 42 L 58 42" stroke="rgba(168, 85, 247, 0.5)" strokeWidth="1.5" strokeDasharray="2 2" />
        <motion.circle cx="50" cy="42" r="5" fill="#ec4899" animate={{ scale: [0.9, 1.2, 0.9] }} transition={{ repeat: Infinity, duration: 2 }} />
        
        <defs>
          <radialGradient id="shieldGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function SEOGraphic() {
  return (
    <div className="w-full h-36 flex items-center justify-center mb-6 relative overflow-hidden rounded-2xl bg-white/[0.01]">
      <svg className="w-full h-full max-w-[200px]" viewBox="0 0 100 100">
        <FloatingShapes />
        <line x1="15" y1="80" x2="85" y2="80" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1="15" y1="80" x2="15" y2="20" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        
        {/* Main curved graph path representing ranking rise */}
        <motion.path 
          d="M 20 75 C 35 75, 40 45, 55 45 C 70 45, 75 25, 85 25" 
          fill="none" stroke="url(#seoGrad)" strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
        
        {/* Pulsing signal spark traveling along graph */}
        <motion.path 
          d="M 20 75 C 35 75, 40 45, 55 45 C 70 45, 75 25, 85 25" 
          fill="none" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round"
          animate={{ strokeDashoffset: [200, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          strokeDasharray="15 185"
        />

        {/* Target end point */}
        <motion.circle 
          cx="85" cy="25" r="6" fill="#ec4899"
          animate={{ scale: [1, 1.4, 1], filter: ["drop-shadow(0 0 2px #ec4899)", "drop-shadow(0 0 10px #ec4899)", "drop-shadow(0 0 2px #ec4899)"] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <circle cx="20" cy="75" r="4" fill="#3b82f6" />
        <circle cx="55" cy="45" r="4.5" fill="#a855f7" />
        
        <defs>
          <linearGradient id="seoGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MarketingGraphic() {
  return (
    <div className="w-full h-36 flex items-center justify-center mb-6 relative overflow-hidden rounded-2xl bg-white/[0.01]">
      <svg className="w-full h-full max-w-[280px]" viewBox="0 0 200 100">
        <FloatingShapes />
        {/* Funnel structure with multiple active node tracks */}
        <ellipse cx="100" cy="20" rx="60" ry="12" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1.5" />
        <ellipse cx="100" cy="45" rx="38" ry="8" fill="none" stroke="rgba(168, 85, 247, 0.25)" strokeWidth="1.5" />
        <ellipse cx="100" cy="70" rx="16" ry="4" fill="none" stroke="rgba(236, 72, 153, 0.5)" strokeWidth="2" className="animate-pulse" />
        
        {/* Funnel boundary lines */}
        <line x1="40" y1="20" x2="84" y2="70" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
        <line x1="160" y1="20" x2="116" y2="70" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
        
        {/* Incoming leads routing down */}
        <motion.circle 
          cx="100" cy="12" r="3.5" fill="#3b82f6" 
          animate={{ y: [0, 58], opacity: [1, 0.8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
        <motion.circle 
          cx="70" cy="18" r="3" fill="#a855f7" 
          animate={{ y: [0, 52], x: [70, 92], opacity: [1, 0.8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, delay: 0.4, ease: "linear" }}
        />
        <motion.circle 
          cx="130" cy="18" r="3" fill="#ec4899" 
          animate={{ y: [0, 52], x: [130, 108], opacity: [1, 0.8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, delay: 0.8, ease: "linear" }}
        />
      </svg>
    </div>
  );
}

const features = [
  { title: "Agentic Workflows", desc: "Our AI agents operate 24/7, automating repetitive tasks and streamlining your business operations effortlessly.", colSpan: "md:col-span-2", graphic: <WorkflowGraphic /> },
  { title: "Secure AI Integration", desc: "Military-grade cybersecurity layered over custom AI integrations to safeguard your sensitive business data.", colSpan: "md:col-span-1", graphic: <SecurityGraphic /> },
  { title: "Intelligent SEO", desc: "Automate content strategy and ranking optimization with our proprietary NLP algorithms.", colSpan: "md:col-span-1", graphic: <SEOGraphic /> },
  { title: "Smart Marketing", desc: "Traditional digital services amplified by machine learning for predictive ROI and targeted lead generation.", colSpan: "md:col-span-2", graphic: <MarketingGraphic /> },
];

export default function Features() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-8 py-20 z-10">
      <div className="text-center mb-16">
        <h2 className="font-general text-[40px] md:text-[64px] leading-tight font-medium mb-6">
          Automate your <span className="text-transparent bg-clip-text bg-gradient-to-r from-wumify-cyan to-wumify-purple">Everything</span>
        </h2>
        <p className="text-hero-sub text-lg max-w-2xl mx-auto opacity-80">
          We don't just build websites. We deploy intelligent systems that give you your time back. Experience the evolution of digital services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`liquid-glass rounded-3xl p-8 flex flex-col justify-between min-h-[340px] ${feature.colSpan}`}
          >
            {feature.graphic}
            <div>
              <h3 className="font-general text-2xl font-medium text-foreground mb-3">{feature.title}</h3>
              <p className="text-foreground/70 text-base">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
