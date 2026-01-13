
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import Logo from './Logo';
// Added missing imports from framer-motion
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenAgent: () => void;
  onViewChange: (view: 'home' | 'pricing') => void;
  currentView: 'home' | 'pricing';
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAgent, onViewChange, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string, isAnchor: boolean) => {
    if (isAnchor) {
      if (currentView !== 'home') {
        onViewChange('home');
        // Small delay to allow home to mount before scrolling
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
  };

  const navLinks = [
    { name: 'Solução', href: '#solucao', isAnchor: true },
    { name: 'Diferenciais', href: '#diferenciais', isAnchor: true },
    { name: 'Preços', href: '/precos', isAnchor: false },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 py-4 shadow-lg' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button onClick={() => onViewChange('home')} className="hover:scale-105 transition-all">
            <Logo variant="dark" />
          </button>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center bg-slate-100/50 p-1 rounded-2xl border border-slate-200/50">
              {navLinks.map((link) => (
                <button 
                  key={link.name}
                  onClick={(e) => handleLinkClick(e, link.href, link.isAnchor)}
                  className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                    (link.isAnchor && currentView === 'home') || (!link.isAnchor && currentView === 'pricing')
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
            <button 
              onClick={onOpenAgent}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-black text-sm transition-all shadow-xl shadow-blue-500/20 active:scale-95 flex items-center gap-2"
            >
              Agendar Demo
              <ChevronRight size={16} />
            </button>
          </div>

          <button 
            className="md:hidden p-2 text-slate-900" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-8 flex flex-col gap-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <button 
                key={link.name}
                onClick={(e) => handleLinkClick(e, link.href, link.isAnchor)}
                className="text-2xl font-black text-slate-900 text-left border-b border-slate-50 pb-4"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={onOpenAgent}
              className="bg-blue-600 text-white py-5 rounded-2xl font-black text-xl"
            >
              Falar com Consultor
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
