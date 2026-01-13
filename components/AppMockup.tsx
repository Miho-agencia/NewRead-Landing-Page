
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Droplets, 
  Flame, 
  Bell, 
  User, 
  LayoutGrid, 
  CheckCircle2, 
  TrendingUp, 
  History, 
  AlertTriangle,
  ChevronRight,
  ChevronLeft, // Added ChevronLeft to imports
  Info,
  Calendar,
  Camera
} from 'lucide-react';

const AppMockup: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const screens = [
    {
      id: 'dashboard',
      label: 'Início',
      content: (
        <div className="flex flex-col h-full bg-[#0F1115] text-white">
          <div className="pt-6 px-4 flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full border border-blue-500/50 p-0.5">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="leading-tight">
                <p className="text-[10px] text-slate-500 font-bold">Olá, João Silva</p>
                <p className="text-[11px] font-black">Apto 302 • Bloco B</p>
              </div>
            </div>
            <div className="relative p-2 bg-slate-800/50 rounded-xl">
              <Bell size={18} className="text-slate-400" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0F1115]"></span>
            </div>
          </div>

          <div className="px-4 space-y-4">
            <div className="bg-gradient-to-br from-blue-600/20 to-transparent border border-white/5 rounded-3xl p-5 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10"><LayoutGrid size={60} /></div>
               <div className="flex items-center gap-2 text-slate-400 mb-2">
                <LayoutGrid size={14} className="text-blue-500" />
                <span className="text-[9px] uppercase font-black tracking-widest">Estimativa Atual</span>
              </div>
              <h3 className="text-3xl font-black mb-2 tracking-tighter">R$ 245,00</h3>
              <div className="flex items-center justify-between mt-4">
                <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full font-black border border-emerald-500/20">DENTRO DA MÉDIA</span>
                <span className="text-[9px] text-slate-500 font-bold">Vencimento: 10/11</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#1C1F26] p-4 rounded-2xl border border-white/5 group hover:border-blue-500/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
                  <Droplets size={16} className="text-blue-500" />
                </div>
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1">Água Fria</p>
                <p className="text-xl font-black">12 m³</p>
                <p className="text-[9px] text-emerald-400 font-black mt-1 flex items-center gap-1">↓ 2% <span className="text-slate-600">vs anterior</span></p>
              </div>
              <div className="bg-[#1C1F26] p-4 rounded-2xl border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center mb-3">
                  <Flame size={16} className="text-orange-500" />
                </div>
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1">Gás</p>
                <p className="text-xl font-black">3.5 m³</p>
                <p className="text-[9px] text-slate-500 font-black mt-1">~ 0% estável</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'history',
      label: 'Consumo',
      content: (
        <div className="flex flex-col h-full bg-[#0F1115] text-white p-4 pt-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-black tracking-tight">Histórico</h2>
            <div className="bg-slate-800 px-3 py-1.5 rounded-xl text-[10px] font-bold text-slate-300 border border-white/5 flex items-center gap-2">
              <Calendar size={12} /> Últimos 6 meses
            </div>
          </div>

          <div className="bg-[#1C1F26] rounded-3xl p-5 border border-white/5 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1">Média do período</p>
                <h3 className="text-2xl font-black">11.4 m³</h3>
              </div>
              <div className="bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded-lg text-[10px] font-black">↓ -3%</div>
            </div>
            
            <div className="h-32 flex items-end gap-2 px-1 relative">
              {[35, 55, 40, 75, 50, 85].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                   <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    className={`w-full rounded-t-lg transition-all duration-1000 ${i === 5 ? 'bg-blue-500 shadow-[0_-10px_20px_rgba(59,130,246,0.3)]' : 'bg-slate-700/50'}`} 
                  />
                  <span className={`text-[8px] font-bold ${i === 5 ? 'text-blue-400' : 'text-slate-600'}`}>{['JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV'][i]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
             <div className="bg-[#1C1F26] p-4 rounded-2xl border border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-[8px] text-slate-500 font-black uppercase">NOV 2023</p>
                  <p className="text-sm font-bold">12.8 m³ <span className="text-slate-500 font-normal ml-2">R$ 142,50</span></p>
                </div>
                <button className="text-[10px] font-black text-blue-500 hover:text-blue-400">VER DETALHES</button>
             </div>
             <div className="bg-[#1C1F26] p-4 rounded-2xl border border-white/5 flex items-center justify-between opacity-50">
                <div>
                  <p className="text-[8px] text-slate-500 font-black uppercase">OUT 2023</p>
                  <p className="text-sm font-bold">11.2 m³ <span className="text-slate-500 font-normal ml-2">R$ 135,20</span></p>
                </div>
                <ChevronRight size={14} className="text-slate-600" />
             </div>
          </div>
        </div>
      )
    },
    {
      id: 'alerts',
      label: 'Avisos',
      content: (
        <div className="flex flex-col h-full bg-[#0F1115] text-white p-4 pt-8">
          <h2 className="text-xl font-black mb-6 tracking-tight">Notificações</h2>
          <div className="flex gap-2 mb-6">
            {['Todos', 'Alertas', 'Leituras'].map((t, i) => (
              <span key={i} className={`text-[9px] px-3 py-1.5 rounded-full font-black uppercase tracking-widest ${i === 0 ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-500'}`}>{t}</span>
            ))}
          </div>

          <div className="space-y-4">
            <div className="bg-[#1C1F26] p-5 rounded-3xl border border-orange-500/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-1.5 h-full bg-orange-500"></div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                  <AlertTriangle size={20} />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-[9px] text-orange-500 font-black uppercase tracking-widest">Consumo Atípico</p>
                    <p className="text-[8px] text-slate-600">HOJE, 09:42</p>
                  </div>
                  <h4 className="text-sm font-bold mb-1">Pico de consumo detectado</h4>
                  <p className="text-[10px] text-slate-500 leading-relaxed">Identificamos um consumo de água 40% acima da sua média. Verifique vazamentos.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1C1F26] p-5 rounded-3xl border border-white/5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-[9px] text-blue-500 font-black uppercase tracking-widest">Leitura Fechada</p>
                  <p className="text-[8px] text-slate-600">ONTEM, 18:15</p>
                </div>
                <h4 className="text-sm font-bold">Leitura de Maio disponível</h4>
                <p className="text-[10px] text-slate-500">Dados processados e evidência fotográfica disponível no histórico.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'evidence',
      label: 'Detalhes',
      content: (
        <div className="flex flex-col h-full bg-[#0F1115] text-white p-4 pt-8">
          <div className="flex items-center gap-3 mb-6">
            <ChevronLeft size={20} className="text-slate-500" />
            <h2 className="text-xl font-black tracking-tight">Detalhes da Leitura</h2>
          </div>

          <div className="bg-[#1C1F26] rounded-3xl p-5 border border-white/5 mb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-blue-500 border border-white/5">
                <Camera size={24} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-0.5">Leiturista Responsável</p>
                <p className="text-sm font-bold">Roberto Silva</p>
                <p className="text-[9px] text-slate-600">ID: #8492 • 15 Mai 2024</p>
              </div>
            </div>

            <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mb-3">Evidência Fotográfica</p>
            <div className="relative aspect-video bg-slate-800 rounded-2xl overflow-hidden mb-4 border border-white/5 group">
               <img src="https://images.unsplash.com/photo-1542013936693-88463832c846?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-blue-600/90 text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-xl">Toque para ampliar</div>
               </div>
            </div>

            <div className="bg-slate-900/50 p-4 rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <Info size={12} className="text-blue-500" />
                <span className="text-[10px] font-bold text-slate-400">Observações técnicas</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed italic">"Leitura realizada sem impedimentos. Lacre intacto. Próxima verificação: 15/Junho."</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="relative w-full max-w-[320px] mx-auto aspect-[9/18.5] bg-slate-950 rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden font-sans group">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-30"></div>
      
      {/* App Content Carousel */}
      <div className="h-full relative bg-[#0F1115]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScreen}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="h-full"
          >
            {screens[activeScreen].content}
          </motion.div>
        </AnimatePresence>

        {/* Dynamic Bottom Navigation Mockup */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#14161B]/95 backdrop-blur-xl border-t border-white/5 flex justify-around items-center px-4 z-40">
          {screens.map((screen, idx) => (
            <button 
              key={screen.id}
              onClick={() => setActiveScreen(idx)}
              className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${activeScreen === idx ? 'scale-110' : 'opacity-40 hover:opacity-70'}`}
            >
              <div className={`p-1.5 rounded-xl transition-colors ${activeScreen === idx ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'text-slate-400'}`}>
                {idx === 0 && <LayoutGrid size={18} />}
                {idx === 1 && <TrendingUp size={18} />}
                {idx === 2 && <Bell size={18} />}
                {idx === 3 && <Camera size={18} />}
              </div>
              <span className={`text-[8px] font-black uppercase tracking-tighter ${activeScreen === idx ? 'text-blue-500' : 'text-slate-600'}`}>
                {screen.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Side Tooltip for Feature Highlighting */}
      <div className="absolute top-1/2 -right-16 translate-y-[-50%] space-y-4 hidden lg:block opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-right-4">
        {[
          { icon: <TrendingUp size={14} />, text: "Gráficos BI" },
          { icon: <Camera size={14} />, text: "Fotos 4K" },
          { icon: <Bell size={14} />, text: "Push Alerts" }
        ].map((item, i) => (
          <div key={i} className="bg-white p-3 rounded-2xl shadow-xl flex items-center gap-2 border border-slate-100 min-w-[120px]">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">{item.icon}</div>
            <span className="text-[10px] font-black text-slate-800 uppercase tracking-tighter">{item.text}</span>
          </div>
        ))}
      </div>
      
      {/* Progress Line */}
      <div className="absolute bottom-20 left-0 right-0 h-0.5 bg-slate-800 z-50">
        <motion.div 
          className="h-full bg-blue-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          key={activeScreen}
          transition={{ duration: 6, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export default AppMockup;
