import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Directorio de Iglesias',
  description: 'Plantilla escalable para directorio de iglesias.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
