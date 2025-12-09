"use client";

import { Search } from "lucide-react";

const botonesFiltro = [
  { etiqueta: "Todas", valor: "Todas" },
  { etiqueta: "Pendientes", valor: "Pendientes" },
  { etiqueta: "Respondidas", valor: "Respondidas" },
];

export default function FiltrosYBusqueda({
  filtroActual,
  setFiltroActual,
  terminoBusqueda,
  setTerminoBusqueda,
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
      <div className="flex items-center space-x-4">
        {botonesFiltro.map((boton) => (
          <button
            key={boton.valor}
            onClick={() => setFiltroActual(boton.valor)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              filtroActual === boton.valor
                ? "bg-[#57b5e7] text-white hover:bg-[#57b5e7]/90"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {boton.etiqueta}
          </button>
        ))}
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar consultas..."
          value={terminoBusqueda}
          onChange={(e) => setTerminoBusqueda(e.target.value)}
          className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#57b5e7]"
        />
      </div>
    </div>
  );
}
