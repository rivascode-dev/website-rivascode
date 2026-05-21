import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/layout/Navbar';
import Footer from '@/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rivascode.dev'),
  alternates: {
    canonical: '/',
    languages: {
      'es-CL': '/es-CL',
    },
  },
  title: 'Armando Rivas | rivascode.dev - Soluciones de Software e IA',
  description:
    'Soluciones de Software a Medida e Integración de IA Generativa. Especialista en potenciar negocios mediante la creación de aplicaciones web escalables.',
  icons: {
    icon: '/assets/logos/logo-rivascode-cuadrado-small.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Armando Rivas | rivascode.dev - Soluciones de Software e IA',
    description:
      'Soluciones de Software a Medida e Integración de IA Generativa. Especialista en potenciar negocios mediante la creación de aplicaciones web escalables.',
    images: ['/assets/logos/logo-rivascode-cuadrado-small.png'],
  },
  openGraph: {
    title: 'Armando Rivas | rivascode.dev - Soluciones de Software e IA',
    description:
      'Soluciones de Software a Medida e Integración de IA Generativa. Especialista en potenciar negocios mediante la creación de aplicaciones web escalables.',
    images: ['/assets/logos/logo-rivascode-cuadrado-small.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es' className='scroll-smooth'>
      <body className={`${inter.variable} antialiased bg-background text-foreground min-h-screen flex flex-col relative`}>
        {/* Navbar sticky on top */}
        <header className='sticky top-0 z-50 w-full'>
          <Navbar />
        </header>

        {/* Main Content Area */}
        <main className='flex-grow relative z-10'>
          {children}
        </main>

        {/* Footer Area */}
        <footer className='relative z-10 w-full px-4 md:px-8 lg:px-24 py-12 border-t border-border bg-card/30 backdrop-blur-sm'>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
