
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Marcus Aurelius",
      role: "CEO, Global Utilities Group",
      content: "A NewRead reduziu nosso ciclo de faturamento em 4 dias e eliminou 98% das glosas de leitura.",
      stars: 5
    },
    {
      name: "Sabrina Viana",
      role: "Diretora de Operações, CondoFlow",
      content: "O sistema offline-first é impecável. Nossos leituristas agora entregam 40% mais produtividade.",
      stars: 5
    },
    {
      name: "Ricardo Mendes",
      role: "CTO, MeasurePro Solutions",
      content: "A API de integração é a mais robusta do mercado. Conectamos nosso ERP em menos de 48 horas.",
      stars: 5
    }
  ];

  return (
    <section className="py-40 bg-white racing-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs mb-4 block">Proven Efficiency</span>
          <h3 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">Impacto <span className="text-blue-600">Real</span></h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 flex flex-col hover:border-blue-200 transition-all group"
            >
              <Quote className="text-blue-200 mb-8 group-hover:text-blue-500 transition-colors" size={48} />
              <div className="flex gap-1 mb-6">
                {[...Array(r.stars)].map((_, j) => <Star key={j} size={14} className="fill-blue-500 text-blue-500" />)}
              </div>
              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-10 flex-1">"{r.content}"</p>
              <div>
                <p className="text-slate-900 font-black text-lg">{r.name}</p>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
