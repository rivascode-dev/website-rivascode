'use client';

import { useState } from 'react';
import { PROJECTS, type Project } from '../../data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectsModal from './ProjectsModal';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const Proyects = () => {
  const [activeFilter, setActiveFilter] = useState<'Todos' | 'App' | 'Website'>('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'Todos'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id='proyectos' className='py-20 md:py-28 relative overflow-hidden'>
      {/* Decorative background glow */}
      <div className='absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-secondary/5 blur-[100px] pointer-events-none' />

      <div className='max-w-7xl mx-auto px-6 md:px-8 lg:px-12'>
        {/* Section Header */}
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12'>
          <div className='flex flex-col gap-3 text-left max-w-xl'>
            <span className='text-sm font-extrabold tracking-[0.2em] text-primary uppercase'>
              PROYECTOS
            </span>
            <div>
              <h2 className='text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight inline-block mr-2.5'>
                Desarrollos
              </h2>
              <h2 className='text-3xl md:text-5xl font-extrabold text-brand-gradient tracking-tight leading-tight inline-block'>
                Reales
              </h2>
            </div>
            <p className='text-muted-foreground mt-2 text-base md:text-lg leading-relaxed'>
              Explora mis trabajos más recientes divididos en aplicaciones de alta complejidad y sitios web optimizados de gran impacto.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className='flex flex-wrap gap-2 p-1.5 rounded-2xl bg-card/45 border border-border/50 backdrop-blur-sm self-start md:self-end'>
            {(['Todos', 'App', 'Website'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 focus:outline-none ${
                  activeFilter === filter
                    ? 'text-primary-foreground font-bold'
                    : 'text-muted-foreground hover:text-white'
                }`}
              >
                {activeFilter === filter && (
                  <motion.span
                    layoutId='active-pill'
                    className='absolute inset-0 bg-brand-gradient rounded-xl -z-10'
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {filter === 'Todos' ? 'Todos' : filter === 'App' ? 'Aplicaciones' : 'Sitios Web'}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <motion.div
          layout
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className='group relative h-full flex flex-col rounded-2xl bg-glass-card hover:bg-card/75 border border-border/40 hover:border-primary/45 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-[0_12px_32px_rgba(92,225,230,0.08)]'
              >
                {/* Image Container */}
                <div className='relative w-full h-[200px] sm:h-[240px] bg-muted/20 overflow-hidden'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  />
                  {/* Category Tag overlay */}
                  <span className='absolute top-4 left-4 px-3 py-1 rounded-lg text-xs font-bold uppercase bg-[#090E10]/80 backdrop-blur-md border border-white/5 text-primary tracking-wider'>
                    {project.category === 'App' ? 'Aplicación' : 'Sitio Web'}
                  </span>
                  
                  {/* Hover visual highlight effect */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </div>

                {/* Content Container */}
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
                    {/* Technologies tags */}
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

                    {/* Actions row */}
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
                        >
                          Demo <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modern Dialog/Modal Details component */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectsModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Proyects;
