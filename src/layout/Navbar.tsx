'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Stack,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';
import { Menu, X } from 'lucide-react';
import { socialLinks } from '@/data/contact';
import Image from 'next/image';
import { alpha } from '@mui/material/styles';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Tecnologías', href: '#tecnologias' },
  ];

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 280,
        height: '100%',
        backgroundColor: '#0b0b0b',
        color: 'white',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
      }}
      role='presentation'
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Image
          src='/assets/logos/logo-rivascode-small.png'
          alt='rivascode.dev logo'
          width={150}
          height={26}
          style={{ objectFit: 'contain' }}
        />
        <IconButton onClick={toggleDrawer(false)} sx={{ color: 'white' }}>
          <X size={24} />
        </IconButton>
      </Box>

      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component='a'
              href={item.href}
              onClick={toggleDrawer(false)}
              sx={{ py: 1.5, borderRadius: 2, mb: 1 }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontWeight: 600, fontSize: '1.1rem' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <Button
            fullWidth
            variant='contained'
            color='primary'
            href='#contacto'
            onClick={toggleDrawer(false)}
            sx={{ py: 1.2, mt: 2 }}
          >
            Contacto
          </Button>
        </ListItem>
      </List>

      <Divider sx={{ my: 3, borderColor: alpha('#fff', 0.1) }} />

      <Stack direction='row' spacing={2} justifyContent='center' sx={{ mb: 2 }}>
        {socialLinks.map((social, index) => (
          <IconButton
            key={index}
            color='primary'
            href={social.href}
            target='_blank'
            sx={{
              backgroundColor: alpha('#5ce1e6', 0.1),
              '&:hover': {
                backgroundColor: 'primary.main',
                color: '#fff',
              },
            }}
          >
            <social.icon size={20} />
          </IconButton>
        ))}
      </Stack>
      <Box sx={{ textAlign: 'center' }}>
        <ListItemText
          secondary='rivascode.dev'
          secondaryTypographyProps={{ variant: 'caption', color: 'text.secondary' }}
        />
      </Box>
    </Box>
  );

  return (
    <AppBar
      position='sticky'
      top={0}
      color='transparent'
      elevation={0}
      sx={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(11, 11, 11, 0.7)',
        borderBottom: '1px solid',
        borderColor: 'divider',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth='lg'>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box
            component='a'
            href='#hero'
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none' }}
          >
            <Image
              src='/assets/logos/logo-rivascode-small.png'
              alt='rivascode.dev logo'
              width={200}
              height={35}
              style={{ objectFit: 'contain' }}
            />
          </Box>

          {/* Desktop Navigation */}
          <Stack
            direction='row'
            spacing={1}
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                variant='text'
                color='inherit'
                sx={{ fontWeight: 500 }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant='contained'
              color='primary'
              href='#contacto'
              sx={{ ml: 2 }}
            >
              Contacto
            </Button>
          </Stack>

          {/* Mobile Menu Icon */}
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={toggleDrawer(true)}
            sx={{ display: { md: 'none' } }}
          >
            <Menu size={28} />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor='right'
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
