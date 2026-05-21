'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SOCIAL_LINKS } from '@/data/contact';
import Image from 'next/image';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Tecnologías', href: '#tecnologias' },
  ];

  // Efecto visual para cambiar opacidad del navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 border-b ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-border/60 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.3)]'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex justify-between items-center'>
        {/* Logo */}
        <a href='#hero' className='flex items-center outline-none group'>
          <div className='relative w-[180px] h-[32px] md:w-[200px] md:h-[35px] transition-transform duration-300 group-hover:scale-[1.02]'>
            <Image
              src='/assets/logos/logo-rivascode-small.png'
              alt='rivascode.dev logo'
              fill
              className='object-contain'
              priority
            />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className='hidden md:flex items-center space-x-1 lg:space-x-2'>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className='relative px-4 py-2 text-[0.95rem] font-medium text-muted-foreground hover:text-primary transition-colors duration-300 group'
            >
              {item.label}
              <span className='absolute bottom-1 left-4 right-4 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center' />
            </a>
          ))}
          <a
            href='#contacto'
            className='ml-4 px-6 py-2.5 rounded-xl font-semibold bg-brand-gradient text-primary-foreground transition-all duration-300 shadow-[0_4px_20px_rgba(92,225,230,0.25)] hover:shadow-[0_4px_30px_rgba(140,82,255,0.4)] hover:scale-[1.03] active:scale-95 text-center'
          >
            Contacto
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsDrawerOpen(true)}
          className='md:hidden p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors focus:outline-none'
          aria-label='Abrir menú'
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile Sidebar / Drawer (Slide-over) */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Overlay translucido */}
        <div
          onClick={() => setIsDrawerOpen(false)}
          className='absolute inset-0 bg-black/60 backdrop-blur-sm'
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 w-[280px] h-full bg-[#090E10] border-l border-border/50 p-6 flex flex-col justify-between transition-transform duration-300 ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            {/* Drawer Header */}
            <div className='flex justify-between items-center mb-10'>
              <div className='relative w-[140px] h-[25px]'>
                <Image
                  src='/assets/logos/logo-rivascode-small.png'
                  alt='rivascode.dev logo'
                  fill
                  className='object-contain'
                />
              </div>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className='p-1.5 rounded-lg text-muted-foreground hover:text-primary transition-colors focus:outline-none'
                aria-label='Cerrar menú'
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation List */}
            <div className='flex flex-col space-y-3'>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsDrawerOpen(false)}
                  className='px-4 py-3 rounded-xl font-medium text-muted-foreground hover:text-primary hover:bg-muted/10 transition-all duration-200 text-lg'
                >
                  {item.label}
                </a>
              ))}
              <a
                href='#contacto'
                onClick={() => setIsDrawerOpen(false)}
                className='mt-4 px-4 py-3 rounded-xl font-semibold bg-brand-gradient text-primary-foreground shadow-[0_4px_15px_rgba(92,225,230,0.2)] hover:scale-[1.02] active:scale-95 text-center transition-all duration-300 block'
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Social Links & Footer Info in Drawer */}
          <div className='border-t border-border/30 pt-6'>
            <div className='flex justify-center gap-3 mb-4'>
              {SOCIAL_LINKS.map((social, index) => (
                <a
                  key={index}
                  href={social.href || '#'}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2.5 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-black transition-all duration-300'
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <p className='text-center text-xs text-muted-foreground'>
              Armando Rivas | rivascode.dev
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
