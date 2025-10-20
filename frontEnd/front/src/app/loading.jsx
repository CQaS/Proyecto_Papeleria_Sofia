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
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-16 bg-yellow-200 rounded-md shadow-md animate-bounce"></div>
            <div className="w-12 h-16 bg-pink-200 rounded-md shadow-md animate-bounce delay-150 ml-2"></div>
            <div className="w-12 h-16 bg-blue-200 rounded-md shadow-md animate-bounce delay-300 ml-2"></div>
          </div>
        </div>
        <h2 className="text-2xl font-['Pacifico'] text-primary">
          Preparando tu papelería{dots}
        </h2>
        <p className="text-gray-600">Cargando colores y creatividad...</p>
      </div>
    </div>
  );
}
