"use client";

import FiltrosYBusqueda from "@/components/FiltrosYBusqueda-Consultas";
import TarjetasEstadisticas from "@/components/TarjetasEstadisticas-Consultas";
import TablaConsultas from "@/components/TablaConsultas-Consultas";
import ConsultaDetalleModal from "@/components/ConsultaDetalleModal-Consultas";
import ConsultaEliminarModal from "@/components/ConsultaEliminarModal-Consultas";

import { useState } from "react";

export default function AdminConsultasTable({ data }) {
  console.log(data);
  const totalConsultas = data.length;

  const [consultaSeleccionada, setConsultaSeleccionada] = useState(null);
  const [consultaAEliminar, setConsultaAEliminar] = useState(null);
  const [filtroActual, setFiltroActual] = useState("Todas");
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [respuesta, setRespuesta] = useState("");
  const [contrasena, setContrasena] = useState("");

  return (
    <div className="min-h-screen bg-gray-50" style={{ marginTop: 6 + "em" }}>
      <main className="px-6 py-6 max-w-7xl mx-auto">
        <FiltrosYBusqueda
          filtroActual={filtroActual}
          setFiltroActual={setFiltroActual}
          terminoBusqueda={terminoBusqueda}
          setTerminoBusqueda={setTerminoBusqueda}
        />

        <TarjetasEstadisticas totales={totalConsultas} />

        <TablaConsultas
          consultasIniciales={data}
          filtroActual={filtroActual}
          terminoBusqueda={terminoBusqueda}
          onVerDetalle={setConsultaSeleccionada}
          onEliminar={setConsultaAEliminar}
        />
      </main>

      {consultaSeleccionada && (
        <ConsultaDetalleModal
          consulta={consultaSeleccionada}
          respuesta={respuesta}
          setRespuesta={setRespuesta}
          onCerrar={() => setConsultaSeleccionada(null)}
          onEliminar={() => {
            setConsultaAEliminar(consultaSeleccionada);
            setConsultaSeleccionada(null);
          }}
        />
      )}

      {consultaAEliminar && (
        <ConsultaEliminarModal
          consulta={consultaAEliminar}
          contrasena={contrasena}
          setContrasena={setContrasena}
          onCerrar={() => {
            setConsultaAEliminar(null);
            setContrasena("");
          }}
        />
      )}
    </div>
  );
}
