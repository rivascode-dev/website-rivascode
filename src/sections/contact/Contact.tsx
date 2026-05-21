'use client';

import { Send, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { emailSchema, type EmailFormValues } from '@/schemas/emailSchema';
import { sendEmail } from '@/actions/sendEmail';
import { SOCIAL_LINKS, CONTACT_INFO } from '@/data/contact';

const Contact = () => {
  const [alertInfo, setAlertInfo] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      nombre: '',
      email: '',
      mensaje: '',
      fax: '',
      startTime: Date.now().toString(),
      interactionToken: '',
    },
  });

  const handleInteraction = () => {
    setValue('interactionToken', 'human_verified_' + Math.random().toString(36).substring(2, 15));
  };

  const onSubmit = async (data: EmailFormValues) => {
    setAlertInfo(null);

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const result = await sendEmail(null, formData);

      if (result.success) {
        setAlertInfo({ type: 'success', message: result.message });
        reset();
      } else {
        setAlertInfo({ type: 'error', message: result.message });
      }
    } catch (error) {
      console.error(error);
      setAlertInfo({
        type: 'error',
        message: 'Ocurrió un error inesperado al enviar el mensaje.',
      });
    }
  };

  return (
    <section id='contacto' className='py-20 md:py-28 relative overflow-hidden'>
      {/* Background glow effects */}
      <div className='absolute bottom-[-10%] right-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none' />

      <div className='max-w-7xl mx-auto px-6 md:px-8 lg:px-12'>
        {/* Section Header */}
        <div className='flex flex-col gap-3 mb-16 text-left max-w-2xl'>
          <span className='text-sm font-extrabold tracking-[0.2em] text-primary uppercase'>
            CONTACTO
          </span>
          <div>
            <h2 className='text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight inline-block mr-2.5'>
              Hablemos de
            </h2>
            <h2 className='text-3xl md:text-5xl font-extrabold text-brand-gradient tracking-tight leading-tight inline-block'>
              tu Proyecto
            </h2>
          </div>
          <p className='text-muted-foreground mt-4 text-base md:text-lg leading-relaxed'>
            ¿Tienes un proyecto interesante, una idea innovadora o buscas integrar Inteligencia Artificial en tu negocio? Ponte en contacto y construyamos el futuro hoy.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
          {/* Left Column: Contact info & Socials */}
          <div className='lg:col-span-5 flex flex-col gap-10'>
            <div>
              <h3 className='text-xl sm:text-2xl font-bold text-white mb-6 tracking-tight'>
                Información de Contacto
              </h3>
              
              <div className='flex flex-col gap-6'>
                {CONTACT_INFO.map((info) => (
                  <div
                    key={info.id}
                    className='flex items-center gap-4 group'
                  >
                    <div className='p-3.5 rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_rgba(92,225,230,0.2)]'>
                      <info.icon size={22} className='stroke-[1.75]' />
                    </div>
                    <div>
                      <span className='block text-xs font-semibold text-muted-foreground tracking-wider uppercase'>
                        {info.label}
                      </span>
                      {info.href ? (
                        <a
                          href={info.href}
                          className='text-base font-bold text-white hover:text-primary transition-colors duration-200'
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className='text-base font-bold text-white'>
                          {info.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links row */}
            <div className='flex flex-col gap-4 pt-6 border-t border-border/30'>
              <h4 className='text-sm font-semibold text-muted-foreground tracking-wide'>
                Mis Redes
              </h4>
              <div className='flex gap-3'>
                {SOCIAL_LINKS.map((social, index) => (
                  <a
                    key={index}
                    href={social.href || '#'}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-3.5 rounded-xl border border-border bg-card/40 text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-[0_0_15px_rgba(92,225,230,0.15)] transition-all duration-300'
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form */}
          <div className='lg:col-span-7'>
            <div className='p-6 sm:p-10 rounded-3xl bg-glass-card border border-border/50 shadow-xl relative'>
              
              {/* Alert block */}
              {alertInfo && (
                <div
                  className={`mb-6 p-4 rounded-xl text-sm font-semibold border ${
                    alertInfo.type === 'success'
                      ? 'bg-green-500/10 border-green-500/30 text-green-400'
                      : 'bg-red-500/10 border-red-500/30 text-red-400'
                  }`}
                >
                  {alertInfo.message}
                </div>
              )}

              <form
                onSubmit={handleSubmit(onSubmit)}
                onFocusCapture={handleInteraction}
                onKeyDownCapture={handleInteraction}
                noValidate
                className='flex flex-col gap-6'
              >
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  {/* Name Input */}
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='nombre' className='text-xs font-bold tracking-wider text-muted-foreground uppercase'>
                      Nombre
                    </label>
                    <input
                      id='nombre'
                      type='text'
                      disabled={isSubmitting}
                      placeholder='Tu nombre completo'
                      className={`w-full px-4 py-3 rounded-xl bg-muted/20 border border-border/60 text-white placeholder-muted-foreground/60 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/80 disabled:opacity-50 ${
                        errors.nombre ? 'border-red-500/80 focus:ring-red-500/20' : ''
                      }`}
                      {...register('nombre')}
                    />
                    {errors.nombre && (
                      <span className='text-red-400 text-xs font-semibold mt-1'>{errors.nombre.message}</span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='email' className='text-xs font-bold tracking-wider text-muted-foreground uppercase'>
                      Email
                    </label>
                    <input
                      id='email'
                      type='email'
                      disabled={isSubmitting}
                      placeholder='ejemplo@correo.com'
                      className={`w-full px-4 py-3 rounded-xl bg-muted/20 border border-border/60 text-white placeholder-muted-foreground/60 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/80 disabled:opacity-50 ${
                        errors.email ? 'border-red-500/80 focus:ring-red-500/20' : ''
                      }`}
                      {...register('email')}
                    />
                    {errors.email && (
                      <span className='text-red-400 text-xs font-semibold mt-1'>{errors.email.message}</span>
                    )}
                  </div>
                </div>

                {/* Honeypot field (hidden from humans) */}
                <input
                  type='text'
                  {...register('fax')}
                  autoComplete='off'
                  tabIndex={-1}
                  aria-hidden='true'
                  className='hidden absolute left-[-5000px]'
                />

                {/* Time-based Honeypot */}
                <input type='hidden' {...register('startTime')} />

                {/* Human interaction token */}
                <input type='hidden' {...register('interactionToken')} />

                {/* Message Textarea */}
                <div className='flex flex-col gap-2'>
                  <label htmlFor='mensaje' className='text-xs font-bold tracking-wider text-muted-foreground uppercase'>
                    Mensaje
                  </label>
                  <textarea
                    id='mensaje'
                    rows={5}
                    disabled={isSubmitting}
                    placeholder='Cuéntame sobre tu proyecto o idea...'
                    className={`w-full px-4 py-3 rounded-xl bg-muted/20 border border-border/60 text-white placeholder-muted-foreground/60 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/80 disabled:opacity-50 resize-none ${
                      errors.mensaje ? 'border-red-500/80 focus:ring-red-500/20' : ''
                    }`}
                    {...register('mensaje')}
                  />
                  {errors.mensaje && (
                    <span className='text-red-400 text-xs font-semibold mt-1'>{errors.mensaje.message}</span>
                  )}
                </div>

                {/* Submit button with loader */}
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full py-4 rounded-xl font-semibold bg-brand-gradient text-primary-foreground flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_4px_15px_rgba(92,225,230,0.25)] hover:shadow-[0_4px_25px_rgba(140,82,255,0.4)] disabled:opacity-50 disabled:pointer-events-none text-base cursor-pointer'
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className='animate-spin' /> Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje <Send size={16} />
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
