
import React, { useState } from 'react';
import { PRICING } from '../constants';
import { Check, Info, ShieldCheck, HelpCircle, ChevronRight, X, ArrowRight, Zap, Target, BarChart4 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Pricing: React.FC = () => {
  const [showComparison, setShowComparison] = useState(false);

  const detailedFeatures = [
    { name: "Unidades Gerenciadas", starter: "500 un", pro: "Ilimitadas", ent: "Ilimitadas" },
    { name: "App Leiturista Offline", starter: <X size={18} className="text-slate-300 mx-auto" />, pro: <Check size={18} className="text-blue-500 mx-auto" />, ent: <Check size={18} className="text-blue-500 mx-auto" /> },
    { name: "App Morador White Label", starter: <X size={18} className="text-slate-300 mx-auto" />, pro: <X size={18} className="text-slate-300 mx-auto" />, ent: <Check size={18} className="text-blue-500 mx-auto" /> },
    { name: "Geolocalização (GPS)", starter: <Check size={18} className="text-blue-500 mx-auto" />, pro: <Check size={18} className="text-blue-500 mx-auto" />, ent: <Check size={18} className="text-blue-500 mx-auto" /> },
    { name: "Validação por Foto", starter: <Check size={18} className="text-blue-500 mx-auto" />, pro: <Check size={18} className="text-blue-500 mx-auto" />, ent: <Check size={18} className="text-blue-500 mx-auto" /> },
    { name: "Dashboard BI Custom", starter: <X size={18} className="text-slate-300 mx-auto" />, pro: <Check size={18} className="text-blue-500 mx-auto" />, ent: <Check size={18} className="text-blue-500 mx-auto" /> },
    { name: "API Rest Integração", starter: "Básico", pro: "Full Access", ent: "Prioritário" },
    { name: "SLA de Suporte", starter: "48h", pro: "4h", ent: "1h (Dedicado)" },
  ];

  return (
    <section id="precos" className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-400 font-bold uppercase tracking-[0.3em] text-xs mb-4">Pricing Strategy</h2>
            <h3 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">O investimento certo para sua <span className="text-blue-500">escala</span></h3>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
              Transforme seu custo fixo em escalabilidade. Planos modulares com tecnologia de ponta para administradoras modernas.
            </p>
          </motion.div>
        </div>

        {/* Card Plans */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-24">
          {PRICING.map((plan, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex flex-col p-1 rounded-[40px] transition-all duration-700 group ${
                plan.highlighted 
                ? 'bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 scale-105 z-10 shadow-3xl shadow-blue-500/20' 
                : 'bg-white/5 border border-white/10'
              }`}
            >
              <div className={`p-10 flex flex-col h-full rounded-[38px] ${plan.highlighted ? 'bg-slate-900/60 backdrop-blur-xl' : 'bg-transparent'}`}>
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h4 className="text-2xl font-black text-white mb-2 tracking-tight">{plan.name}</h4>
                    <p className="text-slate-400 text-sm font-medium">{plan.description}</p>
                  </div>
                  {plan.highlighted && (
                    <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg shadow-blue-500/30">
                      <Zap size={20} />
                    </div>
                  )}
                </div>

                <div className="mb-10">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-6xl font-black text-white tracking-tighter">{plan.price}</span>
                    <span className="text-slate-500 font-bold text-lg">{plan.period}</span>
                  </div>
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Taxa de setup sob consulta</p>
                </div>

                <div className="space-y-4 mb-12 flex-grow">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Destaques do Plano:</p>
                  {plan.features.slice(0, 5).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 group/feat">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${plan.highlighted ? 'bg-blue-500 text-white' : 'bg-white/10 text-blue-400 group-hover/feat:bg-blue-400 group-hover/feat:text-slate-900'}`}>
                        <Check size={12} strokeWidth={4} />
                      </div>
                      <span className="text-slate-300 text-sm font-semibold tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                   onClick={() => window.dispatchEvent(new CustomEvent('open-sales-agent'))}
                   className={`w-full py-6 rounded-2xl font-black text-lg transition-all transform active:scale-95 flex items-center justify-center gap-2 group/btn ${
                  plan.highlighted 
                  ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-xl shadow-blue-600/20' 
                  : 'bg-white text-slate-900 hover:bg-slate-100'
                }`}>
                  {plan.cta}
                  <ArrowRight size={22} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Comparisson CTA */}
        <div className="flex flex-col items-center">
          <button 
            onClick={() => setShowComparison(!showComparison)}
            className="flex items-center gap-3 text-white font-black uppercase tracking-[0.3em] text-xs px-12 py-6 rounded-2xl border border-white/10 hover:border-blue-500 hover:text-blue-400 transition-all bg-white/5 backdrop-blur-xl group mb-20"
          >
            {showComparison ? <X size={16} /> : <BarChart4 size={16} />}
            {showComparison ? 'Recolher Tabela' : 'Comparativo Técnico Completo'}
          </button>

          <AnimatePresence>
            {showComparison && (
              <motion.div
                initial={{ opacity: 0, y: 50, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: 50, height: 0 }}
                className="w-full overflow-hidden"
              >
                <div className="bg-white/5 border border-white/10 rounded-[48px] p-8 md:p-16 backdrop-blur-3xl mb-24">
                  <div className="grid md:grid-cols-3 gap-12 mb-16">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-3xl flex items-center justify-center mb-6">
                        <Target size={32} />
                      </div>
                      <h5 className="text-white font-black text-lg mb-2">Precisão IoT</h5>
                      <p className="text-slate-400 text-sm">Leituras validadas por inteligência artificial e sensores de campo.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-3xl flex items-center justify-center mb-6">
                        <ShieldCheck size={32} />
                      </div>
                      <h5 className="text-white font-black text-lg mb-2">Segurança Bancária</h5>
                      <p className="text-slate-400 text-sm">Criptografia AES-256 e backups distribuídos em tempo real.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-3xl flex items-center justify-center mb-6">
                        <Zap size={32} />
                      </div>
                      <h5 className="text-white font-black text-lg mb-2">Performance High</h5>
                      <p className="text-slate-400 text-sm">Servidores AWS de baixa latência para respostas instantâneas.</p>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="py-6 text-slate-500 text-[10px] font-black uppercase tracking-widest">Core Features</th>
                          <th className="py-6 text-white text-sm font-black text-center">Starter</th>
                          <th className="py-6 text-blue-500 text-sm font-black text-center">Professional</th>
                          <th className="py-6 text-white text-sm font-black text-center">Enterprise</th>
                        </tr>
                      </thead>
                      <tbody>
                        {detailedFeatures.map((row, i) => (
                          <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-all">
                            <td className="py-6 text-slate-300 text-sm font-bold">{row.name}</td>
                            <td className="py-6 text-slate-400 text-sm text-center font-medium">{row.starter}</td>
                            <td className="py-6 text-blue-400 text-sm text-center font-black">{row.pro}</td>
                            <td className="py-6 text-slate-400 text-sm text-center font-medium">{row.ent}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Global Security Footer */}
        <div className="p-12 bg-blue-600 rounded-[50px] shadow-3xl shadow-blue-500/20 flex flex-col lg:flex-row items-center justify-between gap-10">
           <div className="flex items-center gap-8">
              <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-blue-600 shadow-2xl">
                <ShieldCheck size={40} />
              </div>
              <div className="max-w-md">
                <h4 className="text-2xl font-black text-white tracking-tight mb-2">Segurança é nossa prioridade</h4>
                <p className="text-blue-100 text-sm font-medium opacity-90 leading-relaxed">
                  Estamos em conformidade total com a LGPD e utilizamos infraestrutura de servidores Tier 3 para garantir disponibilidade de 99.9%.
                </p>
              </div>
           </div>
           <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-sales-agent'))}
              className="bg-slate-900 text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-slate-800 transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-slate-900/40"
           >
             Solicitar Proposta
           </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
