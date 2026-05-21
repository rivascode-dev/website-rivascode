'use client';

import React from 'react';
import { SOLUTIONS } from '../../data/solutions';
import { motion } from 'framer-motion';

const Solutions = () => {
  return (
    <section id='soluciones' className='py-20 md:py-28 bg-card/20 border-y border-border/30 relative overflow-hidden'>
      {/* Background glow decoration */}
      <div className='absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[90px] pointer-events-none' />

      <div className='max-w-7xl mx-auto px-6 md:px-8 lg:px-12'>
        {/* Section Header */}
        <div className='flex flex-col gap-3 mb-16 text-left max-w-2xl'>
          <span className='text-sm font-extrabold tracking-[0.2em] text-primary uppercase'>
            SERVICIOS
          </span>
          <div>
            <h2 className='text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight inline-block mr-2.5'>
              Soluciones
            </h2>
            <h2 className='text-3xl md:text-5xl font-extrabold text-brand-gradient tracking-tight leading-tight inline-block'>
              Premium
            </h2>
          </div>
          <p className='text-muted-foreground mt-4 text-base md:text-lg leading-relaxed'>
            Ofrezco un enfoque integral y personalizado para resolver problemas complejos de tu negocio a través de la tecnología más avanzada e innovadora.
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
          {SOLUTIONS.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='h-full'
            >
              <div className='h-full p-8 rounded-2xl bg-glass-card hover:bg-card/75 border border-border/40 hover:border-primary/40 shadow-sm hover:shadow-[0_12px_32px_rgba(92,225,230,0.1)] transition-all duration-300 group hover:-translate-y-1.5 flex flex-col items-center text-center'>
                {/* Icon wrapper with pulsing border glow on hover */}
                <div className='mb-5 p-4 rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(92,225,230,0.3)]'>
                  <solution.icon size={36} className='stroke-[1.75]' />
                </div>
                
                <h3 className='text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300'>
                  {solution.title}
                </h3>
                
                <p className='text-muted-foreground text-[0.95rem] leading-relaxed font-normal'>
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
