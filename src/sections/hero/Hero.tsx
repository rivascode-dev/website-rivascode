'use client';

import React from 'react';
import { motion } from 'framer-motion';
import NetworkBackground from '../../components/NetworkBackground';

const Hero = () => {
  return (
    <section
      id='hero'
      className='relative w-full min-h-[95vh] md:min-h-screen flex items-center overflow-hidden pt-28 md:pt-0'
    >
      {/* Interactive canvas background */}
      <NetworkBackground />

      {/* Brand glowing blobs (orbs of light) behind canvas */}
      <div className='absolute top-[-10%] right-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-gradient-to-br from-primary/15 to-secondary/10 blur-[100px] pointer-events-none z-0 animate-pulse-glow' />
      <div className='absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-gradient-to-tr from-secondary/10 to-transparent blur-[80px] pointer-events-none z-0' />

      <div className='max-w-7xl mx-auto w-full px-6 md:px-8 lg:px-12 relative z-10'>
        <div className='max-w-3xl flex flex-col gap-6 md:gap-8 items-start'>
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='flex flex-col gap-2'
          >
            <h1 className='text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]'>
              Transformando ideas
            </h1>
            <h2 className='text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-brand-gradient leading-[1.1]'>
              en realidades digitales
            </h2>
          </motion.div>

          {/* Subheading/Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <p className='text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-normal'>
              Soluciones de Software a Medida e Integración de IA Generativa.
              Especialista en potenciar negocios mediante la creación de
              aplicaciones web altamente escalables y de nivel premium.
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='w-full sm:w-auto'
          >
            <div className='flex flex-col sm:flex-row gap-4 w-full'>
              <a
                href='#proyectos'
                className='px-8 py-4 text-center rounded-xl font-semibold bg-brand-gradient text-primary-foreground shadow-[0_4px_20px_rgba(92,225,230,0.25)] hover:shadow-[0_4px_30px_rgba(140,82,255,0.45)] hover:scale-[1.03] active:scale-95 transition-all duration-300 text-[1rem]'
              >
                Ver Proyectos
              </a>
              <a
                href='#contacto'
                className='px-8 py-4 text-center rounded-xl font-semibold border border-border bg-card/25 backdrop-blur-sm text-foreground hover:bg-muted/15 hover:border-primary/40 hover:text-primary hover:scale-[1.03] active:scale-95 transition-all duration-300 text-[1rem]'
              >
                Contáctame
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
