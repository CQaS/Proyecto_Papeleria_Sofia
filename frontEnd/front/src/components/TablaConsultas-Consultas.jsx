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
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {consultasFiltradas.map((consulta) => {
          const estadoInfo = deducirEstadoConsulta(consulta);

          return (
            <div
              key={consulta.id}
              className="transition-all duration-500 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-2"
            >
              <div className="mb-3">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-900">
                    #
                    {consulta.id.length > 6
                      ? `...${consulta.id.slice(-6)}`
                      : consulta.id}
                  </h3>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${estadoInfo.clases}`}
                  >
                    {estadoInfo.estado}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-2">07 Dic, 09:32</p>
                <p className="text-sm font-medium text-gray-900 client-name">
                  {consulta.nombre}
                </p>
                <p className="text-xs text-gray-500 client-email mb-2">
                  {consulta.email}
                </p>
                <p className="text-sm text-gray-700 consultation-subject line-clamp-2">
                  {consulta.mensaje}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="flex items-center justify-center h-8 w-8 bg-blue-500 text-white rounded-full transition-all duration-300 ease-in-out hover:bg-blue-600 hover:shadow-md hover:-translate-y-0.5 active:scale-95"
                  title="Ver detalles"
                  onClick={() => onVerDetalle(consulta)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </button>
                <button
                  className="flex items-center justify-center h-8 w-8 bg-red-500 text-white rounded-full transition-all duration-300 ease-in-out hover:bg-red-600 active:scale-95"
                  onClick={() => onEliminar(consulta)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
