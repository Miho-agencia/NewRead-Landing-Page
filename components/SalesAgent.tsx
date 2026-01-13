
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI, Type } from "@google/genai";

const SYSTEM_INFO = {
  pilot_offer: "Projeto Piloto NewRead: 3 meses grátis para 1 condomínio experimental.",
  modules: "Manager Web (Gestão), App Leiturista (Campo/Offline), App Morador (Transparência).",
  pricing: "Starter (R$ 299/mês), Professional (R$ 899/mês), Enterprise (Sob Consulta).",
  promotions: "50% de desconto na taxa de implementação para fechamentos este mês."
};

const SalesAgent: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; text: string; isTool?: boolean }[]>([
    { role: 'ai', text: 'Olá! Sou o consultor virtual da NewRead. Vi que você tem interesse em otimizar sua gestão de utilities. Gostaria de conhecer nosso projeto piloto de 3 meses para um condomínio?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: messages.map(m => ({
          role: m.role === 'ai' ? 'model' : 'user',
          parts: [{ text: m.text }]
        })).concat([{ role: 'user', parts: [{ text: userMessage }] }]),
        config: {
          systemInstruction: `
            Você é o Especialista de Vendas Sênior da NewRead.
            OBJETIVO: Converter o usuário para o "Projeto Piloto NewRead" (3 meses grátis para 1 condomínio).
            PERSONA: Profissional, consultivo, focado em ROI e tecnologia.
            REGRAS:
            1. Se perguntarem sobre valores, use a função getPricing ou informe os planos Starter (299) e Pro (899).
            2. Sempre mencione que o piloto de 3 meses é a melhor forma de validar a economia.
            3. Para agendar, pergunte o melhor horário e use a ferramenta de agendamento.
            4. Responda de forma concisa e em Português do Brasil.
            5. Use informações técnicas: Offline-first, Validação por Foto, Dashboards BI.
          `,
          tools: [{
            functionDeclarations: [
              {
                name: "get_system_specs",
                description: "Retorna detalhes técnicos sobre os módulos Manager, Leiturista e Morador."
              },
              {
                name: "get_pricing_and_promos",
                description: "Consulta valores atuais, descontos e detalhes do projeto piloto de 3 meses."
              },
              {
                name: "schedule_demo",
                parameters: {
                  type: Type.OBJECT,
                  properties: {
                    date: { type: Type.STRING, description: "Data sugerida pelo usuário" },
                    time: { type: Type.STRING, description: "Hora sugerida" },
                    email: { type: Type.STRING, description: "Email de contato" }
                  },
                  required: ["date", "email"]
                },
                description: "Registra um agendamento de reunião com um vendedor disponível."
              }
            ]
          }]
        }
      });

      if (response.functionCalls) {
        for (const call of response.functionCalls) {
          if (call.name === 'get_pricing_and_promos') {
            setMessages(prev => [...prev, { role: 'ai', text: `Consultando condições especiais... ${SYSTEM_INFO.pilot_offer} Planos: ${SYSTEM_INFO.pricing}`, isTool: true }]);
          } else if (call.name === 'schedule_demo') {
            setMessages(prev => [...prev, { role: 'ai', text: `Perfeito! Agendei sua demonstração para ${call.args.date}. Nossa equipe enviará o convite para ${call.args.email}.`, isTool: true }]);
          } else {
             setMessages(prev => [...prev, { role: 'ai', text: response.text || "Entendido. Como posso ajudar mais?" }]);
          }
        }
      } else {
        setMessages(prev => [...prev, { role: 'ai', text: response.text || "Desculpe, tive um problema técnico. Pode repetir?" }]);
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', text: "No momento estou atualizando meus sistemas. Pode tentar novamente em alguns instantes?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-[100] w-[90vw] md:w-[450px] h-[600px] bg-white border border-slate-200 rounded-[32px] shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-[#007BFF] to-[#0052cc] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                <Bot className="text-white" size={24} />
              </div>
              <div>
                <h4 className="text-white font-black text-sm uppercase tracking-widest">Consultor NewRead</h4>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px] text-blue-100 font-bold uppercase">Online e Pronto</span>
                </div>
              </div>
            </div>
            <button onClick={onClose} className="text-white/80 hover:text-white p-2">
              <X size={24} />
            </button>
          </div>

          {/* Chat Body */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide bg-slate-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${m.role === 'ai' ? 'bg-blue-100 text-blue-600' : 'bg-slate-200 text-slate-600'}`}>
                    {m.role === 'ai' ? <Bot size={16} /> : <User size={16} />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                    m.role === 'user' 
                    ? 'bg-blue-600 text-white font-medium rounded-tr-none shadow-md shadow-blue-500/10' 
                    : m.isTool 
                      ? 'bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-tl-none'
                      : 'bg-white text-slate-700 border border-slate-200 rounded-tl-none shadow-sm'
                  }`}>
                    {m.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center gap-2 shadow-sm">
                  <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">IA Analisando...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-slate-100 bg-white">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Pergunte sobre o piloto de 3 meses..."
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all pr-14"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isLoading}
                className="absolute right-2 top-2 w-10 h-10 bg-blue-600 hover:bg-blue-500 text-white rounded-xl flex items-center justify-center transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="mt-3 text-[10px] text-center text-slate-400 font-medium uppercase tracking-widest">
              Consultor IA seguro e criptografado
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SalesAgent;
