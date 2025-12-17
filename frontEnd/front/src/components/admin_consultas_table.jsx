"use client";

import FiltrosYBusqueda from "@/components/FiltrosYBusqueda-Consultas";
import TarjetasEstadisticas from "@/components/TarjetasEstadisticas-Consultas";
import TablaConsultas from "@/components/TablaConsultas-Consultas";
import ConsultaDetalleModal from "@/components/ConsultaDetalleModal-Consultas";
import ConsultaEliminarModal from "@/components/ConsultaEliminarModal-Consultas";

import { useState } from "react";
import { toast } from "./ToastContainer";
import {
  delConsulta,
  putRespuesta,
  putResuelta,
} from "@/app/routes/consultas.routes";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function AdminConsultasTable({ data }) {
  const [consultasVisibles, setConsultasVisibles] = useState(data);

  const [consultaSeleccionada, setConsultaSeleccionada] = useState(null);
  const [consultaAEliminar, setConsultaAEliminar] = useState(null);
  const [filtroActual, setFiltroActual] = useState("Todas");
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const totalConsultas = consultasVisibles.length;

  const router = useRouter();
  const { accessToken } = useAuth();

  const handlerRespuesta = async (idConsulta, mensajeTexto) => {
    if (!accessToken) {
      toast("error", "Sesión Expirada", "Su sesión ha expirado. Redirigiendo.");
      router.push("/");
      return;
    }

    try {
      const laRespuesta = await putRespuesta(
        idConsulta,
        mensajeTexto,
        accessToken
      );

      if (laRespuesta.success) {
        const nuevasConsultas = consultasVisibles.map((c) => {
          if (c.id === idConsulta) {
            return { ...c, respuesta: mensajeTexto, leido: true };
          }
          return c;
        });

        setConsultasVisibles(nuevasConsultas);
        setConsultaSeleccionada(null);
        toast("success", "Éxito", "Respuesta actualizada.");
      } else {
        console.log("Error al actualizar la respuesta:", laRespuesta);
        toast("error", "Error", "No se pudo actualizar la respuesta.");
        setConsultaSeleccionada(null);
      }
    } catch (error) {
      console.error("Error al actualizar la respuesta:", error);
      toast("error", "Error", "No se pudo actualizar la respuesta.");
    }
  };

  const handleMarcarResuelta = async (consultaAActualizar) => {
    if (!accessToken) {
      toast("error", "Sesión Expirada", "Su sesión ha expirado. Redirigiendo.");
      router.push("/");
      return;
    }

    try {
      const esResuelta = await putResuelta(consultaAActualizar.id, accessToken);

      if (esResuelta.success) {
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
          onMarcarResuelta={handleMarcarResuelta}
          onResponder={(texto) =>
            handlerRespuesta(consultaSeleccionada.id, texto)
          }
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
