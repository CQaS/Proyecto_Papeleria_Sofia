"use client";

export default function TarjetasEstadisticas_Consultas({
  totales,
  totalPendientes,
  totalResueltas,
  totalSinleer,
}) {
  const estadisticas = [
    {
      titulo: "Total Consultas",
      valor: `${totales}`,
      color: "blue",
      icons: "ri-question-line",
    },
    {
      titulo: "Pendientes",
      valor: `${totalPendientes}`,
      color: "orange",
      icons: "ri-time-line",
    },
    {
      titulo: "Respondidas",
      valor: `${totalResueltas}`,
      color: "green",
      icons: "ri-check-line",
    },
    {
      titulo: "Sin Leer",
      valor: `${totalSinleer}`,
      color: "purple",
      icons: "ri-timer-line",
    },
  ];

  const colores = {
    blue: { bg: "bg-blue-100", icon: "text-blue-600" },
    orange: { bg: "bg-orange-100", icon: "text-orange-600" },
    green: { bg: "bg-green-100", icon: "text-green-600" },
    purple: { bg: "bg-purple-100", icon: "text-purple-600" },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {estadisticas.map((setStyle) => (
        <div
          key={setStyle.titulo}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                {setStyle.titulo}
              </p>
              <p
                className={`text-2xl font-bold ${colores[setStyle.color].icon}`}
              >
                {setStyle.valor}
              </p>
            </div>
            <div
              className={`w-12 h-12 ${
                colores[setStyle.color].bg
              } rounded-lg flex items-center justify-center`}
            >
              <i
                className={`${setStyle.icons} text-${setStyle.color}-600 text-xl`}
              ></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
