
import React from 'react';
import { PRICING } from '../constants';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="precos" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#007BFF] font-bold uppercase tracking-[0.3em] text-sm mb-4">Planos Modulares</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6">Escalabilidade para sua Operação</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Pague pelo que usar. Nossa estrutura modular permite que você cresça conforme sua demanda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {PRICING.map((plan, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col p-10 rounded-[32px] border transition-all duration-500 ${
                plan.highlighted 
                ? 'bg-slate-900 border-[#007BFF]/50 scale-105 shadow-[0_30px_60px_-15px_rgba(0,123,255,0.2)] relative z-10' 
                : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFB35B] text-slate-950 px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-xl shadow-orange-500/20">
                  Mais Recomendado
                </div>
              )}
              
              <div className="mb-10">
                <h4 className="text-xl font-bold text-slate-400 mb-4 uppercase tracking-widest">{plan.name}</h4>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-slate-500 font-bold">{plan.period}</span>
                </div>
                <p className="mt-6 text-slate-400 text-base leading-relaxed">{plan.description}</p>
              </div>

              <div className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#007BFF]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="text-[#007BFF] w-4 h-4 font-black" />
                    </div>
                    <span className="text-slate-200 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all transform active:scale-95 ${
                plan.highlighted 
                ? 'bg-[#007BFF] text-white hover:bg-[#0069d9] shadow-xl shadow-blue-500/20' 
                : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
