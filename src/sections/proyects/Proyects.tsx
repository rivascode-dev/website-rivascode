'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Stack,
} from '@mui/material';
import { Monitor, AppWindow } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectsModal from './ProjectsModal';
import { brandColor, brandGradient } from '../../theme/theme';

const Proyects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<
    'App' | 'Website' | null
  >(null);

  const handleOpenModal = (category: 'App' | 'Website') => {
    setSelectedCategory(category);
    setModalOpen(true);
  };

  return (
    <Container id='proyectos' sx={{ py: 10 }}>
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
          PROYECTOS
        </Typography>
        <Box>
          <Typography variant='h2' sx={{ color: 'white', display: 'block' }}>
            Desarrollos
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
            Reales
          </Typography>
        </Box>
        <Typography
          variant='body1'
          color='text.secondary'
          sx={{ maxWidth: 600, mt: 2 }}
        >
          Explora mis trabajos más recientes divididos en aplicaciones y sitios
          web de alto impacto.
        </Typography>
      </Stack>

      <Grid container spacing={4} justifyContent='flex-start'>
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Card variant='outlined' sx={{ height: '100%' }}>
              <CardActionArea
                onClick={() => handleOpenModal('App')}
                sx={{ height: '100%', p: 4 }}
              >
                <CardContent sx={{ textAlign: 'left' }}>
                  <Box
                    sx={{
                      mb: 3,
                      color: 'primary.main',
                      display: 'flex',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <AppWindow size={64} />
                  </Box>
                  <Typography
                    variant='h3'
                    gutterBottom
                    sx={{ fontSize: '1.5rem', fontWeight: 700 }}
                  >
                    Aplicaciones
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Desarrollo de apps nativas y multiplataforma con enfoque en
                    UX y rendimiento.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Card variant='outlined' sx={{ height: '100%' }}>
              <CardActionArea
                onClick={() => handleOpenModal('Website')}
                sx={{ height: '100%', p: 4 }}
              >
                <CardContent sx={{ textAlign: 'left' }}>
                  <Box
                    sx={{
                      mb: 3,
                      color: 'primary.main',
                      display: 'flex',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <Monitor size={64} />
                  </Box>
                  <Typography
                    variant='h3'
                    gutterBottom
                    sx={{ fontSize: '1.5rem', fontWeight: 700 }}
                  >
                    Sitios Web
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Websites corporativos, landing pages e integracion de IA
                    optimizadas para SEO.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      <ProjectsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        category={selectedCategory}
      />
    </Container>
  );
};

export default Proyects;
