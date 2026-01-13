
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Solutions from './components/Solutions';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import SalesAgent from './components/SalesAgent';
import FloatingAgentButton from './components/FloatingAgentButton';

const App: React.FC = () => {
  const [isAgentOpen, setIsAgentOpen] = useState(false);

  useEffect(() => {
    const handleOpenAgent = (e: Event) => {
      e.preventDefault();
      setIsAgentOpen(true);
    };

    window.addEventListener('open-sales-agent', handleOpenAgent);
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "NewRead",
      "operatingSystem": "Web, Android, iOS",
      "applicationCategory": "BusinessApplication",
      "offers": {
        "@type": "Offer",
        "price": "299.00",
        "priceCurrency": "BRL"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "120"
      }
    });
    document.head.appendChild(script);
    
    return () => {
      window.removeEventListener('open-sales-agent', handleOpenAgent);
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-600/10 selection:text-blue-700">
      <Navbar onOpenAgent={() => setIsAgentOpen(true)} />
      
      <main>
        <Hero onOpenAgent={() => setIsAgentOpen(true)} />
        
        {/* Social Proof Bar */}
        <div className="py-12 border-y border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-bold text-slate-900 tracking-widest">UTILITY GROUP</span>
            <span className="text-xl font-bold text-slate-900 tracking-widest">CONDO_FLOW</span>
            <span className="text-xl font-bold text-slate-900 tracking-widest">MEASURE_PRO</span>
            <span className="text-xl font-bold text-slate-900 tracking-widest">WATER_SENSE</span>
            <span className="text-xl font-bold text-slate-900 tracking-widest">GAS_MASTER</span>
          </div>
        </div>

        <Problems />
        <Solutions />
        <Features />
        
        {/* Mid-CTA Section */}
        <section className="py-24 relative overflow-hidden bg-slate-900">
          <div className="absolute inset-0 bg-blue-600 opacity-20"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h3 className="text-4xl font-extrabold text-white mb-6">Pronto para digitalizar sua empresa de medição?</h3>
            <p className="text-xl text-slate-300 mb-10">
              Junte-se a centenas de empresas que já reduziram custos operacionais e aumentaram a precisão de suas leituras.
            </p>
            <button 
              onClick={() => setIsAgentOpen(true)}
              className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-blue-600/30 transition-all transform hover:scale-105 active:scale-95"
            >
              Solicitar Orçamento Grátis
            </button>
          </div>
        </section>

        <Pricing />
      </main>

      <Footer />
      <StickyCTA />
      
      {/* Botão Flutuante persistente para o Agente IA */}
      <FloatingAgentButton onClick={() => setIsAgentOpen(true)} />
      
      {/* O Agente de Vendas IA */}
      <SalesAgent isOpen={isAgentOpen} onClose={() => setIsAgentOpen(false)} />
    </div>
  );
};

export default App;
