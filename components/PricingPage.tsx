
import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldCheck, Zap, ArrowRight, Info, HelpCircle } from 'lucide-react';
import { PRICING } from '../constants';

const PricingPage: React.FC = () => {
  const comparisonData = [
    { feature: "Unidades Gerenciadas", starter: "Até 500", pro: "Ilimitadas", ent: "Custom" },
    { feature: "App Leiturista Offline", starter: <X className="text-slate-300 mx-auto" />, pro: <Check className="text-blue-500 mx-auto" />, ent: <Check className="text-blue-500 mx-auto" /> },
    { feature: "App do Morador", starter: "Não incluso", pro: "Full Access", ent: "White Label" },
    { feature: "Geolocalização (GPS)", starter: <Check className="text-blue-500 mx-auto" />, pro: <Check className="text-blue-500 mx-auto" />, ent: <Check className="text-blue-500 mx-auto" /> },
    { feature: "Dashboard BI", starter: "Básico", pro: "Avançado", ent: "Predittivo AI" },
    { feature: "Suporte", starter: "Email", pro: "24/7 + WhatsApp", ent: "Gerente Dedicado" },
    { feature: "API de Integração", starter: <X className="text-slate-300 mx-auto" />, pro: <Check className="text-blue-500 mx-auto" />, ent: <Check className="text-blue-500 mx-auto" /> },
  ];

  const addons = [
    { name: "White Label Total", price: "R$ 499/mês", desc: "Sua logo e cores em todos os apps." },
    { name: "Módulo NB-IoT", price: "R$ 1,50/un", desc: "Integração com hidrômetros inteligentes." },
    { name: "Consultoria Implantação", price: "Sob consulta", desc: "Treinamento presencial para sua equipe." },
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter">
            Planos Transparentes para <span className="text-blue-600">Escala</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Escolha a base tecnológica que vai sustentar o crescimento da sua empresa de medição individualizada.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {PRICING.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white rounded-[40px] p-10 border-2 transition-all flex flex-col ${
                plan.highlighted ? 'border-blue-600 shadow-2xl scale-105 z-10' : 'border-slate-100 shadow-sm'
              }`}
            >
              <div className="mb-8">
                <h2 className="text-2xl font-black text-slate-900 mb-2">{plan.name}</h2>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl font-black text-slate-900 tracking-tighter">{plan.price}</span>
                  <span className="text-slate-500 font-bold">{plan.period}</span>
                </div>
                <p className="text-slate-600 text-sm font-medium">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-12 flex-1">
                {plan.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-3">
                    <Check className="text-blue-600 shrink-0 mt-0.5" size={18} strokeWidth={3} />
                    <span className="text-slate-700 text-sm font-semibold">{feat}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all ${
                plan.highlighted ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg' : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Detailed Comparison Table */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-slate-900 mb-4">Comparativo Técnico</h3>
            <p className="text-slate-500 font-medium">Cada detalhe importa na hora de garantir a confiança do seu cliente final.</p>
          </div>
          <div className="bg-white rounded-[40px] border border-slate-200 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-8 text-sm font-black text-slate-400 uppercase tracking-widest">Funcionalidade</th>
                    <th className="p-8 text-sm font-black text-slate-900 text-center">Starter</th>
                    <th className="p-8 text-sm font-black text-blue-600 text-center">Professional</th>
                    <th className="p-8 text-sm font-black text-slate-900 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={row.feature} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}>
                      <td className="p-8 text-slate-800 font-bold">{row.feature}</td>
                      <td className="p-8 text-slate-500 text-center font-medium">{row.starter}</td>
                      <td className="p-8 text-blue-600 text-center font-black">{row.pro}</td>
                      {/* Fixed: Changed row.enterprise to row.ent to match comparisonData structure */}
                      <td className="p-8 text-slate-500 text-center font-medium">{row.ent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Add-ons Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {addons.map(addon => (
            <div key={addon.name} className="p-8 bg-blue-50 rounded-[32px] border border-blue-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-4 shadow-sm">
                <Zap size={24} />
              </div>
              <h4 className="text-lg font-black text-slate-900 mb-2">{addon.name}</h4>
              <p className="text-slate-600 text-sm mb-4 font-medium">{addon.desc}</p>
              <span className="text-blue-600 font-black">{addon.price}</span>
            </div>
          ))}
        </div>

        {/* FAQ - Closing objections */}
        <div className="max-w-3xl mx-auto mb-20">
          <h3 className="text-3xl font-black text-center mb-12">Perguntas Frequentes</h3>
          <div className="space-y-6">
            {[
              { q: "Posso mudar de plano a qualquer momento?", a: "Sim. A NewRead é flexível e você pode fazer o upgrade conforme sua base de unidades cresce." },
              { q: "Como funciona a taxa de implementação?", a: "O setup cobre a importação de dados, treinamento da sua equipe de campo e configuração do seu painel web." },
              { q: "O suporte é incluso nos planos?", a: "Sim, todos os planos contam com suporte técnico especializado, variando o tempo de resposta conforme o nível do plano." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200">
                <h4 className="font-black text-slate-900 mb-2 flex items-center gap-3">
                  <HelpCircle className="text-blue-500" size={20} />
                  {item.q}
                </h4>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
