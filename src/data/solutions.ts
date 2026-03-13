import { Zap, Sparkles, Shield, Rocket, type LucideIcon } from 'lucide-react';

export interface Solution {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const SOLUTIONS: Solution[] = [
  {
    title: 'Desarrollo Ágil',
    description:
      'Entregas iterativas y constantes para validar ideas rápidamente.',
    icon: Zap,
  },
  {
    title: 'Diseño Premium',
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
    title: 'Rendimiento',
    description: 'Carga ultrarrápida y SEO optimizado desde el primer día.',
    icon: Rocket,
  },
];
