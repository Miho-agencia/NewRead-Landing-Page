
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    const isScrollingDown = latest > previous;
    const isPastHalf = scrollYProgress.get() > 0.5;

    // Aparece após 50% se estiver descendo, desaparece se subir
    if (isPastHalf && isScrollingDown) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const handleAction = () => {
    // Se estiver na home, vai para preços, se não, abre o agente
    const pricingSection = document.getElementById('precos');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.dispatchEvent(new CustomEvent('open-sales-agent'));
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-[80] p-4 md:p-6"
        >
          <div className="max-w-5xl mx-auto">
            <div className="bg-slate-900/95 backdrop-blur-2xl border border-white/10 shadow-[0_-20px_50px_rgba(0,123,255,0.15)] rounded-[2rem] p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 overflow-hidden relative group">
              {/* Decorative background element */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-transparent opacity-50 pointer-events-none"></div>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 shrink-0 hidden sm:flex">
                  <Zap size={24} fill="currentColor" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-white font-black text-lg md:text-xl tracking-tighter leading-tight">
                    Pronto para otimizar sua <span className="text-blue-400">gestão de utilities?</span>
                  </h4>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1 opacity-70">
                    Tecnologia Enterprise. Resultados Reais.
                  </p>
                </div>
              </div>
              
              <button 
                onClick={handleAction}
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/20 group/btn relative z-10"
              >
                Agendar Demonstração
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
