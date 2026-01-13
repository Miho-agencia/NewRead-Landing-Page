
import React, { Suspense, useRef, useMemo } from 'react';
import { ArrowRight, ShieldCheck, Zap, Activity, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useScroll, useTransform } from 'framer-motion';

const InteractiveGrid = () => {
  const pointsRef = useRef<THREE.Points>(null!);
  const { mouse } = useThree();
  
  const count = 1500;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15; // X
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10; // Y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5; // Z
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Suave oscilação e reação ao mouse
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, mouse.y * 0.1, 0.05);
    pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, mouse.x * 0.1, 0.05);
    
    // Movimento ondulado individual
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const x = positions[i * 3];
      const z = positions[i * 3 + 2];
      positions[i * 3 + 1] += Math.sin(time + x * 0.5 + z * 0.5) * 0.002;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#007BFF"
        size={0.035}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
};

const Hero: React.FC<{ onOpenAgent: () => void }> = ({ onOpenAgent }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--x', `${x}px`);
    e.currentTarget.style.setProperty('--y', `${y}px`);
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white engineering-grid">
      {/* 3D Background Container */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <InteractiveGrid />
            {/* Adicionando uma sutil luz direcional para dar profundidade aos pontos */}
            <pointLight position={[5, 5, 5]} intensity={0.5} color="#007BFF" />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 w-full">
        <motion.div style={{ y: textY, opacity }} className="relative">
          <header className="flex flex-col mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-[1px] bg-blue-600"></div>
              <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px]">
                Escalabilidade Sem Fricção
              </span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-slate-900 mb-0 tracking-tighter leading-[0.8] mix-blend-multiply">
              PRECISÃO<br/>
              <span className="text-blue-600">CRÍTICA.</span>
            </h1>
          </header>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-7">
              <p className="text-xl md:text-2xl text-slate-600 mb-10 font-medium leading-relaxed max-w-2xl">
                Líder em infraestrutura digital para gestão de utilities. Nossa tecnologia <span className="text-slate-900 font-bold">Offline-First</span> e Auditoria via IA garante conformidade e ROI imediato para sua operação.
              </p>
              
              <div className="flex flex-wrap gap-6 items-center mb-12">
                <button 
                  onMouseMove={handleMouseMove}
                  onClick={onOpenAgent}
                  className="magnetic-glow group bg-slate-900 text-white px-10 py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] flex items-center gap-4 transition-all hover:bg-blue-600 active:scale-95 shadow-2xl shadow-blue-500/10"
                >
                  Agendar Demonstração Técnica
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                
                <div className="flex items-center gap-4 border-l border-slate-200 pl-6">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                    <ShieldCheck size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-900 font-black text-[11px] leading-none">Consultoria Enterprise</span>
                    <span className="text-blue-600 text-[9px] font-bold uppercase tracking-widest mt-1">SLA de 99.9%</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">LGPD Compliance</span>
                </div>
                <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Geolocalização RTK</span>
                </div>
                <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Auditoria Visual</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-white/40 backdrop-blur-md p-6 rounded-3xl border border-slate-100 hover:border-blue-200 transition-colors group">
                <div className="text-blue-600 mb-4 bg-white w-10 h-10 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                   <Activity size={20} />
                </div>
                <p className="text-3xl font-black text-slate-900 tracking-tighter mb-1">-92%</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Glosas por Erro Humano</p>
              </div>
              
              <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-2xl shadow-blue-500/10 group">
                <div className="text-blue-400 mb-4 bg-white/5 w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                   <CheckCircle2 size={20} />
                </div>
                <p className="text-3xl font-black text-white tracking-tighter mb-1">100%</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-300">Conformidade de Campo</p>
              </div>

              <div className="col-span-2 bg-blue-600 p-8 rounded-3xl text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform duration-1000">
                  <Zap size={80} />
                </div>
                <div className="relative z-10">
                  <p className="text-3xl font-black tracking-tighter mb-1 italic">ROI IMEDIATO</p>
                  <p className="text-[10px] font-bold text-blue-100 uppercase tracking-widest opacity-80">Redução de Inadimplência via Transparência</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative System Coordinates */}
      <div className="absolute bottom-10 left-12 hidden lg:flex items-center gap-8 opacity-20 pointer-events-none">
        <div className="flex flex-col">
          <span className="text-[7px] font-black uppercase tracking-[0.8em] mb-2 text-slate-900">NODE_LAT: 23.5505 S</span>
          <span className="text-[7px] font-black uppercase tracking-[0.8em] text-slate-900">NODE_LNG: 46.6333 W</span>
        </div>
        <div className="w-px h-8 bg-slate-300"></div>
        <div className="text-[7px] font-black uppercase tracking-[0.8em] text-slate-900">SYSTEM_STABLE: ACTIVE</div>
      </div>
    </section>
  );
};

export default Hero;
