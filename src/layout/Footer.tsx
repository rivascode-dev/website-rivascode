'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  IconButton,
} from '@mui/material';
import { socialLinks } from '@/data/contact';
import Image from 'next/image';

const Footer = () => {
  return (
    <Container maxWidth='lg'>
      <Grid
        container
        spacing={4}
        justifyContent='space-between'
        alignItems='center'
      >
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ mb: 2 }}>
            <Image
              src='/assets/logos/logo-rivascode-small.png'
              alt='rivascode.dev logo'
              width={200}
              height={35}
              style={{ objectFit: 'contain' }}
            />
          </Box>
          <Typography variant='body2' color='text.secondary'>
            Transformando ideas complejas en soluciones digitales elegantes y
            eficientes.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Stack
            direction='row'
            spacing={2}
            justifyContent={{ xs: 'center', md: 'flex-end' }}
          >
            {socialLinks.map((social, index) => (
              <IconButton
                key={index}
                color='primary'
                href={social.href}
                target='_blank'
              >
                <social.icon size={20} />
              </IconButton>
            ))}
          </Stack>
        </Grid>
      </Grid>

      <Box
        sx={{
          mt: 6,
          pt: 3,
          borderTop: '1px solid',
          borderColor: 'divider',
          textAlign: 'center',
        }}
      >
        <Typography variant='caption' color='text.secondary'>
          © {new Date().getFullYear()} rivascode.dev. Todos los derechos
          reservados.
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
