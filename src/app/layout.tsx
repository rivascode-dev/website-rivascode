import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MuiRootProvider from '@/providers/MuiRootProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'rivascode.dev | Software Engineer & Digital Solutions',
  description:
    'Portafolio profesional de rivascode.dev - Innovative Tech Solutions, Apps & Websites.',
  icons: {
    icon: '/assets/logos/logo-rivascode.png',
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
