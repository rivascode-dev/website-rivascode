import { Sparkles, Shield, Rocket, Bot, type LucideIcon } from 'lucide-react';

export interface Solution {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const SOLUTIONS: Solution[] = [
  {
    title: 'Diseño UI/UX',
    description:
      'Interfaces modernas, intuitivas y con una estética de alto nivel.',
    icon: Sparkles,
  },
  {
    title: 'Escalabilidad',
    description:
      'Arquitecturas robustas preparadas para el crecimiento de tu negocio.',
    icon: Shield,
  },
  {
    title: 'Agentes de IA',
    description:
      'Agentes conversacionales para mejorar la eficiencia de tu negocio.',
    icon: Bot,
  },
  {
    title: 'Rendimiento',
    description: 'Carga ultrarrápida y SEO optimizado desde el primer día.',
    icon: Rocket,
  },
];
