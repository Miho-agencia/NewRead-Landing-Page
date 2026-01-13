
import React from 'react';
import { PROBLEMS } from '../constants';
import { motion } from 'framer-motion';

const Problems: React.FC = () => {
  return (
    <section id="problemas" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-[#007BFF] font-bold uppercase tracking-[0.3em] text-sm mb-4">O Problema</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Sua gestão ainda é <span className="text-[#FF5B5B]">analógica?</span></h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
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
              className="relative p-10 rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl hover:border-[#007BFF]/40 transition-all duration-500 group overflow-hidden cursor-default shadow-2xl shadow-black/20"
            >
              {/* Decorative Accent Glow */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-colors duration-700"></div>
              
              <motion.div 
                variants={{
                  hover: { 
                    scale: 1.15, 
                    rotate: 8,
                    boxShadow: "0 0 25px 2px rgba(255, 91, 91, 0.35)",
                    transition: { 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 25 
                    } 
                  }
                }}
                className="w-16 h-16 bg-[#FF5B5B]/10 rounded-2xl flex items-center justify-center mb-8 transition-colors group-hover:bg-[#FF5B5B]/20 relative z-10"
              >
                <problem.icon className="text-[#FF5B5B] w-8 h-8" />
              </motion.div>
              
              <h4 className="text-2xl font-black text-white mb-4 tracking-tight relative z-10">{problem.title}</h4>
              <p className="text-slate-400 leading-relaxed font-medium relative z-10">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
