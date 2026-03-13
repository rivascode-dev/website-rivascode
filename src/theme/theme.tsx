'use client';

import { createTheme, alpha } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// colores de la marca
// degradado lineal de #8c52ff a #5ce1e6
// brand #5ce1e6

export const brandColor = '#5ce1e6';
export const brandGradient = 'linear-gradient(to right, #8c52ff, #5ce1e6)';

export const brand = {
  50: '#F0F7FF',
  100: '#CEE5FD',
  200: '#9CCCFC',
  300: '#55A6F6',
  400: '#0A66C2',
  500: '#0959AA',
  600: '#064079',
  700: '#033363',
  800: '#02294F',
  900: '#021F3B',
};

export const secondary = {
  50: '#F9F0FF',
  100: '#E9CEFD',
  200: '#D49CFC',
  300: '#B355F6',
  400: '#750AC2',
  500: '#6709AA',
  600: '#490679',
  700: '#3B0363',
  800: '#2F024F',
  900: '#23023B',
};

export const gray = {
  50: '#FBFCFE',
  100: '#EAF0F5',
  200: '#D6E2EB',
  300: '#BFCCD9',
  400: '#94A6B8',
  500: '#5B6B7C',
  600: '#4C5967',
  700: '#364049',
  800: '#131B20',
  900: '#090E10',
};

export const green = {
  50: '#F6FEF6',
  100: '#E3FBE3',
  200: '#C7F7C7',
  300: '#A1E8A1',
  400: '#51BC51',
  500: '#1F7A1F',
  600: '#136C13',
  700: '#0A470A',
  800: '#042F04',
  900: '#021D02',
};

const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      primary: {
        light: brand[200],
        main: brandColor, // Usamos brand color aquí
        dark: brand[800],
        contrastText: brand[50],
        ...(mode === 'dark' && {
          contrastText: brand[100],
          light: brand[300],
          main: brandColor, // Aseguramos brand color en modo oscuro
          dark: brand[800],
        }),
      },
      secondary: {
        light: secondary[300],
        main: secondary[500],
        dark: secondary[800],
        ...(mode === 'dark' && {
          light: secondary[400],
          main: secondary[500],
          dark: secondary[900],
        }),
      },
      warning: {
        main: '#F7B538',
        dark: '#F79F00',
      },
      error: {
        light: red[50],
        main: red[500],
        dark: red[700],
        ...(mode === 'dark' && {
          light: '#D32F2F',
          main: '#D32F2F',
          dark: '#B22A2A',
        }),
      },
      success: {
        light: green[300],
        main: green[400],
        dark: green[800],
        ...(mode === 'dark' && {
          light: green[400],
          main: green[500],
          dark: green[700],
        }),
      },
      grey: {
        ...gray,
      },
      divider: mode === 'dark' ? alpha(gray[600], 0.3) : alpha(gray[300], 0.5),
      background: {
        default: mode === 'dark' ? gray[900] : '#fff',
        paper: mode === 'dark' ? gray[800] : gray[50],
      },
      text: {
        primary: mode === 'dark' ? '#fff' : gray[800],
        secondary: mode === 'dark' ? gray[400] : gray[600],
      },
      action: {
        selected: alpha(brand[200], 0.2),
        ...(mode === 'dark' && {
          selected: alpha(brand[800], 0.2),
        }),
      },
    },
    typography: {
      fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      h1: {
        fontSize: '4rem',
        fontWeight: 800,
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
        '@media (max-width:600px)': {
          fontSize: '2.5rem',
        },
      },
      h2: {
        fontSize: '3rem',
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: '-0.01em',
        '@media (max-width:600px)': {
          fontSize: '2rem',
        },
      },
      h3: {
        fontSize: '2.25rem',
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h4: {
        fontSize: '1.75rem',
        fontWeight: 600,
        lineHeight: 1.2,
      },
      h5: {
        fontSize: '1.5rem',
        fontWeight: 600,
      },
      h6: {
        fontSize: '1.25rem',
        fontWeight: 600,
      },
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableTouchRipple: true,
          disableRipple: true,
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 600,
            padding: '8px 20px',
          },
          containedPrimary: {
            background: brandGradient,
            color: '#fff',
            '&:hover': {
              background: brandGradient,
              opacity: 0.9,
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 16,
            border: `1px solid ${theme.palette.divider}`,
            backgroundColor:
              theme.palette.mode === 'dark' ? alpha(gray[800], 0.6) : '#fff',
            backgroundImage: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: `0 12px 24px ${alpha(brandColor, 0.15)}`,
              borderColor: brandColor,
            },
          }),
        },
      },
      MuiTypography: {
        styleOverrides: {
        },
      },
    },
  });

export default getTheme;
