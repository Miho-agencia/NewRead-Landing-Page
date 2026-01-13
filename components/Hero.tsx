
import React, { Suspense, useRef } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';

const ThreeBackground = () => (
  <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <Suspense fallback={null}>
        <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
          <Sphere args={[1.8, 100, 200]} scale={2.2}>
            <MeshDistortMaterial
              color="#007BFF"
              speed={1.5}
              distort={0.45}
              radius={1}
            />
          </Sphere>
        </Float>
      </Suspense>
    </Canvas>
  </div>
);

const Hero: React.FC<{ onOpenAgent: () => void }> = ({ onOpenAgent }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--x', `${x}px`);
    e.currentTarget.style.setProperty('--y', `${y}px`);
  };

  return (
    <section ref={containerRef} className="relative min-h-[110vh] flex items-center pt-40 pb-32 overflow-hidden bg-white">
      <motion.div style={{ scale: bgScale }} className="absolute inset-0 z-0">
        <ThreeBackground />
      </motion.div>
      
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10 w-full">
        <motion.div style={{ y: textY, opacity }} className="relative">
          <header className="flex flex-col mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[2px] w-12 bg-blue-600"></div>
              <span className="text-blue-600 font-black uppercase tracking-[0.5em] text-[10px]">
                High-Performance Utilities
              </span>
            </motion.div>
            
            <h1 className="font-huge font-black text-slate-900 mb-0 tracking-tighter">
              NEW<span className="text-blue-600">READ</span>
            </h1>
            <h2 className="font-huge font-black text-outline -mt-4 md:-mt-12 select-none uppercase">
              Precision
            </h2>
          </header>

          <div className="grid lg:grid-cols-12 gap-16 items-end">
            <div className="lg:col-span-6">
              <p className="text-2xl md:text-3xl text-slate-600 mb-14 font-medium leading-[1.2] max-w-2xl">
                Elevamos a medição individualizada ao nível de <span className="text-slate-900 font-black italic">Telemetria Enterprise</span>. Rapidez cirúrgica e controle absoluto.
              </p>
              
              <div className="flex flex-wrap gap-8 items-center">
                <button 
                  onMouseMove={handleMouseMove}
                  onClick={onOpenAgent}
                  className="magnetic-glow group bg-slate-900 text-white px-14 py-8 rounded-full font-black text-xl flex items-center gap-5 transition-all hover:bg-blue-600 active:scale-95 shadow-[0_20px_50px_rgba(0,123,255,0.25)]"
                >
                  START ENGINE
                  <ArrowRight size={26} className="group-hover:translate-x-3 transition-transform duration-500" />
                </button>
                <div className="flex flex-col">
                  <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest">Pilot Project</span>
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">3 Months Trial Available</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-wrap justify-center lg:justify-end gap-16">
              {[
                { label: 'Data Speed', val: '4.2ms', icon: <Zap size={18}/> },
                { label: 'Uptime', val: '99.9%', icon: <ShieldCheck size={18}/> },
                { label: 'Accuracy', val: '±0.1%', icon: <CheckCircle2 size={18}/> }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-end text-right group">
                  <div className="text-blue-600 mb-4 bg-blue-50 p-3 rounded-2xl group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                  <span className="text-6xl font-black text-slate-900 leading-none mb-2 tracking-tighter">{stat.val}</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <span className="text-[8px] font-black uppercase tracking-[0.6em]">Scroll to Deploy</span>
        <div className="w-px h-24 bg-gradient-to-b from-blue-600 via-blue-400 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
