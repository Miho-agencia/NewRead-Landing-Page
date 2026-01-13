
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  CheckCircle2, 
  AlertTriangle, 
  Camera, 
  RefreshCw, 
  ChevronLeft,
  LayoutGrid,
  Info,
  Clock,
  Send,
  Play,
  Droplets,
  Flame
} from 'lucide-react';

const ReaderAppMockup: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const screens = [
    {
      title: "Minhas Rotas",
      content: (
        <div className="flex flex-col h-full bg-[#0F1115]">
          <div className="p-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">Minhas Rotas</h2>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Outubro 2023</p>
            </div>
            <RefreshCw size={18} className="text-blue-500" />
          </div>
          <div className="p-4 space-y-4">
            <div className="bg-[#1C1F26] p-4 rounded-2xl border border-white/5 border-l-4 border-l-blue-500">
              <div className="flex justify-between items-start mb-3">
                <span className="text-[9px] bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded-full font-black">EM ANDAMENTO</span>
                <span className="text-[9px] text-slate-500">Ref: Out/2023</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-1">Rota Centro - Setor A</h3>
              <p className="text-[9px] text-slate-500 mb-3">R. das Flores, Av. Central e adjacências</p>
              <div className="flex gap-4 mb-3">
                <span className="text-[9px] text-slate-400 flex items-center gap-1"><LayoutGrid size={10}/> 14 Condos</span>
                <span className="text-[9px] text-slate-400 flex items-center gap-1"><Droplets size={10}/> Água/Gás</span>
              </div>
              <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden mb-1">
                <motion.div initial={{ width: 0 }} animate={{ width: "45%" }} className="bg-blue-500 h-full" />
              </div>
              <p className="text-[8px] text-blue-400 font-bold">45% Concluído • 6/14</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Coleta de Dados",
      content: (
        <div className="flex flex-col h-full bg-[#0F1115] relative">
          <div className="p-4 flex items-center gap-4 border-b border-white/5 bg-[#0F1115]/95 backdrop-blur-md z-10">
            <ChevronLeft size={20} className="text-slate-400" />
            <h2 className="text-sm font-bold text-white">Unidade 302 - Bloco B</h2>
          </div>
          <div className="p-4 space-y-4 relative z-0">
            {/* Visual Scanner Effect */}
            <div className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden border border-white/10 group">
               <img src="https://images.unsplash.com/photo-1542013936693-88463832c846?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-60" />
               <motion.div 
                initial={{ top: "0%" }}
                animate={{ top: "100%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-0.5 bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10"
               />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,17,21,0.4)_100%)]"></div>
               <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                 <span className="text-[8px] font-black text-white bg-blue-600 px-2 py-1 rounded-lg">SCANNING...</span>
                 <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-blue-400 animate-ping"></div>
                    <div className="w-1 h-1 rounded-full bg-blue-400 animate-ping delay-75"></div>
                    <div className="w-1 h-1 rounded-full bg-blue-400 animate-ping delay-150"></div>
                 </div>
               </div>
            </div>

            <div className="bg-[#1C1F26] p-4 rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 mb-3">
                <Flame size={14} className="text-orange-500" />
                <span className="text-xs font-bold text-white">Gás</span>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl text-center border border-white/5">
                <span className="text-2xl font-black text-white tracking-widest">00415</span>
              </div>
            </div>
            
            <button className="w-full bg-blue-600 p-4 rounded-2xl font-black text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 active:scale-95 transition-all">
              Confirmar Leitura
            </button>
          </div>
        </div>
      )
    },
    {
      title: "Validação GPS",
      content: (
        <div className="flex flex-col h-full bg-[#0F1115]">
          <div className="p-4 flex items-center gap-4">
            <h2 className="text-sm font-bold text-white">Validação Geográfica</h2>
          </div>
          <div className="flex-1 p-4">
             <div className="h-full bg-slate-900 rounded-[2rem] relative overflow-hidden border border-white/10">
                <div className="absolute inset-0 opacity-40 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-46.6559,-23.5592,15/300x400?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja2V4YW1wbGUifQ')] bg-cover"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-xl"></div>
                   </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                   <p className="text-[10px] text-slate-400 mb-1">PRECISÃO ATUAL</p>
                   <p className="text-xs font-bold text-white">± 2.5 metros</p>
                   <div className="mt-2 flex items-center gap-2 text-[8px] text-emerald-400 font-black uppercase">
                      <CheckCircle2 size={10} /> Localização Validada
                   </div>
                </div>
             </div>
          </div>
        </div>
      )
    },
    {
       title: "Sync",
       content: (
         <div className="flex flex-col h-full bg-blue-600 items-center justify-center text-center p-8">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 rounded-full border-4 border-white/20 border-t-white mb-6"
            />
            <h2 className="text-2xl font-black text-white mb-2">Sincronizando</h2>
            <p className="text-blue-100 text-sm opacity-80">Enviando 125 leituras criptografadas para a nuvem.</p>
         </div>
       )
    }
  ];

  return (
    <div className="relative w-full max-w-[320px] mx-auto aspect-[9/18.5] bg-slate-950 rounded-[3rem] border-[10px] border-slate-900 shadow-[0_50px_100px_rgba(0,0,0,0.4)] overflow-hidden font-sans group">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-30"></div>
      
      <div className="h-full relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScreen}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="h-full"
          >
            {screens[activeScreen].content}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 left-0 right-0 px-8 z-40">
        <div className="flex justify-center gap-2">
          {screens.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 transition-all duration-700 rounded-full ${activeScreen === i ? 'w-8 bg-blue-500' : 'w-2 bg-slate-700'}`}
            />
          ))}
        </div>
      </div>
      
      {/* Immersive Depth Effect */}
      <div className="absolute inset-0 pointer-events-none border-t border-l border-white/10 rounded-[3rem]"></div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/5 to-transparent"></div>
    </div>
  );
};

export default ReaderAppMockup;
