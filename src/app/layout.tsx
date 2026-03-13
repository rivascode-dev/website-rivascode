import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MuiRootProvider from '@/providers/MuiRootProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title:
    'rivascode.dev | Soluciones de Software a Medida & Integración de IA Generativa.',
  description:
    'Portafolio profesional de rivascode.dev - Especialista en potenciar negocios mediante la creación de aplicaciones web escalables.',
  icons: {
    icon: '/assets/logos/logo-rivascode.png',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'rivascode.dev | Soluciones de Software a Medida & Integración de IA Generativa.',
    description:
      'Portafolio profesional de rivascode.dev - Especialista en potenciar negocios mediante la creación de aplicaciones web escalables.',
    images: ['/assets/logos/logo-rivascode.png'],
  },
  openGraph: {
    title:
      'rivascode.dev | Soluciones de Software a Medida & Integración de IA Generativa.',
    description:
      'Portafolio profesional de rivascode.dev - Especialista en potenciar negocios mediante la creación de aplicaciones web escalables.',
    images: ['/assets/logos/logo-rivascode.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body className={inter.variable}>
        <MuiRootProvider>{children}</MuiRootProvider>
      </body>
    </html>
  );
}
