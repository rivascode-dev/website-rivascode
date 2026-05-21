'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TECHNOLOGIES } from '../../data/technologies';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiLangchain,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiGit,
} from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';

const iconMap: Record<string, { icon: React.ReactNode; color: string }> = {
  react: { icon: <SiReact size={44} />, color: '#61DAFB' },
  nextjs: { icon: <SiNextdotjs size={44} />, color: '#FFFFFF' },
  typescript: { icon: <SiTypescript size={44} />, color: '#3178C6' },
  javascript: { icon: <SiJavascript size={44} />, color: '#F7DF1E' },
  tailwindcss: { icon: <SiTailwindcss size={44} />, color: '#38BDF8' },
  nodejs: { icon: <SiNodedotjs size={44} />, color: '#339933' },
  langchain: { icon: <SiLangchain size={44} />, color: '#3CA082' },
  git: { icon: <SiGit size={44} />, color: '#F05032' },
  github: { icon: <FaGithub size={44} />, color: '#FFFFFF' },
};

const Technologies = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id='tecnologias' className='py-20 md:py-28 bg-card/20 border-y border-border/30 relative overflow-hidden'>
      {/* Background glow decoration */}
      <div className='absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none' />

      <div className='max-w-7xl mx-auto px-6 md:px-8 lg:px-12'>
        {/* Section Header */}
        <div className='flex flex-col gap-3 mb-16 text-left max-w-2xl'>
          <span className='text-sm font-extrabold tracking-[0.2em] text-primary uppercase'>
            INFRAESTRUCTURA
          </span>
          <div>
            <h2 className='text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight inline-block mr-2.5'>
              Stack
            </h2>
            <h2 className='text-3xl md:text-5xl font-extrabold text-brand-gradient tracking-tight leading-tight inline-block'>
              Tecnológico
            </h2>
          </div>
          <p className='text-muted-foreground mt-4 text-base md:text-lg leading-relaxed'>
            Utilizo las herramientas y tecnologías más avanzadas, eficientes y seguras de la industria para garantizar un rendimiento óptimo y máxima escalabilidad en cada desarrollo.
          </p>
        </div>

        {/* Tech Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 sm:gap-6 justify-center'>
          {TECHNOLOGIES.map((tech, index) => {
            const techData = iconMap[tech.icon || tech.name.toLowerCase()];
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    boxShadow: isHovered && techData
                      ? `0 10px 30px -5px ${techData.color}35, 0 0 15px ${techData.color}20`
                      : 'none',
                    borderColor: isHovered && techData ? techData.color : undefined,
                  }}
                  className='aspect-square rounded-2xl bg-glass-card border border-border/40 hover:border-transparent flex flex-col items-center justify-center p-4 transition-all duration-300 relative overflow-hidden group cursor-pointer hover:-translate-y-1.5'
                >
                  {/* Subtle color highlight blur circle behind the icon */}
                  {techData && (
                    <div
                      style={{
                        backgroundColor: techData.color,
                        opacity: isHovered ? 0.08 : 0,
                      }}
                      className='absolute inset-0 rounded-full blur-[20px] transition-opacity duration-300 pointer-events-none'
                    />
                  )}

                  {/* Icon */}
                  <div
                    style={{
                      color: isHovered && techData ? techData.color : undefined,
                    }}
                    className='text-muted-foreground transition-colors duration-300 flex items-center justify-center group-hover:scale-110 transform duration-300 z-10'
                  >
                    {techData?.icon || tech.name}
                  </div>

                  {/* Label (Dynamic on Hover/Responsive) */}
                  <span className='absolute bottom-3 text-[0.72rem] font-bold tracking-wider text-muted-foreground uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10'>
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
