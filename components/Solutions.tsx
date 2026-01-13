
import React, { useRef } from 'react';
import { PILLARS } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AppMockup from './AppMockup';
import ReaderAppMockup from './ReaderAppMockup';
import ManagerDashboardMockup from './ManagerDashboardMockup';
import TelemetryOverlay from './TelemetryOverlay';

const SolutionItem: React.FC<{ pillar: any, index: number }> = ({ pillar, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <div ref={ref} className="min-h-screen flex items-center py-40 border-b border-slate-100 last:border-b-0 overflow-hidden relative">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className={`flex flex-col lg:flex-row items-center gap-24 ${
          index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
        }`}>
          
          <motion.div style={{ y: textY }} className="flex-1 space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[2px] bg-blue-600"></span>
                <span className="text-blue-600 font-black uppercase tracking-[0.5em] text-[10px]">
                  Core Module 0{index + 1}
                </span>
              </div>
              <h3 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-10">
                {pillar.title.split(' ')[0]}<br/>
                <span className="text-outline">{pillar.title.split(' ')[1] || ''}</span>
              </h3>
              <p className="text-2xl text-slate-500 font-medium max-w-xl leading-relaxed">
                {pillar.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {pillar.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-slate-900 text-lg font-bold tracking-tight">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-10">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: { view: 'pricing' } }))}
                className="group inline-flex items-center gap-6 bg-slate-900 text-white px-12 py-7 rounded-full font-black text-xl transition-all hover:bg-blue-600 shadow-2xl active:scale-95"
              >
                DEPLOY SYSTEM
                <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform duration-500" />
              </button>
            </div>
          </motion.div>

          <div className="flex-1 w-full flex justify-center">
            <motion.div
              style={{ y: imageY, scale }}
              className="relative w-full max-w-2xl"
            >
              <div className="absolute -inset-24 bg-blue-600/5 blur-[120px] rounded-full"></div>
              <div className="relative">
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
  return (
    <section id="solucao" className="bg-white">
      {PILLARS.map((pillar, index) => (
        <SolutionItem key={pillar.id} pillar={pillar} index={index} />
      ))}
    </section>
  );
};

export default Solutions;
