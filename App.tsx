
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
// Added missing ArrowRight import from lucide-react
import { ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Solutions from './components/Solutions';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import PricingPage from './components/PricingPage';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import SalesAgent from './components/SalesAgent';
import FloatingAgentButton from './components/FloatingAgentButton';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'pricing'>('home');
  const [isAgentOpen, setIsAgentOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleNavigate = (e: any) => {
      setView(e.detail.view);
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('navigate', handleNavigate);
    window.addEventListener('open-sales-agent', () => setIsAgentOpen(true));
    
    return () => {
      window.removeEventListener('navigate', handleNavigate);
      window.removeEventListener('open-sales-agent', () => setIsAgentOpen(true));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-blue-600/10 selection:text-blue-700 overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[110] origin-left" style={{ scaleX }} />
      
      <Navbar onOpenAgent={() => setIsAgentOpen(true)} onViewChange={setView} currentView={view} />
      
      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Hero onOpenAgent={() => setIsAgentOpen(true)} />
            
            <section className="py-32 border-y border-slate-100 bg-white overflow-hidden relative">
               <div className="absolute inset-0 bg-slate-50/50 -skew-y-2 origin-left"></div>
              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-16">High Performance Engineering Network</p>
                <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                  <span className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Utility<span className="text-blue-600">Force</span></span>
                  <span className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Admin<span className="text-blue-600">Core</span></span>
                  <span className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Measure<span className="text-blue-600">Engine</span></span>
                  <span className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Water<span className="text-blue-600">Logic</span></span>
                </div>
              </div>
            </section>

            <Problems />
            <Solutions />
            <Features />
            <Testimonials />
            
            <section className="py-40 bg-slate-900 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>
               <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                  <span className="text-blue-400 font-black uppercase tracking-[0.4em] text-xs mb-8 block">Ready for Enterprise Deployment?</span>
                  <h3 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-none italic uppercase">Escalabilidade<br/>Sem Fricção.</h3>
                  <button 
                    onClick={() => setIsAgentOpen(true)}
                    className="group bg-blue-600 text-white px-16 py-8 rounded-full font-black text-2xl flex items-center gap-6 mx-auto hover:bg-white hover:text-slate-900 transition-all duration-500 shadow-2xl"
                  >
                    DEPLOY PILOT 01
                    <ArrowRight size={32} className="group-hover:translate-x-4 transition-transform duration-500" />
                  </button>
               </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="pricing"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <PricingPage />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <StickyCTA />
      
      <FloatingAgentButton onClick={() => setIsAgentOpen(true)} />
      <SalesAgent isOpen={isAgentOpen} onClose={() => setIsAgentOpen(false)} />
    </div>
  );
};

export default App;
