'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Globe, ArrowUpRight, ChevronLeft } from 'lucide-react';
import { type Project } from '../../data/projects';
import Image from 'next/image';

interface ProjectsModalProps {
  category: 'App' | 'Website';
  projects: Project[];
  onClose: () => void;
}

const ProjectsModal = ({ category, projects, onClose }: ProjectsModalProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Evitar scroll en la página detrás del modal mientras esté abierto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto'>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className='fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer'
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className={`relative w-full ${selectedProject ? 'max-w-2xl' : 'max-w-6xl'} bg-[#0d1317] border border-border/80 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 flex flex-col max-h-[90vh] transition-all duration-500`}
      >
        <AnimatePresence mode='wait'>
          {selectedProject ? (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col overflow-y-auto"
            >
              {/* Banner Image Container */}
              <div className='relative w-full h-[240px] sm:h-[320px] bg-muted/20 flex-shrink-0'>
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 640px'
                  priority
                />
                <div className='absolute inset-0 bg-gradient-to-t from-[#0d1317] via-transparent to-transparent' />
                
                {/* Back Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className='absolute top-4 left-4 p-2 sm:px-4 rounded-full bg-black/60 backdrop-blur-sm border border-white/5 text-white hover:bg-white/20 transition-all hover:scale-105 active:scale-95 focus:outline-none flex items-center gap-1 sm:gap-2'
                >
                  <ChevronLeft size={20} />
                  <span className="text-sm font-semibold hidden sm:inline-block">Volver</span>
                </button>

                {/* Close Button */}
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
                  <span className='self-start px-3 py-1 rounded-lg text-xs font-bold uppercase bg-primary/10 border border-primary/20 text-primary tracking-wider'>
                    {selectedProject.category === 'App' ? 'Aplicación' : 'Sitio Web'}
                  </span>
                  <h3 className='text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2'>
                    {selectedProject.title}
                  </h3>
                </div>

                <div className='flex flex-col gap-3'>
                  <h4 className='text-sm font-bold uppercase tracking-wider text-muted-foreground'>
                    Descripción
                  </h4>
                  <p className='text-sm sm:text-base text-muted-foreground/90 leading-relaxed font-normal whitespace-pre-wrap'>
                    {selectedProject.description}
                  </p>
                </div>

                <div className='flex flex-col gap-3'>
                  <h4 className='text-sm font-bold uppercase tracking-wider text-muted-foreground'>
                    Tecnologías Utilizadas
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='px-3.5 py-1.5 text-xs font-bold rounded-lg bg-white/5 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/20 hover:bg-primary/5 transition-all duration-200'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='flex flex-col sm:flex-row gap-3 pt-6 border-t border-border/30 mt-2'>
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-grow sm:flex-grow-[2] px-6 py-3.5 rounded-xl font-semibold bg-brand-gradient text-primary-foreground shadow-[0_4px_15px_rgba(92,225,230,0.2)] hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-sm'
                    >
                      <Globe size={18} /> Visitar Sitio / Demo <ExternalLink size={14} />
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className='flex-grow sm:flex-grow-[1] px-6 py-3.5 rounded-xl font-semibold bg-white/5 border border-border text-white hover:bg-white/10 transition-all duration-300 text-sm'
                  >
                    Volver a la lista
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-full overflow-hidden"
            >
              <div className="flex items-center justify-between p-6 sm:p-8 border-b border-border/50 bg-[#090E10]/80 backdrop-blur-md sticky top-0 z-10 flex-shrink-0">
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {category === 'App' ? 'Aplicaciones' : 'Sitios Web'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category === 'App' ? 'Explora mis desarrollos de aplicaciones' : 'Explora mis proyectos de sitios web'}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className='p-2 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-white hover:bg-white/10 transition-all focus:outline-none'
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {projects.map((project) => (
                    <motion.div
                      layoutId={`project-card-${project.id}`}
                      key={project.id}
                      className='group relative flex flex-col rounded-2xl bg-glass-card hover:bg-card/75 border border-border/40 hover:border-primary/45 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-[0_12px_32px_rgba(92,225,230,0.08)]'
                    >
                      <div className='relative w-full h-[200px] sm:h-[240px] bg-muted/20 overflow-hidden'>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className='object-cover transition-transform duration-500 group-hover:scale-105'
                          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        />
                        <span className='absolute top-4 left-4 px-3 py-1 rounded-lg text-xs font-bold uppercase bg-[#090E10]/80 backdrop-blur-md border border-white/5 text-primary tracking-wider'>
                          {project.category === 'App' ? 'Aplicación' : 'Sitio Web'}
                        </span>
                        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                      </div>

                      <div className='p-6 flex flex-col flex-grow justify-between gap-6'>
                        <div className='flex flex-col gap-2.5'>
                          <h3 className='text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 flex items-center gap-1.5'>
                            {project.title}
                          </h3>
                          <p className='text-sm text-muted-foreground leading-relaxed font-normal line-clamp-3'>
                            {project.description}
                          </p>
                        </div>

                        <div className='flex flex-col gap-4'>
                          <div className='flex flex-wrap gap-1.5'>
                            {project.technologies.slice(0, 4).map((tech) => (
                              <span
                                key={tech}
                                className='px-2.5 py-1 text-xs font-semibold rounded-lg bg-primary/5 border border-primary/10 text-primary/90'
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 4 && (
                              <span className='px-2 py-0.5 text-xs font-medium rounded-lg bg-muted/25 text-muted-foreground'>
                                +{project.technologies.length - 4}
                              </span>
                            )}
                          </div>

                          <div className='flex items-center gap-3 pt-3 border-t border-border/30'>
                            <button
                              onClick={() => setSelectedProject(project)}
                              className='flex-grow px-4 py-2.5 rounded-xl text-center text-xs font-semibold bg-white/5 border border-border text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300'
                            >
                              Ver Detalle
                            </button>
                            {project.link && (
                              <a
                                href={project.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='px-4 py-2.5 rounded-xl text-center text-xs font-semibold bg-brand-gradient text-primary-foreground hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center justify-center gap-1'
                                onClick={(e) => e.stopPropagation()}
                              >
                                Demo <ArrowUpRight size={14} />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProjectsModal;
