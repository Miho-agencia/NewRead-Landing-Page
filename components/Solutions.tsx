
import React, { useRef, useState } from 'react';
import { PILLARS } from '../constants';
import { CheckCircle2, ArrowRight, Users, Smartphone, BarChart3 } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import AppMockup from './AppMockup';
import ReaderAppMockup from './ReaderAppMockup';
import ManagerDashboardMockup from './ManagerDashboardMockup';
import TelemetryOverlay from './TelemetryOverlay';

const SolutionItem: React.FC<{ pillar: any, index: number, activeCategory: string }> = ({ pillar, index, activeCategory }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  // Se a categoria ativa não for 'all', destaca apenas o pilar correspondente
  const isRelevant = activeCategory === 'all' || 
                   (activeCategory === 'administradoras' && pillar.id === 'resident') ||
                   (activeCategory === 'leituristas' && pillar.id === 'reader') ||
                   (activeCategory === 'utilities' && pillar.id === 'manager');

  return (
    <div ref={ref} className={`min-h-[80vh] flex items-center py-24 md:py-32 lg:py-48 border-b border-slate-100 last:border-b-0 overflow-hidden relative transition-opacity duration-700 ${!isRelevant ? 'opacity-20 grayscale scale-95 pointer-events-none' : 'opacity-100'}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-24 relative z-10 w-full">
        <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${
          index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
        }`}>
          
          <motion.div style={{ y: textY }} className="flex-1 space-y-10 lg:space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[2px] bg-blue-600"></span>
                <span className="text-blue-600 font-black uppercase tracking-[0.5em] text-[10px]">
                  Configuração 0{index + 1}
                </span>
              </div>
              <h3 className="text-5xl md:text-6xl lg:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-8 md:mb-10">
                {pillar.title.split(' ')[0]}<br/>
                <span className="text-outline">{pillar.title.split(' ')[1] || ''}</span>
              </h3>
              <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-xl leading-relaxed">
                {pillar.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {pillar.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-center gap-4 group cursor-default">
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-slate-900 text-base md:text-lg font-bold tracking-tight">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 md:pt-10">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: { view: 'pricing' } }))}
                className="magnetic-glow group w-full sm:w-auto inline-flex items-center justify-center gap-6 bg-slate-900 text-white px-10 md:px-12 py-6 md:py-7 rounded-full font-black text-lg md:text-xl transition-all hover:bg-blue-600 shadow-2xl active:scale-95"
              >
                DEPLOY SYSTEM
                <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform duration-500" />
              </button>
            </div>
          </motion.div>

          <div className="flex-1 w-full flex justify-center mt-12 lg:mt-0">
            <motion.div
              style={{ y: imageY, scale }}
              className="relative w-full max-w-2xl"
            >
              <div className="absolute -inset-16 md:-inset-24 bg-blue-600/5 blur-[120px] rounded-full"></div>
              <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,123,255,0.12)] border border-slate-100">
                <TelemetryOverlay />
                {pillar.id === 'manager' ? (
                  <ManagerDashboardMockup />
                ) : pillar.id === 'reader' ? (
                  <ReaderAppMockup />
                ) : (
                  <AppMockup />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Solutions: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Todos os Módulos', icon: null },
    { id: 'administradoras', label: 'Administradoras', icon: Users },
    { id: 'leituristas', label: 'Empresas de Leitura', icon: Smartphone },
    { id: 'utilities', label: 'Utilities & BI', icon: BarChart3 },
  ];

  return (
    <section id="solucao" className="bg-white">
      {/* Category Selector Tabs */}
      <div className="sticky top-[88px] z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center gap-2 md:gap-4 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border-2 ${
                activeCategory === cat.id 
                ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/30' 
                : 'bg-white border-slate-100 text-slate-400 hover:border-slate-200 hover:text-slate-600'
              }`}
            >
              {cat.icon && <cat.icon size={14} />}
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {PILLARS.map((pillar, index) => (
          <SolutionItem key={pillar.id} pillar={pillar} index={index} activeCategory={activeCategory} />
        ))}
      </AnimatePresence>
    </section>
  );
};

export default Solutions;
