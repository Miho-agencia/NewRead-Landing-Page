
import React from 'react';
import { 
  BarChart3, 
  Smartphone, 
  Users, 
  ShieldAlert, 
  Camera, 
  MapPin, 
  Clock, 
  CloudOff,
  CheckCircle2,
  Cpu,
  Zap,
  LayoutDashboard
} from 'lucide-react';
import { Feature, Pillar, PricingPlan } from './types';

export const COLORS = {
  primary: '#ffffff',    // White
  secondary: '#007BFF', // Brand Blue
  accent: '#FFB35B',    // Brand Orange
  textMuted: '#64748b', // Slate 500
  dark: '#0f172a'       // Slate 900
};

export const PROBLEMS = [
  {
    title: "Glosas e Erros Humanos",
    description: "Leituras manuais em papel geram erros de digitação e inconsistências que custam caro.",
    icon: ShieldAlert
  },
  {
    title: "Falta de Evidências",
    description: "Sem fotos ou geolocalização, a confiança dos moradores cai e as disputas aumentam.",
    icon: Camera
  },
  {
    title: "Atrito e Insegurança",
    description: "A falta de transparência na medição gera reclamações constantes nas assembléias.",
    icon: Users
  },
  {
    title: "Processos Lentos",
    description: "Digitação de planilhas e fechamento manual consomem dias de trabalho da equipe.",
    icon: Clock
  }
];

export const PILLARS: Pillar[] = [
  {
    id: "manager",
    title: "Manager Web",
    subtitle: "O Cérebro da Operação",
    description: "Dashboards inteligentes e Business Intelligence para controle total das medições e faturamento.",
    features: [
      "Importação automática de unidades",
      "Relatórios de consumo por período",
      "Alertas de vazamentos suspeitos",
      "Exportação para sistemas contábeis"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "reader",
    title: "App Leiturista",
    subtitle: "Ferramenta de Alta Performance",
    description: "Foco total na produtividade de campo com validação em tempo real e modo offline.",
    features: [
      "Operação Offline-first",
      "Foto obrigatória do hidrômetro",
      "Check de geolocalização GPS",
      "Validação de leitura fora de curva"
    ],
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "resident",
    title: "App do Morador",
    subtitle: "Transparência Absoluta",
    description: "Um diferencial exclusivo NewRead: o morador acompanha em tempo real fotos das leituras, gráficos de tendência e estimativa de conta antes do boleto chegar.",
    features: [
      "Histórico com evidência fotográfica",
      "Gráficos de tendência e média diária",
      "Alertas de consumo atípico via Push",
      "Perfil com gestão de preferências"
    ],
    image: "resident-mockup" // ID especial para renderizar o componente de mockup
  }
];

export const TECH_SPECS: Feature[] = [
  {
    title: "Offline-First",
    description: "Sincronização inteligente que garante o trabalho mesmo sem sinal de internet.",
    icon: CloudOff
  },
  {
    title: "Modularidade",
    description: "Contrate apenas os módulos que sua empresa de medição realmente precisa.",
    icon: Cpu
  },
  {
    title: "Redução de Custos",
    description: "Diminua em até 40% o tempo gasto com fechamento e gestão de erros.",
    icon: Zap
  }
];

export const PRICING: PricingPlan[] = [
  {
    name: "Starter",
    price: "R$ 299",
    period: "/mês",
    description: "Ideal para pequenas empresas de medição iniciando a digitalização.",
    features: ["Até 500 unidades", "App Leiturista Básico", "Manager Web Standard", "Suporte via Email"],
    cta: "Começar Agora"
  },
  {
    name: "Professional",
    price: "R$ 899",
    period: "/mês",
    description: "Perfeito para operações consolidadas que buscam automação total.",
    features: ["Unidades Ilimitadas", "App Leiturista Pro (Offline)", "BI e Dashboards Avançados", "App do Morador Customizado", "Suporte Prioritário"],
    cta: "Agendar Demo",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Sob Consulta",
    period: "",
    description: "Soluções customizadas para grandes administradoras e utilities.",
    features: ["White Label", "Integração via API Rest", "SLA Dedicado", "Infraestrutura Exclusiva", "Onboarding Presencial"],
    cta: "Falar com Consultor"
  }
];
