
import React from 'react';
import { PILLARS } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Solutions: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('precos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="solucao" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h2 className="text-[#007BFF] font-bold uppercase tracking-[0.3em] text-xs mb-4">A Solução</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">Ecossistema NewRead</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Nossa plataforma unificada garante que cada gota d'água e cada metro cúbico de gás sejam medidos com precisão cirúrgica através de três pilares fundamentais.
          </p>
        </motion.div>

        {/* Vertical Pillars Layout - Better for Scroll Animations */}
        <div className="space-y-40 md:space-y-64">
          {PILLARS.map((pillar, index) => (
            <div 
              key={pillar.id} 
              className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 w-full"
              >
                <div className="mb-8">
                  <div className="inline-block px-4 py-1.5 bg-[#FFB35B]/10 rounded-full text-[#FFB35B] text-xs font-black uppercase tracking-widest mb-6">
                    Pilar 0{index + 1}
                  </div>
                  <h4 className="text-[#007BFF] font-black text-2xl mb-2 tracking-tight">{pillar.title}</h4>
                  <h5 className="text-3xl md:text-4xl font-black text-white mb-6 leading-[1.2]">{pillar.subtitle}</h5>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8 font-medium">{pillar.description}</p>
                </div>
                
                <div className="grid sm:grid-cols-1 gap-4 mb-10">
                  {pillar.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 group hover:border-white/10 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-[#007BFF]/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="text-[#007BFF] w-5 h-5" />
                      </div>
                      <span className="text-slate-200 text-sm font-bold">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={scrollToPricing}
                    className="bg-[#007BFF] hover:bg-[#0069d9] text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/10"
                  >
                    Solicitar Demonstração
                    <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>

              {/* Image Side - Animated on Scroll as requested */}
              <motion.div 
                className="flex-1 w-full"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative group">
                  {/* Visual Background Glow */}
                  <div className="absolute -inset-10 bg-gradient-to-tr from-blue-600/20 to-orange-500/20 rounded-[48px] blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
                  
                  {/* Main Image Container */}
                  <div className="relative p-2 bg-slate-900 border border-white/10 rounded-[40px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                    <div className="relative rounded-[32px] overflow-hidden">
                      <img 
                        src={pillar.image} 
                        alt={pillar.title} 
                        className="w-full h-[350px] md:h-[500px] object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-1000 transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    </div>
                    
                    {/* Floating Info Badge */}
                    <div className="absolute bottom-8 left-8 right-8 p-6 bg-slate-950/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500 hidden md:block">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-[#007BFF] flex items-center justify-center shadow-lg shadow-blue-500/30">
                            <CheckCircle2 className="text-white w-7 h-7" />
                          </div>
                          <div>
                            <p className="text-[10px] text-[#FFB35B] font-black uppercase tracking-[0.2em] mb-0.5">Módulo Ativo</p>
                            <p className="text-white font-black text-lg tracking-tight">{pillar.title}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            Online
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
