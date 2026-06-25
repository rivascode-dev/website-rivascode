'use client';

import React from 'react';
import { SOCIAL_LINKS } from '@/data/contact';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='max-w-7xl mx-auto w-full '>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-between items-center'>
        {/* Left column: Logo & Description */}
        <div>
          <div className='mb-4 relative w-[180px] h-[32px]'>
            <Image
              src='/assets/logos/logo-rivascode-small.png'
              alt='rivascode.dev logo'
              fill
              className='object-contain'
            />
          </div>
          <p className='text-sm text-muted-foreground max-w-sm leading-relaxed'>
            Transformando ideas complejas en soluciones digitales elegantes y
            eficientes. Especializado en ingeniería de software e integración de
            Inteligencia Artificial.
          </p>
        </div>

        {/* Right column: Social icons */}
        <div className='flex justify-start md:justify-end gap-3'>
          {SOCIAL_LINKS.map((social, index) => (
            <a
              key={index}
              href={social.href || '#'}
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 rounded-xl border border-border bg-card/40 text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[0_0_15px_rgba(92,225,230,0.15)] transition-all duration-300'
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Copyright text at the bottom */}
      <div className='mt-10 pt-6 border-t border-border/40 text-center'>
        <p className='text-xs text-muted-foreground'>
          © {new Date().getFullYear()} rivascode.dev. Todos los derechos
          reservados. Diseñado y desarrollado por Armando Rivas.
        </p>
      </div>
    </div>
  );
};

export default Footer;
