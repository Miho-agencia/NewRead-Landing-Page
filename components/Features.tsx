
import React from 'react';
import { TECH_SPECS } from '../constants';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  return (
    <section id="diferenciais" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-[#007BFF] font-bold uppercase tracking-[0.3em] text-sm mb-4">Diferenciais</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter">Engenharia de <span className="text-[#FFB35B]">Alta Performance</span></h3>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
              Construímos o ecossistema NewRead com tecnologias que garantem 99.9% de precisão nos dados coletados.
            </p>
            <div className="p-10 bg-gradient-to-br from-[#007BFF] to-[#0052cc] rounded-[40px] relative overflow-hidden group shadow-2xl shadow-blue-500/20">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform"></div>
              <h4 className="text-2xl font-bold text-white mb-4 italic leading-relaxed">"A NewRead trouxe a segurança jurídica que precisávamos para nossas medições."</h4>
              <p className="text-blue-100 font-bold opacity-80 uppercase tracking-widest text-xs">— CTO, Global Utilities</p>
            </div>
          </div>
          
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {TECH_SPECS.map((tech, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-10 rounded-[32px] border-l-4 border-l-[#007BFF] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-[#007BFF]/10 rounded-2xl flex items-center justify-center mb-8">
                  <tech.icon className="text-[#007BFF] w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{tech.title}</h4>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">{tech.description}</p>
              </motion.div>
            ))}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[32px] flex flex-col justify-center items-center text-center border border-dashed border-slate-300 group hover:border-[#FFB35B]/50 transition-all shadow-sm"
            >
               <h4 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Roadmap 2025</h4>
               <p className="text-slate-600 mb-8 font-medium">Integração nativa com hidrômetros NB-IoT e LoRaWAN.</p>
               <button className="text-[#007BFF] font-black hover:translate-x-2 transition-transform uppercase tracking-widest text-xs">Acompanhar Evolução →</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
