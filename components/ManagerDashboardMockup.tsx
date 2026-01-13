
import React from 'react';
import { motion } from 'framer-motion';
import { Activity, BarChart3, Droplets, Flame, Search, Bell, Settings, PieChart, ArrowUpRight } from 'lucide-react';

const ManagerDashboardMockup: React.FC = () => {
  return (
    <div className="relative w-full aspect-[16/10] bg-slate-950 rounded-[2.5rem] border-[12px] border-slate-900 shadow-2xl overflow-hidden group">
      {/* OS Interface Shell */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-slate-900/50 flex items-center px-6 gap-2 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50"></div>
        </div>
        <div className="mx-auto bg-slate-800/50 rounded-lg px-3 py-1 text-[8px] text-slate-500 font-mono">manager.newread.com/dashboard</div>
      </div>

      <div className="flex h-full pt-10">
        {/* Sidebar */}
        <div className="w-16 border-r border-white/5 flex flex-col items-center py-6 gap-6">
          <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white mb-4">
            <Activity size={16} />
          </div>
          <div className="space-y-6">
            <BarChart3 size={18} className="text-blue-500" />
            <Droplets size={18} className="text-slate-600" />
            <Flame size={18} className="text-slate-600" />
            <Search size={18} className="text-slate-600" />
          </div>
          <div className="mt-auto space-y-6 mb-4">
            <Bell size={18} className="text-slate-600" />
            <Settings size={18} className="text-slate-600" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-[#0B0E14] overflow-hidden">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h4 className="text-white font-black text-xl tracking-tight">Painel de Monitoramento</h4>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Tempo Real • Todas as Unidades</p>
            </div>
            <div className="flex gap-3">
              <div className="bg-slate-800/50 p-2 rounded-xl border border-white/5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[9px] text-slate-300 font-bold">1.242 ONLINE</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { label: 'Consumo Global (m³)', val: '14.280', icon: <PieChart size={14}/>, color: 'text-blue-400' },
              { label: 'Glosas Evitadas', val: '98.2%', icon: <Activity size={14}/>, color: 'text-emerald-400' },
              { label: 'Alertas Ativos', val: '12', icon: <Flame size={14}/>, color: 'text-orange-400' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/50 p-4 rounded-2xl border border-white/5"
              >
                <div className={`mb-2 ${stat.color}`}>{stat.icon}</div>
                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-black text-white">{stat.val}</span>
                  <span className="text-[8px] text-emerald-500 font-bold">+2.4%</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chart Simulation */}
          <div className="bg-slate-900/50 rounded-2xl p-6 border border-white/5 h-40 relative">
             <div className="flex justify-between items-center mb-4">
               <span className="text-[10px] text-slate-400 font-bold">Volume de Medição (24h)</span>
               <ArrowUpRight size={14} className="text-blue-500" />
             </div>
             <div className="flex items-end gap-1.5 h-full pb-4">
                {[40, 60, 45, 90, 65, 80, 55, 70, 85, 45, 30, 60, 75, 50, 40, 95].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.05, duration: 1 }}
                    className="flex-1 bg-gradient-to-t from-blue-600/10 to-blue-500 rounded-sm"
                  />
                ))}
             </div>
          </div>
        </div>
      </div>

      {/* Immersive Overlay Gradient */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-blue-500/5 via-transparent to-orange-500/5"></div>
      
      {/* Interactive Hover Light */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
    </div>
  );
};

export default ManagerDashboardMockup;
