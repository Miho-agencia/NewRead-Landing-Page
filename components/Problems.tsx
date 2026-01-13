
import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, ShieldAlert, Users, CheckSquare } from 'lucide-react';

const Problems: React.FC = () => {
  const problems = [
    { title: "Glosas e erros de leitura humana", desc: "Processos manuais geram inconsistências que custam até 15% do seu faturamento mensal.", icon: ShieldAlert },
    { title: "Falta de evidências auditáveis", desc: "Sem fotos geolocalizadas, sua empresa fica vulnerável a disputas jurídicas e contestações.", icon: AlertTriangle },
    { title: "Atrito e falta de confiança", desc: "A opacidade nos dados gera desconfiança nos moradores e desgaste em assembléias.", icon: Users },
    { title: "Processos manuais lentos", desc: "Planilhas e digitação manual consomem dias que poderiam ser usados na estratégia.", icon: Clock }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--x', `${x}px`);
    e.currentTarget.style.setProperty('--y', `${y}px`);
  };

  return (
    <section id="problemas" className="py-24 md:py-32 lg:py-48 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs mb-6 block">Diagnóstico Operacional</span>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-10">
              Sua medição ainda é <br/><span className="text-red-500">Analógica?</span>
            </h3>
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-lg mb-12">
              A ineficiência manual é o maior "vazamento" financeiro da sua operação de utilities.
            </p>
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-200 shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform duration-700"><CheckSquare size={120} /></div>
               <p className="text-slate-900 font-black text-xl mb-6 italic leading-snug">"92% das administradoras admitem que erros de leitura são a principal causa de atrito com clientes."</p>
               <div className="flex items-center gap-3">
                 <div className="w-10 h-[2px] bg-blue-600"></div>
                 <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Relatório Mercado 2024</p>
               </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {problems.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onMouseMove={handleMouseMove}
                className="magnetic-glow bg-white p-8 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 flex flex-col sm:flex-row gap-6 items-start sm:items-center hover:border-blue-200 transition-all group cursor-default shadow-sm hover:shadow-2xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-all duration-500 shadow-sm">
                  <p.icon size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{p.title}</h4>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
