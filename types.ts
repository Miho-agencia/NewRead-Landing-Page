
// Import React to resolve 'React.ElementType' namespace error
import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}