"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-['Pacifico'] text-blue-600">
          Papelería SOFIA
        </Link>
        <nav
          className={`md:flex items-center space-x-8 ${
            isMenuOpen
              ? "flex flex-col absolute top-16 left-0 right-0 bg-white p-4 shadow-md"
              : "hidden"
          }`}
        >
          <Link
            href="/"
            className="font-medium text-gray-900 hover:text-primary transition-colors py-2 md:py-0"
          >
            Inicio
          </Link>
          <Link
            href="/productos"
            className="font-medium text-gray-600 hover:text-primary transition-colors py-2 md:py-0"
          >
            Productos y Promociones
          </Link>
          <Link
            href="#"
            className="font-medium text-gray-600 hover:text-primary transition-colors py-2 md:py-0"
          >
            Pedidos de impresión
          </Link>
        </nav>
        <button className="text-white px-4 py-2 !rounded-button font-medium hover:bg-blue-400 transition-colors duration-500 whitespace-nowrap rounded-lg bg-indigo-600 hidden md:block">
          Iniciar sesión
        </button>
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center"
          onClick={toggleMenu}
        >
          <i className="ri-menu-line ri-lg"></i>
        </button>
      </div>
    </header>
  );
}
