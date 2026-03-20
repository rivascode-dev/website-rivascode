'use client';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { brandGradient } from '../../theme/theme';
import NetworkBackground from '../../components/NetworkBackground';

const Hero = () => {
  return (
    <Box
      id='hero'
      sx={{
        width: '100%',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 12, md: 0 },
        '&:hover canvas': { opacity: 1 }, // Subtle visual feedback
      }}
    >
      <NetworkBackground />

      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={4} alignItems='flex-start' sx={{ maxWidth: '700px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Typography variant='h1' sx={{ color: 'white' }}>
              Transformando ideas
            </Typography>
            <Typography
              variant='h1'
              gutterBottom
              sx={{
                background: brandGradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}
            >
              en realidades digitales
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <Typography
              variant='body1'
              color='text.secondary'
              sx={{ fontSize: '1.25rem', lineHeight: 1.6 }}
            >
              Soluciones de Software a Medida e Integración de IA Generativa.
              Especialista en potenciar negocios mediante la creación de
              aplicaciones web escalables.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant='contained'
                color='primary'
                size='large'
                href='#proyectos'
              >
                Ver Proyectos
              </Button>
              <Button
                variant='outlined'
                color='primary'
                size='large'
                href='#contacto'
                //sx={{ borderRadius: 8 }}
              >
                Contáctame
              </Button>
            </Stack>
          </motion.div>
        </Stack>
      </Container>

      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(92,225,230,0.1) 0%, rgba(140,82,255,0.05) 50%, transparent 100%)',
          zIndex: -1,
        }}
      />
    </Box>
  );
};

export default Hero;
