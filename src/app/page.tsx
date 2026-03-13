import dynamic from 'next/dynamic';
import Hero from '@/sections/hero/Hero';
import { Box } from '@mui/material';

const Solutions = dynamic(() => import('@/sections/solutions/Solutions'), { ssr: true });
const Proyects = dynamic(() => import('@/sections/proyects/Proyects'), { ssr: true });
const Technologies = dynamic(() => import('@/sections/technologies/Technologies'), { ssr: true });
const Contact = dynamic(() => import('@/sections/contact/Contact'), { ssr: true });

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
