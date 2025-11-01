import { Inter } from "next/font/google";
import "@/app/globals.css";
import Headers from "../components/header";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Papelería SOFIA - Tu espacio para útiles escolares",
  description:
    "Tu nuevo espacio para encontrar útiles escolares, promociones y servicios de impresión y encuadernación.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Papelería SOFIA - Tu espacio para útiles escolares</title>
        <script src="https://cdn.tailwindcss.com/3.4.16"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css"
        />
      </head>
      <body>
        <div className="bg-white">
          {/* Header */}
          <Headers />
          {children}
          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
