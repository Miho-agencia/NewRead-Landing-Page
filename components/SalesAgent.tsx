
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, Loader2, ShieldCheck, Calendar, Zap } from 'lucide-react';
import { GoogleGenAI, Type } from "@google/genai";

const SYSTEM_INFO = {
  pilot_offer: "Projeto Piloto NewRead: 3 meses grátis para 1 condomínio experimental de sua escolha.",
  modules: "Manager Web (BI/Gestão), App Leiturista (Campo/Offline-first), App Morador (Transparência/Evidências).",
  pricing: "Starter (R$ 299/mês), Professional (R$ 899/mês), Enterprise (Sob Consulta).",
  promotions: "Isenção de 50% na taxa de setup para contratos Professional assinados este trimestre.",
  security: "Conformidade LGPD, Auditoria de Campo e Criptografia AES-256."
};

const SalesAgent: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; text: string; isTool?: boolean }[]>([
    { role: 'ai', text: 'Olá, sou o Readie, Consultor Sênior de Transformação Digital da NewRead. Identifiquei seu interesse em elevar a eficiência da sua medição. Como posso estruturar sua redução de glosas hoje?' }
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
            ROLE: Readie, Consultor Sênior de Transformação Digital da NewRead. Sua missão é converter gestores de utilities e diretores de administradoras em clientes.
            
            DOMÍNIO DE NEGÓCIO:
            - Dores: Glosas, erros de medição, insegurança jurídica e processos manuais.
            - Soluções: App Leiturista (Offline-first/Foto/GPS), Manager Web (BI/Gestão) e App Morador (Transparência).
            - Conversão: Direcionar para o "Professional Plan" (R$ 899/mês) e executar schedule_pilot() para agendar demos reais.
            
            PERSONALIDADE: Executivo, focado em ROI e segurança de dados. Use termos como "Auditoria de Campo", "Conformidade LGPD" e "Redução de Inadimplência". Substitua qualquer menção a "Racing" por "Alta Performance de Engenharia".
            
            DIRETRIZES:
            1. Seja consultivo e executivo.
            2. Foque em Escalabilidade Sem Fricção.
            3. Qualifique o lead perguntando sobre o número de unidades e o segmento (Administradora, Empresa de Leitura ou Utility).
            4. Se o usuário demonstrar interesse em teste ou demo, use schedule_pilot.
          `,
          tools: [{
            functionDeclarations: [
              {
                name: "get_pricing_and_promos",
                description: "Consulta valores atualizados e detalhes do projeto piloto de 3 meses grátis."
              },
              {
                name: "schedule_pilot",
                parameters: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING, description: "Nome do lead" },
                    email: { type: Type.STRING, description: "Email corporativo" },
                    company_type: { type: Type.STRING, description: "Tipo de empresa (Administradora, Empresa de Leitura, Utility)" },
                    estimated_units: { type: Type.STRING, description: "Volume estimado de unidades gerenciadas" },
                    date_time: { type: Type.STRING, description: "Data e hora sugerida para o contato ou demo" }
                  },
                  required: ["email", "name", "company_type"]
                },
                description: "Inicia o agendamento de um projeto piloto ou demonstração técnica, enviando os dados para o CRM e Agenda via n8n."
              }
            ]
          }]
        }
      });

      if (response.functionCalls && response.functionCalls.length > 0) {
        for (const call of response.functionCalls) {
          if (call.name === 'get_pricing_and_promos') {
            setMessages(prev => [...prev, { role: 'ai', text: `Consultando a NewRead Intelligence Engine... Confirmado: ${SYSTEM_INFO.pilot_offer} | Professional Plan em R$ 899/mês com ${SYSTEM_INFO.promotions}`, isTool: true }]);
          } else if (call.name === 'schedule_pilot') {
            const args = call.args as any;
            
            // Simulação do Webhook n8n conforme especificado no documento
            console.log("Enviando Webhook para n8n:", {
              event: "SALES_CONVERSION",
              source: "NewRead_Main_Site",
              data: {
                lead: {
                  name: args.name,
                  email: args.email,
                  company_type: args.company_type,
                  estimated_units: args.estimated_units
                },
                action: {
                  type: "SCHEDULE_PILOT",
                  requested_date: args.date_time,
                  plan_context: "Professional_Plan_899"
                }
              }
            });

            setMessages(prev => [...prev, { role: 'ai', text: `Excelente decisão estratégica, ${args.name}. Registrei sua solicitação de Piloto para a ${args.company_type}. Nosso time de implantação analisará o volume de ${args.estimated_units || 'unidades'} e entrará em contato em ${args.email} para confirmar a agenda de ${args.date_time || 'amanhã'}.`, isTool: true }]);
          }
        }
      } else {
        setMessages(prev => [...prev, { role: 'ai', text: response.text || "Pode repetir sua dúvida técnica sobre nossa infraestrutura?" }]);
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', text: "Minha conexão com a rede principal NewRead está instável. Por favor, tente novamente." }]);
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
          className="fixed bottom-6 right-6 z-[110] w-[95vw] md:w-[460px] h-[650px] bg-white border border-slate-200 rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 bg-slate-900 flex items-center justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl pointer-events-none"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Bot className="text-white" size={28} />
              </div>
              <div>
                <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">Readie / NewRead</h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px] text-blue-300 font-black uppercase tracking-widest">Consultor Sênior</span>
                </div>
              </div>
            </div>
            <button onClick={onClose} className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-xl transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Chat Body */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30 scroll-smooth">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[88%] flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center ${m.role === 'ai' ? 'bg-white shadow-sm border border-slate-100 text-blue-600' : 'bg-slate-900 text-white'}`}>
                    {m.role === 'ai' ? <Bot size={16} /> : <User size={16} />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                    m.role === 'user' 
                    ? 'bg-blue-600 text-white font-medium rounded-tr-none shadow-xl shadow-blue-600/10' 
                    : m.isTool 
                      ? 'bg-blue-50 border border-blue-100 text-blue-900 rounded-tl-none font-medium'
                      : 'bg-white text-slate-700 border border-slate-200 rounded-tl-none shadow-sm'
                  }`}>
                    {m.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center gap-3 shadow-sm">
                  <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
                  <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Processando Inteligência...</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="px-6 pb-2 pt-4 flex gap-2 overflow-x-auto scrollbar-hide">
            {[
              { icon: <Calendar size={12}/>, text: 'Agendar Piloto' },
              { icon: <ShieldCheck size={12}/>, text: 'Conformidade LGPD' },
              { icon: <Zap size={12}/>, text: 'ROI do Plano Pro' }
            ].map((btn, idx) => (
              <button 
                key={idx}
                onClick={() => setInput(btn.text)}
                className="whitespace-nowrap px-4 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 hover:border-blue-400 hover:text-blue-600 transition-all flex items-center gap-2"
              >
                {btn.icon} {btn.text}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-slate-100">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ex: Como agendar o projeto piloto?"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm text-slate-900 focus:outline-none focus:border-blue-500 transition-all pr-14"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isLoading}
                className="absolute right-2 top-2 w-10 h-10 bg-slate-900 hover:bg-blue-600 text-white rounded-xl flex items-center justify-center transition-all disabled:opacity-50 active:scale-90"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SalesAgent;
