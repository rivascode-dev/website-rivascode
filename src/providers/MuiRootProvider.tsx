'use client';

import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import getTheme from '@/theme/theme';
import Box from '@mui/material/Box';
import Navbar from '@/layout/Navbar';
import Footer from '@/layout/Footer';

export default function MuiRootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Por ahora forzamos modo oscuro ya que el diseño es premium dark
  const theme = React.useMemo(() => getTheme('dark'), []);

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            position: 'relative',
            bgcolor: 'background.default',
            zIndex: 0,
          }}
        >
          <Box sx={{ position: 'sticky', top: 0, zIndex: 1100 }}>
            <Navbar />
          </Box>
          <Box
            component='main'
            sx={{ flexGrow: 1, position: 'relative', zIndex: 1 }}
          >
            {children}
          </Box>
          <Box
            sx={{
              px: { xs: 2, md: 4, lg: 12 },
              py: 8,
              position: 'relative',
              zIndex: 1,
              borderTop: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Footer />
          </Box>
        </Box>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
