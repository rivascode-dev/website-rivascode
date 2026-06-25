'use client';

import { useState } from 'react';
import { PROJECTS } from '../../data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectsModal from './ProjectsModal';
import { Smartphone, Globe, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    'App' | 'Website' | null
  >(null);

  const filteredProjects = selectedCategory
    ? PROJECTS.filter((p) => p.category === selectedCategory)
    : [];

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
              Explora mis trabajos más recientes divididos en aplicaciones de
              alta complejidad y sitios web optimizados de gran impacto.
            </p>
          </div>
        </div>

        {/* Category Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
          {/* Apps Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedCategory('App')}
            className='group relative h-[300px] sm:h-[350px] rounded-3xl overflow-hidden cursor-pointer shadow-lg'
          >
            {/* Background Pattern/Glow */}
            <div className='absolute inset-0 bg-[#0d1317] z-0' />
            <div className='absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-0 group-hover:opacity-75 transition-opacity duration-500' />

            <div className='relative z-10 p-8 sm:p-10 h-full flex flex-col justify-between border border-border/50 rounded-3xl group-hover:border-primary/50 transition-colors duration-500'>
              <div className='flex justify-between items-start'>
                <div className='p-4 rounded-2xl bg-white/5 border border-white/10 text-primary'>
                  <Smartphone size={32} />
                </div>
                <div className='w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary group-hover:text-black transition-all duration-300'>
                  <ArrowRight className='group-hover:translate-x-1 transition-transform' />
                </div>
              </div>

              <div>
                <h3 className='text-3xl font-extrabold text-white mb-3'>
                  Aplicaciones
                </h3>
                <p className='text-muted-foreground text-sm sm:text-base leading-relaxed'>
                  Desarrollos de alta complejidad con inteligencia artificial y
                  arquitecturas modernas para resolver problemas reales.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Websites Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => setSelectedCategory('Website')}
            className='group relative h-[300px] sm:h-[350px] rounded-3xl overflow-hidden cursor-pointer shadow-lg'
          >
            <div className='absolute inset-0 bg-[#0d1317] z-0' />
            <div className='absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent z-0 group-hover:opacity-75 transition-opacity duration-500' />

            <div className='relative z-10 p-8 sm:p-10 h-full flex flex-col justify-between border border-border/50 rounded-3xl group-hover:border-secondary/50 transition-colors duration-500'>
              <div className='flex justify-between items-start'>
                <div className='p-4 rounded-2xl bg-white/5 border border-white/10 text-secondary'>
                  <Globe size={32} />
                </div>
                <div className='w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-secondary group-hover:text-black transition-all duration-300'>
                  <ArrowRight className='group-hover:translate-x-1 transition-transform' />
                </div>
              </div>

              <div>
                <h3 className='text-3xl font-extrabold text-white mb-3'>
                  Sitios Web
                </h3>
                <p className='text-muted-foreground text-sm sm:text-base leading-relaxed'>
                  Sitios web optimizados, modernos y de alto impacto diseñados
                  para escalar y convertir visitantes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modern Dialog/Modal Details component */}
      <AnimatePresence>
        {selectedCategory && (
          <ProjectsModal
            category={selectedCategory}
            projects={filteredProjects}
            onClose={() => setSelectedCategory(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
