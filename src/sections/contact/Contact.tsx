'use client';

import { Send } from 'lucide-react';
import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Stack,
  TextField,
  Button,
  Grid,
  Card,
  Alert,
  CircularProgress,
  IconButton,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { brandColor, brandGradient } from '../../theme/theme';
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
    formState: { errors, isSubmitting },
  } = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      nombre: '',
      email: '',
      mensaje: '',
      fax: '',
    },
  });

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
    <Box id='contacto' sx={{ py: 10 }}>
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
            CONTACTO
          </Typography>
          <Box>
            <Typography variant='h2' sx={{ color: 'white', display: 'block' }}>
              Hablemos de
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
              tu Proyecto
            </Typography>
          </Box>
          <Typography
            variant='body1'
            color='text.secondary'
            sx={{ maxWidth: 600, mt: 2 }}
          >
            ¿Tienes un proyecto en mente? Ponte en contacto conmigo y hagámoslo
            realidad.
          </Typography>
        </Stack>

        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={4}>
              <Typography variant='h4' sx={{ mb: 2 }}>
                Información de Contacto
              </Typography>
              {CONTACT_INFO.map((info) => (
                <Stack
                  key={info.id}
                  direction='row'
                  spacing={2}
                  alignItems='center'
                >
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      backgroundColor: alpha('#5ce1e6', 0.1),
                      color: 'primary.main',
                    }}
                  >
                    <info.icon size={24} />
                  </Box>
                  <Box>
                    <Typography variant='subtitle2' color='text.secondary'>
                      {info.label}
                    </Typography>
                    <Typography variant='body1' sx={{ fontWeight: 600 }}>
                      {info.value}
                    </Typography>
                  </Box>
                </Stack>
              ))}

              <Stack direction='row' spacing={2}>
                {SOCIAL_LINKS.map((social, index) => (
                  <IconButton
                    key={index}
                    color='primary'
                    component='a'
                    href={social.href || '#'}
                    target='_blank'
                    sx={{
                      backgroundColor: alpha('#5ce1e6', 0.1),
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: '#fff',
                      },
                    }}
                  >
                    <social.icon size={22} />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Card variant='outlined' sx={{ p: 4 }}>
              {alertInfo && (
                <Alert severity={alertInfo.type} sx={{ mb: 3 }}>
                  {alertInfo.message}
                </Alert>
              )}

              <Box
                component='form'
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <Stack spacing={3}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        {...register('nombre')}
                        label='Nombre'
                        variant='outlined'
                        error={!!errors.nombre}
                        helperText={errors.nombre?.message}
                        disabled={isSubmitting}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        {...register('email')}
                        label='Email'
                        variant='outlined'
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        disabled={isSubmitting}
                      />
                    </Grid>
                  </Grid>

                  {/* Honeypot field - hidden from humans */}
                  <TextField
                    {...register('fax')}
                    autoComplete='off'
                    style={{
                      display: 'none',
                      position: 'absolute',
                      left: '-5000px',
                    }}
                    tabIndex={-1}
                    aria-hidden='true'
                  />

                  <TextField
                    fullWidth
                    {...register('mensaje')}
                    label='Mensaje'
                    variant='outlined'
                    multiline
                    rows={4}
                    error={!!errors.mensaje}
                    helperText={errors.mensaje?.message}
                    disabled={isSubmitting}
                  />
                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    size='large'
                    endIcon={
                      isSubmitting ? (
                        <CircularProgress size={18} color='inherit' />
                      ) : (
                        <Send size={18} />
                      )
                    }
                    sx={{ py: 1.5 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </Button>
                </Stack>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
