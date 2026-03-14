import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MuiRootProvider from '@/providers/MuiRootProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Armando Rivas | rivascode.dev - Soluciones de Software e IA',
  description:
    'Portafolio profesional de Armando Rivas - Especialista en potenciar negocios mediante la creación de aplicaciones web escalables.',
  icons: {
    icon: '/assets/logos/logo-rivascode-cuadrado-small.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Armando Rivas | rivascode.dev - Soluciones de Software e IA',
    description:
      'Portafolio profesional de Armando Rivas - Especialista en potenciar negocios mediante la creación de aplicaciones web escalables.',
    images: ['/assets/logos/logo-rivascode-cuadrado-small.png'],
  },
  openGraph: {
    title: 'Armando Rivas | rivascode.dev - Soluciones de Software e IA',
    description:
      'Portafolio profesional de Armando Rivas - Especialista en potenciar negocios mediante la creación de aplicaciones web escalables.',
    images: ['/assets/logos/logo-rivascode-cuadrado-small.png'],
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
