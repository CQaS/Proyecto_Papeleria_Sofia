"use client";

import FiltrosYBusqueda from "@/components/FiltrosYBusqueda-Consultas";
import TarjetasEstadisticas from "@/components/TarjetasEstadisticas-Consultas";
import TablaConsultas from "@/components/TablaConsultas-Consultas";
import ConsultaDetalleModal from "@/components/ConsultaDetalleModal-Consultas";
import ConsultaEliminarModal from "@/components/ConsultaEliminarModal-Consultas";

import { useState } from "react";
import { toast } from "./ToastContainer";
import { delConsulta, putResuelta } from "@/app/routes/consultas.routes";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function AdminConsultasTable({ data }) {
  const [consultasVisibles, setConsultasVisibles] = useState(data);

  const [consultaSeleccionada, setConsultaSeleccionada] = useState(null);
  const [consultaAEliminar, setConsultaAEliminar] = useState(null);
  const [filtroActual, setFiltroActual] = useState("Todas");
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [respuesta, setRespuesta] = useState("");
  const totalConsultas = consultasVisibles.length;

  const router = useRouter();
  const { accessToken } = useAuth();

  const handleMarcarResuelta = async (consultaAActualizar) => {
    if (!accessToken) {
      toast("error", "Sesión Expirada", "Su sesión ha expirado. Redirigiendo.");
      router.push("/");
      return;
    }

    try {
      const respuesta = await putResuelta(consultaAActualizar.id, accessToken);

      if (respuesta.success) {
        const nuevasConsultas = consultasVisibles.map((c) => {
          if (c.id === consultaAActualizar.id) {
            return { ...c, resuelto: true };
          }
          return c;
        });

        setConsultasVisibles(nuevasConsultas);

        setConsultaSeleccionada(null);
        toast(
          "success",
          "Éxito",
          `Consulta ${consultaAActualizar.id} marcada como resuelta.`
        );
      } else {
        toast("error", "Error", "No se pudo actualizar la consulta.");
        setConsultaSeleccionada(null);
      }
    } catch (error) {
      console.error("Error al marcar como resuelta:", error);
      toast("error", "Error", "No se pudo actualizar la consulta.");
    }
  };

  const handleConfirmarEliminar = async () => {
    if (!consultaAEliminar) return;

    if (!accessToken) {
      toast(
        "error",
        "Error",
        "No se pudo eliminar la consulta. Acceso denegado."
      );

      router.push("/");

      setConsultaAEliminar(null);
      return;
    }

    try {
      const eliminar = await delConsulta(consultaAEliminar.id, accessToken);
      console.log(eliminar);

      toast(
        "success",
        "Consulta Eliminada",
        "La consulta ha sido eliminada correctamente."
      );

      const nuevasConsultas = consultasVisibles.filter(
        (c) => c.id !== consultaAEliminar.id
      );

      setConsultasVisibles(nuevasConsultas);
    } catch (error) {
      toast("error", "Error", "No se pudo eliminar la consulta.");
    } finally {
      setConsultaAEliminar(null);
    }
  };

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
          consultasIniciales={consultasVisibles}
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
          onMarcarResuelta={handleMarcarResuelta}
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
          onCerrar={() => {
            setConsultaAEliminar(null);
          }}
          onConfirmar={handleConfirmarEliminar}
        />
      )}
    </div>
  );
}
