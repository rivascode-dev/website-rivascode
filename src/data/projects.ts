export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'App' | 'Website';
  technologies: string[];
  link?: string;
}

export const PROJECTS: Project[] = [
  //apps
  {
    id: '1',
    title: 'Agente IA LogOS',
    description:
      'Agente de IA que utiliza un enfoque RAG para responder preguntas de usuarios recuperando informacion de la base de datos ',
    image: '/assets/projects/apps/agente-logos-app.png',
    category: 'App',
    technologies: ['React', 'Hono', 'LangChain', 'LangGraph'],
    link: 'https://bylogos.io/',
  },
  {
    id: '2',
    title: 'EquilibrApp',
    description:
      'Una aplicación web que utiliza inteligencia artificial conectando con la API de Gemini para generar planes personalizados de bienestar.',
    image: '/assets/projects/apps/equilibrapp.png',
    category: 'App',
    technologies: ['React', 'Next.js', 'MUI', 'Gemini API'],
    link: 'https://app-equilibrapp.vercel.app/',
  },
  {
    id: '3',
    title: 'Agente IA Mentor Startups',
    description:
      'Tu Mentor Estratégico y Legal es un agente de IA que utiliza un enfoque RAG para responder preguntas frecuentes, diseñado para asesorar a fundadores de startups combinando dos fuentes de conocimiento HTML críticas: Estrategia/Filosofía de Crecimiento y Normativa Legal Chilena ',
    image: '/assets/projects/apps/mentor-startup.png',
    category: 'App',
    technologies: ['Next.js', 'React', 'LangChain', 'MUI'],
    link: 'https://app-langchain-rag-html.vercel.app/',
  },

  //websites

  {
    id: '4',
    title: 'JavaScript Chile',
    description:
      'Website desarrollado para JS Chile, comunidad de desarrolladores apasionados por la tecnología de la cual formo parte como Staff  ',
    image: '/assets/projects/websites/jschile.png',
    category: 'Website',
    technologies: ['Next.js', 'React', 'MUI'],
    link: 'https://jschile.org/',
  },

  {
    id: '5',
    title: 'LogOS',
    description:
      'Website desarrollado para LogOS es una plataforma IoT de vanguardia diseñada para el monitoreo y control en tiempo real en entornos industriales.  ',
    image: '/assets/projects/websites/logos-website.png',
    category: 'Website',
    technologies: ['Next.js', 'React', 'MUI', 'LangChain', 'RAG', 'Velite'],
    link: 'https://bylogos.io/',
  },

  {
    id: '6',
    title: 'Envasados H2O',
    description:
      'Website desarrollado para una empresa de embotelladora de agua con un diseño moderno y funcional.  ',
    image: '/assets/projects/websites/envasadosh2o.png',
    category: 'Website',
    technologies: ['Next.js', 'React', 'MUI', 'JavaScript'],
    link: 'https://www.envasadosh2o.com/',
  },
  {
    id: '7',
    title: 'Salmed',
    description:
      'Website desarrollado para empresa de salud, con diseño moderno y funcional. Incluye un agente (RAG) para automatizar la respuesta a consultas frecuentes. ',
    image: '/assets/projects/websites/salmed-infochat.png',
    category: 'Website',
    technologies: ['Next.js', 'React', 'Xenova/transformers', 'RAG', 'MUI'],
    link: 'https://salmed.net',
  },
];
