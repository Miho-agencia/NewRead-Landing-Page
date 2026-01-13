
import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-8">
              <Logo />
            </div>
            <p className="text-slate-400 mb-10 leading-relaxed font-medium">
              Transformando a medição individualizada através de tecnologia de ponta e transparência total para o setor de utilities.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-slate-400 hover:text-[#007BFF] hover:bg-white/10 transition-all border border-white/5">
                <Linkedin size={22} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-slate-400 hover:text-[#FFB35B] hover:bg-white/10 transition-all border border-white/5">
                <Instagram size={22} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-slate-400 hover:text-[#007BFF] hover:bg-white/10 transition-all border border-white/5">
                <Twitter size={22} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8">Plataforma</h5>
            <ul className="space-y-5 text-slate-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Manager Web</a></li>
              <li><a href="#" className="hover:text-white transition-colors">App Leiturista</a></li>
              <li><a href="#" className="hover:text-white transition-colors">App do Morador</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API & Integrações</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8">Empresa</h5>
            <ul className="space-y-5 text-slate-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog Tech</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cases de Sucesso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato Comercial</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8">Newsletter</h5>
            <p className="text-slate-400 mb-6 font-medium">Inscreva-se para receber insights técnicos sobre gestão de medição.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Seu e-mail corporativo" 
                className="bg-white/5 border border-white/10 focus:border-[#007BFF] focus:ring-1 focus:ring-[#007BFF] text-white px-5 py-4 rounded-xl text-sm transition-all"
              />
              <button className="bg-[#007BFF] hover:bg-[#0069d9] text-white px-5 py-4 rounded-xl text-sm font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95">
                Assinar Newsletter
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
            © 2024 NewRead Technology. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-slate-500 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
