"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-4">
          {/* Ícono de lápiz girando */}
          <svg
            className="animate-spin w-full h-full text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 20.7L7.3 17.3M12 3v2m-9 7h2m14 0h2m-7 7v2M6.3 6.3l1.4 1.4M17.3 17.3l1.4 1.4M6.3 17.3l1.4-1.4M17.3 6.3l1.4 1.4" />
          </svg>
          {/* Cuaderno estilizado */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-16 bg-yellow-200 rounded-md shadow-md transform rotate-12"></div>
            <div className="w-12 h-16 bg-pink-200 rounded-md shadow-md transform -rotate-12"></div>
          </div>
        </div>
        <h2 className="text-2xl font-['Pacifico'] text-blue-700">
          Preparando tu papelería{dots}
        </h2>
        <p className="text-gray-600">Cargando colores y creatividad...</p>
      </div>
    </div>
  );
}
