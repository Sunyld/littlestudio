import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import { Toaster } from 'sonner';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Little Studio - Estúdio de Fotografia Profissional',
  description: 'Portfólio de fotografia profissional. Capturando momentos únicos com elegância e criatividade.',
  openGraph: {
    title: 'Little Studio - Estúdio de Fotografia Profissional',
    description: 'Portfólio de fotografia profissional. Capturando momentos únicos com elegância e criatividade.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <SmoothScroll>
          <CustomCursor />
          <Navigation />
          {children}
          <Toaster position="top-center" theme="dark" />
        </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
