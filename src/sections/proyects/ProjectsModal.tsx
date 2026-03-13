'use client';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Stack,
  Button,
} from '@mui/material';
import { X, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../../data/projects';

interface ProyectsModalProps {
  open: boolean;
  onClose: () => void;
  category: 'App' | 'Website' | null;
}

const ProyectsModal = ({ open, onClose, category }: ProyectsModalProps) => {
  const filteredProjects = PROJECTS.filter((p) => p.category === category);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth='md'
      scroll='paper'
      PaperProps={{
        sx: { borderRadius: 4 },
      }}
    >
      <DialogTitle
        sx={{
          m: 0,
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant='h5' component='span' sx={{ fontWeight: 700 }}>
          Proyectos: {category === 'App' ? 'Aplicaciones' : 'Websites'}
        </Typography>
        <IconButton onClick={onClose} color='inherit'>
          <X size={24} />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ p: 3 }}>
        <Grid container spacing={3}>
          {filteredProjects.map((project) => (
            <Grid key={project.id} size={{ xs: 12, sm: 6 }}>
              <Card variant='outlined'>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component='img'
                    height='240'
                    image={project.image}
                    alt={project.title}
                    sx={{ backgroundColor: 'grey.100' }}
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant='h6' component='div'>
                    {project.title}
                  </Typography>
                  <Typography
                    variant='body2'
                    color='text.secondary'
                    sx={{ mb: 2 }}
                  >
                    {project.description}
                  </Typography>
                  <Stack
                    direction='row'
                    spacing={1}
                    flexWrap='wrap'
                    useFlexGap
                    sx={{ mb: 2 }}
                  >
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size='small'
                        variant='outlined'
                      />
                    ))}
                  </Stack>
                  <Button
                    variant='text'
                    component='a'
                    endIcon={<ExternalLink size={16} />}
                    href={project.link || '#'}
                    target='_blank'
                    size='small'
                  >
                    Ver detalle
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ProyectsModal;
