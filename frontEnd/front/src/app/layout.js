import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Papelería SOFIA - Tu espacio para útiles escolares',
  description: 'Tu nuevo espacio para encontrar útiles escolares, promociones y servicios de impresión y encuadernación.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      
         <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* Added precedence="default" to stylesheet links */}
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" precedence="default" />
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" precedence="default" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css" precedence="default" />

      </head>

      {/* Enlaces a fuentes y iconos colocados directamente en <html> con precedence */}
      {/* Next.js App Router maneja el <head> basado en metadata y elementos aquí */}
     
      <body className={inter.className}> {/* La clase de la fuente Inter se aplica al body */}
        {children} {/* Aquí se renderiza el contenido de las páginas (como page.js) */}
      </body>
    </html>
  );
}
