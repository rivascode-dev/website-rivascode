import dynamic from 'next/dynamic';
import Hero from '@/sections/hero/Hero';
import { Box } from '@mui/material';

const Solutions = dynamic(() => import('@/sections/solutions/Solutions'));
const Proyects = dynamic(() => import('@/sections/proyects/Proyects'));
const Technologies = dynamic(() => import('@/sections/technologies/Technologies'));
const Contact = dynamic(() => import('@/sections/contact/Contact'));

export default function Home() {
  return (
    <Box>
      <Hero />
      <Solutions />
      <Proyects />
      <Technologies />
      <Contact />
    </Box>
  );
}
