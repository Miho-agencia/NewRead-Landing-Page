
import React from 'react';
import { PROBLEMS } from '../constants';
import { motion } from 'framer-motion';

const Problems: React.FC = () => {
  return (
    <section id="problemas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-[#007BFF] font-bold uppercase tracking-[0.3em] text-sm mb-4">O Problema</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">Sua gestão ainda é <span className="text-[#FF5B5B]">analógica?</span></h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Processos manuais em medição individualizada geram "vazamentos" financeiros invisíveis que corroem sua margem de lucro.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROBLEMS.map((problem, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover="hover"
              variants={{
                hover: { 
                  y: -10,
                  transition: { duration: 0.4, ease: "easeOut" }
                }
              }}
              className="relative p-10 rounded-[32px] border border-slate-100 bg-slate-50 hover:bg-white hover:border-[#FF5B5B]/30 transition-all duration-500 group overflow-hidden cursor-default shadow-xl shadow-slate-200/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent pointer-events-none"></div>
              <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-[#FF5B5B]/5 rounded-full blur-[64px] group-hover:bg-[#FF5B5B]/10 transition-colors duration-700"></div>
              
              <motion.div 
                variants={{
                  hover: { 
                    scale: 1.15, 
                    boxShadow: "0 0 30px 5px rgba(255, 91, 91, 0.2)",
                    transition: { 
                      duration: 0.4,
                      ease: [0.23, 1, 0.32, 1] 
                    } 
                  }
                }}
                className="w-16 h-16 bg-[#FF5B5B]/10 rounded-2xl flex items-center justify-center mb-8 transition-colors group-hover:bg-[#FF5B5B]/20 relative z-10"
              >
                <problem.icon className="text-[#FF5B5B] w-8 h-8" />
              </motion.div>
              
              <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight relative z-10 group-hover:text-[#FF5B5B] transition-colors">
                {problem.title}
              </h4>
              <p className="text-slate-600 leading-relaxed font-medium relative z-10">
                {problem.description}
              </p>
              
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] text-[#FF5B5B] font-black uppercase tracking-[0.2em]">Ponto de Perda</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF5B5B] animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
