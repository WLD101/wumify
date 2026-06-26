import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <div className="w-full border-t border-white/10 bg-background relative z-20 mt-auto">
      <footer className="max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row justify-between text-left">
        <div className="mb-10 md:mb-0 max-w-sm">
          <div className="flex items-center mb-6 w-fit">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <p className="text-foreground/60 mb-8">
            The next generation of AI automation. We give businesses their time back through intelligent systems.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-16">
          <div>
            <h4 className="font-general text-lg font-medium mb-4 text-white">Offices</h4>
            <div className="text-foreground/60 text-sm space-y-4">
              <div>
                <strong className="text-white">UK Office</strong>
                <p>61 Mosley Street<br />Manchester, M2 3HZ<br />England</p>
              </div>
              <div>
                <strong className="text-white">USA Office</strong>
                <p>54 State Street, STE 804<br />Albany, NY 12207<br />USA</p>
              </div>
            </div>
          </div>
          
          <div className="flex gap-12 md:gap-16">
            <div>
              <h4 className="font-general text-lg font-medium mb-4 text-white">Company</h4>
              <div className="text-foreground/60 text-sm flex flex-col space-y-2">
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
                <Link to="/blogs" className="hover:text-white transition-colors">Insights & Blogs</Link>
                <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </div>
            </div>

            <div>
              <h4 className="font-general text-lg font-medium mb-4 text-white">Legal</h4>
              <div className="text-foreground/60 text-sm flex flex-col space-y-2">
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
                <Link to="/uk-gdpr" className="hover:text-white transition-colors">UK GDPR</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <div className="w-full max-w-7xl mx-auto pb-12 text-center text-sm text-foreground/40">
        <p>© 2026 Wumify. All rights reserved.</p>
      </div>
    </div>
  );
}
