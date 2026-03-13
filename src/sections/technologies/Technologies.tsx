'use client';

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import { TECHNOLOGIES } from '../../data/technologies';
import { brandColor, brandGradient } from '../../theme/theme';

// Import icons as requested
import {
  SiReact,
  SiNextdotjs,
  SiMui,
  SiLangchain,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiGit,
} from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';

const iconMap: Record<string, { icon: React.ReactNode; color: string }> = {
  react: { icon: <SiReact size={40} />, color: '#61DAFB' },
  nextjs: { icon: <SiNextdotjs size={40} />, color: '#FFFFFF' },
  typescript: { icon: <SiTypescript size={40} />, color: '#3178C6' },
  javascript: { icon: <SiJavascript size={40} />, color: '#F7DF1E' },
  mui: { icon: <SiMui size={40} />, color: '#007FFF' },
  nodejs: { icon: <SiNodedotjs size={40} />, color: '#339933' },
  langchain: { icon: <SiLangchain size={40} />, color: '#1C3C3C' },
  git: { icon: <SiGit size={40} />, color: '#F05032' },
  github: { icon: <FaGithub size={40} />, color: '#FFFFFF' },
};

const Technologies = () => {
  return (
    <Box id='tecnologias' sx={{ py: 10, backgroundColor: 'background.paper' }}>
      <Container maxWidth='lg'>
        <Stack
          spacing={1}
          sx={{ mb: 8, textAlign: 'left', alignItems: 'flex-start' }}
        >
          <Typography
            variant='overline'
            sx={{
              color: brandColor,
              fontWeight: 800,
              letterSpacing: '0.2em',
              fontSize: '0.9rem',
            }}
          >
            INFRAESTRUCTURA
          </Typography>
          <Box>
            <Typography variant='h2' sx={{ color: 'white', display: 'block' }}>
              Stack
            </Typography>
            <Typography
              variant='h2'
              sx={{
                background: brandGradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                fontWeight: 800,
              }}
            >
              Tecnológico
            </Typography>
          </Box>
          <Typography
            variant='body1'
            color='text.secondary'
            sx={{ maxWidth: 600, mt: 2 }}
          >
            Utilizo las herramientas más modernas y eficientes para garantizar
            la calidad y escalabilidad de cada proyecto.
          </Typography>
        </Stack>

        <Grid container spacing={4} justifyContent='center'>
          {TECHNOLOGIES.map((tech, index) => {
            const techData = iconMap[tech.icon || tech.name.toLowerCase()];
            return (
              <Grid key={tech.name} size={{ xs: 4, sm: 3, md: 1 }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    variant='outlined'
                    sx={{
                      aspectRatio: '1 / 1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 4,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.15)',
                        borderColor: brandColor,
                        boxShadow: `0 8px 32px ${brandColor}33`,
                        '& .tech-icon': {
                          color: techData?.color || 'primary.main',
                        },
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        p: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:last-child': { pb: 0 },
                      }}
                    >
                      <Box
                        className='tech-icon'
                        sx={{
                          color: 'text.secondary',
                          transition: 'color 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {techData?.icon || tech.name}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Technologies;
