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
import { SOLUTIONS } from '../../data/solutions';
import { motion } from 'framer-motion';
import { brandColor, brandGradient } from '../../theme/theme';

const Solutions = () => {
  return (
    <Box id='soluciones' sx={{ py: 10, backgroundColor: 'background.paper' }}>
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
            SERVICIOS
          </Typography>
          <Box>
            <Typography variant='h2' sx={{ color: 'white', display: 'block' }}>
              Soluciones
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
              Premium
            </Typography>
          </Box>
          <Typography
            variant='body1'
            color='text.secondary'
            sx={{ maxWidth: 600, mt: 2 }}
          >
            Ofrezco un enfoque integral para resolver problemas complejos a
            través de la tecnología.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {SOLUTIONS.map((solution, index) => (
            <Grid key={solution.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <Card variant='outlined' sx={{ height: '100%', p: 2 }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box
                      sx={{
                        color: 'primary.main',
                        mb: 2,
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <solution.icon size={40} />
                    </Box>
                    <Typography
                      variant='h3'
                      gutterBottom
                      sx={{ fontWeight: 700, fontSize: '1.25rem' }}
                    >
                      {solution.title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {solution.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Solutions;
