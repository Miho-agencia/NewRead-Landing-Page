
import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Flame, Zap, TrendingUp, Bell, User, LayoutGrid, ChevronRight, CheckCircle2 } from 'lucide-react';

const AppMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-[320px] mx-auto aspect-[9/18.5] bg-slate-950 rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden font-sans">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-30"></div>
      
      {/* App Content */}
      <div className="h-full flex flex-col pt-10 px-4 bg-[#0F1115] text-white">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border-2 border-blue-500 p-0.5 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Olá, João</p>
              <p className="text-sm font-bold">Apto 302 • Bloco B</p>
            </div>
          </div>
          <div className="relative">
            <Bell size={20} className="text-slate-400" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0F1115]"></span>
          </div>
        </div>

        {/* Current Estimate Card */}
        <div className="bg-[#1C1F26] rounded-2xl p-4 mb-6 border border-white/5">
          <div className="flex items-center gap-2 text-slate-400 mb-2">
            <LayoutGrid size={14} className="text-blue-500" />
            <span className="text-[10px] uppercase font-bold tracking-wider">Estimativa Atual</span>
          </div>
          <h3 className="text-2xl font-black mb-2">R$ 245,00</h3>
          <div className="flex items-center justify-between">
            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded-full font-bold">Dentro da média</span>
            <span className="text-[10px] text-slate-500">Vencimento: 10/11</span>
          </div>
        </div>

        {/* Consumption Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-[#1C1F26] p-4 rounded-2xl border border-white/5">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
              <Droplets size={16} className="text-blue-500" />
            </div>
            <p className="text-[10px] text-slate-400 mb-1">Água Fria</p>
            <p className="text-lg font-black">12 m³</p>
            <p className="text-[9px] text-emerald-400 font-bold">↓ 2% vs mês ant.</p>
          </div>
          <div className="bg-[#1C1F26] p-4 rounded-2xl border border-white/5">
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center mb-3">
              <Flame size={16} className="text-orange-500" />
            </div>
            <p className="text-[10px] text-slate-400 mb-1">Água Quente</p>
            <p className="text-lg font-black">4 m³</p>
            <p className="text-[9px] text-red-400 font-bold">↑ 5% vs mês ant.</p>
          </div>
        </div>

        {/* Charts Mockup */}
        <div className="bg-[#1C1F26] p-4 rounded-2xl border border-white/5 flex-1 mb-4 overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[10px] font-black uppercase tracking-widest">Tendência</p>
            <div className="text-[9px] text-slate-500 bg-slate-800 px-2 py-1 rounded-lg">Últimos 3 meses</div>
          </div>
          <div className="h-24 flex items-end gap-2 px-1">
            {[40, 60, 45, 80, 55, 90, 75].map((h, i) => (
              <div 
                key={i} 
                className={`flex-1 rounded-t-sm transition-all duration-1000 ${i === 5 ? 'bg-blue-500' : 'bg-slate-700'}`} 
                style={{ height: `${h}%` }}
              ></div>
            ))}
          </div>
          <div className="flex justify-between mt-2 px-1">
             <span className="text-[8px] text-slate-500 font-bold">SET</span>
             <span className="text-[8px] text-slate-500 font-bold">OUT</span>
             <span className="text-[8px] text-blue-500 font-bold">NOV</span>
          </div>
        </div>

        {/* Bottom Nav Mockup */}
        <div className="flex justify-between items-center py-4 border-t border-white/5 mt-auto">
          <div className="flex flex-col items-center gap-1">
            <LayoutGrid size={18} className="text-blue-500" />
            <span className="text-[8px] font-bold text-blue-500">Início</span>
          </div>
          <div className="flex flex-col items-center gap-1 opacity-40">
            <Droplets size={18} />
            <span className="text-[8px] font-bold">Consumo</span>
          </div>
          <div className="flex flex-col items-center gap-1 opacity-40">
            <Bell size={18} />
            <span className="text-[8px] font-bold">Avisos</span>
          </div>
          <div className="flex flex-col items-center gap-1 opacity-40">
            <User size={18} />
            <span className="text-[8px] font-bold">Perfil</span>
          </div>
        </div>
      </div>
      
      {/* Floating Elements (Visual Polish) */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -right-12 z-40 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 hidden lg:block"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
            <CheckCircle2 className="text-orange-500" size={20} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-900 uppercase tracking-tighter">Foto Validada</p>
            <p className="text-[9px] text-slate-500 font-medium">Histórico Disponível</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppMockup;
