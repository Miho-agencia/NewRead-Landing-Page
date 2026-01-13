
import React from 'react';
import { TECH_SPECS } from '../constants';
import { motion } from 'framer-motion';
// Import missing CheckSquare icon from lucide-react
import { CheckSquare } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="diferenciais" className="py-24 md:py-32 lg:py-48 bg-white engineering-grid">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-32">
          <div className="lg:col-span-1">
            <span className="text-[#007BFF] font-black uppercase tracking-[0.4em] text-xs mb-6 block">Engenharia de Utilities</span>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9]">Alta Performance <br/><span className="text-[#FFB35B]">Técnica</span></h3>
            <p className="text-slate-600 text-lg md:text-xl mb-12 leading-relaxed font-medium">
              O ecossistema NewRead foi projetado para escala, garantindo que sua operação cresça com integridade absoluta de dados.
            </p>
            <div className="p-8 md:p-12 bg-slate-900 rounded-[2.5rem] md:rounded-[40px] relative overflow-hidden group shadow-3xl shadow-blue-500/10 transition-all hover:scale-[1.02]">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-6 italic leading-relaxed">"Reduzimos nosso custo fixo operacional em 35% com a automação de campo NewRead."</h4>
              <p className="text-blue-400 font-black uppercase tracking-[0.2em] text-[10px]">— Diretor de Operações, Utility SP</p>
            </div>
          </div>
          
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8 md:gap-10">
            {TECH_SPECS.map((tech, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] md:rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all group"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#007BFF]/10 text-blue-600 rounded-2xl flex items-center justify-center mb-8 md:mb-10 group-hover:bg-[#007BFF] group-hover:text-white transition-all duration-500 shadow-sm">
                  <tech.icon className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{tech.title}</h4>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">{tech.description}</p>
              </motion.div>
            ))}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-blue-600 p-8 md:p-12 rounded-[2.5rem] md:rounded-[40px] flex flex-col justify-center items-center text-center text-white border border-blue-400 group hover:bg-slate-900 transition-all shadow-2xl relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12"><CheckSquare size={100} /></div>
               <h4 className="text-xl md:text-2xl font-black mb-4 uppercase tracking-tighter">Escala Sem Fricção</h4>
               <p className="text-blue-100 mb-10 font-medium opacity-80 text-sm md:text-base">Mantenha a conformidade jurídica e técnica enquanto escala sua base de unidades.</p>
               <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('open-sales-agent'))}
                  className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-black hover:translate-x-2 transition-transform uppercase tracking-widest text-[10px] shadow-lg shadow-black/10"
                >
                  Simular ROI →
                </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
