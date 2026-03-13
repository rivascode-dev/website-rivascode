import Hero from '@/sections/hero/Hero';
import Proyects from '@/sections/proyects/Proyects';
import Technologies from '@/sections/technologies/Technologies';
import Solutions from '@/sections/solutions/Solutions';
import Contact from '@/sections/contact/Contact';
import { Box } from '@mui/material';

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
