'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Globe } from 'lucide-react';
import { type Project } from '../../data/projects';
import Image from 'next/image';

interface ProjectsModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectsModal = ({ project, onClose }: ProjectsModalProps) => {
  // Evitar scroll en la página detrás del modal mientras esté abierto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto'>
      {/* Backdrop with fade-in animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className='fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer'
      />

      {/* Modal Dialog Box with scale-up/fade-in animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className='relative w-full max-w-2xl bg-[#0d1317] border border-border/80 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 flex flex-col'
      >
        {/* Banner Image Container */}
        <div className='relative w-full h-[240px] sm:h-[320px] bg-muted/20'>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, 640px'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-t from-[#0d1317] via-transparent to-transparent' />
          
          {/* Close Floating Button */}
          <button
            onClick={onClose}
            className='absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/5 text-muted-foreground hover:text-white transition-all hover:scale-105 active:scale-95 focus:outline-none'
            aria-label='Cerrar modal'
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Details Area */}
        <div className='p-6 sm:p-8 flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            {/* Category tag */}
            <span className='self-start px-3 py-1 rounded-lg text-xs font-bold uppercase bg-primary/10 border border-primary/20 text-primary tracking-wider'>
              {project.category === 'App' ? 'Aplicación' : 'Sitio Web'}
            </span>
            <h3 className='text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2'>
              {project.title}
            </h3>
          </div>

          <div className='flex flex-col gap-3'>
            <h4 className='text-sm font-bold uppercase tracking-wider text-muted-foreground'>
              Descripción
            </h4>
            <p className='text-sm sm:text-base text-muted-foreground/90 leading-relaxed font-normal whitespace-pre-wrap'>
              {project.description}
            </p>
          </div>

          {/* Technologies Used */}
          <div className='flex flex-col gap-3'>
            <h4 className='text-sm font-bold uppercase tracking-wider text-muted-foreground'>
              Tecnologías Utilizadas
            </h4>
            <div className='flex flex-wrap gap-2'>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className='px-3.5 py-1.5 text-xs font-bold rounded-lg bg-white/5 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/20 hover:bg-primary/5 transition-all duration-200'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row Buttons */}
          <div className='flex flex-col sm:flex-row gap-3 pt-6 border-t border-border/30 mt-2'>
            {project.link && (
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-grow sm:flex-grow-[2] px-6 py-3.5 rounded-xl font-semibold bg-brand-gradient text-primary-foreground shadow-[0_4px_15px_rgba(92,225,230,0.2)] hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-sm'
              >
                <Globe size={18} /> Visitar Sitio / Demo <ExternalLink size={14} />
              </a>
            )}
            <button
              onClick={onClose}
              className='flex-grow sm:flex-grow-[1] px-6 py-3.5 rounded-xl font-semibold bg-white/5 border border-border text-white hover:bg-white/10 transition-all duration-300 text-sm'
            >
              Cerrar
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsModal;
