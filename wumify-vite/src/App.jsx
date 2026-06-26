import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import UKGDPR from './pages/UKGDPR';
import N8nService from './pages/n8n';
import CustomApps from './pages/CustomApps';
import AIIntegration from './pages/AIIntegration';
import AIStrategy from './pages/AIStrategy';
import VoiceAgents from './pages/VoiceAgents';
import SMSAutomation from './pages/SMSAutomation';
import WhatsAppChatbots from './pages/WhatsAppChatbots';
import CRMIntegrations from './pages/CRMIntegrations';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
          <Route path="uk-gdpr" element={<UKGDPR />} />
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services/n8n" element={<N8nService />} />
          <Route path="services/custom-apps" element={<CustomApps />} />
          <Route path="services/ai-integration" element={<AIIntegration />} />
          <Route path="services/ai-strategy" element={<AIStrategy />} />
          <Route path="solutions/voice-agents" element={<VoiceAgents />} />
          <Route path="solutions/sms" element={<SMSAutomation />} />
          <Route path="solutions/whatsapp" element={<WhatsAppChatbots />} />
          <Route path="solutions/crm" element={<CRMIntegrations />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
