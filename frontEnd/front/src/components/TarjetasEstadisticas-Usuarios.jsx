import { Users, UserCheck, UserPlus, UserX } from "lucide-react";

export function TarjetasEstadisticas_Usuarios({ totales }) {
  const lastarjetas = [
    {
      label: "Total Usuarios",
      value: `${totales}`,
      icon: Users,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      label: "Usuarios Activos",
      value: "1,089",
      icon: UserCheck,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      label: "Nuevos Este Mes",
      value: "89",
      icon: UserPlus,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      label: "Usuarios Inactivos",
      value: "158",
      icon: UserX,
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {lastarjetas.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-lg p-6 shadow-sm border"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
            <div
              className={`w-12 h-12 flex items-center justify-center ${stat.bgColor} rounded-lg`}
            >
              <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
