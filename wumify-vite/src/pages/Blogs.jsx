import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: "Securing AI Agents: The Next Frontier in Cybersecurity",
    desc: "As autonomous agentic workflows handle sensitive data, securing LLM prompts, tool integrations, and file access is paramount. Learn how Wumify implements security protocols.",
    date: "June 15, 2026",
    readTime: "5 min read",
    author: "James Vance, Chief of Security"
  },
  {
    title: "How n8n & Make Are Revolutionizing UK SMBs",
    desc: "Discover how Manchester businesses are reclaiming over 20 hours a week by automating customer support routing, lead scoring, and automated PDF generating.",
    date: "May 28, 2026",
    readTime: "7 min read",
    author: "Sarah Jenkins, Lead Automator"
  },
  {
    title: "Traditional Digital Marketing is Dead. Enter Agentic Campaigns.",
    desc: "Predictive campaign builders driven by machine learning yield up to 4x higher conversions. Explore how we supercharge digital ads.",
    date: "May 10, 2026",
    readTime: "4 min read",
    author: "Richard Cole, Digital Lead"
  }
];

export default function Blogs() {
  return (
    <div className="w-full py-20 px-4 md:px-8 z-10 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-general text-4xl md:text-6xl font-medium tracking-tight mb-4 text-white">Insights & Strategy</h1>
          <p className="text-foreground/50 max-w-lg mx-auto text-sm">Deep dives on AI automation, cybersecurity engineering, and high-performance digital services.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="liquid-glass border border-white/10 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] text-wumify-purple font-semibold tracking-wider uppercase mb-2 block">{post.date}</span>
                <h2 className="text-xl font-general font-medium text-white mb-3 hover:text-wumify-purple transition-colors cursor-pointer">{post.title}</h2>
                <p className="text-sm text-foreground/60 leading-relaxed mb-6">{post.desc}</p>
              </div>
              <div className="border-t border-white/10 pt-4 flex justify-between items-center text-xs text-foreground/40">
                <span>By {post.author}</span>
                <span>{post.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
