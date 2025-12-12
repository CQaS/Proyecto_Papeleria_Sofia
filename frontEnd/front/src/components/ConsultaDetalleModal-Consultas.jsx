"use client";

import { deducirEstadoConsulta } from "@/app/lib/utils";
import { X } from "lucide-react";

const formatearFecha = (isoString) => {
  if (!isoString) return "";
  try {
    const date = new Date(isoString);
    // Retorna la fecha usando el formato local del navegador
    return date.toLocaleDateString();
  } catch (error) {
    console.error("Error formateando fecha:", isoString, error);
    return "Fecha inválida";
  }
};

const formatearHora = (isoString) => {
  if (!isoString) return "";
  try {
    const date = new Date(isoString);
    // Retorna la hora con minutos y segundos (formato local)
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  } catch (error) {
    console.error("Error formateando hora:", isoString, error);
    return "Hora inválida";
  }
};

export default function ConsultaDetalleModal({
  consulta,
  respuesta,
  setRespuesta,
  onMarcarResuelta,
  onCerrar,
  onEliminar,
}) {

  const handleSeraResuelta = () => {
    onMarcarResuelta(consulta);
  };

  const estadoInfo = deducirEstadoConsulta(consulta);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-screen overflow-y-auto">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            Detalle de Consulta
          </h3>
          <button
            onClick={onCerrar}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Columna izquierda: mensaje y respuesta */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">
                  CONSULTA ORIGINAL
                </h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-900 mb-3">{consulta.mensaje}</p>
                  <p className="text-sm text-gray-500">
                    Enviado el {formatearFecha(consulta.creadoEn)}, a las{" "}
                    {formatearHora(consulta.creadoEn)}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">
                  RESPONDER
                </h4>
                <textarea
                  value={respuesta}
                  onChange={(e) => setRespuesta(e.target.value)}
                  className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#57b5e7]"
                  placeholder="Escriba su respuesta aquí..."
                />
              </div>

              <div className="flex gap-3">
                <button className="px-6 py-2 bg-[#57b5e7] text-white rounded-lg hover:bg-[#57b5e7]/90">
                  Enviar Respuesta
                </button>
                <button onClick={handleSeraResuelta} className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Marcar como Resuelta
                </button>
                <button
                  onClick={onEliminar}
                  className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Eliminar Consulta
                </button>
              </div>
            </div>

            {/* Columna derecha: info cliente */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500 mb-3">
                  INFORMACIÓN DEL CLIENTE
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500">Nombre:</span>{" "}
                    <strong>{consulta.nombre}</strong>
                  </div>
                  <div>
                    <span className="text-gray-500">Email:</span>{" "}
                    <strong>{consulta.email}</strong>
                  </div>
                  <div>
                    <span className="text-gray-500">Teléfono:</span>{" "}
                    <strong>{consulta.telefono}</strong>
                  </div>
                  <div>
                    <span className="text-gray-500">Estado:</span>{" "}
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${estadoInfo.clases}`}
                    >
                      {estadoInfo.estado}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">ID:</span>{" "}
                    <strong>{consulta.id}</strong>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500 mb-3">
                  HISTORIAL
                </h4>
                <p className="text-sm text-gray-600">
                  No hay respuestas anteriores para esta consulta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
