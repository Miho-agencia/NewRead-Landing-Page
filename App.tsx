
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Solutions from './components/Solutions';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

const App: React.FC = () => {
  // Simple SEO structured data injection
  useEffect(() => {
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
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-cyan-500/30 selection:text-cyan-400">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Social Proof Bar */}
        <div className="py-8 border-y border-white/5 bg-slate-950/50">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-bold text-white tracking-widest">UTILITY GROUP</span>
            <span className="text-xl font-bold text-white tracking-widest">CONDO_FLOW</span>
            <span className="text-xl font-bold text-white tracking-widest">MEASURE_PRO</span>
            <span className="text-xl font-bold text-white tracking-widest">WATER_SENSE</span>
            <span className="text-xl font-bold text-white tracking-widest">GAS_MASTER</span>
          </div>
        </div>

        <Problems />
        <Solutions />
        <Features />
        
        {/* Mid-CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-cyan-600 opacity-10"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h3 className="text-4xl font-extrabold text-white mb-6">Pronto para digitalizar sua empresa de medição?</h3>
            <p className="text-xl text-slate-300 mb-10">
              Junte-se a centenas de empresas que já reduziram custos operacionais e aumentaram a precisão de suas leituras.
            </p>
            <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-10 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-cyan-500/30 transition-all transform hover:scale-105 active:scale-95">
              Solicitar Orçamento Grátis
            </button>
          </div>
        </section>

        <Pricing />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;
