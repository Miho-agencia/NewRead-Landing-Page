
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
  LayoutDashboard,
  ShieldCheck,
  Globe
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
    title: "Glosas e erros de leitura humana",
    description: "Leituras manuais geram erros de digitação e inconsistências que resultam em perdas financeiras diretas.",
    icon: ShieldAlert
  },
  {
    title: "Falta de evidências (fotos/geolocalização)",
    description: "Sem registros visuais ou GPS, a auditoria é impossível e a insegurança jurídica aumenta.",
    icon: Camera
  },
  {
    title: "Atrito e falta de confiança dos moradores",
    description: "A falta de transparência no consumo gera reclamações constantes e desgaste em assembleias.",
    icon: Users
  },
  {
    title: "Processos manuais lentos e caros",
    description: "Digitação manual de planilhas consome recursos valiosos que poderiam ser automatizados.",
    icon: Clock
  }
];

export const PILLARS: Pillar[] = [
  {
    id: "manager",
    title: "Manager Web",
    subtitle: "O Cérebro da Operação",
    description: "O cérebro da operação: Dashboards inteligentes e BI para controle total das medições e faturamento em tempo real.",
    features: [
      "Dashboards de BI Avançado",
      "Gestão de Unidades e Blocos",
      "Alertas de Vazamentos via IA",
      "Exportação para ERPs"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "reader",
    title: "App Leiturista",
    subtitle: "Ferramenta de Campo",
    description: "A ferramenta de campo definitiva: Offline-first, rotas inteligentes e validação geográfica obrigatória.",
    features: [
      "Offline-first Real",
      "Validação GPS RTK Ready",
      "Check de Consumo por Foto",
      "Sincronização Delta"
    ],
    image: "reader-mockup"
  },
  {
    id: "resident",
    title: "App do Morador",
    subtitle: "A Ponta da Transparência",
    description: "A ponta da transparência: Ofereça ao morador acesso total ao histórico com fotos e gráficos de tendência.",
    features: [
      "Histórico com Evidência Fotográfica",
      "Acompanhamento em Tempo Real",
      "Alertas via Push Notification",
      "Interface Premium e Intuitiva"
    ],
    image: "resident-mockup"
  }
];

export const TECH_SPECS: Feature[] = [
  {
    title: "Sincronização inteligente (offline-first)",
    description: "Arquitetura resiliente que garante o funcionamento pleno mesmo em subsolos sem conexão.",
    icon: CloudOff
  },
  {
    title: "Redução de custos operacionais",
    description: "Automação total que elimina a necessidade de digitação e revisão manual de dados.",
    icon: Zap
  },
  {
    title: "Modularidade (pague apenas pelo que usar)",
    description: "Sistema flexível que permite contratar apenas os módulos necessários para sua demanda.",
    icon: Cpu
  },
  {
    title: "Segurança de Dados Enterprise",
    description: "Criptografia de ponta a ponta e conformidade total com a LGPD em todos os níveis.",
    icon: ShieldCheck
  }
];

export const PRICING: PricingPlan[] = [
  {
    name: "Starter",
    price: "R$ 299",
    period: "/mês",
    description: "Ideal para pequenas empresas de medição iniciando a digitalização.",
    features: [
      "Até 500 unidades",
      "App Leiturista (Básico)",
      "Manager Web Standard",
      "Suporte via Email",
      "Relatórios Mensais",
      "Exportação CSV/Excel"
    ],
    cta: "Começar Agora"
  },
  {
    name: "Professional",
    price: "R$ 899",
    period: "/mês",
    description: "Perfeito para operações consolidadas que buscam automação total.",
    features: [
      "Unidades Ilimitadas",
      "App Leiturista Pro (Offline)",
      "BI e Dashboards Avançados",
      "App do Morador Full",
      "Suporte Prioritário 24/7",
      "Validação por Foto",
      "Gestão de Rotas"
    ],
    cta: "Agendar Demo",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Sob Consulta",
    period: "",
    description: "Soluções customizadas para grandes administradoras e utilities.",
    features: [
      "White Label Total",
      "Integração via API Rest",
      "SLA Dedicado",
      "Infraestrutura Exclusiva",
      "Onboarding Presencial",
      "Gestão Multi-empresa",
      "Consultoria de Processos"
    ],
    cta: "Falar com Consultor"
  }
];
