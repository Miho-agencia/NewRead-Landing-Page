
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const scrollPercent = (currentScrollY / (fullHeight - windowHeight)) * 100;

      // Logic: Appear after 50% scroll AND scrolling down
      if (scrollPercent > 50 && currentScrollY > lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY || scrollPercent <= 50) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToPricing = () => {
    document.getElementById('precos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-[60] p-6 transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-900/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[32px] p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
          {/* Brand Accent Line */}
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#007BFF]"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500/5 blur-3xl pointer-events-none"></div>
          
          <div className="text-center md:text-left">
            <h4 className="text-white font-black text-xl md:text-2xl tracking-tighter leading-tight">
              Pronto para otimizar sua <span className="text-[#FFB35B]">gestão de utilities?</span>
            </h4>
            <p className="text-slate-400 text-sm font-medium mt-1">
              Escalabilidade e precisão cirúrgica para sua empresa de medição.
            </p>
          </div>
          
          <button 
            onClick={scrollToPricing}
            className="bg-[#007BFF] hover:bg-[#0069d9] text-white px-10 py-4 rounded-2xl font-black text-lg flex items-center gap-3 transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap shadow-xl shadow-blue-500/30"
          >
            Solicitar Demonstração
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
