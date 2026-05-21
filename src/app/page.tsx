import dynamic from 'next/dynamic';
import Hero from '@/sections/hero/Hero';
import Solutions from '@/sections/solutions/Solutions';

const Proyects = dynamic(() => import('@/sections/proyects/Proyects'), { ssr: true });
const Technologies = dynamic(() => import('@/sections/technologies/Technologies'), { ssr: true });
const Contact = dynamic(() => import('@/sections/contact/Contact'), { ssr: true });

export default function Home() {
  return (
    <div className='w-full'>
      <Hero />
      <Solutions />
      <Proyects />
      <Technologies />
      <Contact />
    </div>
  );
}
