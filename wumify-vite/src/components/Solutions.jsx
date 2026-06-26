import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// A helper for floating geometric shapes
function FloatingShapes() {
  return (
    <>
      <motion.polygon 
        points="10,12 14,18 6,18" fill="none" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="0.8"
        animate={{ y: [0, -6, 0], rotate: 360 }} transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      />
      <motion.rect 
        x="82" y="10" width="5" height="5" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.8"
        animate={{ y: [0, 6, 0], rotate: 45 }} transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      />
      <motion.circle 
        cx="78" cy="80" r="2.5" fill="none" stroke="rgba(236, 72, 153, 0.3)" strokeWidth="0.8"
        animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 4 }}
      />
    </>
  );
}

function SupportBotGraphic() {
  return (
    <div className="w-full h-36 flex items-center justify-center my-4 relative overflow-hidden bg-white/[0.01] rounded-2xl">
      <svg className="w-full h-full max-w-[200px]" viewBox="0 0 100 100">
        <FloatingShapes />
        {/* Chatbot Core Grid */}
        <motion.circle 
          cx="50" cy="50" r="24" fill="none" stroke="rgba(59,130,246,0.2)" strokeWidth="1.5" 
          animate={{ strokeDashoffset: [0, 20] }} strokeDasharray="5 3" transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
        />
        {/* Central Chatbot Node */}
        <motion.rect 
          x="38" y="38" width="24" height="24" rx="6" fill="url(#botGlow)" stroke="#3b82f6" strokeWidth="2"
          animate={{ filter: ["drop-shadow(0 0 2px #3b82f6)", "drop-shadow(0 0 6px #3b82f6)", "drop-shadow(0 0 2px #3b82f6)"] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        />
        {/* Antenna */}
        <line x1="50" y1="38" x2="50" y2="30" stroke="#3b82f6" strokeWidth="2" />
        <circle cx="50" cy="27" r="2.5" fill="#a855f7" />
        
        {/* Satellite Client Nodes */}
        <motion.path d="M 50 38 Q 30 25, 20 30" fill="none" stroke="rgba(168,85,247,0.3)" strokeWidth="1" />
        <motion.path d="M 50 62 Q 30 75, 20 70" fill="none" stroke="rgba(236,72,153,0.3)" strokeWidth="1" />
        <motion.path d="M 62 50 Q 80 40, 80 50" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />

        {/* Floating Sparks */}
        <motion.circle cx="20" cy="30" r="3.5" fill="#a855f7" />
        <motion.circle cx="20" cy="70" r="3.5" fill="#ec4899" />
        <motion.circle cx="80" cy="50" r="3" fill="#10b981" />
        
        <defs>
          <radialGradient id="botGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function SalesRepGraphic() {
  return (
    <div className="w-full h-36 flex items-center justify-center my-4 relative overflow-hidden bg-white/[0.01] rounded-2xl">
      <svg className="w-full h-full max-w-[200px]" viewBox="0 0 100 100">
        <FloatingShapes />
        {/* Branching Outreach Network */}
        <motion.path d="M 15 50 C 35 50, 35 25, 55 25" fill="none" stroke="rgba(168,85,247,0.3)" strokeWidth="1.5" />
        <motion.path d="M 15 50 C 35 50, 35 75, 55 75" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" />
        
        <motion.path d="M 55 25 Q 75 15, 85 15" fill="none" stroke="rgba(236,72,153,0.25)" strokeWidth="1.2" />
        <motion.path d="M 55 25 Q 75 35, 85 35" fill="none" stroke="rgba(168,85,247,0.25)" strokeWidth="1.2" />
        
        {/* Traveling Spark */}
        <motion.path 
          d="M 15 50 C 35 50, 35 25, 55 25 Q 75 35, 85 35" 
          fill="none" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round"
          animate={{ strokeDashoffset: [200, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
          strokeDasharray="15 185"
        />

        {/* Nodes */}
        <circle cx="15" cy="50" r="6.5" fill="#3b82f6" />
        <circle cx="55" cy="25" r="5" fill="#a855f7" />
        <circle cx="55" cy="75" r="5" fill="#ec4899" />
        <circle cx="85" cy="15" r="4" fill="#10b981" />
        <circle cx="85" cy="35" r="4" fill="#a855f7" />
      </svg>
    </div>
  );
}

function WorkflowGraphicSolutions() {
  return (
    <div className="w-full h-36 flex items-center justify-center my-4 relative overflow-hidden bg-white/[0.01] rounded-2xl">
      <svg className="w-full h-full max-w-[200px]" viewBox="0 0 100 100">
        <FloatingShapes />
        {/* Visual node circuitry */}
        <motion.path d="M 15 30 L 45 30 C 55 30, 55 70, 65 70 L 85 70" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" />
        <motion.path d="M 15 70 L 45 70 C 55 70, 55 30, 65 30 L 85 30" fill="none" stroke="rgba(168,85,247,0.3)" strokeWidth="1.5" />
        
        {/* Pulsing spark paths */}
        <motion.path 
          d="M 15 30 L 45 30 C 55 30, 55 70, 65 70 L 85 70" 
          fill="none" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round"
          animate={{ strokeDashoffset: [200, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          strokeDasharray="15 185"
        />
        
        {/* End Node terminals */}
        <circle cx="15" cy="30" r="5.5" fill="#3b82f6" />
        <circle cx="15" cy="70" r="5.5" fill="#a855f7" />
        <circle cx="85" cy="30" r="4.5" fill="#ec4899" />
        <circle cx="85" cy="70" r="4.5" fill="#10b981" />
        
        <circle cx="45" cy="30" r="3" fill="#ffffff" />
        <circle cx="45" cy="70" r="3" fill="#ffffff" />
      </svg>
    </div>
  );
}

function AnalyticsGraphic() {
  return (
    <div className="w-full h-36 flex items-center justify-center my-4 relative overflow-hidden bg-white/[0.01] rounded-2xl">
      <svg className="w-full h-full max-w-[200px]" viewBox="0 0 100 100">
        <FloatingShapes />
        {/* Graph grids */}
        <line x1="15" y1="80" x2="85" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
        <line x1="15" y1="80" x2="15" y2="20" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
        
        {/* Glowing bars */}
        <motion.rect x="25" y="52" width="7" height="28" fill="#3b82f6" rx="1.5" animate={{ height: [18, 32, 18], y: [62, 48, 62] }} transition={{ repeat: Infinity, duration: 2.8 }} />
        <motion.rect x="42" y="38" width="7" height="42" fill="#a855f7" rx="1.5" animate={{ height: [28, 48, 28], y: [52, 32, 52] }} transition={{ repeat: Infinity, duration: 2.8, delay: 0.4 }} />
        <motion.rect x="59" y="25" width="7" height="55" fill="#ec4899" rx="1.5" animate={{ height: [38, 62, 38], y: [42, 18, 42] }} transition={{ repeat: Infinity, duration: 2.8, delay: 0.8 }} />

        {/* Prediction curve indicator */}
        <motion.path 
          d="M 20 62 Q 40 45, 60 28 T 85 18" 
          fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round"
          animate={{ pathLength: [0, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }}
        />
        <motion.circle cx="85" cy="18" r="4.5" fill="#10b981" animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 2 }} />
      </svg>
    </div>
  );
}

const solutions = [
  { id: 1, text: "Customer Support Bots", label: "Provide 24/7 instant resolutions with highly-trained LLM agents.", graphic: <SupportBotGraphic /> },
  { id: 2, text: "AI Sales Representatives", label: "Automate outbound outreach and inbound qualification.", graphic: <SalesRepGraphic /> },
  { id: 3, text: "Automated Workflows", label: "Eliminate manual data entry and connect disconnected apps.", graphic: <WorkflowGraphicSolutions /> },
  { id: 4, text: "Predictive Analytics", label: "Turn raw data into actionable business intelligence instantly.", graphic: <AnalyticsGraphic /> }
];

export default function Solutions() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);

  return (
    <section ref={targetRef} className="relative h-[130vh] w-full z-10">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-general text-[40px] md:text-[64px] leading-tight font-medium">
              Transformative <span className="text-transparent bg-clip-text bg-gradient-to-l from-wumify-purple to-wumify-blue">Solutions</span>
            </h2>
          </motion.div>
          
          <motion.div style={{ x }} className="flex gap-8 w-max">
            {solutions.map((item) => (
              <div 
                key={item.id} 
                className="liquid-glass rounded-[40px] w-[400px] h-[520px] p-8 flex flex-col justify-between shrink-0 hover:bg-white/10 transition-colors duration-500"
              >
                <div className="flex justify-between items-center w-full">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-foreground font-medium">
                    0{item.id}
                  </div>
                </div>
                
                {item.graphic}
                
                <div>
                  <h3 className="font-general text-2xl font-medium text-foreground mb-3">{item.text}</h3>
                  <p className="text-foreground/75 text-base">{item.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
