import React, { useRef, useEffect, useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './Footer';
import Logo from './Logo';

const VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4";

export default function Layout() {
  const videoRef = useRef(null);
  const [videoOpacity, setVideoOpacity] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animationFrameId;
    
    video.play().then(() => {
      setVideoOpacity(1);
    }).catch(err => {
      console.log("Video auto-play blocked: ", err);
    });

    const checkTime = () => {
      if (video.duration) {
        const timeLeft = video.duration - video.currentTime;
        if (timeLeft <= 0.5 && timeLeft > 0) {
          setVideoOpacity(0);
        }
      }
      animationFrameId = requestAnimationFrame(checkTime);
    };

    const handleEnded = () => {
      setVideoOpacity(0);
      setTimeout(() => {
        video.currentTime = 0;
        video.play().then(() => {
          setVideoOpacity(1);
        }).catch(err => {
          console.log("Video replay error: ", err);
        });
      }, 100);
    };

    video.addEventListener('ended', handleEnded);
    animationFrameId = requestAnimationFrame(checkTime);

    return () => {
      video.removeEventListener('ended', handleEnded);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-background font-geist text-foreground flex flex-col overflow-x-hidden">
      {/* LAYER 0: Video Background */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">
        <video
          ref={videoRef}
          src={VIDEO_URL}
          muted
          playsInline
          className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
          style={{ opacity: videoOpacity }}
        />
      </div>

      {/* LAYER 1: Blurred Vignette Shape */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[984px] h-[527px] bg-gray-950/90 blur-[82px] rounded-full pointer-events-none z-1" />

      {/* LAYER 2: Foreground Container */}
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        
        {/* LAYER 3: Navbar */}
        <header className="z-30 w-full relative">
          <div className="py-5 px-8 flex justify-between items-center max-w-7xl mx-auto w-full">
            <Link to="/">
              <Logo />
            </Link>
            
            <nav className="hidden md:flex items-center gap-8 text-foreground/80">
              <div 
                className="relative py-2 cursor-pointer"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center gap-1 hover:text-white transition-colors">
                  <span className="text-[14px] font-medium">Services</span>
                  <iconify-icon icon="solar:alt-arrow-down-linear" width="16" height="16" />
                </div>
                
                {/* Services Dropdown Panel */}
                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] bg-zinc-950/95 border border-white/15 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-3xl flex gap-8 text-left z-50"
                    >
                      <div className="flex-1">
                        <h4 className="text-[11px] font-semibold tracking-wider text-foreground/40 uppercase mb-4">Our Expertise</h4>
                        <div className="space-y-4">
                          <Link 
                            to="/services/n8n" 
                            onClick={() => setActiveDropdown(null)}
                            className="flex gap-3 items-start group cursor-pointer"
                          >
                            <div className="liquid-glass w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 text-wumify-purple group-hover:bg-wumify-purple/10 transition-colors">
                              <iconify-icon icon="simple-icons:n8n" width="18" height="18" />
                            </div>
                            <div>
                              <h5 className="text-[14px] font-medium text-white group-hover:text-wumify-purple transition-colors">n8n Workflow Automation</h5>
                              <p className="text-[12px] text-foreground/60 leading-tight">End-to-end custom business process automation</p>
                            </div>
                          </Link>
                          
                          <Link 
                            to="/services/custom-apps" 
                            onClick={() => setActiveDropdown(null)}
                            className="flex gap-3 items-start group cursor-pointer"
                          >
                            <div className="liquid-glass w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 text-wumify-purple group-hover:bg-wumify-purple/10 transition-colors">
                              <iconify-icon icon="solar:widget-linear" width="18" height="18" />
                            </div>
                            <div>
                              <h5 className="text-[14px] font-medium text-white group-hover:text-wumify-purple transition-colors">Custom App Development</h5>
                              <p className="text-[12px] text-foreground/60 leading-tight">Build custom business apps, integrations & internal tools</p>
                            </div>
                          </Link>

                          <Link 
                            to="/services/ai-integration" 
                            onClick={() => setActiveDropdown(null)}
                            className="flex gap-3 items-start group cursor-pointer"
                          >
                            <div className="liquid-glass w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 text-wumify-purple group-hover:bg-wumify-purple/10 transition-colors">
                              <iconify-icon icon="solar:cpu-linear" width="18" height="18" />
                            </div>
                            <div>
                              <h5 className="text-[14px] font-medium text-white group-hover:text-wumify-purple transition-colors">AI Integration</h5>
                              <p className="text-[12px] text-foreground/60 leading-tight">Add AI capabilities to existing business systems</p>
                            </div>
                          </Link>

                          <Link 
                            to="/services/ai-strategy" 
                            onClick={() => setActiveDropdown(null)}
                            className="flex gap-3 items-start group cursor-pointer"
                          >
                            <div className="liquid-glass w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 text-wumify-purple group-hover:bg-wumify-purple/10 transition-colors">
                              <iconify-icon icon="solar:presentation-graph-linear" width="18" height="18" />
                            </div>
                            <div>
                              <h5 className="text-[14px] font-medium text-white group-hover:text-wumify-purple transition-colors">AI Consulting & Strategy</h5>
                              <p className="text-[12px] text-foreground/60 leading-tight">Expert strategic guidance on AI automation</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="w-[200px] border-l border-white/10 pl-6 flex flex-col justify-between">
                        <div>
                          <h4 className="text-[11px] font-semibold tracking-wider text-foreground/40 uppercase mb-4">Why Wumify?</h4>
                          <div className="space-y-3">
                            <div>
                              <span className="block text-lg font-bold text-white leading-none">20+</span>
                              <span className="text-[11px] text-foreground/60">UK Businesses</span>
                            </div>
                            <div>
                              <span className="block text-lg font-bold text-white leading-none">4X</span>
                              <span className="text-[11px] text-foreground/60">Avg. ROI</span>
                            </div>
                            <div>
                              <span className="block text-lg font-bold text-white leading-none">2,500+</span>
                              <span className="text-[11px] text-foreground/60">Hours Reclaimed</span>
                            </div>
                          </div>
                        </div>
                        <button 
                          onClick={() => navigate('/contact')}
                          className="mt-6 w-full text-center text-[12px] font-medium hero-secondary-btn py-2 px-3 rounded-lg text-white"
                        >
                          Book Free Consultation
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div 
                className="relative py-2 cursor-pointer"
                onMouseEnter={() => setActiveDropdown('solutions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center gap-1 hover:text-white transition-colors">
                  <span className="text-[14px] font-medium">Solutions</span>
                  <iconify-icon icon="solar:alt-arrow-down-linear" width="16" height="16" />
                </div>
                
                {/* Solutions Dropdown Panel */}
                <AnimatePresence>
                  {activeDropdown === 'solutions' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-zinc-950/95 border border-white/15 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-3xl flex gap-8 text-left z-50"
                    >
                      <div className="flex-1">
                        <h4 className="text-[11px] font-semibold tracking-wider text-foreground/40 uppercase mb-4">By Use Case</h4>
                        <div className="space-y-4">
                          <Link 
                            to="/solutions/voice-agents" 
                            onClick={() => setActiveDropdown(null)}
                            className="flex gap-3 items-center group cursor-pointer"
                          >
                            <div className="text-wumify-purple"><iconify-icon icon="solar:phone-calling-linear" width="18" height="18" /></div>
                            <div>
                              <h5 className="text-[13px] font-medium text-white group-hover:text-wumify-purple transition-colors">AI Voice Agents</h5>
                              <p className="text-[11px] text-foreground/50">Human-like AI phone agents at scale, 24/7</p>
                            </div>
                          </Link>
                          
                          <Link 
                            to="/solutions/sms" 
                            onClick={() => setActiveDropdown(null)}
                            className="flex gap-3 items-center group cursor-pointer"
                          >
                            <div className="text-wumify-purple"><iconify-icon icon="solar:letter-linear" width="18" height="18" /></div>
                            <div>
                              <h5 className="text-[13px] font-medium text-white group-hover:text-wumify-purple transition-colors">SMS Automation</h5>
                              <p className="text-[11px] text-foreground/50">Speed to lead AI texting that books customers</p>
                            </div>
                          </Link>

                          <Link 
                            to="/solutions/whatsapp" 
                            onClick={() => setActiveDropdown(null)}
                            className="flex gap-3 items-center group cursor-pointer"
                          >
                            <div className="text-wumify-purple"><iconify-icon icon="solar:chat-line-linear" width="18" height="18" /></div>
                            <div>
                              <h5 className="text-[13px] font-medium text-white group-hover:text-wumify-purple transition-colors">WhatsApp Chatbots</h5>
                              <p className="text-[11px] text-foreground/50">Automate customer conversations via chat</p>
                            </div>
                          </Link>

                          <Link 
                            to="/solutions/crm" 
                            onClick={() => setActiveDropdown(null)}
                            className="flex gap-3 items-center group cursor-pointer"
                          >
                            <div className="text-wumify-purple"><iconify-icon icon="solar:database-linear" width="18" height="18" /></div>
                            <div>
                              <h5 className="text-[13px] font-medium text-white group-hover:text-wumify-purple transition-colors">CRM Integrations</h5>
                              <p className="text-[11px] text-foreground/50">Sync data clearly across your business</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="w-[180px] border-l border-white/10 pl-6">
                        <h4 className="text-[11px] font-semibold tracking-wider text-foreground/40 uppercase mb-4">By Industry</h4>
                        <ul className="space-y-3 text-[13px] text-foreground/70">
                          <li className="hover:text-white transition-colors cursor-pointer">Trades & Home Services</li>
                          <li className="hover:text-white transition-colors cursor-pointer">Property & Real Estate</li>
                          <li className="hover:text-white transition-colors cursor-pointer">Construction & Engineering</li>
                          <li className="hover:text-white transition-colors cursor-pointer">Marketing Agencies</li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/about" className="text-[14px] font-medium hover:text-white transition-colors">About</Link>
              
              <div 
                className="relative py-2 cursor-pointer"
                onMouseEnter={() => setActiveDropdown('resources')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center gap-1 hover:text-white transition-colors">
                  <span className="text-[14px] font-medium">Resources</span>
                  <iconify-icon icon="solar:alt-arrow-down-linear" width="16" height="16" />
                </div>
                
                {/* Resources Dropdown Panel */}
                <AnimatePresence>
                  {activeDropdown === 'resources' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[440px] bg-zinc-950/95 border border-white/15 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-3xl flex gap-8 text-left z-50"
                    >
                      <div className="flex-1">
                        <h4 className="text-[11px] font-semibold tracking-wider text-foreground/40 uppercase mb-4">Learn & Explore</h4>
                        <div className="space-y-4">
                          <Link to="/blogs" className="flex gap-3 items-center group">
                            <div className="text-wumify-purple"><iconify-icon icon="solar:document-text-linear" width="18" height="18" /></div>
                            <div>
                              <h5 className="text-[13px] font-medium text-white group-hover:text-wumify-purple transition-colors">Blog</h5>
                              <p className="text-[11px] text-foreground/50">Latest insights on AI automation</p>
                            </div>
                          </Link>
                          <div className="flex gap-3 items-center group">
                            <div className="text-wumify-purple"><iconify-icon icon="solar:notebook-linear" width="18" height="18" /></div>
                            <div>
                              <h5 className="text-[13px] font-medium text-white group-hover:text-wumify-purple transition-colors">AI Guides</h5>
                              <p className="text-[11px] text-foreground/50">Downloadable guides & resources</p>
                            </div>
                          </div>
                          <div className="flex gap-3 items-center group">
                            <div className="text-wumify-purple"><iconify-icon icon="solar:calendar-date-linear" width="18" height="18" /></div>
                            <div>
                              <h5 className="text-[13px] font-medium text-white group-hover:text-wumify-purple transition-colors">AI Events</h5>
                              <p className="text-[11px] text-foreground/50">Webinars, workshops & meetups</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[160px] border-l border-white/10 pl-6">
                        <h4 className="text-[11px] font-semibold tracking-wider text-foreground/40 uppercase mb-4">AI Readiness</h4>
                        <div className="group cursor-pointer">
                          <div className="text-wumify-purple mb-1"><iconify-icon icon="solar:checklist-linear" width="18" height="18" /></div>
                          <h5 className="text-[13px] font-medium text-white group-hover:text-wumify-purple transition-colors">Assessment</h5>
                          <p className="text-[11px] text-foreground/50">Assess your AI opportunity</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/blogs" className="text-[14px] font-medium hover:text-white transition-colors">Blogs</Link>
              <Link to="/careers" className="text-[14px] font-medium hover:text-white transition-colors">Careers</Link>
            </nav>
            
            <div>
              <Link 
                to="/contact" 
                className="text-[14px] font-medium hero-secondary-btn rounded-full px-6 py-2 inline-block text-white"
              >
                Book Consultation
              </Link>
            </div>
          </div>
          {/* Divider offset exactly 3px */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent mt-[3px]" />
        </header>

        {/* Page Content */}
        <main className="flex-1 w-full flex flex-col relative z-10">
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
