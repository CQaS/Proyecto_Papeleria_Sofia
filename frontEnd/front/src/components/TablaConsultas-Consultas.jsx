"use client";
import { deducirEstadoConsulta } from "@/app/lib/utils";

function filtrarConsultas(consultas, filtroActual, terminoBusqueda) {
  return consultas.filter((consulta) => {
    const estadoInfo = deducirEstadoConsulta(consulta);
    const estadoDeducido = estadoInfo.estado;

    const coincideFiltro =
      filtroActual === "Todas" ||
      (filtroActual === "Pendientes" && estadoDeducido === "Pendiente") ||
      (filtroActual === "Respondidas" && estadoDeducido === "Respondida") ||
      (filtroActual === "Resueltas" && estadoDeducido === "Resuelta") ||
      (filtroActual === "Vistas" && estadoDeducido === "Vista");

    const coincideBusqueda =
      !terminoBusqueda ||
      consulta.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      consulta.email.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      consulta.mensaje.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      consulta.id.toLowerCase().includes(terminoBusqueda.toLowerCase());

    return coincideFiltro && coincideBusqueda;
  });
}

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

export default function TablaConsultas({
  consultasIniciales,
  filtroActual,
  terminoBusqueda,
  onVerDetalle,
  onEliminar,
}) {
  const consultasFiltradas = filtrarConsultas(
    consultasIniciales,
    filtroActual,
    terminoBusqueda
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          Lista de Consultas
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID / Fecha
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cliente
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mensaje
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {consultasFiltradas.map((consulta) => {
              const estadoInfo = deducirEstadoConsulta(consulta);

              return (
                <tr key={consulta.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {consulta.id}
                    </div>
                    <div className="text-sm text-gray-500">
                      {formatearFecha(consulta.creadoEn)},{" "}
                      {formatearHora(consulta.creadoEn)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {consulta.nombre}
                    </div>
                    <div className="text-sm text-gray-500">
                      {consulta.email}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {consulta.mensaje}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${estadoInfo.clases}`}
                    >
                      {estadoInfo.estado}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-4">
                    <button
                      onClick={() => onVerDetalle(consulta)}
                      className="text-[#57b5e7] hover:text-blue-700"
                    >
                      {/* Icono ojo */}
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => onEliminar(consulta)}
                      className="text-red-600 hover:text-red-800"
                    >
                      {/* Icono basura */}
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
