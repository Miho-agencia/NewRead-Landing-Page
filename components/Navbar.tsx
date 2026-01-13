
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, BarChart3, Smartphone, Users, ChevronRight, LayoutGrid, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

interface NavbarProps {
  onOpenAgent: () => void;
  onViewChange: (view: 'home' | 'pricing') => void;
  currentView: 'home' | 'pricing';
}

const SOLUTIONS = [
  { 
    title: "Administradoras", 
    desc: "Gestão completa e transparente para condomínios.", 
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  { 
    title: "Empresas de Leitura", 
    desc: "Produtividade extrema e validação em campo.", 
    icon: Smartphone,
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  { 
    title: "Utilities", 
    desc: "BI e controle de perdas em larga escala.", 
    icon: BarChart3,
    color: "text-orange-600",
    bg: "bg-orange-50"
  }
];

const Navbar: React.FC<NavbarProps> = ({ onOpenAgent, onViewChange, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFlyout, setActiveFlyout] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string, isAnchor: boolean) => {
    if (isAnchor) {
      if (currentView !== 'home') {
        onViewChange('home');
        setTimeout(() => {
          const el = document.querySelector(href);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onViewChange('pricing');
    }
    setIsMobileMenuOpen(false);
    setActiveFlyout(null);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 py-4 shadow-xl' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <button onClick={() => onViewChange('home')} className="hover:scale-105 transition-transform active:scale-95">
            <Logo variant="dark" />
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {/* Flyout Soluções */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveFlyout('solucoes')}
                onMouseLeave={() => setActiveFlyout(null)}
              >
                <button 
                  onClick={(e) => handleLinkClick(e, '#solucao', true)}
                  className={`flex items-center gap-1.5 text-sm font-black uppercase tracking-widest transition-colors py-2 ${
                    activeFlyout === 'solucoes' ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Soluções <ChevronDown size={14} className={`transition-transform duration-300 ${activeFlyout === 'solucoes' ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {activeFlyout === 'solucoes' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[480px] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.12)] rounded-[2rem] border border-slate-100 p-6 mt-2 grid grid-cols-1 gap-2"
                    >
                      {SOLUTIONS.map((item, idx) => (
                        <button 
                          key={idx}
                          onClick={(e) => handleLinkClick(e, '#solucao', true)}
                          className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all text-left group/item"
                        >
                          <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-xl flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform`}>
                            <item.icon size={24} />
                          </div>
                          <div>
                            <p className="text-sm font-black text-slate-900 mb-1">{item.title}</p>
                            <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                          </div>
                        </button>
                      ))}
                      <div className="mt-2 pt-4 border-t border-slate-100 px-4">
                        <button onClick={(e) => handleLinkClick(e, '#diferenciais', true)} className="text-[10px] font-black uppercase tracking-widest text-blue-600 hover:text-blue-700 flex items-center gap-2">
                          Ver todos diferenciais técnicos <ChevronRight size={12} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button 
                onClick={(e) => handleLinkClick(e, '#diferenciais', true)}
                className="text-sm font-black uppercase tracking-widest text-slate-600 hover:text-slate-900 transition-colors"
              >
                Tecnologia
              </button>

              <button 
                onClick={(e) => handleLinkClick(e, '/precos', false)}
                className={`text-sm font-black uppercase tracking-widest transition-colors ${
                  currentView === 'pricing' ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Preços
              </button>
            </div>

            <div className="h-8 w-px bg-slate-200"></div>

            <button 
              onClick={onOpenAgent}
              className="bg-slate-900 hover:bg-blue-600 text-white px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl shadow-slate-200 active:scale-95 flex items-center gap-3"
            >
              Agendar Demo
              <Zap size={14} className="fill-current" />
            </button>
          </div>

          <button 
            className="lg:hidden p-3 text-slate-900 bg-slate-100 rounded-2xl active:scale-90 transition-transform" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="lg:hidden fixed inset-0 top-[88px] bg-white p-8 flex flex-col gap-10 overflow-y-auto"
          >
            <div className="space-y-8">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Soluções por Perfil</p>
              {SOLUTIONS.map((link) => (
                <button 
                  key={link.title}
                  onClick={(e) => handleLinkClick(e, '#solucao', true)}
                  className="flex items-center gap-6 group text-left w-full"
                >
                  <div className={`w-14 h-14 ${link.bg} ${link.color} rounded-2xl flex items-center justify-center shrink-0`}>
                    <link.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-slate-900 leading-none">{link.title}</h4>
                    <p className="text-xs text-slate-500 font-medium mt-1">{link.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="h-px bg-slate-100"></div>

            <div className="flex flex-col gap-6">
              <button onClick={(e) => handleLinkClick(e, '/precos', false)} className="text-2xl font-black text-slate-900 text-left">Preços e Planos</button>
              <button onClick={(e) => handleLinkClick(e, '#diferenciais', true)} className="text-2xl font-black text-slate-900 text-left">Diferenciais Técnicos</button>
            </div>

            <button 
              onClick={onOpenAgent}
              className="mt-auto bg-blue-600 text-white py-6 rounded-3xl font-black text-xl shadow-2xl shadow-blue-500/30"
            >
              Falar com Especialista
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
