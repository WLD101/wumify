import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const jobs = [
  {
    role: "Lead AI Systems Engineer",
    type: "Full-Time",
    location: "Manchester (Hybrid) / Albany",
    desc: "Architect agentic workflows, orchestrate tool calls with n8n/Python, and integrate security filters for enterprise clients."
  },
  {
    role: "Cybersecurity Analyst & Penetration Tester",
    type: "Full-Time",
    location: "Manchester (Hybrid)",
    desc: "Perform vulnerability scans, audit automation integrations, and implement military-grade protection for customer portals."
  },
  {
    role: "Senior React & Tailwind Developer",
    type: "Full-Time / Contract",
    location: "Remote (UK / US)",
    desc: "Build gorgeous, responsive web interfaces, implement micro-interactions with Framer Motion, and design layouts."
  }
];

export default function Careers() {
  return (
    <div className="w-full py-20 px-4 md:px-8 z-10 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-6 flex items-center gap-2 px-3 py-1 rounded-full border border-wumify-purple/30 bg-wumify-purple/10 backdrop-blur w-fit mx-auto text-[11px] font-bold text-white tracking-wider uppercase select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] animate-pulse" />
            Join Wumify
          </div>
          <h1 className="font-general text-4xl md:text-6xl font-medium tracking-tight mb-4 text-white">Build the Automated Future</h1>
          <p className="text-foreground/50 max-w-lg mx-auto text-sm">We are always searching for brilliant automators, security engineers, and digital builders.</p>
        </div>

        <div className="space-y-6">
          {jobs.map((job, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="liquid-glass border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            >
              <div>
                <div className="flex gap-2 items-center mb-2">
                  <span className="bg-wumify-purple/20 text-wumify-purple text-xs font-semibold px-2.5 py-0.5 rounded-full">{job.type}</span>
                  <span className="text-xs text-foreground/50">{job.location}</span>
                </div>
                <h2 className="text-xl font-general font-medium text-white mb-2">{job.role}</h2>
                <p className="text-sm text-foreground/60 leading-relaxed max-w-xl">{job.desc}</p>
              </div>
              <Link to="/contact" className="hero-secondary-btn py-2 px-6 rounded-full text-white text-sm shrink-0">
                Apply Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
