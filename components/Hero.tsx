
import React, { Suspense } from 'react';
import { ArrowRight, Play, Activity } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

const ThreeBackground = () => (
  <div className="absolute inset-0 z-0 opacity-20">
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <Suspense fallback={null}>
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color="#007BFF"
              speed={3}
              distort={0.4}
              radius={1}
            />
          </Sphere>
        </Float>
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  </div>
);

const Hero: React.FC<{ onOpenAgent: () => void }> = ({ onOpenAgent }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <ThreeBackground />
      
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-3 bg-white/50 border border-slate-200 px-5 py-2.5 rounded-full text-slate-900 text-sm font-semibold mb-8 backdrop-blur-md">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#007BFF] animate-pulse"></span>
              NewRead Enterprise <span className="text-slate-300">|</span> <span className="text-[#007BFF]">High Precision IoT</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tighter">
              Gestão Inteligente de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] to-[#FFB35B]">Utilities</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              A plataforma definitiva para empresas de medição individualizada. Elimine glosas, automatize o campo e garanta transparência absoluta.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <button 
                onClick={onOpenAgent}
                className="bg-[#007BFF] hover:bg-[#0069d9] text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-2 transition-all shadow-2xl shadow-blue-500/30 group active:scale-95"
              >
                Agendar Demonstração
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-2 transition-all shadow-sm">
                <Play className="w-6 h-6 fill-[#FFB35B] text-[#FFB35B]" />
                Assista o Vídeo
              </button>
            </div>

            <div className="mt-16 flex items-center justify-center lg:justify-start gap-12">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900">40%</span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#007BFF]">Redução de Glosas</span>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900">100k+</span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#007BFF]">Unidades Ativas</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-20 group">
              <div className="absolute -inset-10 bg-[#007BFF]/5 blur-[120px] rounded-full group-hover:bg-[#007BFF]/10 transition-all duration-1000"></div>
              
              <div className="relative bg-white border border-slate-200 rounded-[40px] shadow-2xl p-2">
                <div className="bg-slate-50 rounded-[32px] border border-slate-100 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800" 
                    alt="NewRead Platform Dashboard" 
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-[2000ms]"
                  />
                </div>
              </div>
              
              <div className="absolute -top-10 -right-10 bg-[#FFB35B] text-slate-950 p-6 rounded-[30px] shadow-2xl font-black text-lg flex items-center gap-3 animate-bounce shadow-orange-500/20">
                <Activity size={24} />
                LIVE SYNC
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
