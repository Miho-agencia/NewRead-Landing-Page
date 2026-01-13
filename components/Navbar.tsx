
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC<{ onOpenAgent: () => void }> = ({ onOpenAgent }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-lg border-b border-slate-200 py-3 shadow-md' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="transform hover:scale-105 transition-transform">
            <Logo variant="dark" />
          </a>

          <div className="hidden md:flex items-center gap-10">
            <a href="#solucao" className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-semibold uppercase tracking-wider">Solução</a>
            <a href="#diferenciais" className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-semibold uppercase tracking-wider">Diferenciais</a>
            <a href="#precos" className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-semibold uppercase tracking-wider">Preços</a>
            <button 
              onClick={onOpenAgent}
              className="bg-[#007BFF] hover:bg-[#0069d9] text-white px-7 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-blue-500/20 active:scale-95"
            >
              Agendar Demonstração
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-900 p-2">
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white z-40 p-8 animate-in fade-in slide-in-from-right duration-300">
          <div className="flex flex-col gap-8">
            <a href="#solucao" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">Solução</a>
            <a href="#diferenciais" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">Diferenciais</a>
            <a href="#precos" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">Preços</a>
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAgent();
              }}
              className="bg-[#007BFF] text-white w-full py-5 rounded-2xl font-bold text-xl"
            >
              Agendar Demonstração
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
